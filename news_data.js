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
        "headline": "Micron Has Surged 207% This Year. Brace for a Steep Pullback.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=94308ef42d235b245bc7e10b205a677f62304b920cc33bc7c3c10feb84fe4105",
        "datetime": 1786297500,
        "headlineKo": "마이크론은 올해 207% 급등했다. 급격한 하락에 대비하세요."
      },
      {
        "headline": "Opinion: The Best AI Memory Stock to Buy Isn't Micron or Sandisk -- It's This Korean Giant",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f47db17e08576a99d5ee61bb26ce69bec10ecf0f4e174c192439193bad82a0b",
        "datetime": 1786297380,
        "headlineKo": "의견: 매수해야 할 최고의 AI 메모리 주식은 마이크론이나 샌디스크가 아닌 한국의 거대 기업이다"
      },
      {
        "headline": "1 Long-Term Dividend ETF Built to Outlast Any Market Cycle Over 20 Years",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a9822a76f186cb3e1139a44068d488ed8c9e3c86bf8404323e36ef2be4e5f2e4",
        "datetime": 1786296900,
        "headlineKo": "20년 이상의 모든 시장 주기에 걸쳐 지속되도록 구축된 1개의 장기 배당금 ETF"
      },
      {
        "headline": "1 Popular Cryptocurrency to Buy Before Its Next Massive Rally, According to 1 Wall Street Bull",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b7facd07bee5a9d6be9b33c54111bedf9f7d205125e7e540fd96f9aa5cad0fd3",
        "datetime": 1786296180,
        "headlineKo": "1 월스트리트 황소(Wall Street Bull)에 따르면 다음 대규모 랠리 전에 구매해야 할 인기 암호화폐 1위"
      },
      {
        "headline": "Why AdaptHealth Stock Plummeted This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=84fa3467573763e5b31da2598008a3791576b82bdd904ceb4d03b188fd525d7d",
        "datetime": 1786295583,
        "headlineKo": "이번 주에 AdaptHealth 주식이 급락한 이유"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Forget VFIAX: Vanguard Sells You the Same S&P 500 Fund Without the $3,000 Toll, or the $75 Fee Fidelity Charges to Buy It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f45e2379d3532d14de2026567c166f0c4f8f943f936b39a9525a667fa4d3d729",
        "datetime": 1786291486,
        "headlineKo": "VFIAX는 잊어버리세요: Vanguard는 $3,000의 수수료나 $75의 수수료 충실도 없이 동일한 S&P 500 펀드를 판매합니다."
      },
      {
        "headline": "Apple tests China's CXMT memory chips for iPhones and MacBooks, WSJ reports",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d226c0827db4cf033b5f7069480759ec71e4452367304ab451be53e5ff2d4b68",
        "datetime": 1786277215,
        "headlineKo": "WSJ는 애플이 중국의 아이폰과 맥북용 CXMT 메모리 칩을 테스트했다고 보도했다."
      },
      {
        "headline": "Apple Could Raise iPhone 17 Prices In Hours, Due To Memory Chip Crisis",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8df6bc662d0a677a17419325f108115a20dfade8bce6d2327337f8ca6aa54f37",
        "datetime": 1786273223,
        "headlineKo": "Apple은 메모리 칩 위기로 인해 몇 시간 만에 iPhone 17 가격을 인상할 수 있습니다."
      },
      {
        "headline": "Apple CEO Tim Cook Predicts a \"100-Year\" Flood. Here Are 2 Stocks Primed to Cash In.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b4d4b05da52ae4c2579dc20ad1e1ca202646366ec27f5dc2a033a566f7aa44e",
        "datetime": 1786270800,
        "headlineKo": "애플 CEO 팀 쿡이 '100년' 홍수를 예측했다. 현금화 준비가 되어 있는 주식 2개를 소개합니다."
      },
      {
        "headline": "Apple Added About $1.5 Trillion in Market Value in a Year. Here's What $10,000 Invested a Decade Ago Is Worth Now.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce2361a754007f9c7f2879e6c71a7688d029e60172385747732f299d48e6b9a2",
        "datetime": 1786262460,
        "headlineKo": "Apple은 1년 만에 약 1조 5천억 달러의 시장 가치를 추가했습니다. 10년 전에 투자한 10,000달러의 현재 가치는 다음과 같습니다."
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "A $13.5 Billion Berkshire Hathaway Mystery: What Is Greg Abel Buying Beyond Alphabet?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb6481e70394104b9930f21986077c90913cfdbd870e4089f3acc44e190ebbc4",
        "datetime": 1786295117,
        "headlineKo": "135억 달러 규모의 버크셔 해서웨이 미스터리: 그렉 아벨이 알파벳 외에 무엇을 구매하고 있는가?"
      },
      {
        "headline": "Why Shopify Stock Could Be the Biggest Winner in Agentic AI Commerce",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70418c89e0a41750cf1742e4791822f586acf235f2ee9db644c6a18c40865974",
        "datetime": 1786293300,
        "headlineKo": "Shopify Stock이 Agentic AI 상거래에서 가장 큰 승자가 될 수 있는 이유"
      },
      {
        "headline": "Meta vs. Alphabet: Which Stock Deserves a Spot in Your Portfolio After Q2?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db5e0edf7588cb14a1b67f2c07f88266b4d5e34ad8d78de71d788253d5a18718",
        "datetime": 1786293027,
        "headlineKo": "메타 대 알파벳: 2분기 이후 귀하의 포트폴리오에 포함될 자격이 있는 주식은 무엇입니까?"
      },
      {
        "headline": "Nvidia CEO Jensen Huang Told Investors in Seoul to \"Buy at a Discount\" During the Recent AI Stock Sell-Off. Here's Whether His Call Has Paid Off.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e278b11eb5aff29c140ae859415179f05d198ee275380f1215e54663638593c",
        "datetime": 1786274100,
        "headlineKo": "엔비디아 젠슨 황 CEO는 최근 AI 주식 매도세에서 서울 투자자들에게 \"할인된 가격에 매수하라\"고 말했다. 그의 전화가 성과를 거두었는지 여부는 다음과 같습니다."
      },
      {
        "headline": "Nvidia's Stock Is Completely Mispriced",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=10150c3778c3ceb36d996077b5bf2f37f04561ac6e668cd9596a2377a0befc64",
        "datetime": 1786267800,
        "headlineKo": "Nvidia의 주식 가격이 완전히 잘못되었습니다"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Forget VFIAX: Vanguard Sells You the Same S&P 500 Fund Without the $3,000 Toll, or the $75 Fee Fidelity Charges to Buy It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f45e2379d3532d14de2026567c166f0c4f8f943f936b39a9525a667fa4d3d729",
        "datetime": 1786291486,
        "headlineKo": "VFIAX는 잊어버리세요: Vanguard는 $3,000의 수수료나 $75의 수수료 충실도 없이 동일한 S&P 500 펀드를 판매합니다."
      },
      {
        "headline": "Microsoft Sits 12% Below Its High After the Largest One-Day Market Value Gain on Record. Here's What History Suggests Comes Next.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8cd4fe7182debb6de90358aa178ef070789157646744ff27eb1e44009accaee",
        "datetime": 1786286580,
        "headlineKo": "Microsoft는 기록상 최대 일일 시장 가치 상승 이후 최고치보다 12% 하락했습니다. 역사가 제안하는 내용은 다음과 같습니다."
      },
      {
        "headline": "'Very little to like': Wall Street assesses surprise July jobs report as stocks jump",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ecc86509bd56887ef1723f7ad5d1d05909c4931bf4219eaed134a49e0d26d695",
        "datetime": 1786275329,
        "headlineKo": "'좋아할 만한 것이 거의 없음': 월스트리트는 주가 급등으로 놀라운 7월 고용 보고서를 평가"
      },
      {
        "headline": "Texas Pacific Land Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=54746f70053f50d146879d7438e44cded7a824ccc2c9a688d721689d9c35bd13",
        "datetime": 1786273432,
        "headlineKo": "Texas Pacific Land Q2 실적 발표 하이라이트"
      },
      {
        "headline": "How Much Do You Need Invested by 50 to Retire on Dividends at 60?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d312ee22931520221c07d07121a1e44ae80a0359fab95e6c66061049a18e63e3",
        "datetime": 1786271486,
        "headlineKo": "60세에 배당금으로 은퇴하려면 50세가 얼마나 투자해야 합니까?"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Jeff Bezos breaks his own Amazon record",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d9ae46012fdad75a3a2fc4f0a2a6e59909101eb9ad86f065e8efed616b80ed4",
        "datetime": 1786284420,
        "headlineKo": "제프 베조스(Jeff Bezos)가 자신의 아마존 기록을 경신했습니다."
      },
      {
        "headline": "3 Artificial Intelligence (AI) Stocks to Load Up On in August",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ece32cf7a99465fead4629449fc21bd4a86b7cbeea98f61cd2f1acd372e03c7",
        "datetime": 1786278600,
        "headlineKo": "8월에 상승할 인공지능(AI) 주식 3개"
      },
      {
        "headline": "Walmart (WMT) Stock Price Prediction: Where Our Price Target Sees the Stock Going Over the Next 12 Months",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9cec613f80deeddea082c19e67a79210861f0ab5ae8a2374d1f536991e8ceb62",
        "datetime": 1786276843,
        "headlineKo": "월마트(WMT) 주가 예측: 목표 가격이 향후 12개월 동안 주가가 어떻게 변할지 예측합니다."
      },
      {
        "headline": "Nvidia CEO Jensen Huang Told Investors in Seoul to \"Buy at a Discount\" During the Recent AI Stock Sell-Off. Here's Whether His Call Has Paid Off.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e278b11eb5aff29c140ae859415179f05d198ee275380f1215e54663638593c",
        "datetime": 1786274100,
        "headlineKo": "엔비디아 젠슨 황 CEO는 최근 AI 주식 매도세에서 서울 투자자들에게 \"할인된 가격에 매수하라\"고 말했다. 그의 전화가 성과를 거두었는지 여부는 다음과 같습니다."
      },
      {
        "headline": "Micron (MU) Secures Strategic Auto Deals and AI Momentum to Offset Cyclical Pressures",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9804693e27e0138aec625f8c5534eaf7c0013bd67a8c34c3f33b2008b550a1e5",
        "datetime": 1786270677,
        "headlineKo": "Micron(MU)은 전략적 자동 거래 및 AI 모멘텀을 확보하여 경기 침체 압력을 상쇄합니다."
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "Tracking Ken Fisher's Fisher Asset Management Portfolio - Q2 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3b927a14a18d57bb82a7fd5ecacd77c7fce9a6ee9183da869696a924d72adf22",
        "datetime": 1786140337,
        "headlineKo": "Ken Fisher의 Fisher 자산 관리 포트폴리오 추적 - 2026년 2분기 업데이트"
      },
      {
        "headline": "The AI Chip Trade Is Getting Bigger — and More Leveraged. Meet REX’s New 3X Bets",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4f66e5d3b25cbdce637b628e61fc6c7c9cade1a84555ee9889592d88d6a4fea1",
        "datetime": 1786115683,
        "headlineKo": "AI 칩 거래가 점점 더 커지고 활용도가 높아지고 있습니다. REX의 새로운 3X Bets을 만나보세요"
      },
      {
        "headline": "Trump Says AI Could Be Bigger Than Oil. These ETFs Are Betting on the Fuel Behind the Boom",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8e9ea1de9e920980a657348d4874f1d021f913640d9d2247f35ce68c8c861b7f",
        "datetime": 1786106140,
        "headlineKo": "트럼프 “AI가 석유보다 더 클 수 있다” 이 ETF는 호황의 원동력에 베팅하고 있습니다."
      },
      {
        "headline": "What's Going On With Taiwan Semiconductor Stock Friday?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=4516ff44783fa8144f0d0770c3682334fb0a1696b2180afcd60318678afa1236",
        "datetime": 1786105529,
        "headlineKo": "금요일 대만 반도체 주식에 무슨 일이 일어나고 있습니까?"
      },
      {
        "headline": "Sandisk: Memory Has Structurally Changed, The Sector Cannot Remain At 5x P/E",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5b1d6bcf45aacdf9260b5b13f1e7e96f3963b7e7e427820080700a9556d8ee21",
        "datetime": 1786096061,
        "headlineKo": "Sandisk: 메모리는 구조적으로 변화했으며 해당 부문은 P/E 5배에 머물 수 없습니다"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Top Semiconductor Stock Outpacing Nvidia With a 36% Gain Over 6 Months",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=281b685ec6364503a8f2be16ea0f984ae2e0cd562970fb08f0d9d5f715f121ba",
        "datetime": 1786281600,
        "headlineKo": "6개월 동안 36%의 상승률로 Nvidia를 능가하는 최고의 반도체 주식"
      },
      {
        "headline": "How Many of the Largest Companies Do You Own -- and Should You Own More or Fewer?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34bd1af3aa40e180acf3199a2e32a7b802d15292e5ec7ca3778a2f693d128add",
        "datetime": 1786258200,
        "headlineKo": "당신은 최대 규모의 회사를 몇 개나 소유하고 있습니까? 그리고 더 많이 소유해야 합니까, 아니면 더 적게 소유해야 합니까?"
      },
      {
        "headline": "Broadcom (AVGO) Pairs AI Chip Boom With A Software Security Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=acf7b437e144f0aeec182da665d73fef5394e3032003655ae563e4f87133869b",
        "datetime": 1786221754,
        "headlineKo": "Broadcom(AVGO), AI 칩 붐과 소프트웨어 보안 푸시 결합"
      },
      {
        "headline": "Nvidia, Micron or Broadcom: What Would Raymond Dalio Do?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91aca5cb4998ce0bff81500fe9630d528ab91e5fc21132eec54717361dc3d2fe",
        "datetime": 1786210239,
        "headlineKo": "Nvidia, Micron 또는 Broadcom: Raymond Dalio는 무엇을 할까요?"
      },
      {
        "headline": "Alphabet CEO Sundar Pichai Just Made a Decision That Could Move Nvidia and Broadcom Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=03a07ae02dbfd9d3011f229c578b956544a5767eb16f2799de173d104dc3d6fd",
        "datetime": 1786204200,
        "headlineKo": "Alphabet CEO Sundar Pichai는 Nvidia와 Broadcom 주식을 움직일 수 있는 결정을 내렸습니다."
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Meta vs. Alphabet: Which Stock Deserves a Spot in Your Portfolio After Q2?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db5e0edf7588cb14a1b67f2c07f88266b4d5e34ad8d78de71d788253d5a18718",
        "datetime": 1786293027,
        "headlineKo": "메타 대 알파벳: 2분기 이후 귀하의 포트폴리오에 포함될 자격이 있는 주식은 무엇입니까?"
      },
      {
        "headline": "Forget VFIAX: Vanguard Sells You the Same S&P 500 Fund Without the $3,000 Toll, or the $75 Fee Fidelity Charges to Buy It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f45e2379d3532d14de2026567c166f0c4f8f943f936b39a9525a667fa4d3d729",
        "datetime": 1786291486,
        "headlineKo": "VFIAX는 잊어버리세요: Vanguard는 $3,000의 수수료나 $75의 수수료 충실도 없이 동일한 S&P 500 펀드를 판매합니다."
      },
      {
        "headline": "SpaceX vs. Meta Platforms: Which Will Reach the $2 Trillion Club First?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8eb578e433d08240ceef8b50e5f90ff73ba95ebf5f282dc33639e8e734faa3b6",
        "datetime": 1786278000,
        "headlineKo": "SpaceX 대 메타 플랫폼: 어느 것이 2조 달러 클럽에 먼저 도달할 것인가?"
      },
      {
        "headline": "'Very little to like': Wall Street assesses surprise July jobs report as stocks jump",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ecc86509bd56887ef1723f7ad5d1d05909c4931bf4219eaed134a49e0d26d695",
        "datetime": 1786275329,
        "headlineKo": "'좋아할 만한 것이 거의 없음': 월스트리트는 주가 급등으로 놀라운 7월 고용 보고서를 평가"
      },
      {
        "headline": "Nvidia's Stock Is Completely Mispriced",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=10150c3778c3ceb36d996077b5bf2f37f04561ac6e668cd9596a2377a0befc64",
        "datetime": 1786267800,
        "headlineKo": "Nvidia의 주식 가격이 완전히 잘못되었습니다"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Tesla's new 6-seat Model Y powers its best July yet as Australia nears 50% electrified sales",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c663e830149bea9323fe6fe59fc8af98224705ad68a8b7dd9a205ad11058433",
        "datetime": 1786294860,
        "headlineKo": "Tesla의 새로운 6인승 Model Y는 호주의 전기 판매가 50%에 가까워지면서 7월 최고의 성적을 거두었습니다."
      },
      {
        "headline": "Forget VFIAX: Vanguard Sells You the Same S&P 500 Fund Without the $3,000 Toll, or the $75 Fee Fidelity Charges to Buy It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f45e2379d3532d14de2026567c166f0c4f8f943f936b39a9525a667fa4d3d729",
        "datetime": 1786291486,
        "headlineKo": "VFIAX는 잊어버리세요: Vanguard는 $3,000의 수수료나 $75의 수수료 충실도 없이 동일한 S&P 500 펀드를 판매합니다."
      },
      {
        "headline": "Elon Musk's Boring Company Is Raising Money at a $20 Billion Valuation. Here's How His Empire Outside Tesla Is Growing.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=012ddd24f393591ae541d3b2dac66023dabc6b4aced6ad4c37be445f068c6507",
        "datetime": 1786280700,
        "headlineKo": "Elon Musk의 지루한 회사는 200억 달러 가치로 자금을 조달하고 있습니다. Tesla 외부의 그의 제국이 성장하는 방법은 다음과 같습니다."
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=deff1d4247207aac2c94f55973825d0ce38ade9e08234210a6c7618171e2655c",
        "datetime": 1786245109,
        "headlineKo": "월스트리트 주간"
      },
      {
        "headline": "Elon Musk Owns 20% of Tesla, a Stake Worth Roughly $200 Billion. Here's Why His Ownership Level Matters for Shareholders.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=400e7d7755cd3b299057e2cbbd31b7e834292cc81e1d69e62629cbf5ee88ad30",
        "datetime": 1786239300,
        "headlineKo": "Elon Musk는 약 2,000억 달러 규모의 Tesla 지분 20%를 소유하고 있습니다. 그의 소유권 수준이 주주들에게 중요한 이유는 다음과 같습니다."
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Micron Has Surged 207% This Year. Brace for a Steep Pullback.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=94308ef42d235b245bc7e10b205a677f62304b920cc33bc7c3c10feb84fe4105",
        "datetime": 1786297500,
        "headlineKo": "마이크론은 올해 207% 급등했다. 급격한 하락에 대비하세요."
      },
      {
        "headline": "Opinion: The Best AI Memory Stock to Buy Isn't Micron or Sandisk -- It's This Korean Giant",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f47db17e08576a99d5ee61bb26ce69bec10ecf0f4e174c192439193bad82a0b",
        "datetime": 1786297380,
        "headlineKo": "의견: 매수해야 할 최고의 AI 메모리 주식은 마이크론이나 샌디스크가 아닌 한국의 거대 기업이다"
      },
      {
        "headline": "Nvidia and Micron Have Driven the S&P 500’s 2026 Rally to Record Highs. History Says It’s Not Over",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a52dc31b76306e7b3c258491daac4f2f49f9b8368777c39b125ff98b6bfd9cc3",
        "datetime": 1786289608,
        "headlineKo": "Nvidia와 Micron은 S&P 500의 2026년 랠리를 최고 기록으로 이끌었습니다. 역사는 아직 끝나지 않았다고 말한다"
      },
      {
        "headline": "Citi Recommends Buying the Dip in Memory Stocks as AI Cycle Gains Momentum",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b751bec3e632db99dff4f6185d414b4bf69fed8049fba972aa1d6cb2dc90e9ef",
        "datetime": 1786282680,
        "headlineKo": "Citi는 AI 주기가 모멘텀을 얻음에 따라 메모리 주식 하락세 매수를 권장합니다."
      },
      {
        "headline": "3 Artificial Intelligence (AI) Stocks to Load Up On in August",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ece32cf7a99465fead4629449fc21bd4a86b7cbeea98f61cd2f1acd372e03c7",
        "datetime": 1786278600,
        "headlineKo": "8월에 상승할 인공지능(AI) 주식 3개"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "AMD (AMD) Buys Inference Chip Startup Taalas To Sharpen Its AI Edge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6924ea8312cd3ab3cdee8559bcb3d2014095b585c8a26454d77f4f58b21e42d4",
        "datetime": 1786271174,
        "headlineKo": "AMD(AMD), AI 우위 강화를 위해 추론 칩 스타트업 Taalas 인수"
      },
      {
        "headline": "AMD: Lisa Su's Magic Appears To Be Fading",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a36fa8e754b6a540eb2ce4f8550a8827de75ca5614f91c5f493a7436ce3b9a38",
        "datetime": 1786267491,
        "headlineKo": "AMD: Lisa Su의 마법이 사라지고 있는 것 같습니다"
      },
      {
        "headline": "AMD just made bold move to challenge Nvidia",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00b002fdee659b9d63f0d5ec45210daa64c6ef2fe6807310576cd32e6ca2dc9d",
        "datetime": 1786226820,
        "headlineKo": "AMD는 Nvidia에 도전하기 위해 과감한 움직임을 보였습니다."
      },
      {
        "headline": "AMD (AMD) Buys Taalas: Is AI Inference the Next Battleground With Nvidia?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e9ac7f4479af1057e966f8a6679617b4aefd89ef388d5a76313d01aba2d2dc0",
        "datetime": 1786218369,
        "headlineKo": "AMD(AMD), Taalas 인수: AI 추론이 Nvidia의 다음 전장이 될까요?"
      },
      {
        "headline": "AMD Tops Q2 Estimates, but Investors Still Hit the Sell Button. What's Next for AMD Stock.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7f048c217128d902c47c64f63cc716c4951c96e5eea64598e4893c7fb5b9720c",
        "datetime": 1786202102,
        "headlineKo": "AMD는 2분기 추정치를 상회했지만 투자자들은 여전히 ​​매도 버튼을 눌렀습니다. AMD 주식의 다음 단계는 무엇입니까?"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Brookfield Asset Management: Reasonably Valued, But AI Tailwinds Could Justify A Higher Valuation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fd1f9e57fcd2cb3f05d375adf0c63cc71a618f3244f797d2beecc1cbbe85b632",
        "datetime": 1786260600,
        "headlineKo": "Brookfield Asset Management: 합리적인 가치, 그러나 AI 순풍으로 인해 더 높은 가치 평가를 정당화할 수 있음"
      },
      {
        "headline": "Intel Foundry Lands a Major New Client Worth Watching",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d0d661e2986f7307738c5f1bbfd29de0a7f934070f636c19c9eaf3eed6735395",
        "datetime": 1786257000,
        "headlineKo": "Intel Foundry, 주목할 만한 새로운 주요 클라이언트 확보"
      },
      {
        "headline": "Ron Paul: Trump’s New Policy Is ‘As Dangerous to Liberty and Prosperity’ as Mamdani’s",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28c634bfcbd567cd5ece4e159fdd5d75d1962c1773e6e708e79c4e0ab0ddf342",
        "datetime": 1786197608,
        "headlineKo": "론 폴: 트럼프의 새로운 정책은 맘다니의 정책만큼 '자유와 번영에 위험하다'"
      },
      {
        "headline": "This Analyst On Wall Street Thinks The CPU Trade Is Overdone, Should You Sell ARM (ARM) Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23344fd2f9d17f5cddc02d91348e7233ad0d5fd55257e42e6bcc470c97a5023f",
        "datetime": 1786193733,
        "headlineKo": "월스트리트의 이 분석가는 CPU 거래가 과도하다고 생각합니다. ARM(ARM) 주식을 팔아야 할까요?"
      },
      {
        "headline": "What Does Intel (INTC) Gain From Its Texas Chip Facility Joint Venture?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=baf6fd986e5ab24950b3c5e1634aee35eee073d4f583b65101c3e0bfb1c64ed9",
        "datetime": 1786155071,
        "headlineKo": "Intel(INTC)은 텍사스 칩 시설 합작 투자를 통해 무엇을 얻습니까?"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Dow Jones Futures Loom As Market Bulls Rule; Cisco, Lumentum Earnings Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88d7a725773851ac5002df976acc5b5fc6b0404b717c105226413e63167f51a5",
        "datetime": 1786277855,
        "headlineKo": "다우존스 선물은 시장 상승세의 지배를 받게 될 것입니다; Cisco, Lumentum 앞으로의 수익"
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=deff1d4247207aac2c94f55973825d0ce38ade9e08234210a6c7618171e2655c",
        "datetime": 1786245109,
        "headlineKo": "월스트리트 주간"
      },
      {
        "headline": "Top 50 High-Quality Dividend Growth Stocks For August 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=67a12f998d09e3a8032fc7543984727ae385b02a09472666c7971ce61d490975",
        "datetime": 1786243803,
        "headlineKo": "2026년 8월 상위 50개 고품질 배당성장주"
      },
      {
        "headline": "KLA Corporation Has Had a Rough Month: A Wall Street Pro Sees 70% Upside Because of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89ca6e2e995a653220dc70b384e9642a97ed71e683342ba137e8de67ff6c849a",
        "datetime": 1786190497,
        "headlineKo": "KLA Corporation은 힘든 한 달을 보냈습니다. 월스트리트 전문가는 이로 인해 70%의 상승 여력을 보았습니다."
      },
      {
        "headline": "Cisco, Tencent Headline Muted Earnings Week",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=92ebcf9e88eb5cc5530a414cce8df0a9c9e063c37e41df80756b63479a5d5bdc",
        "datetime": 1786186800,
        "headlineKo": "Cisco, Tencent 헤드라인 음소거 수익 주간"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Infrastructure Capital Small Cap Income ETF And The Case For Screening Small Caps By Dividend And Balance Sheet",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=396633687c22d92d4cf0aae0b298a1b29b2e118bbb5073323926f4dd8539bc69",
        "datetime": 1786279800,
        "headlineKo": "인프라 캐피탈 소형주 소득 ETF 및 배당금 및 대차대조표별 소형주 선별 사례"
      },
      {
        "headline": "The July CPI Report May Reveal Why Rates Are Headed Even Higher",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d37353ea2a606a6b4d384b348b62603b2e42a78c5c62f8722cce5e3212613eb1",
        "datetime": 1786269300,
        "headlineKo": "7월 CPI 보고서는 금리가 더 높은 방향으로 향하는 이유를 밝힐 수 있습니다"
      },
      {
        "headline": "The Economy No Longer Stinks - But Stocks Have Already Sprinted Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f62cd4669c72cd5976b2f5f02d976e5263c843a47b0ae10698ade3230a714321",
        "datetime": 1786266000,
        "headlineKo": "경제는 더 이상 악취가 나지 않습니다. 하지만 주식은 이미 질주하고 있습니다."
      },
      {
        "headline": "AI Narrative Risk: The Hyperscaler Story Changes Again",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=687f14822590b289e574d7bdfe28cc67c3adea10c57db04be681184034d84d75",
        "datetime": 1786262400,
        "headlineKo": "AI 내러티브 위험: 하이퍼스케일러 이야기가 다시 변경됩니다."
      },
      {
        "headline": "We Are Undoubtedly In An AI Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cd8c6b57b31732d38f6589f34bd51390247075c591205a5edfcdd3d0e0d62a13",
        "datetime": 1786254300,
        "headlineKo": "우리는 의심할 여지 없이 AI 거품 속에 있다"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Infrastructure Capital Small Cap Income ETF And The Case For Screening Small Caps By Dividend And Balance Sheet",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=396633687c22d92d4cf0aae0b298a1b29b2e118bbb5073323926f4dd8539bc69",
        "datetime": 1786279800,
        "headlineKo": "인프라 캐피탈 소형주 소득 ETF 및 배당금 및 대차대조표별 소형주 선별 사례"
      },
      {
        "headline": "The July CPI Report May Reveal Why Rates Are Headed Even Higher",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d37353ea2a606a6b4d384b348b62603b2e42a78c5c62f8722cce5e3212613eb1",
        "datetime": 1786269300,
        "headlineKo": "7월 CPI 보고서는 금리가 더 높은 방향으로 향하는 이유를 밝힐 수 있습니다"
      },
      {
        "headline": "The Economy No Longer Stinks - But Stocks Have Already Sprinted Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f62cd4669c72cd5976b2f5f02d976e5263c843a47b0ae10698ade3230a714321",
        "datetime": 1786266000,
        "headlineKo": "경제는 더 이상 악취가 나지 않습니다. 하지만 주식은 이미 질주하고 있습니다."
      },
      {
        "headline": "AI Narrative Risk: The Hyperscaler Story Changes Again",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=687f14822590b289e574d7bdfe28cc67c3adea10c57db04be681184034d84d75",
        "datetime": 1786262400,
        "headlineKo": "AI 내러티브 위험: 하이퍼스케일러 이야기가 다시 변경됩니다."
      },
      {
        "headline": "We Are Undoubtedly In An AI Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cd8c6b57b31732d38f6589f34bd51390247075c591205a5edfcdd3d0e0d62a13",
        "datetime": 1786254300,
        "headlineKo": "우리는 의심할 여지 없이 AI 거품 속에 있다"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Is CPI FIM (BDL:ORCL) Undervalued As Its Recent Rebound Meets An 8.7x P/E?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49d421086e9898e450e49b02515132eb986b26f41c01c89d0ee9f95a90750616",
        "datetime": 1786288264,
        "headlineKo": "CPI FIM (BDL:ORCL)은 최근 반등이 8.7배 P/E를 충족하면서 저평가되어 있습니까?"
      },
      {
        "headline": "What Does Oracle (ORCL) Gain From Bringing New AI Models Into Its Apps?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23eb7fb887b8ec2f023f4ab7b092da160a1991d243987fdcecfbc40490dabfa8",
        "datetime": 1786234781,
        "headlineKo": "오라클(ORCL)은 새로운 AI 모델을 자사 앱에 도입함으로써 무엇을 얻나요?"
      },
      {
        "headline": "AI is Hollowing Out Tech Sector Jobs: Oracle and Microsoft Help Push Layoff Rate to 20-Year High",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8c56a44792b584fc99698bee4a0bd3f85fe99bc2e1244b6ccd6dd88a75acc22b",
        "datetime": 1786203516,
        "headlineKo": "AI가 기술 부문 일자리를 비워내고 있습니다. Oracle과 Microsoft는 해고율을 20년 최고 수준으로 끌어올리는 데 도움을 주었습니다."
      },
      {
        "headline": "Advanced Micro Devices (AMD) Price Prediction: How Much a $5,000 Investment Could Be Worth by 2031",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=472c30143e27f764aa8b18f3bdadf9787317785fb717e894d06027778b9ef95a",
        "datetime": 1786194011,
        "headlineKo": "AMD(Advanced Micro Devices) 가격 예측: 2031년까지 5,000달러 투자의 가치는 얼마나 될까요?"
      },
      {
        "headline": "The AI Capex Waterfall Is Raining Future Dividends",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2148a17570865a5320b3d6234e4aad136b5969c80e086c34aea2ca62969c3dff",
        "datetime": 1786176900,
        "headlineKo": "AI Capex Waterfall이 미래 배당금을 쏟아 붓고 있습니다."
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Palantir vs. Salesforce: Two Visions of Enterprise AI, One Clear Winner",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=430b8af128c0c7e986ebabd2d830669153ec4475c6a641bccdbe70a743e66214",
        "datetime": 1786285841,
        "headlineKo": "Palantir 대 Salesforce: 엔터프라이즈 AI의 두 가지 비전, 하나의 확실한 승자"
      },
      {
        "headline": "Circle Internet Group vs. Salesforce: Which Technology Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6bf950bb7fe68f780ddb3e464fb693a0e37e4852201cf19678b3b84c26df138e",
        "datetime": 1786139137,
        "headlineKo": "Circle Internet Group vs. Salesforce: 2026년에는 어느 기술 주식이 더 나은 매수인가요?"
      },
      {
        "headline": "Layoffs rock Salesforce in San Francisco’s as tech giant leans in to AI",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e20aa144796fa793435b8efd8a2aa28634958eb8b4eb9a5a84045fc295171202",
        "datetime": 1786130122,
        "headlineKo": "기술 대기업이 AI에 의지함에 따라 해고로 인해 샌프란시스코의 Salesforce가 흔들림"
      },
      {
        "headline": "These dow jones stocks are moving in today's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=a3d83ebddc2c112fffe1432302800858660d0afdb1fc35fdbb5ae7bdc724b5ac",
        "datetime": 1786129806,
        "headlineKo": "다우존스 주식은 오늘 세션에서 움직이고 있습니다"
      },
      {
        "headline": "Is SOUN Worth Buying as Growth Collides With a Premium Valuation?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73582341a19b5fa4622a1785776545cbbb6ecef7f58b353c8360a692acf51eb0",
        "datetime": 1786127220,
        "headlineKo": "성장이 프리미엄 가치 평가와 충돌할 때 SOUN을 구매할 가치가 있나요?"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Palantir vs. Salesforce: Two Visions of Enterprise AI, One Clear Winner",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=430b8af128c0c7e986ebabd2d830669153ec4475c6a641bccdbe70a743e66214",
        "datetime": 1786285841,
        "headlineKo": "Palantir 대 Salesforce: 엔터프라이즈 AI의 두 가지 비전, 하나의 확실한 승자"
      },
      {
        "headline": "USA Today Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a79093d5406b0a63bb4ccab4c5b908c2882ac5ec9a76cb8f64d681b07e39fffc",
        "datetime": 1786266234,
        "headlineKo": "USA Today 2분기 실적 발표 하이라이트"
      },
      {
        "headline": "Palantir: Competition Is For Losers (Rating Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6179f715ec155d23912b0454b3012b789cf2f8e7b65d6d6d609d1965c7369625",
        "datetime": 1786264701,
        "headlineKo": "Palantir: 경쟁은 패자를 위한 것입니다(등급 업그레이드)"
      },
      {
        "headline": "Top Wall Street analysts like these 3 stocks for their solid growth potential",
        "source": "CNBC",
        "url": "https://finnhub.io/api/news?id=c2b222ecaa8ffbe904d435362e77574607c39521f1c503abb054e68b4d15d480",
        "datetime": 1786262516,
        "headlineKo": "최고의 월스트리트 애널리스트들은 탄탄한 성장 잠재력 때문에 이 3개 주식을 좋아합니다."
      },
      {
        "headline": "Earnings beats ease concerns over record U.S. stock rally - WSJ",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc5b1f3df9fd34ca061fc97816b99d46bbe40b24e9d6e0a40ed048a5e17c8ca4",
        "datetime": 1786259300,
        "headlineKo": "기록적인 미국 증시 상승에 대한 우려가 실적 개선으로 완화 - WSJ"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Micron (MU) Secures Strategic Auto Deals and AI Momentum to Offset Cyclical Pressures",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9804693e27e0138aec625f8c5534eaf7c0013bd67a8c34c3f33b2008b550a1e5",
        "datetime": 1786270677,
        "headlineKo": "Micron(MU)은 전략적 자동 거래 및 AI 모멘텀을 확보하여 경기 침체 압력을 상쇄합니다."
      },
      {
        "headline": "Top 50 High-Quality Dividend Growth Stocks For August 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=67a12f998d09e3a8032fc7543984727ae385b02a09472666c7971ce61d490975",
        "datetime": 1786243803,
        "headlineKo": "2026년 8월 상위 50개 고품질 배당성장주"
      },
      {
        "headline": "Qualcomm (QCOM) Q3 2026 Earnings Call Transcript",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7c44e386f450a4c148f9cfdae52ffe279080241975db544a0d3b188f0b977d97",
        "datetime": 1786147128,
        "headlineKo": "Qualcomm(QCOM) 2026년 3분기 실적 통화 녹취록"
      },
      {
        "headline": "The Toughest Questions AMD Faced On Its Latest Call",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6012cda4a6eace2f2d9baf8b6054e29a00a832dccf45c8d130aaa8d714bc9653",
        "datetime": 1786125529,
        "headlineKo": "AMD가 최근 전화 통화에서 직면한 가장 어려운 질문"
      },
      {
        "headline": "How To Earn 11% On NVDA Stock And Set A 30% Safety Net",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0062adb357e5332978c05b4e5b51a2b355c07c3a9d560170175d2a1083998d22",
        "datetime": 1786124670,
        "headlineKo": "NVDA 주식에서 11%를 벌고 30% 안전망을 설정하는 방법"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "This Analyst On Wall Street Thinks The CPU Trade Is Overdone, Should You Sell ARM (ARM) Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23344fd2f9d17f5cddc02d91348e7233ad0d5fd55257e42e6bcc470c97a5023f",
        "datetime": 1786193733,
        "headlineKo": "월스트리트의 이 분석가는 CPU 거래가 과도하다고 생각합니다. ARM(ARM) 주식을 팔아야 할까요?"
      },
      {
        "headline": "Arm Holdings: Capitalizing On The Agentic AI Beyond IP Licensing",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7cb09a6eef437220fab18c5660e80e8caf94125bbd44dccae0267b581359bf2b",
        "datetime": 1786162672,
        "headlineKo": "Arm Holdings: IP 라이선스를 넘어 Agentic AI 활용"
      },
      {
        "headline": "Arm (ARM) Q1 2027 Earnings Call Transcript",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c7a671cf376f7cc02b1a7e0a59c945b63d1dd01ef4714ae8dccc2a4c730167b0",
        "datetime": 1786147127,
        "headlineKo": "Arm (ARM) 2027년 1분기 실적 통화 녹취록"
      },
      {
        "headline": "SpaceX's influence ripples across markets: AlphaCheck",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3d1d95413734be29db32b65f62eb4f426799dd1528802cf51709b390fd7d782",
        "datetime": 1786113725,
        "headlineKo": "SpaceX의 영향력은 시장 전반에 걸쳐 파급됩니다: AlphaCheck"
      },
      {
        "headline": "Arm Holdings: Earnings Surge Is On The Horizon",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cdfee0ab1d2166a52adeba16b912976500a21749b73c2cf92cee9293ae60db01",
        "datetime": 1786098949,
        "headlineKo": "Arm Holdings: 수익 급증이 곧 다가옵니다"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Benzinga Bulls And Bears: Palantir, Marvell, AppLovin",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d0f9c67598ffdbade8934d2501626965b8caaa3bd05f9a909949b5b01099fec8",
        "datetime": 1786177825,
        "headlineKo": "벤징가 황소와 곰: Palantir, Marvell, AppLovin"
      },
      {
        "headline": "Beyond NVIDIA and GPUs: The Next AI & Quantum Winners Leading 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5c8bf475e3c3296d3921199524bd79c30b0e9d2af39cfd2aa236ff6c6d22a563",
        "datetime": 1786129200,
        "headlineKo": "NVIDIA와 GPU를 넘어서: 2026년을 이끄는 차세대 AI 및 양자 승자"
      },
      {
        "headline": "The Toughest Questions AMD Faced On Its Latest Call",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6012cda4a6eace2f2d9baf8b6054e29a00a832dccf45c8d130aaa8d714bc9653",
        "datetime": 1786125529,
        "headlineKo": "AMD가 최근 전화 통화에서 직면한 가장 어려운 질문"
      },
      {
        "headline": "How To Earn 11% On NVDA Stock And Set A 30% Safety Net",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0062adb357e5332978c05b4e5b51a2b355c07c3a9d560170175d2a1083998d22",
        "datetime": 1786124670,
        "headlineKo": "NVDA 주식에서 11%를 벌고 30% 안전망을 설정하는 방법"
      },
      {
        "headline": "Intel Announces Leadership Appointment to Strengthen Customer Engagement and Accelerate Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b66823eae762a34189d264fc1662213e371d09d28ac062ed61c1d707818e4422",
        "datetime": 1786123800,
        "headlineKo": "인텔, 고객 참여 강화 및 성장 가속화를 위한 리더십 임명 발표"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Is ASML Holding (NasdaqGS:ASML) Trading At A Premium Or Fair Value?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=00c4d154ee19185bff316ae18b72902e2729bee1055c94066263f753691bf0f7",
        "datetime": 1786295374,
        "headlineKo": "ASML Holding (NasdaqGS:ASML)은 프리미엄으로 거래됩니까, 아니면 공정 가치로 거래됩니까?"
      },
      {
        "headline": "ASML Holding (ENXTAM:ASML) Draws Fresh Attention After $400 Million Bet On Lithography Rival",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8f578fc7f04b92299ab0a56a73cf97779ae3b412d4edf939c6a19f0952f29970",
        "datetime": 1786212608,
        "headlineKo": "ASML Holding (ENXTAM:ASML), 리소그래피 경쟁사에 4억 달러 투자한 후 새로운 관심 끌다"
      },
      {
        "headline": "Nucor, ASML Lead Five Stocks Near Buy Points Without This Big Risk",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8fed305c3a89920c105aa35b1077d63db7c53657569da944b973d5a04eb5d57f",
        "datetime": 1786190421,
        "headlineKo": "Nucor, ASML은 큰 위험 없이 매수 포인트에 가까운 5개 주식을 선도합니다."
      },
      {
        "headline": "Situational Awareness Reportedly Bet $400 Million on a $5 Billion Stealth Chip Startup— Weeks After the 'Most Catastrophic Hedge Fund Blowup' of the Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=778e192eb6da6db7d6bec77da519dd7dd05eef7a3574b07028f0ae14ecd33bee",
        "datetime": 1786180457,
        "headlineKo": "상황 인식을 통해 50억 달러 규모의 스텔스 칩 스타트업에 4억 달러를 베팅한 것으로 알려짐 - 올해 '가장 재앙적인 헤지 펀드 폭발'이 일어난 지 몇 주 후"
      },
      {
        "headline": "Situational Awareness invested $500 million in chip startup Source Foundry",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f4075162f60e6e3789b813b99f5ce96fb58dbedaf9219a7dfca2a8163e533e8",
        "datetime": 1786166605,
        "headlineKo": "Situational Awareness는 칩 스타트업 Source Foundry에 5억 달러를 투자했습니다."
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "Top Wall Street analysts like these 3 stocks for their solid growth potential",
        "source": "CNBC",
        "url": "https://finnhub.io/api/news?id=c2b222ecaa8ffbe904d435362e77574607c39521f1c503abb054e68b4d15d480",
        "datetime": 1786262516,
        "headlineKo": "최고의 월스트리트 애널리스트들은 탄탄한 성장 잠재력 때문에 이 3개 주식을 좋아합니다."
      },
      {
        "headline": "Top 50 High-Quality Dividend Growth Stocks For August 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=67a12f998d09e3a8032fc7543984727ae385b02a09472666c7971ce61d490975",
        "datetime": 1786243803,
        "headlineKo": "2026년 8월 상위 50개 고품질 배당성장주"
      },
      {
        "headline": "KLA Corporation Has Had a Rough Month: A Wall Street Pro Sees 70% Upside Because of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89ca6e2e995a653220dc70b384e9642a97ed71e683342ba137e8de67ff6c849a",
        "datetime": 1786190497,
        "headlineKo": "KLA Corporation은 힘든 한 달을 보냈습니다. 월스트리트 전문가는 이로 인해 70%의 상승 여력을 보았습니다."
      },
      {
        "headline": "Jim Cramer Names 5 Investing Themes and 13 Stocks to Buy for 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7591081d099f58c7b7dee8c26d95bffffb959449b7425364d7387beeef4eb64a",
        "datetime": 1786180793,
        "headlineKo": "Jim Cramer는 2026년에 매수해야 할 5가지 투자 테마와 13가지 주식을 지정합니다."
      },
      {
        "headline": "Lam Research (LRCX) Q4 2026 Earnings Call Transcript",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1a6b8cb7b6800f3681adbada1e760e93c95643bb9a9b9eaa6dd65e1d9460da4",
        "datetime": 1786147127,
        "headlineKo": "Lam Research(LRCX) 2026년 4분기 실적 통화 기록"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "Top 50 High-Quality Dividend Growth Stocks For August 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=67a12f998d09e3a8032fc7543984727ae385b02a09472666c7971ce61d490975",
        "datetime": 1786243803,
        "headlineKo": "2026년 8월 상위 50개 고품질 배당성장주"
      },
      {
        "headline": "KLA Corporation Has Had a Rough Month: A Wall Street Pro Sees 70% Upside Because of It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=89ca6e2e995a653220dc70b384e9642a97ed71e683342ba137e8de67ff6c849a",
        "datetime": 1786190497,
        "headlineKo": "KLA Corporation은 힘든 한 달을 보냈습니다. 월스트리트 전문가는 이로 인해 70%의 상승 여력을 보았습니다."
      },
      {
        "headline": "Dividend Champion, Contender, And Challenger Highlights: Week Of August 9",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=af72a397d825898b459a1a054ad11e152f22a3d67f610472c2aab599efe41d41",
        "datetime": 1786125278,
        "headlineKo": "배당 챔피언, 경쟁자, 도전자 하이라이트: 8월 9일 주"
      },
      {
        "headline": "AI Boom: Top Stocks to Consider for Your Portfolio",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1794c3e68c5f23063efadb914902f9d9eb89981992ff2283b9a47fe204ac57df",
        "datetime": 1786123560,
        "headlineKo": "AI 붐: 포트폴리오에 고려해야 할 상위 주식"
      },
      {
        "headline": "Tesla-SpaceX Terafab Bet: 4 Chip Equipment Stocks That Could Benefit",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d04ad8fcb1678c161cebaf09f0979893594edf7aed66c5ed905ef8acd4e9016",
        "datetime": 1786121700,
        "headlineKo": "Tesla-SpaceX Terafab 베팅: 이익을 얻을 수 있는 4가지 칩 장비 주식"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:01"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "Opinion: The Best AI Memory Stock to Buy Isn't Micron or Sandisk -- It's This Korean Giant",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f47db17e08576a99d5ee61bb26ce69bec10ecf0f4e174c192439193bad82a0b",
        "datetime": 1786297380,
        "headlineKo": "의견: 매수해야 할 최고의 AI 메모리 주식은 마이크론이나 샌디스크가 아닌 한국의 거대 기업이다"
      },
      {
        "headline": "SanDisk CEO David Goeckeler Expects PC and Smartphone Sales to Decline in 2026, But Sees NAND Recovery Ahead: Here's Why",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=27f7bb850420a4f9773fdca579533261cde3a75a6e4e11a7651ea208b4793e8f",
        "datetime": 1786284084,
        "headlineKo": "SanDisk CEO David Goeckeler는 2026년에 PC와 스마트폰 판매가 감소할 것으로 예상하지만 NAND가 회복될 것이라고 예상합니다: 그 이유는 다음과 같습니다."
      },
      {
        "headline": "Sandisk: A Better Business Is Emerging From The AI Boom",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7c25c9ae1d4b51c0c6171e077297d65bdddd828fbe2352ed5cd311ae60137139",
        "datetime": 1786247324,
        "headlineKo": "Sandisk: AI 붐을 통해 더 나은 비즈니스가 탄생하고 있습니다"
      },
      {
        "headline": "Dear SanDisk Stock Fans, Mark Your Calendars for a Fresh Catalyst on August 13",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7689cbc3674a61a1a8ed2c721a4ef9c7b77cee58d226a88be9097c9545183ef6",
        "datetime": 1786202102,
        "headlineKo": "SanDisk 주식 팬 여러분, 8월 13일에 새로운 촉매제를 달력에 표시해 두세요"
      },
      {
        "headline": "What Sent Sandisk Shares Tumbling Nearly 20% Last Month",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=30fc74ac6ca74d1c127c3e350b82855c04bb97cca485b71c25bc152aa896518a",
        "datetime": 1786201500,
        "headlineKo": "지난 달 Sandisk 주가가 거의 20% 폭락한 이유"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
      {
        "headline": "Memory Sector Stocks Are Down 30% or More From Their Highs, But These 2 Are Worth Buying Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb5839774c4156ed04f35d562acae0450cd67f25c0fe20b9abc0935987d56868",
        "datetime": 1786281300,
        "headlineKo": "메모리 부문 주식은 최고치보다 30% 이상 하락했지만 이 두 가지는 지금 매수할 가치가 있습니다."
      },
      {
        "headline": "Western Digital: Cyclical Upcycle Is On A Clock While Valuation Remains Expensive",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=51ffd5755084da8c37ba27b074547433f6a0e67c041a343325f87ac6642e9367",
        "datetime": 1786226246,
        "headlineKo": "Western Digital: 순환적 업사이클은 순조롭게 진행되고 있지만 평가액은 여전히 ​​비쌉니다"
      },
      {
        "headline": "Western Digital: Watch For Technological Threats Following Post-Earnings Sell-Off",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3dfb870d8082465b095a3f78637a1554efd6427de29abcaf9a6b4edd0b9d0afd",
        "datetime": 1786183887,
        "headlineKo": "Western Digital: 실적 하락 이후 기술적 위협에 주의하세요"
      },
      {
        "headline": "Benzinga Bulls And Bears: Palantir, Marvell, AppLovin",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d0f9c67598ffdbade8934d2501626965b8caaa3bd05f9a909949b5b01099fec8",
        "datetime": 1786177825,
        "headlineKo": "벤징가 황소와 곰: Palantir, Marvell, AppLovin"
      },
      {
        "headline": "Western Digital Says AI Customers Are Already Negotiating Storage Deals Through 2031: 'Visibility Remains Very Strong'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a1e24b8dd253a4be9a1eb143b60072f55719194268d4dcc7357c894b960e658b",
        "datetime": 1786156217,
        "headlineKo": "Western Digital은 AI 고객이 이미 2031년까지 스토리지 거래를 협상하고 있다고 말합니다: '가시성은 여전히 ​​매우 강력합니다'"
      }
    ],
    "_fetched_at": 1786302019.6273055,
    "_updated_label": "2026-08-10 04:02"
  }
};
