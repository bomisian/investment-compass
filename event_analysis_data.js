// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1791889069.1587448,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791852227,
      "signal": "중립·확인 대기",
      "netScore": -1.4,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.35,
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
          "score": -1.4,
          "level": "주의"
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
          "eventId": "c00eb544c7e2e062d49b",
          "headline": "Microsoft, NYC Office 프로젝트에서 소송으로부터 보호를 위해 JLL을 고소",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791852227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91a57711c5faf181a3e65655320b41340b2ce1a50d38144d05eaa2acc11d638d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "93784df3921c1313a783",
          "headline": "S&P 500, Nasdaq 100은 칩 제조업체 약세로 인해 하락했고 Salesforce는 Dow에 도움을 얻었습니다 — META, MSFT, BMBL, CRM, SNAP 초점",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791846618,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6357c13960c505bb16627b06cf8522405c0157e57a8d67035aa5d3bb2dc3c19",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3d789f71e0425f274850",
          "headline": "Maia 300: Microsoft는 금융에 도움이 되는 컴퓨팅 임대주 모델로부터의 출구를 구축합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791833401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5da460903b120e03641777b69800bb4b912d7c703c7891759803f237b9626e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "72fb61884b35ae93706e",
          "headline": "알파벳이 아닙니다. 아마존이 아닙니다. Microsoft는 Big Tech의 가장 저렴한 가치로 거래됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791749640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e52232f63d589a8b81f66bf8d77a2f620fbd46fb151b456cacac026497cef4f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "11058e5ade47cefe74fd",
          "headline": "S&P 500, Nasdaq 100, Dow End Week High, 트레이더들이 수익 시즌을 주목하고 있음 — ​​MSFT, NFLX, SPCX, ASTS In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791586391,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c4e446abd334f8092f8ee0a0068885b5977f2f5175ab4b843013a4fece9ea30",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8f00fb7ee01d74ac2bad",
          "headline": "S&P 500, Nasdaq 100, Dow End Week High, 트레이더들이 수익 시즌을 주목하고 있음 — ​​MSFT, NFLX, SPCX, ASTS In Focus",
          "eventLabel": "실적 발표",
          "publishedAt": 1791586391,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c4e446abd334f8092f8ee0a0068885b5977f2f5175ab4b843013a4fece9ea30",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "693e71438c51e7534a96",
          "headline": "JD Vance는 Microsoft가 해고된 미국인 6,000명을 '외국 계약 하인'으로 교환했다고 말하면서 Microsoft를 비난했습니다. Microsoft는 이에 응합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791582300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5784478142de3f23c4ed8c7938cd3f2a8ce9affb083b861f37759b537222d41b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b9f99afea91287ea5daa",
          "headline": "Microsoft vs. Alphabet: 자본 지출 후 어느 AI 클라우드 주식이 더 저렴합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791580827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e46aa14aebfbe2956ee8255726d8af6a69e90a7b7afe9d82fde9e9856f2a09d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e76994627a4248cadc13",
          "headline": "Arista Networks, 사상 최고 기록 달성",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791557400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f786614fdf34dea0459b2e0759df2de39d385e8e48b11880d076dc411316701",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791852227,
      "signal": "중립·확인 대기",
      "netScore": -0.43,
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
          "score": 0.18,
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
          "eventId": "c00eb544c7e2e062d49b",
          "headline": "Microsoft, NYC Office 프로젝트에서 소송으로부터 보호를 위해 JLL을 고소",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791852227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91a57711c5faf181a3e65655320b41340b2ce1a50d38144d05eaa2acc11d638d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6a374a32dbefea31955a",
          "headline": "알파벳 대 메타 플랫폼: 2026년에는 어느 주식을 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791851501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=597e884cc638da374b580d2fd62839ae6cdf721528c4de97b02e87cd1f91dc3a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6308ff1eab1849601f1c",
          "headline": "Alphabet과 Nvidia에 동일하게 투자된 10,000달러는 2030년까지 이만큼 가치가 있을 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791841800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac3ad1c31f2e904129842dedfc3a722f17f4ac6d12c8ed4382cc5aff8c00ab94",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8a3f7895d1450acfa026",
          "headline": "Nvidia, AMD, Google, Meta가 데이터 센터 설계를 위한 글로벌 청사진을 위해 협력합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791817200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=500ae337a06221b2f3b8f19f12621a9da5d7312198c5a0ba2740463b4dc7496b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d2a571b91409053310b4",
          "headline": "Google과 Constellation이 3.6GW 거래에 서명하면서 주목을 받는 원자력 ETF",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791816480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ada70bb74ba4cbfdd8b1a7cb59ae2d5c44bcfa262db7955cb5c5e4351842352",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9be7c56de5f277140326",
          "headline": "Zacks 투자 아이디어 주요 내용: Qualcomm, Alphabet, Tesla, AMD, Amazon, Taiwan Semiconductor, NVIDIA, Intel, Apple, Broadcom 및 SpaceX",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791806760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b32edb09e61822e1df182f7d813ab3b9a0b6ff19bb137bb5cda166ece4db10d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d53cf95c4ae6071b87e8",
          "headline": "Stocktwits Power Watch: CEG가 Google 딜을 가방에 넣고 VST가 정부 자금을 확보하고 유틸리티 합병으로 불이 붙습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791801348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d2db8f587b0f2c87d09550cb482633845fb56a2c2dc8e9b99b5bfcec11d9915",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f8d5b4d28d5f7ad78aec",
          "headline": "Stocktwits Power Watch: CEG가 Google 딜을 가방에 넣고 VST가 정부 자금을 확보하고 유틸리티 합병으로 불이 붙습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791801348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d2db8f587b0f2c87d09550cb482633845fb56a2c2dc8e9b99b5bfcec11d9915",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cbb4e688eb4c3eff612e",
          "headline": "Stocktwits Power Watch: CEG가 Google 딜을 가방에 넣고 VST가 정부 자금을 확보하고 유틸리티 합병으로 불이 붙습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791801348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d2db8f587b0f2c87d09550cb482633845fb56a2c2dc8e9b99b5bfcec11d9915",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c344671637d00c598d64",
          "headline": "알파벳 주식은 지난 10월 이후 46% 상승했습니다. 아직도 매수인가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791727457,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8015f76a88e8b90c92e30dc0a91cdb5a1269afb2c755d56f00a3d54ddbce786a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "12588a05384b30acee25",
          "headline": "Alphabet(GOOGL)은 50억 달러의 Waymo 대출과 500억 달러의 AI 베팅을 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791648622,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15d4e383c6f8cfe12e94b3325cd165a34cb68ad14194efdb76c2fb917500a520",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1396485166a4bf4b6e69",
          "headline": "투자자는 Anthropic이 \"최초의\" 10조 달러 규모 회사가 될 수 있다고 예측합니다. Amazon + Google Payday에 대해 알아보세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791644737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=00b29d357e8dc8444cd964cf863dfef2da6fbc2297da88a442cc145cf2612d50",
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
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791859102,
      "signal": "우호적 변화",
      "netScore": 6.72,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.45,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.9,
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
          "score": -3.85,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 2.45,
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
          "eventId": "4fca8fb6daccf1614ef3",
          "headline": "Amazon.com vs. Alibaba: 2026년에는 어떤 소비재 주식이 더 나은 구매일까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791859102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48064109132f58a040e930be8cd887eecbf5682e9e48558ac5c1be87580d5f18",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "32f20db4bbf65e68dc08",
          "headline": "Amazon, AI 스타트업 Decart를 70억 달러에 인수하기 위해 협상 중인 것으로 알려짐",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791811796,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edbb122282e878e2554a0ec9df2a296c4ccc79fa6ccbae36916b25f3d9f02754",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "176430891b509a8b2992",
          "headline": "Amazon, AI 스타트업 Decart 인수를 위해 70억 달러 규모의 거래 협상",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791809948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5727c14986c22abb6ec223167d6f123254e07377eac49dece97962e2453297d1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9419c6f4f577dfc086e5",
          "headline": "브로드컴 대. 오라클: 누구의 AI 칩 부채 조달 계획이 더 나빠 보이는가?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791809133,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d17ccceb070fa276870ae7775c9b5dd1c7b938a3b865b673b2886c6f6d22e9f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "9be7c56de5f277140326",
          "headline": "Zacks 투자 아이디어 주요 내용: Qualcomm, Alphabet, Tesla, AMD, Amazon, Taiwan Semiconductor, NVIDIA, Intel, Apple, Broadcom 및 SpaceX",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791806760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b32edb09e61822e1df182f7d813ab3b9a0b6ff19bb137bb5cda166ece4db10d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aaf0a908fd6248cb1bf0",
          "headline": "Amazon, 잠재적인 70억 달러 거래로 Decart 인수 협상 중",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791796975,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c29e0195c0946a25206d6f77d82a277d0a379d1c9e12e370526a741f636673a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7bd6eb8e9e886ba7f814",
          "headline": "AMZN 주가 밤새 상승: Amazon은 Anthropic이 떠난 후 Decart AI에 대한 70억 달러 거래에 가까워졌다고 보고됨",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791773662,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b95eb2d2f47c3f58897ce6ab1a497520fca17d3ebd725496674a740df04420ee",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "72fb61884b35ae93706e",
          "headline": "알파벳이 아닙니다. 아마존이 아닙니다. Microsoft는 Big Tech의 가장 저렴한 가치로 거래됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791749640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e52232f63d589a8b81f66bf8d77a2f620fbd46fb151b456cacac026497cef4f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fac76d2f66fc653c477a",
          "headline": "아마존: 경제적 도전이 더 커짐(등급 하향)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791705049,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe7c7652392e179a25432fdc6f0e20526d665bc5fcfa8b38092e485acb2d9005",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "92f709f0c72c8a50b3ba",
          "headline": "Amazon, 새로운 태블릿 라인업 출시 직후 Alexa 리더십 개편",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791696386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b96e59e1b1a7e9c441eb647ebedd9356a07dff9928ebbbd5e59f625b6a3f1fda",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32881f98ea416a5dc873",
          "headline": "아마존 (AMZN) 은 투자자들이 $ 80억의 엔비디아 칩을 조달하기를 원합니다. AI 지출이 너무 무거워지고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791670286,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5439d0a6d4d5845f5c234a90752cc1486a967ee44ab685ae7416e3c9d2466ef7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1de8a93f944309d1edcd",
          "headline": "Amazon의 Thane 데이터 센터 싸움: 1,730억 달러의 Capex 예산 내 83억 달러의 계획",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791605990,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e25a8f94162fa4bd7408f2b98a9083ec20e97108e8655c0605d2a032b52c93b7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791851501,
      "signal": "주의 강화",
      "netScore": -4.9,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.18,
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
          "score": -1.05,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.92,
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
          "eventId": "6a374a32dbefea31955a",
          "headline": "알파벳 대 메타 플랫폼: 2026년에는 어느 주식을 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791851501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=597e884cc638da374b580d2fd62839ae6cdf721528c4de97b02e87cd1f91dc3a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "93784df3921c1313a783",
          "headline": "S&P 500, Nasdaq 100은 칩 제조업체 약세로 인해 하락했고 Salesforce는 Dow에 도움을 얻었습니다 — META, MSFT, BMBL, CRM, SNAP 초점",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791846618,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6357c13960c505bb16627b06cf8522405c0157e57a8d67035aa5d3bb2dc3c19",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8a3f7895d1450acfa026",
          "headline": "Nvidia, AMD, Google, Meta가 데이터 센터 설계를 위한 글로벌 청사진을 위해 협력합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791817200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=500ae337a06221b2f3b8f19f12621a9da5d7312198c5a0ba2740463b4dc7496b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9e22a53304f9fe8463b0",
          "headline": "“그냥 계산해 보세요”: Meta의 Muse는 1억 명의 사용자에게 서비스를 제공하려면 28억 달러의 컴퓨팅이 필요합니다. 페이스북은 30억 달러를 가지고 있다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791720243,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e9c2441c745483784a287f9391663e5bca9d5ccda4f151f6a369062ede5a5d5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1cef75d03e1220815192",
          "headline": "Meta는 TikTok 소유자 ByteDance의 7개국 광고 금지: “우리는 경쟁사의 광고를 게재할 필요가 없습니다”",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1791604195,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3a50f6ba37829d96489fe074e3b9ca2dd04d0cc3e300485e30ce3469ca425278",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c45a469bebeba7534619",
          "headline": "MAG 7의 목소리: 이번 주에 Nvidia, Microsoft, Alphabet, Meta가 AI를 어떻게 변화시켰는가",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791602797,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ed97e542b4f63c0d4753236fb6f6abbb87923357a06e16b4a65ec207a3f3edd",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e76994627a4248cadc13",
          "headline": "Arista Networks, 사상 최고 기록 달성",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791557400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f786614fdf34dea0459b2e0759df2de39d385e8e48b11880d076dc411316701",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791837000,
      "signal": "주의 강화",
      "netScore": -7.5,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": -1.75,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -3.15,
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
          "eventId": "5b6c373d35e61f5145a9",
          "headline": "애플 공동 창업자의 잊혀진 회사, 나스닥 거래 성사",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791837000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e530db2028221496e0e623374c88926859cd3657560d8bd11857c81dd46a3a35",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9be7c56de5f277140326",
          "headline": "Zacks 투자 아이디어 주요 내용: Qualcomm, Alphabet, Tesla, AMD, Amazon, Taiwan Semiconductor, NVIDIA, Intel, Apple, Broadcom 및 SpaceX",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791806760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b32edb09e61822e1df182f7d813ab3b9a0b6ff19bb137bb5cda166ece4db10d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "292532fc6c64dbc75bf1",
          "headline": "10월 29일 수익을 앞두고 Apple의 340달러 가격은 얼마나 지속 가능한가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791803756,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cdddd3e86918ba916b234d8147dca0d43e90db988209864f3d6fda4a335ac7ca",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "dc3ba963583b352a19ce",
          "headline": "이번 주 최고 주식 추천을 위해 3개의 AI 챗봇을 요청했습니다 - TSMC 수익에 2개의 베팅",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791797299,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7cf02144666aab549cf32420bc5fd4e1102f01fc8530821b0682ef8d9caa692",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "ff356ceb5cc350e0556b",
          "headline": "새로운 Apple TV 및 HomePod Mini 예상: AAPL 재고의 중요성",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791785772,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73f67e18f0b266d32afb1aa7e5048ea8d434f16721e732678fe19dd1e0fcc939",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "e2540d877ed8ba628d2b",
          "headline": "Stocktwits Tech Watch: ASML, 이번 주 TSMC 실적 및 Apple의 다음 홈 플레이",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791781422,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=afee46c57656b64ce0cb815ca12f5ac0791b06c7b707bab2aaf82d49736fc3da",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "378f987a2a1a7b2646b8",
          "headline": "Apple (AAPL) 은 새로운 CEO, 팟캐스트 거래 및 새로운 전화 위협으로 재설정됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791775027,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3c92959267a2a0cab96b7e662b84c81a11a1206acb8c10a3bbe86c0ffc2d529c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "72fb61884b35ae93706e",
          "headline": "알파벳이 아닙니다. 아마존이 아닙니다. Microsoft는 Big Tech의 가장 저렴한 가치로 거래됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791749640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e52232f63d589a8b81f66bf8d77a2f620fbd46fb151b456cacac026497cef4f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6fd72b72910a98868248",
          "headline": "Apple은 지속적으로 스마트 홈 경쟁에서 패했습니다. LG와의 새로운 파트너십이 이를 바꿀 수 있다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791739581,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a6778f04906f3d0f94c7e7cdb7777307cfc6cca81306a9ea0b7f05cbbb3a749",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c344671637d00c598d64",
          "headline": "알파벳 주식은 지난 10월 이후 46% 상승했습니다. 아직도 매수인가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791727457,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8015f76a88e8b90c92e30dc0a91cdb5a1269afb2c755d56f00a3d54ddbce786a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "92f709f0c72c8a50b3ba",
          "headline": "Amazon, 새로운 태블릿 라인업 출시 직후 Alexa 리더십 개편",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791696386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b96e59e1b1a7e9c441eb647ebedd9356a07dff9928ebbbd5e59f625b6a3f1fda",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "2f65e102bc9fb778eb49",
          "headline": "Apple, 개인 맞춤형 팟캐스트 스타트업 Huxe의 팀 및 라이선스 기술 채용 계약 공개",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791661800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73f1acd8b94f740669446405979ca976477da6f6f9dcf10d48bf3474cd47bbd0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791811867,
      "signal": "주의 강화",
      "netScore": -5.66,
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
          "score": -3.15,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.92,
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
          "eventId": "b8e5be28d94ecc72f569",
          "headline": "미국이 새로운 안전 조사를 실시함에 따라 Tesla Robotaxis는 학교 구역에서 과속 혐의로 기소되었습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791811867,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bddecdaa68e7754b3878810542f7c2c70fce4c87b7d110ca6cc5c00d229eb9da",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9be7c56de5f277140326",
          "headline": "Zacks 투자 아이디어 주요 내용: Qualcomm, Alphabet, Tesla, AMD, Amazon, Taiwan Semiconductor, NVIDIA, Intel, Apple, Broadcom 및 SpaceX",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791806760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b32edb09e61822e1df182f7d813ab3b9a0b6ff19bb137bb5cda166ece4db10d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "81aecbc0f3142d9bb97d",
          "headline": "SPCX, TSM, APLD, AMZN, TSLA: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791771230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=68ac22fff068edbd38e4f50bb1f20b289b4fc9740a4311a69f4b58ae2e1ed3c6",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "899ab6b976820eebeb17",
          "headline": "최근 납품 상황은 잊어버리세요: Tesla 수익에 대한 투자자의 반응을 결정하는 주요 숫자는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791752400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db472ad82dcab6773385554482d6b9c631cb1c016f31a90c77992662879c0f65",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "998a1aadf4f6cebfc9a8",
          "headline": "Benzinga 황소와 곰: Nvidia, Lumentum, Planet Labs",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791619211,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fac35fbefcdcb63fbb568e22b371f3c4e10a546d16b71dde0c5a14ed2868bb8b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "36a8a2e960f9a005b82a",
          "headline": "Tesla는 유럽의 브랜드 변경으로 완전 자율 주행 이름이 삭제되면서 3% 상승합니다. 리비안 이즈(Rivian Eases), 루시드 틱스 업(Lucid Ticks Up)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791557744,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f3fdaf1aef71c14c17c968b989f101123c1be5919a6314bea1e83c82552c98e",
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
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791809133,
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
          "eventId": "9419c6f4f577dfc086e5",
          "headline": "브로드컴 대. 오라클: 누구의 AI 칩 부채 조달 계획이 더 나빠 보이는가?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791809133,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d17ccceb070fa276870ae7775c9b5dd1c7b938a3b865b673b2886c6f6d22e9f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791846618,
      "signal": "중립·확인 대기",
      "netScore": -1.61,
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
          "eventId": "93784df3921c1313a783",
          "headline": "S&P 500, Nasdaq 100은 칩 제조업체 약세로 인해 하락했고 Salesforce는 Dow에 도움을 얻었습니다 — META, MSFT, BMBL, CRM, SNAP 초점",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791846618,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6357c13960c505bb16627b06cf8522405c0157e57a8d67035aa5d3bb2dc3c19",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f936f6c34499d7ea1519",
          "headline": "Salesforce는 Bank of America 이중 업그레이드를 3% 향상하여 $285 목표로 구매합니다. ServiceNow 3% 상승, Palantir는 안정적 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791812015,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a258d7684a16d146f726c3422d6110584e763e61f4a30988757bee7b2ebe0156",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791819549,
      "signal": "중립·확인 대기",
      "netScore": -0.77,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
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
          "eventId": "2b226d1d8ac0ce4f9a78",
          "headline": "Ondas, Palantir와 협력하여 국방 임무를 위한 새로운 AI 회사 설립 – Regna AI에 대해 알아야 할 모든 것",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791819549,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a76eb6fc72068ad423ecf5b8d7f09ea5ff42219bc966571f719523afd60769a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6e6866e7075ec7ae8f5",
          "headline": "Palantir: 3분기가 다가옴에 따라 기록적인 최고치를 유지하며 강세 유지",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791708300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfa8548a9ee0ae30887f60a8689fb9e593bdf0bc0fdf6505b7972e58dc3c4305",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f40c54370accc49f3eb8",
          "headline": "Palantir 주식을 구매하기에는 너무 늦었나요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791658200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ba8cd1956b3d0fe6f23703ccbae1213d97b7f9b49b00a8fef444d7dd5db09e29",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9d9622e8f7bfb0211ddc",
          "headline": "Palantir Technologies(PLTR)는 월스트리트 업그레이드 및 새로운 주권 AI 파트너십 이후 10.8% 상승했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791605733,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c2fc53883a6e21b6f319a958c09b712dbded835d7b73f031e5a47a7bd3f69a47",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791860176,
      "signal": "우호적 변화",
      "netScore": 8.92,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
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
          "score": -2.62,
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
          "eventId": "8c85fef84e7a6da899a8",
          "headline": "AAOI, LITE, COHR 밤새 매각 연장: AI 자금 조달에 대한 우려로 광 네트워킹 거래가 타격을 입었지만 소매점은 반등",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791860176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=135979aeff99ad364c027b25218b0fc7cdd62e58e59471b65c1f43c1e358537d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "b78c249462d03b9d36b8",
          "headline": "마이크로소프트는 이제 3세대의 자체 AI 칩을 보유하게 되었습니다. Nvidia는 여전히 매수할 칩 주식입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791856982,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12d9c39609013491a55c660a7dea13850d841b6989c605024e3d3230f84ce9ae",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0a2fbca4b2baa1b643b6",
          "headline": "SNDK, MU, INTC, AMD, SKHY: AI 자금 조달 문제로 인해 칩 주식이 하락세를 보이고, 중국 경쟁이 해당 부문에 부담을 주고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791855748,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4da3ace9fd7e6c35d1f9538b6e30923a81a5306ec3d5a4fcb00fc2f2264beb9d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "6308ff1eab1849601f1c",
          "headline": "Alphabet과 Nvidia에 동일하게 투자된 10,000달러는 2030년까지 이만큼 가치가 있을 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791841800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac3ad1c31f2e904129842dedfc3a722f17f4ac6d12c8ed4382cc5aff8c00ab94",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aeebd33d613ba9201a9a",
          "headline": "Nvidia AI 인프라 파트너십으로 Navitas 주가 5% 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791838475,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3c6f17dc0ca4f9833ff26125b02e80cb543359317eb7d9d75f51b04dd6d20efb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3c9eac1fbf6538885fa8",
          "headline": "ASML CEO는 AI 칩 붐이 2028년 이후까지 이어질 수 있다고 말하지만 Broadcom은 자금 조달 병목 현상을 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03763869c9b37afc3b64c8a185a0158e0d0e75f9bc181bf6b35464ccab7a39e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "7fae641e536ca6435396",
          "headline": "어플라이드 머티어리얼즈, AI 시대 반도체 혁신 가속화 위해 실리콘 밸리에 50억 달러 규모 EPIC 센터 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b586da0431213e06e5f1ec0ad603e0fd7b9218ad78623ac5867cbd65bb87ecd6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "5f39e8a0b0bc53a899ce",
          "headline": "Nvidia와 AMD는 역사적인 가치 평가 분할에 도달했습니다. 1 주식이 훨씬 안전합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791834600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=068095887c8426938a4fdf11badd0e8523f0e84de80265de53f9a29842441c92",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3d789f71e0425f274850",
          "headline": "Maia 300: Microsoft는 금융에 도움이 되는 컴퓨팅 임대주 모델로부터의 출구를 구축합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791833401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5da460903b120e03641777b69800bb4b912d7c703c7891759803f237b9626e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "36eb53fc36995cb38e46",
          "headline": "Arista의 이연 수익은 69억 달러입니다. 현금흐름을 얼마나 설명하는가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791830648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc28dfa8701adecd7656721b0e6168dd7f6c3539f14ae91a325705c72f04cdd4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8b7e64e3aca7c44a30e7",
          "headline": "Amazon, 70억 달러 규모의 Decart 거래: AI 지출 옆에 있는 \"작은 변화\"",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791823237,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8ec5a5a3c9177919473ba2703e28a4ae97f22059c1372a0e82fcccf7b918498a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8a3f7895d1450acfa026",
          "headline": "Nvidia, AMD, Google, Meta가 데이터 센터 설계를 위한 글로벌 청사진을 위해 협력합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791817200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=500ae337a06221b2f3b8f19f12621a9da5d7312198c5a0ba2740463b4dc7496b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 39,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791860176,
      "signal": "우호적 변화",
      "netScore": 6.46,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.32,
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
          "eventId": "8c85fef84e7a6da899a8",
          "headline": "AAOI, LITE, COHR 밤새 매각 연장: AI 자금 조달에 대한 우려로 광 네트워킹 거래가 타격을 입었지만 소매점은 반등",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791860176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=135979aeff99ad364c027b25218b0fc7cdd62e58e59471b65c1f43c1e358537d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "0a2fbca4b2baa1b643b6",
          "headline": "SNDK, MU, INTC, AMD, SKHY: AI 자금 조달 문제로 인해 칩 주식이 하락세를 보이고, 중국 경쟁이 해당 부문에 부담을 주고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791855748,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4da3ace9fd7e6c35d1f9538b6e30923a81a5306ec3d5a4fcb00fc2f2264beb9d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "3c9eac1fbf6538885fa8",
          "headline": "ASML CEO는 AI 칩 붐이 2028년 이후까지 이어질 수 있다고 말하지만 Broadcom은 자금 조달 병목 현상을 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03763869c9b37afc3b64c8a185a0158e0d0e75f9bc181bf6b35464ccab7a39e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7fae641e536ca6435396",
          "headline": "어플라이드 머티어리얼즈, AI 시대 반도체 혁신 가속화 위해 실리콘 밸리에 50억 달러 규모 EPIC 센터 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b586da0431213e06e5f1ec0ad603e0fd7b9218ad78623ac5867cbd65bb87ecd6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "3d789f71e0425f274850",
          "headline": "Maia 300: Microsoft는 금융에 도움이 되는 컴퓨팅 임대주 모델로부터의 출구를 구축합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791833401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5da460903b120e03641777b69800bb4b912d7c703c7891759803f237b9626e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "36eb53fc36995cb38e46",
          "headline": "Arista의 이연 수익은 69억 달러입니다. 현금흐름을 얼마나 설명하는가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791830648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc28dfa8701adecd7656721b0e6168dd7f6c3539f14ae91a325705c72f04cdd4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "8b7e64e3aca7c44a30e7",
          "headline": "Amazon, 70억 달러 규모의 Decart 거래: AI 지출 옆에 있는 \"작은 변화\"",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791823237,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8ec5a5a3c9177919473ba2703e28a4ae97f22059c1372a0e82fcccf7b918498a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "8a3f7895d1450acfa026",
          "headline": "Nvidia, AMD, Google, Meta가 데이터 센터 설계를 위한 글로벌 청사진을 위해 협력합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791817200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=500ae337a06221b2f3b8f19f12621a9da5d7312198c5a0ba2740463b4dc7496b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32f20db4bbf65e68dc08",
          "headline": "Amazon, AI 스타트업 Decart를 70억 달러에 인수하기 위해 협상 중인 것으로 알려짐",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791811796,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edbb122282e878e2554a0ec9df2a296c4ccc79fa6ccbae36916b25f3d9f02754",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9344a1d214fd095b634b",
          "headline": "엔비디아, 오픈소스 스타트업 Reflection AI 투자 또는 인수 협상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791810610,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=243276a0de19ff287074d9c15df4db8c3e0abef9542d9f333f8a7bfd93441b1c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9be7c56de5f277140326",
          "headline": "Zacks 투자 아이디어 주요 내용: Qualcomm, Alphabet, Tesla, AMD, Amazon, Taiwan Semiconductor, NVIDIA, Intel, Apple, Broadcom 및 SpaceX",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791806760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b32edb09e61822e1df182f7d813ab3b9a0b6ff19bb137bb5cda166ece4db10d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "3c15aa0599a6dbd5d3d0",
          "headline": "Amazon과 Alphabet은 데이터 센터에 4,200억 달러를 투자했습니다. 1 주식이 더 나은 구매입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791742680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01a786a0f135b8e34ae002f5c662d8c407607d5e071fa680ed969b0df4cb99ef",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 32,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791845461,
      "signal": "중립·확인 대기",
      "netScore": -1.76,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.57,
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
          "score": -2.97,
          "level": "주의"
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
          "eventId": "10cb9dc94bc590e6d3b7",
          "headline": "Broadcom vs. Qualcomm: 2026년에는 어떤 칩 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791845461,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec4d56eebd1e30e3510ad274efc17621d59bfae4f1bf5e3515e2389cbe5f2fe9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3c9eac1fbf6538885fa8",
          "headline": "ASML CEO는 AI 칩 붐이 2028년 이후까지 이어질 수 있다고 말하지만 Broadcom은 자금 조달 병목 현상을 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03763869c9b37afc3b64c8a185a0158e0d0e75f9bc181bf6b35464ccab7a39e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9419c6f4f577dfc086e5",
          "headline": "브로드컴 대. 오라클: 누구의 AI 칩 부채 조달 계획이 더 나빠 보이는가?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791809133,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d17ccceb070fa276870ae7775c9b5dd1c7b938a3b865b673b2886c6f6d22e9f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9be7c56de5f277140326",
          "headline": "Zacks 투자 아이디어 주요 내용: Qualcomm, Alphabet, Tesla, AMD, Amazon, Taiwan Semiconductor, NVIDIA, Intel, Apple, Broadcom 및 SpaceX",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791806760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b32edb09e61822e1df182f7d813ab3b9a0b6ff19bb137bb5cda166ece4db10d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a2df84ccae66860119fc",
          "headline": "엔비디아가 아닙니다. 브로드컴이 아닙니다. 이 잘 알려지지 않은 칩 공급업체는 AI 붐의 가장 잘 알려진 비밀이 될 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791762600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48e3301fa687f34640b060c5a4135c07a2eb52670133fb68e27497a37c862e98",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "793e2f90faff4eb1658b",
          "headline": "Broadcom 대 Intel: 2026년에는 어떤 칩 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791646502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a07a1f0cae3dbe4e693111a1dd0253e8b8fdfe5e60cb9b6055d1b42fe8cbe862",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8e9c05027c7194c91d86",
          "headline": "차세대 AI 수요로 인해 Broadcom, Marvell 및 AMD가 급증할 수 있음",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791642657,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f8f561ef84e3f719593cfc42dcd9d54da13246e2a9d11165b0479a57a97e02e6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bfaa2e5130e0f2b25d9d",
          "headline": "Arm 재고는 올해 143% 상승: 이익을 얻을 것인가, 아니면 계속해서 나아갈 것인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791573243,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=586ffcc37bfc3d72da938e55beb9272a939869015dc029d229756909852105d3",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "de3ba4655c04b0eb9212",
          "headline": "예측: Nvidia와 Broadcom 사이의 5,000달러 투자 분할은 2028년까지 3배가 될 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791560460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45c2fbe4395851537653a55d21551b439672c7ee7ab184e471e86264697c0a8a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e76994627a4248cadc13",
          "headline": "Arista Networks, 사상 최고 기록 달성",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791557400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f786614fdf34dea0459b2e0759df2de39d385e8e48b11880d076dc411316701",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791845461,
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
          "score": -5,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -5,
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
          "eventId": "10cb9dc94bc590e6d3b7",
          "headline": "Broadcom vs. Qualcomm: 2026년에는 어떤 칩 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791845461,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec4d56eebd1e30e3510ad274efc17621d59bfae4f1bf5e3515e2389cbe5f2fe9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "59b043c1240a0be22318",
          "headline": "Amazon 분석가는 3분기를 앞두고 가격 목표를 인하했습니다. Wells Fargo는 4분기에도 AWS 가속화가 계속될 것으로 보고 있습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791815935,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96c8d5485d0852edd2bda6231d52eb125ba5b795a7f2e93592dd82f71497b485",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9be7c56de5f277140326",
          "headline": "Zacks 투자 아이디어 주요 내용: Qualcomm, Alphabet, Tesla, AMD, Amazon, Taiwan Semiconductor, NVIDIA, Intel, Apple, Broadcom 및 SpaceX",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791806760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b32edb09e61822e1df182f7d813ab3b9a0b6ff19bb137bb5cda166ece4db10d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "292532fc6c64dbc75bf1",
          "headline": "10월 29일 수익을 앞두고 Apple의 340달러 가격은 얼마나 지속 가능한가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791803756,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cdddd3e86918ba916b234d8147dca0d43e90db988209864f3d6fda4a335ac7ca",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "dc3ba963583b352a19ce",
          "headline": "이번 주 최고 주식 추천을 위해 3개의 AI 챗봇을 요청했습니다 - TSMC 수익에 2개의 베팅",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791797299,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7cf02144666aab549cf32420bc5fd4e1102f01fc8530821b0682ef8d9caa692",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "ff356ceb5cc350e0556b",
          "headline": "새로운 Apple TV 및 HomePod Mini 예상: AAPL 재고의 중요성",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791785772,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73f67e18f0b266d32afb1aa7e5048ea8d434f16721e732678fe19dd1e0fcc939",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "c344671637d00c598d64",
          "headline": "알파벳 주식은 지난 10월 이후 46% 상승했습니다. 아직도 매수인가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791727457,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8015f76a88e8b90c92e30dc0a91cdb5a1269afb2c755d56f00a3d54ddbce786a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "92f709f0c72c8a50b3ba",
          "headline": "Amazon, 새로운 태블릿 라인업 출시 직후 Alexa 리더십 개편",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791696386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b96e59e1b1a7e9c441eb647ebedd9356a07dff9928ebbbd5e59f625b6a3f1fda",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "bf99929d8e810ef75796",
          "headline": "Advanced Micro Devices vs. Qualcomm: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791651781,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=69387e00bf52429c8086050e82ee46db0171cd604077c4444f00839259e64b9e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c0c09477f8eb6f479ea1",
          "headline": "더 부드러워진 iPhone 18 Pro 수요와 메모리 비용이 Apple(AAPL)의 AI 투자 내러티브를 재구성했을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791630859,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfc7e049a13bee0c77318b03588a564c350b8379e682b26cfc626fc15012e65a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "46f2b1c1a31a64eb6d2c",
          "headline": "Cathie Wood가 주도하는 Ark Invest는 AMD, SPCX, GOOG 주식을 판매하지만 CMPS, NTLA, CRSP 및 기타 의료 회사에 로드됩니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791612152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35c31d32c5cef3edbb11bcd2a91ba841cc85bdbde509b3d2f9df13d64db91ae9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "b510a223ebf28fc28cb9",
          "headline": "미국이 중국 기술 규정을 강화함에 따라 Qualcomm-Huawei 거래가 성사되었습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791594180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7b6b1d9e795d359ead8886b5640980221aed929fac715b3d1a87f46af2d45e4d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 15,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791812467,
      "signal": "주의 강화",
      "netScore": -5.38,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.4,
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
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.27,
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
          "eventId": "91f3850d3085d09b45da",
          "headline": "Arm Holdings plc(ARM)는 전문적인 컴퓨팅 수요가 단기 부족 현상보다 오래 지속되는 위치에 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791812467,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9e963e876ff5aabd9f55de9ccaa9ba75b82e33d113f4bd90eaffb79ec4441e5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "2ffbcc6f1769b319dd46",
          "headline": "Qualcomm과 Arm 재판은 라이선스 위반 혐의에 대한 배심원단에서 종료됩니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791810049,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0a4773f52117ebfdbc6463f4636c10b8a4917f0ade8f29eb4f7c625aab2adfd0",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "da0bde5a4ec7ac092117",
          "headline": "더 나은 인공 지능 스톡: Arm vs. Marvell Technology",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791675110,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b83058964fb54026fa5da1a46d55c0fbe824f5ef634d41ce7e56c89653954d7a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a3e5e64deceded595a4e",
          "headline": "Qualcomm은 심사위원을 기다립니다: Arm은 4억 4,300만 달러 규모의 고객을 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791632535,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38c80154955a05e44c5e43345df0b2b3c52c3d27a5c646b3a57b1b02cf8c781c",
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
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791675110,
      "signal": "주의 강화",
      "netScore": -4.19,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -1.57,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.57,
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
          "eventId": "da0bde5a4ec7ac092117",
          "headline": "더 나은 인공 지능 스톡: Arm vs. Marvell Technology",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791675110,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b83058964fb54026fa5da1a46d55c0fbe824f5ef634d41ce7e56c89653954d7a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8e9c05027c7194c91d86",
          "headline": "차세대 AI 수요로 인해 Broadcom, Marvell 및 AMD가 급증할 수 있음",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791642657,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f8f561ef84e3f719593cfc42dcd9d54da13246e2a9d11165b0479a57a97e02e6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791834281,
      "signal": "주의 강화",
      "netScore": -9.46,
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
          "score": -0.87,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.8,
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
          "eventId": "7ce4fdf3cd24de30fb25",
          "headline": "ASML은 수요일 3분기 실적 보고서를 앞두고 NV 주식을 매수하고 있습니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1791834281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa73c65e185f744d28d2d9b85b923c92475b509ecac999e84c223e97d3ed59a3",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5f3695f71f03585173c3",
          "headline": "샌디스크도 아니고 인텔도 아닙니다. 이 주식은 내년에 S&P 500을 이끌 것이다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791828300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c98bbd74e6852deaa352698ee49dcc768ca4253664ba4e8cfa5b2be53428748a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9be7c56de5f277140326",
          "headline": "Zacks 투자 아이디어 주요 내용: Qualcomm, Alphabet, Tesla, AMD, Amazon, Taiwan Semiconductor, NVIDIA, Intel, Apple, Broadcom 및 SpaceX",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791806760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b32edb09e61822e1df182f7d813ab3b9a0b6ff19bb137bb5cda166ece4db10d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "132d8996a95363662e5a",
          "headline": "내 말을 기억하세요: ASML 주식은 AI 인프라 붐을 주도하는 가장 간과되는 방법입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791797640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e4dde4ea4d91dd16f301c59579b8e8b9c82daed9afc704b31209993123262de",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4a97ee5a91b4938218ee",
          "headline": "INTC, AMD, NVDA, MU: 칩 주식은 한 달 만에 최악의 주를 보낸 후 혼합 사전 시장을 열었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791795335,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f162837042780ff68cc2553a3fbba919f404df2acd023205126071f503566037",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "61e21385878a5d04cb93",
          "headline": "마이크로소프트는 4% 하락했다. 내가 더 많이 구매하는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791786000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4ebd763cceffc938495604531de86356fbcb93bd31386e5afb8124efef259eb3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "80ec4d0d5f8660375744",
          "headline": "인류애적이지 않습니다. AMD가 아닙니다. 2027년 나의 최고 AI 주식은 다음과 같습니다.",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1791722100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a5cabfc85b30d885e004254203592417f511f29f6aeedf50324259fa3385ba0",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "77c04350b6969cc15e1c",
          "headline": "인텔과 어플라이드 머티어리얼즈, AI 파트너십을 더욱 강화했습니다. 어떤 주식이 더 나은 위치에 있는 것 같나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791720969,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=860a5fa8f9682ba9f80e461021c7bd9682efdc6e1222887688c4aff6831ed60d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3e66415c4b32a8162dc3",
          "headline": "SpaceX vs. Micron: 향후 5년간 보유하기에 더 나은 인공지능(AI) 주식은 무엇입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791720300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c888810c51a4a2f60eb31510579ce114ec9ee85424219b99f1b73748f122af67",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "da0bde5a4ec7ac092117",
          "headline": "더 나은 인공 지능 스톡: Arm vs. Marvell Technology",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791675110,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b83058964fb54026fa5da1a46d55c0fbe824f5ef634d41ce7e56c89653954d7a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bf99929d8e810ef75796",
          "headline": "Advanced Micro Devices vs. Qualcomm: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791651781,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=69387e00bf52429c8086050e82ee46db0171cd604077c4444f00839259e64b9e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "793e2f90faff4eb1658b",
          "headline": "Broadcom 대 Intel: 2026년에는 어떤 칩 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791646502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a07a1f0cae3dbe4e693111a1dd0253e8b8fdfe5e60cb9b6055d1b42fe8cbe862",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
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
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791834281,
      "signal": "주의 강화",
      "netScore": -3.85,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
          "level": "우호적"
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
          "score": -3.15,
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
          "eventId": "7ce4fdf3cd24de30fb25",
          "headline": "ASML은 수요일 3분기 실적 보고서를 앞두고 NV 주식을 매수하고 있습니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1791834281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa73c65e185f744d28d2d9b85b923c92475b509ecac999e84c223e97d3ed59a3",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fd6679f6b598a4bf971d",
          "headline": "ASML 대 대만 반도체 제조: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791832802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec7291fcd6063f2c3392fddb5ddfc7a835a81e91f9262c2be1542e9e1292af74",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9be7c56de5f277140326",
          "headline": "Zacks 투자 아이디어 주요 내용: Qualcomm, Alphabet, Tesla, AMD, Amazon, Taiwan Semiconductor, NVIDIA, Intel, Apple, Broadcom 및 SpaceX",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791806760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b32edb09e61822e1df182f7d813ab3b9a0b6ff19bb137bb5cda166ece4db10d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dc3ba963583b352a19ce",
          "headline": "이번 주 최고 주식 추천을 위해 3개의 AI 챗봇을 요청했습니다 - TSMC 수익에 2개의 베팅",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791797299,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7cf02144666aab549cf32420bc5fd4e1102f01fc8530821b0682ef8d9caa692",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "96caad9915142621eb74",
          "headline": "TSMC의 3분기 실적 미리보기: 65% 의 이익 성장률, 순이익률은 50% 로 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791788752,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03b2ca951a22fbd2f9b89c24bf6b0ea5e2acbc25c7bc915346d184dc0bd77d22",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e2540d877ed8ba628d2b",
          "headline": "Stocktwits Tech Watch: ASML, 이번 주 TSMC 실적 및 Apple의 다음 홈 플레이",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791781422,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=afee46c57656b64ce0cb815ca12f5ac0791b06c7b707bab2aaf82d49736fc3da",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "81aecbc0f3142d9bb97d",
          "headline": "SPCX, TSM, APLD, AMZN, TSLA: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791771230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=68ac22fff068edbd38e4f50bb1f20b289b4fc9740a4311a69f4b58ae2e1ed3c6",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fa9a163d1f8ab93f3faf",
          "headline": "대만반도체(TSMC) 10월 15일 실적 발표 시 주목해야 할 3가지",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791714300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=906eea096587a718b0a529e9f01533b0cbb1f635f28589cc539c41a5fe2538cf",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a04b18aa13cd3fcb6b64",
          "headline": "TSMC Reports Oct. 15. 엔비디아의 다음 분기에 대한 최고의 얼리 리드입니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1791705482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a62c3bf9289e31fbc641f588c83ec7ce5cc92d98c1313efd84bfceb2b95b01f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9af8b864e797e29277d2",
          "headline": "대만 반도체 대. ASML: 향후 5년 동안 하나를 선택해야 한다면 이것은 바로 이것입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791564359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2b1f684858bda722eaa564dd873690dacca6466bf55c00ed88cb8d5f8e1d5c0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791837008,
      "signal": "주의 강화",
      "netScore": -3.85,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.35,
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
          "score": -3.32,
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
          "eventId": "3c9eac1fbf6538885fa8",
          "headline": "ASML CEO는 AI 칩 붐이 2028년 이후까지 이어질 수 있다고 말하지만 Broadcom은 자금 조달 병목 현상을 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03763869c9b37afc3b64c8a185a0158e0d0e75f9bc181bf6b35464ccab7a39e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fd6679f6b598a4bf971d",
          "headline": "ASML 대 대만 반도체 제조: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791832802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec7291fcd6063f2c3392fddb5ddfc7a835a81e91f9262c2be1542e9e1292af74",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "132d8996a95363662e5a",
          "headline": "내 말을 기억하세요: ASML 주식은 AI 인프라 붐을 주도하는 가장 간과되는 방법입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791797640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e4dde4ea4d91dd16f301c59579b8e8b9c82daed9afc704b31209993123262de",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e2540d877ed8ba628d2b",
          "headline": "Stocktwits Tech Watch: ASML, 이번 주 TSMC 실적 및 Apple의 다음 홈 플레이",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791781422,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=afee46c57656b64ce0cb815ca12f5ac0791b06c7b707bab2aaf82d49736fc3da",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5e621c37c09e7432d604",
          "headline": "VOO는 SpaceX, 대만 반도체, 삼성전자, SK 하이닉스 또는 ASML을 보유하지 않습니다. Vanguard ETF를 만나보세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791665493,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1b67d7cfed671be3de632bd1afffede8f4a8531c32c9b799f2a0ae4c427eb9c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cc12c597ababca7117bc",
          "headline": "더 나은 인공 지능 주식: ASML 대 QUALCOMM",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791573606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9097dc87f4ed7a9202d272d3bec7e8c02be6dabb8e10c951414b55acd646c35",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9af8b864e797e29277d2",
          "headline": "대만 반도체 대. ASML: 향후 5년 동안 하나를 선택해야 한다면 이것은 바로 이것입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791564359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2b1f684858bda722eaa564dd873690dacca6466bf55c00ed88cb8d5f8e1d5c0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791837000,
      "signal": "중립·확인 대기",
      "netScore": 0.22,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.53,
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
          "score": -1.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.18,
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
          "eventId": "7fae641e536ca6435396",
          "headline": "어플라이드 머티어리얼즈, AI 시대 반도체 혁신 가속화 위해 실리콘 밸리에 50억 달러 규모 EPIC 센터 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b586da0431213e06e5f1ec0ad603e0fd7b9218ad78623ac5867cbd65bb87ecd6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "34c531948d2dcfc99033",
          "headline": "어플라이드 머티리얼즈 vs. SK하이닉스: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791816302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4aaec38f4efec2de3cd1cd75cc95509b4ed5c3bbf07684b5028d79f837b0b00",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "77c04350b6969cc15e1c",
          "headline": "인텔과 어플라이드 머티어리얼즈, AI 파트너십을 더욱 강화했습니다. 어떤 주식이 더 나은 위치에 있는 것 같나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791720969,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=860a5fa8f9682ba9f80e461021c7bd9682efdc6e1222887688c4aff6831ed60d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1791889069.1587448,
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
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791727216,
      "signal": "중립·확인 대기",
      "netScore": -0.35,
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
          "eventId": "8245703010c4b31d740d",
          "headline": "KLA는 10년 만에 $1,000를 $31,595로 전환하여 S&P 500을 8.7배나 압도했습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791727216,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=31e91335b5d3345ef66746347569706cc2d48db4fc2d8f35f542678aeab6ca64",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MU": {
      "ticker": "MU",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791860176,
      "signal": "우호적 변화",
      "netScore": 4.81,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 3.5,
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
          "eventId": "8c85fef84e7a6da899a8",
          "headline": "AAOI, LITE, COHR 밤새 매각 연장: AI 자금 조달에 대한 우려로 광 네트워킹 거래가 타격을 입었지만 소매점은 반등",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791860176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=135979aeff99ad364c027b25218b0fc7cdd62e58e59471b65c1f43c1e358537d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "0a2fbca4b2baa1b643b6",
          "headline": "SNDK, MU, INTC, AMD, SKHY: AI 자금 조달 문제로 인해 칩 주식이 하락세를 보이고, 중국 경쟁이 해당 부문에 부담을 주고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791855748,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4da3ace9fd7e6c35d1f9538b6e30923a81a5306ec3d5a4fcb00fc2f2264beb9d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "6bce889bd08226b33686",
          "headline": "AMAT 주가는 영업 시간 외 하락: Applied Materials는 채용 성장에 부응하지 않고 매출을 두 배로 늘리는 것을 목표로 합니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1791849153,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96bfbf5f6360fde67dd0b518fb0374611a32c0e6a1642e75f8e6648cc72e6c6a",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3c9eac1fbf6538885fa8",
          "headline": "ASML CEO는 AI 칩 붐이 2028년 이후까지 이어질 수 있다고 말하지만 Broadcom은 자금 조달 병목 현상을 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03763869c9b37afc3b64c8a185a0158e0d0e75f9bc181bf6b35464ccab7a39e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7fae641e536ca6435396",
          "headline": "어플라이드 머티어리얼즈, AI 시대 반도체 혁신 가속화 위해 실리콘 밸리에 50억 달러 규모 EPIC 센터 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791837000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b586da0431213e06e5f1ec0ad603e0fd7b9218ad78623ac5867cbd65bb87ecd6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "3d789f71e0425f274850",
          "headline": "Maia 300: Microsoft는 금융에 도움이 되는 컴퓨팅 임대주 모델로부터의 출구를 구축합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791833401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5da460903b120e03641777b69800bb4b912d7c703c7891759803f237b9626e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "36eb53fc36995cb38e46",
          "headline": "Arista의 이연 수익은 69억 달러입니다. 현금흐름을 얼마나 설명하는가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791830648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc28dfa8701adecd7656721b0e6168dd7f6c3539f14ae91a325705c72f04cdd4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "8b7e64e3aca7c44a30e7",
          "headline": "Amazon, 70억 달러 규모의 Decart 거래: AI 지출 옆에 있는 \"작은 변화\"",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791823237,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8ec5a5a3c9177919473ba2703e28a4ae97f22059c1372a0e82fcccf7b918498a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2b226d1d8ac0ce4f9a78",
          "headline": "Ondas, Palantir와 협력하여 국방 임무를 위한 새로운 AI 회사 설립 – Regna AI에 대해 알아야 할 모든 것",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791819549,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a76eb6fc72068ad423ecf5b8d7f09ea5ff42219bc966571f719523afd60769a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32f20db4bbf65e68dc08",
          "headline": "Amazon, AI 스타트업 Decart를 70억 달러에 인수하기 위해 협상 중인 것으로 알려짐",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791811796,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edbb122282e878e2554a0ec9df2a296c4ccc79fa6ccbae36916b25f3d9f02754",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9344a1d214fd095b634b",
          "headline": "엔비디아, 오픈소스 스타트업 Reflection AI 투자 또는 인수 협상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791810610,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=243276a0de19ff287074d9c15df4db8c3e0abef9542d9f333f8a7bfd93441b1c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9be7c56de5f277140326",
          "headline": "Zacks 투자 아이디어 주요 내용: Qualcomm, Alphabet, Tesla, AMD, Amazon, Taiwan Semiconductor, NVIDIA, Intel, Apple, Broadcom 및 SpaceX",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791806760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b32edb09e61822e1df182f7d813ab3b9a0b6ff19bb137bb5cda166ece4db10d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 46,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791561600,
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
          "eventId": "01626ade4d283fed3664",
          "headline": "마이크론이 아닙니다. 샌디스크가 아닙니다. 이 메모리 주식은 조용히 점유율을 얻고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791561600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b97714a7847a56b1650a34e0b4facf97f71461d065340a5e6988429831899be7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791803756,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -5,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -5,
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
          "eventId": "292532fc6c64dbc75bf1",
          "headline": "10월 29일 수익을 앞두고 Apple의 340달러 가격은 얼마나 지속 가능한가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791803756,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cdddd3e86918ba916b234d8147dca0d43e90db988209864f3d6fda4a335ac7ca",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "cbb4e688eb4c3eff612e",
          "headline": "Stocktwits Power Watch: CEG가 Google 딜을 가방에 넣고 VST가 정부 자금을 확보하고 유틸리티 합병으로 불이 붙습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791801348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d2db8f587b0f2c87d09550cb482633845fb56a2c2dc8e9b99b5bfcec11d9915",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dc3ba963583b352a19ce",
          "headline": "이번 주 최고 주식 추천을 위해 3개의 AI 챗봇을 요청했습니다 - TSMC 수익에 2개의 베팅",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791797299,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7cf02144666aab549cf32420bc5fd4e1102f01fc8530821b0682ef8d9caa692",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "ff356ceb5cc350e0556b",
          "headline": "새로운 Apple TV 및 HomePod Mini 예상: AAPL 재고의 중요성",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791785772,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73f67e18f0b266d32afb1aa7e5048ea8d434f16721e732678fe19dd1e0fcc939",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "c344671637d00c598d64",
          "headline": "알파벳 주식은 지난 10월 이후 46% 상승했습니다. 아직도 매수인가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791727457,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8015f76a88e8b90c92e30dc0a91cdb5a1269afb2c755d56f00a3d54ddbce786a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "92f709f0c72c8a50b3ba",
          "headline": "Amazon, 새로운 태블릿 라인업 출시 직후 Alexa 리더십 개편",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791696386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b96e59e1b1a7e9c441eb647ebedd9356a07dff9928ebbbd5e59f625b6a3f1fda",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "c0c09477f8eb6f479ea1",
          "headline": "더 부드러워진 iPhone 18 Pro 수요와 메모리 비용이 Apple(AAPL)의 AI 투자 내러티브를 재구성했을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791630859,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfc7e049a13bee0c77318b03588a564c350b8379e682b26cfc626fc15012e65a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "46f2b1c1a31a64eb6d2c",
          "headline": "Cathie Wood가 주도하는 Ark Invest는 AMD, SPCX, GOOG 주식을 판매하지만 CMPS, NTLA, CRSP 및 기타 의료 회사에 로드됩니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791612152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35c31d32c5cef3edbb11bcd2a91ba841cc85bdbde509b3d2f9df13d64db91ae9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "671f338353c7174cd049",
          "headline": "Apple, 수요 감소로 iPhone 18 Pro 부품 주문 축소",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791566997,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bbc1ccba3ef652377225b07996acddab21270e3436a5a435ac3c378e6c501620",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "1a87ad946015e0f9ceeb",
          "headline": "비스트라 주식은 20% 상승 후 하루 만에 6% 하락했습니다. 11월 6일 보고서에서 보여줘야 할 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791563077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bf88512560c617662abaa1dea7ea70b556c72c67c149d10bc0c56327e5a27df",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791830648,
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
          "eventId": "36eb53fc36995cb38e46",
          "headline": "Arista의 이연 수익은 69억 달러입니다. 현금흐름을 얼마나 설명하는가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791830648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc28dfa8701adecd7656721b0e6168dd7f6c3539f14ae91a325705c72f04cdd4",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1791889069.1587448,
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
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791621413,
      "signal": "중립·확인 대기",
      "netScore": -1.88,
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
          "eventId": "0deec02eb785d45adad8",
          "headline": "Lumentum: 2029년까지 매진되었지만 더 큰 제품이 출시됩니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791621413,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0895293bdfa3ff52ae5dd7279ad90630668a307cb9862ef4a09c4188ca4021d1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791645252,
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
          "eventId": "3312b1b6f72e95ae273b",
          "headline": "GE Vernova(GEV)는 AI 데이터 센터를 50억 달러 규모의 주문 순풍으로 전환했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791645252,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3e83c0fa91c19c8ac48184556a17687ba893bbc4d10d4b1e844ca1acbde25d3",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791816480,
      "signal": "우호적 변화",
      "netScore": 3.0,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.92,
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
          "eventId": "d2a571b91409053310b4",
          "headline": "Google과 Constellation이 3.6GW 거래에 서명하면서 주목을 받는 원자력 ETF",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791816480,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ada70bb74ba4cbfdd8b1a7cb59ae2d5c44bcfa262db7955cb5c5e4351842352",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "41451ecd9cf14e9e6564",
          "headline": "별자리 에너지 주식을 상승시킬 수 있는 것은 무엇입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1791814619,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=17c646f1fc0ceb51bcc95aa88eab0055b4d9320ec96cb78a03cc8d98ec6c57ba",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d53cf95c4ae6071b87e8",
          "headline": "Stocktwits Power Watch: CEG가 Google 딜을 가방에 넣고 VST가 정부 자금을 확보하고 유틸리티 합병으로 불이 붙습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791801348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d2db8f587b0f2c87d09550cb482633845fb56a2c2dc8e9b99b5bfcec11d9915",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "cbb4e688eb4c3eff612e",
          "headline": "Stocktwits Power Watch: CEG가 Google 딜을 가방에 넣고 VST가 정부 자금을 확보하고 유틸리티 합병으로 불이 붙습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791801348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d2db8f587b0f2c87d09550cb482633845fb56a2c2dc8e9b99b5bfcec11d9915",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791801348,
      "signal": "주의 강화",
      "netScore": -2.03,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "score": -2.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.87,
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
          "eventId": "d53cf95c4ae6071b87e8",
          "headline": "Stocktwits Power Watch: CEG가 Google 딜을 가방에 넣고 VST가 정부 자금을 확보하고 유틸리티 합병으로 불이 붙습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791801348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d2db8f587b0f2c87d09550cb482633845fb56a2c2dc8e9b99b5bfcec11d9915",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f8d5b4d28d5f7ad78aec",
          "headline": "Stocktwits Power Watch: CEG가 Google 딜을 가방에 넣고 VST가 정부 자금을 확보하고 유틸리티 합병으로 불이 붙습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1791801348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d2db8f587b0f2c87d09550cb482633845fb56a2c2dc8e9b99b5bfcec11d9915",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cbb4e688eb4c3eff612e",
          "headline": "Stocktwits Power Watch: CEG가 Google 딜을 가방에 넣고 VST가 정부 자금을 확보하고 유틸리티 합병으로 불이 붙습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791801348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d2db8f587b0f2c87d09550cb482633845fb56a2c2dc8e9b99b5bfcec11d9915",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1a87ad946015e0f9ceeb",
          "headline": "비스트라 주식은 20% 상승 후 하루 만에 6% 하락했습니다. 11월 6일 보고서에서 보여줘야 할 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1791563077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bf88512560c617662abaa1dea7ea70b556c72c67c149d10bc0c56327e5a27df",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1791889069.1587448,
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791589815,
      "signal": "중립·확인 대기",
      "netScore": -1.88,
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
          "eventId": "16259424b8e02047cfd8",
          "headline": "금요일에 Quanta Services 주가가 상승한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1791589815,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=872c21ba687524a0c5b196a67675b5f428a3b4130cf99b36c54ae2dd7165649c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1791889069.1587448,
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
      "updatedAt": 1791889069.1587448,
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1791889069.1587448,
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
    "STX": {
      "ticker": "STX",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791820845,
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
          "eventId": "5d1224f7b47cd18c0b36",
          "headline": "지금 Seagate에 1,000달러를 투자하면 2030년까지의 가치는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791820845,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a8c912032d343b23bbc9897f1b66cab857bb6da899c4677d3f0ea7105521980",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1791889069.1587448,
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
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791818700,
      "signal": "중립·확인 대기",
      "netScore": -1.54,
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
          "score": -0.35,
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
          "eventId": "2b230d56261beba20c0f",
          "headline": "84% 랠리 이후 Comfort Systems의 높은 가치 평가: 주의가 정당합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1791818700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b6e6b1c67f6dce3d886e1da456fb768a35624040411522b462098c00f737479",
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1791889069.1587448,
      "dataAsOf": 1791587509,
      "signal": "우호적 변화",
      "netScore": 2.79,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
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
          "eventId": "b4efe91a86469bcd8183",
          "headline": "Bloom의 수십억 달러 분기 및 AI 전력 거래는 Bloom Energy(BE)의 게임 체인저가 될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1791587509,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9440e04e61927921aa9ff1e962e356ed5d9bccf3eab05963b5c96a6060c04d8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "fe65181b954db2be20ad",
          "headline": "Bloom의 수십억 달러 분기 및 AI 전력 거래는 Bloom Energy(BE)의 게임 체인저가 될 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1791587509,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9440e04e61927921aa9ff1e962e356ed5d9bccf3eab05963b5c96a6060c04d8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    }
  }
};
