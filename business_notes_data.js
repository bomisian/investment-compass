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
  },
  GOOGL: {
    // 사업 요약(customers/strengths/risks)은 아직 안 씀 - 이 종목은 실적 해석 파일럿용으로만
    // 먼저 추가함(사용자가 예시로 든 "구글 순이익이 투자이익 때문에 잘 나왔다" 케이스 검증).
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
  },
  // 2026-08-10 추가: 워치리스트 26종목 전체를 캐시 데이터만으로(비용 없이) 스캔해서
  // "최근 분기 순이익률이 직전 4분기 평균 대비 ±15%p 이상 벌어졌거나 흑자/적자가 뒤집힌" 종목을
  // 자동 탐지함(10종목 감지) - 그중 결정에 중요해 보이는 5개(메모리 3종목+MRVL+INTC)를 조사해
  // 추가함. 나머지(NVDA·META·PLTR)는 아직 미착수 - 필요시 요청.
  MU: {
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
};
