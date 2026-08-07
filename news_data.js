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
        "headline": "Stock Market Today: Dow Down After Surprise July Jobs Reading; AI Stock Cloudflare Soars (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de8a0c6e7528c605679f714dfb5ae73fd5df6ceddfe17c24db932549b8437233",
        "datetime": 1786110924,
        "headlineKo": "오늘의 주식시장: 7월 채용정보 발표 이후 다우지수 하락; AI 주식 Cloudflare 급등(실시간 보도)"
      },
      {
        "headline": "Prediction: After a Blowout Quarter, Shopify Will End The Year at This Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e41d834879a0544c3539a2f87449a513cd03b7b28384759988db045686169e0",
        "datetime": 1786109447,
        "headlineKo": "예측: 폭발적인 분기 이후 Shopify는 이 가격으로 올해를 마감할 것입니다."
      },
      {
        "headline": "Not Micron, Not Nvidia. This Artificial Intelligence (AI) Giant Could Be the Ultimate Winner of the AI Arms Race.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc0a385eddec39e6454a77f77ef1a753d42a583e89598823d20e8e2c09297652",
        "datetime": 1786108800,
        "headlineKo": "마이크론도 아니고 엔비디아도 아닙니다. 이 인공 지능(AI) 거인은 AI 군비 경쟁의 최종 승자가 될 수 있습니다."
      },
      {
        "headline": "AMD Buys AI Chip Startup Taalas—Here's Why It Matters To NVDA Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8cd12a80a0cfbab131f06af9535aa84f77246034875dec8c288a597e06147e7",
        "datetime": 1786108600,
        "headlineKo": "AMD, AI 칩 스타트업 Taalas 인수 - NVDA 투자자에게 중요한 이유는 다음과 같습니다."
      },
      {
        "headline": "Data Center Solutions Market to Reach US$1.33 Trillion by 2031 as AI and Hyperscale Investments Accelerate - Dell Technologies, Broadcom, NVIDIA, HPE, and Super Micro Computer Dominate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8af7de367e1a4816a5a35d07546be5919128f3370d18e10e49b00a509916d64e",
        "datetime": 1786108560,
        "headlineKo": "AI 및 대규모 투자가 가속화되면서 데이터 센터 솔루션 시장은 2031년까지 1조 3300억 달러에 달할 것입니다 - Dell Technologies, Broadcom, NVIDIA, HPE 및 Super Micro Computer가 지배하고 있습니다."
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
      {
        "headline": "Sandisk Won't Be This Cheap For Long (Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=6f52203921f0f14b7d76a1bc4244d5c8d4d1bdb6b084c1114a7377fa6fcf3bf6",
        "datetime": 1786102741,
        "headlineKo": "Sandisk는 오랫동안 이렇게 저렴하지 않을 것입니다(업그레이드)"
      },
      {
        "headline": "Apple Among Three Stocks In Voracious Demand. Funds Also Feast On 14 Others.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8e51a5c7911f0b7cd49abb0231cf9012f76b82106740c8dedaee2ce40668f6f",
        "datetime": 1786100405,
        "headlineKo": "수요가 많은 3개 주식 중 애플. 자금은 또한 14개 다른 곳에서도 잔치를 벌입니다."
      },
      {
        "headline": "Big Tech Stocks Storm Back as AI Fears Fade and Euphoria Resumes",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b7221e0dd94f8062dba63201381fd4dc40e13af17bccf05ee5bf0aeea06f32f",
        "datetime": 1786098601,
        "headlineKo": "AI에 대한 두려움이 사라지고 행복감이 재개됨에 따라 빅 테크 주식이 다시 급등했습니다."
      },
      {
        "headline": "'The market has voted': Michael Burry says Big Tech's AI spending is dragging down the S&P 500 — while Apple wins",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8eb8a62e12195280ea4cef40ea52f004dca55aba5796b83d3e02e07d23c9767d",
        "datetime": 1786097400,
        "headlineKo": "'시장은 투표했다': Michael Burry는 Big Tech의 AI 지출이 S&P 500을 끌어내리고 있다고 말합니다. 반면 Apple은 승리합니다."
      },
      {
        "headline": "The Zacks Analyst Blog Highlights Apple, Shell, Toyota, Seneca and Value Line",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4d4981142610fa906614818315ffeb4f343e8e8f8c51772a6ad46a686361135b",
        "datetime": 1786096380,
        "headlineKo": "Zacks 분석가 블로그는 Apple, Shell, Toyota, Seneca 및 Value Line을 강조합니다."
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:00"
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
      {
        "headline": "Not Micron, Not Nvidia. This Artificial Intelligence (AI) Giant Could Be the Ultimate Winner of the AI Arms Race.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc0a385eddec39e6454a77f77ef1a753d42a583e89598823d20e8e2c09297652",
        "datetime": 1786108800,
        "headlineKo": "마이크론도 아니고 엔비디아도 아닙니다. 이 인공 지능(AI) 거인은 AI 군비 경쟁의 최종 승자가 될 수 있습니다."
      },
      {
        "headline": "Cloud AI Update - Fortude Revolutionizes ERP with AI-Driven Delivery Model",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a94d36d20efed6f057e959b2548b02b0c6f181b7c8572cb703625795715ab22",
        "datetime": 1786106436,
        "headlineKo": "클라우드 AI 업데이트 - Fortude, AI 기반 제공 모델로 ERP 혁신"
      },
      {
        "headline": "Just How Wide Is the Risk Priced Into Adobe Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6db8a164cc7fdc44fc8087fa2990e971edf8365914efdd10c32b490e6f1ac2b",
        "datetime": 1786105343,
        "headlineKo": "Adobe Stock에 위험 가격이 얼마나 적용됩니까?"
      },
      {
        "headline": "Bad AI Vs. Good AI: Why Cybersecurity Became A Crucial Tech Battlefield",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f20092961ed1f4bca4df14606100558016cfa1e6010cae0c0cfdd379a815a6d0",
        "datetime": 1786104078,
        "headlineKo": "나쁜 AI 대. 좋은 AI: 사이버 보안이 중요한 기술 전장이 된 이유"
      },
      {
        "headline": "Big Tech Stocks Storm Back as AI Fears Fade and Euphoria Resumes",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b7221e0dd94f8062dba63201381fd4dc40e13af17bccf05ee5bf0aeea06f32f",
        "datetime": 1786098601,
        "headlineKo": "AI에 대한 두려움이 사라지고 행복감이 재개됨에 따라 빅 테크 주식이 다시 급등했습니다."
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:00"
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
      {
        "headline": "Cloud AI Update - Fortude Revolutionizes ERP with AI-Driven Delivery Model",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0a94d36d20efed6f057e959b2548b02b0c6f181b7c8572cb703625795715ab22",
        "datetime": 1786106436,
        "headlineKo": "클라우드 AI 업데이트 - Fortude, AI 기반 제공 모델로 ERP 혁신"
      },
      {
        "headline": "Just How Wide Is the Risk Priced Into Adobe Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6db8a164cc7fdc44fc8087fa2990e971edf8365914efdd10c32b490e6f1ac2b",
        "datetime": 1786105343,
        "headlineKo": "Adobe Stock에 위험 가격이 얼마나 적용됩니까?"
      },
      {
        "headline": "Microsoft opens fourth Azure data center region in India",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c9d59c1bf36ddaf617217540c7d77ad3df68b1ec344f3ba53ac71064b0669913",
        "datetime": 1786101133,
        "headlineKo": "Microsoft, 인도에 네 번째 Azure 데이터 센터 지역 ​​개설"
      },
      {
        "headline": "Big Tech Stocks Storm Back as AI Fears Fade and Euphoria Resumes",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b7221e0dd94f8062dba63201381fd4dc40e13af17bccf05ee5bf0aeea06f32f",
        "datetime": 1786098601,
        "headlineKo": "AI에 대한 두려움이 사라지고 행복감이 재개됨에 따라 빅 테크 주식이 다시 급등했습니다."
      },
      {
        "headline": "Why Is Rackspace Technology (RXT) Hiring A New AI Infrastructure Leader?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=60d2ca734f97d0e3234a6ea951287eb502d6910afe6b975f24b46decf1719d47",
        "datetime": 1786097642,
        "headlineKo": "Rackspace Technology(RXT)가 새로운 AI 인프라 리더를 고용하는 이유는 무엇입니까?"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:00"
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
      {
        "headline": "Stock Market Today: Dow Down After Surprise July Jobs Reading; AI Stock Cloudflare Soars (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de8a0c6e7528c605679f714dfb5ae73fd5df6ceddfe17c24db932549b8437233",
        "datetime": 1786110924,
        "headlineKo": "오늘의 주식시장: 7월 채용정보 발표 이후 다우지수 하락; AI 주식 Cloudflare 급등(실시간 보도)"
      },
      {
        "headline": "Market Chatter: Amazon's AWS Engineers Face Longer Waits for CPU Servers Amid Capacity Tightening",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4929b051a5fc77de30dee4a55524465dacec0c18fe2e853ceb51a299bfe6bf22",
        "datetime": 1786110263,
        "headlineKo": "시장의 대화: Amazon의 AWS 엔지니어들은 용량 부족으로 인해 CPU 서버에 대한 대기 시간이 길어졌습니다"
      },
      {
        "headline": "Prediction: After a Blowout Quarter, Shopify Will End The Year at This Price",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e41d834879a0544c3539a2f87449a513cd03b7b28384759988db045686169e0",
        "datetime": 1786109447,
        "headlineKo": "예측: 폭발적인 분기 이후 Shopify는 이 가격으로 올해를 마감할 것입니다."
      },
      {
        "headline": "Amazon CEO Andy Jassy Just Made a Shocking Trillion-Dollar Prediction",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2f997011994a30ca69a2f8f4716b927c5b379be401f28dff110f3f168d2b6099",
        "datetime": 1786100700,
        "headlineKo": "Amazon CEO Andy Jassy는 방금 충격적인 수조 달러 예측을 내놓았습니다."
      },
      {
        "headline": "Cloudflare shares jump after forecast raise on AI-driven demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0c120d2af266f336db626816675dcc8f6df59b6ad0ebad6a92485b7085786a26",
        "datetime": 1786100091,
        "headlineKo": "AI 기반 수요 증가 예측으로 Cloudflare 주가 급등"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:00"
  },
  "TSM": {
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.8828
    },
    "news": [
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
      },
      {
        "headline": "AMD: Buy The Dip - Market Is Mispricing Its Supply Leverage",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b6c0e20f791a8fefc10daa30a579f9ab3f7bd0a51b036b3374ac42872bcb74a4",
        "datetime": 1786094146,
        "headlineKo": "AMD: 딥 매수 - 시장이 공급 레버리지 가격을 잘못 책정하고 있습니다"
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
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
      {
        "headline": "Data Center Solutions Market to Reach US$1.33 Trillion by 2031 as AI and Hyperscale Investments Accelerate - Dell Technologies, Broadcom, NVIDIA, HPE, and Super Micro Computer Dominate",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8af7de367e1a4816a5a35d07546be5919128f3370d18e10e49b00a509916d64e",
        "datetime": 1786108560,
        "headlineKo": "AI 및 대규모 투자가 가속화되면서 데이터 센터 솔루션 시장은 2031년까지 1조 3300억 달러에 달할 것입니다 - Dell Technologies, Broadcom, NVIDIA, HPE 및 Super Micro Computer가 지배하고 있습니다."
      },
      {
        "headline": "5 Safest Dividend ETFs Retirees Can Buy in August and Hold Forever",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5fe19559f9d1e45e21cebe1df56fd30905886d747344df8b2034c80c3a89ec51",
        "datetime": 1786107650,
        "headlineKo": "퇴직자가 8월에 매수하고 영원히 보유할 수 있는 가장 안전한 5가지 배당금 ETF"
      },
      {
        "headline": "AI Chips Update - AMD Advances AI Strategy With Taalas Acquisition",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=14470c7fe676a501eb55e25a464e454ea42ad2fcf7ed94d61e2717b1eb0b071b",
        "datetime": 1786102763,
        "headlineKo": "AI 칩 업데이트 - AMD, Taalas 인수로 AI 전략 발전"
      },
      {
        "headline": "Sandisk: Memory Has Structurally Changed, The Sector Cannot Remain At 5x P/E",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=5b1d6bcf45aacdf9260b5b13f1e7e96f3963b7e7e427820080700a9556d8ee21",
        "datetime": 1786096061,
        "headlineKo": "Sandisk: 메모리는 구조적으로 변화했으며 해당 부문은 P/E 5배에 머물 수 없습니다"
      },
      {
        "headline": "Why Is Broadcom Stock Surging Friday?",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=eacc8fd31b7ffb30acd4773254b443b85ae63e47dc15d006dc4ce8f2d020cc2e",
        "datetime": 1786093453,
        "headlineKo": "Broadcom 주식이 금요일에 급등하는 이유는 무엇입니까?"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
      {
        "headline": "Meta ordered to pay $942M: Why the judge compared the company to 'noxious pollution'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0f17a50fed70e384689e1a766a7ec1188d84de58686e450ad27a312c9efd382",
        "datetime": 1786110754,
        "headlineKo": "Meta는 9억 4200만 달러를 지불하라는 명령을 받았습니다: 판사가 회사를 '유해 오염'에 비유한 이유"
      },
      {
        "headline": "AMD Buys AI Chip Startup Taalas—Here's Why It Matters To NVDA Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8cd12a80a0cfbab131f06af9535aa84f77246034875dec8c288a597e06147e7",
        "datetime": 1786108600,
        "headlineKo": "AMD, AI 칩 스타트업 Taalas 인수 - NVDA 투자자에게 중요한 이유는 다음과 같습니다."
      },
      {
        "headline": "Meta Stock in Focus -- Judge Orders $567 Million Child Safety Payment",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=deaa7e2ebc11d89132cc1602c732b9ff90562baf68e86187f1f9dafdcc22b430",
        "datetime": 1786105586,
        "headlineKo": "초점이 맞춰진 메타 주식 - 판사는 5억 6,700만 달러의 아동 안전 지급 명령을 내렸습니다."
      },
      {
        "headline": "5 Things to Know Before the Stock Market Opens on Friday",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d0a059539a3554b98e4037943eeadb7e2911ae3d1efcfcc7d9bd926cc89f5d6e",
        "datetime": 1786104549,
        "headlineKo": "금요일 주식시장이 개장하기 전에 알아야 할 5가지 사항"
      },
      {
        "headline": "Chamath Palihapitiya Says Meta Is Playing 'Scorched Earth' With AI Pricing— Its $0.69 Model Just Proved It Works",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee81c7fe1695d9eaa273874e279a2f55b819b3d41b725f07be84204b7438b3ce",
        "datetime": 1786104023,
        "headlineKo": "Chamath Palihapitiya는 Meta가 AI 가격으로 'Scorched Earth'를 연기하고 있다고 말합니다. 0.69달러 모델이 효과가 있음이 입증되었습니다"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:00"
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
      {
        "headline": "Elon Musk Says SpaceX Will Consume Three Times More Terafab AI Compute Than Tesla",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee07a0dc5c37e5e33cfb11a5528f2365ff1010010fa18ccfbe0dd390a44732e5",
        "datetime": 1786106688,
        "headlineKo": "Elon Musk는 SpaceX가 Tesla보다 3배 더 많은 Terafab AI 컴퓨팅을 소비할 것이라고 말했습니다."
      },
      {
        "headline": "Tesla Stock Rises to End Good Week. Thank the Usual Suspects.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f98715d3f63069f4958569334df805fe1f64c906f3b1ecc3ca1deffaecbd641f",
        "datetime": 1786104420,
        "headlineKo": "Tesla 주가 상승하여 좋은 한 주를 마무리합니다. 일반적인 용의자에게 감사드립니다."
      },
      {
        "headline": "SPCX Stock Hasn’t Bottomed Out Yet, But It’s ‘A Really Great Time To Buy,’ Says This Asset Manager",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=295906ea47a038cd9159424e8cdb8c1673912a2e3f940160571b1bed12845007",
        "datetime": 1786100731,
        "headlineKo": "SPCX 주식은 아직 바닥을 치지 않았지만, 이 자산 관리자는 지금이 '정말 매수하기 좋은 시기'라고 말합니다."
      },
      {
        "headline": "Electric Vehicles Today - LiDAR Market Growth Driven By Automated Driving Systems",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a4c4f66d80409f06e90946e43bc7db82f85e838b1a8c58c0ec2c12fe4233595d",
        "datetime": 1786099183,
        "headlineKo": "오늘날의 전기 자동차 - 자율 주행 시스템이 주도하는 LiDAR 시장 성장"
      },
      {
        "headline": "Big Tech Stocks Storm Back as AI Fears Fade and Euphoria Resumes",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1b7221e0dd94f8062dba63201381fd4dc40e13af17bccf05ee5bf0aeea06f32f",
        "datetime": 1786098601,
        "headlineKo": "AI에 대한 두려움이 사라지고 행복감이 재개됨에 따라 빅 테크 주식이 다시 급등했습니다."
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:00"
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
      {
        "headline": "Not Micron, Not Nvidia. This Artificial Intelligence (AI) Giant Could Be the Ultimate Winner of the AI Arms Race.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc0a385eddec39e6454a77f77ef1a753d42a583e89598823d20e8e2c09297652",
        "datetime": 1786108800,
        "headlineKo": "마이크론도 아니고 엔비디아도 아닙니다. 이 인공 지능(AI) 거인은 AI 군비 경쟁의 최종 승자가 될 수 있습니다."
      },
      {
        "headline": "Why SK Hynix’s $38 Billion Memory Splurge Is No Problem for Micron Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=55b8ed8e8282ce0ac8e42c590351d40af2aac1cff2347e33d841d1c6f142c42a",
        "datetime": 1786107240,
        "headlineKo": "SK하이닉스의 380억 달러 메모리 과잉이 마이크론 주식에 문제가 되지 않는 이유"
      },
      {
        "headline": "Citi cuts Micron stock target, sees memory chip prices peaking in 2Q27",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=71032e4446c6e7e95b5578ca9ae5b640ab51ad201551ff320827727bce1fa780",
        "datetime": 1786106900,
        "headlineKo": "Citi, 마이크론 주식 목표 하향, 2Q27에 메모리 칩 가격 정점 예상"
      },
      {
        "headline": "Can MU Stock Compound Its Way Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8ad9cb22ed7cabb93b64f2a636ab6a2a31f87786103b7cf4d0dcd921f6aa1e9",
        "datetime": 1786106845,
        "headlineKo": "MU 주식이 더 높아질 수 있습니까?"
      },
      {
        "headline": "The Overlooked Chip Stock Poised to Lead the AI Memory Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e040ff950dbc645030a7dfa8bc7ea81285c9d0fc81f41b2dea61975ae89fa201",
        "datetime": 1786104300,
        "headlineKo": "간과된 칩주, AI 메모리 붐 이끌 것"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:02"
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
      {
        "headline": "AMD Buys AI Chip Startup Taalas—Here's Why It Matters To NVDA Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8cd12a80a0cfbab131f06af9535aa84f77246034875dec8c288a597e06147e7",
        "datetime": 1786108600,
        "headlineKo": "AMD, AI 칩 스타트업 Taalas 인수 - NVDA 투자자에게 중요한 이유는 다음과 같습니다."
      },
      {
        "headline": "Update: US Equity Futures Rise Pre-Bell as Traders Assess Jobs Report, Monitor Middle East Developments",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb38d0e669c6ebb7a77e00e1f4b64b1991a2b958d779c41b6078dc5f53e51b92",
        "datetime": 1786107416,
        "headlineKo": "업데이트: 거래자들이 일자리 보고서를 평가하고 중동 발전을 모니터링함에 따라 미국 주식 선물이 벨 전 상승"
      },
      {
        "headline": "Can MU Stock Compound Its Way Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8ad9cb22ed7cabb93b64f2a636ab6a2a31f87786103b7cf4d0dcd921f6aa1e9",
        "datetime": 1786106845,
        "headlineKo": "MU 주식이 더 높아질 수 있습니까?"
      },
      {
        "headline": "Nvidia Stock Gains but AMD Is Coming for More of the AI Chip Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=af1b8734ae89e668a41a61ed86eaff1673c7c4796e3efee380fd6c561ad8f785",
        "datetime": 1786105620,
        "headlineKo": "Nvidia 주가는 상승했지만 AMD는 AI 칩 시장을 더 많이 차지할 예정입니다."
      },
      {
        "headline": "Advanced Micro Devices (AMD) Adds AI Inference Silicon With Taalas Acquisition",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=80bfd85a73275b2e1136fda347031b2222c77b6cd2e8058c52e357076bf4ae9f",
        "datetime": 1786104929,
        "headlineKo": "AMD(Advanced Micro Devices), Taalas 인수로 AI 추론 실리콘 추가"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
      {
        "headline": "Can MU Stock Compound Its Way Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8ad9cb22ed7cabb93b64f2a636ab6a2a31f87786103b7cf4d0dcd921f6aa1e9",
        "datetime": 1786106845,
        "headlineKo": "MU 주식이 더 높아질 수 있습니까?"
      },
      {
        "headline": "SpaceX and Tesla Are Building Their Own $119 Billion Chip Factory — and the Compute Landlord Thesis Just Got Its Most Expensive Chapter",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b1554d302732370914dfd3d8b12bcb2421c5036e2f749de1c93d134c1430565",
        "datetime": 1786098464,
        "headlineKo": "SpaceX와 Tesla는 1,190억 달러 규모의 자체 칩 공장을 건설하고 있으며 컴퓨팅 임대주 논문은 가장 비싼 장을 얻었습니다."
      },
      {
        "headline": "Chip Stocks Find Buyers After Earnings Shock Shakes Out AI Trade",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8e7fbc035dd720e744a130949fa23f87fbc91716d85b7b9fb7693b77133d3b8e",
        "datetime": 1786098374,
        "headlineKo": "칩 주식은 수익 충격으로 AI 거래를 뒤흔든 후 구매자를 찾습니다."
      },
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
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
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
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Breadth Cools, but the Rebound Structure Remains Intact",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=4966beaf912517f9125a2cb0f33b8d50545242b74870cd4f10f018faef89382c",
        "datetime": 1786109009,
        "headlineKo": "폭은 냉각되지만 리바운드 구조는 그대로 유지됩니다."
      },
      {
        "headline": "Surprise U.S. Job Weakness Casts Serious Doubt On Fed Rate Hikes",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f9710605c0f06afde8ec248412e3ebb1e68f17de41bf7cbf9617f4226eec9aba",
        "datetime": 1786102560,
        "headlineKo": "미국의 일자리 약화로 연준 금리 인상에 심각한 의구심이 제기되다"
      },
      {
        "headline": "July 2026 Employment Report - Much Weaker Than Expected, But Was It Really Weak?",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=b40c7b132aef9f1807c9ed8a00804f5d7bbb1cf69432581590e7cc977a968a09",
        "datetime": 1786098000,
        "headlineKo": "2026년 7월 고용보고서 - 예상보다 훨씬 약했지만, 정말 약했을까?"
      },
      {
        "headline": "Early Q3 GDP Nowcasts Point To A Pickup In Economic Growth",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=455316d80539f1759a4434e1a70cfd306544963ccc6ac2f6a97397a6ecf05bad",
        "datetime": 1786096860,
        "headlineKo": "3분기 초 GDP는 현재 경제 성장의 회복을 시사하고 있습니다."
      },
      {
        "headline": "July Payrolls: Bad News Is Good Again",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d18a91fbf82158e92c29701a4641020de97c372f001558a53f4a532e28b4e3a6",
        "datetime": 1786096803,
        "headlineKo": "7월 급여: 나쁜 소식은 다시 좋은 소식이 됩니다"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:00"
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
      {
        "headline": "Want $2,000 a Month From SPYI? Here’s the Exact Investment It Takes, and the Catch at That Size",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6225d8f85d735451b877361d0bbd902c96f16c42718726b65bed5095cb7ce399",
        "datetime": 1786110824,
        "headlineKo": "SPYI에서 한 달에 2,000달러를 원하시나요? 여기에 필요한 정확한 투자와 해당 규모의 캐치가 있습니다."
      },
      {
        "headline": "Breadth Cools, but the Rebound Structure Remains Intact",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=4966beaf912517f9125a2cb0f33b8d50545242b74870cd4f10f018faef89382c",
        "datetime": 1786109009,
        "headlineKo": "폭은 냉각되지만 리바운드 구조는 그대로 유지됩니다."
      },
      {
        "headline": "Exchange-Traded Funds, Equity Futures Higher Pre-Bell Friday Amid Strong Tech Results",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=54a2e3e5caea34a27f13312f8c0f3bc1a55cd8145831b4e38e2306a4a0c984d1",
        "datetime": 1786108768,
        "headlineKo": "강력한 기술 결과 속에 상장지수펀드, 주식 선물, 프리 벨 금요일 상승"
      },
      {
        "headline": "How A Top T. Rowe Price Manager Literally Scoops Up Melting Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=208d38df425283917c3e9e4c31f40bd46a93e2315f8041c963a4cb559a204c72",
        "datetime": 1786104091,
        "headlineKo": "T. Rowe의 최고 가격 관리자가 문자 그대로 녹는 주식을 퍼내는 방법"
      },
      {
        "headline": "Surprise U.S. Job Weakness Casts Serious Doubt On Fed Rate Hikes",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f9710605c0f06afde8ec248412e3ebb1e68f17de41bf7cbf9617f4226eec9aba",
        "datetime": 1786102560,
        "headlineKo": "미국의 일자리 약화로 연준 금리 인상에 심각한 의구심이 제기되다"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:00"
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
      {
        "headline": "Just How Wide Is the Risk Priced Into Adobe Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6db8a164cc7fdc44fc8087fa2990e971edf8365914efdd10c32b490e6f1ac2b",
        "datetime": 1786105343,
        "headlineKo": "Adobe Stock에 위험 가격이 얼마나 적용됩니까?"
      },
      {
        "headline": "What Larry Ellison needs to do to convince investors Oracle stock is still a buy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f1d617635225d26e28148f5d458b6934501d0dd9eda97526db1bd604d9ea5d1d",
        "datetime": 1786104000,
        "headlineKo": "Larry Ellison이 투자자들을 설득하기 위해 해야 할 일 오라클 주식은 여전히 ​​매수세입니다."
      },
      {
        "headline": "Big Tech is borrowing its way through the AI boom: Chart of the Day",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28901c1286a03d569a4a65fefb832eeedb2b84ccdae084af064a8743efa656cb",
        "datetime": 1786096800,
        "headlineKo": "빅테크는 AI 붐을 통해 자신의 길을 차용하고 있습니다: 오늘의 차트"
      },
      {
        "headline": "AI Debt Indigestion Forces Wall Street to Rethink Bond Sales",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6e47cf7f7cfbde61b8e0078877c32146c6b8f3cfdc026c4a9ce571b12569e9b",
        "datetime": 1786096800,
        "headlineKo": "AI 부채 소화 불량으로 인해 월스트리트가 채권 판매를 재고하게 됨"
      },
      {
        "headline": "Amazon CEO Andy Jassy Just Gave Investors 220 Billion Reasons to Buy Micron Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a25c345a2bf581d92f29fbaf7cd5d7a98754e33684e5a86739134b34e9233be1",
        "datetime": 1786094400,
        "headlineKo": "Amazon CEO Andy Jassy는 투자자들에게 Micron 주식을 매수해야 할 2,200억 가지 이유를 제시했습니다."
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:00"
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
      {
        "headline": "What's going on in today's session: S&P500 gap up and gap down stocks",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=ba7e0c36628e3e622f779f9a6b4fcefb13ededca266f41f5382d1d7a360c7967",
        "datetime": 1786113301,
        "headlineKo": "오늘 세션의 내용: S&P500 주식 갭 상승 및 갭 하락"
      },
      {
        "headline": "Stock Market Today: Dow Down After Surprise July Jobs Reading; AI Stock Cloudflare Soars (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=de8a0c6e7528c605679f714dfb5ae73fd5df6ceddfe17c24db932549b8437233",
        "datetime": 1786110924,
        "headlineKo": "오늘의 주식시장: 7월 채용정보 발표 이후 다우지수 하락; AI 주식 Cloudflare 급등(실시간 보도)"
      },
      {
        "headline": "Just How Wide Is the Risk Priced Into Adobe Stock?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a6db8a164cc7fdc44fc8087fa2990e971edf8365914efdd10c32b490e6f1ac2b",
        "datetime": 1786105343,
        "headlineKo": "Adobe Stock에 위험 가격이 얼마나 적용됩니까?"
      },
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
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
      {
        "headline": "Meet the Spiffy-Pop: Long-Term Holders' Reward",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=203da205ccb54456af7d585317ba31bcc70582d75ed54786f32fca227119d64e",
        "datetime": 1786107300,
        "headlineKo": "Spiffy-Pop을 만나보세요: 장기 보유자 보상"
      },
      {
        "headline": "Software Stocks Are a Hot Mess. So Is the Whole AI Trade.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4ba04669d4804b864662aee49fadb9f4b6bce682fd865913b2d07ddcf52a1810",
        "datetime": 1786099920,
        "headlineKo": "소프트웨어 주식은 엉망이다. 전체 AI 거래도 마찬가지입니다."
      },
      {
        "headline": "Palantir's Q2 Was Exceptional, But Something More Important Changed",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d971bf8431a3c092e3a49b0bfb736d8cc63df40a1226b88b69c680de95a6b2c7",
        "datetime": 1786096426,
        "headlineKo": "Palantir의 Q2는 예외적이었지만 더 중요한 것이 변경되었습니다."
      },
      {
        "headline": "Steve Eisman Pushes Back on Michael Burry's Market Top Call: 'I Think It's Premature'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8b6acbbb8e37c153e6a205b4ae67202579f5ec4ee7f332f883b12c9dfe2d06a8",
        "datetime": 1786095929,
        "headlineKo": "Steve Eisman은 Michael Burry의 시장 최고 콜에 대해 반박: '아직 시기상조라고 생각합니다'"
      },
      {
        "headline": "Palantir: The AI Bottleneck Has Moved In Its Favor",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8d1a8eab62b67de0735dfe31a815549672a7f3a6439f76febee1a6e7309008da",
        "datetime": 1786094203,
        "headlineKo": "Palantir: AI 병목 현상이 유리하게 바뀌었습니다"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
  },
  "QCOM": {
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2987
    },
    "news": [
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
      },
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
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
  },
  "ARM": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4688
    },
    "news": [
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
      },
      {
        "headline": "Arm: Buy The Dip",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0150c53e9176ea1f3f7048ba7b4688db9abe2ad9bf1dd015f7f26c0166c1a250",
        "datetime": 1786093066,
        "headlineKo": "팔: 딥 구매"
      },
      {
        "headline": "Arm Holdings: Record Print, Walked-Down Royalties, And A 100x+ P/E Question Mark",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c760fb02b70643c5096ef2179ba04ed7c40167ad4a26e763d98345e3841a2bca",
        "datetime": 1786086146,
        "headlineKo": "Arm Holdings: 기록 인쇄, 할인된 로열티 및 100배 이상의 P/E 물음표"
      },
      {
        "headline": "Update: US Equity Indexes Mixed as Technology, Energy Help Blunt Broad-Based Declines",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4cbc8d8134c5ed6267f43a22f0860d4b2a4c53364f1de6b5996e6e82a3684d61",
        "datetime": 1786046130,
        "headlineKo": "업데이트: 기술과 에너지가 혼합된 미국 주가 지수는 광범위한 하락을 둔화하는 데 도움이 됩니다"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
  },
  "MRVL": {
    "nextEarnings": {
      "date": "2026-08-27",
      "hour": "",
      "epsEstimate": 0.939
    },
    "news": [
      {
        "headline": "B. Riley Financial Q2 Earnings Call Highlights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fcb9451b80008b9686cc7b14eaacea72e47244d9e908ba942fc2f291fab30e81",
        "datetime": 1786100636,
        "headlineKo": "B. Riley Financial 2분기 실적 발표 하이라이트"
      },
      {
        "headline": "Apple Among Three Stocks In Voracious Demand. Funds Also Feast On 14 Others.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8e51a5c7911f0b7cd49abb0231cf9012f76b82106740c8dedaee2ce40668f6f",
        "datetime": 1786100405,
        "headlineKo": "수요가 많은 3개 주식 중 애플. 자금은 또한 14개 다른 곳에서도 잔치를 벌입니다."
      },
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
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
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
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
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
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:01"
  },
  "KLAC": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.1971
    },
    "news": [
      {
        "headline": "Chip Stocks Find Buyers After Earnings Shock Shakes Out AI Trade",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8e7fbc035dd720e744a130949fa23f87fbc91716d85b7b9fb7693b77133d3b8e",
        "datetime": 1786098374,
        "headlineKo": "칩 주식은 수익 충격으로 AI 거래를 뒤흔든 후 구매자를 찾습니다."
      },
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
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:02"
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
      {
        "headline": "What's going on in today's session: S&P500 gap up and gap down stocks",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=ba7e0c36628e3e622f779f9a6b4fcefb13ededca266f41f5382d1d7a360c7967",
        "datetime": 1786113301,
        "headlineKo": "오늘 세션의 내용: S&P500 주식 갭 상승 및 갭 하락"
      },
      {
        "headline": "What the vicious Sandisk bears are forgetting",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6c5233ce992989034bce655101999760345fb561dcda8c6f2e9aa143a69398b5",
        "datetime": 1786109367,
        "headlineKo": "사악한 샌디스크 곰들이 잊고 있는 것"
      },
      {
        "headline": "Which S&P500 stocks are moving before the opening bell on Friday?",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=073c54ac6a5c9a52cf67af390cc14433ee433ae80c98f88141a2bf1f9b5787c4",
        "datetime": 1786106101,
        "headlineKo": "금요일 개장 전에 어떤 S&P500 주식이 움직이고 있나요?"
      },
      {
        "headline": "Wall Street Revises Sandisk Stock Price Target After Earnings",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1a555a09f945c710ff0e4a8aa5ac8bc3ba03ef07f7fd549be85cf518bd7e1463",
        "datetime": 1786104511,
        "headlineKo": "월스트리트, 수익 후 Sandisk 주가 목표 수정"
      },
      {
        "headline": "The Overlooked Chip Stock Poised to Lead the AI Memory Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e040ff950dbc645030a7dfa8bc7ea81285c9d0fc81f41b2dea61975ae89fa201",
        "datetime": 1786104300,
        "headlineKo": "간과된 칩주, AI 메모리 붐 이끌 것"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:02"
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
      {
        "headline": "What's going on in today's session: S&P500 gap up and gap down stocks",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=ba7e0c36628e3e622f779f9a6b4fcefb13ededca266f41f5382d1d7a360c7967",
        "datetime": 1786113301,
        "headlineKo": "오늘 세션의 내용: S&P500 주식 갭 상승 및 갭 하락"
      },
      {
        "headline": "Can MU Stock Compound Its Way Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d8ad9cb22ed7cabb93b64f2a636ab6a2a31f87786103b7cf4d0dcd921f6aa1e9",
        "datetime": 1786106845,
        "headlineKo": "MU 주식이 더 높아질 수 있습니까?"
      },
      {
        "headline": "Western Digital (NASDAQ:WDC) Clears All Eight Growth Criteria in Navellier-Inspired Screen",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=4a8dbaab381fec470d2fd6d87771af0cb209ac61593979be1a2e6ce68eca6c16",
        "datetime": 1786101096,
        "headlineKo": "Western Digital(NASDAQ:WDC), Navellier에서 영감을 받은 화면에서 8가지 성장 기준 모두 삭제"
      },
      {
        "headline": "Chip Stocks Find Buyers After Earnings Shock Shakes Out AI Trade",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=8e7fbc035dd720e744a130949fa23f87fbc91716d85b7b9fb7693b77133d3b8e",
        "datetime": 1786098374,
        "headlineKo": "칩 주식은 수익 충격으로 AI 거래를 뒤흔든 후 구매자를 찾습니다."
      },
      {
        "headline": "US Jobs Report in Focus as Middle East Tensions and Corporate News Shape Markets: Dow Jones, S&P, Nasdaq, Wall Street Futures",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=962e5a27d3b20f088a21258b2b51aa111a8f55a498519ba59c2b527f48dbe4d9",
        "datetime": 1786091736,
        "headlineKo": "중동 긴장과 기업 뉴스가 시장을 형성함에 따라 미국 일자리 보고서에 초점이 맞춰졌습니다: Dow Jones, S&P, Nasdaq, Wall Street Futures"
      }
    ],
    "_fetched_at": 1786118402.571232,
    "_updated_label": "2026-08-08 01:02"
  }
};
