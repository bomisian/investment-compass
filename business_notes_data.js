// ============ 종목 사업 핵심 요약 (납품처·장점·위험도) ============
// 2026-08-10 파일럿 3종목(QCOM/NVDA/TSM)만 작성. Finnhub/Yahoo 구조화 데이터가 아니라
// Claude가 WebSearch로 조사해 직접 작성한 정성적(qualitative) 콘텐츠라 buy_signal_telegram.py
// 자동 갱신 대상이 아님 - 필요할 때 세션에서 다시 요청해 갱신할 것. 각 항목의 "updated"가
// 조사 시점이고, sources에 실제 참고한 기사 링크를 남겨 사용자가 직접 원문을 확인할 수 있게 함.
// ⚠️ 이 파일은 정확성이 생명이라 추측/일반 지식으로 채우지 말고, 반드시 WebSearch로 확인한
// 내용만 넣을 것. 확인 못 한 부분은 억지로 채우지 말고 빼는 게 이 프로젝트의 원칙과 일치함.
const BUSINESS_NOTES = {
  MARKET: {
    newsLog: [
      {
        date: "2026-09-03",
        headline: "이란, 요르단·쿠웨이트·바레인 동시 공격에도 - 연준 월러 '9월 금리동결 지지' 발언에 나스닥 +1.4% 급반등(최근 한달래 최대 상승)",
        tone: "positive",
        importance: "medium",
        horizon: "단기(9월 CPI·고용지표, FOMC 결과 확인까지)",
        facts: ["2026-09-02(현지시간) 이란이 요르단·쿠웨이트·바레인을 향해 미사일·드론 공격을 감행했다 - 요르단군은 자국 영공에 진입한 미사일 13발 중 10발을 요격했고 3발은 외곽 지역에 낙하했으며 인명피해는 없었다고 밝혔다. 쿠웨이트·바레인도 자국 방공망이 적대적 미사일·드론을 요격했다고 발표했고 UAE는 이 공격들을 강력 규탄했다.", "이는 9/1 미군의 이란 타격에 대한 보복 성격으로, 8/31 라라크섬 충돌 이후 이어지는 미-이란 무력충돌의 연장선이다.", "그럼에도 2026-09-03 미국 증시는 급등했다 - 다우존스 +624.16포인트(+1.18%) 53,686.11 마감, S&P500 +1.06% 7,747.71 마감, 나스닥종합 +1.4% 26,584.06 마감. CNBC는 이날을 8/4 이후 다우 최고 상승일로 평가했다.", "급등의 직접 계기는 연준(Fed) 이사 크리스토퍼 월러의 발언이다 - 그는 로이터 인터뷰에서 '향후 2주간 발표될 지표에서 (디스인플레이션) 흐름이 이어진다면 현재 금리 수준 동결을 지지하는 쪽으로 기울 것'이라고 밝혔고, 최근 지표에서 '마침내 디스인플레이션 조짐이 보인다'고 언급했다.", "이 발언 이후 CME FedWatch 기준 9월 FOMC 금리인상 가능성은 전일 63.2%에서 50.4%로 낮아졌다.", "미 10년물 국채금리는 전일 4.79%(2025년 1월래 최고 수준)에서 이 발언 이후 약 4.75%로 소폭 하락했다.", "WTI 원유는 +0.32% $91.30, 브렌트유는 -0.12% $95.52로 중동 긴장에도 큰 변동은 없었다."],
        why: ["8/31~9/1 이틀 연속 하락을 이끌었던 핵심 우려가 '유가발 인플레이션 → 연준 금리인상'이었는데, 월러 이사의 발언은 이 우려의 정반대 방향(금리인상이 아니라 동결)을 시사해 시장이 안도 랠리를 보인 것이다.", "이란의 실제 공격(요르단·쿠웨이트·바레인)이 동시에 있었음에도 증시가 하락이 아니라 급등했다는 것은, 현재 시장이 지정학 리스크보다 금리 경로에 더 민감하게 반응하고 있다는 신호다.", "다만 월러의 발언은 '앞으로 2주 지표가 계속 개선되면'이라는 조건부 표현이라, 이번 주 발표되는 CPI·고용지표 결과에 따라 이 안도감이 뒤집힐 수 있다."],
        beginner: ["이란이 요르단·쿠웨이트·바레인 세 나라를 동시에 공격했는데도 미국 증시는 오히려 크게 올랐어요(나스닥 +1.4%). 좀 의아하게 느껴질 수 있는데, 이유는 따로 있어요.", "연준(미국 중앙은행)의 월러 이사가 '물가가 계속 진정되면 이번 달 금리를 더 안 올리고 그대로 둘 것 같다'고 말했어요. 그동안 시장은 '기름값이 올라서 물가가 오르고, 그러면 금리를 또 올릴 수도 있다'는 걱정을 하고 있었는데, 이 말 한마디로 그 걱정이 줄어든 거예요.", "즉 이번 상승은 '중동 상황이 좋아져서'가 아니라 '금리를 더 안 올릴 수도 있다는 안도감' 때문이에요. 다만 월러 이사도 '앞으로 2주 지표가 계속 좋으면'이라는 단서를 달았기 때문에, 이번 주 나오는 물가·고용 지표가 이 안도감을 계속 뒷받침해줄지가 중요해요."],
        interpretation: "이번 급등은 펀더멘털 개선이 아니라 '금리인상 공포의 일시적 해소'에 가깝다. 8/31~9/1 이틀간 하락을 이끈 핵심 변수(유가발 인플레이션 우려→금리인상 가능성)가 월러의 조건부 발언 하나로 절반 가까이(63.2%→50.4%) 되돌려졌다는 것은, 시장이 여전히 데이터에 따라 방향을 크게 바꿀 만큼 민감한 상태라는 뜻이다. 이란의 실제 공격이 동시에 있었는데도 증시가 이를 사실상 무시했다는 점은 지정학 리스크의 시장 영향력이 최근 며칠새 옅어졌다는 신호이지만, 확전 여부는 계속 지켜볼 사안이다.", "decision": "이 랠리 자체를 특정 종목 매수 근거로 쓰기보다, 이번 주 CPI·고용지표 발표 결과가 월러의 '디스인플레이션 조짐'을 뒷받침하는지 확인 후 판단할 것. 지표가 어긋나면 8/31~9/1의 하락 압력이 재현될 수 있다.", "watch": ["이번 주 발표되는 미국 CPI·고용보고서 결과 (월러의 '디스인플레이션 조짐' 발언 뒷받침 여부)", "9월 FOMC에서 실제 금리동결 여부 및 파월 등 다른 위원들의 후속 발언", "이란의 추가 보복이나 확전 조짐 여부", "10년물 국채금리가 4.75% 아래로 추가 하락하는지, 아니면 다시 4.8%대로 반등하는지"],
        confidence: "지수 등락률·종가(다우 53,686.11·S&P 7,747.71·나스닥 26,584.06)와 월러 발언 인용은 CNBC·Yahoo Finance·Investing.com 등 복수 매체가 교차 확인해 신뢰도 높음. FedWatch 확률(63.2%→50.4%) 수치는 Yahoo Finance 보도 기준. 이란의 요르단·쿠웨이트·바레인 공격 사실관계는 Al Jazeera·The National 등 복수 매체 교차 확인.",
        sources: [
          { title: "Stock Market Today (Sept. 3, 2026): Nasdaq (TheStreet)", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-03-2026" },
          { title: "Stock Market Midday, Sept. 3: Stocks Rally as Treasury Yields Fall (Motley Fool)", url: "https://www.fool.com/coverage/stock-market-today/2026/09/03/stock-market-midday-sept-3-stocks-rally-as-treasury-yields-fall-broadcom-falls-despite-earnings-beat/" },
          { title: "Stocks Rally, Yields Retreat after Waller Signals a September Hold (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/stocks-rally-yields-retreat-waller-162644511.html" },
          { title: "Fed's Waller open to leaving rates unchanged at September meeting if inflation cools (Investing.com)", url: "https://www.investing.com/news/economy-news/feds-waller-open-to-leaving-rates-unchanged-at-september-meeting-if-inflation-cools-4887866" },
          { title: "Iran attacks Bahrain, Kuwait and Jordan after US hits Iranian nuclear... (Al Jazeera)", url: "https://www.aljazeera.com/news/2026/9/1/us-military-says-launching-new-attacks-on-iran" },
          { title: "Iran war latest: Kuwait and Jordan intercept Iranian missiles after... (The National)", url: "https://www.thenationalnews.com/news/mena/2026/09/02/live-kuwait-jordan-us-iran-strikes/" },
        ],
      },
      {
        date: "2026-09-01",
        headline: "Anthropic, NVIDIA 지원 클라우드 Lambda와 6년 $35B 거래 체결 - AI 모델 추론용 대규모 인프라 확충",
        tone: "positive",
        importance: "high",
        horizon: "중장기(AI 인프라 투자 흐름, 데이터센터 수요 확인, 6년 계약)",
        facts: ["Anthropic이 2026-09-01 NVIDIA 지원 클라우드 서비스 제공사 Lambda와 6년 계약 기반 약 $35B 규모 클라우드 컴퓨팅 거래를 체결했다고 Bloomberg·WSJ 등이 보도했다.", "이 계약은 Anthropic의 Claude 등 AI 모델의 추론(inference) 작업용 데이터센터 인프라를 급속 확충하는 것을 목표로 한다.", "인프라는 미국 텍사스 Nueces County에 위치하며, Bitcoin 채굴에서 데이터센터로 전환 중인 Hut 8이 건설·운영한다.", "NVIDIA는 이 시설의 임차료를 담당하고 Lambda에 칩을 공급하며, Lambda가 이를 Anthropic에 재판매하는 구조다.", "Anthropic과 Lambda는 아직 공식 발표를 하지 않았으며, 정확한 계약 내용과 향후 일정은 공개되지 않음.", "이는 OpenAI-Microsoft, Google-TPU/GCP, Amazon-Trainium/Inferentia 등 Big Tech의 AI 인프라 수직통합 움직임과 유사한 흐름으로, AI 모델 개발사들이 클라우드 인프라 의존도를 높이고 있다는 신호다."],
        why: ["AI 모델의 추론 비용이 전체 운영비에서 점점 더 큰 비중을 차지하는 상황에서, Anthropic이 대규모 장기 계약으로 인프라를 자체 확보하려는 움직임은 'AI 생산 비용 절감 경쟁'의 가시화를 의미한다.", "NVIDIA가 직접 시설 임차료를 담당하고 칩을 공급하는 구조는 NVIDIA의 AI 데이터센터 인프라 사업이 단순 '칩 판매'를 넘어 '전체 시스템 솔루션'으로 진화하고 있음을 시사한다.", "$35B라는 규모는 6년 계약 기준이지만, Anthropic 같은 AI 모델사가 한 업체에 이 정도 규모를 약정한다는 것은 (1) 추론 수요가 매우 크다는 신호, (2) AI 인프라 투자 흐름이 계속될 것이라는 시장 신호로 해석된다.", "워치리스트의 인프라·전력 관련 종목(ETN, PWR, HUBB, VST 등)과 반도체·AI 서버 종목(NVDA, AVGO, AMAT 등)이 이 대규모 투자 사이클에서 수혜를 받을 가능성이 높다."],
        beginner: ["ChatGPT 같은 AI를 사용할 때 두 가지 작업이 필요해요:", "1) 처음 학습할 때 - '엄청 비싼' 작업", "2) 사용자가 질문할 때마다 답변하는 것 - 학습보다는 싸지만 자주 일어나는 작업", "Anthropic은 (2번) 답변 작업을 많은 사람들이 하고 있으니, 이걸 빠르고 저렴하게 처리할 수 있는 자기만의 컴퓨터 센터를 6년 동안 빌리기로 계약한 거예요.", "규모가 아주 커서 ($35B) 이건 'AI 서비스를 하려는 회사들이 컴퓨터 인프라에 엄청 많이 투자하고 있다'는 신호가 되고, 이는 반도체·전력·컴퓨터 장비 만드는 회사들이 당분간 계속 장사가 잘될 거란 뜻이에요."],
        watch: ["Anthropic의 실제 Claude 사용자 수·트래픽 증가 추이 및 인프라 투자 강도 변화", "Lambda 및 Hut 8의 추가 계약 체결 여부 (다른 AI 모델사 고객 확보)", "NVIDIA의 AI 데이터센터 인프라 사업(칩 판매 이외의 수익)에 대한 향후 공시·가이던스", "6년 계약 기간 동안 GPU 기술 진화·가격 하락이 실제 비용 절감으로 이어질지 여부"],
        interpretation: "이 계약은 단순 '클라우드 구매'가 아니라 'Big Tech의 AI 인프라 수직통합' 추세의 연장선으로 봐야 한다. OpenAI가 Microsoft와 수십억 규모 계약을 했고, Google/Amazon도 자체 AI 칩 투자를 늘리고 있는 가운데, Anthropic이 NVIDIA-Lambda를 통해 인프라 확보에 나선 것은 (1) AI 추론 수요가 지속될 것이라는 시장 신호, (2) NVIDIA의 '칩 공급자'에서 '인프라 사업자'로의 역할 확대 신호, (3) 향후 수년간 데이터센터 투자 사이클의 지속 신호를 모두 담고 있다.",
        decision: "이 뉴스 자체로 NVDA를 당장 매수할 근거는 아니지만, NVDA의 '장기 수익 엔진'으로서의 입지 확인 및 AI 인프라 투자 사이클의 지속성을 재확인하는 긍정적 신호로 기록할 것. 반도체·전력인프라 종목(AVGO, AMAT, ETN, PWR 등)도 관심 주시 대상.",
        confidence: "계약 발표 사실과 규모($35B)는 Bloomberg·WSJ 등 신뢰도 높은 매체가 보도했으나, Anthropic과 Lambda가 공식 발표하지 않아 세부 조건(정산 방식, 기간 중 가격 조정 여부 등)은 추측 단계. 계약 존재 사실과 규모는 신뢰도 높음.",
        sources: [
          { title: "Anthropic Seals $35 Billion Cloud Deal With Nvidia-Backed Lambda (Bloomberg)", url: "https://www.bloomberg.com/news/articles/2026-08-31/anthropic-seals-35-billion-cloud-deal-with-nvidia-backed-lambda" },
          { title: "Anthropic signs $35 billion cloud deal with Nvidia-backed Lambda (Yahoo Finance/WSJ)", url: "https://finance.yahoo.com/technology/ai/articles/anthropic-signs-35-billion-lambda-144113886.html" },
          { title: "Anthropic inks $35B deal with Nvidia-backed cloud provider Lambda (CNBC)", url: "https://www.cnbc.com/video/2026/09/01/anthropic-inks-35b-deal-with-nvidia-backed-cloud-provider-lambda-report.html" },
        ],
      },
      {
        date: "2026-09-01",
        headline: "글로벌 국채금리 급등 - 미 10년물 4.79%(2025년 1월來 최고), 일본·독일 10년물도 수십년래 최고, 유가 $92 돌파에 나스닥 -1.03% 이틀 연속 하락",
        tone: "risk",
        importance: "medium",
        horizon: "단기~중기(9월 CPI·고용지표, FOMC 결과에 좌우)",
        facts: ["2026-09-01(현지시간 화요일) 미국 10년물 국채금리가 4.79%로 상승해 2025년 1월 이후 최고치를 기록했다(직전 금요일 4.73%). 2년물 금리도 4.35%로 올해 초(약 3.50%) 대비 크게 뛰었다.", "국채 매도세는 미국만이 아니라 전 세계적으로 나타났다 - 일본 10년물이 1996년 이후 처음으로 3%를 터치했고, 독일 10년물도 3%로 15년 만의 최고치를 기록했다.", "미국 국가부채는 2주 전 $40조를 넘어섰고, 국방비·이자비용 부담 증가로 각국 정부의 재정 리스크에 대한 투자자 우려가 커지고 있다.", "브렌트유는 전일 대비 1.7% 오른 배럴당 $92(전날 2.7% 상승에 이어 추가 상승), WTI는 2.2% 오른 $87.67을 기록했다 - 호르무즈 해협 관련 이란-미국 충돌 여파로 유가가 계속 높은 수준을 유지하고 있다.", "8월 한 달 내내 미국 평균 휘발유 가격이 갤런당 $4를 넘은 것은 AAA 집계 이래 처음이며, 2022년 팬데믹발 공급망 위기 때보다도 비싼 8월로 기록됐다.", "이날 다우존스는 -0.79%(419.02포인트↓, 52,766.88), S&P500은 -0.71%(7,631.47), 나스닥은 -1.03%(26,099.77)로 마감했다 - 전날(8/31) 하락에 이어 이틀 연속 하락.", "엔비디아·마이크로소프트·알파벳·마이크론 등이 개장 전부터 하락세를 보였다.", "연준 의장 케빈 워시가 지난주 연설에서 인플레이션이 개선되지 않으면 금리인상 여지를 남겨두겠다는 취지로 발언했고, 이번주 발표되는 CPI·고용보고서가 향후 FOMC 결정에 큰 영향을 줄 전망이다. 실업률은 4.1%로 낮지만 고용시장은 최근 정체된 모습이다."],
        why: ["국채금리 급등(특히 미 10년물 2025년 1월래 최고)은 성장주·기술주 밸류에이션에 직접적인 할인 압력을 준다 - 워치리스트 대부분이 고밸류에이션 대형 기술주·반도체주라 금리 상승기에 상대적으로 더 민감하게 반응할 수 있다.", "이번 금리 상승의 진원지는 경기 과열이 아니라 유가발 인플레이션과 재정 리스크로, 연준이 인플레이션을 잡기 위해 금리인상 카드를 다시 꺼낼 수 있다는 우려가 핵심이다 - 8/31에 이미 언급된 호르무즈 리스크가 채권시장까지 본격적으로 옮겨붙었다는 뜻이다.", "일본·독일 국채금리까지 수십년 만의 최고치를 기록한 것은 이번 금리 상승이 미국만의 현상이 아니라 전 세계적인 흐름이라는 신호 - 글로벌 자금조달 비용 상승은 AI 데이터센터 등 대규모 설비투자 사이클에도 부담이 될 수 있다."],
        beginner: ["나라가 돈을 빌릴 때 내는 이자(국채금리)가 미국·일본·독일 할 것 없이 동시에 크게 올랐어요. 미국 10년물은 작년 1월 이후 가장 높고, 일본은 30년 만에 최고 수준이에요.", "이렇게 된 이유는 기름값이 계속 오르고 있어서예요(배럴당 $92) - 기름값이 오르면 물가가 오르고, 물가가 오르면 중앙은행이 금리를 더 올릴 수도 있다는 걱정이 커져요.", "금리가 오르면 특히 엔비디아·마이크로소프트 같은 미래 성장 기대로 비싸게 거래되는 기술주들이 더 크게 흔들리는 경향이 있어요 - 그래서 이날 나스닥이 다우·S&P보다 더 많이(-1.0%대) 떨어졌어요.", "이번 주에 나오는 물가 지표와 고용 지표가 연준이 금리를 올릴지 말지 판단하는 핵심 재료라 시장이 특히 주목하고 있어요."],
        watch: ["미 10년물 국채금리가 5%에 근접하는지 여부(추가 상승 시 성장주 압박 심화)", "이번 주 발표되는 미국 CPI·고용보고서 결과", "9월 FOMC에서 케빈 워시 의장이 실제로 금리인상을 시사하는지", "WTI/브렌트 유가 추이 및 호르무즈 해협 통항 상황", "일본·독일 등 해외 국채금리 추가 상승 여부(글로벌 자금조달 비용)"],
        interpretation: "이번 이슈는 개별 종목 사건이 아니라 유가발 인플레이션 우려가 전 세계 국채금리 동반 급등으로 이어지고, 이것이 고밸류에이션 성장주 할인 압력으로 번지는 매크로 흐름이다. 8/31 호르무즈 충돌이 채권시장까지 본격적으로 전이된 모습으로, 하루 낙폭(나스닥 -1.03%) 자체는 패닉까지는 아니지만 이틀 연속 하락하며 방향성이 뚜렷해지고 있다는 점은 주의가 필요하다. 다만 이 흐름은 개별 기업 펀더멘털과 무관한 매크로 요인이라, 이번 주 CPI·고용지표와 9월 FOMC 결과를 확인하기 전까지는 방향을 단정하기 이르다.",
        decision: "이 매크로 뉴스 자체로 특정 종목을 매수·매도할 근거는 아니다. 다만 국채금리가 계속 오르고 유가가 추가로 뛴다면 고밸류에이션 대형 기술주·반도체주의 단기 변동성이 커질 수 있으니, 이번 주 CPI·고용지표 발표와 9월 FOMC 전후로 시장 반응을 지켜볼 것.",
        confidence: "국채금리 수치(미 10년물 4.79%, 2년물 4.35%, 일본·독일 10년물 3%)와 지수 등락률은 AP(Fortune 게재)·Yahoo Finance 등 복수 매체가 보도한 공식 시장 데이터 기준으로 신뢰도 높음. 케빈 워시 의장 발언 취지는 AP 기사 인용 기준.",
        sources: [
          { title: "Oil is back above $92 and inflation fears are sending U.S. bond yields to their highest since January 2025 (Fortune/AP)", url: "https://fortune.com/2026/09/01/oil-prices-bond-yields-inflation-fe/" },
          { title: "Stock Market News for Sep 1, 2026 (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-sep-1-085900862.html" },
          { title: "Stock Market Midday, Sept. 1: Stocks Slide on Global Bond Sell-Off (Yahoo Finance/Motley Fool)", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-midday-sept-1-164445375.html" },
        ],
      },
      {
        date: "2026-08-31",
        headline: "미-이란, 한 달 만에 재충돌 - 라라크섬 발사대 타격에 이란은 요르단 미군기지 미사일 보복, 유가 $90 돌파",
        tone: "mixed",
        importance: "medium",
        horizon: "단기(수일~수주, 추가 확전 여부에 좌우)",
        facts: ["2026-08-31(현지시간 일요일 밤~월요일) 미군이 호르무즈 해협 인근 이란 라라크섬의 로켓 발사대 두 곳을 타격했다. 미 중부사령부(CENTCOM)는 이란군이 해협에 기뢰를 살포하려는 정황을 포착해 가한 '제한적이고 정밀한' 타격이라고 밝혔다.", "앞서 이란 혁명수비대(IRGC)는 일요일 미군 드론 공격으로 라라크섬에서 자국군이 사망했다고 주장했다.", "이란은 요르단 내 미군기지를 향해 탄도미사일로 보복했다 - 요르단군은 자국 영공에 진입한 미사일 8발을 요격했다고 발표했고, UAE 국방부도 이란발 드론을 요격했다고 밝혔다.", "별도로 호르무즈 해협에서 초대형 유조선이 기뢰 2발에 맞아 화재가 발생했다 - 이란군은 해당 선박이 허가 없이 해협을 통과하려 했다고 주장했다.", "이는 지난 7월 29일 이후 한 달여 만에 재개된 첫 무력 충돌이다.", "이 소식에 WTI 원유는 배럴당 $90를 넘어섰고, 다우존스는 -0.70%(374포인트↓, 53,185.90), S&P500은 -0.33%(7,686.14), 나스닥은 -0.12%(26,370.89) 하락 마감했다. 10년물 국채금리는 4.76%로 2025년 1월 이후 최고치를 기록했다.", "다만 개별 종목 반응은 엇갈렸다 - 엔비디아(+1.5%)·테슬라(+5.5%)는 상승한 반면, 애플(-0.9%)·아마존(-2.5%)·구글(-2.2%)·메타(-1.0%)·마이크로소프트(-1.2%)는 하락했다."],
        why: ["한 달간 소강상태였던 미-이란 무력충돌이 재점화됐다는 신호로, 유가 급등과 국채금리 상승이 동시에 나타나며 인플레이션 우려가 다시 불거졌다 - 이는 9월 연준 금리결정 경로에도 부담 요인이 될 수 있다.", "다만 이번 지수 낙폭은 1% 미만으로 제한적이었고 엔비디아·테슬라 등 워치리스트 핵심 종목은 오히려 상승해, 이번 사건만으로 'AI/반도체 랠리 훼손' 국면이라고 보기는 이르다."],
        beginner: ["미국과 이란이 한 달 만에 다시 무력 충돌을 벌였어요. 미군이 이란 섬의 미사일 발사대를 공격했고, 이란은 요르단 미군기지로 미사일을 쐈어요.", "중동에서 싸움이 다시 커지면 원유 공급이 끊길까봐 걱정돼서 기름값이 확 올라요(배럴당 $90 이상). 기름값이 오르면 물가가 오를 수 있어서 주식시장 전체가 약간 떨어졌어요.", "그런데 엔비디아나 테슬라 같은 몇몇 대형 기술주는 오히려 올랐어요 - 이번 하락은 '기술주 자체가 나빠서'가 아니라 '중동 리스크 + 기름값' 때문이라는 뜻이에요."],
        watch: ["이란의 추가 보복 여부 및 확전 조짐", "WTI 유가·10년물 국채금리 추이", "호르무즈 해협 실제 통항 차질(유조선 피격 후속 상황) 여부", "9월 FOMC에서 유가발 인플레이션 우려가 금리 결정에 반영되는지"],
        interpretation: "이번 충돌은 규모·시장 반응 모두 '심각한 확전'보다는 '한 달간 소강상태의 재발'에 가깝다. 다우/S&P 낙폭이 1% 미만으로 제한적이고 워치리스트 핵심종목인 엔비디아·테슬라가 오히려 상승했다는 점에서, 이 사건 자체를 워치리스트 종목에 대한 직접적 매도 신호로 보기는 어렵다. 다만 유가($90+)와 국채금리(4.76%, 2025년 1월 이후 최고) 동반 상승은 인플레이션·금리 경로에 계속 부담을 주는 요인으로 MARKET 뉴스로 계속 추적할 사안이다.",
        decision: "이 사건 자체로 워치리스트 종목 포지션을 조정할 근거는 약하다. 다만 유가·금리가 추가로 오르거나 확전 조짐(추가 공격, 호르무즈 통항 차질 심화)이 나오면 인플레이션/금리 경로 재평가가 필요할 수 있으니 후속 보도를 지켜볼 것.",
        confidence: "타격·보복 사실관계(라라크섬 타격, 요르단 미사일 요격, 유조선 피격)는 NPR·Arab News·France24 등 복수 매체가 교차 확인해 신뢰도가 높음. 시장 지표(지수·유가·금리·개별종목 등락)는 Motley Fool 기사(Xignite/Polygon.io 데이터 기반)로 신뢰도 높음.",
        sources: [
          { title: "U.S. and Iran exchange fire for the first time in a month (NPR)", url: "https://www.npr.org/2026/08/31/nx-s1-5949884/u-s-and-iran-exchange-fire-for-the-first-time-in-a-month" },
          { title: "Stock Market Today, Aug. 31: Stocks Edge Lower as Oil Prices Surge Again (The Motley Fool)", url: "https://www.fool.com/coverage/stock-market-today/2026/08/31/stock-market-today-aug-31-stocks-edge-lower-as-oil-prices-surge-again/" },
          { title: "US, Iran exchange fire in flare-up; Bessent signals more sanctions (Arab News)", url: "https://www.arabnews.com/node/2656366/middle-east" },
        ],
      },
      {
        date: "2026-08-27",
        headline: "엔비디아 Q2(FY27) 실적 컨센서스 상회 - 매출 $962억·EPS $2.22, 3분기 가이던스 $1,080억도 예상 상회 (다만 시간외 주가는 초반 하락 후 반등하는 혼조 반응)",
        importance: "high",
        tone: "positive",
        horizon: "즉시(시간외~다음날 정규장 변동성) 및 향후 1분기(3분기 가이던스 달성 여부)",
        facts: ["엔비디아가 2026-08-26 장마감 후 발표한 2분기(FY27) 매출은 $962억으로 컨센서스($936억)를 웃돌았고, 데이터센터 매출은 $890억(예상 $854억 상회, YoY +117%)을 기록했다.", "비GAAP EPS는 $2.22로 예상($2.09~2.13)을 상회했고, GAAP EPS는 $2.46(YoY +128%)이었다.", "3분기 매출 가이던스로 $1,080억(±2%)을 제시해 월가 예상($1,039억)을 상회했다 - S&P500 기업 중 분기 매출 $1,000억을 넘긴 9번째 기업이 됐다.", "회사는 가이던스에 '중국向 데이터센터 매출을 전혀 반영하지 않았다'고 명시해 수출규제 리스크를 보수적으로 반영했다.", "시간외 주가는 발표 직후 -1.3% 하락했다가, CFO 콜레트 크레스의 컨퍼런스콜 코멘트 이후 반등해 한때 +5%까지 오르는 등 변동성이 컸다."],
        why: ["매출·이익·가이던스 모두 상회한 '비트 앤 레이즈'였음에도 주가가 즉각 강하게 반응하지 않은 것은, 최근 몇 분기 연속 상회에도 주가가 정체된 패턴(Wedbush 분석)이 이어지며 시장이 '이 정도 상회는 이미 눈높이에 반영됐다'고 보고 있다는 신호로 해석된다."],
        beginner: ["엔비디아가 발표한 성적표는 매출·이익·다음 분기 전망까지 전부 시장 예상보다 좋았어요. 그런데 주가는 발표 직후 잠깐 떨어졌다가 다시 오르는 등 왔다갔다했어요. 실적이 나빠서가 아니라, 이미 다들 '엔비디아는 잘할 것'이라고 기대하고 있었던 눈높이가 너무 높아져서, 예상보다 조금 잘한 정도로는 주가가 크게 안 움직이는 상황인 거예요.", "회사는 중국에 파는 매출은 아예 다음 분기 전망에 포함시키지 않았다고 밝혔는데, 이건 중국 수출 규제 리스크를 미리 보수적으로 깔아둔 것으로, 오히려 나중에 중국 매출이 재개되면 추가 상승 여력이 될 수도 있는 부분이에요."],
        interpretation: "실적 자체의 펀더멘털은 훼손되지 않았고 오히려 데이터센터 성장률(+117% YoY)이 견조하다는 점이 확인됐다. 다만 '상회해도 주가가 크게 안 오르는' 최근 패턴이 반복되고 있어, 이번 실적을 다른 반도체·AI인프라 종목(TSM·AVGO·MU·AMD·ARM·MRVL 등)의 동반 매수 신호로 곧바로 해석하기보다는 향후 며칠간의 실제 주가 흐름을 확인하는 게 안전하다.",
        decision: "실적 자체는 긍정적이나 시장 반응이 아직 명확하지 않으므로, 발표 다음날 정규장 마감 후 실제 주가 반응과 관련 종목 동반 흐름을 한 번 더 확인하고 판단할 것.",
        watch: ["다음날 정규장에서 NVDA 실제 종가 반응(시간외 변동성이 정규장까지 이어지는지)", "TSM·AVGO·MU·AMD·ARM·MRVL 등 관련 종목의 동반 반응 여부", "중국向 매출 재개 관련 향후 코멘트(가이던스에 미반영된 업사이드 요인)"],
        confidence: "매출·EPS·가이던스 수치는 회사 SEC 공식 발표(8-K) 기준으로 신뢰도 높음. 시간외 주가 변동폭과 애널리스트 코멘트는 Kiplinger·CoinDesk 등 복수 매체 보도 기준.",
        sources: [
          {title:"NVIDIA Q2 FY2027 Earnings Press Release (SEC 8-K)", url:"https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm"},
          {title:"Nvidia tops earnings estimates, guides to $108 billion in revenue next quarter (CoinDesk)", url:"https://www.coindesk.com/markets/2026/08/26/nvidia-tops-earnings-estimates-guides-to-usd108-billion-in-revenue-next-quarter"},
          {title:"Nvidia Earnings: Live Updates and Commentary August 2026 (Kiplinger)", url:"https://www.kiplinger.com/investing/live/nvidia-earnings-live-updates-and-commentary-august-2026"},
        ],
      },
      {
        date: "2026-08-26",
        headline: "이란전쟁 6개월째, 전세계 원유 생산의 약 43%가 전쟁지대에서 산출 - 구조적 공급 리스크 지속",
        importance: "medium",
        tone: "risk",
        horizon: "장기(전쟁 종식 전까지 구조적 리스크로 지속)",
        facts: ["미국·이스라엘의 이란 공격 개시 6개월째를 맞아, 전쟁지대(이란·중동 분쟁지역)에서 나오는 원유가 전 세계 생산량의 약 43%(하루 약 4,500만 배럴) 수준에 달한다고 로이터가 보도했다. 여기에 우크라이나 전쟁, 리비아 내전, 베네수엘라 수출 제한까지 겹쳐 걸프만 지역에서만 하루 약 500만~700만 배럴의 공급 차질이 발생 중이다."],
        why: ["6개월이 지나도록 전쟁이 끝나지 않고 전 세계 원유 공급의 절반 가까이가 분쟁지역에 몰려있다는 것은 '한 번의 충격'이 아니라 '만성적인 공급 리스크'가 됐다는 뜻이다. 이 상태에서는 작은 확전 뉴스 하나에도 유가가 급등할 수 있는 구조가 계속 유지된다."],
        beginner: ["원유는 전 세계 여러 나라에서 나오는데, 지금은 그중 거의 절반이 '전쟁 중인 지역'에서 나오고 있다는 뜻이에요. 이러면 그 지역에서 뭔가 사고나 확전이 생길 때마다 기름값이 출렁일 위험이 항상 깔려있는 셈이에요. 6개월째 이 상태가 이어진다는 건 위험이 일시적이지 않고 당분간 계속될 수 있다는 신호예요."],
        interpretation: "구조적 공급 리스크가 반년째 해소되지 않고 있다는 것은 유가의 하방 안정성이 낮다는 뜻으로, 인플레이션·금리 경로에 잠재적 부담 요인으로 계속 남아있다.",
        decision: "이 자체로 워치리스트 종목을 사고파는 근거로 쓰지 말고, 유가·인플레이션 지표가 급변할 때 그 배경 중 하나로 참고할 것.",
        watch: ["전쟁 확전·휴전 관련 후속 보도", "걸프만 공급 차질 규모(하루 500~700만 배럴)의 변화 추이"],
        confidence: "원유 공급 차질 규모(43%, 일 500~700만 배럴)는 로이터 등 다수 매체가 교차 확인해 신뢰도가 높음.",
        sources: [
          {title:"Six months into Iran war, almost half of global oil flows from war zones (Reuters/Investing.com)", url:"https://www.investing.com/news/commodities-news/six-months-into-iran-war-almost-half-of-global-oil-flows-from-war-zones-4874470"},
          {title:"Six months into Iran war, almost half of global oil flows from war zones (Yahoo Finance/Reuters)", url:"https://finance.yahoo.com/news/six-months-iran-war-almost-050842411.html"},
        ],
      },
      {
        date: "2026-08-26",
        headline: "이란-오만 호르무즈 해협 재개통 협상 기대에 미 유가 하락세 지속",
        importance: "medium",
        tone: "positive",
        horizon: "수일~수주 (협상 타결 여부에 좌우)",
        facts: ["이란과 오만이 호르무즈 해협(세계 원유 물동량의 약 20% 통과) 재개통을 위한 협상을 막바지 단계로 진행 중이라는 소식에 WTI 유가가 하락세를 이어갔다(8/25~26 로이터·블룸버그 보도). 앞서 트럼프 대통령이 이란 에너지시설 공격을 5일 연기하며 협상이 진전되면 유가가 급락할 수 있다고 언급한 바 있다."],
        why: ["호르무즈 해협은 전 세계 해상 원유 물동량의 약 20%가 지나는 핵심 병목지점이라, 이곳의 긴장 완화 소식은 유가에 즉각적인 하방 압력으로 작용한다. 다만 아직 '협상 진행 중' 단계이지 타결이 아니라는 점에 유의해야 한다."],
        beginner: ["호르무즈 해협은 전 세계 기름을 실은 배들이 지나가는 아주 중요한 좁은 바닷길이에요. 여기가 막힐까봐 걱정될 때는 기름값이 오르고, 반대로 '괜찮아질 것 같다'는 뉴스가 나오면 기름값이 내려가요. 지금은 이란과 오만이 대화를 잘 하고 있다는 소식에 기름값이 내려가는 중이에요."],
        interpretation: "협상 기대만으로도 유가가 하락하고 있다는 것은 시장이 이 리스크에 민감하게 반응하고 있다는 뜻이며, 실제 타결 시 추가 하락, 결렬 시 급반등이 가능한 변동성 국면이다.",
        decision: "협상 결과가 나올 때까지는 유가 방향이 뒤집힐 수 있으니, 이 뉴스 하나로 에너지·인플레이션 관련 포지션을 성급하게 조정하지 말 것.",
        watch: ["이란-오만 협상 실제 타결 여부", "타결/결렬 시 WTI·브렌트유 가격 반응"],
        confidence: "협상 진행 사실과 유가 하락 흐름은 로이터·블룸버그가 교차 확인해 신뢰도가 높음. 최종 타결 여부는 미확정.",
        sources: [
          {title:"Oil Extends Declines as Iran, Oman Push Talks to Reopen Hormuz (Bloomberg)", url:"https://www.bloomberg.com/news/articles/2026-08-25/latest-oil-market-news-and-analysis-for-aug-26"},
        ],
      },
      {
        date: "2026-08-26",
        headline: "CIA 국장 랫클리프, 사전예고 없이 모스크바 전격 방문 - 우크라이나·이란 관련 외교 움직임 추정",
        importance: "low",
        tone: "neutral",
        horizon: "수일~수주 (후속 보도에 좌우)",
        facts: ["CIA 국장 존 랫클리프가 8/25 사전예고 없이 미군 수송기 편으로 모스크바를 방문해 러시아 당국자들과 회동했다(CNN·CBS·Bloomberg 등 확인). 크렘린은 '미국과의 공식 회담'은 부인했고, 우크라이나 평화협상·이란 문제 관련 논의 가능성이 제기됐다. 정확한 의제와 이란·호르무즈 이슈와의 직접 연관성은 보도 시점 기준 추측 단계다."],
        why: ["미국 정보수장급 인사의 이례적인 모스크바 방문은 우크라이나 전쟁이나 중동 정세를 둘러싼 물밑 외교가 진행 중일 가능성을 시사하지만, 아직 공식 확인된 의제가 없어 투자 판단에 바로 연결하기는 이르다."],
        beginner: ["미국의 정보기관 최고 책임자가 예고 없이 러시아를 방문했다는 뉴스예요. 보통 이런 방문은 전쟁이나 외교 문제를 조용히 조율하려는 움직임일 때가 많은데, 정확히 무슨 얘기를 나눴는지는 아직 공개되지 않았어요."],
        interpretation: "이 사건 자체보다는 후속 보도(우크라이나 휴전 협상 진전, 이란 관련 합의 여부)가 나와야 실제 의미를 판단할 수 있는 '신호 대기' 상태의 뉴스다.",
        decision: "확정된 정보가 없는 단계이므로 이 뉴스만으로 시장 전망을 바꾸지 말고 후속 보도를 지켜볼 것.",
        watch: ["우크라이나 휴전·이란 관련 실질 합의 여부에 대한 후속 보도", "크렘린·백악관의 추가 공식 입장"],
        confidence: "방문 사실 자체는 다수 매체가 교차 확인해 신뢰도가 높음. 방문 의제와 다른 지정학 이슈와의 연관성은 추측 단계로 신뢰도가 낮음.",
        sources: [
          {title:"CIA director makes unannounced visit to Moscow to meet with Russian officials, source says (CNN)", url:"https://www.cnn.com/2026/08/25/politics/cia-director-visits-moscow"},
          {title:"Kremlin denies US talks amid reports CIA Director Ratcliffe in Russia (Al Jazeera)", url:"https://www.aljazeera.com/news/2026/8/25/kremlin-denies-planned-talks-with-us-envoys-amid-reports-cia-head-in-russia"},
        ],
      },
      {
        date: "2026-08-26",
        headline: "엔비디아 실적발표(한국시간 8/27 새벽, 장마감 후) - 컨센서스 매출 $936억·EPS $2.13, 워치리스트 전체(QQQ 포함)에 영향 큰 빅이벤트",
        importance: "high",
        tone: "neutral",
        horizon: "실적발표 당일~다음날 시간외·정규장 변동성 (보통 ±5~10%)",
        facts: ["엔비디아가 미국 동부시간 2026-08-26 장마감 후(한국시간 8/27 새벽) 실적을 발표한다. 월가 컨센서스는 매출 약 $936억, EPS 약 $2.13(팩트셋 등 집계 기준)이다. 엔비디아는 QQQ·SPY 시가총액 비중 최상위 종목이자 이 워치리스트의 다른 반도체·AI인프라 종목(TSM·AVGO·MU·AMD·ARM·MRVL 등)의 주가 흐름에도 직접 영향을 주는 '베짓마크' 성격의 실적이라, 컨센서스 대비 결과와 다음 분기 가이던스(특히 데이터센터 매출 성장률, Blackwell/Rubin 램프업 속도, 중국 수출 관련 코멘트)가 AI 반도체 업종 전반의 방향을 좌우할 가능성이 크다."],
        why: ["엔비디아 실적은 개별 종목 이벤트를 넘어 'AI 투자 사이클이 아직 살아있는지'를 시장이 판단하는 기준점 역할을 해왔다. 서프라이즈나 가이던스 실망 어느 쪽이든 이 워치리스트의 반도체·전력인프라 종목 전반이 하루~며칠 동반 변동할 가능성이 있다."],
        beginner: ["엔비디아는 AI 반도체 시장에서 가장 큰 회사라, 이 회사의 실적 발표는 '지금 AI에 대한 투자가 여전히 활발한지'를 보여주는 온도계 같은 역할을 해요. 그래서 엔비디아 실적이 잘 나오면 다른 반도체·AI 관련 주식들도 같이 오르고, 실망스러우면 같이 떨어지는 경우가 많아요. 이번 실적은 한국시간으로 8월 27일 새벽에 나와요."],
        interpretation: "컨센서스(매출 $936억, EPS $2.13) 자체가 이미 고성장을 전제로 한 눈높이라, 이를 상회하는지보다 '다음 분기 가이던스'와 '데이터센터 부문 성장률 둔화 여부'가 더 중요한 관전 포인트다.",
        decision: "실적 발표 직전·직후는 변동성이 크므로, 이 시점에 워치리스트 반도체 종목을 신규로 크게 늘리기보다는 결과와 가이던스를 확인한 뒤 판단하는 게 안전하다.",
        watch: ["데이터센터 매출 성장률(YoY·QoQ)과 다음 분기 가이던스", "Blackwell/Rubin 램프업 속도 및 중국 수출 규제 관련 코멘트", "실적 발표 후 TSM·AVGO·MU·AMD·ARM·MRVL 등 관련 종목의 동반 반응"],
        confidence: "실적 발표 일정(8/26 장마감 후)과 컨센서스 수치는 회사·데이터 제공사 기준으로 신뢰도가 높음. 실제 발표 결과와 시장 반응은 발표 전이라 아직 알 수 없음.",
        sources: [
          {title:"Wall Street Lunch: OpenAI's Jalapeño Tops Nvidia's Blackwell In Some Inference Tests (SeekingAlpha)", url:"https://seekingalpha.com/article/4940069-wall-street-lunch-openais-jalapeo-tops-nvidias-blackwell-in-some-inference-tests"},
        ],
      },
      {
        date: "2026-08-25",
        headline: "OpenAI 자체 설계 AI칩 '할라페뇨(Jalapeño)'(브로드컴과 공동개발), 일부 추론 벤치마크에서 엔비디아 블랙웰 능가 - SemiAnalysis 보고서",
        importance: "high",
        tone: "risk",
        horizon: "중장기(엔비디아의 AI 추론칩 독점적 지위에 대한 경쟁 구도 변화, 수 분기~수년)",
        facts: ["OpenAI가 브로드컴(AVGO)과 공동설계한 첫 자체 AI 추론칩 '할라페뇨(Jalapeño)'가 2026-06-24 처음 공개됐고(10기가와트 규모 배치 계획 발표), 2026-08-25 SemiAnalysis·TechCrunch 등의 벤치마크 분석에서 일부 추론(inference) 작업에서 엔비디아 블랙웰(Blackwell)과 루빈(Rubin)을 능가하는 성능을 보였다고 보도됐다. OpenAI는 이 칩을 자사 서비스(ChatGPT 등)의 추론 비용 절감을 위해 자체 데이터센터에 투입할 계획이며, 브로드컴은 설계·생산 파트너로서 커스텀 AI 반도체 사업에서 존재감을 키우고 있다."],
        why: ["엔비디아의 AI 반도체 지배력은 '범용 GPU 1강 체제'에 크게 의존해왔는데, OpenAI 같은 최대 고객이 자체 칩(그것도 일부 벤치마크에서 앞서는)을 갖게 되면 장기적으로 엔비디아향 수요 성장률이 예상보다 둔화될 위험이 생긴다. 반대로 브로드컴은 커스텀 AI 실리콘(XPU) 사업의 대표 사례를 하나 더 확보해 마벨(MRVL)과 함께 '엔비디아 대안' 진영의 핵심 수혜주로 부각된다."],
        beginner: ["지금까지 AI 서버용 칩은 거의 다 엔비디아 제품을 썼는데, ChatGPT를 만든 OpenAI가 브로드컴과 손잡고 자기들만의 전용 칩을 만들었어요. 그리고 일부 테스트에서는 이 칩이 엔비디아의 최신 칩보다 더 빠르다는 결과가 나왔어요. 이게 왜 중요하냐면, OpenAI는 엔비디아의 제일 큰 고객 중 하나인데 이 고객이 '이제 우리 칩도 쓸게'라고 하는 거라서, 장기적으로 엔비디아의 시장 지배력에 균열이 생길 수 있다는 신호로 해석될 수 있어요."],
        interpretation: "'일부 추론 벤치마크'라는 단서가 중요하다 - 전체 워크로드(학습·추론 전반)에서 엔비디아를 대체한다는 뜻은 아니고, 특정 추론 작업에 최적화된 커스텀 칩이 그 영역에서 앞섰다는 의미다. 다만 최대 AI 기업이 자체 칩 전략을 실제 성능으로 증명하기 시작했다는 점은 엔비디아의 '해자'가 예전만큼 견고하지 않을 수 있다는 방향의 신호다.",
        decision: "엔비디아 하루아침에 대체된다는 식의 과잉해석은 경계하되, 커스텀 AI 실리콘(브로드컴·마벨) 진영의 경쟁력이 실제 성능으로 입증되고 있다는 흐름 자체는 이 워치리스트의 AVGO·MRVL 비중 판단에 긍정적 참고사항으로 볼 것.",
        watch: ["OpenAI의 할라페뇨(Jalapeño) 실제 배치 규모·일정(10GW 계획의 진행 상황)", "엔비디아의 다음 실적 콜에서 커스텀 실리콘 경쟁에 대한 코멘트", "다른 빅테크(구글·아마존·메타)의 자체 칩 전략과의 비교"],
        confidence: "OpenAI-브로드컴 협업 발표(6/24)와 할라페뇨(Jalapeño) 공개 사실은 양사 공식 보도자료로 확인되어 신뢰도가 높음. '블랙웰을 능가'라는 벤치마크 결과는 SemiAnalysis라는 평판 있는 반도체 리서치사의 분석이지만 제3자의 특정 워크로드 테스트 결과이므로 '전반적 우위'로 일반화하지 않도록 주의할 것.",
        sources: [
          {title:"OpenAI's Jalapeño chip is built for fast inference at scale, benchmarks show (TechCrunch)", url:"https://techcrunch.com/2026/08/25/openais-jalapeno-chip-is-built-for-fast-inference-at-scale-benchmarks-show/"},
          {title:"OpenAI Jalapeño: Better Than Nvidia Blackwell (SemiAnalysis)", url:"https://newsletter.semianalysis.com/p/openai-jalapeno-better-than-nvidia"},
          {title:"OpenAI and Broadcom announce strategic collaboration to deploy 10 gigawatts of OpenAI-designed AI accelerators (Broadcom Investor Relations)", url:"https://investors.broadcom.com/news-releases/news-release-details/openai-and-broadcom-announce-strategic-collaboration-deploy-10"},
          {title:"OpenAI and Broadcom reveal Jalapeno, first AI chip in partnership (CNBC)", url:"https://www.cnbc.com/2026/06/24/openai-and-broadcom-reveal-jalapeno-first-ai-chip-in-partnership.html"},
        ],
      },
    ],
  },
  QCOM: {
    newsLog: [
      {
        date: "2026-09-02",
        headline: "Qualcomm, AI 칩 설계사 Tenstorrent 인수 협상 진행 중 - $8~10B 규모 (RISC-V 데이터센터 전략 강화)",
        tone: "positive",
        importance: "high",
        horizon: "중기(데이터센터 사업 다각화 신호, 반도체 경쟁 구도 변화, 1~2년 통합)",
        facts: ["Qualcomm이 AI 칩 설계 스타트업 Tenstorrent를 인수하는 것을 검토 중이며, 거래 규모는 $8~10B 범위로 예상된다고 The Information·Reuters 등이 2026-09-02 근처에 보도했다.", "협상은 진행 중(advanced talks)이나, 양사 모두 아직 공식 확인 없음. Tenstorrent는 '코멘트 없음' 입장이고, Qualcomm은 '루머에 코멘트하지 않는다'고 했다.", "Tenstorrent는 2016년 설립되었으며, Mobileye 창업자 Amnon Shashua의 지분 참여로 알려져 있다.", "Tenstorrent의 주요 기술은 RISC-V 기반 확장성 높은 AI 가속기 설계로, 엔비디아 GPU 중심의 시장에서 '오픈 표준' 대안을 제공한다.", "협상 이전에 Qualcomm은 Investor Day(2026-06-24)에서 데이터센터 CPU 'Dragonfly C1000'을 공개했으며, Meta가 2028년 양산 시 사용하기로 계약했다."],
        why: ["Qualcomm의 핵심 고객이었던 Apple이 자체 모뎀(C1 시리즈)으로 전환 중인 상황에서, QCOM은 매출 대체 사업으로 '자동차'와 '데이터센터'에 투자하고 있다. 이 인수는 그 데이터센터 전략의 가속화를 의미한다.", "Tenstorrent의 RISC-V 기술 인수를 통해 Qualcomm은 엔비디아 중심의 CUDA 생태계를 우회할 수 있는 기술 자산을 획득한다. 즉, '엔비디아 종속 회피'라는 전략적 가치가 크다.", "$8~10B 규모는 Qualcomm이 이 인수를 '미래 성장 동력' 수준으로 평가한다는 뜻이며, 단순 기술 추가가 아니라 'AI 데이터센터 시장 진출'의 신호다.", "시장 측면에서, Tenstorrent 인수는 '엔비디아 이외의 AI 칩 대안'을 찾는 Big Tech와 엔터프라이즈의 수요를 반영한다. 앞서 OpenAI-Broadcom 협업, Google TPU, Amazon Trainium 등이 모두 '엔비디아 의존도 감소' 전략을 펼쳤기 때문이다."],
        beginner: ["Qualcomm은 원래 휴대폰용 칩(모뎀)을 주로 만드는 회사였는데, 최근 애플이 자기 칩을 써서 주문이 줄고 있어요.", "그래서 새로운 사업을 찾고 있는데, '자동차', '데이터센터' 이 두 군데에 집중하고 있어요.", "이번 인수는 'Tenstorrent'라는 회사를 매수해서 'AI를 돌리는 칩 설계' 기술을 빨리 확보하려는 거예요.", "왜냐하면 엔비디아 칩이 너무 비싸고 구하기도 어려워서, 다른 좋은 AI 칩을 찾는 고객(Meta, Google 등)들이 많아졌기 때문이에요.", "돈은 8~10조 정도(약 $8~10B) 들 것으로 예상되는데, Qualcomm이 이 정도 큰 돈을 들인다는 건 '이 사업이 정말 중요하다'는 신호예요."],
        watch: ["Qualcomm의 실제 인수 계약 체결 일정 및 규제 승인 여부", "Tenstorrent 기술의 엔비디아 대비 성능·가격 경쟁력 (실제 벤치마크 공개 여부)", "Meta의 Dragonfly C1000 사용 계획 실현 여부 (2028년 양산 시작 관련)", "AMD, Broadcom 등 다른 반도체사의 유사 AI 칩 진출 경쟁 추이", "Qualcomm의 다음 분기(Q4 FY27) 실적 콜에서 데이터센터 사업 진행 현황·가이던스"],
        interpretation: "이 인수는 Qualcomm의 '사업 구조 전환'을 나타낸다. Apple 의존도 감소(향후 최대 50% 축소)를 데이터센터·자동차 성장으로 메우겠다는 전략이 구체화되는 모습이다. RISC-V 기반 Tenstorrent 인수를 통해 Qualcomm은 (1) 엔비디아 CUDA 생태계 탈출 경로 확보, (2) Meta·Amazon 등 Big Tech 고객 확보 가능성, (3) 향후 2~3년 내 AI 데이터센터 시장 진입 기반 마련을 노린다. 다만 아직 초기 단계(협상 단계)이고 기술 통합·시장 진출까지는 시간이 필요하므로, 실제 수익화까지는 1~2년 이상 걸릴 것으로 예상된다.",
        decision: "이 인수는 QCOM의 중기 전략 신호로 긍정적이나, 아직 '협상 단계'이고 실제 매출 기여까지는 시간이 필요하다. QCOM 자체가 Apple 매출 손실을 빨리 메워야 하는 상황에서, 이 인수가 단기 실적을 개선할 가능성은 낮다. 따라서 지금은 '향후 성장성 확인' 수준으로만 기록하고, 계약 체결·기술 공개 이후 실제 평가 여부를 재판단하는 것이 안전.",
        confidence: "인수 협상 진행과 예상 규모($8~10B)는 The Information 등 신뢰도 높은 정보사가 보도했으나, 양사 공식 발표가 없어 최종 여부·조건은 미확정. 협상이 결렬될 가능성도 존재함(신뢰도 70% 정도).",
        sources: [
          { title: "Qualcomm in talks to acquire AI chipmaker Tenstorrent, The Information reports (Reuters/TradingView)", url: "https://www.tradingview.com/news/reuters.com,2026:newsml_L4N42N1X5:0-qualcomm-in-talks-to-buy-tenstorrent-the-information-reports/" },
          { title: "Qualcomm Is Reportedly Chasing Tenstorrent In A Multibillion (Simply Wall St)", url: "https://simplywall.st/stocks/us/semiconductors/nasdaq-qcom/qualcomm/news/qualcomm-qcom-is-reportedly-chasing-tenstorrent-in-a-multibi" },
          { title: "Qualcomm in talks to buy Tenstorrent to expand AI chip capabilities (The Information)", url: "https://www.theinformation.com/articles/qualcomm-talks-buy-tenstorrent-expand-ai-chip-capabilities" },
          { title: "Qualcomm considering acquiring AI chipmaker Tenstorrent for up to $10 billion (Yahoo Finance)", url: "https://finance.yahoo.com/technology/ai/articles/qualcomm-talks-acquire-ai-chip-230401789.html" },
        ],
      },
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 자동차·AI 데이터센터 성장 vs 휴대폰(Apple) 매출 축소 - 상반된 신호 공존",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-07-29 3분기(FY26) 매출 99.5억 달러로 예상을 상회했으나 주가는 하락했다.", "자동차 부문 매출이 61% 급증(사상 최대)했고, AI 데이터센터 진출 목표($15B)를 언급했다.", "반면 휴대폰 부문 매출은 20% 감소했고, 다음 분기 Apple向 매출을 최대 50% 축소한다는 전망이 나왔다.", "매출 가이던스는 상회했지만 EPS 가이던스는 일부 하향됐다."],
        why: ["신성장동력(자동차·AI)이 핵심 고객(Apple) 이탈분을 상쇄할 수 있을지가 향후 방향을 결정하는데, 아직 그 속도가 확인되지 않았다."],
        beginner: ["새로 크는 사업(자동차·AI)은 잘되고 있는데, 원래 제일 큰 손님이었던 애플이 자기 부품을 직접 만들면서 주문을 줄이고 있어요. 새 사업이 이 손실을 얼마나 빨리 메꿀 수 있는지가 관건이에요."],
        interpretation: "사업 다각화 자체는 실제 매출로 증명되고 있어 완전한 우려는 아니지만, 핵심 고객 이탈 속도가 예상보다 빠르다는 점은 낙폭과다를 일부 정당화하는 요인이다.",
        decision: "자동차·AI데이터센터 매출 증가 속도가 애플向 매출 감소 속도를 웃도는지가 다음 분기 확인 포인트.",
        watch: ["다음 분기 자동차·데이터센터 매출 성장률", "Apple向 매출 실제 감소폭"],
        confidence: "실적 수치는 회사 공식 발표 기준으로 신뢰도 높음. Apple 매출 전망은 회사 가이던스 기반 추정.",
        directionCheck: true,
        sources: [
        {title:"Earnings call transcript: Qualcomm Q3 2026 beats revenue but shares slide (Investing.com)", url:"https://www.investing.com/news/transcripts/earnings-call-transcript-qualcomm-q3-2026-beats-revenue-but-shares-slide-93CH-4821887"},
        {title:"Qualcomm Q3 2026 Earnings: Automotive Surges 61% While Phone Business Drops 20% (KuCoin)", url:"https://www.kucoin.com/blog/qualcomm-q3-2026-earnings"},
        {title:"Qualcomm to Slash Apple Revenue by 50% Next Quarter, Pivots to $15B Data Center Goal (BigGo Finance)", url:"https://finance.biggo.com/news/US_QCOM_2026-07-29"},
        ],
      },
    ],
    updated: "2026-08-10",
    customers: [
      "모바일: 삼성전자·애플(5G 모뎀, 2026년까지는 공급 지속)·샤오미 등 안드로이드 진영 대부분에 공급 중",
      "자동차(급성장 중): 폭스바겐·토요타·현대모비스·BMW(디지털 콕핏)·리오토·니오 등에 '디지털 섀시' 공급 - 2026 회계연도 2분기 자동차 매출이 전년비 +38%로 사상 최대($13.3억), 연간 60억달러 이상 전망",
      "AI 데이터센터(신규 진출): 데이터센터용 CPU 'Dragonfly C1000' 공개, 메타(Meta)가 2028년 양산 시작 시 사용하기로 계약 - 아직 매출은 발생 전 단계",
    ],
    strengths: [
      "통신 표준 특허 라이선싱(QTL) 기반 로열티 수익 - 칩 판매량과 별개로 안정적인 수익 구조",
      "저전력·고효율 모바일 칩 설계 역량이 시장에서 검증됨",
      "자동차·AI 데이터센터로 사업 다각화가 실제 매출(자동차)과 계약(데이터센터) 양쪽에서 진행 중",
    ],
    risks: [
      "⚠️ 최대 고객이었던 애플이 자체 모뎀(C1 시리즈)으로 전환 중 - 2026년 8월 3분기 실적발표에서 CEO가 '애플向 매출 감소 속도가 예상보다 빠르다'고 직접 언급함. 이미 아이폰16e·아이폰 에어 등 일부 기기는 애플 자체 모뎀으로 전환됨",
      "라이선싱 로열티는 고객·규제당국과의 소송·요율 협상 리스크가 상존함",
      "AI 데이터센터 사업(메타향)은 2028년부터 매출이 잡히는 계약 단계라, 지금 당장 실적에 기여하는 사업은 아님",
    ],
    sources: [
      {title:"Qualcomm rolls out AI data center CPU, signs Meta as major customer (CNBC, 2026-06-24)", url:"https://www.cnbc.com/2026/06/24/qualcomm-data-center-cpu-meta.html"},
      {title:"Qualcomm Inc (QCOM) Q2 2026 Earnings Call Highlights: Record Automotive Revenues (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/qualcomm-inc-qcom-q2-2026-071706074.html"},
      {title:"Qualcomm earnings call suggests Apple will again extend 5G modem license, to 2027 (Tom's Hardware)", url:"https://www.tomshardware.com/tech-industry/manufacturing/qualcomm-earnings-call-suggests-apple-will-again-extend-5g-modem-license-to-2027"},
      {title:"Qualcomm Now Relies on Android as Apple Modems Roll Out (MacRumors, 2025-11-06)", url:"https://www.macrumors.com/2025/11/06/qualcomm-now-relies-on-android/"},
    ],
    analystLog: [
      {
        date: "2026-08-10",
        period: "2025-09-28 마감 분기(회사 발표 기준 FY25 4분기) · 2026-03-29 마감 분기(FY26 2분기), 순이익이 두 번 다 크게 왜곡됨",
        headline: "매출은 두 분기 다 견조했는데 순이익만 극과 극: 2025-09-28 분기는 매출 $11.27B(예상 상회)인데 순이익 -$3.12B(적자) · 2026-03-29 분기는 매출 $10.60B에 순이익 $7.37B(마진 69.5%, 평소의 2.5배 이상).",
        oneTime: "둘 다 세금(법인세) 관련 일회성 항목이 원인 - 영업이 나빠지거나 좋아진 게 아님. ①2025-09-28 분기 적자는 일회성 법인세 '비용' 때문 - 조정(비GAAP) EPS는 오히려 예상 상회($3.00 vs $2.88 예상), 매출도 예상($10.79B) 상회. ②2026-03-29 분기의 순이익 급증은 $5.7B(주당 $5.33) 규모의 일회성 법인세 '환입' 때문 - 2025년 발효된 미국 세제개편법(OBBB Act)으로 R&D 비용 처리 방식이 바뀌면서, 쌓아뒀던 세금 충당금을 되돌린 회계상 이벤트.",
        coreRead: "본업 관점에서는 두 분기 다 정상~견조했음(매출 예상 상회, 자동차 매출은 오히려 사상 최대). 순이익만 세무 이벤트로 크게 출렁인 것 - '실적이 안 좋아졌다/좋아졌다'로 읽으면 완전히 틀린 해석.",
        forecast: "2026년 8월 발표 예정 분기(2026-06-28 마감)부터는 이런 대형 일회성 세금 항목이 없을 가능성이 높아서, 순이익이 다시 매출의 20%대 초반 수준(평소 수준)으로 '정상화'되어 보일 텐데 이건 실적 악화가 아니라 기저효과임. 매출 방향성의 핵심은 자동차(전년비 +38%, 사상 최대 행진 중)가 애플向 모뎀 이탈분(CEO가 예상보다 빠르다고 언급)을 얼마나 상쇄하느냐 - 자동차 성장 속도가 애플 감소 속도를 웃돌면 전체 매출은 계속 성장, 역전되면 정체 가능. 이건 예측이라 틀릴 수 있음.",
        confidence: "일회성 세금 항목의 존재와 규모는 회사 발표·언론 보도 기준(신뢰도 높음) · 다음 분기 매출 방향 예측은 추정(신뢰도 중간)",
        sources: [
          {title:"Qualcomm (QCOM) Q4 2025 earnings report - net loss from one-time tax expense (CNBC)", url:"https://www.cnbc.com/2025/11/05/qualcomm-qcom-q4-2025-earnings-report.html"},
          {title:"Qualcomm Announces Second Quarter Fiscal 2026 Results - $5.7B tax benefit (Qualcomm IR, SEC)", url:"https://www.sec.gov/Archives/edgar/data/804328/000080432826000060/qcom032926erex991.htm"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(4/5점, 강한 매수기회 밴드) - 밸류에이션은 싸졌지만 애플 이탈이 실제로 매출 역성장에 반영되고 있는 유일한 '진짜 둔화' 케이스",
        view: "QCOM은 눌림목 점수 4/5점(52주 고점대비 -34.0%, 200일선 부근)으로 가장 높은 밴드에 있어요. 다만 이 종목은 이 워치리스트에서 재무방향 판정이 '매출·수익성 동반 둔화'로 나온 유일한 종목이에요 - Q2'26 매출이 전년 대비 -4.0%로 실제 역성장했고 영업이익률도 -10.3%p 눌렸어요. 이건 이미 파악된 리스크(애플이 자체 모뎀 C1 시리즈로 전환 중이고, 8월 실적발표에서 CEO가 '애플向 매출 감소 속도가 예상보다 빠르다'고 직접 언급)가 실제 숫자로 나타나는 중이라고 봐요. 다만 자동차(2분기 자동차 매출 +38%로 사상 최대)와 AI 데이터센터(메타향 2028년부터 매출 발생 예정 계약) 쪽 다각화가 실제 매출(자동차)과 계약(데이터센터) 양쪽에서 진행 중이라 완전히 어두운 그림은 아니에요. PER(15.8배)이 3년 평균(22.6배)보다 낮아서 밸류에이션은 싸 보이지만, 매출이 실제로 역성장하는 종목이라 '싸다'는 이유만으로 접근하기보다는 자동차·데이터센터 다각화가 모바일 감소분을 상쇄하는 시점을 확인하는 게 중요해요. 컨센서스는 내년 매출 +4%·EPS -3%로 완만한 정체를 예상해요.",
        increaseIf: [
          "자동차·AI데이터센터 매출이 모바일(애플向) 감소분을 상쇄할 만큼 커지는 게 숫자로 확인될 때",
          "모바일 매출 역성장 폭이 둔화되거나 안정화될 때",
          "가격이 더 눌려도 자동차·데이터센터 성장 스토리가 유지될 때",
        ],
        wrongIf: [
          "자동차·데이터센터 매출 성장이 기대만큼 빠르지 않아 전체 매출 역성장이 계속되거나 심화될 때",
          "애플向 매출 감소 속도가 더 빨라진다는 신호가 추가로 나올 때",
        ],
        watchNext: [
          "다음 분기 모바일 vs 자동차 매출 비중 변화",
          "메타향 데이터센터 CPU 계약의 구체적 진행 상황",
          "안드로이드 진영(삼성 등) 수요 변화",
        ],
        confidence: "매출·영업이익률 수치는 SEC 공시 기반 캐시 데이터 · 애플 이탈 관련 CEO 발언·자동차 매출 성장은 이전 조사에서 확인(analystLog·businessNotes 참고, 신뢰도 높음) · '자동차·데이터센터가 상쇄할 수 있을지'는 아직 확인 안 된 미래 시나리오라 Claude의 정성적 판단",
        sources: [],
      },
    ],
    role: {
      tags: ["모바일 5G 모뎀·SoC", "통신특허 라이선싱(QTL)", "자동차 디지털 콕핏", "AI 데이터센터 CPU(신규)"],
      stars: 3,
      note: "스마트폰 SoC·모뎀 시장의 오랜 강자로 삼성·샤오미 등 안드로이드 진영 대부분에 공급하지만, 최대 고객이었던 애플이 자체 모뎀(C1 시리즈)으로 빠르게 이탈 중이라 CEO도 '예상보다 빠르다'고 인정했어요. 대신 자동차(디지털 콕핏) 매출이 사상 최대 행진 중(전년비 +38%)이고 AI 데이터센터용 CPU도 메타와 계약했지만 2028년부터나 매출이 잡히는 초기 단계라, 지금은 모바일 지배력이 약해지는 걸 다른 사업이 온전히 못 메우는 전환기예요.",
    },
  },
  NVDA: {
    updated: "2026-08-20",
    customers: [
      "매출의 약 90%가 데이터센터(AI 가속기)에서 발생하며, 소수 대형 클라우드 업체(하이퍼스케일러)에 집중 - 2026년 공시 기준 상위 4개 고객사가 전체 매출의 61%를 차지",
      "다만 고객 다각화도 진행 중: 상위 5개 하이퍼스케일러 이외 고객 비중이 약 40%까지 확대됐고, 국가 단위 AI 인프라 프로젝트('소버린 AI')향 매출만 2026 회계연도 300억달러 이상",
    ],
    strengths: [
      "AI 가속기(GPU) 시장에서 사실상 독점적 지위",
      "CUDA 소프트웨어 생태계가 강력한 진입장벽 - 경쟁사가 하드웨어를 따라와도 소프트웨어 생태계 대체가 어려움",
      "하이퍼스케일러 의존도를 낮추려는 고객 다각화(소버린 AI 등)가 실제 매출로 나타나는 중",
    ],
    risks: [
      "⚠️ 고객 집중 리스크 - 소수 대형 고객사의 설비투자(capex) 계획이 조금만 바뀌어도 매출에 큰 영향",
      "⚠️ 중국 수출규제로 타격이 실제로 발생함 - CEO가 '중국 내 점유율이 사실상 0으로 떨어졌다'고 직접 인정(2026년), H20 재고 관련 45억달러 손실 인식. 작년 약 200억달러였던 중국 매출이 올해 1분기 약 45억달러로 급감",
      "AI 인프라 투자 사이클이 꺾이면 밸류에이션 부담이 큰 구조(고성장 기대가 주가에 많이 반영돼 있음)",
    ],
    sources: [
      {title:"Nvidia Faces Customer Concentration Risk Amid AI Boom (Intellectia)", url:"https://intellectia.ai/news/stock/nvidia-faces-customer-concentration-risk-amid-ai-boom"},
      {title:"NVIDIA Customer Concentration: A Big 4 Earnings Preview (Daloopa)", url:"https://daloopa.com/blog/analyst-pov/nvidia-customer-concentration-a-big-4-earnings-preview"},
      {title:"Jensen Huang Admitted Nvidia's China Revenue Has Fallen to Zero (The Motley Fool, 2026-06-26)", url:"https://www.fool.com/investing/2026/06/26/jensen-huangs-nvidias-china-zero-20-billion-plan/"},
      {title:"NVIDIA Q1 FY 2026 Revenue Jumps 69% Despite China Export Setback (Futurum Group)", url:"https://futurumgroup.com/insights/nvidia-q1-fy-2026-revenue-jumps-69-despite-china-export-setback/"},
    ],
    newsLog: [
      {
        date: "2026-09-03",
        headline: "NVIDIA, AI 모델 플랫폼 Hugging Face 인수 발표 - $12.9B 역사상 2번째 대형 M&A",
        facts: ["NVIDIA가 2026-09-03 AI 모델·데이터셋 호스팅 플랫폼 Hugging Face를 $12.93B에 인수하기로 발표했다(투자자 지분 $11.9B + 직원유지금 최대 $1B)", "Hugging Face는 300만 개 AI 모델, 100만 개 애플리케이션, 50만 개 데이터셋을 호스팅하며 1,800만 개발자와 20만 기업이 이용 중", "NVIDIA는 인수 후 'Hugging Face의 독립성·공개성·컴퓨팅 중립성을 유지'하겠다고 명시했고, 창립팀도 계속 경영에 참여하기로 함", "거래는 2027년 상반기 완료 예상(규제 승인 조건 충족 시)", "이는 NVIDIA 역사상 2번째 큰 인수로, 2024년 12월 Groq 자산 $20B 인수에 이은 것"],
        why: ["NVIDIA의 'AI 칩→클라우드 인프라→소프트웨어/모델' 수직통합 전략의 핵심 단계다. 기존에 칩과 인프라 제공에 머물렀다면 이제 최종 사용자인 AI 개발자들이 쓰는 플랫폼까지 확보하려는 움직임으로, 에코시스템 영향력을 급진적으로 높이는 것이다.", "Hugging Face는 'AI 모델의 GitHub'로 불리며, 전 세계 AI 개발자 커뮤니티의 중심이다. 1,800만 개발자의 모델 개발·배포를 NVIDIA의 생태계 안으로 끌어들일 수 있다는 뜻이다.", "$12.9B라는 규모는 '현금 지출'이 아니라 '장기 전략 투자'의 신호로, NVIDIA 경영진이 생성형 AI 시장의 지속적 성장을 얼마나 강하게 확신하고 있는지 드러낸다.", "기존 독립 플랫폼 유지 약속은 표면적 안심용이고, 실제로는 NVIDIA의 칩·플랫폼과 Hugging Face의 모델 커뮤니티가 점진적으로 통합되며, 경쟁사(AMD, Intel 등) 칩 지원이 점차 약화될 가능성이 높다."],
        beginner: ["AI 모델을 만드는 사람들이 모여서 모델을 공유하고 협력하는 '커뮤니티 센터' 같은 곳이 Hugging Face예요.", "NVIDIA는 AI 칩을 만드는 회사인데, 이제 '칩뿐 아니라 개발자들이 실제로 쓰는 플랫폼까지 자기들 소유로 만들려고' 하는 움직임이에요.", "쉽게 말해, 자동차 회사가 단순히 엔진만 팔다가, 나중에 주유소와 자동차 공유 앱까지 사는 것 같은 거죠. 그러면 고객들을 더 강하게 묶을 수 있어요.", "지금은 '다양한 칩(NVIDIA, AMD 등)과 호환되는 중립적 플랫폼이라고 약속'했지만, 시간이 지나면서 NVIDIA 칩에 최적화된 쪽으로 변할 가능성이 높아요."],
        watch: ["규제 승인 진행 상황 및 완료 예상 시기", "인수 후 Hugging Face 플랫폼 정책 변화 (경쟁사 칩 지원 정책, 모델 배포 조건 등)", "1,800만 개발자 커뮤니티가 실제로 NVIDIA 칩·플랫폼으로 강하게 귀속되는 추이", "Meta/Google/OpenAI 등 경쟁 AI기업들의 대응 (독자 모델 플랫폼 강화 등)", "다른 칩 회사(AMD 등)의 Hugging Face 이탈·우회 플랫폼 구축 여부"],
        interpretation: "이번 인수는 단순한 '플랫폼 사업 확장'이 아니라 NVIDIA의 장기 전략 신호다. AI 생태계에서 칩→인프라→소프트웨어→개발자커뮤니티까지 모든 레이어를 장악하려는 움직임으로, Microsoft-OpenAI 수직통합, Google-자체칩 전략과 유사한 맥락이다. 지금은 '독립성 유지' 약속을 했지만, 시간이 지나면서 NVIDIA 칩에 최적화되는 방향으로 진화할 가능성이 높다. 워치리스트의 반도체·AI 인프라 종목(NVDA 자체, AVGO/AMD/ARM/MRVL 등 경쟁사)에 영향을 미칠 수 있는 구조적 신호다.",
        decision: "이 인수 자체로 NVDA를 당장 매수할 근거는 아니지만, NVDA의 '시장 지배력 강화' 신호로 기록. 단기적으로는 AVGO·AMD·ARM·MRVL 등 경쟁사의 오피니언 리스크(Hugging Face 접근성 약화 우려)로 작용할 수 있으니 주시할 것.",
        confidence: "인수 발표 사실과 규모($12.93B)는 TechCrunch·CNBC·Bloomberg 등 신뢰도 높은 매체가 교차 확인했고, NVIDIA 공식 발표 기반이라 신뢰도 높음. 규제 승인은 미진행 단계라 불확실성 있음.",
        sources: [
          { title: "Nvidia confirms it will buy Hugging Face for $12.9 billion (TechCrunch)", url: "https://techcrunch.com/2026/09/03/nvidia-confirms-it-will-buy-hugging-face-for-12-9-billion/" },
          { title: "Nvidia Pays $12.9 Billion to Buy and Expand Hugging Face (PYMNTS)", url: "https://www.pymnts.com/news/artificial-intelligence/2026/nvidia-pays-13-billion-dollars-buy-expand-hugging-face" },
          { title: "Nvidia agrees to buy Hugging Face for $12.9 billion - Quartz", url: "https://qz.com/nvidia-hugging-face-acquisition-12-billion-082726" },
          { title: "Nvidia Confirms $12.9B Hugging Face Deal as Huang Lauds 'Growth' (Benzinga)", url: "https://www.benzinga.com/markets/prediction-markets/26/09/61610151/nvidia-confirms-12-9b-hugging-face-deal" },
        ],
      },
      {
        date: "2026-09-02",
        headline: "NVIDIA, 오픈소스 AI 플랫폼 Hugging Face를 $12.9~14B에 인수 예정 - 이번 주 서명 목표 (1B 직원 유지 패키지 포함)",
        tone: "positive",
        importance: "high",
        horizon: "중장기(AI 생태계 통합, 데이터센터+소프트웨어 수직통합 신호, 향후 1~2년 통합 효과)",
        facts: ["NVIDIA가 오픈소스 AI 모델 저장소 Hugging Face를 인수하기로 합의했으며, 규모는 $12.9B 또는 $14B(Bloomberg)로 보도되고 있다.", "NVIDIA 역사상 최대 규모 인수합병(M&A) 중 하나가 될 전망이며, 합의 체결은 2026년 9월 초 이번 주가 목표다.", "계약에는 Hugging Face 직원 유지를 위해 약 $1B의 인센티브 패키지(리텐션 보너스)가 포함될 것으로 예상된다.", "Hugging Face는 사용자 60만 명 이상, 모델 60만 개 이상을 보유한 AI 커뮤니티로, 기업 및 개발자들이 오픈소스 AI 모델을 공유·활용하는 핵심 플랫폼이다.", "NVIDIA와 Hugging Face는 아직 공식 발표를 하지 않았으며, 보도는 주로 The Information·Bloomberg 등 정보사 기반이다."],
        why: ["NVIDIA가 지금까지 '칩 설계·제조'에 집중했다면, 이 인수는 NVIDIA가 'AI 소프트웨어 스택 전체'로 사업을 확장하려는 전략 신호다. 즉 '칩만 팔기'에서 '칩+소프트웨어+개발자 커뮤니티'의 일원화 방향으로 나아가는 것이다.", "Hugging Face의 60만+ 모델과 60만+ 사용자 커뮤니티는 NVIDIA GPU 생태계에 '잠금 효과(lock-in effect)'를 강화하는 자산이다. 더 많은 개발자가 Hugging Face를 통해 NVIDIA GPU에 최적화된 모델을 배포하게 되고, 이는 NVIDIA 칩 수요를 장기적으로 견고히 한다.", "$12.9~14B라는 규모가 큰 이유는, NVIDIA가 이 인수를 통해 'AI 표준 플랫폼'의 패권을 선점하려는 의도를 보여주기 때문이다. OpenAI가 ChatGPT 앱스토어 전략을 추진했듯이, NVIDIA도 이제 'NVIDIA 칩 기반 AI 모델 마켓플레이스' 구축을 목표로 하는 것으로 해석된다.", "시장 측면에서, NVIDIA의 인수 발표는 NVIDIA의 '성장 경로 재확인' 신호로도 작용할 수 있다. 최근 AI 반도체 성장률 둔화 우려 속에서, NVIDIA가 소프트웨어·플랫폼 수익화로 '칩 의존도 분산'을 시도한다는 메시지를 전달한다."],
        beginner: ["NVIDIA는 지금까지 AI를 돌리는 '컴퓨터 칩'을 만들어 팔았어요.", "Hugging Face는 '사람들이 AI 모델을 만들고 공유하고 다운로드하는 커뮤니티 사이트' 같은 거고, 지금은 별도 회사예요.", "NVIDIA가 이걸 인수하면, Hugging Face 사이트는 자동으로 'NVIDIA의 칩으로 움직이도록 최적화된 모델들만 모아놓는 플랫폼'이 되는 거죠.", "그럼 더 많은 개발자들이 NVIDIA 칩을 써야 하니까, NVIDIA의 칩 매출이 자연스럽게 늘어나는 구조가 되는 거예요.", "큰 돈(약 13~14조원)을 들이는 이유는, NVIDIA가 단순 '칩 회사'에서 'AI 생태계 전체를 장악하는 회사'로 커지려고 하기 때문이에요."],
        watch: ["실제 인수 계약 체결 일정 및 규제 승인 여부 (특히 중국·EU 규제 당국의 반독점 심사)", "NVIDIA가 Hugging Face 플랫폼 운영을 어떻게 통합할지 (API 통합, 칩 최적화 강제 여부 등)", "인수 후 Hugging Face의 개발자 커뮤니티 규모 변화 및 타 플랫폼(GitHub, Kaggle 등)으로의 이탈 우려", "NVIDIA의 Q3/Q4 실적 가이던스에서 이 인수 관련 발언 및 향후 소프트웨어/플랫폼 수익 기여도 공시"],
        interpretation: "이 인수는 NVIDIA 칩 사업의 '방어적 움직임'이자 동시에 '공격적 포지셔닝'이다. 방어 측면에서는, 오픈소스 커뮤니티에서 NVIDIA 의존도를 높여 경쟁사(AMD, Qualcomm의 Tenstorrent 등)로부터 사용자를 보호한다는 의미고, 공격 측면에서는 NVIDIA가 '칩 판매'에서 'AI 생태계 플랫폼'으로 사업 범위를 확장하려는 신호다. 시장에서는 이를 긍정적으로 해석할 수도, 부정적으로(독점 우려) 해석할 수도 있는 복합적 신호로 받아들여질 전망이다.",
        decision: "인수 공식 발표 및 계약 체결 후 실제 통합 내용이 공개될 때까지는 '긍정적 신호'로만 기록하되, 규제 당국의 반독점 심사나 사업 통합 과정에서 부작용(개발자 이탈, 플랫폼 개방성 축소)이 나타날 가능성도 주의할 것. NVDA 매수 신호로 보기는 이르고, 확정 후 시장 반응을 한 번 더 지켜보는 것이 안전.",
        confidence: "인수 의도·규모·직원 유지 패키지는 Bloomberg, The Information 등 신뢰도 높은 정보사가 보도했으나, NVIDIA와 Hugging Face가 공식 발표하지 않아 최종 계약 조건(가격, 종료 조건 등)은 아직 미확정. 인수 자체의 존재 확률은 높으나(70~80%), 정확한 규모와 일정은 변동 가능성 있음.",
        sources: [
          { title: "Nvidia agrees to buy Hugging Face for $12.9 billion (CNBC)", url: "https://www.cnbc.com/2026/08/27/nvidia-hugging-face-acquisition.html" },
          { title: "Nvidia Nears $14 Billion Hugging Face Deal This Week (Bloomberg)", url: "https://www.bloomberg.com/news/articles/2026-09-02/nvidia-nears-14-billion-hugging-face-deal-this-week" },
          { title: "Nvidia Agrees to Buy Open Source AI Platform Hugging Face For $12.9 Billion (TheInformation)", url: "https://www.theinformation.com/articles/nvidia-agrees-buy-open-source-model-repository-hugging-face-12-9-billion" },
          { title: "Nvidia nears $12.9 billion deal to buy open-source AI platform (Fortune)", url: "https://fortune.com/2026/08/27/nvidia-hugging-face-billion-dollar-deal-open-source-ai/" },
        ],
      },
      {
        date: "2026-08-20",
        headline: "OpenAI 오하이오 데이터센터에 $105B 규모 자금조달 후원 + SpaceX 지분 $21B 보유 공시 - AI 인프라 베팅 확대, 다만 AMD 경쟁 부각과 겹쳐 주가는 등락",
        coreAnalysis: "엔비디아가 OpenAI의 오하이오 데이터센터 프로젝트에 약 $105B 규모의 자금조달을 후원하는 것으로 알려졌고, 2분기 말 기준 SpaceX 지분 $21B을 보유하고 있다는 사실도 공시됐다. 두 건 모두 엔비디아가 GPU 판매를 넘어 고객사·파트너사에 직접 자본을 투입하는 방식으로 AI 생태계 확장에 관여하고 있음을 보여준다. 같은 시기 AMD의 AI·서버 로드맵이 일부 영역에서 엔비디아를 앞설 수 있다는 경쟁 압력 보도가 겹쳤고, AI 칩 수요 지속가능성에 대한 우려로 주가는 최근 저점 대비 +18% 반등한 뒤 다시 -2.19% 조정을 보이는 등 방향이 엇갈렸다. 다음 실적(8/26) 발표를 앞두고 있다.",
        whyItMatters: "OpenAI·SpaceX 같은 핵심 고객사에 자금까지 대는 구조는 GPU 수요를 자사 자본으로 뒷받침하는 셈이라 '벤더 파이낸싱(고객에게 돈을 빌려주고 그 돈으로 자사 제품을 사게 하는 구조)' 논란과 같은 맥락에서 봐야 한다 - 이게 실수요 확대라면 긍정적이지만, 자금 없이는 유지가 안 되는 수요라면 사이클이 꺾일 때 타격이 더 클 수 있다. 위 risks 항목의 '고객 집중 리스크'와 직접 연결되는 사안이라 향후 이 자금조달·지분투자가 실제 GPU 주문으로 이어지는지 확인이 중요하다.",
        beginnerSummary: "엔비디아가 그래픽카드(GPU)를 파는 것뿐 아니라, 오픈AI 같은 큰 고객사가 데이터센터를 지을 돈까지 대주는 방식으로 AI 사업에 더 깊이 관여하고 있다는 소식이에요. 이건 고객이 돈이 있어야 엔비디아 제품을 계속 살 텐데, 아예 그 돈까지 챙겨준다는 뜻이라 수요를 인위적으로 떠받치는 것 아니냐는 우려도 같이 나와요. 동시에 경쟁사 AMD가 치고 올라온다는 뉴스도 겹쳐서 주가는 오르락내리락했어요.",
        confidence: "OpenAI 자금조달 후원·SpaceX 지분 보유 공시는 복수 매체(Forbes 등) 보도 기준(신뢰도 높음) · '벤더 파이낸싱' 해석과 AMD 경쟁 영향의 정도는 Claude의 정성적 판단",
        sources: [
          {title:"Nvidia Stock Loses $130 Billion In Market Value As Firm Reportedly Enters $500 Billion AI Financing Deal (Forbes)", url:"https://www.forbes.com/sites/antoniopequenoiv/2026/08/10/nvidia-stock-loses-130-billion-in-market-value-as-firm-reportedly-enters-500-billion-ai-financing-deal/"},
          {title:"Nvidia's stock has started to come alive. Here's 3 reasons why it can continue (CNBC)", url:"https://www.cnbc.com/2026/08/17/nvidias-stock-has-started-to-come-alive-heres-3-reasons-why-it-can-continue-.html"},
          {title:"NVDA Stock Wobbles As AMD Challenge And Hedge Fund Exit Rattle AI Trade (StocksToTrade)", url:"https://stockstotrade.com/news/nvidia-corporation-nvda-news-2026_08_18/"},
        ],
      },
    ],
    analystLog: [{
      date: "2026-08-11",
      period: "5개 분기 연속 마진 상승 (2025-07 마감 42.6% → 2026-07 마감 71.5%로 추정)",
      headline: "순이익률이 5개 분기 연속 계속 올라감: 42.6%→56.5%→56.0%→63.1%→71.5%. 매출도 같은 기간 $44.1B→$81.6B로 거의 2배.",
      oneTime: "1회성 아님 - 특정 분기의 회계 이벤트가 아니라 '블랙웰(Blackwell)' 신제품으로의 믹스 전환이 원인. 블랙웰 GPU 1개당 판매가가 약 $4만 수준인데 생산원가는 $3천~3천5백 수준으로 알려져 있어, 신제품 비중이 늘수록 전사 마진이 구조적으로 올라가는 구조. 블랙웰이 이미 데이터센터 매출의 약 70%를 차지.",
      coreRead: "이건 진짜 본업 개선 - 회계 눈속임이 아니라 제품 하나(블랙웰)의 가격결정력이 극단적으로 좋다는 뜻. 다만 '마진이 회복(recovered)'이라는 표현이 쓰인 걸 보면 그 이전엔 마진이 눌려있던 시기가 있었다는 뜻인데, 이건 앞서 조사한 중국 수출규제 관련 H20 재고손실($45억)과 시점이 겹침 - 그 일회성 손실이 빠지면서 + 블랙웰 믹스 개선이 겹쳐 마진이 가파르게 올라간 것으로 해석됨.",
      forecast: "회사 자체 가이던스가 '연말까지 마진 70%대 중반' 목표라고 밝혀서, 최소 다음 1~2개 분기는 지금 수준이 유지되거나 소폭 더 오를 가능성이 높음(비교적 신뢰도 있는 전망 - 회사가 직접 제시한 목표). 다음 위험 요인은 ①중국 수출규제가 더 강화되면 이번에 뺀 것과 별개로 또 다른 일회성 손실이 재발할 수 있음 ②경쟁사(AMD 등)의 저가 대안이 늘면 블랙웰의 가격결정력이 흔들릴 수 있음 - 지금은 둘 다 실현되지 않은 리스크.",
      confidence: "마진 추이 숫자와 블랙웰 원가/판가 구조는 업계 보도 기준(신뢰도 높음) · 향후 지속 여부는 회사 가이던스 기반이라 상대적으로 신뢰도 중상",
      sources: [
        {title:"Nvidia Earnings May 2026: Record $81.6B Revenue and AI Growth Analysis (Intellectia)", url:"https://intellectia.ai/blog/nvda-stock-earnings-analysis-may-2026"},
        {title:"NVIDIA Reports Q4'FY2026 Earnings: Data Center and ProViz Drive Revenue Records (ServeTheHome)", url:"https://www.servethehome.com/nvidia-reports-q4-fy2026-earnings-data-center-and-proviz-drive-revenue-records/"},
      ],
    }],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "관망(0/5점) - 5개 분기 연속 마진 개선이 블랙웰의 진짜 가격결정력에서 나온 것으로 확인되지만, 지금은 거의 눌리지 않은 자리",
        view: "NVDA는 눌림목 점수 0/5점(52주 고점대비 -4.5%로 거의 신고가권, 200일선 위)으로 이 대시보드 기준으로는 지금 저가 매수 타이밍이 전혀 아니에요. PER(25.1배)이 3년 평균(43.1배)보다 크게 낮은데, 이건 최근 마진이 워낙 크게 개선돼서(42.6%→71.5%로 5개 분기 연속 상승) 분모가 커진 영향이지 주가가 눌린 게 아니에요 - 조사 결과 이 마진 개선은 1회성이 아니라 블랙웰 GPU의 압도적 가격결정력(개당 판가 ~$4만, 원가 ~$3~3.5천)이라는 진짜 본업 개선으로 확인됐어요(analystLog 참고). 다만 마진 회복 시점이 중국 수출규제로 인한 H20 손실($45억, 1회성)이 빠진 시점과 겹쳐서, '그 손실이 빠진 효과'와 '블랙웰 믹스 개선'이 함께 작용했다는 점은 감안해야 해요. Q2'26 매출은 전년비 +85.2%로 여전히 압도적이고, 회사가 직접 '연말 마진 70%대 중반' 가이던스를 제시해 전망 신뢰도가 상대적으로 높은 편이에요. 다만 최신 분기 순이익에 $15.93B 규모의 영업외손익이 섞여 있고 OCF/순이익이 0.86배로 다소 낮게 나와서, 이 부분은 다음 분기에 다시 확인이 필요해요. 이 종목은 '실적이 나쁘다'가 아니라 '이미 잘 알려진 좋은 실적이 가격에 반영돼 있어 지금은 쫓아 살 자리가 아니다'에 가까워요.",
        increaseIf: [
          "가격이 눌려 눌림목 점수가 2점 이상으로 올라올 때(지금은 거의 신고가권이라 진입 매력이 낮음)",
          "마진 가이던스(70%대 중반)를 실제로 달성·상회하는 게 확인될 때",
          "중국 매출 관련 추가 손실 없이 데이터센터 매출 성장이 이어질 때",
        ],
        wrongIf: [
          "마진이 가이던스(70%대 중반)에 못 미치거나 블랙웰 수요가 예상보다 둔화되는 신호가 나올 때",
          "중국 수출규제가 다시 강화돼 추가 손실이 발생할 때",
          "OCF/순이익 배수가 계속 낮게 나오며 현금창출력에 대한 의문이 커질 때",
        ],
        watchNext: [
          "다음 분기 마진이 가이던스대로 나오는지",
          "블랙웰 후속 제품(루빈 등) 로드맵 및 수요",
          "중국 매출 규제 관련 추가 뉴스",
        ],
        confidence: "매출·마진 수치는 SEC 공시 기반 캐시 데이터 · 블랙웰 가격결정력·H20 손실 관련 분석은 이전 조사에서 확인(analystLog 참고, 신뢰도 높음) · 회사 자체 가이던스가 있어 다른 종목보다 전망 신뢰도가 상대적으로 높다고 판단하지만 이는 여전히 Claude의 정성적 해석",
        sources: [],
      },
    ],
    role: {
      tags: ["AI 가속기(GPU) 설계", "CUDA 소프트웨어 생태계"],
      stars: 5,
      note: "AI 가속기 시장에서 사실상 독점적 지위예요. 블랙웰 GPU 한 개당 판가가 약 $4만인데 원가는 $3~3.5천 수준으로 알려져 있을 만큼 압도적인 가격결정력을 갖고 있고, CUDA 소프트웨어 생태계까지 갖추고 있어서 경쟁사가 하드웨어 성능을 따라와도 대체하기 어려운 이중 해자 구조예요.",
    },
  },
  GOOGL: {
    updated: "2026-09-04",
    customers: [
      "광고주 전반(검색+유튜브) - 매출의 절대다수 비중, 여전히 핵심 수익원",
      "기업 고객(구글 클라우드) - 백로그가 2026년 1분기에 전분기 대비 거의 2배로 늘어 $460B에 육박, AI 인프라 수요가 배경",
      "구독자 약 3.5억명(유튜브 프리미엄·뮤직·구글원 등, 2026년 1분기 기준)",
    ],
    strengths: [
      "검색이 AI 기능(AI Overviews 등) 힘입어 여전히 성장 중(2026년 1분기 +19%) - 'AI가 검색을 대체한다'는 우려와 달리 아직은 성장 동력",
      "구글클라우드 매출 성장이 오히려 가속(1분기 +63% → 2분기 +82%, 2분기 매출 $247.7억) - AI 인프라 수요 직접 수혜",
      "유튜브 광고 매출 견조(2분기 $110.6억)로 검색 의존도를 낮추는 다각화 진행 중",
    ],
    risks: [
      "⚠️ 차세대 플래그십 AI모델 '제미나이 3.5 프로' 출시가 CEO의 공개 약속을 어기며 수개월째 지연 중 - 앤트로픽·오픈AI 대비 AI 모델 경쟁력 우려(상세 내용은 아래 newsLog 참고)",
      "광고 매출 의존도가 여전히 높음 - AI 검색으로 사용자가 링크 클릭 없이 AI 답변만 보고 끝내는 행동이 늘면 기존 광고 수익모델 자체가 구조적으로 위협받을 수 있다는 업계 우려가 있음(아직 매출 숫자로는 확인 안 됨 - 위 강점의 +19% 성장과 상충되는 우려라는 점에 유의)",
    ],
    sources: [
      {title:"Google Revenue Breakdown by Segment: $307B (2026) (FourWeekMBA)", url:"https://fourweekmba.com/google-revenue-breakdown/"},
      {title:"Alphabet reports Q2 2026 revenue of $119.8 billion (9to5Google)", url:"https://9to5google.com/2026/07/22/alphabet-q2-2026-earnings/"},
      {title:"YouTube Ad Sales Increase 13% in Q2 2026: Alphabet Earnings Results (Variety)", url:"https://variety.com/2026/digital/news/youtube-q2-2026-ad-sales-alphabet-google-earnings-results-1236818132/"},
    ],
    analystLog: [
      {
        date: "2026-08-10",
        period: "2026-03-31 마감 분기(1분기) · 2026-06-30 마감 분기(2분기), 2개 분기 연속",
        headline: "순이익이 2분기 연속 비정상적으로 급증: 1분기 $62.6B(+81% YoY, EPS $5.11) → 2분기 $112.1B(+298% YoY, EPS $9.11). 헤드라인만 보면 실적이 폭발하는 것처럼 보임.",
        oneTime: "둘 다 비상장 지분(마켓터블하지 않은 증권) 포트폴리오의 '미실현 평가이익'이 원인 - 실제 영업이 아니라 회계상 평가익. 1분기는 세전 $36.9B 평가익(세후 순이익 기여 $28.7B, EPS 기여 $2.35). 2분기는 훨씬 더 커서 기타수익만 $98B 규모(대부분 미실현 평가이익). 즉 '실적이 진짜 이만큼 좋아진 것'이 아니라 보유 지분 가치평가가 크게 오른 결과.",
        coreRead: "투자이익을 빼고 봐도 본업 자체는 진짜 견조함 - 영업이익이 1분기 +30%, 2분기도 +30%로 2분기 연속 안정적(각각 $39.7B, $40.8B). 특히 구글클라우드 매출 성장이 1분기 +63% → 2분기 +82%로 오히려 가속. 결론: 순이익 증가율(+81%→+298%)은 투자평가손익 때문에 크게 출렁이는 '노이즈'고, 영업이익 증가율(+30%, +30%)이 본업의 '진짜 신호'. 이번 케이스는 사업 자체가 나쁜데 숫자만 좋아 보이는 게 아니라, 본업도 좋고(+30%) 회계상 추가 이익까지 겹친 경우.",
        forecast: "①다음 분기부터는 이런 규모의 투자평가이익이 매 분기 반복될 이유가 없어서, 순이익 증가율이 갑자기 확 꺾여 보일 수 있음 - 이걸 '실적 악화'로 오해하지 말고 기저효과(전년동기에는 없던 대형 일회성 이익과 비교하는 착시)인지부터 확인할 것. ②더 중요한 리스크: 이 평가이익은 미실현(mark-to-market)이라 보유 지분 가치가 다음에 조정되면 반대로 대형 평가손실이 찍힐 수도 있음 - 양방향 변동성 요인으로 봐야 함. ③본업 신호로는 클라우드 매출 성장률(63%→82%로 가속 중)이 계속 오르는지를 보는 게 순이익보다 훨씬 신뢰도 높은 지표. 이건 예측이라 틀릴 수 있음.",
        confidence: "일회성 이익의 존재와 규모는 회사 공식 실적발표 기준(신뢰도 높음) · 다음 분기 방향에 대한 해석은 추정(신뢰도 중간)",
        sources: [
          {title:"Alphabet Announces First Quarter 2026 Results (SEC 공식 발표자료)", url:"https://www.sec.gov/Archives/edgar/data/1652044/000165204426000043/googexhibit991q12026.htm"},
          {title:"Alphabet's Q2 2026 net income surges 298% to $112bn (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/alphabet-q2-2026-net-income-065128000.html"},
          {title:"Alphabet (NASDAQ: GOOG) Q2 2026 profit surges on $99B equity gain (StockTitan)", url:"https://www.stocktitan.net/sec-filings/GOOG/8-k-alphabet-inc-reports-material-event-c600716f9a4d.html"},
          {title:"Google Q2 Cloud Revenue Surges 82%: Net Profit Soars 298% YoY (TradingKey)", url:"https://www.tradingkey.com/analysis/stocks/us-stocks/262048041-google-earnings-report-q2-2026-goog-googl-services-cloud-search-capital-expenditures-tradingkey"},
        ],
      },
    ],
    newsLog: [
      {
        date: "2026-09-01",
        headline: "제프 딘(Jeff Dean) 최고과학자 퇴사 - 구글의 핵심 AI 인재 이탈, AI 리더십 교체 국면",
        facts: ["제프 딘(Jeff Dean)이 구글의 Chief Scientist 자리를 떠난다는 소식이 퍼짐(정확한 발표 시점은 8월 말~9월 초)", "제프 딘은 Google Brain의 공동 설립자 중 한 명으로 오랫동안 구글의 AI 연구를 이끈 핵심 인물", "구글의 최고 AI 전문가 및 리더 그룹에서 여러 임원이 동시에 떠나거나 역할 재편 중인 상황", "이번 변화는 구글이 최근 Gemini 3.5 Pro 출시 지연, OpenAI·Anthropic 대비 경쟁력 평가 하락 와중에 일어난 사건", "Waymo(자율주행) 등 다른 AI 프로젝트와는 별개로, AI 모델 개발의 코어 팀이 재편되는 중"],
        why: ["제", "프", " ", "딘", " ", "같", "은", " ", "'", "기", "술", " ", "거", "인", "(", "t", "e", "c", "h", "n", "i", "c", "a", "l", " ", "g", "i", "a", "n", "t", ")", "'", "이", " ", "떠", "난", "다", "는", " ", "것", "은", " ", "단", "순", " ", "임", "원", " ", "교", "체", " ", "수", "준", "이", " ", "아", "니", "라", " ", "구", "글", "의", " ", "A", "I", " ", "연", "구", " ", "방", "향", "·", "속", "도", "·", "경", "쟁", "력", " ", "감", "지", " ", "신", "호", "로", " ", "해", "석", "될", " ", "수", " ", "있", "다", ".", " ", "A", "I", " ", "분", "야", "에", "서", " ", "구", "글", "은", " ", "L", "L", "M", "(", "대", "규", "모", "언", "어", "모", "델", ")", "에", "서", " ", "O", "p", "e", "n", "A", "I", "/", "A", "n", "t", "h", "r", "o", "p", "i", "c", " ", "대", "비", " ", "뒤", "처", "지", "는", " ", "평", "가", "를", " ", "받", "아", "왔", "고", ",", " ", "딥", "마", "인", "드", "(", "D", "e", "e", "p", "M", "i", "n", "d", ")", " ", "인", "수", " ", "이", "후", "에", "도", " ", "'", "A", "I", " ", "선", "도", "'", "라", "는", " ", "위", "치", "를", " ", "유", "지", "하", "지", " ", "못", "했", "다", ".", " ", "이", " ", "와", "중", "에", " ", "핵", "심", " ", "A", "I", " ", "과", "학", "자", "가", " ", "떠", "난", "다", "면", " ", "'", "구", "글", "의", " ", "A", "I", " ", "리", "더", "십", " ", "재", "구", "성", "이", " ", "진", "행", " ", "중", "'", "이", "라", "는", " ", "신", "호", "로", " ", "볼", " ", "수", " ", "있", "다", "."],
        beginner: ["구", "글", "의", " ", "가", "장", " ", "유", "명", "한", " ", "A", "I", " ", "과", "학", "자", " ", "한", " ", "명", "이", " ", "회", "사", "를", " ", "떠", "난", "다", "는", " ", "뉴", "스", "예", "요", ".", " ", "이", " ", "과", "학", "자", "(", "제", "프", " ", "딘", ")", "는", " ", "구", "글", "이", " ", "A", "I", " ", "분", "야", "에", "서", " ", "최", "고", "의", " ", "인", "재", "로", " ", "알", "려", "진", " ", "사", "람", "이", "에", "요", ".", " ", "그", "가", " ", "떠", "난", "다", "는", " ", "것", "은", " ", "구", "글", "의", " ", "A", "I", " ", "팀", "에", " ", "변", "화", "가", " ", "생", "기", "고", " ", "있", "다", "는", " ", "신", "호", "로", " ", "보", "여", "요", ".", " ", "마", "치", " ", "축", "구", "팀", "의", " ", "스", "타", " ", "선", "수", "가", " ", "떠", "나", "는", " ", "것", "처", "럼", " ", "말", "이", "에", "요", "."],
        watch: ["제프 딘과 함께 떠난 다른 AI 리더들이 어디로 가는지 (스타트업 설립, 다른 기업으로의 이동 등)", "구글이 이들의 퇴사 후 'AI 인재 충원' 또는 '조직 개편' 계획을 어떻게 발표하는지", "다음 분기 구글의 AI 제품 출시 일정·성과(Gemini 3.5 Pro 최종 출시, 새로운 모델 발표 등)가 리더십 변화로 인해 지연되는지 여부", "구글의 AI 경쟁력 평가가 시장에서 어떻게 변하는지 (주가, 고객 평가, 인재 유입 등)"],
        interpretation: "단순히 '좋은 과학자가 떠났다'로 보기보다는, 구글 내 AI 전략·조직 구조에 큰 변화가 진행 중이라는 신호다. OpenAI와 Anthropic이 리더십을 중심으로 급속하게 성장하는 와중, 구글은 '검색 엔진 회사에서 AI 기업으로의 전환'에서 조직적 어려움을 겪고 있는 것으로 보인다. 제프 딘의 떠남은 단순 이직이 아니라 '구글의 AI 리더십이 재구성되는 시기'의 한 부분일 가능성이 높다.",
        decision: "단기(3개월)로는 '리더십 변화의 불확실성' 때문에 신중한 자세 유지. 중기(6~12개월)로는 신 리더십이 실제 AI 제품 경쟁력 개선으로 이어지는지 관망 필요.",
        confidence: "제프 딘 퇴사 사실과 그의 Google Brain 공동 설립자·Chief Scientist 지위는 Bloomberg·Reuters 등 주요 기술 매체에서 확인. 다만 구글의 공식 성명문이 아직 없을 수 있으므로 정확한 퇴직 시점·이유·후임자 발표는 추후 확인 필요. '구글의 AI 경쟁력이 떨어지고 있다'는 일반적 평가는 시장에서 알려진 사실이지만, 이번 리더십 변화가 그 원인이자 동시에 결과인지는 선후 검증이 필요하다.",
        sources: [
          { title: "Alphabet Announces Second Quarter 2026 Results", url: "https://s206.q4cdn.com/479360582/files/doc_financials/2026/q2/2026q2-alphabet-earnings-release.pdf" },
          { title: "Alphabet Is Still Up 16% in 2026. What Will It Take to Get GOOGL Back on Track", url: "https://finance.yahoo.com/markets/stocks/articles/alphabet-still-16-2026-googl-183005987.html" },
          { title: "Google AI chief Jeff Dean and others depart amid leadership overhaul", url: "https://news.google.com" },
        ],
      },
      {
        date: "2026-08-13",
        headline: "차세대 플래그십 AI모델 '제미나이 3.5 프로' 수개월째 지연 + 8/6 딥마인드 조직개편(자율성 축소), 세르게이 브린 직접 개입",
        coreAnalysis: "알파벳의 차세대 플래그십 AI 모델 '제미나이 3.5 프로'가 예정보다 수개월 지연되고 있음. 2026-05-19 Google I/O에서 CEO 순다르 피차이가 무대 위에서 직접 '다음 달까지 기다려달라'고 약속했으나 그 시한도, 이어진 7/17 목표(업계에 유출된 시점)도 모두 지나쳤고, 7/21 기준 구글은 대신 더 가볍고 저렴한 모델 3종만 출시하며 플래그십 신규 일정은 제시하지 못함. 지연 원인은 주로 코딩 능력 - 최근 훈련 데이터를 갱신했으나 결과가 기대에 못 미쳤음(Bloomberg 보도). 앤트로픽·오픈AI의 신모델이 성능 면에서 제미나이를 앞서면서 구글 내부 엔지니어·연구자·매니저들 사이에 경쟁력을 잃을 수 있다는 불안이 커짐. 이에 대응해 세르게이 브린(공동창업자)이 직접 개입 - 4월 타운홀에서 수백 명의 딥마인드 직원들에게 속도를 높이라고 촉구한 데 이어, 8월 6일 전사 미팅에서 일부 딥마인드 팀을 '코퍼레이트 구글'로 이동시키는 조직개편을 발표함(2014년 딥마인드 인수 이후 계속 축소돼온 딥마인드의 독립성이 한 단계 더 줄어드는 조치) - Kavukcuoglu가 제미나이를 총괄하는 단일 SVP로 피차이에게 직접 보고하는 구조가 됨.",
        whyItMatters: "알파벳 주가의 AI 서사는 '제미나이가 앤트로픽·오픈AI와 경쟁할 수 있다'는 전제에 크게 기대고 있는데, 플래그십 모델이 CEO의 공개 약속을 최소 2차례 어기며 반복 지연되는 건 그 전제에 실질적인 금이 가는 신호임. 다만 같은 종목의 위 실적 해석 로그에서 확인했듯 클라우드 매출(+63%→+82% 가속)·영업이익(+30%대 안정) 등 <b>본업 지표는 여전히 견조</b>함 - 'AI 모델 경쟁에서 뒤처지는 것'과 '지금 당장 돈을 못 버는 것'은 별개라, 이 뉴스를 즉각적인 실적 악화 신호로 오해하면 안 됨. 오히려 '지금은 괜찮지만 다음 세대 모델 경쟁에서 계속 밀리면 장기적으로 클라우드·검색 점유율에 영향을 줄 수 있다'는 선행 리스크로 보는 게 맞음. 조직개편(딥마인드 자율성 축소 + 브린의 직접 개입) 자체는 회사가 문제를 심각하게 인식하고 빠르게 대응 중이라는 신호이기도 해서, 반드시 나쁜 뉴스로만 볼 필요는 없음.",
        beginnerSummary: "구글의 차세대 최고급 AI 모델(제미나이 3.5 프로)이 나오기로 한 날짜를 벌써 몇 달째 못 지키고 있어요. CEO가 공개 행사에서 '다음 달엔 나온다'고 약속했는데 그것도 어겼고, 그 다음 목표일도 놓쳤어요 - 이유는 코딩 능력이 기대만큼 안 나와서라고 해요. 그 사이 경쟁사(앤트로픽·오픈AI)들은 계속 더 좋은 모델을 내놓고 있어서, 구글이 AI 경쟁에서 뒤처질 수 있다는 우려가 회사 안팎에서 커지고 있어요. 그래서 구글 공동창업자 세르게이 브린이 직접 나서서 담당 조직(딥마인드)을 다그치고 조직개편까지 했어요 - 급하게 대응하고 있다는 뜻이에요. 다만 지금 당장 돈을 버는 사업(클라우드·검색)은 여전히 잘 나가고 있어서(위 실적 해석 로그에서 확인한 클라우드 매출 성장 가속), 이건 '지금 실적이 나쁘다'는 얘기가 아니라 '다음 AI 경쟁에서 계속 뒤처지면 나중에 문제가 될 수 있다'는 미리 보는 리스크로 이해하면 돼요.",
        confidence: "모델 지연 시점·CEO 발언·조직개편 사실관계는 Bloomberg·Reuters 등 복수 정론 매체 보도 기준(신뢰도 높음) · 주가에 미치는 영향에 대한 해석은 Claude의 판단(신뢰도 중간)",
        sources: [
          {title:"Google Gemini Launch Delayed as Tech Falls Short of Internal Goals (Bloomberg)", url:"https://www.bloomberg.com/news/articles/2026-07-16/google-gemini-launch-delayed-as-tech-falls-short-of-internal-goals"},
          {title:"Exclusive-Inside the Google executive moves that led to its big AI reshuffle (Reuters, via Yahoo Finance)", url:"https://finance.yahoo.com/technology/ai/articles/exclusive-inside-google-executive-moves-173536292.html"},
          {title:"Google updates lightweight Gemini models, but flagship still delayed (Reuters, via Yahoo Finance)", url:"https://finance.yahoo.com/technology/ai/articles/google-updates-lightweight-gemini-models-150137017.html"},
          {title:"Kavukcuoglu Now Leads Gemini as Sole SVP Reporting to Pichai — With Brin Deeply Hands-On (FourWeekMBA)", url:"https://fourweekmba.com/ai-kavukcuoglu-gemini-lead-brin-hands-on-google-deepmind-restru/"},
        ],
      },
      {
        date: "2026-09-02",
        headline: "광고기술 반독점 소송 '제재' 판결 - 강제매각(분할) 안 받고 행동규제만 부과, 주가 +1%",
        importance: "high",
        tone: "mixed",
        horizon: "중기(행동규제 세부 이행 방식·항소 여부에 따라 영향 유동적)",
        facts: [
          "2026년 4월 이미 '구글이 광고기술 시장에서 불법 독점을 유지했다'는 책임(liability) 판결이 나온 상태였고, 이번 9/2 판결은 그 '제재(remedy)'를 정하는 두 번째 단계임 - 담당 판사는 리오니 브링키마(Leonie Brinkema, 버지니아 동부지법).",
          "미 법무부(DOJ)는 구글의 광고거래소 AdX(및 퍼블리셔용 서버 DFP가 묶인 Google Ad Manager)를 강제 매각(분사)하라고 요구했으나, 브링키마 판사는 이를 기각함.",
          "대신 '행동 규제(behavioral remedies)'를 명령함 - 오픈웹 디스플레이 광고의 실시간 입찰가를 경쟁 광고서버에도 공개, '통합 가격 규칙(Unified Pricing Rules)' 폐지, 퍼블리셔가 입찰자별로 다른 최저가를 설정할 수 있게 허용, 구글이 입찰가를 사후 조정할 수 있던 '퍼스트룩·라스트룩' 특혜 금지 등이 포함됨.",
          "판결 발표 당일 GOOGL 주가는 약 +1% 상승 - 시장은 '최악(강제 분할)은 피했다'는 쪽으로 받아들임. 애널리스트 컨센서스는 '매수'(30명 기준 평균목표가 $422.59)로 우호적 유지.",
          "다만 업계 반응은 엇갈림 - 경쟁 애드테크 업체(PubMatic 등)는 '공정경쟁 환경에 도움'이라며 긍정적이었지만, 일부 비평가(Jay Friedman 등)는 '퍼블리셔가 여전히 구글의 수요 쪽(디맨드 사이드)에 의존할 수밖에 없어 근본적 해결은 아니다'라고 지적함.",
          "이번 결과는 앞선 구글 검색 독점 소송(강제분할 대신 행동규제로 마무리)과 같은 패턴 - 법원이 빅테크 반독점 사건에서 '구조적 분할'보다 '행동규제'를 선호하는 흐름이 이어지고 있음을 보여줌.",
        ],
        why: [
          "이 광고거래소(AdX) 사업 자체는 구글 전체 매출에서 비중이 작아서, 설령 강제매각됐어도 재무적 충격은 제한적이었을 것 - 그보다는 '선례'로서의 의미(다른 반독점 소송·규제에 미칠 영향)가 더 컸음. 이번에 분할을 피한 건 향후 다른 규제 압박에도 '분할'보다 '행동규제'로 마무리될 가능성을 시사.",
          "다만 행동규제 자체(가격 투명성 강화, 특혜 금지)는 구글이 광고 입찰에서 누리던 정보 우위·유연성을 일부 깎아내는 것이라, 장기적으로 광고 마진에 미세하게 불리하게 작용할 수 있음 - 다만 세부 이행 방식이 아직 공개되지 않아 영향 크기는 불확실.",
          "위 risks 항목에 있는 '제미나이 3.5 프로 지연' 이슈와는 결이 다른 리스크(AI 경쟁력 vs 법적 규제)라는 점도 구분해서 봐야 함 - 이번 건은 오히려 우려가 줄어든 쪽.",
        ],
        beginner: [
          "구글이 온라인 광고 시장에서 '불법으로 독점을 했다'는 판결은 이미 지난 4월에 나왔었고, 이번엔 '그럼 벌로 무엇을 시킬지'를 정하는 재판이었어요.",
          "미국 정부는 구글한테 광고 관련 사업 일부를 강제로 팔라고 요구했는데, 판사가 그건 안 시키기로 했어요. 대신 '광고 입찰 방식을 더 투명하고 공정하게 바꿔라'는 정도의 숙제만 줬어요.",
          "최악의 시나리오(사업 강제 매각)는 피했다는 뜻이라 주가는 소폭 올랐어요. 다만 '독점이었다'는 판결 자체는 그대로 남아있고, 항소 가능성도 있어요.",
        ],
        interpretation: "구글 입장에서는 최악의 결과(구조적 분할)를 피했다는 점에서 명확히 안도할 만한 결과다. 다만 (1) '불법 독점' 책임 판결 자체는 그대로 유지되고, (2) 행동규제의 구체적 이행 방식이 아직 공개되지 않아 실제 사업에 미칠 영향의 크기를 지금 정확히 가늠하기 어려우며, (3) 정부 측 항소 가능성도 남아있다. 시장의 +1% 반응은 '불확실성 해소'에 대한 반응에 가깝고, 광고 사업 펀더멘털 자체가 개선됐다는 신호로 보기는 이르다.",
        decision: "구조적 리스크(사업 강제분할)는 사실상 해소된 것으로 봐도 되나, 행동규제 세부안이 공개되는 대로 광고 마진에 미치는 실질적 영향을 재점검할 것.",
        watch: [
          "행동규제(가격 공개·특혜 금지 등)의 구체적 이행 일정과 방식",
          "DOJ·경쟁사의 항소 여부",
          "다음 분기 광고(검색·유튜브) 매출·마진에 이번 규제가 미치는 실제 영향",
        ],
        confidence: "판결 내용(강제매각 기각, 행동규제 명령 항목)과 담당 판사·사건명은 CNBC·AdExchanger 등 복수 매체 보도 기준으로 신뢰도 높음. 주가 반응(+1%)과 애널리스트 목표가는 TipRanks 기준. 행동규제가 실제 매출·마진에 미칠 영향의 크기는 세부안이 미공개라 아직 추정 불가.",
        sources: [
          {title:"Google defeats U.S. bid to force ad tech sale (CNBC)", url:"https://www.cnbc.com/2026/09/02/google-defeats-us-bid-to-force-ad-tech-sale.html"},
          {title:"Google Won't Have To Break Up Its Ad Tech Business, Judge Brinkema Rules (AdExchanger)", url:"https://www.adexchanger.com/antitrust/google-wont-have-to-break-up-its-ad-tech-business-judge-brinkema-rules/"},
          {title:"Google Stock (GOOGL) Rises After Judge Rejects Ad Tech Sale Order (TipRanks)", url:"https://www.tipranks.com/news/google-stock-googl-rises-after-judge-rejects-ad-tech-sale-order"},
          {title:"Google won't be forced to sell its ad exchange following antitrust ruling (Engadget)", url:"https://www.engadget.com/2249664/google-wont-be-forced-to-sell-its-ad-exchange-following-antitrust-ruling/"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "관망 - PER은 역사적으로 가장 싼 편이지만 제미나이 3.5 지연이 AI 경쟁 포지션에 대한 진짜 리스크",
        view: "GOOGL은 눌림목 점수 1/5점(52주 고점대비 -14.1%, 200일선 위)로 저가 신호는 아니에요. 다만 PER(16.8배)이 3년 평균(25.2배)보다 크게 낮아서 빅테크 중에서 가장 '역사적으로 싸 보이는' 축에 속해요. 재무는 Q2'26 매출 +24.2%·영업이익률 +1.6%p로 견조하지만, 최근 2개 분기 순이익에 비상장 지분 포트폴리오의 대규모 미실현 평가이익(세전 $36.9B 등)이 반복적으로 섞여 있어서 순이익만 보면 실제보다 좋아 보여요 - 영업이익 성장률(+30% 안정적)이 더 신뢰할 만한 본업 지표예요. FCF 마진이 -4.9%로 투자 지출이 영업현금을 웃도는 구간인데, 이건 AI 인프라 투자 확대의 결과로 보여요. 가장 신경 쓰이는 건 재무가 아니라 뉴스 쪽이에요 - 차세대 모델 '제미나이 3.5 프로'가 CEO의 공개 약속을 최소 2차례 어기며 지연 중이고 코딩 능력이 기대에 못 미친다는 게 확인됐어요(8/6 딥마인드 조직개편도 같은 맥락). 클라우드 매출 성장은 오히려 가속(+63%→+82%)됐다는 점은 긍정적이에요. 컨센서스는 내년 매출 +22%인데 EPS는 -28%로 보고 있어서(투자평가이익 비반복 효과가 빠지는 기저효과로 추정) 이 괴리 자체가 '순이익보다 영업이익을 봐야 한다'는 위 판단과 일치해요.",
        increaseIf: [
          "제미나이 3.5 프로가 실제로 출시되고 벤치마크에서 경쟁력을 입증할 때",
          "클라우드 매출 성장률이 계속 80%대를 유지하거나 더 가속될 때",
          "눌림목 점수가 2점 이상으로 올라올 때",
        ],
        wrongIf: [
          "제미나이 후속 모델이 계속 지연되거나 오픈AI·앤트로픽 대비 격차가 벌어진다는 정황이 쌓일 때",
          "영업이익 성장률(현재 +30% 안정적)이 눈에 띄게 꺾일 때",
          "클라우드 성장률이 다시 둔화될 때",
        ],
        watchNext: [
          "제미나이 3.5 프로 정식 출시 여부와 반응",
          "다음 분기 순이익에 투자평가이익이 또 반복되는지(3분기 연속이면 이 회사 순이익 변동성의 상시적 패턴으로 재분류 필요)",
          "클라우드 매출 성장률 지속 여부",
        ],
        confidence: "매출·영업이익 성장률은 SEC 공시 기반 캐시 데이터 · 제미나이 지연·조직개편 사실관계는 Bloomberg·Reuters 등 복수매체로 교차검증(이미 newsLog에 기록) · 투자평가이익 반복 패턴은 캐시 데이터 직접 확인 · AI 경쟁 포지션에 대한 종합 판단은 Claude의 정성적 해석",
        sources: [],
      },
    ],
    role: {
      tags: ["검색광고", "유튜브", "구글클라우드(GCP)", "AI 모델(제미나이)"],
      stars: 4,
      note: "검색·유튜브·클라우드 세 축 모두 여전히 압도적이에요(구글클라우드 매출 성장이 오히려 +63%→+82%로 가속). 다만 차세대 AI 모델 '제미나이 3.5 프로'가 CEO의 공개 약속을 최소 2차례 어기며 지연 중이고 코딩 능력이 기대에 못 미친다는 게 확인돼, 다음 세대 AI 경쟁에서 뒤처질 수 있다는 선행 리스크가 있어요.",
    },
  },
  META: {
    updated: "2026-09-04",
    customers: [
      "광고주 전반(Family of Apps: 페이스북·인스타그램·왓츠앱·메신저) - 매출 절대다수 비중",
      "리얼리티랩(Reality Labs) 소비자 - 퀘스트 VR 헤드셋, AI 글래스",
    ],
    strengths: [
      "광고 매출 견조 성장(2026년 2분기 +27%, $593.6억) - 광고 노출수 +14%·평균단가 +12% 둘 다 오르는 건강한 성장",
      "AI 글래스 매출이 리얼리티랩 성장을 이끔(2분기 +16%) - 퀘스트 헤드셋 판매 둔화를 일부 상쇄",
    ],
    risks: [
      "⚠️ 리얼리티랩(VR/AI 하드웨어) 손실이 계속 확대 중(2분기 영업손실 $46.2억) - AI·VR 투자가 아직 수익으로 안 이어지는 구조",
      "2026년 AI 설비투자 가이던스가 $1,250~1,450억으로 막대함(엔비디아·AMD 등과 파트너십으로 데이터센터·커스텀칩 투자) - 투자 회수 시점이 불확실",
      "EU 규제 압박 심화 - 디지털시장법(DMA) 준수, AI법 '시스템 리스크' 조사, 반독점 잠정조치까지 받은 상태(2026년 기준 진행 중)",
    ],
    sources: [
      {title:"Meta Platforms (META): Navigating AI Spending Surge and Regulatory Challenges in 2026 (Tickeron)", url:"https://tickeron.com/blogs/meta-platforms-meta-navigating-ai-spending-surge-and-regulatory-challenges-in-2026-13247/"},
      {title:"Meta Q2 2026: Revenue Hits $60.8B, EPS Misses as Reality Labs Loses $4.6B (GamesReviews)", url:"https://gamesreviews.com/news/07/meta-q2-2026-revenue-hits-60-8b-eps-misses-as-reality-labs-loses-4-6b/"},
      {title:"The Brussels Reckoning: EU Launches High-Stakes Systemic Risk Probes into X and Meta (FinancialContent)", url:"https://markets.financialcontent.com/wral/article/tokenring-2026-1-16-the-brussels-reckoning-eu-launches-high-stakes-systemic-risk-probes-into-x-and-meta-as-ai-act-enforcement-hits-full-gear"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 매출 +28%인데 EPS 미스·capex 1,450억 달러 확대 - 광고는 견조, AI 지출이 현금흐름 압박",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-07-30 2분기 매출 608억 달러(+28% YoY, 예상 상회)했으나 EPS는 예상을 하회했다.", "법률 비용·AI 투자 비용 증가가 순이익을 압박했고, 2026년 capex 가이던스를 최대 1,450억 달러로 확대했다.", "실적 발표 후 주가가 10% 이상 급락했고 다수 애널리스트가 목표주가를 하향했다."],
        why: ["핵심 사업(광고)은 견조하게 성장 중이지만, 막대한 AI 설비투자가 잉여현금흐름을 크게 압박한다는 점이 시장의 핵심 우려다."],
        beginner: ["광고로 버는 돈은 여전히 잘 늘고 있는데, AI에 쓰는 돈이 너무 커져서 실제 남는 돈(이익)은 예상보다 적었어요. 이 투자가 나중에 성과로 돌아올지가 관건이에요."],
        interpretation: "광고 매출 성장은 긍정적이지만 AI capex 부담이 상당 기간 이익을 누를 수 있어, 방향을 한쪽으로 단정하기 어렵다.",
        decision: "AI capex 대비 실제 매출 기여가 확인되는 시점(수 분기 후)까지는 신중하게 볼 것.",
        watch: ["다음 분기 capex 가이던스 추가 변동", "AI 투자의 매출 기여 신호"],
        confidence: "회사 공식 실적 발표 기준, 다수 매체(Yahoo Finance, Qz) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Meta Reports Second Quarter 2026 Results (공식 IR)", url:"https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx"},
        {title:"Meta Q2 2026 earnings miss: legal charges, AI costs hurt profit (Qz)", url:"https://qz.com/meta-q2-2026-earnings-miss-legal-charges-ai-costs-073026"},
        {title:"Meta stock plunges more than 10% as analysts cut price targets on sky-high AI spending (Yahoo Finance)", url:"https://finance.yahoo.com/news/meta-stock-plunges-more-than-10-as-analysts-cut-price-targets-on-sky-high-ai-spending-170405940.html"},
        ],
      },
      {
        date: "2026-08-20",
        headline: "29개 주 검찰총장이 아동 안전 관련 소송 제기(최대 $1.4조 손해배상 주장) - 뉴멕시코주 패소($1B 배상 확정) 직후라 주가 이틀간 -7%",
        coreAnalysis: "미국 29개 주 검찰총장이 메타가 아동의 데이터를 불법 수집하고 안전성에 대해 소비자를 오도했다고 주장하며 소송을 제기했다. 메타 측은 잠재적 손해배상액이 최대 $1.4조에 이를 수 있다고 밝혔고, 주 측 변호인단은 약 $2,000억이 더 현실적인 규모라고 언급했다. 이는 이달 초 뉴멕시코주에서 진행된 유사 소송에서 메타가 패소해 $10억 배상과 일부 정책 변경을 명령받은 직후에 나온 소식으로, 8/17(월) -4%, 8/18(화) -3%로 이틀 연속 하락했다.",
        whyItMatters: "위 risks 항목의 'EU 규제 압박'이 유럽에 국한된 게 아니라 미국 주정부 차원으로도 확산되고 있다는 뜻 - 아동 데이터·안전 이슈는 여러 주가 동시에 제기하는 구조라 소송이 장기화·다발화될 가능성이 있다. 다만 회사가 언급한 $1.4조는 이론적 상한선(법정 최대 배상액을 위반 건수로 곱한 수치일 가능성)이고 주 측이 제시한 ~$2,000억이 더 현실적인 추정치라는 점에서, 실제 합의·배상 규모는 두 숫자 사이 어딘가로 좁혀질 가능성이 크다 - 이 격차 자체가 아직 불확실성이 크다는 신호다.",
        beginnerSummary: "미국 29개 주 정부가 메타(페이스북·인스타그램)를 상대로 '아이들의 개인정보를 불법으로 모으고 안전하다고 거짓말했다'며 소송을 걸었어요. 메타는 최악의 경우 배상금이 1.4조 달러(우리 돈 약 1,900조원)까지 갈 수 있다고 했지만, 소송을 건 쪽은 실제로는 2,000억 달러 정도가 더 현실적이라고 봐요. 최근 다른 주(뉴멕시코)에서 이미 비슷한 소송에 져서 10억 달러를 물어준 직후라, 투자자들이 불안해하면서 주가가 이틀 만에 7% 가까이 빠졌어요.",
        confidence: "소송 제기·뉴멕시코 판결·배상액 언급은 복수 매체(Benzinga·Motley Fool) 보도 기준(신뢰도 높음) · 최종 배상 규모는 소송이 진행 중이라 미확정(추정)",
        sources: [
          {title:"What's Going On With Meta Platforms Stock Tuesday? (Benzinga)", url:"https://www.benzinga.com/trading-ideas/movers/26/08/61279236/whats-going-on-with-meta-platforms-stock-tuesday-2"},
          {title:"What's Going On With Meta Platforms Stock Monday? (Benzinga)", url:"https://www.benzinga.com/markets/tech/26/08/61257572/whats-going-on-with-meta-platforms-stock-monday-3"},
        ],
      },
      {
        date: "2026-08-26",
        headline: "10대 안전 소송 $17B에 합의 - 바로 위 8/20 항목(29개 주 소송, 최대 $1.4조 주장)의 결말, 소송 불확실성 해소로 주가 +1.5%",
        importance: "high",
        tone: "mixed",
        horizon: "장기(10년간 분할 이행 + 참여 유도 조항)",
        facts: [
          "47개 주 검찰총장 연합(초당적) 중 4개 주(캘리포니아·콜로라도·켄터키·뉴저지)가 오클랜드 연방법원에서 실제 재판까지 갔던 사건으로, 재판 도중 합의로 종결됨(마크 저커버그의 예정된 증언도 무산됨).",
          "메타는 10년에 걸쳐 총 $17B를 청소년 온라인 안전 관련 사업에 지급하기로 함 - 주별 최소 배분액 예시: 캘리포니아 $15억, 뉴저지 $5.25억, 매사추세츠 $3.66억, 버지니아 $3.53억.",
          "이 중 30%($5.3B)는 유튜브·틱톡이 메타와 비슷한 수준의 안전조치를 도입하고 매칭 지급에 동참하는 것을 조건으로 함 - 즉 업계 전체로 규제를 확산시키려는 조항.",
          "메타는 제품 변경도 함께 이행해야 함: 청소년 대상 하루 사용시간 제한·일시정지 기능, 등교시간 중 푸시알림 금지, 연령확인·연령별 콘텐츠 제한, '좋아요' 수 등 사회적 비교 기능 제한, 부모 통제 기능 강화, 독립기관의 안전기능 효과 감사.",
          "이 소식으로 주가는 발표 당일 오후 +1.5% 상승 - 바로 위 8/20 항목에서 다뤘던 '29개 주 소송·최대 $1.4조 배상 주장' 리스크가 실제로는 훨씬 관리 가능한 규모($17B, 10년 분할)로 마무리된 것.",
          "애널리스트 반응은 엇갈림: Piper Sandler(비중확대, 목표가 $785, +38% 여력)·Evercore ISI(아웃퍼폼, 목표가 $860, +51% 여력)는 '법적 불확실성 해소'를 긍정 평가한 반면, Wells Fargo·BMO Capital(목표가 $580, +2%)은 '청소년 사용시간 제한이 인스타그램·틱톡 등의 참여도(engagement)·광고 노출·단가에 새로운 리스크가 될 수 있다'고 경고함.",
        ],
        why: [
          "위 8/20 항목에서 예상했던 '실제 배상·합의 규모는 회사 주장($1.4조)과 원고 측 추정($2,000억) 사이 어딘가로 좁혀질 것'이라는 해석이 결과적으로 맞아떨어짐($17B는 원고 측 추정보다도 훨씬 작음) - 최악의 시나리오가 현실화되지 않은 사례로 참고할 만함.",
          "다만 이번 합의의 핵심은 '돈'보다 '제품 변경 의무'에 있음 - 청소년 사용시간 제한·알림 제한은 인스타그램 등 핵심 앱의 참여도 지표에 실질적 영향을 줄 수 있어, 광고 매출에 미치는 영향은 앞으로 몇 분기 실적으로 확인이 필요함.",
          "위 risks 항목의 'EU 규제 압박'과 함께 봤을 때, 메타는 이제 미국(주정부)·EU 양쪽에서 동시에 플랫폼 설계 규제를 받는 상황이 됨 - 규제 리스크가 사라진 게 아니라 '소송 불확실성'에서 '이행 의무 준수'로 성격이 바뀐 것.",
        ],
        beginner: [
          "미국 여러 주 정부가 메타(페이스북·인스타그램)한테 '10대들 마음 건강을 해쳤다'며 걸었던 소송이 이번에 합의로 끝났어요. 재판까지 안 가고 돈을 내고 합의한 거예요.",
          "메타가 10년 동안 총 170억 달러(약 23조원)를 내기로 했고, 동시에 10대 사용자를 위한 기능(하루 사용시간 제한, 학교 시간엔 알림 안 오게 하기 등)도 새로 넣어야 해요.",
          "투자자들은 '최악의 상황(1조 달러가 넘는 배상)은 피했다'고 보고 주가가 소폭 올랐어요. 다만 일부 전문가는 '10대들이 앱을 덜 쓰게 되면 광고 수입이 줄 수도 있다'고 걱정하고 있어요.",
        ],
        interpretation: "이번 합의는 위 8/20 항목에서 이미 예견됐던 리스크의 '결말'로, 최악의 재무적 시나리오는 피했다는 점에서 법적 불확실성 해소 측면의 호재로 볼 수 있다. 다만 요구되는 제품 변경(특히 청소년 사용시간 제한)이 실제로 참여도·광고 매출에 어느 정도 영향을 줄지는 아직 숫자로 확인되지 않았고, 이 부분에서 애널리스트 의견이 갈리고 있다(Piper·Evercore는 낙관, Wells Fargo·BMO는 신중). 종합하면 '큰 꼬리 위험은 제거됐지만 새로운 운영상 제약이 생겼다'는 양면적 사건으로 보는 게 정확하다.",
        decision: "소송 불확실성 해소 자체는 긍정적이나, 청소년 사용시간 제한 등 제품 변경이 실제 참여도·광고 매출에 미치는 영향은 앞으로 1~2분기 실적에서 확인 후 판단할 것.",
        watch: [
          "제품 변경(사용시간 제한 등) 시행 이후 인스타그램 등 앱의 사용자 참여도(DAU/시간) 변화",
          "다음 분기 광고 노출수·평균단가 추이(이번 조치의 광고 매출 영향 신호)",
          "유튜브·틱톡의 매칭 안전조치 도입 여부(30% 조건부 지급분 실현 여부)",
          "EU 등 다른 지역 규제당국의 유사 조치 확산 여부",
        ],
        confidence: "합의 금액·주별 배분·제품 변경 의무 등 합의 조건은 NPR·PBS·CNN 등 복수 정론 매체 보도 기준으로 신뢰도 높음. 주가 반응(+1.5%)과 애널리스트 목표주가·의견은 Yahoo Finance·CNBC 보도 기준. 제품 변경이 실제 참여도·매출에 미칠 영향의 크기는 아직 실적으로 검증되지 않은 추정임.",
        sources: [
          {title:"Meta, states agree to $17 billion settlement in child safety trial (NPR)", url:"https://www.npr.org/2026/08/26/nx-s1-5944781/meta-settlement-child-safety-lawsuit"},
          {title:"Meta reaches $17 billion settlement with states in landmark trial over teen social media addiction (PBS NewsHour)", url:"https://www.pbs.org/newshour/nation/meta-reaches-17-billion-settlement-with-states-in-landmark-trial-over-teen-social-media-addiction"},
          {title:"META's $17B Settlement Clears Legal Overhang — Analysts See Upside (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/meta-17b-settlement-clears-legal-185456691.html"},
          {title:"What investors should do with Meta now that the child privacy case has settled (CNBC)", url:"https://www.cnbc.com/2026/08/26/what-investors-should-do-with-meta-now-that-privacy-case-has-settled.html"},
        ],
      },
    ],
    analystLog: [{
      date: "2026-08-11",
      period: "2025-09-30 마감 분기(3분기) - 이후 분기는 정상화됨",
      headline: "2025년 3분기 순이익이 $2.71B(마진 5.3%)로 급락 - 직전(38.6%)·직후(38.0%) 분기와 비교하면 딱 한 분기만 뚝 떨어진 모양.",
      oneTime: "완전한 1회성 회계 이벤트 - 미국 세제개편법('OBBB Act')으로 인한 $15.93B 규모의 일회성·비현금성 법인세 비용(더 이상 쓸 일이 없어진 이연법인세자산을 상각 처리). 이 세금 이벤트 하나 때문에 실효세율이 원래 14%대여야 할 게 87%까지 치솟음. 같은 세제개편법이 QCOM(세금 환입으로 순이익 급증)에도 영향을 준 것과 뿌리가 같은 사건 - 이 시기 여러 미국 대기업에 공통으로 영향을 준 매크로 이벤트로 보임.",
      coreRead: "이 항목을 빼면 순이익은 $18.64B(EPS $7.25, 원래 $1.05에서 +$6.20)로 오히려 시장 예상보다 좋았음 - 본업은 전혀 나빠지지 않았고 회계상 세금 처리 하나가 그 분기만 순이익을 왜곡시킨 것. 직후 분기(2025-12 마감)에 마진이 바로 38.0%로 정상 복귀한 게 이 해석을 뒷받침함.",
      forecast: "이미 지나간 이벤트라 앞으로 반복될 가능성은 낮음(같은 세제개편법 이연자산 상각은 일회성 조정) - 오히려 회사는 이 법 덕분에 앞으로 미국 현금 법인세 부담이 줄어들 거라고 언급함(중장기 순이익엔 긍정적). 다음 분기부터는 이 왜곡 없이 광고 매출·AI 투자 성과 위주로 판단하면 됨.",
      confidence: "일회성 세금 항목의 존재·규모·직후 정상화는 회사 공식 발표 기준(신뢰도 높음)",
      sources: [
        {title:"Meta shares drop 9% despite earnings beat as company takes one-time tax charge (CNBC, 2025-10-29)", url:"https://www.cnbc.com/2025/10/29/meta-q3-earnings-report-2025.html"},
        {title:"Meta Q3 Profit Tumbles 83% Thanks to 'One Big Beautiful Bill Act' Tax Charge (TheWrap)", url:"https://www.thewrap.com/meta-earnings-q3-2025/"},
      ],
    }],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(3/5점) - 2025년 일회성 세금비용으로 왜곡됐던 마진이 정상화, 밸류에이션도 자기 역사 대비 싼 편",
        view: "META는 눌림목 점수 3/5점(52주 고점대비 -24.9%, 200일선 아래)으로 이 대시보드 기준 '매수 관심' 구간에 들어와 있어요. PER(18.5배)도 3년 평균(24.8배)보다 낮고, PER 유지 시나리오 기준가($629)가 지금 가격($590)보다 살짝 높아서(약 +6.6%) 밸류에이션 자체는 부담스러운 수준은 아니에요. 재무는 Q2'26 매출 +28.0%로 견조한데 영업이익률은 -12.1%p로 크게 눌렸어요(FCF 마진도 2.9%로 낮음) - 다만 이건 이미 확인된 사실이에요: 2025년 3분기 딱 한 분기만 마진이 5.3%까지 급락했던 게 미국 세제개편법(OBBB Act)發 $15.93B 비현금 법인세 비용 때문(완전한 1회성)이고, 그 항목을 빼면 순이익은 오히려 시장 예상을 상회했으며 직후 분기 바로 정상화됐어요. 지금 보이는 '수익성 압박'이 그 잔여 기저효과인지 새로운 투자 확대(AI 인프라) 때문인지는 다음 분기 마진 추이로 확인이 필요해요. 컨센서스는 내년 매출 +20%·EPS +7%로 견조한 성장을 예상하고 있어요.",
        increaseIf: [
          "다음 분기 영업이익률이 정상 궤도(과거 38%대)로 회복되는 신호가 보일 때",
          "광고 매출 성장이 계속 견조하게 유지될 때(현재 +28.0%)",
          "가격이 더 눌려 점수가 4점 이상으로 올라올 때",
        ],
        wrongIf: [
          "영업이익률 압박이 세금 기저효과를 넘어 AI 인프라 투자 확대로 인한 구조적인 것으로 확인될 때(다음 2개 분기 연속 마진 눌림)",
          "광고 매출 성장률이 눈에 띄게 둔화될 때",
        ],
        watchNext: [
          "다음 분기(Q3'26) 영업이익률 - 정상화 지속 여부의 핵심 지표",
          "AI 인프라 관련 CAPEX 가이던스",
          "리얼리티랩스(메타버스 부문) 손실 추이",
        ],
        confidence: "매출·영업이익률 수치는 SEC 공시 기반 캐시 데이터 · 2025년 3분기 세금비용 1회성 사실관계는 WebSearch로 확인해 analystLog에 이미 기록됨(신뢰도 높음) · '밸류에이션이 부담스럽지 않다'는 종합 판단은 Claude의 정성적 해석",
        sources: [],
      },
    ],
    role: {
      tags: ["SNS 광고(페이스북·인스타그램)", "AI 글래스·VR(리얼리티랩스)"],
      stars: 3,
      note: "디지털 광고 시장의 최상위권 강자로 2분기 광고 매출이 +27%(노출수·단가 둘 다 상승) 성장했어요. 다만 광고 자체는 대체 가능한 여러 플랫폼 중 하나고, AI 글래스·VR을 담당하는 리얼리티랩스는 여전히 분기 영업손실이 $46억대에 달하는 초기 투자 단계예요.",
    },
  },
  PLTR: {
    updated: "2026-09-04",
    customers: [
      "미국·동맹국 정부기관(국방·정보·국경보안·의료·재난대응) - Gotham·Foundry 플랫폼 사용, 전통적으로 매출의 큰 축",
      "상업(민간기업) 고객 - AIP(AI 플랫폼) 출시 이후 급성장, 2026년 미국 상업 고객 수 전년비 +42%",
      "전체 고객사 수 2025년 말 기준 954개(회사 10-K 공식 수치) - 이 중 상업(민간) 고객만 보면 2026년 1분기 트레일링 12개월 기준 1,007개로 처음 1,000개 돌파. 상위 20개 고객의 트레일링 12개월 평균 매출은 $9,390만로 전년 $6,460만 대비 증가",
    ],
    strengths: [
      "정부·상업 두 축 모두 고성장 - 2026년 상업 매출 +89%(전망 $39억)로 정부 매출 +58%($38억)보다 더 빠르게 성장, 상업 비중이 처음으로 정부를 추월할 전망(51%)",
      "AIP(AI 플랫폼)가 정부·상업 양쪽에서 실적 변곡점 역할 - 도입 기업의 실제 업무 적용 사례가 빠르게 늘고 있음",
      "'Rule of 40'(매출성장률+이익률) 145%로 엔비디아·마이크론급 소수만 도달하는 수준(analystLog 참고)",
    ],
    risks: [
      "⚠️ 매우 높은 밸류에이션이 핵심 리스크 - 트레일링 PER 150배 이상, 선행 PSR 40배 이상. 85~100배 선행 PER에서는 매출 성장률이 예상치를 10%p만 밑돌아도 배수가 100배→60배로 압축되며 주가 40% 하락 가능성이 있다는 분석이 있음",
      "고객 집중 리스크 - 상위 20개 고객 평균 매출(트레일링 12개월 $9,390만)을 근거로 역산하면 이 20개 고객만으로 2025년 전체 매출($45억)의 약 40% 안팎을 차지하는 것으로 추정됨(회사가 합계 비중을 직접 공시하진 않음). 10-K에 실제 명시된 수치로는 상위 3개 고객만으로도 매출의 16%(2025년 기준)를 차지 - 대형 고객 이탈 시 영향이 클 수 있음",
      "정부 계약 의존도가 높아 규제·예산 변화에 민감하고, 앤트로픽 등 민첩한 AI 경쟁사의 추격이 거세지는 중",
    ],
    sources: [
      {title:"Palantir Technologies Inc. FY2025 Form 10-K (SEC EDGAR, 공식 공시 - 고객수 954개·상위20개 평균매출·상위3개 매출비중 16% 등 근거)", url:"https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm"},
      {title:"Consensus shows Palantir's revenue shifting toward commercial segment (S&P Global)", url:"https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/06/consensus-shows-palantir-s-revenue-shifting-toward-commercial-segment"},
      {title:"Palantir: 3 Reasons That Could Pressure The Stock Down To $100 (Seeking Alpha)", url:"https://seekingalpha.com/article/4890388-palantir-3-reasons-that-could-pressure-the-stock"},
      {title:"Palantir Q1 FY 2026 Revenue Beats Estimates, US Demand Drives Outlook Raise (Futurum Group)", url:"https://futurumgroup.com/insights/palantir-q1-fy-2026-revenue-beats-estimates-us-demand-drives-outlook-raise/"},
    ],
    analystLog: [{
      date: "2026-09-04",
      period: "5개 분기 연속 마진 상승 (2025-03 마감 24.2% → 2026-03 마감 53.3%)",
      headline: "순이익률이 5개 분기 연속 상승: 24.2%→32.6%→40.3%→43.3%→53.3%. 매출도 같은 기간 $884M→$1.633B로 거의 2배, 성장률이 오히려 가속(YoY +85%).",
      oneTime: "1회성 회계 이벤트는 발견되지 않음. 다만 순이익률 상승분 전부가 영업레버리지(매출이 늘어도 비용은 덜 늘어나는 구조)인 건 아니고, 최근 분기 영업외손익(otherNonOperating)이 +$6,820만(2026-03)·+$9,180만(2026-06)로 꾸준히 늘고 있어서 대규모 현금성자산에서 나오는 <b>이자수익</b>도 순이익률을 끌어올리는 데 반복적으로 기여하는 것으로 보임(02 탭 '순이익률>영업이익률' 경고와 같은 근거). 'Rule of 40'(매출성장률+이익률, 영업 기준) 점수는 145%로 - 이 지표를 발표하는 기업 중 엔비디아·마이크론·SK하이닉스급 소수만 도달하는 수준.",
      coreRead: "본업이 정말로 좋아지고 있는 케이스로 보임 - 미국 상업(commercial) 부문 매출이 전년비 +133%, 정부 부문도 +84%로 두 축 다 가속 중. 조정 매출총이익률이 88%로 소프트웨어 사업 특성상 원가 부담이 거의 없는 구조.",
      forecast: "회사가 2026년 연간 매출 가이던스를 71% 성장으로 상향(컨센서스를 크게 상회)했다는 점에서 경영진 자신감이 높아 보임 - 다음 분기도 상업 부문 성장률(현재 +133%)이 유지되는지가 핵심 지표. 다만 이 종목은 이미 매우 높은 밸류에이션(FWD PER 60배 이상)에 거래되고 있어서, 실적이 아무리 좋아도 '기대치를 얼마나 더 뛰어넘는지'가 주가에는 실적 자체보다 중요할 수 있음 - 실적이 잘 나와도 기대치보다 낮으면 주가는 하락할 수 있다는 점은 밸류에이션 민감도(05 탭)와 함께 봐야 함.",
      confidence: "매출·마진 성장 숫자는 회사 공식 발표 기준(신뢰도 높음) · 밸류에이션 관련 해석은 일반적 시장 논리에 기반한 추정(신뢰도 중간)",
      sources: [
        {title:"Palantir Reports Q1 2026 U.S. Revenue Growth of 104% Y/Y (BusinessWire, 공식 발표)", url:"https://www.businesswire.com/news/home/20260503338048/en/Palantir-Reports-Q1-2026-U.S.-Revenue-Growth-of-104-YY-and-Revenue-Growth-of-85-YY-Raises-FY-2026-Revenue-Guidance-to-71-YY-Growth-and-U.S.-Comm-Revenue-Guidance-to-120-YY-Crushing-Consensus-Expectations"},
        {title:"Palantir Q1 2026 slides: US revenue tops 100% growth, Rule of 40 hits 145% (Investing.com)", url:"https://www.investing.com/news/company-news/palantir-q1-2026-slides-us-revenue-tops-100-growth-rule-of-40-hits-145-93CH-4657648"},
      ],
    }],
    viewLog: [
      {
        date: "2026-09-04",
        headline: "관망 - 매출 성장은 워치리스트 최상위권이지만 밸류에이션 부담이 커서 실적 서프라이즈 유무가 주가를 좌우할 가능성",
        view: "PLTR은 눌림목 점수 1/5점(52주 고점대비 -16.0%, 200일선 위)으로 저가 신호는 아니에요. PER(108.6배)은 3년 평균(270.5배)보다는 낮지만 절대 수준으로 여전히 이 대시보드의 '위험' 기준(80배)을 크게 웃돌아요 - PLTR은 이 워치리스트에서 상장 이력이 짧아(3년 이하) PER 밴드가 종목별 자체 계산이 아니라 전체 통계로 대체 적용되는 종목이기도 해서, PER 유지 시나리오 숫자는 다른 종목보다 더 참고용으로만 봐야 해요. 재무는 정말 좋아요 - Q2'26 매출 +92.8%(워치리스트 최상위권), 영업이익률 +20.3%p, FCF 마진 62.1%로 5개 분기 연속 마진이 상승 중이고 1회성 회계 이벤트는 발견되지 않았어요. 다만 순이익률이 영업이익률보다 눈에 띄게 높은 건(02 탭 참고) 영업레버리지뿐 아니라 최근 분기 꾸준히 늘고 있는 영업외 이자수익(대규모 현금성자산 보유 효과)도 같이 기여하고 있어서, 본업만의 수익성을 볼 땐 영업이익률 쪽을 기준으로 보는 게 더 정확해요(Rule of 40 점수는 145%로 영업 기준으로도 여전히 최상위권). 문제는 이 좋은 실적이 이미 매우 높은 밸류에이션에 상당 부분 반영돼 있다는 점이에요 - 그래서 이 종목은 '실적이 좋냐 나쁘냐'보다 '컨센서스 기대치를 얼마나 넘어서냐(서프라이즈)'가 주가에 더 중요할 수 있어요. 컨센서스는 내년 매출 +49%·EPS +44%로 이미 높은 기대를 반영하고 있어요.",
        increaseIf: [
          "매출 성장률이 컨센서스(+49%)를 상회하는 서프라이즈가 실제로 나올 때",
          "정부·상업 부문 대형 신규 계약이 발표될 때",
          "가격이 눌려 눌림목 점수가 2점 이상으로 올라올 때(밸류에이션 부담이 완화되는 시점)",
        ],
        wrongIf: [
          "매출 성장률이 둔화되거나(현재 +92.8%에서 크게 낮아짐) 컨센서스를 밑도는 실적이 나올 때",
          "이미 높은 밸류에이션 상태에서 성장 둔화 시그널이 겹칠 때(밸류에이션 조정 위험)",
        ],
        watchNext: [
          "다음 실적에서 매출 성장률·순고객유치(잔존율)",
          "정부 부문 vs 상업 부문 매출 비중 변화",
          "신규 대형 계약 발표 여부",
        ],
        confidence: "매출·영업이익률·FCF 수치는 SEC 공시 기반 캐시 데이터 · Rule of 40 등 정성적 평가는 이전 조사에서 확인(businessNotes 참고) · '밸류에이션 부담이 크다'·'서프라이즈가 중요하다'는 판단은 Claude의 정성적 해석",
        sources: [],
      },
    ],
    newsLog: [
      {
        date: "2026-09-03",
        headline: "Palantir, PwC US와 AI 기반 딜 플랫폼 전략적 확대 - Foundry/AIP 기반 M&A 분석 도구 개발",
        facts: ["Palantir Technologies가 2026-09-03 컨설팅 대형사 PwC US와의 전략적 제휴를 확대한다고 발표했다.", "양사는 Palantir의 Foundry(데이터 플랫폼)와 AIP(AI Platform)를 기반으로 'M&A/딜 인텔리전스' 전용 솔루션을 공동 개발하기로 했다 - 기업의 인수·합병 분석·의사결정 프로세스를 AI로 자동화하는 도구", "이는 기존 정부·공공부문 중심의 Palantir 고객 기반을 민간 엔터프라이즈(특히 금융·전략부서) 영역으로 확대하려는 움직임이다", "발표 당일 PLTR 주가는 +7% 상승했고, 이는 같은 날 Michael Burry의 공매도 리포트에 대한 '강한 반박' 신호로 해석되었다", "Palantir는 최근 Q2에서 YoY +93% 매출 성장 및 정부/상업 부문 균형 성장을 기록하며 몸집을 키우는 중이다"],
        why: ["Palantir의 핵심 약점은 '정부 고객 의존도 과다'(역사적으로 수익의 70% 이상)였다. 이번 PwC 협력 확대는 이 위험을 '민간 엔터프라이즈로 분산'하려는 전략적 이동이다.", "M&A/딜 인텔리전스는 '고부가 가치 사용 케이스'로, (1) 고객당 계약 규모가 크고, (2) 반복적 갱신 가능성이 높으며, (3) 클라우드 기반(SaaS처럼 확장 가능)이다. 따라서 Palantir의 '느린 고객 확보'에서 탈피할 수 있는 기회다.", "PwC와의 파트너십은 'PwC의 3,000명+ M&A 전문가 네트워크'가 곧 Palantir의 판매 채널이 될 수 있다는 뜻으로, 고객 유입이 비용 효율적이 될 수 있다.", "이 발표는 '기술적으로 보면 평범한 수준의 협력'이지만, '투자자 심리'로는 Palantir가 '미래 성장 경로를 명확히 제시'하는 신호로 작용했고, 이것이 Michael Burry의 공매도 공격에 대한 '반박'이 되었다고 시장이 평가한 것 같다."],
        beginner: ["Palantir는 원래 정부(FBI, CIA, 군부) 같은 곳을 주 고객으로 했어요. 이게 수익의 70~80%를 차지해서 '정부 회사'라는 꼬리표가 붙어있었거든요.", "이번에 PwC(회계·컨설팅 대기업)와 손잡고 기업들의 M&A(기업 인수·합병) 분석을 도와주는 AI 도구를 만들기로 했어요.", "쉽게 말해, '정부 고객'만 주로 했던 회사가 이제 '일반 기업들'도 정말 본격적으로 노린다는 신호예요.", "발표 당일 주가가 7% 올랐는데, 그 이유는 이전에 유명한 투자자가 'Palantir는 성장 한계가 있다'고 공격했는데, Palantir가 '아니다, 우리는 새로운 시장이 있다'고 답하는 느낌이라서예요."],
        watch: ["PwC 협력을 통한 민간 부문 신규 고객 확보 실제 진행 현황 (향후 2~3분기 상업 고객 성장률 확인)", "M&A 인텔리전스 솔루션의 출시 시기 및 초기 채용 현황", "Palantir의 정부/상업 부문 매출 비율 변화 (정부 의존도 감소 추이)", "Michael Burry와 다른 공매도세의 추후 보고서 (이번 발표에 대한 재평가)", "PwC 외 다른 BigFour 컨설팅사(Deloitte, EY, KPMG)의 Palantir 도입 여부"],
        interpretation: "이번 PwC 협력 확대 발표는 'Palantir의 정부 고객 의존도 감소 전략'의 구체적 사례로 보인다. 기술 수준은 이미 보유했고, 이제 '민간 고객에게 어떻게 판매할 것인가'라는 영업 문제를 PwC와의 전략적 제휴로 풀려는 움직임이다. 단기적으로는 '새로운 성장 경로 제시'로 투자자 신뢰도를 높였지만, 실제로는 향후 2~3분기 실적에서 상업 고객 성장이 실현되지 않으면 '기대 vs. 실망' 리스크가 있다.",
        decision: "이 발표 자체는 Palantir의 장기 성장 잠재력 재확인 신호로 긍정적이나, 단기적으로는 이미 주가에 +7% 반응이 충분히 반영됐을 가능성이 높다. 실제 상업 고객 성장이 다음 분기부터 눈에 띄게 나타나는지 확인할 필요가 있으며, 만약 기대에 못 미친다면 이 발표 후 주가가 조정될 위험 있음. 단기 매수는 이미 할 만큼 했으니, 향후 실적 확인 후 재평가할 것.",
        confidence: "PwC 협력 발표 사실과 솔루션 범위(M&A 인텔리전스)는 Palantir 공식 발표 및 복수 매체(247wallst, Cramer 코멘트 등) 보도로 신뢰도 높음. 구체적 계약 규모·타임라인·고객 확보 일정은 미공개되어 추정 단계.",
        sources: [
          { title: "Palantir Rallies 7% as PwC Alliance Counters Michael Burry Bear Case (247wallst)", url: "https://247wallst.com/investing/2026/09/03/palantir-rallies-7-as-pwc-alliance-counters-michael-burry-bear-case-servicenow-climbs-5-salesforce-gains-3/" },
          { title: "Jim Cramer explains Palantir, Salesforce rebound (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/jim-cramer-explains-palantir-salesforce-rebound-011700386.html" },
          { title: "Palantir vs. Salesforce: Two Visions of Enterprise AI (247wallst)", url: "https://247wallst.com/investing/2026/08/09/palantir-vs-salesforce-two-visions-of-enterprise-ai-one-clear-winner/" },
          { title: "Palantir Technologies Q2 2026 earnings: 93% sales growth, raised guidance (Palantir Investor Relations)", url: "https://investors.palantir.com" },
        ],
      },
      {
        date: "2026-08-23",
        headline: "트럼프 측 신탁 계좌, 6월에 팔란티어 주식 매수한 사실이 재무공개서류로 드러남",
        importance: "medium",
        tone: "mixed",
        horizon: "수주~수개월, 정치적 논란이 잦아들면 영향력 감소",
        facts: [
          "미 정부윤리국(OGE) 재무공개서류에 따르면 트럼프 측 계좌가 6월 3일, 23일, 24일 세 차례에 걸쳐 팔란티어(PLTR) 주식을 매수한 것으로 확인됐어요.",
          "6월 3일 매수분은 1,001~15,000달러 구간으로 신고됐고(공직자 재무공개는 정확한 금액 대신 구간으로 신고), 6월 23·24일 매수는 6월 14일 미국-이란 평화협정 발표 직후 이뤄졌지만 정확한 금액은 공개되지 않았어요.",
          "이 소식이 보도된 8월 23일 기준 PLTR 주가는 8월 한 달간 +46%, 8월 3일 실적발표 이후로는 +43% 급등한 상태였어요.",
          "같은 시기 애널리스트 평균 목표주가는 197.89달러(컨센서스 Moderate Buy, 매수 16·보유 4·매도 2)였고, 포워드 PER은 112.2배로 업종 중앙값 23.19배를 크게 웃돌았어요.",
        ],
        why: [
          "팔란티어는 국방·정보 등 정부 계약 의존도가 높은 회사인데, 그 계약을 발주하는 행정부의 수장 측이 개인적으로 주식을 보유하고 있다는 사실은 이해상충 논란을 키울 수 있어요.",
          "이미 트레일링 PER 150배 이상으로 밸류에이션이 높은 상태에서 주가가 최근 한 달 새 추가로 46% 뛴 만큼, 정치적 뒷받침에 대한 기대가 일부 반영돼 있다면 그 기대가 흔들릴 때 변동성이 커질 수 있어요.",
        ],
        beginner: [
          "미국 대통령 쪽 계좌가 6월에 팔란티어 주식을 샀다는 게 정부의 공개 신고서를 통해 알려졌어요.",
          "정확히 얼마를 샀는지는 세세히 안 밝혀졌고(가장 작은 건은 100만원~2천만원 정도 구간), 그 자체가 불법은 아니지만 '정부와 계약이 많은 회사 주식을 정부 관계자가 산다'는 점에서 뒷말이 나올 수 있는 사안이에요.",
          "이 소식이 나온 시점에 팔란티어 주가는 이미 실적발표 이후 한 달 새 40% 넘게 오른 상태였어요.",
        ],
        interpretation: "직접적인 실적 재료는 아니지만, 정부 의존도가 높은 팔란티어에 정치적 이해상충 프레임이 씌워질 수 있는 뉴스로, 밸류에이션이 이미 부담스러운 상황에서 헤드라인 리스크 하나가 추가된 셈이에요.",
        decision: "이 뉴스만으로 매매 판단을 바꿀 필요는 없지만, 이미 고평가 구간에서 정치적 논란까지 겹치면 단기 변동성이 커질 수 있다는 점을 감안해 포지션 크기를 관리하는 게 좋아요.",
        watch: [
          "추가 재무공개(향후 분기 OGE 신고)에서 매도·매수 내역이 더 나오는지",
          "이해상충 관련 의회나 언론의 후속 문제 제기 여부",
          "포워드 PER 112배 수준에서 밸류에이션 되돌림이 나오는지",
        ],
        confidence: "매수 날짜(6/3, 6/23, 6/24)와 6/3 매수분의 금액 구간($1,001~$15,000)은 OGE 재무공개서류를 인용한 TipRanks 기사에 직접 기재된 확인된 사실이에요. 정치적 함의(이해상충 논란, 주가에 미친 영향)에 대한 해석은 제 판단이 섞인 부분이니 구분해서 봐 주세요.",
        sources: [
          {
            title: "Trump's Accounts Bought Palantir Stock in June. Is PLTR Still a Buy After a 46% Rally?",
            url: "https://www.tipranks.com/news/trumps-accounts-bought-palantir-stock-in-june-is-pltr-still-a-buy-after-a-46-rally",
          },
        ],
      },
    ],
    role: {
      tags: ["정부·상업 AI 데이터분석 플랫폼(Gotham·Foundry·AIP)"],
      stars: 4,
      note: "정부(국방·정보) 분야는 진입장벽이 높아 대체하기 어려운 위치고, 상업 매출도 전년비 +89%로 정부(+58%)보다 빠르게 커서 처음으로 정부 비중을 추월할 전망이에요. 'Rule of 40' 점수가 145%로 엔비디아·마이크론급 소수만 도달하는 수준이지만, 트레일링 PER 150배 이상의 매우 높은 밸류에이션이라 실적보다 기대치 충족 여부가 주가를 더 좌우할 수 있어요.",
    },
  },
  TSM: {
    updated: "2026-08-10",
    customers: [
      "엔비디아·애플·AMD·퀄컴·브로드컴·아마존·구글·인텔·테슬라 등 사실상 전세계 팹리스(설계전문) 반도체 기업 대부분에 위탁생산 공급",
      "2026년 들어 엔비디아가 애플을 제치고 최대 고객으로 올라섬(추정 매출 비중 엔비디아 약 22% vs 애플 약 18%) - AI 반도체 수요 급증이 배경",
      "고성능컴퓨팅(HPC, AI 가속기 등)이 2025년부터 매출 비중 1위(58%)로 모바일(애플向)을 추월",
    ],
    strengths: [
      "첨단 파운드리(위탁생산) 시장 점유율 72%대(2026년 1분기)로 압도적 1위, 격차가 더 벌어지는 추세",
      "가장 앞선 공정기술 보유 - 2nm 양산 시작(애플이 초기 고객), 3nm은 수요가 공급을 초과할 정도로 강세",
    ],
    risks: [
      "⚠️ 대만해협 지정학적 리스크 - 첨단 공정(5nm 이하)의 90%가 여전히 대만에 집중돼 있음. 미국 애리조나 공장에 1650억달러 투자를 발표했지만, 2nm 이하 첨단 공정이 대만 밖에서 의미 있는 규모로 돌아가려면 2027~2028년 이후로 예상됨 - 지정학적 리스크가 단기간엔 구조적으로 해소되기 어려움",
      "고객사(엔비디아 등)의 AI 설비투자 사이클에 실적이 크게 연동 - AI 수요가 꺾이면 영향이 큼",
      "이 종목은 대만 현지 상장 기준으로 잡혀 시가총액·52주 고저가가 이 대시보드에서 의도적으로 숨겨져 있음(CLAUDE.md '데이터 소스' 항목 참고) - 재무 수치 비교 시 통화 단위에 유의",
    ],
    sources: [
      {title:"Nvidia set to supplant Apple as TSMC's top customer (CNBC, 2026-01-26)", url:"https://www.cnbc.com/2026/01/26/nvidia-set-to-supplant-apple-as-tsmcs-largest-customer.html"},
      {title:"TSMC Gains Foundry Share in Q1 '26 (Semiecosystem)", url:"https://marklapedus.substack.com/p/tsmc-gains-foundry-share-in-q1-26"},
      {title:"Geopolitical Tension Puts TSMC Valuation And Supply Chain Resilience In Focus (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/geopolitical-tension-puts-tsmc-valuation-140635317.html"},
    ],
    newsLog: [
      {
        date: "2026-08-13",
        headline: "2분기 실적에서 2026년 매출 가이던스 +40%로 상향, 설비투자(CAPEX)도 $60~64B로 추가 상향 + 소니와 이미지센서 합작 승인",
        coreAnalysis: "TSMC가 2분기 실적 발표에서 2026년 연간 매출 성장률 전망을 '40% 초반'으로 상향했음(AI 반도체 수요가 근거) - 이미 강했던 기존 전망을 또 한 번 올린 것. 같은 발표에서 2026년 설비투자(CAPEX) 전망도 기존보다 최소 $4B 높인 $600~640억 규모로 상향함. 고성능컴퓨팅(HPC, AI 가속기 매출이 여기 잡힘) 비중이 2분기 매출의 66%까지 올라와 있음(기존 CLAUDE.md에 기록된 2025년 58%에서 더 상승). 이사회는 이 CAPEX 확대와 함께 소니와의 이미지센서 합작(구마모토, 총 $6.3B 투자, 차세대 스마트폰 카메라 센서용) 승인 및 2분기 배당도 같이 의결함.",
        whyItMatters: "이미 업계 전망을 상회하던 회사가 가이던스를 '더' 올렸다는 건 AI 반도체 수요가 이 회사 입장에서 여전히 공급이 수요를 못 따라가는 국면이라는 뜻 - 위 사업요약(customers)에 이미 기록된 '엔비디아가 애플을 제치고 최대 고객이 됨' 흐름과 일관됨. 다만 CAPEX를 계속 늘린다는 건 그만큼 감가상각 부담도 커진다는 뜻이라 마진에는 양날의 검이고, 소니 JV는 반도체 위탁생산 본업과는 결이 다른 신사업(이미지센서)이라 별도 리스크·수익 구조로 봐야 함. 대만해협 지정학 리스크(기존 risks에 이미 기록)는 이번 발표로 바뀐 게 없음 - 실적과는 별개 축.",
        beginnerSummary: "TSMC가 실적 발표에서 '올해 매출이 우리 예상보다 더 많이 늘 것 같다'고 전망치를 또 올렸어요. AI 반도체를 만드는 공장을 더 짓겠다며 설비투자 계획도 늘렸고요. 이건 그만큼 주문이 밀려든다는 좋은 신호예요. 추가로 소니랑 손잡고 카메라 센서(스마트폰에 들어가는 부품)를 같이 만드는 새 사업도 승인했어요. 다만 공장을 더 짓는다는 건 돈이 그만큼 더 나간다는 뜻이라, 무조건 좋다고만 볼 건 아니에요.",
        confidence: "매출·CAPEX 가이던스 수치와 JV 승인은 회사 공식 실적발표·이사회 결의 기준(신뢰도 높음)",
        sources: [
          {title:"TSMC raises capex and revenue forecast, highlighting growing AI chip demand (Yahoo Finance)", url:"https://finance.yahoo.com/markets/article/tsmc-raises-capex-and-revenue-forecast-highlighting-growing-ai-chip-demand-113101950.html"},
          {title:"World's biggest chipmaker TSMC's sales surge 45% amid buoyant AI demand (CNBC)", url:"https://www.cnbc.com/2026/08/10/tsmc-revenue-surge-ai-chip-big-tech.html"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "관망 - 저가 신호는 아니지만 AI 파운드리 슈퍼사이클의 가장 순수한 수혜주 중 하나",
        view: "TSM은 눌림목 점수 1/5점(52주 고점대비 -10.7%, 200일선 위)으로 저가 신호는 아니에요. PER(25.2배)도 3년 평균(21.7배)보다 오히려 약간 높아서, 다른 반도체 종목들과 달리 '역사적으로 싸다'고 보기도 어려워요. 다만 재무는 이 워치리스트에서 손꼽히게 좋아요 - Q2'26 매출 +36.0%·영업이익률 +10.7%p로 매출·이익이 함께 빠르게 개선 중이고, 유동비율·부채비율도 안정적이에요. 회사가 직접 2026년 매출 가이던스를 40%대로 재상향하고 CAPEX도 $60~64B로 늘렸는데, 이건 수요가 공급 확장 속도를 못 따라갈 정도로 강하다는 뜻으로 해석돼요. 엔비디아가 2026년에 애플을 제치고 최대 고객으로 올라섰다는 점(WebSearch로 확인)도 AI 칩 수요 집중을 보여줘요. 다만 대만해협 지정학 리스크는 여전하고, 애리조나 공장은 2027~2028년 이후에나 유의미한 생산 비중을 가질 것으로 보여 지리적 분산 효과는 아직 제한적이에요. 컨센서스는 내년 매출 +34%·EPS +29%로 강한 성장을 예상해요.",
        increaseIf: [
          "가격이 눌려 눌림목 점수가 2점 이상으로 올라올 때(지금은 실적 대비 밸류에이션 매력이 크지 않은 구간)",
          "CAPEX 확대가 실제 매출 가이던스 재상향으로 계속 뒷받침될 때",
        ],
        wrongIf: [
          "매출 가이던스 재상향 흐름이 꺾이거나(수요 둔화 신호), 대만해협 지정학 리스크가 실제로 고조되는 구체적 사건이 발생할 때",
          "엔비디아 등 최대 고객사향 매출 집중도가 리스크로 부각될 때(단일 고객 의존)",
        ],
        watchNext: [
          "3분기 실적에서 CAPEX·가이던스 추가 조정 여부",
          "대만해협 관련 지정학 뉴스",
          "애리조나 공장 가동 진행 상황",
        ],
        confidence: "매출·영업이익률 수치는 SEC 공시 기반 캐시 데이터(다만 20-F/IFRS라 SEC us-gaap 검증은 적용 안 됨, Finnhub/Yahoo 폴백 기준) · CAPEX·가이던스·최대고객 관련 사실관계는 WebSearch로 확인(newsLog 참고) · 지정학 리스크 판단은 일반적으로 알려진 사실이며 Claude가 새로 조사한 건 아님",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기)",
        headline: "2분기 매출 1조 2,703.8억 대만달러(약 402.0억 달러)로 전년 대비 36.0%, 전분기 대비 12.0% 증가하며 시장 컨센서스(약 1조 2,640억 대만달러)를 웃돌았고, 순이익은 7,065.6억 대만달러(EPS 27.25대만달러, ADR 기준 주당 4.31달러)로 전년 대비 77.4% 급증했어요.",
        oneTime: "공식 실적발표 자료(2Q26 Earnings Release, SEC 제출본)에는 손상차손이나 환헤지 손익 같은 일회성 항목이 별도로 공시되지 않았어요. 다만 2나노 초기 램프업에 따른 3~4%p 수준의 매출총이익률 희석은 일회성이 아니라 신규 공정 초기에 반복적으로 나타나는 구조적 비용이라 구분해서 봐야 해요.",
        coreRead: "7나노 이하 첨단 공정이 웨이퍼 매출의 77%(3나노 30%, 2나노 3%)를 차지했고 HPC(AI 포함) 매출은 전분기 대비 20% 늘며 전체 매출의 66%까지 올라왔어요. 매출총이익률은 2분기 67.7%에서 3분기 가이던스 66% 중간값으로 낮아지는데, 이는 수요 둔화가 아니라 2나노 램프업 초기 원가 부담 때문이라고 회사가 명시했어요. 2026년 연간 매출 성장 가이던스를 '전년 대비 40%대 초반'으로 재상향했고(기존 대비 상향), 2026년 자본지출 가이던스도 520~560억 달러에서 600~640억 달러로 올렸어요. 애리조나에는 기존 확약분 위에 1,000억 달러를 추가 투자해 총 2,650억 달러 규모로 늘리고, 2나노 양산 가능한 팹과 첨단 패키징까지 포함해 최대 12개 공장(기존 8개+신규 4개)을 검토 중이라고 밝혔지만, 유의미한 생산 비중을 갖기까지는 여전히 시간이 걸릴 사안이에요. CEO는 가격을 '한 번에 4~5배' 올리는 방식이 아니라 고객과의 장기 파트너십을 우선한다고 밝혀, 가격 결정력은 있지만 공격적으로 쓰기보다 물량 확대와 첨단 공정 믹스 개선으로 마진을 지키는 전략으로 읽혀요.",
        forecast: "3분기 매출은 회사 가이던스(446억~458억 달러) 상단에 근접하거나 소폭 상회하고, 2나노 램프 디스카운트에도 매출총이익률은 가이던스 중간값(66%) 이상을 지킬 거라고 봐요. 만약 3분기 매출이 440억 달러를 밑돌거나 매출총이익률이 65% 아래로 떨어지면 이 예상은 틀린 걸로 봐주세요.",
        confidence: "매출·순이익·EPS·기술노드별 매출 비중·가이던스 수치는 TSMC 공식 실적발표 자료와 SEC 제출본에 근거한 확인된 사실이에요. 애리조나 투자 확대(1,000억 달러 추가, 총 2,650억 달러)와 팹 개수, 2026년 자본지출 상향폭, HPC 매출 비중은 실적 컨퍼런스콜과 보도를 종합한 것으로 역시 확인된 수치예요. 반면 가격 결정력에 대한 해석과 3분기 실적 전망은 제 개인적인 판단이라 틀릴 수 있어요.",
        sources: [
          {
            title: "TSMC Reports Second Quarter EPS of NT$27.25",
            url: "https://pr.tsmc.com/english/news/3326",
          },
          {
            title: "TSMC Q2 2026 earnings: Record profit, $100 billion Arizona investment",
            url: "https://finance.yahoo.com/markets/stocks/articles/tsmc-q2-2026-earnings-record-112109987.html",
          },
          {
            title: "TSMC to invest additional $100 billion in Arizona after second-quarter profit soars 77%",
            url: "https://www.cnbc.com/2026/07/16/tsmc-second-quarter-profit-.html",
          },
          {
            title: "Taiwan Semiconductor Reports Q2 2026 Results: Full Earnings Call Transcript",
            url: "https://www.benzinga.com/news/26/07/60504620/taiwan-semiconductor-reports-q2-2026-results-full-earnings-call-transcript",
          },
          {
            title: "Taiwan Semiconductor Manufacturing Co Ltd",
            url: "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000451/a2q26e_withguidancexfinal.htm",
          },
        ],
      },
    ],
    role: {
      tags: ["반도체 위탁생산(파운드리)", "최선단 공정(2nm 등)"],
      stars: 5,
      note: "첨단 파운드리 시장 점유율 72%대로 격차가 더 벌어지는 중이에요. 엔비디아·애플·AMD·퀄컴 등 거의 모든 팹리스 기업이 최선단 칩을 맡길 곳이 사실상 이 회사뿐이라 2026년 매출 가이던스를 40%대로 재상향했을 정도예요. 대만해협 지정학 리스크가 있지만 애리조나 공장이 유의미한 생산 비중을 갖기까지는 2027~2028년 이후로 예상돼 대체 생산기지 확보는 아직 제한적이에요.",
    },
  },
  // 2026-08-10 추가: 워치리스트 26종목 전체를 캐시 데이터만으로(비용 없이) 스캔해서
  // "최근 분기 순이익률이 직전 4분기 평균 대비 ±15%p 이상 벌어졌거나 흑자/적자가 뒤집힌" 종목을
  // 자동 탐지함(10종목 감지) - 그중 결정에 중요해 보이는 5개(메모리 3종목+MRVL+INTC)를 조사해
  // 추가함. 나머지(NVDA·META·PLTR)는 아직 미착수 - 필요시 요청.
  MU: {
    updated: "2026-09-04",
    customers: [
      "AI 데이터센터 기업(클라우드메모리 부문, +100% YoY 최대 성장) - 엔비디아 등에 HBM(고대역폭메모리) 공급, 블랙웰 B200/B300 플랫폼에 탑재",
      "전략적 고객 16곳과 장기공급계약 체결 - D램 물량의 약 20%·낸드 물량의 약 3분의 1을 차지(대형고객 4곳+중견고객 3곳)",
      "모바일·PC 제조사(모바일&클라이언트 부문, +63%), 자동차·산업(+49%)",
    ],
    strengths: [
      "2026년 HBM 공급이 이미 완판(가격·물량 모두 계약 완료) - 차세대 HBM4까지 포함해 공급부족 상태가 지속될 전망",
      "메모리(D램·낸드) 슈퍼사이클 한가운데 있음 - AI 데이터센터가 전세계 메모리 공급의 상당 부분을 소비하며 가격이 분기마다 급등",
      "4대 사업부문(클라우드메모리·코어데이터센터·모바일클라이언트·자동차임베디드) 전부 두 자릿수 이상 성장",
    ],
    risks: [
      "⚠️ 현재의 폭발적 성장은 회계상 '1회성'이 아니라 산업 사이클(메모리 슈퍼사이클)이라는 점을 명확히 구분해야 함 - 사이클은 과거에도 항상 꺾인 전례가 있어서 영원하지 않음(상세는 analystLog 참고)",
      "메모리는 전통적으로 가격 변동성이 매우 큰 상품(commodity) 성격의 사업 - 공급 과잉 국면이 오면 가격·마진이 빠르게 반전될 수 있음",
    ],
    sources: [
      {title:"Micron Technology Q1 FY 2026 Sets Records; Strong Q2 Outlook (Futurum Group)", url:"https://futurumgroup.com/insights/micron-technology-q1-fy-2026-sets-records-strong-q2-outlook/"},
      {title:"Micron Technology (MU): Sold-Out HBM Supply and AI Tailwinds Point to Strong 2026 Growth (Tickeron)", url:"https://tickeron.com/blogs/micron-technology-mu-sold-out-hbm-supply-and-ai-tailwinds-point-to-strong-2026-growth-12100/"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 사상 최대 실적·강력한 가이던스, 다만 Netlist 특허소송이 최근 하락의 추가 변수",
        importance: "medium",
        tone: "positive",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-06-24 3분기(FY26) 실적 발표 후 주가 +14.6%, 4분기 가이던스도 매출총이익률 약 86%로 강력했다.", "HBM4가 주요 고객向 대량 양산 중이며 HBM4E는 2027년 양산 예정이다 - AI 메모리 로드맵이 진행 중이다.", "8월 들어 반도체 업종 전반 매도세로 조정을 받았고, Netlist의 DDR5 특허소송(ITC 포함)이 추가 하락 요인으로 지목됐다."],
        why: ["실적·가이던스 자체는 매우 강력해 사업 펀더멘털에는 문제가 없어 보이나, 특허소송 리스크와 업종 밸류에이션 조정이 최근 하락의 원인이다."],
        beginner: ["회사 성적과 앞으로의 계획은 아주 좋아요. 다만 다른 회사(Netlist)가 특허 소송을 걸어서 그 리스크 때문에 최근 주가가 눌렸어요."],
        interpretation: "실적·로드맵은 명확히 긍정적이나 소송 결과는 불확실성으로 남아있어 완전한 무위험은 아니다.",
        decision: "Netlist 특허소송의 진행 상황을 확인 포인트로 삼을 것.",
        watch: ["Netlist 특허소송 경과(ITC 포함)", "HBM4 양산 확대 진행 상황"],
        confidence: "실적 수치는 회사 공식 발표(GlobeNewswire) 기준으로 신뢰도 높음. 소송 관련은 다수 매체 교차 확인.",
        directionCheck: true,
        sources: [
        {title:"Micron Technology, Inc. Reports Record Results for the Third Quarter of Fiscal 2026 (GlobeNewswire)", url:"https://www.globenewswire.com/news-release/2026/06/24/3317151/14450/en/micron-technology-inc-reports-record-results-for-the-third-quarter-of-fiscal-2026.html"},
        {title:"Micron Retreats as Patent Dispute Clouds AI Outlook (TradingPedia)", url:"https://www.tradingpedia.com/2026/08/18/micron-retreats-as-patent-dispute-clouds-ai-outlook/"},
        ],
      },
      {
        date: "2026-08-20",
        headline: "Netlist가 DDR5 RDIMM·MRDIMM 특허 침해로 ITC·연방법원 제소 - AI 메모리 슈퍼사이클 호재 속 주가 하루 -7%",
        coreAnalysis: "특허관리회사 Netlist가 마이크론을 상대로 DDR5 RDIMM(서버용 D램 모듈)·MRDIMM 관련 특허를 침해했다며 미국 국제무역위원회(ITC)와 연방법원에 새로운 소송을 제기했다. 이 소식이 알려진 8/18(화) 마이크론 주가는 $1,011.75에서 $940.76로 -7.02% 하락했다 - 같은 주 초(월요일) 월스트리트가 AI 메모리 수요 가속을 이유로 목표주가를 대거 상향(New Street·UBS)했던 강세 흐름이 하루 만에 꺾인 것이다.",
        whyItMatters: "위 risks 항목에 '메모리는 가격 변동성이 큰 상품(commodity) 사업'이라고 이미 적어뒀는데, 이번 건은 그와는 다른 종류의 리스크 - 사업 자체(가격 사이클)가 아니라 특허 소송이라는 법적 리스크다. ITC 제소는 승소 시 해당 제품의 미국 수입을 막을 수 있어(수입금지명령), 단순 손해배상 소송보다 잠재적 파급力이 크다. 다만 Netlist는 과거에도 삼성전자 등 여러 메모리 업체를 상대로 유사한 특허 소송을 반복해온 이력이 있는 특허관리전문회사(NPE)라, 이번 제소가 실제 매출에 타격을 줄지 아니면 초기 법적 절차 단계에서 소음으로 그칠지는 소송 진행 상황을 지켜봐야 한다.",
        beginnerSummary: "Netlist라는 회사가 '마이크론이 우리 특허(서버용 메모리 관련 기술)를 허락 없이 썼다'며 미국 무역위원회와 법원에 소송을 걸었어요. 이 소식에 마이크론 주가가 하루 만에 7% 빠졌는데, 하필 그 전날 월스트리트가 'AI 메모리 수요가 폭발적'이라며 목표주가를 크게 올렸던 직후라 낙폭이 더 눈에 띄었어요. 다만 이 회사(Netlist)는 예전에도 다른 메모리 회사들에 비슷한 특허 소송을 여러 번 건 적이 있어서, 이번에도 실제 타격으로 이어질지 아니면 흔한 법적 다툼으로 끝날지는 좀 더 지켜봐야 해요.",
        confidence: "소송 제기 사실과 주가 하락폭(-7.02%)은 매체 보도 기준(신뢰도 높음) · 최종 소송 결과와 매출 영향은 미확정(추정)",
        sources: [
          {title:"MU Stock Slides As Netlist Patent Fight Hits DDR5 Outlook (StocksToTrade)", url:"https://stockstotrade.com/news/micron-technology-inc-mu-news-2026_08_18-3/"},
          {title:"Micron Technology Stock Extends Rally As Wall Street Chases AI Upside (StocksToTrade)", url:"https://stockstotrade.com/news/micron-technology-inc-mu-news-2026_08_17-3/"},
        ],
      },
      {
        date: "2026-08-24",
        headline: "Micron CEO, CNBC 인터뷰에서 'AI發 메모리 공급부족 2028년까지 못 따라잡을 수도' 경고 - MU 주가 4% 하락, 동종업계 WDC·SNDK는 급등",
        importance: "high",
        tone: "mixed",
        horizon: "향후 2~3년(2028년까지 공급부족 지속 전망), 단기 주가는 즉시 반응",
        facts: ["Micron CEO 산제이 므로트라가 CNBC 인터뷰(2026-08-22)에서 AI발 고성능·저전력 메모리 수요가 '일시적 붐이 아니라 구조적'이라며, 5년 단위 장기 고객계약이 이를 증명한다고 말했다. 이는 2026년 6월 실적발표 콜에서 '2028년 업계 공급이 점진적으로 개선될 전망이지만 언제 수요를 따라잡을지는 가늠할 수 없다'고 한 발언을 재확인·강조한 것이다. 별도 자료에서는 AI발 D램·낸드 수요가 올해 메모리 산업 전체 시장의 50%를 넘어설 것으로 전망됐고, 골드만삭스는 2026년 D램 공급부족률 5.0%, 2027년 5.9%(2017년 이후 최대)로 전망했다. 발언 직후 MU 주가는 4% 하락한 반면 SanDisk(SNDK)는 5% 이상, Western Digital(WDC)은 4% 급등했다."],
        why: ["메모리는 대표적인 경기순환(사이클) 상품이라 공급이 늘면 가격이 폭락하는 게 보통인데, CEO는 이번 AI 수요를 '구조적'이라고 못박았다. 공급이 수요를 못 따라가는 상태가 오래 지속되면 메모리 가격이 높게 유지되고 Micron·SanDisk·WDC 등 제조사의 마진이 개선될 가능성이 커진다."],
        beginner: ["메모리는 컴퓨터·서버의 '단기 기억장치'(D램)와 '저장장치'(낸드) 부품이에요. AI 서버를 만들려면 이 메모리가 훨씬 더 많이, 더 고성능으로 필요한데 공장 짓는 데 몇 년씩 걸려서 공급이 수요를 못 따라가고 있다는 얘기예요. 물건이 부족하면 값이 오르고, 값이 오르면 그 물건을 파는 회사(Micron, SanDisk, Western Digital)는 돈을 더 많이 벌어요."],
        interpretation: "CEO 발언 자체는 6월 실적발표 내용의 재확인 수준이라 완전히 새로운 정보는 아니지만, '구조적 수요'·'2028년까지도 확신 없음'이라는 표현이 겹치며 메모리 업종 전반(MU·SNDK·WDC)의 장기 공급부족·가격강세 스토리를 강화했다. MU 주가는 오히려 하락하고 SNDK·WDC가 더 크게 오른 점은 시장이 이를 'Micron 개별 호재'가 아니라 '업종 전체 호재'로 해석했음을 시사한다.",
        decision: "메모리 공급부족 내러티브는 여전히 유효하고 업종 전체(MU/SNDK/WDC)에 우호적이지만, CEO 발언 하나로 새로 매수 타이밍을 잡기보다는 이미 알려진 6월 가이던스의 재확인 수준으로 보고 밸류에이션과 나침반 점수를 함께 확인할 것.",
        watch: ["다음 Micron 분기 실적에서 HBM·D램 계약가격·매출 비중이 실제로 개선되는지", "SanDisk·Western Digital 실적에도 동일한 낸드 가격강세가 반영되는지"],
        confidence: "발언 자체(날짜·CNBC 인터뷰·6월 실적콜 인용·주가 반응)는 복수 매체에서 일관되게 확인돼 신뢰도가 높음. 다만 이는 회사 이해관계자인 CEO 본인의 발언으로 자사 제품 수요·가격 전망을 낙관적으로 포장할 유인이 있다는 점을 감안해야 함 - 골드만삭스의 D램 부족률 수치는 제3자 자료라 상대적으로 신뢰도가 더 높음.",
        sources: [
          {title:"Micron CEO Sounds Alarm on AI Memory Crunch — Supply May Not Catch Up Until 2028 as Demand Keeps Growing (Yahoo Finance)", url:"https://finance.yahoo.com/technology/ai/articles/micron-ceo-sounds-alarm-ai-223107015.html"},
          {title:"Micron CEO Expects Memory Supply To Improve Gradually In 2028, But There's No 'Line Of Sight' When It Will Catch Up To Rising AI Demand (Yahoo Finance)", url:"https://finance.yahoo.com/technology/ai/articles/micron-ceo-expects-memory-supply-094604951.html"},
          {title:"AI Memory Squeeze Runs To 2028: Goldman Stays Bullish (Benzinga)", url:"https://www.benzinga.com/markets/tech/26/06/52907425/goldman-memory-shortage-2028-samsung-hynix-kioxia-sandisk-micron"},
        ],
      },
      {
        date: "2026-09-02",
        headline: "대만 노조, 삼성·SK하이닉스 수준 이익분배 요구하며 파업 투표 임박(지지율 약 80%)",
        importance: "medium",
        tone: "risk",
        horizon: "단기(9월 중 중재 결과·파업투표 여부에 따라 유동적)",
        facts: [
          "마이크론 대만 노조(조합원 약 1만명)가 현재의 성과급 제도(IPP, 연간 약 2.6개월치 급여 수준 상한)를 삼성전자(이익의 10.5%)·SK하이닉스(이익의 10%) 수준의 이익분배제로 바꿔달라고 요구 중.",
          "노조 자체 설문에서 조합원의 약 80%가 파업에 찬성한다는 결과가 나옴.",
          "8월 말~9월 중순 사이 중재(mediation) 협상이 예정돼 있고, 이 협상이 결렬되면 9월 중 실제 파업 투표가 이뤄질 수 있음.",
          "회사 측의 공식 입장·반박은 현재까지 보도에서 확인되지 않음.",
          "지금은 메모리 슈퍼사이클로 마이크론 실적(순이익률 68%)이 사상 최고 수준인 시점이라, 노조 측이 '경쟁사 대비 낮은 보상'을 요구할 명분이 상대적으로 강한 시기임.",
        ],
        why: [
          "대만은 마이크론의 핵심 생산 거점 중 하나(D램 생산 비중이 높음)라, 실제 파업으로 이어질 경우 생산 차질 가능성이 있음 - 다만 현재는 파업이 아니라 '파업 투표 가능성' 단계임을 유의.",
          "위 analystLog에서 확인한 '메모리 슈퍼사이클' 국면과 맞물려 있음 - 회사 이익이 급증하는 시기에 인건비 요구도 커지는 전형적인 패턴으로, 슈퍼사이클이 꺾이기 전에 노사 갈등이 먼저 불거질 수 있는 리스크로 볼 수 있음.",
        ],
        beginner: [
          "마이크론 대만 공장 직원들이 '삼성이나 SK하이닉스만큼 성과급을 달라'고 요구하고 있어요. 지금 보너스는 연봉의 2.6개월치 정도인데, 경쟁사는 회사 이익의 10% 정도를 나눠줘서 차이가 커요.",
          "설문에서 직원 80%가 '파업까지 갈 수 있다'고 답했어요. 다만 아직 실제 파업은 아니고, 회사와 대화(중재)가 9월 중순까지 예정돼 있어서 그 결과에 따라 달라질 수 있어요.",
          "지금 마이크론은 메모리 가격이 폭등해서 돈을 엄청 잘 벌고 있는 시기라(순이익률 68%), 직원들 입장에서는 '우리도 그만큼 받아야 한다'고 요구하기 좋은 타이밍이에요.",
        ],
        interpretation: "아직 실제 파업이 아니라 '파업 투표 가능성' 단계이므로 지금 당장 생산 차질로 이어질 위험은 제한적이다. 다만 지지율이 80%로 높고, 중재 협상 결과에 따라 9월 중 상황이 빠르게 전개될 수 있어 단기적으로 지켜볼 필요가 있는 이슈다. 메모리 슈퍼사이클로 회사 실적이 역대 최고 수준인 시점에 나온 요구라는 점에서, 회사가 어느 정도 타협할 유인도 있다고 볼 수 있다.",
        decision: "지금은 매수·매도 판단에 반영할 단계는 아니고, 9월 중순 중재 결과와 실제 파업 투표 여부를 확인할 것.",
        watch: [
          "8월 말~9월 중순 예정된 노사 중재 협상 결과",
          "실제 파업 투표 실시 여부 및 가결 여부",
          "회사 측의 공식 대응(성과급 제도 개선안 제시 여부)",
          "대만 생산라인의 실제 가동률 변화 여부(파업 현실화 시)",
        ],
        confidence: "노조 요구사항·설문 지지율(80%)·중재 일정은 TrendForce·Taipei Times 등 현지 매체 보도 기준으로 신뢰도 높음. 다만 회사 측 공식 반응이 아직 보도되지 않아 한쪽 입장(노조 측) 위주 정보라는 점은 감안할 것.",
        sources: [
          {title:"Micron's Taiwan Unions Are Asking for a Bonus Worth 83 Months of Pay. A Strike Vote Could Come This Month. (The Motley Fool)", url:"https://www.fool.com/investing/2026/09/02/micron-s-taiwan-unions-are-asking-for-a-bonus-worth-83-months-of-pay-a-strike-vote-could-come-this-month/"},
          {title:"News: Micron Taiwan Strike Vote Possible in Sept. as ~80% Union Back Action Over Bonus Gap with Samsung, SK hynix (TrendForce)", url:"https://www.trendforce.com/news/2026/08/28/news-micron-taiwan-strike-vote-possible-in-sept-as-80-union-back-action-over-bonus-gap-with-samsung-sk-hynix/"},
          {title:"Micron's Taiwan unions threaten strike over bonus dispute (Taipei Times)", url:"https://www.taipeitimes.com/News/biz/archives/2026/09/02/2003863518"},
        ],
      },
    ],
    analystLog: [{
      date: "2026-08-10",
      period: "최근 3개 분기 연속 매출·마진 폭증 (2025-11 마감→2026-02 마감→2026-05 마감 추정)",
      headline: "매출이 2분기 만에 거의 3배: $13.6B → $23.9B → $41.5B. 순이익률도 38% → 58% → 68%로 계속 올라감.",
      oneTime: "1회성 아님 - 메모리(D램·낸드) 업계 전체의 '슈퍼사이클' 때문. AI 데이터센터가 메모리 공급의 약 70%를 소비하면서 2026년 D램 계약가가 분기마다 +93~98%, 그다음 분기 또 +58~63% 뛰는 등 가격 자체가 폭등 중(TrendForce 집계). 마이크론 개별 실적이 아니라 산업 전체가 겪고 있는 현상.",
      coreRead: "회사가 갑자기 잘하게 된 게 아니라 '팔리는 가격'이 몇 배로 뛴 것 - 매출 성장의 대부분이 가격 요인. 다만 진짜 성장이긴 함(가격도 매출이니까), 다만 성격이 다름: 회사의 구조적 경쟁력 개선이 아니라 업계 전체가 누리는 사이클.",
      forecast: "메모리는 역사적으로 항상 호황-불황을 반복해온 산업 - 지금 마진(68%)은 지속가능한 '정상' 수준이 아니라 사이클 정점에 가까울 가능성이 높음. 다음 분기도 가격이 계속 오르면 매출·마진이 더 좋아 보이겠지만, 가격 상승이 멈추거나 꺾이는 순간(공급 증설·수요 둔화) 마진이 빠르게 정상화될 수 있음 - '한 분기 더 좋았다'를 추세로 보지 말 것. 업계 재고·가격 동향(TrendForce 등)을 다음 분기 판단 기준으로 삼는 게 실적 숫자 자체보다 유용함.",
      confidence: "가격 급등이라는 산업 현상 자체는 여러 소스로 교차 확인됨(신뢰도 높음) · 사이클 정점 여부·다음 분기 방향은 추정(신뢰도 중간, 메모리 사이클 타이밍은 예측이 특히 어려운 영역)",
      sources: [
        {title:"Memory Chip Supercycle 2026: Why Micron and Sandisk Are the Hottest Bets Now (The Motley Fool)", url:"https://www.fool.com/investing/2026/05/23/memory-chip-supercycle-2026-why-micron-and-sandisk/"},
        {title:"Memory chip supercycle 2026: what is driving the DRAM, HBM rally (IG International)", url:"https://www.ig.com/en/news-and-trade-ideas/memory-chip-stocks-rally-2026-260708"},
      ],
    }],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(2/5점) - 매출이 2분기 만에 거의 3배로 뛴 진짜 산업 사이클, 다만 사이클은 언제나 꺾인 전례가 있다는 걸 잊지 말아야 함",
        view: "MU는 눌림목 점수 2/5점(52주 고점대비 -19.9%, 200일선 위 +75.8%로 이미 크게 올라 있는 상태에서의 조정)로 매수 관심 초입이에요. PER(13.2배)이 3년 평균(53.2배)보다 훨씬 낮은데, 이건 밸류에이션이 '싸져서'가 아니라 이익이 폭발적으로 늘어서(분모 급증) 나온 숫자예요 - Q2'26 매출이 전년비 +345.7%(2분기 만에 $13.6B→$41.5B로 거의 3배)라는 극적인 숫자가 그 증거예요. 이건 회계상 왜곡이 아니라 진짜 산업 사이클이에요 - 2026년 D램·낸드 메모리 슈퍼사이클로 AI 데이터센터가 메모리 공급의 70%를 소비하면서 가격이 분기마다 +90%대씩 폭등했다는 걸 TrendForce 등으로 교차확인했어요. 다만 이 프로젝트가 반복해서 확인해온 원칙대로, 사이클성 업종은 '이익이 정점일 때 PER이 가장 낮아 보이는' 함정이 있어서, 지금 싸 보이는 PER을 그대로 '저평가'로 해석하면 안 돼요 - 메모리 사이클은 역사적으로 항상 꺾인 전례가 있어요. 컨센서스는 내년 매출 +85%·EPS +111%로 사이클 지속을 반영한 낙관적 전망이지만(내년 이익 급증 종목은 이 대시보드가 자동으로 주의 문구를 붙이는 케이스이기도 해요), 사이클이 언제 꺾일지가 이 종목 판단의 핵심 변수예요.",
        increaseIf: [
          "메모리 가격 상승세가 다음 1~2분기에도 계속 이어지는 게 확인될 때(가격 사이클 정점이 아직 아니라는 신호)",
          "AI 데이터센터向 메모리 수요가 계속 공급을 초과하는 상태가 유지될 때",
        ],
        wrongIf: [
          "메모리 가격이 분기 대비 하락 전환하는 신호가 나올 때(사이클 정점 통과 신호)",
          "공급업체들의 CAPEX 확대로 공급이 수요를 따라잡기 시작할 때",
          "현재의 폭발적 매출 성장률(+345.7%)이 큰 폭으로 꺾이기 시작할 때",
        ],
        watchNext: [
          "D램·낸드 분기별 가격 추이(TrendForce 등)",
          "경쟁사(삼성전자·SK하이닉스) CAPEX 확대 계획 - 공급 증가 신호",
          "다음 분기 매출 성장률 - 전분기 대비(QoQ) 둔화 여부가 특히 중요",
        ],
        confidence: "매출 수치는 SEC 공시 기반 캐시 데이터 · 메모리 슈퍼사이클 사실관계는 TrendForce 등 업계 데이터로 교차확인(analystLog 참고, 신뢰도 높음) · '사이클은 항상 꺾인다'는 경고는 일반적으로 알려진 산업 특성이며, 이번 사이클이 언제 꺾일지는 아무도 정확히 모름(Claude도 예측 불가, 정직하게 밝힘)",
        sources: [],
      },
    ],
    role: {
      tags: ["HBM(고대역폭메모리)", "DRAM", "NAND", "Enterprise SSD"],
      stars: 5,
      note: "AI 서버에 필수인 HBM을 포함해 메모리 전 영역(D램·낸드)을 다루는 소수 기업 중 하나예요. 2026년 HBM 공급이 가격·물량 모두 이미 완판됐고, AI 데이터센터가 전세계 메모리 공급의 약 70%를 소비하는 슈퍼사이클 속에서 매출이 2분기 만에 거의 3배로 뛰었어요(다만 이 슈퍼사이클은 산업 사이클이라 영원하지 않다는 점은 감안해야 해요).",
    },
  },
  SNDK: {
    updated: "2026-08-20",
    customers: [
      "하이퍼스케일러(아마존·마이크로소프트·구글 등) - 엔터프라이즈·데이터센터向 고용량 SSD, 현재 최대 성장엔진",
      "PC 제조사(OEM), NAS(네트워크 스토리지) 업체 - USB드라이브·메모리카드·내장형 SSD",
    ],
    strengths: [
      "낸드(NAND) 플래시 메모리 한 분야에 집중된 전문 사업모델 - 2025년 2월 웨스턴디지털에서 분사 이후 독립기업으로서 고속 성장",
      "2026년 들어 주가 약 500% 급등 - S&P500 내 최고 상승률 종목 중 하나로 낸드 슈퍼사이클의 대표 수혜주",
      "매출 성장 +250% YoY(3분기), 비GAAP 매출총이익률 78.4%까지 확대",
    ],
    risks: [
      "⚠️ 현재의 폭발적 성장·마진 확대는 산업 사이클(낸드 슈퍼사이클)에 기인 - 1회성 회계 이벤트가 아니지만 동시에 영원한 추세도 아님, 사이클 하강 국면에서는 반대로 급락할 수 있음(상세는 analystLog 참고)",
      "낸드 단일 제품 집중 사업모델이라 D램 등으로 다각화된 경쟁사 대비 사이클 변동에 더 크게 노출됨",
    ],
    sources: [
      {title:"Deep Dive: SanDisk (SNDK) and the 2026 NAND Flash Shortage (FinancialContent)", url:"https://www.financialcontent.com/article/finterra-2026-3-31-deep-dive-sandisk-sndk-and-the-2026-nand-flash-shortage"},
      {title:"SanDisk Stock Analysis 2026: NAND Supercycle, HBF & AI Storage (Market Digests)", url:"https://marketdigests.com/sandisk-stock-analysis-2026/"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 사상 최고 매출에도 가이던스 실망으로 -13% - 장기 낙관 vs 단기 가이던스 우려",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-08-05 전후 실적에서 매출이 사상 최고치(89.7억 달러)를 기록했음에도 향후 가이던스가 시장 기대에 못 미쳐 주가가 약 13% 급락했다.", "NAND 부문 2분기 매출 성장률이 5대 메모리 제조사 중 상대적으로 뒤처졌다는 평가가 나왔다.", "가이던스 실망에도 다수 애널리스트는 장기적으로는 낙관적 시각을 유지했다."],
        why: ["현재 실적은 견조하지만 향후 가이던스가 실망을 주며 단기 조정을 받은 것으로, 장기 펀더멘털과 단기 심리가 엇갈리는 상황이다."],
        beginner: ["이번 성적은 역대 최고였는데, '다음엔 이 정도일 것'이라는 회사의 예상치가 낮게 나와서 실망 매물이 나왔어요. 그래도 전문가들은 장기적으로는 여전히 좋게 보고 있어요."],
        interpretation: "단기 가이던스 실망이 최근 하락의 핵심 원인으로, 사업 구조 자체가 훼손된 것은 아니라는 시각이 우세하다.",
        decision: "다음 분기 실제 매출이 가이던스를 상회하는지, NAND 업황 개선 여부를 확인 포인트로 삼을 것.",
        watch: ["다음 분기 가이던스 대비 실제 매출", "NAND 플래시 업황 전반의 개선 여부"],
        confidence: "실적 수치는 회사 공식 발표 기준, 다수 매체(Yahoo Finance, EBC) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Sandisk stock sinks as revenue forecast falls short of expectations (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/article/sandisk-stock-sinks-as-revenue-forecast-falls-short-of-expectations-163703465.html"},
        {title:"Sandisk Tumbles on Revenue Outlook but Analysts Stick With Bullish Long-Term View (BigGo Finance)", url:"https://finance.biggo.com/news/f95ec31d-4a9f-435d-a77a-279ecb0a1271"},
        ],
      },
      {
        date: "2026-08-20",
        headline: "2028~2030년 중고성장 가이던스 제시 + 키옥시아와 9세대 AI용 고성능 낸드 플랫폼 공개 - 6일 연속 상승 후 광범위 기술주 매도세에 하루 -5%",
        coreAnalysis: "회사가 2028~2030 회계연도까지 매출이 중~고십대(mid-to-high-teens)% 성장할 것이라는 장기 가이던스를 제시하면서 8/17(월) 하루 +8.88%($1,641→$1,786), 6거래일 연속 상승을 기록했다. 같은 시기 키옥시아(Kioxia)와 공동으로 AI 인프라 스토리지 수요를 겨냥한 9세대 고성능 낸드 플랫폼('High Bandwidth Flash')을 공개했고, Bernstein의 5성 애널리스트가 이를 'AI용 게임체인저'로 평가했다. 다만 8/18(화)엔 기술주 전반의 위험회피 심리 속에 프리마켓 기준 -5% 하락했다 - 회사 고유 이슈가 아니라 지수 선물 약세 등 시장 전반의 매도세로 보인다.",
        whyItMatters: "위 analystLog에서 이미 짚었듯 SNDK는 낸드 단일 사업이라 사이클에 민감한 구조인데, 이번 장기 가이던스(2028~2030년까지)는 '지금의 호황이 최소 몇 년은 이어질 것'이라는 회사 측 자신감의 표현이다 - 다만 이건 회사가 스스로 내놓은 전망치라 실현 여부는 지켜봐야 한다. High Bandwidth Flash는 HBM(고대역폭메모리)의 낸드 버전 격으로, 만약 AI 데이터센터의 스토리지 계층에서 자리 잡으면 SNDK가 현재의 '가격 사이클 수혜'를 넘어 '새 제품 카테고리'로 마진 구조를 넓힐 수 있는 재료다.",
        beginnerSummary: "샌디스크가 '2028~2030년까지도 매출이 계속 두 자릿수로 늘 것'이라는 자신감 있는 전망을 내놓고, 키옥시아라는 회사와 함께 AI 데이터센터에 쓰일 새로운 고성능 저장장치 기술도 공개했어요. 이 소식에 주가가 하루 만에 9% 가까이 뛰며 6일 연속 상승했는데, 바로 다음 날 기술주 전체가 약세를 보이면서 다시 5% 정도 빠졌어요 - 회사에 나쁜 소식이 나온 게 아니라 시장 전체 분위기 탓으로 보여요.",
        confidence: "가이던스 발표·HBF 공개·주가 등락폭은 복수 매체(Motley Fool·Benzinga·StocksToTrade) 보도 기준(신뢰도 높음) · 2028~2030년 성장 전망 자체는 회사 측 미래 예측이라 실현 여부 미확정",
        sources: [
          {title:"Why Sandisk Stock Rocketed Higher (Again) Today (The Motley Fool)", url:"https://www.fool.com/investing/2026/08/17/why-sandisk-stock-rocketed-higher-again-today/"},
          {title:"SNDK Stock Soars As Long-Term Growth Story Ignites (StocksToTrade)", url:"https://stockstotrade.com/news/sandisk-corporation-sndk-news-2026_08_17/"},
        ],
      },
    ],
    analystLog: [{
      date: "2026-08-10",
      period: "최근 2개 분기 매출 급증 (2026-01 마감→2026-04 마감 추정, SNDK는 2025년 WDC에서 분사)",
      headline: "매출 $3.0B → $5.95B(+97%), 순이익률 26.5% → 60.8%로 급등. 1년 전(2025년 초)엔 대규모 적자(마진 -114%)였음.",
      oneTime: "1년 전 대규모 적자는 WDC로부터의 분사(spin-off) 관련 일회성 비용일 가능성이 높음(정확한 항목은 미확인). 최근 급등은 MU와 동일한 메모리(낸드) 슈퍼사이클 - 낸드 가격이 분기마다 +85~90%, +55~60%씩 뛰는 업계 전체 현상. 실제로 SNDK의 최근 분기 매출은 전년비 +251%로 보도됨(낸드 가격 급등이 원인).",
      coreRead: "MU와 같은 논리 - 회사 경쟁력이 아니라 낸드 가격 급등이 매출·마진을 밀어올림. 다만 1년 전 적자에서 지금 60%대 마진까지의 낙폭이 워낙 커서, 이 회사는 사이클에 특히 민감한(레버리지 큰) 구조로 보임 - 오르는 국면에서 크게 오르고, 내리는 국면에서도 크게 내렸었다는 뜻.",
      forecast: "MU와 동일한 리스크: 낸드 가격 상승이 멈추면 마진이 빠르게 되돌아갈 수 있음. 이 회사는 순수 낸드 플레이어라 D램도 같이 파는 MU보다 사이클 방향에 더 크게 흔들릴 가능성 - 다음 분기도 낸드 가격 동향이 핵심 변수.",
      confidence: "산업 가격 상승 현상은 신뢰도 높음 · 회사별 민감도 비교(SNDK가 더 크게 흔들릴 것이라는 판단)는 추정(신뢰도 중간)",
      sources: [
        {title:"AI Memory Stocks Analysis 2026 (Intellectia) - Sandisk +251% YoY revenue", url:"https://intellectia.ai/blog/ai-memory-stocks-analysis-2026"},
        {title:"Memory chip supercycle 2026 (IG International)", url:"https://www.ig.com/en/news-and-trade-ideas/memory-chip-stocks-rally-2026-260708"},
      ],
    }],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(3/5점) - MU·WDC와 같은 메모리 슈퍼사이클 수혜지만, 마진이 유독 높게 찍힌 원인은 아직 확인 못 함",
        view: "SNDK는 눌림목 점수 3/5점(52주 고점대비 -29.7%, 200일선 위 +81.7%)로 매수 관심 구간이에요. PER(7.6배)이 매우 낮게 나오는데(3년 평균 계산은 상장 이력이 짧아 데이터 부족으로 산출 안 됨), 이것도 MU와 마찬가지로 낸드 메모리 슈퍼사이클로 인한 이익 급증(Q2'26 매출 +213.0%, 영업이익률 +66.4%p)이 원인이에요 - '싸다'가 아니라 '사이클 정점 부근의 저PER 함정'일 가능성을 함께 봐야 해요. 다만 SNDK는 조사 과정에서 한 가지 정직하게 밝혀둘 게 있어요 - WDC와 함께 마진이 특이하게 높게(WDC는 96%까지) 나오는데, 정확한 원인(지분법 이익 등 가능성 있으나 미확정)까지는 이번 조사로 확인하지 못했어요. 추측으로 채우지 않고 다음 갱신 때 다시 확인하기로 한 항목이에요. 컨센서스는 내년 매출 +18%·EPS +23%로 MU보다는 다소 보수적인 성장을 예상해요.",
        increaseIf: [
          "다음 갱신 때 마진이 유독 높게 찍히는 정확한 원인이 확인되고, 그게 지속 가능한 구조로 판명될 때",
          "낸드 가격 상승 사이클이 계속 이어질 때",
        ],
        wrongIf: [
          "낸드 가격이 하락 전환하며 사이클 정점을 통과하는 신호가 나올 때(MU와 동일한 리스크)",
          "마진 급등 원인이 확인됐는데 일회성으로 판명될 때(그럴 경우 지금의 낮은 PER은 착시)",
        ],
        watchNext: [
          "다음 갱신 시 마진 급등(특히 WDC와 공통된 부분)의 정확한 원인 규명",
          "낸드 가격 추이",
          "다음 분기 매출 성장률의 QoQ 둔화 여부",
        ],
        confidence: "매출 수치는 SEC 공시 기반 캐시 데이터 · 메모리 슈퍼사이클 배경은 MU·WDC와 함께 교차확인(신뢰도 높음) · 마진이 유독 높은 정확한 원인은 확인 못 해 정직하게 '모른다'고 표시함(추측으로 채우지 않음, 이 프로젝트의 원칙) · 상장 이력이 짧아 PER 3년 평균 비교가 불가능하다는 점도 감안할 것",
        sources: [],
      },
    ],
    role: {
      tags: ["NAND 플래시 메모리 전문"],
      stars: 3,
      note: "낸드 한 분야에 집중된 전문기업으로 2025년 웨스턴디지털에서 분사한 이후 낸드 슈퍼사이클의 대표 수혜주가 됐어요(매출 +250% YoY). 다만 D램도 같이 파는 MU 대비 사이클 변동에 더 크게 노출되는 '순수 낸드 플레이어' 구조라 사이클 하강 국면에서는 상대적으로 더 크게 흔들릴 수 있어요.",
    },
  },
  WDC: {
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 매출 +44% 호실적에도 반복된 'sell the news' - 실적은 견조, 변동성이 매우 큼",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-08-05 FY26 4분기 매출이 전년比 44% 급증, 예상을 상회했고 1분기 가이던스도 사상 최고 수준(40억 달러 이상)이었다.", "호실적에도 'sell the news' 반응으로 주가가 11~15% 급락했고, 이후 애널리스트 하향으로 추가 13% 하락했다.", "8월 24일에도 -5.5% 추가 하락하는 등 극심한 변동성을 보였다 - 연중 고점 대비 46% 하락, 연초 대비로는 2배 이상 상승 상태다."],
        why: ["실적·가이던스 자체는 AI 스토리지 수요로 견조하지만, 급등에 따른 높은 시장 기대치를 충족하지 못해 반복적으로 '발표 후 매도'되는 패턴을 보이고 있다."],
        beginner: ["성적표는 아주 좋았는데 주가는 오히려 계속 떨어졌어요. 이미 너무 많이 오른 상태였어서, 아무리 좋아도 사람들 기대만큼은 아니었던 거예요. 다만 연초와 비교하면 여전히 2배 넘게 오른 상태라 변동성이 큰 편이에요."],
        interpretation: "실적 펀더멘털은 견조하나 변동성이 매우 커서, 낙폭과다 신호를 확인할 때 최근 급등분을 함께 고려해야 한다.",
        decision: "변동성이 안정화되는지, 다음 분기에도 'sell the news' 패턴이 반복되는지를 지켜볼 것.",
        watch: ["주가 변동성 안정화 여부", "다음 분기 실적 발표 시장 반응"],
        confidence: "실적 수치는 회사 공식 발표 기준, 다수 매체(TipRanks, Invezz) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Western Digital Corp (WDC) (Q4 2026) Earnings Call Highlights (GuruFocus)", url:"https://www.gurufocus.com/news/9009786/western-digital-corp-wdc-q4-2026-earnings-call-highlights-record-revenue-and-eps-soar-on-aidriven-storage-demand"},
        {title:"Western Digital Tumbles As Investors Sell The Earnings News (TipRanks)", url:"https://www.tipranks.com/news/catalyst/western-digital-tumbles-as-investors-sell-the-earnings-news"},
        {title:"Western Digital Sits 46% Below Its High and Has Still More Than Doubled This Year (Motley Fool)", url:"https://www.fool.com/investing/2026/08/24/western-digital-sits-46-below-its-high-and-has-still-more-than-doubled-this-year/"},
        ],
      },
    ],
    updated: "2026-08-13",
    customers: [
      "AI 데이터센터·클라우드 기업(매출의 약 90%) - 대용량 HDD(하드디스크) 대량 구매, 상위 7개 고객사가 생산량 대부분을 차지",
      "일부 고객사와는 2027~2028년까지의 장기공급계약까지 이미 체결",
    ],
    strengths: [
      "2026년 HDD 생산능력이 이미 전량 매진 - AI 데이터센터가 예정보다 앞당겨 몇 년치 물량을 미리 확보하려는 수요",
      "SSD 사업에서 철수하고 HDD(하드디스크)에만 집중하는 전략 - 대용량 저장에서는 HDD가 SSD보다 약 7배 저렴해 AI 시대 벌크 스토리지 수요에 최적화",
      "레거시 소비자·PC용 HDD 사업도 여전히 이익을 내는 캐시카우로 유지",
    ],
    risks: [
      "⚠️ 마진이 급격히 확대된 배경(96%까지 치솟은 사례 등)에 지분법 이익 등 정확한 요인이 아직 다 확인되지 않음 - 산업 사이클(메모리·스토리지 슈퍼사이클) 자체는 맞지만 세부 요인은 다음 갱신 때 추가 확인 필요(정직하게 미확정으로 남겨둠, analystLog 참고)",
      "생산능력이 이미 매진된 상태라 추가 수요가 와도 단기간에 공급을 늘리기 어려움 - 반대로 수요가 꺾이면 고정비 부담 노출",
    ],
    sources: [
      {title:"Western Digital's HDD production for 2026 is already sold out (TechSpot)", url:"https://www.techspot.com/news/111346-western-digital-hdd-production-capacity-2026-already-sold.html"},
      {title:"Western Digital's entire 2026 HDD stock is gone as enterprise AI contracts gobble up all available storage capacity (TechRadar)", url:"https://www.techradar.com/pro/were-pretty-much-sold-out-for-calendar-2026-western-digital-ceo-says-storage-firm-is-completely-sold-out-of-hdd-capacity-already-so-does-that-mean-more-price-rises-to-come"},
    ],
    analystLog: [{
      date: "2026-08-10",
      period: "최근 3개 분기 연속 마진 급등 (2025-12 마감→2026-03 마감→2026-06 마감 추정)",
      headline: "매출은 완만히 증가($2.8B→$3.0B→$3.3B)하는데 순이익률이 42%→61%→96%로 가파르게 치솟음. 96%는 하드웨어 회사로선 극단적으로 높은 수치.",
      oneTime: "MU·SNDK와 같은 메모리(스토리지) 업계 가격 상승 사이클이 배경일 가능성이 높으나, 매출 증가폭에 비해 순이익률 상승폭이 유독 커서(96%는 다른 두 종목보다도 높음) 이 회사 특유의 요인(지분법 이익, 세금 효과, 자산 매각 등)이 섞여 있을 수 있음 - 이 부분은 이번 조사에서 정확한 항목까지는 확인하지 못함.",
      coreRead: "방향성(메모리 업사이클 수혜)은 MU·SNDK와 같다고 보되, 96%라는 마진 자체는 그대로 믿기보다 다음 분기 실적 발표에서 세부 항목(영업이익 vs 순이익 괴리, 일회성 항목 공시 여부)을 확인해서 갱신이 필요함.",
      forecast: "메모리 사이클 공통 리스크(가격 상승 둔화 시 마진 정상화)에 더해, 이 종목은 마진의 '질'부터 다음 분기에 재확인이 필요함. 지금 이 96%를 그대로 미래에 투영하는 건 위험 - 확인 안 된 부분을 확인 안 됐다고 그대로 남겨둠(추측으로 채우지 않음).",
      confidence: "매출·순이익 숫자 자체는 캐시 데이터 기준(신뢰도 높음) · 96% 마진의 구체적 원인은 미확인(신뢰도 낮음 - 다음 갱신 때 우선 확인할 것)",
      sources: [
        {title:"SanDisk, Western Digital, and Seagate benefiting from explosive AI infrastructure growth", url:"https://www.ig.com/en/news-and-trade-ideas/memory-chip-stocks-rally-2026-260708"},
      ],
    }],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(3/5점) - SNDK와 같은 메모리 슈퍼사이클 수혜지만, PER이 자기 역사 대비로는 오히려 비싸진 특이 케이스",
        view: "WDC는 눌림목 점수 3/5점(52주 고점대비 -31.8%, 200일선 위 +45.5%)로 매수 관심 구간이에요. 다만 이 종목은 SNDK·MU와 살짝 다른 패턴을 보여요 - PER(25.3배)이 3년 평균(13.9배)보다 오히려 높게 나와요. 즉 낸드 슈퍼사이클로 매출(+28.1%)·영업이익률(+9.5%p)이 좋아지는 건 SNDK·MU와 같은데, 주가가 이익 개선 속도보다 더 빠르게 오른(혹은 3년 평균 자체가 사이클 저점 시기를 포함해 낮게 잡힌) 상태라 밸류에이션 매력은 세 메모리 종목 중 가장 낮은 편이에요. 마진이 96%까지 치솟았다는 것도 SNDK와 마찬가지로 이번 조사에서 정확한 원인(지분법 이익 등)까지는 확인하지 못했고, 다음 갱신 때 다시 봐야 할 항목으로 정직하게 남겨뒀어요. 컨센서스는 내년 매출 +36%·EPS +58%로 MU만큼은 아니지만 낙관적인 성장을 예상해요.",
        increaseIf: [
          "마진 급등 원인이 확인되고 지속 가능한 구조로 판명될 때",
          "낸드 가격 상승 사이클이 계속되며 밸류에이션 부담을 상쇄할 만큼 이익이 더 늘어날 때",
        ],
        wrongIf: [
          "낸드 가격이 하락 전환하며 사이클 정점을 통과할 때(다른 메모리 종목과 동일한 리스크, 다만 이 종목은 밸류에이션 여유가 가장 적어 하락 폭이 더 클 수 있음)",
          "마진 급등이 일회성으로 판명돼 지금의 실적이 착시였던 것으로 확인될 때",
        ],
        watchNext: [
          "다음 갱신 시 마진 급등의 정확한 원인 규명(SNDK와 공통 과제)",
          "낸드 가격 추이",
          "PER이 3년 평균 대비 높은 상태가 실적 개선으로 정당화되는지",
        ],
        confidence: "매출 수치는 SEC 공시 기반 캐시 데이터 · 메모리 슈퍼사이클 배경은 SNDK·MU와 함께 교차확인 · 마진이 유독 높은 정확한 원인은 확인 못 해 정직하게 '모른다'고 표시함(추측으로 채우지 않음) · PER이 자기 역사 대비 오히려 비싸다는 점은 다른 두 메모리 종목과 구분되는 이 종목만의 특징이라 강조함",
        sources: [],
      },
    ],
    role: {
      tags: ["HDD(하드디스크)", "AI 데이터센터向 대용량 저장장치"],
      stars: 4,
      note: "HDD 시장은 사실상 WDC(약 47%)·시게이트(약 42%) 두 회사의 듀오폴리 구조라, AI 데이터센터의 대용량·저비용 스토리지 수요가 이 두 회사에 집중돼요. 2026년 생산능력이 이미 전량 매진됐고, 매출의 약 90%가 AI 데이터센터·클라우드 기업에서 나올 만큼 방향 전환이 확실해요.",
    },
  },
  MRVL: {
    updated: "2026-08-20",
    customers: [
      "4대 하이퍼스케일러(구글·아마존·마이크로소프트 등으로 추정) - AI 커스텀 실리콘(XPU) 설계, 현재 활성 프로그램 18개 중 12개가 이들 대상",
      "신흥 AI 고객사 6곳 - 나머지 커스텀 실리콘 프로그램",
      "통신사(캐리어 인프라)·기업 네트워킹·자동차/산업 고객 - 전통적 사업 축",
    ],
    strengths: [
      "AI 관련 매출이 전체의 35% 이상까지 확대 - '데이터센터 우선' 전략으로 성공적 전환 중",
      "데이터센터 부문 매출 +37.8% 성장(3분기 $15.2억), 커스텀 실리콘이 데이터센터 매출의 약 4분의 1 차지하며 내년에도 20%+ 성장 전망",
      "커넥티비티·광통신·스토리지 등 AI 인프라 전반에 걸친 폭넓은 제품 포트폴리오",
    ],
    risks: [
      "⚠️ GAAP 순이익과 비GAAP 순이익 괴리가 매우 큼(2026 회계연도 1분기 GAAP $34.5M vs 비GAAP $718.0M) - 잦은 인수합병에 따른 주식보상비용·무형자산 상각이 구조적으로 GAAP 이익을 짓누름(상세는 analystLog 참고)",
      "소수 하이퍼스케일러 고객에 대한 커스텀 실리콘 매출 의존도가 높음 - 이들의 자체 반도체 내재화(인하우스 설계) 전환 시 리스크",
    ],
    sources: [
      {title:"Is Surging AI Custom Silicon Demand Reshaping the Investment Case for Marvell Technology (Yahoo Finance)", url:"https://finance.yahoo.com/news/surging-ai-custom-silicon-demand-042534281.html"},
      {title:"Marvell Q1 FY 2026 Results Driven by Custom Silicon and Data Center Momentum (Futurum Group)", url:"https://futurumgroup.com/insights/marvell-q1-fy-2026-results-driven-by-custom-silicon-and-data-center-momentum/"},
    ],
    newsLog: [
      {
        date: "2026-08-27",
        headline: "Q2(FY27) 실적 서프라이즈(매출 27.4억·EPS $0.94, 사상 최대)에도 시간외 -7% 하락 - 구글 파트너십 매출 기여가 FY2029로 지연된다는 소식이 실망 매물 촉발",
        importance: "high",
        tone: "mixed",
        horizon: "단기(정규장 반응·가이던스 신뢰 회복 여부)",
        facts: ["Marvell이 2026-08-27 장마감 후 발표한 2분기(FY27) 매출은 $27.39억으로 전년 대비 +37%, 전분기 대비 +13% 증가한 사상 최대치를 기록했다.", "데이터센터 부문 매출은 YoY +46% 성장하며 전체 성장을 견인했다.", "비GAAP EPS는 $0.94로 예상치를 $0.01 상회했고, GAAP EPS는 $0.33(순이익 $3.08억)이었다.", "3분기 가이던스로 매출 중간값 $31.5억, 비GAAP EPS $1.05~1.15를 제시했고, FY2027 매출 전망을 약 $120억(+45%)으로, FY2028 전망을 $180억으로 각각 상향했다.", "실적 발표 후 시간외 주가는 정규장 종가 대비 약 -7.1%~7.6% 하락(주가 $224.34 부근)했다.", "경영진은 컨퍼런스콜에서 8/20 공개했던 구글과의 커스텀칩(TPU) 파트너십에서 유의미한 매출 기여 시점이 FY2029로 지연될 것이라고 밝혔고, 비GAAP 매출총이익률 가이던스도 전분기 대비 90bp 하락했다."],
        why: ["매출·EPS·가이던스 모두 상회한 '어닝비트'였음에도 주가가 하락한 것은, 연초 대비 165%+ 급등한 주가에 이미 높은 기대가 반영돼 있었고, 특히 8/20 워치리스트에 기록했던 '구글 워런트 계약'發 기대감이 즉시 매출로 이어지지 않고 몇 년 뒤(FY2029)로 미뤄진다는 점에 투자자들이 실망했기 때문이다."],
        beginner: ["마벨이 낸 성적표는 매출도 이익도 역대 최고였는데, 발표 후 오히려 주가가 7% 넘게 떨어졌어요. 최근 주가가 워낙 많이 올라 있어서(연초 대비 거의 2.5배) 눈높이가 너무 높아진 상태였는데, 지난주 나온 '구글과 손잡고 큰돈을 벌 것'이라는 기대가 실제로는 한참 뒤(2029 회계연도)에나 실현된다는 얘기가 나오면서 실망 매물이 나온 거예요."],
        interpretation: "펀더멘털(매출 성장률, 가이던스 상향)은 훼손되지 않았으나, 8/20 기록했던 구글 파트너십 호재가 '즉시 현실화'가 아닌 장기(2029년) 이벤트임이 이번에 재확인됐다. 단기 주가 조정을 실적 악화 신호로 오인하지 말고 데이터센터 매출 성장(YoY+46%)의 지속 여부를 지켜볼 필요가 있다.",
        decision: "실적 자체는 견조하므로 이번 하락만으로 매도 근거를 삼기보다는, 최근 급등에 따른 밸류에이션 조정 국면으로 보고 정규장 마감 후 실제 종가 반응과 애널리스트 목표주가 조정을 확인한 뒤 판단할 것.",
        watch: ["정규장 마감 후 실제 종가 반응(시간외 낙폭 유지·축소 여부)", "애널리스트 목표주가 조정 방향", "구글 TPU 파트너십 매출 기여 관련 후속 타임라인 코멘트"],
        confidence: "매출·EPS·가이던스 수치는 회사 공식 보도자료(Businesswire) 기준으로 신뢰도 높음. 시간외 하락폭과 원인 해석은 SiliconANGLE·TradingKey 등 복수 매체 보도 기준.",
        sources: [
        {title:"Marvell Technology, Inc. Reports Second Quarter of Fiscal Year 2027 Financial Results (Businesswire)", url:"https://www.businesswire.com/news/home/20260827816134/en/Marvell-Technology-Inc.-Reports-Second-Quarter-of-Fiscal-Year-2027-Financial-Results"},
        {title:"Marvell's stock sinks despite earnings beat and strong guidance (SiliconANGLE)", url:"https://siliconangle.com/2026/08/27/marvells-stock-sinks-despite-earnings-beat-and-strong-guidance/"},
        {title:"Marvell Stock Forecast: Revenue Hits Record High Yet Shares Drop Over 7% Post-Market (TradingKey)", url:"https://www.tradingkey.com/analysis/stocks/us-stocks/262137633-mrvl-stock-price-forecast-record-high-revenue-leads-after-hours-decline-can-mrvl-continue-rise-tradingkey"},
        ],
      },
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 사상 최대 매출(+28%)·가이던스 상향에도 7월 -37% 폭락 - 업종 전체 회의론이 원인, 8/27 실적 대기",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-05-27 FY27 1분기 매출 24.18억 달러로 사상 최대(+28% YoY), 데이터센터 부문이 전체의 76%를 차지했다.", "2분기 가이던스는 매출 27억 달러(YoY +35%)로 연간 전망을 상향한 바 있다.", "그럼에도 2026년 7월 주가가 -37% 폭락했다 - 회사 고유 이슈가 아닌 'AI 지출 대비 수익성'에 대한 업종 전반의 회의론이 원인으로 지목됐다.", "실적 발표는 2026-08-27로 예정되어(조사 시점 익일) 최신 확정 실적은 5월 발표분이며 그 자체는 견조했다."],
        why: ["직전 실적·가이던스는 견조했으나 이후 업종 전체 밸류에이션 재평가로 주가가 급락한 것으로 보인다. 8/27 실적 발표가 방향을 재확인하는 핵심 분기점이다."],
        beginner: ["지난 실적은 역대 최대였고 앞으로 전망도 좋았는데, 7월 한 달 동안 AI 관련 주식 전체가 '너무 비싸다'는 걱정 때문에 큰 폭으로 빠졌어요. 내일(8/27) 새 성적표가 나오면 방향이 다시 확인될 거예요."],
        interpretation: "직전 실적은 긍정적이었으나 최근 급락은 업종 전반의 리스크 재평가 성격이 강해, 다음 실적 확인이 중요하다.",
        decision: "2026-08-27 실적 발표 결과를 확인한 뒤 판단할 것 - 이 노트는 발표 이전 시점 기준.",
        watch: ["2026-08-27 실적 발표 결과(매출·가이던스)", "업종 전반 밸류에이션 회의론 지속 여부"],
        confidence: "5월 실적은 회사 공식 발표 기준으로 신뢰도 높음. 7월 하락 원인은 다수 매체(Motley Fool) 분석 기준 - 신뢰도 중간.",
        directionCheck: true,
        sources: [
        {title:"Marvell Technology, Inc. Reports First Quarter of Fiscal Year 2027 Financial Results (Marvell IR)", url:"https://investor.marvell.com/news-events/press-releases/detail/1023/marvell-technology-inc-reports-first-quarter-of-fiscal-year-2027-financial-results"},
        {title:"Why Marvell Technology Stock Fell 37% in July (Motley Fool)", url:"https://www.fool.com/investing/2026/08/06/why-marvell-technology-stock-fell-37-in-july/"},
        {title:"Marvell Falls 4% Ahead of August 27 Earnings (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/marvell-falls-4-ahead-august-180113718.html"},
        ],
      },
      {
        date: "2026-08-20",
        headline: "구글과 $12.2B 워런트 계약(TPU 커스텀칩 공동개발) 체결 + AI 메모리 인프라 신제품 출시(+14%) - 이번 주 최대 호재주, 경쟁사 AVGO(브로드컴)와의 관계 참고",
        coreAnalysis: "마벨이 구글의 TPU 생태계 관련 커스텀 실리콘 프로그램에 참여하는 계약을 발표하며 구글에 마벨 주식 약 5,897만주를 주당 $206.58에 살 수 있는 워런트($12.2B 규모, FY2033까지 조달 목표와 연동)를 부여했다 - 8/19 주가가 +8~11%대로 급등했다(자세한 배경은 AVGO 항목의 newsLog 참고 - 브로드컴이 구글의 TPU 단독 공급사 지위를 잃게 된 계기). 같은 주에 AI 메모리 인프라 신제품(Bravera SC6 PCIe 6.0 SSD 컨트롤러, Structera X CXL 메모리 확장 플랫폼, Photonic Fabric 광연결 부품)을 공개하며 하루 +14% 급등도 있었다. 골드만삭스는 목표주가를 $195로 상향(중립 유지)했고, 미국 FCC의 중국산 광트랜시버 수입금지 검토 소식도 마벨에 우호적 재료로 거론됐다.",
        whyItMatters: "위 customers 항목에 '4대 하이퍼스케일러'가 이미 핵심 고객으로 적혀 있었는데, 이번 계약으로 구글과의 관계가 단순 공급을 넘어 지분(워런트) 연계 파트너십으로 격상됐다 - 구글이 실제로 마벨 지분을 매입하면 장기적 이해관계가 더 강하게 묶이는 구조다. 다만 이 워런트는 '구매 목표(procurement goals) 달성'과 연동돼 있어, 실제 주문량이 목표에 못 미치면 구글이 워런트를 행사하지 않을 수도 있다는 점은 확정된 매출이 아니라 조건부 인센티브 구조임을 뜻한다. AVGO 입장에서는 독점 공급자 지위 상실이라는 리스크지만, 마벨 입장에서는 그동안 확보하지 못했던 구글 TPU 물량에 처음 진입했다는 점에서 명백한 사업 확대다.",
        beginnerSummary: "마벨이 구글의 AI 반도체(TPU) 제작에 새로 참여하게 됐어요. 그 대가로 구글은 마벨 주식을 나중에 정해진 가격에 살 수 있는 권리(워런트)를 받았는데, 이게 약 122억 달러 규모예요. 이 소식에 마벨 주가가 하루 만에 8~11% 뛰었고, 같은 주에 AI 저장장치 관련 신제품도 발표하면서 또 한 번 14% 급등했어요. 다만 구글이 실제로 얼마나 주문할지에 따라 이 권리를 행사할지 말지가 갈리기 때문에, 지금 당장 확정된 매출이 늘었다는 뜻은 아니에요.",
        confidence: "구글 워런트 계약 규모($12.2B)·주가 상승폭은 복수 매체(24/7 Wall St.·GuruFocus) 보도 기준(신뢰도 높음) · 실제 구매 목표 달성 여부·워런트 행사 여부는 향후 확인 필요(미확정)",
        sources: [
          {title:"Marvell Technology Rockets 13% on $12.2B Google Warrant; Broadcom Falls 3%, Alphabet Unmoved (24/7 Wall St.)", url:"https://247wallst.com/investing/2026/08/19/marvell-technology-rockets-13-on-12-2b-google-warrant-broadcom-falls-3-alphabet-unmoved/"},
          {title:"Marvell Technology (MRVL) Shares Surge on Google Investment Deal (GuruFocus)", url:"https://www.gurufocus.com/news/9043837/marvell-technology-mrvl-shares-surge-on-google-investment-deal"},
          {title:"Marvell Technology Stock Jumps As AI Memory Push Accelerates (StocksToTrade)", url:"https://stockstotrade.com/news/marvell-technology-inc-mrvl-news-2026_08_19/"},
        ],
      },
    ],
    analystLog: [{
      date: "2026-08-10",
      period: "2026-06-01 마감 분기(회사 발표 기준 FY2027 1분기)",
      headline: "매출은 견조($2.418B, 가이던스 중간값 상회)한데 GAAP 순이익은 단 $34.5M(마진 1.4%) - 직전 4분기 평균 마진(32%대)에서 크게 추락.",
      oneTime: "완전한 '1회성'이라기보다 이 회사 특유의 구조적 회계 특성: 같은 분기 비GAAP(조정) 순이익은 $718.0M으로 GAAP과 684백만달러 차이가 남. 이 차이는 주식보상비용(SBC)·인수한 무형자산 상각·구조조정 비용 등 비현금성·M&A 관련 항목들 - 마벨이 AI 커스텀 실리콘 사업 확장을 위해 인수를 많이 해온 회사라 매 분기 반복되는 구조적 항목임(한 번성 이벤트 아님).",
      coreRead: "본업은 실제로 좋음 - 매출이 가이던스를 웃돌았고, 영업활동현금흐름은 $638.8M으로 역대 최고. GAAP 순이익만 놓고 '실적이 나빠졌다'고 보면 완전히 틀린 해석 - 비GAAP 순이익(+$718M)과 영업현금흐름이 본업 실력에 훨씬 가까움.",
      forecast: "이 회사는 GAAP-비GAAP 괴리가 매 분기 반복되는 구조라, 앞으로도 GAAP 순이익만 보면 계속 실제보다 나빠 보일 수 있음 - 다음 분기부터는 매출·영업현금흐름·비GAAP 순이익 위주로 판단하는 게 나음. 다만 커스텀 AI 반도체(XPU) 사업 자체의 원가율이 구조적으로 낮아서(마진이 얇은 사업) 장기적으로 전사 마진 자체가 눌릴 수 있다는 점은 별개의 진짜 리스크로 남아있음.",
      confidence: "GAAP-비GAAP 괴리와 영업현금흐름 수치는 회사 공식 발표 기준(신뢰도 높음) · 향후 마진 추세 전망은 추정(신뢰도 중간)",
      sources: [
        {title:"Marvell Technology, Inc. Reports First Quarter of Fiscal Year 2027 Financial Results (공식 발표)", url:"https://investor.marvell.com/news-events/press-releases/detail/1023/marvell-technology-inc-reports-first-quarter-of-fiscal-year-2027-financial-results"},
        {title:"MRVL Experiences Slow Expansion in Gross Margin: What's Ahead? (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/mrvl-experiences-slow-expansion-gross-150900088.html"},
      ],
    }],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(3/5점) - GAAP과 비GAAP 순이익 괴리가 커서 헤드라인 숫자보다 영업현금흐름을 봐야 하는 종목",
        view: "MRVL은 눌림목 점수 3/5점(52주 고점대비 -29.8%)로 매수 관심 구간이에요. PER(54.8배)이 3년 평균(18.8배)보다 오히려 훨씬 높게 나오는데, 이건 이 종목이 GAAP 기준 순이익이 인수 관련 상시적 회계항목(주식보상비용·무형자산 상각 등) 때문에 매우 낮게 나오는 구조라서(analystLog 확인: GAAP 순이익 $34.5M·마진 1.4% vs 비GAAP 순이익 $718.0M, 괴리 $684M) PER 계산 자체가 왜곡되기 쉬운 종목이에요 - 이건 1회성이 아니라 이 회사가 인수를 많이 해온 특성상 매 분기 반복되는 구조적 패턴이라, PER 숫자만 보고 '비싸다'고 판단하면 오해할 수 있어요. 실제 본업 건전성은 영업현금흐름(OCF)이 역대 최고($638.8M)를 기록했다는 점으로 확인돼요. 재무는 Q2'26 매출 +27.6%로 견조하고 FCF 마진도 20.0%로 양호해요. 컨센서스는 내년 매출 +45%·EPS +54%로 AI 데이터센터向 커스텀 실리콘(ASIC) 사업 확대를 반영한 낙관적 전망이에요.",
        increaseIf: [
          "영업현금흐름이 계속 사상 최고치를 경신하며 GAAP-비GAAP 괴리가 회계상 구조일 뿐 본업 문제가 아니라는 게 재확인될 때",
          "AI 데이터센터向 커스텀 실리콘 매출이 컨센서스(+45%)에 부합하는 속도로 성장할 때",
        ],
        wrongIf: [
          "영업현금흐름이 눈에 띄게 악화될 때(지금까지의 '비GAAP 괴리는 구조적 문제 없음'이라는 판단이 틀렸다는 신호)",
          "AI 데이터센터向 매출 성장이 컨센서스에 크게 못 미칠 때",
        ],
        watchNext: [
          "다음 분기 영업현금흐름 추이",
          "AI ASIC 사업 신규 고객사·계약 발표",
          "GAAP-비GAAP 괴리 폭이 계속 확대되는지 축소되는지",
        ],
        confidence: "매출·영업현금흐름 수치는 SEC 공시 기반 캐시 데이터 · GAAP-비GAAP 괴리 구조는 이전 조사에서 확인(analystLog 참고, 신뢰도 높음) · '구조적 문제가 아니다'는 판단은 Claude의 정성적 해석이며 향후 현금흐름 악화 시 재검토 필요",
        sources: [],
      },
    ],
    role: {
      tags: ["AI 커스텀 실리콘(XPU)", "데이터센터 네트워킹·광통신"],
      stars: 3,
      note: "하이퍼스케일러向 맞춤형 AI 반도체 설계에서 브로드컴과 함께 손꼽히는 업체로, AI 매출 비중이 35% 이상까지 확대됐어요. 다만 브로드컴 대비 규모가 작고, 인수를 많이 해온 특성상 GAAP 순이익이 비GAAP 대비 크게 낮게 나오는(한 분기 $34.5M vs $718.0M) 구조적 회계 괴리가 있어요.",
    },
  },
  INTC: {
    updated: "2026-08-20",
    customers: [
      "PC 제조사·소비자(CCG 부문) - 유통사·OEM에 프로세서 공급, 매출 $77억(+1%)",
      "클라우드서비스사업자·기업(DCAI 부문) - 서버·통신·고성능컴퓨팅용, 매출 $51억(+22%, 하이퍼스케일러 서버 수요 견인)",
      "외부 반도체 설계사(파운드리 부문) - 인텔 파운드리가 타사 칩 위탁생산 서비스 시작, 매출 $54억(+16%)",
    ],
    strengths: [
      "데이터센터·AI(DCAI) 부문이 하이퍼스케일러 서버 수요에 힘입어 +22~59%(분기별) 고성장 중",
      "파운드리 사업도 외부 고객 확보하며 +16% 성장 - 위탁생산 진입이 실제 매출로 나타나기 시작",
      "CCG(PC) 부문은 정체 수준이지만 감소하진 않는 안정적 캐시카우 역할",
    ],
    risks: [
      "⚠️ 파운드리 사업 턴어라운드 과정에서 대형 비현금 손상차손·구조조정 비용이 반복돼 GAAP 순손실이 여러 분기 지속됨(상세는 analystLog 참고) - 제품 매출 자체는 개선 중이라는 점과 구분해서 봐야 함",
      "파운드리가 TSMC·삼성 대비 후발주자라 외부 고객을 얼마나 더 확보하느냐가 관건 - 아직 흑자전환 시점 불투명",
    ],
    sources: [
      {title:"Intel Q2 FY 2026: Hyperscaler Server Demand Drives 59% DCAI Growth (Futurum Group)", url:"https://futurumgroup.com/insights/intel-q2-fy-2026-hyperscaler-server-demand-drives-59-dcai-growth/"},
      {title:"Intel Outlines Financial Framework for Foundry Business, Sets Path to Margin Expansion (Intel Newsroom)", url:"https://newsroom.intel.com/corporate/intel-outlines-financial-framework-for-foundry-business-sets-path-to-margin-expansion"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 본업 매출 +25%(15년來 최고)인데 파운드리發 순손실 110억 달러 - 본업과 파운드리 방향이 엇갈림",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-07-23 2분기 매출 161억 달러(+25% YoY, 2011년 이후 최고 성장률), 데이터센터 부문 +59% 성장을 기록했다.", "같은 분기 순손실 약 110억 달러(파운드리 관련 대규모 손상차손 반영)를 기록했다.", "파운드리 부문 단독 영업손실이 21억 달러였으나, 전분기 대비 손실폭이 축소되는 추세로 평가됐다.", "실적 발표 후 주가가 11% 급등했다가 다시 100달러 부근으로 되돌림했다."],
        why: ["제품(본업) 매출은 뚜렷하게 성장하고 있지만 파운드리 사업의 대규모 손실이 회계상 순손실을 만들어내는 구조라, '본업'과 '파운드리'를 분리해서 봐야 한다."],
        beginner: ["원래 하던 반도체 장사는 15년 만에 가장 잘 되고 있는데, 새로 시작한 파운드리(위탁생산) 사업에서 큰 손실이 나서 전체로는 적자가 났어요. 다만 이 손실이 분기마다 줄어들고는 있어요."],
        interpretation: "본업 성장은 긍정적 신호지만 파운드리 손실이 여전히 크다는 점에서 완전한 긍정으로 보기는 이르다.",
        decision: "파운드리 손실 축소 추세가 다음 분기에도 이어지는지를 핵심 확인 포인트로 삼을 것.",
        watch: ["다음 분기 파운드리 영업손실 규모", "데이터센터 부문 성장세 지속 여부"],
        confidence: "실적 수치는 회사 공식 발표 기준, 다수 매체(CNBC, Electronics Weekly) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Intel Q2 2026 earnings: revenue up 25%, fastest growth since 2011 (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/intel-q2-2026-earnings-revenue-205531105.html"},
        {title:"Intel makes Q2 loss of $11bn (Electronics Weekly)", url:"https://www.electronicsweekly.com/news/business/intel-loses-11m-in-q2-2026-07/"},
        {title:"Intel Foundry Lost $2.1 Billion in Q2 2026 — and That Is Actually Progress (FourWeekMBA)", url:"https://fourweekmba.com/ai-intel-foundry-q2-2026-losses-narrowing/"},
        ],
      },
      {
        date: "2026-08-20",
        headline: "$20B 규모 보통주 유상증자(주당 $95, 2.1억주 신주 발행) - 파운드리 턴어라운드 자금 확보, 기존 주주엔 희석 부담",
        coreAnalysis: "인텔이 주당 $95에 신주 2.1억주를 발행하는 $20B 규모의 보통주 유상증자를 발표했다(8/12 마감, 순조달액 약 $19.7B 예상). 같은 주 인텔 주가는 첨단 반도체 제조 경쟁 심화 우려 속에 -4.51% 하락했다. 다만 최근 12개월 기준으로는 미국 정부의 지분 투자(10% 지분 확보)와 AI 인프라 확대 수혜로 주가가 +175~373%대로 급등한 상태였다.",
        whyItMatters: "위 risks 항목의 '파운드리 턴어라운드 자금 소요'가 실제로 대형 증자로 이어진 사례 - 손상차손·구조조정 비용을 GAAP 손실로만 반영하던 것에서 나아가, 이제 신주 발행으로 직접 실탄을 확보한 것이다. 자금 자체는 파운드리 설비투자에 도움이 되지만, 신주 2.1억주 발행은 기존 주주의 지분율·주당순이익(EPS)을 그만큼 희석시킨다는 점에서 공짜가 아니다. 미국 정부 지분 참여, CHIPS Act 자금과 더불어 이번 증자까지 겹치면서 인텔의 자금조달 구조 자체가 '정부+시장' 복합 조달로 바뀌고 있다는 점도 함께 봐야 한다.",
        beginnerSummary: "인텔이 공장(파운드리) 투자에 쓸 돈을 마련하려고 새 주식을 찍어서 팔았어요 - 주당 95달러에 2억 1천만 주를 팔아 약 200억 달러를 확보했어요. 돈이 생기는 건 좋지만, 새 주식이 많이 풀리면 기존 주주가 가진 주식의 가치(지분율)는 그만큼 옅어져요(희석). 최근 1년간 주가가 워낙 많이 올랐던(정부 지분 투자, AI 수요 등) 상황이라 이 정도 증자는 회사가 자신 있게 자금을 조달한 것으로 볼 수도 있어요.",
        confidence: "증자 규모·발행가·순조달액은 CNBC 등 매체 보도 기준(신뢰도 높음) · 희석 효과의 구체적 EPS 영향은 다음 분기 실적에서 확인 필요",
        sources: [
          {title:"Intel upsizes stock offering to $20 billion at $95 per share as AI demand accelerates (CNBC)", url:"https://www.cnbc.com/2026/08/10/intel-intc-stock-offering-ai.html"},
          {title:"Intel Stock Slips As $20B Upsized Share Sale Hits Tape (Timothy Sykes)", url:"https://www.timothysykes.com/news/intel-corporation-intc-news-2026_08_18-2/"},
        ],
      },
    ],
    analystLog: [{
      date: "2026-08-10",
      period: "2026년 여러 분기 연속 대규모 GAAP 순손실 (2026-03 마감 분기 -$3.7B 등)",
      headline: "매출은 AI 수요 덕에 회복세($13.6B, 이후 분기엔 $16.1B로 +25% YoY)인데, GAAP 순손실이 분기마다 수십억달러 규모로 반복됨(-$3.7B, 이후 분기 -$11.0B 등).",
      oneTime: "매 분기 다른 대형 비현금성/구조조정 항목이 원인 - ①모빌아이(Mobileye) 사업 관련 $3.9B 영업권 손상차손 ②CHIPS Act(미국 반도체지원법) 에스크로 주식 관련 $12.5B 비현금 비용 ③수억달러 규모의 인력감축·구조조정 비용이 여러 분기에 걸쳐 반복적으로 발생 - 하나의 '1회성 이벤트'가 아니라 파운드리 사업 턴어라운드 과정에서 계속 나오는 대형 비용들의 연속.",
      coreRead: "제품 매출 자체는 AI 수요로 개선되고 있음(+25% YoY) - 문제는 본업(제품 판매)이 아니라 ①파운드리(위탁생산) 사업부의 지속적인 영업손실과 ②그 사업을 정상화하는 과정에서 나오는 대형 손상차손·구조조정 비용. 반도체 설계 자체보다 '파운드리 사업으로의 전환 비용'이 GAAP 실적을 계속 짓누르는 구조.",
      forecast: "이런 대형 일회성 성격의 비용들이 앞으로도 몇 분기는 더 나올 가능성이 높음(파운드리 턴어라운드가 진행형) - GAAP 순손실이 계속돼도 그 자체를 '악화'로 보지 말고, 매 분기 손실의 '항목'이 반복되는 구조조정 성격인지 새로운 악재인지를 확인해야 함. 제품 매출 성장률(AI 수요)이 계속 유지되는지가 진짜 본업 신호. 파운드리 부문이 흑자 전환하는 시점이 이 종목의 실질적 반등 신호가 될 가능성이 높음(아직 요원함).",
      confidence: "손상차손·구조조정 비용 항목과 매출 성장률은 회사 공식 발표 기준(신뢰도 높음) · 향후 몇 분기 더 지속될지에 대한 전망은 추정(신뢰도 중간)",
      sources: [
        {title:"Intel reports $3.7bn net loss in Q1 2026 (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/intel-reports-3-7bn-net-083423589.html"},
        {title:"Intel (NASDAQ:INTC) Holds Near $82; Foundry Unit Losses Offset AI-Driven Recovery (TS2)", url:"https://ts2.tech/en/intel-nasdaqintc-holds-near-82-foundry-unit-losses-offset-ai-driven-recovery/"},
        {title:"Intel Q2 Revenue Jumps 25% on AI Demand, but Foundry Losses Keep INTC Under Pressure (FX Leaders)", url:"https://www.fxleaders.com/news/2026/07/30/intel-q2-revenue-jumps-25-on-ai-demand-but-foundry-losses-keep-intc-under-pressure/"},
      ],
    }],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(2/5점) - 여러 분기 연속 대형 GAAP 순손실이지만 원인이 매번 다른 대형 비현금 항목, 제품 매출 자체는 AI 수요로 성장 중",
        view: "INTC는 눌림목 점수 2/5점(52주 고점대비 -27.3%)로 매수 관심 초입이에요. PER(67.8배)이 3년 평균(49.9배)보다 높게 나오는데, 이는 순이익이 자주 대형 비현금 손상차손으로 짓눌려 왜곡되기 쉬운 구조 때문이라 PER 숫자 자체보다는 아래 재무 방향을 더 신뢰하는 게 나아요. 재무 방향 판정은 '외형·수익성 동반 개선'으로 나왔는데(Q2'26 매출 +25.4%, 영업이익률 +35.8%p 큰 폭 개선), 이건 이전 분기들의 극단적으로 나쁜 기저(모빌아이 영업권 손상 $3.9B, CHIPS Act 에스크로 주식 관련 $12.5B 등 여러 분기 연속 대형 GAAP 순손실)에서 벗어나는 회복 국면으로 해석돼요(analystLog 참고) - 손상차손 원인이 매번 다르다는 점 자체가 파운드리 사업 전환 비용의 불확실성을 보여줘요. 다만 제품 매출 자체는 AI 수요로 +25% 성장 중이라는 게 확인됐고, 이 회사 판단의 핵심은 '파운드리 부문이 언제 흑자 전환하는지'예요. 컨센서스는 내년 매출 +13%·EPS +35%로 완만한 회복을 기대해요.",
        increaseIf: [
          "파운드리 부문이 실제로 흑자 전환하거나 손실폭이 축소되는 신호가 나올 때",
          "대형 비현금 손상차손 없이 분기를 마무리할 때(일회성 항목 빈도 감소)",
          "제품 매출 성장(현재 +25%)이 계속 유지될 때",
        ],
        wrongIf: [
          "파운드리 부문 손실이 계속 확대되거나 새로운 대형 손상차손이 또 발생할 때",
          "제품 매출 성장세가 꺾일 때(AI 수요 둔화)",
        ],
        watchNext: [
          "파운드리 부문 흑자전환 시점 - 가장 중요한 지표",
          "다음 분기 대형 일회성 손상차손 발생 여부",
          "18A 등 차세대 공정 수율·고객 확보 현황",
        ],
        confidence: "매출·영업이익률 수치는 SEC 공시 기반 캐시 데이터 · 손상차손 원인·규모는 이전 조사에서 확인(analystLog 참고, 신뢰도 높음) · '파운드리 흑자전환이 핵심 관전포인트'라는 판단은 Claude의 정성적 해석",
        sources: [],
      },
    ],
    role: {
      tags: ["PC·서버 CPU(레거시)", "파운드리(위탁생산, 신규 진출)"],
      stars: 2,
      note: "한때 반도체 업계를 지배했지만 지금은 파운드리 사업 턴어라운드를 진행 중인 후발주자예요. 제품(CPU) 매출은 AI 수요로 +25% 성장하며 회복 중이지만, 모빌아이 손상차손 $3.9B·CHIPS Act 관련 $12.5B 등 대형 비현금 비용이 반복되며 파운드리 흑자전환까지는 아직 갈 길이 남아있어요.",
    },
  },
  // ============ newsLog: 실적 외 '중요 뉴스' 해석 (2026-08-13 신규) ============
  // [배경] 사용자가 뉴스(BofA의 2500억달러 AI·에너지 인프라 공급 약정, 오라클 감원 뉴스)를
  // 직접 붙여넣고 "이런 뉴스가 나올 때 분석·해석을 정리해줄 수 있냐"고 요청함 - 본인이 쓴 형식
  // 그대로([핵심내용 분석]/[왜 중요한가]/[초보자용 정리])를 필드명으로 그대로 씀
  // (coreAnalysis/whyItMatters/beginnerSummary). analystLog와의 차이: analystLog는 '실적 숫자가
  // 흔들렸을 때'만 트리거되는 재무제표 기반 조사이고, newsLog는 실적과 무관하게 터진 개별
  // 뉴스(감원, 신용등급, 대형 계약 등) 하나하나를 다룸 - 둘 다 날짜순으로 쌓아가는 append-only
  // 로그이고 자동화 안 함(세션에서 요청할 때 Claude가 WebSearch로 조사해서 추가).
  ORCL: {
    updated: "2026-08-13",
    customers: [
      "전세계 기업 데이터베이스·ERP 고객 - 오라클의 전통적 핵심 사업(레거시 강점)",
      "AI 인프라 대형 고객(OCI 클라우드) - 메타·엔비디아·오픈AI·록히드마틴·에어프랑스-KLM 등과 수십억달러 규모 장기 계약 체결. 특히 오픈AI 한 곳이 전체 미청구잔고(RPO)의 약 54%(추정 $3,000억)를 차지할 정도로 비중이 큼",
    ],
    strengths: [
      "미청구잔고(RPO, 앞으로 받을 계약금액)가 2026 회계연도 말 $638B로 전년비 +363%, 분기 대비로도 $850억 증가 - 향후 매출 성장이 상당 부분 이미 계약으로 확보된 상태",
      "OCI(오라클 클라우드) 매출 +68% 성장, GPU 관련 매출은 세자릿수(100%대) 성장, 멀티클라우드 데이터베이스 사용량은 800% 넘게 급증",
    ],
    risks: [
      "⚠️ RPO 중 오픈AI 한 회사 비중이 지나치게 커서(약 54%), 오픈AI의 계약 이행 능력이나 AI 투자 지속 여부에 오라클 미래 매출이 크게 좌우됨 - 고객 집중 리스크",
      "이 막대한 수주를 실제로 지어내려면(데이터센터 건설) 계속 빚을 내야 하고, 감원·신용등급 강등·CDS 급등까지 겹친 재무 부담 심화 상황 - 상세 내용은 아래 newsLog 참고",
    ],
    sources: [
      {title:"Oracle Q4 2026 Earnings: $638B Backlog Turns AI Cloud Growth into Funding Test (ERP Today)", url:"https://erp.today/oracle-q4-2026-earnings-ai-cloud-backlog-funding/"},
      {title:"Oracle Reports on June 10, and Its Cloud Backlog Could Be the Next Big Test for the AI Infrastructure Trade (The Motley Fool)", url:"https://www.fool.com/investing/2026/06/08/oracle-reports-on-june-10-and-its-cloud-backlog-co/"},
      {title:"Will Oracle's RPO Expansion Strengthen Long-Term Revenue Outlook? (Yahoo Finance)", url:"https://finance.yahoo.com/news/oracles-rpo-expansion-strengthen-long-165600242.html"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 신용등급 강등(BBB-)과 부채 급증 - 낙폭과다가 정당화되는 우려 사례",
        importance: "medium",
        tone: "risk",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["FY26 4분기는 클라우드 호조로 기록적 실적이었으나 이후 1분기 가이던스가 예상을 하회해 주가가 하락했다.", "2026년 여름 S&P가 신용등급을 'BBB-'로 강등했다(정크본드 근접 수준) - 주가가 52주 신저가를 기록했다.", "AI 데이터센터 capex 확대에 따른 부채 급증(약 1,600억 달러 규모)과 현금흐름 우려가 반복 보도됐다.", "2026년 들어 주가가 약 28~31% 하락한 상태다."],
        why: ["신용등급 강등은 회사의 재무 건전성 자체에 대한 제3자(신용평가사)의 경고이기 때문에, 단순 주가 조정과는 성격이 다르다."],
        beginner: ["신용평가회사가 '이 회사가 빚을 갚을 능력이 예전보다 못해졌다'고 등급을 낮춘 거예요. 그리고 실제로 빚도 크게 늘었어요. 그냥 주가만 빠진 게 아니라 회사 재무상태 자체에 경고등이 켜진 상태라고 볼 수 있어요."],
        interpretation: "낙폭과다 신호가 떠도, 이 경우는 '일시적으로 싸진 우량주'보다 '재무 리스크가 커지는 중인 회사'에 가까운 근거가 있다. 신중하게 접근할 필요가 있다.",
        decision: "신용등급·부채 관련 뉴스가 추가로 악화되는지 확인 전까지는 낙폭과다 신호를 곧이곧대로 매수 근거로 쓰지 말 것.",
        watch: ["추가 신용등급 변동", "AI capex 대비 현금흐름 개선 여부", "클라우드 매출 회수 속도"],
        confidence: "S&P 신용등급 강등은 공식 발표 사항으로 신뢰도가 높고, 다수 매체(Yahoo Finance)가 교차 확인.",
        directionCheck: true,
        sources: [
        {title:"ORCL Stock Drops Amid Lower-Than-Expected Q1 Earnings Guidance (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/orcl-stock-drops-amid-lower-212156842.html"},
        {title:"Oracle Just Hit a Fresh 52-Week Low and Had Its Credit Cut Toward Junk (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/oracle-just-hit-fresh-52-170700819.html"},
        {title:"Oracle Is Still Down 28% This Year (24/7 Wall St.)", url:"https://247wallst.com/investing/2026/08/03/oracle-is-still-down-28-this-year-what-will-it-take-to-get-orcl-stock-back-to-200/"},
        ],
      },
      {
        date: "2026-08-13",
        headline: "오라클, 9월 이전 추가 감원 준비 + 5년 CDS 스프레드 사상 최고치·신용등급 강등 겹침 (AI 인프라發 부채 부담 심화)",
        coreAnalysis: "①오라클이 9월 1일 이전 추가 감원을 준비 중이고(일부 팀은 두 자릿수% 규모) - 이미 2026 회계연도(2025-06~2026-05)에 직원 수가 약 162,000명→약 141,000명으로 21,000명(약 13%) 줄었음. 같은 회계연도에 AI 데이터센터 인프라에 $55.7B를 투입했고 현금유출이 유입보다 $23.7B 더 많아서, 이 부족분을 $43B 회사채 발행 + $5B 증자로 메움 - 퇴직/구조조정 비용은 전년 $374M에서 $1.84B로 급증. ②별도로 S&P가 2026-07-09 오라클 장기신용등급을 BBB→BBB-로 한 단계 강등함(투자등급 중 최하위, 정크본드 바로 위) - 사유는 'AI 관련 초기 설비투자 소요를 반복적으로 과소평가함'. ③오라클의 5년물 CDS(신용부도스와프) 스프레드가 2026년 7월 중 약 198~203bp까지 치솟아 사상 최고치를 기록(일부 매체는 최대 215bp까지 보도) - 2025년 중반 대비 약 4배 수준이고 2008년 금융위기 당시 피크치도 웃돎. 최근 4개 분기 연속 잉여현금흐름(FCF)이 마이너스.",
        whyItMatters: "감원 자체는 'AI 인프라 비용을 메우려는 인건비 절감'이라는 이미 알려진 맥락의 반복이라 새로운 이야기는 아니지만, 9월에 또 예정돼 있다는 건 비용 압박이 계속되고 있다는 뜻. 더 중요한 신호는 신용등급 강등과 CDS 급등 쪽 - 이건 '오라클이 갚아야 할 빚이 갑자기 늘어난 것'이 아니라 '채권시장이 오라클의 상환능력을 이전보다 훨씬 불안하게 보기 시작했다'는 뜻임. 오라클의 최근 주가 스토리는 거의 전적으로 'OCI(오라클 클라우드) AI 인프라 수주잔고가 막대하다'는 데 의존해왔는데, 이 수주를 실제로 지어내려면 계속 빚을 내야 하고 그 빚을 갚을 현금은 아직 이익으로 못 들어오고 있음(FCF 마이너스 지속) - '수주는 늘어나는데 현금은 계속 나간다'는 전형적인 레버리지 확장기 위험 신호. 다만 신용등급이 아직 투자등급(BBB-) 안에 있고 감원으로 비용을 관리하려는 시도 자체가 회사가 문제를 인지·대응 중이라는 뜻이기도 해서, '이미 부도 위기'로 확대 해석할 단계는 아님.",
        beginnerSummary: "오라클이 인공지능(AI) 데이터센터를 짓는 데 어마어마한 돈을 쏟아붓고 있는데, 벌어들이는 속도보다 쓰는 속도가 훨씬 빨라서 빚(회사채)을 계속 늘리고 있어요. 그래서 인건비라도 줄이려고 직원을 계속 해고하고 있고(9월에 또 예정), 신용평가사(S&P)는 '이 회사 빚 갚을 능력이 조금 불안해졌다'며 등급을 한 단계 낮췄어요. CDS는 쉽게 말해 '이 회사가 빚을 못 갚을 경우에 대비한 보험료'인데, 이게 사상 최고치로 뛰었다는 건 채권 투자자들이 오라클의 빚 상환을 예전보다 훨씬 더 걱정하고 있다는 신호예요. 아직 회사가 망할 위기는 아니지만(신용등급도 여전히 '투자 적격'), 'AI에 공격적으로 베팅 중인데 그 돈을 빚으로 조달하고 있고, 시장이 그걸 불안하게 보기 시작했다'는 그림으로 이해하면 돼요. 오라클 관련 좋은 뉴스(대형 AI 계약 수주 등)가 나와도 이 부채 부담 얘기를 같이 봐야 균형 잡힌 판단이 될 거예요.",
        confidence: "감원 규모·재무 수치(인프라 투자액·현금흐름·퇴직비용)와 S&P 등급 강등은 회사 공시·S&P 공식 발표·복수 언론 보도 기준(신뢰도 높음) · CDS 정확한 bp 수치는 매체마다 소폭 다르게 보도됨(198~215bp, 신뢰도 중간) · '왜 중요한가'의 해석 자체는 Claude의 판단(신뢰도 중간)",
        sources: [
          {title:"Oracle Corp. Downgraded To 'BBB-/A-3' From 'BBB/A' (S&P Global Ratings, 공식)", url:"https://www.spglobal.com/ratings/en/regulatory/article/-/view/sourceId/101695609"},
          {title:"Oracle's Credit Risk Nears an 18-Year High: Can AI Backlog Save Stock? (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/oracles-credit-risk-nears-18-151000986.html"},
          {title:"Oracle plans to again cut thousands of jobs to free up AI data center cash flow (Data Center Dynamics)", url:"https://www.datacenterdynamics.com/en/news/oracle-plans-to-again-cut-thousands-of-jobs-to-free-up-ai-data-center-cash-flow/"},
          {title:"Oracle plans another round of layoffs before September (TheStreet)", url:"https://www.thestreet.com/employment/oracle-layoffs-ai-infrastructure-debt"},
          {title:"Oracle cutting thousands in latest layoff round as company continues to ramp AI spending (CNBC)", url:"https://www.cnbc.com/2026/03/31/oracle-layoffs-ai-spending.html"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(4/5점, 강한 매수기회 밴드) - 가격은 크게 빠졌지만 이유가 신용등급 강등·CDS 급등이라는 점을 반드시 감안해야 함",
        view: "ORCL은 눌림목 점수 4/5점(52주 고점대비 -54.2%로 워치리스트 전체에서 가장 깊은 하락, 200일선 아래)으로 점수만 보면 가장 강한 매수기회로 나와요. 하지만 이 종목은 '왜 이렇게 빠졌는지'를 반드시 함께 봐야 해요 - S&P가 2026-07-09에 신용등급을 BBB→BBB-(정크본드 바로 위)로 강등했고, 5년물 CDS 스프레드가 2026-07 중 사상 최고치(2025년 중반 대비 4배, 2008년 금융위기 피크 상회)를 기록했어요. 동시에 FY26 21,000명(13%) 감원, 인프라투자 $55.7B, 현금유출차 $23.7B를 $43B 회사채+$5B 증자로 충당하고 있어요 - 즉 'AI 인프라에 빚으로 베팅 중이고 채권시장이 불안해하기 시작했다'는 신호예요. 재무 자체는 Q2'26 매출 +20.6%·영업이익률 +3.6%p로 나쁘지 않지만, FCF 마진이 -9.8%로 투자 지출이 영업현금을 크게 웃돌고 있어요. 컨센서스는 내년 매출 +46%·EPS +36%로 매우 낙관적인데, 이 낙관이 실제 클라우드 인프라 수주(대형 클라우드 계약들)로 뒷받침되는지가 핵심이에요. 이 종목은 '가격이 싸다'와 '재무 리스크가 낮다'가 같이 안 가는 대표 사례라고 봐요.",
        increaseIf: [
          "신용등급이 안정화되거나 CDS 스프레드가 진정되는 신호가 나올 때(채권시장 우려 완화)",
          "대형 클라우드 인프라 계약(수주)이 실제 매출로 확인되며 부채 부담을 상쇄할 만큼 성장이 확인될 때",
          "FCF가 흑자로 돌아설 때",
        ],
        wrongIf: [
          "신용등급이 추가로 강등되거나 CDS 스프레드가 더 벌어질 때(채권시장 신뢰 추가 악화)",
          "부채 상환 부담이 실제로 유동성 문제로 번지는 신호가 나올 때",
          "매출 가이던스(+46%)를 못 채울 때",
        ],
        watchNext: [
          "다음 신용등급 리뷰·CDS 스프레드 추이",
          "대형 클라우드 인프라 수주 발표",
          "FCF·현금흐름 개선 여부",
        ],
        confidence: "매출·영업이익률·FCF 수치는 SEC 공시 기반 캐시 데이터 · 신용등급 강등·CDS 스프레드·감원 규모는 S&P Global 공식 발표 및 복수매체(Yahoo Finance·Data Center Dynamics·TheStreet·CNBC)로 교차검증(newsLog에 이미 기록) · '재무 리스크가 가격 하락의 핵심 원인'이라는 종합 판단은 Claude의 정성적 해석",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-05-31 마감 분기 (FY26 4분기, 6월 10일 발표)",
        headline: "FY26 4분기 매출이 192억 달러(전년비 +21%)로 시장 예상을 웃돌았고, 비GAAP EPS도 2.11달러(+24%)로 컨센서스 1.96달러를 상회했어요.",
        oneTime: "비GAAP EPS 2.11달러에는 특정 거래에서 나온 일회성 순투자이익이 섞여 있어서, 이를 빼면 실질 성장률은 24%가 아니라 20%(EPS 약 2.03달러)로 낮아져요. GAAP 기준으로는 순이익 42억 달러(+23%), 희석 EPS 1.45달러(+21%)였어요.",
        coreRead: "RPO가 6,380억 달러(전년비 +363%, 전분기 대비 +850억 달러)로 다시 폭증했고, 이 중 750억 달러는 고객이 선불하거나 하드웨어를 직접 대는 부분이라 오라클이 전부 자기 돈으로 짓는 건 아니에요. 다만 FY26 잉여현금흐름은 -237억 달러 적자(영업현금흐름은 320억 달러, +54%로 견조)였고, FY26 한 해에만 부채 430억 달러·신주 50억 달러를 새로 조달했어요. 7월 9일 S&P가 신용등급을 BBB에서 BBB-로 한 단계 강등(정크본드 바로 위 등급)하면서, FY27 capex가 기존 가이던스 600억 달러대에서 900~950억 달러로 뛰고 FCF 적자도 -420억 달러로 거의 두 배가 될 거라 지적했고, 오픈AI 한 곳이 RPO의 약 50%를 차지하는 고객 집중 리스크도 강등 사유로 꼽았어요. 총부채는 약 1,670억 달러 수준이에요.",
        forecast: "FY27 1분기(2026년 8월 마감, 9월 중순 발표 예정) 실적에서는 매출 성장률이 회사 가이던스 27~29%대를 유지하되, OCI 매출 증가율은 이번 분기 93%에서 70~80%대로 다소 둔화될 것으로 봐요. 잉여현금흐름은 계속 마이너스를 유지하고, FY27 전체 400억 달러 규모 자금조달(부채+지분, 그중 200억 달러는 ATM 증자) 중 일부가 이 분기 내 실행되는지가 관전 포인트예요.",
        confidence: "매출·EPS·RPO·GAAP/비GAAP 수치, capex·자금조달 가이던스, S&P 강등 날짜(7/9)와 등급(BBB-)은 오라클 공식 발표와 S&P 발표에 기반한 확인된 사실이에요. FY27 1분기 OCI 성장률 둔화 전망과 자금조달 실행 시점 예측은 제 해석이니 실제와 다를 수 있어요.",
        sources: [
          {
            title: "Oracle - Oracle Announces Record Q4 and FY 2026 Results Driven by Cloud Infrastructure & Cloud Applications",
            url: "https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Record-Q4-and-FY-2026-Results-Driven-by-Cloud-Infrastructure--Cloud-Applications/default.aspx",
          },
          {
            title: "Oracle Q4 FY2026: Record Revenue $19.2B, OCI Surges 93%, But Financing Risk Drives Stock Down to $142",
            url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262124382-oracle-orcl-q4-fy2026-19-2b-revenue-oci-5-8b-93-rpo-638b-fy2027-90b-capex-financing-risk-tradingkey",
          },
          {
            title: "Oracle Q4 2026 Earnings: $638B Backlog Turns AI Cloud Growth into Funding Test",
            url: "https://erp.today/oracle-q4-2026-earnings-ai-cloud-backlog-funding/",
          },
          {
            title: "Oracle stock shrugs off S&P downgrade to 'BBB-', but $160B debt shadow looms",
            url: "https://finance.yahoo.com/markets/stocks/articles/oracle-stock-shrugs-off-p-185346661.html",
          },
        ],
      },
    ],
    role: {
      tags: ["기업 DB·ERP(레거시)", "OCI 클라우드(AI 인프라)"],
      stars: 3,
      note: "기업용 데이터베이스에서는 오랜 강자지만 클라우드 인프라(OCI)는 AWS·애저·GCP 대비 후발주자예요. 미청구잔고(RPO)가 $638B(전년비 +363%)로 대형 AI 인프라 수주를 확보했지만 오픈AI 한 곳이 그 절반 이상을 차지하는 고객 집중 리스크가 있고, 이 수주를 지어내려 빚을 계속 늘리면서 신용등급이 강등되는 등 재무 부담이 커요.",
    },
  },
  // ============ newsLog 2차 확장 - 워치리스트 나머지 12종목 (2026-08-13) ============
  // [배경] 06 뉴스 탭 신설 직후 사용자가 "대부분 종목에 해석이 없다"고 지적함. 실제 점검 결과
  // newsLog=ORCL 1종목·analystLog=10종목뿐이고 15종목은 둘 다 없었음(QQQ·SPY는 ETF라 개별기업
  // 뉴스 개념이 없어 조사 대상에서 제외). 캐시된 헤드라인을 직접 읽어보니 대부분(15종목 중
  // 상당수)은 실제로 그 종목만의 특별한 사건이 없어서 해석이 없는 게 정상이었으나(예: MSFT 1차
  // 조회는 패치튜즈데이 등 운영성 뉴스뿐이었음), 사용자가 "나머지 14종목(QQQ·SPY 제외 12종목)
  // 전부 조사"를 선택해서 각 종목을 별도로 WebSearch함 - 그 결과 대부분에서 실제로 중요한 사건이
  // 발견됨(감원·CEO교체·마진급변·주가급락 등). AVGO만 조사 결과 특별한 사건 없이 기존에 이미
  // 알려진 AI매출 성장 추세뿐이라 항목을 추가하지 않음(억지로 채우지 않는다는 이 프로젝트 원칙).
  MSFT: {
    updated: "2026-08-13",
    customers: [
      "기업 고객 전반(Azure 클라우드) - 포춘500 대부분 포함, 클라우드 매출이 연 $2,000억 규모 연환산 페이스",
      "오피스365/M365 구독 - 전세계 기업·개인 사용자, 소비자용은 +24% 성장 중",
      "링크드인 사용자(구인+광고) - 매출 $198억으로 윈도우 사업을 이미 추월",
      "게임 사용자(엑스박스, 액티비전블리자드 인수 이후 콘텐츠 확장)",
    ],
    strengths: [
      "생산성·클라우드·PC 3대 사업 균형 - 인텔리전트클라우드 매출 $393억(+32%), 그 중 Azure는 +43%로 더 빠르게 성장",
      "AI(Copilot) 사업이 연환산 매출 $370억 돌파(전년비 +123%)로 빠르게 확대 중",
      "링크드인이 윈도우를 추월할 만큼 신사업 다각화에 성공 - 특정 사업 하나에 대한 의존도가 낮음",
    ],
    risks: [
      "⚠️ FTC가 클라우드·AI·소프트웨어 번들링(Entra ID, Copilot 등)까지 조사 범위를 넓힌 대형 반독점 조사가 진행 중(2026-02 경쟁사 6곳에 조사 요청서 발송) - 미국·영국·EU에서 동시 진행",
      "AI 투자 대비 회수(ROI)에 대한 시장 의구심 - 연 $50B 이상 GPU 투자와 실제 고객 ROI 사이 격차가 우려 요인으로 지목됨",
      "Copilot 유료전환율이 기대만큼 높지 않고, 엑스박스 하드웨어 매출은 감소 중(위 newsLog의 감원·스튜디오 분사와 같은 맥락)",
    ],
    sources: [
      {title:"Which Microsoft businesses are growing and shrinking, according to obscure table in regulatory filing (GeekWire)", url:"https://www.geekwire.com/2026/which-microsoft-businesses-are-growing-and-shrinking-according-to-obscure-table-in-regulatory-filing/"},
      {title:"Microsoft facing its biggest US FTC antitrust investigation yet (TechRadar)", url:"https://www.techradar.com/pro/microsoft-facing-its-biggest-us-ftc-antitrust-investigation-yet"},
      {title:"Microsoft Antitrust Probe Widens: 6 Rivals Queried (Tech Insider)", url:"https://tech-insider.org/microsoft-antitrust-probe-cloud-ai-2026/"},
    ],
    newsLog: [
      {
        date: "2026-08-13",
        headline: "감원 4,800명(엑스박스 게임스튜디오 4곳 분사 포함) + 사상 최대 AI 설비투자 $190B 가이던스, 상반기 주가는 2022년 이후 최악(-23%)",
        coreAnalysis: "마이크로소프트가 전체 인력의 약 2.1%인 약 4,800명을 감원했음(2026-07-06 발표). 그중 엑스박스(게임) 부문이 특히 크게 타격을 입어 이번 회계연도 중 약 3,200개 직무(엑스박스 전체 인력의 약 20%)가 줄고 게임 스튜디오 4곳이 분사(spin-off)됨. 같은 시기 2026년 설비투자(CAPEX)는 애널리스트 예상을 크게 웃도는 $190B로 사상 최대 규모를 가이던스로 제시함(클라우드·AI 인프라 확충 목적). 그럼에도 마이크로소프트 주가는 2026년 상반기에 약 -23% 하락 - 2022년 이후 가장 나쁜 상반기 성적이었음.",
        whyItMatters: "감원하면서 동시에 AI 인프라엔 사상 최대로 투자한다는 패턴은 오라클·아마존과 똑같은 구조(위 오라클 항목 참고)라 개별 기업 이슈라기보다 업계 전반의 흐름으로 봐야 함. 다만 마이크로소프트는 상반기 주가가 2022년 이후 최악이었다는 게 눈에 띄는 차이점 - 시장이 'AI에 돈을 쓴다'는 이야기 자체를 무조건 좋게만 보고 있지 않다는 뜻이고, 실제로 그 투자가 클라우드(Azure) 매출·마진으로 이어지는지를 숫자로 계속 확인해야 함. 엑스박스 구조조정은 게임 사업이 회사의 핵심 성장 축(클라우드·AI)에서 우선순위가 밀리고 있다는 신호로 읽을 수 있음.",
        beginnerSummary: "마이크로소프트도 직원을 줄이면서(전체의 약 2%) 동시에 AI 데이터센터에는 역대 최대 규모의 돈을 쓰겠다고 밝혔어요. 특히 게임(엑스박스) 쪽이 많이 줄었고 스튜디오 몇 곳은 아예 분사시켰어요. 그런데 이렇게 AI에 돈을 쏟아붓겠다고 했는데도 올해 상반기 주가는 2022년 이후 가장 안 좋았어요 - 'AI에 투자한다'는 말만으로는 주가가 안 오른다는 걸 보여주는 사례예요. 투자한 돈이 실제로 돈을 벌어오는지가 앞으로 더 중요해질 거예요.",
        confidence: "감원 규모·설비투자 가이던스는 회사 발표·복수 언론 보도 기준(신뢰도 높음) · 상반기 주가 하락폭은 시장 데이터 기준(신뢰도 높음)",
        sources: [
          {title:"Microsoft cuts 4,800 jobs, as Xbox unit downsizes and plans to spin off four gaming studios (CNBC)", url:"https://www.cnbc.com/2026/07/06/microsoft-cuts-2point1percent-of-employees-as-xbox-unit-plans-to-spin-studios.html"},
          {title:"Microsoft cuts 4,800 jobs, about 2% globally, revamps salesforce and launches massive Xbox overhaul (GeekWire)", url:"https://www.geekwire.com/2026/microsoft-cuts-4800-jobs-about-2-globally-revamps-salesforce-and-launches-massive-xbox-overhaul/"},
          {title:"Microsoft Cuts 4,800 Jobs Amid AI-Driven Tech Layoffs in 2026 (Global Banking & Finance)", url:"https://www.globalbankingandfinance.com/microsoft-joins-ai-driven-tech-layoff-wave-4-800-job-cuts/"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "관망 - 밸류에이션은 자기 역사 대비 오히려 싸졌지만, 감원·클라우드 재가속 시그널을 더 봐야 함",
        view: "MSFT는 눌림목 점수 1/5점(52주 종가 고점대비 -8.6%, 200일선 위, 시장 조정도 없음)이라 저가 매수 신호는 아니에요. 다만 PER(약 25.1배)이 이 종목 3년 평균(약 31.8배)보다 뚜렷이 낮아서, PER 유지 시나리오 기준가($592)와 지금 가격($495) 사이 괴리가 다른 빅테크보다 커요(다만 이 괴리 자체가 이후 수익률을 예측 못 한다는 건 검증된 사실이라 매수 신호로 쓰진 않아요). 재무는 Q2'26 매출 +17.7%·영업이익률 변화 +0.2%p로 매출·이익이 거의 같은 속도로 늘고 있어(레버리지 확대는 아직 뚜렷하지 않음) '동반 개선'보다는 '유지'에 가까운 흐름이에요. 최근 감원(4,800명)+엑스박스 스튜디오 분사 뉴스가 있었고 상반기 주가가 -23%로 2022년 이후 최악이었는데, 이게 AI 투자 확대에 따른 비용구조 조정인지 수요 둔화 신호인지는 다음 분기 애저(Azure) 성장률로 확인이 필요해요. 컨센서스는 내년 매출·EPS 둘 다 +20%로 보고 있어서 시장은 낙관적인 편이에요.",
        increaseIf: [
          "애저 성장률이 재가속하는 신호가 나오거나(최근 분기 대비 YoY 성장률 상승)",
          "눌림목 점수가 2점 이상으로 올라오거나(추가 조정)",
          "영업이익 성장률이 매출 성장률을 다시 앞서기 시작할 때(레버리지 재개)",
        ],
        wrongIf: [
          "애저 성장률이 계속 둔화되거나 감원이 수요 둔화의 결과였다는 정황이 나올 때",
          "엑스박스 등 비핵심 사업 구조조정 비용이 예상보다 커져 영업이익률이 눈에 띄게 낮아질 때",
        ],
        watchNext: [
          "다음 분기 애저 매출 성장률(YoY)",
          "AI 관련 자본지출(CAPEX) 가이던스 변화",
          "엑스박스 스튜디오 분사 이후 콘텐츠 사업 실적 반영 여부",
        ],
        confidence: "재무 수치(매출·영업이익 성장률)는 SEC 공시 기반 캐시 데이터로 신뢰도 높음 · 감원·주가 하락 사실관계는 복수매체 확인 · '애저 재가속 여부를 지켜봐야 한다'는 판단은 Claude의 정성적 해석이며 확률이 아님",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (FY2026 4분기)",
        headline: "매출 900억 달러(전년비 +18%)로 컨센서스 874.4억 달러를 2.9% 상회했고, GAAP EPS $4.81은 컨센서스 $4.21 대비 14.3%나 웃돌았어요 (7/29 발표 후 시간외 주가 +7~8%).",
        oneTime: "GAAP EPS $4.81 vs 비GAAP(조정) EPS $4.74로 차이가 꽤 커요 — 앤스로픽 투자 지분평가익 32억 달러, 예상보다 적었던 자발적 퇴직 프로그램(VRP) 비용이 플러스 요인이었고, 반대로 정리해고 관련 비용과 Xbox 상각(impairment)이 마이너스로 상쇄해서 순 디스크리트 항목이 EPS를 $0.27 끌어올렸다고 회사가 직접 밝혔어요. 즉 이번 분기 GAAP 서프라이즈의 상당 부분은 일회성이라 액면 그대로 보면 안 돼요.",
        coreRead: "일회성 빼고 봐도 본업은 탄탄해요. Azure가 전년비 43% 성장(직전 분기 40%에서 가속)하면서 연환산 매출이 처음으로 1000억 달러를 돌파했고(FY26 전체로는 +41%), Intelligent Cloud 부문 매출 393억 달러(+32%)로 컨센서스 381.6억 달러를 상회했어요. Copilot은 유료 시트가 한 분기 만에 2000만→3000만 개로 뛰어서 역대 최대 분기 순증을 기록했고요(단, 시트당 매출·활성사용률은 아직 공개 안 함 — 대형 기업 딜에 할인이 꼈다는 얘기도 있어요). 반면 More Personal Computing은 129억 달러(-4%)로 Windows OEM·Xbox가 부진했고 Xbox는 매출 -10%(약 49.8억 달러)에 상각까지 겹쳤어요. 다만 설비투자(Capex)가 이번 분기만 410억 달러로 계속 불어나고 있어서, 클라우드 성장의 질은 좋아도 잉여현금흐름 압박은 여전히 관전 포인트예요.",
        forecast: "다음 분기(2026-09-30 마감, FY2027 1분기)는 회사 가이던스 기준 매출 898.5~909.5억 달러(+16~17%), Azure 성장률 약 45% 근방(가이던스 상단 포함하면 43~46% 밴드)으로 예상해요. Copilot 유료 시트는 순증 속도가 계속 붙어서 3500만~4000만 개 구간 진입 가능성이 있다고 봐요. 다만 Capex가 500억 달러를 넘을 것으로 가이던스가 나와서(리스 재분류 영향 포함), 매출 서프라이즈가 나와도 잉여현금흐름/마진 우려로 주가는 실적 발표 직후 변동성이 클 걸로 예상해요 — 이 capex 숫자와 시장 반응이 맞았는지가 다음 검증 포인트예요.",
        confidence: "매출 900억 달러, GAAP 순이익 358억 달러(+31%)·EPS $4.81, 비GAAP EPS $4.74, 부문별 매출(Productivity & Business Processes 378억 달러 +14%, Intelligent Cloud 393억 달러 +32%, More Personal Computing 129억 달러 -4%), Azure +43%, Copilot 유료 시트 3000만 개, $0.27 디스크리트 항목 효과, Capex 410억 달러, 다음 분기 가이던스(매출 898.5~909.5억 달러·Azure ~45%·Capex 500억 달러 초과)는 마이크로소프트 공식 실적발표 자료 기준 확정 사실이에요. 컨센서스 대비 서프라이즈 폭(매출 +2.9%, EPS +14.3%, 애널리스트 예상치 수치)은 언론 보도(Shacknews) 인용치라 출처사마다 약간 다를 수 있고, '다음 분기 예측' 부분은 전적으로 제 해석이라 틀릴 수 있어요.",
        sources: [
          {
            title: "Microsoft (MSFT) Q4 FY26 earnings results beat revenue and EPS expectations",
            url: "https://www.shacknews.com/article/150182/microsoft-msft-q4-fy26-earnings-results",
          },
          {
            title: "FY26 Q4 - Press Releases - Investor Relations - Microsoft",
            url: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q4/press-release-webcast",
          },
          {
            title: "[MSFT Q4 2026 Earnings Call] Azure Accelerates to 43%, Guides 45% Next Quarter; Copilot Paid Seats Double to Over 30 Million — BigGo Finance",
            url: "https://finance.biggo.com/news/US_MSFT_2026-07-29",
          },
          {
            title: "Azure Tops $100B, Copilot Paid Seats Jump to 30M in Microsoft Blowout Quarter",
            url: "https://www.techtimes.com/articles/322143/20260729/azure-tops-100b-copilot-paid-seats-jump-30m-microsoft-blowout-quarter.htm",
          },
          {
            title: "XBOX + Microsoft FY26 Q4 Results: Total -10% ($4.983B), Content and Services -10%, Hardware -13%",
            url: "https://www.installbaseforum.com/forums/threads/xbox-microsoft-fy26-q4-results-total-10-4-983b-content-and-services-10-hardware-13.4724/",
          },
          {
            title: "Microsoft (MSFT) Q4 2026 Preview: EPS Est. $4.24, Reports July 29 - Alphastreet",
            url: "https://news.alphastreet.com/microsoft-msft-q4-2026-preview-eps-est-4-24-reports-july-29/",
          },
        ],
      },
    ],
    role: {
      tags: ["기업용 클라우드(Azure)", "오피스365·M365 구독", "AI(Copilot)", "게임(엑스박스)"],
      stars: 4,
      note: "클라우드·생산성·PC 세 사업이 균형 잡혀 있고 Azure가 하이퍼스케일러 3강 중 하나예요. Copilot 사업이 연환산 매출 $370억(전년비 +123%)까지 빠르게 크고 있지만, 클라우드 자체는 AWS·GCP와 직접 경쟁하는 시장이라 독점적 지위는 아니에요.",
    },
  },
  AMZN: {
    updated: "2026-09-04",
    customers: [
      "전세계 소비자(온라인 리테일) - 매출 비중 약 74%로 여전히 핵심",
      "기업 고객(AWS 클라우드) - 매출 비중 약 17%, AI 워크로드 수요로 연 $1,470억까지 성장(+28%)",
      "광고주(아마존 광고) - 매출 비중 약 9%, 2분기 $198억(+26%)로 2026년 연 $800억 돌파 전망",
    ],
    strengths: [
      "AWS AI 매출 연환산 $250억 돌파, 세자릿수(100%대) 성장률 지속 - 클라우드 내 AI 비중이 빠르게 확대",
      "광고 사업이 고마진 사업으로 빠르게 성장하며 전체 수익성 개선에 기여",
      "북미 리테일이 AI 기반 재고관리·추천 시스템으로 매출 $3,850억까지 확대, 국제 부문도 $1,420억로 회복세",
    ],
    risks: [
      "⚠️ 2026년 10월 FTC 독점 재판이 예정돼 있음 - 패소 시 3자 판매자(마켓플레이스) 생태계 강제 분리 등 사업구조 재편 리스크",
      "EU 디지털시장법(DMA)으로 이미 Buy Box 노출 방식·데이터 공유 방식이 강제 변경됨(2026-03) - 미준수 시 대규모 벌금 위험 지속",
      "2026년 설비투자 $2,000억(AI 데이터센터 + 위성인터넷 '프로젝트 리오') - 이 정도 규모의 투자는 2027~2028년까지 ROI가 안 나올 경우 마진 압박으로 이어질 수 있음(같은 맥락의 감원 소식은 위 newsLog 참고)",
      "⚠️ 2026-08-31 FTC·22개 주가 스폰서 광고 경매가 조작(비공개 서차지) 혐의로 별도 소송 제기(광고주 약 $200억 과다청구 주장) - 10월 마켓플레이스 독점 재판과는 별개 사건이며, 자세한 내용은 아래 newsLog 참고",
    ],
    sources: [
      {title:"How Should Amazon Be Regulated? (GovFacts)", url:"https://govfacts.org/tech-innovation/tech-competition/platform-regulation/debating-how-to-regulate-amazon-antitrust-labor-practices-and-privacy/"},
      {title:"Amazon Risk Management: Six Threats That Could Derail Your Business in 2026 (Canopy Management)", url:"https://canopymanagement.com/navigating-amazons-invisible-challenges-a-strategic-analysis/"},
      {title:"Amazon Statistics 2026: $574B Revenue, AWS Breakdown & Market Dominance (BusinessStats)", url:"https://businesstats.com/amazon-statistics-facts/"},
    ],
    newsLog: [
      {
        date: "2026-08-13",
        headline: "2025년 10월 이후 누적 3만명 감원(사상 최대 규모) - '관료주의 제거' 명목, 동시에 설비투자는 $132B→$200B로 확대",
        coreAnalysis: "아마존이 2025년 10월(약 14,000명)과 2026년 1월(약 16,000명) 두 차례에 걸쳐 총 3만명의 법인 인력을 감원함 - 회사 역사상 최대 규모의 인력 감축. 감원은 AWS 전문서비스·Alexa AI·Prime Video/스튜디오·아마존 약국 등 여러 부문에 걸쳐 있음. 회사는 '계층을 줄이고 오너십을 늘리고 관료주의를 없앤다'고 설명함. 동시에 설비투자(CAPEX)는 2025년 $131.8B에서 2026년 $200B로 확대할 계획 - 감원이 사업 축소가 아니라 AI·클라우드 인프라로의 자원 재배치임을 시사함.",
        whyItMatters: "마이크로소프트·오라클·메타와 같은 업계 전반의 패턴(감원으로 비용을 줄이면서 AI 인프라 투자는 오히려 늘림)이라 아마존만의 특이 신호는 아님. 다만 아마존은 감원 규모가 회사 사상 최대라는 점이 특징적이고, AWS 자체는 축소가 아니라 확장 중이라는 점(전문서비스직 등 특정 직군만 감원, 인프라 자체는 확대)을 구분해서 봐야 함 - '아마존이 어려워서'가 아니라 '인력을 자동화·AI로 대체하며 재배치하는 중'이라는 해석이 더 정확함.",
        beginnerSummary: "아마존이 작년 10월부터 지금까지 회사 역사상 가장 큰 규모(3만명)로 직원을 줄였어요. 그런데 동시에 AI·클라우드 데이터센터에 쓰는 돈은 오히려 더 늘리고 있어요($1,318억→$2,000억). 회사가 어려워서 줄이는 게 아니라, 사람이 하던 일 일부를 AI·자동화로 대체하면서 그 돈을 AI 인프라 쪽으로 옮기고 있다고 이해하면 돼요.",
        confidence: "감원 규모·시점은 회사 발표·복수 언론 보도 기준(신뢰도 높음) · 설비투자 확대 배경 해석은 Claude의 판단(신뢰도 중간)",
        sources: [
          {title:"Amazon confirms 16,000 more corporate job cuts, bringing total to 30,000 since October (GeekWire)", url:"https://www.geekwire.com/2026/amazon-confirms-16000-more-job-cuts-bringing-total-layoffs-to-30000-since-october/"},
          {title:"Amazon layoffs: 16,000 jobs to be cut in latest anti-bureaucracy push (CNBC)", url:"https://www.cnbc.com/2026/01/28/amazon-layoffs-anti-bureaucracy-ai.html"},
          {title:"Amazon Is Laying Off 16,000 Workers, in Latest Round of Cuts (Yahoo Finance)", url:"https://finance.yahoo.com/news/amazon-laying-off-16-000-173735652.html"},
        ],
      },
      {
        date: "2026-08-31",
        headline: "FTC·22개 주, 아마존 스폰서 광고 경매가 조작(비공개 서차지) 혐의로 소송 - 광고주 약 $200억 과다청구 주장",
        importance: "high",
        tone: "risk",
        horizon: "중장기(연방법원 소송 진행 상황에 따라 수개월~수년 소요 예상)",
        facts: [
          "FTC와 22개 주(알래스카·애리조나·캘리포니아·콜로라도·플로리다 등) 검찰총장이 2026-08-31 워싱턴주 서부지방법원에 아마존을 상대로 소송을 제기함 - 스폰서 상품 광고(Sponsored Products) 경매 가격 산정 방식이 광고주에게 알린 것과 다르게 운영됐다는 혐의.",
          "아마존은 광고주들에게 '2등가 경매(second-price auction)'라서 낙찰자가 2등 입찰가보다 1센트만 더 내면 된다고 안내했지만, FTC는 2024년 기준 약 80%의 경우 아마존이 광고주의 '낙찰 입찰가 그대로'를 청구해 사실상 1등가 경매로 운영됐다고 주장함.",
          "구체적으로는 2019년 도입된 비공개 '소프트 준비가(soft reserve price)' 서차지, 실제로는 존재하지 않는 '가상 경쟁 입찰자'·'2등가 대리 입찰' 등을 통해 사실상 셔츠 입찰(shill bid) 역할을 했고, 프라임데이·블랙프라이데이 같은 대목에 서차지를 더 올렸다는 혐의도 포함됨.",
          "FTC는 이 방식으로 아마존이 100만 곳 이상의 광고주로부터 총 '수백억 달러' 규모(약 $200억으로 보도됨)를 추가로 받아갔다고 주장함. 소장 자체에는 소비자 피해 관련 근거가 거의 제시되지 않음(아마존 측도 이 점을 반박 근거로 지적).",
          "아마존은 공식 입장문에서 이 소송이 '광고주가 실제로 어떻게 운영하는지를 오해한' 소송이라며 반박함 - 소장에 소비자·광고주 피해 증거가 없다는 점, 2019년부터 머신러닝 기반 경매로 전환하며 입찰가보다 '관련성'을 우선하는 방향으로 바꿨다는 점, 그 결과 2019~2025년 평균 낙찰 입찰가가 50% 낮아졌고 실제 낙찰 광고의 약 92%가 최고 입찰가가 아니었다는 통계, 2021~2025년 광고주가 총 $80억 이상을 절감했다는 자체 추산을 근거로 제시함. 다만 낡은 교육자료 일부에 부정확한 설명이 있었다는 점은 인정함(조회수 928회에 불과한 영상 등이라 영향은 제한적이라고 주장).",
          "소식이 전해진 2026-08-31(현지시간) 장중부터 주가가 하락하기 시작해 다음날(9/1) 프리마켓까지 이틀 연속 하락(8/31 -2.5%, 9/1 프리마켓 추가 -0.8% 등, 매체별 수치 다소 상이)했음. Citi는 '매수(Buy)' 의견과 목표주가 $350(당시 종가 대비 +37% 이상 여력)을 유지하며 이번 하락을 단기 조정·매수 기회로 평가했고, 근거로 광고 사업 펀더멘털과 AWS의 AI 수요 가속을 제시함.",
        ],
        why: [
          "아마존 광고 사업은 매출 비중은 약 9%로 작지만 고마진 사업이라 전체 수익성 개선에 기여하는 핵심 성장동력 중 하나예요 - 이 사업의 가격구조 신뢰성에 대한 소송이라 장기적으로는 가볍게 볼 사안이 아니에요.",
          "이번 소송은 위 risks 항목의 '2026년 10월 FTC 독점 재판'(마켓플레이스 강제 분리 이슈)과는 별개 사건이에요 - 아마존은 지금 광고 부문(이번 건)과 마켓플레이스 부문(기존 독점소송) 두 갈래로 FTC의 규제 압박을 동시에 받고 있는 상태라는 점을 구분해서 봐야 해요.",
          "초기 주가 반응(-2~3%대)은 크지 않았고, 애널리스트(Citi)는 오히려 매수 기회로 보고 있어요 - 시장은 아직 이 소송을 '사업구조를 즉시 흔들 리스크'라기보다는 '장기 소송 리스크(벌금·화해금 가능성)' 정도로 소화하는 분위기예요.",
        ],
        beginner: [
          "아마존이 광고주들에게 '2등 입찰가보다 살짝만 더 내면 된다'고 안내해놓고, 실제로는 최고 입찰가를 거의 다 청구했다는 게 이번 소송의 핵심이에요 - 쉽게 말하면 '경매 규칙을 다르게 설명해놓고 실제로는 다르게 운영했다'는 혐의예요.",
          "미국 FTC(연방거래위원회)와 22개 주가 함께 소송을 걸었고, 아마존은 '오해에서 비롯된 소송'이라며 강하게 반박하고 있어요. 아직 법원 판단이 나온 게 아니라 소송이 막 시작된 단계예요.",
          "주가는 소식 이후 며칠간 조금씩 하락했지만 급락 수준은 아니었고, 일부 애널리스트는 오히려 '이 정도 하락이면 싸게 살 기회'라고 보고 있어요.",
        ],
        interpretation: "이번 FTC·22개 주 소송은 아마존의 핵심 고마진 사업(광고)의 운영 방식 자체를 정조준한 사안이라 가볍게 볼 수는 없지만, (1) 이제 막 소장이 제출된 초기 단계이고, (2) 아마존이 구체적인 반박 데이터(광고주 절감액 $80억, 낙찰 입찰가 50% 하락 등)로 맞서고 있으며, (3) 소장 자체에 소비자 피해 근거가 부족하다는 지적이 있고, (4) 초기 주가 반응도 -2~3%대로 제한적이었다는 점을 종합하면, 지금 시점에서는 '펀더멘털을 즉시 훼손하는 사건'이라기보다는 '수년에 걸쳐 지켜봐야 할 장기 법적 리스크' 성격에 가까워요. 다만 이미 예정된 2026년 10월 마켓플레이스 독점 재판과 겹치면서 '규제 리스크가 누적되는 국면'이라는 점은 계속 기록해둘 필요가 있어요.",
        decision: "이번 소송 하나만으로 매도·매수 판단을 바꿀 근거는 부족하다고 봐요 - 10월 마켓플레이스 독점 재판 결과와 함께 '규제 리스크 누적' 항목으로 계속 추적할 것.",
        watch: [
          "법원의 기각(dismiss) 신청 인용 여부 및 본안 소송 일정",
          "화해(settlement) 협상 여부와 규모(있을 경우)",
          "2026년 10월 예정된 별도의 FTC 마켓플레이스 독점 재판 진행 상황과의 연계 여부",
          "광고 부문 매출 성장률 둔화 여부(다음 분기 실적에서 광고주 이탈 조짐이 나타나는지)",
        ],
        confidence: "소송 제기 사실·혐의 내용·플레인티프(FTC+22개 주) 목록은 FTC 공식 보도자료 기준으로 신뢰도 높음. 아마존 측 반박 수치(광고주 절감액 $80억 등)는 아마존 공식 입장문 기준(회사측 주장이라 제3자 검증은 안 됨). 주가 반응·애널리스트(Citi) 코멘트는 Yahoo Finance 보도 기준.",
        sources: [
          {title:"FTC, States Sue Amazon Over Secret Ad Surcharge Scheme (FTC 공식 보도자료)", url:"https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-states-sue-amazon-over-secret-ad-surcharge-scheme"},
          {title:"Amazon's response to the FTC's lawsuit regarding Sponsored Ads (Amazon 공식 입장문)", url:"https://www.aboutamazon.com/company-news/amazon-ftc-sponsored-ads-lawsuit-response"},
          {title:"FTC accuses Amazon of running a 'secret ad surcharge scheme' in new lawsuit (TechCrunch)", url:"https://techcrunch.com/2026/08/31/ftc-accuses-amazon-of-running-a-secret-ad-surcharge-scheme-in-new-lawsuit/"},
          {title:"AMZN Stock Slips On $20B FTC Ad Lawsuit: Citi Calls Pullback A Buying Opportunity (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/amzn-stock-slips-20b-ftc-115127923.html"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "관망 - 실적은 매출·이익 동반 개선이지만 사상 최대 감원과 CAPEX 확대가 동시에 벌어지는 중",
        view: "AMZN은 눌림목 점수 0/5점(52주 고점대비 -7.5%, 200일선 위)으로 지금은 저가 매수 구간이 아니에요. PER(21.2배)이 3년 평균(40.8배)보다 훨씬 낮게 나오는데, 이건 과거 이익이 크게 눌렸던 시기(3년 평균에 낮은 이익 시기가 섞여 PER이 왜곡)의 영향이 커서 '싸다'는 해석은 조심스러워요. 재무는 Q2'26 매출 +19.6%·영업이익률 +2.3%p로 매출·이익 동반 개선이고, OCF/순이익이 1.80배로 현금창출력도 순이익보다 좋아요 - 실적 자체는 이 프로젝트가 추적하는 지표들 중 가장 깔끔한 축에 속해요. 다만 뉴스 쪽은 결이 달라요 - 2025년 10월 이후 누적 3만명 감원(사상 최대 규모)과 동시에 CAPEX를 $132B에서 $200B로 크게 늘리고 있는데, 이건 인건비를 줄이면서 AI 인프라에 베팅을 키우는 구조로, 오라클·마이크로소프트 등 다른 빅테크에서도 반복되는 패턴이에요(같은 시기 감원+CAPEX확대 조합). 컨센서스는 내년 매출 +14%인데 EPS -15%로 보고 있어서, 시장은 이 투자 확대가 당분간 이익률을 누를 것으로 보는 듯해요.",
        increaseIf: [
          "영업이익 성장률이 계속 매출 성장률을 앞서며(레버리지 개선) 감원·CAPEX 확대가 실제 마진 개선으로 이어지는 게 확인될 때",
          "AWS 성장률이 눈에 띄게 재가속할 때",
          "눌림목 점수가 2점 이상으로 올라올 때",
        ],
        wrongIf: [
          "감원 규모에 비해 실제 비용 절감 효과가 재무제표에 안 나타날 때(다음 분기 영업이익률이 오히려 눌릴 때)",
          "CAPEX 확대가 지속되는데 AWS·광고 등 고마진 사업 성장이 못 따라올 때",
        ],
        watchNext: [
          "다음 분기 AWS 매출 성장률",
          "CAPEX 가이던스가 $200B에서 더 늘어나는지",
          "감원에 따른 일회성 구조조정 비용 규모",
        ],
        confidence: "매출·영업이익·OCF 수치는 SEC 공시 기반 캐시 데이터 · 감원 규모·CAPEX 가이던스는 복수매체 보도 기준(newsLog 참고) · '투자 확대가 이익률에 미칠 영향'에 대한 판단은 Claude의 정성적 해석",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기)",
        headline: "2분기 매출 $200.6B(+20% YoY)로 사상 처음 $200B 돌파하며 시장 예상치를 상회했고, 영업이익 $27.5B(+43% YoY), GAAP 희석EPS $5.75로 컨센서스(약 $1.7~1.8 추정)를 거의 3배 웃돌았어요.",
        oneTime: "GAAP 순이익 $62.6B(전년 $18.2B 대비 +245%) 중 상당 부분은 영업외 비영업이익 $53.4B(주로 앤트로픽 지분 재평가 이익)에서 나온 거예요. 이게 없으면 순이익 증가율은 영업이익 증가율(+43%)에 훨씬 가까웠을 거고요. 로컬 데이터에서 올해 컨센서스 EPS($12.49)가 내년($10.48)보다 높게 잡힌 이유도 바로 이 2분기 일회성 지분평가익(주당 약 $5 이상 기여 추정) 때문일 가능성이 커요 — 내년엔 이 정도 규모의 재평가 이익이 반복될 근거가 없거든요.",
        coreRead: "핵심 사업은 진짜 좋아요. AWS 매출 $42.2B(+37% YoY, 18분기 만에 최고 성장률)에 영업이익률 39.4%, 전사 영업이익의 60.5%를 AWS 혼자 만들어내고 있어요(매출 비중은 21.1%뿐인데도). 광고 매출도 $19.8B(+26%)로 고마진 성장 지속, 북미 매출 +16%($116.2B, 영업이익 $9.1B), 인터내셔널은 +15%($42.2B)에 영업이익 $1.7B(마진 4.1%)로 흑자 기조 굳혔어요. 다만 2026년 capex를 $220B로 상향(메모리 가격 상승 영향 포함)했고 TTM capex가 $173B(+$66.1B YoY)까지 늘어서, AI 인프라 투자 사이클이 당분간 감가상각 부담으로 이어질 걸로 보여요.",
        forecast: "3분기(2026-09-30 마감) 가이던스는 매출 $197~202B(+9~12% YoY), 영업이익 $22.5~26.5B로 2분기보다 낮게 잡혔어요. 앤트로픽 같은 대형 비영업 재평가 이익이 3분기에 다시 나올 근거는 없으니, GAAP EPS는 2분기 $5.75보다 크게 낮아지고(대략 $1대 초중반 예상) 대신 영업이익 기준 성장(전년比 두 자릿수%)은 이어질 거라고 봐요. AWS 성장률은 33~37% 밴드를 유지할 걸로 예상하고요.",
        confidence: "매출/영업이익/순이익/EPS 수치와 세그먼트 실적, $53.4B 비영업이익 규모, 3분기 가이던스는 Amazon 공식 2분기 실적발표 및 SEC 제출자료 기준 확정 사실이에요. 다만 '내년 EPS가 낮은 이유가 이 일회성 이익 때문'이라는 연결과 3분기 GAAP EPS 구체 수치 예측은 제 해석이고, 실제 컨센서스 산정 근거를 직접 확인한 건 아니라서 다를 수 있어요.",
        sources: [
          {
            title: "Amazon Q2 2026 earnings report: Read the release",
            url: "https://www.aboutamazon.com/news/company-news/amazon-earnings-q2-2026-report",
          },
          {
            title: "AMAZON.COM ANNOUNCES SECOND QUARTER RESULTS",
            url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm",
          },
          {
            title: "Amazon Q2 2026 Earnings: AWS Accelerates 37% as a $53B Anthropic Gain Rewrites Profit | Beancount.io",
            url: "https://beancount.io/blog/2026/07/31/amazon-fy2026-q2-earnings-analysis",
          },
          {
            title: "Amazon's $53.4B Anthropic Gain Distorts Big Tech Q2 Earnings | AI Weekly",
            url: "https://aiweekly.co/alerts/amazons-534b-anthropic-gain-distorts-big-tech-q2-earnings",
          },
          {
            title: "Amazon hikes 2026 capex to $220 billion due to higher memory costs",
            url: "https://www.cnbc.com/2026/07/30/amazon-amzn-q2-earnings-report-2026.html",
          },
          {
            title: "Amazon Q2 2026: EPS Triples Estimates at $5.75, Revenue Tops $200B First Time - GamesReviews.com",
            url: "https://gamesreviews.com/news/07/amazon-q2-2026-eps-triples-estimates-at-5-75-revenue-tops-200b-first-time/",
          },
        ],
      },
    ],
    role: {
      tags: ["온라인 리테일(전자상거래)", "AWS 클라우드", "광고(아마존 애즈)"],
      stars: 4,
      note: "전자상거래 최대 사업자면서 클라우드(AWS, 매출 비중 17%·AI 매출만 연환산 $250억 돌파)까지 장악한 독특한 조합이에요. 광고 사업도 2분기 +26%로 고마진 성장 중이지만, 리테일·클라우드 둘 다 경쟁자(MSFT·구글 등)가 있는 시장이라 완전한 독점은 아니에요.",
    },
  },
  AAPL: {
    updated: "2026-08-20",
    customers: [
      "전세계 소비자 - 활성기기 25억대 설치기반(아이폰이 매출의 절반 이상), 아이폰 고객 재구매율 89%로 업계 최고 수준(삼성 약 77%)",
      "서비스 구독자 - 앱스토어·아이클라우드·애플페이 등, 서비스가 매출 비중 2위(약 28%)로 확대 중",
    ],
    strengths: [
      "아이폰 매출이 여전히 사상 최대 경신 중(2026 회계연도 1분기 $852.7억, +23% YoY) - 매출 절반 이상을 차지하는 핵심 사업이 꺾이지 않음",
      "서비스 매출도 사상 최대(1분기 $300억, +14%) - 하드웨어 판매주기가 길어져도 서비스로 수익을 보완하는 구조",
      "25억대라는 압도적 설치기반과 89% 재구매율 - 한 번 아이폰을 쓰면 계속 애플 생태계에 머무는 '락인' 효과가 강함",
    ],
    risks: [
      "⚠️ AI 경쟁에서 1~2년 뒤처졌다는 평가(Needham 등) - 대대적으로 개편된 시리(Siri) 2.0이 2026년으로 미뤄졌고, 경쟁사(오픈AI 등) 수준에 못 미치면 '혁신 기업' 이미지에 타격 가능",
      "중국 매출 비중 18%($205억, 2026 2분기)인데 미중 무역긴장·관세 위협 + 중국 내 자국 브랜드 점유율 확대로 압박 지속. 대만해협 긴장 고조 시엔 생산기지 자체가 리스크",
      "DOJ 반독점 소송이 최대 위협 - 아이메시지·NFC칩 개방이 강제되면 '울타리 정원' 전략(프리미엄 가격의 기반)이 흔들릴 수 있음. EU에서 이미 DMA 위반으로 벌금 부과됨",
      "팀 쿡→존 터너스 CEO 교체가 2026-09-01 예정(상세 내용은 아래 newsLog 참고) - 리더십 전환 시기와 위 리스크들이 겹침",
    ],
    sources: [
      {title:"Apple Stock Analysis: Challenges to Growth and Value Transition (IndexBox)", url:"https://www.indexbox.io/blog/apple-stock-growth-challenges-iphone-saturation-china-competition-and-regulatory-risks/"},
      {title:"Apple's Services Business Was a Major Catalyst Last Year, and 2026 Will Likely Be Even Better (Yahoo Finance)", url:"https://finance.yahoo.com/news/apples-services-business-major-catalyst-182600661.html"},
    ],
    newsLog: [
      {
        date: "2026-09-01",
        headline: "팀 쿡 퇴임·존 터너스 신임 CEO 공식 취임 - 2011년 이후 15년 만의 경영권 승계, AI 전략 시대 신리더십",
        facts: ["팀 쿡이 CEO 자리를 물러나고 존 터너스(John Ternus)가 새 CEO로 공식 취임(2026-09-01)", "팀 쿡은 회장(Executive Chairman)으로 신분 전환", "존 터너스는 그동안 운영 부사장(Senior Vice President of Hardware Engineering)으로 하드웨어·공급망 총괄을 해온 인사", "스티브 잡스 이후 팀 쿡 체제(2011~2026)가 15년간 지속되다 오늘 공식적으로 전환", "존 터너스의 첫 대외 행사는 9월 9일 새 아이폰 런칭 이벤트(아이폰 18, 폴더블, Watch Series 12 등 다수 신제품 발표 예정)"],
        why: ["경", "영", "진", " ", "교", "체", " ", "자", "체", "는", " ", "일", "반", "적", "인", " ", "사", "건", "이", "지", "만", ",", " ", "애", "플", " ", "같", "은", " ", "'", "세", "계", " ", "시", "가", "총", "액", " ", "최", "상", "단", "'", " ", "기", "업", "에", "서", " ", "1", "5", "년", " ", "체", "제", "가", " ", "바", "뀌", "는", " ", "것", "은", " ", "투", "자", "자", " ", "심", "리", "에", " ", "영", "향", "을", " ", "준", "다", ".", " ", "특", "히", " ", "팀", " ", "쿡", " ", "재", "임", " ", "시", "절", " ", "애", "플", "은", " ", "A", "I", " ", "전", "략", "에", "서", " ", "경", "쟁", "사", " ", "대", "비", " ", "뒤", "처", "진", "다", "는", " ", "평", "가", "를", " ", "받", "아", "왔", "는", "데", ",", " ", "신", "임", " ", "C", "E", "O", "의", " ", "A", "I", " ", "우", "선", "순", "위", " ", "변", "화", " ", "여", "부", "가", " ", "시", "장", "의", " ", "관", "전", " ", "포", "인", "트", "가", " ", "될", " ", "것", " ", "같", "다", ".", " ", "또", "한", " ", "최", "근", " ", "수", "개", "월", "간", " ", "애", "플", "의", " ", "주", "요", " ", "임", "원", "진", "이", " ", "대", "거", " ", "교", "체", "되", "는", " ", "와", "중", "(", "케", "이", "트", " ", "아", "담", "스", " ", "법", "무", "총", "괄", "·", "리", "사", " ", "잭", "슨", " ", "환", "경", "총", "괄", " ", "퇴", "사", " ", "등", ")", "에", " ", "일", "어", "나", "는", " ", "사", "건", "이", "라", ",", " ", "리", "더", "십", " ", "전", "환", "의", " ", "연", "속", "성", "과", " ", "실", "행", " ", "능", "력", "이", " ", "검", "증", " ", "대", "상", "이", " ", "될", " ", "예", "정", "이", "다", "."],
        beginner: ["애", "플", "의", " ", "최", "고", " ", "경", "영", "자", "(", "C", "E", "O", ")", "가", " ", "바", "뀌", "었", "어", "요", ".", " ", "팀", " ", "쿡", " ", "회", "장", "이", " ", "1", "5", "년", "간", " ", "이", "끈", " ", "애", "플", "을", " ", "이", "제", " ", "존", " ", "터", "너", "스", "라", "는", " ", "새", "로", "운", " ", "경", "영", "자", "가", " ", "맡", "는", " ", "거", "예", "요", ".", " ", "팀", " ", "쿡", "은", " ", "이", "제", " ", "회", "장", " ", "역", "할", "을", " ", "하", "고", " ", "있", "고", "요", ".", " ", "새", "로", "운", " ", "C", "E", "O", "의", " ", "첫", " ", "일", "은", " ", "9", "월", " ", "9", "일", "에", " ", "새", "로", "운", " ", "아", "이", "폰", "과", " ", "시", "계", "를", " ", "공", "개", "하", "는", " ", "거", "고", ",", " ", "투", "자", "자", "들", "은", " ", "'", "이", " ", "새", "로", "운", " ", "리", "더", "가", " ", "애", "플", "을", " ", "어", "떻", "게", " ", "이", "끌", "어", "나", "갈", "까", "'", "를", " ", "지", "켜", "보", "고", " ", "있", "어", "요", "."],
        watch: ["존 터너스 신임 CEO의 첫 공개 발언·전략 방향 (9월 9일 이벤트에서 기존과 달라진 메시지 여부)", "AI 관련 신제품(Siri AI 등) 발표 시 신임 CEO의 강조 포인트 - 팀 쿡 체제와의 우선순위 변화 신호 확인", "3~6개월 후 분기별 실적 발표에서 신임 CEO의 가이던스·톤(tone) 변화 여부", "이번 경영권 승계로 인한 임원 추가 이동 또는 조직 개편 공시 유무"],
        interpretation: "오래 준비된 후계자 승계로 보이므로 '리더십 공백'은 우려 대상이 아니다. 다만 팀 쿡 체제에서 상대적으로 낮았던 AI 전략의 우선순위가 바뀔 가능성과, 신임 CEO가 하드웨어 출신(공급망·엔지니어링 경험)이라는 점이 제품 개발·공급망 관리에 어떤 영향을 미칠지가 관건이다. 또한 애플의 경우 최근 내부 리더십이 짧은 기간에 대거 교체되는 와중이므로, 조직의 안정성과 전략 연속성을 투자자들이 주의깊게 볼 것 같다.",
        decision: "이 뉴스 하나만으로 투자 판단을 바꾸지 말 것. 신임 CEO의 첫 행사(9월 9일 아이폰 이벤트)와 그 이후 분기별 실적에서 실제 경영 방향과 실행력이 검증될 때까지 관망 자세 유지.",
        confidence: "경영권 승계 사실(새 CEO 이름, 임명 날짜, 팀 쿡의 회장 전환)은 애플 공식 발표·CNBC·Yahoo Finance 등 주요 매체에서 동일하게 보도돼 신뢰도 높음. 다만 '신임 CEO의 AI 전략 변화' 같은 해석은 아직 추측 수준이며 향후 행동으로 검증 필요.",
        sources: [
          { title: "Apple sets iPhone launch event for Sept. 9, first under new CEO", url: "https://www.cnbc.com/2026/08/26/apple-iphone-launch-date-john-ternus.html" },
          { title: "Why Is Apple Stock Up Today?", url: "https://www.fool.com/investing/2026/09/01/why-is-apple-stock-up-today/" },
          { title: "Dear Apple Stock Fans, Mark Your Calendars for September 9", url: "https://finance.yahoo.com/markets/stocks/articles/dear-apple-stock-fans-mark-133002349.html" },
          { title: "'Surprise and shine': Apple to hold first major iPhone launch under new CEO", url: "https://www.cnn.com/2026/08/26/tech/apple-iphone-launch-john-ternus" },
        ],
      },
      {
        date: "2026-09-09",
        headline: "[예정] 애플 아이폰 18 Pro 론칭 행사(9/9 10AM PT) - 신임 CEO 존 터너스 첫 제품 사이클 + 폴더블 iPhone 첫 공개",
        facts: ["애플이 2026년 9월 9일(화요일) 미국 태평양 시간 10AM에 캘리포니아 쿠퍼티노 Apple Park에서 iPhone 신제품 행사 개최 예정(발표 후 YouTube 생중계 예정)", "행사 슬로건은 'Surprise and Shine' - 역대 애플 행사 레이아웃 기준 혁신 제품 강조 의지", "예상 출시 제품: iPhone 18 Pro, iPhone 18 Pro Max(신규), 애플 최초 폴더블 아이폰(신규), Apple Watch Series 12(세라믹 케이스 옵션), Apple Watch Ultra 4, AirPods 5", "주목점: 2011년 이후 처음 CEO가 바뀐 직후 존 터너스가 주최하는 첫 제품 론칭(앞서 팀 쿡은 9월 1일부로 Executive Chairman으로 물러남)", "스탠다드 iPhone 18·iPhone 18e·iPhone Air 2는 2027년 봄에 출시될 예정으로, 이번 행사는 프리미엄 라인 집중"],
        why: ["신임 CEO의 첫 제품 사이클은 새 리더십의 전략 방향(AI 강조·설계 철학 변화)을 시장에 신호하는 기회 - 애플이 AI 경쟁에서 '뒤처졌다'는 평가(Needham 등)를 받는 상황에서 iPhone 18의 AI 기능이 시장의 신뢰도에 영향", "폴더블 iPhone은 삼성·구글의 기술과 비교되는 지점으로 기술력·설계 철학을 보여주는 신호", "중국 매출 비중(18%, $205B 2026 2분기)이 큼에도 미중 갈등·관세 우려가 높아, 새 CEO 체제의 공급망 관리 능력이 테스트되는 시점", "최근 메모리 반도체 부족(D램·낸드)으로 애플이 MacBook Air 공급 부족을 겪고 있는데, 신제품 출시 시즌에 공급망 안정화가 과제"],
        beginner: ["9월 9일 애플이 새로운 아이폰 몇 개를 공식 발표해요. 지금까지는 팀 쿡이 이런 행사를 진행했는데, 이번부터는 새 CEO인 존 터누스가 진행해요.", "새로운 물건들 중에 특히 '폴더블(접히는) 아이폰'이 처음 나온대요 - 지금까지 삼성이나 구글만 접히는 휴대폰을 만들었는데, 애플도 이제 낸다는 뜻이에요.", "새 CEO는 하드웨어 엔지니어로 25년 일해온 사람이라서 '디자인·기술'을 중시할 가능성이 높아요. 애플이 AI 분야에서 경쟁사보다 뒤처진다는 평가를 받고 있어서, 이번 아이폰에 AI 기능이 얼마나 들어가느냐가 관전 포인트예요."],
        watch: ["iPhone 18 Pro 실제 스펙 - 특히 AI 기능(시리 2.0·온디바이스 처리 능력) 공개 수준", "폴더블 iPhone 기술·가격·출시 일정 - 삼성/구글 제품과의 가격·성능 비교", "신제품 사전예약(9/9~9/16) 수량·고객 평가 - 시장 수요 신호", "중국·인도 등 해외 시장 반응(특히 프리미엄 제품 수요 변화)", "신제품 로드맵에서 새 CEO(존 터누스)의 설계 철학 변화 신호 여부"],
        interpretation: "존 터누스는 '엔지니어 CEO'로 하드웨어 설계에 강점이 있으나, 현재 애플의 핵심 과제는 AI 경쟁력임. 폴더블 아이폰 같은 혁신은 긍정적 신호지만, 시리 2.0 같은 소프트웨어 AI 기능이 경쟁사 수준으로 구체화되지 않으면 '혁신 기업' 이미지 회복이 제한적일 수 있음. 신제품 발표보다는 '고객 실제 구매 의향'을 측정하는 9월 중후반 사전예약 데이터가 더 중요.",
        decision: "행사 자체는 이미 정해진 일정이므로, 중요한 건 실제 공개 제품의 기술 수준·가격·AI 기능 정도. 현재 AAPL은 눌림목 점수 1/5점(관망 구간)이므로, 행사 후 실제 수요 신호(사전예약 수량·중국 반응)를 기다린 후 진입 판단. 메모리 반도체 공급 부족 이슈도 함께 모니터링 필요.",
        confidence: "행사 일정(9/9 10AM PT), 예상 제품(iPhone 18 Pro/Max·폴더블·Watch Series 12·AirPods 5)은 복수 매체(MacRumors, Tom's Guide, Business Today 등) 교차 확인 - 신뢰도 높음. 신임 CEO(존 터누스) 첫 제품 사이클이라는 맥락은 AAPL newsLog 기존 항목에서 확인 가능(8/13 CEO 교체 예정 보도). 실제 제품 성능·기능·가격은 행사 당일까지 미정.",
        sources: [
          { title: "Apple event 2026 announced for September 9: iPhone 18 Pro series, iPhone Ultra and more to debut (Business Today)", url: "https://www.businesstoday.in/technology/news/story/apple-event-2026-announced-for-september-9-iphone-18-pro-series-iphone-ultra-and-more-to-debut-551631-2026-08-26" },
          { title: "Apple iPhone 18 event — all the new products expected to launch in September (Tom's Guide)", url: "https://www.tomsguide.com/phones/iphones/apple-iphone-18-event-all-the-new-products-expected-to-launch-in-september" },
          { title: "Apple's September 2026 event: Everything we know about the iPhone 18 Pro and iPhone Ultra launch event (Digital Trends)", url: "https://www.digitaltrends.com/phones/apples-september-2026-event-everything-we-know-about-the-iphone-18-pro-and-iphone-ultra-launch-event/" },
          { title: "Tim Cook to become Apple Executive Chairman, John Ternus to become Apple CEO (Apple Newsroom - 기존 공개)", url: "https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/" },
        ],
      },
      {
        date: "2026-08-13",
        headline: "팀 쿡 → 존 터너스 CEO 교체 9월 1일 시행 - 2011년 팀 쿡 취임 이후 첫 애플 CEO 교체",
        coreAnalysis: "애플이 2026년 4월 발표한 대로, 팀 쿡이 이사회 의장(Executive Chairman)으로 물러나고 존 터너스(하드웨어 엔지니어링 담당 수석부사장, 입사 25년차로 아이패드·에어팟·최근 아이폰 모델들의 하드웨어 개발을 총괄해온 인물)가 2026년 9월 1일부로 신임 CEO에 취임함 - 이사회 만장일치 승인. 조니 스로우지(기존 하드웨어 기술 담당 수석부사장)가 최고하드웨어책임자(Chief Hardware Officer)로 승진해 터너스의 기존 역할을 확대 승계함.",
        whyItMatters: "2011년 팀 쿡이 스티브 잡스로부터 CEO를 넘겨받은 이후 처음 있는 애플 CEO 교체라는 점에서 세계에서 가장 가치있는 소비자 기술기업 중 하나의 경영권 승계로는 매우 드물고 비중있는 사건임. 오랜 승계 계획을 거친 순조로운 전환으로 보이지만, 새 CEO의 첫 제품 사이클(9월 아이폰 행사)과 애플이 상대적으로 뒤처져 있다는 평가를 받는 AI 전략의 우선순위가 바뀔지가 시장의 관전 포인트가 될 것으로 보임. 별도로 최근 메모리 부족(위 메모리 슈퍼사이클 관련 종목들의 newsLog·analystLog와 같은 배경)으로 맥북 에어 공급 부족도 겪고 있어, 리더십 교체와 겹쳐 공급망 관리 능력이 시험대에 오른 시기이기도 함.",
        beginnerSummary: "애플의 최고경영자(CEO)가 9월 1일부터 팀 쿡에서 존 터너스로 바뀌어요. 2011년 이후 처음 있는 일이에요. 팀 쿡은 완전히 물러나는 게 아니라 이사회 의장으로 남고, 새 CEO는 애플에서 25년 일하며 아이패드·에어팟 등을 만들어온 사람이에요. 오랫동안 준비된 교체라 갑작스러운 건 아니지만, 새 CEO가 애플의 AI 전략을 어떻게 바꿀지가 관심사예요. 참고로 요즘 메모리 반도체 품귀 때문에 맥북 에어 공급도 부족한 상황이라(다른 메모리 관련 종목들의 뉴스와 같은 이유), 리더십 교체 시기와 겹쳐 있어요.",
        confidence: "CEO 교체 사실관계는 애플 공식 발표·CNBC 등 복수 매체 기준(신뢰도 매우 높음) · 새 CEO 하의 전략 변화 전망은 아직 알 수 없음(추측 자제)",
        sources: [
          {title:"Tim Cook to become Apple Executive Chairman, John Ternus to become Apple CEO (Apple Newsroom, 공식)", url:"https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/"},
          {title:"Apple taps John Ternus as CEO to replace Tim Cook, who will become chairman (CNBC)", url:"https://www.cnbc.com/2026/04/20/apple-names-john-ternus-ceo-replacing-tim-cook-who-becomes-chairman.html"},
        ],
      },
      {
        date: "2026-08-14",
        headline: "애플페이·월렛 총괄 제니퍼 베일리, 25년 만에 10월 퇴사 - 후임 미정",
        coreAnalysis: "블룸버그 보도(2026-08-11)에 따르면 2014년 애플페이 출시 때부터 이를 이끌어온 부사장 제니퍼 베일리가 10월 말 퇴사함. 서비스 총괄 에디 큐가 사내 메모로 발표했고, 애플페이·월렛·애플카드·캐시·Tap to Pay 전체를 담당해온 인물임. 애플페이 연매출은 애널리스트 추정으로 연 75억달러 이상(회사가 별도 공시하는 숫자는 아님 - 서비스 부문 매출에 섞여 있어 정확한 규모는 확인 불가). 후임자는 아직 발표 안 됐고, 담당 영역을 한 명이 이어받을지 여러 명으로 쪼갤지도 미정.",
        whyItMatters: "이 사건 하나만 보면 크지 않지만, 바로 위 newsLog(팀 쿡→존 터너스 CEO 교체, 2026-09-01)와 겹쳐서 봐야 함 - 법무총괄 케이트 아담스(2026년 말 퇴사 예정)·환경총괄 리사 잭슨(2026년 초 이미 퇴사)·AI총괄 존 지아난드레아·COO 제프 윌리엄스(2025년 퇴사)·디자인총괄 앨런 다이(2025년 말 메타로 이직)까지 겹쳐서, **CEO 교체와 같은 시기에 애플 핵심 임원진이 대거 물갈이되는 국면**임. 서비스 부문(2026 회계연도 1분기 매출 $300억, +14% - 위 strengths 참고)은 하드웨어 성장 둔화를 메워주는 핵심 성장동력으로 투자자들이 주목하는 부문인데, 그 안에서 오래 안정적으로 운영돼온 결제 사업의 리더가 후임 없이 떠난다는 건 단기 실적 리스크는 아니어도 **경영 연속성 관찰 대상**임. 참고로 애플은 결제 사업(애플페이)에서 최근 몇 년간 미국 CFPB의 '빅테크 결제' 규제 관심, EU DMA로 인한 NFC칩 개방 요구(위 risks 항목과 동일 맥락) 등 규제 압박도 받고 있어, 마침 이 사업을 상세히 아는 리더가 교체되는 시점이라는 점도 함께 볼 만함.",
        beginnerSummary: "아이폰으로 결제하는 '애플페이'와 '월렛' 앱을 2014년 출시 때부터 12년 넘게 이끌어온 임원(제니퍼 베일리)이 10월에 회사를 떠나요. 누가 이어받을지는 아직 발표 안 됐어요. 이것 하나만 보면 큰일은 아닌데, 마침 애플 CEO도 9월에 바뀌고(바로 위 뉴스) 다른 고위 임원들도 최근 여럿 회사를 떠나고 있어서, '한꺼번에 리더십이 많이 바뀌는 시기'라는 맥락에서 지켜볼 만해요. 애플페이가 속한 '서비스' 사업은 요즘 아이폰 판매 둔화를 메워주는 중요한 성장 동력이라, 그 안의 리더 교체가 매끄럽게 진행되는지가 관전 포인트예요.",
        confidence: "임원 퇴사 사실관계는 블룸버그·애플 공식 사내메모 인용 복수매체 기준(신뢰도 높음) · 애플페이 매출 $75억은 애플이 공시한 숫자가 아니라 애널리스트 추정치(신뢰도 중간, 회사 공식 확인 불가) · 후임 인선·조직개편 방향은 아직 미정이라 추측 자제",
        sources: [
          {title:"Apple Executive in Charge of Apple Pay and Wallet Services Is Leaving (Bloomberg)", url:"https://www.bloomberg.com/news/articles/2026-08-11/apple-executive-in-charge-of-apple-pay-and-wallet-services-is-leaving"},
          {title:"Apple Pay Chief Jennifer Bailey Retiring in October (MacRumors)", url:"https://www.macrumors.com/2026/08/11/apple-pay-chief-retiring/"},
          {title:"Apple Pay & Apple Card VP Jennifer Bailey is retiring (AppleInsider)", url:"https://appleinsider.com/articles/26/08/11/apple-pay-apple-card-vp-jennifer-bailey-is-retiring"},
        ],
      },
      {
        date: "2026-08-20",
        headline: "EU와 앱스토어 수수료 관련 합의 후 요율 인상 + 미국 내 $60B 투자(텍사스 맥미니 생산 비중 확대)",
        coreAnalysis: "애플이 유럽연합 집행위원회와의 디지털시장법(DMA) 관련 분쟁에서 합의에 이르며 EU 앱스토어 수수료를 인상했다. 동시에 미국 내 $60B 규모 투자 계획을 발표했는데, 상당 부분이 텍사스에서의 맥미니(Mac Mini) 생산 비중 확대에 투입된다.",
        whyItMatters: "위 risks 항목에 'EU에서 이미 DMA 위반으로 벌금 부과됨'이라고 적혀 있던 규제 리스크가 이번 합의로 일부 정리된 것으로 보이는데, '합의 후 수수료를 인상'했다는 건 애플이 규제 준수 비용을 개발자·플랫폼 이용자에게 일부 전가했다는 뜻일 수 있어 EU와의 관계가 완전히 해소됐다고 보기는 이르다(합의의 구체적 조건은 원문 확인이 필요). $60B 규모 미국 투자·텍사스 생산 확대는 미중 관세·공급망 리스크(위 risks 항목)에 대응해 생산기지를 다변화하려는 움직임으로 해석되지만, 두 소식 모두 이번 조사에서는 헤드라인 수준까지만 확인됐고 구체적 수치(수수료 인상폭, 텍사스 투자 세부 내역)는 원문에서 추가 확인이 필요하다.",
        beginnerSummary: "애플이 유럽연합과 앱스토어 수수료 문제로 다투다가 합의를 봤는데, 그 대신 수수료를 좀 올렸어요. 그리고 미국에다 60억 달러가 아니라 600억 달러(매우 큰 금액)를 투자해서 텍사스에서 맥미니(애플 컴퓨터의 한 종류)를 더 많이 만들기로 했어요 - 미중 갈등으로 중국 생산에 의존하는 리스크를 줄이려는 움직임으로 보여요.",
        confidence: "두 사건의 발생 사실은 매체 보도 기준(신뢰도 중간) - 이번 조사에서는 headline 수준만 확인했고 합의 세부조건·투자 세부내역은 원문 추가 확인이 필요함(다음 갱신 때 더 깊이 확인할 것)",
        sources: [
          {title:"Interesting News for Apple Stock Investors (The Motley Fool)", url:"https://www.fool.com/investing/2026/08/18/interesting-news-for-apple-stock-investors/"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-14",
        headline: "관망 - 밸류에이션 여유는 크지 않지만 실적은 본업 기준으로 건강, 리더십 전환기 실행력이 관건",
        view: "지금 AAPL은 눈에 띄는 저가 매수 신호가 없어요(눌림목 점수 1/5점 - 52주 고점대비 -10.2%로 소폭 눌렸지만 200일선 위·시장 조정도 없어서 '관망' 구간). 밸류에이션도 딱히 싼 편은 아니에요 - 현재 PER(약 34.7배)이 이 종목의 3년 평균(약 33.0배)이나 트레일링 PER 자기이력 평균(+4.1% 괴리)과 비교해도 거의 비슷한 수준이라, '싸게 사는' 자리는 아니고 '적정하게 거래되는' 자리에 가까워요. PER 유지 시나리오 기준가($331)보다 지금 가격($305)이 8%가량 낮긴 하지만, 이 괴리가 예측력이 없다는 게 이미 검증돼 있어서 큰 의미는 안 둬요. 다만 실적 자체는 좋아요 - 2026 회계연도 1분기 매출이 전년 대비 +16.6%, 영업이익은 +21.3%로 매출보다 더 빨리 늘었고(레버리지 개선), 세금효과나 큰 영업외손익 없이 깨끗하게 성장했어요(다른 종목들처럼 세금환급·투자평가익으로 부풀려진 게 아니라 본업이 실제로 좋아진 거라는 뜻이에요 - 캐시 데이터로 직접 확인함). 그래서 지금은 '나쁜 회사를 비싸게 사는' 상황이 아니라 '좋은 회사를 적정가에 파는' 쪽에 가깝다고 봐요 - 급하게 쫓아 살 이유도, 겁먹고 피할 이유도 뚜렷하지 않은 애매한 자리예요. 여기에 CEO 교체(9/1)와 애플페이 총괄 퇴사(10월) 등 리더십이 짧은 기간에 대거 바뀌는 시기가 겹쳐 있어요(위 newsLog 참고) - 오래 준비된 승계라 그 자체가 나쁜 신호는 아니지만, 새 체제의 실행력이 실제로 검증되기 전까지는 다소 보수적으로 보는 게 맞다고 생각해요.",
        increaseIf: [
          "가격이 더 눌리거나(눌림목 점수 2점 이상으로 - 52주 고점대비 하락이 더 깊어지거나 200일선 아래로) 기준가 대비 할인폭이 커질 때",
          "다음 실적(2026 회계연도 4분기, 대략 10월 말 발표 예상)에서도 매출·영업이익 동반 성장(영업이익 증가율이 매출 증가율보다 같거나 빠르게)이 이어질 때",
          "애플페이 후임 인선이 매끄럽게 발표되고, 신임 CEO 체제에서 AI 전략(시리 2.0 등)에 구체적 진전이 보일 때",
          "서비스 부문 매출 성장률이 두 자릿수를 계속 유지할 때",
        ],
        wrongIf: [
          "아이폰이나 서비스 매출 성장이 눈에 띄게 꺾일 때(지금 아이폰 +23%·서비스 +14%대인데 한 자릿수로 떨어지면)",
          "영업이익 성장률이 매출 성장률보다 뒤처지기 시작할 때(지금은 반대로 이익이 매출보다 빠르게 늘고 있음 - 이게 역전되면 마진이 눌리기 시작한다는 뜻)",
          "리더십 공백(CEO·애플페이 등)이 실제 제품·서비스 실행 차질(출시 지연·품질 문제 등)로 이어지는 구체적 신호가 나올 때",
          "DOJ 반독점 소송에서 불리한 판결이 나와 아이메시지·NFC 개방이 강제되고 생태계 락인 전략이 흔들릴 때",
        ],
        watchNext: [
          "9월 아이폰 신제품 행사 - 신임 CEO 존 터너스 체제의 첫 제품 사이클",
          "애플페이 후임 인선 발표(2026년 10월 전)",
          "2026 회계연도 4분기 실적 발표(대략 10월 말) - 매출·영업이익 성장세 유지 여부",
        ],
        confidence: "재무 수치(매출·영업이익·순이익률, +16.6%/+21.3%/26.6% 등)는 SEC 공시 기반 캐시 데이터라 신뢰도 높음 · PER 비교(3년평균 대비)는 이 대시보드가 이미 계산해둔 값을 그대로 가져옴 · CEO 교체·애플페이 임원 퇴사는 복수매체로 확인된 사실 · '지금은 관망이 맞다'는 종합 판단 자체는 Claude의 정성적 해석이라 확률이 아니고, 다르게 볼 여지가 있음",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-27 마감 분기 (FY26 3분기, 팀 쿡의 마지막 실적 발표)",
        headline: "매출 1,094억 달러(전년비 +16%)·순이익 298억 달러(EPS +29%)로 컨센서스를 웃돌았는데도, 다음 분기(9월 마감) 가이던스가 기대에 못 미치고 메모리 공급 제약 경고가 겹치면서 발표 직후 주가는 6% 넘게 급락했어요.",
        oneTime: "이번 분기 GAAP 이익에는 관세 환급금 약 22억 달러(2.2B)가 일회성으로 반영돼 마진을 끌어올렸어요 — 이걸 빼고 보면 실질 이익 개선폭은 헤드라인보다 완만해요.",
        coreRead: "아이폰·맥·서비스 매출이 모두 6월 분기 기준 사상 최대치를 찍었지만, 서비스 매출은 '기록'과 별개로 애널리스트 컨센서스에는 못 미쳤다는 평가가 다수예요 — 서비스 성장 둔화 시그널로 봐요. 중국 매출 성장도 둔화됐고, 다음 분기엔 D램·낸드 등 메모리 공급 제약이 '상당히(significantly)' 심해질 거라고 회사가 직접 경고했어요. 이번이 팀 쿡의 마지막 실적 발표였다는 점에서, 존 터너스 체제로의 전환이 임박했고 시리 2.0 타이밍 이슈는 여전히 해소되지 않은 채 다음 CEO에게 넘어가는 그림이에요.",
        forecast: "다음 분기(2026년 9월 마감, FY26 4Q) 실적에서는 메모리 공급 제약이 실제로 아이폰/맥 출하량과 마진을 눌러 매출 가이던스 하단 근처이거나 소폭 미달할 가능성에 무게를 둬요. 관세 환급 같은 일회성 요인 없이도 로컬 컨센서스 EPS 트랙(연 8.81달러 수준)을 유지하는지가 핵심 체크포인트고, 이 예측은 틀릴 수 있어요.",
        confidence: "매출 1,094억 달러, 순이익 298억 달러, EPS +29%, 관세 환급 22억 달러, 발표 후 주가 6%+ 하락, 이번이 팀 쿡의 마지막 실적발표라는 점은 복수 매체가 보도한 확인된 사실이에요. '서비스 매출이 컨센서스에 못 미쳤다', '가이던스가 약하다'는 평가는 애널리스트·매체의 해석이고, 이를 시리 2.0/CEO 전환 이슈와 연결한 coreRead·forecast 부분은 제 해석이에요.",
        sources: [
          {
            title: "Apple Reports 3Q 2026 Results: $29.8B Profit on $109.4B Revenue",
            url: "https://www.macrumors.com/2026/07/30/apple-3q-2026-earnings/",
          },
          {
            title: "Apple reports third quarter results",
            url: "https://www.apple.com/newsroom/2026/07/apple-reports-third-quarter-results/",
          },
          {
            title: "Apple Reported a Massive Quarter – But a $2.19B Tariff Refund Did the Heavy Lifting",
            url: "https://finance.yahoo.com/markets/stocks/articles/apple-reported-massive-quarter-2-160630119.html",
          },
          {
            title: "Apple Q3 2026 earnings beat estimates but services revenue misses",
            url: "https://finance.yahoo.com/markets/stocks/articles/apple-q3-2026-earnings-beat-211056445.html",
          },
          {
            title: "Apple warns supply constraints will increase 'significantly' next quarter",
            url: "https://9to5mac.com/2026/07/30/apple-warns-supply-constraints-will-increase-significantly-next-quarter/",
          },
          {
            title: "Apple Q3 2026 Earnings: Record Revenue, Worsening Mac Supply, and a Below-Consensus Q4 Outlook",
            url: "https://www.techtimes.com/articles/322442/20260731/apple-q3-2026-earnings-record-revenue-worsening-mac-supply-below-consensus-q4-outlook.htm",
          },
          {
            title: "iPhone, Mac and Services revenue set new June quarter records",
            url: "https://www.mactech.com/2026/07/30/iphone-mac-and-services-revenue-set-new-june-quarter-records/",
          },
          {
            title: "One last time, this is Tim: Final transcript of Apple's Q3 2026 earnings call",
            url: "https://sixcolors.com/post/2026/07/one-last-time-this-is-tim-transcript-of-apples-q3-2026-financial-call/",
          },
        ],
      },
    ],
    role: {
      tags: ["프리미엄 스마트폰(아이폰)", "생태계 서비스(앱스토어 등)", "소비자 락인"],
      stars: 4,
      note: "활성기기 25억대·재구매율 89%(삼성 약 77%)라는 압도적 생태계 락인이 핵심 경쟁력이에요. 아이폰 매출이 여전히 사상 최대를 경신 중이지만, AI 경쟁에서 1~2년 뒤처졌다는 평가가 있고 시리 2.0이 계속 밀리고 있어 다음 CEO(존 터너스) 체제에서의 AI 전략 실행력이 관건이에요.",
    },
  },
  TSLA: {
    updated: "2026-08-13",
    customers: [
      "전기차 구매 소비자(자동차 부문이 매출 대부분, 2026 1분기 $199.8억) - 판매·리스, 중고차·유지보수·충전·보험 등 부가서비스 포함",
      "에너지 저장 고객(메가팩-유틸리티급, 파워월-가정용, 솔라루프) - 마진율 기준 가장 빠르게 크는 사업(1분기 매출 $24.1억)",
      "(미래) 로보택시 승객, 옵티머스 휴머노이드 로봇 구매 기업 - 아직 본격 매출 전 단계",
    ],
    strengths: [
      "에너지 저장 사업이 마진 기준 최고 성장 사업 - 자동차 판매 둔화를 일부 상쇄",
      "로보택시가 미국 7개 도시로 확대(newsLog 참고), 그록(Grok) AI 어시스턴트 등 소프트웨어 기능 지속 확장",
      "1분기 82만대 이상 생산 등 대량생산 능력 유지",
    ],
    risks: [
      "⚠️ 영업이익률이 4.1%→1.4%로 급락(로보택시·AI 투자 확대가 원인) - 자세한 내용은 아래 newsLog 참고",
      "로보택시 매출 확대 시점이 머스크가 예고했던 속도보다 계속 늦어지는 중 - 계획 신뢰도에 대한 의구심",
      "2025년 판매량이 전년비 -9%, 사이버트럭은 -48%로 감소 - 핵심 자동차 사업 자체는 정체·역성장 국면",
    ],
    sources: [
      {title:"Tesla in 10 Charts: How the Business Works, Visualized (2026) (Business Model Analyst)", url:"https://businessmodelanalyst.com/tesla-in-charts/"},
      {title:"Tesla (TSLA) Stock in 2026: Robotaxis, Optimus, Declining EV Sales, and How to Trade (Phemex)", url:"https://phemex.com/academy/tesla-tsla-stock-2026"},
    ],
    newsLog: [
      {
        date: "2026-09-03",
        headline: "Tesla Cybercab 프로덕션 모델 공개 - 조향장치·페달 제거, 완전 자율주행 택시 상용화 신호",
        facts: ["Tesla가 2026-09-03 미국 텍사스 오스틴에서 Cybercab 프로덕션 모델(양산 모델) 공개 이벤트를 개최했다(현지시간 오후 5시 45분 시작)", "공개된 Cybercab은 '조향장치·페달 없는 완전 자동 주행 설계'로, 운전자 개입이 불가능한 구조로 설계되었다", "이는 Tesla가 2024년 10월 We, Robot 이벤트에서 공개한 Cybercab 컨셉의 완성본으로, 2년간의 설계·테스트를 거친 프로덕션 버전이다", "이벤트에서 Elon Musk는 'Cybercab 상용화 일정', '가격 공표', '규제 타임라인' 등을 발표할 예정으로 알려졌다", "이벤트 전 TSLA 주가는 +6% 상승해 $377까지 오른 상태(9월 3일 정규장 시작 전 기준)"],
        why: ["Cybercab은 Tesla의 '완전 자율주행(Full Self-Driving) 전략'의 최종 형태로, 이를 성공적으로 상용화하면 (1) 신규 사업 부문(로보택시) 창출, (2) 기존 자동차 사업의 마진율 개선(운전자 비용 제거), (3) AI/자동화 기술에 대한 시장 신뢰도 급상승을 의미한다.", "2년간의 설계 진화를 거쳐 프로덕션 모델을 공개한다는 것은 '단순 개념 공개'가 아니라 '실제 대량생산 직전 단계'일 가능성을 시사한다. 규제 승인이 진행 중이거나 임박했을 수 있다는 뜻이다.", "완전 자율주행 기술 상용화는 자동차 산업 전체의 구조를 바꿀 가능성이 높아, Cybercab의 성공 여부는 (1) Tesla의 향후 밸류에이션, (2) 전통 자동차 OEM의 평가 절하, (3) 보험·운송 산업 구조 변화까지 영향을 미칠 수 있다.", "시장이 이미 Cybercab 발표 예상에 TSLA +6% 반응을 보인 것은, 성공적 공개 시 추가 상승, 실망스러운 세부 사항(지연, 비싼 가격 등) 노출 시 급락 가능성이 높다는 뜻이다."],
        beginner: ["Cybercab은 운전대도 없고 가속·브레이크 페달도 없는 자동차예요. 사람이 직접 운전할 수 없고 AI가 완전히 자동으로 운전하는 거예요.", "Tesla는 2년 전에 '이런 차를 만들 거다'고 공개했고, 이제 2년 뒤 '진짜 이렇게 완성했다'고 보여주는 거거든요.", "이게 성공하면 '운전자 없는 택시'가 정말 현실이 되는 거라, 자동차 사업뿐 아니라 택시·운송 산업 전체를 바꿀 수 있는 수준의 큰 변화에요.", "시장은 이미 이 발표를 기대하고 있어서 주가가 6% 올라있어요. 만약 발표 내용이 기대에 못 미치면(예: 2030년까지 출시 연기, 가격이 기대보다 훨씬 비싸다 등) 주가가 크게 떨어질 수 있어요."],
        watch: ["Cybercab 상용화 예정 시기 및 초기 가격 공표 내용", "규제 승인 일정 및 진행 상황 (특히 완전 자율주행 안전성 인증)", "이벤트 직후 TSLA 주가 반응 및 향후 1주일간의 동향", "경쟁사(Google Waymo, General Motors 등)의 대응 및 자체 로보택시 프로젝트 진행 상황", "보험/규제 기관의 완전 자율주행 택시 운영 승인 여부"],
        interpretation: "Cybercab 프로덕션 공개는 Tesla의 가장 큰 장기 내러티브인 'AI/자동화 변화'가 단순 구호에서 물리적 상품으로 구체화되는 신호다. 성공적 상용화는 (1) 신규 사업 기여, (2) AI 기술 입증, (3) 향후 3~5년 수익 구조 변화를 의미하지만, 규제 승인·시장 수용 등 넘어야 할 장애물이 여전히 많다. 단기적으로는 이벤트 내용(구체적 일정·가격)에 따라 주가가 크게 변동할 수 있는 '변동성 이벤트'다.",
        decision: "Cybercab 발표 자체는 Tesla의 장기 성장 내러티브 강화로 긍정적이나, 이벤트 후 구체적 세부사항(상용화 일정, 가격, 규제 로드맵)을 확인한 후 판단할 것. 이벤트 직후 주가 반응이 크게 변동할 수 있으므로 1~3일 후 시장 반응을 지켜본 후 포지션 조정 검토.",
        confidence: "Cybercab 이벤트 개최 사실(일시, 장소)은 Tesla 공식 발표 및 복수 매체(Reuters·Yahoo Finance 등) 보도로 신뢰도 높음. 구체적 세부사항(상용화 일정, 가격, 규제 타임라인)은 이벤트 후 공개될 예정이라 현시점 미확정.",
        sources: [
          { title: "Tesla Cybercab to launch Sept. 3 as robotaxi bet ramps up (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/article/tesla-cybercab-to-launch-sept-3-as-robotaxi-bet-ramps-up-135557945.html" },
          { title: "Tesla to hold the Cybercab Austin, Texas launch event on September 3 (Tesla Oracle)", url: "https://www.teslaoracle.com/2026/08/23/tesla-to-hold-the-cybercab-austin-texas-launch-event-on-september-3/" },
          { title: "Tesla climbs 6% ahead of Cybercab event (SeekingAlpha)", url: "https://seekingalpha.com/news/4638507-tesla-climbs-6-ahead-of-cybercab-event" },
          { title: "Tesla's Cybercab event set for Thursday, with few details (Reuters/Investing.com)", url: "https://www.investing.com/news/stock-market-news/teslas-cybercab-event-set-for-thursday-with-few-details-4887402" },
        ],
      },
      {
        date: "2026-08-31",
        headline: "테슬라 주가 5.5% 급등 - Cybercab 행사(9/3) 임박 + 네바다 로보택시 승인(연 5,000대)",
        facts: ["테슬라 주가가 8월 31일(금) +5.5% 상승해 $367.95로 마감했고, 거래량은 60.9M으로 3개월 평균(41.6M) 대비 46% 초과", "상승 배경은 9월 3일(화) 예정된 Cybercab 행사 기대감과 함께 로보택시 사업의 구체적 진전 신호", "네바다 자동차국이 클락 카운티에서 테슬라 로보택시를 자율주행 네트워크사(autonomous vehicle network company)로 정식 승인했고, 1년차에 최대 5,000대의 완전 자율주행 차량 운영 허가", "머스크가 텍사스 austin 시설에서의 AI 전력 수요 충족을 위해 SpaceX와 협력해 가스터빈 부품 생산 추진 중이라는 보도도 있음"],
        why: ["네바다 로보택시 정식 승인은 로보택시 사업의 '규제 리스크 해소'로 평가됨 - 기존 신뢰도 논쟁(머스크가 일정을 계속 미루는 현상)에 비해 정부 공식 승인은 실행 가능성을 높여줌", "9월 3일 Cybercab 행사는 로보택시·FSD 로드맵 공개와 실제 기술 시연의 기회라 시장의 기대가 높은 상태", "주가가 $365 이상 돌파한 것은 기술적 저항선 제거로 추가 상승 여지가 있을 수 있다는 기술적 해석도 있음", "8월 말 시점에 '모멘텀이 돌아왔다'는 신호로 해석되는데, TSLA 자체는 저평가(눌림목 4/5점)와 고이익배수(PER 192배)의 괴리가 있어 투자자 심리가 중요한 변수임"],
        beginner: ["테슬라 주가가 하루에 5% 이상 크게 올랐어요. 이유는 다음주 화요일(9월 3일)에 무인택시(로보택시) 행사가 있을 거라는 기대감 때문이에요.", "더 중요한 건, 미국 네바다 주에서 테슬라의 로보택시를 공식 승인해줬다는 거예요. 이제 네바다 주에서 연 5,000대까지 무인 상태로 운행할 수 있다는 뜻이에요.", "지금까지 테슬라는 '로보택시를 곧 낸다'고 계속 말해왔는데 미뤄졌거든요. 이제 정부가 공식 허가를 내줘서 '진짜 하나 봅시다'라는 신호가 나온 거라고 봐요."],
        watch: ["9월 3일 Cybercab 행사 내용 - 로보택시 기술 시연, FSD 로드맵, 실제 상용화 일정 공개 여부", "네바다 외 다른 주의 로보택시 승인 진행 여부", "로보택시 매출 확대 시점 및 실제 운영 시작", "다음 분기 실적에서 영업이익률 회복 신호(현재 1.4%, 로보택시 투자로 압박 중)"],
        interpretation: "9월 3일 행사 결과가 핵심. 기술 시연이 시장 기대(무인주행 신뢰도)를 충족시키고 상용화 일정이 구체적으로 제시된다면 단기 모멘텀 지속 가능. 다만 TSLA는 '기대주'로서 기대를 못 충족시키면 급락하는 패턴이 있어 행사 이후 실제 업적(매출 확대·마진 개선) 신호까지 지켜봐야 함.",
        decision: "단기 모멘텀(9/3 행사 전후)에 따라 변동성 클 것으로 예상. 현재 주가 $367.95는 기술적 저항선을 뚫었으나 여전히 PER 기준 고평가 상태이므로, 실제 로보택시 매출·영업이익 개선 확인 전까지는 관심은 높지만 신규 진입은 신중하게.",
        confidence: "네바다 로보택시 승인, 9/3 행사 예정, 주가 상승폭(+5.5%, 거래량 초과)는 복수 매체(Motley Fool, FX Leaders 등) 교차 확인 - 신뢰도 높음. 행사 결과 전망은 시장 예상이므로 실제 결과는 다를 수 있음.",
        sources: [
          { title: "Stock Market Today, Aug. 31: Tesla Stock Surges on Cybercab Event Anticipation and Autonomy Focus (Motley Fool)", url: "https://www.fool.com/coverage/stock-market-today/2026/08/31/stock-market-today-aug-31-tesla-surges-on-cybercab-event-anticipation-and-autonomy-focus/" },
          { title: "Tesla TSLA Stock Breaks $365 Resistance as Musk Pushes SpaceX to Build Gas Turbine Parts (FX Leaders)", url: "https://www.fxleaders.com/news/2026/08/31/tesla-tsla-stock-breaks-365-resistance-as-musk-pushes-spacex-to-build-gas-turbine-parts/" },
          { title: "Tesla Stock Extends Rally As Robotaxi And Optimus Bets Accelerate (Timothy Sykes)", url: "https://www.timothysykes.com/news/tesla-inc-tsla-news-2026_08_31/" },
        ],
      },
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 매출은 사상 최고인데 영업이익률 1.4%로 급락 - 수익성 악화가 핵심 우려",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-07-22 2분기 매출 282.4억 달러로 사상 최고치(예상 상회)를 기록했으나 EPS는 예상 대비 큰 폭 미스했다.", "영업이익률이 1.4%로 급락했다 - 수익성 악화가 핵심 우려 요인이다.", "잉여현금흐름이 -11억 달러로 마이너스 전환했고, R&D 비용 증가가 이익 미스의 주요 원인으로 지목됐다."],
        why: ["매출 성장은 확인되지만 수익성이 급격히 훼손되고 있다는 점은, 단순 밸류에이션 조정을 넘어서는 우려 요인이다."],
        beginner: ["물건은 예전보다 훨씬 많이 팔았는데, 남는 돈(이익)은 오히려 확 줄었어요. 연구개발에 돈을 많이 쓰고 있어서 그런데, 이게 미래를 위한 투자인지 그냥 이익이 안 남는 상황인지는 다음 분기를 봐야 알아요."],
        interpretation: "로보택시 등 미래 성장 스토리에 대한 투자로 해석할 여지도 있지만, 현재로선 수익성 악화가 뚜렷해 낙폭과다를 온전히 '착시'로 보기는 어렵다.",
        decision: "영업이익률 회복 여부를 다음 분기 핵심 확인 포인트로 삼을 것.",
        watch: ["다음 분기 영업이익률 회복 여부", "잉여현금흐름 플러스 전환 여부", "로보택시 진행 상황"],
        confidence: "실적 수치는 회사 공식 발표(10-Q) 및 CNBC 등 다수 매체 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Tesla Q2 2026 Earnings: Revenue Beat, EPS Miss, Operating Margin Falls to 1.4% (Webull)", url:"https://www.webull.com/blog/241-Tesla-TSLA-Q2-2026-Earnings-Revenue-Beat-EPS-Miss-Operating-Margin-Falls-to-1-4"},
        {title:"Tesla Q2 2026 Earnings (KuCoin)", url:"https://www.kucoin.com/blog/tesla-q2-2026-earnings-report"},
        {title:"Tesla Q2 Earnings Miss on Higher R&D Costs (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/tesla-q2-earnings-miss-higher-122800570.html"},
        ],
      },
      {
        date: "2026-08-13",
        headline: "2분기 영업이익률 1.4%로 급락(전년 4.1%) - AI·로보택시 투자 확대가 원인 + 머스크 최대 1조달러 보상안 주주 75%+ 승인 + 로보택시 매출 확대는 지연",
        coreAnalysis: "테슬라의 2026년 2분기(7월 22일경 발표) 영업이익률이 전년동기 4.1%에서 1.4%로 급락함 - 판매가 할인 확대와 함께, AI·연구개발 비용이 전년비 +47%(총 $4.35B)로 급증한 게 주된 원인. 로보택시는 미국 7개 도시로 확대됐지만, 실제 매출 기여 시점은 머스크가 이전에 제시했던 속도보다 늦춰지고 있음. 별도로 주주총회에서 머스크의 신규 보상안(현금 없이 전량 스톡옵션, 시가총액 마일스톤 $2조~$8.5조 달성 시 최대 1조달러 가치)이 주주 75% 이상의 찬성으로 통과됨.",
        whyItMatters: "이 마진 하락은 세금·평가손익 같은 회계상 '1회성' 항목이 아니라, 로보택시·옵티머스(휴머노이드 로봇)에 의도적으로 막대한 돈을 쏟아붓기로 한 전략적 선택임 - 즉 '진짜' 마진 훼손이라 이게 나중에 결실을 맺느냐가 전적으로 관건. 그런데 그 로보택시조차 머스크 본인이 제시했던 일정보다 매출 확대가 늦어지고 있다는 건 신뢰도 측면에서 주의할 신호. 동시에 승인된 사상 최대 규모의 보상안은 머스크의 개인적 인센티브를 앞으로 수년간 시가총액(결국 로보택시·옵티머스의 성공 여부)에 완전히 묶어뒀다는 뜻이라, 이해관계 일치도 크지만 그만큼 '이 베팅이 안 통하면 다 같이 안 통한다'는 이분법적 리스크이기도 함.",
        beginnerSummary: "테슬라의 영업이익률(번 돈에서 얼마가 실제 이익으로 남는지)이 작년 4.1%에서 올해 1.4%로 크게 떨어졌어요. 차 할인을 많이 한 데다, 로보택시(무인택시)·인간형 로봇 같은 미래 사업에 돈을 엄청 쓰고 있어서예요. 로보택시는 7개 도시로 늘긴 했지만, 실제로 돈을 벌어들이기 시작하는 시점은 머스크가 예전에 말한 것보다 늦어지고 있어요. 그런데도 주주들은 머스크에게 회사 가치가 크게 오르면 최대 1조달러(약 1,300조원)어치 주식을 주는 파격적인 보상안을 압도적으로 찬성했어요 - 머스크가 이 미래 사업들을 성공시킬수록 본인도 엄청나게 큰 보상을 받는 구조가 됐어요.",
        confidence: "실적 수치는 회사 공식 발표·SEC 10-Q 기준(신뢰도 높음) · 보상안 승인은 주주총회 공식 결과 기준(신뢰도 높음)",
        sources: [
          {title:"Tesla (TSLA) Q2 2026 earnings report (CNBC)", url:"https://www.cnbc.com/2026/07/22/tesla-tsla-q2-2026-earnings-report.html"},
          {title:"Tesla announcement: Musk's pay package approved (Hargreaves Lansdown)", url:"https://www.hl.co.uk/shares/share-research/tesla-announcement-musks-pay-package-approved"},
          {title:"Tesla's Big Robotaxi Progress Is Hidden in Plain Sight (The Motley Fool)", url:"https://www.fool.com/investing/2026/08/03/teslas-big-robotaxi-progress-is-hidden-in-plain-si/"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(4/5점, 강한 매수기회 밴드) - 다만 이 점수는 '싸다'는 뜻이지 '실적이 좋다'는 뜻이 아님을 구분해야 함",
        view: "TSLA는 눌림목 점수 4/5점(52주 고점대비 -30.1%, 200일선 아래)으로 이 대시보드 점수체계상 가장 높은 밴드예요. 다만 이 점수는 순수 가격 하락폭·추세만 보는 지표라, '실적이 좋아서'가 아니라 '많이 빠져서' 나온 점수라는 걸 분명히 해둘게요 - 실제 재무는 Q2'26 매출 +25.5%로 외형은 회복 중이지만 영업이익률은 -2.7%p로 계속 눌리는 중이고(2분기 영업이익률이 1.4%까지 급락, 전년 4.1%), FCF도 -3.9%로 적자(로보택시·AI 투자 확대가 원인)예요. PER(192배)은 절대 수준으로도 이 대시보드의 '위험' 기준(80배)을 훨씬 넘는 데다 3년 평균(210배)과 비슷해서, 눌림목 점수와 별개로 밸류에이션 자체는 여전히 매우 비싼 편이에요 - 이 괴리(가격은 많이 빠졌는데 이익 기준 밸류에이션은 안 싸다)가 TSLA 판단을 어렵게 만드는 핵심이에요. 최근 머스크의 최대 $1조 보상안이 주주 75%+ 찬성으로 승인됐고, 로보택시 매출 확대는 계획보다 지연되고 있어요. 컨센서스는 내년 매출 +14%·EPS +22%로 이익률 회복을 기대하고 있어요.",
        increaseIf: [
          "영업이익률이 실제로 반등하는 신호가 나올 때(지금 1.4%에서 개선 추세 확인)",
          "로보택시 매출이 실질적으로 확대되기 시작할 때",
          "FCF가 흑자로 전환될 때",
        ],
        wrongIf: [
          "영업이익률이 계속 더 눌리거나(추가 하락), 로보택시·AI 투자가 계속 확대되는데 매출로 이어지지 않을 때",
          "PER이 여전히 극단적으로 높은 채로 실적 개선 없이 주가만 반등할 때(밸류에이션 갭이 안 좁혀짐)",
        ],
        watchNext: [
          "다음 분기 영업이익률 추이(반등 여부가 핵심)",
          "로보택시 확대 지역·매출 기여 시작 시점",
          "FCF 흑자 전환 여부",
        ],
        confidence: "매출·영업이익률·FCF 수치는 SEC 공시 기반 캐시 데이터(이번 세션에 Q1'23 등 과거 매출 오류를 수정한 뒤의 정확한 값) · 보상안 승인·로보택시 지연은 복수매체 확인 · '점수는 높지만 밸류에이션은 여전히 비싸다'는 구분은 Claude의 정성적 해석이자 이 종목 판단의 핵심 포인트",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026 회계연도 2분기)",
        headline: "매출은 282.4억 달러로 시장 예상(약 264억 달러)을 웃돌았지만 비GAAP EPS는 0.33달러로 컨센서스 0.53달러를 크게 밑돌았고 전년 대비로도 -18%예요.",
        oneTime: "규제 크레딧 매출이 전년 4.39억 달러에서 1.46억 달러로 67% 급감했는데(2025년 9월 연방 EV 세액공제 만료·연비 벌금 폐지 영향으로 경쟁사들이 크레딧을 살 이유가 사라짐), 여기에 머스크 2025년 CEO 보상 패키지에 따른 주식보상비용(세후 약 9.89억 달러)이 겹치면서 영업비용이 47% 급증(43.5억 달러)했어요. GAAP 영업이익은 이 두 요인으로 57% 급감했어요.",
        coreRead: "GAAP 영업마진이 1.4%(전년 4.1%)까지 내려앉았지만 이는 규제크레딧 소멸+주식보상비용이라는 일회성·구조적 성격이 섞인 요인이 커요. 반대로 오토모티브 매출은 205.2억 달러(+23%)에 480,126대 인도로 분기 기록을 세웠고, 매출총이익률은 16.8%로 41bp 하락에 그쳐 판매가 압박은 제한적이에요. 특히 영업현금흐름은 47.0억 달러(+85%)로 오히려 크게 늘었는데, 설비투자가 57.9억 달러(+142%)로 급증하면서 잉여현금흐름만 -10.9억 달러로 2024년 초 이후 처음 마이너스 전환됐어요 — 이건 이익 훼손이라기보다 AI·로보택시·옵티머스 투자 사이클로 읽는 게 맞아요. 에너지 저장은 13.5GWh 배치(+40%)로 여전히 가장 빠르게 크는 사업인데, 이번 분기는 벤더 셀 이슈로 인한 워런티 비용이 일부 마진을 깎았어요.",
        forecast: "3분기(2026-09-30 마감)에는 규제크레딧이 이미 바닥권이라 추가 급감 폭은 크지 않겠지만, 옵티머스·로보택시 투자로 영업비용 증가세는 이어져 비GAAP EPS는 0.35~0.45달러 구간에 머물 것으로 봐요. 오토모티브 인도량은 계절적 성수기 효과로 490,000~510,000대 사이로 소폭 늘어날 것으로 예상해요.",
        confidence: "매출·이익·마진·현금흐름·인도량 수치는 테슬라 공식 IR 실적 발표(2026년 7월 22일 발표, 2분기 실적)를 인용한 확인된 사실이고, 3분기 EPS·인도량 전망치와 '투자 사이클'이라는 해석은 제 판단이에요.",
        sources: [
          {
            title: "Tesla (TSLA) releases Q2 2026 financial results: record revenue, big profit miss",
            url: "https://electrek.co/2026/07/22/tesla-tsla-q2-2026-financial-results/",
          },
          {
            title: "Tesla Q2 Earnings: Revenue $28.2B, Income Falls 57% | TSLA Stock News",
            url: "https://www.stocktitan.net/news/TSLA/tesla-releases-second-quarter-2026-financial-opf5vkit2vhk.html",
          },
        ],
      },
    ],
    role: {
      tags: ["전기차(EV)", "에너지 저장(메가팩·파워월)", "(미래) 로보택시·휴머노이드 로봇"],
      stars: 3,
      note: "EV 시장을 개척한 회사지만 2025년 판매량이 -9%(사이버트럭 -48%)로 핵심 사업이 정체·역성장 중이에요. 에너지 저장(메가팩) 사업은 마진 기준 가장 빠르게 크고 있고, 로보택시·옵티머스는 잠재력은 크지만 아직 본격 매출 전 단계라 미래 가치 비중이 큰 구조예요.",
    },
  },
  CRM: {
    updated: "2026-08-13",
    customers: [
      "영업·고객서비스 부서 - Sales Cloud(매출 비중 22%)·Service Cloud(24%, 최대 매출원) 사용 기업",
      "마케팅·커머스·통합분석 고객 - Marketing/Commerce Cloud(13%), Integration/Analytics(15%, Slack·Tableau·MuleSoft 포함)",
      "AI 에이전트 도입 기업 - 2025년 대대적 리브랜딩으로 전 제품군을 'Agentforce'(AI 자율 에이전트) 중심으로 재편 중",
    ],
    strengths: [
      "여러 클라우드(영업·서비스·마케팅·커머스)에 걸친 매출 다각화 - 특정 제품 하나에 대한 의존도가 낮음",
      "구독 기반 매출 구조로 안정적 반복 매출(recurring revenue)",
      "Agentforce로 AI 에이전트를 전 제품에 결합하는 대규모 전환 진행 중 - 시장이 주목하는 차기 성장동력",
    ],
    risks: [
      "⚠️ Agentforce가 기대만큼 빠르게 수익화될 수 있을지가 시장의 핵심 의문 - 8/26 실적 발표를 앞두고 주가가 크게 흔들리는 배경(상세는 아래 newsLog 참고)",
      "8/5 엔지니어링·고객성공 총괄 사장 사임 - 실행 리스크에 대한 불확실성 추가(아래 newsLog 참고)",
      "마이크로소프트 Dynamics 365, 허브스팟 등과 CRM·AI 에이전트 시장에서 경쟁 심화",
    ],
    sources: [
      {title:"Salesforce Revenue Breakdown By Segment (Bullfincher)", url:"https://bullfincher.io/companies/salesforce/revenue-by-segment"},
      {title:"Salesforce Agentforce Guide 2026: Products, AI Agents & Use Cases (Vantage Point)", url:"https://vantagepoint.io/blog/sf/the-complete-guide-to-salesforces-agentforce-ecosystem-understanding-the-full-product-portfolio-in-2026"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "Q2(FY27) 실적 서프라이즈 + 앤스로픽 파트너십 발표에 주가 +23% 급등 - Agentforce 매출 YoY +240%로 'AI 성장 증거 부족' 우려 반박",
        importance: "high",
        tone: "positive",
        horizon: "즉시~단기(반등 지속 여부)",
        facts: ["Salesforce가 2026-08-26 장마감 후 발표한 2분기(FY27) 매출은 $113.45억으로 YoY +10.8%, 시장 예상에 부합했다.", "조정(비GAAP) EPS는 $5.90으로 시장 예상을 크게 상회했고, 순이익은 $48.44억(YoY +73.3%)으로 앤스로픽 지분 투자 평가이익 약 $26억이 반영됐다.", "잔여계약금액(cRPO)은 통화중립 기준 YoY +14%로 가이던스를 상회했고, 최근 4년 중 최대 순신규계약(net new ARR) 분기를 기록했다.", "Agentforce 연환산 매출이 $15억을 돌파(YoY +240%)했고, Agentic Workforce Units(AWU)는 +97% 성장했다.", "FY2027 매출 가이던스를 약 $3억 상향(신규 범위 $461억~$464억)했고, 조정 EPS 가이던스도 $16.67~16.71로 상향(기존 시장 예상 $14.16을 크게 상회)했다.", "실적 발표 다음날인 2026-08-27 정규장에서 주가가 +22.6%~23% 급등해 $252.10에 마감했다.", "실적 발표와 함께 앤스로픽과의 AI 협력 파트너십도 공개됐다."],
        why: ["8/13 경영진 교체(엔지니어링·고객성공 총괄 사임), 8/26 직전 'Agentforce 성장 증거 부족' 애널리스트 연속 하향 등으로 주가가 눌려 있었는데, 이번 실적에서 Agentforce 매출이 YoY +240%로 급성장하고 있다는 게 숫자로 확인되면서 그간의 AI 성장 둔화 우려가 정면으로 반박됐다."],
        beginner: ["세일즈포스 성적표에서 이익이 예상보다 훨씬 잘 나왔고, 특히 AI 서비스(Agentforce)로 버는 돈이 1년 만에 3배 넘게 늘었다는 게 확인됐어요. 최근까지 'AI로 돈을 잘 못 벌고 있는 것 아니냐'는 걱정이 많았는데, 실제 숫자로 그게 틀렸다는 게 드러나면서 주가가 하루 만에 23%나 뛰었어요. 클로드를 만드는 AI 회사 앤스로픽과 협력한다는 소식도 함께 나와서 힘을 보탰어요."],
        interpretation: "8/26 직전 기록됐던 'AI 성장 증거 부족' 우려와 경영진 공백발 불안이 이번 실적으로 상당 부분 해소됐다. Agentforce의 실질적 매출 기여(+240% YoY)가 숫자로 증명된 점이 핵심이며, 단순 반등이 아니라 그간의 우려가 과도했음을 보여주는 사례로 볼 수 있다.",
        decision: "하루 +23% 급등 이후 단기 과열 가능성이 있으므로 추격매수보다는 상승분이 며칠간 유지되는지, cRPO·Agentforce 성장률이 다음 분기에도 이어지는지 확인 후 판단할 것.",
        watch: ["앤스로픽 파트너십 구체 내용(투자 규모·협력 범위) 후속 발표", "다음 분기 Agentforce/AWU 성장률 지속 여부", "8/5 사임한 엔지니어링·고객성공 총괄 후임 관련 소식"],
        confidence: "매출·EPS·가이던스·Agentforce 성장률 수치는 회사 공식 보도자료(salesforce.com) 기준으로 신뢰도 높음. 주가 반응폭(+22.6~23%)은 Yahoo Finance·Motley Fool·Seeking Alpha 등 복수 매체 교차 확인.",
        sources: [
        {title:"Salesforce Delivers Record Second Quarter Fiscal 2027 Results (Salesforce Newsroom)", url:"https://www.salesforce.com/news/press-releases/2026/08/26/fy27-q2-earnings/"},
        {title:"Stock Market Today, Aug. 27: Salesforce Surges 23% on Anthropic Partnership and Q2 Earnings Beat (Motley Fool)", url:"https://www.fool.com/coverage/stock-market-today/2026/08/27/stock-market-today-aug-27-salesforce-surges-23-on-anthropic-partnership-and-q2-earnings-beat/"},
        {title:"Salesforce soars 23% on earnings beat and AI partnership (Seeking Alpha)", url:"https://seekingalpha.com/news/4637700-salesforce-soars-23-on-earnings-beat-and-ai-partnership"},
        ],
      },
      {
        date: "2026-08-26",
        headline: "[방향성 체크] AI(Agentforce) 성장 증거 부족으로 애널리스트 연속 하향 - 낙폭과다가 정당화되는 우려 사례",
        importance: "medium",
        tone: "risk",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-05-27 FY27 1분기 매출·이익 모두 예상 상회했으나 연간 가이던스는 시장 기대보다 낮게 제시됐다.", "7/9 KeyBanc가 AI(Agentforce) 성장 둔화 우려로 투자의견을 하향했고, 7/22 Morgan Stanley가 목표주가를 35% 대폭 하향했다.", "'Agentforce가 실제로 성장을 견인한다는 증거가 부족하다'는 애널리스트 지적이 다수 나왔다.", "2026년 연초 이후 주가가 약 30~33% 하락, 다우존스 내 최악의 성과 종목으로 언급됐다."],
        why: ["회사의 핵심 성장 스토리(AI, Agentforce)에 대한 시장의 신뢰가 애널리스트들 사이에서 반복적으로 흔들리고 있다는 것은, 단순 밸류에이션 조정을 넘어서는 우려다."],
        beginner: ["회사가 AI로 새로운 성장동력을 만들겠다고 했는데, 전문가들이 '아직 그게 실제로 매출을 늘리고 있다는 증거가 안 보인다'고 계속 지적하고 있어요. 그래서 목표주가도 여러 번 낮아졌어요."],
        interpretation: "핵심 성장 스토리에 대한 의구심이 반복적으로 제기되고 있어, 낙폭과다 신호를 곧바로 매수 근거로 쓰기에는 리스크가 있다.",
        decision: "Agentforce의 실제 매출 기여가 숫자로 확인되기 전까지는 신중하게 접근할 것.",
        watch: ["2026-08-26 2분기 실적에서 Agentforce 매출 기여 공개 여부", "추가 애널리스트 등급 변동"],
        confidence: "애널리스트 하향은 다수 매체(Invezz, 24/7 Wall St, Yahoo Finance)가 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Salesforce beats on earnings and revenue but full-year guidance comes in light (CNBC)", url:"https://www.cnbc.com/2026/05/27/salesforce-crm-q1-earnings-report-2027.html"},
        {title:"Morgan Stanley Slashes Salesforce Price Target By 35% (24/7 Wall St)", url:"https://247wallst.com/investing/2026/07/22/morgan-stanley-slashes-salesforce-price-target-by-35/"},
        {title:"Salesforce's Agentforce Bet Made It the Dow's Worst Performer (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/salesforce-agentforce-bet-made-dow-083826022.html"},
        ],
      },
      {
        date: "2026-08-13",
        headline: "8/5 엔지니어링·고객성공 총괄 사장 사임 + COO 신규 선임, 8/26 실적 발표 앞두고 주가 널뛰기(연초대비 -30% → 저점대비 +31%)",
        coreAnalysis: "2026-08-05, 세일즈포스의 스리니 탈라프라가다(President 겸 Chief Engineering and Customer Success Officer)가 사임을 발표했고, 미겔 밀라노가 CEO 마크 베니오프 산하 COO로 승진함. 주가는 2026년 연초 대비 30% 넘게 하락했지만, 6월 22일 저점 이후로는 8월 26일 실적 발표를 앞두고 31% 반등한 상태. 컨센서스는 EPS $3.27(+12.4% YoY)·매출 $11.3B(+10.4% YoY)를 예상하고, 애널리스트 평균 목표가 $241.72는 현재가 대비 약 31% 상승여력을 내포함. UBS는 이 상황을 '소문에 사고 뉴스에 판다'는 전형적 패턴으로 진단하며, 강세론자는 AI 에이전트 제품 '에이전트포스'가 빠르게 수익화될지가 관건이라고 봄.",
        whyItMatters: "실적 발표를 3주 앞둔 민감한 시점에 엔지니어링과 고객성공을 동시에 총괄하던 고위 임원이 사임했다는 건, 시장이 가장 궁금해하는 '에이전트포스가 실제로 고객에게 잘 작동하고 있는가'라는 질문과 직접 관련된 자리라 실행 리스크에 대한 불확실성을 더함. 다만 이게 통상적인 조직개편인지 내부 갈등의 신호인지는 공개된 정보만으로는 판단할 수 없음 - 섣불리 결론짓지 않고 있는 그대로 표시함.",
        beginnerSummary: "세일즈포스의 고위 임원(기술개발과 고객관리를 총괄하던 사장급)이 8월 5일 회사를 떠난다고 발표했어요. 8월 26일 실적발표를 앞두고 있는 민감한 시점이라, 회사의 AI 제품(에이전트포스)이 잘 팔리는지 확인하는 이 시기와 맞물려 시장이 주목하고 있어요. 왜 떠나는지는 공개적으로 밝혀지지 않았어요.",
        confidence: "임원 교체는 회사 공식 발표 기준(신뢰도 높음) · 사임 배경(이유)은 공개되지 않아 확인 불가",
        sources: [
          {title:"Salesforce stock at a crossroads after 31% rally ahead of August earnings (Investing.com)", url:"https://www.investing.com/news/stock-market-news/salesforce-stock-at-a-crossroads-after-31-rally-ahead-of-august-earnings-93CH-4855018"},
          {title:"Salesforce Stock Tumbles 30% in 2026, But One Analyst Sees 117% Surge to $400 (BigGo Finance)", url:"https://finance.biggo.com/news/cf62cb06-9521-421e-ac09-7a83f248bd1c"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(3/5점) - PER이 자기 역사 대비 극단적으로 낮게 나오지만 계산 신뢰도가 낮아 밸류에이션 숫자보다 실적·리더십 변화를 봐야 함",
        view: "CRM은 눌림목 점수 3/5점(52주 고점대비 -26.3%, 200일선 부근)으로 매수 관심 구간이에요. PER(13.9배)이 3년 평균(48.3배)과 크게 차이 나는데, 이 종목은 PER 유지 시나리오의 기준가·하방 시나리오 값이 계산상 이례적으로 낮게 나와서(과거 이익이 크게 눌렸던 시기가 3년 평균에 섞인 영향으로 추정) 이번 조사에서는 밸류에이션 숫자 자체보다 '자기 역사 대비 PER이 낮다'는 방향성 정도만 참고하는 게 안전하다고 판단했어요. 재무는 Q2'26 매출 +13.3%·영업이익률 +1.3%p로 꾸준한 성장이고 FCF 마진(58.9%)이 이 워치리스트에서 손꼽히게 좋아요 - 소프트웨어 기업 특유의 높은 현금창출력이 확인돼요. 다만 최근 8/5에 엔지니어링·고객성공 총괄 사장이 사임했고 8/26 실적 발표를 앞두고 주가 변동성이 커진 상태예요(newsLog 참고). 컨센서스는 내년 매출·EPS 둘 다 +10%로 안정적인 성장을 예상하지만, 클라우드 소프트웨어 업계 전반이 AI 에이전트 경쟁으로 재편되는 중이라 CRM의 아젠트포스(Agentforce) 등 AI 제품 성과가 다음 실적의 핵심 관전 포인트예요.",
        increaseIf: [
          "8/26 실적에서 매출·구독갱신율(핵심 SaaS 지표)이 견조하게 나올 때",
          "아젠트포스 등 AI 제품의 매출 기여가 구체적 숫자로 확인될 때",
          "경영진 공백(엔지니어링 총괄)이 매끄럽게 채워질 때",
        ],
        wrongIf: [
          "8/26 실적에서 매출 성장률이 한 자릿수로 둔화되거나 가이던스가 하향될 때",
          "경영진 이탈이 이어지며 실행력에 대한 우려가 커질 때",
          "FCF 마진이 눈에 띄게 낮아질 때(현재 58.9%는 이례적으로 높은 수준)",
        ],
        watchNext: [
          "8/26 실적 발표 - 이 종목의 가장 가까운 확인 시점",
          "아젠트포스 매출 기여 공개 여부",
          "엔지니어링·고객성공 총괄 후임 인선",
        ],
        confidence: "매출·영업이익률·FCF 수치는 SEC 공시 기반 캐시 데이터 · 경영진 사임 사실관계는 확인됨 · PER 유지 시나리오 계산값은 이 종목에 한해 신뢰도가 낮다고 판단해 방향성만 참고(수치를 그대로 믿지 말 것) · 8/26 실적이 임박한 시점이라 이 판단은 곧 갱신이 필요함",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-04-30 마감 분기 (FY27 1분기, 2026-05-27 발표)",
        headline: "1분기 매출 111억 달러로 전년 대비 13%(환율 제외 12%) 늘며 시장 예상을 웃돌았고 비GAAP EPS도 3.88달러로 컨센서스 3.12달러를 크게 상회했지만, 2분기(113.5억 달러) 및 FY27 연간(462억 달러) 매출 가이던스 상단이 컨센서스(각각 113.6억, 461.2억 달러)에 못 미쳐 발표 후 시간외 주가 반응은 미온적이었어요.",
        oneTime: "비GAAP 조정 폭이 꽤 커요 — 1분기 스톡기반보상(SBC)만 8.7억 달러(구조조정 관련 제외)에, 별도로 구조조정·인수 관련 비용 9600만 달러가 더 반영됐어요. 그 결과 GAAP 영업이익률(21.1%)과 비GAAP 영업이익률(34.8%) 사이 격차가 13.7%p나 벌어지고, GAAP EPS(2.42달러)가 비GAAP EPS(3.88달러)의 62%밖에 안 돼요.",
        coreRead: "핵심은 Agentforce예요 — 출시 14개월 만에 연환산매출(ARR) 12억 달러를 돌파(+205% YoY)했고 Data Cloud와 합치면 34억 달러(+200% YoY)까지 커졌어요. 다만 전체 고객 기반 대비 실제 도입률은 아직 한 자릿수(약 6%)라는 추정도 같이 나와 초기 단계 느낌이에요. GAAP 이익보다 훨씬 덜 왜곡된 지표인 영업활동현금흐름은 67억 달러(+3% YoY), 잔여계약이행의무(cRPO)는 336억 달러(+14% YoY)로 핵심 구독 비즈니스 자체는 여전히 견조해 보여요. 다만 실적콜에서 마케팅·커머스 클라우드 부진, Tableau 매출 둔화, Informatica 인수 관련 라이선스 매출 변동성을 '가이던스를 끌어내리는 세 가지 요인'으로 콕 집어 언급한 건 성장 둔화 신호로 봐야 해요.",
        forecast: "다음 실적(FY27 2분기, 2026-07-31 마감분기, 통상 9월 초 발표)에서 매출은 가이던스 상단인 113.5억 달러 안팎에서 나오고, Agentforce+Data Cloud 합산 ARR은 40억 달러를 넘어설 것으로 예상해요. 반면 마케팅·커머스 부문 매출 증가율은 한 자릿수 초반에 머물러 전체 성장률(10~11%)을 계속 끌어내릴 가능성이 높다고 봐요 — 만약 이 부문이 두 자릿수 성장으로 반등하거나 전체 매출 성장률이 12%를 넘으면 이 예측은 틀린 걸로 봐주세요.",
        confidence: "매출·GAAP/비GAAP EPS·영업이익률·SBC·영업현금흐름·RPO·가이던스 수치는 회사의 공식 실적 발표(SEC 8-K 첨부 보도자료)에 나온 확인된 사실이에요. Agentforce 실제 고객 도입률(~6%)이나 다음 분기 전망 부분은 여러 매체 해석과 제 추정이 섞여 있어 확정치는 아니라는 점 감안해주세요.",
        sources: [
          {
            title: "Salesforce Delivers Record First Quarter Fiscal 2027 Results",
            url: "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000125/crm-q1fy27xexhibit991.htm",
          },
          {
            title: "Salesforce Delivers Record First Quarter Fiscal 2027 Results",
            url: "https://www.salesforce.com/news/press-releases/2026/05/27/fy27-q1-earnings/",
          },
          {
            title: "Salesforce Q1 FY2027 earnings beat, guidance disappoints",
            url: "https://finance.yahoo.com/markets/stocks/articles/salesforce-q1-fy2027-earnings-beat-114153377.html",
          },
          {
            title: "Salesforce beats on earnings and revenue but full-year guidance comes in light",
            url: "https://www.cnbc.com/2026/05/27/salesforce-crm-q1-earnings-report-2027.html",
          },
          {
            title: "Agentforce Hits $1.2B ARR at 6% Customer Adoption",
            url: "https://ivristech.com/salesforce-q1-fy27-agentforce-arr-adoption-gap/",
          },
          {
            title: "Salesforce raises full-year revenue guidance as 'Agentforce' ARR hits $1.2 billion",
            url: "https://finance.yahoo.com/markets/stocks/articles/salesforce-raises-full-revenue-guidance-150244428.html",
          },
        ],
      },
    ],
    role: {
      tags: ["기업용 SaaS(영업·서비스·마케팅 클라우드)", "AI 에이전트(Agentforce)"],
      stars: 3,
      note: "CRM(고객관계관리) 소프트웨어 시장의 오랜 리더로 여러 클라우드에 걸쳐 매출이 다각화돼 있어요. 다만 마이크로소프트 Dynamics·허브스팟 등과 경쟁이 심한 분야고, 차세대 성장동력인 AI 에이전트(Agentforce)가 얼마나 빠르게 수익화될지가 다음 실적의 핵심 관전포인트예요.",
    },
  },
  AMD: {
    updated: "2026-08-20",
    customers: [
      "클라우드·AI 기업(데이터센터 부문, 매출 최대 비중) - EPYC 서버CPU·Instinct AI가속기, 메타·오픈AI·오라클 등에 'Helios' AI시스템 출하 시작(newsLog 참고)",
      "PC 제조사·소비자(클라이언트 부문) - Ryzen 프로세서",
      "게임기 제조사(게이밍 부문) - Radeon GPU + 콘솔용 반주문형(세미커스텀) 칩",
      "산업·통신 고객(임베디드 부문) - 적응형·임베디드 컴퓨팅 플랫폼",
    ],
    strengths: [
      "데이터센터 매출이 압도적으로 성장(2026 2분기 +107% YoY, $67억) - 전체 성장을 견인하는 핵심 엔진",
      "클라이언트(PC) 부문도 견조(2분기 +23%) - 데이터센터 한 곳에 의존하지 않는 사업 균형",
      "엔터프라이즈 신규 고객 확대 중(금융·헬스케어·산업·디지털인프라 분야) - 대형 고객 외 중견기업까지 저변 확대",
    ],
    risks: [
      "⚠️ 어닝비트에도 주가가 하락하는 패턴 반복 - 이미 높은 기대치가 선반영돼 있다는 신호(상세는 아래 newsLog 참고)",
      "게이밍 부문 매출 감소(2분기 -31%, 반주문형 매출 감소가 원인) - 데이터센터 외 사업의 변동성",
      "엔비디아라는 압도적 1위 경쟁자가 있는 AI가속기 시장에서 점유율 확대가 관건",
    ],
    sources: [
      {title:"AMD Q2 2026 slides: data center revenue doubles, stock falls after hours (Investing.com)", url:"https://www.investing.com/news/company-news/amd-q2-2026-slides-data-center-revenue-doubles-stock-falls-after-hours-93CH-4836240"},
      {title:"AMD Reports Second Quarter 2026 Financial Results (AMD IR, 공식)", url:"https://ir.amd.com/news-events/press-releases/detail/1295/amd-reports-second-quarter-2026-financial-results"},
    ],
    newsLog: [
      {
        date: "2026-08-13",
        headline: "2분기 실적 어닝비트(데이터센터 매출 +107%)에도 시간외 주가 하락 + 2028년 AI가속기 시장전망 5천억→1.4조달러로 대폭 상향 + 오라클·메타·오픈AI向 첫 랙단위 AI시스템 'Helios' 출하 시작",
        coreAnalysis: "AMD의 2026년 2분기(8/4 발표) 매출 $11.5B·순이익 $2.3B·EPS $1.38로 컨센서스를 상회했으나, 정규장에선 올랐던 주가가 시간외 거래에서 오히려 하락함. 데이터센터 부문 매출은 $6.7B로 전년비 +107%(CEO 리사 수: '기록적인 매출과 수익성'). 회사는 2028년 AI 반도체 포함 전체 반도체 시장 규모 전망을 기존 연 5천억달러에서 연 1.4조달러(AI가속기만)로 크게 상향했고, 첫 랙단위 AI 시스템 'Helios'를 이번 분기부터 메타·오픈AI·오라클 등에 출하하기 시작함. 실적 발표 후 여러 애널리스트가 목표가를 큰 폭 상향(Argus $450→$625, Rosenblatt $665→$700).",
        whyItMatters: "'어닝비트했는데 주가는 하락'하는 패턴은 이번 조사에서 LRCX·KLAC에서도 똑같이 나타남(아래 참고) - AI·반도체 관련주 전반이 이미 매우 높은 기대치를 선반영하고 있어서, 웬만큼 좋은 실적으로는 부족하고 '다음 성장동력이 실제로 확인돼야' 주가가 반응한다는 뜻으로 해석됨. Helios가 출하되는 고객사(메타·오픈AI·오라클)는 이 프로젝트가 이미 부채·설비투자 부담을 추적 중인 회사들(오라클 항목 참고)이라, 만약 이 고객사들이 AI 설비투자를 줄이면 AMD의 데이터센터 성장엔진도 직접 타격을 받는 연결고리가 있음.",
        beginnerSummary: "AMD가 2분기 실적을 예상보다 잘 냈는데도(데이터센터 매출이 2배 넘게 늘었어요) 주가는 오히려 떨어졌어요 - 이미 기대치가 너무 높아서 '좋은 실적' 정도로는 만족을 못 시킨 거예요. 회사는 앞으로 AI 반도체 시장이 훨씬 더 커질 거라고 전망을 크게 올렸고, 메타·오픈AI·오라클 같은 큰 회사들에 AI 서버 장비를 납품하기 시작했어요. 다만 이 고객들이 AI에 쓰는 돈을 줄이면 AMD도 같이 영향받을 수 있다는 점은 기억해두세요.",
        confidence: "실적·가이던스 수치는 회사 공식 발표 기준(신뢰도 높음) · 주가 하락 원인('기대치 선반영') 해석은 Claude의 판단(신뢰도 중간)",
        sources: [
          {title:"AMD Reports Second Quarter 2026 Financial Results (AMD IR, 공식)", url:"https://ir.amd.com/news-events/press-releases/detail/1295/amd-reports-second-quarter-2026-financial-results"},
          {title:"AMD earnings report Q2 2026 (CNBC)", url:"https://www.cnbc.com/2026/08/04/amd-earnings-report-q2-2026.html"},
        ],
      },
      {
        date: "2026-08-20",
        headline: "$4.75B 규모 선순위채 발행 - 일반 운영자금 목적, 주가는 오히려 +5.6% 상승",
        coreAnalysis: "AMD가 $4.75B 규모의 선순위채(senior notes)를 발행했다(결제일 8/17 예정). 회사는 조달한 현금을 일반 기업 운영 목적으로 사용할 계획이라고 밝혔다. 통상 대형 채권 발행은 주가에 부담(이자비용 증가, 재무 레버리지 확대)으로 작용하는 경우가 많은데, 이번엔 오히려 발표 당일 주가가 약 +5.6% 상승했다 - AI 수요 모멘텀에 대한 시장 신뢰가 채권 발행의 부담보다 우세했던 것으로 보인다.",
        whyItMatters: "위 INTC(유상증자)·MRVL·AVGO 등 이 워치리스트의 여러 반도체 기업이 같은 시기에 대규모 자금조달(주식 또는 채권)에 나서고 있다는 공통된 흐름 중 하나로 볼 수 있다 - AI 인프라 투자 경쟁이 격화되면서 반도체 기업들이 앞다퉈 실탄을 확보하는 국면으로 해석할 여지가 있다. 다만 INTC의 유상증자(지분 희석)와 달리 AMD는 채권(부채) 발행이라 기존 주주 지분율에는 영향이 없고, 대신 향후 이자비용 부담이 재무제표에 반영된다는 점이 다르다. 구체적인 만기·금리 조건은 이번 조사에서 확인하지 못해 다음 갱신 때 보완이 필요하다.",
        beginnerSummary: "AMD가 회사 운영자금을 마련하려고 약 47억5천만 달러어치의 채권(회사가 돈을 빌리고 나중에 갚기로 하는 증서)을 발행했어요. 보통 이런 소식은 회사가 빚을 늘린다는 뜻이라 주가에 부담이 될 수 있는데, 이번엔 오히려 주가가 5.6% 올랐어요 - AI 반도체 수요에 대한 투자자들의 믿음이 그만큼 강했다는 뜻으로 보여요.",
        confidence: "채권 발행 규모·발표 당일 주가 반응은 매체 보도 기준(신뢰도 높음) · 구체적 만기·금리 조건은 이번 조사에서 미확인(다음 갱신 때 보완 필요)",
        sources: [
          {title:"AMD Stock Jumps 5.6% While $4.75 Billion Debt Deal Lands (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/amd-stock-jumps-5-6-191626837.html"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "관망 - 데이터센터 매출이 3자리수 성장인데도 주가가 안 따라가는 '기대치 선반영' 패턴, 반도체장비 3사와 유사한 흐름",
        view: "AMD는 눌림목 점수 1/5점(52주 고점대비 -11.5%, 200일선 위)으로 저가 신호는 아니에요. PER(68.0배)이 3년 평균(160.3배)보다는 낮지만 절대 수준으로는 여전히 높은 편이에요. 재무는 Q2'26 매출 +50.1%·영업이익률 +19.0%p로 뚜렷한 개선이고, 특히 데이터센터 매출이 +107%로 급성장했는데도 어닝비트 발표 후 주가가 오히려 하락했다는 점(newsLog)이 눈에 띄어요 - 이건 시장이 이미 그 이상의 성장을 기대하고 있었다는 뜻으로, 위 반도체장비 3사(AMAT·LRCX·KLAC)에서도 똑같이 관찰된 '실적은 좋은데 밸류에이션 재평가로 주가가 눌리는' 패턴과 성격이 비슷해요. Helios AI시스템을 오라클·메타·오픈AI에 출하하기 시작했다는 점은 엔비디아 의존도가 높은 AI 인프라 시장에 실제 대안 공급자로 자리잡기 시작했다는 신호로 볼 수 있어요. 컨센서스는 내년 매출 +72%·EPS +104%로 매우 공격적인 성장을 기대하고 있어서, 이 기대치를 실제로 채울 수 있는지가 핵심이에요.",
        increaseIf: [
          "데이터센터 매출 성장률이 컨센서스 기대(+72%)에 부합하거나 상회할 때",
          "Helios 등 신규 AI 제품의 고객사 확대(오라클·메타·오픈AI 외 추가)가 확인될 때",
          "가격이 눌려 눌림목 점수가 2점 이상으로 올라올 때",
        ],
        wrongIf: [
          "데이터센터 매출 성장률이 컨센서스에 못 미칠 때(어닝비트에도 주가가 안 오르는 패턴이 반복되면 기대치가 이미 너무 높다는 신호)",
          "엔비디아 대비 점유율 확보가 정체될 때",
        ],
        watchNext: [
          "다음 분기 데이터센터 매출 성장률",
          "Helios 시스템 추가 고객사 확보 여부",
          "엔비디아 대비 AI 가속기 시장 점유율 변화",
        ],
        confidence: "매출·영업이익률 수치는 SEC 공시 기반 캐시 데이터 · 어닝비트 후 주가하락·Helios 출하 개시는 복수매체 확인(newsLog 참고) · '기대치 선반영' 해석은 Claude의 정성적 판단",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (FY2026 2분기)",
        headline: "매출 115.4억 달러(+50% YoY)로 컨센서스 112.8억 달러 상회, 비GAAP EPS $1.66도 예상치 $1.62를 이겼고 3분기 매출가이던스(130억±3억 달러)도 컨센서스 125억 달러를 웃돌았지만, GAAP·비GAAP 마진이 각각 54%·56%로 시장 기대(56% 안팎)를 밑돌면서 실적 발표 후 주가가 시간외 8~9% 하락했어요.",
        oneTime: "이번 분기엔 뚜렷한 일회성 항목이 없어요. 노트에 언급된 수출규제 관련 8억 달러 재고충당금은 전년동기인 2025년 2분기 실적에 반영됐던 것이고, 2026년 2분기 GAAP-비GAAP 차이(순이익 22.97억 달러 vs 27.60억 달러)는 주식보상비용·인수 관련 무형자산 상각 같은 통상적 항목 위주예요.",
        coreRead: "데이터센터 매출이 67.2억 달러(+107% YoY, 전체 매출의 58%)로 성장 엔진 역할을 계속하고 있고, EPYC·Instinct GPU 수요가 견조해요. 다만 CFO Jean Hu가 마진 하락 원인으로 'Helios 램프'를 직접 지목했는데, 랙당 500만~550만 달러짜리 Helios 랙스케일 시스템(Anthropic·Meta·Microsoft·OpenAI·Oracle향)이 3분기부터 본격 양산에 들어가면서 초기 생산원가와 미성숙한 GPU 수율이 마진을 눌렀다는 거예요. 매출 성장은 확실히 진짜인데, 비GAAP 마진 가이던스가 3분기에도 56%로 '유지'만 되고 개선되지 않은 게 시장이 실망한 포인트예요 — 즉 지금 로컬데이터의 FY2027 EPS $15.49(전년비 2배 이상) 컨센서스는 매출 볼륨 증가뿐 아니라 이 마진 개선까지 함께 가정하고 있다는 뜻이라 달성 난이도가 꽤 높아 보여요.",
        forecast: "3분기(9월 마감) 실적에서 매출은 가이던스 상단(약 133억 달러) 근처이거나 이를 넘어설 가능성이 높다고 봐요(최근 분기 연속 컨센서스 상회 흐름). 하지만 비GAAP 마진이 57% 이상으로 뚜렷하게 개선되지 못하면, 매출을 이겨도 주가는 이번처럼 또 한 번 실적 발표 직후 하락할 가능성이 크다고 예상해요. Helios 수율 이슈가 지속되면 마진 개선은 4분기 이후로 밀릴 수 있어요.",
        confidence: "매출·EPS·가이던스 숫자와 데이터센터 매출 성장률, 마진 하락 원인(Helios 램프·GPU 수율)에 대한 CFO 발언은 AMD 공식 보도자료 및 실적콜 인용에 기반한 확인된 사실이에요. 컨센서스 대비 비교치와 '주가 하락 이유' 해석은 매체(TradingKey 등) 분석을 참고했고, forecast 항목은 제 개인적 추론이라 틀릴 수 있어요.",
        sources: [
          {
            title: "AMD Reports Second Quarter 2026 Financial Results :: Advanced Micro Devices, Inc. (AMD)",
            url: "https://ir.amd.com/news-events/press-releases/detail/1295/amd-reports-second-quarter-2026-financial-results",
          },
          {
            title: "AMD Beat on Revenue, Profit, and Guidance — So Why Did the Stock Drop 7%?",
            url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262074451-amd-q2-2026-earnings-double-beat-stock-falls-tradingkey",
          },
          {
            title: "AMD Q2 2026: Record $11.5B Revenue, Data Center Up 107%, Stock Pulls Back to $485",
            url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262088719-amd-q2-2026-earnings-data-center-symmetrical-triangle-tradingkey",
          },
          {
            title: "AMD Q2 2026: The Gross Margin Guide Stayed at 56% and the Stock Lost 8% | k4i.com",
            url: "https://k4i.com/amd-q2-2026-the-gross-margin-guide-stayed-at-56-and-the-stock-lost-8/",
          },
          {
            title: "AMD Reports Second Quarter 2026 Earnings - AMD Newsroom",
            url: "https://newsroom.amd.com/news/amd-2q-2026-earnings/",
          },
        ],
      },
    ],
    role: {
      tags: ["서버 CPU(EPYC)", "AI 가속기(Instinct)", "PC(Ryzen)", "게임 GPU(Radeon)"],
      stars: 3,
      note: "엔비디아 독주 체제에서 AI 가속기의 실질적인 대안으로 자리잡고 있어요. 데이터센터 매출이 2분기 +107%로 급성장했고 메타·오픈AI·오라클에 'Helios' AI시스템 출하를 시작했지만, 어닝비트에도 주가가 하락하는 패턴이 반복될 만큼 여전히 엔비디아 대비 점유율이 작은 2번째 대안 위치예요.",
    },
  },
  AVGO: {
    // 2026-08-13: newsLog 조사 당시엔 개별적으로 중요한 사건이 없어 뉴스 로그는 안 만들었지만
    // (이미 알려진 AI매출 성장 추세뿐이었음), 사업 핵심 요약(customers/strengths/risks)은
    // 뉴스 이벤트와 무관하게 항상 유효한 정적 정보라 여기서 별도로 작성함.
    // 2026-08-20: 아래 risks에 이미 예견돼 있던 "구글 등 핵심 고객의 공급망 다변화" 리스크가
    // 실제 사건(마벨-구글 TPU 계약)으로 확인돼 newsLog 추가함 - dashboard_improvement_plan_3.md
    // item2/7 대응(WebSearch로 직접 조사, 자동 생성 아님).
    updated: "2026-08-20",
    customers: [
      "클라우드·하이퍼스케일러(반도체 부문 최대 고객) - AI 커스텀칩(맞춤형 ASIC/TPU류) 설계, 핵심 고객사 단 6곳에 집중",
      "통신사·네트워크 장비사 - 이더넷 스위칭/라우팅 ASIC, 무선(5G)·광대역 부품",
      "기업 IT 부서(VMware, 2023년 인수) - 가상화·프라이빗클라우드 소프트웨어, AI 워크로드 확장용 VMware Cloud Foundation",
    ],
    strengths: [
      "AI 반도체 매출 급성장(2026 1분기 +106% YoY $84억, 3분기 가이던스 $160억·+200%대) - 커스텀 AI가속기·AI네트워킹 양쪽에서 고성장",
      "VMware 인수로 소프트웨어 매출 안정화(2분기 약 $72억 전망) - 반도체 사이클 변동성을 완화하는 역할",
      "반도체(팹리스 설계) + 소프트웨어(인프라) 두 축의 수익 다각화",
    ],
    risks: [
      "⚠️ 고객 집중 리스크가 매우 큼 - AI 매출 대부분이 핵심 고객 단 6곳에 의존, 유통사 한 곳이 매출의 42%·상위 5개 고객이 약 50%를 차지",
      "⚠️ 2026-08-19 실현: 구글이 마벨과도 TPU 커스텀칩 계약을 체결하며 브로드컴의 단독 공급 지위가 깨짐 - 자세한 내용은 아래 newsLog 참고",
      "커스텀칩(TPU류) 비중이 커질수록 마진 압박 우려, 밸류에이션도 부담스러운 수준(선행 PER 약 39배)",
    ],
    sources: [
      {title:"The Real Risk Inside Broadcom Stock (Trefis)", url:"https://www.trefis.com/stock/avgo/articles-v3/607057/the-real-risk-inside-broadcom-stock/2026-07-14"},
      {title:"Broadcom Q2 FY 2026: VMware Stability Supports AI-Led Semiconductor Expansion (Futurum Group)", url:"https://futurumgroup.com/insights/broadcom-q2-fy-2026-vmware-stability-supports-ai-led-semiconductor-expansion/"},
    ],
    newsLog: [
      {
        date: "2026-09-02",
        headline: "Broadcom Q3 FY2026 실적 발표 - AI칩 매출 $16.7B(YoY +221%), 역대 분기 매출 신기록 $29.6B",
        facts: ["Broadcom이 2026-09-02(미국 현지시간) Q3 FY2026 실적을 발표했다. 종합 매출 $29.6B(YoY +86%, 기대 $29.36B 상회), 비GAAP EPS $3.32(기대 $3.24 상회)", "AI 칩 매출은 $16.7B로 YoY +221%, QoQ +54%를 기록했고, 전체 매출의 56%를 차지했다 (전년 동기 19%에서 급증)", "비AI 칩 매출은 여전히 견조해 $8.5B(YoY +29%), 그 외 부문(네트워킹 등)은 $4.4B(YoY -15% 정체) 기록", "Q4 가이던스: 종합 매출 $34.8B(YoY +93%), AI칩 매출 $21.7B(YoY +236%)로 제시 - 분기마다 AI 비중이 50%+로 계속 오를 것을 시사", "회사는 '9분기 연속 실적 비트'를 기록했으며, 이는 월가 기대치를 지속적으로 초과하는 추세를 의미한다"],
        why: ["AI 칩 매출 YoY +221%는 단순한 '성장'이 아니라 '산업 구조 변화 속도'를 의미한다. 불과 3개월 전 분기(Q2)와 비교해도 QoQ +54%로 가속도가 붙고 있으며, Q4 가이던스 AI매출 $21.7B는 Q3 대비 +30%로 또 다시 급증할 것을 예고한다.", "AI 칩이 전체 매출의 56%에 달한다는 것은, 더 이상 Broadcom이 '종합 반도체 회사'가 아니라 '사실상 AI 인프라 회사'로 변모했다는 뜻이다. 이는 비AI 부문의 정체(네트워킹 -15%)와 대비되어 더욱 명확해진다.", "Q4 가이던스에서 AI매출 $21.7B는 Q3의 $16.7B 대비 +30% 성장을 의미하는데, 이 성장률이 계속 유지되면 반년 뒤 AVGO의 분기 AI매출이 $30B를 넘을 수 있다는 뜻이다 - 현재 NVDA의 전체 분기 매출($96.2B) 수준의 1/3을 AI칩 하나에서 벌어들이는 구조다.", "주가가 시간외 하락한 것은 '실적이 나쁜 것'이 아니라 '예상치를 이미 너무 높게 설정했기 때문'이며, 이는 월가가 AI 칩 기업에 대해 얼마나 높은 기대를 걸어두었는지를 반증한다. 반대로 Q4 가이던스가 기대를 크게 웃돈다면 추후 반등 여력이 있을 수 있다."],
        beginner: ["Broadcom은 반도체 회사인데, 특히 AI 서버에 들어가는 칩을 많이 만들어요.", "이번 분기 매출이 $29.6B(역대 최대)였는데, 이 중 AI 칩이 $16.7B를 차지했어요. 지난해 같은 분기에는 AI 칩이 $5B 정도였으니까, 1년 사이에 3배 이상 뛴 거예요.", "다음 분기(Q4)에는 AI 칩 매출이 또 $21.7B까지 올 것 같다고 회사가 예상했어요. 계속 빨라지는 추세인 거죠.", "주가가 발표 직후 잠깐 떨어진 이유는 '실적이 나빠서'가 아니라 '기대치가 이미 너무 높아서' 더 이상 놀랄 게 없다는 뜻이에요. 반대로 앞으로 몇 분기간 이 성장을 유지하면 주가가 다시 오를 수 있어요."],
        watch: ["Q4 가이던스 달성 여부 (AI매출 $21.7B 실제 기록 확인)", "Q4 실적 발표 이후 경쟁사(NVDA, AMD 등)의 AI 칩 성장률과 비교 분석", "AI 칩 고객 집중도 (특정 클라우드 회사 의존도) 변화 추이", "마진율 변화 (AI 칩 고성장 속에서 마진 유지 또는 개선 여부)", "비AI 부문(네트워킹 -15%, 그 외)의 회복 신호 여부"],
        interpretation: "Broadcom의 Q3 실적과 Q4 가이던스는 AI 인프라 투자 사이클의 지속·가속 신호를 명확히 보여준다. 단순한 '한 회사의 좋은 실적'이 아니라 (1) NVIDIA와는 다른 포지션(칩셋·연결성 중심)에서 AI 수요 급증을 뼈저리게 포착 중, (2) 이 성장이 최소 향후 2~3분기는 계속될 것 같다는 시장 신호를 담고 있다. 다만 정규장 주가 반응은 '시간외 하락'으로 시작해, 실제로는 '기대가 너무 높아서 반응이 제한적'이라는 보수적 신호다.",
        decision: "Q3 실적 자체는 긍정적이나, 주가 반응의 약함(시간외 하락 개시)은 (1) AI 성장이 이미 충분히 반영됐다는 신호, (2) 월가 컨센서스의 '기대 과다'에 대한 경고 신호로 해석된다. 단기적으로는 정규장 오픈 후 실제 주가 반응을 확인할 필요가 있으며, 중기적으로는 Q4 가이던스 달성 여부가 판단 기준이 될 것. 워치리스트 내 경쟁사(AMD, ARM, MRVL 등)도 AVGO의 이 성장세에 얼마나 뒤따라가는지 확인할 포인트.",
        confidence: "Q3 매출·EPS·Q4 가이던스는 Broadcom 공식 SEC 제출 자료(8-K) 및 earnings call 기반이라 신뢰도 높음. 실제 비즈니스 성과(AI 칩 YoY +221%, Q4 가이던스)는 확실함. 다만 주가 반응 해석('기대 과다 vs. 실망')에는 해석 여지 있음.",
        sources: [
          { title: "Broadcom Inc. Announces Third Quarter Fiscal Year 2026 Financial Results (Broadcom Investor Relations)", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial" },
          { title: "Broadcom's Q3 Beats the Street — But Only Just Barely (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/broadcom-q3-beats-street-only-155715232.html" },
          { title: "Broadcom Q3 2026 Earnings Call Transcript (Benzinga)", url: "https://www.benzinga.com/news/26/09/61592658/broadcom-q3-2026-earnings-call-transcript" },
          { title: "Broadcom (AVGO) Q3 earnings report 2026 (CNBC)", url: "https://www.cnbc.com/2026/09/02/broadcom-avgo-q3-earnings-report-2026.html" },
        ],
      },
      {
        date: "2026-09-02",
        headline: "Q3 FY2026 실적 발표 - 매출·EPS 컨센서스 상회했으나 시간외 -4%대 하락, Q4 매출 가이던스가 시장 기대 소폭 하회",
        importance: "high",
        tone: "mixed",
        horizon: "단기(9/3 정규장 반응·가이던스 신뢰 회복 여부)",
        facts: ["Broadcom이 2026-09-02(현지시간 수요일) 정규장 마감 후 Q3 FY2026(8월 2일 마감) 실적을 발표했다 - 매출 $295.91억(YoY +86%), 비GAAP EPS $3.32(예상 $3.24 상회), GAAP EPS $2.68(순이익 $130.88억, YoY +216%).", "반도체솔루션 부문 매출은 $208.39억(+127% YoY, 전체 매출의 70%)으로, 이 중 AI 반도체 매출만 $167억(+221% YoY, 전분기 대비 +54%)을 기록했다. 인프라소프트웨어 부문 매출은 $87.52억(+29% YoY)으로 컨센서스($88.2억)를 소폭 하회했다.", "비GAAP 영업이익은 $200.95억(+92% YoY, 영업이익률 약 68%), 잉여현금흐름은 $136.65억(매출의 46%)을 기록했다.", "Q4(11월 1일 마감) 가이던스로 매출 약 $348억(+93% YoY, 애널리스트 컨센서스 약 $350억에 소폭 미달), 비GAAP 영업이익률 66%(전년 동기와 동일)를 제시했다. CEO 혹 탄은 AI 반도체 매출이 Q4에 $217억(+236% YoY)까지 가속될 것이라고 밝혔다.", "실적 발표 직후 시간외 주가는 정규장 종가($367.24) 대비 약 -3.6%~-5% 하락했다 - 매출·EPS 모두 상회했지만 Q4 매출 가이던스가 시장 기대에 소폭 못 미친 점이 실망 매물을 촉발했다.", "실적콜에서 혹 탄 CEO는 Anthropic이 2027년 브로드컴의 최대 커스텀 XPU(AI가속기) 고객으로 부상해 2028년까지 그 지위를 유지할 것('on track')이라고 언급했다 - 8/20 발표된 마벨-구글 TPU 계약 이후 제기된 고객 다변화 우려에 대한 간접적 대응 성격.", "혹 탄 CEO는 이번 콜에서 AI 반도체 매출 다년간 로드맵을 재확인했다 - FY2026 약 $580억(가이던스) → FY2027 약 $1,150억(2배 확대, 공급망 기준 확정치) → FY2028 약 $2,300억(추가 2배)까지 성장할 것으로 제시했다. 실제 수요는 이 수치를 상회하지만 현재는 확보된 공급 능력 기준의 보수적 전망이라고 강조했다."],
        why: ["매출·EPS 모두 컨센서스를 상회한 어닝비트였음에도 주가가 하락한 이유는 Q4 매출 가이던스($348억)가 애널리스트 컨센서스에 소폭 못 미쳤기 때문 - AI 반도체 고성장(+200%대)에 대한 기대가 이미 주가에 상당 부분 반영된 상태라, '충족'만으로는 부족하고 '상회'가 필요했던 상황.", "인프라소프트웨어 매출도 컨센서스를 하회하며, 지난 8/26 워치리스트에 기록됐던 'AI 외 사업 성장 둔화' 우려가 재확인됐다.", "Anthropic 관련 코멘트는 있었지만 구글 공급망 다변화(마벨 진입) 관련 구체적 언급은 이번 발표에서 뚜렷이 확인되지 않아, 8/20 이후 이어진 고객 집중 리스크 우려가 완전히 해소되지는 않은 상태."],
        beginner: ["브로드컴이 지난 3개월 성적표를 냈는데, 매출도 이익도 예상보다 잘 나왔어요(어닝비트). 그런데 주가는 시간외 거래에서 4~5% 정도 떨어졌어요.", "이유는 '앞으로 3개월(4분기) 전망치'가 시장이 기대한 것보다 아주 살짝 낮았기 때문이에요. AI 칩 매출이 여전히 엄청나게 늘고 있지만(+221%), 이미 주가에 그런 높은 기대가 다 반영돼 있어서 '기대만큼'만 해도 아쉽게 받아들여진 거예요.", "시험에 비유하면 90점을 받았는데 다들 95점을 기대하고 있었다면, 좋은 점수여도 실망하는 것과 비슷해요. 회사 자체의 사업은 여전히 잘 되고 있다는 점이 중요해요."],
        interpretation: "이번 실적은 매출·EPS 모두 컨센서스를 상회한 견조한 결과였으나, Q4 매출 가이던스가 시장 기대에 소폭 못 미치면서 '높은 눈높이'를 완전히 충족시키지는 못했다. AI 반도체 매출(+221%, Q4 가이던스 +236%)은 여전히 고성장 궤도를 유지하고 있어 펀더멘털 훼손으로 보기는 어렵고, 이번 하락은 8/20 마벨-구글 계약 이후 이어진 고객 다변화 우려와 결합된 밸류에이션 조정 성격에 가깝다. 앞으로의 방향성은 다음 실적(4Q FY2026, 2026년 12월 초 발표 예상)이 분수령이 될 가능성이 높다 - 이번에 제시한 AI 반도체 매출 가이던스($217억)와 FY2027 로드맵($1,150억)을 실제로 상회하면 이번 조정은 일시적 밸류에이션 눈높이 조정으로 끝나고 주가 리레이팅 여지가 생기지만, 미달이 반복되면 '고성장 프리미엄'이 계속 깎이는 하향 추세로 이어질 수 있다. 즉 지금은 추세 전환이 아니라, 다음 분기 실적으로 방향이 갈리는 갈림길 구간으로 본다.",
        decision: "실적 자체(매출·EPS·AI반도체 성장률)는 견조하므로 이번 시간외 하락만으로 매도 근거를 삼기보다, 9/3 미국 정규장의 실제 종가 반응과 애널리스트 목표주가 조정 방향을 확인한 뒤 판단할 것.",
        watch: ["9/3 미국 정규장에서의 실제 종가 반응(시간외 낙폭 유지·축소 여부)", "애널리스트 목표주가 조정 방향 및 컨센서스 변화", "Q4 실제 AI반도체 매출이 가이던스($217억)를 달성·초과하는지", "인프라소프트웨어 부문 성장률(Q3 +29%, 컨센서스 소폭 하회) 개선 여부", "마벨-구글 커스텀칩 경쟁 관련 후속 코멘트 및 구글 매출 기여도 변화"],
        confidence: "매출·EPS·세그먼트별 수치(반도체솔루션 $208.39억, 인프라소프트웨어 $87.52억, AI반도체 $167억)와 Q4 가이던스는 Broadcom 공식 보도자료(PRNewswire/investors.broadcom.com) 기준으로 신뢰도 높음. 시간외 주가 하락폭(-3.6~-5%)과 컨센서스 대비 미달 해석은 CNBC·Yahoo Finance 등 복수 매체 보도 기준이며, 9/3 정규장 실제 반응은 이 노트 작성 시점(발표 다음날 개장 전) 기준 아직 미확인.",
        sources: [
          { title: "Broadcom (AVGO) Q3 earnings report 2026 (CNBC)", url: "https://www.cnbc.com/2026/09/02/broadcom-avgo-q3-earnings-report-2026.html" },
          { title: "Broadcom Inc. Announces Third Quarter Fiscal Year 2026 Financial Results and Quarterly Dividend (Broadcom Investor Relations)", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-third-quarter-fiscal-year-2026-financial" },
          { title: "Broadcom stock sinks in after-hours as AI chip forecast disappoints (Yahoo Finance)", url: "https://finance.yahoo.com/markets/article/broadcom-stock-sinks-in-after-hours-as-ai-chip-forecast-disappoints-165602504.html" }, { title: "Broadcom Q3 2026 Earnings Call Transcript - AI revenue roadmap FY2027 $115B / FY2028 $230B (Investing.com)", url: "https://www.investing.com/news/transcripts/earnings-call-transcript-broadcom-tops-q3-2026-estimates-as-ai-sales-surge-93CH-4886849" },
        ],
      },
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 구글 발주 이전 우려 vs Anthropic·OpenAI 신규 AI 칩 계약 - 고객사 변동성과 수주 확대가 공존",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["구글이 AI 칩(TPU) 주문 일부를 다른 곳으로 이전한다는 보도로 장중 7%대 급락한 사례가 있었다.", "반면 Anthropic-Google-Broadcom 간 3.5GW 규모 TPU 공급 딜 체결이 보도돼 브로드컴이 '숨은 수혜자'라는 분석도 다수 나왔다.", "OpenAI도 브로드컴과 자체 AI 프로세서 개발 계약을 체결한 것으로 보도됐다.", "대규모 AI 칩 수주가 재무 레버리지(부채) 부담을 키운다는 신용 우려 기사도 나왔다."],
        why: ["AI 커스텀칩 사업 자체는 신규 계약으로 확장되고 있지만, 특정 고객사(구글) 발주 변동성과 재무 레버리지 우려가 동시에 제기되고 있다."],
        beginner: ["구글이 주문을 좀 줄인다는 안 좋은 소식과, 앤트로픽·오픈AI 같은 다른 큰 손님들이 새로 계약했다는 좋은 소식이 동시에 나오고 있어요. 사업 자체는 커지고 있지만 어느 고객에 얼마나 의존하는지가 변수예요."],
        interpretation: "AI 반도체 수주 파이프라인 자체는 확장 추세이나 고객 집중도·재무 레버리지 리스크가 병존해 방향을 한쪽으로 단정하기 어렵다.",
        decision: "구글 발주 관련 후속 보도와 신규 고객사(Anthropic·OpenAI) 계약 규모 확정 여부를 지켜볼 것.",
        watch: ["구글 TPU 발주 이전 규모 확정 여부", "Anthropic 3.5GW 딜의 실제 매출 반영 시점", "부채 비율 추이"],
        confidence: "개별 보도 다수가 교차 확인되나 발주 이전 '규모'는 아직 추정 단계 - 신뢰도 중간.",
        directionCheck: true,
        sources: [
        {title:"Broadcom shares fall nearly 7% amid AI revenue concerns (CryptoBriefing)", url:"https://cryptobriefing.com/broadcom-shares-fall-ai-revenue-concerns/"},
        {title:"Broadcom - hidden winner in Google's Anthropic chip deal (Nasdaq)", url:"https://www.nasdaq.com/articles/broadcom-hidden-winner-googles-anthropic-chip-deal"},
        {title:"Broadcom stock struggles after credit concerns as AI growth outlook stays strong (ad-hoc-news.de)", url:"https://www.ad-hoc-news.de/boerse/news/corporate-news/broadcom-stock-struggles-after-credit-concerns-as-ai-growth-outlook-stays/69956521"},
        ],
      },
      {
        date: "2026-08-20",
        headline: "마벨이 구글 TPU 커스텀칩 개발에 참여(122억달러 워런트 계약) - 브로드컴의 구글 단독 공급 지위 흔들리며 주가 5.4% 급락(4거래일 연속 하락)",
        coreAnalysis: "2026-08-19(현지시간) 마벨이 구글 TPU(텐서처리장치) 생태계 관련 다수의 커스텀 실리콘 프로그램(메모리·스토리지 관련 포함)에 참여하는 계약을 발표했고, 그 대가로 구글에 마벨 주식 약 5,897만주를 주당 $206.58에 살 수 있는 워런트(총 약 $122억 규모)를 부여했다. 브로드컴은 구글의 TPU 커스텀칩 메인 파트너로 2031년까지 장기 공급계약을 맺어둔 상태였는데, 이번 계약으로 구글이 복수 공급사 체제로 전환한다는 게 확인된 것 - 브로드컴 주가는 8/19 하루 -5.4%(종가 $360 부근) 하락했고 이는 4거래일 연속 하락이었다.",
        whyItMatters: "이 뉴스의 핵심은 '매출이 지금 당장 준다'가 아니라 '브로드컴이 구글 TPU 물량을 독점하던 구조가 깨졌다'는 것 - 위 risks 항목에 이미 '핵심 고객 단 6곳 집중, 구글 등이 공급망을 다변화하려는 움직임'이 리스크로 명시돼 있었는데 그게 실제 사건으로 확인된 케이스다. 다만 Bernstein 애널리스트 Stacy Rasgon은 'AI 커스텀 하드웨어 전체 수요가 생산능력(캐파)보다 커서 브로드컴·마벨이 같이 성장할 여지가 있다'는 반박 시각을 냈다 - '구글 물량을 얼마나 뺏기느냐'는 아직 확정된 게 아니라 향후 발주 분배로 확인해야 하는 사안이다. 같은 시점에 VMware 보안 이슈와 빅테크 재무제표 외 자금조달(off-balance-sheet) 우려(WSJ 보도: 주요 빅테크 9곳 합계 약 $3조 규모)까지 겹쳐 하락폭이 커졌을 가능성이 있어, 하락 전부를 마벨 계약 하나로만 설명하기는 어렵다. 참고로 브로드컴은 올해 주가가 +10%에 그친 반면 같은 기간 AMD +126%·마벨 +155%로, AI 반도체 매출이 143% 늘었음에도 주가가 그 성장을 이미 반영 못 하고 있었다는 지적도 있었다(주가 하락 이전부터 있던 밸류에이션 괴리).",
        beginnerSummary: "구글이 AI 반도체(TPU)를 만들 때 그동안 브로드컴 한 곳에 거의 의존했는데, 이번에 마벨이라는 경쟁사도 같이 쓰기로 하면서 브로드컴의 '독점적 지위'가 깨졌다는 뉴스예요. 그래서 브로드컴 주가가 하루 만에 5.4% 빠졌어요(최근 4일 연속 하락). 다만 이게 곧바로 브로드컴 매출이 줄어든다는 확정된 얘기는 아니고, '앞으로 구글 주문을 두 회사가 어떻게 나눠 가질지' 지켜봐야 하는 상황이에요 - 일부 애널리스트는 'AI 칩 수요 자체가 워낙 커서 두 회사 다 성장할 수 있다'고 보기도 해요.",
        confidence: "주가 하락폭(-5.4%)·계약 워런트 규모($12.2B)·구글과의 2031년 장기계약 존재는 복수 매체(TipRanks·24/7 Wall St.·Motley Fool 등) 보도 기준(신뢰도 높음) · '구글 물량이 실제로 얼마나 재분배될지'는 아직 미확정(추정)",
        sources: [
          {title:"Broadcom Stock (AVGO) Drops 5.4% as Marvell Secures $12 Billion Google Chip Partnership (TipRanks)", url:"https://www.tipranks.com/news/broadcom-stock-avgo-drops-5-4-as-marvell-secures-12-billion-google-chip-partnership"},
          {title:"Broadcom Falls 5% as Marvell Lands Google Custom Chip Deal, VMware and Financing Concerns Persist (24/7 Wall St.)", url:"https://247wallst.com/investing/2026/08/19/broadcom-falls-5-as-marvell-lands-google-custom-chip-deal-vmware-and-financing-concerns-persist/"},
          {title:"Marvell Technology Rockets 13% on $12.2B Google Warrant; Broadcom Falls 3%, Alphabet Unmoved (24/7 Wall St.)", url:"https://247wallst.com/investing/2026/08/19/marvell-technology-rockets-13-on-12-2b-google-warrant-broadcom-falls-3-alphabet-unmoved/"},
          {title:"Why Broadcom Stock Crashed Today (The Motley Fool)", url:"https://www.fool.com/investing/2026/08/19/why-broadcom-stock-crashed-today/"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(2/5점) - AI 매출 성장세는 뚜렷하지만 새로 특별히 조사할 만한 사건은 없어 기존 추세 연장으로 판단",
        view: "AVGO는 눌림목 점수 2/5점(52주 고점대비 -18.4%)로 매수 관심 초입 구간이에요. PER(33.8배)이 3년 평균(77.4배)보다 훨씬 낮은데, 이건 과거 이익이 크게 눌렸던 시기가 3년 평균에 섞인 영향이 커서 PER 유지 시나리오 기준가($660)를 그대로 신뢰하기보다는 방향성 정도로만 참고하는 게 안전해요. 재무는 Q2'26 매출 +47.9%·영업이익률 +9.8%p로 뚜렷한 개선이고 FCF 마진(46.3%)도 우수해요. 이번 조사에서 최근 헤드라인들을 살펴봤지만 이미 알려진 AI 매출 성장 추세 외에 특별히 새로 조사할 만한 사건은 없었어요(다른 종목들과 달리 newsLog에 별도 항목을 추가하지 않은 이유). 즉 지금은 '이변이 없는' 상태라, 판단은 기존에 잘 알려진 스토리(주문형 AI 칩(ASIC)·네트워킹 반도체의 하이퍼스케일러向 수요 확대)의 연장선에서 봐야 해요. 컨센서스는 내년 매출 +64%·EPS +68%로 매우 공격적인 성장을 기대하고 있어서, 이 기대를 못 채우면 밸류에이션 조정 위험이 있어요.",
        increaseIf: [
          "AI ASIC·네트워킹 부문 매출이 컨센서스 기대(+64%)를 뒷받침하는 수준으로 계속 성장할 때",
          "VMware 인수 이후 소프트웨어 부문 수익성이 추가 개선될 때",
          "가격이 더 눌려 점수가 3점 이상으로 올라올 때",
        ],
        wrongIf: [
          "AI 관련 매출 성장률이 컨센서스에 못 미칠 때",
          "특정 하이퍼스케일러(예: 구글 등 주요 ASIC 고객사)向 매출 집중도가 리스크로 부각되는 구체적 사건이 나올 때",
        ],
        watchNext: [
          "다음 분기 AI 매출 성장률 및 신규 ASIC 고객사 발표",
          "VMware 통합 진행 상황",
          "컨센서스 대비 실적 서프라이즈 여부",
        ],
        confidence: "매출·영업이익률·FCF 수치는 SEC 공시 기반 캐시 데이터 · PER 유지 시나리오 숫자는 과거 이익 왜곡 영향으로 방향성만 참고 · '특별한 새 이벤트가 없다'는 것 자체가 이번 조사의 결론(억지로 이슈를 만들지 않음)",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-05-03 마감 분기 (FY2026 2분기, 6/3 발표) — 3분기(8/2 마감 추정)는 9/2 발표 예정",
        headline: "2분기 매출 221.87억 달러(YoY +48%, 컨센서스 222.7억엔 근소 미달)에 비GAAP EPS $2.44(컨센서스 $2.40 상회)로 어닝은 비트했지만, 발표 다음날 주가는 13~14% 급락했어요.",
        oneTime: "GAAP 순이익 $93.1억 vs 비GAAP 순이익 $120.74억 — 차이의 대부분은 인수자산 상각비 $19.67억(브로드컴·CA·VMware 인수 관련), 주식보상비용 $20.92억, 구조조정 등 기타비용 $0.81억이에요. 이번 분기 자료에는 VMware 통합 관련 비용이 별도 항목으로 크게 부각되진 않았어요.",
        coreRead: "AI 반도체 매출은 $108억(YoY +143%)으로 여전히 고성장 중이고, 3분기 가이던스도 $160억(+200%대)·FY26 전체 $560억으로 기존 전망을 그대로 재확인했어요. 분기 수주(bookings)는 $300억+ 로 출하액의 3배에 달해 AI 쪽 수요 자체는 견조하고, 영업현금흐름 $104.93억·잉여현금흐름 $102.62억으로 GAAP 손익보다 현금창출력이 훨씬 안정적이에요. 다만 주가가 급락한 진짜 이유는 인프라 소프트웨어(VMware 포함) 매출 성장이 9%로 눈에 띄게 둔화된 것 — AI 외 캐시카우 성장 모멘텀이 약해진다는 우려예요. 핵심 고객 6곳(구글·메타·Anthropic·OpenAI+비공개 2곳) 집중 구조는 그대로인데, Hock Tan CEO가 실적콜(6/3)에서 「구글向 물량이 계속 크지만 성장 속도를 감안하면 구글이 공급처를 일부 다변화하는 것은 받아들인다」고 처음으로 공개 인정했어요. 이 발언은 마벨(Marvell)이 구글로부터 TPU 관련 $121.8억 규모 워런트(59M주, 행사가 $206.58, 2033년까지 성과연동 베스팅) 계약을 따낸 8/21 뉴스보다 이전 시점이라, 마벨 이슈 자체는 아직 브로드컴 공식 실적 코멘트에는 등장하지 않았어요. 참고로 마벨 딜 발표 당일 마벨 주가는 -6%(희석 우려)였는데 브로드컴은 오히려 +1% — 시장은 아직 이걸 브로드컴에 대한 실질적 위협으로 크게 보진 않는 분위기예요.",
        forecast: "9/2 발표될 3분기 실적에서 AI 반도체 매출이 가이던스 $160억을 넘어 $165억 이상 나올 가능성이 높다고 봐요(수주잔고가 출하액의 3배라는 점 근거). 반대로 인프라 소프트웨어 성장률이 이번처럼 한 자릿수에 머물면, 이번 분기처럼 어닝 서프라이즈에도 주가가 급락하는 패턴이 반복될 수 있어요. 마벨-구글 워런트 딜에 대한 직접 언급이나 대응 코멘트가 3분기 실적콜에서 나올지도 지켜볼 포인트예요.",
        confidence: "매출·이익·가이던스·현금흐름 수치와 Hock Tan 발언은 브로드컴 공식 보도자료(6/3)와 실적콜 스크립트 기준으로 확인된 사실이에요. 마벨-구글 워런트 규모($121.8억, 행사가 $206.58)도 복수 매체 보도로 교차 확인했어요. 다만 '3분기 AI매출 $165억 이상' 전망과 '마벨 이슈가 3분기 콜에서 언급될지'는 제 추정이니 참고만 해주세요.",
        sources: [
          {
            title: "Broadcom Inc. Announces Second Quarter Fiscal Year 2026 Financial Results and Quarterly Dividend",
            url: "https://www.broadcom.com/company/news/financial-releases/64371",
          },
          {
            title: "Broadcom stock plunges on weak software sales, unchanged AI chip forecast for the year",
            url: "https://www.cnbc.com/2026/06/03/broadcom-avgo-earnings-report-q2-2026.html",
          },
          {
            title: "Broadcom Q2 2026 earnings: AI chip revenue doubles, stock sinks",
            url: "https://finance.yahoo.com/markets/stocks/articles/broadcom-q2-2026-earnings-ai-111613207.html",
          },
          {
            title: "Broadcom AI Revenue Surge Masks a VMware Warning",
            url: "https://www.investing.com/analysis/broadcom-ai-revenue-surge-masks-a-vmware-warning-200681517",
          },
          {
            title: "Broadcom (AVGO) Q2 2026 Earnings Transcript",
            url: "https://www.fool.com/earnings/call-transcripts/2026/06/03/broadcom-avgo-q2-2026-earnings-transcript/",
          },
          {
            title: "Marvell Sinks 6% as Google Warrant Dilution Overtakes the Deal Rally; Broadcom Ticks Up",
            url: "https://finance.yahoo.com/markets/stocks/articles/marvell-sinks-6-google-warrant-160609078.html",
          },
          {
            title: "Broadcom Inc. to Announce Third Quarter Fiscal Year 2026 Financial Results on Wednesday, September 2, 2026",
            url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announce-third-quarter-fiscal-year-2026-financial",
          },
        ],
      },
    ],
    role: {
      tags: ["커스텀 AI ASIC 설계", "네트워킹 반도체", "VMware(가상화 소프트웨어)"],
      stars: 4,
      note: "하이퍼스케일러들의 자체 AI 칩(TPU류) 설계를 돕는 핵심 파트너로 AI 반도체 매출이 1분기 +106%(3분기 가이던스 +200%대)로 급성장 중이에요. 다만 핵심 고객이 단 6곳뿐이고 유통사 한 곳이 매출의 42%를 차지할 만큼 고객 집중도가 매우 높아, 구글 등이 공급망을 다변화하려는 움직임이 실질적 리스크예요.",
    },
  },
  ARM: {
    updated: "2026-08-13",
    customers: [
      "전세계 반도체 설계사·기기 제조사(칩 자체는 안 만들고 설계도만 라이선스) - 퀄컴·애플·삼성 등 모바일 칩 대부분에 Arm 아키텍처 탑재",
      "데이터센터·하이퍼스케일러 - 데이터센터향 로열티 매출이 전년비 2배 넘게 늘며 모바일을 제치고 최대 매출원으로 부상 중",
    ],
    strengths: [
      "칩을 직접 만들지 않고 설계만 라이선스하는 '자산 가벼운(asset-light)' 사업모델 - 라이선스비 + 출하량당 로열티 이중 수익구조",
      "고부가가치 Armv9 아키텍처 전환이 매출 성장과 마진 개선을 동시에 견인",
      "2026-03 자체 설계 실리콘 'Arm AGI CPU'까지 영역 확장(2026년말 양산 목표) - 순수 라이선싱을 넘어선 신사업",
    ],
    risks: [
      "⚠️ 극단적인 주가 변동성 - 한 달 새 시총이 반토막 났다가 실적 발표 하루 만에 18% 급반등(상세는 아래 newsLog 참고), 펀더멘털보다 밸류에이션 논쟁이 주가를 더 크게 움직이는 상태",
      "로열티 수익 구조상 고객사(퀄컴 등)의 최종 기기 판매량에 실적이 연동 - 스마트폰 시장 둔화 시 영향",
    ],
    sources: [
      {title:"Arm Holdings' Robust Licensing Business Drives AI-Fueled Growth (Yahoo Finance)", url:"https://finance.yahoo.com/technology/ai/articles/arm-holdings-robust-licensing-business-140600801.html"},
      {title:"Arm 2026 Q2 Financials (More Than Moore / Ryan Smith, Dr. Ian Cutress)", url:"https://morethanmoore.substack.com/p/arm-2026-q2-financials"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 매출은 사상 최고(더블 비트)인데 가이던스 실망으로 주가 하락 - 변동성 큰 혼재 상황",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-07-29 FY27 1분기 매출 12.9억 달러로 사상 최고, 매출·EPS 모두 예상 상회(더블 비트)를 기록했다.", "서프라이즈에도 가이던스 실망으로 주가가 오히려 하락했다(보도마다 -2%~-8%로 상이).", "발표 전 7월 한 달간 주가가 최대 -34% 급락했고, 8월 초 280달러대 위로 반등을 시도 중이다."],
        why: ["실적 자체는 사상 최고인데도 가이던스가 시장 기대에 못 미쳤다는 점이 최근 하락과 변동성의 핵심 원인이다."],
        beginner: ["지난 분기 실적은 역대 최고였는데, '다음 분기는 이 정도일 것 같다'는 회사의 전망치가 시장이 기대한 것보다 낮아서 실망 매물이 나온 상황이에요."],
        interpretation: "매출 자체는 사상 최고·AI 모멘텀이 지속되고 있어 완전한 우려는 아니지만, 가이던스 실망과 극심한 변동성은 신중한 접근을 요구한다.",
        decision: "가이던스 대비 실제 달성률을 다음 분기 확인 포인트로 삼을 것.",
        watch: ["다음 분기 실제 매출이 가이던스를 상회하는지", "주가 변동성 안정화 여부"],
        confidence: "실적 수치는 회사 공식 발표(Arm Newsroom) 기준, 다수 매체 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Arm Stock Fell 8% After Reporting Record Q1 Earnings Revenue of $1.29 Billion (TIKR)", url:"https://www.tikr.com/blog/arm-stock-fell-8-after-reporting-record-q1-earnings-revenue-of-1-29-billion-heres-the-bigger-picture"},
        {title:"Arm delivers record first-quarter for total revenue (Arm Newsroom)", url:"https://newsroom.arm.com/news/arm-q1-fye27-results"},
        {title:"Arm Holdings (ARM) Stock Forecast: Record Q1, Fell 34% in July, Now Breaking Out Above $280 (TradingKey)", url:"https://www.tradingkey.com/analysis/stocks/us-stocks/262086382-arm-holdings-arm-stock-forecast-august-7-2026-record-q1-breakout-280-tradingkey"},
        ],
      },
      {
        date: "2026-08-13",
        headline: "한 달 새 시총 반토막 → 실적발표 후 18% 급반등, 매출 +34% 서프라이즈 + AGI CPU 수주잔고 $2B 돌파, 9월 주총서 보수정책 표결",
        coreAnalysis: "Arm Holdings 주가가 한 달 새 가치의 절반 이상을 잃었다가, 2026 회계연도 1분기(FY2027 Q1) 실적이 기대를 웃돌며(매출 $1.14B, +34% YoY · 순이익 $270M) 하루 만에 18% 급반등해 $280대를 회복함. 로열티 요율이 더 높은 Armv9 아키텍처로의 전환이 매출 성장과 마진 개선을 이끌고 있고, 'AGI CPU'(고성능 AI용 설계) 수주잔고가 2027·2028 회계연도 합산 $2B를 넘어섬. 애널리스트 반응은 엇갈림 - RBC캐피탈은 목표가를 $475→$340으로 낮춘 반면 New Street는 매수로 상향. 2026년 9월 정기주주총회에서 임원 보수정책과 이사진 명단이 표결에 부쳐질 예정.",
        whyItMatters: "한 달 새 반토막 났다가 하루 만에 18% 반등하는 변동폭 자체가 이 종목이 지금 펀더멘털보다 밸류에이션·기대치를 둘러싼 극단적인 심리 변화로 움직이고 있다는 신호임 - 어닝비트 이후에도 RBC가 목표가를 낮췄다는 건 '실적은 좋은데 지금 가격이 너무 비싸다'는 시각이 여전하다는 뜻. 이런 극단적 변동성은 이 대시보드의 단타 신호 승률 통계(과거 데이터 기반)를 왜곡시킬 수 있어 참고할 때 유의가 필요함.",
        beginnerSummary: "Arm 주가가 한 달 만에 반토막이 났다가, 실적이 예상보다 훨씬 잘 나오면서(매출이 34% 늘었어요) 하루 만에 18%나 다시 뛰었어요. 이 정도로 크게 출렁인다는 건 지금 이 회사가 '얼마나 잘하고 있냐'보다 '얼마가 적정 가격이냐'를 두고 투자자들 의견이 크게 엇갈리고 있다는 뜻이에요. 실제로 좋은 실적이 나온 뒤에도 어떤 애널리스트는 목표가를 오히려 낮췄어요.",
        confidence: "실적 수치는 회사 발표 기준(신뢰도 높음) · 목표가 변동은 각 증권사 리포트 기준(신뢰도 높음)",
        sources: [
          {title:"Arm Stock Soars 18% Toward $300 as Earnings Spark Potential Trend Reversal (FX Leaders)", url:"https://www.fxleaders.com/news/2026/08/04/arm-stock-soars-18-toward-300-as-earnings-spark-potential-trend-reversal/"},
          {title:"Arm Holdings (ARM) Stock Forecast: Record Q1, Fell 34% in July, Now Breaking Out Above $280 (TradingKey)", url:"https://www.tradingkey.com/analysis/stocks/us-stocks/262086382-arm-holdings-arm-stock-forecast-august-7-2026-record-q1-breakout-280-tradingkey"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(3/5점) - 최근 한 달 새 시총이 반토막났다가 실적 후 급반등, 펀더멘털보다 밸류에이션 논쟁이 주가를 움직이는 상태",
        view: "ARM은 눌림목 점수 3/5점(52주 고점대비 -36.4%)로 매수 관심 구간이에요. PER(125.5배)은 3년 평균(248.9배)보다는 크게 낮아졌지만 절대 수준으로는 이 대시보드의 '위험' 기준(80배)을 훨씬 웃돌아요. 재무는 Q2'26 매출 +22.4%로 견조하지만 영업이익률은 -3.2%p로 눌렸어요. 가장 눈에 띄는 건 최근 변동성이에요 - 한 달 새 시가총액이 반토막났다가 실적 발표 후 18% 급반등했는데(newsLog), 이건 펀더멘털 자체의 변화라기보다는 라이선싱 비즈니스 모델의 미래 가치를 둘러싼 밸류에이션 논쟁이 주가를 크게 흔들고 있다는 뜻으로 보여요. ARM은 반도체 설계 IP 라이선싱이라는 독특한 비즈니스 모델(칩을 직접 만들지 않고 설계도를 라이선스)이라 다른 반도체 기업과 다른 잣대가 필요한데, AI 서버·모바일 양쪽에서 로열티율 상승(더 복잡한 설계로 전환)이 성장 스토리의 핵심이에요. 컨센서스는 내년 매출 +36%·EPS +37%로 견조한 성장을 예상해요.",
        increaseIf: [
          "로열티율 상승(v9 아키텍처 채택 확대 등)이 실제 매출 성장률 가속으로 이어질 때",
          "변동성이 진정되고 밸류에이션 논쟁이 실적 중심으로 정리될 때",
          "가격이 더 눌려 점수가 4점 이상으로 올라올 때",
        ],
        wrongIf: [
          "매출 성장률이 컨센서스(+36%)를 밑돌 때",
          "극단적 주가 변동성이 반복되며 펀더멘털과 무관하게 밸류에이션만으로 주가가 움직이는 패턴이 계속될 때",
        ],
        watchNext: [
          "다음 실적에서 로열티율·라이선스 매출 비중 변화",
          "v9 아키텍처 채택률",
          "AI 서버向 ARM 기반 칩 채택 확대 여부",
        ],
        confidence: "매출·영업이익률 수치는 SEC 공시 기반 캐시 데이터 · 최근 주가 변동성(반토막→반등) 사실관계는 복수매체 확인(newsLog 참고) · '밸류에이션 논쟁이 주가를 움직인다'는 해석은 Claude의 정성적 판단",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (FY2027 1분기, 7/29 발표)",
        headline: "매출 12억9천만 달러(전년비 +22%)로 분기 최대 기록을 또 갈아치웠고 non-GAAP EPS도 0.45달러로 가이던스 상단을 넘었는데, 주가는 오히려 8% 빠졌어요 — 실적 자체보다 AI 반도체 업종 전반의 투심 냉각 탓이 컸어요.",
        oneTime: "GAAP 순이익 2억7천만 달러(EPS 0.25달러) vs non-GAAP 순이익 4억8천만 달러(EPS 0.45달러)로 격차가 2억1천만 달러나 나요. 주범은 주식보상비용 3억4,300만 달러고, 관련 고용주 세금 9천만 달러도 더해져요. 반대로 지분투자 평가이익 1억2,800만 달러는 non-GAAP에서 빼고, 세금효과 조정 1억200만 달러, 구조조정·자산처분 비용 700만 달러도 껴 있어요. ARM 특유의 스톡옵션발 GAAP-비GAAP 괴리가 이번에도 여전해요.",
        coreRead: "로열티 매출 7억1,500만 달러(+22%, 분기 사상 최대)에 라이선스 매출 5억7,400만 달러(+23%, 이 중 소프트뱅크向 계약분 1억9,300만 달러 포함)로 양쪽 다 튼튼했어요. 특히 데이터센터向 로열티가 전년비 2배 넘게 늘면서 기존 노트 흐름이 이번 분기에도 그대로 이어졌고, Neoverse 코어 누적 출하량이 15억 개를 넘었는데 최근 9개월 만에 5억 개가 새로 나갔다는 게(첫 10억 개는 6년 걸림) 채택 속도가 확 붙었다는 증거예요. 잉여현금흐름도 6억6,500만 달러로 GAAP 순이익 노이즈와 달리 현금창출력은 견조해요. 다만 이번 실적 자료에서 RISC-V 위협에 대한 직접 언급은 찾지 못했어요 — 조용하다고 위협이 사라진 건 아니니 계속 지켜봐야 해요.",
        forecast: "회사는 2분기(9월 마감) 매출 13억8천만±5천만 달러(전년비 약 +22%, 컨센서스 13억4천만 상회), non-GAAP EPS 0.47달러(컨센서스 0.43 상회)로 가이던스를 냈는데, 로열티 매출 성장률은 13% 안팎(저두자릿수)으로 이번 분기 22%보다 확 둔화될 걸로 자체 가이드했어요 — 메모리 가격 인상이 스마트폰 제조사 판가에 전가되며 물량 증가를 눌렀다는 설명이에요. 반면 라이선스 매출은 30%대 중반 성장을 이어갈 거라 봤고요. 11월경 2분기 실적 발표 때 로열티 성장률이 실제로 10%대 중반 이하로 찍히면 이 가이던스가 보수적이지 않았다는 뜻이고, 20%를 다시 넘기면 데이터센터/AI 물량이 스마트폰 둔화를 압도했다는 뜻으로 해석할 만해요.",
        confidence: "매출·로열티·라이선스 수치, GAAP/non-GAAP 순이익과 EPS, 주식보상비용 조정 내역, 2분기 가이던스 숫자는 회사 발표(뉴스룸 보도자료·SEC 6-K 공시) 기준 확정 사실이에요. 데이터센터 로열티 '2배 이상' 표현과 Neoverse 출하량은 회사 측 코멘트를 그대로 옮긴 거고, RISC-V 관련 '언급 없음'과 향후 로열티 성장률 방향에 대한 해석·예측 부분은 제 판단이 섞여 있어서 틀릴 수 있어요.",
        sources: [
          {
            title: "Arm delivers record first-quarter for total revenue",
            url: "https://newsroom.arm.com/news/arm-q1-fye27-results",
          },
          {
            title: "Arm Stock Fell 8% After Reporting Record Q1 Earnings Revenue of $1.29 Billion. Here's the Bigger Picture.",
            url: "https://www.tikr.com/blog/arm-stock-fell-8-after-reporting-record-q1-earnings-revenue-of-1-29-billion-heres-the-bigger-picture",
          },
          {
            title: "Arm Holdings (NASDAQ: ARM) delivers record Q1 FYE27 revenue and EPS",
            url: "https://www.stocktitan.net/sec-filings/ARM/6-k-arm-holdings-plc-uk-current-report-foreign-issuer-c85c22de28cb.html",
          },
          {
            title: "Arm Q1 FY2027 Earnings: Record Revenue and a Guidance Beat, but the Stock Sold Off",
            url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262078264-arm-holdings-q1-fy2027-earnings-stock-selloff-tradingkey",
          },
        ],
      },
    ],
    role: {
      tags: ["반도체 설계 IP 라이선싱(모바일·서버 아키텍처)"],
      stars: 4,
      note: "거의 모든 모바일 칩이 Arm 아키텍처를 쓸 만큼 업계 표준이에요. 데이터센터向 로열티 매출이 전년비 2배 넘게 늘며 모바일을 제치고 최대 매출원으로 부상 중이지만, RISC-V 같은 오픈소스 대안이 서서히 부상하고 있고 최근 한 달 새 시가총액이 반토막났다 실적 후 18% 급반등할 만큼 밸류에이션 변동성이 극단적이에요.",
    },
  },
  ASML: {
    updated: "2026-08-13",
    customers: [
      "대형 반도체 제조사(로직·파운드리·메모리) - 인텔·삼성·TSMC가 핵심 고객, 특히 TSMC가 전세계 EUV 장비 설치기반의 절반 이상을 보유",
    ],
    strengths: [
      "EUV(극자외선 노광장비) 시장 점유율 90% 이상의 사실상 독점적 지위 - 첨단 반도체(5nm 이하) 생산에 필수 장비",
      "시스템 판매(약 75%) + 설치기반 관리·서비스(약 25%)의 반복매출 구조로 경기 방어력 일부 확보",
      "EUV 장비 한 대당 가격이 매우 높음(표준 EUV 약 €1.8억, 최신 High-NA는 €3.5억 이상) - 진입장벽이 극도로 높은 시장",
    ],
    risks: [
      "⚠️ 중국向 매출 비중 축소 - 수출규제로 최선단 EUV는 애초에 중국에 못 팔고, DUV(구형)만 판매 가능(상세는 아래 newsLog 참고)",
      "소수 초대형 고객(TSMC·삼성·인텔)에 대한 매출 집중도가 높음 - 이들의 설비투자 사이클에 실적이 크게 좌우됨",
    ],
    sources: [
      {title:"ASML's Monopoly on EUV Lithography (Science & Technology News)", url:"https://science-technology.news-articles.net/content/2026/08/02/asml-s-monopoly-on-euv-lithography.html"},
      {title:"ASML: The $360B EUV Lithography Equipment Giant (Data Gravity)", url:"https://www.datagravity.dev/p/asml-the-360b-euv-lithography-equipment"},
    ],
    newsLog: [
      {
        date: "2026-08-13",
        headline: "중국向 매출 비중 2026년 약 20%로 축소(수출규제 지속) + 중국의 자국산 DUV 장비 개발 보도, 다만 2분기 수주는 55억유로로 견조",
        coreAnalysis: "ASML의 CFO는 2026년 전체 매출에서 중국이 차지하는 비중이 약 20%가 될 것이라고 확인함 - 미국 주도의 수출규제 누적 효과로 과거 대비 줄어든 수치. ASML은 이미 수년째 가장 앞선 장비인 EUV(극자외선 노광장비)를 중국에 수출하지 못하고 있고, 상대적으로 덜 첨단인 DUV(심자외선) 장비만 판매 중임. 새로운 소식으로, 중국 기업이 자체적으로 DUV 장비를 생산하기 시작했다는 보도가 있었으나, 애널리스트들은 이것이 'ASML이 수출규제로 이미 잃은 매출을 대체하는 것'에 가깝다고 평가하며 실질적인 추가 피해는 제한적이라고 봄. 이런 중국 리스크에도 불구하고 2분기 수주(오더북)는 55억유로로 견조했음.",
        whyItMatters: "이건 갑자기 터진 사건이 아니라 오랫동안 서서히 진행돼온 구조적 리스크임 - 흥미로운 지점은 '중국 위협' 헤드라인이 실제 재무 노출보다 더 무섭게 들린다는 것. ASML의 가장 비싼 제품(EUV)은 애초에 중국에 판 적이 없어서, 중국의 자체 DUV 개발이 준다고 해서 ASML의 핵심 수익원이 갑자기 흔들리는 게 아님. 진짜 지켜봐야 할 숫자는 중국 매출 '비중'(현재 약 20%, 과거보다 낮아짐)의 추세와, 그걸 상쇄하는 비중국(미국·한국·대만 등 AI 수요) 수주 규모(2분기 55억유로로 견조)의 균형임.",
        beginnerSummary: "ASML은 반도체를 만드는 데 꼭 필요한 첨단 장비를 만드는 회사인데, 미국의 수출규제 때문에 중국에는 가장 좋은 장비(EUV)를 못 팔고 있어요. 그래서 중국이 차지하는 매출 비중이 계속 줄고 있어요(올해 약 20%). 최근엔 중국이 자기들만의 장비를 직접 만들기 시작했다는 뉴스가 나왔지만, 전문가들은 'ASML이 어차피 이미 못 팔던 부분'이라 큰 타격은 아니라고 봐요. 다행히 다른 나라(미국·한국·대만 등)에서 오는 주문은 여전히 튼튼해요.",
        confidence: "중국 매출 비중은 회사 CFO 공식 발언 기준(신뢰도 높음) · '실질적 피해는 제한적'이라는 평가는 애널리스트 해석(신뢰도 중간)",
        sources: [
          {title:"U.S.-China AI feud sees ASML walk tightrope between sales and geopolitics (CNBC)", url:"https://www.cnbc.com/2026/07/17/us-china-ai-feud-asml-tightrope-sales-geopolitics.html"},
          {title:"ASML Faces a Fresh Threat Out of China. Is the Dip in the Stock Worth Buying? (The Motley Fool)", url:"https://www.fool.com/investing/2026/08/10/asml-faces-a-fresh-threat-out-of-china-is-the-dip/"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "관망(0/5점) - 저가 신호는 아니지만 중국 매출 축소를 이미 EUV 비중 구조로 상당 부분 흡수하고 있는 것으로 보임",
        view: "ASML은 눌림목 점수 0/5점(52주 고점대비 -7.3%, 200일선 위)으로 지금은 저가 매수 타이밍이 아니에요. PER(48.5배)도 3년 평균(33.5배)보다 높아서 밸류에이션이 싸 보이지 않아요. 재무는 Q2'26 매출 +21.3%·영업이익률 +2.4%p로 견조해요. 중국 매출 비중이 2026년 약 20%로 축소되는 중인데(수출규제 누적효과), 이 회사의 핵심 제품인 EUV 노광장비는 애초에 중국에 판매가 안 되는 제품이라 이번 축소로 인한 신규 피해는 제한적이라는 게 애널리스트 중론이에요(newsLog) - 즉 중국 리스크가 다른 반도체 장비주보다 이미 구조적으로 덜 노출돼 있다고 볼 수 있어요. 2분기 수주(주문)가 €5.5B로 견조했다는 점도 수요가 꺾이지 않았다는 신호예요. ASML은 최첨단 EUV 장비를 사실상 독점 공급하는 위치라 이 워치리스트에서 가장 방어적인 반도체 장비주 성격을 가져요. 컨센서스는 내년 매출 +26%·EPS +35%로 견조한 성장을 예상해요.",
        increaseIf: [
          "가격이 눌려 눌림목 점수가 2점 이상으로 올라올 때(지금은 실적 대비 밸류에이션 매력이 크지 않은 구간)",
          "차세대 High-NA EUV 장비 채택이 확대되며 수주가 계속 견조하게 유지될 때",
        ],
        wrongIf: [
          "EUV가 아닌 DUV 등 다른 제품군에서 중국 매출 축소 영향이 예상보다 커질 때",
          "2분기 견조했던 수주(€5.5B)가 다음 분기 크게 꺾일 때",
        ],
        watchNext: [
          "다음 분기 수주(주문) 추이",
          "High-NA EUV 장비 채택 확산 속도",
          "대중 수출규제 추가 강화 여부(DUV 장비 포함 가능성)",
        ],
        confidence: "매출·영업이익률 수치는 SEC 공시 기반 캐시 데이터가 아니라 Finnhub/Yahoo 폴백 기준(해외 상장·IFRS라 SEC us-gaap 검증 미적용) · 중국 매출 비중·EUV 예외·수주 규모는 복수매체 확인(newsLog 참고) · '중국 리스크가 상대적으로 덜하다'는 판단은 Claude의 정성적 해석",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기)",
        headline: "2026년 2분기 매출이 93억 유로(순이익 29억 유로, 매출총이익률 54.0%)로 직전 분기(매출 88억 유로, 순이익 28억 유로, 매출총이익률 53.0%) 대비 늘며 자체 가이던스와 시장 컨센서스를 모두 상회했고, 이 여세로 2026년 연간 매출 가이던스를 430억~450억 유로로 한 해 두 번째 상향했어요(직전 가이던스는 360억~400억 유로).",
        oneTime: "순이익 29억 유로에는 IT·기술 트랜스포메이션 관련 비용 추정치가 반영돼 수익성에 다소 부담을 줬다고 경영진이 언급했어요. 다만 구체적 금액은 공개되지 않았고 실적 흐름 자체를 바꿀 만큼 큰 항목은 아니었어요.",
        coreRead: "가장 눈에 띄는 건 수주 흐름이에요 — 경영진이 '2026년 상반기 내내 매우 강한 주문 예약'이 있었고 '2027년에 필요한 주문은 이미 거의 다 받았다'고 밝혔는데, AI 반도체발 수요가 1년 이상 앞서서 오더북을 채우고 있다는 뜻이에요. 중국 매출 비중은 전체의 약 20%로 전분기와 동일하게 유지됐고 성장은 주로 내수 주도 로직 반도체 쪽에서 나왔다고 하니, 최선단 EUV 수출 통제가 여전히 유효한 가운데서도 중국 매출이 급격히 무너지진 않고 있어요. High-NA EUV 쪽은 인텔이 자사 최선단 공정(18A, Core Ultra Series 3)에 실제 양산 투입했다고 밝혀 '장비 성숙도를 증명하는 중요한 이정표'로 평가됐고, 2026년 전체로는 High-NA 4~5대가 매출에 기여할 전망이며 2027년 EUV 생산능력을 30% 더 늘리는 계획도 함께 나왔어요. 다만 신규 리소그래피 시스템 판매가 86대(1분기 67대)로 늘긴 했지만, 설치기반 관리(서비스) 매출 28억 유로가 자체 가이던스보다 3억 유로 더 나온 것도 이번 호실적에 상당히 기여했다는 점은 참고할 만해요.",
        forecast: "3분기(2026년 7~9월) 가이던스는 매출 110억~120억 유로, 매출총이익률 55~57%로 이미 제시돼 있어요. AI발 주문이 워낙 탄탄해서 10월 중순으로 예상되는 3분기 실적 발표에서 매출이 가이던스 상단인 120억 유로에 근접하거나 이를 넘어설 가능성이 높고, 연간 목표 High-NA 4~5대 중 최소 2~3대가 3분기까지 매출로 인식될 것으로 봐요. 반대로 매출총이익률이 55% 밑으로 미끄러지거나 중국 매출 비중이 20%에서 눈에 띄게 꺾이면 이 낙관적 그림이 깨지는 신호로 봐야 해요.",
        confidence: "매출·순이익·매출총이익률·가이던스 수치, 신규 시스템 판매 대수, 중국 매출 비중 약 20%, 인텔의 High-NA 양산 투입 발언은 ASML 공식 보도자료와 실적 발표 컨퍼런스콜에서 직접 확인된 사실이에요. 반면 3분기 실적이 가이던스 상단을 넘어설 거라는 전망, High-NA 매출 인식 대수 배분 추정, '2027년 주문이 이미 거의 다 채워졌다'는 발언을 성장 가시성 신호로 해석한 부분은 제 개인적 판단이라 틀릴 수 있어요.",
        sources: [
          {
            title: "ASML reports €9.3 billion total net sales and €2.9 billion net income in Q2 2026",
            url: "https://www.asml.com/en/news/press-releases/2026/q2-2026-financial-results",
          },
          {
            title: "Earnings call transcript: ASML Q2 2026 beats guidance as AI demand lifts outlook",
            url: "https://www.investing.com/news/transcripts/earnings-call-transcript-asml-q2-2026-beats-guidance-as-ai-demand-lifts-outlook-93CH-4792156",
          },
          {
            title: "ASML raises 2026 guidance second time, beats Q2 earnings",
            url: "https://qz.com/asml-2026-guidance-raised-ai-chip-demand-q2-earnings-071526",
          },
          {
            title: "ASML Q2 2026: EUV Demand Surges as Intel Leads High-NA Adoption",
            url: "https://www.kad8.com/news/asml-q2-2026-euv-demand-surges-as-intel-leads-high-na-adoption/",
          },
        ],
      },
    ],
    role: {
      tags: ["EUV(극자외선) 리소그래피 장비"],
      stars: 5,
      note: "최첨단 반도체(5nm 이하) 생산에 필수인 EUV 장비를 점유율 90% 이상으로 사실상 독점 공급해요. 장비 한 대당 가격이 최대 €3.5억 이상일 만큼 진입장벽이 극도로 높고, TSMC·삼성·인텔 세 회사만이 핵심 고객이라 이 워치리스트에서 가장 확실한 '병목' 기업이에요.",
    },
  },
  AMAT: {
    updated: "2026-08-13",
    customers: [
      "파운드리·로직 제조사(매출 비중 62%) - TSMC·삼성·인텔 등",
      "메모리 제조사(D램 34%·낸드 4%) - 마이크론·삼성·SK하이닉스 등, 특히 1분기 D램향 매출이 사상 최대",
      "디스플레이(OLED·LCD) 제조사 - 반도체 외 인접 시장",
    ],
    strengths: [
      "2026년 반도체장비 사업 20%대 성장 전망 - 증착(deposition)·식각(etch)·전자빔 검사 분야에서 점유율 확대 중",
      "첨단 패키징(HBM, 3D 칩렛 적층) 분야에서 강한 지위 - AI 반도체 트렌드의 직접 수혜",
      "반도체 장비 외에도 서비스(Applied Global Services) 부문이 안정적 매출 기여",
    ],
    risks: [
      "⚠️ 좋은 가이던스에도 주가가 고점대비 크게 하락하는 패턴(상세는 아래 newsLog 참고) - 반도체장비 섹터 전반의 밸류에이션 재평가 국면과 연동",
      "소수 대형 고객사(TSMC·삼성·마이크론 등)의 설비투자 사이클에 실적이 크게 연동됨",
    ],
    sources: [
      {title:"Applied Materials Q1 FY 2026: AI Demand Lifts Outlook (Futurum Group)", url:"https://futurumgroup.com/insights/applied-materials-q1-fy-2026-ai-demand-lifts-outlook/"},
      {title:"Applied Materials expects 20% growth in semiconductor business in 2026 (Manufacturing Dive)", url:"https://www.manufacturingdive.com/news/applied-materials-reports-7b-q1-2026-revenue/812715/"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 사상 최고 매출·가이던스에도 주가 조정 - 실적은 견조, 하락은 밸류에이션·대중국 리스크 성격",
        importance: "medium",
        tone: "positive",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-08-13 회계 3분기 사상 최고 매출을 기록했고 AI 반도체 장비 수요 강세가 지속됐다.", "4분기 매출 가이던스를 102.5억 달러로 제시했다 - 사상 최고 분기 전망이다.", "기록적 실적에도 시장 기대치를 충족하지 못해 주가가 3~5% 하락했다.", "중국 관련 규제 우려가 AI 붐 기대감을 일부 상쇄시켰다는 분석이 있다."],
        why: ["실적·가이던스 자체는 매우 견조한데 주가가 하락했다는 것은, 밸류에이션 부담이나 업종 전반의 조정 성격일 가능성이 크다."],
        beginner: ["회사는 역대 최고 실적을 냈고 앞으로도 더 잘될 거라고 했는데, 사람들 기대가 너무 컸는지 주가는 오히려 떨어졌어요. 회사 자체 문제라기보다는 눈높이(기대치) 문제에 가까워요."],
        interpretation: "사업 펀더멘털은 긍정적이나 밸류에이션 부담과 대중국 리스크가 단기 주가 조정의 원인으로 보인다.",
        decision: "이 뉴스 자체가 매수 신호는 아니지만, 낙폭과다 신호와 방향이 같은(긍정) 사례로 참고할 것.",
        watch: ["대중국 규제 추가 조치 여부", "4분기 실제 매출 달성 여부"],
        confidence: "실적 수치는 회사 공식 발표 기준, 복수 매체(24/7 Wall St, GuruFocus) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Applied Materials Q3 2026: Record Revenue With a $10.25B Q4 Outlook (24/7 Wall St)", url:"https://247wallst.com/cards/applied-materials-q3-2026-earnings-amat-01kzybvthd5qqamwrtqk59k25x"},
        {title:"Applied Materials shares drop 5% despite record quarter as China concerns overshadow AI boom (CryptoBriefing)", url:"https://cryptobriefing.com/applied-materials-shares-fall-ai-demand/"},
        ],
      },
      {
        date: "2026-08-13",
        headline: "2분기 실적 호조·2026년 반도체장비 지출 +30% 가이던스에도 주가는 고점대비 -27% - 3분기 실적발표는 바로 오늘(8/13)",
        coreAnalysis: "어플라이드머티어리얼즈의 2026 회계연도 2분기 매출은 $7.91B·GAAP EPS $3.51이었고, 3분기 매출 가이던스를 $8.95B(±$500M)로 상향 제시함. 2026년 전체 반도체장비 지출 성장률을 30%대로 가이던스했고, 특히 첨단 패키징 수요는 약 50% 성장을 전망함(AI 데이터센터 증설·게이트올어라운드 트랜지스터 복잡도 증가가 배경). 이런 낙관적 가이던스에도 불구하고 주가는 최근 고점 대비 약 27% 낮은 수준에서 거래되고 있음. 이 회사의 2026 회계연도 3분기 실적은 오늘(2026-08-13) 발표 예정(컨센서스: 매출 $9.04B·EPS $3.36) - 이 항목은 그 발표 이전에 작성됐으므로 오늘 실제 실적은 반영돼 있지 않음.",
        whyItMatters: "'좋은 실적·가이던스에도 주가는 고점대비 크게 밀려있다'는 패턴이 이번 조사에서 LRCX·KLAC(아래 참고)에서도 똑같이 확인됨 - 반도체장비 3사가 나란히 같은 모습을 보인다는 건 개별 기업 문제가 아니라 이 하위섹터 전체가 2026년 AI 랠리로 이미 높은 기대치를 선반영했었고, 지금은 그 기대치에 대한 재평가(밸류에이션 조정) 국면에 있다는 뜻으로 해석하는 게 합리적임. 오늘 실제 3분기 실적이 이 패턴을 재확인할지 깨트릴지 지켜볼 만함.",
        beginnerSummary: "어플라이드머티어리얼즈는 실적도 좋고 앞으로 전망도 좋게 내놨는데(반도체 장비 시장이 30% 넘게 성장할 거라고), 정작 주가는 최근 최고점보다 27% 낮은 상태예요. 마침 오늘(8/13) 다음 분기 실적을 발표하는데, 이 글은 그 발표 전에 쓴 거라 오늘 나온 실제 숫자는 안 담겨있어요. 비슷한 반도체 장비회사 2곳(LRCX·KLAC)도 똑같이 '실적은 좋은데 주가는 빠진' 패턴을 보이고 있어서, 이 업종 전체가 이미 너무 큰 기대를 받고 있었다가 조정받는 국면일 가능성이 있어요.",
        confidence: "실적·가이던스 수치는 회사 공식 발표 기준(신뢰도 높음) · 주가 하락 원인 해석은 Claude의 판단(신뢰도 중간) · 오늘(8/13) 실적은 미반영",
        sources: [
          {title:"Applied Materials Guides 30% Semiconductor Equipment Growth — So Why Is AMAT Down 27% From Peak? (TradingKey)", url:"https://www.tradingkey.com/analysis/stocks/us-stocks/262098841-applied-materials-amat-q3-earnings-august-13-2026-semiconductor-equipment-ai-tradingkey"},
          {title:"Applied Materials (AMAT) Gets A Demand Lift From 44.7% AI Chip Growth (Yahoo Finance)", url:"https://finance.yahoo.com/technology/ai/articles/applied-materials-amat-gets-demand-210941837.html"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(3/5점) - 실적·가이던스는 견조한데 주가만 크게 빠진, 반도체장비 3사 공통 패턴의 대표 사례",
        view: "AMAT는 눌림목 점수 3/5점(52주 고점대비 -29.9%)로 매수 관심 구간이에요. PER(39.7배)이 3년 평균(21.2배)보다 오히려 높아서 밸류에이션이 싸 보이지는 않는데, 재무 자체는 Q2'26 매출 +11.4%·영업이익률 +1.3%p로 견조한 개선이에요. 이 종목의 핵심은 뉴스 쪽이에요 - LRCX·KLAC와 함께 셋 다 실적·가이던스는 좋았는데 주가는 고점대비 20~27%나 하락했다는 공통 패턴이 확인됐어요(newsLog). 이건 개별 기업 문제가 아니라 반도체 장비 섹터 전체가 그동안의 밸류에이션 프리미엄을 재평가받는 국면으로 해석돼요 - 즉 '실적이 나빠서'가 아니라 '기대치가 너무 높았어서' 주가가 빠진 케이스로 보여요. FCF 마진이 2.7%로 다소 낮은 편인데 이건 반도체 장비 업체 특유의 대규모 CAPEX·R&D 투자 사이클과 관련 있어 보여요. 컨센서스는 내년 매출 +34%·EPS +43%로 AI向 반도체 장비 수요 확대를 반영한 낙관적 전망이에요.",
        increaseIf: [
          "가이던스 대비 실제 매출·수주가 계속 상회하며 밸류에이션 재평가가 과도했다는 게 확인될 때",
          "AI向 첨단 공정 장비 수주가 컨센서스(+34%)를 뒷받침할 때",
        ],
        wrongIf: [
          "매출 성장이 실제로 둔화되며 이번 주가 하락이 '과도한 재평가'가 아니라 '정당한 경고'였던 것으로 확인될 때",
          "중국向 장비 수출 규제가 추가로 강화될 때",
        ],
        watchNext: [
          "다음 분기 수주(Book-to-bill) 지표",
          "중국 매출 비중 변화 및 수출규제 관련 뉴스",
          "LRCX·KLAC 등 동종 장비업체와의 흐름 비교",
        ],
        confidence: "매출·영업이익률 수치는 SEC 공시 기반 캐시 데이터 · '실적은 좋은데 주가만 빠졌다'는 섹터 공통 패턴은 복수매체 확인(newsLog 참고) · '기대치 재평가가 원인'이라는 해석은 Claude의 정성적 판단",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-07-31 마감 분기 (FY2026 3분기)",
        headline: "8월 13일 발표된 3분기 매출이 91.15억 달러(+25% YoY)로 컨센서스 90억 달러를 넘었고, non-GAAP EPS 3.50달러도 컨센서스 3.39달러를 상회했어요.",
        oneTime: "GAAP EPS(3.17달러)가 non-GAAP EPS(3.50달러)보다 낮은 건 미 상무부와의 법적합의금 2.53억 달러, 구조조정비용 1,200만 달러, 전략적 투자자산 관련 미실현평가손실 2.2억 달러가 반영됐기 때문이에요.",
        coreRead: "중국 매출은 25.06억 달러로 전체의 28%를 차지해 작년 동기(35%)보다 비중이 줄었는데, 이는 수출규제 영향이 실적에 계속 반영되고 있다는 신호예요. 반면 반도체시스템 부문은 70.40억 달러 매출을 냈고, 12~16단 이상 HBM 스택을 지원하는 신제품 'Producer Avila 2 PECVD'를 내놓는 등 첨단 패키징/HBM 쪽 모멘텀은 살아있어요. GAAP 영업이익률도 33.7%로 견조해서, 일회성 비용을 걷어내고 보면 본업 수익성 자체는 탄탄한 편이에요.",
        forecast: "회사가 제시한 4분기 가이던스(매출 102.5억±5억 달러, non-GAAP EPS 4.02±0.20달러)는 컨센서스(각각 95.4억 달러, 3.68달러)를 웃도는 수준이라, 그대로 달성되면 4개 분기 연속 어닝 서프라이즈가 될 걸로 봐요. 반대로 중국 매출 비중이 28%에서 25% 밑으로 더 줄어드는 게 확인되면 수출규제 타격이 심화되고 있다는 뜻으로 해석해야 해요.",
        confidence: "매출·EPS·중국 매출 비중(28%, 25.06억 달러)·4분기 가이던스·일회성 비용 항목은 회사 공식 실적발표(2026-08-13) 기준 확인된 사실이고, HBM/첨단패키징 모멘텀 지속 여부와 다음 분기 전망 부분은 제 해석이 들어간 예측이에요.",
        sources: [
          {
            title: "Applied Materials Announces Third Quarter 2026 Results",
            url: "https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-third-quarter-2026-results",
          },
        ],
      },
    ],
    role: {
      tags: ["반도체 증착·식각 장비", "첨단 패키징(HBM 등)"],
      stars: 4,
      note: "반도체 제조 공정 여러 단계에 걸친 폭넓은 장비 포트폴리오를 갖춘 최대 장비업체 중 하나로, 첨단 패키징(HBM 등) 분야에서 강한 지위를 갖고 있어요. 다만 증착·식각 등 특정 공정에서는 LRCX·KLAC와 직접 경쟁하고, 2026년 반도체장비 지출 +30% 가이던스에도 주가는 고점대비 -27%로 섹터 전체가 밸류에이션 재평가를 받는 국면이에요.",
    },
  },
  LRCX: {
    updated: "2026-08-20",
    customers: [
      "메모리·파운드리·로직 제조사 - 3D낸드·D램·첨단 로직 생산업체가 핵심 고객, 아시아(대만·한국 등)에 고객이 집중",
    ],
    strengths: [
      "식각(etch) 시장 점유율 약 55%, 증착(deposition) 시장 약 24%로 두 핵심 공정에서 지배적 지위",
      "AI·클라우드발 고성능 반도체 수요가 3D 구조·게이트올어라운드(GAA) 트랜지스터 전환을 가속하며 직접 수혜",
      "파운드리·로직 부문 매출이 TSMC의 2nm·GAA 전환에 힘입어 크게 성장 중",
    ],
    risks: [
      "⚠️ 실적 서프라이즈에도 주가가 한 달 새 20% 넘게 하락하는 패턴(상세는 아래 newsLog 참고) - 반도체장비 섹터 전반의 밸류에이션 조정과 맞물림",
      "고객사가 소수 대형 메모리·파운드리 업체에 집중돼 있어 이들의 설비투자 사이클(특히 메모리 가격 사이클)에 실적이 크게 좌우됨",
    ],
    sources: [
      {title:"Lam Research 2026 10-K: Driving Semiconductor Breakthroughs with Advanced Etch, Deposition & Clean Technologies (Minichart)", url:"https://www.minichart.com.sg/2026/08/08/lam-research-2026-10-k-driving-semiconductor-breakthroughs-with-advanced-etch-deposition-clean-technologies/"},
      {title:"Lam Research Corporation (LRCX): A Bull Case Theory (Yahoo Finance)", url:"https://finance.yahoo.com/news/lam-research-corporation-lrcx-bull-165904289.html"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 사상 최대 매출에도 밸류에이션·금리·중국규제 우려로 하락 - 회사 고유 경고는 없었음",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["최근 분기 사상 최대 매출을 기록했고 NAND 관련 매출·고객지원 서비스 강세, 9월 분기 가이던스도 견조했다.", "최근 한 달간 -11.1% 하락(8/19 하루 -6.3% 포함)했으나, 회사 고유의 경고나 실적 업데이트는 없었다는 점이 명시됐다 - 업종 밸류에이션 리스크·금리 우려가 원인으로 지목됐다.", "Morgan Stanley가 2025년 9월 Underweight→ 이후 Equal Weight → 2026년 8월 재차 Underweight로 등급을 반복 변경했다.", "중국 수출 규제 강화 시 매출 서사가 급변할 수 있다는 리스크가 명시됐다."],
        why: ["실적 자체는 사상 최대치이나 애널리스트 의견이 반복적으로 엇갈리고 매크로(금리)·중국 규제 리스크가 불확실성으로 남아있다."],
        beginner: ["성적표는 역대 최고인데, 회사 자체에 나쁜 소식이 있어서라기보다 '반도체 업종 전체가 너무 비싸진 거 아니냐'는 걱정과 금리 우려 때문에 주가가 빠졌어요."],
        interpretation: "실적 펀더멘털은 견조하나 매크로·중국 규제 리스크로 방향을 한쪽으로 단정하기 어렵다.",
        decision: "중국 수출 규제 관련 후속 조치와 애널리스트 등급 변동을 지켜볼 것.",
        watch: ["중국 수출 규제 추가 조치 여부", "애널리스트 등급 재상향 여부"],
        confidence: "실적 수치는 회사 공식 발표 기준, 하락 원인은 다수 매체(BingX, CNBC) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Is Lam Research (LRCX) Fairly Valued On Record Results And New AI Guidance? (Simply Wall St)", url:"https://simplywall.st/stocks/us/semiconductors/nasdaq-lrcx/lam-research/news/is-lam-research-lrcx-fairly-valued-on-record-results-and-new"},
        {title:"Why Is Lam Research (LRCX) Stock Price Down Today, August 19 (BingX)", url:"https://bingx.com/en/news/post/why-is-lam-research-lrcx-stock-price-down-today-august-chip-gear-de-risking-pressures-ai-exposure"},
        ],
      },
      {
        date: "2026-08-13",
        headline: "7/29 실적 서프라이즈(매출·EPS 모두 상회) + 2026년 웨이퍼장비 지출 전망 상향에도 한 달 새 주가 -20.4%",
        coreAnalysis: "램리서치의 2026 회계연도 4분기 실적(7월 29일 발표)은 매출 $6.72B·비GAAP EPS $1.82로 시장 예상을 상회했음. 회사는 2026년 웨이퍼 제조장비(WFE) 지출 전망을 '1,500억달러대 초반'으로 상향했고, 9월 분기 매출은 $8.1B로 가이던스함. 이런 어닝비트·가이던스 상향에도 불구하고 주가는 최근 한 달 새 약 20.4% 하락(7/2 $351.41 → 8/3 $279.66). 다만 Zacks는 이 종목을 'Strong Buy'로 상향했음. 별도 소식으로 8/12에 뉴욕 소재 교육기관과 5년간 약 3,500명의 학생을 반도체 공정 인력으로 양성하는 협약을 발표함(재무와는 무관한 인력양성 이니셔티브).",
        whyItMatters: "AMAT·KLAC(위·아래 참고)와 완전히 같은 패턴 - '실적은 잘 나왔는데 주가는 크게 빠졌다'는 게 반도체장비 하위섹터 전체에서 반복되고 있다는 건, 램리서치 개별 기업의 실적 문제가 아니라 섹터 전체의 밸류에이션 재평가 국면일 가능성이 높다는 뜻. 실제 사업(숫자로 보이는 것)은 잘 굴러가고 있다는 점은 긍정적 신호.",
        beginnerSummary: "램리서치도 실적을 예상보다 잘 냈고(매출·이익 모두 상회) 앞으로 전망도 올려 잡았는데, 정작 한 달 사이 주가는 20% 넘게 빠졌어요. 비슷한 다른 반도체 장비회사들(AMAT·KLAC)도 똑같은 모습이라, 이 업종 전체가 그동안 너무 앞서서 오른 것에 대한 조정을 받고 있는 것으로 보여요. 회사 실제 사업 자체는 숫자로 보면 잘 돌아가고 있어요.",
        confidence: "실적·가이던스 수치는 회사 공식 발표 기준(신뢰도 높음) · 주가 하락 원인 해석은 Claude의 판단(신뢰도 중간)",
        sources: [
          {title:"Lam Research details 2026 chip equipment outlook (StockTitan, 10-K 기반)", url:"https://www.stocktitan.net/sec-filings/LRCX/10-k-lam-research-corp-files-annual-report-540ab6d528eb.html"},
          {title:"Why Lam Research (LRCX) Stock Is Up +34% in the Last... (Tickeron)", url:"https://tickeron.com/ticker/LRCX/"},
        ],
      },
      {
        date: "2026-08-20",
        headline: "$3B+ 규모 R&D 확장 계획 발표(미국·아시아·유럽) - 실험 캐파 50%↑ 목표, AI 반도체 공정 개발 경쟁 대응",
        coreAnalysis: "램리서치가 AI 반도체 생산을 뒷받침하기 위해 $3B 이상 규모의 R&D 확장 계획을 발표했다. 미국·아시아·유럽 여러 시설에 걸쳐 실험(공정 개발) 캐파를 50% 이상 늘리는 게 목표이며, 올해부터 시작된다.",
        whyItMatters: "위 8/13 newsLog에서 다룬 뉴욕 인력양성 협약과 같은 맥락의 '선행 투자' 소식으로, 지금의 실적 호조(매출·EPS 서프라이즈)를 미래 공정 경쟁력으로 이어가려는 전략으로 보인다. 다만 이번 조사에서는 헤드라인 수준(총 투자 규모, 목표)만 확인했고, 구체적 집행 시점·시설별 배분 등은 원문에서 추가 확인이 필요하다 - 반도체장비 3사(AMAT·LRCX·KLAC) 모두 '실적은 좋은데 주가는 조정받는' 국면인 가운데, 이런 선제 투자가 다음 사이클에서 경쟁력 우위로 이어지는지가 지켜볼 포인트다.",
        beginnerSummary: "램리서치가 AI 반도체를 만드는 데 필요한 새로운 기술을 개발하려고 30억 달러 넘는 돈을 미국·아시아·유럽 여러 곳의 연구시설에 투자하기로 했어요. 지금 당장 매출이 느는 소식은 아니고, 앞으로 더 좋은 장비를 만들기 위한 사전 투자예요.",
        confidence: "투자 발표 사실과 규모는 매체(Benzinga) 보도 기준(신뢰도 중간) - 세부 집행 계획은 이번 조사에서 미확인",
        sources: [
          {title:"Lam Research Plans $3 Billion R&D Blitz As AI Raises The Stakes For Chipmakers (Benzinga)", url:"https://www.benzinga.com/markets/tech/26/08/61203022/lam-research-plans-3-billion-rd-blitz-as-ai-raises-the-stakes-for-chipmakers"},
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(2/5점) - AMAT·KLAC와 같은 '실적은 좋은데 주가만 빠진' 반도체장비 섹터 재평가 패턴",
        view: "LRCX는 눌림목 점수 2/5점(52주 고점대비 -23.3%)로 매수 관심 초입이에요. PER(35.1배)이 3년 평균(43.3배)보다 낮아 셋 중에서는 상대적으로 밸류에이션 부담이 덜한 편이에요. 재무는 Q2'26 매출 +30.0%·영업이익률 +3.7%p로 견조하고 FCF 마진(18.9%)도 AMAT보다 나아요. AMAT·KLAC와 마찬가지로 실적·가이던스가 좋은데도 주가가 고점대비 20~27% 하락한 반도체 장비 섹터 공통 패턴에 속해 있어요(newsLog) - 낸드·D램 등 메모리 슈퍼사이클(위 MU·SNDK·WDC의 newsLog와 같은 배경)에 필요한 식각·증착 장비 수요가 이 회사 실적에 긍정적으로 작용하고 있을 가능성이 커요. 컨센서스는 내년 매출 +16%·EPS +22%로 세 장비주 중 상대적으로 보수적인 편이에요.",
        increaseIf: [
          "메모리 반도체 슈퍼사이클(D램·낸드 가격 상승)이 지속되며 관련 장비 수주가 늘어나는 게 확인될 때",
          "가이던스 대비 실제 실적이 계속 상회할 때",
        ],
        wrongIf: [
          "메모리 슈퍼사이클이 예상보다 빨리 꺾이며 장비 수주가 둔화될 때(메모리 3종목의 '사이클은 항상 꺾인 전례가 있다'는 경고와 동일한 리스크가 이 종목에도 적용됨)",
          "반도체 장비 섹터 전체의 밸류에이션 재평가가 추가로 진행될 때",
        ],
        watchNext: [
          "다음 분기 수주(Book-to-bill) 지표 및 메모리向 장비 매출 비중",
          "메모리 가격 사이클 추이(MU·SNDK·WDC 실적과 연동해서 볼 것)",
          "중국 매출 비중 변화",
        ],
        confidence: "매출·영업이익률·FCF 수치는 SEC 공시 기반 캐시 데이터 · 섹터 공통 패턴은 복수매체 확인(newsLog 참고) · 메모리 사이클과의 연동성은 Claude의 정성적 추론(직접 검증된 상관관계는 아님)",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-28 마감 분기 (FY2026 4분기)",
        headline: "매출 67.2억 달러(전년동기 대비 +30%, 컨센서스 66.6억 달러 상회)에 non-GAAP EPS 1.82달러(컨센서스 1.69달러 대비 +0.13달러 상회, GAAP EPS는 1.81달러)로 어닝비트했고, 매출·영업마진(GAAP 37.4%, +240bp QoQ) 모두 사측 가이던스 상단 부근에서 마무리됐어요.",
        oneTime: "GAAP-비GAAP 조정항목은 인수 무형자산 상각, 이연보상 조정, 인력 구조조정 비용, 부채할인 상각 정도인데 GAAP EPS(1.81달러)와 non-GAAP EPS(1.82달러) 차이가 0.01달러에 불과해서 이번 분기 실적을 왜곡할 만한 대형 일회성 항목은 사실상 없었어요.",
        coreRead: "영업현금흐름은 14.6억 달러로 전분기(11.4억 달러) 대비는 개선됐지만 전년동기(25.5억 달러)보다는 줄었고, FY2026 연간 영업현금흐름도 58.6억 달러로 전년 61.7억 달러 대비 소폭 감소해서 매출 성장 속도만큼 현금창출력이 따라오진 못했어요. 지역별 매출은 대만 27%·중국 26%·한국 20%·일본 9%·미국 9% 순으로 중국 비중이 여전히 4분의 1을 넘고요. 이번 발표문에는 메모리(NAND/DRAM) vs 로직/파운드리 세부 스핏은 공개되지 않았지만, CEO 팀 아처가 'AI 주도 수요가 반도체 산업을 재편 중'이라며 2026년 3년 연속 아웃퍼폼을 예고한 점은 노트에 있는 3D 구조·GAA 전환 수혜 스토리와 방향이 일치해요.",
        forecast: "회사는 다음 분기(9/27 마감)에 매출 81.0억 달러(±4억), 영업마진 39.5%(±1%), EPS 2.15달러(±0.15달러)로 전분기 대비 약 +20% 급성장을 가이던스로 제시했어요. 제 예상은, HBM·AI 데이터센터향 메모리 투자 사이클이 살아있는 한 실제 매출이 가이던스 상단인 82~84억 달러 근처 혹은 그 이상으로 나올 가능성이 크다는 쪽이에요 — 반대로 매출이 77억 달러를 밑돌면 반도체장비 섹터 재평가 우려(최근 한 달 -20% 조정)가 다시 불붙을 신호로 봐야 해요.",
        confidence: "매출·EPS·가이던스 수치·지역별 매출 비중·영업현금흐름은 2026년 7월 29일 공식 실적발표(GAAP 기준) 및 컨센서스 대비 비교 데이터로 확인된 사실이고, 메모리·로직 믹스 해석과 다음 분기 상회 여부에 대한 전망은 제 자체 추정이라 실제와 다를 수 있어요.",
        sources: [
          {
            title: "Lam Research Corporation Reports Financial Results for the Quarter Ended June 28, 2026",
            url: "https://newsroom.lamresearch.com/2026-07-29-Lam-Research-Corporation-Reports-Financial-Results-for-the-Quarter-Ended-June-28,-2026",
          },
          {
            title: "Lam Research (LRCX) Earnings",
            url: "https://www.marketbeat.com/stocks/NASDAQ/LRCX/earnings/",
          },
          {
            title: "Lam Research (LRCX) News",
            url: "https://www.stocktitan.net/news/LRCX/",
          },
        ],
      },
    ],
    role: {
      tags: ["식각(etch)·증착 장비"],
      stars: 4,
      note: "식각 장비 시장 점유율 약 55%로 이 공정에서는 지배적 위치예요. AI·클라우드발 3D 구조·게이트올어라운드(GAA) 트랜지스터 전환을 직접 수혜하고 있고, 어닝비트·가이던스 상향에도 한 달 새 주가가 -20% 넘게 빠질 만큼 반도체장비 섹터 전체가 재평가 국면에 있어요.",
    },
  },
  KLAC: {
    updated: "2026-08-20",
    customers: [
      "선단 로직·메모리 파운드리(TSMC·삼성 등) - 결함 검사·계측(공정관리) 장비, 반도체 패키징·PCB·컴포넌트 업체까지 폭넓게 포함",
    ],
    strengths: [
      "공정관리(결함검사·계측) 시장 점유율 약 60%로 경쟁사가 사실상 없는 독점적 지위 - 2021년 이후 점유율이 360bp 더 확대돼 2위 경쟁사 대비 7배 규모",
      "반도체 설계가 복잡해질수록(첨단공정 전환) 웨이퍼 수량 증가보다 검사·계측 수요가 더 빠르게 늘어나는 구조적 수혜",
      "2026년 공정관리 장비 시장이 전체 웨이퍼장비 시장보다 더 빠르게(20%대) 성장할 전망",
    ],
    risks: [
      "⚠️ 좋은 실적에도 중국 수출규제 우려로 주가가 크게 흔들림(상세는 아래 newsLog 참고) - 매출의 약 30%가 중국에서 발생해 지정학적 정책 변화에 민감",
      "소수 초대형 고객(TSMC·삼성 등)에 대한 매출 의존도가 높음",
    ],
    sources: [
      {title:"Can Rising Process Control Intensity Drive KLA's Next Growth Phase? (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/rising-process-control-intensity-drive-130000496.html"},
      {title:"KLA (KLAC) Has a Services-and-Process-Control Engine Bigger Than the Wafer-Fab Cycle (Alphastreet)", url:"https://news.alphastreet.com/kla-klac-has-a-services-and-process-control-engine-bigger-than-the-wafer-fab-cycle/"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 실적 상회·가이던스 상향에도 마진 믹스 우려로 주가 하락 - 펀더멘털은 견조",
        importance: "medium",
        tone: "positive",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["FY26 4분기 매출 약 35.75~36.6억 달러, EPS 1.04달러로 예상을 상회했다.", "AI 반도체 수요 가속화로 다음 분기 매출 가이던스를 약 40억 달러로 상향했다.", "실적 호조에도 마진 믹스 우려로 주가는 발표 후 하락했다."],
        why: ["AI 수요 수혜 서사가 유지되고 있고 실적·가이던스가 모두 상회했다는 점에서, 주가 하락은 밸류에이션·마진 이슈 성격이 강하다."],
        beginner: ["성적도 좋고 앞으로 전망(가이던스)도 더 좋아졌는데, '이익의 질(마진 구성)'에 대한 걱정 때문에 주가가 빠졌어요. 사업 자체가 나빠진 건 아니에요."],
        interpretation: "AI 반도체 장비 수요 확대라는 핵심 서사는 여전히 유효해, 낙폭과다가 사업 악화의 신호로 보이지 않는다.",
        decision: "이 뉴스 자체가 매수 신호는 아니지만, 낙폭과다 신호와 방향이 같은(긍정) 사례로 참고할 것.",
        watch: ["다음 분기 마진 믹스 개선 여부", "40억 달러 가이던스 달성 여부"],
        confidence: "회사 공식 실적 발표(KLA IR) 기준 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"KLA Corporation Reports Fiscal 2026 Fourth Quarter and Full Year Results (KLA IR)", url:"https://ir.kla.com/news-events/press-releases/detail/518/kla-corporation-reports-fiscal-2026-fourth-quarter-and-full"},
        {title:"KLA Q4 FY2026 slides: record revenue, but shares fall on margin mix (Investing.com)", url:"https://www.investing.com/news/company-news/kla-q4-fy2026-slides-record-revenue-but-shares-fall-on-margin-mix-93CH-4818307"},
        ],
      },
      {
        date: "2026-08-13",
        headline: "실적발표 직후 +5.5% 상승했으나 이후 한 달간 -10.7% - 중국 수출규제 우려 재점화(매출의 약 30%가 중국)",
        coreAnalysis: "KLA는 시장에서 '깔끔한 어닝비트'라고 평가한 실적과 낙관적인 가이던스(2027 회계연도 1분기 매출 $4.0B±$200M, 비GAAP EPS $1.16±$0.10)를 내놓으며 실적 발표 당일 주가가 5.5% 상승했음. 그러나 그 이후 한 달 사이 주가는 약 10.74% 하락했는데, 애널리스트들은 이를 미국 산업안보국(BIS)의 대중국 수출규제가 새로 강화될 수 있다는 우려 재점화 때문으로 봄 - KLA는 지난 회계연도 중국에서만 약 $4.04B(연매출의 약 30%)를 벌어들여 노출도가 상당함. 이사회는 분기 배당($0.23/주, 9월 1일 지급)도 그대로 유지 발표했고, Zacks는 8월 1일 이 종목을 'Strong Buy'로 상향했음(주가는 여전히 하락 중이던 시점).",
        whyItMatters: "AMAT·LRCX와 마찬가지로 '좋은 실적에도 주가 하락'이지만, KLA는 그 이유가 상대적으로 명확함(막연한 밸류에이션 피로가 아니라 구체적인 중국 수출규제 리스크) - 매출의 30%라는 수치화된 노출도가 있어서, 실제 BIS 규제 발표가 나오는지가 다음 핵심 변수임. 지금은 아직 확정된 규제가 아니라 '우려' 단계라는 점도 구분해서 봐야 함.",
        beginnerSummary: "KLA도 실적 발표 직후엔 주가가 올랐는데(+5.5%), 그 뒤 한 달 사이 오히려 10% 넘게 떨어졌어요. 이유는 미국 정부가 중국에 대한 반도체 장비 수출 규제를 더 강화할 수 있다는 우려 때문이에요 - KLA는 매출의 약 30%를 중국에서 벌어들이고 있어서 이런 규제에 특히 민감해요. 아직 실제로 규제가 확정된 건 아니고 '그럴 수도 있다'는 우려 단계예요.",
        confidence: "실적·가이던스는 회사 공식 발표 기준(신뢰도 높음) · 중국 매출 비중은 회사 연차보고서 기준(신뢰도 높음) · 주가 하락을 수출규제 우려로 연결짓는 건 애널리스트 해석(신뢰도 중간, 아직 규제 확정 아님)",
        sources: [
          {title:"KLA Corporation Has Had a Rough Month: A Wall Street Pro Sees 70% Upside Because of It (24/7 Wall St.)", url:"https://247wallst.com/investing/2026/08/08/kla-corporation-has-had-a-rough-month-a-wall-street-pro-sees-70-upside-because-of-it/"},
          {title:"KLA Declares Regular Cash Dividend (PR Newswire, 공식)", url:"https://www.prnewswire.com/news-releases/kla-declares-regular-cash-dividend-302845379.html"},
        ],
      },
      {
        date: "2026-08-20",
        headline: "약 $2B 규모 금리스왑 익스포저 - SOFR 상승·거래상대방 리스크 노출 보도",
        coreAnalysis: "KLA가 약 $2B 규모의 금리스왑(interest rate swap) 계약에 노출돼 있고, 기준금리(SOFR) 상승과 거래상대방(카운터파티) 리스크에 민감하다는 보도가 나왔다. 위 8/13 newsLog의 중국 수출규제 우려와는 별개로, 재무구조 측면의 금리 리스크가 새로 부각된 것이다.",
        whyItMatters: "금리스왑 자체는 많은 대기업이 금리 변동 위험을 관리(헤지)하기 위해 쓰는 일반적인 금융 도구라 존재 자체가 이상 신호는 아니다. 다만 SOFR(미국 단기 기준금리) 상승 국면에서는 스왑 계약의 조건에 따라 KLA가 오히려 추가 비용을 부담하게 될 수도 있고, 거래상대방(금융기관)의 신용 문제가 생기면 헤지 효과 자체가 흔들릴 수 있다 - 이번 조사에서는 헤드라인 수준의 보도만 확인했고, 실제 계약 조건(고정금리 지급/변동금리 수취 여부 등)과 재무제표상 영향은 확인하지 못해 다음 갱신 때 10-Q 등 공시로 직접 확인이 필요하다.",
        beginnerSummary: "KLA가 금리 변동 위험을 관리하기 위해 맺어둔 약 20억 달러 규모의 금융 계약(금리스왑)이 있는데, 최근 기준금리가 오르면서 이 계약 때문에 오히려 비용 부담이 생길 수 있다는 보도가 나왔어요. 이런 계약 자체는 큰 회사들이 흔히 쓰는 위험 관리 수단이라 있다는 사실만으로 나쁜 건 아니지만, 정확히 회사에 유리한 조건인지 불리한 조건인지는 이번 조사로는 확인하지 못했어요.",
        confidence: "보도 사실 자체는 매체 보도 기준(신뢰도 중간) - 계약의 구체적 조건과 실제 재무 영향은 이번 조사에서 미확인(추측하지 않고 다음에 공시 원문으로 확인할 것)",
        sources: [],
      },
    ],
    viewLog: [
      {
        date: "2026-08-18",
        headline: "매수 관심(3/5점) - 반도체장비 3사 중 유일하게 하락 원인이 비교적 명확함(중국 수출규제 우려, 매출의 30%가 중국)",
        view: "KLAC은 눌림목 점수 3/5점(52주 고점대비 -32.5%)로 매수 관심 구간이에요. PER(37.4배)이 3년 평균(50.4배)보다 낮아서 밸류에이션은 상대적으로 부담이 덜해요. 재무는 Q2'26 매출 +15.2%로 견조하지만 영업이익률은 -0.1%p로 거의 변화 없이 '유지' 수준이에요. AMAT·LRCX와 같은 반도체 장비 섹터 재평가 패턴에 속하지만, KLAC은 셋 중 유일하게 하락 원인이 비교적 명확하게 확인됐어요 - 중국 수출규제 우려가 재점화된 게 원인이고, 이 회사는 매출의 30%가 중국向이라 다른 두 장비주보다 규제 민감도가 더 커요(newsLog). 즉 이 종목은 '기대치 재평가'뿐 아니라 '구체적인 지정학 리스크'가 겹쳐 있는 케이스라, 다른 두 장비주보다 조금 더 신중하게 볼 필요가 있어요. 컨센서스는 내년 매출 +16%·EPS +21%로 AMAT·LRCX와 비슷한 수준의 성장을 예상해요.",
        increaseIf: [
          "중국向 수출규제가 예상보다 완화되거나 명확해져서 불확실성이 해소될 때",
          "중국 외 지역(미국·대만 등) 매출 비중 확대로 규제 리스크가 분산될 때",
        ],
        wrongIf: [
          "중국向 수출규제가 실제로 강화돼 매출의 30%를 차지하는 중국 매출에 구체적 타격이 확인될 때",
          "영업이익률이 '유지'에서 '압박'으로 악화될 때",
        ],
        watchNext: [
          "미국 정부의 대중 반도체 장비 수출규제 추가 조치 여부",
          "다음 분기 중국 매출 비중 변화",
          "계측·검사 장비 수요(메모리 슈퍼사이클과 연동 가능성)",
        ],
        confidence: "매출·영업이익률 수치는 SEC 공시 기반 캐시 데이터 · 중국 매출 비중·수출규제 우려는 복수매체 확인(newsLog 참고, KLAC은 3사 중 원인이 가장 명확하게 확인된 케이스) · 규제 전개 방향에 대한 전망은 Claude의 정성적 판단",
        sources: [],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (FY2026 4분기, 회계연도 기준 마감)",
        headline: "KLA가 2026년 7월 28일 발표한 FY2026 4분기 매출은 36.6억 달러, GAAP 희석 EPS 1.04달러(비GAAP 1.05달러)로, 발표 직후 Cantor Fitzgerald·UBS·Wells Fargo·Susquehanna·RBC·Bernstein·BofA·Morgan Stanley 등 다수 애널리스트가 목표주가를 상향 조정했어요(예: Berenberg는 매수 유지·목표가 230달러).",
        oneTime: "FY2026 전체 기준으로 인수 관련 비용 1억 7,810만 달러가 GAAP 실적을 눌렀고, 이산적 세금 항목에서는 2,180만 달러 이익이 반영됐어요. 회사는 FY2026에 구조조정이나 영업권 손상 charge는 없었다고 밝혔어요.",
        coreRead: "CEO Rick Wallace는 실적 발표에서 \"6월 분기 실적은 성장 동력이 강화되고 있음을 재확인시켜주며, 2026년 하반기와 2027년까지 모멘텀이 가속화되고 있다\"고 언급했어요. 성장 드라이버는 AI 인프라 확장에 따른 파운드리/로직 최선단 공정, 메모리 복잡도 증가, 신흥 어드밴스드 패키징 수요예요. 다만 이번 4분기 실적 발표 자료에는 지역별(중국 등) 매출 비중이 별도로 공개되지 않아서, 기존 노트의 '중국 매출 약 30%' 트렌드가 이번 분기에 실제로 어떻게 움직였는지는 이번 조사로 새로 확인하지 못했어요 — 다만 같은 시기(8월 5일) 로이터 보도로 '삼성·SK하이닉스가 미국발 리스크에 대한 헤지로 중국산 반도체 장비를 테스트 중'이라는 기사가 나와서, 중국의 자국산 장비 대체 시도라는 구조적 리스크는 여전히 살아있는 테마로 보여요.",
        forecast: "회사가 제시한 FY2027 1분기(9월 마감) 가이던스는 매출 40억 달러(±2억 달러), 비GAAP EPS 1.16달러(±0.10달러)예요. 이는 직전 분기(36.6억 달러/1.05달러) 대비 매출 약 9%, EPS 약 10% 증가한 수치라서, 10월 말 실제 발표 때 매출이 38억~42억 달러 밴드 안에 들어오고 비GAAP EPS가 1.06~1.26달러 범위에서 나올지가 1차 체크포인트가 될 거예요. 만약 매출이 이 밴드 하단(38억 달러) 아래로 떨어지면 AI발 수요 가속 스토리에 제동이 걸린 신호로 봐야 해요.",
        confidence: "매출/EPS 실적치와 FY2027 1분기 가이던스, 인수 관련 비용·세금 이연 항목 수치는 KLA 공식 보도자료(ir.kla.com)에서 확인한 사실이에요. 애널리스트 목표가 상향 정보는 investing.com 뉴스 피드로 확인했고, 중국 자국산 장비 테스트 관련 로이터 기사 제목은 확인했지만 본문 세부 내용까지는 직접 열람하지 못했어요. 중국 매출 비중이 이번 분기에 30%에서 변화했는지에 대한 정량적 확인은 실패했으므로 그 부분은 제 해석이 아니라 '미확인'으로 남겨둬요.",
        sources: [
          {
            title: "KLA Corporation Reports Fiscal 2026 Fourth Quarter and Full Year Results",
            url: "https://ir.kla.com/news-events/press-releases/detail/518/kla-corporation-reports-fiscal-2026-fourth-quarter-and-full",
          },
          {
            title: "Kla-tencor Corp receives Investment Bank Analyst Rating Update (Berenberg maintains Buy, $230 price target)",
            url: "https://www.investing.com/news/pro/berenberg-maintains-kla-corp-at-buy-with-a-price-target-of-23000-4823463",
          },
          {
            title: "Samsung, SK Hynix test Chinese chip tools as hedge against US risks",
            url: "https://www.investing.com/equities/kla-tencor-corp-news",
          },
        ],
      },
    ],
    role: {
      tags: ["검사·계측 장비(공정관리)"],
      stars: 4,
      note: "반도체가 복잡해질수록 defect(결함) 관리가 중요해지는데, 이 분야 점유율이 약 60%로 2위 업체보다 7배 규모예요. 다만 매출의 약 30%가 중국이라 수출규제 우려가 재점화될 때마다 주가가 민감하게 반응해요.",
    },
  },
  ANET: {
    updated: "2026-08-26",
    customers: [
      "클라우드 타이탄(Meta, Microsoft 등 대형 하이퍼스케일러)이 핵심 고객 - Microsoft 한 곳이 2025년 매출의 약 26%를 차지한 것으로 보도(고객 집중도 매우 높음).",
      "2026년 1분기 매출 전년比 35.1% 증가한 27억 900만 달러, 2026 회계연도 매출 가이던스를 약 115억 달러로 상향.",
      "AI 데이터센터向 이더넷 스위칭 수요 급증 - AI 백엔드 네트워크에서 InfiniBand를 대체하는 흐름 확대.",
      "2026년 2분기 분기 매출이 사상 처음 30억 달러 돌파.",
    ],
    strengths: [
      "데이터센터 스위칭 시장에서 AI 트렌드를 타고 Cisco를 제치고 1위 자리 유지.",
      "EOS(Extensible Operating System) 기반 단일 소프트웨어 아키텍처로 고객 락인 효과, 고성능·저지연 스위칭 기술 우위.",
      "대형 하이퍼스케일러들과의 장기 파트너십을 통해 차세대 AI 클러스터 설계 단계부터 공동 개발, 높은 전환비용.",
    ],
    risks: [
      "⚠️ Microsoft, Meta 등 소수 대형 고객에 대한 매출 의존도가 매우 높아(Microsoft 단독 약 26%), 특정 고객의 설비투자 축소·자체 개발 전환 시 실적 직접 타격 가능.",
      "Nvidia가 자체 네트워킹 솔루션(스위치·NIC)을 통해 데이터센터 네트워킹 시장에 본격 진출하며 새로운 경쟁자로 부상.",
      "캠퍼스 네트워킹 등 비 AI 영역에서는 Cisco, HPE(Juniper) 등과의 경쟁이 여전히 치열.",
    ],
    sources: [
      {title:"Microsoft Drives 26% Of Arista Revenue", url:"https://www.tradingview.com/news/gurufocus:09df08b61094b:0-microsoft-drives-26-of-arista-revenue/"},
      {title:"'AI tailwind' keeps Arista at No. 1 spot in data center switching — now Nvidia looms", url:"https://www.fierce-network.com/cloud/arista-rides-ai-past-cisco-now-nvidia-looms"},
      {title:"Arista Networks Just Delivered Its First $3 Billion Quarter", url:"https://www.theglobeandmail.com/investing/markets/stocks/MSFT/pressreleases/3662669/arista-networks-just-delivered-its-first-3-billion-quarter-heres-what-it-means-for-the-ai-networking-trade/"},
      {title:"Arista Networks Raises AI Target As Ethernet Challenges InfiniBand In Cloud", url:"https://finance.yahoo.com/markets/stocks/articles/arista-networks-raises-ai-target-220451447.html"},
    ],
    newsLog: [
      {
        date: "2026-08-27",
        headline: "아리스타, 2분기 사상 첫 30억달러 매출 발표 후 주가 급등, JP모건 목표주가 220→250달러로 상향",
        importance: "high",
        tone: "positive",
        horizon: "단기~중기 (다음 분기 실적까지 모멘텀 지속 여부 확인)",
        facts: [
          "8월 4일 발표된 2026년 2분기 실적에서 매출 30.36억달러(+37.7% YoY), 비GAAP EPS 1.02달러를 기록했고, 회사는 2026년 연간 매출 가이던스를 115억달러에서 126억달러로 상향했어요.",
          "실적 발표 다음 날 주가는 하루 만에 약 12% 급등했고, 8월 5일 JP모건은 목표주가를 220달러에서 250달러로 올리며 비중확대(Overweight) 의견을 유지했어요.",
          "IDC 집계 기준 2026년 1분기 데이터센터 이더넷 스위칭 시장 자체가 전년비 약 60%대 성장한 것으로 나타나 엔비디아·아리스타가 동반 성장하는 국면일 가능성을 시사해요.",
        ],
        why: [
          "이번 실적은 강점 섹션의 '견조한 마진·현금흐름'과 '공급망 선제 대응'을 뒷받침하는 동시에, CEO가 언급한 '10% 이상 고객 1~2곳' 발언은 마이크로소프트·메타에 대한 고객 집중 리스크가 여전함을 보여줘요.",
          "엔비디아 Spectrum-X와의 경쟁 구도 속에서도 아리스타가 37.7%의 자체 성장률을 유지하고 있다는 점은 시장 자체가 커지는 국면임을 시사해요.",
        ],
        beginner: [
          "아리스타가 2026년 2분기에 분기 최초로 매출 30억달러를 넘겼고, 앞으로의 실적 전망(가이던스)도 크게 올려잡았어요.",
          "실적이 예상보다 훨씬 좋아서 발표 다음 날 주가가 하루 만에 12%나 뛰었고, 월가의 큰 증권사인 JP모건도 목표주가를 올렸어요. 다만 이 성장의 상당 부분이 마이크로소프트·메타 같은 몇 안 되는 대형 고객에 쏠려 있다는 점은 계속 지켜봐야 해요.",
        ],
        interpretation: "실적·가이던스 모두 견조했고 시장 성장 자체가 뒷받침되고 있어 긍정적이지만, 고객 집중도와 엔비디아와의 경쟁 구도는 구조적으로 남아있는 리스크예요.",
        decision: "실적 모멘텀은 긍정적이나 이미 주가에 상당 부분 반영된 만큼, 신규 매수보다는 다음 분기 실적에서 고객 다변화·점유율 방어가 확인되는지 지켜보는 게 좋아요.",
        watch: [
          "3분기(9월 마감) 실적에서 매출이 가이던스(약 33억달러)를 충족하는지",
          "IDC/Dell'Oro 다음 분기 시장점유율 발표에서 아리스타 vs 엔비디아 Spectrum-X 순위 변동",
        ],
        confidence: "실적 수치와 가이던스는 회사의 공식 SEC 보도자료 기반 고신뢰 정보이고, JP모건 목표가 변경과 주가 급등폭은 2차 보도(Yahoo Finance, businesswire) 인용으로 중~고신뢰, 해석 부분은 제 판단이에요.",
        sources: [
          {
            title: "JPMorgan Resets Arista Stock Target After AI Surge",
            url: "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-resets-arista-stock-target-035711424.html",
          },
          {
            title: "Arista Networks, Inc. Reports Second Quarter 2026 Financial Results",
            url: "https://www.businesswire.com/news/home/20260804130700/en/Arista-Networks-Inc.-Reports-Second-Quarter-2026-Financial-Results",
          },
          {
            title: "NVIDIA Becomes #1 in Datacenter Ethernet Switching as 1Q26 Market Surges 39.8% to $15.4 Billion",
            url: "https://www.idc.com/resource-center/blog/nvidia-becomes-1-in-datacenter-ethernet-switching-as-1q26-market-surges-39-8-to-15-4-billion/",
          },
        ],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기)",
        headline: "매출 30.36억달러(+37.7% YoY)로 사상 첫 분기 매출 30억달러를 돌파하며 시장 예상치를 상회했고, 이를 바탕으로 회사는 2026년 연간 매출 가이던스를 115억달러에서 126억달러(+40% YoY)로 상향했어요.",
        oneTime: "GAAP 순이익(12.13억달러)과 비GAAP 순이익(13.02억달러)의 차이는 주로 스톡옵션 보상비용(상반기 누적 2.413억달러), 자사주 보상 관련 세제 혜택(3090만달러), 전략적 투자 평가이익(600만달러) 조정 때문이며, 보도자료에서 대규모 손상차손이나 소송·구조조정 같은 왜곡성 일회성 항목은 확인되지 않았어요.",
        coreRead: "상반기 영업현금흐름 27.77억달러, 비GAAP 총마진 63.4%, 3분기 비GAAP 영업이익률 가이던스도 48~49%로 유지되는 걸 보면 핵심 사업 수익성은 매우 건강해요. 다만 CEO의 '공급 부족이 2028년까지 이어질 것'이라는 발언을 감안하면 최근 매출 급증 중 일부는 순수 신규 수요 확대뿐 아니라 그동안 밀려있던 이연 주문이 풀리며 나타난 효과가 섞여 있을 수 있어요.",
        forecast: "3분기(2026년 9월 마감) 가이던스는 매출 약 33억달러, 비GAAP EPS 1.06~1.08달러인데, 회사가 부품 구매약정을 97억달러로 늘리고 메모리를 2027년까지 확보해둔 만큼 3분기에도 가이던스 상단 또는 이를 소폭 상회하는 실적이 나올 가능성이 높다고 봐요. 반대로 3분기 매출이 33억달러를 밑돈다면 공급망 정상화 서사에 금이 가는 신호로 볼 수 있어요.",
        confidence: "매출·EPS·가이던스 수치는 회사의 공식 실적발표(SEC 8-K 첨부 보도자료, businesswire)에 기반한 고신뢰 사실이고, 공급 부족이 2028년까지 이어진다는 코멘트는 CEO의 실적 콜 발언을 인용한 것으로 발언 자체는 고신뢰 인용이지만 그 예측의 정확성은 회사의 주관적 전망이에요. coreRead와 forecast의 해석 부분은 제 판단이라 상대적으로 신뢰도가 낮아요.",
        sources: [
          {
            title: "Arista Networks, Inc. Reports Second Quarter 2026 Financial Results",
            url: "https://www.businesswire.com/news/home/20260804130700/en/Arista-Networks-Inc.-Reports-Second-Quarter-2026-Financial-Results",
          },
          {
            title: "Press release issued by Arista Networks, Inc. dated August 4, 2026 (SEC filing exhibit)",
            url: "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000174/ex991q226-earningsrelease.htm",
          },
          {
            title: "[ANET Q2 2026 Earnings Call] Arista Networks Shatters $3B Quarterly Revenue for First Time, Raises 2026 Outlook to $12.6B",
            url: "https://finance.biggo.com/news/US_ANET_2026-08-04",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "밸류에이션(forward PER 49.2배)은 여전히 부담스럽지만, 가이던스 상향과 견조한 현금흐름이 이를 상당 부분 뒷받침하는 국면",
        view: "현재가 202.25달러 기준 아리스타의 forward PER은 약 49.2배로 3년 평균(43.6배)보다 높은 프리미엄 구간이에요. 하지만 2026년 2분기 매출이 37.7% 성장했고 회사가 연간 가이던스를 126억달러(+40%)로 올렸다는 점, 비GAAP 총마진 63.4%·영업이익률 가이던스 48~49%를 유지하고 있다는 점을 보면 밸류에이션 프리미엄이 최근 실적 모멘텀으로 어느 정도 정당화되는 국면이에요. 다만 IDC 집계 기준 2026년 1분기 데이터센터 이더넷 스위칭 시장에서 엔비디아 Spectrum-X(점유율 21.5%, YoY +192.7%)가 아리스타(약 20.7%, YoY +37.3%)를 근소하게 앞서기 시작했고, 마이크로소프트·메타 두 고객에 대한 매출 의존도가 40%를 넘는 것으로 추정되는 만큼, 단일 고객 이슈나 경쟁사의 추가 점유율 잠식이 밸류에이션에 빠르게 반영될 수 있는 구조예요.",
        increaseIf: [
          "2026년 3분기(9월 마감) 실적에서 매출이 가이던스 상단(약 33억달러)을 넘어서고 비GAAP 영업이익률이 48~49% 가이던스를 유지하거나 상회하는 경우",
          "마이크로소프트·메타 외 신규 하이퍼스케일러나 엔터프라이즈/캠퍼스 부문에서 매출 비중이 눈에 띄게 확대되는 경우",
        ],
        wrongIf: [
          "다음 IDC/Dell'Oro 분기 리포트에서 엔비디아의 데이터센터 이더넷 스위칭 점유율이 아리스타 대비 격차를 뚜렷하게(예: 5%p 이상) 벌리는 경우",
          "마이크로소프트 또는 메타 중 한 곳이라도 발주를 유의미하게 줄이거나 자체 개발 네트워킹 칩으로 전환한다는 뉴스가 확인되는 경우",
        ],
        watchNext: [
          "2026년 11월경 발표될 3분기 실적에서 매출/비GAAP EPS가 가이던스(매출 약 33억달러, EPS 1.06~1.08달러)를 충족하는지 여부",
          "IDC/Dell'Oro의 다음 분기 데이터센터 이더넷 스위칭 시장점유율 발표에서 아리스타 vs 엔비디아 Spectrum-X 순위 변동",
          "차기 10-Q/10-K에서 마이크로소프트·메타 매출 비중 변화 추이",
        ],
        confidence: "가격·PER·실적 숫자는 공식 자료 및 로컬 데이터 기반 고신뢰, 시장점유율 수치는 IDC 발표 기반 고신뢰이며, 향후 전망과 인과관계 해석 부분은 제 판단이라 낮은 신뢰도로 참고해주세요.",
        sources: [],
      },
    ],
    role: {
      tags: ["AI 데이터센터 이더넷 스위칭·네트워킹 장비"],
      stars: 4,
      note: "하이퍼스케일러 데이터센터 네트워킹 장비 시장의 오랜 1위로 메타·마이크로소프트와 차세대 AI 패브릭을 공동 설계할 만큼 신뢰받는 파트너예요. 다만 2026년 1분기 기준 엔비디아의 Spectrum-X가 점유율 21.5%로 아리스타(약 19%)를 제치고 데이터센터 이더넷 스위칭 1위에 올라, 예전만큼 독보적이지는 않은 경쟁 구도로 바뀌고 있어요.",
    },
  },
  COHR: {
    updated: "2026-08-26",
    customers: [
      "AI 데이터센터向 광트랜시버 및 레이저 부품이 핵심 성장 동력 - 하이퍼스케일 클라우드·AI 인프라 기업들이 주 고객.",
      "2026회계연도 4분기에는 1.6T 트랜시버 출하가 본격 확대, CPO(Co-Packaged Optics) 관련 매출도 가시화.",
      "OFC 2026(광통신 전시회)에서 AI 스케일 광학 혁신 제품을 대거 공개하며 업계 리더십 강조.",
    ],
    strengths: [
      "800G/1.6T 등 최첨단 고속 트랜시버 라인업에서 Lumentum과 함께 선두권 형성, 수직계열화된 레이저·광학 부품 제조 역량.",
      "2026년 8월 미국 FCC가 중국산 광트랜시버 수입 규제를 검토 중이라는 보도로 최대 경쟁사 중국 Innolight(점유율 약 27%)의 입지가 흔들릴 경우 반사이익 기대.",
      "자체 레이저·광학 소재 생산 능력을 보유해 공급망 수직 통합에 따른 원가·품질 통제력 우위.",
    ],
    risks: [
      "⚠️ 중국 Innolight 등이 이미 글로벌 광트랜시버 상위 10위 중 다수를 차지할 정도로 저가 공세 - 규제 향방에 따라 반사이익·역풍(공급망 내 중국산 인듐 등 소재 의존) 양쪽 시나리오.",
      "Lumentum, Applied Optoelectronics 등과의 경쟁 심화, 고객사(하이퍼스케일러)의 자체 광학 설계 내재화 시도도 잠재적 위협.",
      "AI 데이터센터 투자 사이클에 대한 매출 의존도가 높아 향후 AI 설비투자 둔화 시 실적 변동성.",
    ],
    sources: [
      {title:"Coherent Q3 FY 2026: AI Data Center Demand Accelerates Optical Growth", url:"https://futurumgroup.com/insights/coherent-q3-fy-2026-ai-data-center-demand-accelerates-optical-growth/"},
      {title:"The FCC Mulls Banning China-Sourced Optical Transceivers, Threatening Innolight's 27% Global Market Share", url:"https://wccftech.com/the-fcc-mulls-banning-china-sourced-optical-transceivers-threatening-innolights-27-global-market-share-as-coherent-and-lumentum-prepare-to-pounce/"},
      {title:"FCC Transceiver Ban Would Cut 60% of AI Data Center Supply; Western Replacements Need Chinese Indium", url:"https://www.techtimes.com/articles/323104/20260805/fcc-transceiver-ban-would-cut-60-ai-data-center-supply-western-replacements-need-chinese-indium.htm"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 사상 최대 실적에도 '옵틱스 vs 메모리' 밸류에이션 논쟁으로 주가 급락 - 사업은 견조, 심리는 불안",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-08-12 FY26 4분기 가이던스를 상회하는 사상 최대 실적('Record Fiscal 2026 Earnings')을 발표했다.", "경영진은 향후 '분기 매출 30억 달러' 목표를 제시했고, 1.6T 광트랜시버·CPO 매출 확대를 강조했다.", "호실적에도 주가는 발표 후 급락(-5.7%~-9%) - 차익실현 및 '옵틱스 vs 메모리' 소셜미디어발 밸류에이션 논쟁이 영향을 준 것으로 보도됐다."],
        why: ["실적·가이던스 자체는 견조한데 업종 전체(AI 인프라)의 밸류에이션 심리가 흔들리며 동반 조정을 받은 것으로 해석된다."],
        beginner: ["회사 성적표는 역대 최고였는데, 'AI 관련 주식들이 너무 비싼 거 아니냐'는 논쟁이 SNS에서 커지면서 주가가 같이 빠졌어요. 회사 문제라기보다 업종 전체 분위기 문제에 가까워요."],
        interpretation: "사업 펀더멘털(AI 데이터센터向 광통신 수요)은 훼손되지 않았고, 하락은 업종 심리 요인 성격이 강하다.",
        decision: "이 뉴스 자체가 매수 신호는 아니지만, 실적과 주가 반응이 괴리된 사례로 참고할 것.",
        watch: ["다음 분기 매출 목표(30억 달러) 달성 경로", "업종 전반 밸류에이션 논쟁 지속 여부"],
        confidence: "실적 수치는 회사 공식 발표 기준, 주가 반응 원인은 다수 매체(247wallst, Yahoo Finance)의 해석 - 신뢰도 중간~높음.",
        directionCheck: true,
        sources: [
        {title:"Coherent Corp. Reports Fourth Quarter and Full Year Fiscal 2026 Results (GlobeNewswire)", url:"https://www.globenewswire.com/news-release/2026/08/12/3344051/11543/en/coherent-corp-reports-fourth-quarter-and-full-year-fiscal-2026-results.html"},
        {title:"Coherent's Q4 Earnings Call Set a New Target: $3 Billion in Quarterly Revenue (TIKR)", url:"https://www.tikr.com/blog/coherents-q4-earnings-call-set-a-new-target-3-billion-in-quarterly-revenue-heres-what-that-means-for-the-stock"},
        {title:"Coherent (COHR) Stock Is Tumbling Today After Massive Optics vs. Memory Debate on Social Media (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/coherent-cohr-stock-tumbling-today-193739050.html"},
        ],
      },
    ],
    updated: "2026-08-19",
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (FY26 4분기)",
        headline: "4분기 매출 $20.45억(전년비 +34%, 전분기비 +13.3%)로 사상 최대치를 기록했고 비GAAP EPS $1.74로 컨센서스를 웃돌았으며, 다음 분기(FY27 1분기) 가이던스도 매출 $22~24억·비GAAP EPS $1.85~2.05로 시장 컨센서스($21.3억·$1.77)를 8~10% 상회하는 '비트 앤 레이즈'였어요.",
        oneTime: "GAAP 순이익에는 4분기 기준 자산매각예정 손상차손 $44.3M, 구조조정비용 $6.1M, 주식보상비용 $53.9M, 지분투자 매각이익 $38.4M이 반영됐고, 연간으로는 항공우주·방산 및 뮌헨 공구사업 매각이익 $124.1M(주로 3분기 인식), 연간 구조조정비 $63.4M, 손상차손 $64.4M, 주식보상비용 $193.8M이 GAAP-비GAAP 차이를 만들었어요. GAAP EPS는 4분기 $1.19(전년동기 -$0.83)로 흑자전환했지만 이런 항목들이 섞여있어 추세 파악에는 비GAAP $1.74가 더 적합해요.",
        coreRead: "진짜 주목할 부분은 현금흐름이에요. FY26 영업활동현금흐름이 $79.5M로 전년 $633.6M 대비 87% 급감했고, CapEx는 $1,103M로 150% 급증하면서 잉여현금흐름(FCF)이 -$1,023M까지 악화됐어요. 재고자산이 연간 약 $1.18B 늘어난 영향이 커서, AI 트랜시버 수요에 대비해 공격적으로 재고·생산능력을 쌓고 있다는 뜻이지만 동시에 지금의 이익 성장이 영업현금창출이 아니라 재고 선투자·자본조달로 뒷받침되고 있다는 의미이기도 해요. 비GAAP 지표만 보면 견조하지만 이 재고가 실제 매출로 얼마나 빨리 전환되는지가 관건이에요.",
        forecast: "다음 분기(FY27 1분기, 2026년 9월 마감)에는 매출이 가이던스 범위($22~24억) 안에 들어오고 비GAAP EPS도 $1.85~2.05 범위를 지킬 것으로 보지만, 저마진 트랜시버 비중 확대로 비GAAP 총마진은 가이던스 상단(41.5%)보다 하단(39.5~40%)에 가깝게 나올 가능성이 높다고 봐요. 만약 영업현금흐름이 이번에도 큰 폭 마이너스를 유지하거나 총마진이 39.5% 밑으로 떨어지면 '재고투자→매출전환' 스토리에 균열이 생긴 것으로 판단할게요.",
        confidence: "매출·EPS·현금흐름·가이던스 숫자는 2026년 8월 12일 발표된 공식 실적발표(보도자료/8-K) 기준의 확인된 사실이고, 다음 분기 마진 방향성 예측과 '재고→매출 전환 속도가 관건'이라는 해석은 제 판단이에요.",
        sources: [
          {
            title: "Coherent Corp. Reports Fourth Quarter and Full Year Fiscal 2026 Results",
            url: "https://www.coherent.com/news/press-releases/fourth-quarter-and-fiscal-year-2026-results",
          },
          {
            title: "Coherent Corp. Reports Fourth Quarter and Full Year Fiscal 2026 Results",
            url: "https://www.globenewswire.com/news-release/2026/08/12/3344051/11543/en/coherent-corp-reports-fourth-quarter-and-full-year-fiscal-2026-results.html",
          },
          {
            title: "Coherent FY26 Earnings: Q4 Revenue Hits $2.05B | COHR Stock News",
            url: "https://www.stocktitan.net/news/COHR/coherent-corp-reports-fourth-quarter-and-full-year-fiscal-2026-4dp7hm0orxpy.html",
          },
          {
            title: "Coherent posts a blowout Q4 and aggressive guidance, yet shares take a 5% haircut",
            url: "https://www.investing.com/news/stock-market-news/coherent-posts-a-blowout-q4-and-aggressive-guidance-yet-shares-take-a-5-haircut-4856014",
          },
          {
            title: "Coherent (COHR) Cash Flow Statement",
            url: "https://stockanalysis.com/stocks/cohr/financials/cash-flow-statement/",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "밸류에이션엔 이미 고성장이 반영돼 있어요 — 실적·가이던스는 좋았지만 현금흐름 정상화가 다음 관문이에요.",
        view: "현재 주가 $294.37은 이번 회계연도(FY27, 2027-06-30 마감) 컨센서스 EPS $9.41(21명 추정) 기준 선행 PER 31.2배에 거래되고 있고, 다음 회계연도(FY28) 컨센서스 EPS $13.95(18명 추정) 기준으로는 약 21배로 낮아져요 — 시장은 향후 1년간 EPS가 약 48% 늘어날 것을 이미 가격에 반영하고 있다는 뜻이에요. 실제로 2026년 8월 12일 발표된 FY26 4분기 실적은 매출 $20.45억(+34% YoY)·비GAAP EPS $1.74로 컨센서스를 웃돌았고, 다음 분기 가이던스(매출 $22~24억, 비GAAP EPS $1.85~2.05)도 시장 예상치를 8~10% 상회하는 비트 앤 레이즈였는데도 주가는 실적 발표 후 약 8% 급락했어요 — 비GAAP 총마진 가이던스(39.5~41.5%)가 기대만큼 화끈하지 않았다는 게 표면적 이유였어요. 여기에 FY26 영업현금흐름이 전년 $633.6M에서 $79.5M로 급감하고 CapEx $1,103M(+150%)로 FCF가 -$1,023M을 기록한 점은, 지금의 이익 성장이 AI 데이터센터향 광트랜시버(800G·1.6T) 수요에 대응한 재고·설비 선투자로 뒷받침되고 있음을 보여줘요. 엔비디아의 $40억 전략투자(2026년 3월)로 확인된 전략적 지위와 애널리스트 컨센서스 목표주가 $416(22명 평균, 현재가 대비 +41%, 강력매수 13명·매수 4명·보류 5명)은 긍정적 재료지만, 루멘텀 등 경쟁 구도와 저마진 제품 믹스 확대는 마진 상단을 제한하는 요인으로 남아있어요.",
        increaseIf: [
          "다음 1~2개 분기(FY27 1~2분기) 안에 영업현금흐름이 플러스로 전환되고 쌓인 재고가 매출로 정상 전환되는 신호가 나오는 경우",
          "비GAAP 총마진이 가이던스 상단(41.5%) 이상으로 개선되며 800G/1.6T 등 고마진 제품 비중이 늘어나는 경우",
          "엔비디아 외 추가 하이퍼스케일러 대상 대형 수주나 장기 공급계약이 새로 공개되는 경우",
        ],
        wrongIf: [
          "FCF 마이너스 기조가 2개 분기 이상 더 지속되며 재고가 매출로 전환되지 않는 경우 (수요보다 과잉투자였다는 신호)",
          "비GAAP 총마진이 39.5% 밑으로 떨어지거나 향후 가이던스를 하회하는 경우",
          "루멘텀 등 경쟁사에 점유율을 뺏기거나 트랜시버 가격 경쟁이 뚜렷하게 심화되는 경우",
          "하이퍼스케일러들의 AI 데이터센터 CapEx 가이던스가 전반적으로 하향 조정되는 경우",
        ],
        watchNext: [
          "2026년 11월경 예정된 FY27 1분기 실적 발표 — 영업현금흐름·재고 회전율 개선 여부",
          "비GAAP 총마진 실제치가 가이던스(39.5~41.5%) 중 어느 쪽에 가깝게 나오는지",
          "엔비디아 관련 신규 인증/설계 반영(design win) 뉴스와 800G→1.6T 전환 속도",
          "COHR-루멘텀 경쟁구도 변화 및 트랜시버 가격 동향",
        ],
        confidence: "주가($294.37)·컨센서스 EPS·선행 PER은 제공된 로컬 데이터 기준이고, 4분기 실적·가이던스·현금흐름·애널리스트 목표주가 숫자는 2026년 8월 각각 공식 발표 및 컨센서스 집계 기준 확인된 사실이에요. 마진·수요 전환 속도에 대한 해석과 향후 시나리오는 제 판단이며, 실제 확률은 산정하지 않았으니 위 조건 충족 여부로 판단해주세요.",
        sources: [],
      },
    ],
    role: {
      tags: ["광통신 부품(레이저·옵틱스·트랜시버)"],
      stars: 4,
      note: "AI 데이터센터 간 대용량 데이터 전송에 필요한 광트랜시버(800G·1.6T)를 만들어요. 엔비디아가 2026년 3월 코히런트·루멘텀 두 회사에 총 $40억을 전략 투자하며 이 광통신 부품을 'AI 인프라의 병목'으로 지목했을 만큼 전략적 중요성이 확인됐어요. 다만 루멘텀 등 경쟁사가 있어 독점적 지위는 아니에요.",
    },
  },
  LITE: {
    updated: "2026-08-26",
    customers: [
      "AI/클라우드向 광트랜시버 및 광학 부품이 핵심 매출원 - Nvidia를 포함한 AI 인프라 및 하이퍼스케일 클라우드 업체가 주요 고객.",
      "2026회계연도 3분기 매출 전년比 90% 급증한 8억 800만 달러, AI/클라우드 수요가 실적 견인, 영업이익률 2,140bp 확대.",
      "Nvidia가 실리콘 포토닉스 관련 대규모 투자·파트너십을 추진하는 가운데 핵심 공급망 파트너 중 하나로 거론.",
    ],
    strengths: [
      "800G/1.6T급 고속 광트랜시버 시장에서 Coherent와 함께 선두권 형성, AI 데이터센터 광학 부품 공급망 핵심 공급사.",
      "Nvidia 등 최상위 AI 인프라 기업과의 긴밀한 파트너십을 통해 차세대 광학 기술(실리콘 포토닉스 등) 공동 개발.",
      "중국산 광트랜시버(Innolight 등)에 대한 미국 규제 이슈로 반사이익 기대감 형성.",
    ],
    risks: [
      "⚠️ 매출의 상당 부분이 AI/데이터센터 소수 대형 고객사(특히 Nvidia 생태계)에 집중돼 AI 설비투자 사이클 둔화·발주 변경 시 실적 변동성.",
      "중국 Innolight 등 저가 경쟁사와의 가격 경쟁 지속, 규제 향방에 따라 공급망 내 중국산 소재 의존 리스크.",
      "Coherent, Applied Optoelectronics 등과의 기술·가격 경쟁이 치열해 시장점유율 변동성 상존.",
    ],
    sources: [
      {title:"[LITE Q3 2026 Earnings Call] Revenue Surges 90% to Record $808M", url:"https://finance.biggo.com/news/US_LITE_2026-05-05"},
      {title:"Even Nvidia Sees Lumentum as Lighting the Way Forward", url:"https://finance.yahoo.com/news/even-nvidia-sees-lumentum-lighting-175906588.html"},
      {title:"NVIDIA's $4B Photonics Play: Lumentum vs Coherent", url:"https://tech-insider.org/nvidia-silicon-photonics-lumentum-coherent-ai-data-center-2026/"},
      {title:"Applied Optoelectronics Rockets 17%, Coherent Climbs 11%, Lumentum Gains 6% on Reported U.S. Ban of Chinese Optics", url:"https://247wallst.com/investing/2026/08/04/applied-optoelectronics-rockets-17-coherent-climbs-11-lumentum-gains-6-on-reported-u-s-ban-of-chinese-optics/"},
    ],
    newsLog: [
      {
        date: "2026-08-27",
        headline: "컨버터블 노트를 주식으로 맞바꾸며 발행주식수 +27% 급증, EPS 희석 리스크가 새로운 이슈로 떠올랐어요.",
        importance: "medium",
        tone: "mixed",
        horizon: "앞으로 1~3분기, 잔여 노트 전환이 마무리될 때까지 지속 관찰 필요",
        facts: [
          "2026/2028/2029년 만기 컨버터블 노트를 사모 방식으로 주식과 맞바꾸는 '이퀴티제이션'이 2026년 5월부터 이어졌고, 예를 들어 5/29 계약분은 2028년 만기 0.50% 노트 원금 $6.504억을 보통주 약 500만주로 교환했어요(현금 유입 없음, 잔여 원금 $1.722억).",
          "그 결과 보통주 발행주식수는 2025년 6월 6,980만주에서 2026년 6월 8,860만주로 1년 새 +27%(순증 1,880만주) 늘었고, 이번 스왑으로 인한 회계상 비현금 부채소각손실 $78억이 4분기 GAAP EPS를 -$84.65까지 끌어내렸어요.",
          "8/24에는 임원(부사장 Jae Kim 등)의 자사주 매도 공시도 있었지만 회사 측 설명은 '베스팅 지분에 대한 세금 원천징수용'으로, 스톡옵션 현금화와는 결이 다르다는 평가예요.",
        ],
        why: [
          "이 이슈는 대시보드에 이미 반영된 강점(엔비디아 파트너십, AI向 수요 급증)과는 별개로, 자본구조 측면에서 주당 지표를 계속 오염시키는 구조적 리스크라는 점에서 기존 리스크(경쟁 구도) 항목에 추가로 봐야 할 변수예요.",
          "잔여 노트가 남아있는 한(2028/2029년물) 추가 전환 가능성이 있고, 그때마다 발행주식수가 늘면서 이익 총액이 잘 나와도 EPS 서프라이즈 폭이 줄어들 수 있어요.",
        ],
        beginner: [
          "회사가 빚(전환사채)을 현금으로 갚는 대신 '주식을 더 찍어서' 갚은 거예요. 빚은 줄었지만 그만큼 주식 수가 늘어서, 한 주당 돌아가는 이익 몫은 작아져요.",
          "회계상으로는 이번 한 번에 큰 손실(-$78억)로 잡혔는데, 이건 실제 돈이 나간 게 아니라 '주식으로 갚은 값어치가 원래 빚보다 컸다'는 장부상 숫자라 회사가 실제로 그만큼 손해 본 건 아니에요.",
        ],
        interpretation: "사업 자체는 견조하지만 자본구조상 주당 지표가 계속 희석되는 국면이라, 순이익 총액 성장과 EPS 성장 사이에 괴리가 생길 수 있다는 점을 밸류에이션 판단에 반영해야 해요.",
        decision: "매출·이익 총액 성장세는 그대로 신뢰하되, EPS 기반 밸류에이션 지표(PER 등)를 볼 때는 발행주식수 증가분을 감안해서 보수적으로 해석하는 게 좋아요.",
        watch: [
          "2028/2029년 만기 잔여 컨버터블 노트($1.722억 등) 추가 전환 공시 여부",
          "다음 분기 실적에서 non-GAAP 희석주식수가 어디까지 늘어나는지",
        ],
        confidence: "발행주식수 변동과 스왑 조건은 회사 8-K 공시 기준으로 신뢰도가 높고, 임원 매도 관련 해석은 회사 설명을 그대로 인용한 것으로 별도 검증은 못 했어요.",
        sources: [
          {
            title: "Lumentum Reduces Convertible Debt Through Private Share Exchange",
            url: "https://www.tipranks.com/news/company-announcements/lumentum-reduces-convertible-debt-through-private-share-exchange",
          },
          {
            title: "Lumentum swaps $474.6 million in convertible notes for roughly 5.7 million shares",
            url: "https://www.msn.com/en-us/money/companies/lumentum-swaps-474-6-million-in-convertible-notes-for-roughly-5-7-million-shares/ar-AA20pSWn",
          },
          {
            title: "Lumentum (LITE) revenue surges 83% in 2026 amid large non-cash debt loss",
            url: "https://www.stocktitan.net/sec-filings/LITE/8-k-lumentum-holdings-inc-reports-material-event-21905826e626.html",
          },
          {
            title: "This Lumentum Insider Sold $1.6 Million in Stock. Here's What Long-Term Investors Should Know",
            url: "https://www.fool.com/coverage/filings/2026/08/24/this-lumentum-insider-sold-usd1-6-million-in-stock-here-s-what-long-term-investors-should-know/",
          },
        ],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-27 마감 4분기 (FY2026 Q4, 회계연도 마감 실적)",
        headline: "4분기 매출 $10.06억로 전년비 +109.3%(전분기 +90%에서 가속), 가이던스 상단($9.6~10.1억) 턱걸이 부합, non-GAAP EPS $3.23으로 전년 $0.88 대비 급증했고 다음 분기(Q1 FY27) 가이던스도 매출 $12.25~12.75억·EPS $4.05~4.35로 컨센서스를 크게 웃돌게 제시했어요.",
        oneTime: "GAAP EPS가 -$84.65(순손실 $71.6억)로 찍힌 건 영업 부진이 아니라 2026/2028/2029년 만기 컨버터블 노트를 주식으로 '이퀴티제이션(equitization)'하면서 발생한 $78억 규모의 비현금성 부채 소각손실(전환가치가 원금을 초과한 차액) 때문이에요. 이 스왑으로 보통주 발행주식수가 2025년 6월 6,980만주에서 2026년 6월 8,860만주로 1년 만에 +27% 늘었고, 여기에 잔여 컨버터블 물량에서 나오는 희석 주식 약 1,400만주(캡드콜 상쇄 -60만주)가 non-GAAP 희석주식수에 얹혀요. 이 외에 연간 기준 구조조정비용 $1,140만, 무형자산 상각 $250만도 있었지만 규모는 작아요.",
        coreRead: "GAAP 손익은 노이즈이고 실질 체력은 non-GAAP 지표로 봐야 해요 — non-GAAP 매출총이익률 50.4%(전년 37.8%), 영업이익률 36.6%(전년 15.0%)로 레버리지가 뚜렷하고, non-GAAP 순이익은 $3.263억으로 전분기 대비도 개선됐어요. 다만 주당 지표는 노트 이퀴티제이션으로 분모(주식수)가 계속 커지고 있어서, 이익 총액 성장 속도보다 EPS 성장 속도가 구조적으로 낮게 나올 걸 감안해야 해요.",
        forecast: "Q1 FY2027(2026년 9월 마감, 통상 11월 초 발표) 매출이 가이던스 상단인 $12.75억을 상회하고 non-GAAP EPS도 $4.35를 넘어설 걸로 봐요. 반대로 잔여 컨버터블 노트(2028년물 잔액 $1.722억 등)가 추가로 주식 전환되면서 희석주식수가 9,000만주를 넘어서면, 이익 총액이 잘 나와도 EPS 서프라이즈 폭은 좁아질 거예요 — 이 경우 제 forecast는 틀린 걸로 봐주세요.",
        confidence: "매출·EPS 실적치, 가이던스, 주식수 변동(6,980만→8,860만주), $78억 손실의 회계적 원인은 회사 공식 실적발표·8-K 공시로 확인된 사실이에요. 반면 대시보드의 '이번연도' 컨센서스 EPS가 8/21 전후로 $18.73→$8.23(-56%)로 급변한 정확한 메커니즘은 데이터벤더가 공식 설명한 게 아니라, 위 사실들(FY2026 마감으로 4분기 실적치가 컨센서스에 확정 반영된 점 + 주식수 27% 증가)을 근거로 한 제 추정이에요 — 실적 부진이나 가이던스 컷 때문이 아니라는 점은 비교적 확신하지만, 벤더 데이터 자체의 처리 지연·오류 가능성도 배제 못 해요.",
        sources: [
          {
            title: "Lumentum Announces Fourth Quarter and Full Fiscal Year 2026 Results",
            url: "https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-Fourth-Quarter-and-Full-Fiscal-Year-2026-Results/default.aspx",
          },
          {
            title: "Lumentum Q4 FY2026 earnings: Revenue doubles as margins expand",
            url: "https://www.tradingkey.com/news/earnings/262097070-tradingkey",
          },
          {
            title: "Lumentum (LITE) revenue surges 83% in 2026 amid large non-cash debt loss",
            url: "https://www.stocktitan.net/sec-filings/LITE/8-k-lumentum-holdings-inc-reports-material-event-21905826e626.html",
          },
          {
            title: "Lumentum anticipates $960M-$1.01B Q4 FY2026 revenue while targeting $2B quarterly revenue goal",
            url: "https://seekingalpha.com/news/4586526-lumentum-anticipates-960m-1_01b-q4-fy2026-revenue-while-targeting-2b-quarterly-revenue-goal",
          },
          {
            title: "Lumentum Q3 revenue jumps 90% to record $808M",
            url: "https://www.stocktitan.net/news/LITE/lumentum-announces-third-quarter-of-fiscal-year-2026-financial-v6qfp5vq9146.html",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "실적·가이던스는 진짜로 좋은데, 주가는 이미 그 좋음을 상당 부분 반영한 구간이에요.",
        view: "현재가 $939.03에 자체 6년 PER 밴드 기준 포워드 PER은 약 38.5배로, 이 종목 역사상 밴드 상단권이에요. 내년(FY2027, 2027-06-30 마감) 컨센서스 EPS $33.01(20개 기관) 기준으로도 밸류에이션이 결코 싸지 않은데, 이번연도(FY2026) 컨센서스 EPS $8.23은 8/21 전후 데이터 이상 플립($18.73→-56%) 때문에 대시보드의 'PER 그대로' 계산이 아예 막혀 있는 상태예요. 다만 펀더멘털 자체는 흔들리지 않아요 — 4분기 매출이 전년비 +109%, non-GAAP 영업이익률이 36.6%까지 올라왔고 Q1 FY2027 가이던스(매출 $12.25~12.75억, EPS $4.05~4.35)도 컨센서스를 상회하는 수준으로 제시됐어요. 엔비디아의 $20억 전략투자와 레이저 부품 대량구매 약정(2026년 3월)이 수요 측 안전판 역할을 하고 있고, 8/11 실적 발표 후 주가는 +15% 급등, 이후에도 8/25~26 이틀간 +5~6%씩 추가 상승하며 평균 목표주가 $1,117.73(범위 $600~1,400)까지 밀어올려졌어요. 리스크는 두 갈래예요. 하나는 COHR과의 직접 경쟁 구도(기존 노트에도 명시)이고, 다른 하나는 이번에 새로 확인된 자본구조 리스크 — 컨버터블 노트를 주식으로 계속 맞바꾸면서 발행주식수가 1년 새 6,980만→8,860만주(+27%)로 늘었고 잔여 물량(2028년물 잔액 $1.722억 등) 전환이 이어질수록 주당 지표 희석이 계속될 수 있다는 점이에요. 결국 '사업은 잘 되는데 주당 숫자는 주식수 증가로 계속 오염된다'는 구도라, PER만 보고 싸다/비싸다를 단순 판단하기 어려운 종목이에요.",
        increaseIf: [
          "Q1 FY2027 실적에서 매출이 가이던스 상단($12.75억) 이상, non-GAAP EPS가 $4.35 이상으로 실제 나오면서 이번연도 EPS 컨센서스 이상치가 데이터 오류였음이 확인되고 'PER 그대로' 계산이 재개되는 경우",
          "엔비디아향 출하 물량이 실제 매출·수주잔고 숫자로 가시화되며 매출 성장률이 다음 1~2개 분기도 두 자릿수 후반~세자릿수%를 유지하는 경우",
          "잔여 컨버터블 노트 전환이 소규모에 그쳐 희석주식수 증가가 연 10% 이내로 진정되는 경우",
        ],
        wrongIf: [
          "Q1 FY2027 매출이 가이던스 하단($12.25억) 이하로 미스하거나 non-GAAP EPS가 $4.05를 밑도는 경우",
          "잔여 컨버터블 노트(2028/2029년물)가 추가로 대규모 주식 전환되며 발행주식수가 9,000만주를 훌쩍 넘어 EPS 컨센서스가 추가 하향되는 경우",
          "COHR 등 경쟁사가 유사한 AI 광부품 대형 계약을 따내며 점유율이나 마진에서 눈에 띄게 밀리는 정황이 나오는 경우",
        ],
        watchNext: [
          "Q1 FY2027 실적 발표(통상 11월 초) — 매출·EPS 실제치와 가이던스 대비 방향",
          "잔여 컨버터블 노트 잔액($1.722억 등) 추가 스왑 여부와 그때마다의 발행주식수 변화",
          "대시보드 '이번연도' EPS 컨센서스 $8.23이 향후 며칠~몇 주 안에 재조정되거나 'PER 그대로' 계산 차단이 풀리는지 여부",
          "평균 목표주가 $1,117.73 대비 실제 주가 갭이 좁혀지는지, 애널리스트 추가 상향/하향 여부",
        ],
        confidence: "가격·밸류에이션 숫자는 로컬 데이터 그대로이고, 실적·가이던스·주식수 관련 서술은 회사 공식 발표 기준이에요. 다만 이번연도 EPS 컨센서스 이상치의 정확한 발생 원인은 확정된 게 아니라 정황 추정이라, 확률을 숫자로 제시하지 않고 위 조건들로 판단 기준을 대신했어요.",
        sources: [],
      },
    ],
    role: {
      tags: ["광통신 부품(레이저·옵틱스)"],
      stars: 4,
      note: "COHR와 비슷한 포지션의 광통신 부품업체로, 엔비디아가 2026년 3월 직접 $20억을 전략 투자하고 레이저 부품 대규모 구매를 약정했어요. 4분기 매출이 전년비 +109%로 급성장 중일 만큼 AI 데이터센터 인터커넥트 수요의 수혜가 뚜렷하지만, COHR 등과 경쟁 구도라는 점은 감안해야 해요.",
    },
  },
  GEV: {
    updated: "2026-08-26",
    customers: [
      "데이터센터 전력 수요 급증으로 가스터빈 백로그가 2025년 100GW에서 2026년 116GW로 확대, 2031년 인도분까지 예약 - 유틸리티뿐 아니라 데이터센터 운영사가 직접 슬롯 확보 경쟁.",
      "2026년 상반기 총 수주가 전년比 88% 급증, 총 백로그는 약 1,760억 달러 수준.",
      "Power(가스터빈·원자력·증기), Electrification(변압기·송배전), Wind(풍력) 3개 사업부로 전력회사·산업체·재생에너지 개발사 등 폭넓은 고객군.",
      "Electrification 부문은 변압기·스위치기어 수요 강세로 주문 견조, Wind 부문은 여전히 수익성 약함.",
    ],
    strengths: [
      "대형 가스터빈(HA급 등) 시장에서 Siemens Energy, Mitsubishi Power와 함께 과점 구도 - 데이터센터發 수요 폭증으로 신규 발주 슬롯이 2030년까지 사실상 매진.",
      "전력망 병목 해소에 필수적인 변압기·송전 장비(Electrification)에서도 강한 수주 모멘텀, 발전~송전 밸류체인 전반 포지션 보유.",
      "서비스(유지보수·부품) 매출 비중이 높아 설치 기반에서 나오는 반복 매출 구조.",
    ],
    risks: [
      "⚠️ 육상풍력 터빈 설계 결함을 둘러싼 소송 리스크 - Vineyard Wind가 해상풍력 터빈 철수 관련 소송, AEP 등도 결함 터빈 관련 소송 진행 중.",
      "가스터빈 백로그가 2031년 인도분까지 예약된 만큼, 공급 능력 확장 속도가 수요를 못 따라가면 매출 인식 지연·고객 이탈 리스크.",
      "Wind 사업부의 구조적 수익성 부진이 전체 이익률 개선을 제약.",
    ],
    sources: [
      {title:"GE Vernova gas turbine backlog climbs to 116 GW", url:"https://www.utilitydive.com/news/ge-vernova-gas-turbine-backlog-climbs-to-116-gw/826039/"},
      {title:"GE Vernova (NYSE: GEV) Eyes $200 Billion Backlog As AI Infrastructure Boom Drives Historic Energy Demand", url:"https://www.foreignpolicyjournal.com/2026/08/23/ge-vernova-nyse-gev-eyes-200-billion-backlog-as-ai-infrastructure-boom-drives-historic-energy-demand/"},
      {title:"Vineyard Wind Sues GE Vernova Over Turbine Exit", url:"https://hoodline.com/2026/04/vineyard-wind-takes-ge-vernova-to-court-to-keep-offshore-turbines-spinning/"},
      {title:"GE Vernova sued over 'onshore wind turbine failures' in US", url:"https://www.windpowermonthly.com/article/1879253/ge-vernova-sued-onshore-wind-turbine-failures-us"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 매출·수주잔고 사상 최대에 가이던스 상향, 그러나 EPS 미스·마진 우려 - 성장과 수익성이 엇갈림",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2분기 매출이 예상을 상회했고 2026년 연간 가이던스를 상향했다.", "수주잔고가 사상 최대인 1,760억 달러를 기록했고, 주문·잉여현금흐름도 사상 최대 수준을 달성했다.", "그러나 EPS는 시장 예상치를 하회했고 EBIT 마진이 우려 요인으로 지목되며 주가가 3.5% 하락했다."],
        why: ["매출·수주·현금흐름은 뚜렷하게 개선되고 있지만 수익성(마진) 지표가 발목을 잡고 있어, 성장과 수익성 사이의 괴리가 낙폭의 배경일 수 있다."],
        beginner: ["일감(수주)도 역대 최대이고 매출도 잘 늘고 있는데, '남기는 이익률'만 기대에 못 미쳤어요. 성장은 잘 되는데 아직 이익으로 잘 연결되지 않는 상태예요."],
        interpretation: "성장 스토리는 뚜렷하나 마진 개선이 확인되기 전까지는 완전한 긍정으로 보기 어렵다.",
        decision: "다음 분기 EBIT 마진 개선 여부를 핵심 확인 포인트로 삼을 것.",
        watch: ["다음 분기 EBIT 마진 추이", "수주잔고 실제 매출 전환 속도"],
        confidence: "회사 공식 실적 발표(GE Vernova) 기준, 다수 매체(TIKR, Investing.com) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"GE Vernova reports second quarter 2026 financial results and raises 2026 financial guidance", url:"https://www.gevernova.com/news/press-releases/ge-vernova-reports-second-quarter-2026-financial-results-raises-2026-financial"},
        {title:"GE Vernova's Q2 Earnings Beat on Revenue. EBIT Margin Told a Different Story (TIKR)", url:"https://www.tikr.com/blog/ge-vernovas-q2-earnings-beat-on-revenue-ebit-margin-told-a-different-story"},
        ],
      },
    ],
    updated: "2026-08-19",
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2Q26)",
        headline: "매출 111억 달러(+22% YoY)·수주 242억 달러(+88% 유기적)로 톱라인은 컨센서스를 넘겼지만, GAAP EPS $2.47(컨센서스 약 $3.17)·조정 EPS $2.41(컨센서스 약 $3.04)은 미스했고 EBIT 마진도 6%로 시장 기대치(약 9.2%)를 크게 밑돌았어요.",
        oneTime: "2Q26 자체엔 대형 일회성 항목이 두드러지진 않지만, 직전 분기인 1Q26에 Prolec GE 잔여 지분 50% 인수(2/2 완료)에 따른 재평가 차익 39.92억 달러 + Proficy 소프트웨어 사업 매각 차익 3.3억 달러(세후 2.1억)가 'Other income (expense) – net'에 잡히면서 1Q26 순이익이 47.45억 달러, 희석 EPS가 $17.44(전년 동기 $0.91)까지 튀었어요. 이 약 43억 달러(주당 약 $16) 규모의 일회성 이익이 올해 컨센서스 EPS($30.79)를 크게 밀어올린 핵심 원인으로 보여요.",
        coreRead: "GAAP 숫자는 이 일회성 이익 때문에 노이즈가 크니 현금흐름과 수주 지표로 보는 게 나아요. 2Q26 FCF는 51억 달러였고 이에 힘입어 회사는 연간 FCF 가이던스를 $65~75억에서 $115~125억으로 큰 폭 상향했어요. 가스터빈 백로그는 116GW(연말 125GW 목표)까지 쌓이고 총 백로그는 1,760억 달러로 늘어서, 성장 파이프라인은 여전히 견조해요. 다만 EBIT 마진이 기대에 못 미친 건 원자재·관세 비용과 신규 수주 확대에 따른 프로젝트 초기 비용 부담이 원인으로 지목되는데, 이게 실제 수익성 전환 속도를 가늠할 핵심 변수예요.",
        forecast: "3Q26(9월 마감 분기)에는 일회성 항목 없이 조정 EBIT 마진이 2Q26의 6%보다는 개선되겠지만 가이던스 상단(14%)에는 못 미치는 8% 안팎에 머물 가능성이 높다고 봐요. 만약 3Q에도 EBIT 마진이 7% 미만에 머문다면 이 예측은 틀린 걸로 봐주세요.",
        confidence: "매출·오더·백로그·가이던스 수치와 1Q26 Prolec·Proficy 차익 금액은 GE Vernova 공식 보도자료 및 10-Q 공시 기준으로 확인된 사실이에요. EBIT 마진 부진의 원인 해석과 3Q 마진 전망 수치는 제 추정이에요.",
        sources: [
          {
            title: "GE Vernova reports second quarter 2026 financial results and raises 2026 financial guidance",
            url: "https://www.gevernova.com/news/press-releases/ge-vernova-reports-second-quarter-2026-financial-results-raises-2026-financial",
          },
          {
            title: "GEV Press Release 2Q'26",
            url: "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000147/gevpressrelease2q26.htm",
          },
          {
            title: "GE Vernova's Q2 Earnings Beat on Revenue. EBIT Margin Told a Different Story.",
            url: "https://www.tikr.com/blog/ge-vernovas-q2-earnings-beat-on-revenue-ebit-margin-told-a-different-story",
          },
          {
            title: "Prolec deal boosts GE Vernova (NYSE: GEV) profit and $176B backlog",
            url: "https://www.stocktitan.net/sec-filings/GEV/10-q-ge-vernova-inc-quarterly-earnings-report-2e29f22ab875.html",
          },
          {
            title: "GE Vernova stock holds above $950 as fresh fund inflows follow earnings miss",
            url: "https://www.ad-hoc-news.de/boerse/news/corporate-news/ge-vernova-stock-holds-above-950-as-fresh-fund-inflows-follow-earnings/69986115",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "백로그는 진짜인데 마진 전환은 아직 증명 전 — 지금 배수는 일회성 이익이 낀 EPS로 계산된 착시라는 점을 감안해야 해요",
        view: "현재가 $953.09 기준 자체 2년 밴드 포워드 PER은 45.5배인데, 이건 올해 컨센서스 EPS $30.79(20명 추정)를 쓴 값이고 이 EPS엔 1Q26에 Prolec GE 잔여 지분 재평가 차익(39.92억 달러)과 Proficy 매각 차익(3.3억 달러)을 합쳐 약 43억 달러(주당 약 $16)의 일회성 이익이 섞여 있어요. 실제로 내년 컨센서스 EPS는 27명 추정 기준 $24.74로 올해보다 오히려 낮은데, 이건 이익이 역성장하는 게 아니라 일회성 효과가 빠지면서 정상화되는 그림이에요. 즉 지금 45.5배라는 배수는 '지속 가능한 코어 이익' 기준으로 보면 실제로는 이보다 비싼 편이라고 봐야 해요. 한편 2Q26(6/30 마감) 실적은 매출 111억 달러(+22%)·수주 242억 달러(+88% 유기적)로 성장 스토리는 여전히 살아있고 가스터빈 백로그도 116GW(연말 125GW 목표, 연 생산능력 20GW 대비 약 5~6년치)까지 쌓였지만, 정작 수익성 지표인 EBIT 마진은 6%로 시장 기대(약 9.2%)를 크게 밑돌면서 조정 EPS $2.41도 컨센서스 $3.04를 놓쳤어요. '주문은 폭발하는데 마진 전환은 더디다'는 게 지금 주가에 걸려있는 핵심 질문이고, 월가 평균 목표주가는 대략 $1,230~1,280 선(현재가 대비 30%+ 상승여력)으로 매수 우위 컨센서스지만 이는 백로그가 실제 마진 있는 매출로 전환된다는 전제가 깔려 있어요.",
        increaseIf: [
          "3Q26·4Q26 실적에서 조정 EBIT 마진이 8~9% 이상으로 개선되며 연간 가이던스 상단(12~14%)에 대한 신뢰가 회복될 때",
          "가스터빈 신규 수주가 계속 이어져 백로그가 125GW 목표를 실제로 넘어서고, 생산능력(연 20GW) 증설 계획이 구체적으로 발표될 때",
          "2027년 컨센서스 EPS가 일회성 제외 기준으로 상향 조정되기 시작하며 '정상화 후 저성장' 우려가 해소될 때",
        ],
        wrongIf: [
          "다음 2개 분기 연속으로 EBIT 마진이 6~7%대에 머물며 수익성 전환이 계속 지연될 때",
          "관세·원자재 비용 상승으로 인한 마진 가이던스 추가 하향이 나올 때",
          "가스터빈 백로그 증가세가 꺾이거나 대형 수주 취소가 발생해 AI 데이터센터발 수요 둔화 신호가 나타날 때",
        ],
        watchNext: [
          "3Q26 실적 발표(대략 10월 하순 예상) 시 조정 EBIT 마진 추이와 연간 가이던스 유지 여부",
          "가스터빈 백로그가 116GW에서 125GW로 가는 속도, 그리고 생산능력 증설(연 20GW 이상) 관련 발표",
          "2027년 컨센서스 EPS가 일회성 제외 기준 실제 '코어 이익 성장'을 반영해 상향되는지 여부",
        ],
        confidence: "가격·가이던스·백로그·EPS 수치는 회사 공식 발표 및 컨센서스 데이터 기준이고, 밸류에이션 해석과 마진 전환 시점에 대한 판단은 제 개인적 종합 견해예요.",
        sources: [],
      },
    ],
    role: {
      tags: ["가스터빈", "발전", "변압", "송전", "Grid(전력망)"],
      stars: 5,
      note: "AI 데이터센터 급증으로 전력 수요가 폭발하는 가운데 발전(가스터빈)부터 송배전까지 전력 밸류체인 전반을 아우르는 몇 안 되는 기업이에요. 가스터빈 수주잔고가 116GW(2026년 2분기 기준)까지 쌓여 있는데 현재 생산능력(연 20GW)으로는 약 5년치 물량이 이미 확보된 셈이라, 신규 발주를 넣어도 한동안 순서를 기다려야 할 만큼 공급이 병목이에요.",
    },
  },
  CEG: {
    updated: "2026-08-26",
    customers: [
      "미국 최대 원전 사업자(약 32GW 발전 포트폴리오) - 데이터센터·빅테크向 대규모 전력구매계약(PPA)이 핵심 성장 동력, 2025년 Meta와 20년 PPA, Microsoft와도 장기 계약.",
      "2026년 8월 Walmart와 920MW 규모 신규 전력계약을 포함해 산업체·유통업체까지 고객군 확대.",
      "Blue Energy 등 신규 원전/청정에너지 프로젝트에 투자하며 AI 데이터센터發 전력 수요 급증에 대응.",
      "2026년 순이익 목표를 주당 12.50달러로 상향, 원전 기반 계약이 잇따라 성사되며 실적 가시성 상승.",
    ],
    strengths: [
      "미국 내 최대 규모 원자력 발전 포트폴리오로 24시간 무탄소 기저전력을 안정적으로 공급 - AI 데이터센터가 요구하는 '24/7 카본프리 전력'에 가장 부합.",
      "신규 원전 건설이 인허가·건설기간(10년 이상) 문제로 사실상 어려운 상황에서, 기존 가동 중인 원전 자산은 대체 불가능한 희소자원으로 평가('핵 스카시티 플레이').",
      "빅테크와의 장기(20년 단위) PPA를 통해 향후 수익의 예측가능성·안정성 크게 향상.",
    ],
    risks: [
      "⚠️ 규제·요금 승인 리스크 - 원전과 대형 고객(데이터센터) 간 직접 전력공급 계약 확대로 일반 소비자 요금 인상 우려에 따른 정치적·규제적 반발 가능성.",
      "원전 운영 연장 인가, 안전 규제 등 정책 변화에 따른 비용 변동성.",
      "데이터센터 고객 의존도가 커질수록 특정 대형 고객(빅테크) 집중 리스크.",
    ],
    sources: [
      {title:"Constellation Signed 920 Megawatts of New Power Deals, Including a Walmart PPA", url:"https://www.fool.com/investing/2026/08/07/constellation-signed-920-megawatts-of-new-power-deals-including-a-walmart-ppa-heres-what-it-means-for-ceg-stock/"},
      {title:"Constellation Invests in Blue Energy as Nuclear Demand From AI Data Centers Surges", url:"https://www.fool.com/investing/2026/07/19/constellation-invests-in-blue-energy-as-nuclear-demand-from-ai-data-centers-surges-heres-what-ceg-investors-need-to-know/"},
      {title:"Constellation Energy Lifts 2026 Profit Target to $12.50 as Nuclear Deals Stack Up", url:"https://finance.biggo.com/news/28b747b3-5da3-402a-b6b7-db787b5e3465"},
      {title:"CEG: The Nuclear Scarcity Play Powering the AI Demand Boom", url:"https://simplywall.st/community/narratives/us/utilities/nasdaq-ceg/constellation-energy/ehd5fv4c-constellation-energy-dollarceg-the-nuclear-scarcity-play-powering-the-ai-demand-boom"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 원자력 계약 기반 성장으로 EPS 가이던스 상향 - 낙폭과다는 실적 부진이 아니라 밸류에이션·시장 전반 조정 성격",
        importance: "medium",
        tone: "positive",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-08-05 2분기 실적에서 원자력 발전 호조로 조정 EPS 가이던스를 12.00달러로 상향했다.", "신규 청정에너지 계약 920MW를 체결했고, 데이터센터向 전력 수요 증가가 성장 동력으로 언급됐다.", "원자력 계약 기반 연 20% 성장 전망을 제시했다."],
        why: ["실적·가이던스가 모두 상향되는 와중에 주가만 52주 고점 대비 크게 빠져있다는 것은, 눌림목 신호가 '사업 악화'가 아니라 '밸류에이션·순환매' 성격일 가능성을 시사한다."],
        beginner: ["회사가 스스로 '앞으로 돈을 더 잘 벌 것 같다'고 실적 발표에서 밝혔는데 주가는 많이 빠져있는 상태예요. 회사 사정이 나빠져서 빠진 게 아니라 시장 전체 분위기 때문일 가능성이 있다는 뜻이에요."],
        interpretation: "원자력·데이터센터向 전력 수요라는 성장 스토리 자체는 훼손되지 않았고, 오히려 가이던스가 상향됐다. 낙폭과다 신호가 '떨어지는 칼날'보다는 '일시적으로 싸진 우량주'에 가까운 근거가 있다.",
        decision: "이 뉴스 자체가 매수 신호는 아니지만, 낙폭과다 신호와 방향이 같은 방향(긍정)으로 겹치는 사례로 참고할 것.",
        watch: ["다음 분기 원자력 계약·데이터센터 전력 수요 발표", "GAAP 순이익 일회성 항목 해소 여부"],
        confidence: "회사 공식 실적 발표(BusinessWire)와 다수 매체가 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Constellation Reports Second Quarter 2026 Results (BusinessWire)", url:"https://www.businesswire.com/news/home/20260805185047/en/Constellation-Reports-Second-Quarter-2026-Results"},
        {title:"CEG Q2 2026 Earnings Call: EPS outlook to $12.00, 920 MW deals (BigGo Finance)", url:"https://finance.biggo.com/news/US_CEG_2026-08-06"},
        {title:"Constellation Q2 2026 slides: nuclear contracts drive 20% growth outlook (Investing.com)", url:"https://www.investing.com/news/company-news/constellation-q2-2026-slides-nuclear-contracts-drive-20-growth-outlook-93CH-4843690"},
        ],
      },
    ],
    updated: "2026-08-19",
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기)",
        headline: "2분기 매출 75.04억 달러(컨센서스 74.7억 달러 상회), 조정영업EPS $2.55로 컨센서스 $2.36을 약 8% 상회했고 전년 동기 $1.91 대비 33.5% 늘었어요 - 다만 GAAP EPS는 $1.42로 작년 $2.67보다 오히려 줄었어요.",
        oneTime: "GAAP과 조정이익 괴리 요인이 뚜렷해요 - 파생상품·유가증권 공정가치 평가손실 세후 3.4억 달러, 캘파인(Calpine) 인수로 취득한 상품계약 관련 비현금성 상각 세후 1.49억 달러, 캘파인 합병·통합비용 세후 0.84억 달러가 GAAP 순이익(5.13억 달러, 전년 8.39억 달러)을 끌어내렸어요.",
        coreRead: "GAAP 숫자만 보면 이익이 줄어든 것처럼 보이지만 이건 대부분 비현금성 공정가치 변동과 캘파인 인수 관련 일회성 비용이라 영업의 질 저하로 보기는 어려워요. 조정영업EPS 기준으로는 매출 23% 성장(61.0억→75.0억 달러)에 캘파인 편입 효과가 온전히 반영됐고, 원전 가동률 저하라는 역풍을 뚫고도 서프라이즈를 냈다는 점이 핵심이에요. 회사는 이 실적을 바탕으로 2026년 연간 조정영업EPS 가이던스를 $11.50~$12.50로 상향했는데, 중간값 $12.00이 로컬 컨센서스 EPS $12.12(17개 기관)와 거의 일치해서 시장 기대와 가이던스가 크게 어긋나지 않아요.",
        forecast: "3분기(2026-09-30 마감) 조정영업EPS가 $2.80~$3.00 구간으로 나오면 연간 가이던스 상단($12.50) 달성 궤도로 볼 수 있고, 반대로 $2.50를 밑돌면 원전 가동률 이슈나 캘파인 통합 비용이 예상보다 길어진다는 신호로 해석할게요. GAAP EPS는 공정가치 평가손익 변동성 때문에 예측이 사실상 무의미하다고 봐요.",
        confidence: "매출·EPS·가이던스 숫자와 일회성 항목 세부내역은 8-K/보도자료 기반 확인된 사실이고, 3분기 전망 구간과 '영업의 질 저하 아님' 판단은 제 해석이에요.",
        sources: [
          {
            title: "Constellation Reports Second Quarter 2026 Results",
            url: "https://www.businesswire.com/news/home/20260805185047/en/Constellation-Reports-Second-Quarter-2026-Results",
          },
          {
            title: "CEG Q2 Earnings Top Estimates on Calpine Contribution, View Raised",
            url: "https://finance.yahoo.com/markets/stocks/articles/ceg-q2-earnings-top-estimates-154300717.html",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "실적은 견조한데 주가는 이미 AI 전력수요 스토리를 상당폭 선반영 - 밸류에이션 부담이 성장 서프라이즈보다 커 보여요.",
        view: "현재가 $279.52는 자체 3년 PER 밴드 기준 포워드 20.8배로, 원전 특화 유틸리티치고는 낮지 않은 자리예요(짧은 상장 히스토리라 밴드 신뢰도는 제한적이지만요). 2분기 실적 자체는 나쁘지 않았어요 - 조정영업EPS $2.55가 컨센서스 $2.36을 8% 상회했고 매출도 75.04억 달러로 소폭 서프라이즈였으며, 이를 근거로 연간 가이던스를 $11.50~$12.50로 올렸어요. 이 가이던스 중간값 $12.00은 로컬 컨센서스 올해 EPS $12.12(17개 기관)와 정합적이고, 내년 컨센서스 $13.34(20개 기관, 2027-12-31 마감)는 전년 대비 약 10% 성장을 내포해요 - 성장률 자체는 준수하지만 20.8배 밸류에이션을 크게 정당화할 만큼 가속되는 그림은 아니에요. GAAP EPS가 $1.42로 전년 $2.67 대비 줄었지만 이건 파생상품 공정가치 손실(세후 3.4억 달러)과 캘파인 인수 관련 상각·통합비용(세후 약 2.3억 달러) 때문이라 일회성 노이즈로 봐야 해요. 최근 주가는 마이크로소프트 PPA에 이어 신규 920MW 장기 PPA(월마트 176MW 포함) 체결, AI 데이터센터發 전력수요 내러티브에 힘입어 $270 선을 웃도는 랠리를 이어가고 있는데, 이 내러티브가 이미 상당 부분 주가에 반영된 상태라서 추가 상승은 실적이 가이던스 상단을 넘어서거나 신규 대형 PPA가 계속 나와줘야 정당화될 것 같아요.",
        increaseIf: [
          "3분기 실적에서 조정영업EPS가 연간 가이던스 상단($12.50) 궤도를 재확인하거나 가이던스를 추가 상향할 때",
          "마이크로소프트/월마트 건 이후 추가 대형 기업 고객과의 신규 원전 PPA가 체결되어 계약 파이프라인이 재확인될 때",
          "원전 가동률이 2분기 부진에서 정상 수준으로 회복되는 신호가 나올 때",
        ],
        wrongIf: [
          "원전 예정외 정지(unplanned outage)가 재발해 조정영업EPS가 분기 컨센서스를 하회할 때",
          "캘파인 통합비용이나 상각 항목이 예상보다 길게 지속되며 GAAP-조정이익 괴리가 구조적으로 굳어질 때",
          "PJM 등 용량시장(capacity market) 가격이 하락하거나 신규 원전 PPA 파이프라인이 마르는 신호가 나올 때",
        ],
        watchNext: [
          "3분기(2026-09-30 마감) 실적 발표 - 통상 11월 초, 조정영업EPS와 가이던스 유지/추가 상향 여부",
          "캘파인 인수 통합 진행 상황과 관련 일회성 비용의 소멸 시점",
          "PJM 등 용량시장 경매 결과 및 신규 원전 재가동/PPA 계약 발표",
          "원전 가동률(capacity factor) 지표 - 2분기 실적을 눌렀던 가동률 저하가 3분기에 정상화되는지",
        ],
        confidence: "밸류에이션·컨센서스 숫자는 로컬 데이터와 실적 발표 기준이고, 주가 상승 지속 여부에 대한 판단은 해석이에요 - 실제 확률을 뒷받침할 백테스트 통계는 없어서 위 조건들로 판단 근거를 대신할게요.",
        sources: [],
      },
    ],
    role: {
      tags: ["원자력 발전", "AI 데이터센터向 전력 공급 계약"],
      stars: 4,
      note: "미국 최대 원자력 발전사업자 중 하나로, 마이크로소프트와 20년 전력공급계약(PPA)을 맺고 스리마일아일랜드 원전(835MW)을 재가동시키는 계약을 체결했어요 - 이 회사가 맺은 역대 최대 규모 PPA로, 은퇴한 미국 원전이 단일 기업고객을 위해 재가동되는 최초 사례예요. 원자력이라는 특수 자산이 강점이지만 발전사업자 자체는 다수 존재해요.",
    },
  },
  VST: {
    updated: "2026-08-26",
    customers: [
      "텍사스(ERCOT) 중심의 소매 전력 공급과 대규모 발전 포트폴리오(약 41~50GW) - 원전(Comanche Peak 등)·가스·석탄·배터리저장 등 다양한 발전원으로 데이터센터 수요 대응.",
      "2026년 1월 Meta와 PJM 지역 원전 지원 계약 체결, Oklo·TerraPower와 함께 Meta의 최대 6.6GW 규모 원전 딜에 포함.",
      "ERCOT·PJM 두 시장 모두에서 여유 용량을 활용해 유연하게 데이터센터向 전력을 공급할 수 있다는 입장.",
      "'AI 전력 붐의 조용한 승자'로 평가받으며 2027~2028년 실적 성장 스토리가 부각.",
    ],
    strengths: [
      "미국 최대 규모의 경쟁발전사업자 중 하나로, 원자력·가스·석탄·배터리를 아우르는 다변화된 발전 포트폴리오로 특정 연료가격 변동 노출을 분산.",
      "Comanche Peak 원전은 2053년까지 운영 승인을 받아 장기간 안정적 무탄소 기저전력 공급 가능.",
      "발전(도매)과 소매 전력판매를 수직계열화해 도소매 마진을 동시에 확보.",
    ],
    risks: [
      "⚠️ ERCOT·PJM 등 도매전력시장 가격 변동성에 이익이 크게 노출돼, 전력가격 하락 국면에서는 실적 변동 폭이 커질 수 있음.",
      "데이터센터 수요를 둘러싼 각 발전사업자 간 경쟁 심화(가스터빈 슬롯 품귀 등 공급망 병목까지 겹쳐) - 신규 용량 확보 비용 상승 가능성.",
      "화석연료(가스·석탄) 비중이 여전히 상당해 향후 탄소 규제 강화 시 정책 리스크에 노출.",
    ],
    sources: [
      {title:"Vistra and Meta Announce Agreements to Support Nuclear Plants in PJM", url:"https://investor.vistracorp.com/2026-01-09-Vistra-and-Meta-Announce-Agreements-to-Support-Nuclear-Plants-in-PJM-and-Add-New-Nuclear-Generation-to-the-Grid"},
      {title:"Meta inks nuclear deals for up to 6.6 GW from Oklo, Vistra, TerraPower", url:"https://www.utilitydive.com/news/meta-nuclear-deal-oklo-vistra-terrapower-ai-data-centers/809215/"},
      {title:"Vistra Is the Quietest Big Winner of the AI Power Boom. Here's Why.", url:"https://www.fool.com/investing/2026/08/23/vistra-is-the-quietest-big-winner-of-the-ai-power/"},
      {title:"Vistra Receives Approval to Operate Comanche Peak Nuclear Plant Through 2053", url:"https://investor.vistracorp.com/2024-07-30-Vistra-Receives-Approval-to-Operate-Comanche-Peak-Nuclear-Plant-Through-2053"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] EBITDA +30%, KKR·NVIDIA와 10억 달러 데이터센터 파트너십 - 실적은 견조한데 주가만 부진",
        importance: "medium",
        tone: "positive",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-08-07 2분기 EBITDA가 전년比 30% 급증(17.7억 달러)했다.", "KKR·NVIDIA와 함께 10억 달러 규모 'Helix' 데이터센터 파트너십을 발표했다.", "경영진은 전력 수요 성장이 AI 데이터센터를 넘어 확대되고 있다고 언급했다.", "최근 12개월 주가는 28% 하락했으나 실적 자체는 견조했고 애널리스트들은 낙관적 시각을 유지했다."],
        why: ["실적과 신규 파트너십 모두 긍정적인데 주가만 크게 빠져있다는 것은, 눌림목이 사업 악화보다 시장 전반 조정 성격일 가능성을 시사한다."],
        beginner: ["회사가 돈을 더 잘 벌고 있고, 큰 회사들(KKR·엔비디아)과 새로운 사업도 같이 시작했어요. 그런데 주가는 최근 1년간 많이 빠졌어요 - 회사 사정보다는 다른 이유(시장 전체 분위기)일 가능성이 커요."],
        interpretation: "전력 수요 성장 스토리가 실제 파트너십·실적으로 뒷받침되고 있어, 낙폭과다 신호가 '일시적으로 싸진 우량주'에 가까운 근거가 있다.",
        decision: "이 뉴스 자체가 매수 신호는 아니지만, 낙폭과다 신호와 방향이 같은(긍정) 사례로 참고할 것.",
        watch: ["Helix 파트너십 진행 상황", "다음 분기 EBITDA 성장세 지속 여부"],
        confidence: "회사 공식 실적 발표와 다수 매체(Benzinga, TIKR) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Vistra Reports Second Quarter 2026 Results", url:"https://investor.vistracorp.com/2026-08-07-Vistra-Reports-Second-Quarter-2026-Results"},
        {title:"VST Q2 2026: EBITDA Jumps 30%, $1B Helix Partnership (BigGo Finance)", url:"https://finance.biggo.com/news/US_VST_2026-08-07"},
        {title:"Vistra Says Power Demand Growth Extends Beyond AI Data Centers (Benzinga)", url:"https://www.benzinga.com/markets/earnings/26/08/61051374/vistra-says-power-demand-growth-extends-beyond-ai-data-centers"},
        ],
      },
    ],
    updated: "2026-08-19",
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기, 8/7 발표)",
        headline: "GAAP 매출은 $40.2억으로 컨센서스 $62.9억을 36.2% 큰 폭으로 밑돌았지만 이는 파생상품 마크투마켓 손실 반영 탓이고, 조정 EPS는 $1.80로 컨센서스 $1.54를 16.9% 상회했으며 Ongoing Operations 조정 EBITDA는 $17.67억으로 전년동기($13.49억) 대비 31% 급증했어요.",
        oneTime: "미래 결제 예정 상품 헤지에서 $4.72억 규모의 미실현(마크투마켓) 손실이 발생해 GAAP 순이익($3.05억, GAAP 희석 EPS $0.76·전년 $0.81)을 눌렀어요(전년 동기엔 오히려 $1,600만 이익). 매출 컨센서스와의 큰 괴리도 이 파생상품 시가평가 손실이 전년 대비 $6.11억 늘어난 영향이 커요.",
        coreRead: "GAAP 숫자는 헤지 회계 때문에 분기마다 크게 출렁이므로, 실제 사업 체력은 조정 EBITDA와 잉여현금흐름으로 보는 게 맞아요. 회사는 2026년 가이던스(조정 EBITDA $68~76억, 조정 FCFbG $39.25~47.25억)를 그대로 재확인했고, 8월 3일 기준 2026년 예상 발전량의 약 100%를 헤지해놔서 하반기 실적 가시성이 높아요. 텍사스·동부 지역 도매가격 상승과 Lotus 가스발전 자산의 첫 온전한 분기 기여가 조정 EBITDA 31% 성장을 이끌었어요.",
        forecast: "3분기(2026-09-30 마감)에는 여름 성수기 도매전력가격 강세와 코젠트릭스 가스자산 편입 효과 온기 반영으로 조정 EBITDA가 전년동기 대비 두 자릿수% 성장을 이어갈 걸로 봐요. 다만 파생상품 마크투마켓 손익 변동성 때문에 GAAP EPS는 컨센서스와 또 한 번 크게 어긋날 가능성이 높다고 봐요(제 추정이라 틀릴 수 있어요).",
        confidence: "매출·EPS·조정 EBITDA 수치, 헤지 손실 규모, 가이던스 재확인 여부는 8/7 공식 실적발표(및 관련 8-K) 기준 확인된 사실이고, 3분기 방향성 전망과 GAAP 변동성 예측 부분은 제 해석이에요.",
        sources: [
          {
            title: "Vistra Reports Second Quarter 2026 Results",
            url: "https://www.prnewswire.com/news-releases/vistra-reports-second-quarter-2026-results-302845874.html",
          },
          {
            title: "Vistra Q2 2026 earnings: Adjusted EBITDA rises 31% despite hedge losses",
            url: "https://www.tradingkey.com/news/earnings/262088532-tradingkey",
          },
          {
            title: "Vistra Corp. Q2 2026: Revenue $4.02B, EPS $0.76— 10-Q Summary",
            url: "https://www.tradingview.com/news/tradingview:cbfaebad6fe5b:0-vistra-corp-q2-2026-revenue-4-02b-eps-0-76-10-q-summary/",
          },
          {
            title: "Vistra Q2 Earnings Beat Estimates on Pricing and Lotus, Revenues Miss",
            url: "https://www.tradingview.com/news/zacks:a9ffe855a094b:0-vistra-q2-earnings-beat-estimates-on-pricing-and-lotus-revenues-miss/",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "밸류에이션 부담은 있지만 헤지된 2026년 실적 가시성과 대형 PPA 파이프라인이 받쳐주는 '유지' 관점이에요.",
        view: "현재 주가 $140.03 기준 올해(2026년 12월 결산) 컨센서스 EPS $9.59(9개 기관)에 대한 포워드 PER은 약 14.5배로, 자체 6년 밴드 상으로는 밸류에이션 부담이 크지 않은 구간이에요. 반면 트레일링 GAAP PER은 약 23.4배로 신재생 섹터 평균(16.8배)·동종업체(20.8배)보다 높게 잡히는데, 이건 2분기 GAAP 순이익($3.05억)이 헤지 회계상 미실현 손실 $4.72억에 눌린 왜곡이 커서예요. 실제 체력을 보여주는 Ongoing Operations 조정 EBITDA는 $17.67억으로 전년동기 대비 31% 늘었고, 2026년 조정 EBITDA $68~76억·조정 FCFbG $39.25~47.25억 가이던스를 그대로 재확인했으며 올해 발전량의 약 100%를 헤지해둬서 하반기 하방 리스크는 제한적이에요. 메타와의 20년 PPA(원전 3곳 2,600MW+ 증설)와 $47억 규모 코젠트릭스 가스자산 인수 같은 대형 전력 소비처向 장기계약 파이프라인이 내년(2027년 12월 결산) 컨센서스 EPS $10.35(10개 기관)로의 이익 성장 스토리를 뒷받침해요. 다만 데이터센터발 전력수요 기대가 이미 주가에 상당 부분 선반영돼 있어서, 실적이 가이던스 상단을 못 채우거나 PPA·증설 실행이 지연되면 밸류에이션 프리미엄이 빠르게 되돌려질 수 있는 구간이에요.",
        increaseIf: [
          "3분기(2026-09-30 마감) 실적에서 조정 EBITDA가 가이던스 상단($76억) 경로를 유지하거나 상향될 때",
          "메타·AWS 외 추가 대형 하이퍼스케일러向 PPA가 체결되며 2027년 이후 계약 물량이 늘어날 때",
          "코젠트릭스 5.5GW 자산 편입 이후 조정 FCFbG가 가이던스 상단에 근접해 자사주 매입 여력이 확인될 때",
        ],
        wrongIf: [
          "3~4분기에 파생상품 마크투마켓 손실이 재차 확대되며 GAAP뿐 아니라 조정 EBITDA 가이던스 자체가 하향될 때",
          "원전 3곳 2,600MW+ 출력증강 프로젝트가 인허가·규제 이슈로 지연·축소될 때",
          "텍사스·동부 도매전력가격이 예상보다 빠르게 꺾여 실현 마진이 축소될 때",
        ],
        watchNext: [
          "3분기(2026-09-30 마감) 실적에서 Ongoing Operations 조정 EBITDA·FCFbG 가이던스 재확인 여부",
          "코젠트릭스 5.5GW 가스자산 인수 마무리 시점과 편입 후 EBITDA 기여도",
          "메타 PPA 관련 원전 3곳 출력증강 인허가·공사 진행 상황 공시",
        ],
        confidence: "실적 수치와 가이던스는 8/7 공식 발표 기준 사실이고, 밸류에이션 프리미엄 해석과 향후 전망은 제 판단이에요. 별도의 확률 수치는 붙이지 않고 위 조건들로 판단 근거를 대신해요.",
        sources: [],
      },
    ],
    role: {
      tags: ["발전(원자력+가스+재생에너지)", "소매 전력 공급"],
      stars: 4,
      note: "다양한 발전원을 보유한 종합 전력회사로, 메타와 20년 PPA를 맺고 원전 3곳에서 2,600MW 이상(미국 기업이 지원하는 최대 규모 원자력 출력증강)을 공급하기로 했고, $47억을 들여 5.5GW 가스발전자산(코젠트릭스)까지 인수하며 대형 전력 소비처向 사업으로 무게중심을 옮기고 있어요.",
    },
  },
  ETN: {
    updated: "2026-08-26",
    customers: [
      "데이터센터 전력 인프라(변압기·UPS·배전반 등) 수요 급증이 핵심 성장 동력 - 2026년 1분기 전기(Electrical) 부문 백로그 전년比 48% 급증.",
      "2026년 2분기 실적에서 데이터센터 관련 백로그가 307GW 돌파, 연간 이익 전망을 주당 13.50달러로 상향.",
      "2025년 4분기 사상 최대 분기 매출과 함께 수주 가속화, 백로그 지속 성장.",
      "데이터센터 고객 외에도 산업체·상업용 건물 등 폭넓은 전기 인프라 고객 보유.",
    ],
    strengths: [
      "전력 관리 분야에서 Schneider Electric, ABB, Siemens 등과 경쟁하는 소수 글로벌 대형 업체 - 데이터센터 전력 인프라 슈퍼사이클의 직접적 수혜.",
      "백로그가 사상 최고 수준으로 누적돼 향후 수년간 매출 가시성이 높음.",
      "전기·유압·항공우주 등 다각화된 사업 포트폴리오로 특정 산업 사이클 의존도 완화.",
    ],
    risks: [
      "⚠️ 관세(tariff) 및 원자재 비용 리스크 - 전기장비 산업 전반이 미국 관세 정책 변화에 노출.",
      "Schneider Electric, ABB, Vertiv, Siemens 등과의 경쟁 심화로 대형 데이터센터 프로젝트 수주 경쟁 가능성.",
      "데이터센터發 수요 의존도가 높아지는 만큼 AI 인프라 투자 사이클 둔화 시 백로그 성장세가 꺾일 리스크.",
    ],
    sources: [
      {title:"Eaton (ETN) Posts Record Q1 Revenue as Electrical Backlog Surges 48% on Data Center Demand", url:"https://news.alphastreet.com/eaton-etn-posts-record-q1-revenue-as-electrical-backlog-surges-48-on-data-center-demand/amp/"},
      {title:"[ETN Q2 2026 Earnings Call] Eaton Lifts Profit Outlook to $13.50 as Data Center Backlog Tops 307 GW", url:"https://finance.biggo.com/news/US_ETN_2026-07-31"},
      {title:"Eaton Reports Record Fourth Quarter 2025 Results, with Accelerating Orders and Continued Backlog Growth", url:"https://www.eaton.com/us/en-us/company/news-insights/news-releases/2026/eaton-reports-record-fourth-quarter-2025-results.html"},
      {title:"Electrical Equipment Market Report with Impact Analysis of US Tariffs", url:"https://www.businesswire.com/news/home/20251121260415/en/Electrical-Equipment-Market-Report-with-Impact-Analysis-of-US-Tariffs-Featuring-Samsung-Mitsubishi-Fuji-Honeywell-ABB-Siemens-Schneider-Electric-Vertiv-Eaton-and-General-Electric---ResearchAndMarkets.com"},
    ],
    newsLog: [
      {
        date: "2026-08-27",
        headline: "에버코어, 2분기 실적 서프라이즈 후 이튼 투자의견 상향·목표가 502달러로 올렸어요.",
        importance: "medium",
        tone: "positive",
        horizon: "단기~중기 (수주~수개월간 주가 모멘텀에 영향)",
        facts: [
          "8/3(2026년) 에버코어ISI 애널리스트 데이비드 라소가 이튼 투자의견을 '인라인'에서 '아웃퍼폼'으로 상향하며 목표주가를 453달러에서 502달러로 올렸어요.",
          "BMO캐피탈 애널리스트 대니얼 디시코도 아웃퍼폼 의견을 유지하며 목표주가를 477달러에서 487달러로 상향했어요.",
          "두 상향 모두 7/30 발표된 2분기 조정 EPS 3.15달러(컨센서스 3.07달러 상회)와 2026년 전체 가이던스 상향(조정 EPS 13.40~13.60달러) 직후 나왔어요.",
        ],
        why: [
          "목표가 502달러는 8/27 종가 419.44달러 대비 약 +20% 상승 여력을 시사하는 수준이라, 월가가 데이터센터發 성장 스토리를 실적으로 확인했다고 보고 있다는 뜻이에요.",
          "기존에 지적된 '데이터센터 매출 21%, 주문 +240%' 같은 강점이 실제 가이던스 상향으로 뒷받침되면서 리레이팅 근거가 강화된 사례예요.",
        ],
        beginner: [
          "애널리스트들이 회사가 실적을 잘 내니까 '앞으로 더 오를 수 있다'고 목표주가를 올려 잡은 거예요.",
          "목표주가가 오른다고 주가가 바로 그만큼 오르는 건 아니고, 앞으로 실적이 계속 잘 나와야 그 목표가 현실이 돼요.",
        ],
        interpretation: "애널리스트 목표가 상향은 실적 발표라는 팩트에 대한 월가의 후행적 확인 성격이 강하므로, 이 자체를 매수 신호로 보기보다는 이미 진행 중인 데이터센터 성장 스토리가 시장 컨센서스에 반영되는 과정으로 해석하는 게 맞아요.",
        decision: "이미 26.5배 선행 PER에 성장 기대가 상당 부분 반영돼 있는 만큼, 이번 목표가 상향을 추격 매수 근거로 삼기보다는 3분기 실적에서 유기성장률과 조정 EPS가 가이던스를 실제로 충족하는지 확인하는 게 우선이에요.",
        watch: [
          "다른 대형 증권사들의 후속 목표가 조정 여부",
          "502달러 목표가와 실제 주가 흐름 간 갭이 좁혀지는 속도",
        ],
        confidence: "벤징가가 보도한 애널리스트 리포트 요약 기사 기준이며, 원 리포트 원문은 확인하지 못했어요 — 목표가 숫자 자체는 신뢰할 수 있는 2차 출처예요.",
        sources: [
          {
            title: "Eaton Analysts Boost Their Forecasts After Strong Q2 Earnings",
            url: "https://www.benzinga.com/analyst-stock-ratings/price-target/26/08/60877985/eaton-analysts-boost-their-forecasts-after-strong-q2-earnings",
          },
        ],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기)",
        headline: "2분기 매출 85억 달러로 전년비 +21%(유기성장 +14%)를 기록해 가이던스 상단을 웃돌았고, 조정 EPS 3.15달러로 컨센서스 3.07달러를 상회했어요.",
        oneTime: "GAAP 순이익은 8.21억 달러로 전년 9.82억 달러 대비 -16% 감소했는데, 세후 기준 4.07억 달러(전년 1.73억 달러)를 조정 대상으로 제외했어요 — 인수·매각 관련 비용 1.90억 달러, 무형자산상각 1.98억 달러, 구조조정 0.19억 달러가 포함됐고, 여기에 보이드써멀 인수 관련 부채로 순이자비용이 0.71억→2.01억 달러로 거의 3배 급증한 게 GAAP 이익을 크게 눌렀어요.",
        coreRead: "유기성장률 14%가 가이던스 상단을 넘었고 전사 세그먼트마진 23.1%(가이던스 대비 +10bp), 특히 일렉트리컬 아메리카스 마진이 전분기 대비 +190bp 오른 27.5%를 기록해 본업 체력은 탄탄해요. GAAP 순이익 감소는 영업 부진이 아니라 보이드써멀 인수에 따른 무형자산상각·이자비용 증가가 원인이라 조정 EPS·현금흐름 기준 실질 수익력은 오히려 개선된 것으로 보여요. 회사는 2026년 전체 조정 EPS 가이던스를 13.40~13.60달러로 상향했는데, 이는 저희가 갖고 있는 컨센서스 13.52달러와 거의 정확히 일치해요.",
        forecast: "3분기(9월 마감 분기) 매출은 전년비 +15% 안팎, 조정 EPS는 3.25~3.35달러 구간으로 예상돼요. 다만 보이드써멀 인수 관련 이자비용·무형자산상각 부담이 최소 2~3개 분기 더 이어지면서 GAAP EPS는 조정 EPS 대비 20% 이상 낮은 수준을 유지할 가능성이 높다고 봐요.",
        confidence: "매출·EPS·가이던스·일회성 항목 금액은 이튼 공식 보도자료·8-K 기준 확정 사실이고, 3분기 전망치 구간과 'GAAP-조정 EPS 갭이 계속될 것'이라는 판단은 제 해석이에요.",
        sources: [
          {
            title: "Eaton Reports Record Second Quarter 2026 Results, with Strong Organic Growth, Accelerating Orders and Backlog, and Raises Organic Growth Guidance",
            url: "https://www.eaton.com/us/en-us/company/news-insights/news-releases/2026/eaton-reports-record-second-quarter-2026-results.html",
          },
          {
            title: "Eaton Q2 2026 earnings: Organic growth lifted sales while GAAP profit fell",
            url: "https://www.tradingkey.com/news/earnings/262067237-tradingkey",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "26.5배 선행 PER은 싸지 않지만, 14% 유기성장과 가이던스 상향이 뒷받침하는 밸류에이션이에요.",
        view: "8/27 기준 종가 419.44달러에 올해(2026년 12월 마감, 애널리스트 24명) 컨센서스 EPS 13.52달러를 적용하면 약 31배, 내년(2027년 12월 마감, 22명) 컨센서스 EPS 16.03달러를 적용하면 약 26.5배 수준으로, 내년 실적 기준으로는 저희 27년치 자체 PER 밴드 안에서 크게 벗어나지 않는 구간이에요. 7/30 발표된 2분기 실적에서 매출 85억 달러(+21%, 유기 +14%)로 가이던스 상단을 넘었고 회사는 올해 조정 EPS 가이던스를 13.40~13.60달러로 올렸는데, 이는 저희 컨센서스 13.52달러와 거의 정확히 일치해 시장 기대가 현실적인 수준이라는 뜻이에요. 다만 GAAP EPS는 2.11달러로 전년비 -16% 감소했는데, 이는 보이드써멀(95억 달러) 인수에 따른 순이자비용 급증(0.71억→2.01억 달러)과 무형자산상각 때문이라 실적의 질보다는 재무구조 변화 문제로 봐야 해요. 여기에 6/11 발표된 모빌리티 사업부와 데이나(Dana)의 리버스모리스트러스트 합병(2027년 1분기 완료 목표, 이튼에 11억 달러 현금 유입)까지 진행 중이라 2027년부터는 전기·항공우주 중심의 더 슬림하고 고마진인 포트폴리오로 재편될 전망이에요. 데이터센터 매출 비중 21%, 1분기 데이터센터 주문 +240% 급증이라는 기존 성장 스토리에 8/3 에버코어의 투자의견 상향(목표가 502달러)까지 겹치면서 밸류에이션 프리미엄이 정당화되는 흐름이지만, 이미 상당 부분 주가에 반영돼 있어 추가 상승은 실적이 계속 기대치를 웃돌아야 나올 걸로 보여요.",
        increaseIf: [
          "3분기 이후에도 유기성장률이 두 자릿수(가이던스 11~13%)를 유지하고 데이터센터 수주·백로그가 계속 늘어날 때",
          "보이드써멀 통합이 순조롭게 진행돼 마진이 훼손되지 않고 GAAP-조정 EPS 갭이 축소될 때",
          "데이나와의 모빌리티 합병이 2027년 1분기 계획대로 종결돼 11억 달러 현금이 유입되고 전기·항공우주 중심 포트폴리오 재편이 완료될 때",
        ],
        wrongIf: [
          "AI·데이터센터向 설비투자가 둔화되면서 유기성장률이 가이던스 하단(11%) 아래로 꺾일 때",
          "보이드써멀 인수 관련 이자비용·상각 부담이 예상보다 오래 지속되며 GAAP 이익이 계속 부진할 때",
          "데이나 합병이 주주 승인이나 규제 문제로 무산되거나 지연될 때",
        ],
        watchNext: [
          "10월 말~11월 초 예정된 3분기(9월 마감) 실적에서 유기성장률과 조정 EPS 3.25~3.35달러 구간 달성 여부",
          "데이나 인코퍼레이티드 주주총회 승인 및 규제 심사 진행 상황(2027년 1분기 종결 목표)",
          "26.5배 선행 PER 대비 실제 EPS 서프라이즈 여부와 추가 애널리스트 목표가 조정",
        ],
        confidence: "가격·컨센서스 EPS·PER은 로컬 데이터 기준 확정치이고, 밸류에이션 해석과 시나리오는 제 판단이에요.",
        sources: [],
      },
    ],
    role: {
      tags: ["전력관리 인프라", "변압기·배전 설비", "데이터센터 냉각(신규)"],
      stars: 4,
      note: "데이터센터·산업시설 전력관리 인프라의 핵심 공급사로, 데이터센터 매출이 2025년 전체 매출의 21%를 차지했고 1분기 데이터센터 주문이 전년비 +240% 급증했어요. 냉각 분야 강화를 위해 $95억 규모로 데이터센터 냉각업체 보이드써멀을 인수해(2026년 2분기 완료 예정) 전력+냉각 양쪽으로 영역을 넓히는 중이에요.",
    },
  },
  PWR: {
    updated: "2026-08-26",
    customers: [
      "미국 대형 전력 유틸리티(AEP, NiSource 등)와 통신사가 핵심 고객 - AEP와 2025년 11월 전략적 파트너십을 체결해 송전망·전력 인프라 구축을 장기 공동 추진.",
      "NiSource向 대형 전력 수요처(데이터센터 추정) 대상 발전·그리드 인프라 솔루션 공급자로도 선정.",
      "2026년 2분기 기준 수주잔고가 484억 달러(1분기 기준)로 사상 최대치 경신 - AI発 전력수요·재생에너지 전환·노후 송전망 교체 수요 유입.",
    ],
    strengths: [
      "미국 전역에 걸친 대규모 숙련 전기 시공인력 확보가 핵심 경쟁우위 - 업계 만성적 인력난 속에서 신규 수주를 소화할 수 있는 몇 안 되는 대형 시공사.",
      "발전·송전·배전·재생에너지·통신 등 엔드투엔드 '토탈 솔루션' 제공 역량과 유틸리티들과의 수십 년간 관계·현장 이력이 진입장벽.",
    ],
    risks: [
      "⚠️ 경쟁사 Dycom Industries가 계약 위반을 이유로 소송(수정 소장)을 제기하는 등 업계 내 법적 분쟁 리스크, 인력·자재 비용 상승이 마진을 압박할 가능성.",
      "대규모 인프라 프로젝트의 수주·매출 인식 특성상 실적 변동성이 크고, 유틸리티 자본지출 계획 변경·금리 환경에 따라 발주 시점이 지연될 위험.",
    ],
    sources: [
      {title:"Quanta Services Inc (PWR) (Q2 2026) Earnings Call Highlights", url:"https://finance.yahoo.com/markets/stocks/articles/quanta-services-inc-pwr-q2-010450600.html"},
      {title:"Quanta projects 2026 revenue of $39.3B-$39.7B", url:"https://seekingalpha.com/news/4621968-quanta-projects-2026-revenue-of-39_3b-39_7b-as-record-53b-backlog-supports-raised-outlook"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 매출·EPS 컨센서스 대폭 상회, 사상 최대 수주잔고 - 이후 하락은 밸류에이션 조정 성격",
        importance: "medium",
        tone: "positive",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-07-30 2분기 매출 96억 달러, EPS 4.24달러로 컨센서스를 크게 상회했고 발표 직후 주가가 17% 급등했다.", "사상 최대 수주잔고 530억 달러를 근거로 2026년 연간 매출 가이던스를 393억~397억 달러로 상향했다.", "데이터센터·전력망 수요 강세가 실적 상향의 핵심 동력으로 지목됐다.", "실적 발표 이후엔 밸류에이션 부담과 목표주가 하향 여파로 5일 연속 약세를 보였다."],
        why: ["실적 발표 직후 큰 폭 상승했다가 이후 조정을 받은 흐름은 실적 미스가 아니라 급등에 따른 밸류에이션 되돌림 성격에 가깝다."],
        beginner: ["성적이 너무 좋아서 발표 당일 주가가 크게 올랐다가, 그 뒤로는 '너무 많이 올랐다'는 이유로 며칠 계속 쉬어갔어요. 회사 사업 자체가 나빠진 건 아니에요."],
        interpretation: "수주잔고와 가이던스가 모두 개선되고 있어, 낙폭과다가 '일시적으로 싸진 우량주'에 가까운 근거가 있다.",
        decision: "이 뉴스 자체가 매수 신호는 아니지만, 낙폭과다 신호와 방향이 같은(긍정) 사례로 참고할 것.",
        watch: ["레버리지(부채) 우려 관련 후속 보도", "수주잔고 추가 증가 여부"],
        confidence: "회사 공식 실적 발표 기준, 다수 매체(BigGo, Seeking Alpha) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Quanta Services Inc (PWR) (Q2 2026) Earnings Call Highlights (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/quanta-services-inc-pwr-q2-010450600.html"},
        {title:"Quanta projects 2026 revenue of $39.3B-$39.7B (Seeking Alpha)", url:"https://seekingalpha.com/news/4621968-quanta-projects-2026-revenue-of-39_3b-39_7b-as-record-53b-backlog-supports-raised-outlook"},
        ],
      },
    ],
    updated: "2026-08-19",
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기)",
        headline: "2분기 매출이 $95.6억으로 전년동기($67.7억) 대비 41% 급증했고 조정 EPS $4.24로 컨센서스를 크게 상회하면서, 회사가 2026년 매출 가이던스를 $393~397억, 조정 EPS 가이던스를 $16.45~16.95로 재차 상향했어요.",
        oneTime: "GAAP 희석 EPS는 $2.96으로 조정 EPS($4.24) 대비 낮은데, 이는 일회성 손익이라기보다 무형자산 상각 $1.57억, 주식보상비용 $6.34천만, 인수·통합비용 $2.85천만, 우발부채 공정가치 증가 $6.5백만, 비연결 지분법 손실 $6.4백만 등 M&A·비현금성 항목이 계속 GAAP 수익을 눌러온 결과예요. 실적을 부풀리는 이례적 일회성 이익은 확인되지 않았어요.",
        coreRead: "백로그가 1분기 $485억에서 2분기 $534억으로 한 분기 만에 또 사상 최대치를 갱신했고, 조정 EBITDA는 $11억(가이던스 기준 연간 $40.9~42.1억)으로 매출 대비 마진이 견조해요. 영업현금흐름 가이던스도 $29~34억으로 상향된 걸 보면 GAAP 순이익의 상각비 잡음을 걷어내면 현금창출력 자체는 매우 건강한 그림이에요.",
        forecast: "3분기(9월 마감)는 계절적으로 시공 성수기라 조정 EPS가 $4.5~4.8 구간, 매출은 가이던스 상단을 향해 순차 확대될 것으로 봐요. 백로그도 $534억보다 늘어나 다시 사상 최대를 기록할 가능성이 높다고 판단해요(단, 이 구간 수치는 제 추정이라 빗나갈 수 있어요).",
        confidence: "매출·EPS·백로그·가이던스 수치는 2026-07-30 발표된 공식 2분기 실적 보도자료 기준 확인된 사실이고, 3분기 전망치와 마진 해석은 그 위에 얹은 제 추정이에요.",
        sources: [
          {
            title: "QUANTA SERVICES REPORTS SECOND QUARTER 2026 RESULTS",
            url: "https://www.prnewswire.com/news-releases/quanta-services-reports-second-quarter-2026-results-302838646.html",
          },
          {
            title: "Quanta projects 2026 revenue of $39.3B-$39.7B as record $53B backlog supports raised outlook (NYSE:PWR)",
            url: "https://seekingalpha.com/news/4621968-quanta-projects-2026-revenue-of-39_3b-39_7b-as-record-53b-backlog-supports-raised-outlook",
          },
          {
            title: "Quanta Services Q2 2026 Earnings: $9.6B Revenue | PWR Stock News",
            url: "https://www.stocktitan.net/news/PWR/quanta-services-reports-second-quarter-2026-m6bhiva7pnxr.html",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "펀더멘털은 계속 상향, 주가는 이미 그 상향을 상당 부분 반영 - 신규 매수는 눌림목에서",
        view: "현재가 $616.73 기준 선행 PER은 자체 밴드로 약 42.2배인데, 이는 올해 컨센서스 EPS $16.73(24개 증권사, 2026-12-31 마감 기준)과 내년 EPS $19.64(25개 증권사, 2027-12-31 마감) 모두를 반영해도 24년 밴드 상단권에 위치한 수준이에요. 그런데 2분기 실적은 그 프리미엄을 정당화하는 방향으로 나왔어요 - 매출 $95.6억(YoY +41%), 조정 EPS $4.24로 어닝서프라이즈를 냈고 백로그가 $534억으로 1분기 $485억에서 한 분기 만에 또 늘었으며, 회사는 2026년 매출 가이던스를 $393~397억, 조정 EPS를 $16.45~16.95로 상향했어요 - 컨센서스 EPS $16.73은 이 밴드 중상단에 위치해 무리한 눈높이는 아니에요. 다만 GAAP EPS($2.96)와 조정 EPS($4.24) 사이 괴리가 상각비·주식보상 등으로 계속 크게 벌어지고 있다는 점, 그리고 주가가 52주 밴드($363~$789) 상단권에 근접해 있다는 점은 신규 진입 타이밍상 부담이에요. 결국 그리드 현대화·데이터센터 전력 수요라는 구조적 성장 스토리는 확인되고 있지만, 42배 선행 PER은 '추가 서프라이즈가 계속돼야 유지되는' 밸류에이션이라 실적 모멘텀이 조금만 둔화돼도 멀티플 압박이 먼저 올 수 있어요.",
        increaseIf: [
          "3분기 실적에서 조정 EPS가 가이던스 상단($16.95 환산 페이스) 이상으로 트래킹되고 백로그가 $534억보다 추가로 늘어날 경우",
          "데이터센터·그리드 현대화向 신규 대형 수주가 이어지며 조정 EBITDA 마진이 현재 가이던스(매출 대비 약 10.4%)보다 개선될 경우",
          "GAAP과 조정 EPS 간 괴리(상각비·주식보상)가 축소되며 GAAP 이익의 질이 좋아질 경우",
        ],
        wrongIf: [
          "인건비·자재비 상승이나 프로젝트 지연으로 3분기 매출 또는 조정 EPS가 가이던스 하단을 밑돌 경우",
          "백로그 증가세가 꺾이거나 취소·연기 프로젝트가 나타나 $534억에서 정체·감소할 경우",
          "42배 수준 선행 PER에서 시장이 성장 둔화를 조금이라도 감지해 리레이팅(멀티플 축소)이 시작될 경우",
        ],
        watchNext: [
          "10월 말~11월 초 예정된 3분기 실적에서 매출·조정 EPS가 가이던스 상단 트렌드를 유지하는지",
          "백로그가 $534억에서 추가로 늘어나는지, 특히 데이터센터/전력망 대형 프로젝트 신규 수주 여부",
          "GAAP EPS($2.96)와 조정 EPS($4.24)의 괴리가 다음 분기에도 상각비·주식보상 중심으로 유지되는지, 아니면 축소되는지",
          "선행 PER 42배가 실적 상향에도 밸류에이션 프리미엄으로 유지되는지, 주가가 52주 상단권($789 부근)을 재차 시험하는지",
        ],
        confidence: "2분기 실적·가이던스 수치는 2026-07-30 공식 보도자료 기준 확인된 사실이고, 밸류에이션에 대한 해석과 향후 조건부 시나리오는 제 판단이에요.",
        sources: [],
      },
    ],
    role: {
      tags: ["전력망·에너지 인프라 시공(EPC)"],
      stars: 4,
      note: "전력망을 실제로 짓고 연결하는 시공 능력은 장비 제조보다 대체하기 어려운 숙련인력·장비 집약적 영역이에요. 백로그가 약 $485억(2026년 1분기 기준 사상 최대)까지 쌓였고 2026년 매출 가이던스를 $347~352억으로 상향할 만큼 그리드 현대화·데이터센터 전력 수요의 직접 수혜를 받고 있어요.",
    },
  },
  HUBB: {
    updated: "2026-08-26",
    customers: [
      "전력 유틸리티와 데이터센터 건설사가 양대 축 - 유틸리티(그리드 현대화 투자)와 데이터센터向 전기 인프라 수요가 동반 강세.",
      "2026년 4월 실적 발표에서 데이터센터·유틸리티 수요 호조를 근거로 2026년 이익 가이던스 상향.",
      "2025년 8월 DMC Power 인수를 통해 송전선 커넥터·부품 사업 확대, NSI 인수 등으로 유틸리티向 제품군 보강.",
    ],
    strengths: [
      "138년 역사(1888년 설립)의 유틸리티·전기 커넥터 분야 브랜드력과 유틸리티 고객사와의 장기 납품 관계가 전환비용을 높임.",
      "유틸리티 솔루션과 전기 솔루션 2개 사업부 포트폴리오로 그리드 노후화 교체 수요와 데이터센터 전력 인프라 수요 양쪽에 동시 노출.",
    ],
    risks: [
      "⚠️ 관세(원자재·부품 수입) 노출에 따른 원가 상승 리스크가 최근 SWOT 분석에서 반복적으로 지적됨.",
      "Eaton, Schneider Electric 등 대형 전기장비업체와 직접 경쟁 중이며 이들 대비 규모의 경제에서 열위라는 지적도 존재.",
      "유틸리티 자본지출 사이클 둔화 시 매출 변동 위험.",
    ],
    sources: [
      {title:"Hubbell Inc (HUBB) Q2 2026 Earnings Call Highlights", url:"https://finance.yahoo.com/markets/stocks/articles/hubbell-inc-hubb-q2-2026-010053485.html"},
      {title:"Hubbell (HUBB) Powers Ahead with Strong Q2 2026 Earnings, Raised Guidance", url:"https://site.financialmodelingprep.com/market-news/hubbell-hubb-powers-ahead-strong-q2-2026-earnings-raised-guidance"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 매출 +15.3%·가이던스 상향, 데이터센터向 +65% 급증 - 마진 소폭 하락이 유일한 부정 요인",
        importance: "medium",
        tone: "positive",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-07 2분기 매출 17.1억 달러(+15.3% YoY), 예상 상회 + 2026년 조정 EPS 가이던스 상향을 발표했다.", "데이터센터向 매출이 전년比 약 65% 급증했고, Utility 부문 수주·견적 활동도 가속됐다.", "영업이익률은 20.4%로 소폭 하락(인플레·구조조정 투자 영향)했으나 조정 EBITDA 마진은 유지됐다."],
        why: ["매출 성장과 가이던스 상향이 뚜렷하고 마진 하락도 인플레·구조조정 투자라는 명확한 이유가 있어, 사업 악화의 신호로 보기 어렵다."],
        beginner: ["매출도 잘 늘고 앞으로 전망도 더 좋아졌어요. 이익률이 살짝 떨어지긴 했는데, 이건 물가 상승·투자 비용 때문이라 일시적일 가능성이 커요."],
        interpretation: "데이터센터向 성장이 뚜렷해 낙폭과다가 '일시적으로 싸진 우량주'에 가까운 근거가 있다.",
        decision: "이 뉴스 자체가 매수 신호는 아니지만, 낙폭과다 신호와 방향이 같은(긍정) 사례로 참고할 것.",
        watch: ["다음 분기 영업이익률 회복 여부", "데이터센터向 매출 성장세 지속 여부"],
        confidence: "회사 공식 실적 발표 기준, 다수 매체(FMP, StockStory) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Hubbell Inc (HUBB) Q2 2026 Earnings Call Highlights (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/hubbell-inc-hubb-q2-2026-010053485.html"},
        {title:"Hubbell (HUBB) Powers Ahead with Strong Q2 2026 Earnings, Raised Guidance (FMP)", url:"https://site.financialmodelingprep.com/market-news/hubbell-hubb-powers-ahead-strong-q2-2026-earnings-raised-guidance"},
        {title:"HUBB Q2 Deep Dive (StockStory)", url:"https://stockstory.org/us/stocks/nyse/hubb/news/earnings-call/hubb-q2-deep-dive-data-center-and-utility-growth-margin-pressures-and-strategic-expansion"},
        ],
      },
    ],
    updated: "2026-08-19",
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기)",
        headline: "매출 $17.12억으로 컨센서스 $16.5억 대비 +3.6% 서프라이즈, 조정 EPS $5.52로 컨센서스 $5.38 대비 +2.6% 상회했고 전사 매출은 전년비 +15%(유기 +10%) 성장했어요.",
        oneTime: "GAAP 희석 EPS $4.52와 조정 EPS $5.52 사이 차이는 인수 관련 무형자산 상각 $39.1M(주당 $0.56)과 NSI Industries 인수(약 $30억, 텀론 $9억+선순위채 $19억으로 조달) 관련 거래·통합·분리비용 $28.0M(주당 $0.44)이 원인이에요.",
        coreRead: "세그먼트별로 보면 Utility Solutions는 매출 +10%·조정영업마진 25.6%로 안정적인 반면, Electrical Solutions는 매출 +25%(유기 +18%)로 더 빠르게 크지만 조정영업마진이 21.2%로 전년비 130bp 하락했어요(원가 인플레이션+구조조정비용 증가). 회사는 이번 실적을 바탕으로 2026년 전체 가이던스를 조정 EPS $20.25~20.55(매출 성장 16~18%, 유기 9~11%)로 상향했는데, 이는 로컬 데이터의 올해 컨센서스 EPS $20.46과 거의 일치해요. 다만 NSI 인수로 연간 순이자비용이 $1.7억 늘고 capex 가이던스도 $1.55억→$1.75~1.9억으로 상향되면서 단기 현금전환에는 부담이 있어요.",
        forecast: "3분기(9월 말 마감, 대략 10월 말~11월 초 발표 예상)에도 데이터센터·그리드 현대화 수요가 이어지며 유기 성장률은 8~10%대를 유지할 것으로 보이지만, Electrical Solutions 마진은 구조조정비용이 계속 반영되며 전년 대비 보합이거나 소폭 하락할 가능성이 높다고 봐요. NSI 통합비용은 조정 EPS 계산에서 계속 제외(add-back)될 가능성이 커요.",
        confidence: "매출·EPS 실적치, 가이던스 수치, 세그먼트 마진, 일회성 항목 금액은 회사 공식 실적발표(2026-07-28) 기준 확인된 사실이에요. 3분기 마진·성장률 방향에 대한 전망은 제 해석이며 틀릴 수 있어요.",
        sources: [
          {
            title: "Hubbell Reports Second Quarter 2026 Results",
            url: "https://www.globenewswire.com/news-release/2026/07/28/3334138/0/en/hubbell-reports-second-quarter-2026-results.html",
          },
          {
            title: "Hubbell Q2 Earnings: $5.52 Adj. EPS; Outlook Raised | HUBB Stock News",
            url: "https://www.stocktitan.net/news/HUBB/hubbell-reports-second-quarter-2026-iscakou2md9t.html",
          },
          {
            title: "Earnings call transcript: Hubbell tops Q2 2026 estimates, but shares slip",
            url: "https://www.investing.com/news/transcripts/earnings-call-transcript-hubbell-tops-q2-2026-estimates-but-shares-slip-93CH-4817458",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "실적은 컨센서스 상회, 주가는 오히려 하락 — 밸류에이션 부담과 마진 압박이 발목 잡는 국면이에요.",
        view: "현재가는 $472.46, forward PE는 자체 27년 밴드 기준 약 22.0배로 산출돼요. 올해(2026-12-31 마감) 컨센서스 EPS $20.46(애널리스트 11명)은 회사가 2026-07-28 2분기 실적 발표에서 새로 제시한 자체 가이던스 $20.25~20.55와 거의 일치해서 신뢰도가 높은 숫자예요. 내년(2027-12-31 마감) 컨센서스 EPS $22.88(11명)을 적용하면 이익 성장률은 약 +11.8%, forward PE는 약 20.6배로 낮아지는 그림이에요. 2분기 실적 자체는 매출 $17.12억(+15%, 유기 +10%)과 조정 EPS $5.52 모두 컨센서스($16.5억/$5.38)를 상회했지만, 발표 후 주가는 오히려 -2.48% 빠졌어요. 이유는 (1) 트레일링 P/E 29배·PEG 2.12로 이미 상당한 성장을 선반영한 밸류에이션 부담, (2) Electrical Solutions 조정영업마진이 130bp 하락(21.2%)한 데 따른 근시일 수익성 우려, (3) 약 $30억 규모 NSI Industries 인수로 연간 순이자비용이 $1.7억 늘고 capex 가이던스가 $1.55억→$1.75~1.9억으로 상향되면서 생기는 현금흐름 압박 때문이에요. 그럼에도 애널리스트 평균 목표주가는 $564.82(13명 집계, 현재가 대비 +19.6%, 범위 $502~$630)로 매수 우위(strong buy 7 / hold 6) 컨센서스를 유지하고 있어서, '펀더멘털 성장 스토리는 살아있지만 단기 밸류에이션·마진 노이즈를 소화하는 구간'으로 보는 게 맞을 것 같아요.",
        increaseIf: [
          "Electrical Solutions 조정영업마진이 다음 분기 21%대 후반~22%로 회복되는 신호가 나올 경우",
          "NSI Industries 통합 시너지가 예상보다 빨리 실현돼 순이자비용 부담이 가이던스보다 완화될 경우",
          "데이터센터·그리드 인프라 수요가 강해 유기 성장률이 회사 가이던스(9~11%) 상단을 계속 상회할 경우",
        ],
        wrongIf: [
          "Electrical Solutions 마진이 추가로 악화되거나 구조조정비용이 3~4분기까지 장기화될 경우",
          "다음 분기 유기 성장률이 10% 아래로 뚜렷하게 둔화될 경우",
          "NSI 인수 관련 이자비용이나 capex 부담이 가이던스($1.7억/$1.75~1.9억)를 초과해 조정 EPS 가이던스($20.25~20.55) 하향으로 이어질 경우",
        ],
        watchNext: [
          "3분기(2026-09-30 마감) 실적 발표에서 Electrical Solutions 마진 반등 여부",
          "NSI Industries 통합 진행 상황과 순이자비용 실제 반영치",
          "연간 조정 EPS 가이던스($20.25~20.55) 대비 컨센서스($20.46) 트래킹 및 추가 상/하향 여부",
        ],
        confidence: "가격, PE, 컨센서스 EPS, 2분기 실적/가이던스 수치는 로컬 데이터 및 회사 공식 발표·애널리스트 집계 기준 확인된 사실이에요. 주가 반응의 원인 해석과 향후 방향성 판단은 제 종합적 의견이며, house rule에 따라 임의의 확률 수치는 제시하지 않았어요.",
        sources: [],
      },
    ],
    role: {
      tags: ["전기 배전·그리드 솔루션 장비"],
      stars: 3,
      note: "전력 배전·그리드 장비를 만드는 업체로 2026년 1분기 그리드 인프라 매출이 +18%, 전기솔루션 매출이 +12% 성장했어요. ETN·슈나이더 등 대형 경쟁사 대비 규모는 작지만 데이터센터·유틸리티 양쪽에서 견조한 수요를 누리고 있어요.",
    },
  },
  VRT: {
    updated: "2026-08-26",
    customers: [
      "하이퍼스케일러·AI 데이터센터 사업자가 핵심 고객군 - 2026년 2분기 매출 전년比 24% 성장, 수주잔고가 150억 달러 수준(전년比 약 80% 급증).",
      "2026년 실적 가이던스를 140억 달러 수준으로 상향하며 AI 인프라发 액체냉각·전력관리 수요 지속 확인.",
    ],
    strengths: [
      "액체냉각 등 데이터센터 열관리·전력관리 분야에서 Schneider Electric과 함께 선두권 - 2분기 조정영업이익률 22.6%로 410bp 확대되는 등 가격전가력·원가통제력 입증.",
      "관세 우려를 가격-원가 관리로 상쇄하며 조정 잉여현금흐름이 전년比 234% 급증(9억2,500만 달러)해 순현금 전환에 성공.",
    ],
    risks: [
      "⚠️ nVent Electric, Schneider Electric 등 경쟁사들이 액체냉각 시장에 공격적으로 진입 - 경쟁 심화 우려.",
      "매출이 소수 하이퍼스케일러·AI 데이터센터 발주에 집중돼 AI 설비투자 사이클 둔화 시 수주잔고 소진 속도가 급격히 꺾일 수 있는 고객·산업 집중 리스크.",
    ],
    sources: [
      {title:"Vertiv Q2 2026 earnings: revenue miss sinks stock", url:"https://finance.yahoo.com/markets/stocks/articles/vertiv-q2-2026-earnings-revenue-121320056.html"},
      {title:"Vertiv (VRT) Stock Sinks Despite Earnings Beat. What to Know.", url:"https://finance.yahoo.com/markets/stocks/articles/vertiv-vrt-stock-sinks-despite-193316117.html"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 2분기 매출 미스로 -17%, CEO는 '일시적 문제'라고 해명 - AI데이터센터 수요는 견조하다는 반박도",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-07-29 2분기 매출이 예상을 하회해 주가가 약 17% 폭락했다 - 다만 향후 가이던스는 상향 조정됐다.", "CEO가 실적 부진을 '일시적 문제(temporary issue)'라고 직접 해명했다.", "8월에도 추가 하락이 지속됐다(8/18 하루 -6.9% 등) - 변동성이 지속되고 있다.", "AI 데이터센터向 수요·수주잔고는 여전히 견조하다는 실적콜 발언이 있었다."],
        why: ["경영진이 직접 '일시적'이라고 규정했지만, 실제로 매출 미스가 있었고 주가 변동성도 계속되고 있어 확언하기는 이르다."],
        beginner: ["이번 분기 매출이 기대보다 적게 나와서 주가가 크게 떨어졌는데, 회사는 '잠깐 그런 것뿐'이라고 설명했어요. 다만 AI 데이터센터 관련 주문 자체는 계속 들어오고 있다고 해요."],
        interpretation: "경영진의 해명과 견조한 수주잔고는 긍정적 신호지만, 실제 매출 미스가 발생했다는 사실 자체는 부정할 수 없어 다음 분기 확인이 필요하다.",
        decision: "다음 분기 매출이 실제로 정상화되는지가 핵심 확인 포인트.",
        watch: ["다음 분기 매출 정상화 여부", "AI 데이터센터向 수주잔고 추이"],
        confidence: "매출 미스와 CEO 발언은 회사 공식 실적콜 기준으로 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Vertiv CEO addresses 17% stock plunge, disappointing quarter: 'This is a temporary issue' (CNBC)", url:"https://www.cnbc.com/2026/07/29/vertiv-ceo-addresses-stock-plunge-disappointing-quarter.html"},
        {title:"Vertiv shares sink as Q2 revenue miss offsets upgraded guidance (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/vertiv-shares-sink-q2-revenue-103846946.html"},
        {title:"Vertiv Q2 Earnings Call Highlights AI Data Center Growth (Yahoo Finance)", url:"https://uk.finance.yahoo.com/news/vertiv-q2-earnings-call-highlights-140000648.html"},
        ],
      },
    ],
    updated: "2026-08-19",
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기)",
        headline: "2026년 2분기 매출 32.74억 달러로 컨센서스(약 33.8억 달러)를 3.3% 하회했지만, 조정 EPS $1.52는 컨센서스 $1.42~1.43을 웃돌았고 회사는 2026년 연간 가이던스를 매출·마진·EPS·FCF 전 항목에서 상향했어요.",
        oneTime: "GAAP 희석 EPS $1.27과 조정 EPS $1.52 사이 괴리는 무형자산 상각 7,370만 달러, PurgeRite 인수 관련 우발대가(contingent consideration) 2,880만 달러, M&A 비용 190만 달러가 비용으로 잡히고 구조조정 관련 390만 달러 환입(이익)이 상쇄한 결과예요. 영업권 손상 같은 대형 일회성 항목은 없었고, 괴리 대부분이 통상적인 인수 관련 비용이라 GAAP-조정 EPS 갭 자체는 새삼스러운 왜곡은 아니에요.",
        coreRead: "매출 미스의 원인을 회사는 '공급망 일시 정체와 다단계 프로젝트 진행에 따른 타이밍 이슈'라고 설명했는데, 대차대조표가 이걸 어느 정도 뒷받침해요 — 이연수익(deferred revenue)이 2025년 말 18.15억 달러에서 2026년 6월 말 36.34억 달러로 반년 만에 2배 넘게 늘었고(2분기에만 +11.7억 달러), 재고도 73% 증가한 25.23억 달러예요. 이는 고객 선입금과 출하 대기 재고가 동시에 쌓이고 있다는 뜻이라 수요 자체가 꺾였다기보다 인식 시점이 밀린 쪽에 가까워 보여요. 다만 이번 분기 보도자료에서는 예전과 달리 백로그 수치를 아예 공개하지 않아서(과거엔 앞세우던 지표), 이 부분 투명성이 후퇴한 건 감점 요인이에요. 영업현금흐름은 11억 달러(+241% YoY), 조정 FCF는 9.25억 달러(+234% YoY)로 현금창출력 자체는 뚜렷하게 개선됐어요.",
        forecast: "회사가 3분기 매출 성장률을 약 40% YoY로 가이던스했는데, 이는 2분기에 밀린 매출이 하반기에 그대로 인식된다는 전제예요. 저는 3분기 매출이 37~39억 달러 구간에서 나오고 조정 EPS도 컨센서스를 다시 상회(대략 $1.6 이상)할 가능성이 높다고 봐요. 반대로 3분기에도 매출이 컨센서스를 하회하거나 성장률이 35% 밑으로 떨어지면, '타이밍 이슈'라는 설명이 틀렸고 실제 수요 둔화 국면으로 해석을 바꿔야 해요 — 이건 제 해석이고 틀릴 수 있어요.",
        confidence: "매출·EPS·가이던스 숫자와 이연수익·재고 수치는 공식 실적 발표(PR Newswire/투자자 IR 페이지) 기반 확인된 사실이고, '타이밍 이슈가 진짜 원인이다'라는 해석과 3분기 전망치는 제 판단이에요.",
        sources: [
          {
            title: "Vertiv Reports Strong Second Quarter 2026 with Diluted EPS Growth of 53% (Adjusted Diluted EPS Growth of +60%); Raises Full Year 2026 Guidance Across All Key Metrics",
            url: "https://www.prnewswire.com/news-releases/vertiv-reports-strong-second-quarter-2026-with-diluted-eps-growth-of-53-adjusted-diluted-eps-growth-of-60-raises-full-year-2026-guidance-across-all-key-metrics-302837598.html",
          },
          {
            title: "Vertiv Q2 2026 earnings: revenue miss sinks stock",
            url: "https://finance.yahoo.com/markets/stocks/articles/vertiv-q2-2026-earnings-revenue-121320056.html",
          },
          {
            title: "VRT Stock After the Q2 Selloff: What Vertiv's Balance Sheet Says That Its Press Release Didn't",
            url: "https://www.top1markets.com/news/vrt-stock-vertiv-q2-2026-backlog-analysis",
          },
          {
            title: "Vertiv's Q2 Earnings Missed on Revenue. Every Other Number Beat.",
            url: "https://www.tikr.com/blog/vertiv-q2-earnings-missed-on-revenue-every-other-number-beat",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "실적 펀더멘털은 여전히 견조한데 밸류에이션 부담과 매크로가 겹치며 조정 중이에요",
        view: "현재가 $263.81은 52주 고점 $379.94 대비 약 31% 하락한 자리이고, 8월 13일 $287.07이었던 것과 비교해도 2주 새 추가로 8% 더 내렸어요. 로컬 기준 포워드 PER은 (내년 컨센서스 EPS $9.10 기준) 28.9배, 올해 컨센서스 EPS $6.71 기준으로는 약 39.3배인데, 이는 자체 5년 밴드 상 짧은 히스토리 안에서도 낮은 편은 아니에요. 2분기(6월 마감) 실적은 매출이 32.74억 달러로 컨센서스(33.8억 달러)를 하회했지만 조정 EPS $1.52는 컨센서스($1.42~1.43)를 웃돌았고, 회사는 2026년 연간 가이던스를 매출 138억~142억 달러, 조정 EPS $6.65~$6.75로 상향했어요 — 이 EPS 가이던스 상단이 로컬 데이터의 올해 컨센서스 EPS $6.71과 거의 일치해서 시장 기대치와 회사 가이던스가 수렴하는 모습이에요. 백로그 수치는 이번 분기부터 공개를 중단했지만, 이연수익이 반년 만에 18.15억→36.34억 달러로 2배 늘고 재고도 73% 증가한 걸 보면 수요 자체가 꺾인 것보다는 매출 인식 시점이 밀린 쪽에 가까워 보여요. 다만 8월 중순 이후 주가가 더 빠진 배경에는 회사 자체 문제보다 국채 금리 상승에 따른 AI 데이터센터 밸류에이션 전반의 멀티플 압축과 Citi·Goldman·RBC·Evercore 등의 목표주가 하향이 있었고, 이들은 '40배 넘는 포워드 PER이 AI 인프라 센티먼트 변화에 취약하다'는 점을 이유로 들었어요. AI 데이터센터 전력·냉각 인프라에서의 구조적 지위(엔비디아 GB200 NVL72 레퍼런스 아키텍처 공동개발)는 변함없지만, 지금은 그 스토리에 대한 프리미엄을 얼마나 지불할지의 문제로 넘어간 국면이에요.",
        increaseIf: [
          "3분기 실적에서 2분기에 밀렸던 매출이 실제로 인식되며 회사 가이던스대로 유기적 성장률 30~32%가 재확인되는 경우",
          "이연수익·재고로 쌓인 물량이 다음 1~2분기에 실제 매출·현금흐름 전환으로 확인되는 경우",
          "엔비디아 차세대(800V DC 등) 로드맵 관련 신규 대형 수주가 공개적으로 확인되는 경우",
          "국채 금리가 안정되며 AI 인프라 섹터 전반의 밸류에이션 압박이 완화되는 경우",
        ],
        wrongIf: [
          "3분기에도 매출이 컨센서스를 하회하고 회사의 '타이밍 이슈' 설명과 달리 성장률이 35% 밑으로 떨어지는 경우 (실제 수요 둔화 신호)",
          "이연수익·재고가 매출 전환 없이 계속 쌓이기만 하거나 오히려 감소 반전하는 경우",
          "경쟁사(Schneider Electric, Eaton 등)의 냉각·전력 인프라 점유율 잠식이 구체적으로 확인되는 경우",
          "포워드 PER이 현재보다 추가로 크게 압축되며 실적과 무관한 디레이팅이 장기화되는 경우",
        ],
        watchNext: [
          "3분기 실적 발표(대략 10월 말~11월 초) 시 매출이 회사 가이던스대로 약 40% YoY 성장하는지 여부",
          "다음 분기 대차대조표에서 이연수익·재고 지표의 방향 (계속 증가 vs 정체/전환)",
          "10년물 국채금리와 AI capex 관련 매크로 센티먼트, 이것이 VRT 포워드 멀티플에 미치는 영향",
          "월가 주요 하우스(Citi, Goldman, RBC, Evercore 등)의 목표주가 추가 조정 여부",
        ],
        confidence: "가격·EPS·가이던스·이연수익 수치는 공식 실적자료 및 언론 보도 기반 확인된 사실이고, 매크로 요인과의 인과관계, 향후 전개에 대한 해석은 제 판단이에요. 확률(%)은 백테스트된 통계가 없어 임의로 붙이지 않았고, 대신 위 increaseIf/wrongIf 조건으로 판단 근거를 남겨뒀어요.",
        sources: [],
      },
    ],
    role: {
      tags: ["데이터센터 전력·냉각 인프라(UPS·열관리)"],
      stars: 5,
      note: "AI 데이터센터가 필수로 요구하는 전력(UPS)·냉각 인프라의 사실상 업계 표준 파트너예요. 엔비디아와 함께 GB200 NVL72 시스템의 전력·냉각 레퍼런스 아키텍처를 공동 개발했고 이게 업계 표준으로 자리잡았으며, 백로그가 $95억에 달해요. 800V 직류 전력 아키텍처 등 차세대 엔비디아 로드맵과도 계속 발맞추고 있어 AI 데이터센터 건설 자체가 이 회사 없이는 어려운 구조라고 봐요.",
    },
  },
  MOD: {
    updated: "2026-08-26",
    customers: [
      "데이터센터 냉각(Climate Solutions/CIC 부문, Airedale by Modine 브랜드)이 최근 최대 성장동력 - 2026년 한 대형 데이터센터 고객과 2029년까지 총 40억 달러 규모 장기 생산능력 계약 체결.",
      "액체냉각 부문 수주가 약 90% 성장, 기존 상용차·산업용 열관리 고객군도 유지되나 성장축은 데이터센터로 이동.",
    ],
    strengths: [
      "열교환기·냉각 기술에서 수십 년간 축적한 엔지니어링 역량을 자동차용에서 데이터센터용 액체냉각으로 빠르게 전환한 사업 재편 능력.",
      "Gentherm 등 비핵심 자동차 사업 분사 추진을 통해 고성장 데이터센터 냉각 사업에 자본과 역량을 집중시키는 전략적 재포지셔닝.",
    ],
    risks: [
      "⚠️ 데이터센터向 대형 계약 1건(40억 달러 규모)에 대한 의존도가 높아지면서 고객 집중 리스크 확대.",
      "장기적으로 열관리 시장 내 경쟁 심화 우려, 기존 캐시카우인 자동차 부문은 전동화·수요 둔화로 구조적으로 축소되는 추세라 사업 전환기의 실적 변동성.",
    ],
    sources: [
      {title:"Modine Q1 FY27 slides: 28% revenue surge masks margin pressure", url:"https://www.investing.com/news/company-news/modine-q1-fy27-slides-28-revenue-surge-masks-margin-pressure-93CH-4825724"},
      {title:"Modine Manufacturing falls as investors revisit margin and execution concerns", url:"https://www.quiverquant.com/news/Modine+Manufacturing+falls+as+investors+appear+to+revisit+margin+and+execution+concerns"},
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (FY2027 1분기, 실적발표 2026-07-29)",
        headline: "매출 8억7,410만 달러(+28% YoY)로 컨센서스($8억9,890만)를 약 2.8% 하회했지만, 조정 EPS $1.53은 컨센서스 $1.39를 $0.14 상회했고 발표 당일 주가는 +3.91% 상승했어요.",
        oneTime: "GAAP 순이익 $7,430만(EPS $1.37)과 조정 EPS $1.53 사이에 약 $0.16 차이가 있는데, 이번 분기 구조조정 비용 $390만과 Performance Technologies 부문의 Gentherm 합병(스핀오프) 관련 처분 비용 $710만이 포함됐어요. 회사는 이 Gentherm 딜 관련 트랜잭션 비용이 회계연도 말까지 총 $2,500만~$3,500만 추가로 발생할 거라고 가이던스를 줬으니, 앞으로 몇 분기는 GAAP-조정 EPS 괴리가 계속 클 것 같아요.",
        coreRead: "핵심은 마진이에요. 데이터센터 매출은 $3억4,860만로 +90% 급증했는데 이 부문 매출총이익률은 20.2%로 전년 대비 960bp나 빠졌고, 회사 설명으론 공급망 부족이 마진을 450~550bp 깎아먹었대요. 그 결과 조정 EBITDA는 $1억650만으로 +5%밖에 안 늘어서, 매출 +28% 성장과 괴리가 커요. 다만 주문 잔고(record order intake)가 3분기 연속 사상 최대치라고 밝혔고, 회사는 공급망이 정상화되면 2분기부터 데이터센터 마진이 개선될 거라고 밝혔어요(다만 구체적 목표 수치는 보도마다 표현이 조금씩 달라서 그대로 신뢰하긴 조심스러워요). FY27 가이던스는 매출 +20~35%, 조정 EBITDA $6.5~6.8억으로 유지됐고, 오히려 데이터센터 매출 성장 목표는 +60~80%로 상향됐어요 — 지금의 마진 압박을 일시적 공급망 이슈로 보고 있다는 신호로 읽혀요.",
        forecast: "다음 분기(2026-09-30 마감, FY27 2분기) 실적에서 데이터센터 부문 매출총이익률이 22%대 이상으로 반등하면 공급망 정상화 스토리가 맞다고 볼 수 있고, 반대로 다시 20% 밑으로 내려가거나 960bp 갭이 그대로 유지되면 마진 정상화가 예상보다 늦춰지는 걸로 봐야 해요. 매출 쪽은 가이던스(+20~35%)를 지키려면 2분기 매출이 전년동기 대비 최소 +20% 이상은 나와야 한다고 봐요.",
        confidence: "매출·EPS·세그먼트별 수치(데이터센터 +90%, 매출총이익률 20.2%, 조정 EBITDA $106.5M 등)는 회사 공식 실적발표(PRNewswire/8-K) 기준 확정치예요. 컨센서스 대비 비교치(EPS $1.39, 매출 $8억9,890만)는 Quiverquant 등 3자 애그리게이터 수치라 약간의 오차 가능성이 있고, 마진 회복 시점·폭에 대한 해석과 다음 분기 전망은 제 판단이 섞인 부분이에요.",
        sources: [
          {
            title: "Modine Reports First Quarter Fiscal 2027 Results",
            url: "https://www.prnewswire.com/news-releases/modine-reports-first-quarter-fiscal-2027-results-302838002.html",
          },
          {
            title: "Modine Data Center Sales Rise 90% as Supply Limits Margins",
            url: "https://www.stocktitan.net/news/MOD/modine-reports-first-quarter-fiscal-2027-knfnfe89uue3.html",
          },
          {
            title: "Modine Q1 FY27 slides: data center sales surge 90% amid margin pressure",
            url: "https://www.investing.com/news/company-news/modine-q1-fy27-slides-data-center-sales-surge-90-amid-margin-pressure-93CH-4825716",
          },
          {
            title: "MODINE MANUFACTURING ($MOD) Releases Q1 2027 Earnings, Stock Rises",
            url: "https://www.quiverquant.com/news/MODINE+MANUFACTURING+%28%24MOD%29+Releases+Q1+2027+Earnings%2C+Stock+Rises",
          },
          {
            title: "Gentherm and Modine's Performance Technologies Business to Combine, Establishing a Scaled Leader in Thermal Management Solutions",
            url: "https://ir.gentherm.com/news-releases/news-release-details/gentherm-and-modines-performance-technologies-business-combine",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "성장 스토리는 살아있지만 밸류에이션이 이미 그걸 상당 부분 반영 — 관건은 데이터센터 마진 정상화예요",
        view: "현재가 $187.30 기준 올해(FY27, 2027-03-31 마감) 컨센서스 EPS $7.64로 forward PER 약 24.5배, 내년(FY28) 컨센서스 EPS $11.18 기준으로는 약 16.8배까지 낮아지는 구조예요. 즉 시장은 EPS가 1년 새 +46%($7.64→$11.18) 뛸 거라는 그림을 이미 주가에 담고 있고, 그 근거는 데이터센터 사업(FY26 매출의 35%, +73% 성장)이 FY27엔 +60~80% 성장 가이던스로 더 커지고, 8/21 Hunterbrook 보도대로 Google($4B, 2027~2029년 확정 계약)·Amazon(~$12.38B 파이프라인)이 앵커 고객으로 자리잡는 그림이에요. 다만 방금 나온 FY27 1분기 실적(2026-06-30 마감)을 보면 매출은 +28% 늘었지만 컨센서스($8.99억)엔 못 미쳤고, 데이터센터 매출총이익률이 960bp나 빠지면서 조정 EBITDA 증가율(+5%)이 매출 증가율(+28%)을 한참 밑돌았어요 — 성장은 확인됐는데 그 성장이 아직 이익으로 잘 전환되고 있진 않다는 뜻이에요. 여기에 Performance Technologies(자동차 부문, 이번 분기도 -3% 역성장)를 Gentherm과 리버스모리스트러스트 방식으로 합쳐 2026년 4분기 클로징을 목표로 스핀오프하는 딜이 진행 중이라, FY27 내내 트랜잭션 비용 $2,500만~$3,500만이 GAAP 실적을 계속 흐려놓을 거예요. 정리하면 밸류에이션(forward 24.5배)은 이미 낙관 시나리오를 상당 부분 가격에 반영했고, 남은 변수는 '데이터센터 마진이 공급망 정상화와 함께 실제로 회복되는가'와 'Gentherm 딜이 계획대로 마무리되는가' 두 가지로 좁혀지는 것 같아요.",
        increaseIf: [
          "다음 1~2개 분기 연속으로 데이터센터 매출총이익률이 22%대 이상으로 반등해 960bp 갭이 좁혀질 때",
          "Google·Amazon 외 추가 앵커 고객向 장기 계약이 새로 공시되며 파이프라인이 더 확대될 때",
          "Gentherm 합병이 2026년 4분기 목표대로 승인·클로징되며 트랜잭션 비용 노이즈가 사라질 때",
        ],
        wrongIf: [
          "데이터센터 매출총이익률이 다음 분기에도 20% 밑에 머물거나 추가로 하락할 때",
          "FY27 매출 가이던스(+20~35%) 혹은 조정 EBITDA 가이던스($6.5~6.8억)가 하향 조정될 때",
          "Gentherm 딜이 주주총회·IRS 세금 재정·규제 이슈로 무산되거나 2026년 4분기 이후로 지연될 때",
          "Performance Technologies 역성장(-3%)이 심화되며 스핀오프 전 잔여 실적이 전체 밸류에이션에 부담을 줄 때",
        ],
        watchNext: [
          "2026년 10~11월경 발표될 FY27 2분기(2026-09-30 마감) 실적에서 데이터센터 매출총이익률 반등 여부",
          "Gentherm 주주총회 승인 및 IRS 세금 재정 등 딜 클로징 마일스톤 진행 상황(목표: 2026년 4분기)",
          "7명 애널리스트 목표주가 중간값 $325(Quiverquant 기준) 대비 현재가 $187.30의 괴리가 실적 발표 이후 좁혀지는지 여부",
        ],
        confidence: "확률 %를 따로 붙이기보다 위 increaseIf/wrongIf 조건으로 판단 기준을 명시했어요. 목표주가 중간값($325)은 Quiverquant가 집계한 3자 데이터라 실제 애널리스트 리포트 원문과는 다를 수 있어요.",
        sources: [],
      },
    ],
    role: {
      tags: ["열관리·냉각 솔루션(데이터센터 포함)"],
      stars: 4,
      note: "원래는 자동차·산업용 열관리가 주력이었는데, 데이터센터 사업이 2026 회계연도 매출의 35%(+73% 성장)까지 커지며 빠르게 핵심 사업으로 전환 중이에요. 특히 데이터센터 액체냉각 매출이 +90% 급증했고, 한 전략 고객과 2027~2029년에 걸쳐 $40억 규모의 장기 공급계약까지 체결해 성장 가시성이 높아졌어요.",
    },
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 데이터센터向 매출 급증(+28%)에도 마진·실행 우려가 반복 제기됨 - 성장과 수익성 신뢰가 엇갈리는 구간",
        importance: "medium",
        tone: "mixed",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-05-26 FY26 4분기 실적에서 '기록적 조정 실적'과 낙관적 FY27 전망을 발표했다.", "1분기 FY27 기준 데이터센터向 매출이 전년比 28% 급증했지만, 마진 압박이 동반된다는 분석이 나왔다.", "투자자들이 마진·실행 관련 우려를 재점검하며 주가가 하락했고, 월가 일부는 실적 전망치를 하향했다."],
        why: ["매출 성장 자체는 뚜렷하지만 수익성(마진) 전환에 대한 시장 신뢰가 흔들리고 있다는 점이 낙폭과다의 배경일 수 있다."],
        beginner: ["매출은 잘 늘고 있는데, '그래서 이익도 잘 남길 수 있느냐'에 대해서는 투자자들이 아직 확신하지 못하는 상태예요."],
        interpretation: "성장 스토리(데이터센터)는 살아있지만 마진 실행력에 대한 의문이 남아있어, 낙폭과다가 완전히 근거 없는 하락이라고 보기는 어렵다.",
        decision: "매수/회피 어느 쪽으로도 단정하기보다, 다음 분기 마진 추이를 확인 포인트로 삼을 것.",
        watch: ["다음 분기 마진율 개선 여부", "월가 실적 전망 추가 하향 여부"],
        confidence: "복수의 독립 매체(StockTitan, Investing.com, Quiver Quantitative)가 마진 압박을 공통적으로 지적 - 신뢰도 중간~높음.",
        directionCheck: true,
        sources: [
        {title:"Modine Q1 FY27 slides: 28% revenue surge masks margin pressure (Investing.com)", url:"https://www.investing.com/news/company-news/modine-q1-fy27-slides-28-revenue-surge-masks-margin-pressure-93CH-4825724"},
        {title:"Modine Manufacturing falls as investors revisit margin and execution concerns (Quiver Quantitative)", url:"https://www.quiverquant.com/news/Modine+Manufacturing+falls+as+investors+appear+to+revisit+margin+and+execution+concerns"},
        {title:"Wall Street Cuts MOD Stock Earnings Outlook (Globe and Mail)", url:"https://www.theglobeandmail.com/investing/markets/stocks/MOD/pressreleases/3616608/wall-street-cuts-mod-stock-earnings-outlook-hold-or-sell-the-stock/"},
        ],
      },
      {
        date: "2026-08-21",
        headline: "Hunterbrook 조사보고서 '모딘의 데이터센터 냉각 앵커고객은 구글·아마존' - 파이프라인 최대 $230억 주장, 주가 2.4%↑(단 발행사 이해상충 있음)",
        importance: "high",
        tone: "mixed",
        horizon: "단기(수일~수주) 주가 변동성 + 향후 1~2개 분기 실적에서 확정 여부 확인 시까지",
        facts: ["2026-08-21 Hunterbrook Media가 'Modine의 앵커 고객은 구글과 아마존'이라는 조사보고서를 발표했고 주가는 당일 약 2.4%(주당 $195.35 부근) 상승했다. 근거는 모딘 내부 데이터베이스로 추정되는 자료(구글 클라우드 이전 과정에서 SharePoint를 통해 노출됐다고 보도)이며, 구글 관련 확정 계약을 약 $40억(2027~2029년), 아마존 관련 총 예상 수요를 약 $123.8억(확정분 $7.41억 포함)으로, 전체 파이프라인을 약 $230억(아마존 클라우드 부문이 절반 이상)으로 제시했다. 다만 Hunterbrook Capital(관계사)이 MOD 주식을 매수 중임을 자체 공시한 이해상충이 함께 보도됐다. 한편 모딘은 별도로 최근 분기 데이터센터 매출이 전분기 대비 31% 증가했고 향후 2개 회계연도 연 50~70% 성장 가이던스를 제시했다."],
        why: ["이 보도가 사실이면 모딘의 AI 데이터센터 냉각 사업이 빅테크와 직결된 수십억달러 규모 성장동력이 된다는 뜻이라 밸류에이션 재평가 요인이지만, 근거가 회사의 공식 발표가 아니라 이해관계 있는 제3자의 유출 자료 해석이라 확정성에 한계가 있다."],
        beginner: ["모딘은 원래 자동차·산업용 열관리(라디에이터 같은 냉각장치) 회사인데, 최근 AI 서버를 식히는 데이터센터용 냉각장치로 주목받고 있어요. 이번 소식은 '한 리서치 회사가 모딘 내부 자료로 보이는 것을 입수해서 보니 실제 큰손 고객이 구글과 아마존이더라'는 내용이에요. 문제는 이 자료가 모딘이 공식 확인해준 게 아니라 제3자가 추정한 숫자라서 실제보다 부풀려졌을 가능성도 있다는 점이에요."],
        interpretation: "구글향 확정 계약($40억)이 존재한다는 점은 모딘의 데이터센터 사업이 실질 규모에 도달했음을 뒷받침하지만, 파이프라인 전체($230억)의 상당 부분은 추정치이고 발표 주체가 해당 주식을 보유·매수 중인 이해관계자라는 점에서 숫자를 그대로 투자 근거로 삼기는 위험하다.",
        decision: "호재 자체는 회사의 기존 가이던스(연 50~70% 성장)와 방향이 일치해 무시할 뉴스는 아니지만, '확정 vs 추정'을 구분해 다음 분기 실적에서 고객사·매출 숫자가 실제로 확인되는지 지켜본 뒤 판단할 것 - 이 보고서 하나로 추격 매수할 근거로는 약함.",
        watch: ["다음 모딘 분기 실적에서 데이터센터 부문 매출·고객 관련 코멘트가 추정치와 부합하는지", "구글·아마존의 공식 확인 여부, Hunterbrook Capital의 MOD 포지션 변화"],
        confidence: "주가 반응·보고서 발행 사실·구글향 $40억 '공식 발표' 계약 존재는 여러 매체가 일치해 신뢰도가 비교적 높음. $230억 전체 파이프라인·아마존 추정치는 이해상충 있는 제3자의 자체 분석이라 신뢰도가 낮음 - 확정 계약과 추정 수요를 반드시 구분해서 볼 것.",
        sources: [
          {title:"Modine Stock Jumps After Report Names Google, Amazon as Data Center Cooling Customers (Benzinga)", url:"https://www.benzinga.com/trading-ideas/movers/26/08/61357400/modine-stock-jumps-after-report-names-google-amazon-as-data-center-cooling-customers"},
          {title:"BREAKING: Modine's Anchor Multi-Billion-Dollar Customers Are Google and Amazon (Hunterbrook)", url:"https://newsletter.hntrbrk.com/p/breaking-modines-anchor-multi-billion"},
          {title:"Modine shares climb after Hunterbrook highlights data centre cooling opportunity (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/modine-shares-climb-hunterbrook-highlights-133102168.html"},
        ],
      },
    ],
  },
  STX: {
    updated: "2026-08-26",
    customers: [
      "데이터센터/클라우드 하이퍼스케일러向 니어라인 HDD가 핵심 매출원 - 2026회계연도 4분기 기준 데이터센터 매출이 전년比 57% 증가, 엑사바이트 출하량도 43% 증가.",
      "AI 학습·추론 데이터 저장 수요 확대로 대용량 HDD 수요가 공급을 초과하는 구조 지속, 안정적 가격 인상 기조 유지.",
      "HAMR 기술 기반 신제품 채택률이 2026년 2분기 기준 약 40%까지 상승.",
    ],
    strengths: [
      "Seagate와 Western Digital의 사실상 양강 체제로 니어라인 HDD 시장을 과점, 대체 공급자가 제한적.",
      "HAMR 기술 로드맵에서 앞서 있다는 평가, 2026회계연도 4분기 총마진 52.7%로 13분기 연속 마진 확대.",
      "영업이익률 목표를 50%까지 제시할 정도로 가격 결정력이 커진 상태 - SSD 대비 압도적인 GB당 원가 우위(대용량 저장 용도).",
    ],
    risks: [
      "⚠️ 2023년 제기된 증권 집단소송(실적·수요 관련 허위·오도성 진술 의혹)이 2026년 8월 약 1억 7,500만 달러 규모 합의로 마무리되는 단계.",
      "HDD 시장이 Seagate-Western Digital 양강 구도인 만큼, 경쟁사의 HAMR·기술 전환 속도에 따라 가격/마진 우위가 흔들릴 수 있음.",
      "장기적으로 SSD 원가 하락 시 데이터센터의 일부 워크로드가 SSD로 전환될 가능성.",
    ],
    sources: [
      {title:"[STX Q4 2026 Earnings Call] Seagate Blows Past Estimates with $3.6B Revenue, 52.7% Gross Margin", url:"https://finance.biggo.com/news/US_STX_2026-07-28"},
      {title:"Seagate and Western Digital Are a Hard Disk Drive Duopoly", url:"https://www.barchart.com/story/news/1689529/seagate-and-western-digital-are-a-hard-disk-drive-duopoly-barchart-ranks-the-storage-stocks-here"},
      {title:"Bernstein Litowitz / Motley Rice: Proposed Class Action Settlement (Seagate)", url:"https://www.globenewswire.com/news-release/2026/08/11/3342745/0/en/bernstein-litowitz-berger-grossmann-llp-and-motley-rice-llc-announce-proposed-class-action-settlement-on-behalf-of-purchasers-of-seagate-technology-holdings-plc-common-stock.html"},
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026 회계연도 4분기(2026-07-03 마감, FY2026 종료 분기)",
        headline: "매출 36.29억달러(+48% YoY)로 자체 가이던스 상단을 넘겼고 non-GAAP EPS 5.71달러는 컨센서스 5.10달러를 11.96%, 매출 컨센서스 34.9억달러를 3.85% 상회했어요.",
        oneTime: "GAAP EPS(5.58달러)와 non-GAAP EPS(5.71달러)의 차이는 부채 관련 거래 순손실 1000만달러(-0.04달러/주)와 전략적 투자 평가이익 1400만달러(+0.06달러/주)가 섞인 결과이고, FY26 연간 기준으로는 소송합의금 1.05억달러(-0.46달러/주)·부채상환 관련 손실 1.51억달러(-0.66달러/주)가 GAAP 실적을 깎았어요. 4분기 단독으로는 대형 구조조정·소송 비용은 확인되지 않았어요.",
        coreRead: "non-GAAP 매출총이익률이 52.7%(전분기 대비 +570bp, 전년동기 대비 +1,070bp)까지 올라갔고 분기 잉여현금흐름 11억달러는 10여년 만에 최대치라, GAAP 순이익(12.94억달러)보다 실제 현금창출력 개선 폭이 더 커요. 넘라인 엑사바이트 출하 중 모자이크(HAMR) 드라이브 비중이 40%까지 오른 게 마진 개선의 핵심 동력으로 보여요.",
        forecast: "FY2027 1분기(2026년 9월 말 마감) 가이던스는 매출 41억달러(±1억달러, YoY +56%)·non-GAAP EPS 7.30달러(±0.20달러)예요. 실제 발표치가 매출 41억달러·EPS 7.30달러를 넘으면 AI 스토리지 타이트 공급이 최소 한 분기 더 이어진다는 뜻이고, 매출이 40억달러를 밑돌면 수요 둔화 신호로 해석할 수 있어요.",
        confidence: "매출·EPS·가이던스·마진 수치는 시게이트 공식 실적발표 및 컨센서스 비교 기사에서 확인된 사실이고, 마진 개선 동력 해석과 다음 분기 판단 기준은 제 의견이에요.",
        sources: [
          {
            title: "Seagate Technology Reports Fiscal Fourth Quarter and Fiscal Year 2026 Financial Results",
            url: "https://investors.seagate.com/news/news-details/2026/Seagate-Technology-Reports-Fiscal-Fourth-Quarter-and-Fiscal-Year-2026-Financial-Results/default.aspx",
          },
          {
            title: "Seagate Fiscal 2026 Earnings: $12.2B Revenue | STX Stock News",
            url: "https://www.stocktitan.net/news/STX/seagate-technology-reports-fiscal-fourth-quarter-and-fiscal-year-wl5kz6l3phn5.html",
          },
          {
            title: "[STX Q4 2026 Earnings Call] Seagate Blows Past Estimates with $3.6B Revenue, 52.7% Gross Margin, and $7.30 EPS Guidance for Next Quarter as HAMR Adoption Hits 40% — BigGo Finance",
            url: "https://finance.biggo.com/news/US_STX_2026-07-28",
          },
          {
            title: "Seagate (STX) Surpasses Q4 Earnings and Revenue Estimates",
            url: "https://finance.yahoo.com/markets/stocks/articles/seagate-stx-surpasses-q4-earnings-212006683.html",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "실적은 계속 어닝서프라이즈인데 주가가 이미 다 선반영 — 밸류에이션 부담 구간이에요.",
        view: "8월27일 종가 846.37달러 기준 올해(FY2027, 2027-06-30 마감) 컨센서스 EPS 35.78달러(21명) 대비 PER은 약 23.3배, 내년(FY2028, 2028-06-30 마감) 컨센서스 EPS 55.37달러(19명) 대비로는 약 15.3배까지 낮아져요. 이 밸류에이션에는 방금 나온 FY26 4분기 실적(매출 36.29억달러, non-GAAP EPS 5.71달러로 컨센서스 대비 +11.96% 서프라이즈)과 FY27 1분기 가이던스(매출 41억달러·EPS 7.30달러, YoY 매출 +56%)가 이미 상당 부분 반영돼 있어요. 그런데 주가는 연초 대비 큰 폭으로 오른 뒤 8월25일 임원 대량 매도 소식과 겹쳐 조정을 받고 있는 상태라, 실적 자체는 나쁘지 않은데 '좋은 뉴스가 나와도 주가는 쉬어가는' 전형적인 구간으로 보여요. WDC와의 듀오폴리 구조(WDC 약47%·STX 약42%)에 넘라인 드라이브 매출 비중 87%, 모자이크(HAMR) 채택률 40%까지 감안하면 펀더멘털 훼손 신호는 없지만, 자체 22년치 PER밴드로 봐도 지금 23배 수준은 역사적 중간~상단 구간이라 '싸다'고 부르기는 어려워요.",
        increaseIf: [
          "FY27 1분기(9월 말 마감) 실적에서 매출이 가이던스 상단(약 42억달러) 이상, non-GAAP EPS가 7.50달러 이상으로 추가 서프라이즈가 날 때",
          "8월 말 시작된 임원 매도세가 잦아들고 주가가 800달러 위에서 다시 안정될 때",
          "넘라인 엑사바이트 중 모자이크(HAMR) 비중이 40%에서 50% 이상으로 빠르게 올라가며 non-GAAP 총이익률이 55%를 넘어설 때",
        ],
        wrongIf: [
          "FY27 1분기 실적에서 매출이 가이던스 하단(약 40억달러) 밑으로 미달하거나 non-GAAP EPS가 7.10달러 아래로 나올 때",
          "'2026년 생산량 완판' 스토리와 달리 AI 데이터센터向 넘라인 주문 취소·연기 뉴스가 나올 때",
          "임원 매도 규모나 대상이 CEO/CFO급으로 확대되며 분기 순이익 대비 유의미한 비중까지 커질 때",
        ],
        watchNext: [
          "10월 하순~11월 초로 예상되는 FY2027 1분기 실적 발표(가이던스 매출 41억±1억달러, EPS 7.30±0.20달러 달성 여부)",
          "8월 임원 매도(CEO 포함)의 지속 여부와 신규 Form 4 공시",
          "경쟁사 WDC 실적에서 나오는 넘라인 HDD 가격·물량 동향(듀오폴리 상대방 지표)",
        ],
        confidence: "가격·PER·컨센서스 EPS는 제공된 로컬 데이터 기준이고, 실적 수치는 8월27일 기준 공개된 FY26 4분기 발표 원문에서 확인했어요. house rule에 따라 확률을 임의로 붙이지 않고 위 조건들로 판단 근거를 대신해요.",
        sources: [],
      },
    ],
    role: {
      tags: ["HDD(하드디스크)", "엔터프라이즈 대용량 스토리지"],
      stars: 4,
      note: "WDC와 함께 HDD 시장을 양분하는 듀오폴리 업체예요(실측: WDC 약 47% · STX 약 42%, 3위 도시바는 격차가 큼). 2026년 하드드라이브 생산량을 이미 전부 AI 데이터센터에 판매 완료했고, 넘라인(고용량) 드라이브가 매출의 87%까지 확대될 만큼 AI 스토리지 슈퍼사이클의 직접 수혜주예요.",
    },
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 매출 +49%·13분기 연속 마진 확대, 하락은 스토리지 업종 전체 공급과잉 우려 성격",
        importance: "medium",
        tone: "positive",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-07-28 FY26 4분기 매출 36억 달러(+49% YoY), 총마진 52.7%로 13분기 연속 마진 확대를 기록했다.", "데이터센터 매출 +57%, HAMR 기술 채택률 40% 도달, FY27 목표를 41억 달러로 상향했다.", "7~8월 '메모리/스토리지 공급과잉 우려'로 SanDisk·Micron·Western Digital 등 업종 전체와 동반 급락했다(다수일 -5~9%)."],
        why: ["개별 기업 실적·마진은 뚜렷한 개선세를 보이고 있어, 최근 하락은 업종 전체 사이클 우려에 더 가깝다. 다만 메모리/스토리지 업황 사이클 리스크 자체는 실재한다."],
        beginner: ["회사 성적표는 아주 좋고 이익률도 13분기 연속 좋아지고 있어요. 다만 '메모리 반도체가 너무 많이 만들어지는 거 아니냐'는 업종 전체 걱정 때문에 관련 주식들이 다 같이 빠졌어요."],
        interpretation: "개별 기업 펀더멘털은 견조하나 업종 사이클 리스크가 있어 완전한 무위험은 아니다.",
        decision: "스토리지 업종 공급과잉 우려의 실제 지표(재고·가격) 추이를 확인 포인트로 삼을 것.",
        watch: ["메모리/스토리지 업종 공급과잉 지표 추이", "다음 분기 마진 확대 지속 여부"],
        confidence: "회사 공식 실적 발표(Seagate IR) 기준, 다수 매체(BigGo, techtimes) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Seagate Technology Reports Fiscal Fourth Quarter and Fiscal Year 2026 Financial Results", url:"https://investors.seagate.com/news/news-details/2026/Seagate-Technology-Reports-Fiscal-Fourth-Quarter-and-Fiscal-Year-2026-Financial-Results/default.aspx"},
        {title:"Seagate Shatters Q4 Estimates With Record HAMR Margins, Guides FY27 to $4.1B (techtimes.com)", url:"https://www.techtimes.com/articles/321894/20260728/seagate-shatters-q4-estimates-record-hamr-margins-guides-fy27-41b.htm"},
        {title:"SanDisk Sinks 11%, Seagate Falls 7%, Micron Slides 4% on Memory Supply-Glut Fears (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/sandisk-sinks-11-seagate-falls-160250009.html"},
        ],
      },
      {
        date: "2026-08-25",
        headline: "Seagate 임원 3인(CEO·CFO·법무총괄) 동시 매도·옵션행사 - 연중 100~290% 급등 후 조정 국면과 겹쳐",
        importance: "medium",
        tone: "mixed",
        horizon: "수주~1분기 내 추가 내부자 매도 지속 여부로 판단 가능, 단독으로는 장기 방향성 신호 아님",
        facts: ["2026-08-25 같은 날 Seagate(STX) 임원 3명 관련 보도가 동시에 나왔다 - James C. Lee(최고법무책임자)가 약 $335만 상당 주식을 매도했고, CEO William D. Mosley는 스톡옵션을 행사해 차익을 실현했으며(다른 보도에서는 CEO의 매도 규모가 최대 $1,540만대로도 언급), CFO Gianluca Romano는 옵션을 행사했다. 같은 기간 집계로 Seagate 내부자 전체 매도 규모가 $2,600만을 넘는 것으로 보도됐다. Seagate는 2026년 들어 AI 스토리지(HAMR) 수요 기대로 연초 대비 100%대~한때 290%대까지 급등했다가, 8월 실적 발표 후 재차 급등한 뒤 8/18(-8.25%)·8/19(-6.52%)·8/24(-5.92%) 등 며칠 연속 큰 폭 조정을 겪었다 - 즉 이번 매도·옵션행사는 연중 대폭등 후 되밀리는 국면에서 나왔다."],
        why: ["CEO·CFO급이 같은 날 동시에 매도·옵션행사를 하면 주목도는 높지만, 대부분 사전에 정해둔 Rule 10b5-1 매도계획이나 세금 원천징수용(옵션 행사에 따른 자동 매도)인 경우가 많아 '지금 회사 전망이 나쁘다고 봐서 판다'는 의미로 단정하기 어렵다. 다만 연간 100%가 넘는 급등 뒤에 여러 임원의 매도가 겹치는 것은 차익실현·분산투자 동기로 보는 게 자연스럽다."],
        beginner: ["'옵션 행사'는 임원이 예전에 회사에서 받은 '싼 값에 주식을 살 수 있는 권리'를 실제로 사용해 주식을 손에 넣는 것이고, 이후 그 주식을 시장에 파는 게 '매도'예요. 많은 임원 매도는 'Rule 10b5-1 계획'이라는, 몇 달 전에 미리 정해둔 자동매도 프로그램에 따라 기계적으로 실행돼요 - 즉 오늘 아침에 즉흥적으로 결정한 게 아니라 이미 짜여진 스케줄대로 나가는 경우가 많다는 뜻이에요."],
        interpretation: "3명의 임원이 같은 날 매도·옵션행사 필링을 낸 것은 헤드라인상 임팩트가 크지만, 최근 수개월간 Seagate 내부자 거래가 원래 매도 위주였고 이번 사건이 연중 대폭등 후 조정 구간과 겹친다는 점을 함께 보면 '경영진 이탈 신호'보다는 '급등 뒤 차익실현·세금처리성 매도'로 보는 게 더 타당하다.",
        decision: "이 임원 매도·옵션행사만으로 매도·매수 판단을 바꾸지 말고, 최근 급등에 대한 자연스러운 차익실현 정도로 참고만 할 것.",
        watch: ["향후 1~2개월간 추가 Form 4 필링에서 매도 규모·빈도가 더 늘어나는지", "8월 조정이 실적 펀더멘털 훼손 때문인지 단순 차익실현 때문인지 다음 분기 가이던스로 재확인"],
        confidence: "매도 금액·3인의 매도/옵션행사 발생 사실·8월 중순 실적 서프라이즈 및 급락 수치는 복수 매체로 교차 확인돼 신뢰도가 높음. 다만 CEO의 정확한 매도 금액, '연초 대비 100~290%' 급등폭은 기사마다 인용 시점이 달라 편차가 있어 대략적 맥락으로만 신뢰할 것.",
        sources: [
          {title:"James C. Lee Executes Sell Order: Offloads $3.35M In Seagate Technology Hldgs Stock (Benzinga)", url:"https://www.benzinga.com/news/26/08/61412101/james-c-lee-executes-sell-order-offloads-3-35m-seagate-technology-hldgs-stock"},
          {title:"Seagate Technology Insiders Sold Shares Worth Over $26M (TradingView News)", url:"https://www.tradingview.com/news/tradingview:dee8be871cdb2:0-seagate-technology-insiders-sold-shares-worth-over-26m/"},
          {title:"Up 290% YTD, How High Can Seagate Rally? (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/290-ytd-high-seagate-rally-200746978.html"},
        ],
      },
    ],
  },
  EME: {
    updated: "2026-08-26",
    customers: [
      "데이터센터(하이퍼스케일러 및 AI 인프라 구축) 발주가 최대 성장 동력 - 2026년 2분기 매출 전년比 20% 증가한 51.5억 달러, 수주잔고(RPO)는 사상 최대인 171.4억 달러.",
      "산업·제조 시설, 병원·헬스케어 시설, 상업용 오피스 등 미국 내 전기·기계 설비공사 고객층도 안정적 유지.",
      "영국 사업 철수 등 비핵심 부문 정리를 통해 미국 내 데이터센터·전력 인프라 수요에 자원을 집중.",
    ],
    strengths: [
      "전기·기계 설비 시공 전문 인력과 프로젝트 관리 역량을 바탕으로 대형·복잡한 데이터센터 프로젝트 수행 이력이 풍부.",
      "사상 최대 수준의 수주잔고(RPO 171.4억 달러)로 향후 매출 가시성이 높아 경기 변동에 대한 완충 역할.",
    ],
    risks: [
      "⚠️ 매출 성장의 상당 부분이 데이터센터 부문에 집중되면서 AI 관련 설비투자 사이클 둔화 시 수주잔고 성장세가 급격히 꺾일 수 있는 부문 집중 리스크.",
      "대형 프로젝트 특성상 인건비·자재비 상승 시 마진이 수주잔고 증가 속도만큼 따라가지 못할 수 있다는 우려.",
      "건설·설비 인력 부족 및 숙련 인력 확보 경쟁이 프로젝트 지연 리스크로 작용 가능.",
    ],
    sources: [
      {title:"EME Q2 Deep Dive: Data Center Demand and Strategic Acquisitions Drive Growth", url:"https://stockstory.org/us/stocks/nyse/eme/news/earnings-call/eme-q2-deep-dive-data-center-demand-and-strategic-acquisitions-drive-growth"},
      {title:"EMCOR's Data Center Backlog: The Question Is Whether Margins Can Keep Pace", url:"https://www.barchart.com/story/news/1572207/emcor-s-data-center-backlog-the-question-is-whether-margins-can-keep-pace"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 어닝·매출 모두 컨센서스 상회하며 13% 급등, 가이던스 상향·수주잔고 사상 최대 - 실적 방향 뚜렷이 양호",
        importance: "medium",
        tone: "positive",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2분기 실적에서 어닝·매출 모두 컨센서스를 상회하며 발표 당일 주가가 약 13% 급등했다('blowout quarter').", "2026년 연간 가이던스를 상향 조정했고, 수주잔고(RPO)가 사상 최대치를 기록했다.", "'실적 추정치 상향 흐름'이 향후 상승여력을 시사한다는 보도가 나왔다(Zacks).", "최근 조정은 업황 악화가 아니라 인프라주 전반의 투자자 순환매 성격으로 해석된다."],
        why: ["실적·가이던스·수주잔고가 모두 개선 추세를 보이고 있어 낙폭과다 신호가 사업 악화의 신호로 보이지 않는다."],
        beginner: ["이번 분기 성적표가 아주 좋았고, 앞으로 일감(수주잔고)도 역대 최대예요. 최근 주가가 조정받은 건 회사 문제가 아니라 비슷한 업종 주식들이 다 같이 쉬어가는 흐름 때문으로 보여요."],
        interpretation: "사업 펀더멘털이 뚜렷하게 개선되고 있어, 낙폭과다 신호가 '일시적으로 싸진 우량주'에 가까운 근거가 있다.",
        decision: "이 뉴스 자체가 매수 신호는 아니지만, 낙폭과다 신호와 방향이 같은(긍정) 사례로 참고할 것.",
        watch: ["수주잔고(RPO) 추이 지속 여부", "실적 추정치 추가 상향 여부"],
        confidence: "회사 공식 실적 발표와 다수 매체(Seeking Alpha, Yahoo Finance) 교차 확인 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Emcor soars after blowout quarter, raises 2026 outlook (Seeking Alpha)", url:"https://seekingalpha.com/news/4621724-emcor-soars-after-blowout-quarter-raises-2026-outlook"},
        {title:"EMCOR Group Inc (EME) (Q2 2026) Earnings Call Highlights: Record Revenue and RPOs Drive Raised Guidance (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/emcor-group-inc-eme-q2-230332341.html"},
        {title:"EMCOR Group Slides As Investors Appear To Rotate Out Of High-Flying Infrastructure Contractors (QuiverQuant)", url:"https://www.quiverquant.com/news/EMCOR+Group+Slides+As+Investors+Appear+To+Rotate+Out+Of+High-Flying+Infrastructure+Contractors"},
        ],
      },
    ],
    updated: "2026-08-19",
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기)",
        headline: "2분기 매출 $51.5억(전년비 +19.8%), GAAP 희석 EPS $9.06(+34.8%)으로 컨센서스(매출 $47.3억·EPS $7.23)를 매출 9%, EPS 25% 넘게 큰 폭으로 상회했어요.",
        oneTime: "이번 분기 자체엔 뚜렷한 일회성 항목이 없었어요. 다만 비교 대상인 2025년 상반기엔 Miller Electric 인수 관련 거래비용 $940만이 반영돼 당시 EPS를 $0.20 깎아먹었는데, 이 역기저효과가 이번 YoY 증가율을 다소 부풀린 면이 있어요. 회사가 발표한 자료 기준으로는 GAAP과 조정 실적 간 큰 괴리는 없었어요.",
        coreRead: "영업이익률이 10.6%로 개선되면서 매출 증가가 마진 확장과 같이 갔고, 상반기 영업현금흐름은 $2.899억으로 전년 동기 $3.022억과 큰 차이가 없어 이익의 현금 전환력도 유지되고 있어요. 제일 눈여겨볼 숫자는 RPO(수주잔고) $171.4억(전년비 +43.9%, 사상 최대)인데, Network & Communications·Water & Wastewater·Institutional·Healthcare 등 여러 부문에서 고르게 늘었다는 점에서 데이터센터 단일 테마에만 기댄 숫자가 아니라는 근거가 돼요.",
        forecast: "3분기(9월 마감)에도 매출 성장률 15% 이상, 영업이익률 9.5~10% 밴드 유지를 예상해요. 다만 회사가 이미 연간 가이던스를 매출 $200~205억, EPS $32.00~33.25로 큰 폭 상향했고 컨센서스도 이를 따라잡은 상태라, 2분기처럼 컨센서스를 20%p 이상 웃도는 서프라이즈 폭은 좁아질 가능성이 커요.",
        confidence: "매출·EPS·RPO·가이던스 상향폭은 2026-07-30 EMCOR 2분기 실적 발표(Businesswire) 원자료에 나온 확정 수치예요. 컨센서스 대비 서프라이즈 폭은 Yahoo Finance 집계 기준이고, 3분기 전망과 '컨센서스가 가이던스를 따라잡았다'는 해석은 제 판단이라 틀릴 수 있어요.",
        sources: [
          {
            title: "EMCOR Group, Inc. Reports Second Quarter 2026 Results",
            url: "https://www.businesswire.com/news/home/20260730052970/en/EMCOR-Group-Inc.-Reports-Second-Quarter-2026-Results",
          },
          {
            title: "Emcor Group (EME) Q2 Earnings: Taking a Look at Key Metrics Versus Estimates",
            url: "https://finance.yahoo.com/markets/stocks/articles/emcor-group-eme-q2-earnings-133008997.html",
          },
          {
            title: "EMCOR Q2 Earnings: Revenue $5.15B, EPS $9.06 | EME Stock News",
            url: "https://www.stocktitan.net/news/EME/emcor-group-inc-reports-second-quarter-2026-ikwmpqrx1dng.html",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "실적·수주잔고는 이변 없는 호조, 남은 문제는 가격 — 좋은 소식이 상당 부분 선반영된 구간이에요.",
        view: "현재가 $763.59는 52주 레인지($564.92~$951.96) 중간보다 위쪽이지만, 8월 초 찍었던 고점 $951.96에서는 약 20% 조정된 자리예요. forward PER은 자체 26년치 밴드 기준 약 25.6배, 컨센서스 EPS는 올해(2026-12 마감, 9명 추정) $32.85, 내년(2027-12 마감, 10명 추정) $36.75로 내년 이익 성장률은 +11.9%에 그쳐요 — 2분기에 찍힌 매출 +19.8%, RPO +43.9%라는 모멘텀에 비하면 낮은 숫자예요. 이는 두 가지로 읽을 수 있는데, ① 컨센서스가 아직 보수적이라 추가 상향 여지가 있거나, ② 이미 25배가 넘는 배수를 주고 있어서 그 성장의 상당 부분이 주가에 반영돼 있다는 뜻이에요. 7/30 실적에서 회사는 연간 매출 가이던스를 $185~192.5억에서 $200~205억으로, EPS 가이던스를 $28.25~29.75에서 $32.00~33.25로 크게 올렸고, 이 새 가이던스 상단이 지금 컨센서스 EPS $32.85와 거의 겹쳐요. 즉 애널리스트들은 이미 상향된 가이던스를 숫자에 반영해 놓은 상태라, 여기서 주가가 더 가려면 '가이던스를 다시 넘어서는' 서프라이즈가 필요한 구간이라고 봐요.",
        increaseIf: [
          "3분기 실적에서 RPO가 $171.4억보다 더 늘거나 매출 성장률 20%대를 유지하며 연간 가이던스를 재상향할 때",
          "Network & Communications 부문(데이터센터 관련 핵심 축)의 신규 수주가 추가로 확인되며 전기부문 매출 비중(현재 32%)이 더 커질 때",
          "forward PER이 20배 안팎까지 조정받아 지금의 밸류에이션 부담이 상당 부분 해소될 때",
        ],
        wrongIf: [
          "다음 분기 RPO 증가율이 43.9%에서 뚜렷이 둔화되거나 신규 수주 < 소진분으로 순감 전환할 때",
          "데이터센터 발주 둔화·전력망 병목 등으로 전기부문(매출 32%) 성장세가 꺾이면서 가이던스를 하향할 때",
          "동일 시공 능력을 가진 경쟁사(예: Comfort Systems, Argan 등)와의 가격 경쟁으로 영업이익률(현재 10.6%)이 눈에 띄게 낮아질 때",
        ],
        watchNext: [
          "2026년 10월경 발표될 3분기 실적에서 RPO $171.4억 유지·추가 증가 여부",
          "연간 가이던스(매출 $200~205억, EPS $32.00~33.25, 영업이익률 9.5~9.8%) 재상향 또는 하향 여부",
          "주가가 forward PER 25배 안팎에서 조정받는지, 아니면 52주 고점 $951.96을 다시 시도하는지",
        ],
        confidence: "실적·가이던스·RPO 수치는 2026-07-30 공식 발표 기준 확정 팩트고, 현재가·PER·52주 레인지는 2026-08-26 종가 기준 시세예요. '이미 선반영됐다'는 해석과 increaseIf/wrongIf 조건은 제 판단이며, 확률(%)로 표시하지 않고 조건으로만 제시해요.",
        sources: [],
      },
    ],
    role: {
      tags: ["전기·기계설비 시공(데이터센터 건설)"],
      stars: 3,
      note: "데이터센터·산업시설 전기설비를 시공하는 업체로, 데이터센터가 포함된 네트워크·통신 부문 매출이 2분기에 전년비 거의 +50% 뛰며 전기부문 성장의 3분의 2를 견인했어요. 수요 자체는 확실하지만(수주잔고 $171억 사상 최대) 시공업 특성상 비슷한 능력을 가진 경쟁사가 존재하는 분야예요.",
    },
  },
  FIX: {
    updated: "2026-08-26",
    customers: [
      "AI 데이터센터 및 첨단 반도체 제조시설 등 기술 부문 고객이 최근 성장의 핵심 - 2026년 2분기 매출 30억 달러 돌파, 수주잔고는 140억 달러 안팎까지 확대.",
      "모듈형(prefabricated) 기계·배관 설비 솔루션에 대한 수요가 확대.",
      "산업, 제조, 헬스케어, 교육시설 등 전통적 상업용 HVAC/배관 고객군도 유지되나 신규 수주 증가분은 데이터센터·테크 부문에 편중.",
    ],
    strengths: [
      "모듈화(prefab) 설계·생산 역량을 통해 현장 시공기간 단축과 원가 절감을 실현, 대형 데이터센터 발주처들의 빠른 구축 요구에 대응할 수 있는 차별화된 실행력.",
      "기록적 수준의 수주잔고(약 140억 달러)로 향후 매출에 대한 높은 가시성 확보.",
    ],
    risks: [
      "⚠️ 최근 성장이 소수의 대형 테크/데이터센터 고객사에 집중되면서 고객 편중 리스크가 커지고 있다는 지적이 반복적으로 제기됨.",
      "급증한 수주잔고를 실제 매출·이익으로 전환하는 실행 리스크(인력, 자재 조달, 프로젝트 관리 역량의 스케일업).",
      "데이터센터 건설 붐이 진정되거나 경쟁사들의 시장 진입이 늘어날 경우 프로젝트 수주 경쟁 심화 가능성.",
    ],
    sources: [
      {title:"Comfort Systems Q2 2026 slides: revenue tops $3B, backlog hits $14B", url:"https://www.investing.com/news/company-news/comfort-systems-q2-2026-slides-revenue-tops-3b-backlog-hits-14b-93CH-4812234"},
      {title:"Comfort Systems' Tech Boom: Growth Engine or Concentration Risk?", url:"https://finance.yahoo.com/markets/stocks/articles/comfort-systems-tech-boom-growth-151400994.html"},
    ],
    newsLog: [
      {
        date: "2026-08-26",
        headline: "[방향성 체크] 사상 최대 매출·배당 인상·수주잔고 최고치 - 호실적에도 주가만 조정, 밸류에이션 성격",
        importance: "medium",
        tone: "positive",
        horizon: "낙폭과다 신호 유효 기간 동안(다음 실적까지) 참고",
        facts: ["2026-07-23 2분기 매출이 30억 달러를 돌파하며 사상 최대, 예상을 상회했고 배당 인상도 단행했다.", "수주잔고가 140억 달러로 전년比 증가하며 사상 최고치를 기록했고, 데이터센터向 수요가 핵심 동력이었다.", "호실적에도 주가는 하락 - 최근 수년간 급등에 따른 밸류에이션 부담·차익실현 성격으로 해석된다."],
        why: ["실적·수주잔고·배당까지 모두 개선되는 와중에 주가만 하락했다는 것은, 사업 자체보다 밸류에이션 부담이 하락의 주된 원인임을 시사한다."],
        beginner: ["역대 최고 성적을 냈고 배당금도 늘렸는데 주가는 떨어졌어요. 그동안 너무 많이 올랐어서 잠깐 쉬어가는 것에 가까워 보여요."],
        interpretation: "사업 펀더멘털 훼손 신호는 확인되지 않아, 낙폭과다가 '일시적으로 싸진 우량주'에 가까운 근거가 있다.",
        decision: "이 뉴스 자체가 매수 신호는 아니지만, 낙폭과다 신호와 방향이 같은(긍정) 사례로 참고할 것.",
        watch: ["수주잔고 추가 증가 여부", "데이터센터向 수요 지속 여부"],
        confidence: "회사 공식 실적 발표(BusinessWire) 기준 - 신뢰도 높음.",
        directionCheck: true,
        sources: [
        {title:"Comfort Systems USA Reports Second Quarter 2026 Results (BusinessWire)", url:"https://www.businesswire.com/news/home/20260723227439/en/Comfort-Systems-USA-Reports-Second-Quarter-2026-Results"},
        {title:"How Investors May Respond To Comfort Systems USA (FIX) Record Q2 Results, Dividend Hike And Backlog Growth (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/investors-may-respond-comfort-systems-110920647.html"},
        ],
      },
    ],
    updated: "2026-08-19",
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026-06-30 마감 분기 (2026년 2분기, 2026-07-23 발표)",
        headline: "2분기 매출이 $32.7억으로 전년 대비 +50% 급증하며 컨센서스($29.4억)를 약 11% 상회했고, GAAP 희석 EPS $12.53도 컨센서스 $10.38을 20.7% 웃돌며 전년 $6.53 대비 92% 늘었어요.",
        oneTime: "이번 분기엔 GAAP을 크게 왜곡할 일회성 항목이 거의 없었어요 — 자산매각이익 $78.5만, 조건부 인수대금(earn-out) 공정가치 변동 손실 $200만 정도로 순이익 $4.416억 대비 미미한 수준이에요. 즉 이번 EPS 서프라이즈는 대부분 실제 영업실적에서 나온 걸로 보여요.",
        coreRead: "조정 EBITDA가 $6.005억(마진 18.4%)으로 전년 $3.341억(15.4%)에서 확대됐고, 영업현금흐름은 2분기 $11.4억(상반기 누적 $15.3억)으로 전년 $2.525억 대비 4배 넘게 늘어난, CEO 표현으로 '전례 없는' 수준이었어요. 백로그도 6/30 기준 $140.6억으로 1분기 말 $124.5억, 전년동기 $81.2억 대비 계속 급증 중이라 데이터센터/반도체 기술 부문 수요가 실제 현금창출로 이어지고 있다는 신호로 읽혀요. 같은 날 분기배당 인상과 자사주매입 완료도 발표됐어요.",
        forecast: "3분기(9월 마감) 실적은 10월 말~11월 초 발표될 텐데, 기저효과 때문에 매출 성장률이 2분기 +50%보다 낮은 +30~45% 구간으로 둔화되고 조정 EBITDA 마진은 17% 이상을 유지할 것으로 봐요. 백로그도 $145억 이상으로 더 늘어날 가능성이 높다고 예상해요 — 성장률이 +30% 밑으로 떨어지거나 마진이 16% 아래로 밀리면 이 전망은 틀린 거예요.",
        confidence: "매출·EPS·백로그·현금흐름·컨센서스 대비 수치는 회사 보도자료(SEC 첨부, 2026-07-23)와 Zacks 컨센서스 비교 기사에서 확인한 사실이고, 3분기 전망 수치는 제 해석/추정이니 구분해서 봐주세요.",
        sources: [
          {
            title: "Comfort Systems USA Reports Second Quarter 2026 Results",
            url: "https://www.businesswire.com/news/home/20260723227439/en/Comfort-Systems-USA-Reports-Second-Quarter-2026-Results",
          },
          {
            title: "Press Release of Comfort Systems USA, Inc. (Q2 2026 Ex-99.1)",
            url: "https://www.sec.gov/Archives/edgar/data/1035983/000110465926086255/fix-20260723xex99d1.htm",
          },
          {
            title: "Comfort Systems Q2 Earnings & Revenues Beat Estimates, Backlog Up Y/Y",
            url: "https://www.tradingview.com/news/zacks:9d3a1681e094b:0-comfort-systems-q2-earnings-revenues-beat-estimates-backlog-up-y-y/",
          },
          {
            title: "Comfort Systems USA backlog rises to $14.06 billion by June 30",
            url: "https://www.stocktitan.net/news/FIX/comfort-systems-usa-reports-second-quarter-2026-6pc4g0cg8jje.html",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "밸류에이션은 부담스럽지만 백로그·현금흐름 숫자가 이를 뒷받침 — 조정 매수 관점 유지",
        view: "현재가 $1615.69 기준 forward PE는 30.8배로 자체 22년 밴드 상단권에 가까운 수준인데, 이는 올해 컨센서스 EPS $49.01(10명, FY2026-12 마감)에서 내년 $60.18(10명, FY2027-12 마감)로 +23% 성장을 이미 반영한 가격이에요. 2분기(6/30 마감) 매출이 전년비 +50% 급증했고 백로그가 $140.6억(1분기 $124.5억, 전년 $81.2억)까지 늘었으며 영업현금흐름이 $11.4억으로 4배 넘게 뛴 점을 보면 이 성장 스토리는 숫자로 확인되는 실체가 있어요. 애널리스트 11명 평균 목표가는 $2082.86(Strong Buy 1·Buy 9·Hold 1·Sell 0)로 현재가 대비 +28.7% 여지가 있고, 최저 목표가($1910)조차 현재가보다 높다는 점도 눈여겨볼 만해요. 다만 실적 발표 당일(7/23)엔 주가가 -1.7% 빠졌다가 배당 인상·자사주매입 완료 소식이 재평가되며 8/5까지 +9.2% 반등했는데, 이는 시장이 밸류에이션에 이미 예민하게 반응하고 있다는 뜻이고, 최근 6개월간 내부자 거래가 매도 13건·매수 0건이었다는 점도 고평가 경계 신호로 함께 봐야 해요.",
        increaseIf: [
          "3분기(9월 마감) 매출 성장률이 +40% 이상으로 유지되고 백로그가 $150억을 넘어설 때",
          "forward PE가 25배 이하로 눌리면서 동시에 컨센서스 EPS(현재 FY26 $49.01, FY27 $60.18)가 상향 조정될 때 — 밸류에이션 매력이 회복되는 신호",
        ],
        wrongIf: [
          "3분기 매출 성장률이 +25% 밑으로 급감하거나 조정 EBITDA 마진이 16% 아래로 후퇴할 때",
          "데이터센터·반도체 발주가 꺾이면서 백로그가 전분기 대비 감소로 전환될 때",
          "내부자 매도가 지속되는 가운데 주가가 애널리스트 목표가 하단($1910)마저 하회할 때",
        ],
        watchNext: [
          "10월 말~11월 초 3분기 실적 발표 시 매출 성장률 둔화 폭과 조정 EBITDA 마진(2분기 18.4%) 방향",
          "기술(데이터센터+반도체) 부문 매출 비중이 58%에서 더 올라가는지, 신규 수주가 백로그 증가세를 계속 뒷받침하는지",
          "마이크로소프트·메타·아마존 등 하이퍼스케일러들의 데이터센터 capex 가이던스 변화 — FIX 수주 파이프라인의 선행지표",
        ],
        confidence: "목표가·컨센서스 수치는 2026년 8월 기준 애널리스트 11명 집계(마켓비트)와 로컬 데이터를 결합한 제 종합 판단이에요. 확률(%) 형태의 전망은 실제 백테스트 근거가 없어 제시하지 않았고, 대신 위 조건들로 판단 기준을 명확히 했어요.",
        sources: [],
      },
    ],
    role: {
      tags: ["HVAC·기계설비 시공(데이터센터 건설)"],
      stars: 3,
      note: "데이터센터·반도체 공장의 냉난방·기계설비를 시공하는 업체로, 기술(데이터센터+반도체) 부문이 이미 매출의 58%를 차지할 만큼 이 회사의 핵심 축이 됐어요(매출 +57% 급증, 백로그도 $69억→$125억으로 급증). 다만 EME와 마찬가지로 시공업이라 대체 가능한 경쟁사가 존재하는 분야예요.",
    },
  },
  SBGSY: {
    updated: "2026-08-26",
    customers: [
      "데이터센터/AI 인프라 부문이 최근 가장 두드러진 성장 산업 - 전력관리·자동화·산업용 소프트웨어 전 부문에서 관련 수요가 실적 견인.",
      "2025~2026년 엔비디아와 협력을 확대해 대규모 'AI 팩토리' 구축을 위한 전력·냉각 설계 솔루션을 공동 개발·공급.",
      "에너지 전환(전동화) 트렌드에 따라 산업체, 상업용 건물, 유틸리티 등 전방위 고객군에서 전력관리 제품 수요 확대.",
    ],
    strengths: [
      "전력관리 및 산업 자동화 분야 글로벌 선도업체 - 데이터센터 전력 인프라(UPS, 배전, 냉각 통합 솔루션) 분야의 폭넓은 제품 포트폴리오.",
      "엔비디아와의 전략적 파트너십을 통해 차세대 AI 데이터센터 표준 설계에 참여, 기술 표준 선점 효과 기대.",
      "전동화·에너지 관리·산업 소프트웨어 등 다각화된 사업 포트폴리오로 특정 산업 사이클 의존도가 상대적으로 분산.",
    ],
    risks: [
      "⚠️ 미국 시장에서 SBGSY는 스폰서되지 않은(unsponsored) OTC ADR로 거래되어 거래량이 얇고 유동성이 낮으며, 본주(파리 Euronext 상장) 대비 가격 갱신이 지연되거나 정보 신뢰성이 떨어질 수 있음 - 참고용으로만 보는 것을 권장.",
      "데이터센터 전력 인프라에 대한 글로벌 경쟁(지멘스, ABB, 이튼 등)이 치열해지고 있어 시장 점유율 방어 부담.",
      "AI 데이터센터 투자 사이클이 예상보다 둔화될 경우 최근 주가 모멘텀을 이끈 성장 기대치가 조정받을 가능성.",
    ],
    sources: [
      {title:"Data centers remain standout industry for Schneider Electric", url:"https://www.utilitydive.com/news/data-centers-remain-standout-industry-for-schneider-electric/813629/"},
      {title:"Schneider Electric Accelerates the Development and Deployment of AI Factories at Scale With NVIDIA", url:"https://www.se.com/us/en/about-us/newsroom/news/press-releases/schneider-electric-accelerates-the-development-and-deployment-of-ai-factories-at-scale-with-nvidia-684989e2ba4801b85e069b2b"},
      {title:"SBGSY - Schneider Electric SE | Security Details", url:"https://www.otcmarkets.com/stock/SBGSY/security"},
    ],
    newsLog: [
      {
        date: "2026-08-27",
        headline: "슈나이더 일렉트릭, 산업용 AI 소프트웨어 기업 Cognite를 31억 달러에 인수",
        importance: "medium",
        tone: "mixed",
        horizon: "수개월~1~2년 (인수 종결 및 AVEVA·산업자동화 부문 통합 성과가 실적에 드러나는 시점까지)",
        facts: [
          "2026년 6월 30일 발표, 전액 현금(all-cash) 방식으로 노르웨이 산업용 데이터·AI 플랫폼 기업 Cognite를 31억 달러에 인수하기로 합의",
          "Cognite의 2025년 매출은 1.7억 달러를 넘는 수준으로, 이를 기준으로 하면 약 18배의 매출 배수가 적용된 딜",
          "Cognite는 인수 완료 후 슈나이더 산하 소프트웨어 자회사 AVEVA/산업자동화(Industrial Automation) 부문에 편입될 예정이며, 종결은 규제 승인을 거쳐 '향후 수 분기' 내로 안내됨",
          "비슷한 시기(2026년 6~7월경) 전력망(grid) AI 분석 기업 AiDASH도 약 3.5억 달러 규모로 인수한 것으로 파악됨",
        ],
        why: [
          "데이터센터 전력관리 1위(EcoStruxure IT·Galaxy UPS·APC)라는 기존 하드웨어 강점 위에, AI·소프트웨어 계층을 더해 경쟁사(ABB·이튼·버티브·델타) 대비 '전력+AI 데이터 플랫폼' 결합 우위를 노리는 행보로 해석돼요",
          "다만 매출 대비 약 18배라는 배수는 결코 싸지 않은 가격이라, 통합이 지연되거나 시너지가 기대에 못 미치면 향후 손상차손(H1 2026에도 산업자동화 재편 관련 1.47억 유로 손상차손이 이미 반영된 전례가 있음) 리스크로 이어질 수 있어요",
        ],
        beginner: [
          "슈나이더가 '공장·전력망 데이터를 AI로 분석해주는' 노르웨이 스타트업 Cognite를 3조 원이 넘는 돈을 주고 통째로 사들이기로 했다고 보면 돼요",
          "지금까지는 UPS·전력장비 같은 '하드웨어'를 잘 만들어서 1등이었는데, 이제는 그 장비가 만들어내는 데이터를 AI로 분석해주는 '소프트웨어' 쪽으로도 영역을 넓히려는 시도예요",
          "다만 매출 규모(연 1.7억 달러 남짓)에 비해 인수가(31억 달러)가 상당히 비싼 편이라, '비싸게 산 만큼 값을 할지'는 앞으로 지켜봐야 할 부분이에요",
        ],
        interpretation: "하드웨어 1위 지위를 지키면서 소프트웨어·AI 쪽으로 무게중심을 옮기려는 전략적 베팅이지만, 고배수 인수라 통합 실패 시 마진 훼손 리스크도 함께 커진 상태로 보여요.",
        decision: "지금 당장 주가에 큰 영향을 주는 이벤트는 아니니 신규 매수/매도 판단의 근거로 쓰기보다는, 향후 분기 실적에서 산업자동화 부문 마진과 통합 비용이 어떻게 반영되는지를 확인하는 체크포인트로 삼는 걸 추천해요.",
        watch: [
          "Cognite 인수 종결 완료 시점(규제 승인 여부)",
          "인수 완료 후 산업자동화(Industrial Automation)/AVEVA 부문 마진에 미치는 희석 효과",
          "추가 AI·소프트웨어 M&A 발표 여부와 그때마다의 인수 배수(비싸게 사는 패턴이 반복되는지)",
        ],
        confidence: "인수 발표 자체(금액, 날짜, 대상 기업)는 회사 공식 발표와 블룸버그 등 복수 매체로 교차 확인된 사실이에요. 배수 계산(약 18배)은 공개된 Cognite 매출 추정치를 이용한 제 계산이라 참고용으로 봐주세요.",
        sources: [
          {
            title: "Schneider Electric announces agreement to acquire Cognite",
            url: "https://www.se.com/ww/en/assets/pdf/Schneider-Electric-announces-agreement-to-acquire-Cognite",
          },
          {
            title: "Schneider to Buy Industrial AI Firm Cognite for $3.1 Billion",
            url: "https://www.bloomberg.com/news/articles/2026-06-30/schneider-to-buy-industrial-ai-firm-cognite-for-3-1-billion",
          },
          {
            title: "Schneider Electric announces agreement to acquire Cognite, unlocking a new level of strategic intelligence for Industrial AI",
            url: "https://www.cognite.com/en/company/newsroom/schneider-electric-announces-agreement-to-acquire-cognite",
          },
        ],
      },
    ],
    analystLog: [
      {
        date: "2026-08-27",
        period: "2026년 상반기(H1, 1~6월) 실적 - 2026년 7월 30일 발표분",
        headline: "H1 2026 매출 212.3억 유로(유기 성장 +14%), 조정 EBITA 마진 19.3%(+120bp 유기)로 시장 기대를 웃돌면서 2026년 연간 가이던스를 매출 성장 10~13%(기존 7~10%), 조정 EBITA 성장 +14~19%(마진 +70~100bp 유기)로 상향했어요.",
        oneTime: "전년 동기(H1 2025)에 프랑스 법적 합의금 2.07억 유로가 일회성 비용으로 반영돼 있어서, 이번 H1 2026의 순이익 +30.1%·잉여현금흐름(FCF) +244.1% 증가율은 기저효과로 부풀려진 측면이 있어요. 반대로 H1 2026 자체에도 구조조정 비용 1.27억 유로(전년비 +6,400만 유로)와 산업자동화(Industrial Automation) 사업 재편 관련 손상차손 1.47억 유로가 잡혀 있어서, 두 분기 모두 '깨끗한' 숫자는 아니에요.",
        coreRead: "일회성 항목을 걷어내고 봐도 에너지 관리(Energy Management) 부문이 Q2 매출 96억 유로(+18% 유기)로 데이터센터·전력망 투자 수요를 실제로 흡수하고 있고, 산업자동화도 Q2 +11% 유기 성장으로 저점을 통과하는 흐름이에요. 조정 EPS는 4.79유로(+28.5% 유기)로 이익의 질도 나쁘지 않다고 판단돼요. 다만 같은 시기에 Cognite(31억 달러, 2025년 매출 대비 약 18배 배수)·AiDASH 등 AI·소프트웨어 M&A에 공격적으로 베팅하고 있어서, 앞으로는 유기 성장률만큼이나 인수 통합 비용과 상각이 마진에 잡음을 더할 가능성이 있어요.",
        forecast: "2026년 하반기(H2)에도 데이터센터향 수요가 꺾이지 않는다면 연간 매출 성장률이 상향된 가이던스 10~13% 밴드의 상단(12~13%대)에 근접하고, 10월 발표될 Q3 매출에서도 두 자릿수 유기 성장이 유지될 것으로 봐요. 다만 Cognite 인수는 '향후 수 분기(coming quarters)' 종결로 안내돼 있어서, 2026년 안에 규제 승인까지 마무리되지 않을 가능성도 있다고 봐요 - 이 부분은 제 추정이고 틀릴 수 있어요.",
        confidence: "매출·마진·EPS·가이던스 상향 수치, 일회성 항목 금액은 회사의 공식 반기 실적 발표 자료 기준 확인된 사실이에요. 하반기 전망과 M&A 종결 시점에 대한 추정은 제 해석이니 참고만 해주세요.",
        sources: [
          {
            title: "Half Year 2026 Results – Record H1 driven by strong momentum",
            url: "https://www.se.com/ww/en/assets/pdf/release-hy-results-2026",
          },
          {
            title: "Earnings call transcript: Schneider Electric lifts 2026 outlook after strong H1",
            url: "https://www.investing.com/news/transcripts/earnings-call-transcript-schneider-electric-lifts-2026-outlook-after-strong-h1-93CH-4822615",
          },
        ],
      },
    ],
    viewLog: [
      {
        date: "2026-08-27",
        headline: "가격은 이미 실적 호조를 상당 부분 반영한 구간, 하지만 유기 성장·가이던스 상향이 밸류에이션을 뒷받침하는 국면이에요",
        view: "ADR(SBGSY) 종가 기준 $69.67, 포워드 PER 약 26.5배는 절대 수치로는 싸지 않지만, 회사가 7월 30일 발표한 H1 2026 실적(매출 212.3억 유로, 유기 성장 +14%, 조정 EBITA 마진 19.3%·+120bp)과 그에 따른 연간 가이던스 상향(매출 성장 10~13%, 조정 EBITA 성장 +14~19%)을 감안하면 프리미엄이 어느 정도 실적으로 뒷받침되고 있다고 볼 수 있어요. 다만 ADR의 올해 컨센서스 EPS $2.31, 내년 $2.88은 각각 애널리스트 2명·1명만 커버하는 수치라 신뢰도가 낮고, 회사가 유로화·IFRS 기준으로 발표하는 조정 EPS(H1 2026 기준 4.79유로, +28.5% 유기)와는 통화·회계 기준 자체가 달라서 직접 비교가 어렵다는 점도 감안해야 해요. 프라이머리 상장(Euronext Paris, SU)은 커버리지가 훨씬 두텁고 목표주가 컨센서스도 강세(예: 일부 집계 기준 목표가 331유로, Strong Buy 의견)로 나오지만, ADR은 거래량이 얇아 이런 프라이머리 시장 심리가 그대로, 또는 시차 없이 반영되지 않을 수 있어요. 종합하면 '실적은 진짜 좋아지고 있는데, 그 좋은 소식이 이미 상당 부분 주가에 반영된 상태에서 ADR이라는 유동성·데이터 신뢰도 핸디캡까지 얹혀 있는' 구도로 보여요.",
        increaseIf: [
          "2026년 3분기(10월 발표 예정) 매출도 두 자릿수 유기 성장을 유지하거나 가속하는 경우",
          "데이터센터·전력 인프라향 수주 잔고(backlog)가 추가로 확대되며 2027년 이후 성장 가시성이 높아지는 경우",
          "EUR/USD 환율이 유로 강세로 움직여 ADR 기준 환산 이익이 개선되는 경우",
        ],
        wrongIf: [
          "AI 데이터센터 관련 캐펙스 사이클이 예상보다 빨리 꺾이면서 에너지 관리 부문 성장률이 한 자릿수로 급격히 둔화되는 경우",
          "Cognite(31억 달러)·AiDASH 등 최근 인수의 통합 비용·상각이 예상보다 커지며 마진이 가이던스 하단을 밑도는 경우",
          "ADR 유동성 부족으로 프라이머리 상장(Euronext Paris) 대비 괴리가 커지거나, 극소수 애널리스트 커버리지로 인해 컨센서스 EPS가 큰 폭으로 수정되는 경우",
        ],
        watchNext: [
          "2026년 3분기 매출 발표(통상 10월 중) - 유기 성장률과 부문별(에너지관리 vs 산업자동화) 속도 차이",
          "Cognite($3.1B, 2025년 매출 대비 약 18배 배수)·AiDASH 인수 종결 시점 및 종결 후 마진 희석 여부",
          "EUR/USD 환율 흐름 - ADR 기준 밸류에이션과 컨센서스 EPS에 미치는 영향",
          "ADR 커버 애널리스트 수(현재 당기 2명, 차기 1명) 증가 여부 - 늘어나면 컨센서스 신뢰도 개선 신호",
        ],
        confidence: "가격·PER·컨센서스 EPS·H1 실적 수치는 확인된 데이터이고, 밸류에이션에 대한 '비싸다/싸다' 판단과 방향성 해석은 제 관점이에요. 확률(%) 형태의 전망은 실제 백테스트 근거가 없어 제시하지 않고, 위 조건들로 판단 근거를 대신했어요.",
        sources: [],
      },
    ],
    role: {
      tags: ["전력관리·자동화(글로벌 종합 전기업체)"],
      stars: 5,
      note: "데이터센터 전력관리 시장에서 EcoStruxure IT·Galaxy UPS·APC 브랜드를 앞세워 슈나이더·ABB·이튼·버티브·델타 5개사(합산 점유율 41~43%) 중 1위를 차지하는 것으로 파악돼요. ⚠️ 다만 미국 primary 상장이 아니라 OTC ADR(SBGSY)이라 거래량이 얇고 데이터 신뢰도가 다른 종목보다 낮을 수 있어요 - 참고용으로만 보는 걸 추천해요.",
    },
  },
  BE: {
    updated: "2026-09-01",
    customers: [
      "AI 데이터센터向 온사이트(자가발전) 전력 공급이 핵심 성장축 - Oracle·Equinix(100MW 이상 누적 배치)·CoreWeave 등 하이퍼스케일러·코로케이션 업체에 고체산화물 연료전지(SOFC)를 공급.",
      "美 유틸리티 AEP(아메리칸 일렉트릭 파워)와 파트너십을 맺어 AWS向 전력 공급망에도 간접 참여.",
      "2025년 10월 브룩필드와 최대 50억 달러 규모 파트너십을 체결 - 브룩필드의 1조 달러 인프라 포트폴리오 전반에 '온사이트 전력 공급사' 역할로 참여하는 대형 계약.",
    ],
    strengths: [
      "연료전지가 동일 출력 기준 가스터빈 대비 연료를 15~20% 덜 사용한다고 주장 - 데이터센터 전력망 병목(그리드 연결 대기)을 우회하는 온사이트 발전 수요의 핵심 수혜.",
      "2026년 말까지 연간 생산능력을 2GW로 확대 목표(2025년 대비 2배) - 이미 9개국 1,000곳 이상에 누적 약 1.4GW를 배치한 실적.",
      "전통적으로 전기요금이 비싼 지역을 넘어 미드웨스트·미드애틀랜틱·텍사스 등 신규 지역의 AI 데이터센터 전력 수요까지 영업망을 확대 중.",
    ],
    risks: [
      "⚠️ 총 200억 달러 규모 수주잔고(backlog) 중 약 70%가 '서비스 계약'인데, 이 서비스 매출이 실제로 안정적 현금흐름(예: 배당 재원)으로 이어질지는 아직 증명되지 않음 - 제품 판매와 달리 수익성·갱신율 데이터가 공개되지 않고 있음.",
      "2026년 들어 주가가 급등(52주 저점 $48.87→고점 $351.28)하며 forward PER 약 81배까지 밸류에이션이 높아진 상태 - 성장 기대가 이미 주가에 상당 부분 반영돼 있어, 실적이 기대에 못 미치면 변동성이 클 수 있음.",
      "CEO도 '소프트웨어 회사처럼 빠르게 스케일업할 수 없다'고 언급할 만큼 제조 능력이 병목 - 수요가 강해도 공급(생산능력) 제약이 매출 성장 속도를 제한할 수 있음.",
    ],
    sources: [
      {title:"Bloom Energy says it's on track for 2 GW annual production capacity (Utility Dive)", url:"https://www.utilitydive.com/news/bloom-energy-says-its-on-track-for-2-gw-annual-production-capacity/804291/"},
      {title:"I Wouldn't Touch This Hydrogen Stock Yet -- Here's the One Number That Could Change My Mind (The Motley Fool)", url:"https://www.fool.com/investing/2026/08/29/i-wouldnt-touch-this-hydrogen-stock-yet-heres-the/"},
      {title:"Bloom Energy Stock Has Surged 150% in 2026. Is It Still a Buy? (Yahoo Finance)", url:"https://finance.yahoo.com/markets/stocks/articles/bloom-energy-stock-surged-150-142500309.html"},
    ],
    role: {
      tags: ["연료전지(고체산화물)", "데이터센터 온사이트 전력"],
      stars: 3,
      note: "그리드 연결 대기 없이 데이터센터 부지에 바로 전력을 공급하는 온사이트 발전 테마의 대표 종목 중 하나예요. 수주잔고와 대형 파트너십(브룩필드 50억 달러 등)은 매력적이지만, 수주잔고의 70%가 아직 실적으로 증명 안 된 서비스 계약이고 밸류에이션(forward PER ~81배)도 이미 높아 변동성이 큰 종목이에요.",
    },
    newsLog: [],
  },

};
