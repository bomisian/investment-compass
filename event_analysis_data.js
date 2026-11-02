// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1793657801.1021523,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793634348,
      "signal": "주의 강화",
      "netScore": -3.83,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.88,
          "level": "중립"
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
          "score": -2.05,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.82,
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
        },
        {
          "eventId": "92a9b0cdf20264e63e37",
          "headline": "Microsoft: Azure 성장율 48%, 아직 용량이 충분하지 않음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793385072,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee6bc40590ad9a9297e1b283be8caf536159a1639b5ec878f55881b6f93c02e9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793641514,
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
          "score": 0.0,
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
          "score": -4.15,
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
        },
        {
          "eventId": "ec689f09a585d4788173",
          "headline": "엔비디아는 한 달 만에 11% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793434017,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca315ceb1c09466e33895c42865dbdf07fb056318ad7781267a642d1f54b9938",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8085f97dbf2dc072ed97",
          "headline": "알파벳: 12% 하락 후 부품 가치는 주당 약 337달러입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793404740,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43a4f26ac3240435c2568b2fc90b657f94943587c9948e752362827b99e66689",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "368b41fdf70a02fd574f",
          "headline": "Google의 AI 검색이 트래픽과 사용자 증가에 타격을 주면서 Reddit 주가는 30% 급락했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793388662,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=298366f9c22a828f3769a949fd98357eef5465e9a3d642c1430583504f14a4a4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bafa7271d3086be0d412",
          "headline": "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권이 주식보다 더 나은 기회를 제공한다고 BofA는 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793382914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140c11f582fab1e9b8596a6940e26df2a11d6b9c6a7f972984cc28434ed23755",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793591953,
      "signal": "주의 강화",
      "netScore": -7.05,
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
          "score": -2.97,
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
        },
        {
          "eventId": "006e8a8b4f47da414422",
          "headline": "Apple, 투자자로서 꽉 찬 수익 캘린더 주도 Eye Tech, Pharma 결과",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793444400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=830af5c87daf35a8f602c2ec6680ca3553df23bdc7beabc0bcac73d5ef2dce14",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8b74984edb37f833ba11",
          "headline": "Qualcomm 수익 미리보기: 150억 달러 규모의 AI 목표는 여전히 오늘날의 가격을 정당화하지 못합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793443050,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64603d2ad227a174af26847836359df71ae1b323f11aede2e2702812d57ac37e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8b5c56426402a46b9721",
          "headline": "S&P 500, Nasdaq은 투자자들이 기술, AI에서 멀어짐에 따라 3주 연속 하락 마감 — AMZN, INTC, LLY, RBLX 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793405139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f910b2c47ad6d48765be636222f6aeb2210ae6a085a1b96532370a41075f104",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bafa7271d3086be0d412",
          "headline": "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권이 주식보다 더 나은 기회를 제공한다고 BofA는 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793382914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140c11f582fab1e9b8596a6940e26df2a11d6b9c6a7f972984cc28434ed23755",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793641514,
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
          "score": 0.18,
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
          "score": -4.37,
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
        },
        {
          "eventId": "d0e63f3e665325002d91",
          "headline": "Meta Stock은 10월에 15% 하락했으며 S&P는 710억 달러의 현금 흐름 적자를 예측했습니다. 2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793428613,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c0e751eb46c0cfa05f5836da3439a664bfc1e3c62daada8bb52f55cca6c7b48",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "061710eddcd3130215c6",
          "headline": "메타(META) 주식은 뮤즈와 자금 조달이 토론을 주도함에 따라 적당한 공정 가치 상승을 봅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793383804,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a5a12b38bb8670431b6bfe950375367a074e4c0b05b41f69d8a333e08c954ae1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bafa7271d3086be0d412",
          "headline": "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권이 주식보다 더 나은 기회를 제공한다고 BofA는 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793382914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140c11f582fab1e9b8596a6940e26df2a11d6b9c6a7f972984cc28434ed23755",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
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
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793634348,
      "signal": "주의 강화",
      "netScore": -7.27,
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
          "score": -3.67,
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
          "eventId": "8b74984edb37f833ba11",
          "headline": "Qualcomm 수익 미리보기: 150억 달러 규모의 AI 목표는 여전히 오늘날의 가격을 정당화하지 못합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793443050,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64603d2ad227a174af26847836359df71ae1b323f11aede2e2702812d57ac37e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a8134328fd692556ef21",
          "headline": "Apple의 가장 큰 위협은 Android가 아닙니다. 분석가는 4분기 실적을 앞두고 AAPL 자체 기기라고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793430907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d6a4755c644d1653996a8d2f144acc6ce849d623ae1c5b636f062459cd02d38",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793567100,
      "signal": "주의 강화",
      "netScore": -5.95,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.7,
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
        },
        {
          "eventId": "3a07a2edbc96bcdfcc06",
          "headline": "SpaceX와 Tesla 합병은 이 한 가지 일이 일어날 경우에만 성공할 것입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793429400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0321a7621bf1542528247f2d86b8ed42807a515b6961828be90f27d97011f313",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ba6a81a53297c26be7b8",
          "headline": "Tesla-SpaceX 합병은 중국에서 가장 큰 규제 위험에 직면할 수 있다고 BofA는 경고했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793383139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd4292130031202f74b1623152887dd7bc111a8cc9174c1fd0b1e5905b4b6d60",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "71065390b1f9cd7d60d2",
          "headline": "Tesla는 새로운 수익원을 창출할 수 있습니다. 주식을 살 시간인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793380141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f8150f7f30f690a09fd6311878d2b888ee0873a7439bca1400b351e52dcddb3e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793638786,
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
          "score": 1.05,
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
          "score": -4.05,
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
        },
        {
          "eventId": "bafa7271d3086be0d412",
          "headline": "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권이 주식보다 더 나은 기회를 제공한다고 BofA는 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793382914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140c11f582fab1e9b8596a6940e26df2a11d6b9c6a7f972984cc28434ed23755",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793402483,
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
          "eventId": "788cc7003b8f4e178fdd",
          "headline": "국방 기술 스타트업 Rune에 대한 3억 7,500만 달러 규모의 거래로 Salesforce의 M&A가 계속되고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793402483,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0443800ddf46293c1da6d8109be691a21d454773ab480b1a15493b749ade90e1",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793608808,
      "signal": "주의 강화",
      "netScore": -5.17,
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
          "score": -1.05,
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
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793640963,
      "signal": "우호적 변화",
      "netScore": 4.65,
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
          "score": 2.8,
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
        },
        {
          "eventId": "461d85aabc259d1a5f6a",
          "headline": "엔비디아가 유일한 AI 승자가 아닙니다. Qualcomm은 주목할만한 다음 주식이 될 수 있습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793633622,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32325b77988c9f5e6b294d26c24f66d2409ab9eeeb06cf69f014ac80f42a0f3b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "f44ba7ece204799ef1f6",
          "headline": "Lumentum 수익 미리보기: AI 붐은 이미 가격에 반영되었습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793533200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44cb3cbacafe19fcb3f1b427b49a04c93032dae4785ed4920b7ecd656356c91d",
          "factorChanges": {
            "businessRisk": -2,
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "eventId": "10b87b6eeccc20854a04",
          "headline": "Nvidia Q3 FY2027 미리보기: Fabless 모델은 2,790억 달러의 각주를 받았습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793512167,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=103e92aac81d8a6c4e2d9aa5369a1008822986727f510206c0e921d4aa8ceb55",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 21,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793641761,
      "signal": "우호적 변화",
      "netScore": 6.24,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 3.68,
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
          "score": -1.4,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 3.33,
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "921052a0ce65ae3ad87f",
          "headline": "AMD, Arista, Supermicro 수익 미리보기: AI 인프라가 금요일의 대패를 막을 수 있을까요?",
          "eventLabel": "실적 발표",
          "publishedAt": 1793622021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37663fc847b40eeacdd7a9518ea0e28b2b345fc40624f964b4287c8914805ac9",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f87340c6ad9a1e22b938",
          "headline": "Amazon은 더 많은 데이터 센터에 자금을 지원하기 위해 자체 데이터 센터 장비를 빌리고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793461684,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66687a88aa2277b590ef30830abec06562cd19731444b650782099b696544d0f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e870ac582b3ab561df69",
          "headline": "Intel은 AMD 주식 투자자들에게 대규모 경고를 보냅니다. 11월 3일 이전에 수익을 장담해야 할 때인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793461321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=83aad663f6eaa937cae162578455c434bf35bcd03a7f792250bcb6d0d89c5056",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 20,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793627119,
      "signal": "중립·확인 대기",
      "netScore": -0.07,
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
        },
        {
          "eventId": "6069da803337a7f4aa85",
          "headline": "Broadcom 주식 전망은 AI 칩 성장과 인류적 파트너십에 달려 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793383830,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=098a3aad6d8eaa9e9d3e9ad50266a2fde26d457610a8efa0d790e98dff7f10a1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d70dbed3ba8a2de28e9a",
          "headline": "역사는 지금이 Broadcom 주식을 매수하기에 완벽한 시기라고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793381700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f5a72f82f0f1696ad7707d35f865192f7e36b9c799be6d2ce3b662e04ccd8f5",
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
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793619504,
      "signal": "주의 강화",
      "netScore": -6.57,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.87,
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
          "score": -3.67,
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
        },
        {
          "eventId": "8b74984edb37f833ba11",
          "headline": "Qualcomm 수익 미리보기: 150억 달러 규모의 AI 목표는 여전히 오늘날의 가격을 정당화하지 못합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793443050,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64603d2ad227a174af26847836359df71ae1b323f11aede2e2702812d57ac37e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a8134328fd692556ef21",
          "headline": "Apple의 가장 큰 위협은 Android가 아닙니다. 분석가는 4분기 실적을 앞두고 AAPL 자체 기기라고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793430907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d6a4755c644d1653996a8d2f144acc6ce849d623ae1c5b636f062459cd02d38",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "77f0e0e9d310659ca9d1",
          "headline": "Qualcomm은 Anduril과 협력하여 미국산 노트북을 생산하고 있습니다. QCOM 주식의 바늘이 움직일 것이라고 기대하지 마십시오.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793396694,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d68c32470f5072e9e73f32aea1a580b8e7af9e2c8b3b65940837458cf2bacee6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793416801,
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
          "eventId": "37ebfb280e7eaa69e5c2",
          "headline": "인텔, CPU 경쟁자를 끌어내리다. AMD와 Arm의 매수 기회인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793416801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0796c961ff6c86d9730c5b7605ff786dfe721c3271a1ecc1f8605b75dccf4ed3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793636100,
      "signal": "주의 강화",
      "netScore": -3.43,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.67,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -4.2,
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
          "score": -3.32,
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
        },
        {
          "eventId": "0c12289720acffc39255",
          "headline": "MRVL SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526442717/d352474d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "dc36ef4861448ce3506a",
          "headline": "MRVL SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526442714/d81187d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "db8371e1281bbccb718c",
          "headline": "Lumentum은 일주일 만에 11% 상승했습니다. Marvell이 \"1000억 달러에 가까운\" 금액을 지불하게 될까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793469855,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5ca7ddf54214de92b35c22baa24864ec3b01f8d92b4063dfa4f2e141a2b0952",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1117af9c65c09638097b",
          "headline": "Piper Sandler의 400달러 목표는 Marvell의 매각이 너무 멀리 갔다고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793456670,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ef71a4b3e0394793097b4c1ed1b370a47d361debabe4ac9f54c37827d67d027f",
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
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "862c90e122ef087d7ede",
          "headline": "8개월 전, 월스트리트의 주요 은행이 Marvell을 매수하겠다고 밝혔습니다. 150% 이상 상승했습니다. 주식이 움직이는 곳은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793391456,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b799c368b0dc4457243178034926a3994faa20f0ac10c05c40f539b82437f717",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793641761,
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
          "score": -4.9,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -4.02,
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
        },
        {
          "eventId": "31f7ba2c51b686a30e4d",
          "headline": "예측: 2027년 연말까지 인텔의 주가가 될 것입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793499600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=83abd019783543ee3eb8a066c7d22f62e6837644c785c19c2d34ac70e2732fca",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bf46bb095531a135a066",
          "headline": "인텔의 폭발, 이제 때가 됐다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793497320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ebcf91723e03662ab929a6984593ec6c90a352abfce5f92cf781a1b4165e2ac",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 24,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793639453,
      "signal": "중립·확인 대기",
      "netScore": 1.81,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 4.03,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 1.75,
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
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "reason": "메모리 ASP와 이익률 개선 가능성"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
        },
        {
          "eventId": "1ab5ae78e805edee6ecf",
          "headline": "2028년에 Micron에 투자한 6,000달러의 가치는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793557200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fefe7947bad46edd4ee617c6499fb7c2e002cd01357e47193454676501c8a2d1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "47a48f0c8c4f3ffb67fb",
          "headline": "Micron 주식이 기록적인 해 이후 저렴해 보이는 이유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793544600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=98f248e877ae7e100d06536c6b8aa76c27c29be067ed9449c6a4f765417b5c72",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 25,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793639453,
      "signal": "주의 강화",
      "netScore": -6.3,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.0,
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
          "score": -2.45,
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
        },
        {
          "eventId": "2e8b9e07672f4fd63bb8",
          "headline": "Sandisk: 매도세는 시작일 뿐입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793440814,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9d69fbdd5daf26ea42fa0a2cf471b03c9efabf6363a5cfe89dcd881f2aacba4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2fe61d0e222660322817",
          "headline": "Sandisk의 AI 변화는 수익보다 더 큽니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793435400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20889545d2f9d8ce90f3d26b460387742b0bfb7b70c855b597ed9f9072a01cb5",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793619504,
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
        },
        {
          "eventId": "a8134328fd692556ef21",
          "headline": "Apple의 가장 큰 위협은 Android가 아닙니다. 분석가는 4분기 실적을 앞두고 AAPL 자체 기기라고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793430907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d6a4755c644d1653996a8d2f144acc6ce849d623ae1c5b636f062459cd02d38",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793400422,
      "signal": "주의 강화",
      "netScore": -3.14,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.87,
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
          "score": -1.75,
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
          "eventId": "ff59f912c37a19c5cbfd",
          "headline": "Arista Networks vs. Monday.com: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793400422,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=88acb6b6188509fca9d9ff735e7248376829fa8098285de0d8315ee2aaa69c2b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "026603316c7236e0e8e0",
          "headline": "Arista Networks 대 Figma: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793389802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=875fea302cb85e850a78ca01821803ffb3125b5ee99f1b115748490382757347",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793634606,
      "signal": "주의 강화",
      "netScore": -7.76,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -2.62,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -3.67,
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
        },
        {
          "eventId": "30206262fa16a687dbee",
          "headline": "Intel과 Amazon의 수익이 AI 하드웨어 주식에 타격을 주면서 Coherent 주식은 11% 하락했습니다. 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793430912,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c406ddf6b44b6ead86cb1d7597111211089282dcf6fe8995f84a3b7d63193e8c",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ba41b6cca3e49ff2a936",
          "headline": "하이퍼스케일러 지출이 AI 광학 주식에 타격을 줄 것이라는 우려로 Applied Optoelectronics는 15% 급락하고 Coherent는 13% 급락했습니다. 루멘텀 및 마벨 싱크 10%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793379446,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=853742c8081dcdf82ae36430fe967e33824508ee0106fc80121a2a26d47f5869",
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
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793636527,
      "signal": "주의 강화",
      "netScore": -3.57,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.15,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -3.5,
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
          "score": -4.02,
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
        },
        {
          "eventId": "a6bce08286d2472adb1a",
          "headline": "LITE SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000119312526442758/d163169d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "716107b975b46d7039e4",
          "headline": "LITE SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793545200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026068655/lite-20261102.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f44ba7ece204799ef1f6",
          "headline": "Lumentum 수익 미리보기: AI 붐은 이미 가격에 반영되었습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793533200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44cb3cbacafe19fcb3f1b427b49a04c93032dae4785ed4920b7ecd656356c91d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "db8371e1281bbccb718c",
          "headline": "Lumentum은 일주일 만에 11% 상승했습니다. Marvell이 \"1000억 달러에 가까운\" 금액을 지불하게 될까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793469855,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5ca7ddf54214de92b35c22baa24864ec3b01f8d92b4063dfa4f2e141a2b0952",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793608522,
      "signal": "중립·확인 대기",
      "netScore": -1.18,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.17,
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
        },
        {
          "eventId": "327c8b1bd399217ccd16",
          "headline": "HUBB 3분기 심층 분석: 데이터 센터의 강점이 유틸리티의 부드러움을 상쇄하고 용량 투자가 전망을 형성합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793426609,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78159b66c1182c7de0b1ea6935bae386f6c1647712ff016fc961ef9ba7fe97d8",
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
    "VRT": {
      "ticker": "VRT",
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
      "dataAsOf": 1793603055,
      "signal": "중립·확인 대기",
      "netScore": 1.6,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
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
          "eventId": "c2f675ef435e89afe390",
          "headline": "Seagate: 진짜 위험은 Toshiba가 아니라 2028년 공급 물결입니다(다운그레이드)",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793486591,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2c790ea13489ecf284713cf69cf1c23568e47798e28c3451632f3a9a083dcf5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
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
      "updatedAt": 1793657801.1021523,
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
