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
        "headline": "Nvidia's Pause Before The Next AI Wave",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4c511b8130f8e9f1e5d94408d426af5c3d2c93d0829b391f3d71e21713fb2edb",
        "datetime": 1785750368
      },
      {
        "headline": "If I Had $1,000 to Invest Today, Here's the Trillion-Dollar Stock I'd Buy Instead of SpaceX",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00b27534a35ef1e75f7fcbc04e38f47647828fcab162abde9a64246e5a9f119d",
        "datetime": 1785749700
      },
      {
        "headline": "P&G Guided Below Estimates and Sits 5% Above a 52-Week Low. I'm Not Buying It Yet, and Here's What Would Change That.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3a627a52f4c2406fa25b3ffb193aee0ee2f089467b46ee72a026ce98eccf890",
        "datetime": 1785749340
      },
      {
        "headline": "Warren Buffett's Successor, Greg Abel, Started His Tenure With a Bang by Slashing Berkshire's Chevron Stake and Making a Virtual Monopoly the New No. 5 Holding",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0dd7659df568a45fd31c256ea4026875f113877b8bb9a437bcff667274e8ee1b",
        "datetime": 1785749160
      },
      {
        "headline": "Some Investors Are Panicking About Memory Stocks. Micron Shareholders Should Keep a Cool Head.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7780293073e49446e34b4bc7b12e32047a16405fc24f8e643ffa8871b85ecc1c",
        "datetime": 1785748800
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
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
      },
      {
        "headline": "S&P 500 To 10,000 - Why, When, And How Stocks Get There",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=332c06affb02e4a84b12f7a5ebf98f8b806542277858d8efedfe6cfffece5249",
        "datetime": 1785467400
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "3 Top Tech Stocks for Long-Term Growth and Income",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8dabc12c0fc8aa040a291cbd0a1ffd61e941cf641d8f2a899588e87aec3754dc",
        "datetime": 1785664680
      },
      {
        "headline": "Billionaire Steve Cohen Is Buying This Overlooked Stock While Dumping Big Tech",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a105fcb1aa1c79f7c42bec4c28dbb7088d2f28fb67f80b9238f139eb5b0efd6",
        "datetime": 1785661440
      },
      {
        "headline": "What The Bipolar Silicon Market Structure Means Moving Forward: Nividia Vs. Broadcom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91ee972b795aeb965a3eb3e95deb4cb5c34ffb1138aa83f71e1af5935fafe876",
        "datetime": 1785593718
      },
      {
        "headline": "MarketBeat Week in Review – 07/27- 07/31",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1cc922ced795d9da440e685882a8ed10b093e94b40fc4102622ab8df73130eda",
        "datetime": 1785582000
      },
      {
        "headline": "These 3 Dividend ETFs Own Nvidia and Microsoft and Still Pay Up to 8 Percent",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=666f398b3c9903163793a2fb36e4591fd07d0216f6c1860a3081546801102cd9",
        "datetime": 1785521846
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Which S&P500 stocks are moving before the opening bell on Monday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f596a060a793d4846f0b87347ea41be3ea04c98760439bd97002638de903cd1f",
        "datetime": 1785760502
      },
      {
        "headline": "MU Stock Falls Premarket After Worst Month In 11 Years: Analysts Say Memory Demand Intact, See 85% Upside",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c9380db2411fad3e69afe5c603068cf8371d01cca7e69251900ae761aa1430f5",
        "datetime": 1785749879
      },
      {
        "headline": "Some Investors Are Panicking About Memory Stocks. Micron Shareholders Should Keep a Cool Head.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7780293073e49446e34b4bc7b12e32047a16405fc24f8e643ffa8871b85ecc1c",
        "datetime": 1785748800
      },
      {
        "headline": "Eaton: Rotating Within The AI Infrastructure Play",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4e54f940b410b040ee0fa30e46be8a40a6bc0563322bf3da615a4a039032d7d7",
        "datetime": 1785748552
      },
      {
        "headline": "Apple: Why The Price Slump Was Deserved",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0faeeacf094578dbadee74737d67c2e9edc943e24681836b2b222a3177e543eb",
        "datetime": 1785747759
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:03"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-08-04",
      "hour": "amc",
      "epsEstimate": 1.631
    },
    "news": [
      {
        "headline": "US Equity Investors to Focus on Quarterly Earnings, Nonfarm Payrolls, Iran Geopolitics This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b11d17b74a6242fbb4adb29300c127e2e3e60777041df10bff742b9ef5cdb313",
        "datetime": 1785749941
      },
      {
        "headline": "Five things to watch in markets in the week ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3e5c8d239694e308f63c9b95eacd9968ba65625576b263f47f268594dfa47c54",
        "datetime": 1785747021
      },
      {
        "headline": "AMD Reports Tuesday. One Number Decides Whether 54 Times Forward Earnings Was Ever Defensible.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6ce6de7e1a297ed095942ccaaa6537a2236ba8ac651f37ef1b4ebc85a1e09533",
        "datetime": 1785744060
      },
      {
        "headline": "Tim Cook's Farewell Note Sours While Amazon Steals The Show And Oil Snaps On Fresh Iran Talks",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=0361a8c467ed83cb6eb84d27af0974f6df4c8d5fe56edd9b1ad0d79e1aa361a6",
        "datetime": 1785741225
      },
      {
        "headline": "Dow, S&P 500, Nasdaq Futures Climb As Markets Gear Up For Another Key Earnings Week: USO, PLTR, CRML, IONQ Stocks In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a3ad1e743c11a4ac2182091fac5ec1c1e9b5874bedbcd4d0462491dc21084da",
        "datetime": 1785739846
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Eaton: Rotating Within The AI Infrastructure Play",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4e54f940b410b040ee0fa30e46be8a40a6bc0563322bf3da615a4a039032d7d7",
        "datetime": 1785748552
      },
      {
        "headline": "Buy The Situational Awareness' Selloff, Here's Why And What",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bc0876c85e6c3c51daf930df0c6478e67215e9933a8b5cae6bcffdd711452b87",
        "datetime": 1785707830
      },
      {
        "headline": "1 Beaten-Down Semiconductor Stock That Could Make a Comeback",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7531b02b97e6a7b74b417ed5bb90e5244442b8de9f7c447f10e10c2c25bea16e",
        "datetime": 1785677409
      },
      {
        "headline": "TSMC Is Reportedly Developing Advanced Chip Packaging Tech to Challenge Intel's Dominance",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bbcffad250950b0d88b01ab065fe85a7572f55c688c20f83a6625576de3ace49",
        "datetime": 1785621622
      },
      {
        "headline": "Here's What Morgan Stanley Says About Buying the AI Infrastructure Dip",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a18b93b38c74fc94c2f9fa6b74fbd2a5c239c324519e5680d7cbd388f3ca9d42",
        "datetime": 1785601080
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:02"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Applied Materials: Strong Fundamentals, But I'm Downgrading Ahead Of Earnings",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9ac93485d4942b126f2d52d23b84b3f38a11efd94c6d8fe95e3f3a8f38198996",
        "datetime": 1785745800
      },
      {
        "headline": "Applied Materials Rose 15% on Thursday and Is Still More Than 30% Below Its High. It Reports on Aug. 13.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47bca66728fe8470c4a06e63021aef050a8c46ce2efc179604d725288e605d21",
        "datetime": 1785602760
      },
      {
        "headline": "Applied Materials: July Purged Positioning, Not The Thesis",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9bd4ec4fce65af234f05beaa42096cff30183d23b3b706e2f7b9593b2644dd19",
        "datetime": 1785593882
      },
      {
        "headline": "Benzinga Bulls And Bears: Amazon, Microsoft, SpaceX",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b593a1a8b608a1e35c900bdb49b3e36d6bf3ab0704ceba01b073e6871a159a43",
        "datetime": 1785571235
      },
      {
        "headline": "Here's How Much $100 Invested In Applied Materials 20 Years Ago Would Be Worth Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e8bef1e0f625c86a117ec4f370d954f47136783c465737b299f6ac11078f4c9e",
        "datetime": 1785519927
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:02"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Despite The Headwinds, Earnings Are Exploding To The Upside",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ab225924e77572d7b5a9e6b2cfbb88aa702f2c9f1a81a0d209f935ea41210ddf",
        "datetime": 1785725899
      },
      {
        "headline": "Buy The Situational Awareness' Selloff, Here's Why And What",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bc0876c85e6c3c51daf930df0c6478e67215e9933a8b5cae6bcffdd711452b87",
        "datetime": 1785707830
      },
      {
        "headline": "Warsh Wants Fewer Fed Meetings: Markets May Pay The Price",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=aaaa8fda0ec994fa41f9cd8357e08a5489274e42993c4ed44deaf7364cf2dce2",
        "datetime": 1785665508
      },
      {
        "headline": "A Major Breakout In Treasury Yields May Be Underway",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ee81ea16b90853d520887b42b080a4ac06f1f91487b0063115970f0b4ac55f76",
        "datetime": 1785664500
      },
      {
        "headline": "The Momentum Crash: Is It Over?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e71f40c77550adc1e32a3460a0a46b2dc117beba026277fb994d04c829c01bb7",
        "datetime": 1785658200
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-08-03",
      "hour": "amc",
      "epsEstimate": 0.3544
    },
    "news": [
      {
        "headline": "US Equity Investors to Focus on Quarterly Earnings, Nonfarm Payrolls, Iran Geopolitics This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b11d17b74a6242fbb4adb29300c127e2e3e60777041df10bff742b9ef5cdb313",
        "datetime": 1785749941
      },
      {
        "headline": "Palantir Earnings Will Show If the Software Rocket Is Running Out of Fuel",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3aabc8230dbf1e25107b60c50f5ec44c2e9359ec0c392ad67a623ad6b37b8ba0",
        "datetime": 1785749520
      },
      {
        "headline": "Stock market today: Dow, S&P 500, Nasdaq futures rise as Trump calls off Iran attack, oil and bond yields ease",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4286f1b38f29c068fe1362b22b26a0c00c7d3207d7e7649631e62ab81eac37a4",
        "datetime": 1785749116
      },
      {
        "headline": "U.S. Futures Rise as Middle East Diplomacy Returns to Focus Ahead of Palantir Results: Dow Jones, S&P, Nasdaq, Wall Street",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe1c53021455344ed5544f0ac4167d2d1dcca631900f199a0c2b0db08a9ba5be",
        "datetime": 1785748258
      },
      {
        "headline": "Nasdaq, S&P 500 Futures Rise, Oil Tumbles On Iran Relief Hopes: Why PLTR, BABA, TSLA, SPCX, USO Are In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ceab390cb083b5ec5fb6da217da3dcbc7f06a3ea1f54716ce7b0df4360d67ef0",
        "datetime": 1785746045
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Qualcomm (QCOM) Is Shaping 6G Around AI Native Networks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ea711a97858c734ca2f12b48f246b524e7c7a055c277f7dd6a61410030de4d66",
        "datetime": 1785694174
      },
      {
        "headline": "1 Incredible Reason to Buy Qualcomm Stock Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=595bc8b8e57e97b1c2a6f881c90e54409ee14a28eda19cbe23de4efd58243402",
        "datetime": 1785659100
      },
      {
        "headline": "Why Investors Shouldn’t Sweat the Dip in Qualcomm’s Handset Revenue, According to Experts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0cf0070af1e709df5035f5336bdfd0550d5192b4601faef44115bf6bd4a3740b",
        "datetime": 1785596402
      },
      {
        "headline": "Marvell Technology Is Betting More Of Its Revenue On One End Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=427d251700e4700db464e95f801ad6bca834d60888601efedc6c69ae5ba2f71a",
        "datetime": 1785517769
      },
      {
        "headline": "Qualcomm Announces Resale Registration Of Up To 17,826,566 Shares Issued In Modular Acquisition; Company Will Not Receive Proceeds",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=819e90b175b77b650598500f7b6ea8ee6fb361973b8d181c46ae99536282efd9",
        "datetime": 1785514856
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:02"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
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
      },
      {
        "headline": "Delivering Measurable AI Strategies: ICR CEO Anton Nicholas, Live at Nasdaq",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e320fab1ddf87d306e738d4ad77e102b5da9fd40245831e8add6145b1d9216c1",
        "datetime": 1785513854
      },
      {
        "headline": "1 Key Metric To Watch That Could Send Arm Stock Soaring",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0249875e115412939fc70b508a7c274fbf936b9c8aea31840e93d53e74144bda",
        "datetime": 1785501300
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:02"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-20",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell Technology (MRVL) Exceeds Market Returns: Some Facts to Consider",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f28c4df849c62e3a6a47d5540d5ede1f0df1706e7dfd13d3712bf6591aac64c3",
        "datetime": 1785534303
      },
      {
        "headline": "Should You Buy, Sell, or Hold ALAB Stock Before Q2 Earnings Release?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2154f428b7fdfefd7412fa1ba9a79a95158ebf57650d7beeff70749f05a8e1d3",
        "datetime": 1785519540
      },
      {
        "headline": "Marvell Technology Is Betting More Of Its Revenue On One End Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=427d251700e4700db464e95f801ad6bca834d60888601efedc6c69ae5ba2f71a",
        "datetime": 1785517769
      },
      {
        "headline": "Amazon, Apple, Microsoft, Micron, Roblox, Reddit, SK Hynix, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=911401ccbf7cb4f2130f9472945ecab9467870e9b502487a641cb1e99cb9d27c",
        "datetime": 1785515880
      },
      {
        "headline": "Marvell Stock Has Been Cut in Half. Its Biggest Fear May No Longer Be Valid.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be57433ae7c1279cc48f58dcf5b358cf22fb948884a46fdfd167ec5b7ca3319b",
        "datetime": 1785510378
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:02"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
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
      },
      {
        "headline": "Should You Buy Billionaire Investor Stephen Mandel’s Top 5 Stock Picks in August?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2f6c29e338ea816eff45904a29bd88cd84c8424321ccb256095fb687fc6a352f",
        "datetime": 1785681005
      },
      {
        "headline": "AI Isn’t a Catch-All Trade for Stocks in This Earnings Season",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3710e10670679477961b842503e09f6be7df6cbf98c00514a1437a27522315a2",
        "datetime": 1785585600
      },
      {
        "headline": "What Makes ASML (ASML) a New Strong Buy Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e46dad8b9596250bd63faeb98f8ef0b9a00d6233368bd833fb276a3e8803cb01",
        "datetime": 1785513603
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:02"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "New Strong Buy Stocks for August 3rd",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c9e84804a451c4c4d63fe4e06b1d3d37fd1319777636736041639119b1efe5b",
        "datetime": 1785746100
      },
      {
        "headline": "What a $10,000 Investment in Lam Research 10 Years Ago Would Be Worth Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6334b41e2a52dfb4d4730a73e40d1e18319bc485b14c309c24f78a145be2d37a",
        "datetime": 1785711660
      },
      {
        "headline": "Applied Materials Rose 15% on Thursday and Is Still More Than 30% Below Its High. It Reports on Aug. 13.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47bca66728fe8470c4a06e63021aef050a8c46ce2efc179604d725288e605d21",
        "datetime": 1785602760
      },
      {
        "headline": "AI Isn’t a Catch-All Trade for Stocks in This Earnings Season",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3710e10670679477961b842503e09f6be7df6cbf98c00514a1437a27522315a2",
        "datetime": 1785585600
      },
      {
        "headline": "Benzinga Bulls And Bears: Amazon, Microsoft, SpaceX",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=b593a1a8b608a1e35c900bdb49b3e36d6bf3ab0704ceba01b073e6871a159a43",
        "datetime": 1785571235
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:03"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
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
      },
      {
        "headline": "Best Momentum Stock to Buy for July 31st",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e90abe161a0972d8e546176f22aca4fd80f5e21cd9d8e049e5857eda7063788a",
        "datetime": 1785506400
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:03"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 35.1395
    },
    "news": [
      {
        "headline": "Which S&P500 stocks are moving before the opening bell on Monday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f596a060a793d4846f0b87347ea41be3ea04c98760439bd97002638de903cd1f",
        "datetime": 1785760502
      },
      {
        "headline": "US Equity Investors to Focus on Quarterly Earnings, Nonfarm Payrolls, Iran Geopolitics This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b11d17b74a6242fbb4adb29300c127e2e3e60777041df10bff742b9ef5cdb313",
        "datetime": 1785749941
      },
      {
        "headline": "Ciena and Boston Beer have been highlighted as Zacks Bull and Bear of the Day",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0bd03fefd8970c6509f073bdbcab035aea1c25025804f57029048ae4556d0b5d",
        "datetime": 1785746400
      },
      {
        "headline": "Tim Cook's Farewell Note Sours While Amazon Steals The Show And Oil Snaps On Fresh Iran Talks",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=0361a8c467ed83cb6eb84d27af0974f6df4c8d5fe56edd9b1ad0d79e1aa361a6",
        "datetime": 1785741225
      },
      {
        "headline": "MU, SNDK, SKHY, DRAM In Focus: Korean Stocks Dip Again, But Morgan Stanley Sees Sharp Growth Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23987fdd060920ed1d9be9b0b892b4409a4ce611e6ccbc2beab8551438e62218",
        "datetime": 1785731125
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:03"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-08-05",
      "hour": "amc",
      "epsEstimate": 3.3281
    },
    "news": [
      {
        "headline": "Which S&P500 stocks are moving before the opening bell on Monday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=f596a060a793d4846f0b87347ea41be3ea04c98760439bd97002638de903cd1f",
        "datetime": 1785760502
      },
      {
        "headline": "Jobs Report, Palantir, AMD, SpaceX, Eli Lilly, and More to Watch This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3f8727d0954fad695567eb16f68ec5e7fe7d41f5b4a4c5ebe2490ea343301f49",
        "datetime": 1785693600
      },
      {
        "headline": "Prediction: Western Digital Gets Back to Its High Before Sandisk Gets Back to Its Own.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37c5d1f2e5144c89aaf3289e57f8c73524c716ecba97dab132dc81ad698d727b",
        "datetime": 1785677640
      },
      {
        "headline": "Seagate Rallies on Strong Q4 Results and Guidance. What Does This Mean for STX Stock Here.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02eb9c2745e11cde340af7c35eb408459787983524da795605e8dbd56a55dc7d",
        "datetime": 1785675602
      },
      {
        "headline": "The AI Memory Boom Just Got a Reality Check—And a Better Entry Point",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b674836f78863908263d25b1a9f487c83203bfe8448fab1ab427655e193e0c9f",
        "datetime": 1785601920
      }
    ],
    "_fetched_at": 1785765602.086581,
    "_updated_label": "2026-08-03 23:03"
  }
};
