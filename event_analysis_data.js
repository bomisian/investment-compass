// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1793702234.2867718,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793650347,
      "signal": "중립·확인 대기",
      "netScore": 0.14,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.0,
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
          "score": -1.0,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.78,
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
          "eventId": "4fd6ad901b9818a0e41d",
          "headline": "Microsoft Corporation(MSFT), AI 수요가 공급을 초과함에 따라 강력한 Azure 성장 제공",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793650347,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d37eb310407db3b01bacc0dc9b6f6d242cc2958a1f35954845ee95ddda3534ba",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "804ccabe3d11a2a738a0",
          "headline": "Apple 대 Microsoft: 마진 확장은 Apple의 엄청난 이점입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793634348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a4725095f49094347345b833b78d274f73d99d9a5d44dccbdcca29b269f52fb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1885180449cefe2e3686",
          "headline": "AI 채권 자금 조달로 Microsoft(MSFT) 투자 사례가 바뀔 수 있음",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793593762,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b126d85c6c4af73f830c5d51abc001931c45e0bb6a0a3b6bd353d90b2ae410ed",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccec5def946c55f8bf32",
          "headline": "INTC, MSFT, META, DASH, VZ: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793584440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e4a503fd35197e2554c09236d3e68c9931e1a00eaa266c3dcf3ac5e8fc2cf315",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d0b945befced920eb600",
          "headline": "MSFT SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526442618/d150456d424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "9dd4c45b3c2022f3b43c",
          "headline": "마이크로소프트 (MSFT), AI 추진에 따라 250억 $ 규모의 채권 거래 성사",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793495421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca1077f52aa08f87115a6058e806fb5c89fa7db0e774c6b5ebdc65e2d4afeea0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793680176,
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
          "score": 0.35,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -5,
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
          "score": -2.57,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.8,
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
          "eventId": "772e2fd0b1e2be57df7b",
          "headline": "GOOGL Q3 심층 분석: AI 투자가 매출 성장을 주도하지만 이익은 기대에 미치지 못합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d275b182fabb5d961c47402220b945d98910d263c580dffd511e5a26b95af21",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "542018a89923f61335c2",
          "headline": "메타와 알파벳은 4분기 Capex에 대한 심각한 시장 압력에 직면",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793641514,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c2f306d5cfe84a0cd0c84a508c701f860ecc01d35722938c85810e8f114ea4b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "de7357349234f9806d1c",
          "headline": "알파벳 하루 만에 5000억 달러 손실 기록. 지금이 매수 기회인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793640831,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e290aadb954f352639d3d0ed27fbb786c536477756b0dabc496c18f858bc35f0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "90e4cb22c6231543adc1",
          "headline": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1793591953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ec8c4fe0fd9c22bfbb1",
          "headline": "GOOGL SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526442515/d125079d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "3b7bbe3cbe0af7acd816",
          "headline": "Josh Brown: 메타는 Nvidia를 비싸게 보이게 만드는 \"현금 마개\"가 될 수 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793518177,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c200f9d99312f45e0eac115dab8519cf030e196c1822267b63d298ba4854eb4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c33ae1365e456e3cd2a1",
          "headline": "3가지 AI 인프라 주식 소매 투자자들이 Google 검색 변화 이후 주목하고 있는 곳",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793448629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f47e4bc9349c8cbc9ffa3ca6e38a1eb2fa228ae0797c3f5b6bfb3c3d0d6310b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793680204,
      "signal": "주의 강화",
      "netScore": -4.33,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.05,
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
          "eventId": "d1e0253cbb5b49e6ab4e",
          "headline": "Amazon CEO Andy Jassy는 AMZN 주가가 6개월 만에 7% 하락함에 따라 투자자들이 소매업에서 '조금 자고 있다'고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fad852c244f18c65327d7fb2c1efa069de2016531ab01f215f15afab94c04872",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "33c6e088e4cdbc3e4a59",
          "headline": "아마존 대 알리바바: 두 개의 전자상거래 거대 기업, 큰 가치 격차, 2027년에는 어느 쪽이 더 많은 상승 여력을 제공할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793656202,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=664ecd08f7bccf4f69c164cd13a04ab092240e95f0c835a8bb93fcaa87d46e37",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7ce07cb85e5815b2615a",
          "headline": "구글의 급격한 하락, 아마존 주식은 AI 시장을 나타내지 않습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793655257,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6619427fcf00eedc43461dacd7ed65a62f5e06cea25bc7a6b0fbf3b504d50d2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ff29e520199f7581e30",
          "headline": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793591953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "90e4cb22c6231543adc1",
          "headline": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1793591953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "66313ba0d255d75828c7",
          "headline": "AMZN Q3 심층 분석: 클라우드 급증 및 AI 투자로 인해 혼합된 시장 수용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793507700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0123324ff65107780545b5a52c13947e2a6ce969a318cd3ea8b36cca30db2819",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793665355,
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
          "score": -1.22,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -5,
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
          "eventId": "e5b39a9cb95a447f2b23",
          "headline": "S&P 500, Nasdaq 하락, Capex 우려로 기술 투자자 장악, 미국-이란 외교 희망보다 중요 — ORCL, META, PLTR, AAPL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9a70de4daf9bfe53dd942cfad843b8cd4eed3f0a808ef7818d3204090d84f3a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5644848037901c04bd62",
          "headline": "Meta는 법적 판단이 계속됨에 따라 중독성에 대한 또 다른 소송을 해결합니다. 그 주식은 하락세를 보였습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793649621,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73b3ee7f4afd4288604b3ef15b0681145a5b9f75c20ede41a9c7c7c29da1cc68",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "542018a89923f61335c2",
          "headline": "메타와 알파벳은 4분기 Capex에 대한 심각한 시장 압력에 직면",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793641514,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c2f306d5cfe84a0cd0c84a508c701f860ecc01d35722938c85810e8f114ea4b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f3baf1b5ab3123b6915f",
          "headline": "2030년에 메타 스톡이 있을 것이라고 생각하는 곳은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793523421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df03913e4ea5c1ff59dac50c7de4da7ee105c83a6049e73fe1d7b6f3c2d44fa8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3b7bbe3cbe0af7acd816",
          "headline": "Josh Brown: 메타는 Nvidia를 비싸게 보이게 만드는 \"현금 마개\"가 될 수 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793518177,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c200f9d99312f45e0eac115dab8519cf030e196c1822267b63d298ba4854eb4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e4cf2d073ed6e53fb733",
          "headline": "메타 이후, 이것이 월스트리트의 다음 블록버스터 주식 분할이 될 수 있습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793479982,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2db57f22e7203ff3914635076defa5ea786c69521259cb944d56df9d61ca6d4a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "13f349f7fe7707be70f9",
          "headline": "메타 플랫폼의 AI 지출이 성과를 거두고 있는지 알아보기 위해 주목해야 할 3가지 수치",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793474460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62cddd48a770c1431a793e5aeb0e2d9d84be3948e899f950f9f2fcb839893afe",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9f2da03fe32d506b0f33",
          "headline": "Broadcom은 430억 달러 규모의 인류 백스톱이 Intel 주도 칩 라우팅을 만나면서 5.5% 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793446685,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8dc2623a1e1874eadc808a7c011499077df58cf4ce1b864f7bbb858135a1a3d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a3e8c6bcd4247102eaf7",
          "headline": "저커버그는 메타의 “핵심 사업이 강하다”고 말했다. S&P는 여전히 전망을 부정적으로 하향",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793446379,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6305495d1312cf251c271642469527687157cb97b9c849c54bb4364303805f91",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793681022,
      "signal": "주의 강화",
      "netScore": -6.72,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.17,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.27,
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
          "score": -3.5,
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
          "eventId": "d1758a863c97ddfe15da",
          "headline": "Apple(AAPL) 2026년 4분기 실적 통화 기록",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793681022,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f959b8415c37ecea9acf7ef42be20335773670b4b0e14066e9cc1d3e17b26fe6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fef9cab88d828a4d1a9c",
          "headline": "아이폰 판매 호조로 메모리 가격 상승으로 애플 공급업체 분할",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793674705,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10e232dea741ead48ae2f5872e9a9b6043646d25fbf787ffb3bc9dea0ce858e0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "e5b39a9cb95a447f2b23",
          "headline": "S&P 500, Nasdaq 하락, Capex 우려로 기술 투자자 장악, 미국-이란 외교 희망보다 중요 — ORCL, META, PLTR, AAPL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9a70de4daf9bfe53dd942cfad843b8cd4eed3f0a808ef7818d3204090d84f3a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9c6e83456369fdeb99d2",
          "headline": "BE 주가는 1GW의 연료전지 용량을 목표로 하는 CRC 제휴로 시간외 반등",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793664642,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8572bf1bf775321d90c7f57ef027c18b09d0f23e9974b110af8945fdc758888c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "804ccabe3d11a2a738a0",
          "headline": "Apple 대 Microsoft: 마진 확장은 Apple의 엄청난 이점입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793634348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a4725095f49094347345b833b78d274f73d99d9a5d44dccbdcca29b269f52fb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a2a9ca16bf69c023b908",
          "headline": "Apple의 새로운 CEO는 칩 비용 상승으로 인해 수익 테스트에 직면해 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793619504,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=defb2bd9b9048b2adaab0dae64499f98e6344ec691cfd19f95d3f636c051f206",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "98ca814c2ecb450267d5",
          "headline": "Stocktwits Tech Watch: Apple과 Palantir가 또 다른 중요한 주에 기술 수입을 시작하고, AMD는 Intel의 경고 이후 칩 논쟁을 해결합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1793608808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96a711f14a98bcc85111e823c97f943286a0b396f40ec01068f0252972a39016",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3cf4075d96bcea8d393e",
          "headline": "Apple의 최신 iPhone이 몇 년 만에 가장 큰 성장의 촉매제가 될 수 있을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793554141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f3ec7ce6e72f17b0ad4a2fb3ea8f14ebe35380a42293db2b5308756ff6f10c6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "26ef2091f1d5f3f77aae",
          "headline": "AAPL SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000024/aapl-20261102.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793658000,
      "signal": "주의 강화",
      "netScore": -3.99,
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
          "score": -2.62,
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
          "eventId": "c0df407b7897043ab750",
          "headline": "Tesla에는 하늘을 나는 자동차가 있습니다. 이것이 Archer의 비행 \"택시\" 사업에 어떤 의미가 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793658000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f71378d1d883a4132525425a9909d99dcc35e1661cc781af906634ec79fa2b9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f4c007650b0f0e7d9fd2",
          "headline": "Gary Black은 SpaceX 합병 위험에 대해 Tesla 주주들에게 경고합니다: Marvell-Lumentum 거래 반응이 조기 경고를 제공한다고 말합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793644278,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea9d46501fd556757bf9a398b2760f2b36b28f425951ad89fe61ad2d2514afd9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "24aee6fb8f89ad55aef9",
          "headline": "Barclays는 SpaceX 합병이 이제 Tesla Bull Case의 \"핵심 부분\"이라고 말합니다. 실제로 이런 일이 발생하면 누가 승자가 되는지, 그리고 누가 비용을 지불하는지 알아보겠습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793567100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd3f88ac456fcaf4decb061e7e61e6100b2aa8ec471a83096350fb887480ba20",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "99384f2522e5c8f1b836",
          "headline": "Tesla의 발전은 여전히 ​​가격에 미치지 못합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793505211,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3cb0b6620643b85dbbd470b4ce727ae3a369eb734eb2199427f191dadfd50e2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793683462,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.52,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -5,
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
          "score": -4.57,
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
          "eventId": "7e2cf7053009bc4d5ff1",
          "headline": "ORCL은 200억 달러 규모의 주식 및 채권 제공 가격을 책정한 후 인치 더 높아졌습니다. 신주는 최종 마감 및 50일 평균 할인 가격으로 책정되었습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793683462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51aec1f2ddba8243d671548848b02ff50fb56c78b143a215a8e5feb2a9fa6412",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e5b39a9cb95a447f2b23",
          "headline": "S&P 500, Nasdaq 하락, Capex 우려로 기술 투자자 장악, 미국-이란 외교 희망보다 중요 — ORCL, META, PLTR, AAPL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9a70de4daf9bfe53dd942cfad843b8cd4eed3f0a808ef7818d3204090d84f3a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c4003350755edc2db143",
          "headline": "오라클 주식 급락은 200억 달러 규모의 주식 및 채권 매각 속에서 600억 달러를 넘어섰습니다. 매각이 기회가 될 수 있는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793638786,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=165320faa83d8c95739118514d2d03c13c243ef767179553415f816754158316",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b5b21de0cbb13a7c2e1c",
          "headline": "ORCL SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526442729/d181425d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "193436c7eb9bb4a49fd1",
          "headline": "ORCL SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526442722/d181336d424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "ae9c0956c41bdca322b8",
          "headline": "ORCL SEC Form S-3ASR 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526442669/d181173ds3asr.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "d990a18f934d1c7043e8",
          "headline": "ORCL 주식은 특히 Oracle이 주요 AI 파트너십을 발표함에 따라 1분기 이후 구축할 수 있는 견고한 기반을 보유하고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793456877,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30a71a7ce7452d0dc8247baddd1ba6b5eedf72a8f50c59dabff8319ff4501f44",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1793702234.2867718,
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
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793665355,
      "signal": "주의 강화",
      "netScore": -9.38,
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
          "score": -2.62,
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
          "eventId": "e5b39a9cb95a447f2b23",
          "headline": "S&P 500, Nasdaq 하락, Capex 우려로 기술 투자자 장악, 미국-이란 외교 희망보다 중요 — ORCL, META, PLTR, AAPL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9a70de4daf9bfe53dd942cfad843b8cd4eed3f0a808ef7818d3204090d84f3a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9c6e83456369fdeb99d2",
          "headline": "BE 주가는 1GW의 연료전지 용량을 목표로 하는 CRC 제휴로 시간외 반등",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793664642,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8572bf1bf775321d90c7f57ef027c18b09d0f23e9974b110af8945fdc758888c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "98ca814c2ecb450267d5",
          "headline": "Stocktwits Tech Watch: Apple과 Palantir가 또 다른 중요한 주에 기술 수입을 시작하고, AMD는 Intel의 경고 이후 칩 논쟁을 해결합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1793608808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96a711f14a98bcc85111e823c97f943286a0b396f40ec01068f0252972a39016",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ff29e520199f7581e30",
          "headline": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793591953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccec5def946c55f8bf32",
          "headline": "INTC, MSFT, META, DASH, VZ: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793584440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e4a503fd35197e2554c09236d3e68c9931e1a00eaa266c3dcf3ac5e8fc2cf315",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b5edbcd361c582cdb2d8",
          "headline": "PLTR SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000045/pltr-20261102.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "5dc062e1414da95ee492",
          "headline": "이번 주 시장에서 기대할 사항: AAPL, PLTR, AMD, SMCI, SHOP, 수익, 채용 보고서 등",
          "eventLabel": "실적 발표",
          "publishedAt": 1793541976,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d16b8085ff0f4b19b91eb7fe8141f1f639bc465eefc1803211670631621e6991",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9f2cdf8a9422c4aff1bd",
          "headline": "연구실 원숭이 가격은 3,000달러에서 20,000달러로 급등한 것으로 알려졌습니다. 이제 Palantir 억만장자는 미국에서 30,000마리를 번식시키고 싶어합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793532600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e43dad412720bfe1833d233d39d09d7f1c1c9e0eebcb84c44e2053d8da67860b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ea7cfb53a2fc8cad1e5",
          "headline": "이번 주 시장에서 기대할 사항: Apple, Palantir 보고서; 10월 채용정보 데이터 랜드",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793527200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df0e9686ac1a54a3e8ac0a0a6201c817b83c466f4898d8475de63e8fd77a6489",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793680204,
      "signal": "우호적 변화",
      "netScore": 2.9,
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
          "score": -3.15,
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
          "score": -4.72,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 3.15,
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
          "eventId": "d1e0253cbb5b49e6ab4e",
          "headline": "Amazon CEO Andy Jassy는 AMZN 주가가 6개월 만에 7% 하락함에 따라 투자자들이 소매업에서 '조금 자고 있다'고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fad852c244f18c65327d7fb2c1efa069de2016531ab01f215f15afab94c04872",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "772e2fd0b1e2be57df7b",
          "headline": "GOOGL Q3 심층 분석: AI 투자가 매출 성장을 주도하지만 이익은 기대에 미치지 못합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d275b182fabb5d961c47402220b945d98910d263c580dffd511e5a26b95af21",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "7abc9fac2edae1f2c6fc",
          "headline": "인텔(INTC)이 7억 달러 규모의 AI 스타트업 펀딩 라운드에 합류했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d6068f6ec451abcd04366c2084c93622cd908a1232790844f5cbde9a5499bae",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "9c6e83456369fdeb99d2",
          "headline": "BE 주가는 1GW의 연료전지 용량을 목표로 하는 CRC 제휴로 시간외 반등",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793664642,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8572bf1bf775321d90c7f57ef027c18b09d0f23e9974b110af8945fdc758888c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "67dd371a496b09062394",
          "headline": "알파벳 시가총액 5천억 달러 손실. 지금 정말 AI 주식을 사야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793661901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16c9bdbe1dcf033deed2cd60ca41093fd8d95561856cc7e479406382699cb870",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "63e6ee6063a531e189ac",
          "headline": "Amazon은 올해 AI에 약 2,200억 달러를 쏟아 붓고 부채 비용을 8월보다 50% 더 많이 보장합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793661749,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25da1317e9026215a9a2f14c32e5f93b905220787af5867ba023b8c6e8c59361",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "39ec88cfb776abada090",
          "headline": "알파벳은 10월에 7,660억 달러의 손실을 입어 사상 최악의 달을 기록했습니다. UBS는 출구로 달려가는 것에 대해 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793661513,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2936d1b06b871c72d0c8b9bd5cd4ed72f33040d87f41465f7cbff4af7e16a13",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "5cee5893be9a47acbdbf",
          "headline": "Coherent: AI 프리미엄은 사라졌지만 수익은 그렇지 않습니다(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793657179,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=234db8c416317ee6768520ffe583b1d469ccd48b8c2c15e082c56ba96885f21d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3af99a61e9f6b7df3335",
          "headline": "Qualcomm(QCOM), AI 보조 베팅에서 7억 달러 규모의 Hark 자금 조달 라운드에 참여",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793646556,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74b08479bce20fa35fa2518a827224be02113f8e8ae940911d5579834361032f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "843deb6aeb9b8ab2d1ab",
          "headline": "Nvidia와 Nike는 토큰화된 주식에 대한 반대의 물결을 주도하고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793640963,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=061c13d7438d48a64c5e5a70c6c2755e23be706ffdcc8016737ebc83728491ea",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1ef303b816a6230b960f",
          "headline": "Sandisk(SNDK), AI 자금 풀기 테스트 부문 신뢰도에 따라 메모리 복구 표시",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793639453,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d99be5412c581ba37c5d28b60d3e61a7090519db5fd6f7e1f0cc20a6a1de39b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "3c746a581b760a1265f6",
          "headline": "200억 달러 규모의 AI 자금 조달 계획 출시 후 오라클 주가 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793636800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d6af92495a554592a45157b4f4bfd88eec03c3a3cced7e01e6fe9be2a09305c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 27,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793683462,
      "signal": "우호적 변화",
      "netScore": 4.42,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.62,
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
          "score": -2.27,
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
          "eventId": "7e2cf7053009bc4d5ff1",
          "headline": "ORCL은 200억 달러 규모의 주식 및 채권 제공 가격을 책정한 후 인치 더 높아졌습니다. 신주는 최종 마감 및 50일 평균 할인 가격으로 책정되었습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793683462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51aec1f2ddba8243d671548848b02ff50fb56c78b143a215a8e5feb2a9fa6412",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d1e0253cbb5b49e6ab4e",
          "headline": "Amazon CEO Andy Jassy는 AMZN 주가가 6개월 만에 7% 하락함에 따라 투자자들이 소매업에서 '조금 자고 있다'고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fad852c244f18c65327d7fb2c1efa069de2016531ab01f215f15afab94c04872",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "772e2fd0b1e2be57df7b",
          "headline": "GOOGL Q3 심층 분석: AI 투자가 매출 성장을 주도하지만 이익은 기대에 미치지 못합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d275b182fabb5d961c47402220b945d98910d263c580dffd511e5a26b95af21",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "98a6fac26d9989c776b7",
          "headline": "3분기 수익 및 AI 파트너십 업데이트 이전에 AMD 주식이 주목받는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793672110,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a765d74c9732cde7e290d595c32b6bfc7277949b607069c785595cb01917b6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e5b39a9cb95a447f2b23",
          "headline": "S&P 500, Nasdaq 하락, Capex 우려로 기술 투자자 장악, 미국-이란 외교 희망보다 중요 — ORCL, META, PLTR, AAPL 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9a70de4daf9bfe53dd942cfad843b8cd4eed3f0a808ef7818d3204090d84f3a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7abc9fac2edae1f2c6fc",
          "headline": "인텔(INTC)이 7억 달러 규모의 AI 스타트업 펀딩 라운드에 합류했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d6068f6ec451abcd04366c2084c93622cd908a1232790844f5cbde9a5499bae",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9c6e83456369fdeb99d2",
          "headline": "BE 주가는 1GW의 연료전지 용량을 목표로 하는 CRC 제휴로 시간외 반등",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793664642,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8572bf1bf775321d90c7f57ef027c18b09d0f23e9974b110af8945fdc758888c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "67dd371a496b09062394",
          "headline": "알파벳 시가총액 5천억 달러 손실. 지금 정말 AI 주식을 사야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793661901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16c9bdbe1dcf033deed2cd60ca41093fd8d95561856cc7e479406382699cb870",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "63e6ee6063a531e189ac",
          "headline": "Amazon은 올해 AI에 약 2,200억 달러를 쏟아 붓고 부채 비용을 8월보다 50% 더 많이 보장합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793661749,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25da1317e9026215a9a2f14c32e5f93b905220787af5867ba023b8c6e8c59361",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "39ec88cfb776abada090",
          "headline": "알파벳은 10월에 7,660억 달러의 손실을 입어 사상 최악의 달을 기록했습니다. UBS는 출구로 달려가는 것에 대해 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793661513,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2936d1b06b871c72d0c8b9bd5cd4ed72f33040d87f41465f7cbff4af7e16a13",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "3af99a61e9f6b7df3335",
          "headline": "Qualcomm(QCOM), AI 보조 베팅에서 7억 달러 규모의 Hark 자금 조달 라운드에 참여",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793646556,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74b08479bce20fa35fa2518a827224be02113f8e8ae940911d5579834361032f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "8eb3bbe6961c6a64ea58",
          "headline": "PC에 대한 우려가 지속되면서 AMD는 수익보다 3% 앞섰습니다. Intel 하락 5%, NVIDIA Edge 상승",
          "eventLabel": "실적 발표",
          "publishedAt": 1793641761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4339102276a64e65c6e8a7dd8df94c5b0aece0b6cece66e94cf3d69eaab38b01",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 26,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793627119,
      "signal": "중립·확인 대기",
      "netScore": -0.21,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "a2fa0fdf1e102099d00f",
          "headline": "Broadcom의 공급 병목 현상 - 수요가 아님 - 계속해서 투자자에게 할인 제공 계속 구매",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793627119,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6f17a6a0737af0e851780c30e584338b216ea82d55bc510d53980edc7625fe6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b7ae7e1361c8219d8f90",
          "headline": "Marvell은 Lumentum Talks에서 일주일 만에 14% 하락: 칩 제조업체들은 \"선택의 여지가 없다\"고 좋아합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793455676,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d24e99c282495f8443c811863b4c5d17e75bfdc67fc718bc7d172edff74db37b",
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
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793646556,
      "signal": "주의 강화",
      "netScore": -3.08,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.7,
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
          "eventId": "3af99a61e9f6b7df3335",
          "headline": "Qualcomm(QCOM), AI 보조 베팅에서 7억 달러 규모의 Hark 자금 조달 라운드에 참여",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793646556,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74b08479bce20fa35fa2518a827224be02113f8e8ae940911d5579834361032f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a2a9ca16bf69c023b908",
          "headline": "Apple의 새로운 CEO는 칩 비용 상승으로 인해 수익 테스트에 직면해 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793619504,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=defb2bd9b9048b2adaab0dae64499f98e6344ec691cfd19f95d3f636c051f206",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "3cf4075d96bcea8d393e",
          "headline": "Apple의 최신 iPhone이 몇 년 만에 가장 큰 성장의 촉매제가 될 수 있을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793554141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f3ec7ce6e72f17b0ad4a2fb3ea8f14ebe35380a42293db2b5308756ff6f10c6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793680739,
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
          "eventId": "f0d4709f2e6210c6ff33",
          "headline": "Arm Holdings 주식이 지난달 29% 하락한 이유",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793680739,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99d29b77a80daf812badc77e5182bd802400341f33c8c87b82595a9ebbf67636",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793664642,
      "signal": "주의 강화",
      "netScore": -4.28,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -5,
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
          "score": -4.2,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.72,
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
          "eventId": "9c6e83456369fdeb99d2",
          "headline": "BE 주가는 1GW의 연료전지 용량을 목표로 하는 CRC 제휴로 시간외 반등",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793664642,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8572bf1bf775321d90c7f57ef027c18b09d0f23e9974b110af8945fdc758888c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4bf9e1a1d1a1460e7678",
          "headline": "Marvell Technology가 Lumentum을 인수했습니다. 시장이 이러한 움직임을 싫어하는 이유는 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793658122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d7065dd1a878d9240fc1cceab0940107f3c8a7fb2e6122894d15fdf1d2032a54",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0fb3263cd8b7679468bc",
          "headline": "오늘, 11월 2일 주식 시장: Marvell, Lumentum의 전체 주식 인수를 1,150억 달러에 발표",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793657180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a4fd718e5788179e26197f3e976c8e5b7230558bb32d9c1e118514b908ee5b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a9413a098b52f5d8c734",
          "headline": "Marvell 주식은 시너지 효과보다 희석을 앞둔 Lumentum 거래로 6.8% 하락했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793645641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57e1155d54d82bd8c5a1539cd4e5ceaa3e233741be0f32f783878805e65b46d4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "f4c007650b0f0e7d9fd2",
          "headline": "Gary Black은 SpaceX 합병 위험에 대해 Tesla 주주들에게 경고합니다: Marvell-Lumentum 거래 반응이 조기 경고를 제공한다고 말합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793644278,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea9d46501fd556757bf9a398b2760f2b36b28f425951ad89fe61ad2d2514afd9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5f4341f3c6e4b3457db4",
          "headline": "Marvell은 1,150억 달러 규모의 전체 주식 거래로 Lumentum을 인수하기로 합의했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793636100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c18454a70f51837d304af0136b6833e1ce2fdcb88367468b37f7e28b7b3c97c0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a207a2c4893c95bc9e2f",
          "headline": "Marvell Technology, Lumentum 거래로 5,500억 달러 규모의 AI 광학 시장 목표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793636043,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=183fee04630f6909cd87a3b73d0557c4841a18f06334b3ba99fb97293a513715",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0f91264d79c8938d5fa4",
          "headline": "COHR 주식은 Marvell의 1,150억 달러 Lumentum 거래로 '희귀한 AI 광학의 가치'를 강조하면서 업그레이드됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793634606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=719c8dbbdf4f4e3bc3986ec3982fbc8d91732dcbdbd2ddc969d142cf328be7f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f8a88675e87c63411f49",
          "headline": "Marvell 슬라이드 3%, Lumentum 6% 하락, 1,150억 달러 규모의 전체 주식 합병 거래; 일관된 등반 2%",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793627606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8182ed48e431f44c442203bca9424f06d0174d7b421b1ee2dd155cc82f62cb4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cfce5182cf44d181e133",
          "headline": "Marvell 슬라이드 3%, Lumentum 6% 하락, 1,150억 달러 규모의 전체 주식 합병 거래; 일관된 등반 2%",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793627606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8182ed48e431f44c442203bca9424f06d0174d7b421b1ee2dd155cc82f62cb4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "db27c9a8359ac675a2e7",
          "headline": "Phillip Securities는 Amazon의 '강력한 수요 가시성'이 공격적인 Capex를 지원한다고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793618567,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=730c45fa87555303b45b660a88e2feaa9d3e4bc8a1c83449aec6a29993071143",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "de711abd7ab0465c44a6",
          "headline": "MU, SNDK, DRAM은 혼합 주 이후 밤새 인치 상승: 일본의 KIOXIA는 신중한 메모리 전망 이후 급락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793585348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4ef859cecf66347c1490cd4caf8a778f2fa34b64340db3c0ef829d7fe87c4098",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 15,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793665636,
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
          "score": -4.02,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -3.67,
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
          "eventId": "2ef99685657673613107",
          "headline": "인텔: 새로운 좌절로 인해 투자자들은 당연히 실망하게 되었습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793665636,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d7c5dd5a381ff90e7f4380268942ee7c8736e4f6efc9612db8bf9287a25ef889",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7abc9fac2edae1f2c6fc",
          "headline": "인텔(INTC)이 7억 달러 규모의 AI 스타트업 펀딩 라운드에 합류했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d6068f6ec451abcd04366c2084c93622cd908a1232790844f5cbde9a5499bae",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8eb3bbe6961c6a64ea58",
          "headline": "PC에 대한 우려가 지속되면서 AMD는 수익보다 3% 앞섰습니다. Intel 하락 5%, NVIDIA Edge 상승",
          "eventLabel": "실적 발표",
          "publishedAt": 1793641761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4339102276a64e65c6e8a7dd8df94c5b0aece0b6cece66e94cf3d69eaab38b01",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c671cff556d4377dc887",
          "headline": "Arm Holdings는 Intel의 경고로 인해 거의 10% 하락했는데, 이는 옵션이 자체 보고서를 통해 움직일 것으로 예상하는 정도입니다. 11월 4일에 보여줄 내용은 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793626004,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fc43b979ab3dd6359dcf02fc6593a9e7cc3ebcc1e757539d5103089a0efef15",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ad75b069f9eadd380482",
          "headline": "Applied Materials는 Besi 지분을 두 배로 늘린 후 Intel의 칩 판매 며칠 만에 7.5% 하락했습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1793624952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d79ba39556c3e1159840c4424ad6c827729d4a5ecfbf08d01b5bd308dfbc4db4",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "77fa4066bb66065db7a4",
          "headline": "ASML은 Intel의 칩 대패로 6% 하락했습니다. CEO \"공급이 수요를 완전히 충족시키지 못할 것\"",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793624546,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f67e4e6fd88cb6a7f4a1759e7f48f8960f9ef024ec5eb9e7367cbf54840265b0",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f7e2a4658d66849aae9d",
          "headline": "인텔 대 대만 반도체: AI 붐은 매우 다른 두 가지 이야기를 전하고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793614802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b21cef3ebc0910c73bbe478c66b8c5fd3cb42c32fbdf81fdf94a6eba2cff37fc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "98ca814c2ecb450267d5",
          "headline": "Stocktwits Tech Watch: Apple과 Palantir가 또 다른 중요한 주에 기술 수입을 시작하고, AMD는 Intel의 경고 이후 칩 논쟁을 해결합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1793608808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96a711f14a98bcc85111e823c97f943286a0b396f40ec01068f0252972a39016",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ff29e520199f7581e30",
          "headline": "INTC, AMZN, GOOGL 주식은 잔인한 주간 이후 밤새 상승했습니다. Dan Niles는 AI 위험이 거대 기술 수익에 나타나는 것으로 봅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793591953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30aa5dda2d596d829977f6075669b16b1e52117a6236f79be95fc221a960e4cc",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2d03cc21c8b42a1ef360",
          "headline": "인텔 주식 붕괴. 내가 아직도 주식을 사지 않는 이유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793586000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=956076ab1583728d6e1200c99e731f662f42bb7972c39df2fc7393eb33609e0c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccec5def946c55f8bf32",
          "headline": "INTC, MSFT, META, DASH, VZ: 지난 주 소매 거래자들이 이 주식에서 눈을 뗄 수 없었던 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793584440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e4a503fd35197e2554c09236d3e68c9931e1a00eaa266c3dcf3ac5e8fc2cf315",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dca8de5058cab8dad94e",
          "headline": "인텔: PC 수요 파괴와 AI 공급 역풍이 만나 이익 실현이 계속되고 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793532536,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=648a904926833833fe9ba71f0f047adaeaee6929826c2144f25222c8b82192b0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793614802,
      "signal": "중립·확인 대기",
      "netScore": -0.56,
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
          "score": -0.7,
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
          "eventId": "f7e2a4658d66849aae9d",
          "headline": "인텔 대 대만 반도체: AI 붐은 매우 다른 두 가지 이야기를 전하고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793614802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b21cef3ebc0910c73bbe478c66b8c5fd3cb42c32fbdf81fdf94a6eba2cff37fc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "da2a254f75cb48c6de1a",
          "headline": "대만 반도체 제조 (TSM), 피닉스 팹 주변 신규 선벨트 부동산 펀드 유치",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793477366,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c869f047ab09287a60c5a32300c5b57c7168fc6de437545b887b2290306ddd40",
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
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1793702234.2867718,
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1793702234.2867718,
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1793702234.2867718,
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
      "updatedAt": 1793702234.2867718,
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
    "MU": {
      "ticker": "MU",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793680204,
      "signal": "우호적 변화",
      "netScore": 4.75,
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
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.72,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 3.85,
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
          "eventId": "d1e0253cbb5b49e6ab4e",
          "headline": "Amazon CEO Andy Jassy는 AMZN 주가가 6개월 만에 7% 하락함에 따라 투자자들이 소매업에서 '조금 자고 있다'고 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fad852c244f18c65327d7fb2c1efa069de2016531ab01f215f15afab94c04872",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "772e2fd0b1e2be57df7b",
          "headline": "GOOGL Q3 심층 분석: AI 투자가 매출 성장을 주도하지만 이익은 기대에 미치지 못합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793680176,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d275b182fabb5d961c47402220b945d98910d263c580dffd511e5a26b95af21",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7abc9fac2edae1f2c6fc",
          "headline": "인텔(INTC)이 7억 달러 규모의 AI 스타트업 펀딩 라운드에 합류했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793665021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d6068f6ec451abcd04366c2084c93622cd908a1232790844f5cbde9a5499bae",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "67dd371a496b09062394",
          "headline": "알파벳 시가총액 5천억 달러 손실. 지금 정말 AI 주식을 사야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793661901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16c9bdbe1dcf033deed2cd60ca41093fd8d95561856cc7e479406382699cb870",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "63e6ee6063a531e189ac",
          "headline": "Amazon은 올해 AI에 약 2,200억 달러를 쏟아 붓고 부채 비용을 8월보다 50% 더 많이 보장합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793661749,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25da1317e9026215a9a2f14c32e5f93b905220787af5867ba023b8c6e8c59361",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "39ec88cfb776abada090",
          "headline": "알파벳은 10월에 7,660억 달러의 손실을 입어 사상 최악의 달을 기록했습니다. UBS는 출구로 달려가는 것에 대해 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793661513,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2936d1b06b871c72d0c8b9bd5cd4ed72f33040d87f41465f7cbff4af7e16a13",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "3af99a61e9f6b7df3335",
          "headline": "Qualcomm(QCOM), AI 보조 베팅에서 7억 달러 규모의 Hark 자금 조달 라운드에 참여",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793646556,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74b08479bce20fa35fa2518a827224be02113f8e8ae940911d5579834361032f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "1ef303b816a6230b960f",
          "headline": "Sandisk(SNDK), AI 자금 풀기 테스트 부문 신뢰도에 따라 메모리 복구 표시",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793639453,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d99be5412c581ba37c5d28b60d3e61a7090519db5fd6f7e1f0cc20a6a1de39b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "3c746a581b760a1265f6",
          "headline": "200억 달러 규모의 AI 자금 조달 계획 출시 후 오라클 주가 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793636800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d6af92495a554592a45157b4f4bfd88eec03c3a3cced7e01e6fe9be2a09305c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "87c27706bb2bd4469a4b",
          "headline": "마이크론은 \"시장이 2~3년 안에 붕괴할 것\"이라고 가정한 루멘텀 거래에서 진정한 패자다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793636527,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c64627b592b2809ebf7940cbcd7c6e2776bd55723149b59fbf34a42597deaa7f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1c2005814cfe214c0de1",
          "headline": "'11월 3일까지 달력 표시' Tom Lee는 나스닥 100 지수가 2025년 3월 이후 최악의 달 이후 하락세를 매수하기를 기다리고 있다고 투자자들이 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793631864,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c89b45e582921f5bd14ae65be66ee9e91cfa2a1f764f16eae3d8d76d5db6506",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "872735e8ac1ee247ad4b",
          "headline": "메모리 칩 부족이 2030년까지 지속될 수 있어 마이크론 주가 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793628171,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=355ea701dbf0f6152869edad41649abf361fcf77378d81b272893b81ddf95950",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 27,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793672402,
      "signal": "중립·확인 대기",
      "netScore": -0.7,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
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
          "score": -1.57,
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
          "eventId": "fedb5b3e97ea08f975db",
          "headline": "Credo vs. Sandisk: 2027년에는 어느 주식을 사는 것이 더 나을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793672402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01853868b5e5589bf8aa7ff801533bd8886e585e021b635e3d1c331d61df6433",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1ef303b816a6230b960f",
          "headline": "Sandisk(SNDK), AI 자금 풀기 테스트 부문 신뢰도에 따라 메모리 복구 표시",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793639453,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d99be5412c581ba37c5d28b60d3e61a7090519db5fd6f7e1f0cc20a6a1de39b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c49e39e9286f97df5742",
          "headline": "Sandisk: 바닥을 기다려라(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793577920,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e9d4048d12289b6476b45b2cebce9f69100065b0b3968ed5b0ccf5898dc22f0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3618b340cbb3b789db25",
          "headline": "SanDisk CEO David Goeckeler는 고객이 공급을 확보하고 더 많은 것을 위해 돌아오면서 '엄청난 수요 증가'를 보고 있습니다. 파이프라인은 2030년까지 운영됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793536205,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddad07457d45b58582acc92fe32dc93c233b390ca8939e279fe99617b2d14d3a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e88df904ed4a976ce338",
          "headline": "가이드 수익의 약 5배에 Sandisk 주식을 구매해야 합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793525821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccffeb4298bafa1a447197f33ae1cc46df4a0ee7f44b52feea29f3cb03a94059",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793619504,
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
          "score": -1.57,
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
          "eventId": "a2a9ca16bf69c023b908",
          "headline": "Apple의 새로운 CEO는 칩 비용 상승으로 인해 수익 테스트에 직면해 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793619504,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=defb2bd9b9048b2adaab0dae64499f98e6344ec691cfd19f95d3f636c051f206",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "3cf4075d96bcea8d393e",
          "headline": "Apple의 최신 iPhone이 몇 년 만에 가장 큰 성장의 촉매제가 될 수 있을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793554141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f3ec7ce6e72f17b0ad4a2fb3ea8f14ebe35380a42293db2b5308756ff6f10c6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "991337b25ca4056de65b",
          "headline": "Seagate: 진짜 위험은 Toshiba가 아니라 2028년 공급 물결입니다(다운그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793486591,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2c790ea13489ecf284713cf69cf1c23568e47798e28c3451632f3a9a083dcf5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1793702234.2867718,
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
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793657179,
      "signal": "주의 강화",
      "netScore": -4.9,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.7,
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
          "score": -3.15,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.27,
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
          "eventId": "5cee5893be9a47acbdbf",
          "headline": "Coherent: AI 프리미엄은 사라졌지만 수익은 그렇지 않습니다(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793657179,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=234db8c416317ee6768520ffe583b1d469ccd48b8c2c15e082c56ba96885f21d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0f91264d79c8938d5fa4",
          "headline": "COHR 주식은 Marvell의 1,150억 달러 Lumentum 거래로 '희귀한 AI 광학의 가치'를 강조하면서 업그레이드됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793634606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=719c8dbbdf4f4e3bc3986ec3982fbc8d91732dcbdbd2ddc969d142cf328be7f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f8a88675e87c63411f49",
          "headline": "Marvell 슬라이드 3%, Lumentum 6% 하락, 1,150억 달러 규모의 전체 주식 합병 거래; 일관된 등반 2%",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793627606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8182ed48e431f44c442203bca9424f06d0174d7b421b1ee2dd155cc82f62cb4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "cfce5182cf44d181e133",
          "headline": "Marvell 슬라이드 3%, Lumentum 6% 하락, 1,150억 달러 규모의 전체 주식 합병 거래; 일관된 등반 2%",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793627606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8182ed48e431f44c442203bca9424f06d0174d7b421b1ee2dd155cc82f62cb4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cd44d79b0e0468c31796",
          "headline": "코히런트: 작년 가격으로 축적할 수 있는 절호의 기회(1분기 미리보기)",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793608031,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dea73d32974f160dbd4eb57a108916681632ba5e0360a7c108ce96fc946de201",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b7ae7e1361c8219d8f90",
          "headline": "Marvell은 Lumentum Talks에서 일주일 만에 14% 하락: 칩 제조업체들은 \"선택의 여지가 없다\"고 좋아합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793455676,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d24e99c282495f8443c811863b4c5d17e75bfdc67fc718bc7d172edff74db37b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793658122,
      "signal": "주의 강화",
      "netScore": -3.7,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.32,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -5,
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
          "score": -4.02,
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
          "eventId": "4bf9e1a1d1a1460e7678",
          "headline": "Marvell Technology가 Lumentum을 인수했습니다. 시장이 이러한 움직임을 싫어하는 이유는 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793658122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d7065dd1a878d9240fc1cceab0940107f3c8a7fb2e6122894d15fdf1d2032a54",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0fb3263cd8b7679468bc",
          "headline": "오늘, 11월 2일 주식 시장: Marvell, Lumentum의 전체 주식 인수를 1,150억 달러에 발표",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793657180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a4fd718e5788179e26197f3e976c8e5b7230558bb32d9c1e118514b908ee5b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a9413a098b52f5d8c734",
          "headline": "Marvell 주식은 시너지 효과보다 희석을 앞둔 Lumentum 거래로 6.8% 하락했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793645641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57e1155d54d82bd8c5a1539cd4e5ceaa3e233741be0f32f783878805e65b46d4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f4c007650b0f0e7d9fd2",
          "headline": "Gary Black은 SpaceX 합병 위험에 대해 Tesla 주주들에게 경고합니다: Marvell-Lumentum 거래 반응이 조기 경고를 제공한다고 말합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793644278,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea9d46501fd556757bf9a398b2760f2b36b28f425951ad89fe61ad2d2514afd9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "87c27706bb2bd4469a4b",
          "headline": "마이크론은 \"시장이 2~3년 안에 붕괴할 것\"이라고 가정한 루멘텀 거래에서 진정한 패자다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793636527,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c64627b592b2809ebf7940cbcd7c6e2776bd55723149b59fbf34a42597deaa7f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "02f62802c9d7eb0870f9",
          "headline": "마이크론은 \"시장이 2~3년 안에 붕괴할 것\"이라고 가정한 루멘텀 거래에서 진정한 패자다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793636527,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c64627b592b2809ebf7940cbcd7c6e2776bd55723149b59fbf34a42597deaa7f",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5f4341f3c6e4b3457db4",
          "headline": "Marvell은 1,150억 달러 규모의 전체 주식 거래로 Lumentum을 인수하기로 합의했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793636100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c18454a70f51837d304af0136b6833e1ce2fdcb88367468b37f7e28b7b3c97c0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a207a2c4893c95bc9e2f",
          "headline": "Marvell Technology, Lumentum 거래로 5,500억 달러 규모의 AI 광학 시장 목표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793636043,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=183fee04630f6909cd87a3b73d0557c4841a18f06334b3ba99fb97293a513715",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0f91264d79c8938d5fa4",
          "headline": "COHR 주식은 Marvell의 1,150억 달러 Lumentum 거래로 '희귀한 AI 광학의 가치'를 강조하면서 업그레이드됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793634606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=719c8dbbdf4f4e3bc3986ec3982fbc8d91732dcbdbd2ddc969d142cf328be7f2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f8a88675e87c63411f49",
          "headline": "Marvell 슬라이드 3%, Lumentum 6% 하락, 1,150억 달러 규모의 전체 주식 합병 거래; 일관된 등반 2%",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793627606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8182ed48e431f44c442203bca9424f06d0174d7b421b1ee2dd155cc82f62cb4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cfce5182cf44d181e133",
          "headline": "Marvell 슬라이드 3%, Lumentum 6% 하락, 1,150억 달러 규모의 전체 주식 합병 거래; 일관된 등반 2%",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793627606,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8182ed48e431f44c442203bca9424f06d0174d7b421b1ee2dd155cc82f62cb4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "db27c9a8359ac675a2e7",
          "headline": "Phillip Securities는 Amazon의 '강력한 수요 가시성'이 공격적인 Capex를 지원한다고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793618567,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=730c45fa87555303b45b660a88e2feaa9d3e4bc8a1c83449aec6a29993071143",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1793702234.2867718,
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
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793653954,
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
          "eventId": "6d4587721008beb9cd12",
          "headline": "Constellation Energy vs. NextEra Energy: 2027년에는 어느 유틸리티 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793653954,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c4ec679f6db9beccdf6172a976420812da1c10b9dbf5f9a61aebb65f4c57f9a5",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1793702234.2867718,
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1793702234.2867718,
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
      "updatedAt": 1793702234.2867718,
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
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793608522,
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
          "eventId": "7c55bced525aa6340965",
          "headline": "허벨: 전기화 기회를 이끄는 두 가지 성장 엔진",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793608522,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5cf1993ab273bd1be233b0ad2b93915b0c592c7e6b4007583f8d26ed39f0b2b5",
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
    "VRT": {
      "ticker": "VRT",
      "updatedAt": 1793702234.2867718,
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
      "updatedAt": 1793702234.2867718,
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
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793603055,
      "signal": "중립·확인 대기",
      "netScore": -0.48,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.18,
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
          "eventId": "1fdd62a811df5f2a7568",
          "headline": "Seagate가 여전히 귀하가 구매한 사업입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793603055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0754beb2c6a959972783e9ee6e21e1a5349d2efaecd4258be01185a16feea01d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "991337b25ca4056de65b",
          "headline": "Seagate: 진짜 위험은 Toshiba가 아니라 2028년 공급 물결입니다(다운그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793486591,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2c790ea13489ecf284713cf69cf1c23568e47798e28c3451632f3a9a083dcf5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1793702234.2867718,
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
      "updatedAt": 1793702234.2867718,
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1793702234.2867718,
      "dataAsOf": 1793664642,
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
          "eventId": "9c6e83456369fdeb99d2",
          "headline": "BE 주가는 1GW의 연료전지 용량을 목표로 하는 CRC 제휴로 시간외 반등",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793664642,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8572bf1bf775321d90c7f57ef027c18b09d0f23e9974b110af8945fdc758888c",
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
    }
  }
};
