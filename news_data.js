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
        "headline": "$10,000 in Axon Stock a Decade Ago Would Be Worth About $329,000 Today. The Stock Is Down Over the Past Year.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=49a089785d65e4e5b073af0613fe59824a7ba20ef12efd5766ff41645abfb797",
        "datetime": 1786182180,
        "headlineKo": "10년 전 Axon 주식의 10,000달러는 현재 약 329,000달러의 가치가 있을 것입니다. 지난 1년 동안 주가가 하락했습니다."
      },
      {
        "headline": "Prediction for Tesla Stock in 3 Years: The Bear Case",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=049067c1d8c5004b930360aea4b9c396d28dde0801beb294ea0a3fba7391ec49",
        "datetime": 1786181700,
        "headlineKo": "3년 후 Tesla 주식 예측: 곰 사례"
      },
      {
        "headline": "Is Micron Stock Too Cheap to Ignore?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7935a107260dce5bb81f1abcb7744e118ee7ebac4812720b2c5e40519124bf42",
        "datetime": 1786180860,
        "headlineKo": "마이크론 주식은 무시하기에는 너무 저렴합니까?"
      },
      {
        "headline": "Amazon's Stock Just Soared 15%. Here's Why Now Is Just the Beginning.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02010686f7ff6359768b8326043216a5a74de77d93c08d25ab97a594d5fb93d9",
        "datetime": 1786180800,
        "headlineKo": "아마존 주가가 15% 급등했습니다. 지금이 시작일 뿐인 이유는 다음과 같습니다."
      },
      {
        "headline": "The White House Continues to Promote the Strategic Bitcoin Reserve. Here's What It Means for Bitcoin.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bbaa9e371d765bd64d8e43fd70ddaa5734a7ec34ba25a5ce6f7a29ebd04da4c2",
        "datetime": 1786180680,
        "headlineKo": "백악관은 전략적 비트코인 ​​준비금을 계속 홍보하고 있습니다. 비트코인의 의미는 다음과 같습니다."
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Dan Ives Says We're in the \"3rd Inning\" of the AI Revolution. Is Nvidia Stock Still a Buy After the Pullback?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=796097171eca1952c6def2b4e73802c7187846570b255d2a3841cf7f033d0154",
        "datetime": 1786179840,
        "headlineKo": "Dan Ives는 우리가 AI 혁명의 \"3번째 이닝\"에 있다고 말합니다. Nvidia 주식은 하락 후에도 여전히 매수세를 보이고 있습니까?"
      },
      {
        "headline": "Apple (AAPL) Q3 2026 Earnings Call Transcript",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a1a9b7193b871aac916b32f57c2fd5c72c26fbf8043bf3b011fdc59c67046f6",
        "datetime": 1786152618,
        "headlineKo": "Apple(AAPL) 2026년 3분기 실적 통화 녹취록"
      },
      {
        "headline": "Apple (AAPL) Tops $10 Billion in India Sales, But Wall Street’s Focus Is on Supply Constraints and Margins",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e2b962f0c5f3a518954126a8852d47817b31d57498860d72f7ab1c9e1ec02200",
        "datetime": 1786151609,
        "headlineKo": "Apple(AAPL)은 인도 매출 100억 달러를 돌파했지만 월스트리트의 초점은 공급 제약과 마진에 맞춰져 있습니다."
      },
      {
        "headline": "Intel Quashed Its Dividend in 2024. Now the Stock's Up 389% and Investors Want It Back.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6288fadf5aeb7b3e2fd27973a4574bb402e12cb6f2a5ca1105a143af2d4c59b",
        "datetime": 1786143602,
        "headlineKo": "인텔은 2024년에 배당금을 중단했습니다. 이제 주가는 389% 상승했으며 투자자들은 이를 돌려받기를 원합니다."
      },
      {
        "headline": "Tracking Ken Fisher's Fisher Asset Management Portfolio - Q2 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3b927a14a18d57bb82a7fd5ecacd77c7fce9a6ee9183da869696a924d72adf22",
        "datetime": 1786140337,
        "headlineKo": "Ken Fisher의 Fisher 자산 관리 포트폴리오 추적 - 2026년 2분기 업데이트"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Alphabet Just Posted a Jaw-Dropping $112 Billion Profit. Here's the Catch.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2ab9497c3799555b2d3641f7fca734cbac3fdf3c4635262aaa992411f8783341",
        "datetime": 1786166400,
        "headlineKo": "Alphabet은 방금 입이 떡 벌어질 만큼 1,120억 달러의 수익을 올렸습니다. 여기에 캐치가 있습니다."
      },
      {
        "headline": "Banks Lead a Bonus Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd3ffa3ecd1662d6f216753773e9109808f00ab43bdaf395162b2ae539a32b11",
        "datetime": 1786146360,
        "headlineKo": "은행이 보너스 붐을 주도하다"
      },
      {
        "headline": "Q2 Earnings: Robust Results and Positive Estimate Revisions Validate Market Fundamentals",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e4c5e1b50c741cae903325677f360e97b3a77ec2af45200050e890dd60ea0e2",
        "datetime": 1786142520,
        "headlineKo": "2분기 실적: 견고한 결과와 긍정적인 추정 수정으로 시장 펀더멘털 검증"
      },
      {
        "headline": "Tracking Ken Fisher's Fisher Asset Management Portfolio - Q2 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3b927a14a18d57bb82a7fd5ecacd77c7fce9a6ee9183da869696a924d72adf22",
        "datetime": 1786140337,
        "headlineKo": "Ken Fisher의 Fisher 자산 관리 포트폴리오 추적 - 2026년 2분기 업데이트"
      },
      {
        "headline": "Gary Black Says Uber, Not Tesla or Waymo, Has the Best Shot at Bringing Robotaxis to the Masses",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f745797104723b33f664d31685b3b74136cea8c075cd429d555de7fae08c6921",
        "datetime": 1786140033,
        "headlineKo": "게리 블랙(Gary Black)은 Tesla나 Waymo가 아닌 Uber가 Robotaxis를 대중화하는 데 가장 적합하다고 말합니다."
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:01"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Microsoft Corporation: A Buy And Hold Forever Type Of Stock",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=1a0b8a68eb1e66057af35662c11baeffb8050870b6ee1ba46147a6a23fa9bd4c",
        "datetime": 1786169142,
        "headlineKo": "Microsoft Corporation: 영원히 매수하고 보유하는 주식 유형"
      },
      {
        "headline": "Hormuz Benefits U.S. Energy Exports, Plus Data Center Action (Video)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=313e670aedf40da2764befc2db110e2220983f61cee92a88ec47d28580e30cca",
        "datetime": 1786168800,
        "headlineKo": "Hormuz는 미국 에너지 수출과 데이터 센터 활동에 이점을 제공합니다(비디오)"
      },
      {
        "headline": "Microsoft: Big New AI Advantage, But Beware Duration Mismatch",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e3b4878502d9cbf8eec01958e6c9a6d6ea23a2902d9e071fc3a2df0936fb7c0f",
        "datetime": 1786168521,
        "headlineKo": "Microsoft: 새롭고 큰 AI 이점, 하지만 기간 불일치에 주의하세요"
      },
      {
        "headline": "7 Reasons Pershing Square (PS) Looks Pricey After Ackman Spotlighted AI Holdings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7970c957bce208d31c52fe3422040b63d34def4eff702053a38699b6c0663b04",
        "datetime": 1786159168,
        "headlineKo": "Ackman이 AI Holdings를 주목한 후 Pershing Square(PS)가 비싸 보이는 7가지 이유"
      },
      {
        "headline": "How a 52-Year-Old Can Turn $425,000 Into a Monthly Paycheck Machine by 62",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5cd1e43eec17114a328d7441137425546e16443c9dd2c02c7f813504f2b02ba3",
        "datetime": 1786154776,
        "headlineKo": "52세 노인이 62세까지 월급 기계로 $425,000를 바꾸는 방법"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:01"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Amazon's Stock Just Soared 15%. Here's Why Now Is Just the Beginning.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=02010686f7ff6359768b8326043216a5a74de77d93c08d25ab97a594d5fb93d9",
        "datetime": 1786180800,
        "headlineKo": "아마존 주가가 15% 급등했습니다. 지금이 시작일 뿐인 이유는 다음과 같습니다."
      },
      {
        "headline": "Bull of the Day: Amazon.com (AMZN)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=83f58d5277ddb3e1308f872dde7ce2eee38f5226f53a05aba715b5501b230df8",
        "datetime": 1786177800,
        "headlineKo": "오늘의 황소: Amazon.com (AMZN)"
      },
      {
        "headline": "Amazon (AMZN) Q2 2026 Earnings Call Transcript",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=151ec67fb79d4ce207815a65f52047f4d2bf9089056540fe1364ca0fe9120d8f",
        "datetime": 1786152619,
        "headlineKo": "Amazon (AMZN) 2026년 2분기 실적 통화 내용"
      },
      {
        "headline": "Q2 Earnings: Robust Results and Positive Estimate Revisions Validate Market Fundamentals",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e4c5e1b50c741cae903325677f360e97b3a77ec2af45200050e890dd60ea0e2",
        "datetime": 1786142520,
        "headlineKo": "2분기 실적: 견고한 결과와 긍정적인 추정 수정으로 시장 펀더멘털 검증"
      },
      {
        "headline": "Tracking Ken Fisher's Fisher Asset Management Portfolio - Q2 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3b927a14a18d57bb82a7fd5ecacd77c7fce9a6ee9183da869696a924d72adf22",
        "datetime": 1786140337,
        "headlineKo": "Ken Fisher의 Fisher 자산 관리 포트폴리오 추적 - 2026년 2분기 업데이트"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:01"
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
      },
      {
        "headline": "Taiwan Semiconductor (NYSE:TSM) Combines High Growth Momentum with a Breakout Setup",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=215c514565c32178b75d937c3db8dc8916e4ab2244bb939787f4fb86e192902b",
        "datetime": 1786094488,
        "headlineKo": "Taiwan Semiconductor(NYSE:TSM), 높은 성장 모멘텀과 브레이크아웃 설정 결합"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Broadcom (NASDAQ:AVGO): A Fitting Pick for Affordable Growth Investors",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=65e70b2d11c447f08959473b14db44174ff12cc97c2af54fc29835188cb2ebfa",
        "datetime": 1786184439,
        "headlineKo": "Broadcom(NASDAQ:AVGO): 합리적인 성장 투자자를 위한 적합한 선택"
      },
      {
        "headline": "Why Broadcom Inc. (AVGO) Outpaced the Stock Market Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=78cf6b6d0294927f598ee87d10bb7fcf2895c5efb50184e3d184376bff835066",
        "datetime": 1786139102,
        "headlineKo": "Broadcom Inc.(AVGO)가 오늘 주식 시장을 능가한 이유"
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
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "7 Reasons Pershing Square (PS) Looks Pricey After Ackman Spotlighted AI Holdings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7970c957bce208d31c52fe3422040b63d34def4eff702053a38699b6c0663b04",
        "datetime": 1786159168,
        "headlineKo": "Ackman이 AI Holdings를 주목한 후 Pershing Square(PS)가 비싸 보이는 7가지 이유"
      },
      {
        "headline": "Black Hills Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ce8f4632a050483f9ff1f1f1806128fa590979fde2049a7bb91eababe4587af1",
        "datetime": 1786147449,
        "headlineKo": "Black Hills Q2 수익 회의 하이라이트"
      },
      {
        "headline": "Meta (META) Q2 2026 Earnings Call Transcript",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7256713bcb9915cd27181ef125ef8ba8f306d240ad47e31ea491e856a79aa09d",
        "datetime": 1786147127,
        "headlineKo": "메타(META) 2026년 2분기 실적 통화 기록"
      },
      {
        "headline": "Tracking Ken Fisher's Fisher Asset Management Portfolio - Q2 2026 Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3b927a14a18d57bb82a7fd5ecacd77c7fce9a6ee9183da869696a924d72adf22",
        "datetime": 1786140337,
        "headlineKo": "Ken Fisher의 Fisher 자산 관리 포트폴리오 추적 - 2026년 2분기 업데이트"
      },
      {
        "headline": "META Stock Returns To Familiar Ground",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80510ca4966471873c9443afe082e059b49ddde457fc8478d3092e3f91e16f2e",
        "datetime": 1786136050,
        "headlineKo": "META 주식이 익숙한 땅으로 돌아옵니다"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:01"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Prediction for Tesla Stock in 3 Years: The Bear Case",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=049067c1d8c5004b930360aea4b9c396d28dde0801beb294ea0a3fba7391ec49",
        "datetime": 1786181700,
        "headlineKo": "3년 후 Tesla 주식 예측: 곰 사례"
      },
      {
        "headline": "What Does Intel (INTC) Gain From Its Texas Chip Facility Joint Venture?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=baf6fd986e5ab24950b3c5e1634aee35eee073d4f583b65101c3e0bfb1c64ed9",
        "datetime": 1786155071,
        "headlineKo": "Intel(INTC)은 텍사스 칩 시설 합작 투자를 통해 무엇을 얻습니까?"
      },
      {
        "headline": "SpaceX and Tesla choose Texas for AI chip manufacturing plant that will be world's largest building",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e1c7925945db6e3b73ce5aa8077f58d6c68a8cef4225ad92fefc1d7949e7271",
        "datetime": 1786150344,
        "headlineKo": "SpaceX와 Tesla는 세계 최대 규모의 AI 칩 제조 공장으로 텍사스를 선택했습니다."
      },
      {
        "headline": "Stock Market Today, Aug. 7: Space Exploration Technologies Surges on Q2 Revenue Beat, Lockup Relief, and Terafab Update",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61144125cb003b2bdb98238122ac9c48fb2fa28010d0e9d128986db2bc9d0c20",
        "datetime": 1786141155,
        "headlineKo": "오늘, 8월 7일 주식 시장: 2분기 매출 감소, 잠금 완화 및 Terafab 업데이트로 우주 탐사 기술 급증"
      },
      {
        "headline": "Elon Musk's Texas empire could soon include $10B Tesla solar plant in Fort Bend. Here's what to know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=07c204794a3c70a15f46bddccaf05e8716fcdb0e52fdbd5747d4952eb980c3f9",
        "datetime": 1786140635,
        "headlineKo": "Elon Musk의 텍사스 제국에는 곧 Fort Bend에 100억 달러 규모의 Tesla 태양광 발전소가 포함될 수 있습니다. 알아야 할 사항은 다음과 같습니다."
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Is Micron Stock Too Cheap to Ignore?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7935a107260dce5bb81f1abcb7744e118ee7ebac4812720b2c5e40519124bf42",
        "datetime": 1786180860,
        "headlineKo": "마이크론 주식은 무시하기에는 너무 저렴합니까?"
      },
      {
        "headline": "Q2 Earnings: Robust Results and Positive Estimate Revisions Validate Market Fundamentals",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e4c5e1b50c741cae903325677f360e97b3a77ec2af45200050e890dd60ea0e2",
        "datetime": 1786142520,
        "headlineKo": "2분기 실적: 견고한 결과와 긍정적인 추정 수정으로 시장 펀더멘털 검증"
      },
      {
        "headline": "Citi Revamps Micron Target Target With A Twist",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=42147621e2a0779d54b30edde8ed988149bd9e80361eb5adc714796715430359",
        "datetime": 1786133803,
        "headlineKo": "Citi, 트위스트를 통해 Micron Target Target 개편"
      },
      {
        "headline": "SK Hynix invests $38B in new plants amid AI memory shortages",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=48467b4b8f63b7c48d8054c3aaf8d6a64336aaa4c869bacf4f75fcce091bb1ed",
        "datetime": 1786133336,
        "headlineKo": "SK하이닉스, AI 메모리 부족 속에 신규 공장에 380억 달러 투자"
      },
      {
        "headline": "Micron Stock Falls After Citi Slashes Price Target on Memory Risks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6762210a53d75dd98a6ce7ddc2238e427e68f8315b4df33e045918ea56b7a91d",
        "datetime": 1786132293,
        "headlineKo": "Citi가 메모리 위험에 대한 가격 목표를 인하한 후 Micron 주가 하락"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:03"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "Intel Quashed Its Dividend in 2024. Now the Stock's Up 389% and Investors Want It Back.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6288fadf5aeb7b3e2fd27973a4574bb402e12cb6f2a5ca1105a143af2d4c59b",
        "datetime": 1786143602,
        "headlineKo": "인텔은 2024년에 배당금을 중단했습니다. 이제 주가는 389% 상승했으며 투자자들은 이를 돌려받기를 원합니다."
      },
      {
        "headline": "News of the day: Interfor's move to U.S., job gains, AMD buying Taalas, interest rate expectations, short-term investing and more",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99752a1bf07990a200e8f29b76ff96da399e59e6330f48948b6a142f31b29033",
        "datetime": 1786138058,
        "headlineKo": "오늘의 뉴스: Interfor의 미국 진출, 일자리 증가, AMD의 Taalas 인수, 금리 기대, 단기 투자 등"
      },
      {
        "headline": "A Volatile Week for Tech Revealed New Stock Narratives—and 1 Bargain",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7d6e1791dae16849d7a78912aef2337af692776aaf17f5e5434e466365ad7fe",
        "datetime": 1786136700,
        "headlineKo": "기술의 변동성이 큰 주간에 새로운 주식 이야기가 공개되고 1가지 할인 혜택이 제공됩니다."
      },
      {
        "headline": "Jim Cramer Shares Reasons Behind Why NVIDIA Corporation (NASDAQ:NVDA)’s Shares Are Finally Rising",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51f970c0bb3502d4e9e32836ebc0af363e9a7146efc85c552430f629dcb32633",
        "datetime": 1786127044,
        "headlineKo": "Jim Cramer가 NVIDIA Corporation(NASDAQ:NVDA)의 주가가 마침내 상승하는 이유를 공유합니다."
      },
      {
        "headline": "The Toughest Questions AMD Faced On Its Latest Call",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6012cda4a6eace2f2d9baf8b6054e29a00a832dccf45c8d130aaa8d714bc9653",
        "datetime": 1786125529,
        "headlineKo": "AMD가 최근 전화 통화에서 직면한 가장 어려운 질문"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "What Does Intel (INTC) Gain From Its Texas Chip Facility Joint Venture?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=baf6fd986e5ab24950b3c5e1634aee35eee073d4f583b65101c3e0bfb1c64ed9",
        "datetime": 1786155071,
        "headlineKo": "Intel(INTC)은 텍사스 칩 시설 합작 투자를 통해 무엇을 얻습니까?"
      },
      {
        "headline": "Intel Quashed Its Dividend in 2024. Now the Stock's Up 389% and Investors Want It Back.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6288fadf5aeb7b3e2fd27973a4574bb402e12cb6f2a5ca1105a143af2d4c59b",
        "datetime": 1786143602,
        "headlineKo": "인텔은 2024년에 배당금을 중단했습니다. 이제 주가는 389% 상승했으며 투자자들은 이를 돌려받기를 원합니다."
      },
      {
        "headline": "SoftBank Stock Drops 6.1% as AI Funding Pressure Intensifies",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbbc87bc8f9da5340f5ba05ce023679edf1f221d8455573c0624335436ba4d90",
        "datetime": 1786132254,
        "headlineKo": "AI 자금 압박이 심화되면서 소프트뱅크 주가 6.1% 하락"
      },
      {
        "headline": "Most active S&P500 stocks in Friday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=21ae4947413e462bde9ae3d01a07161031a4fd3833a2d40315510d88e2728fba",
        "datetime": 1786125902,
        "headlineKo": "금요일 세션에서 가장 활발한 S&P500 주식"
      },
      {
        "headline": "Curious about the most active stocks on Friday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=6f4edb3908e5710aaecd62be546b7e42e4c7cdae0fbc8a9b3ec03b42a0b4cd21",
        "datetime": 1786125600,
        "headlineKo": "금요일에 가장 활발한 주식이 궁금하세요?"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Jim Cramer Names 5 Investing Themes and 13 Stocks to Buy for 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7591081d099f58c7b7dee8c26d95bffffb959449b7425364d7387beeef4eb64a",
        "datetime": 1786180793,
        "headlineKo": "Jim Cramer는 2026년에 매수해야 할 5가지 투자 테마와 13가지 주식을 지정합니다."
      },
      {
        "headline": "Situational Awareness invested $500 million in chip startup Source Foundry",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f4075162f60e6e3789b813b99f5ce96fb58dbedaf9219a7dfca2a8163e533e8",
        "datetime": 1786166605,
        "headlineKo": "Situational Awareness는 칩 스타트업 Source Foundry에 5억 달러를 투자했습니다."
      },
      {
        "headline": "Banks Lead a Bonus Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dd3ffa3ecd1662d6f216753773e9109808f00ab43bdaf395162b2ae539a32b11",
        "datetime": 1786146360,
        "headlineKo": "은행이 보너스 붐을 주도하다"
      },
      {
        "headline": "Dow Jones Futures: What To Do As Stock Market Revs Up; Warren Buffett, Cisco, Lumentum Due",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bdbffaf4ea2dbe87049f8e1753abc628014aef7d8a456bfb107405ba8d9edb41",
        "datetime": 1786146073,
        "headlineKo": "다우존스 선물: 주식 시장이 상승할 때 해야 할 일; 워렌 버핏, 시스코, Lumentum Due"
      },
      {
        "headline": "Applied Materials stock splits: History & prospects explained",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe17486fbf14be87ac1d22e94b52a63cc956731bad42026323e357e2c1813281",
        "datetime": 1786145728,
        "headlineKo": "Applied Materials 주식 분할: 역사 및 전망 설명"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:03"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Stocks, Commodities And Precious Metals; Big Changes Coming",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9f2d6b4df9bb200fb24a2021cb52ce4f9f2e5d08e38417addac7464040d7d52e",
        "datetime": 1786174665,
        "headlineKo": "주식, 상품 및 귀금속; 큰 변화가 오고 있다"
      },
      {
        "headline": "Hormuz Benefits U.S. Energy Exports, Plus Data Center Action (Video)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=313e670aedf40da2764befc2db110e2220983f61cee92a88ec47d28580e30cca",
        "datetime": 1786168800,
        "headlineKo": "Hormuz는 미국 에너지 수출과 데이터 센터 활동에 이점을 제공합니다(비디오)"
      },
      {
        "headline": "U.S. Government Borrows $800B In 3 Months",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c8447d08f0a574e1a4b10a8d74795610c99d531298a181817a04175d1d24086e",
        "datetime": 1786165200,
        "headlineKo": "미국 정부, 3개월 만에 8000억 달러 대출"
      },
      {
        "headline": "Weekly Commentary: Bessent's Gambit",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d8291333cd2234a62a8664ae452b99d91ce8abe685b7c91e6daef98a454b01d7",
        "datetime": 1786163414,
        "headlineKo": "주간 해설: Bessent's Gambit"
      },
      {
        "headline": "Household Survey Shows 1.8M Jobs Lost In 2026 So Far",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e1bcb8de7a4181ddf01a1bca638fb769890f1a338ae3d029aecdb4e41f18c5e2",
        "datetime": 1786162200,
        "headlineKo": "가구 조사에 따르면 2026년 현재까지 180만 개의 일자리가 사라진 것으로 나타났습니다"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:01"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Stocks, Commodities And Precious Metals; Big Changes Coming",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9f2d6b4df9bb200fb24a2021cb52ce4f9f2e5d08e38417addac7464040d7d52e",
        "datetime": 1786174665,
        "headlineKo": "주식, 상품 및 귀금속; 큰 변화가 오고 있다"
      },
      {
        "headline": "Hormuz Benefits U.S. Energy Exports, Plus Data Center Action (Video)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=313e670aedf40da2764befc2db110e2220983f61cee92a88ec47d28580e30cca",
        "datetime": 1786168800,
        "headlineKo": "Hormuz는 미국 에너지 수출과 데이터 센터 활동에 이점을 제공합니다(비디오)"
      },
      {
        "headline": "U.S. Government Borrows $800B In 3 Months",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c8447d08f0a574e1a4b10a8d74795610c99d531298a181817a04175d1d24086e",
        "datetime": 1786165200,
        "headlineKo": "미국 정부, 3개월 만에 8000억 달러 대출"
      },
      {
        "headline": "FOMO Vs. The Earnings Bar",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e29d27473468d2f4c5f41a80fbebce1f54c42b02dd95d2452df29a6d7b935e75",
        "datetime": 1786164600,
        "headlineKo": "FOMO 대. 수익 표시줄"
      },
      {
        "headline": "Weekly Commentary: Bessent's Gambit",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d8291333cd2234a62a8664ae452b99d91ce8abe685b7c91e6daef98a454b01d7",
        "datetime": 1786163414,
        "headlineKo": "주간 해설: Bessent's Gambit"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:01"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Oracle Surges: What's Driving the Sudden Rally",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2a486e7b2a8cadaa229c3ec2e260751846755671f8498eae340f34f610455b8b",
        "datetime": 1786138200,
        "headlineKo": "Oracle Surges: 갑작스러운 반등을 주도하는 요인"
      },
      {
        "headline": "AI theme has 'a long way to run': Strategist",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5f0a9e1cf2e197fdc03b734096c0148252c19aec629c495d9aa2da1c440126ee",
        "datetime": 1786135748,
        "headlineKo": "AI 테마는 '달릴 길이 멀다': 전략가"
      },
      {
        "headline": "Michael Burry Sounds Alarm on Major AI Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d04af52a3bc24c58728b3319f664d3fea346fd5f124519418e432fc3ebe9ebf8",
        "datetime": 1786132058,
        "headlineKo": "Michael Burry, 주요 AI 주식에 경종을 울린다"
      },
      {
        "headline": "Michael Burry issues blunt warning as he bets against 2 AI favorites",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e74856535b7cfd6f0b870513e35bd5268cf03f567140e369c0a6c8e079ab0f31",
        "datetime": 1786131420,
        "headlineKo": "Michael Burry는 2개의 AI 후보에 베팅하면서 직설적인 경고를 합니다."
      },
      {
        "headline": "Borrowing to the Brink: How Oracle’s AI Expansion Put Its Credit Rating on Life Support",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50a4e9afb3eb35e118934fd82aa9e74bcf23dfddee73353280d9720028b09583",
        "datetime": 1786131022,
        "headlineKo": "위기에 처한 대출: 오라클의 AI 확장이 생명 유지에 대한 신용 등급을 매기는 방법"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
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
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "PLTY Holders Left $60,000 on a $10,000 Position While Chasing Monthly Distributions",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6b9ea377c50a8ca7f3317dd943b8d09dc48313b2f68ae0b9aec30c4eb475bacc",
        "datetime": 1786151141,
        "headlineKo": "PLTY 보유자는 월별 분배를 추구하는 동안 $10,000 포지션에서 $60,000를 남겼습니다."
      },
      {
        "headline": "S&P 500 Ends At Record High, Clocks Strongest Week Since April As Poor Jobs Data Calms Rate Hike Fear — SEZL, SPCX, RDW, PLTR, TTD In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e32f60cde1ee10d082ade4fec7ab02bd2ed9ac1708a83d26167a69d24d2475b",
        "datetime": 1786137885,
        "headlineKo": "S&P 500은 사상 최고치로 마감하고, 부실한 일자리 데이터로 인해 금리 인상 공포가 진정되면서 4월 이후 가장 강한 주를 기록했습니다 — SEZL, SPCX, RDW, PLTR, TTD 집중"
      },
      {
        "headline": "Stock Market Today, Aug. 7: Palantir Surges on Bank of America Upbeat View After Strong Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=23284d2c9340ebbcb480958322cb238ffead0a0d28a52ad46f3b3592a3e2438b",
        "datetime": 1786136716,
        "headlineKo": "오늘, 8월 7일 주식 시장: Palantir, Bank of America에서 강한 수익 이후 긍정적인 전망으로 급등"
      },
      {
        "headline": "A Volatile Week for Tech Revealed New Stock Narratives—and 1 Bargain",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7d6e1791dae16849d7a78912aef2337af692776aaf17f5e5434e466365ad7fe",
        "datetime": 1786136700,
        "headlineKo": "기술의 변동성이 큰 주간에 새로운 주식 이야기가 공개되고 1가지 할인 혜택이 제공됩니다."
      },
      {
        "headline": "S&P 500 Posts Weekly Gain as Tech Giants Surge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c9ea2e1a17921403a3c80370ec720c7aef132c0fbd33970957a3acbe9c0312a",
        "datetime": 1786136021,
        "headlineKo": "기술 거대 기업의 급등으로 S&P 500 주간 상승세 기록"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
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
      },
      {
        "headline": "What's Going On With NVIDIA Stock Friday?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=62672d5370fa7616d1aad39fd3c921b723515464ae119d452449719743519db5",
        "datetime": 1786081093,
        "headlineKo": "NVIDIA 주식 금요일에 무슨 일이 일어나고 있나요?"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
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
      },
      {
        "headline": "AMD: Buy The Dip - Market Is Mispricing Its Supply Leverage",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b6c0e20f791a8fefc10daa30a579f9ab3f7bd0a51b036b3374ac42872bcb74a4",
        "datetime": 1786094146,
        "headlineKo": "AMD: 딥 매수 - 시장이 공급 레버리지 가격을 잘못 책정하고 있습니다"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
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
      },
      {
        "headline": "Should Lumentum Stock Be in Your Portfolio Pre-Q4 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc51f899baca9baea7eda01583fe6ce8ec175b8b30ab034b92ea9095dfeeb75f",
        "datetime": 1786122960,
        "headlineKo": "Lumentum 주식이 귀하의 포트폴리오에 4분기 이전 수익에 포함되어야 합니까?"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
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
      },
      {
        "headline": "Forget Taiwan Semiconductor: 2 AI Semiconductor Equipment Stocks to Buy and Hold Instead",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5be3e09c6e109b7dedd0f474f1e1bf1716c794b43d38b0d7b79fa9182a493159",
        "datetime": 1786121400,
        "headlineKo": "대만 반도체는 잊어라: 대신 매수하고 보유해야 할 AI 반도체 장비 주식 2개"
      },
      {
        "headline": "Why Onto Innovation Is A Buy After Posting Q2 Results",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9f1c33362107f81c88f56073b4d5af70d0fd30007ebab4e7f8ac693a015292f8",
        "datetime": 1786103923,
        "headlineKo": "2분기 결과 게시 후 Onto Innovation이 매수인 이유"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:02"
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
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
      },
      {
        "headline": "Why Onto Innovation Is A Buy After Posting Q2 Results",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9f1c33362107f81c88f56073b4d5af70d0fd30007ebab4e7f8ac693a015292f8",
        "datetime": 1786103923,
        "headlineKo": "2분기 결과 게시 후 Onto Innovation이 매수인 이유"
      },
      {
        "headline": "Lam Research Stock Is Gaining Friday: What's Going On?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=21973374c70c5217ef14ea3d697c153fb667a92a358adab8a796c91a8b47e2e1",
        "datetime": 1786103489,
        "headlineKo": "Lam Research 주식이 금요일에 상승하고 있습니다: 무슨 일이 일어나고 있나요?"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:03"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
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
      },
      {
        "headline": "Stocks Supported as Fed Rate Hike Fears Ease",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57362663cfb7334a6a146894a20564ff8c11ac4c799d2dfdbfc38d94a4b74d75",
        "datetime": 1786117375,
        "headlineKo": "연준 금리 인상 우려 완화로 지지받는 주식"
      },
      {
        "headline": "Why Onto Innovation Is A Buy After Posting Q2 Results",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9f1c33362107f81c88f56073b4d5af70d0fd30007ebab4e7f8ac693a015292f8",
        "datetime": 1786103923,
        "headlineKo": "2분기 결과 게시 후 Onto Innovation이 매수인 이유"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:03"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "FOMO Vs. The Earnings Bar",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e29d27473468d2f4c5f41a80fbebce1f54c42b02dd95d2452df29a6d7b935e75",
        "datetime": 1786164600,
        "headlineKo": "FOMO 대. 수익 표시줄"
      },
      {
        "headline": "What Does Sandisk (SNDK) Mean For AI Storage With Its New QLC Flash?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbdc48a2dca325cf0c62fc6e38502498f372e9902448902228a2708d17eb799d",
        "datetime": 1786159090,
        "headlineKo": "Sandisk(SNDK)가 새로운 QLC 플래시를 탑재한 AI 스토리지에 어떤 의미가 있습니까?"
      },
      {
        "headline": "Bank of America doubles down on Sandisk stock after earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d53d74c90e8cc492d9efa44175b6ef8bdd7f5e8e081908e0dfd4a75e63624f0c",
        "datetime": 1786140420,
        "headlineKo": "Bank of America는 실적 후 Sandisk 주식을 두 배로 줄였습니다."
      },
      {
        "headline": "A Volatile Week for Tech Revealed New Stock Narratives—and 1 Bargain",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7d6e1791dae16849d7a78912aef2337af692776aaf17f5e5434e466365ad7fe",
        "datetime": 1786136700,
        "headlineKo": "기술의 변동성이 큰 주간에 새로운 주식 이야기가 공개되고 1가지 할인 혜택이 제공됩니다."
      },
      {
        "headline": "Micron Stock Falls After Citi Slashes Price Target on Memory Risks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6762210a53d75dd98a6ce7ddc2238e427e68f8315b4df33e045918ea56b7a91d",
        "datetime": 1786132293,
        "headlineKo": "Citi가 메모리 위험에 대한 가격 목표를 인하한 후 Micron 주가 하락"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:03"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
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
      },
      {
        "headline": "A Volatile Week for Tech Revealed New Stock Narratives—and 1 Bargain",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d7d6e1791dae16849d7a78912aef2337af692776aaf17f5e5434e466365ad7fe",
        "datetime": 1786136700,
        "headlineKo": "기술의 변동성이 큰 주간에 새로운 주식 이야기가 공개되고 1가지 할인 혜택이 제공됩니다."
      },
      {
        "headline": "Stay informed with the top movers within the S&P500 index on Friday.",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=97cc30b60f13c7af214f0c0afb17997cc515ad12a36ad63fdf4d3ec954ca3f5c",
        "datetime": 1786129501,
        "headlineKo": "금요일 S&P500 지수 내 최고 변동 항목에 대한 정보를 받아보세요."
      },
      {
        "headline": "Top S&P500 movers in Friday's session",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=9bdba43fcab22b2cbe6b2e92788d4e69dd55e6b163385f9dbbc531c0004beafd",
        "datetime": 1786120501,
        "headlineKo": "금요일 세션의 S&P500 상위 변동 항목"
      }
    ],
    "_fetched_at": 1786190480.8024895,
    "_updated_label": "2026-08-08 21:03"
  }
};
