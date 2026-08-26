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
    updated: "2026-08-13",
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
    updated: "2026-08-20",
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
    updated: "2026-08-13",
    customers: [
      "미국·동맹국 정부기관(국방·정보·국경보안·의료·재난대응) - Gotham·Foundry 플랫폼 사용, 전통적으로 매출의 큰 축",
      "상업(민간기업) 고객 - AIP(AI 플랫폼) 출시 이후 급성장, 2026년 미국 상업 고객 수 전년비 +42%",
      "전체 고객사 수 2026년 약 1,166개 전망(2025년 954개) - 고객당 평균 매출은 약 $670만로 증가 추세",
    ],
    strengths: [
      "정부·상업 두 축 모두 고성장 - 2026년 상업 매출 +89%(전망 $39억)로 정부 매출 +58%($38억)보다 더 빠르게 성장, 상업 비중이 처음으로 정부를 추월할 전망(51%)",
      "AIP(AI 플랫폼)가 정부·상업 양쪽에서 실적 변곡점 역할 - 도입 기업의 실제 업무 적용 사례가 빠르게 늘고 있음",
      "'Rule of 40'(매출성장률+이익률) 145%로 엔비디아·마이크론급 소수만 도달하는 수준(analystLog 참고)",
    ],
    risks: [
      "⚠️ 매우 높은 밸류에이션이 핵심 리스크 - 트레일링 PER 150배 이상, 선행 PSR 40배 이상. 85~100배 선행 PER에서는 매출 성장률이 예상치를 10%p만 밑돌아도 배수가 100배→60배로 압축되며 주가 40% 하락 가능성이 있다는 분석이 있음",
      "고객 집중 리스크 - 전체 고객사는 125개 안팎(정부+상업)뿐이고 매출의 3분의 2가 상위 20개 고객에서 나옴. 대형 고객 하나를 잃으면 영향이 큼",
      "정부 계약 의존도가 높아 규제·예산 변화에 민감하고, 앤트로픽 등 민첩한 AI 경쟁사의 추격이 거세지는 중",
    ],
    sources: [
      {title:"Consensus shows Palantir's revenue shifting toward commercial segment (S&P Global)", url:"https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/06/consensus-shows-palantir-s-revenue-shifting-toward-commercial-segment"},
      {title:"Palantir: 3 Reasons That Could Pressure The Stock Down To $100 (Seeking Alpha)", url:"https://seekingalpha.com/article/4890388-palantir-3-reasons-that-could-pressure-the-stock"},
      {title:"Palantir Q1 FY 2026 Revenue Beats Estimates, US Demand Drives Outlook Raise (Futurum Group)", url:"https://futurumgroup.com/insights/palantir-q1-fy-2026-revenue-beats-estimates-us-demand-drives-outlook-raise/"},
    ],
    analystLog: [{
      date: "2026-08-11",
      period: "5개 분기 연속 마진 상승 (2025-03 마감 24.2% → 2026-03 마감 53.3%)",
      headline: "순이익률이 5개 분기 연속 상승: 24.2%→32.6%→40.3%→43.3%→53.3%. 매출도 같은 기간 $884M→$1.633B로 거의 2배, 성장률이 오히려 가속(YoY +85%).",
      oneTime: "1회성 항목 없음 - 조사 범위 안에서는 특정 분기의 회계 이벤트가 발견되지 않았고, 고성장 소프트웨어 사업 특유의 영업레버리지(매출이 늘어도 비용은 덜 늘어나는 구조)로 설명됨. 'Rule of 40'(매출성장률+이익률) 점수가 145%까지 나옴 - 이 지표를 발표하는 기업 중 엔비디아·마이크론·SK하이닉스급 소수만 도달하는 수준.",
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
        date: "2026-08-18",
        headline: "관망 - 매출 성장은 워치리스트 최상위권이지만 밸류에이션 부담이 커서 실적 서프라이즈 유무가 주가를 좌우할 가능성",
        view: "PLTR은 눌림목 점수 1/5점(52주 고점대비 -16.0%, 200일선 위)으로 저가 신호는 아니에요. PER(108.6배)은 3년 평균(270.5배)보다는 낮지만 절대 수준으로 여전히 이 대시보드의 '위험' 기준(80배)을 크게 웃돌아요 - PLTR은 이 워치리스트에서 상장 이력이 짧아(3년 이하) PER 밴드가 종목별 자체 계산이 아니라 전체 통계로 대체 적용되는 종목이기도 해서, PER 유지 시나리오 숫자는 다른 종목보다 더 참고용으로만 봐야 해요. 재무는 정말 좋아요 - Q2'26 매출 +92.8%(워치리스트 최상위권), 영업이익률 +20.3%p, FCF 마진 62.1%로 5개 분기 연속 마진이 상승 중이고 1회성 항목도 발견되지 않았어요(고성장 소프트웨어 특유의 영업레버리지, Rule of 40 점수 145%로 확인됨). 문제는 이 좋은 실적이 이미 매우 높은 밸류에이션에 상당 부분 반영돼 있다는 점이에요 - 그래서 이 종목은 '실적이 좋냐 나쁘냐'보다 '컨센서스 기대치를 얼마나 넘어서냐(서프라이즈)'가 주가에 더 중요할 수 있어요. 컨센서스는 내년 매출 +49%·EPS +44%로 이미 높은 기대를 반영하고 있어요.",
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
    updated: "2026-08-20",
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
    role: {
      tags: ["기업용 클라우드(Azure)", "오피스365·M365 구독", "AI(Copilot)", "게임(엑스박스)"],
      stars: 4,
      note: "클라우드·생산성·PC 세 사업이 균형 잡혀 있고 Azure가 하이퍼스케일러 3강 중 하나예요. Copilot 사업이 연환산 매출 $370억(전년비 +123%)까지 빠르게 크고 있지만, 클라우드 자체는 AWS·GCP와 직접 경쟁하는 시장이라 독점적 지위는 아니에요.",
    },
  },
  AMZN: {
    updated: "2026-08-13",
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
    role: {
      tags: ["검사·계측 장비(공정관리)"],
      stars: 4,
      note: "반도체가 복잡해질수록 defect(결함) 관리가 중요해지는데, 이 분야 점유율이 약 60%로 2위 업체보다 7배 규모예요. 다만 매출의 약 30%가 중국이라 수출규제 우려가 재점화될 때마다 주가가 민감하게 반응해요.",
    },
  },
  ANET: {
    updated: "2026-08-19",
    role: {
      tags: ["AI 데이터센터 이더넷 스위칭·네트워킹 장비"],
      stars: 4,
      note: "하이퍼스케일러 데이터센터 네트워킹 장비 시장의 오랜 1위로 메타·마이크로소프트와 차세대 AI 패브릭을 공동 설계할 만큼 신뢰받는 파트너예요. 다만 2026년 1분기 기준 엔비디아의 Spectrum-X가 점유율 21.5%로 아리스타(약 19%)를 제치고 데이터센터 이더넷 스위칭 1위에 올라, 예전만큼 독보적이지는 않은 경쟁 구도로 바뀌고 있어요.",
    },
  },
  COHR: {
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
    role: {
      tags: ["광통신 부품(레이저·옵틱스·트랜시버)"],
      stars: 4,
      note: "AI 데이터센터 간 대용량 데이터 전송에 필요한 광트랜시버(800G·1.6T)를 만들어요. 엔비디아가 2026년 3월 코히런트·루멘텀 두 회사에 총 $40억을 전략 투자하며 이 광통신 부품을 'AI 인프라의 병목'으로 지목했을 만큼 전략적 중요성이 확인됐어요. 다만 루멘텀 등 경쟁사가 있어 독점적 지위는 아니에요.",
    },
  },
  LITE: {
    updated: "2026-08-19",
    role: {
      tags: ["광통신 부품(레이저·옵틱스)"],
      stars: 4,
      note: "COHR와 비슷한 포지션의 광통신 부품업체로, 엔비디아가 2026년 3월 직접 $20억을 전략 투자하고 레이저 부품 대규모 구매를 약정했어요. 4분기 매출이 전년비 +109%로 급성장 중일 만큼 AI 데이터센터 인터커넥트 수요의 수혜가 뚜렷하지만, COHR 등과 경쟁 구도라는 점은 감안해야 해요.",
    },
  },
  GEV: {
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
    role: {
      tags: ["가스터빈", "발전", "변압", "송전", "Grid(전력망)"],
      stars: 5,
      note: "AI 데이터센터 급증으로 전력 수요가 폭발하는 가운데 발전(가스터빈)부터 송배전까지 전력 밸류체인 전반을 아우르는 몇 안 되는 기업이에요. 가스터빈 수주잔고가 116GW(2026년 2분기 기준)까지 쌓여 있는데 현재 생산능력(연 20GW)으로는 약 5년치 물량이 이미 확보된 셈이라, 신규 발주를 넣어도 한동안 순서를 기다려야 할 만큼 공급이 병목이에요.",
    },
  },
  CEG: {
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
    role: {
      tags: ["원자력 발전", "AI 데이터센터向 전력 공급 계약"],
      stars: 4,
      note: "미국 최대 원자력 발전사업자 중 하나로, 마이크로소프트와 20년 전력공급계약(PPA)을 맺고 스리마일아일랜드 원전(835MW)을 재가동시키는 계약을 체결했어요 - 이 회사가 맺은 역대 최대 규모 PPA로, 은퇴한 미국 원전이 단일 기업고객을 위해 재가동되는 최초 사례예요. 원자력이라는 특수 자산이 강점이지만 발전사업자 자체는 다수 존재해요.",
    },
  },
  VST: {
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
    role: {
      tags: ["발전(원자력+가스+재생에너지)", "소매 전력 공급"],
      stars: 4,
      note: "다양한 발전원을 보유한 종합 전력회사로, 메타와 20년 PPA를 맺고 원전 3곳에서 2,600MW 이상(미국 기업이 지원하는 최대 규모 원자력 출력증강)을 공급하기로 했고, $47억을 들여 5.5GW 가스발전자산(코젠트릭스)까지 인수하며 대형 전력 소비처向 사업으로 무게중심을 옮기고 있어요.",
    },
  },
  ETN: {
    updated: "2026-08-19",
    role: {
      tags: ["전력관리 인프라", "변압기·배전 설비", "데이터센터 냉각(신규)"],
      stars: 4,
      note: "데이터센터·산업시설 전력관리 인프라의 핵심 공급사로, 데이터센터 매출이 2025년 전체 매출의 21%를 차지했고 1분기 데이터센터 주문이 전년비 +240% 급증했어요. 냉각 분야 강화를 위해 $95억 규모로 데이터센터 냉각업체 보이드써멀을 인수해(2026년 2분기 완료 예정) 전력+냉각 양쪽으로 영역을 넓히는 중이에요.",
    },
  },
  PWR: {
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
    role: {
      tags: ["전력망·에너지 인프라 시공(EPC)"],
      stars: 4,
      note: "전력망을 실제로 짓고 연결하는 시공 능력은 장비 제조보다 대체하기 어려운 숙련인력·장비 집약적 영역이에요. 백로그가 약 $485억(2026년 1분기 기준 사상 최대)까지 쌓였고 2026년 매출 가이던스를 $347~352억으로 상향할 만큼 그리드 현대화·데이터센터 전력 수요의 직접 수혜를 받고 있어요.",
    },
  },
  HUBB: {
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
    role: {
      tags: ["전기 배전·그리드 솔루션 장비"],
      stars: 3,
      note: "전력 배전·그리드 장비를 만드는 업체로 2026년 1분기 그리드 인프라 매출이 +18%, 전기솔루션 매출이 +12% 성장했어요. ETN·슈나이더 등 대형 경쟁사 대비 규모는 작지만 데이터센터·유틸리티 양쪽에서 견조한 수요를 누리고 있어요.",
    },
  },
  VRT: {
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
    role: {
      tags: ["데이터센터 전력·냉각 인프라(UPS·열관리)"],
      stars: 5,
      note: "AI 데이터센터가 필수로 요구하는 전력(UPS)·냉각 인프라의 사실상 업계 표준 파트너예요. 엔비디아와 함께 GB200 NVL72 시스템의 전력·냉각 레퍼런스 아키텍처를 공동 개발했고 이게 업계 표준으로 자리잡았으며, 백로그가 $95억에 달해요. 800V 직류 전력 아키텍처 등 차세대 엔비디아 로드맵과도 계속 발맞추고 있어 AI 데이터센터 건설 자체가 이 회사 없이는 어려운 구조라고 봐요.",
    },
  },
  MOD: {
    updated: "2026-08-19",
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
    updated: "2026-08-19",
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
    role: {
      tags: ["전기·기계설비 시공(데이터센터 건설)"],
      stars: 3,
      note: "데이터센터·산업시설 전기설비를 시공하는 업체로, 데이터센터가 포함된 네트워크·통신 부문 매출이 2분기에 전년비 거의 +50% 뛰며 전기부문 성장의 3분의 2를 견인했어요. 수요 자체는 확실하지만(수주잔고 $171억 사상 최대) 시공업 특성상 비슷한 능력을 가진 경쟁사가 존재하는 분야예요.",
    },
  },
  FIX: {
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
    role: {
      tags: ["HVAC·기계설비 시공(데이터센터 건설)"],
      stars: 3,
      note: "데이터센터·반도체 공장의 냉난방·기계설비를 시공하는 업체로, 기술(데이터센터+반도체) 부문이 이미 매출의 58%를 차지할 만큼 이 회사의 핵심 축이 됐어요(매출 +57% 급증, 백로그도 $69억→$125억으로 급증). 다만 EME와 마찬가지로 시공업이라 대체 가능한 경쟁사가 존재하는 분야예요.",
    },
  },
  SBGSY: {
    updated: "2026-08-19",
    role: {
      tags: ["전력관리·자동화(글로벌 종합 전기업체)"],
      stars: 5,
      note: "데이터센터 전력관리 시장에서 EcoStruxure IT·Galaxy UPS·APC 브랜드를 앞세워 슈나이더·ABB·이튼·버티브·델타 5개사(합산 점유율 41~43%) 중 1위를 차지하는 것으로 파악돼요. ⚠️ 다만 미국 primary 상장이 아니라 OTC ADR(SBGSY)이라 거래량이 얇고 데이터 신뢰도가 다른 종목보다 낮을 수 있어요 - 참고용으로만 보는 걸 추천해요.",
    },
  },
};
