// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// Finnhub 실적 캘린더 + 회사 뉴스 헤드라인. 이 파일이 없어도 대시보드는 정상 동작함(해당 섹션만 숨김).
const NEWS_DATA = {
  "NVDA": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 2.1283
    },
    "news": [
      {
        "headline": "How Many High-Yield Financial Stocks Does an Income Portfolio Actually Need?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f56be2b566654dcba299052ae54121b80ecad33d0319914edeaa99446fb5196c",
        "datetime": 1786368900,
        "headlineKo": "소득 포트폴리오에 실제로 얼마나 많은 고수익 금융주가 필요한가?"
      },
      {
        "headline": "Tilray Brands Expects to Hit a Major Milestone for the Current Fiscal Year: $1 Billion in Annual Revenue. Here's How it Plans to Get There",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e057218f4b8174d8ee0fc89ae7d214318858d2ee8f18cd63562b6c97f1cc7786",
        "datetime": 1786368868,
        "headlineKo": "Tilray Brands는 이번 회계연도에 연매출 10억 달러라는 중요한 이정표를 세울 것으로 예상합니다. 여기에 도달할 계획은 다음과 같습니다."
      },
      {
        "headline": "Price Prediction: Archer Aviation Will Trade at $10 on This Date",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6d1a111b06605784e964b165c8dfde17783b6b94bc989a4b95d7831cf7d8fdf",
        "datetime": 1786368621,
        "headlineKo": "가격 예측: Archer Aviation은 이 날짜에 10달러에 거래될 예정입니다."
      },
      {
        "headline": "Prediction: Micron and Taiwan Semiconductor Manufacturing Stocks Will Both Rebound to Fresh Highs Before 2026 Ends",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1802ba0297e4af3f2e567f2fdfa30f9a66390c39194ccf05741ee02202da3a34",
        "datetime": 1786368000,
        "headlineKo": "예측: 마이크론과 대만 반도체 제조 주식은 모두 2026년이 끝나기 전에 최고치로 반등할 것입니다"
      },
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      }
    ],
    "newsHistory": [
      {
        "headline": "How Many High-Yield Financial Stocks Does an Income Portfolio Actually Need?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f56be2b566654dcba299052ae54121b80ecad33d0319914edeaa99446fb5196c",
        "datetime": 1786368900,
        "headlineKo": "소득 포트폴리오에 실제로 얼마나 많은 고수익 금융주가 필요한가?"
      },
      {
        "headline": "Tilray Brands Expects to Hit a Major Milestone for the Current Fiscal Year: $1 Billion in Annual Revenue. Here's How it Plans to Get There",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e057218f4b8174d8ee0fc89ae7d214318858d2ee8f18cd63562b6c97f1cc7786",
        "datetime": 1786368868,
        "headlineKo": "Tilray Brands는 이번 회계연도에 연매출 10억 달러라는 중요한 이정표를 세울 것으로 예상합니다. 여기에 도달할 계획은 다음과 같습니다."
      },
      {
        "headline": "Price Prediction: Archer Aviation Will Trade at $10 on This Date",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6d1a111b06605784e964b165c8dfde17783b6b94bc989a4b95d7831cf7d8fdf",
        "datetime": 1786368621,
        "headlineKo": "가격 예측: Archer Aviation은 이 날짜에 10달러에 거래될 예정입니다."
      },
      {
        "headline": "Prediction: Micron and Taiwan Semiconductor Manufacturing Stocks Will Both Rebound to Fresh Highs Before 2026 Ends",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1802ba0297e4af3f2e567f2fdfa30f9a66390c39194ccf05741ee02202da3a34",
        "datetime": 1786368000,
        "headlineKo": "예측: 마이크론과 대만 반도체 제조 주식은 모두 2026년이 끝나기 전에 최고치로 반등할 것입니다"
      },
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "If You'd Invested $10,000 in Tesla a Decade Ago, Here's How Much You'd Have Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8fbd44fbdccaa3804a6f8518ba033bdc9fe678419cdcdbfef93370ad246ecfbe",
        "datetime": 1786346400,
        "headlineKo": "10년 전에 Tesla에 10,000달러를 투자했다면 현재 얼마를 갖게 될지 알려드립니다."
      },
      {
        "headline": "Prediction: Sandisk Will Reclaim Its All-Time High by the End of the Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc98334c7e4257c9d811b93f0ef18be55fb3d413b368e45bad29ce3e7e1a6ec8",
        "datetime": 1786342800,
        "headlineKo": "예측: Sandisk는 연말까지 사상 최고치를 회복할 것입니다."
      },
      {
        "headline": "Iran Tensions Highlight Defense Supply Gaps Poised to Lift 2 Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce76a079552135814ba525d768ec536e8c5e5ef0f4d31a10d807ad5b5121a1e2",
        "datetime": 1786341000,
        "headlineKo": "이란 긴장으로 인해 2개 주식이 상승할 국방 공급 격차 강조"
      },
      {
        "headline": "New Fed Chair Kevin Warsh Has Refused to Give Forward Guidance for 2 Straight Meetings. Here's Why That Should Worry Markets.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=440b33ee6bd67c70eaa5b92895ccaf4651a361a1153d199d25b4c0ef68c706ce",
        "datetime": 1786340100,
        "headlineKo": "케빈 워시 신임 연준의장은 2차례 연속 회의에 대한 향후 지침 제공을 거부했습니다. 이것이 시장을 걱정해야 하는 이유입니다."
      },
      {
        "headline": "Forget Chips: AI Is Now a Power Trade. These 2 Dividend-Paying Industrials Prove It.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0723b8f4a21429ad48095baff79534983a6612d43d3caf65a7100b390eced2c0",
        "datetime": 1786338300,
        "headlineKo": "칩은 잊어버리세요: AI는 이제 권력 거래입니다. 이 2가지 배당금 지급 산업이 이를 증명합니다."
      },
      {
        "headline": "SpaceX Just Reported Earnings. Here's What History Says Happens Next.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=16505aefd87a2f0f8825f7638ba002e4636e30ae77cf389593e10e6af1c147b4",
        "datetime": 1786326600,
        "headlineKo": "SpaceX가 방금 수익을 보고했습니다. 역사가 말하는 다음은 다음과 같습니다."
      },
      {
        "headline": "Dow Jones Futures Fall After Market Ramps Up; Cisco, Lumentum Earnings Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=54e528fc6353b326fae9f348ae4935f21675c7b18c61d012b829b1cfa35add4d",
        "datetime": 1786326113,
        "headlineKo": "다우존스 선물은 시장 상승 후 하락; Cisco, Lumentum 앞으로의 수익"
      },
      {
        "headline": "Micron Technology Just Bounced 10% Off Its Lows. History Reveals What a $5,000 Investment Will Be Worth by Mid-2027.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=97097a4fad7f0e42946c58358c13b71dedbecee921b566e580d5451691115764",
        "datetime": 1786324800,
        "headlineKo": "마이크론 테크놀로지(Micron Technology)는 최저치에서 10% 반등했습니다. 역사는 2027년 중반까지 5,000달러 투자의 가치가 무엇인지를 보여줍니다."
      },
      {
        "headline": "Exxon Handed Shareholders $9.4 Billion in One Quarter. Here's What It Earned to Cover It.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=aa5a67b95e3704113f0d2e73530b4458aeeeb7efbf7572b7175ab18848ba1b5c",
        "datetime": 1786324020,
        "headlineKo": "Exxon 주주는 한 분기에 94억 달러를 보유했습니다. 이를 커버하여 얻은 결과는 다음과 같습니다."
      },
      {
        "headline": "Mark Cuban Compared Nvidia to a Dot-Com-Era IPO Machine \"Funding Everyone and Anyone.\" Here's What That Means for AI Stocks.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bbea502a04f05de530a8df885ff1c93b17f56a7216c274b072c761181f0f28c1",
        "datetime": 1786323000,
        "headlineKo": "Mark Cuban은 Nvidia를 Dot-Com-Era IPO 기계에 비교하여 \"모든 사람과 누구에게나 자금을 지원합니다.\" AI 주식에 대한 의미는 다음과 같습니다."
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Apple downgraded, HPE upgraded: Wall Street's top analyst calls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60e1ba95325eb6d241779d78938c60d416b134d7a9889d1717b9a84e1a836b9a",
        "datetime": 1786369174,
        "headlineKo": "Apple의 다운그레이드, HPE의 업그레이드: 월스트리트의 최고 분석가 호출"
      },
      {
        "headline": "Apple tests CXMT Chinese memory chips for iPhones, MacBooks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6fa7b31205424356e183cae0c4e58fa7d136ba7b686dc4c903ac8ab01cb3be49",
        "datetime": 1786368357,
        "headlineKo": "Apple, iPhone, MacBook용 CXMT 중국 메모리 칩 테스트"
      },
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "Why Did Toshiba Stop Making Laptops?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ecb9ce5bde6db2f11aed8dfeed3f925e01659d8819fceed96bbeaee0dfe008c",
        "datetime": 1786366020,
        "headlineKo": "도시바는 왜 노트북 생산을 중단했나요?"
      },
      {
        "headline": "Apple Stock Downgraded Ahead Of iPhone 18 Launch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca23c17ecfcb487bae90c6ef3dbbedc7020231d384c6d5e444961580b4ad1ee9",
        "datetime": 1786365722,
        "headlineKo": "iPhone 18 출시를 앞두고 Apple 주식이 강등되었습니다"
      }
    ],
    "newsHistory": [
      {
        "headline": "Apple downgraded, HPE upgraded: Wall Street's top analyst calls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60e1ba95325eb6d241779d78938c60d416b134d7a9889d1717b9a84e1a836b9a",
        "datetime": 1786369174,
        "headlineKo": "Apple의 다운그레이드, HPE의 업그레이드: 월스트리트의 최고 분석가 호출"
      },
      {
        "headline": "Apple tests CXMT Chinese memory chips for iPhones, MacBooks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6fa7b31205424356e183cae0c4e58fa7d136ba7b686dc4c903ac8ab01cb3be49",
        "datetime": 1786368357,
        "headlineKo": "Apple, iPhone, MacBook용 CXMT 중국 메모리 칩 테스트"
      },
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "Why Did Toshiba Stop Making Laptops?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ecb9ce5bde6db2f11aed8dfeed3f925e01659d8819fceed96bbeaee0dfe008c",
        "datetime": 1786366020,
        "headlineKo": "도시바는 왜 노트북 생산을 중단했나요?"
      },
      {
        "headline": "Apple Stock Downgraded Ahead Of iPhone 18 Launch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca23c17ecfcb487bae90c6ef3dbbedc7020231d384c6d5e444961580b4ad1ee9",
        "datetime": 1786365722,
        "headlineKo": "iPhone 18 출시를 앞두고 Apple 주식이 강등되었습니다"
      },
      {
        "headline": "Apple’s Foldable Phone, Whoop-Like Band, CXMT Memory Tests Buzz Keep Traders Hooked",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=16ce403bfb8fa073cbd36a8de2c0f9f2c315ecb480a9cc53c26f553fc546a37c",
        "datetime": 1786337919,
        "headlineKo": "Apple의 폴더블 휴대폰, Whoop-Like 밴드, CXMT 메모리 테스트 버즈로 인해 거래자들의 관심을 끌게 됩니다."
      },
      {
        "headline": "Apple CEO Tim Cook Just Passed His Successor a Mess",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a14bc7f4d27941a03532c537133b62a0a6ad90d592e3f4a49cd690b7952a7b3",
        "datetime": 1786314000,
        "headlineKo": "애플 CEO 팀 쿡이 그의 후임자를 엉망으로 만들었습니다."
      },
      {
        "headline": "Canaccord Genuity Group Q1 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44e2e232519d1dd0aee3e110c1c69689ee8eb9f296c57f5525e2de2e1aaddeec",
        "datetime": 1786313027,
        "headlineKo": "Canaccord Genuity Group 1분기 실적 통화 하이라이트"
      },
      {
        "headline": "Apple's Favorite Bullying Tactic Just Died in China. It Could Cost You Hundreds on Your Next iPhone.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6b6e106e79ffc777b8f789223dbeb105630d64a9cec7f2ce8914c402d706115",
        "datetime": 1786309597,
        "headlineKo": "애플이 가장 좋아하는 괴롭힘 전술이 중국에서 사라졌습니다. 다음 iPhone 구입 비용이 수백 달러에 달할 수 있습니다."
      },
      {
        "headline": "If You Had Bought $10,000 of Apple Stock When Steve Jobs Handpicked Tim Cook as the Next CEO, Here's How Much You'd Have Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2e408efcd9baf777c351d673ddef86876cd724b54b30e35e67946d36f0156c3",
        "datetime": 1786301760,
        "headlineKo": "스티브 잡스가 차기 CEO로 팀 쿡을 직접 뽑았을 때 당신이 애플 주식 10,000달러를 샀다면, 오늘 당신이 갖게 될 액수는 다음과 같습니다."
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "48% of Google Cloud Revenue Next Year Could Come From Just 2 Companies That Have Still Never Turned a Profit",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4850ef1efb39f4b0971e18e6c4b001c66613a10f13b47d07a2080b23900b2a2",
        "datetime": 1786362680,
        "headlineKo": "내년 Google Cloud 수익의 48%는 아직 수익을 내지 못한 단 2개 회사에서 나올 수 있습니다."
      },
      {
        "headline": "JPMorgan Strategists Raise S&P 500 Target as AI Capex Pays Off",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b3b40e6c9c7f9bcbfb95bb22942c5e34ce410b02a047edf8656e7f2c4f3029b",
        "datetime": 1786354100,
        "headlineKo": "JPMorgan 전략가, AI Capex 성과로 S&P 500 목표 상향"
      },
      {
        "headline": "Warren Buffett Bought Alphabet Stock Last Year. He Might Buy This Megacap Stock Next, Says a Wall Street Expert.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f57ea8afd003855794d9688fc464e2bfb653eef4e346159a988aeb19b0ed7213",
        "datetime": 1786351800,
        "headlineKo": "워렌 버핏은 작년에 알파벳 주식을 샀습니다. 월스트리트 전문가는 그가 다음번에 이 메가캡 주식을 살 수도 있다고 말했습니다."
      },
      {
        "headline": "Cold Jobs Report Warms Up Wall Street, Airbnb Steals the Show",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3265d1322a7e3a01d1233f899e1eb92b1554c6337fa460fa9b425d9af368fe77",
        "datetime": 1786351791,
        "headlineKo": "Cold Jobs 보고서가 월스트리트를 따뜻하게 하고 Airbnb가 쇼를 훔칩니다."
      },
      {
        "headline": "Why Is TSM Stock Rising Premarket?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bd94b5ad0b888efd62fb078b7d338e52c2dc8409a8fc693ab261e36cc440c5e1",
        "datetime": 1786351788,
        "headlineKo": "TSM 주가가 프리마켓 상승하는 이유는 무엇입니까?"
      }
    ],
    "newsHistory": [
      {
        "headline": "48% of Google Cloud Revenue Next Year Could Come From Just 2 Companies That Have Still Never Turned a Profit",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4850ef1efb39f4b0971e18e6c4b001c66613a10f13b47d07a2080b23900b2a2",
        "datetime": 1786362680,
        "headlineKo": "내년 Google Cloud 수익의 48%는 아직 수익을 내지 못한 단 2개 회사에서 나올 수 있습니다."
      },
      {
        "headline": "JPMorgan Strategists Raise S&P 500 Target as AI Capex Pays Off",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9b3b40e6c9c7f9bcbfb95bb22942c5e34ce410b02a047edf8656e7f2c4f3029b",
        "datetime": 1786354100,
        "headlineKo": "JPMorgan 전략가, AI Capex 성과로 S&P 500 목표 상향"
      },
      {
        "headline": "Warren Buffett Bought Alphabet Stock Last Year. He Might Buy This Megacap Stock Next, Says a Wall Street Expert.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f57ea8afd003855794d9688fc464e2bfb653eef4e346159a988aeb19b0ed7213",
        "datetime": 1786351800,
        "headlineKo": "워렌 버핏은 작년에 알파벳 주식을 샀습니다. 월스트리트 전문가는 그가 다음번에 이 메가캡 주식을 살 수도 있다고 말했습니다."
      },
      {
        "headline": "Cold Jobs Report Warms Up Wall Street, Airbnb Steals the Show",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3265d1322a7e3a01d1233f899e1eb92b1554c6337fa460fa9b425d9af368fe77",
        "datetime": 1786351791,
        "headlineKo": "Cold Jobs 보고서가 월스트리트를 따뜻하게 하고 Airbnb가 쇼를 훔칩니다."
      },
      {
        "headline": "Why Is TSM Stock Rising Premarket?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bd94b5ad0b888efd62fb078b7d338e52c2dc8409a8fc693ab261e36cc440c5e1",
        "datetime": 1786351788,
        "headlineKo": "TSM 주가가 프리마켓 상승하는 이유는 무엇입니까?"
      },
      {
        "headline": "Alphabet's Cloud Computing Business Just Posted 82% Revenue Growth. Next Quarter Could Be Even Better.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=738f920c36f1ae89e08534ff143477780c6f2163a073e73b8276d4c6a648931b",
        "datetime": 1786309500,
        "headlineKo": "Alphabet의 클라우드 컴퓨팅 사업은 방금 82%의 수익 성장을 기록했습니다. 다음 분기는 더 좋아질 수 있습니다."
      },
      {
        "headline": "Berkshire breaks 14-quarter selling streak with $23.5B of stock buys — $10B went to 1 company at a private price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5eb24b8f7c3d0af9762135649795b532a857259f864fd9af849559da5693d66f",
        "datetime": 1786304400,
        "headlineKo": "버크셔는 235억 달러의 주식 매입으로 14분기 연속 매도세를 경신했습니다. 100억 달러는 비공개 가격으로 1개 회사에 지급되었습니다."
      },
      {
        "headline": "Amazon's $86 2-in-1 laptop and tablet has fully-integrated AI features",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b563b817c44cab4548174be171266ac2b10497054b72f67873e6f2e57e20a0ff",
        "datetime": 1786302900,
        "headlineKo": "Amazon의 86달러짜리 2-in-1 노트북 및 태블릿에는 AI 기능이 완전히 통합되어 있습니다."
      },
      {
        "headline": "Sundar Pichai's Alphabet Has Grown Google Cloud Revenue 82% Year Over Year. Here's Why That Growth Rate Justifies the Company's Capex Bet.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88583328d77350431284e9b91fcac6cda27f7bb40bd1c4fd2915d2faa2230334",
        "datetime": 1786302840,
        "headlineKo": "Sundar Pichai의 Alphabet은 Google Cloud 수익을 전년 대비 82% 성장시켰습니다. 성장률이 회사의 Capex 베팅을 정당화하는 이유는 다음과 같습니다."
      },
      {
        "headline": "A $13.5 Billion Berkshire Hathaway Mystery: What Is Greg Abel Buying Beyond Alphabet?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb6481e70394104b9930f21986077c90913cfdbd870e4089f3acc44e190ebbc4",
        "datetime": 1786295117,
        "headlineKo": "135억 달러 규모의 버크셔 해서웨이 미스터리: 그렉 아벨이 알파벳 외에 무엇을 구매하고 있는가?"
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Update: Market Chatter: BlackRock Signs Deal With Unions for AI Construction Jobs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8924a85b73733d98977f7b85d0f1cedce984c29c82804423dbfe7d8436f0d9a6",
        "datetime": 1786368810,
        "headlineKo": "업데이트: 시장 잡담: BlackRock, AI 건설 작업을 위해 노동조합과 거래 체결"
      },
      {
        "headline": "Market Chatter: Microsoft Plans to Ramp Up Homegrown AI Chip Production Next Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4591d44d88d103b97e114749816e8c4d6fabb8ce0f6c07dd5e989f103c059e6",
        "datetime": 1786368166,
        "headlineKo": "시장 잡담: 마이크로소프트, 내년에 자체 AI 칩 생산을 늘릴 계획"
      },
      {
        "headline": "The setup in this Magnificent 7 stock is \"really strong,\" Bernstein says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=007c7d5a45f24a37cdd5664fb45d6cb8aaad63fb2b41c80229f7797a142059f0",
        "datetime": 1786367056,
        "headlineKo": "이 Magnificent 7 재고의 설정은 \"정말 강력합니다\"라고 Bernstein은 말합니다."
      },
      {
        "headline": "The World's Largest AI Companies Built Deployment Arms This Year. Harbor Built One for Law",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=317a155dc67c693e885c50185d7ffff54385d88fb740eee15d334481cbcf1fe8",
        "datetime": 1786366800,
        "headlineKo": "세계 최대 AI 기업들이 올해 배치 무기를 구축했습니다. 항구는 법을 위해 하나를 건설했습니다"
      },
      {
        "headline": "Oracle’s Rebound Is All But Assured So I Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57244ca2b8e728e60e6dde28bb296029af9883adc4d6e0e409e8af0ee409a565",
        "datetime": 1786365903,
        "headlineKo": "오라클의 반등은 거의 확실하므로 계속 구매합니다"
      }
    ],
    "newsHistory": [
      {
        "headline": "Update: Market Chatter: BlackRock Signs Deal With Unions for AI Construction Jobs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8924a85b73733d98977f7b85d0f1cedce984c29c82804423dbfe7d8436f0d9a6",
        "datetime": 1786368810,
        "headlineKo": "업데이트: 시장 잡담: BlackRock, AI 건설 작업을 위해 노동조합과 거래 체결"
      },
      {
        "headline": "Market Chatter: Microsoft Plans to Ramp Up Homegrown AI Chip Production Next Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c4591d44d88d103b97e114749816e8c4d6fabb8ce0f6c07dd5e989f103c059e6",
        "datetime": 1786368166,
        "headlineKo": "시장 잡담: 마이크로소프트, 내년에 자체 AI 칩 생산을 늘릴 계획"
      },
      {
        "headline": "The setup in this Magnificent 7 stock is \"really strong,\" Bernstein says",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=007c7d5a45f24a37cdd5664fb45d6cb8aaad63fb2b41c80229f7797a142059f0",
        "datetime": 1786367056,
        "headlineKo": "이 Magnificent 7 재고의 설정은 \"정말 강력합니다\"라고 Bernstein은 말합니다."
      },
      {
        "headline": "The World's Largest AI Companies Built Deployment Arms This Year. Harbor Built One for Law",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=317a155dc67c693e885c50185d7ffff54385d88fb740eee15d334481cbcf1fe8",
        "datetime": 1786366800,
        "headlineKo": "세계 최대 AI 기업들이 올해 배치 무기를 구축했습니다. 항구는 법을 위해 하나를 건설했습니다"
      },
      {
        "headline": "Oracle’s Rebound Is All But Assured So I Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57244ca2b8e728e60e6dde28bb296029af9883adc4d6e0e409e8af0ee409a565",
        "datetime": 1786365903,
        "headlineKo": "오라클의 반등은 거의 확실하므로 계속 구매합니다"
      },
      {
        "headline": "LegalZoom.com (LZ) Could Be 32% Undervalued Following Copilot Launch And Guidance Cut",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8008e6a860b6290b1a60b3f584b206a72a5fc30c8a11a7f3044bdc67df91c7aa",
        "datetime": 1786338641,
        "headlineKo": "LegalZoom.com(LZ)은 Copilot 출시 및 지침 삭감으로 인해 32% 저평가될 수 있습니다."
      },
      {
        "headline": "How to Build $13,000 a Month in Dividend Income From Three Income Buckets",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f35751192ac9ff5de0fe1ad8b86e96f8dff627bca8ed6b2c5e4a01d872cb07d9",
        "datetime": 1786332858,
        "headlineKo": "세 가지 소득 버킷에서 한 달에 $13,000의 배당 소득을 얻는 방법"
      },
      {
        "headline": "Meet the High-Yield Dividend Stock Bill Ackman Has Owned for Over a Decade. Here's Why It's a Great Buy in August.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66ace6a5e5c05f09c695fa39ef91f09fd32b2d7c937d9fdf45fe41fdc43a8a72",
        "datetime": 1786320300,
        "headlineKo": "Ackman이 10년 넘게 보유하고 있는 고수익 배당주를 만나보세요. 8월에 구매가 좋은 이유는 다음과 같습니다."
      },
      {
        "headline": "Amazon's $86 2-in-1 laptop and tablet has fully-integrated AI features",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b563b817c44cab4548174be171266ac2b10497054b72f67873e6f2e57e20a0ff",
        "datetime": 1786302900,
        "headlineKo": "Amazon의 86달러짜리 2-in-1 노트북 및 태블릿에는 AI 기능이 완전히 통합되어 있습니다."
      },
      {
        "headline": "Sundar Pichai's Alphabet Has Grown Google Cloud Revenue 82% Year Over Year. Here's Why That Growth Rate Justifies the Company's Capex Bet.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88583328d77350431284e9b91fcac6cda27f7bb40bd1c4fd2915d2faa2230334",
        "datetime": 1786302840,
        "headlineKo": "Sundar Pichai의 Alphabet은 Google Cloud 수익을 전년 대비 82% 성장시켰습니다. 성장률이 회사의 Capex 베팅을 정당화하는 이유는 다음과 같습니다."
      },
      {
        "headline": "Blizzard is now reportedly Microsoft's top studio, according to leaked email",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5e3c8dd7f71c7d7fdae827a0954f5960aab1cc6d6124da37c35b49fda35463ac",
        "datetime": 1786292578,
        "headlineKo": "유출된 이메일에 따르면 블리자드는 현재 마이크로소프트의 최고 스튜디오인 것으로 알려졌다."
      },
      {
        "headline": "Forget VFIAX: Vanguard Sells You the Same S&P 500 Fund Without the $3,000 Toll, or the $75 Fee Fidelity Charges to Buy It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f45e2379d3532d14de2026567c166f0c4f8f943f936b39a9525a667fa4d3d729",
        "datetime": 1786291486,
        "headlineKo": "VFIAX는 잊어버리세요: Vanguard는 $3,000의 수수료나 $75의 수수료 충실도 없이 동일한 S&P 500 펀드를 판매합니다."
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "China uses capital markets to fund AI and chip race against U.S.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3e46eec3893ff37f71fd97b87fefec73a88f59361eb49ad374333d6f6870344",
        "datetime": 1786366549,
        "headlineKo": "중국은 미국과의 AI 및 칩 경쟁에 자금을 조달하기 위해 자본 시장을 사용합니다."
      },
      {
        "headline": "Oracle’s Rebound Is All But Assured So I Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57244ca2b8e728e60e6dde28bb296029af9883adc4d6e0e409e8af0ee409a565",
        "datetime": 1786365903,
        "headlineKo": "오라클의 반등은 거의 확실하므로 계속 구매합니다"
      },
      {
        "headline": "Amazon Back Near $3 Trillion as Jeff Bezos Reportedly Eyes a Third of Liverpool",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb8e1f82c0137a592c86d769942b3f52d3d330b9ee76dcd221f5c3b353be604c",
        "datetime": 1786364937,
        "headlineKo": "Jeff Bezos가 리버풀의 3분의 1을 주시하고 있는 것으로 알려지면서 아마존은 3조 달러 가까이 돌아왔습니다."
      },
      {
        "headline": "Amazon Texas gas plant could be biggest U.S. climate polluter",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7778eae485f4e70977852ab7394154b99d4bd90ecf70e6d00cd3ef2abf94aecc",
        "datetime": 1786364460,
        "headlineKo": "아마존 텍사스 가스 공장은 미국 최대의 기후 오염원이 될 수 있습니다"
      },
      {
        "headline": "Meta shares rise on Muse Glimmer launch and a radical AI vision",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=237d496bea6bff611d38c5b172c48f1466348288c62b5b6a7583ebe3f0ab6e89",
        "datetime": 1786364366,
        "headlineKo": "Muse Glimmer 출시와 급진적인 AI 비전으로 메타 주가 상승"
      }
    ],
    "newsHistory": [
      {
        "headline": "China uses capital markets to fund AI and chip race against U.S.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3e46eec3893ff37f71fd97b87fefec73a88f59361eb49ad374333d6f6870344",
        "datetime": 1786366549,
        "headlineKo": "중국은 미국과의 AI 및 칩 경쟁에 자금을 조달하기 위해 자본 시장을 사용합니다."
      },
      {
        "headline": "Oracle’s Rebound Is All But Assured So I Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57244ca2b8e728e60e6dde28bb296029af9883adc4d6e0e409e8af0ee409a565",
        "datetime": 1786365903,
        "headlineKo": "오라클의 반등은 거의 확실하므로 계속 구매합니다"
      },
      {
        "headline": "Amazon Back Near $3 Trillion as Jeff Bezos Reportedly Eyes a Third of Liverpool",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb8e1f82c0137a592c86d769942b3f52d3d330b9ee76dcd221f5c3b353be604c",
        "datetime": 1786364937,
        "headlineKo": "Jeff Bezos가 리버풀의 3분의 1을 주시하고 있는 것으로 알려지면서 아마존은 3조 달러 가까이 돌아왔습니다."
      },
      {
        "headline": "Amazon Texas gas plant could be biggest U.S. climate polluter",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7778eae485f4e70977852ab7394154b99d4bd90ecf70e6d00cd3ef2abf94aecc",
        "datetime": 1786364460,
        "headlineKo": "아마존 텍사스 가스 공장은 미국 최대의 기후 오염원이 될 수 있습니다"
      },
      {
        "headline": "Meta shares rise on Muse Glimmer launch and a radical AI vision",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=237d496bea6bff611d38c5b172c48f1466348288c62b5b6a7583ebe3f0ab6e89",
        "datetime": 1786364366,
        "headlineKo": "Muse Glimmer 출시와 급진적인 AI 비전으로 메타 주가 상승"
      },
      {
        "headline": "Ross Gerber Cites Data to Make a Point: Take Out Alphabet and Amazon, S&P 500 Earnings Growth Looks Far Less Impressive",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d298a5220b40641c678eff9604c5eb557105f440d0bcf084ce2449bc3259ba43",
        "datetime": 1786340151,
        "headlineKo": "Ross Gerber, 데이터를 인용해 주장: 알파벳과 아마존을 제치고 S&P 500의 수익 성장은 훨씬 덜 인상적임"
      },
      {
        "headline": "Amazon: Stunning Earnings Reaffirm Thesis",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=60ca9389ca584e66e564ed2d70bf639a9160b6143b708729197782c79b02b49c",
        "datetime": 1786329735,
        "headlineKo": "아마존: 놀라운 수익으로 논문 재확인"
      },
      {
        "headline": "Ozempic For $50 a Month? Amazon Pharmacy Rolls Out Cheap Weight-Loss Drugs for Medicare Patients",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=94d82dbdbb2621fa343f905b14fe0424c0b1ea9ae83a9c6b0f3d10e720e2dcad",
        "datetime": 1786325468,
        "headlineKo": "오젬픽을 한 달에 50달러로? 아마존 약국(Amazon Pharmacy), 메디케어 환자를 위한 저렴한 체중 감량 약품 출시"
      },
      {
        "headline": "Airbnb vs. McDonald's: Which Consumer Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f4022937e06bfd5f5ae717583ec3badbc8d65094ff80ff3d6644f4eb3ade6f2f",
        "datetime": 1786320901,
        "headlineKo": "에어비앤비 vs. 맥도날드: 2026년에는 어느 소비재 주식이 더 나은 매수일까요?"
      },
      {
        "headline": "Meet the High-Yield Dividend Stock Bill Ackman Has Owned for Over a Decade. Here's Why It's a Great Buy in August.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66ace6a5e5c05f09c695fa39ef91f09fd32b2d7c937d9fdf45fe41fdc43a8a72",
        "datetime": 1786320300,
        "headlineKo": "Ackman이 10년 넘게 보유하고 있는 고수익 배당주를 만나보세요. 8월에 구매가 좋은 이유는 다음과 같습니다."
      },
      {
        "headline": "UPS Completed Its Amazon Volume Pullback. Is the Turnaround Finally Working?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45d749dddc8ea4df97b0be977c700033af7cea0dd9cd8ade85278eb7c85de74c",
        "datetime": 1786309157,
        "headlineKo": "UPS는 Amazon 볼륨 풀백을 완료했습니다. 턴어라운드가 마침내 성공했나요?"
      },
      {
        "headline": "BofA, JPMorgan, Oppenheimer Name Their 3 Favorite AI Stocks, One Has a $255 Target",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=031a2815a3a9cee38e8e064c7400c6fe54cc1bad5cad4660a8dd73efc719d12b",
        "datetime": 1786308800,
        "headlineKo": "BofA, JPMorgan, Oppenheimer가 가장 좋아하는 AI 주식 3개를 선정했습니다. 그중 하나는 목표액이 255달러입니다."
      },
      {
        "headline": "Electrovaya (TSX:ELVA) Stock Sees Fair Value Lift As Amazon And Jamestown Progress Draw Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7e7abc6593d820c9731cb2fca311c79c7b7ff7a45a6a14bee4a1b6cc4962816",
        "datetime": 1786306241,
        "headlineKo": "Electrovaya (TSX:ELVA) 주식은 Amazon과 Jamestown의 발전이 초점을 맞추면서 공정 가치 상승을 확인"
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "Taiwan Semiconductor (NYSE:TSM): Strong Growth Backed by a Convincing Technical Setup",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=62df15935107c77c1ffca3c58c5e72baa93a2428f4a67d5175c84ce0a9e36550",
        "datetime": 1786361468,
        "headlineKo": "Taiwan Semiconductor(NYSE:TSM): 설득력 있는 기술 설정을 바탕으로 강력한 성장"
      },
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
      }
    ],
    "newsHistory": [
      {
        "headline": "Taiwan Semiconductor (NYSE:TSM): Strong Growth Backed by a Convincing Technical Setup",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=62df15935107c77c1ffca3c58c5e72baa93a2428f4a67d5175c84ce0a9e36550",
        "datetime": 1786361468,
        "headlineKo": "Taiwan Semiconductor(NYSE:TSM): 설득력 있는 기술 설정을 바탕으로 강력한 성장"
      },
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
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "TSMC Sales Jumps 45% as Nvidia-Driven AI Boom Powers Chip Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb0f78710829c44b71394e052790e24fde0035260668364844fd71206c3b68f1",
        "datetime": 1786364316,
        "headlineKo": "Nvidia 기반 AI 붐으로 칩 수요가 증가함에 따라 TSMC 매출이 45% 증가"
      },
      {
        "headline": "Cold Jobs Report Warms Up Wall Street, Airbnb Steals the Show",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3265d1322a7e3a01d1233f899e1eb92b1554c6337fa460fa9b425d9af368fe77",
        "datetime": 1786351791,
        "headlineKo": "Cold Jobs 보고서가 월스트리트를 따뜻하게 하고 Airbnb가 쇼를 훔칩니다."
      },
      {
        "headline": "Sony, TSMC Plan $6.3B Image Sensor Plant in Japan as Apple Camera Demand, ‘Physical AI’ Drive Expansion: Report",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d1320d0cc63935097e9dd132dc9dc3e535639ad69c1b240ec2929b7ee9658427",
        "datetime": 1786341655,
        "headlineKo": "소니, TSMC, 애플 카메라 수요에 따라 일본에 63억 달러 규모의 이미지 센서 공장 계획, '물리적 AI' 드라이브 확장: 보고서"
      },
      {
        "headline": "A $10,000 Investment in Taiwan Semiconductor Today Will Be Worth This Much by 2028",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=825c17b2f2c1865001cc28250b916ff2b10432a8931909117435ee91c1bdbd4f",
        "datetime": 1786305000,
        "headlineKo": "현재 대만 반도체에 대한 10,000달러 투자는 2028년까지 이만큼 가치가 있을 것입니다"
      }
    ],
    "newsHistory": [
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "TSMC Sales Jumps 45% as Nvidia-Driven AI Boom Powers Chip Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb0f78710829c44b71394e052790e24fde0035260668364844fd71206c3b68f1",
        "datetime": 1786364316,
        "headlineKo": "Nvidia 기반 AI 붐으로 칩 수요가 증가함에 따라 TSMC 매출이 45% 증가"
      },
      {
        "headline": "Cold Jobs Report Warms Up Wall Street, Airbnb Steals the Show",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=3265d1322a7e3a01d1233f899e1eb92b1554c6337fa460fa9b425d9af368fe77",
        "datetime": 1786351791,
        "headlineKo": "Cold Jobs 보고서가 월스트리트를 따뜻하게 하고 Airbnb가 쇼를 훔칩니다."
      },
      {
        "headline": "Sony, TSMC Plan $6.3B Image Sensor Plant in Japan as Apple Camera Demand, ‘Physical AI’ Drive Expansion: Report",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=d1320d0cc63935097e9dd132dc9dc3e535639ad69c1b240ec2929b7ee9658427",
        "datetime": 1786341655,
        "headlineKo": "소니, TSMC, 애플 카메라 수요에 따라 일본에 63억 달러 규모의 이미지 센서 공장 계획, '물리적 AI' 드라이브 확장: 보고서"
      },
      {
        "headline": "A $10,000 Investment in Taiwan Semiconductor Today Will Be Worth This Much by 2028",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=825c17b2f2c1865001cc28250b916ff2b10432a8931909117435ee91c1bdbd4f",
        "datetime": 1786305000,
        "headlineKo": "현재 대만 반도체에 대한 10,000달러 투자는 2028년까지 이만큼 가치가 있을 것입니다"
      },
      {
        "headline": "Marvell (MRVL) vs. AVGO and NVDA: Can AI Interconnect Growth Deliver the Earnings Its Premium Valuation Demands?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=839ed02a784a723b4186e221b98b5f93319084ad494b5505b6f3cd8ac366d6fc",
        "datetime": 1786299571,
        "headlineKo": "Marvell(MRVL) 대 AVGO 및 NVDA: AI 상호 연결 성장이 프리미엄 가치 평가 요구에 맞는 수익을 제공할 수 있습니까?"
      },
      {
        "headline": "Forget VFIAX: Vanguard Sells You the Same S&P 500 Fund Without the $3,000 Toll, or the $75 Fee Fidelity Charges to Buy It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f45e2379d3532d14de2026567c166f0c4f8f943f936b39a9525a667fa4d3d729",
        "datetime": 1786291486,
        "headlineKo": "VFIAX는 잊어버리세요: Vanguard는 $3,000의 수수료나 $75의 수수료 충실도 없이 동일한 S&P 500 펀드를 판매합니다."
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Tech stocks today: Meta lays out new AI path, Intel to sell $15 billion in stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2ea91938e1d6e9f425ca7b3ef765c4357cb560c81071938c2ec2e99ee256b773",
        "datetime": 1786370165,
        "headlineKo": "오늘의 기술주: Meta는 새로운 AI 경로를 제시하고 Intel은 150억 달러의 주식을 판매합니다."
      },
      {
        "headline": "Meta Stock Climbs On Open-Source Model Launch; Zuckerberg Criticizes AI Rivals",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48862e6363dbe6559bb92d3f5650e91ac9f6227d66a45b221d7fac57e199603f",
        "datetime": 1786365930,
        "headlineKo": "오픈 소스 모델 출시로 메타 주가 상승; 저커버그, AI 경쟁자 비판"
      },
      {
        "headline": "Amazon Back Near $3 Trillion as Jeff Bezos Reportedly Eyes a Third of Liverpool",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb8e1f82c0137a592c86d769942b3f52d3d330b9ee76dcd221f5c3b353be604c",
        "datetime": 1786364937,
        "headlineKo": "Jeff Bezos가 리버풀의 3분의 1을 주시하고 있는 것으로 알려지면서 아마존은 3조 달러 가까이 돌아왔습니다."
      },
      {
        "headline": "Meta shares rise on Muse Glimmer launch and a radical AI vision",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=237d496bea6bff611d38c5b172c48f1466348288c62b5b6a7583ebe3f0ab6e89",
        "datetime": 1786364366,
        "headlineKo": "Muse Glimmer 출시와 급진적인 AI 비전으로 메타 주가 상승"
      },
      {
        "headline": "Another Bad News For Meta Stock Fans",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3edeb1e06dc1da9f2b981e2fd38d5010b4bc5b7591694e51584d6911a526b7b6",
        "datetime": 1786364102,
        "headlineKo": "메타 스톡 팬을 위한 또 다른 나쁜 소식"
      }
    ],
    "newsHistory": [
      {
        "headline": "Tech stocks today: Meta lays out new AI path, Intel to sell $15 billion in stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2ea91938e1d6e9f425ca7b3ef765c4357cb560c81071938c2ec2e99ee256b773",
        "datetime": 1786370165,
        "headlineKo": "오늘의 기술주: Meta는 새로운 AI 경로를 제시하고 Intel은 150억 달러의 주식을 판매합니다."
      },
      {
        "headline": "Meta Stock Climbs On Open-Source Model Launch; Zuckerberg Criticizes AI Rivals",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48862e6363dbe6559bb92d3f5650e91ac9f6227d66a45b221d7fac57e199603f",
        "datetime": 1786365930,
        "headlineKo": "오픈 소스 모델 출시로 메타 주가 상승; 저커버그, AI 경쟁자 비판"
      },
      {
        "headline": "Amazon Back Near $3 Trillion as Jeff Bezos Reportedly Eyes a Third of Liverpool",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eb8e1f82c0137a592c86d769942b3f52d3d330b9ee76dcd221f5c3b353be604c",
        "datetime": 1786364937,
        "headlineKo": "Jeff Bezos가 리버풀의 3분의 1을 주시하고 있는 것으로 알려지면서 아마존은 3조 달러 가까이 돌아왔습니다."
      },
      {
        "headline": "Meta shares rise on Muse Glimmer launch and a radical AI vision",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=237d496bea6bff611d38c5b172c48f1466348288c62b5b6a7583ebe3f0ab6e89",
        "datetime": 1786364366,
        "headlineKo": "Muse Glimmer 출시와 급진적인 AI 비전으로 메타 주가 상승"
      },
      {
        "headline": "Another Bad News For Meta Stock Fans",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3edeb1e06dc1da9f2b981e2fd38d5010b4bc5b7591694e51584d6911a526b7b6",
        "datetime": 1786364102,
        "headlineKo": "메타 스톡 팬을 위한 또 다른 나쁜 소식"
      },
      {
        "headline": "Meet the High-Yield Dividend Stock Bill Ackman Has Owned for Over a Decade. Here's Why It's a Great Buy in August.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66ace6a5e5c05f09c695fa39ef91f09fd32b2d7c937d9fdf45fe41fdc43a8a72",
        "datetime": 1786320300,
        "headlineKo": "Ackman이 10년 넘게 보유하고 있는 고수익 배당주를 만나보세요. 8월에 구매가 좋은 이유는 다음과 같습니다."
      },
      {
        "headline": "Meta adds more incentives for paying users",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f7dde7c6e3b1932bdbe16ff7d04382190290b94df96d9eae312905aa0f6588f5",
        "datetime": 1786304204,
        "headlineKo": "Meta는 유료 사용자에게 더 많은 인센티브를 추가합니다."
      },
      {
        "headline": "Here's Why Iren Has an Edge in the Neocloud Market, According to Meta's Mark Zuckerberg",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c59f9d0a41beb6571a36c57215fcc896ef0e8d4a3976d5ba27adab2213926c7",
        "datetime": 1786303200,
        "headlineKo": "Meta의 Mark Zuckerberg에 따르면 Iren이 Neocloud 시장에서 우위를 차지하는 이유는 다음과 같습니다."
      },
      {
        "headline": "Mark Zuckerberg's Meta lands in hot soup again",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e94cf59b91d35e55e47407d761d52de23a5654fbdba7ebff47f9905931680d1c",
        "datetime": 1786298580,
        "headlineKo": "Mark Zuckerberg의 Meta가 다시 뜨거운 수프에 빠졌습니다."
      },
      {
        "headline": "Meta vs. Alphabet: Which Stock Deserves a Spot in Your Portfolio After Q2?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db5e0edf7588cb14a1b67f2c07f88266b4d5e34ad8d78de71d788253d5a18718",
        "datetime": 1786293027,
        "headlineKo": "메타 대 알파벳: 2분기 이후 귀하의 포트폴리오에 포함될 자격이 있는 주식은 무엇입니까?"
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Tesla or SpaceX: Who Benefits More From Terafab and How",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba75bb50c83959b3dcee0f04e5b7d8c4dac0ae160c7ca173031774f56c9d6d73",
        "datetime": 1786369338,
        "headlineKo": "Tesla 또는 SpaceX: Terafab에서 더 많은 혜택을 받는 사람과 방법"
      },
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "Elon Musk Says This Is One of the Biggest Challenges for Public Companies",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa9ffcec91b6188b538f8565e497f3a73aa956166d9a5c768a8a8217b72869e6",
        "datetime": 1786366417,
        "headlineKo": "Elon Musk는 이것이 공공 기업의 가장 큰 과제 중 하나라고 말합니다."
      },
      {
        "headline": "SpaceX Stock Jumps Again After Lock-Up Rally. When’s the Next Release, What to Expect.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e9c801790bd3e03e2d69db09fc2f39e82e0c3ca6356bafd3b58d8b00e0319187",
        "datetime": 1786365360,
        "headlineKo": "SpaceX 주식은 락업 랠리 후 다시 상승합니다. 다음 릴리스는 언제이며 무엇을 기대할 수 있습니까?"
      },
      {
        "headline": "Tesla Stock Rises as Army of Fans Help Claw Back Losses",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=505f76b9506180522ff474c4cde2f20bc157373893120eb324f525644fbfe97e",
        "datetime": 1786363920,
        "headlineKo": "팬들의 군대가 손실을 만회하는 데 도움을 주면서 Tesla 주가 상승"
      }
    ],
    "newsHistory": [
      {
        "headline": "Tesla or SpaceX: Who Benefits More From Terafab and How",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba75bb50c83959b3dcee0f04e5b7d8c4dac0ae160c7ca173031774f56c9d6d73",
        "datetime": 1786369338,
        "headlineKo": "Tesla 또는 SpaceX: Terafab에서 더 많은 혜택을 받는 사람과 방법"
      },
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "Elon Musk Says This Is One of the Biggest Challenges for Public Companies",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fa9ffcec91b6188b538f8565e497f3a73aa956166d9a5c768a8a8217b72869e6",
        "datetime": 1786366417,
        "headlineKo": "Elon Musk는 이것이 공공 기업의 가장 큰 과제 중 하나라고 말합니다."
      },
      {
        "headline": "SpaceX Stock Jumps Again After Lock-Up Rally. When’s the Next Release, What to Expect.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e9c801790bd3e03e2d69db09fc2f39e82e0c3ca6356bafd3b58d8b00e0319187",
        "datetime": 1786365360,
        "headlineKo": "SpaceX 주식은 락업 랠리 후 다시 상승합니다. 다음 릴리스는 언제이며 무엇을 기대할 수 있습니까?"
      },
      {
        "headline": "Tesla Stock Rises as Army of Fans Help Claw Back Losses",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=505f76b9506180522ff474c4cde2f20bc157373893120eb324f525644fbfe97e",
        "datetime": 1786363920,
        "headlineKo": "팬들의 군대가 손실을 만회하는 데 도움을 주면서 Tesla 주가 상승"
      },
      {
        "headline": "If You'd Invested $10,000 in Tesla a Decade Ago, Here's How Much You'd Have Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8fbd44fbdccaa3804a6f8518ba033bdc9fe678419cdcdbfef93370ad246ecfbe",
        "datetime": 1786346400,
        "headlineKo": "10년 전에 Tesla에 10,000달러를 투자했다면 현재 얼마를 갖게 될지 알려드립니다."
      },
      {
        "headline": "Tesla (TSLA) Rumors Swirl Over China Split Ahead Of Possible Merger",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c7a5ac3f8b0b0aabe0c8e9f2e7e058b23c155402f09f59c66bdc1e69bb122a0f",
        "datetime": 1786345791,
        "headlineKo": "Tesla (TSLA) 합병 가능성을 앞두고 중국 분열에 대한 소문이 돌다"
      },
      {
        "headline": "How to Deploy $1000 Across Tesla and Ford for Growth and Optionality",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47f241406a740ed8a19f95b77973ffc6e31bd45bbf9b3d49dbb6ce5446da2d5f",
        "datetime": 1786336182,
        "headlineKo": "성장과 선택성을 위해 Tesla와 Ford에 $1000를 배포하는 방법"
      },
      {
        "headline": "Elon Musk Backs Study Showing Bot Traffic Will Be 1,000X Human Traffic — Michael Burry Wants To Know Who's Actually Paying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ee584b73fcc67a5dbd9e367ee1505245bd5918ac540e0c8858cdac17015ed22",
        "datetime": 1786332571,
        "headlineKo": "Elon Musk는 봇 트래픽이 인적 트래픽의 1,000배가 될 것이라는 연구를 지지합니다. Michael Burry는 실제로 누가 돈을 지불하는지 알고 싶어합니다."
      },
      {
        "headline": "Explainer-What is Unitree and why are China’s humanoid robot makers racing to list?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d3e2a6c6cfa6e081e469e0ebaf431879b0dfea1c1ee624a0f84ec675c5bcae9f",
        "datetime": 1786329393,
        "headlineKo": "설명 - 유니트리(Unitree)란 무엇이며, 중국의 휴머노이드 로봇 제조사들이 상장 경쟁을 벌이고 있는 이유는 무엇입니까?"
      },
      {
        "headline": "Billionaire investor shorting SpaceX says one possible fix won't work",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=eee08e96612a63b98b792c7a0e48c4304796ed2ee956e186e9d66be4e05d51a5",
        "datetime": 1786300380,
        "headlineKo": "억만장자 투자자 공매도 SpaceX는 한 가지 가능한 해결책이 효과가 없을 것이라고 말했습니다."
      },
      {
        "headline": "Kevin O'Leary Sat Out SpaceX's IPO— Now He's Plotting His Entry as Elon Musk's Empire Takes Shape: 'As the Stock Settles... I'll Be Watching Closely...'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e618867eec08a034f8aa3fbbbaf5551982df55ecb56081e9b8a959f0803cd6b3",
        "datetime": 1786294902,
        "headlineKo": "Kevin O'Leary는 SpaceX의 IPO에 반대했습니다. 이제 그는 Elon Musk의 제국이 구체화됨에 따라 자신의 진입을 계획하고 있습니다. '주가가 안정되면... 면밀히 지켜볼 것입니다...'"
      },
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
        "headline": "The Potential of Space-Based Data Centers Is Huge. It's Not Enough to Make SpaceX Stock Appealing.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5dc2fc5cc074356ee516e2f61b4fed12a840f6195d4131c0a63ad38142cf0a29",
        "datetime": 1786287602,
        "headlineKo": "우주 기반 데이터 센터의 잠재력은 엄청납니다. SpaceX 주식을 매력적으로 만드는 것만으로는 충분하지 않습니다."
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Prediction: Micron and Taiwan Semiconductor Manufacturing Stocks Will Both Rebound to Fresh Highs Before 2026 Ends",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1802ba0297e4af3f2e567f2fdfa30f9a66390c39194ccf05741ee02202da3a34",
        "datetime": 1786368000,
        "headlineKo": "예측: 마이크론과 대만 반도체 제조 주식은 모두 2026년이 끝나기 전에 최고치로 반등할 것입니다"
      },
      {
        "headline": "Micron Stock Rises Despite Apple China Chip Threat",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78b363ab0e7bbc6e856f6eb1fb21fb3a1657510e4c26621fffe43612651b12eb",
        "datetime": 1786363980,
        "headlineKo": "애플 차이나 칩 위협에도 불구하고 마이크론 주가 상승"
      },
      {
        "headline": "Schwab: Retail investors want AI stocks on the cheap",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=986ca2849db60d62d21ebc15192d06893c6d860675d974d42068263c8dd55c5e",
        "datetime": 1786361465,
        "headlineKo": "Schwab: 소매 투자자들은 AI 주식을 싼 가격에 원합니다"
      },
      {
        "headline": "Why Micron Stock Plummeted 28.7% in July But Is Rebounding in August",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=06d896163777df42b836f237380644a24032771f3b8c0a1c96ac345ce3a9e3b3",
        "datetime": 1786360800,
        "headlineKo": "마이크론 주가가 7월에 28.7% 급락했지만 8월에 반등하는 이유"
      },
      {
        "headline": "Micron’s Memory Boom Is Heading For A Peak, Analyst Warns",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=644dbd17aafb79fa94d8f56b0b2a34154fc88f71dc8f1aef2d6dbcf6588061fb",
        "datetime": 1786356028,
        "headlineKo": "분석가는 Micron의 메모리 붐이 정점을 향하고 있다고 경고합니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Prediction: Micron and Taiwan Semiconductor Manufacturing Stocks Will Both Rebound to Fresh Highs Before 2026 Ends",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1802ba0297e4af3f2e567f2fdfa30f9a66390c39194ccf05741ee02202da3a34",
        "datetime": 1786368000,
        "headlineKo": "예측: 마이크론과 대만 반도체 제조 주식은 모두 2026년이 끝나기 전에 최고치로 반등할 것입니다"
      },
      {
        "headline": "Micron Stock Rises Despite Apple China Chip Threat",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78b363ab0e7bbc6e856f6eb1fb21fb3a1657510e4c26621fffe43612651b12eb",
        "datetime": 1786363980,
        "headlineKo": "애플 차이나 칩 위협에도 불구하고 마이크론 주가 상승"
      },
      {
        "headline": "Schwab: Retail investors want AI stocks on the cheap",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=986ca2849db60d62d21ebc15192d06893c6d860675d974d42068263c8dd55c5e",
        "datetime": 1786361465,
        "headlineKo": "Schwab: 소매 투자자들은 AI 주식을 싼 가격에 원합니다"
      },
      {
        "headline": "Why Micron Stock Plummeted 28.7% in July But Is Rebounding in August",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=06d896163777df42b836f237380644a24032771f3b8c0a1c96ac345ce3a9e3b3",
        "datetime": 1786360800,
        "headlineKo": "마이크론 주가가 7월에 28.7% 급락했지만 8월에 반등하는 이유"
      },
      {
        "headline": "Micron’s Memory Boom Is Heading For A Peak, Analyst Warns",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=644dbd17aafb79fa94d8f56b0b2a34154fc88f71dc8f1aef2d6dbcf6588061fb",
        "datetime": 1786356028,
        "headlineKo": "분석가는 Micron의 메모리 붐이 정점을 향하고 있다고 경고합니다."
      },
      {
        "headline": "Why Micron is Decisively Better Positioned Than Intel Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6318475563807bafd10a9550bb2bc2ce56b02d90f06053f7e96f4a7a959af6d",
        "datetime": 1786336333,
        "headlineKo": "마이크론이 현재 인텔보다 결정적으로 더 나은 위치에 있는 이유"
      },
      {
        "headline": "MU Outpaced SNDK, WDC This Week: Now, Retail Traders Bet On Outlook Raise At Key Analyst Event",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ed89cdcd076f6fa0b7579fdac0b5977f0fa94451f8279861be41ee4c0397ca0",
        "datetime": 1786327764,
        "headlineKo": "MU가 이번 주 SNDK, WDC를 능가했습니다. 이제 소매 거래자들은 주요 분석가 이벤트에서 전망 인상에 베팅했습니다."
      },
      {
        "headline": "Micron Technology Just Bounced 10% Off Its Lows. History Reveals What a $5,000 Investment Will Be Worth by Mid-2027.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=97097a4fad7f0e42946c58358c13b71dedbecee921b566e580d5451691115764",
        "datetime": 1786324800,
        "headlineKo": "마이크론 테크놀로지(Micron Technology)는 최저치에서 10% 반등했습니다. 역사는 2027년 중반까지 5,000달러 투자의 가치가 무엇인지를 보여줍니다."
      },
      {
        "headline": "SK Hynix and Samsung Just Sent a Major Warning to Micron Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d29b776e04105275fd12381ac14d663ecdb04988ac3d5d8e52a78db5d7e4d6ae",
        "datetime": 1786319400,
        "headlineKo": "SK하이닉스와 삼성이 마이크론 투자자들에게 중대한 경고를 보냈다."
      },
      {
        "headline": "Apple's Favorite Bullying Tactic Just Died in China. It Could Cost You Hundreds on Your Next iPhone.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6b6e106e79ffc777b8f789223dbeb105630d64a9cec7f2ce8914c402d706115",
        "datetime": 1786309597,
        "headlineKo": "애플이 가장 좋아하는 괴롭힘 전술이 중국에서 사라졌습니다. 다음 iPhone 구입 비용이 수백 달러에 달할 수 있습니다."
      },
      {
        "headline": "Unpacking the Latest Pullback in Micron Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8663778e8f6a561f7fc0b9ae36a3d6de0b778bb990ee07d5c392df826c71c692",
        "datetime": 1786306800,
        "headlineKo": "Micron 주식의 최신 하락세 풀기"
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "What TSMC Sales Growth Means for Apple and Nvidia Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c60cadc436eabc9263ab721f8b08f898c97e7c343aa5688551daf44df448fee4",
        "datetime": 1786364340,
        "headlineKo": "TSMC 매출 성장이 Apple 및 Nvidia 주식에 의미하는 것"
      },
      {
        "headline": "Intel plans $15 billion share sale as turnaround rally lifts stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8c839c9b77aabdbb756887955589c552ff8d98b6cf296f1a59cdabe45da02f3",
        "datetime": 1786363506,
        "headlineKo": "인텔은 턴어라운드 랠리로 주가가 상승함에 따라 150억 달러 규모의 주식 매각을 계획하고 있습니다."
      },
      {
        "headline": "Who Really Benefits as Sovereign AI Infrastructure Spending Explodes?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ae7fb1f873d77913ba2f06beddeeaf3c3f7c67c24400c22f799361200f5795b",
        "datetime": 1786362943,
        "headlineKo": "주권 AI 인프라 지출이 폭발적으로 증가하면 누가 실제로 혜택을 받나요?"
      },
      {
        "headline": "Nebius: The $34 Billion Execution Test Starts Now",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=39f1f2ba0b24c02730f824406d4752ea6e928856b6e7a0c53d26ce0a7788baf0",
        "datetime": 1786357263,
        "headlineKo": "Nebius: 340억 달러 규모의 실행 테스트가 지금 시작됩니다"
      }
    ],
    "newsHistory": [
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "What TSMC Sales Growth Means for Apple and Nvidia Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c60cadc436eabc9263ab721f8b08f898c97e7c343aa5688551daf44df448fee4",
        "datetime": 1786364340,
        "headlineKo": "TSMC 매출 성장이 Apple 및 Nvidia 주식에 의미하는 것"
      },
      {
        "headline": "Intel plans $15 billion share sale as turnaround rally lifts stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e8c839c9b77aabdbb756887955589c552ff8d98b6cf296f1a59cdabe45da02f3",
        "datetime": 1786363506,
        "headlineKo": "인텔은 턴어라운드 랠리로 주가가 상승함에 따라 150억 달러 규모의 주식 매각을 계획하고 있습니다."
      },
      {
        "headline": "Who Really Benefits as Sovereign AI Infrastructure Spending Explodes?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ae7fb1f873d77913ba2f06beddeeaf3c3f7c67c24400c22f799361200f5795b",
        "datetime": 1786362943,
        "headlineKo": "주권 AI 인프라 지출이 폭발적으로 증가하면 누가 실제로 혜택을 받나요?"
      },
      {
        "headline": "Nebius: The $34 Billion Execution Test Starts Now",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=39f1f2ba0b24c02730f824406d4752ea6e928856b6e7a0c53d26ce0a7788baf0",
        "datetime": 1786357263,
        "headlineKo": "Nebius: 340억 달러 규모의 실행 테스트가 지금 시작됩니다"
      },
      {
        "headline": "Nvidia, Eli Lilly, and Disney Show It’s Time to Back the Top Dogs",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9356fed22ce295de843eda2daed53d41ab188e37f0a92398a2848a1d1d986204",
        "datetime": 1786338000,
        "headlineKo": "Nvidia, Eli Lilly 및 Disney 쇼 이제 최고의 개들을 뒷받침할 시간입니다"
      },
      {
        "headline": "US Export Control Meant to Cripple China’s AI. But They Created Its Most Valuable Company",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2747da36af300b98b2156d8f6dcdf8e18a98f2dc138ba28177d9d36e2c61781c",
        "datetime": 1786333380,
        "headlineKo": "미국의 수출 통제는 중국의 AI를 무력화시키려는 의도다. 하지만 그들은 가장 가치 있는 회사를 만들었습니다."
      },
      {
        "headline": "AMD: CapEx Is Fueling The Next Leg",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b25fa961554fafdb0af1603c7497b79f21af6e021cf7c9ffb5c5a35645d28769",
        "datetime": 1786321656,
        "headlineKo": "AMD: CapEx가 다음 단계를 촉진하고 있습니다"
      },
      {
        "headline": "5-star analyst resets AMD stock price target",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4f92732abf1cbd6b18ae5308453bc90dfc7801a9bd31be5cf0c4952e7ed841ca",
        "datetime": 1786309380,
        "headlineKo": "5성급 분석가가 AMD 주가 목표를 재설정했습니다."
      },
      {
        "headline": "Core Scientific (CORZ) Shareholders Rejected a $9B Sale. Does the AMD Deal Vindicate Them?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ed763396df52780017be1a582096b91d7d612e481ce57680fab43e199a18a72",
        "datetime": 1786307584,
        "headlineKo": "Core Scientific(CORZ) 주주들이 90억 달러 매각을 거부했습니다. AMD 거래가 이를 입증합니까?"
      },
      {
        "headline": "A $10,000 Investment in Taiwan Semiconductor Today Will Be Worth This Much by 2028",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=825c17b2f2c1865001cc28250b916ff2b10432a8931909117435ee91c1bdbd4f",
        "datetime": 1786305000,
        "headlineKo": "현재 대만 반도체에 대한 10,000달러 투자는 2028년까지 이만큼 가치가 있을 것입니다"
      },
      {
        "headline": "Advanced Micro Devices Dips on Lower FCF, But Short Put Plays Attract Value Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=369d97fb6e27d98faf581c9a908cd5ac7191d953c945c4513396290cd51ffe7b",
        "datetime": 1786284002,
        "headlineKo": "첨단 마이크로 디바이스는 FCF가 하락했지만 풋옵션 매도 플레이가 가치 투자자를 끌어 모았습니다."
      },
      {
        "headline": "Advanced Micro Devices Reported Record Revenue. AMD Stock Sank Anyway.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed5256c247acb858a154c4f40fb3e74060878ce81198be66c0e0d67fa89e1e8d",
        "datetime": 1786281302,
        "headlineKo": "Advanced Micro Devices는 기록적인 수익을 보고했습니다. 어쨌든 AMD 주식은 하락했습니다."
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Tech stocks today: Meta lays out new AI path, Intel to sell $15 billion in stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=094b03dbabe0f73b48244ea589ef07d2745b8d8f9f04414bced0f6faa5f1dc3b",
        "datetime": 1786370165,
        "headlineKo": "오늘의 기술주: Meta는 새로운 AI 경로를 제시하고 Intel은 150억 달러의 주식을 판매합니다."
      },
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "Update: US Equity Futures Mostly Flat Pre-Bell Amid Lack of Progress in Middle East Peace Negotiations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b950f610ea074d023b82bc1d83aa8798c41fb0f9996810bc80b700e4ca926fd1",
        "datetime": 1786366641,
        "headlineKo": "업데이트: 중동 평화 협상의 진전이 부족한 가운데 미국 주식 선물은 대부분 보합세를 보이고 있습니다."
      },
      {
        "headline": "Intel raises $15 billion in stock offering for AI chip growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d23f0cdf57c68ebf5bf4b25669138210ffe4ca1ca37f65d3547be5090948979",
        "datetime": 1786365934,
        "headlineKo": "인텔, AI 칩 성장을 위해 150억 달러 규모의 주식 공모"
      },
      {
        "headline": "Intel stock stumbles following blockbuster $15 billion equity offering",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f194106493fab5fab8ff3e6de4f29b07c197a88641277e50789f9a0455d5621e",
        "datetime": 1786365922,
        "headlineKo": "인텔 주가는 블록버스터급 150억 달러 규모의 주식 공모로 하락세를 보이고 있습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Tech stocks today: Meta lays out new AI path, Intel to sell $15 billion in stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=094b03dbabe0f73b48244ea589ef07d2745b8d8f9f04414bced0f6faa5f1dc3b",
        "datetime": 1786370165,
        "headlineKo": "오늘의 기술주: Meta는 새로운 AI 경로를 제시하고 Intel은 150억 달러의 주식을 판매합니다."
      },
      {
        "headline": "Intel Falls 5% on Proposed $15B Share Sale as AMD, NVIDIA, Broadcom Hold Steady",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=927f79fb8197c08718fbf9047d543896d51722a6794ed50f2089efd239681b44",
        "datetime": 1786367960,
        "headlineKo": "Intel, AMD, NVIDIA, Broadcom이 안정적으로 유지함에 따라 제안된 150억 달러 주식 매각 제안에서 5% 하락"
      },
      {
        "headline": "Update: US Equity Futures Mostly Flat Pre-Bell Amid Lack of Progress in Middle East Peace Negotiations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b950f610ea074d023b82bc1d83aa8798c41fb0f9996810bc80b700e4ca926fd1",
        "datetime": 1786366641,
        "headlineKo": "업데이트: 중동 평화 협상의 진전이 부족한 가운데 미국 주식 선물은 대부분 보합세를 보이고 있습니다."
      },
      {
        "headline": "Intel raises $15 billion in stock offering for AI chip growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d23f0cdf57c68ebf5bf4b25669138210ffe4ca1ca37f65d3547be5090948979",
        "datetime": 1786365934,
        "headlineKo": "인텔, AI 칩 성장을 위해 150억 달러 규모의 주식 공모"
      },
      {
        "headline": "Intel stock stumbles following blockbuster $15 billion equity offering",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f194106493fab5fab8ff3e6de4f29b07c197a88641277e50789f9a0455d5621e",
        "datetime": 1786365922,
        "headlineKo": "인텔 주가는 블록버스터급 150억 달러 규모의 주식 공모로 하락세를 보이고 있습니다."
      },
      {
        "headline": "Why Micron is Decisively Better Positioned Than Intel Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6318475563807bafd10a9550bb2bc2ce56b02d90f06053f7e96f4a7a959af6d",
        "datetime": 1786336333,
        "headlineKo": "마이크론이 현재 인텔보다 결정적으로 더 나은 위치에 있는 이유"
      },
      {
        "headline": "1 Nasdaq 100 Stock for Long-Term Investors and 2 We Question",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47bfcd29fd20b3c562d7257d05c9adfb5830ee7fe22cf398774a93865b111d5f",
        "datetime": 1786313602,
        "headlineKo": "장기 투자자를 위한 Nasdaq 100 주식 1개와 We Question 2개"
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.4544
    },
    "news": [
      {
        "headline": "Update: US Equity Futures Mostly Flat Pre-Bell Amid Lack of Progress in Middle East Peace Negotiations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b950f610ea074d023b82bc1d83aa8798c41fb0f9996810bc80b700e4ca926fd1",
        "datetime": 1786366641,
        "headlineKo": "업데이트: 중동 평화 협상의 진전이 부족한 가운데 미국 주식 선물은 대부분 보합세를 보이고 있습니다."
      },
      {
        "headline": "Get insights into the top movers in the S&P500 index of Monday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8f8a6c94e14cda994096b4ea274ea3ef41e64e688ce7867132f30f540487144b",
        "datetime": 1786365301,
        "headlineKo": "월요일 시장 전 세션의 S&P500 지수에서 최고 변동 항목에 대한 통찰력을 얻으세요."
      },
      {
        "headline": "US Equity Futures Mostly Flat Pre-Bell Amid Lack of Progress in Middle East Peace Negotiations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e9a20fe8441d839d9074e631d04e9d9f1fe9b2ba286df29e61878c66c9554a1",
        "datetime": 1786363073,
        "headlineKo": "중동 평화 협상의 진전이 부족한 가운데 미국 주식 선물은 대부분 보합세를 보이고 있습니다."
      },
      {
        "headline": "Earnings Season, Persian Gulf Lull, Lift Wall Street Pre-Bell; Asia, Europe Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8e1e008e61b5afa0ef040583b37dba934fdba20d9b4edac3312e53a3a7b1aee",
        "datetime": 1786360543,
        "headlineKo": "수익 시즌, 페르시아만 소강, 월스트리트 프리 벨 리프트; 아시아, 유럽 위로"
      },
      {
        "headline": "SMCI, Apple, Intel, Berkshire Hathaway, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c9e6ded7e617fa60b2edc71f68759855d4aeef17f6b5e936d3e05746b786acb7",
        "datetime": 1786360440,
        "headlineKo": "SMCI, Apple, Intel, Berkshire Hathaway 및 오늘날 시장을 설명하는 기타 주식"
      }
    ],
    "newsHistory": [
      {
        "headline": "Update: US Equity Futures Mostly Flat Pre-Bell Amid Lack of Progress in Middle East Peace Negotiations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b950f610ea074d023b82bc1d83aa8798c41fb0f9996810bc80b700e4ca926fd1",
        "datetime": 1786366641,
        "headlineKo": "업데이트: 중동 평화 협상의 진전이 부족한 가운데 미국 주식 선물은 대부분 보합세를 보이고 있습니다."
      },
      {
        "headline": "Get insights into the top movers in the S&P500 index of Monday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8f8a6c94e14cda994096b4ea274ea3ef41e64e688ce7867132f30f540487144b",
        "datetime": 1786365301,
        "headlineKo": "월요일 시장 전 세션의 S&P500 지수에서 최고 변동 항목에 대한 통찰력을 얻으세요."
      },
      {
        "headline": "US Equity Futures Mostly Flat Pre-Bell Amid Lack of Progress in Middle East Peace Negotiations",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e9a20fe8441d839d9074e631d04e9d9f1fe9b2ba286df29e61878c66c9554a1",
        "datetime": 1786363073,
        "headlineKo": "중동 평화 협상의 진전이 부족한 가운데 미국 주식 선물은 대부분 보합세를 보이고 있습니다."
      },
      {
        "headline": "Earnings Season, Persian Gulf Lull, Lift Wall Street Pre-Bell; Asia, Europe Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f8e1e008e61b5afa0ef040583b37dba934fdba20d9b4edac3312e53a3a7b1aee",
        "datetime": 1786360543,
        "headlineKo": "수익 시즌, 페르시아만 소강, 월스트리트 프리 벨 리프트; 아시아, 유럽 위로"
      },
      {
        "headline": "SMCI, Apple, Intel, Berkshire Hathaway, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c9e6ded7e617fa60b2edc71f68759855d4aeef17f6b5e936d3e05746b786acb7",
        "datetime": 1786360440,
        "headlineKo": "SMCI, Apple, Intel, Berkshire Hathaway 및 오늘날 시장을 설명하는 기타 주식"
      },
      {
        "headline": "Dow Jones Futures Fall After Market Ramps Up; Cisco, Lumentum Earnings Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=54e528fc6353b326fae9f348ae4935f21675c7b18c61d012b829b1cfa35add4d",
        "datetime": 1786326113,
        "headlineKo": "다우존스 선물은 시장 상승 후 하락; Cisco, Lumentum 앞으로의 수익"
      },
      {
        "headline": "Dow Jones Futures Fall As Market Bulls Rule; Cisco, Lumentum Earnings Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d07f539f863aae63e4ea985f4d3f429c7359be8cae6e4688105987cce16db8df",
        "datetime": 1786319010,
        "headlineKo": "다우존스 선물은 시장 상승세의 지배로 하락합니다. Cisco, Lumentum 앞으로의 수익"
      },
      {
        "headline": "3 Mega-Cap Stocks to Research Further",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7640c4dc5f31ea1cc4aeab9cf6e6ebf23fd0d72788c33c2589e0096577083b11",
        "datetime": 1786312162,
        "headlineKo": "추가 조사가 필요한 메가캡 주식 3개"
      },
      {
        "headline": "Inflation Data, Super Micro, Cisco, Rocket Lab, Tapestry, and More to Watch This Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2196833fa2503ed504da0c249a27b5be9767ce315027ef77e4e98a6a285cd27d",
        "datetime": 1786298400,
        "headlineKo": "인플레이션 데이터, Super Micro, Cisco, Rocket Lab, Tapestry 등 이번 주에 시청할 콘텐츠"
      },
      {
        "headline": "Dow Jones Futures Loom As Market Bulls Rule; Cisco, Lumentum Earnings Ahead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=88d7a725773851ac5002df976acc5b5fc6b0404b717c105226413e63167f51a5",
        "datetime": 1786277855,
        "headlineKo": "다우존스 선물은 시장 상승세의 지배를 받게 될 것입니다; Cisco, Lumentum 앞으로의 수익"
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:02"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Negatives And Positives In Aggregate Still Point Up",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b6f88ec072af8f903a6726368c4ca65a00bcffda1f308633bc876fb28bd152c9",
        "datetime": 1786357861,
        "headlineKo": "부정적인 측면과 긍정적인 측면 모두 여전히 상승세를 보이고 있습니다."
      },
      {
        "headline": "The Fed Tightened Without Hiking",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fb715695cb4e29ddd7e20abf4a7099588366c136074384d7bd91555b940ec916",
        "datetime": 1786357525,
        "headlineKo": "연준은 하이킹 없이 긴축했다"
      },
      {
        "headline": "Don't Get Greedy, Beware Of The Crash",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ca0b4555743f2b4186081373abaa076f55f4031e6d59957160ed890e347b6dd1",
        "datetime": 1786357377,
        "headlineKo": "욕심내지 말고 충돌을 조심하세요"
      },
      {
        "headline": "Will The Bond Market Verify The Stock Market's Revived Optimism?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=20be71e839063888c2d2d3d78b94081c025355bad225fd0edb50bd37c8c940c5",
        "datetime": 1786355400,
        "headlineKo": "채권시장은 주식시장의 낙관론을 부활시킬 것인가?"
      },
      {
        "headline": "Breadth Breaks Higher as Small Caps Join Friday’s Rally",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=53c7aa5814e53d16a3f865ccbff979856fc1ef6d560e67e6f53051add66bcd98",
        "datetime": 1786355288,
        "headlineKo": "소형주가 금요일 랠리에 합류함에 따라 폭이 더 높아졌습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Negatives And Positives In Aggregate Still Point Up",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b6f88ec072af8f903a6726368c4ca65a00bcffda1f308633bc876fb28bd152c9",
        "datetime": 1786357861,
        "headlineKo": "부정적인 측면과 긍정적인 측면 모두 여전히 상승세를 보이고 있습니다."
      },
      {
        "headline": "The Fed Tightened Without Hiking",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fb715695cb4e29ddd7e20abf4a7099588366c136074384d7bd91555b940ec916",
        "datetime": 1786357525,
        "headlineKo": "연준은 하이킹 없이 긴축했다"
      },
      {
        "headline": "Don't Get Greedy, Beware Of The Crash",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ca0b4555743f2b4186081373abaa076f55f4031e6d59957160ed890e347b6dd1",
        "datetime": 1786357377,
        "headlineKo": "욕심내지 말고 충돌을 조심하세요"
      },
      {
        "headline": "Will The Bond Market Verify The Stock Market's Revived Optimism?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=20be71e839063888c2d2d3d78b94081c025355bad225fd0edb50bd37c8c940c5",
        "datetime": 1786355400,
        "headlineKo": "채권시장은 주식시장의 낙관론을 부활시킬 것인가?"
      },
      {
        "headline": "Breadth Breaks Higher as Small Caps Join Friday’s Rally",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=53c7aa5814e53d16a3f865ccbff979856fc1ef6d560e67e6f53051add66bcd98",
        "datetime": 1786355288,
        "headlineKo": "소형주가 금요일 랠리에 합류함에 따라 폭이 더 높아졌습니다."
      },
      {
        "headline": "It's A Near-Perfect Bullish Setup, But Time Is Short, Act Accordingly",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c45e9d8bfd6c6a84e52fa0287a9d61e9109ad60885795ad81e166d2a6a87b95b",
        "datetime": 1786309123,
        "headlineKo": "거의 완벽한 강세 설정이지만 시간이 부족하므로 그에 따라 행동하십시오."
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "DraftKings After Earnings: Buy, Hold, or Run?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4feec4fc49285c9089ee636c516ede7f687e47a3d8d0981a5c99aa2c8c1e1239",
        "datetime": 1786370451,
        "headlineKo": "DraftKings 수익 후: 매수, 보유 또는 실행?"
      },
      {
        "headline": "Exchange-Traded Funds Lower, Equity Futures Mixed Pre-Bell Monday Amid Rising Oil Prices",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=63a1841ac468b1432b6559c170bd281a2977750f87e337bf916d5968a57c57c0",
        "datetime": 1786367885,
        "headlineKo": "유가 상승으로 상장지수펀드 하락, 주식 선물 혼합 프리벨 월요일"
      },
      {
        "headline": "3 Beaten-Down Healthcare Stocks to Buy in August",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cdede5a86a1a9c715bcc2916ec012ef4f51f2e1958b7fa818b04daf0ff357e39",
        "datetime": 1786363255,
        "headlineKo": "8월에 매수할 하락세를 보인 헬스케어 주식 3개"
      },
      {
        "headline": "Super Micro Computer Continues Its 3-Month Fall: One Wall Street Bull’s Thesis Predicts 55% Upside From Here",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e75d148fb2a23b8597f9a83ccf923ce8cefb9679498790bb97e953e619cfb7d6",
        "datetime": 1786361715,
        "headlineKo": "슈퍼 마이크로 컴퓨터는 3개월 연속 하락세를 이어가고 있습니다: 한 월스트리트 강세론에서는 여기에서 55% 상승 여력을 예측합니다"
      },
      {
        "headline": "S&P 500 Companies' Second-Quarter Profit Boomed — What's Next?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebec49802c598ad2dc49fbd65fece1e29e64062763fb790baf9dd9a41b651fc5",
        "datetime": 1786361414,
        "headlineKo": "S&P 500 기업의 2분기 이익 폭등 — 다음 단계는 무엇입니까?"
      }
    ],
    "newsHistory": [
      {
        "headline": "DraftKings After Earnings: Buy, Hold, or Run?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4feec4fc49285c9089ee636c516ede7f687e47a3d8d0981a5c99aa2c8c1e1239",
        "datetime": 1786370451,
        "headlineKo": "DraftKings 수익 후: 매수, 보유 또는 실행?"
      },
      {
        "headline": "Exchange-Traded Funds Lower, Equity Futures Mixed Pre-Bell Monday Amid Rising Oil Prices",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=63a1841ac468b1432b6559c170bd281a2977750f87e337bf916d5968a57c57c0",
        "datetime": 1786367885,
        "headlineKo": "유가 상승으로 상장지수펀드 하락, 주식 선물 혼합 프리벨 월요일"
      },
      {
        "headline": "3 Beaten-Down Healthcare Stocks to Buy in August",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cdede5a86a1a9c715bcc2916ec012ef4f51f2e1958b7fa818b04daf0ff357e39",
        "datetime": 1786363255,
        "headlineKo": "8월에 매수할 하락세를 보인 헬스케어 주식 3개"
      },
      {
        "headline": "Super Micro Computer Continues Its 3-Month Fall: One Wall Street Bull’s Thesis Predicts 55% Upside From Here",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e75d148fb2a23b8597f9a83ccf923ce8cefb9679498790bb97e953e619cfb7d6",
        "datetime": 1786361715,
        "headlineKo": "슈퍼 마이크로 컴퓨터는 3개월 연속 하락세를 이어가고 있습니다: 한 월스트리트 강세론에서는 여기에서 55% 상승 여력을 예측합니다"
      },
      {
        "headline": "S&P 500 Companies' Second-Quarter Profit Boomed — What's Next?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ebec49802c598ad2dc49fbd65fece1e29e64062763fb790baf9dd9a41b651fc5",
        "datetime": 1786361414,
        "headlineKo": "S&P 500 기업의 2분기 이익 폭등 — 다음 단계는 무엇입니까?"
      },
      {
        "headline": "It's A Near-Perfect Bullish Setup, But Time Is Short, Act Accordingly",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c45e9d8bfd6c6a84e52fa0287a9d61e9109ad60885795ad81e166d2a6a87b95b",
        "datetime": 1786309123,
        "headlineKo": "거의 완벽한 강세 설정이지만 시간이 부족하므로 그에 따라 행동하십시오."
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Nvidia investing up to $3 billion in Lancium for Stargate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=259e4639219df0b720556b00ff19e8c4dfe014935b296e6be9a0cf6f7ca257fe",
        "datetime": 1786367200,
        "headlineKo": "Nvidia는 Stargate를 위해 Lancium에 최대 30억 달러를 투자했습니다."
      },
      {
        "headline": "Brightfin Appoints Preeti Shukla as Chief Product and AI Officer",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b444c14704012f83652f7227384f4e19a5e8cadc362ab294537ffb62016555d0",
        "datetime": 1786366800,
        "headlineKo": "Brightfin, 최고 제품 및 AI 책임자로 Preeti Shukla 임명"
      },
      {
        "headline": "Cowboy Space Appoints John Sarkis as Global Head of Sales to Scale Data Center Business",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6140058346eb6b9579fc0a40f366fcc68be0f06f6e4f2c3db04cfa8d83120e62",
        "datetime": 1786366800,
        "headlineKo": "Cowboy Space, 데이터 센터 사업 확장을 위한 글로벌 영업 책임자로 John Sarkis 임명"
      },
      {
        "headline": "Oracle’s Rebound Is All But Assured So I Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57244ca2b8e728e60e6dde28bb296029af9883adc4d6e0e409e8af0ee409a565",
        "datetime": 1786365903,
        "headlineKo": "오라클의 반등은 거의 확실하므로 계속 구매합니다"
      },
      {
        "headline": "1 Software Stock to Own for Decades and 2 We Question",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8b056fc94c1a66fd007d0ed7b57f51177f2102a7d9a007a84317efd05cfe73c",
        "datetime": 1786365442,
        "headlineKo": "수십 년 동안 소유할 소프트웨어 주식 1개와 질문 2개"
      }
    ],
    "newsHistory": [
      {
        "headline": "Nvidia investing up to $3 billion in Lancium for Stargate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=259e4639219df0b720556b00ff19e8c4dfe014935b296e6be9a0cf6f7ca257fe",
        "datetime": 1786367200,
        "headlineKo": "Nvidia는 Stargate를 위해 Lancium에 최대 30억 달러를 투자했습니다."
      },
      {
        "headline": "Brightfin Appoints Preeti Shukla as Chief Product and AI Officer",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b444c14704012f83652f7227384f4e19a5e8cadc362ab294537ffb62016555d0",
        "datetime": 1786366800,
        "headlineKo": "Brightfin, 최고 제품 및 AI 책임자로 Preeti Shukla 임명"
      },
      {
        "headline": "Cowboy Space Appoints John Sarkis as Global Head of Sales to Scale Data Center Business",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6140058346eb6b9579fc0a40f366fcc68be0f06f6e4f2c3db04cfa8d83120e62",
        "datetime": 1786366800,
        "headlineKo": "Cowboy Space, 데이터 센터 사업 확장을 위한 글로벌 영업 책임자로 John Sarkis 임명"
      },
      {
        "headline": "Oracle’s Rebound Is All But Assured So I Keep Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57244ca2b8e728e60e6dde28bb296029af9883adc4d6e0e409e8af0ee409a565",
        "datetime": 1786365903,
        "headlineKo": "오라클의 반등은 거의 확실하므로 계속 구매합니다"
      },
      {
        "headline": "1 Software Stock to Own for Decades and 2 We Question",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a8b056fc94c1a66fd007d0ed7b57f51177f2102a7d9a007a84317efd05cfe73c",
        "datetime": 1786365442,
        "headlineKo": "수십 년 동안 소유할 소프트웨어 주식 1개와 질문 2개"
      },
      {
        "headline": "IREN (IREN) vs. CORZ and APLD: Can Its AI Cloud Buildout Turn Contracted Demand Into Profits?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d3f99908919450edf69d6450b5da48d034167da9e80ac744efab75fd58af913",
        "datetime": 1786299871,
        "headlineKo": "IREN(IREN) 대 CORZ 및 APLD: AI 클라우드 구축이 계약 수요를 이익으로 바꿀 수 있습니까?"
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Ceva (CEVA) Surpasses Q2 Earnings and Revenue Estimates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c75016133ec273356f64364cbdffe1bb09ec6fc6581eaf89ad6758203db73ea",
        "datetime": 1786364104,
        "headlineKo": "Ceva (CEVA), 2분기 수익 및 수익 추정치를 능가"
      },
      {
        "headline": "ACL Digital Joins Forces with Hubbl to Accelerate AI Adoption for Enterprise Salesforce Customers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5691e8abdaf006f7e610204744657ca1bd297d29948a38f3ad76216f3899b71",
        "datetime": 1786361400,
        "headlineKo": "ACL Digital, Hubbl과 힘을 합쳐 Salesforce 기업 고객을 위한 AI 채택 가속화"
      },
      {
        "headline": "Stock Market News for Aug 10, 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ccba020f7415b69fceb58e08d28aa134b9427848b63f897a525057b96eb5501f",
        "datetime": 1786352040,
        "headlineKo": "2026년 8월 10일 주식시장 뉴스"
      },
      {
        "headline": "Zeta Global Holdings (ZETA) Refreshes Its Leadership Team With Two Senior Roles",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4fda1573005a88180c6496b7667fc7ce5788a1f64cd738cdbd6ef819df3f7ae0",
        "datetime": 1786342257,
        "headlineKo": "Zeta Global Holdings(ZETA)는 두 가지 고위 역할로 리더십 팀을 새롭게 단장했습니다."
      },
      {
        "headline": "Salesforce to lay off 59 employees in Seattle and Bellevue",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b949a6767f67f8038e3a5e721de06b8afbdab38d00f72672c69796ddd961b4c",
        "datetime": 1786288488,
        "headlineKo": "세일즈포스, 시애틀과 벨뷰 직원 59명 해고"
      }
    ],
    "newsHistory": [
      {
        "headline": "Ceva (CEVA) Surpasses Q2 Earnings and Revenue Estimates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9c75016133ec273356f64364cbdffe1bb09ec6fc6581eaf89ad6758203db73ea",
        "datetime": 1786364104,
        "headlineKo": "Ceva (CEVA), 2분기 수익 및 수익 추정치를 능가"
      },
      {
        "headline": "ACL Digital Joins Forces with Hubbl to Accelerate AI Adoption for Enterprise Salesforce Customers",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f5691e8abdaf006f7e610204744657ca1bd297d29948a38f3ad76216f3899b71",
        "datetime": 1786361400,
        "headlineKo": "ACL Digital, Hubbl과 힘을 합쳐 Salesforce 기업 고객을 위한 AI 채택 가속화"
      },
      {
        "headline": "Stock Market News for Aug 10, 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ccba020f7415b69fceb58e08d28aa134b9427848b63f897a525057b96eb5501f",
        "datetime": 1786352040,
        "headlineKo": "2026년 8월 10일 주식시장 뉴스"
      },
      {
        "headline": "Zeta Global Holdings (ZETA) Refreshes Its Leadership Team With Two Senior Roles",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4fda1573005a88180c6496b7667fc7ce5788a1f64cd738cdbd6ef819df3f7ae0",
        "datetime": 1786342257,
        "headlineKo": "Zeta Global Holdings(ZETA)는 두 가지 고위 역할로 리더십 팀을 새롭게 단장했습니다."
      },
      {
        "headline": "Salesforce to lay off 59 employees in Seattle and Bellevue",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b949a6767f67f8038e3a5e721de06b8afbdab38d00f72672c69796ddd961b4c",
        "datetime": 1786288488,
        "headlineKo": "세일즈포스, 시애틀과 벨뷰 직원 59명 해고"
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Palantir (PLTR) Turning AI Demand into Profitable Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6eab189943e8de43ff272a0b2761f8291e746501a6d515417c0f6ad91440371",
        "datetime": 1786369618,
        "headlineKo": "Palantir(PLTR) AI 수요를 수익성 있는 성장으로 전환"
      },
      {
        "headline": "Price Prediction: Archer Aviation Will Trade at $10 on This Date",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6d1a111b06605784e964b165c8dfde17783b6b94bc989a4b95d7831cf7d8fdf",
        "datetime": 1786368621,
        "headlineKo": "가격 예측: Archer Aviation은 이 날짜에 10달러에 거래될 예정입니다."
      },
      {
        "headline": "Stocks Mostly Up Pre-Bell as Traders Assess Middle East Developments, Await Key Inflation Data",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9273470f1c28199053583483cbf4314c9d12dcfb25852f4ee074e25f25140a9b",
        "datetime": 1786362237,
        "headlineKo": "거래자들이 중동 발전을 평가하고 주요 인플레이션 데이터를 기다리면서 주식은 벨 이전에 대부분 상승했습니다."
      },
      {
        "headline": "Palantir: A $13.1 Billion Backlog And Investors Are Just Starting To Catch On",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=33973e1b9a2b96096ff706b82fc9129eb9d9e81e8c0252ab00ff4a232ff2ab9a",
        "datetime": 1786350021,
        "headlineKo": "Palantir: 131억 달러 규모의 백로그와 투자자들이 이제 막 따라잡기 시작했습니다."
      },
      {
        "headline": "Software Had A Winning Week: 3 Stocks I'm Buying",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6f8a43c423139d4aa5c5acb0b42021ea7c79f2a847a19d123f097e75c210c24a",
        "datetime": 1786348800,
        "headlineKo": "소프트웨어가 성공적인 한 주를 보냈습니다: 내가 사고 있는 3개 주식"
      }
    ],
    "newsHistory": [
      {
        "headline": "Palantir (PLTR) Turning AI Demand into Profitable Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d6eab189943e8de43ff272a0b2761f8291e746501a6d515417c0f6ad91440371",
        "datetime": 1786369618,
        "headlineKo": "Palantir(PLTR) AI 수요를 수익성 있는 성장으로 전환"
      },
      {
        "headline": "Price Prediction: Archer Aviation Will Trade at $10 on This Date",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6d1a111b06605784e964b165c8dfde17783b6b94bc989a4b95d7831cf7d8fdf",
        "datetime": 1786368621,
        "headlineKo": "가격 예측: Archer Aviation은 이 날짜에 10달러에 거래될 예정입니다."
      },
      {
        "headline": "Stocks Mostly Up Pre-Bell as Traders Assess Middle East Developments, Await Key Inflation Data",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9273470f1c28199053583483cbf4314c9d12dcfb25852f4ee074e25f25140a9b",
        "datetime": 1786362237,
        "headlineKo": "거래자들이 중동 발전을 평가하고 주요 인플레이션 데이터를 기다리면서 주식은 벨 이전에 대부분 상승했습니다."
      },
      {
        "headline": "Palantir: A $13.1 Billion Backlog And Investors Are Just Starting To Catch On",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=33973e1b9a2b96096ff706b82fc9129eb9d9e81e8c0252ab00ff4a232ff2ab9a",
        "datetime": 1786350021,
        "headlineKo": "Palantir: 131억 달러 규모의 백로그와 투자자들이 이제 막 따라잡기 시작했습니다."
      },
      {
        "headline": "Software Had A Winning Week: 3 Stocks I'm Buying",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6f8a43c423139d4aa5c5acb0b42021ea7c79f2a847a19d123f097e75c210c24a",
        "datetime": 1786348800,
        "headlineKo": "소프트웨어가 성공적인 한 주를 보냈습니다: 내가 사고 있는 3개 주식"
      },
      {
        "headline": "Why Palantir Stock Skyrocketed This Past Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=65447c5fba4dff974820b6107b86eb9c3a78fb4abe2e7252b174a42c141951c2",
        "datetime": 1786335347,
        "headlineKo": "지난 주 Palantir 주가가 급등한 이유"
      },
      {
        "headline": "BofA, JPMorgan, Oppenheimer Name Their 3 Favorite AI Stocks, One Has a $255 Target",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=031a2815a3a9cee38e8e064c7400c6fe54cc1bad5cad4660a8dd73efc719d12b",
        "datetime": 1786308800,
        "headlineKo": "BofA, JPMorgan, Oppenheimer가 가장 좋아하는 AI 주식 3개를 선정했습니다. 그중 하나는 목표액이 255달러입니다."
      },
      {
        "headline": "Zeta Global Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=86ef5f9eac9e40a2966ba3485599db91f077a332c4a0d2ee0031bafef27f5667",
        "datetime": 1786298631,
        "headlineKo": "Zeta Global 2분기 실적 발표 하이라이트"
      },
      {
        "headline": "USA Today Partners With Palantir to Gain “Actionable Intelligence” On Its Audiences",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2924d64c2d603f07bcf03f9ce4729aed346f0cd5375b69ad2c89d7ce77376fb0",
        "datetime": 1786291260,
        "headlineKo": "USA Today, Palantir와 협력하여 청중에 대한 \"실행 가능한 인텔리전스\" 확보"
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Apple downgraded, HPE upgraded: Wall Street's top analyst calls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60e1ba95325eb6d241779d78938c60d416b134d7a9889d1717b9a84e1a836b9a",
        "datetime": 1786369174,
        "headlineKo": "Apple의 다운그레이드, HPE의 업그레이드: 월스트리트의 최고 분석가 호출"
      },
      {
        "headline": "What TSMC Sales Growth Means for Apple and Nvidia Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c60cadc436eabc9263ab721f8b08f898c97e7c343aa5688551daf44df448fee4",
        "datetime": 1786364340,
        "headlineKo": "TSMC 매출 성장이 Apple 및 Nvidia 주식에 의미하는 것"
      },
      {
        "headline": "AP Memory Strengthens Global Leadership Team with Appointment of Former Qualcomm Vice President Jian Zhang",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e042163106f3aaddf2b7d796062ed9ff4b8000bfb8da8cf3c96f4c6b1919d95d",
        "datetime": 1786327200,
        "headlineKo": "AP 메모리, 전 Qualcomm 부사장 Jian Zhang 임명으로 글로벌 리더십 팀 강화"
      },
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
      }
    ],
    "newsHistory": [
      {
        "headline": "Apple downgraded, HPE upgraded: Wall Street's top analyst calls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60e1ba95325eb6d241779d78938c60d416b134d7a9889d1717b9a84e1a836b9a",
        "datetime": 1786369174,
        "headlineKo": "Apple의 다운그레이드, HPE의 업그레이드: 월스트리트의 최고 분석가 호출"
      },
      {
        "headline": "What TSMC Sales Growth Means for Apple and Nvidia Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c60cadc436eabc9263ab721f8b08f898c97e7c343aa5688551daf44df448fee4",
        "datetime": 1786364340,
        "headlineKo": "TSMC 매출 성장이 Apple 및 Nvidia 주식에 의미하는 것"
      },
      {
        "headline": "AP Memory Strengthens Global Leadership Team with Appointment of Former Qualcomm Vice President Jian Zhang",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e042163106f3aaddf2b7d796062ed9ff4b8000bfb8da8cf3c96f4c6b1919d95d",
        "datetime": 1786327200,
        "headlineKo": "AP 메모리, 전 Qualcomm 부사장 Jian Zhang 임명으로 글로벌 리더십 팀 강화"
      },
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
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "Arista Networks vs. Arm: Comparing Revenue Growth Trajectories for These Artificial Intelligence Companies",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f60418e734fd2f1613590ff66070e614cd7f0b92c032bdf00ed46a240af73d0",
        "datetime": 1786303741,
        "headlineKo": "Arista Networks와 Arm: 인공 지능 기업의 수익 성장 궤적 비교"
      },
      {
        "headline": "Arm Stock Is Off 39% From Its High. Why This Could Be the Best Time to Buy.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=10601b884b5376d6b5cdddfdfa4d8d76bba75df875a2404acd32bc89357c76a4",
        "datetime": 1786284902,
        "headlineKo": "Arm 재고는 최고치에서 39% 하락했습니다. 지금이 최적의 구매 시기인 이유."
      },
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
      }
    ],
    "newsHistory": [
      {
        "headline": "Arista Networks vs. Arm: Comparing Revenue Growth Trajectories for These Artificial Intelligence Companies",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0f60418e734fd2f1613590ff66070e614cd7f0b92c032bdf00ed46a240af73d0",
        "datetime": 1786303741,
        "headlineKo": "Arista Networks와 Arm: 인공 지능 기업의 수익 성장 궤적 비교"
      },
      {
        "headline": "Arm Stock Is Off 39% From Its High. Why This Could Be the Best Time to Buy.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=10601b884b5376d6b5cdddfdfa4d8d76bba75df875a2404acd32bc89357c76a4",
        "datetime": 1786284902,
        "headlineKo": "Arm 재고는 최고치에서 39% 하락했습니다. 지금이 최적의 구매 시기인 이유."
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Marvell (MRVL) vs. AVGO and NVDA: Can AI Interconnect Growth Deliver the Earnings Its Premium Valuation Demands?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=839ed02a784a723b4186e221b98b5f93319084ad494b5505b6f3cd8ac366d6fc",
        "datetime": 1786299571,
        "headlineKo": "Marvell(MRVL) 대 AVGO 및 NVDA: AI 상호 연결 성장이 프리미엄 가치 평가 요구에 맞는 수익을 제공할 수 있습니까?"
      },
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
      }
    ],
    "newsHistory": [
      {
        "headline": "Marvell (MRVL) vs. AVGO and NVDA: Can AI Interconnect Growth Deliver the Earnings Its Premium Valuation Demands?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=839ed02a784a723b4186e221b98b5f93319084ad494b5505b6f3cd8ac366d6fc",
        "datetime": 1786299571,
        "headlineKo": "Marvell(MRVL) 대 AVGO 및 NVDA: AI 상호 연결 성장이 프리미엄 가치 평가 요구에 맞는 수익을 제공할 수 있습니까?"
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:01"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Chip equipment stocks rise after Taiwan Semiconductor revenue surges 45%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a1523e75fffdf22d5321a7c1c3b833bf3e178f66d51874e041d9876954ad566",
        "datetime": 1786369093,
        "headlineKo": "대만 반도체 매출 45% 급증 후 칩 장비 주가 상승"
      },
      {
        "headline": "Situational Awareness bets $400M on chip startup Source Foundry",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a9ac792a883aa01bda077fe8502aca299a673dfb2b09d9a1fb366485117e5fe",
        "datetime": 1786366940,
        "headlineKo": "Situational Awareness는 칩 스타트업 Source Foundry에 4억 달러를 투자했습니다."
      },
      {
        "headline": "Why ASML Holding (ASML) Could Be the Biggest AI Chip Enabler",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=326392e41e644288ba0bd079845a8b3bb8d7a42b6958a3288a9c1add37c168d7",
        "datetime": 1786366520,
        "headlineKo": "ASML Holding(ASML)이 가장 큰 AI 칩 조력자가 될 수 있는 이유"
      },
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
      }
    ],
    "newsHistory": [
      {
        "headline": "Chip equipment stocks rise after Taiwan Semiconductor revenue surges 45%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7a1523e75fffdf22d5321a7c1c3b833bf3e178f66d51874e041d9876954ad566",
        "datetime": 1786369093,
        "headlineKo": "대만 반도체 매출 45% 급증 후 칩 장비 주가 상승"
      },
      {
        "headline": "Situational Awareness bets $400M on chip startup Source Foundry",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a9ac792a883aa01bda077fe8502aca299a673dfb2b09d9a1fb366485117e5fe",
        "datetime": 1786366940,
        "headlineKo": "Situational Awareness는 칩 스타트업 Source Foundry에 4억 달러를 투자했습니다."
      },
      {
        "headline": "Why ASML Holding (ASML) Could Be the Biggest AI Chip Enabler",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=326392e41e644288ba0bd079845a8b3bb8d7a42b6958a3288a9c1add37c168d7",
        "datetime": 1786366520,
        "headlineKo": "ASML Holding(ASML)이 가장 큰 AI 칩 조력자가 될 수 있는 이유"
      },
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
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:02"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
      {
        "headline": "Chip equipment stocks rise after Taiwan Semiconductor revenue surges 45%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28feb3b4c2a9d9f27b8952ab9039fa56b19657c5fe2782f58f633b54c0051b92",
        "datetime": 1786369093,
        "headlineKo": "대만 반도체 매출 45% 급증 후 칩 장비 주가 상승"
      },
      {
        "headline": "Get insights into the top movers in the S&P500 index of Monday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8f8a6c94e14cda994096b4ea274ea3ef41e64e688ce7867132f30f540487144b",
        "datetime": 1786365301,
        "headlineKo": "월요일 시장 전 세션의 S&P500 지수에서 최고 변동 항목에 대한 통찰력을 얻으세요."
      },
      {
        "headline": "BofA, JPMorgan, Oppenheimer Name Their 3 Favorite AI Stocks, One Has a $255 Target",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=031a2815a3a9cee38e8e064c7400c6fe54cc1bad5cad4660a8dd73efc719d12b",
        "datetime": 1786308800,
        "headlineKo": "BofA, JPMorgan, Oppenheimer가 가장 좋아하는 AI 주식 3개를 선정했습니다. 그중 하나는 목표액이 255달러입니다."
      },
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
      }
    ],
    "newsHistory": [
      {
        "headline": "Chip equipment stocks rise after Taiwan Semiconductor revenue surges 45%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28feb3b4c2a9d9f27b8952ab9039fa56b19657c5fe2782f58f633b54c0051b92",
        "datetime": 1786369093,
        "headlineKo": "대만 반도체 매출 45% 급증 후 칩 장비 주가 상승"
      },
      {
        "headline": "Get insights into the top movers in the S&P500 index of Monday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8f8a6c94e14cda994096b4ea274ea3ef41e64e688ce7867132f30f540487144b",
        "datetime": 1786365301,
        "headlineKo": "월요일 시장 전 세션의 S&P500 지수에서 최고 변동 항목에 대한 통찰력을 얻으세요."
      },
      {
        "headline": "BofA, JPMorgan, Oppenheimer Name Their 3 Favorite AI Stocks, One Has a $255 Target",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=031a2815a3a9cee38e8e064c7400c6fe54cc1bad5cad4660a8dd73efc719d12b",
        "datetime": 1786308800,
        "headlineKo": "BofA, JPMorgan, Oppenheimer가 가장 좋아하는 AI 주식 3개를 선정했습니다. 그중 하나는 목표액이 255달러입니다."
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:02"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "Get insights into the top movers in the S&P500 index of Monday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8f8a6c94e14cda994096b4ea274ea3ef41e64e688ce7867132f30f540487144b",
        "datetime": 1786365301,
        "headlineKo": "월요일 시장 전 세션의 S&P500 지수에서 최고 변동 항목에 대한 통찰력을 얻으세요."
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
      }
    ],
    "newsHistory": [
      {
        "headline": "Get insights into the top movers in the S&P500 index of Monday's pre-market session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8f8a6c94e14cda994096b4ea274ea3ef41e64e688ce7867132f30f540487144b",
        "datetime": 1786365301,
        "headlineKo": "월요일 시장 전 세션의 S&P500 지수에서 최고 변동 항목에 대한 통찰력을 얻으세요."
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
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "The Role of SanDisk in Advancing AI Memory Solutions",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7d865bcce1a6f925572e44c9c1332c1a0fec03ac9564e3f996fe9c124df27d7d",
        "datetime": 1786369330,
        "headlineKo": "AI 메모리 솔루션 발전에서 SanDisk의 역할"
      },
      {
        "headline": "Apple downgraded, HPE upgraded: Wall Street's top analyst calls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60e1ba95325eb6d241779d78938c60d416b134d7a9889d1717b9a84e1a836b9a",
        "datetime": 1786369174,
        "headlineKo": "Apple의 다운그레이드, HPE의 업그레이드: 월스트리트의 최고 분석가 호출"
      },
      {
        "headline": "Schwab: Retail investors want AI stocks on the cheap",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=986ca2849db60d62d21ebc15192d06893c6d860675d974d42068263c8dd55c5e",
        "datetime": 1786361465,
        "headlineKo": "Schwab: 소매 투자자들은 AI 주식을 싼 가격에 원합니다"
      },
      {
        "headline": "25-Year-Old Lost $35 Billion of His Investors’ Money. 2 Weeks Later, Silicon Valley Insiders Are Lining Up to Give Him More Cash.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04aacb14bde83c30a9d3ece918993f9307462fde0d75dcd15698b302df0919ef",
        "datetime": 1786359057,
        "headlineKo": "25세 청년이 투자자금 350억 달러를 잃었습니다. 2주 후, 실리콘 밸리 내부자들이 그에게 더 많은 현금을 제공하기 위해 줄을 섰습니다."
      },
      {
        "headline": "Sandisk Can Now Buy Back $15.5 Billion of Its Own Stock. That's 8.6% of the Company.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f38282e4152d9002452a9ebdb076d0511ab78974615faa7d58ceac463414cec",
        "datetime": 1786356720,
        "headlineKo": "Sandisk는 이제 155억 달러 규모의 자사주를 매입할 수 있습니다. 이는 회사의 8.6%입니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "The Role of SanDisk in Advancing AI Memory Solutions",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7d865bcce1a6f925572e44c9c1332c1a0fec03ac9564e3f996fe9c124df27d7d",
        "datetime": 1786369330,
        "headlineKo": "AI 메모리 솔루션 발전에서 SanDisk의 역할"
      },
      {
        "headline": "Apple downgraded, HPE upgraded: Wall Street's top analyst calls",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60e1ba95325eb6d241779d78938c60d416b134d7a9889d1717b9a84e1a836b9a",
        "datetime": 1786369174,
        "headlineKo": "Apple의 다운그레이드, HPE의 업그레이드: 월스트리트의 최고 분석가 호출"
      },
      {
        "headline": "Schwab: Retail investors want AI stocks on the cheap",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=986ca2849db60d62d21ebc15192d06893c6d860675d974d42068263c8dd55c5e",
        "datetime": 1786361465,
        "headlineKo": "Schwab: 소매 투자자들은 AI 주식을 싼 가격에 원합니다"
      },
      {
        "headline": "25-Year-Old Lost $35 Billion of His Investors’ Money. 2 Weeks Later, Silicon Valley Insiders Are Lining Up to Give Him More Cash.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04aacb14bde83c30a9d3ece918993f9307462fde0d75dcd15698b302df0919ef",
        "datetime": 1786359057,
        "headlineKo": "25세 청년이 투자자금 350억 달러를 잃었습니다. 2주 후, 실리콘 밸리 내부자들이 그에게 더 많은 현금을 제공하기 위해 줄을 섰습니다."
      },
      {
        "headline": "Sandisk Can Now Buy Back $15.5 Billion of Its Own Stock. That's 8.6% of the Company.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f38282e4152d9002452a9ebdb076d0511ab78974615faa7d58ceac463414cec",
        "datetime": 1786356720,
        "headlineKo": "Sandisk는 이제 155억 달러 규모의 자사주를 매입할 수 있습니다. 이는 회사의 8.6%입니다."
      },
      {
        "headline": "Prediction: Sandisk Will Reclaim Its All-Time High by the End of the Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc98334c7e4257c9d811b93f0ef18be55fb3d413b368e45bad29ce3e7e1a6ec8",
        "datetime": 1786342800,
        "headlineKo": "예측: Sandisk는 연말까지 사상 최고치를 회복할 것입니다."
      },
      {
        "headline": "Sandisk Has Surged More Than 3,000% in 12 Months. Is a Stock Split Coming?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d50ed64ae974e50c441b35ba7e37a7aa3bc07c716c778ac5ed03468ad729bf9",
        "datetime": 1786329300,
        "headlineKo": "Sandisk는 12개월 동안 3,000% 이상 급등했습니다. 주식분할이 예정되어 있나요?"
      },
      {
        "headline": "MU Outpaced SNDK, WDC This Week: Now, Retail Traders Bet On Outlook Raise At Key Analyst Event",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ed89cdcd076f6fa0b7579fdac0b5977f0fa94451f8279861be41ee4c0397ca0",
        "datetime": 1786327764,
        "headlineKo": "MU가 이번 주 SNDK, WDC를 능가했습니다. 이제 소매 거래자들은 주요 분석가 이벤트에서 전망 인상에 베팅했습니다."
      },
      {
        "headline": "Wall Street Punishes Sandisk's Outlook: What Investors Are Missing",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a4849d58fe821f13eaf6acbb040ff0806819fecd66a713cb0a7e6a390c085515",
        "datetime": 1786300560,
        "headlineKo": "월스트리트가 Sandisk의 전망을 처벌하다: 투자자들이 놓치고 있는 것"
      },
      {
        "headline": "Opinion: The Best AI Memory Stock to Buy Isn't Micron or Sandisk -- It's This Korean Giant",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f47db17e08576a99d5ee61bb26ce69bec10ecf0f4e174c192439193bad82a0b",
        "datetime": 1786297380,
        "headlineKo": "의견: 매수해야 할 최고의 AI 메모리 주식은 마이크론이나 샌디스크가 아닌 한국의 거대 기업이다"
      },
      {
        "headline": "Don’t Assume Micron Will Share SanDisk’s Fate. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69aace94b6fac0cf0c55dd2a3b55f58784e242e3a00affe828740b93a2dcfe53",
        "datetime": 1786287602,
        "headlineKo": "Micron이 SanDisk의 운명을 공유할 것이라고 가정하지 마십시오. 이유는 다음과 같습니다."
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
      {
        "headline": "HDD Industry Revenue Could Top $30B In 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c983d5a4971e3940eca675f5b6e56064cabd843a580eea19b74308e1fa53a22",
        "datetime": 1786333465,
        "headlineKo": "HDD 산업 수익은 2026년에 300억 달러를 넘어설 수 있습니다."
      },
      {
        "headline": "Sandisk Has Surged More Than 3,000% in 12 Months. Is a Stock Split Coming?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d50ed64ae974e50c441b35ba7e37a7aa3bc07c716c778ac5ed03468ad729bf9",
        "datetime": 1786329300,
        "headlineKo": "Sandisk는 12개월 동안 3,000% 이상 급등했습니다. 주식분할이 예정되어 있나요?"
      },
      {
        "headline": "MU Outpaced SNDK, WDC This Week: Now, Retail Traders Bet On Outlook Raise At Key Analyst Event",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ed89cdcd076f6fa0b7579fdac0b5977f0fa94451f8279861be41ee4c0397ca0",
        "datetime": 1786327764,
        "headlineKo": "MU가 이번 주 SNDK, WDC를 능가했습니다. 이제 소매 거래자들은 주요 분석가 이벤트에서 전망 인상에 베팅했습니다."
      },
      {
        "headline": "Alger Dynamic Opportunities Fund Q2 2026 Portfolio Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edaa79ad3146ceb7385fbf0aaa7f93857fb187bf5b4d5ee8228f84ce33f7e979",
        "datetime": 1786287900,
        "headlineKo": "Alger Dynamic Opportunities Fund 2026년 2분기 포트폴리오 업데이트"
      },
      {
        "headline": "Don’t Assume Micron Will Share SanDisk’s Fate. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69aace94b6fac0cf0c55dd2a3b55f58784e242e3a00affe828740b93a2dcfe53",
        "datetime": 1786287602,
        "headlineKo": "Micron이 SanDisk의 운명을 공유할 것이라고 가정하지 마십시오. 이유는 다음과 같습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "HDD Industry Revenue Could Top $30B In 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2c983d5a4971e3940eca675f5b6e56064cabd843a580eea19b74308e1fa53a22",
        "datetime": 1786333465,
        "headlineKo": "HDD 산업 수익은 2026년에 300억 달러를 넘어설 수 있습니다."
      },
      {
        "headline": "Sandisk Has Surged More Than 3,000% in 12 Months. Is a Stock Split Coming?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d50ed64ae974e50c441b35ba7e37a7aa3bc07c716c778ac5ed03468ad729bf9",
        "datetime": 1786329300,
        "headlineKo": "Sandisk는 12개월 동안 3,000% 이상 급등했습니다. 주식분할이 예정되어 있나요?"
      },
      {
        "headline": "MU Outpaced SNDK, WDC This Week: Now, Retail Traders Bet On Outlook Raise At Key Analyst Event",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8ed89cdcd076f6fa0b7579fdac0b5977f0fa94451f8279861be41ee4c0397ca0",
        "datetime": 1786327764,
        "headlineKo": "MU가 이번 주 SNDK, WDC를 능가했습니다. 이제 소매 거래자들은 주요 분석가 이벤트에서 전망 인상에 베팅했습니다."
      },
      {
        "headline": "Alger Dynamic Opportunities Fund Q2 2026 Portfolio Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=edaa79ad3146ceb7385fbf0aaa7f93857fb187bf5b4d5ee8228f84ce33f7e979",
        "datetime": 1786287900,
        "headlineKo": "Alger Dynamic Opportunities Fund 2026년 2분기 포트폴리오 업데이트"
      },
      {
        "headline": "Don’t Assume Micron Will Share SanDisk’s Fate. Here's Why.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=69aace94b6fac0cf0c55dd2a3b55f58784e242e3a00affe828740b93a2dcfe53",
        "datetime": 1786287602,
        "headlineKo": "Micron이 SanDisk의 운명을 공유할 것이라고 가정하지 마십시오. 이유는 다음과 같습니다."
      },
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
      }
    ],
    "_fetched_at": 1786374020.93753,
    "_updated_label": "2026-08-11 00:02"
  }
};
