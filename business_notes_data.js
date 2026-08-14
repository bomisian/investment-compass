// ============ 종목 사업 핵심 요약 (납품처·장점·위험도) ============
// 2026-08-10 파일럿 3종목(QCOM/NVDA/TSM)만 작성. Finnhub/Yahoo 구조화 데이터가 아니라
// Claude가 WebSearch로 조사해 직접 작성한 정성적(qualitative) 콘텐츠라 buy_signal_telegram.py
// 자동 갱신 대상이 아님 - 필요할 때 세션에서 다시 요청해 갱신할 것. 각 항목의 "updated"가
// 조사 시점이고, sources에 실제 참고한 기사 링크를 남겨 사용자가 직접 원문을 확인할 수 있게 함.
// ⚠️ 이 파일은 정확성이 생명이라 추측/일반 지식으로 채우지 말고, 반드시 WebSearch로 확인한
// 내용만 넣을 것. 확인 못 한 부분은 억지로 채우지 말고 빼는 게 이 프로젝트의 원칙과 일치함.
const BUSINESS_NOTES = {
  QCOM: {
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
  },
  NVDA: {
    updated: "2026-08-10",
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
  },
  META: {
    updated: "2026-08-13",
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
  },
  // 2026-08-10 추가: 워치리스트 26종목 전체를 캐시 데이터만으로(비용 없이) 스캔해서
  // "최근 분기 순이익률이 직전 4분기 평균 대비 ±15%p 이상 벌어졌거나 흑자/적자가 뒤집힌" 종목을
  // 자동 탐지함(10종목 감지) - 그중 결정에 중요해 보이는 5개(메모리 3종목+MRVL+INTC)를 조사해
  // 추가함. 나머지(NVDA·META·PLTR)는 아직 미착수 - 필요시 요청.
  MU: {
    updated: "2026-08-13",
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
  },
  SNDK: {
    updated: "2026-08-13",
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
  },
  WDC: {
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
  },
  MRVL: {
    updated: "2026-08-13",
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
  },
  INTC: {
    updated: "2026-08-13",
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
  },
  AAPL: {
    updated: "2026-08-13",
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
    ],
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
  },
  AMD: {
    updated: "2026-08-13",
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
    ],
  },
  AVGO: {
    // 2026-08-13: newsLog 조사 당시엔 개별적으로 중요한 사건이 없어 뉴스 로그는 안 만들었지만
    // (이미 알려진 AI매출 성장 추세뿐이었음), 사업 핵심 요약(customers/strengths/risks)은
    // 뉴스 이벤트와 무관하게 항상 유효한 정적 정보라 여기서 별도로 작성함.
    updated: "2026-08-13",
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
      "구글 등 핵심 고객이 칩 공급망을 다변화하려는 움직임 - 브로드컴의 지배적 지위를 위협할 수 있음",
      "커스텀칩(TPU류) 비중이 커질수록 마진 압박 우려, 밸류에이션도 부담스러운 수준(선행 PER 약 39배)",
    ],
    sources: [
      {title:"The Real Risk Inside Broadcom Stock (Trefis)", url:"https://www.trefis.com/stock/avgo/articles-v3/607057/the-real-risk-inside-broadcom-stock/2026-07-14"},
      {title:"Broadcom Q2 FY 2026: VMware Stability Supports AI-Led Semiconductor Expansion (Futurum Group)", url:"https://futurumgroup.com/insights/broadcom-q2-fy-2026-vmware-stability-supports-ai-led-semiconductor-expansion/"},
    ],
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
  },
  LRCX: {
    updated: "2026-08-13",
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
    ],
  },
  KLAC: {
    updated: "2026-08-13",
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
    ],
  },
};
