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
};
