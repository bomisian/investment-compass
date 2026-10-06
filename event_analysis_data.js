// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1791324398.8932636,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791313230,
      "signal": "우호적 변화",
      "netScore": 2.17,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.1,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.7,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "d64f901b51bbd68599d1",
          "headline": "10년 전 Microsoft에 1,000달러를 베팅하여 시장을 3배 이상 무너뜨렸습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791313230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7de2c0592ab26fcaddec2a42751f66ae3f36f431ef3242963c99459040a4c2f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "33316210dd5d3bf8f4b5",
          "headline": "Meta와 Microsoft는 내부 AI 도구가 중심이 되면서 인류 의존도를 줄인 것으로 알려졌습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791241572,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2322b057b1e95a37e3954f4fcd0023670bea8babd04f90afba56d1bac65dbf82",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6dfe852365b65e0e0c8",
          "headline": "비주얼 컴퓨팅 시장 보고서 2026: 2030년까지 글로벌 규모, 점유율, 추세 및 성장 예측 | NVIDIA, Apple, Microsoft 및 AMD를 통해 AI, 실시간 3D 및 AR/VR 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791207420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee5cd25b7c93703fe137f69b98dcb799d0bdbc856fc121d8db2b24643fafac11",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6027a438cf60fd018c80",
          "headline": "글로벌 상황 인식 컴퓨팅 시장 보고서 2026: 2030년 규모, 점유율, 추세 및 예측 | Amazon, Apple, Alphabet, Microsoft 및 Oracle을 통해 AI 및 엣지 성장을 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791206640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa1bf4226af13ee753732d1bb83a97cc1357b38d917ba4e62bf951c72c545410",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d157c39847dcfdcad073",
          "headline": "글로벌 가상 머신 시장 보고서 2026: 2030년까지 동향 및 예측 | Microsoft, Amazon, Google, Alibaba, Dell이 AI 및 하이브리드 클라우드를 가속화함에 따라 15.5% CAGR을 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791195360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9eefc76b99c9e34195c6c9b5d54c08bff955aaba6623cd535288ca7d01335c2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bb2b339ed8d047015cd6",
          "headline": "분석가들이 Toshiba 생산 능력 확장에 대한 우려를 경시함에 따라 WDC, STX 주식은 시판 전 반등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791190192,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fea471596a434a6529956a6cea281f8f25a3bfaa554f1d8887fb1cd53a9f393b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "369eb409646a648a8b54",
          "headline": "VST 대 CEG: 어느 원자력 함대 재고가 더 나은 선택입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791187048,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3291924403501aeab4cde4ff9d60a17c98f9563a0bae83f3d37ee82358285bf",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "52fab82ac55ba630a223",
          "headline": "QCOM, AI 칩 기술을 다루는 중국 화웨이와의 특허 계약 후 하룻밤 사이에 이익 획득",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791186054,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6b5abae5f2325cc5ec0edd3c48655499f7d3b15bf5d11960745306f36d8b9e2e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791316163,
      "signal": "우호적 변화",
      "netScore": 8.64,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 5,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.05,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.37,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 2.98,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "61e38ebadfb68a8f2a8a",
          "headline": "오늘날 별자리 에너지가 상승한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791316163,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2bca42318cba03e444b33759a0b5bb91d776e4a7b479e0451a7e28392f535d70",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6cd7e1aad302a0a582cc",
          "headline": "AMD vs. Marvell 기술: 2026년에는 어느 AI 칩 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791314401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac6bfc335dfc3d4897ae8bd77e8ebfe7355b99e732688e3608ac1b0de4e44f64",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성"
        },
        {
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "917ad067cf1cc10f1530",
          "headline": "구글이 원자력에 43억 달러를 투자한 것은 아마존이 투자한 지 불과 며칠 만에 이루어졌습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791310497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=645fba0295f899f90036130559b5d3476ef36615337a2c0084a3946a3acb24d2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "320e56443d937bcdf2af",
          "headline": "구글, 플레이스토어 수수료 영국에서 12억 파운드 규모의 재판 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791307232,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02ecdc560bca3740f41a6f351d122306e339e8c6fba58f6699d4dd3e58bbf7b9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2706572251bf12a9b4c8",
          "headline": "마이크로소프트가 아닙니다. 구글이 아닙니다. 분석가들은 이 2조 7천억 달러 규모의 기술 타이탄을 가장 저평가된 AI 플레이라고 부릅니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791304860,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ace78cffa55a1f59fc8f1d51337c8297fff889c1283b8b9c28203ebe2428365",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e7d4190a7288623a5223",
          "headline": "구글, 원자력 발전을 위한 Constellation Energy 파업 계약",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791304281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28380b6170d99638d5dc37706d946c6908e0aaa412c188423614957ac393c426",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "4e19ec4aa5796617d97f",
          "headline": "Constellation Energy는 43억 달러 규모의 Google 원자력 거래 '모델'로 14% 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791302632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7056f0cc91dbae4d6d9a0235eabb47e697e13a8468debb2e3a90264338cfde32",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8df3775db4eb51fe8b84",
          "headline": "Constellation Energy는 890MW에 대한 Google Nuclear 거래로 12% 급등했습니다. 비스트라 8% 상승, 탈렌 에너지 7% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791295560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffeac571bad1ba2b1178d656e9dc68ada6313e464ac8f995437899d55fd6bd0f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1551ec9dde8018ffb40b",
          "headline": "Google과 Constellation, 3.6GW 계약 체결: 더 큰 절반은 원자력이 아님",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791294041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=93a7dccb99d34c679f2e18826a66ceabeee160c2ae76da9d513fc72e5d8fa2c0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1e07bec85e986b5a870c",
          "headline": "Google과 Constellation Energy는 10억 달러 규모의 원자력 계약을 체결했지만 이번 거래는 독특하지 않습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791294022,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29dbe8d231c4e2b6b275de100fdf06358b0c3193cbe45b1c5aefa07d779e4008",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9d85e9c8ff77086405cf",
          "headline": "Google Nuke 거래로 Constellation Energy가 S&P 500의 정상에 올랐습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791293966,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e18ab404af9c9282e2757715b08eae41004e04bad1a5a25594051ebec36d6e3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 20,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791310497,
      "signal": "우호적 변화",
      "netScore": 10,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.33,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 4.38,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "917ad067cf1cc10f1530",
          "headline": "구글이 원자력에 43억 달러를 투자한 것은 아마존이 투자한 지 불과 며칠 만에 이루어졌습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791310497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=645fba0295f899f90036130559b5d3476ef36615337a2c0084a3946a3acb24d2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20ff61b2ab6fb59faa44",
          "headline": "전원이 꺼졌나요? Jackery는 Amazon Prime Big Deal Days를 맞아 4.5성급 이상 등급 휴대용 발전소 및 태양광 발전기 최대 65% 할인을 제공합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791291600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe0d53f3695209748f9d52182b581264be55031501f3793667a99eefd60ab178",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "59b510ed0801badcf86b",
          "headline": "오라클 정리해고가 12월에 돌아오나요? 연구원은 온라인 이메일에 대한 소문이 더 넓은 자발적 종료 제안을 가리킨다고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791262943,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e55823492b87dd9b7621ac0090f423df02fdc823aeaaaea7c4d6ba86fa58fdf6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "20a9e2763c70f665e8b5",
          "headline": "Amazon, LA 올림픽 주최측과 이전에 Forever 21의 본거지였던 39에이커 부지 인수",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791236546,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4ded1771146b99587764e9a35e41c6001401695cfe0df0cda6ac85326d5d558b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "47b8d59c57e83aff2e79",
          "headline": "데이터 센터 반발에 대한 Amazon의 답변: 커뮤니티 칼리지 및 가정 에너지 업그레이드에 10억 달러",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791222376,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=81c6ee463e59916c8e8dd5574cb48a2420aa2ee0c7104ad7a301fccb08b04b01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "744962338cd7c9dcd0ff",
          "headline": "아마존은 프라임 빅딜 데이를 준비합니다. 전자상거래 성장이 계속해서 놀라운 성장을 이룰 수 있을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791214263,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=446884d2c52972b43fa5a4fb83f8c0ebd3c729635d4c9c65eaf4bdf3f935c6ca",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "6027a438cf60fd018c80",
          "headline": "글로벌 상황 인식 컴퓨팅 시장 보고서 2026: 2030년 규모, 점유율, 추세 및 예측 | Amazon, Apple, Alphabet, Microsoft 및 Oracle을 통해 AI 및 엣지 성장을 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791206640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa1bf4226af13ee753732d1bb83a97cc1357b38d917ba4e62bf951c72c545410",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d157c39847dcfdcad073",
          "headline": "글로벌 가상 머신 시장 보고서 2026: 2030년까지 동향 및 예측 | Microsoft, Amazon, Google, Alibaba, Dell이 AI 및 하이브리드 클라우드를 가속화함에 따라 15.5% CAGR을 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791195360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9eefc76b99c9e34195c6c9b5d54c08bff955aaba6623cd535288ca7d01335c2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bda4e52dd92d056ee082",
          "headline": "아마존과의 20년 계약이 Constellation Energy 주식에 미치는 영향",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791138602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac507a114a3f8dc4f9e53b87e09b7f9074d907e4aa0b915b84c599fb5beabffb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "aa90a21eb5a34200d5f0",
          "headline": "짐 크레이머(Jim Cramer)는 한 달 만에 24% 상승한 경쟁자 때문에 아마존을 그만둘 수도 있다고 말했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791129505,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=59352f12e4d58e8346bfae50c868ea29a592f1221285acb772611671f974581b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c561fe9314213d1571d6",
          "headline": "Constellation Energy(CEG)는 아마존 거래에 따라 공정 가치보다 26% 낮을 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791108395,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a62e8383202564c491e976da88bfead5b81147e1c2af5c78b9f9ff678746dbca",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791311402,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.75,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.57,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.9,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -3.5,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "30ddba40f6208c41816d",
          "headline": "메타의 AI 전략이 성공할 수 없을 것 같은 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791311402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d70da75a84d3a9662c8fd8bbf96c20b7103279ae9e813f5cf1a64985cb1ebde1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c9d575e0d5b5725873ff",
          "headline": "Citi는 AMD의 3000억 달러 규모 CPU 시장 확장의 \"주요 수혜자\"로서 25% 상승 여력을 예측합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791307965,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=92238007211c759df503210961c555ef4e85cf201f903701385be653ac2488e7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cee442d4877d8e9d74bd",
          "headline": "Ofcom, 고등법원 대결 중 메타 조사",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791303046,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab3193ce38c45540ccf8ccc9036149a57d4f574d0b8fbc9c185ab07ae52c8eda",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "33316210dd5d3bf8f4b5",
          "headline": "Meta와 Microsoft는 내부 AI 도구가 중심이 되면서 인류 의존도를 줄인 것으로 알려졌습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791241572,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2322b057b1e95a37e3954f4fcd0023670bea8babd04f90afba56d1bac65dbf82",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6f754d6d38f9de1a59e0",
          "headline": "Meta와 Google이 AI에서 승리할 간단한 이유: \"미국 가구의 2%\"만이 비용을 지불합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791229332,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=898527f37f586052a6c22e453923ba0d2fc57d7669983be07029fbdc106f6390",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0484aa779bf49542fc38",
          "headline": "백악관, OpenAI, Nvidia, Alphabet 및 Meta가 서명한 자발적인 AI 안전 서약 공개",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791213153,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=032c8487bd87dc06629cd8e58b891dbac5fc69968d46fa4f3601c82893a12ceb",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e7354037494021c09545",
          "headline": "Qualcomm 대 Arm Holdings 2026년 4분기 재판: 로열티 및 계약 위반",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791207282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a6fed13b6be411df50bba108d5a6501a2cbba8588dc161584ad89321b32d2815",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4117315ca448f848b1f5",
          "headline": "AMD는 OpenAI와 Meta를 각각 1페니에 최대 3억 2천만 주를 약속했습니다. 이것이 주식 수에 미치는 영향은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791196862,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9c40234361d5ab57a856119aa34191ef5b11fbf538b86e853bf982b9262f27f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4b978de00ba525100d92",
          "headline": "MU, HPE, AMZN, META, SPCX: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791165291,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=941d7de09ad8782ad8a787b14da4d142eb94b32a9765eae533675260f14b4bf7",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aa90a21eb5a34200d5f0",
          "headline": "짐 크레이머(Jim Cramer)는 한 달 만에 24% 상승한 경쟁자 때문에 아마존을 그만둘 수도 있다고 말했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791129505,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=59352f12e4d58e8346bfae50c868ea29a592f1221285acb772611671f974581b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791306720,
      "signal": "주의 강화",
      "netScore": -7.4,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.22,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.52,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.32,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.75,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "802591f84846fdd33845",
          "headline": "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 4조 7500억 달러로 증가했습니다. John Ternus가 이끄는 Apple의 다음 장에 베팅할 때 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791306720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec6f881fc469376cf38571cf8493b05b57d9365b22e179702e1a1c853e21e423",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "cb6a4f017bd7ce10abbc",
          "headline": "22%: Apple(AAPL) 주주에게 가장 중요한 숫자",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791285600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=335897208476f1904381823ddc2b672d59e451c9f59bd4da898e42dd370fdd78",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "e6dfe852365b65e0e0c8",
          "headline": "비주얼 컴퓨팅 시장 보고서 2026: 2030년까지 글로벌 규모, 점유율, 추세 및 성장 예측 | NVIDIA, Apple, Microsoft 및 AMD를 통해 AI, 실시간 3D 및 AR/VR 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791207420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee5cd25b7c93703fe137f69b98dcb799d0bdbc856fc121d8db2b24643fafac11",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6027a438cf60fd018c80",
          "headline": "글로벌 상황 인식 컴퓨팅 시장 보고서 2026: 2030년 규모, 점유율, 추세 및 예측 | Amazon, Apple, Alphabet, Microsoft 및 Oracle을 통해 AI 및 엣지 성장을 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791206640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa1bf4226af13ee753732d1bb83a97cc1357b38d917ba4e62bf951c72c545410",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f4d0af125ad0ee0050a5",
          "headline": "경쟁사와 비교하여 기술 하드웨어, 스토리지 및 주변 장치 산업에서 Apple의 입지 조사",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1791179955,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28fc6104f12186378f7823546bdc4a5948ce6859c345550afb3955d40b4bd955",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4990442c7432b3dc27aa",
          "headline": "Apple, Meta 및 Jim Cramer, AI, iPhone 및 Vision Pro 움직임의 기조 설정: 이번 주 Apple 소식",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791097223,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f4a4215479ea8429a6c5d4ad245d06e3cc9c2d74c5f8e66fd163f1bb812f1ae",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4e81941edf7b225e966e",
          "headline": "Apple, Exxon 및 Intel과 관련된 대법원 싸움이 귀하의 포트폴리오에 영향을 미칠 수 있는 방법",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791093600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=373c44d6fc49be76ea607f958fbfe30d5465f1570e39fcc873269cfa011e1063",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791300152,
      "signal": "주의 강화",
      "netScore": -8.53,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.27,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.55,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.62,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "839f59811f40af71f58d",
          "headline": "Stellantis N.V. vs. Tesla: 2026년에는 어느 소비재 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791300152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=23cf5fafacfae18434de2be3c4c6dcb1f4ead23dd82c2105cb270f86518c0428",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5d6bd0a3faf782acd42a",
          "headline": "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791238172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b05235329873b3a6aefc1263a0519dcf558fad2478525d7f31f7e0d1584bf58",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "387f143f8482764cb832",
          "headline": "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791238172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b05235329873b3a6aefc1263a0519dcf558fad2478525d7f31f7e0d1584bf58",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d4047d6c7b75e2616820",
          "headline": "Elon Musk는 Tesla의 초기 맞춤형 AI Chit Bet이 그 어느 때보다 중요할 수 있다는 데 동의하고 TSLA 엔지니어의 경고를 지지합니다: '현재의 컴퓨팅 부족은 빙산의 일각에 불과합니다'",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791237605,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e3cc89cee51d5790561b10f32ebf23ec12e9e7563eb5b4920b19149499431a8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1e9624d2aff9cd413857",
          "headline": "Nvidia, Tesla Shares는 OKX 및 NYSE 소유자 벤처에서 연중무휴 온체인 거래를 담당합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791193537,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aeb5f10fa4f8f217b1b794db76865562df090a767a7918d2f7279cd146668419",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4142abde7f09a159c8a6",
          "headline": "Tesla는 2023년 이후 처음으로 연간 납품 증가세를 보이고 있습니다. 주식이 매수인가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791160442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ebb1a5fb7b4a6cf3bc76f05bf4ebafd00085b6351bff946f1d4a40646a208d2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791309449,
      "signal": "중립·확인 대기",
      "netScore": 1.68,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.05,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.22,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.35,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "fb792636bfe7c995ce55",
          "headline": "Nebius는 추론 거래에서 9% 상승한 반면 수익은 197배에 가깝습니다. CoreWeave 4% 상승, Oracle 3% 상승",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791309449,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ed823fab51bfd325fef365a3c4aaa96520171c1fdec2f50f23fe6caf2a03329",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9fcdbe782dff7b321167",
          "headline": "나스닥, 다우 선물이 프리마켓 상승하는 이유는 무엇입니까? SPCX, NVDA, CEG, AMD, ORCL, NOK 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791275977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b2690aaa98e03f5a2f2511a4b46b97fd79dfffb05f92ff936c81ada02f72b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "59b510ed0801badcf86b",
          "headline": "오라클 정리해고가 12월에 돌아오나요? 연구원은 온라인 이메일에 대한 소문이 더 넓은 자발적 종료 제안을 가리킨다고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791262943,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e55823492b87dd9b7621ac0090f423df02fdc823aeaaaea7c4d6ba86fa58fdf6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "146f1f5ee9d511065185",
          "headline": "Google은 Play 스토어 수수료에 대해 영국 소비자로부터 10억 파운드의 법적 소송을 제기했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791154860,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec5d3ec64aeec88e4086751770c5a548e67103a43437934ec1868287e8fe4332",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "클라우드 수요와 자본 부담 동시 확대"
        },
        {
          "eventId": "bf008eee1dcc66db7ecf",
          "headline": "오라클, Nashville Symphony와 천만 달러 규모의 파트너십 발표",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791151200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=87e70bb6d9e4ec6a50af0bf911613075ac850e606b63cd96bd243d0ed08363e2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "48a55d670b9436aabf6c",
          "headline": "오라클의 원자력 거래는 에너지가 새로운 컴퓨팅 병목 현상임을 시사합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791091599,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7136b20ea2ec27572d6b934c740c7c331c1411972331c2a08489f026b6530232",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791304860,
      "signal": "중립·확인 대기",
      "netScore": 0.49,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.27,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.4,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.92,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.52,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "2706572251bf12a9b4c8",
          "headline": "마이크로소프트가 아닙니다. 구글이 아닙니다. 분석가들은 이 2조 7천억 달러 규모의 기술 타이탄을 가장 저평가된 AI 플레이라고 부릅니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791304860,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ace78cffa55a1f59fc8f1d51337c8297fff889c1283b8b9c28203ebe2428365",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "10a0d86c02b8fb759279",
          "headline": "Nvidia, Palantir 및 Alphabet은 175억 달러 규모의 경고로 월스트리트에 충격파를 보내고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791278761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a46b94a836b0723950efeed8a6a69eca0b6c93fe192c10cd4df3b4f033aee2e5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5723ee76fb13676d6dd2",
          "headline": "영국 금융 행위 당국은 기술 및 금융 범죄와 관련된 단기 Palantir 계약을 갱신하지 않았다고 밝혔습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791272413,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=294f067689ca9e9eca4a001dd9cee9178f3fb7f89af0653c1aed159d98a789fe",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "43e2fa516dd8ce15c247",
          "headline": "Surf Air Mobility는 Palantir가 제공하는 Part 135 운영자를 위한 Surf Air Mobility의 SurfOS 비행 운영 소프트웨어인 OperatorOS를 위해 Clipper Aviation과 최종 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791268452,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15853cb489b3a69aeb408b2e9d3afc8c27c77056bde4ba8b8b268353c370adff",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "74e202202d7ac74ea32a",
          "headline": "Nebius가 Palantir로부터 거래를 더 잘 마무리하는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791256633,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5bb404a7c112bef5851774463149d306583195b2142a9af375f993e21f7afda",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2376a2fa3bc6a4a308e1",
          "headline": "Northland 매수 등급 및 40달러 목표 가격에도 불구하고 Gorilla는 5% 하락했습니다. Palantir는 하락세를 유지하고 BigBear.ai Holdings는 전락했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791223993,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b069f7f5ab036e3c5be47c5ee60d5d6e2b585d99194a3b9b82d4a2852431ea7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "aa7f29426aad91ff1893",
          "headline": "Peter Thiel은 미국의 AI 수요가 급증하고 있지만 Cathie Wood는 Palantir를 다듬고 있다고 말합니다: Ark Invest의 판매 금액은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791194411,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20fbc485765882ea6bb13da69e8b8b419cce6630fa171802712a3c76b3df6564",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e9ffefa9b836c98b04d4",
          "headline": "Peter Thiel은 Facebook의 초기 외부 투자자였으며 현재 전력 및 에너지 주식에 집중하는 헤지 펀드를 구축하기 전에 PayPal과 Palantir를 공동 창립했습니다. Sa의 실적은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791167700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9a5693a3e03046c44898398bdf910f4f6195de62cbaef80d813c5067a7bde864",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791316497,
      "signal": "우호적 변화",
      "netScore": 2.85,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.92,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.4,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 1.05,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "c6aff69e09eaa91eb95d",
          "headline": "Marvell, 투자자 데이에서 2031 회계연도 매출 목표 상향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791316497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3bb6e969e746963ce54baac0849b1c470c4ae77a71a436cc245c61ea1f5db5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ec343632477a3019f99f",
          "headline": "임베디드 시스템 - 글로벌 전략 비즈니스 보고서: Intel, Qualcomm, NXP Semiconductors 및 STMicroelectronics가 AI 및 IoT 파괴를 가속화함에 따라 2032년까지 710억 달러 성장 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b20d74487d12ee8348f9eab77dabff4b7549dba9988236e66b36d49c0c0254a3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "0c0a73112d58c12cd52e",
          "headline": "하이브리드 정보 기술(IT) 관리 시장 글로벌 보고서 2026 | Dell, Cisco, Oracle, ServiceNow 및 Datadog을 통해 1,148억 4천만 달러 규모의 AIOps 및 클라우드 수요를 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a22d0643667e428386ab621268c00d0c0be9614e5394900256a2989ef1298db8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "bf5d5804141eade971e7",
          "headline": "Amazon의 250달러: 10억 달러 규모의 \"함께 구축\" 데이터 센터 추진은 이미 역효과를 낳고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c07610cc2fd82441f3317db59ef719e2dc8990ed21a2689bdc616e104e9a7c41",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2706572251bf12a9b4c8",
          "headline": "마이크로소프트가 아닙니다. 구글이 아닙니다. 분석가들은 이 2조 7천억 달러 규모의 기술 타이탄을 가장 저평가된 AI 플레이라고 부릅니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791304860,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ace78cffa55a1f59fc8f1d51337c8297fff889c1283b8b9c28203ebe2428365",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "67fec3579c380b9cf5e8",
          "headline": "Applied Materials vs. Nvidia: 2026년에는 어떤 칩 주식을 구매하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791303602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90bebc3cbc67f1096fd2ecde167735fc1614a5ce197356e38efb3d3ad8554904",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89f6dd8bf1f02e775524",
          "headline": "Citi가 목표를 800달러로 높이고 Stifel이 700달러로 상승함에 따라 AMD는 4% 급등합니다. NVIDIA의 상승, Intel의 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791302186,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8677f0b25892457821cbc498c33ed40d6af7debd99f0760a2db4644d43046d23",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e18a93f6ef2968b6bc18",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 칩 주식을 1개만 사고 보유할 수 있다면 이 주식이 될 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791300900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f33a6af72c9567f9e0743bc2124c14d5b16042fb058ea6502e53ccb09e538fc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7d61e7445dadfe38ea3d",
          "headline": "모든 AI 칩을 구동하는 간과된 3가지 성장주 Nvidia 및 AMD 빌드",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791292080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a92035033a69cef9fcdc1ab00704e5c4225413d100a0ca1e45f1eee626ba166d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a5d12609aed8c8aa6781",
          "headline": "ASML 대 Nvidia: 2026년에는 어느 AI 반도체 주식이 더 나은 매수인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791291121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb8967d5822f98a5492de366248d013aff0fe425811a6f0147f719f5f07c3881",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0f10e9ff6cf8912fa79e",
          "headline": "Morgan Stanley: Nvidia, Broadcom은 데이터 센터의 전력 위기로부터 보호됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791288194,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=538600e1068dae3bf7f4e7826a4f0f596091c3bf73b5ca2fae73d02923f6df72",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "10a0d86c02b8fb759279",
          "headline": "Nvidia, Palantir 및 Alphabet은 175억 달러 규모의 경고로 월스트리트에 충격파를 보내고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791278761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a46b94a836b0723950efeed8a6a69eca0b6c93fe192c10cd4df3b4f033aee2e5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 45,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791316497,
      "signal": "우호적 변화",
      "netScore": 4.55,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.45,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.9,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 4.38,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "c6aff69e09eaa91eb95d",
          "headline": "Marvell, 투자자 데이에서 2031 회계연도 매출 목표 상향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791316497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3bb6e969e746963ce54baac0849b1c470c4ae77a71a436cc245c61ea1f5db5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "6cd7e1aad302a0a582cc",
          "headline": "AMD vs. Marvell 기술: 2026년에는 어느 AI 칩 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791314401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac6bfc335dfc3d4897ae8bd77e8ebfe7355b99e732688e3608ac1b0de4e44f64",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ec343632477a3019f99f",
          "headline": "임베디드 시스템 - 글로벌 전략 비즈니스 보고서: Intel, Qualcomm, NXP Semiconductors 및 STMicroelectronics가 AI 및 IoT 파괴를 가속화함에 따라 2032년까지 710억 달러 성장 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b20d74487d12ee8348f9eab77dabff4b7549dba9988236e66b36d49c0c0254a3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "0c0a73112d58c12cd52e",
          "headline": "하이브리드 정보 기술(IT) 관리 시장 글로벌 보고서 2026 | Dell, Cisco, Oracle, ServiceNow 및 Datadog을 통해 1,148억 4천만 달러 규모의 AIOps 및 클라우드 수요를 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a22d0643667e428386ab621268c00d0c0be9614e5394900256a2989ef1298db8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "bf5d5804141eade971e7",
          "headline": "Amazon의 250달러: 10억 달러 규모의 \"함께 구축\" 데이터 센터 추진은 이미 역효과를 낳고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c07610cc2fd82441f3317db59ef719e2dc8990ed21a2689bdc616e104e9a7c41",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "89f6dd8bf1f02e775524",
          "headline": "Citi가 목표를 800달러로 높이고 Stifel이 700달러로 상승함에 따라 AMD는 4% 급등합니다. NVIDIA의 상승, Intel의 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791302186,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8677f0b25892457821cbc498c33ed40d6af7debd99f0760a2db4644d43046d23",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4b1eaf5596e064a5666a",
          "headline": "Lisa Su는 AMD가 공급을 추가하기 위해 경쟁함에 따라 AI 수요가 수년 동안 '매우, 매우 높은' 상태를 유지할 것이라고 말했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791293981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cac0f65dbfc159b0714adc0c403527d74a4d55a70d487f42c12b66ea4217e584",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7d61e7445dadfe38ea3d",
          "headline": "모든 AI 칩을 구동하는 간과된 3가지 성장주 Nvidia 및 AMD 빌드",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791292080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a92035033a69cef9fcdc1ab00704e5c4225413d100a0ca1e45f1eee626ba166d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ddf0b9406c2e6de8a759",
          "headline": "AMD CEO Lisa Su는 2027년에 주요 AI 칩 공급을 늘릴 계획입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791290760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85817650821b346de0a4929e22bf090b0962647c7e2b11dc366e04d796683a68",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "ef18a9c38901a02cf117",
          "headline": "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 급격한 10월 랠리 이후 시판 전 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791277971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa475f9363e423a2f98742f7531b2d0eb385a9a9efddf15069bd64880d0c5bd8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9fcdbe782dff7b321167",
          "headline": "나스닥, 다우 선물이 프리마켓 상승하는 이유는 무엇입니까? SPCX, NVDA, CEG, AMD, ORCL, NOK 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791275977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b2690aaa98e03f5a2f2511a4b46b97fd79dfffb05f92ff936c81ada02f72b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d514c369fc1cc1ff1206",
          "headline": "Advanced Micro Devices vs. Intel: 2026년에는 어떤 반도체 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791232789,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33b8d9bb9c2dc48e016820ab0d3f668e5c726eb9bbd9b6e80ba979c8aca90b38",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 32,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791314401,
      "signal": "주의 강화",
      "netScore": -2.25,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.27,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.45,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.1,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "6cd7e1aad302a0a582cc",
          "headline": "AMD vs. Marvell 기술: 2026년에는 어느 AI 칩 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791314401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac6bfc335dfc3d4897ae8bd77e8ebfe7355b99e732688e3608ac1b0de4e44f64",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
        },
        {
          "eventId": "cef165066a1e76e639b6",
          "headline": "향후 6개월 동안 Broadcom 주식 성과는 어떻게 결정됩니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791293741,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d83225fbcdf76f5ad3d95e1dc63d6311f38fb737a619004ae49fb0ae8ad352b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0f10e9ff6cf8912fa79e",
          "headline": "Morgan Stanley: Nvidia, Broadcom은 데이터 센터의 전력 위기로부터 보호됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791288194,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=538600e1068dae3bf7f4e7826a4f0f596091c3bf73b5ca2fae73d02923f6df72",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ef18a9c38901a02cf117",
          "headline": "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 급격한 10월 랠리 이후 시판 전 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791277971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa475f9363e423a2f98742f7531b2d0eb385a9a9efddf15069bd64880d0c5bd8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "51055ef8bed01e64776c",
          "headline": "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791257308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7035d6f9bfb2b24033b85023fb3a1c8827b1f03fc5c6f4f1eb02cc7d64be976d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6340b9b09fe6b53173fc",
          "headline": "VST 주식 4% 추가: 미국 에너지부, Vistra와 42억 달러 규모의 원자력 계약 확인",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791243119,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9dc43a244ecf0aafddc4a3c3429b8ba9e0dccdacb586c760be593e4bbb3c5b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b6f7da99028f0dfc0bb3",
          "headline": "월스트리트, 600억 달러 규모의 Broadcom-Anthropic 거래로 대출 기관의 선호도 테스트 - FT",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791236825,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9767c1ce7486f49d389c61175a1b19215ba5e905cd954d700da4629eee67a564",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9830782c64b85315828b",
          "headline": "Nvidia, Broadcom은 AI 붐의 32GW 구멍에서 놀랍게도 안전할 수 있다고 Morgan Stanley는 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791226313,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a06d38c2adb48ff3109e7132ee60fa6cf971bad4d2b9885679f1754c197079f0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d468bf82570fe19a818c",
          "headline": "Nvidia, Broadcom, Micron, AMD, Intel 및 Lam Research에 32.4%를 투자한 반면 VOO는 14.8%에 불과한 저비용 Vanguard ETF를 만나보세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791197400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0cf215ea487392e67e586be62096cb6b8d47e93ddaf02471c8e9a3ec0ce5353",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c895b69475d91820b1bc",
          "headline": "Broadcom 대 Intel: 수익 추세가 투자자에게 이러한 인공 지능 회사에 대해 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791156988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33b13c9c8e3f454a3825c599f3eb42a30c565f632e8ec831e040a0d5c58c6893",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "60e680e543a9f4346a2b",
          "headline": "Broadcom의 2028년 전망으로 인해 주식이 비명을 지르며 매수되었습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791119040,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=46eb16b4f50ecf58d11581d7dc3441c209f98cc083d422867edba0454ca2b493",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791313440,
      "signal": "주의 강화",
      "netScore": -2.25,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.62,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.88,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.75,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "42d89f9cd2ef4eb9fdb8",
          "headline": "Qualcomm의 AI 인프라 중심점은 과소평가되었습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791313440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3dc0a82d970859f99bf341e6ca85ef48003b1f4234ea9632f51f35f718266a5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "802591f84846fdd33845",
          "headline": "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 4조 7500억 달러로 증가했습니다. John Ternus가 이끄는 Apple의 다음 장에 베팅할 때 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791306720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec6f881fc469376cf38571cf8493b05b57d9365b22e179702e1a1c853e21e423",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "ec343632477a3019f99f",
          "headline": "임베디드 시스템 - 글로벌 전략 비즈니스 보고서: Intel, Qualcomm, NXP Semiconductors 및 STMicroelectronics가 AI 및 IoT 파괴를 가속화함에 따라 2032년까지 710억 달러 성장 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b20d74487d12ee8348f9eab77dabff4b7549dba9988236e66b36d49c0c0254a3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cb6a4f017bd7ce10abbc",
          "headline": "22%: Apple(AAPL) 주주에게 가장 중요한 숫자",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791285600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=335897208476f1904381823ddc2b672d59e451c9f59bd4da898e42dd370fdd78",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "5d6bd0a3faf782acd42a",
          "headline": "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791238172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b05235329873b3a6aefc1263a0519dcf558fad2478525d7f31f7e0d1584bf58",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2d21e878da086d0d36cd",
          "headline": "미국 전기차 판매 감소에도 퀄컴은 성장할 수 있다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791233134,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc7cdf66c391d20c1e89aa767f51eb7ad4f7c7c0036dbc06e1dcc855f813c302",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "290b082475b442d447fb",
          "headline": "퀄컴, 라이선스 수익 하락으로 화웨이와 첫 5G 특허 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791213408,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a9691b9042a02e35f5dc4356bc9841e8a8535bb46aaf476a9694e6a51cb88dc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "57b211f459d8496795b2",
          "headline": "Arm, AI 야망으로 인해 고객이 십자선에 놓이면서 Qualcomm 법원 싸움 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791209526,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da6745a4ebabd9dae9185a6d53d1cfab0bb6fba270de8180239296b44609312f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e7354037494021c09545",
          "headline": "Qualcomm 대 Arm Holdings 2026년 4분기 재판: 로열티 및 계약 위반",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791207282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a6fed13b6be411df50bba108d5a6501a2cbba8588dc161584ad89321b32d2815",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4d3b43aa88d538b61c5a",
          "headline": "Qualcomm, Arm, 수십억 달러의 잠재적 로열티를 걸고 법정으로 향하는 것으로 알려짐",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791206079,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3273c2a913450a39dd771b4c207902c8f22b93f050d0d80cb8806db96ba53cf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "217bf3e3fd87a6296fb8",
          "headline": "Qualcomm, 보류된 칩 테스트 도구 및 유출된 거래 위협에 대해 Arm을 법정에 제기",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791204479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e4bff6e6e3105255f6ce8cca3afe778c5f86b53dce45a59bc95120fa15dd707d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "68073dce831af6aa242b",
          "headline": "오늘의 주식 시장: 이란이 호르무즈 해협을 재개하기 위한 조건을 유지함에 따라 다우 선물 상승, S&P 500, 나스닥 100 하락 - SPCX, QCOM, VST 초점(업데이트됨)",
          "eventLabel": "실적 발표",
          "publishedAt": 1791189826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9a13f8742872fd1a2409dc41a364d59ce2b893949dca9c912bac8c56a3f1e6a9",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791209526,
      "signal": "주의 강화",
      "netScore": -7.56,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.1,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.2,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.1,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "57b211f459d8496795b2",
          "headline": "Arm, AI 야망으로 인해 고객이 십자선에 놓이면서 Qualcomm 법원 싸움 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791209526,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da6745a4ebabd9dae9185a6d53d1cfab0bb6fba270de8180239296b44609312f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e7354037494021c09545",
          "headline": "Qualcomm 대 Arm Holdings 2026년 4분기 재판: 로열티 및 계약 위반",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791207282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a6fed13b6be411df50bba108d5a6501a2cbba8588dc161584ad89321b32d2815",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4d3b43aa88d538b61c5a",
          "headline": "Qualcomm, Arm, 수십억 달러의 잠재적 로열티를 걸고 법정으로 향하는 것으로 알려짐",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791206079,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3273c2a913450a39dd771b4c207902c8f22b93f050d0d80cb8806db96ba53cf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "217bf3e3fd87a6296fb8",
          "headline": "Qualcomm, 보류된 칩 테스트 도구 및 유출된 거래 위협에 대해 Arm을 법정에 제기",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791204479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e4bff6e6e3105255f6ce8cca3afe778c5f86b53dce45a59bc95120fa15dd707d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791316497,
      "signal": "주의 강화",
      "netScore": -4.62,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.87,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.1,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.97,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "c6aff69e09eaa91eb95d",
          "headline": "Marvell, 투자자 데이에서 2031 회계연도 매출 목표 상향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791316497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3bb6e969e746963ce54baac0849b1c470c4ae77a71a436cc245c61ea1f5db5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6cd7e1aad302a0a582cc",
          "headline": "AMD vs. Marvell 기술: 2026년에는 어느 AI 칩 주식이 더 나은 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791314401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac6bfc335dfc3d4897ae8bd77e8ebfe7355b99e732688e3608ac1b0de4e44f64",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회"
        },
        {
          "eventId": "8b08b759d63369328e58",
          "headline": "Broadcom 주식이 화요일 아침에 폭등한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791309326,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b6e22575b44214c7a84d1f649aa08992a450a88b1de736837200208a6530b3fe",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ef18a9c38901a02cf117",
          "headline": "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 급격한 10월 랠리 이후 시판 전 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791277971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa475f9363e423a2f98742f7531b2d0eb385a9a9efddf15069bd64880d0c5bd8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9fcdbe782dff7b321167",
          "headline": "나스닥, 다우 선물이 프리마켓 상승하는 이유는 무엇입니까? SPCX, NVDA, CEG, AMD, ORCL, NOK 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791275977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b2690aaa98e03f5a2f2511a4b46b97fd79dfffb05f92ff936c81ada02f72b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "51055ef8bed01e64776c",
          "headline": "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791257308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7035d6f9bfb2b24033b85023fb3a1c8827b1f03fc5c6f4f1eb02cc7d64be976d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6340b9b09fe6b53173fc",
          "headline": "VST 주식 4% 추가: 미국 에너지부, Vistra와 42억 달러 규모의 원자력 계약 확인",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791243119,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9dc43a244ecf0aafddc4a3c3429b8ba9e0dccdacb586c760be593e4bbb3c5b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "387f143f8482764cb832",
          "headline": "Nasdaq 100은 투자자들이 치솟는 수익률에 대한 압박을 이겨내면서 사상 최고치를 경신했습니다 — NVDA, SPCX, CRML, TSLA, QCOM In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791238172,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b05235329873b3a6aefc1263a0519dcf558fad2478525d7f31f7e0d1584bf58",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "31b09e86904c97c4ae13",
          "headline": "2016년 Marvell에 1,000달러를 베팅하여 2,140%의 수익률로 시장을 압도했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791119740,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=858f6954812836cf6d567922f0a14af10761865669f12f3444ecd035486b298a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791313674,
      "signal": "주의 강화",
      "netScore": -4.7,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.17,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.92,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.38,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.05,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "d9952b85779fd4bbca42",
          "headline": "Nvidia가 지원하는 클라우드 컴퓨팅 회사 Lambda는 IPO를 앞두고 최종 라운드에서 40억 달러를 모금할 것으로 보입니다: 보고서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791313674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a950b12175464e362e017872d96e02cf8657a0edfaafc0ae8f32b5f8be53e41",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec343632477a3019f99f",
          "headline": "임베디드 시스템 - 글로벌 전략 비즈니스 보고서: Intel, Qualcomm, NXP Semiconductors 및 STMicroelectronics가 AI 및 IoT 파괴를 가속화함에 따라 2032년까지 710억 달러 성장 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b20d74487d12ee8348f9eab77dabff4b7549dba9988236e66b36d49c0c0254a3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e18a93f6ef2968b6bc18",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 칩 주식을 1개만 사고 보유할 수 있다면 이 주식이 될 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791300900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f33a6af72c9567f9e0743bc2124c14d5b16042fb058ea6502e53ccb09e538fc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "81a0d52e5cebfa2fab89",
          "headline": "어플라이드 머티어리얼즈와 인텔, AI 기반 컴퓨팅을 위한 칩 제조 혁신 가속화를 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791291600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a655c1feb080a90a0f88856784fb390c4e0a4707bfd075f4051ca0211c5db40",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "32676b5139be9522ea2a",
          "headline": "어플라이드 머티어리얼즈와 인텔, 트랜지스터, 인터커넥트, 패키징 기술을 위한 칩 제조 혁신 개발을 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791277324,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b80361cecafd3b0980c83f0f7e48bfc62790b9466f9fce5b1721ac5952dcce61",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d514c369fc1cc1ff1206",
          "headline": "Advanced Micro Devices vs. Intel: 2026년에는 어떤 반도체 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791232789,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33b8d9bb9c2dc48e016820ab0d3f668e5c726eb9bbd9b6e80ba979c8aca90b38",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bcd59098a90f7c99b244",
          "headline": "Elon Musk가 대만 반도체가 Terafab에 합류할 수 있다는 신호를 보내면서 Intel은 4% 하락했습니다. AMD 전표, NVIDIA는 꾸준함 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791203662,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=49d0805dfcac39242942c0f980cec058d5f35d3223e05b6f8182c978fd94bd6b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d468bf82570fe19a818c",
          "headline": "Nvidia, Broadcom, Micron, AMD, Intel 및 Lam Research에 32.4%를 투자한 반면 VOO는 14.8%에 불과한 저비용 Vanguard ETF를 만나보세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791197400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0cf215ea487392e67e586be62096cb6b8d47e93ddaf02471c8e9a3ec0ce5353",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "11205f880c9a48b541f5",
          "headline": "Intel의 Terafab 기회가 붐비고 있습니다: Musk, Taiwan Semiconductor와의 대화 확인",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791193583,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12820259cbbd0ad7cb78509c77220e1273546b442108d2adde800791fd6ee6f0",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c895b69475d91820b1bc",
          "headline": "Broadcom 대 Intel: 수익 추세가 투자자에게 이러한 인공 지능 회사에 대해 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791156988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33b13c9c8e3f454a3825c599f3eb42a30c565f632e8ec831e040a0d5c58c6893",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "205b0ac8fe33da5d32c3",
          "headline": "인텔이 아닙니다. 엔비디아가 아닙니다. 월스트리트가 궁극의 AI \"픽 앤 셔블(Picks-and-Shovels)\"이라고 부르는 2조 4천억 달러 규모의 칩 제조사",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791102000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=654a1658fd6ce4b1694951fc16145396281ff1c6fb6acd966b4d6143694ef761",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791300900,
      "signal": "주의 강화",
      "netScore": -4.96,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.22,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.7,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.45,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.22,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "e18a93f6ef2968b6bc18",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 칩 주식을 1개만 사고 보유할 수 있다면 이 주식이 될 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791300900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f33a6af72c9567f9e0743bc2124c14d5b16042fb058ea6502e53ccb09e538fc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5696afeb82bff02403db",
          "headline": "Nvidia vs. Taiwan Semiconductor Manufacturing: 2026년에는 어떤 기술 주식을 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791245034,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c457f426c0c1dd3ca206841b88bbc4fcdb3237318871a4da216a6e0f18e13700",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "07ca49a0c2939af401dc",
          "headline": "Elon Musk는 TSMC와 Terafab 대화를 확인했습니다. 인텔은 유일한 칩 파트너로 선정되었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791237421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa7639a3c3a678974d5c11023c41de02bbca0849f0cd6e88e4114867505ad50e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0f2ce2093088bf00e4d0",
          "headline": "인텔, 머스크 신호로 TSMC가 파운드리 복귀에 대한 \"후퇴\"인 Terafab에 합류할 수 있음",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791213596,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bc4f44b9b32cb16abafa2c78c8c27398729d44e3ec373f9001db96b32766a4a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bcd59098a90f7c99b244",
          "headline": "Elon Musk가 대만 반도체가 Terafab에 합류할 수 있다는 신호를 보내면서 Intel은 4% 하락했습니다. AMD 전표, NVIDIA는 꾸준함 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791203662,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=49d0805dfcac39242942c0f980cec058d5f35d3223e05b6f8182c978fd94bd6b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791291121,
      "signal": "주의 강화",
      "netScore": -2.52,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.35,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -0.7,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.7,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "a5d12609aed8c8aa6781",
          "headline": "ASML 대 Nvidia: 2026년에는 어느 AI 반도체 주식이 더 나은 매수인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791291121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb8967d5822f98a5492de366248d013aff0fe425811a6f0147f719f5f07c3881",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "101f65a76e1051a8bb74",
          "headline": "ASML은 고급 칩 제조 장비 분야에서 진정한 경쟁자가 없습니다. 오늘 투자한 1,000달러의 2030년 가치는 다음과 같습니다.",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1791192120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4fcd9b0b071cd0ee0f2bb65ec8fbad0d934a5102c840ab68bed0acb286b2bd5",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791303602,
      "signal": "우호적 변화",
      "netScore": 3.7,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.27,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.87,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "67fec3579c380b9cf5e8",
          "headline": "Applied Materials vs. Nvidia: 2026년에는 어떤 칩 주식을 구매하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791303602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90bebc3cbc67f1096fd2ecde167735fc1614a5ce197356e38efb3d3ad8554904",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "08ae54924121fb348071",
          "headline": "Applied Materials(AMAT)는 새로운 AI 칩 메모리 및 패키징 파트너십 발표 후 11.4% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791295527,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=851222c823fb00da5a3c24e852e31775b7238613930297191a3a3e21ee440a72",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "81a0d52e5cebfa2fab89",
          "headline": "어플라이드 머티어리얼즈와 인텔, AI 기반 컴퓨팅을 위한 칩 제조 혁신 가속화를 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791291600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a655c1feb080a90a0f88856784fb390c4e0a4707bfd075f4051ca0211c5db40",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32676b5139be9522ea2a",
          "headline": "어플라이드 머티어리얼즈와 인텔, 트랜지스터, 인터커넥트, 패키징 기술을 위한 칩 제조 혁신 개발을 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791277324,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b80361cecafd3b0980c83f0f7e48bfc62790b9466f9fce5b1721ac5952dcce61",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791197400,
      "signal": "중립·확인 대기",
      "netScore": -1.26,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.35,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.35,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -0.35,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.35,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "d468bf82570fe19a818c",
          "headline": "Nvidia, Broadcom, Micron, AMD, Intel 및 Lam Research에 32.4%를 투자한 반면 VOO는 14.8%에 불과한 저비용 Vanguard ETF를 만나보세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791197400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0cf215ea487392e67e586be62096cb6b8d47e93ddaf02471c8e9a3ec0ce5353",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791212628,
      "signal": "중립·확인 대기",
      "netScore": 1.4,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.7,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.35,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "4bfab5815be5875a4a0b",
          "headline": "KLA의 공급 제약이 완화될 것으로 예상되며 주요 로직 혼합이 순풍이 될 것이라고 Morgan Stanley가 밝혔습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791212628,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b4eddced9423510910075ecf94903587196f895bc8050fe99b04164c722f919",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MU": {
      "ticker": "MU",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791316497,
      "signal": "우호적 변화",
      "netScore": 8.17,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.45,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.35,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 5,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "c6aff69e09eaa91eb95d",
          "headline": "Marvell, 투자자 데이에서 2031 회계연도 매출 목표 상향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791316497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3bb6e969e746963ce54baac0849b1c470c4ae77a71a436cc245c61ea1f5db5e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "802591f84846fdd33845",
          "headline": "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 4조 7500억 달러로 증가했습니다. John Ternus가 이끄는 Apple의 다음 장에 베팅할 때 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791306720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec6f881fc469376cf38571cf8493b05b57d9365b22e179702e1a1c853e21e423",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "e3007994e6041ecde782",
          "headline": "SK하이닉스, 수익 4% 하락 골드만삭스가 재조정을 선호한다고 말하기 전 주의; SanDisk는 2% 하락, Micron은 확고히 유지",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791305979,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=547005e71eff3008bc34ae5604e43da34dbc21f23cd0c5d0ae70215641ff6138",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ec343632477a3019f99f",
          "headline": "임베디드 시스템 - 글로벌 전략 비즈니스 보고서: Intel, Qualcomm, NXP Semiconductors 및 STMicroelectronics가 AI 및 IoT 파괴를 가속화함에 따라 2032년까지 710억 달러 성장 달성",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b20d74487d12ee8348f9eab77dabff4b7549dba9988236e66b36d49c0c0254a3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "0c0a73112d58c12cd52e",
          "headline": "하이브리드 정보 기술(IT) 관리 시장 글로벌 보고서 2026 | Dell, Cisco, Oracle, ServiceNow 및 Datadog을 통해 1,148억 4천만 달러 규모의 AIOps 및 클라우드 수요를 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a22d0643667e428386ab621268c00d0c0be9614e5394900256a2989ef1298db8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "bf5d5804141eade971e7",
          "headline": "Amazon의 250달러: 10억 달러 규모의 \"함께 구축\" 데이터 센터 추진은 이미 역효과를 낳고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791305122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c07610cc2fd82441f3317db59ef719e2dc8990ed21a2689bdc616e104e9a7c41",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "69ccb1e83bf22dbafc86",
          "headline": "Toshiba의 드라이브 확장이 그룹을 강타함에 따라 Western Digital이 6% 하락했습니다. Seagate는 8% 하락, Micron은 보합세 유지",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791301929,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11074b2fd5407e2ce70b7bff5652619813f1de40dd70c8785403a1e2e28b9b79",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e18a93f6ef2968b6bc18",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 2030년까지 인공지능(AI) 칩 주식을 1개만 사고 보유할 수 있다면 이 주식이 될 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791300900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f33a6af72c9567f9e0743bc2124c14d5b16042fb058ea6502e53ccb09e538fc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ac6807a52b486ec6f750",
          "headline": "Netlist와 Micron, 6억 달러 규모의 특허 라이선스 및 합의에 합의",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791290850,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c61980235bcca7db2cf0726fa2824b88be294a375078daaf961f7c034a491f13",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f16c7fa4f337d74197d4",
          "headline": "Netlist와 Micron, 특허 라이센스 및 합의 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791288000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05077cd5eb6d3e44566f5c58cd408b5eb22d18a92aa2d287fb2bddd33fe7de70",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "cb6a4f017bd7ce10abbc",
          "headline": "22%: Apple(AAPL) 주주에게 가장 중요한 숫자",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791285600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=335897208476f1904381823ddc2b672d59e451c9f59bd4da898e42dd370fdd78",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "ef18a9c38901a02cf117",
          "headline": "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 급격한 10월 랠리 이후 시판 전 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791277971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa475f9363e423a2f98742f7531b2d0eb385a9a9efddf15069bd64880d0c5bd8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 38,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791305979,
      "signal": "우호적 변화",
      "netScore": 5.04,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.92,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.85,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.05,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -0.52,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.53,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "e3007994e6041ecde782",
          "headline": "SK하이닉스, 수익 4% 하락 골드만삭스가 재조정을 선호한다고 말하기 전 주의; SanDisk는 2% 하락, Micron은 확고히 유지",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791305979,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=547005e71eff3008bc34ae5604e43da34dbc21f23cd0c5d0ae70215641ff6138",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ef18a9c38901a02cf117",
          "headline": "INTC, AMD, MU, SNDK, SOXX: 칩, 메모리 주식은 급격한 10월 랠리 이후 시판 전 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791277971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aa475f9363e423a2f98742f7531b2d0eb385a9a9efddf15069bd64880d0c5bd8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9d1079a5e3775f8543f7",
          "headline": "Sandisk: 고객 자금이 계약 붐을 따라가고 있습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791261646,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8028cecc9c19b3e0ba565f7bf9d1e252d183f6ef91dc6bfc8e9ae564a321aeff",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "77b9f16834cb0d9c2db9",
          "headline": "메모리 수요가 2030년까지 유지된다면 Sandisk 주식의 10,000달러 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791239700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd8e7c904ebcd38461a7f1cb6abee974bb641ffb1ff2346a56dd7193b826a37e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d177312e9c03b832d748",
          "headline": "Sandisk 주식의 가치가 12개월 안에 두 배로 오를 수 있을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791223201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02bb8be8aa9d7627365708d8119d777d3652adb8f7cbaa711d613ae6e9efe1cb",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "25eebbdbd0a780349d38",
          "headline": "역사에 따르면 Sandisk 주식이 곧 폭락할 것으로 보입니다. 그런 일이 일어나지 않는 이유는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791194640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a913655f7abc4ee13173bdf61f531de1368c50a4c5d9d9bebd6f12ad75604a86",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "98c3f6a1aafc4215f1be",
          "headline": "Micron 또는 Sandisk: 향후 5년 동안 하나만 소유할 수 있다면 이 제품을 선택하겠습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791119760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ffa793f246d5afc224e95d4773f444e165d05586bf43c748e2a111e80466efb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791313674,
      "signal": "주의 강화",
      "netScore": -3.16,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.35,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.15,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.23,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "d9952b85779fd4bbca42",
          "headline": "Nvidia가 지원하는 클라우드 컴퓨팅 회사 Lambda는 IPO를 앞두고 최종 라운드에서 40억 달러를 모금할 것으로 보입니다: 보고서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791313674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a950b12175464e362e017872d96e02cf8657a0edfaafc0ae8f32b5f8be53e41",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "802591f84846fdd33845",
          "headline": "Apple의 시장 가치는 Tim Cook이 CEO로 재임한 15년 동안 3,500억 달러에서 4조 7500억 달러로 증가했습니다. John Ternus가 이끄는 Apple의 다음 장에 베팅할 때 성장 곡선이 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791306720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec6f881fc469376cf38571cf8493b05b57d9365b22e179702e1a1c853e21e423",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "69ccb1e83bf22dbafc86",
          "headline": "Toshiba의 드라이브 확장이 그룹을 강타함에 따라 Western Digital이 6% 하락했습니다. Seagate는 8% 하락, Micron은 보합세 유지",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791301929,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11074b2fd5407e2ce70b7bff5652619813f1de40dd70c8785403a1e2e28b9b79",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cb6a4f017bd7ce10abbc",
          "headline": "22%: Apple(AAPL) 주주에게 가장 중요한 숫자",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791285600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=335897208476f1904381823ddc2b672d59e451c9f59bd4da898e42dd370fdd78",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "51055ef8bed01e64776c",
          "headline": "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791257308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7035d6f9bfb2b24033b85023fb3a1c8827b1f03fc5c6f4f1eb02cc7d64be976d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bb2b339ed8d047015cd6",
          "headline": "분석가들이 Toshiba 생산 능력 확장에 대한 우려를 경시함에 따라 WDC, STX 주식은 시판 전 반등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791190192,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fea471596a434a6529956a6cea281f8f25a3bfaa554f1d8887fb1cd53a9f393b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "228aa4af13f683625460",
          "headline": "지난주 NVDA, HPE, CRWD 주식이 52주 최고가로 상승한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791172073,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee67bd0e06935fbc2c06e0e33f19793f152ace50112b65e1ca53b37d6cb83335",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4b978de00ba525100d92",
          "headline": "MU, HPE, AMZN, META, SPCX: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791165291,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=941d7de09ad8782ad8a787b14da4d142eb94b32a9765eae533675260f14b4bf7",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791294777,
      "signal": "주의 강화",
      "netScore": -2.31,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.05,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -0.52,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.05,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "0081a110c95bc9f14506",
          "headline": "Applied Optoelectronics는 6억 달러 규모의 주식 판매 프로그램이 종료되면서 6% 급등; Lumentum이 랠리를 펼치고 Corning Edges가 더 높아졌습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791294777,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51a2738c03f5599ac3dfbc10df735600364f9c8a8485a2f3ce8b1eb23f624af4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791311479,
      "signal": "우호적 변화",
      "netScore": 10,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 5,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 5,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "917ad067cf1cc10f1530",
          "headline": "구글이 원자력에 43억 달러를 투자한 것은 아마존이 투자한 지 불과 며칠 만에 이루어졌습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791310497,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=645fba0295f899f90036130559b5d3476ef36615337a2c0084a3946a3acb24d2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e7d4190a7288623a5223",
          "headline": "구글, 원자력 발전을 위한 Constellation Energy 파업 계약",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791304281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28380b6170d99638d5dc37706d946c6908e0aaa412c188423614957ac393c426",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4e19ec4aa5796617d97f",
          "headline": "Constellation Energy는 43억 달러 규모의 Google 원자력 거래 '모델'로 14% 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791302632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7056f0cc91dbae4d6d9a0235eabb47e697e13a8468debb2e3a90264338cfde32",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a6ef8db602d8cafb2ac6",
          "headline": "S&P 500의 Vistra와 Constellation, AI 원자력 거래로 급증",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791299240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18186b767c3a9f684f7a16f6bdaecbe99ba6843b5ad2ed2634d73ac1c2cd7238",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8df3775db4eb51fe8b84",
          "headline": "Constellation Energy는 890MW에 대한 Google Nuclear 거래로 12% 급등했습니다. 비스트라 8% 상승, 탈렌 에너지 7% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791295560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffeac571bad1ba2b1178d656e9dc68ada6313e464ac8f995437899d55fd6bd0f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1551ec9dde8018ffb40b",
          "headline": "Google과 Constellation, 3.6GW 계약 체결: 더 큰 절반은 원자력이 아님",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791294041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=93a7dccb99d34c679f2e18826a66ceabeee160c2ae76da9d513fc72e5d8fa2c0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1e07bec85e986b5a870c",
          "headline": "Google과 Constellation Energy는 10억 달러 규모의 원자력 계약을 체결했지만 이번 거래는 독특하지 않습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791294022,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29dbe8d231c4e2b6b275de100fdf06358b0c3193cbe45b1c5aefa07d779e4008",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9d85e9c8ff77086405cf",
          "headline": "Google Nuke 거래로 Constellation Energy가 S&P 500의 정상에 올랐습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791293966,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e18ab404af9c9282e2757715b08eae41004e04bad1a5a25594051ebec36d6e3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cec7206d8bfed1fdf107",
          "headline": "구글, AI 구축 강화 위해 Constellation Energy와 20년 원자력 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791292264,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e88aa16940f3f97f9d1bb71d1f46355aaa9a5b7a04a3eae38841ee8765e70abb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7f92dd0c31321614cc4f",
          "headline": "Constellation Energy 주식은 Google과의 20년 전력 계약으로 급등합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791289925,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e469c3660ec999b3be33408e4dd2990d7a41b4aca2cbaa8904319b45d18fe516",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9fcdbe782dff7b321167",
          "headline": "나스닥, 다우 선물이 프리마켓 상승하는 이유는 무엇입니까? SPCX, NVDA, CEG, AMD, ORCL, NOK 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791275977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b2690aaa98e03f5a2f2511a4b46b97fd79dfffb05f92ff936c81ada02f72b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791311479,
      "signal": "우호적 변화",
      "netScore": 9.02,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.8,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 1.22,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "c0995dc72dd6012acae6",
          "headline": "CEG, VST, TLN 점프: Google의 파워 딜로 핵 랠리 촉발",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791311479,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2530723524186edfad2fd6e733b0c13c1a155eaed32777e4940ccfa634595340",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a6ef8db602d8cafb2ac6",
          "headline": "S&P 500의 Vistra와 Constellation, AI 원자력 거래로 급증",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791299240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18186b767c3a9f684f7a16f6bdaecbe99ba6843b5ad2ed2634d73ac1c2cd7238",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8df3775db4eb51fe8b84",
          "headline": "Constellation Energy는 890MW에 대한 Google Nuclear 거래로 12% 급등했습니다. 비스트라 8% 상승, 탈렌 에너지 7% 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791295560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffeac571bad1ba2b1178d656e9dc68ada6313e464ac8f995437899d55fd6bd0f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9fcdbe782dff7b321167",
          "headline": "나스닥, 다우 선물이 프리마켓 상승하는 이유는 무엇입니까? SPCX, NVDA, CEG, AMD, ORCL, NOK 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791275977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b2690aaa98e03f5a2f2511a4b46b97fd79dfffb05f92ff936c81ada02f72b1d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "51055ef8bed01e64776c",
          "headline": "오늘 NVDA, TSM, WBD 주식이 52주 최고치를 기록한 이유는 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791257308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7035d6f9bfb2b24033b85023fb3a1c8827b1f03fc5c6f4f1eb02cc7d64be976d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9822db0049065331c31c",
          "headline": "귀하의 Vistra 주식 논제는 한쪽 끝이 느슨합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791214812,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67fb1a8124e82db40c5bd59645795056cd1d04c7071fce2ddf1c028c083820c3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bb2b339ed8d047015cd6",
          "headline": "분석가들이 Toshiba 생산 능력 확장에 대한 우려를 경시함에 따라 WDC, STX 주식은 시판 전 반등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791190192,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fea471596a434a6529956a6cea281f8f25a3bfaa554f1d8887fb1cd53a9f393b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "68073dce831af6aa242b",
          "headline": "오늘의 주식 시장: 이란이 호르무즈 해협을 재개하기 위한 조건을 유지함에 따라 다우 선물 상승, S&P 500, 나스닥 100 하락 - SPCX, QCOM, VST 초점(업데이트됨)",
          "eventLabel": "실적 발표",
          "publishedAt": 1791189826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9a13f8742872fd1a2409dc41a364d59ce2b893949dca9c912bac8c56a3f1e6a9",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "369eb409646a648a8b54",
          "headline": "VST 대 CEG: 어느 원자력 함대 재고가 더 나은 선택입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791187048,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3291924403501aeab4cde4ff9d60a17c98f9563a0bae83f3d37ee82358285bf",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "52fab82ac55ba630a223",
          "headline": "QCOM, AI 칩 기술을 다루는 중국 화웨이와의 특허 계약 후 하룻밤 사이에 이익 획득",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791186054,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6b5abae5f2325cc5ec0edd3c48655499f7d3b15bf5d11960745306f36d8b9e2e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e80c3c0e246225d79c89",
          "headline": "VST SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1791126000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126038468/ef20083016_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791126000.0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "ab49fcffb344e4cf65b9",
          "headline": "ETN SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1791126000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1551182/000114036126038523/ef20083229_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VRT": {
      "ticker": "VRT",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791273300,
      "signal": "중립·확인 대기",
      "netScore": -1.87,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.52,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.52,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -0.52,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.52,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "3f1c2827c47d2df489ee",
          "headline": "간과된 AI 주식은 Nvidia와 Palantir를 능가할 준비가 되어 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791273300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d391a88a99329ad4bbdb966d4e2921aabe0c88baae31f89d2ccb7824c434058",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791208059,
      "signal": "중립·확인 대기",
      "netScore": 0.7,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.35,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.35,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "789d0e1c2acb7a6bc75a",
          "headline": "Baird가 Modine Manufacturing Company(MOD)에 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791208059,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6222c68187b1d151b869710db4e0db9fa7024fb46c3717e01febd82e25e5350",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "STX": {
      "ticker": "STX",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791301929,
      "signal": "중립·확인 대기",
      "netScore": 0.28,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.05,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.22,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.17,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "69ccb1e83bf22dbafc86",
          "headline": "Toshiba의 드라이브 확장이 그룹을 강타함에 따라 Western Digital이 6% 하락했습니다. Seagate는 8% 하락, Micron은 보합세 유지",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791301929,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11074b2fd5407e2ce70b7bff5652619813f1de40dd70c8785403a1e2e28b9b79",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "45a597627af7fda86b21",
          "headline": "Seagate는 AI의 가장 중요한 트렌드 중 하나를 타고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791223255,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74056ae461c3e419216192b1fd6ccaf73d94e1491903b2caabca93bc71f9dd39",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "98f503f0aaa51b7e09c0",
          "headline": "Seagate는 주식이 소진되기 전에 무엇을 말했습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791216105,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0fadcbbe64b7208e7b5fc68f253b8805960dbaef966c0b0e36135bd500a5dae",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bb2b339ed8d047015cd6",
          "headline": "분석가들이 Toshiba 생산 능력 확장에 대한 우려를 경시함에 따라 WDC, STX 주식은 시판 전 반등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791190192,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fea471596a434a6529956a6cea281f8f25a3bfaa554f1d8887fb1cd53a9f393b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8dc96eb8841102bddfed",
          "headline": "Western Digital vs. Seagate: 향후 5년 동안 소유하기에 더 나은 AI 인프라 주식은 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791132600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d88f829b47f589c546a4a90e987a1b44da924813b1ff82b4438e43208f0657d",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "FIX": {
      "ticker": "FIX",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 1791112920,
      "signal": "우호적 변화",
      "netScore": 2.09,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.52,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "9d9108c97a5869b68911",
          "headline": "Comfort Systems USA는 거의 아무도 소유하지 않는 1,600달러 규모의 주식입니다. 이것이 시장을 계속 무너뜨리는 이유입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791112920,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=901a21fdb2fa0513211bbf0c5d7d9ba9cad8e0c903de59b3fadb5cc1c8273018",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "BE": {
      "ticker": "BE",
      "updatedAt": 1791324398.8932636,
      "dataAsOf": 0,
      "signal": "중립·확인 대기",
      "netScore": 0.0,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 0.0,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.0,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    }
  }
};
