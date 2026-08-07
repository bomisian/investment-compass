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
        "headline": "SpaceX Shares Fail to Launch Despite Soaring Revenue. Is the Stock a Buy on the Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=18f3cfeeee7e9909a154cbd4152ff938bdcda5695c725a8b54a897dc090d4f35",
        "datetime": 1786087500,
        "headlineKo": "SpaceX 주식은 급증하는 수익에도 불구하고 출시에 실패합니다. 주식은 하락장에서 매수인가?"
      },
      {
        "headline": "Samsung’s new memory chip could make Nvidia’s AI chips faster",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fd3784c0a204a9dbde2011ed5b0e29678b3e35a3c23744575475bf80f9a8bc87",
        "datetime": 1786082580,
        "headlineKo": "삼성의 새로운 메모리 칩은 엔비디아의 AI 칩을 더 빠르게 만들 수 있습니다."
      },
      {
        "headline": "SpaceX (SPCX) Unveils Orbital AI Network And $16.8 Billion Chip Factory Plans",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=858e27613e37dd146ee55524d56f32bb0369f30ff9b7e0888035133686e0a2e7",
        "datetime": 1786079669,
        "headlineKo": "SpaceX(SPCX), 궤도 AI 네트워크 및 168억 달러 규모의 칩 공장 계획 공개"
      },
      {
        "headline": "SharonAI Holdings Inc (SHAZ) (Q2 2026) Earnings Call Highlights: AI Capacity Surges to 212MW ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a3f4cd8e45150327b978a43758c2806c4a73b892ed6a38cf846f09a1c2fa25a8",
        "datetime": 1786079195,
        "headlineKo": "SharonAI Holdings Inc(SHAZ)(2026년 2분기) 실적 발표 하이라이트: AI 용량이 212MW로 급증 ..."
      },
      {
        "headline": "SoFi and Visa Earnings Point to Consumer Confidence",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ddca5573b122f6669e59ab9dbf741f76510ee77c0befe170e41d8f5c8dadd19",
        "datetime": 1786078846,
        "headlineKo": "SoFi 및 Visa 수익은 소비자 신뢰를 나타냅니다."
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:47"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Snap’s 2 Big Problems That Scream ‘Stay Away From the Stock’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fcd36648a7d95af6f5a6df29b074d08ba40e566f3a9b7bd968db8c5677818baf",
        "datetime": 1786081500,
        "headlineKo": "'주식을 멀리하세요'라고 외치는 Snap의 2가지 큰 문제"
      },
      {
        "headline": "Apple’s Capex Strategy Worked But Other Pressures Are Mounting Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbf0b953fa6bde0e0f945a349d3bf46e07cf69766808de4d8a1de6f4df989388",
        "datetime": 1786077383,
        "headlineKo": "Apple의 Capex 전략은 효과가 있었지만 현재 다른 압력이 가중되고 있습니다."
      },
      {
        "headline": "$2.9 Billion In Payouts, A Lagging Stock: The SNAP Trade-Off",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8206ec0143975facf0368e2c2e36063820241351141604e981b25c49323245cb",
        "datetime": 1786050429,
        "headlineKo": "29억 달러의 지불금, 뒤쳐진 주식: SNAP 절충안"
      },
      {
        "headline": "MP Earnings Show Chinese Rare-Earth Monopoly Is Fading",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a03924cea2e4d0214b8415536798c2eb85ec434c1480d98cb6a0817a2e5714c",
        "datetime": 1786047540,
        "headlineKo": "MP 수익은 중국의 희토류 독점이 사라지고 있음을 보여줍니다"
      },
      {
        "headline": "Top Research Reports for Apple, Shell & Toyota Motor",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c58064eaebe5202bcaa12490ed62a9a8c04d19731bd9afcdb2ca62be35e78e1",
        "datetime": 1786047240,
        "headlineKo": "Apple, Shell 및 Toyota Motor에 대한 주요 연구 보고서"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:46"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Oil Price Spoils the Party on Wall Street, Memory Chips Take a Hard Hit",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c42e3831622718b4f9a1ba0e6c62cc5085b39b425b74d855b0adf96ae23b213e",
        "datetime": 1786088776,
        "headlineKo": "유가가 월스트리트의 파티를 망치고 메모리 칩이 큰 타격을 입습니다."
      },
      {
        "headline": "Michael Burry Shares 'Three Great Charts' That Show Big AI Capex Could Unwind As Badly As Housing Did In 2008",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ace76c22af42fc5516268dd0f9a0a2bfce4c87a2ca22404fd54b8594cd824027",
        "datetime": 1786081682,
        "headlineKo": "Michael Burry는 대규모 AI Capex가 2008년 주택 시장만큼 악화될 수 있음을 보여주는 '3가지 훌륭한 차트'를 공유합니다."
      },
      {
        "headline": "What Block (SQ)'s Buyback Completion And Google AI Tie-Up Means For Shareholders",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=127ccb6ff769aa61f0abcc7f3154d9301e12d8393f032da162e3156c689a49f8",
        "datetime": 1786079763,
        "headlineKo": "블록(SQ)의 자사주 매입 완료와 구글 AI 제휴가 주주들에게 주는 의미"
      },
      {
        "headline": "Is Broadcom the Best Chip Stock to Own Now? Maybe",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c8475d010eeb292a5a164fa8c3070047dec1571403aafb605fc20afb8feacd3",
        "datetime": 1786078621,
        "headlineKo": "Broadcom은 현재 소유할 수 있는 최고의 칩 주식입니까? 아마도"
      },
      {
        "headline": "Alphabet and Tesla: A Single Divergence Tells Us So Much About Current Reality",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=98721180ef16b1b076d6ff39557b71f273fddf371e4f5415691ae9e49f5a44aa",
        "datetime": 1786078217,
        "headlineKo": "알파벳과 테슬라: 단일한 차이가 현재 현실에 대해 많은 것을 말해준다"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:46"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Michael Burry Shares 'Three Great Charts' That Show Big AI Capex Could Unwind As Badly As Housing Did In 2008",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ace76c22af42fc5516268dd0f9a0a2bfce4c87a2ca22404fd54b8594cd824027",
        "datetime": 1786081682,
        "headlineKo": "Michael Burry는 대규모 AI Capex가 2008년 주택 시장만큼 악화될 수 있음을 보여주는 '3가지 훌륭한 차트'를 공유합니다."
      },
      {
        "headline": "The Core Bull Thesis Around Microsoft Remains Very Strong at $500",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6af61f4149856b962e7d5a269047765664d6164a15d4b600309cd9bb1cd14333",
        "datetime": 1786077593,
        "headlineKo": "Microsoft를 둘러싼 핵심 강세론은 500달러로 매우 강력하게 유지됩니다."
      },
      {
        "headline": "Where to Invest in AI in 2026: A Guide for Advisors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d6227310610ca8d6a194360bb69536371e69bf30e11cffb51d577b3879fb1f5",
        "datetime": 1786071649,
        "headlineKo": "2026년 AI에 투자할 곳: 자문가를 위한 가이드"
      },
      {
        "headline": "Five9 Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cdb6022ea065ec85d1ffe6c237d8032c30a5d9e3eaab02be4c99c0561954f22d",
        "datetime": 1786068233,
        "headlineKo": "Five9 2분기 실적발표 하이라이트"
      },
      {
        "headline": "2 Energy Stocks With More Hype Than Fundamentals Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc20dcbede2ce6d6d8d22727379e746dbfa504ebe3f6374be94d023d79177a23",
        "datetime": 1786062300,
        "headlineKo": "현재 펀더멘털보다 더 과장된 에너지 주식 2개"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:46"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Michael Burry Shares 'Three Great Charts' That Show Big AI Capex Could Unwind As Badly As Housing Did In 2008",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ace76c22af42fc5516268dd0f9a0a2bfce4c87a2ca22404fd54b8594cd824027",
        "datetime": 1786081682,
        "headlineKo": "Michael Burry는 대규모 AI Capex가 2008년 주택 시장만큼 악화될 수 있음을 보여주는 '3가지 훌륭한 차트'를 공유합니다."
      },
      {
        "headline": "July 2026 Mailbag: Year 12 Begins",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1e456129dced02b4e9f84aef8b453ed9d8cd2fa987505ab4b9827ac901d21904",
        "datetime": 1786077489,
        "headlineKo": "2026년 7월 메일백: 12년차 시작"
      },
      {
        "headline": "How Do UPS’s New SMB Tools And Steady Dividend Shape Its Long‑Term Investment Story (UPS)?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1579706d031c269f14b86d4f6a2eb8f0b16aad4d891e259cf5f109228fd63305",
        "datetime": 1786076982,
        "headlineKo": "UPS의 새로운 SMB 도구와 꾸준한 배당금이 UPS(장기 투자 스토리)를 어떻게 형성합니까?"
      },
      {
        "headline": "Where to Invest in AI in 2026: A Guide for Advisors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d6227310610ca8d6a194360bb69536371e69bf30e11cffb51d577b3879fb1f5",
        "datetime": 1786071649,
        "headlineKo": "2026년 AI에 투자할 곳: 자문가를 위한 가이드"
      },
      {
        "headline": "Jamie Dimon makes huge call on AI and U.S. economy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=53de68a19dcac910f8f3a58efea42c5221cc32e18e30af771d19437d6abf0eef",
        "datetime": 1786063020,
        "headlineKo": "Jamie Dimon은 AI와 미국 경제에 대해 큰 요구를 합니다."
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:46"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
      {
        "headline": "Taiwan Semiconductor (NYSE:TSM) Combines High Growth Momentum with a Breakout Setup",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=215c514565c32178b75d937c3db8dc8916e4ab2244bb939787f4fb86e192902b",
        "datetime": 1786094488,
        "headlineKo": "Taiwan Semiconductor(NYSE:TSM), 높은 성장 모멘텀과 브레이크아웃 설정 결합"
      },
      {
        "headline": "Wasatch Micro Cap Fund Q2 2026 Contributors And Detractors",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=06fffbad869d23c6cb921639401066357b9fd1d8223ba6396888e1c260040b2f",
        "datetime": 1786065600,
        "headlineKo": "Wasatch Micro Cap Fund 2026년 2분기 기부자와 비방자"
      },
      {
        "headline": "$1000 Invested In Taiwan Semiconductor 10 Years Ago Would Be Worth This Much Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=7430f2fa11520bd620ede9e994fd0320828db78a433f877298d0e3319042fb4f",
        "datetime": 1786018549,
        "headlineKo": "10년 전 대만 반도체에 투자한 1000달러가 오늘날 이 정도 가치가 될 것입니다."
      },
      {
        "headline": "Broadcom: Big, Bad News When Compute Leaders Need Optical Advantage (Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=30cdad70cc876fc684008b369f3ad588e5bca6c35f2bc682991246e19354ab67",
        "datetime": 1785948298,
        "headlineKo": "Broadcom: 컴퓨팅 리더에게 광학적 이점이 필요할 때의 크고 나쁜 소식(업그레이드)"
      },
      {
        "headline": "10 Information Technology Stocks With Whale Alerts In Today’s Session",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8d5187674a093923a700cb053cf24ddecaa79a4a30a0891ad53fcf56dcb513f9",
        "datetime": 1785936914,
        "headlineKo": "오늘 세션에서 고래 경고가 있는 10가지 정보 기술 주식"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:48"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Is Broadcom the Best Chip Stock to Own Now? Maybe",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c8475d010eeb292a5a164fa8c3070047dec1571403aafb605fc20afb8feacd3",
        "datetime": 1786078621,
        "headlineKo": "Broadcom은 현재 소유할 수 있는 최고의 칩 주식입니까? 아마도"
      },
      {
        "headline": "Where to Invest in AI in 2026: A Guide for Advisors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6d6227310610ca8d6a194360bb69536371e69bf30e11cffb51d577b3879fb1f5",
        "datetime": 1786071649,
        "headlineKo": "2026년 AI에 투자할 곳: 자문가를 위한 가이드"
      },
      {
        "headline": "Earn 14% On MRVL Stock Now, Or Own It 60% Cheaper Later",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=394dc06703c81357537a403b57b313c16493c77f9209c06454024d7ea4a83ef3",
        "datetime": 1786067315,
        "headlineKo": "지금 MRVL 재고로 14%를 벌거나 나중에 60% 더 저렴하게 소유하세요"
      },
      {
        "headline": "Anthropic SPVs Stack $71 Billion in Chip-Lease Debt in 60 Days",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=110ae11d366eed4689bfc2b97bdd52e07e5280e86dff00d8e482651710d344f6",
        "datetime": 1786061114,
        "headlineKo": "인류의 SPV는 60일 만에 710억 달러의 칩 임대 부채를 쌓았습니다."
      },
      {
        "headline": "Synaptics (SYNA) Surpasses Q4 Earnings and Revenue Estimates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f81cb7a2aefe9088f7bfb14675abd9aa5929e042d32b65318f2720e42f245bba",
        "datetime": 1786057817,
        "headlineKo": "Synaptics(SYNA)가 4분기 수익 및 수익 추정치를 능가했습니다."
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:47"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Oil Price Spoils the Party on Wall Street, Memory Chips Take a Hard Hit",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c42e3831622718b4f9a1ba0e6c62cc5085b39b425b74d855b0adf96ae23b213e",
        "datetime": 1786088776,
        "headlineKo": "유가가 월스트리트의 파티를 망치고 메모리 칩이 큰 타격을 입습니다."
      },
      {
        "headline": "Michael Burry Shares 'Three Great Charts' That Show Big AI Capex Could Unwind As Badly As Housing Did In 2008",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ace76c22af42fc5516268dd0f9a0a2bfce4c87a2ca22404fd54b8594cd824027",
        "datetime": 1786081682,
        "headlineKo": "Michael Burry는 대규모 AI Capex가 2008년 주택 시장만큼 악화될 수 있음을 보여주는 '3가지 훌륭한 차트'를 공유합니다."
      },
      {
        "headline": "Snap’s 2 Big Problems That Scream ‘Stay Away From the Stock’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fcd36648a7d95af6f5a6df29b074d08ba40e566f3a9b7bd968db8c5677818baf",
        "datetime": 1786081500,
        "headlineKo": "'주식을 멀리하세요'라고 외치는 Snap의 2가지 큰 문제"
      },
      {
        "headline": "Meta Owes $942M To New Mexico After Judge Rules In Social Media Case; Zuckerberg Promises Appeal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cb85e64304d09dc95c404bbd3a93d35952ed204ce0dc5051ad3d477f9975a2c8",
        "datetime": 1786081364,
        "headlineKo": "Meta는 소셜 미디어 사건에서 판사의 판결 이후 뉴멕시코에 9억 4200만 달러의 빚을 지고 있습니다. 저커버그, 항소 약속"
      },
      {
        "headline": "Is Broadcom the Best Chip Stock to Own Now? Maybe",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c8475d010eeb292a5a164fa8c3070047dec1571403aafb605fc20afb8feacd3",
        "datetime": 1786078621,
        "headlineKo": "Broadcom은 현재 소유할 수 있는 최고의 칩 주식입니까? 아마도"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:46"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Elon Musk’s Terafab Will Be Earth’s Most Valuable Building, 50x the Size of the Pentagon",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b47145f70e62b17276f9181ca852b98ffbb25245cc81a8d4158e3d65e6b8a385",
        "datetime": 1786088635,
        "headlineKo": "Elon Musk의 Terafab은 국방부 크기의 50배에 달하는 지구에서 가장 가치 있는 건물이 될 것입니다"
      },
      {
        "headline": "SpaceX (SPCX) Unveils Orbital AI Network And $16.8 Billion Chip Factory Plans",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=858e27613e37dd146ee55524d56f32bb0369f30ff9b7e0888035133686e0a2e7",
        "datetime": 1786079669,
        "headlineKo": "SpaceX(SPCX), 궤도 AI 네트워크 및 168억 달러 규모의 칩 공장 계획 공개"
      },
      {
        "headline": "The New Wild West: Texas Experiments With Raw Capitalism",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=150ab5c274f50f32ba7dc1d0b62589d098a4a241ab233f45d9d41f8e6740aed8",
        "datetime": 1786078800,
        "headlineKo": "새로운 서부: 원시 자본주의를 이용한 텍사스 실험"
      },
      {
        "headline": "‘Shark Tank’ Judge Kevin O’Leary Passed On SpaceX IPO, But May Buy Soon: ‘The Bigger Opportunity Is…’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc3152641383d86483619bb675b5044935bba39a50e92232999cc8789a73fa3c",
        "datetime": 1786078570,
        "headlineKo": "'샤크 탱크' 심사위원 케빈 오리어리(Kevin O'Leary)가 SpaceX IPO를 통과했지만 곧 매수할 수도 있습니다: '더 큰 기회는…'"
      },
      {
        "headline": "Alphabet and Tesla: A Single Divergence Tells Us So Much About Current Reality",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=98721180ef16b1b076d6ff39557b71f273fddf371e4f5415691ae9e49f5a44aa",
        "datetime": 1786078217,
        "headlineKo": "알파벳과 테슬라: 단일한 차이가 현재 현실에 대해 많은 것을 말해준다"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:47"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "SNDK Stock Edges Up Overnight: Jefferies Slashes Price Target By Nearly 50% On Memory Growth Concerns",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc027d6db0286d055c67e7a155033434fc1008a7e7b1831c462d30bc062cc6e0",
        "datetime": 1786075028,
        "headlineKo": "SNDK 주가 밤새 상승: Jefferies, 메모리 성장 우려로 가격 목표를 거의 50% 인하"
      },
      {
        "headline": "Micron Shares Surge: What's Driving the Sudden Momentum",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b7a78eddf5b8f216b18445f96f4fde08bb1cfcb56156896488dcfcec9648d4fa",
        "datetime": 1786049400,
        "headlineKo": "마이크론 주가 급등: 갑작스러운 모멘텀을 이끄는 요인"
      },
      {
        "headline": "SK hynix Vs. Micron: The Memory Trade Rotates Into The Valuation Gap",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bf4aa082aa78d5a1347bf71aaed7739d0909b3233c5254cd45d088491f95cdf9",
        "datetime": 1786045243,
        "headlineKo": "SK하이닉스 vs. 마이크론: 메모리 거래가 가치 평가 격차로 전환"
      },
      {
        "headline": "Global memory shortage forces top PC makers like HP and Asus to turn to CXMT chips — but what will Samsung...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=238ae3ac994f28f562d1ce1559188839213716912628228bfc424ed7f20ee4ea",
        "datetime": 1786043100,
        "headlineKo": "글로벌 메모리 부족으로 인해 HP 및 Asus와 같은 최고의 PC 제조업체는 CXMT 칩으로 눈을 돌립니다. 그러나 삼성은 어떻게 될까요?"
      },
      {
        "headline": "Micron & 2 Profitable Stocks Smart Investors Are Buying in August",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f423df5463064de2ce02bf0e73756c0ffc2908df58d39a362f782297735eaaf3",
        "datetime": 1786042800,
        "headlineKo": "Micron & 2 수익성 있는 주식 현명한 투자자들이 8월에 매수하고 있습니다"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:48"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "Is Broadcom the Best Chip Stock to Own Now? Maybe",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c8475d010eeb292a5a164fa8c3070047dec1571403aafb605fc20afb8feacd3",
        "datetime": 1786078621,
        "headlineKo": "Broadcom은 현재 소유할 수 있는 최고의 칩 주식입니까? 아마도"
      },
      {
        "headline": "AMD Is Focused Correctly So I Continue Loading Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=246549b90e34325bf835fcf716def1663a7715061357b11688a8dcb0f5fc5052",
        "datetime": 1786078432,
        "headlineKo": "AMD가 올바르게 초점을 맞춰서 계속 로드 중입니다."
      },
      {
        "headline": "Advanced Micro Devices: Trim Before The Hype Ends",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0d3f74ed752ecd83b64215474104eebd5dd6be3f2feadc7179b3d264611ab8a3",
        "datetime": 1786077635,
        "headlineKo": "고급 마이크로 장치: 과대 광고가 끝나기 전에 다듬기"
      },
      {
        "headline": "Earnings Have Been Excellent. Why Stocks Aren’t Showing It.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5d21850e45b332b8a9f633b2086e774a8eee721923745bc549ddc740937164a",
        "datetime": 1786077000,
        "headlineKo": "수익은 매우 뛰어났습니다. 주식이 표시되지 않는 이유"
      },
      {
        "headline": "Chinese AI Chipmakers Poised to Gain From Beijing’s Tech Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbc3cdd517e145a55084823794d55c15daa7298bef733eb6d4d7bc7bc185ffe0",
        "datetime": 1786073540,
        "headlineKo": "중국 AI 칩 제조업체, 베이징의 기술 추진으로 이익을 얻을 준비가 되어 있음"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:47"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "AMD Is Focused Correctly So I Continue Loading Up",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=246549b90e34325bf835fcf716def1663a7715061357b11688a8dcb0f5fc5052",
        "datetime": 1786078432,
        "headlineKo": "AMD가 올바르게 초점을 맞춰서 계속 로드 중입니다."
      },
      {
        "headline": "How Will Intel Really Be Able to Beat TSMC in The Next Year?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3cdc372d60db42e3a3c29e6056e20208e9b29d104db7709524518ab1af3671a3",
        "datetime": 1786078013,
        "headlineKo": "인텔은 내년에 어떻게 TSMC를 이길 수 있을까요?"
      },
      {
        "headline": "Earn 14% On MRVL Stock Now, Or Own It 60% Cheaper Later",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=394dc06703c81357537a403b57b313c16493c77f9209c06454024d7ea4a83ef3",
        "datetime": 1786067315,
        "headlineKo": "지금 MRVL 재고로 14%를 벌거나 나중에 60% 더 저렴하게 소유하세요"
      },
      {
        "headline": "Wasatch Micro Cap Fund Q2 2026 Contributors And Detractors",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=06fffbad869d23c6cb921639401066357b9fd1d8223ba6396888e1c260040b2f",
        "datetime": 1786065600,
        "headlineKo": "Wasatch Micro Cap Fund 2026년 2분기 기부자와 비방자"
      },
      {
        "headline": "Nvidia dominates AI chips, but BofA sees AMD closing in",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e7682473df258ccd46df4cf66a3a1bf90ec0b1b17556f50669717dda624feb80",
        "datetime": 1786055580,
        "headlineKo": "Nvidia는 AI 칩을 장악하고 있지만 BofA는 AMD가 뒤처지는 것으로 보고 있습니다."
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:48"
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
      {
        "headline": "Applied Optoelectronics (AAOI) Surpasses Q2 Earnings and Revenue Estimates",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f116e453ac67bb0fe18b801719d7d13ccd55c7baadd619e011bfd0b29bb20669",
        "datetime": 1786070101,
        "headlineKo": "AAOI(Applied Optoelectronics)가 2분기 수익 및 수익 추정치를 능가했습니다."
      },
      {
        "headline": "CoreWeave Stock, Nebius Highlight Data Center Earnings; Tech Stars Lumentum, AMAT Also Due",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8e8a3c859e79db78eb8423fff3ff730e87bf99b3ae0097dc7f4c7f3b7e1462a3",
        "datetime": 1786058909,
        "headlineKo": "CoreWeave Stock, Nebius 하이라이트 데이터 센터 수익; Tech Stars Lumentum, AMAT도 예정됨"
      },
      {
        "headline": "Applied Materials (AMAT) As Burry Targets AI Chip Names Is It Still Undervalued",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8776edddf63b1023be1516fa9c72c8e93177a0c4495c70049d269aa7ad9b221f",
        "datetime": 1786040510,
        "headlineKo": "Burry가 AI 칩 이름을 목표로 하는 Applied Materials(AMAT)는 여전히 저평가되어 있습니까?"
      },
      {
        "headline": "Dynatrace Q1 Earnings Beat on ARR Growth and Strong New-Logo Wins",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b682773f9b52a4057ad519a59b8993449c6aa0032cf9fe3fa76827d66685db0c",
        "datetime": 1786038540,
        "headlineKo": "Dynatrace 1분기 수익은 ARR 성장과 강력한 새 로고 승리로 앞섰습니다."
      },
      {
        "headline": "Tesla's $16.8 Billion Chip Bet Could Create Several New Winners",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ca7dc87bb8bc44716c311d35ee4c3382eb09e258e25f522ba4af21ce3c2bd37",
        "datetime": 1786037559,
        "headlineKo": "Tesla의 168억 달러 칩 베팅으로 여러 새로운 승자가 탄생할 수 있음"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:48"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Credit Says The Capital Goods Recession Story Doesn't Hold Up",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1f73534cf7e3e40d71b94d7296363b4b05826a2d9014c0ad6219c7b224551b1",
        "datetime": 1786062000,
        "headlineKo": "신용은 자본재 경기 침체 이야기가 지속되지 않는다고 말합니다"
      },
      {
        "headline": "The Hormuz Illusion: Wall Street Is Buying Fake Peace",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=04b6631429eb148ee8a5df14515afcc77f2824e7e5ec6f19f5ebd3541d624782",
        "datetime": 1786035600,
        "headlineKo": "호르무즈의 환상: 월스트리트가 가짜 평화를 사고 있다"
      },
      {
        "headline": "Stop Calling It A Bubble",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=65ae62070ff8720d61850f89035d5a2fb8825f0b4a968e62621e093feb56edfd",
        "datetime": 1786031840,
        "headlineKo": "거품이라고 부르지 마세요"
      },
      {
        "headline": "AAII Sentiment Survey: Optimism Jumps",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c96b01988f81e4fffecba9d0ef30a8031fb28e8b8da66cc22bf6a56a730751fb",
        "datetime": 1786027970,
        "headlineKo": "AAII 감정 설문조사: 낙관주의 점프"
      },
      {
        "headline": "QYLD: Multiple Clues Point To QQQ Covered Call ETF Outperformance",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9205063701c6a0493583a104267960db77716e05eaf37a34bb6adccbbd18b5b8",
        "datetime": 1786024849,
        "headlineKo": "QYLD: QQQ 커버드 콜 ETF 성과에 대한 여러 단서"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:46"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Chasing 17.24% Yield? XDTE Holders Are Getting Their Own Money Back—and Paying for It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4c52be3b073435349feea41ce7fbad0157d16ef2e6aeeefccae97dc24c6420b4",
        "datetime": 1786074331,
        "headlineKo": "17.24% 수익률을 노린다? XDTE 보유자는 자신의 돈을 돌려받고 이에 대한 비용을 지불하고 있습니다."
      },
      {
        "headline": "Why S&P 500, Dow Futures Are Slipping Overnight After Wall Street’s Second Straight Day In The Red",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fe79ac2984f67855248208193ee97a3b4cfb5e3ac846ca4bbe421a7c4451044b",
        "datetime": 1786067525,
        "headlineKo": "월스트리트가 이틀 연속 적자를 기록한 후 S&P 500과 다우 선물이 밤새 하락한 이유"
      },
      {
        "headline": "A Market Drop at 67 Does Twice the Damage of One at 57. Here’s the Math, and the Buffer That Blunts It.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=29f0381da12d53b7a4b87803e0c213d563ea45448e5d4d6684c9acfc7351f2ec",
        "datetime": 1786063913,
        "headlineKo": "67에서 시장 하락은 57에서 두 배의 피해를 줍니다. 여기에 수학과 이를 둔화시키는 버퍼가 있습니다."
      },
      {
        "headline": "Credit Says The Capital Goods Recession Story Doesn't Hold Up",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1f73534cf7e3e40d71b94d7296363b4b05826a2d9014c0ad6219c7b224551b1",
        "datetime": 1786062000,
        "headlineKo": "신용은 자본재 경기 침체 이야기가 지속되지 않는다고 말합니다"
      },
      {
        "headline": "S&P 500, Dow, Nasdaq End Lower Amid Hormuz Uncertainty As Investors Await Jobs Data To Judge Fed Rate Course — SOUN, GOOGL, SPCX, NVDA In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51972e89f837da50d6b9d834fcb567a9de412b836b839200b393bd74f5d571f3",
        "datetime": 1786050279,
        "headlineKo": "S&P 500, Dow, Nasdaq은 투자자들이 연준 금리 과정을 판단하기 위해 고용 데이터를 기다리고 있기 때문에 Hormuz 불확실성 속에서 하락세를 종료합니다 — SOUN, GOOGL, SPCX, NVDA In Focus"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:46"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Michael Burry Shares 'Three Great Charts' That Show Big AI Capex Could Unwind As Badly As Housing Did In 2008",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ace76c22af42fc5516268dd0f9a0a2bfce4c87a2ca22404fd54b8594cd824027",
        "datetime": 1786081682,
        "headlineKo": "Michael Burry는 대규모 AI Capex가 2008년 주택 시장만큼 악화될 수 있음을 보여주는 '3가지 훌륭한 차트'를 공유합니다."
      },
      {
        "headline": "The New Wild West: Texas Experiments With Raw Capitalism",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=150ab5c274f50f32ba7dc1d0b62589d098a4a241ab233f45d9d41f8e6740aed8",
        "datetime": 1786078800,
        "headlineKo": "새로운 서부: 원시 자본주의를 이용한 텍사스 실험"
      },
      {
        "headline": "Michael Burry Re-Enters ORCL Puts And Shorts NBIS — Adds To Select Long Holdings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6cff919a0f9ad7ffa536f3a6ae95eabf123de3c02f1f4fa9b569df81bd5e15d3",
        "datetime": 1786053175,
        "headlineKo": "Michael Burry, ORCL 풋 및 NBIS 매도 재진입 — 일부 장기 보유에 추가"
      },
      {
        "headline": "S&P 500, Dow, Nasdaq End Lower Amid Hormuz Uncertainty As Investors Await Jobs Data To Judge Fed Rate Course — SOUN, GOOGL, SPCX, NVDA In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51972e89f837da50d6b9d834fcb567a9de412b836b839200b393bd74f5d571f3",
        "datetime": 1786050279,
        "headlineKo": "S&P 500, Dow, Nasdaq은 투자자들이 연준 금리 과정을 판단하기 위해 고용 데이터를 기다리고 있기 때문에 Hormuz 불확실성 속에서 하락세를 종료합니다 — SOUN, GOOGL, SPCX, NVDA In Focus"
      },
      {
        "headline": "Alphabet's $25B debt sale underscores hyperscalers' AI arms race",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=57603d1a020e2b3568d6c0b3107417d3444e02235d9135af613c004098080a3d",
        "datetime": 1786043880,
        "headlineKo": "Alphabet의 250억 달러 부채 매각으로 하이퍼스케일러의 AI 군비 경쟁 강조"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:47"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "Wasatch Micro Cap Fund Q2 2026 Contributors And Detractors",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=06fffbad869d23c6cb921639401066357b9fd1d8223ba6396888e1c260040b2f",
        "datetime": 1786065600,
        "headlineKo": "Wasatch Micro Cap Fund 2026년 2분기 기부자와 비방자"
      },
      {
        "headline": "Salesforce plans fourth round of San Francisco layoffs in under a year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3976aea47de4846677a93d56256fa005c15ada6a775ea6cb4eedb079dcf94f7e",
        "datetime": 1786058310,
        "headlineKo": "세일즈포스, 1년 안에 샌프란시스코 4차 정리해고 계획"
      },
      {
        "headline": "Zeta Global Appoints Leah Pope as Chief Marketing Officer to Lead Next Phase of Growth",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a5c6c235f72b7e15d6d02615237d57a224bff132126e6c4f708d54c347e750d",
        "datetime": 1786046700,
        "headlineKo": "Zeta Global, 다음 성장 단계를 이끌 최고 마케팅 책임자(CMO)로 Leah Pope 임명"
      },
      {
        "headline": "Which dow jones stocks are moving on Thursday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=8a79d5859cbdfc9e73a0e1db0c3fbeb34f04abfddc35eda0009b708cdabbb329",
        "datetime": 1786043404,
        "headlineKo": "목요일에 어느 다우존스 주식이 움직이나요?"
      },
      {
        "headline": "What Microsoft Stock's Thin Earnings Premium Is Actually Buying",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=051e1810bc53937f396e29f6b8f45d646c87f577e447bd9753a4c648b23042d2",
        "datetime": 1786041396,
        "headlineKo": "Microsoft Stock의 Thin Earnings Premium이 실제로 구매하는 것"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:47"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Cathie Wood sells $17 million of popular AI stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ede36a9dd8497b23f87192486443f0addfa8a24e222f82e81a4609c479ed5dc6",
        "datetime": 1786075598,
        "headlineKo": "Cathie Wood, 인기 있는 AI 주식 1,700만 달러 매각"
      },
      {
        "headline": "Innodata Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=82ad20a023480b9ef6e3f07b278676653d32730c71f9b87dba842daa68229570",
        "datetime": 1786071834,
        "headlineKo": "Innodata 2분기 실적발표 하이라이트"
      },
      {
        "headline": "USA Today Co Inc (TDAY) (Q2 2026) Earnings Call Highlights: AI Partnerships and Record ARPU ...",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=25bd16d14adf26c8b54c7e169e8a7ed88f11b07a89db45c688457788c33dcbb7",
        "datetime": 1786058168,
        "headlineKo": "USA Today Co Inc(TDAY)(2026년 2분기) 실적 발표 하이라이트: AI 파트너십 및 기록적인 ARPU..."
      },
      {
        "headline": "Cathie Wood Dumps $11.4 Million in Palantir Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77ed9010f1c3e7bc594c923a4e12e3e63a1caf0ecdfca5155d0e0e3d44e50e46",
        "datetime": 1786050252,
        "headlineKo": "Cathie Wood, Palantir 주식 1,140만 달러 매각"
      },
      {
        "headline": "Peter Thiel Still Owns Roughly 3% of Palantir, a Stake Worth More Than $10 Billion. Here's Why His Continued Conviction Matters for Shareholders.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5a292e32d262018945ef912ed59dcb423cdeeaea37fbfc613fe18b696b944c5c",
        "datetime": 1786044300,
        "headlineKo": "Peter Thiel은 여전히 ​​100억 달러 이상의 가치가 있는 Palantir 지분의 약 3%를 소유하고 있습니다. 그의 지속적인 신념이 주주들에게 중요한 이유는 다음과 같습니다."
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:47"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
      {
        "headline": "Earn 14% On MRVL Stock Now, Or Own It 60% Cheaper Later",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=394dc06703c81357537a403b57b313c16493c77f9209c06454024d7ea4a83ef3",
        "datetime": 1786067315,
        "headlineKo": "지금 MRVL 재고로 14%를 벌거나 나중에 60% 더 저렴하게 소유하세요"
      },
      {
        "headline": "Qualcomm (QCOM) Stock Fair Value Moves Lower As Margin Pressure Offsets AI Ambitions",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=90d1449518779e2fda33411f6ab14224123a1029b341e9165e110dfcdc577aaa",
        "datetime": 1786058253,
        "headlineKo": "마진 압박이 AI 야망을 상쇄함에 따라 Qualcomm(QCOM) 주식 공정 가치가 하락함"
      },
      {
        "headline": "What You Actually Pay To Join The SITM Run",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=903cb1763b35f27e64f612826edc3bfb32d88f2b4dfc69b9f7ef40210f9bb2fa",
        "datetime": 1786048500,
        "headlineKo": "SITM 달리기에 참여하기 위해 실제로 지불하는 금액"
      },
      {
        "headline": "ParkerVision Reports Second Quarter 2026 Results",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9f38cc21963e75e41f142c97c60ed873ec97437179325fd49e80d6126a14ab7b",
        "datetime": 1786046460,
        "headlineKo": "ParkerVision, 2026년 2분기 결과 보고"
      },
      {
        "headline": "Qualcomm's Largest Revenue Line Is Shrinking From Both Sides",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=113bc253061b300b6a146d437901d1bccf2f3d18de44dfad26a3f36a0df71d92",
        "datetime": 1786039775,
        "headlineKo": "Qualcomm의 최대 수익 라인이 양쪽에서 줄어들고 있습니다"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:47"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
      {
        "headline": "Update: US Equity Indexes Mixed as Technology, Energy Help Blunt Broad-Based Declines",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4cbc8d8134c5ed6267f43a22f0860d4b2a4c53364f1de6b5996e6e82a3684d61",
        "datetime": 1786046130,
        "headlineKo": "업데이트: 기술과 에너지가 혼합된 미국 주가 지수는 광범위한 하락을 둔화하는 데 도움이 됩니다"
      },
      {
        "headline": "Prediction: Arm Holdings Will Trade at This Price in 12 Months",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5561ed697df26620a73dca46629257c40a6e709bebb95bb7738bef66f19a0f6f",
        "datetime": 1786039253,
        "headlineKo": "예측: Arm Holdings는 12개월 안에 이 가격으로 거래될 것입니다"
      },
      {
        "headline": "Update: US Equity Indexes Mixed as Chipmakers Help Lift Technology While Crude Oil Jumps With Treasury Yields",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d9f0c6771fbda99ff2c6d7f382269915cc5467eb55111ea0f97b8b10b01e42b",
        "datetime": 1786039055,
        "headlineKo": "업데이트: 미국 주식 지수는 칩 제조업체가 기술 상승을 도우면서 원유가 국채 수익률로 급등하면서 혼합되었습니다."
      },
      {
        "headline": "US Equity Indexes Decline, Crude Oil Rises in Midday Trading",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2d0c44464e7ec6d6895a556197ef509d3ff004ea809d80739bd0f0595d3f3807",
        "datetime": 1786034901,
        "headlineKo": "미국 주식 지수 하락, 정오 거래에서 원유 상승"
      },
      {
        "headline": "Sandisk's Weak Guidance Sends AI Chip Stocks Tumbling",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ed00c9410f677a9077b4887868eeab818f10b392c2960226eda30dcefa5c8936",
        "datetime": 1786032798,
        "headlineKo": "Sandisk의 약한 지침으로 인해 AI 칩 주식이 폭락했습니다."
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:47"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "Insight Enterprises Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fae7c16eef46e7c2e0345e01c13c0090e1b7b02f133e7110adc1180f5b665292",
        "datetime": 1786082648,
        "headlineKo": "Insight Enterprises 2분기 실적 통화 하이라이트"
      },
      {
        "headline": "Earn 14% On MRVL Stock Now, Or Own It 60% Cheaper Later",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=394dc06703c81357537a403b57b313c16493c77f9209c06454024d7ea4a83ef3",
        "datetime": 1786067315,
        "headlineKo": "지금 MRVL 재고로 14%를 벌거나 나중에 60% 더 저렴하게 소유하세요"
      },
      {
        "headline": "Astera Labs Beat And Guided Higher, Then Fell Because The Rally Came First",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1cb53c386d0f0cb5fd2e3b376dcfdcf737bb1eb3a8e7715147ec2fa7d169982d",
        "datetime": 1786042304,
        "headlineKo": "Astera Labs는 이기고 더 높은 곳으로 인도한 다음 랠리가 먼저 왔기 때문에 떨어졌습니다."
      },
      {
        "headline": "AMD's Record Quarter Landed With A Margin Guide That Did Not Move",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c91c9317a09d7c5502d61402cbe273b3cbc77f04ee263896e50bedf0f61903d",
        "datetime": 1786038859,
        "headlineKo": "AMD의 기록적인 분기는 움직이지 않은 마진 가이드와 함께 착륙했습니다."
      },
      {
        "headline": "Should Investors Hold on to Astera Labs Stock Post Q2 Earnings?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1ad0aa2494e81855104d9b404da1185e13bef34be006fed280a0d112bb3255d3",
        "datetime": 1786038660,
        "headlineKo": "투자자들은 2분기 실적 이후 Astera Labs 주식을 보유해야 합니까?"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:47"
  },
  "ASML": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.1558
    },
    "news": [
      {
        "headline": "Chinese AI Chipmakers Poised to Gain From Beijing’s Tech Push",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cbc3cdd517e145a55084823794d55c15daa7298bef733eb6d4d7bc7bc185ffe0",
        "datetime": 1786073540,
        "headlineKo": "중국 AI 칩 제조업체, 베이징의 기술 추진으로 이익을 얻을 준비가 되어 있음"
      },
      {
        "headline": "PancakeSwap Expands Tokenized Equity Offerings with 10 New 'bStocks' on BNB Chain",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=92ef598f1f84b5c487d1279b09d191167e24a1d49d1d288ff760ba12d8116708",
        "datetime": 1786039920,
        "headlineKo": "PancakeSwap, BNB 체인의 10개의 새로운 'bStocks'로 토큰화된 주식 제공 확대"
      },
      {
        "headline": "Stock Market Today: Dow Slides 400 Points But Chip Firm Surges; Biotech IPO Craters 39% (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=44e4f9d493c5328bad91b339a22343fc93bd261098b2dd6a6940357336fd559a",
        "datetime": 1786038640,
        "headlineKo": "오늘의 주식 시장: 다우지수는 400포인트 하락했지만 칩 회사는 급등했습니다. 생명공학 IPO 크레이터 39% (실시간 보도)"
      },
      {
        "headline": "Tesla's $16.8 Billion Chip Bet Could Create Several New Winners",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0ca7dc87bb8bc44716c311d35ee4c3382eb09e258e25f522ba4af21ce3c2bd37",
        "datetime": 1786037559,
        "headlineKo": "Tesla의 168억 달러 칩 베팅으로 여러 새로운 승자가 탄생할 수 있음"
      },
      {
        "headline": "Nuclear Utility Constellation Leads Nasdaq 100 After Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=77587da899f06222b87dc311a6e86de7f0e1290e1ab95b89c5bfa143d66bbb04",
        "datetime": 1786022852,
        "headlineKo": "원자력 유틸리티 별자리가 실적 이후 나스닥 100을 선도합니다."
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:48"
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
        "datetime": 1786037559,
        "headlineKo": "Tesla의 168억 달러 칩 베팅으로 여러 새로운 승자가 탄생할 수 있음"
      },
      {
        "headline": "Accenture vs. Lam Research: A Comparison of Revenue Growth and Stability",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e1e46d9d50230faa6075c393e12a176dddd09fed88fbf022f6ca3bdbc80ff4cd",
        "datetime": 1786022101,
        "headlineKo": "Accenture와 Lam Research: 수익 성장과 안정성 비교"
      },
      {
        "headline": "Zacks.com featured highlights Lam, The Cheesecake, Vertiv and Fortinet",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e3c6f021cf8ba0872df328ddd347bb25c2f741eacfdac2092678b536e4768817",
        "datetime": 1786011660,
        "headlineKo": "Zacks.com에서는 Lam, The Cheesecake, Vertiv 및 Fortinet의 하이라이트를 소개했습니다."
      },
      {
        "headline": "One Massive AI Hardware Truth Keeps Me Loading Up On AMAT Ahead of Aug. 13 Earnings Print",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=167a5b632dab635bef577ac0cae6c15c37dee0862fc2c024b6bcd336ee784865",
        "datetime": 1785989990,
        "headlineKo": "하나의 대규모 AI 하드웨어 진실로 인해 8월 13일 수익 인쇄를 앞두고 AMAT에 계속 집중하고 있습니다."
      },
      {
        "headline": "Applied Materials Fell 11% Last Month: A Prominent Wall Street Pro Predicts 70% Gains Moving Forward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8cb743d60fe325d1d813f43900c2ff420bcb162814ce32bdb1f7547cb6e58bc",
        "datetime": 1785988040,
        "headlineKo": "Applied Materials는 지난 달 11% 하락했습니다: 저명한 월스트리트 전문가는 앞으로 70%의 이익을 예측합니다"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:48"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "KLA Declares Regular Cash Dividend",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5e2ee90096ade5f792c94ad6da74013904fcd710b550a5426efece48adecbe04",
        "datetime": 1786046700,
        "headlineKo": "KLA, 정기현금배당 선언"
      },
      {
        "headline": "Allspring Growth Fund Q2 2026 Performance Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d3e790a365a65c1c6541e7aa0e79d403abf50c95684d2d8ec8a93eb29368f15d",
        "datetime": 1786004100,
        "headlineKo": "올스프링 성장펀드 2026년 2분기 실적 업데이트"
      },
      {
        "headline": "Bigger Earnings, Bigger Drop: The Sandisk Selloff Explained",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=3e282c671c5d67d4dbc140fa1c654e783004efcf823306037a69f9fc93cbed6f",
        "datetime": 1785997036,
        "headlineKo": "더 큰 수익, 더 큰 하락: Sandisk 매도 설명"
      },
      {
        "headline": "TCW Concentrated Large Cap Growth Fund Q2 2026 Portfolio Update",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=a4be55e268c5a2f7a9605bc2cc25490523542cfe4ce6f261641d0211a5aa0a3c",
        "datetime": 1785988800,
        "headlineKo": "TCW 집중형 대형주 성장 펀드 2026년 2분기 포트폴리오 업데이트"
      },
      {
        "headline": "Applied Materials Fell 11% Last Month: A Prominent Wall Street Pro Predicts 70% Gains Moving Forward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8cb743d60fe325d1d813f43900c2ff420bcb162814ce32bdb1f7547cb6e58bc",
        "datetime": 1785988040,
        "headlineKo": "Applied Materials는 지난 달 11% 하락했습니다: 저명한 월스트리트 전문가는 앞으로 70%의 이익을 예측합니다"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:48"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "Oil Price Spoils the Party on Wall Street, Memory Chips Take a Hard Hit",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c42e3831622718b4f9a1ba0e6c62cc5085b39b425b74d855b0adf96ae23b213e",
        "datetime": 1786088776,
        "headlineKo": "유가가 월스트리트의 파티를 망치고 메모리 칩이 큰 타격을 입습니다."
      },
      {
        "headline": "SNDK Stock Edges Up Overnight: Jefferies Slashes Price Target By Nearly 50% On Memory Growth Concerns",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc027d6db0286d055c67e7a155033434fc1008a7e7b1831c462d30bc062cc6e0",
        "datetime": 1786075028,
        "headlineKo": "SNDK 주가 밤새 상승: Jefferies, 메모리 성장 우려로 가격 목표를 거의 50% 인하"
      },
      {
        "headline": "Where Will Sandisk Stock Be in 5 Years?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c42e23e8ba911ca63ecce26e196aea617344787fb48f180a6d81ef8b78089c8f",
        "datetime": 1786069200,
        "headlineKo": "5년 후 Sandisk 주식은 어디에 있을까요?"
      },
      {
        "headline": "Stock Market Today, Aug. 6: Datadog Plummets 19%, Leading Software Stock Slide",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=64cfce62a805cf7318f58ec85a35eae83f635b3d26e2647314ca2c5a9c552418",
        "datetime": 1786053876,
        "headlineKo": "오늘, 8월 6일 주식 시장: Datadog 주가 19% 급락, 주요 소프트웨어 주식 슬라이드"
      },
      {
        "headline": "Sandisk Stock Falls as $14 Billion Buyback Fails to Impress",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1d5c7609f7c064a65dc2e19a545f2c357baeadd48f7ed3d013bd8565c82dccf6",
        "datetime": 1786050214,
        "headlineKo": "140억 달러 규모의 자사주 매입이 성과를 거두지 못하면서 Sandisk 주가 하락"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:48"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
      {
        "headline": "Oil Price Spoils the Party on Wall Street, Memory Chips Take a Hard Hit",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=c42e3831622718b4f9a1ba0e6c62cc5085b39b425b74d855b0adf96ae23b213e",
        "datetime": 1786088776,
        "headlineKo": "유가가 월스트리트의 파티를 망치고 메모리 칩이 큰 타격을 입습니다."
      },
      {
        "headline": "Earnings Have Been Excellent. Why Stocks Aren’t Showing It.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c5d21850e45b332b8a9f633b2086e774a8eee721923745bc549ddc740937164a",
        "datetime": 1786077000,
        "headlineKo": "수익은 매우 뛰어났습니다. 주식이 표시되지 않는 이유"
      },
      {
        "headline": "SNDK Stock Edges Up Overnight: Jefferies Slashes Price Target By Nearly 50% On Memory Growth Concerns",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=cc027d6db0286d055c67e7a155033434fc1008a7e7b1831c462d30bc062cc6e0",
        "datetime": 1786075028,
        "headlineKo": "SNDK 주가 밤새 상승: Jefferies, 메모리 성장 우려로 가격 목표를 거의 50% 인하"
      },
      {
        "headline": "Stock Market Today, Aug. 6: Datadog Plummets 19%, Leading Software Stock Slide",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=64cfce62a805cf7318f58ec85a35eae83f635b3d26e2647314ca2c5a9c552418",
        "datetime": 1786053876,
        "headlineKo": "오늘, 8월 6일 주식 시장: Datadog 주가 19% 급락, 주요 소프트웨어 주식 슬라이드"
      },
      {
        "headline": "Western Digital Stock Drops 11% Despite 44% Revenue Surge",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=58f3cc4e1d14c56622eb124e3b35437341b359aba1ee3bfeea6a67ca9da8b4d6",
        "datetime": 1786050850,
        "headlineKo": "Western Digital 주가는 44%의 수익 급증에도 불구하고 11% 하락"
      }
    ],
    "_fetched_at": 1786095980.0905476,
    "_updated_label": "2026-08-07 18:48"
  }
};
