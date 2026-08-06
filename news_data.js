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
        "headline": "Which dow jones stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8a79d5859cbdfc9e73a0e1db0c3fbeb34f04abfddc35eda0009b708cdabbb329",
        "datetime": 1786043404
      },
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=1baa164f5b5a34580123a837cb4c226634687b4219d9917685e1740b006dfa56",
        "datetime": 1786039501
      },
      {
        "headline": "Thursday's session: most active stocks",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c246af9f22f1b463d1410722c301d205a6e71d9c9b98e7126d72344f11efb907",
        "datetime": 1786039200
      },
      {
        "headline": "Liquidity Services, Inc. Q3 2026 Earnings Call Summary",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=598b745f5ae12a6ba90bb590c7c6833a07eb02f9100ad74697294c692815d334",
        "datetime": 1786038746
      },
      {
        "headline": "Frontdoor, Inc. Q2 2026 Earnings Call Summary",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=09703dc94192a14a2164185925c3e8776c43f3d2a771773857e81d065c8cc53a",
        "datetime": 1786038055
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Which dow jones stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8a79d5859cbdfc9e73a0e1db0c3fbeb34f04abfddc35eda0009b708cdabbb329",
        "datetime": 1786043404
      },
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=1baa164f5b5a34580123a837cb4c226634687b4219d9917685e1740b006dfa56",
        "datetime": 1786039501
      },
      {
        "headline": "Thursday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8ace18b0090935d1d8bfaff6a720c00daf04f71f71ccb5ba332aa2a85453f63e",
        "datetime": 1786034404
      },
      {
        "headline": "Stop Calling It A Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=65ae62070ff8720d61850f89035d5a2fb8825f0b4a968e62621e093feb56edfd",
        "datetime": 1786031840
      },
      {
        "headline": "Top Midday Stories: Apollo Acquires EasyJet in Deal Valued at $7.68 Billion; Honeywell Aerospace Shares Fall Following Guidance Cut",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0051b7817f36c45fdcbf472786a029791c8639d7db74a6e559e164cd3d1f6669",
        "datetime": 1786031110
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Which dow jones stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8a79d5859cbdfc9e73a0e1db0c3fbeb34f04abfddc35eda0009b708cdabbb329",
        "datetime": 1786043404
      },
      {
        "headline": "Stop Calling It A Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=65ae62070ff8720d61850f89035d5a2fb8825f0b4a968e62621e093feb56edfd",
        "datetime": 1786031840
      },
      {
        "headline": "Alphabet Lures Investors to Mega Bond Deal With High Premiums",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e232f6a3c9a50e8aae58a708d9d0d17cd9cea7cb6d14b0a12beff31d0eb279ff",
        "datetime": 1786031336
      },
      {
        "headline": "Top Midday Stories: Apollo Acquires EasyJet in Deal Valued at $7.68 Billion; Honeywell Aerospace Shares Fall Following Guidance Cut",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0051b7817f36c45fdcbf472786a029791c8639d7db74a6e559e164cd3d1f6669",
        "datetime": 1786031110
      },
      {
        "headline": "70% Gains From Here? Wall Street Pros Expect Exactly That From Meta in 12 Months",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cee454b606be4a9654f0d35b886bacc544c9638a2f0a19e979d1cfaeda1752b9",
        "datetime": 1786030750
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Which dow jones stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8a79d5859cbdfc9e73a0e1db0c3fbeb34f04abfddc35eda0009b708cdabbb329",
        "datetime": 1786043404
      },
      {
        "headline": "Microsoft vs. Broadcom: Two AI Powerhouses, One Better Investment",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=53ddf1e329716a82cfaaf989399befaa16bdd956ac3f3f46431b2060088f9946",
        "datetime": 1786037400
      },
      {
        "headline": "Microsoft Delivers Tough Blow to Halo Team",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cef9dc839907751aca08371c31d9bbf0197123c081d071f44d0eb07ba0ce8a14",
        "datetime": 1786036945
      },
      {
        "headline": "Microsoft's AI growth has won back investors, for the time being",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25935e7dc9f2dd37647237e42af188aa7d773ecc81dbb127f77afc4462048980",
        "datetime": 1786035122
      },
      {
        "headline": "Thursday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8ace18b0090935d1d8bfaff6a720c00daf04f71f71ccb5ba332aa2a85453f63e",
        "datetime": 1786034404
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "MONDAY: O'BRIEN, ZUCKERMAN, AMAZON TEAMSTERS RALLY FOR DELIVERY PROTECTION ACT",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6e2dcc42646e55044efc6a4ddfdd9caf585823b988725a28fbfcc458a83d6d0a",
        "datetime": 1786037160
      },
      {
        "headline": "Amazon Takes Bold Step Beyond Retail",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=06293378c7a575674b00bff41a1065b72ea81c0f1a2571e0b4b8ba678b8b87a8",
        "datetime": 1786036790
      },
      {
        "headline": "Amazon Is Bringing the Weight-Loss Drug Race to Medicare",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f1a60fb2d1807d8504c543c56a5908c7e9127818b26c163106b5f3042dba811",
        "datetime": 1786035853
      },
      {
        "headline": "Thursday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8ace18b0090935d1d8bfaff6a720c00daf04f71f71ccb5ba332aa2a85453f63e",
        "datetime": 1786034404
      },
      {
        "headline": "Prediction: This Will be Shopify’s Price in 2027 And Barclays Agrees",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c83c193817a0c1b4559af5086fbb51af7b6065317f48ffbc2d931203cc452b5",
        "datetime": 1786033822
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "Broadcom: Big, Bad News When Compute Leaders Need Optical Advantage (Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=30cdad70cc876fc684008b369f3ad588e5bca6c35f2bc682991246e19354ab67",
        "datetime": 1785948298
      },
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
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Microsoft vs. Broadcom: Two AI Powerhouses, One Better Investment",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=53ddf1e329716a82cfaaf989399befaa16bdd956ac3f3f46431b2060088f9946",
        "datetime": 1786037400
      },
      {
        "headline": "What You Are Actually Underwriting In NVIDIA Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38887fbb74c59f942baf5cf41a5637994525c91fab20c00a60da2546782c2a0d",
        "datetime": 1786032538
      },
      {
        "headline": "The 6.4% Monthly Payer That Beat JEPI by 8 Points With No NAV Bleed",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=13924ec932305c2a9448f9e2ae9ac52f8af0e2e6a13c7132c5bb76ff66330f7b",
        "datetime": 1786032359
      },
      {
        "headline": "Intel Stock Does Not Need A Market Crash To Fall By Nearly Half",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2af7b4ccd12dc65545b69f842391b7f6bafa5561d4100eb64f5fc34a52144df",
        "datetime": 1786031521
      },
      {
        "headline": "Anthropic Gets Ready to Build its Own Chips",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3f7c62ee677d523c2abfd4195fbb97897586c6ba9f0f9d9640ee4552f19ae71",
        "datetime": 1786029296
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Mark Zuckerberg's Net Worth Dropped $18 Billion in a Single Day as Meta Stock Extended a Losing Streak. Is the Sell-Off Overdone?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c14320f461be8f215d11e6f5cc6c2140e87823d5687573f4f1334b00084c5025",
        "datetime": 1786036800
      },
      {
        "headline": "Meta AI Test Takes Alarming Turn",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d633285162e4c5864ad433bd8e5d140852c734d0556ee3ff1ab2e237c898a542",
        "datetime": 1786036219
      },
      {
        "headline": "Coreweave at $92: The Compelling Bull Case On Offer Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=568d101ffe708f9cc891298d88bc722a2eee6a5d0fe40ba9ea3c77b85a555931",
        "datetime": 1786033410
      },
      {
        "headline": "Stop Calling It A Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=65ae62070ff8720d61850f89035d5a2fb8825f0b4a968e62621e093feb56edfd",
        "datetime": 1786031840
      },
      {
        "headline": "AI Infrastructure Trade Powers 2026’s Best-Performing Leveraged ETFs",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7df3b5e7b8f17242f8b19c401186a49320b7f9583c1d5eaf765054aab146a87f",
        "datetime": 1786031444
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Tesla's $16.8 Billion Chip Bet Could Create Several New Winners",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ca7dc87bb8bc44716c311d35ee4c3382eb09e258e25f522ba4af21ce3c2bd37",
        "datetime": 1786037559
      },
      {
        "headline": "Ford's $28,350 Electric Truck Faces a Bigger Profit Test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cd6bc44ecdef6ae94486be9d8deabcbcfc41c29d24cc0ea3fc07217e3f4992d4",
        "datetime": 1786037477
      },
      {
        "headline": "Cathie Wood's Ark Invest Makes SpaceX, Circle Top Holdings After Latest Buying Spree",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47ab8daad98b268fa63c9bde254cbbad34a2214a0f688f38254a1f86548a5b47",
        "datetime": 1786036854
      },
      {
        "headline": "Tesla and SpaceX to invest $16.8B in Terafab chip factory in Texas",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=288304513de3d04078a1753a9614c26631f0bd2ae0f40294faad3a6d1a0b0287",
        "datetime": 1786036707
      },
      {
        "headline": "SpaceX's AI Spending Is Becoming a Bigger Tesla Business",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6fb7fd53a0aea85d7aed258be3f6f793a8b0b72e0e269f513a280c2d01ffa993",
        "datetime": 1786035608
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Curious about the most active S&P500 stocks in today's session?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=1baa164f5b5a34580123a837cb4c226634687b4219d9917685e1740b006dfa56",
        "datetime": 1786039501
      },
      {
        "headline": "Sandisk Is Giving Up Some Margin for a Bigger Reward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd250d34ad1e9d3aea01731c254ec4171cb31cae82f2448de85676f22702a5c1",
        "datetime": 1786035900
      },
      {
        "headline": "Sandisk's Outlook Just Shook the Entire AI Memory Trade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7473829520c1ef9efcf8d8e73ea193e4e9ebc8d77815084ad17763826ead2dd3",
        "datetime": 1786035706
      },
      {
        "headline": "Here’s a Solid Backdoor Trade on the Memory Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=16c64a972aa93bce95cc24d93f429bf78b7b5ef2766b5519a1c0c1371388461a",
        "datetime": 1786033808
      },
      {
        "headline": "Micron Stock Rebounded With The Memory Trade, Not Ahead Of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=624c9ed18d83b4a91783577870662e56259528e8ffd880ed1be82f4f5ba4a476",
        "datetime": 1786033649
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "AMD's Selloff Is Not Shaking Wall Street's AI Conviction",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=adf69f1edcb1a8efe257b651c34d73d2415e421e9a69ebbe932d3c6790ccdcc2",
        "datetime": 1786035918
      },
      {
        "headline": "Micron Stock Rebounded With The Memory Trade, Not Ahead Of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=624c9ed18d83b4a91783577870662e56259528e8ffd880ed1be82f4f5ba4a476",
        "datetime": 1786033649
      },
      {
        "headline": "Sandisk's Weak Guidance Sends AI Chip Stocks Tumbling",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed00c9410f677a9077b4887868eeab818f10b392c2960226eda30dcefa5c8936",
        "datetime": 1786032798
      },
      {
        "headline": "What You Are Actually Underwriting In NVIDIA Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38887fbb74c59f942baf5cf41a5637994525c91fab20c00a60da2546782c2a0d",
        "datetime": 1786032538
      },
      {
        "headline": "Intel Stock Does Not Need A Market Crash To Fall By Nearly Half",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2af7b4ccd12dc65545b69f842391b7f6bafa5561d4100eb64f5fc34a52144df",
        "datetime": 1786031521
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
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
        "url": "https://finnhub.io/api/news?id=1baa164f5b5a34580123a837cb4c226634687b4219d9917685e1740b006dfa56",
        "datetime": 1786039501
      },
      {
        "headline": "Micron Stock Rebounded With The Memory Trade, Not Ahead Of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=624c9ed18d83b4a91783577870662e56259528e8ffd880ed1be82f4f5ba4a476",
        "datetime": 1786033649
      },
      {
        "headline": "Sandisk's Weak Guidance Sends AI Chip Stocks Tumbling",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed00c9410f677a9077b4887868eeab818f10b392c2960226eda30dcefa5c8936",
        "datetime": 1786032798
      },
      {
        "headline": "What You Are Actually Underwriting In NVIDIA Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38887fbb74c59f942baf5cf41a5637994525c91fab20c00a60da2546782c2a0d",
        "datetime": 1786032538
      },
      {
        "headline": "Intel Stock Does Not Need A Market Crash To Fall By Nearly Half",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2af7b4ccd12dc65545b69f842391b7f6bafa5561d4100eb64f5fc34a52144df",
        "datetime": 1786031521
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Tesla's $16.8 Billion Chip Bet Could Create Several New Winners",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ca7dc87bb8bc44716c311d35ee4c3382eb09e258e25f522ba4af21ce3c2bd37",
        "datetime": 1786037559
      },
      {
        "headline": "Sea Limited's Q2 Earnings Ahead: What's in Store for the Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8f0f9d471facba15907b29b797b4e65fef2d92da72cfcd59724e2682a3456762",
        "datetime": 1786034700
      },
      {
        "headline": "Amdocs Q3 Earnings Meet Estimates as Managed Services Hit Record",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9df777c7ed915d8f2c514b668d258dcf623e739e4e460a83402bc3d79608d2c5",
        "datetime": 1786031280
      },
      {
        "headline": "Is Michael Burry Wrong About Everything?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=780063c42156307e444aa6923923776d185c48419cbb3ef9b080aad7db206671",
        "datetime": 1786029363
      },
      {
        "headline": "Avnet Q4 Earnings Beat on Broad-Based Demand and Margin Gains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=74fe4543e7df870aed733ec6244880a7e4f54e7d9f3bfbdef07c9ff6acef768c",
        "datetime": 1786028760
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Stop Calling It A Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=65ae62070ff8720d61850f89035d5a2fb8825f0b4a968e62621e093feb56edfd",
        "datetime": 1786031840
      },
      {
        "headline": "AAII Sentiment Survey: Optimism Jumps",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c96b01988f81e4fffecba9d0ef30a8031fb28e8b8da66cc22bf6a56a730751fb",
        "datetime": 1786027970
      },
      {
        "headline": "QYLD: Multiple Clues Point To QQQ Covered Call ETF Outperformance",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9205063701c6a0493583a104267960db77716e05eaf37a34bb6adccbbd18b5b8",
        "datetime": 1786024849
      },
      {
        "headline": "Final Call Before The AI Rally Leaves Without You",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=55f16fcb046031f7d8824a49ede41549266b9166ea62babf4df80b0e8935e1ab",
        "datetime": 1786023205
      },
      {
        "headline": "S&P 500, Dow Fall as Brent Jumps 4%, SanDisk Trims Losses: Stock Market Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7bc94f808213a9d969c264c5f517d7d238633cc8b8cb41de39f834000bb2e324",
        "datetime": 1786023119
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Guide to High Dividend-Paying ETFs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51f9941955af12b3f6ed7d8902e59bc760d8838f622f9b658b171c78165fc3f7",
        "datetime": 1786032000
      },
      {
        "headline": "Stop Calling It A Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=65ae62070ff8720d61850f89035d5a2fb8825f0b4a968e62621e093feb56edfd",
        "datetime": 1786031840
      },
      {
        "headline": "AAII Sentiment Survey: Optimism Jumps",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c96b01988f81e4fffecba9d0ef30a8031fb28e8b8da66cc22bf6a56a730751fb",
        "datetime": 1786027970
      },
      {
        "headline": "Tesla Continues to Crater in 2026: Why One of Wall Street’s Most Controversial Pros Expects 100% Gains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=37a67775abf451b413ec9c3bb20386c16cdc9c9c545ff3f0f161565fba044c0c",
        "datetime": 1786026943
      },
      {
        "headline": "Pre-Market Flat on Consistently Low Jobless Claims",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=75d1e604200a33ee9c35131ade96838be3b3e7765eb2aa476de29cf753d94e2f",
        "datetime": 1786026360
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "At Last, One Big Layoff Not Caused By AI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f10ab0783d7ad5f82203f4f7ad2c44e5e6cd48a234cb1c56dedfdfc2dcee816",
        "datetime": 1786035249
      },
      {
        "headline": "Bezos Plans to Sell $4B Amazon Stock: Why Investors Should Sit Tight",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f4aa82047554217cb4b7999da8761b103e95913ae18e5338d663de7ee9c8be5b",
        "datetime": 1786030620
      },
      {
        "headline": "Alphabet Heads to Bond Market After Boosting AI Spending Forecast",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6f7d409334a34bcfcae6524c9faa6f2fab4ebfe5485618be44da6e0c59506cd",
        "datetime": 1786028880
      },
      {
        "headline": "ARC Advisory Group Positions Trace One as a Major Player in the 2026 MarketMap for Formulation Technologies",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b14796761e7ac5f9836baf43e614a87391c9a02dd53eb7a0905d914f517dd7d",
        "datetime": 1786026660
      },
      {
        "headline": "Khimji Ramdas Group Chooses Rimini Street to Reduce SAP Support Costs, Protect 700+ Customizations and Reinvest Savings in Innovation",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e4ba937e189ca46b6f2f3abb3222e0a54cad14fac4b947b9a402dfe6bc3f6dae",
        "datetime": 1786021200
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Which dow jones stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8a79d5859cbdfc9e73a0e1db0c3fbeb34f04abfddc35eda0009b708cdabbb329",
        "datetime": 1786043404
      },
      {
        "headline": "Thursday's session: top gainers and losers in the dow jones index",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8ace18b0090935d1d8bfaff6a720c00daf04f71f71ccb5ba332aa2a85453f63e",
        "datetime": 1786034404
      },
      {
        "headline": "Marc Benioff Says Wall Street's Fears That AI Will Kill Salesforce Are \"Dead Wrong\" Even as CRM Stock Has Fallen Over 30% in 2026. Should Investors Bet on His Conviction?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49c1ea9645da63b0d38e1cffba88f7316502c1c2aea086889761c6f84e1cf7c4",
        "datetime": 1786034100
      },
      {
        "headline": "Stock Market Leadership Just Flipped. Now the Nasdaq Is on Top.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4071d7f6a5def93c10d90e8bbd778835765235268795d5f86460514f49a0ee55",
        "datetime": 1786031483
      },
      {
        "headline": "Software stocks sink, led by declines from Figma, Datadog",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f711c08be417d0ddfac697148a75a089669a2e6460a0ae66bacd33cd33508a8c",
        "datetime": 1786027264
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
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
        "url": "https://finnhub.io/api/news?id=1baa164f5b5a34580123a837cb4c226634687b4219d9917685e1740b006dfa56",
        "datetime": 1786039501
      },
      {
        "headline": "Cathie Wood's Ark Invest Makes SpaceX, Circle Top Holdings After Latest Buying Spree",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47ab8daad98b268fa63c9bde254cbbad34a2214a0f688f38254a1f86548a5b47",
        "datetime": 1786036854
      },
      {
        "headline": "Cathie Wood Invests $17.6 Million in Major AI Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8811a24e4edb586fbb0efaeea45ab6d26bcd7f496f3ec5519b9e343bec420555",
        "datetime": 1786036339
      },
      {
        "headline": "Is Michael Burry Wrong About Everything?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=780063c42156307e444aa6923923776d185c48419cbb3ef9b080aad7db206671",
        "datetime": 1786029363
      },
      {
        "headline": "Palantir Diversifies Your Portfolio, But It Will Not Calm It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0cce1eeca38a6f6c4f9f6ee185331d7e9a391607c4e87fdd698d76cfb1cdc19c",
        "datetime": 1786027429
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Micron Stock Rebounded With The Memory Trade, Not Ahead Of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=624c9ed18d83b4a91783577870662e56259528e8ffd880ed1be82f4f5ba4a476",
        "datetime": 1786033649
      },
      {
        "headline": "What You Are Actually Underwriting In NVIDIA Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38887fbb74c59f942baf5cf41a5637994525c91fab20c00a60da2546782c2a0d",
        "datetime": 1786032538
      },
      {
        "headline": "Intel Stock Does Not Need A Market Crash To Fall By Nearly Half",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2af7b4ccd12dc65545b69f842391b7f6bafa5561d4100eb64f5fc34a52144df",
        "datetime": 1786031521
      },
      {
        "headline": "Aristotle Value Equity WM Q2 2026 Portfolio Performance",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3d6adcd10fcf2ffa79d180e9fc6d7fcd0af2335aa79abdac4e9592049ff9afa5",
        "datetime": 1786030140
      },
      {
        "headline": "Qualcomm’s (QCOM) BMW Deal Adds To A Bigger Diversification Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=58260b94a197da7687acca00e9780366db549017fa3fdb4257e8b899a50f3f54",
        "datetime": 1786022389
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "Prediction: Arm Holdings Will Trade at This Price in 12 Months",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5561ed697df26620a73dca46629257c40a6e709bebb95bb7738bef66f19a0f6f",
        "datetime": 1786039253
      },
      {
        "headline": "Update: US Equity Indexes Mixed as Chipmakers Help Lift Technology While Crude Oil Jumps With Treasury Yields",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d9f0c6771fbda99ff2c6d7f382269915cc5467eb55111ea0f97b8b10b01e42b",
        "datetime": 1786039055
      },
      {
        "headline": "US Equity Indexes Decline, Crude Oil Rises in Midday Trading",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d0c44464e7ec6d6895a556197ef509d3ff004ea809d80739bd0f0595d3f3807",
        "datetime": 1786034901
      },
      {
        "headline": "Sandisk's Weak Guidance Sends AI Chip Stocks Tumbling",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed00c9410f677a9077b4887868eeab818f10b392c2960226eda30dcefa5c8936",
        "datetime": 1786032798
      },
      {
        "headline": "SoftBank Shrugs Off AI Bubble Fears: 'Supply Is Very Much Short'",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=e979eda7400205e12eea8e9a3f1672a7f81b01bdd67f3dd88c5e468e414fdbd0",
        "datetime": 1786017779
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Sandisk's Weak Guidance Sends AI Chip Stocks Tumbling",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed00c9410f677a9077b4887868eeab818f10b392c2960226eda30dcefa5c8936",
        "datetime": 1786032798
      },
      {
        "headline": "What You Are Actually Underwriting In NVIDIA Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=38887fbb74c59f942baf5cf41a5637994525c91fab20c00a60da2546782c2a0d",
        "datetime": 1786032538
      },
      {
        "headline": "AI Infrastructure Trade Powers 2026’s Best-Performing Leveraged ETFs",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7df3b5e7b8f17242f8b19c401186a49320b7f9583c1d5eaf765054aab146a87f",
        "datetime": 1786031444
      },
      {
        "headline": "LSCC Stock Offers AI Growth but Demands a Premium Valuation Trade-Off",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bdc590cc7e71cb93a688ffb11fb6961eca47a345c532ff636e456967ee181585",
        "datetime": 1786030320
      },
      {
        "headline": "How the AMI Deal Could Expand Lattice's AI Infrastructure Edge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77369f8623918e668d96942ae8960ce0037a9d967e353f3d579d869a258041a9",
        "datetime": 1786029720
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:00"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Stock Market Today: Dow Slides 400 Points But Chip Firm Surges; Biotech IPO Craters 39% (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44e4f9d493c5328bad91b339a22343fc93bd261098b2dd6a6940357336fd559a",
        "datetime": 1786038640
      },
      {
        "headline": "Tesla's $16.8 Billion Chip Bet Could Create Several New Winners",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ca7dc87bb8bc44716c311d35ee4c3382eb09e258e25f522ba4af21ce3c2bd37",
        "datetime": 1786037559
      },
      {
        "headline": "Nuclear Utility Constellation Leads Nasdaq 100 After Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77587da899f06222b87dc311a6e86de7f0e1290e1ab95b89c5bfa143d66bbb04",
        "datetime": 1786022852
      },
      {
        "headline": "Here’s How Much You Would Have Made Owning ASML Holding Stock In The Last 10 Years",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=0951f6d0a4ac32dd462a9115391fb36acff3094333601479b6de77f9df7fb971",
        "datetime": 1786012261
      },
      {
        "headline": "European Indexes Rise as Earnings Drive Markets",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=394a33c0bb8bb3141ecfdc7c5c271f45578dfeffeaff28edcc78061dc4831d66",
        "datetime": 1786007373
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "Tesla's $16.8 Billion Chip Bet Could Create Several New Winners",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ca7dc87bb8bc44716c311d35ee4c3382eb09e258e25f522ba4af21ce3c2bd37",
        "datetime": 1786037559
      },
      {
        "headline": "Accenture vs. Lam Research: A Comparison of Revenue Growth and Stability",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1e46d9d50230faa6075c393e12a176dddd09fed88fbf022f6ca3bdbc80ff4cd",
        "datetime": 1786022101
      },
      {
        "headline": "Zacks.com featured highlights Lam, The Cheesecake, Vertiv and Fortinet",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3c6f021cf8ba0872df328ddd347bb25c2f741eacfdac2092678b536e4768817",
        "datetime": 1786011660
      },
      {
        "headline": "One Massive AI Hardware Truth Keeps Me Loading Up On AMAT Ahead of Aug. 13 Earnings Print",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=167a5b632dab635bef577ac0cae6c15c37dee0862fc2c024b6bcd336ee784865",
        "datetime": 1785989990
      },
      {
        "headline": "Applied Materials Fell 11% Last Month: A Prominent Wall Street Pro Predicts 70% Gains Moving Forward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8cb743d60fe325d1d813f43900c2ff420bcb162814ce32bdb1f7547cb6e58bc",
        "datetime": 1785988040
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "Allspring Growth Fund Q2 2026 Performance Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d3e790a365a65c1c6541e7aa0e79d403abf50c95684d2d8ec8a93eb29368f15d",
        "datetime": 1786004100
      },
      {
        "headline": "Bigger Earnings, Bigger Drop: The Sandisk Selloff Explained",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3e282c671c5d67d4dbc140fa1c654e783004efcf823306037a69f9fc93cbed6f",
        "datetime": 1785997036
      },
      {
        "headline": "TCW Concentrated Large Cap Growth Fund Q2 2026 Portfolio Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a4be55e268c5a2f7a9605bc2cc25490523542cfe4ce6f261641d0211a5aa0a3c",
        "datetime": 1785988800
      },
      {
        "headline": "Applied Materials Fell 11% Last Month: A Prominent Wall Street Pro Predicts 70% Gains Moving Forward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8cb743d60fe325d1d813f43900c2ff420bcb162814ce32bdb1f7547cb6e58bc",
        "datetime": 1785988040
      },
      {
        "headline": "Brown Advisory Flexible Equity Strategy Q2 2026 Portfolio Activity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=73b55282df1e30c21b0484c36bafd51d47b492ab49aa8791eecf2504d2e86788",
        "datetime": 1785932040
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "Stock Market Today: Dow Slides 400 Points But Chip Firm Surges; Biotech IPO Craters 39% (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44e4f9d493c5328bad91b339a22343fc93bd261098b2dd6a6940357336fd559a",
        "datetime": 1786038640
      },
      {
        "headline": "AI storage stocks crash: is capital rotating?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=caecba48372f8e78b7f848b4dd55732db3bb595efc9ba1c1c96aea4b18a1d72c",
        "datetime": 1786037806
      },
      {
        "headline": "Sandisk's Selloff Isn't Shaking Wall Street",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57798e7f997a9e06ee535953ce541399d040f8cf76866ba996a3f707d632ba7a",
        "datetime": 1786037042
      },
      {
        "headline": "Sandisk Is Giving Up Some Margin for a Bigger Reward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd250d34ad1e9d3aea01731c254ec4171cb31cae82f2448de85676f22702a5c1",
        "datetime": 1786035900
      },
      {
        "headline": "Sandisk's Outlook Just Shook the Entire AI Memory Trade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7473829520c1ef9efcf8d8e73ea193e4e9ebc8d77815084ad17763826ead2dd3",
        "datetime": 1786035706
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:01"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
      {
        "headline": "Explore the top gainers and losers within the S&P500 index in today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=66be9094570456fc28b35eb99f3c6ef5f0fc41d34be1f1ed72e8a3ae5118c97d",
        "datetime": 1786043101
      },
      {
        "headline": "Stock Market Today: Dow Slides 400 Points But Chip Firm Surges; Biotech IPO Craters 39% (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44e4f9d493c5328bad91b339a22343fc93bd261098b2dd6a6940357336fd559a",
        "datetime": 1786038640
      },
      {
        "headline": "AI storage stocks crash: is capital rotating?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=caecba48372f8e78b7f848b4dd55732db3bb595efc9ba1c1c96aea4b18a1d72c",
        "datetime": 1786037806
      },
      {
        "headline": "Curious about which S&P500 stocks are generating unusual volume on Thursday? Find out below.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=760beff1929d34d2c366748fec84c4d4da1f177e7397f9e1a2f13206e50f9cee",
        "datetime": 1786035900
      },
      {
        "headline": "Sandisk's Outlook Just Shook the Entire AI Memory Trade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7473829520c1ef9efcf8d8e73ea193e4e9ebc8d77815084ad17763826ead2dd3",
        "datetime": 1786035706
      }
    ],
    "_fetched_at": 1786050002.183417,
    "_updated_label": "2026-08-07 06:01"
  }
};
