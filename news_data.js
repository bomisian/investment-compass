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
        "headline": "Super Micro Computer Landed $60 Billion in Orders Last Quarter, but Trades at Just $30",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=95f0958102e02edefbe1f48d2887398b026e1a4d7647f8add9f03ded9ee57d68",
        "datetime": 1786269000,
        "headlineKo": "슈퍼마이크로 컴퓨터는 지난 분기에 600억 달러의 주문을 기록했지만 단돈 30달러에 거래되었습니다."
      },
      {
        "headline": "Rhode Is Fueling e.l.f.'s Latest Surge. Is It Time to Jump In?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ede1f19cdaf05f4d53bc25024756a1cff102cbea301397f9bee191bb60a3631",
        "datetime": 1786268400,
        "headlineKo": "Rhode는 e.l.f.의 최신 급증을 촉진하고 있습니다. 뛰어들 시간인가?"
      },
      {
        "headline": "What Happens to a Bond ETF's Price When the Fed Cuts Rates -- Using the Actual Historical Data",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=550b35b997f5e3e108fccce2fdc2822f599511cf84573480a5208b2f884a4817",
        "datetime": 1786268100,
        "headlineKo": "연준이 금리를 인하하면 채권 ETF 가격에 어떤 일이 발생합니까 - 실제 과거 데이터 사용"
      },
      {
        "headline": "This Is the 1 ETF Warren Buffett Recommends Most People Buy -- and History Says He's Always Been Right",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50dd7880ec2d3e70019c878713be56a0a1c521b73843293456a2ab029fca24df",
        "datetime": 1786267740,
        "headlineKo": "이것은 워렌 버핏이 대부분의 사람들에게 매수를 권장하는 첫 번째 ETF입니다. 그리고 역사는 그가 항상 옳았다고 말합니다."
      },
      {
        "headline": "This Trillion-Dollar AI Stock Offers Better Quantum Computing Exposure Than IonQ, Rigetti, or D-Wave at a Multi-Year Valuation Low",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba63fdb77d46db817388e80c46d5507ec51aa91bba0032b5d0eafd406e81e0ef",
        "datetime": 1786267500,
        "headlineKo": "수조 달러 규모의 이 AI 주식은 다년간 최저 평가에서 IonQ, Rigetti 또는 D-Wave보다 더 나은 양자 컴퓨팅 노출을 제공합니다."
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Apple Added About $1.5 Trillion in Market Value in a Year. Here's What $10,000 Invested a Decade Ago Is Worth Now.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce2361a754007f9c7f2879e6c71a7688d029e60172385747732f299d48e6b9a2",
        "datetime": 1786262460,
        "headlineKo": "Apple은 1년 만에 약 1조 5천억 달러의 시장 가치를 추가했습니다. 10년 전에 투자한 10,000달러의 현재 가치는 다음과 같습니다."
      },
      {
        "headline": "How Many of the Largest Companies Do You Own -- and Should You Own More or Fewer?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34bd1af3aa40e180acf3199a2e32a7b802d15292e5ec7ca3778a2f693d128add",
        "datetime": 1786258200,
        "headlineKo": "당신은 최대 규모의 회사를 몇 개나 소유하고 있습니까? 그리고 더 많이 소유해야 합니까, 아니면 더 적게 소유해야 합니까?"
      },
      {
        "headline": "Top 50 High-Quality Dividend Growth Stocks For August 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=67a12f998d09e3a8032fc7543984727ae385b02a09472666c7971ce61d490975",
        "datetime": 1786243803,
        "headlineKo": "2026년 8월 상위 50개 고품질 배당성장주"
      },
      {
        "headline": "iPhone 18 Pro Release Date: Apple’s Strategy Demands September Launch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c702e905ad937e875a6c95da8c1833929b7960fd52f6742e8ff94c54c1af21e1",
        "datetime": 1786213858,
        "headlineKo": "iPhone 18 Pro 출시일: Apple의 전략으로 9월 출시 요구"
      },
      {
        "headline": "Warren Buffett is out, and Berkshire Hathaway is spending again",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=64f073c8ebfc17a8e8c272d21d5fcb60205b6895eda6a27b9ec69930b1afbe0a",
        "datetime": 1786213378,
        "headlineKo": "워렌 버핏은 떠났고, 버크셔 해서웨이는 다시 돈을 쓰고 있다"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:01"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
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
        "headline": "Earnings beats ease concerns over record U.S. stock rally - WSJ",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc5b1f3df9fd34ca061fc97816b99d46bbe40b24e9d6e0a40ed048a5e17c8ca4",
        "datetime": 1786259300,
        "headlineKo": "기록적인 미국 증시 상승에 대한 우려가 실적 개선으로 완화 - WSJ"
      },
      {
        "headline": "How Many of the Largest Companies Do You Own -- and Should You Own More or Fewer?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34bd1af3aa40e180acf3199a2e32a7b802d15292e5ec7ca3778a2f693d128add",
        "datetime": 1786258200,
        "headlineKo": "당신은 최대 규모의 회사를 몇 개나 소유하고 있습니까? 그리고 더 많이 소유해야 합니까, 아니면 더 적게 소유해야 합니까?"
      },
      {
        "headline": "Jeff Bezos' Amazon Stock Surged 14% After a Blowout Earnings Beat, Adding $25 Billion to His Fortune. Is the Stock Still a Buy After the Rally?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47b8b9a98265ff8f062760d21b5f87b3a12534151879dae393857b0a8cf99765",
        "datetime": 1786257300,
        "headlineKo": "제프 베조스(Jeff Bezos)의 아마존 주가는 실적 부진 이후 14% 급등해 그의 재산에 250억 달러를 추가했습니다. 랠리 후에도 주식은 여전히 ​​매수세를 보이고 있나요?"
      },
      {
        "headline": "Moonshot AI's 2.8 Trillion Parameter Model Just Became the First From China to Top a Major Coding Benchmark",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2cfbd3abfdbe69317965c61bcfcff5017905d74ccac3e8258d693a93bd70c65f",
        "datetime": 1786252800,
        "headlineKo": "Moonshot AI의 2조 8천억 매개변수 모델이 중국 최초로 주요 코딩 벤치마크에서 1위를 차지했습니다."
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:01"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "This Trillion-Dollar AI Stock Offers Better Quantum Computing Exposure Than IonQ, Rigetti, or D-Wave at a Multi-Year Valuation Low",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ba63fdb77d46db817388e80c46d5507ec51aa91bba0032b5d0eafd406e81e0ef",
        "datetime": 1786267500,
        "headlineKo": "수조 달러 규모의 이 AI 주식은 다년간 최저 평가에서 IonQ, Rigetti 또는 D-Wave보다 더 나은 양자 컴퓨팅 노출을 제공합니다."
      },
      {
        "headline": "Brookfield Asset Management: Reasonably Valued, But AI Tailwinds Could Justify A Higher Valuation",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=fd1f9e57fcd2cb3f05d375adf0c63cc71a618f3244f797d2beecc1cbbe85b632",
        "datetime": 1786260600,
        "headlineKo": "Brookfield Asset Management: 합리적인 가치, 그러나 AI 순풍으로 인해 더 높은 가치 평가를 정당화할 수 있음"
      },
      {
        "headline": "Geron (GERN) Is Up 14.7% After Issuing First RYTELO Revenue Guide And Narrowing Losses - Has The Bull Case Changed?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5be56f701c00ce1eb915fb376d019110a01b4d0e91504a5e5119e1dde10f799d",
        "datetime": 1786259713,
        "headlineKo": "Geron(GERN)은 첫 번째 RYTELO 수익 가이드를 발행하고 손실을 줄인 후 14.7% 상승했습니다. 상승 추세가 바뀌었나요?"
      },
      {
        "headline": "How Many of the Largest Companies Do You Own -- and Should You Own More or Fewer?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34bd1af3aa40e180acf3199a2e32a7b802d15292e5ec7ca3778a2f693d128add",
        "datetime": 1786258200,
        "headlineKo": "당신은 최대 규모의 회사를 몇 개나 소유하고 있습니까? 그리고 더 많이 소유해야 합니까, 아니면 더 적게 소유해야 합니까?"
      },
      {
        "headline": "Moonshot AI's 2.8 Trillion Parameter Model Just Became the First From China to Top a Major Coding Benchmark",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2cfbd3abfdbe69317965c61bcfcff5017905d74ccac3e8258d693a93bd70c65f",
        "datetime": 1786252800,
        "headlineKo": "Moonshot AI의 2조 8천억 매개변수 모델이 중국 최초로 주요 코딩 벤치마크에서 1위를 차지했습니다."
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:01"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "My 3 Favorite Value Stocks to Buy Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d357cc807288d6078f10d962df6e90890020584948fb8802d255c34ee1179e91",
        "datetime": 1786264500,
        "headlineKo": "지금 당장 사야 할 내가 좋아하는 가치주 3개"
      },
      {
        "headline": "Earnings beats ease concerns over record U.S. stock rally - WSJ",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc5b1f3df9fd34ca061fc97816b99d46bbe40b24e9d6e0a40ed048a5e17c8ca4",
        "datetime": 1786259300,
        "headlineKo": "기록적인 미국 증시 상승에 대한 우려가 실적 개선으로 완화 - WSJ"
      },
      {
        "headline": "How Many of the Largest Companies Do You Own -- and Should You Own More or Fewer?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34bd1af3aa40e180acf3199a2e32a7b802d15292e5ec7ca3778a2f693d128add",
        "datetime": 1786258200,
        "headlineKo": "당신은 최대 규모의 회사를 몇 개나 소유하고 있습니까? 그리고 더 많이 소유해야 합니까, 아니면 더 적게 소유해야 합니까?"
      },
      {
        "headline": "Jeff Bezos' Amazon Stock Surged 14% After a Blowout Earnings Beat, Adding $25 Billion to His Fortune. Is the Stock Still a Buy After the Rally?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47b8b9a98265ff8f062760d21b5f87b3a12534151879dae393857b0a8cf99765",
        "datetime": 1786257300,
        "headlineKo": "제프 베조스(Jeff Bezos)의 아마존 주가는 실적 부진 이후 14% 급등해 그의 재산에 250억 달러를 추가했습니다. 랠리 후에도 주식은 여전히 ​​매수세를 보이고 있나요?"
      },
      {
        "headline": "SK Telecom Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c2c023ee3c681de5d9c8d003dcf2a27aac583b082ec83cc6a52a26d5f66fdbb2",
        "datetime": 1786255430,
        "headlineKo": "SK텔레콤 2분기 실적발표 하이라이트"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:01"
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
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
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
      },
      {
        "headline": "Does Broadcom (AVGO) Now Lead The Biggest AI Infrastructure Spend Outside GPUs?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7567d5a09a5fef7fd2b67b15e2e617789922980f91be6d8dc2596cb3737eca0b",
        "datetime": 1786198276,
        "headlineKo": "Broadcom(AVGO)이 이제 GPU 외부 지출 규모가 가장 큰 AI 인프라를 선도하고 있습니까?"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Cathie Wood's Ark Piled Into Nvidia and Taiwan Semiconductor After Meta's Earnings Miss. Here's What It Signals for Artificial Intelligence (AI) Stocks.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b1726157377750a4797940cd017afe771de19d96b52f4583de49ae40cfe45cc",
        "datetime": 1786260300,
        "headlineKo": "Cathie Wood의 Ark는 Meta의 실적 부진 이후 Nvidia와 Taiwan Semiconductor에 쌓였습니다. 인공 지능(AI) 주식에 대한 신호는 다음과 같습니다."
      },
      {
        "headline": "How Many of the Largest Companies Do You Own -- and Should You Own More or Fewer?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34bd1af3aa40e180acf3199a2e32a7b802d15292e5ec7ca3778a2f693d128add",
        "datetime": 1786258200,
        "headlineKo": "당신은 최대 규모의 회사를 몇 개나 소유하고 있습니까? 그리고 더 많이 소유해야 합니까, 아니면 더 적게 소유해야 합니까?"
      },
      {
        "headline": "META: Why The Market's Reaction Is Justified This Time Around (Rating Downgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5ecc07f0c3622ee82aa800df3bbe7d92a18f2003fe4be4c2b8733d74fad886da",
        "datetime": 1786254764,
        "headlineKo": "META: 이번에 시장의 반응이 정당한 이유(등급 하향)"
      },
      {
        "headline": "Moonshot AI's 2.8 Trillion Parameter Model Just Became the First From China to Top a Major Coding Benchmark",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2cfbd3abfdbe69317965c61bcfcff5017905d74ccac3e8258d693a93bd70c65f",
        "datetime": 1786252800,
        "headlineKo": "Moonshot AI의 2조 8천억 매개변수 모델이 중국 최초로 주요 코딩 벤치마크에서 1위를 차지했습니다."
      },
      {
        "headline": "Wall Street Week Ahead",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=deff1d4247207aac2c94f55973825d0ce38ade9e08234210a6c7618171e2655c",
        "datetime": 1786245109,
        "headlineKo": "월스트리트 주간"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
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
      },
      {
        "headline": "When Leverage Goes Wrong on Wall Street",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6a0988391faa72f1b2fee86fd03253c035c8beb825cd21d92ded5ecf8998a2d4",
        "datetime": 1786225537,
        "headlineKo": "월스트리트에서 레버리지가 잘못되었을 때"
      },
      {
        "headline": "Jim Cramer Is Telling Investors to Accumulate SpaceX for the Long Term",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bf86e9afd88cf05e66ec2be59ae7170d7f3cb3e7d6a5a9b02a9a041d6ae964a2",
        "datetime": 1786219338,
        "headlineKo": "Jim Cramer는 투자자들에게 장기적으로 SpaceX를 축적하라고 말하고 있습니다."
      },
      {
        "headline": "Rivian's make-or-break R2 midsize EV delivers: Road test",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d56a946910bb793ba85b560cdc2faf8af07406077e276b755d43db318e800525",
        "datetime": 1786199512,
        "headlineKo": "Rivian의 성패를 좌우할 R2 중형 EV는 다음을 제공합니다: 도로 테스트"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "SpaceX Lost $2 Billion in the First Half of 2026. Micron Made $28 Billion in Profits in Its Latest Quarter. But the Better Stock Pick Isn't as Obvious as Those Numbers Suggest.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ff3b948872894764f2c7411f9e3c9c31a15c740badec58c0aca07eeb394f129b",
        "datetime": 1786266240,
        "headlineKo": "SpaceX는 2026년 상반기에 20억 달러의 손실을 입었습니다. Micron은 최근 분기에 280억 달러의 수익을 올렸습니다. 그러나 더 나은 주식 선택은 그 숫자가 암시하는 것만큼 분명하지 않습니다."
      },
      {
        "headline": "Micron's Stock Price Has Corrected 30% From Its All-Time High. Is It Time to Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f58e416babd91f4eb5d6a6c962a41e285b256fb1df9f6cc44eb8b7953cda7ff4",
        "datetime": 1786261800,
        "headlineKo": "마이크론 주가가 사상 최고치에서 30% 수정됐다. 구매할 시간인가?"
      },
      {
        "headline": "Why the Market Continues to Sleep on Micron's Growth Potential",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=08b0bc744bc1d34d99a84cbe113d0575a940fb20ee7280cd6153682a8de40fd8",
        "datetime": 1786228500,
        "headlineKo": "시장이 마이크론의 성장 잠재력에 계속 잠자고 있는 이유"
      },
      {
        "headline": "Nvidia, Micron or Broadcom: What Would Raymond Dalio Do?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91aca5cb4998ce0bff81500fe9630d528ab91e5fc21132eec54717361dc3d2fe",
        "datetime": 1786210239,
        "headlineKo": "Nvidia, Micron 또는 Broadcom: Raymond Dalio는 무엇을 할까요?"
      },
      {
        "headline": "AI’s Biggest Opportunity by 2027: NVIDIA vs. Micron",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0214359f2efcb2f2aad79168155ae54e7165049fac366699b35a674e36096516",
        "datetime": 1786199400,
        "headlineKo": "2027년까지 AI의 가장 큰 기회: NVIDIA vs. Micron"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:03"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
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
      },
      {
        "headline": "Is AMD Stock a Buy on the Dip as AI Revenue Surges?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b7e7c384943e272c920bdd2f3c44898ab43fb2c23c07786aa122dea7506388f",
        "datetime": 1786200600,
        "headlineKo": "AI 수익 급증으로 인해 AMD 주식이 하락세를 타고 있습니까?"
      },
      {
        "headline": "AMD Just Reported Its Data Center Revenue More Than Doubled Year-Over-Year. What Comes Next.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3e966c0c80174d0d432ba10a8e1c1375f7aae91b4f451a6c600c2f353eef478",
        "datetime": 1786196702,
        "headlineKo": "AMD는 데이터 센터 수익이 전년 대비 두 배 이상 증가했다고 보고했습니다. 다음은 무엇입니까?"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
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
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
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
      },
      {
        "headline": "Jim Cramer Names 5 Investing Themes and 13 Stocks to Buy for 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7591081d099f58c7b7dee8c26d95bffffb959449b7425364d7387beeef4eb64a",
        "datetime": 1786180793,
        "headlineKo": "Jim Cramer는 2026년에 매수해야 할 5가지 투자 테마와 13가지 주식을 지정합니다."
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "We Are Undoubtedly In An AI Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cd8c6b57b31732d38f6589f34bd51390247075c591205a5edfcdd3d0e0d62a13",
        "datetime": 1786254300,
        "headlineKo": "우리는 의심할 여지 없이 AI 거품 속에 있다"
      },
      {
        "headline": "Crestmont P/E And Market Valuation: July 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d319fbdaee33182d5c6dd778caf1577b9ac50de89d36512a5f867328acf1dd77",
        "datetime": 1786235400,
        "headlineKo": "Crestmont P/E 및 시장 평가: 2026년 7월"
      },
      {
        "headline": "Market Valuation: Is The Market Still Overvalued?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=172ee529c04d02301059b2f64c0ffc06ed469b364cdcc73259093c4336db716f",
        "datetime": 1786235400,
        "headlineKo": "시장 가치 평가: 시장은 여전히 ​​과대평가되어 있나요?"
      },
      {
        "headline": "The 1-Minute Market Report, August 8, 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6c4447f6e7adfa3a7a753a933f4e0239f6ca1268da7b507cab61c0b414a03c5a",
        "datetime": 1786230855,
        "headlineKo": "1분 시장 보고서, 2026년 8월 8일"
      },
      {
        "headline": "OMAH: A 15% Distribution Rate From Buffett's Portfolio To Buy",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=eff10a4de6774df4870d9679fb61eb72192b194075b695973a1143ad5af0ceda",
        "datetime": 1786180500,
        "headlineKo": "OMAH: 버핏의 포트폴리오에서 구매까지 15%의 배분율"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:01"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "We Are Undoubtedly In An AI Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=cd8c6b57b31732d38f6589f34bd51390247075c591205a5edfcdd3d0e0d62a13",
        "datetime": 1786254300,
        "headlineKo": "우리는 의심할 여지 없이 AI 거품 속에 있다"
      },
      {
        "headline": "Top 50 High-Quality Dividend Growth Stocks For August 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=67a12f998d09e3a8032fc7543984727ae385b02a09472666c7971ce61d490975",
        "datetime": 1786243803,
        "headlineKo": "2026년 8월 상위 50개 고품질 배당성장주"
      },
      {
        "headline": "Crestmont P/E And Market Valuation: July 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d319fbdaee33182d5c6dd778caf1577b9ac50de89d36512a5f867328acf1dd77",
        "datetime": 1786235400,
        "headlineKo": "Crestmont P/E 및 시장 평가: 2026년 7월"
      },
      {
        "headline": "Regression To Trend: S&P Composite 211% Above Trend In July",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=4f1340e27aceeadb304a1d98180805006142c806a647a118300be0edd458ae84",
        "datetime": 1786235400,
        "headlineKo": "추세 회귀: S&P Composite는 7월 추세 대비 211% 상승"
      },
      {
        "headline": "Market Valuation: Is The Market Still Overvalued?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=172ee529c04d02301059b2f64c0ffc06ed469b364cdcc73259093c4336db716f",
        "datetime": 1786235400,
        "headlineKo": "시장 가치 평가: 시장은 여전히 ​​과대평가되어 있나요?"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:01"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
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
      },
      {
        "headline": "Oracle Surges: What's Driving the Sudden Rally",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a486e7b2a8cadaa229c3ec2e260751846755671f8498eae340f34f610455b8b",
        "datetime": 1786138200,
        "headlineKo": "Oracle Surges: 갑작스러운 반등을 주도하는 요인"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
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
      },
      {
        "headline": "Exploring the top movers within the dow jones index during today's session.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=90e59b20f2b77e8be0f9b80023cfea68966c63722d4f19a0161c55c2e4e3141a",
        "datetime": 1786120804,
        "headlineKo": "오늘 세션 동안 다우존스 지수 내 최고 변동 항목을 살펴봅니다."
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Earnings beats ease concerns over record U.S. stock rally - WSJ",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc5b1f3df9fd34ca061fc97816b99d46bbe40b24e9d6e0a40ed048a5e17c8ca4",
        "datetime": 1786259300,
        "headlineKo": "기록적인 미국 증시 상승에 대한 우려가 실적 개선으로 완화 - WSJ"
      },
      {
        "headline": "Is the Worst Finally Over for Palantir Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f815733acf70c7a31bac16167b222c022344d6d774450f570bf9b90d916d73bb",
        "datetime": 1786254600,
        "headlineKo": "Palantir 주식에 대한 최악의 상황은 마침내 끝났습니까?"
      },
      {
        "headline": "Palantir Is Worth $413 Billion. The $500 Billion Line Sits Almost Exactly at Its Record High.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6bea3e9c531ae06c293b7b043f6b3a91a9330c08f3a1ec5fd197c34108f038a9",
        "datetime": 1786238880,
        "headlineKo": "팔란티어의 가치는 4,130억 달러입니다. 5000억 달러 라인은 거의 정확히 사상 최고치에 도달했습니다."
      },
      {
        "headline": "Wall Street Can't Agree on Palantir. Here's What Investors Should Do Next",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e66b9a647dc23065a50b2ee03bcbc76c2a408d50ffbb4e0be40663f0e3c0d5e9",
        "datetime": 1786203002,
        "headlineKo": "월스트리트는 Palantir에 동의할 수 없습니다. 투자자가 다음에 해야 할 일은 다음과 같습니다."
      },
      {
        "headline": "Stock Market Week Ahead: Bullish Signals Amid 'Dirty' Volume",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47a727c516e807157b4e059d81f60520c37aa8abb3f5f0b6e5201ab1dd1d2f4e",
        "datetime": 1786198855,
        "headlineKo": "주식 시장 주간 전망: 거래량 '더러움' 속에 강세 신호"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
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
      },
      {
        "headline": "Can MU Stock Compound Its Way Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8ad9cb22ed7cabb93b64f2a636ab6a2a31f87786103b7cf4d0dcd921f6aa1e9",
        "datetime": 1786106845,
        "headlineKo": "MU 주식이 더 높아질 수 있습니까?"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
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
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
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
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
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
      },
      {
        "headline": "Tracking Ken Fisher's Fisher Asset Management Portfolio - Q2 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3b927a14a18d57bb82a7fd5ecacd77c7fce9a6ee9183da869696a924d72adf22",
        "datetime": 1786140337,
        "headlineKo": "Ken Fisher의 Fisher 자산 관리 포트폴리오 추적 - 2026년 2분기 업데이트"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
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
      },
      {
        "headline": "Wall Street Analysts See Lam Research (LRCX) as a Buy: Should You Invest?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=378b5a2e2569e892ac8e74b74cbac54af784eb0679e4d4b6d45baaa6167cb15e",
        "datetime": 1786109404,
        "headlineKo": "월스트리트 분석가들은 Lam Research(LRCX)를 매수로 보고 있습니다: 투자해야 할까요?"
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:02"
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
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:03"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
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
      },
      {
        "headline": "SanDisk CEO David Goeckeler Says Its Biggest Customers Aren't Talking Prices Anymore as Business Turns 'Highly Strategic'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70d8c7bbb79c2f64e6bb32683952226ee550455291af3012fdb79d803c7814bd",
        "datetime": 1786195816,
        "headlineKo": "SanDisk CEO David Goeckeler는 비즈니스가 '매우 전략적'으로 전환함에 따라 최대 고객이 더 이상 가격에 대해 이야기하지 않는다고 말했습니다."
      },
      {
        "headline": "SanDisk Just Unveiled the First High-Bandwidth Flash Standard. What That Means for SNDK Stock.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d17698e46196ed9d3b1d64f17b2a9763b96c78394cb2ad01123b11b23bda4e7",
        "datetime": 1786194002,
        "headlineKo": "SanDisk가 최초의 고대역폭 플래시 표준을 공개했습니다. SNDK 주식에 대한 의미."
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:03"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
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
      },
      {
        "headline": "BofA resets its Western Digital target after mixed signal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0761de0bf3ec77026ad4569b41d7d986f640b32a9548e918e1309fac534c0d61",
        "datetime": 1786151820,
        "headlineKo": "BofA는 신호가 혼합된 후 Western Digital 목표를 재설정합니다."
      }
    ],
    "_fetched_at": 1786276880.7712,
    "_updated_label": "2026-08-09 21:03"
  }
};
