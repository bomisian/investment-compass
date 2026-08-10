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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "AAPL": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0468
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "GOOGL": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.1009
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:52",
    "newsHistory": [
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
    ]
  },
  "MSFT": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.7263
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:52",
    "newsHistory": [
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
    ]
  },
  "AMZN": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9445
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:52",
    "newsHistory": [
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
    ]
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "AVGO": {
    "nextEarnings": {
      "date": "2026-09-02",
      "hour": "amc",
      "epsEstimate": 3.3012
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "META": {
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 7.1215
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:52",
    "newsHistory": [
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
    ]
  },
  "TSLA": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4492
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "MU": {
    "nextEarnings": {
      "date": "2026-09-21",
      "hour": "amc",
      "epsEstimate": 32.2476
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:54",
    "newsHistory": [
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
    ]
  },
  "AMD": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.8517
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "INTC": {
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3936
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "AMAT": {
    "nextEarnings": {
      "date": "2026-08-13",
      "hour": "amc",
      "epsEstimate": 3.462
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "QQQ": {
    "nextEarnings": null,
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:52",
    "newsHistory": [
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
    ]
  },
  "SPY": {
    "nextEarnings": null,
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:52",
    "newsHistory": [
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
    ]
  },
  "ORCL": {
    "nextEarnings": {
      "date": "2026-09-07",
      "hour": "",
      "epsEstimate": 1.7745
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "CRM": {
    "nextEarnings": {
      "date": "2026-08-26",
      "hour": "amc",
      "epsEstimate": 3.3057
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "PLTR": {
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.3782
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
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
    ]
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
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
    ]
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:53",
    "newsHistory": [
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
    ]
  },
  "LRCX": {
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.1446
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:54",
    "newsHistory": [
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
    ]
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:54",
    "newsHistory": [
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
    ]
  },
  "SNDK": {
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 41.473
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:54",
    "newsHistory": [
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
    ]
  },
  "WDC": {
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 3.7282
    },
    "news": [
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
    "_fetched_at": 1786330350.513939,
    "_updated_label": "2026-08-10 11:54",
    "newsHistory": [
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
    ]
  }
};
