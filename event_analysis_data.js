// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1794946216.5300279,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794914988,
      "signal": "주의 강화",
      "netScore": -7.89,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -3.05,
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
          "score": -3.22,
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
          "eventId": "78ad9cff225d377a984d",
          "headline": "메타의 AI 지출이 가장 자르기 쉬운가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794914988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2c16790dafa5fdaf3f4bc6dc0f025c9688820f5909e8ad706a6832bf20715a5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bf1d71746a67ac3ca8d5",
          "headline": "글로벌 GovTech 이중 용도 방어 플랫폼 시장 보고서 2026: 2030년 규모 및 예측 | Microsoft, Palantir, Anduril 및 BAE Systems를 통해 AI, 클라우드 및 15% CAGR을 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794842940,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a96543bb068239839b93c8021f15a4ec72a6658c527c006b0196229df03f300b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "54811efec2b7023fc659",
          "headline": "미국 행정부, Nvidia, Amazon 및 Microsoft를 포함한 AI 국가 챔피언 프로그램 계획, WSJ 보고서",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794827247,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9213bcdfc5e66bd4e08245ea29794c715aed1792770021d0082883a8217d14c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bdb0439ae5b788732ac9",
          "headline": "MSFT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793804400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526448357/d177209d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "9d4af1b3e363d3bdf20d",
          "headline": "MSFT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526447173/d178557d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794916200,
      "signal": "주의 강화",
      "netScore": -5.82,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.5,
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
          "score": -3.4,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.35,
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
          "eventId": "d50875d8a25f5c0ffb9c",
          "headline": "Quaise Energy, Google과 50MW 지열 발전 구매 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794916200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fc2c09b3f868f0e44af7c2c6707b74524873dcb491bec7ba3914aeae4c4a4c0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "78ad9cff225d377a984d",
          "headline": "메타의 AI 지출이 가장 자르기 쉬운가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794914988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2c16790dafa5fdaf3f4bc6dc0f025c9688820f5909e8ad706a6832bf20715a5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6fd0bc58c6deeb767e4f",
          "headline": "Amazon도 아니고 American Express도 아닙니다: 이 신용카드는 2026년 최고의 보상을 제공합니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794871800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a929bfa9874d933ee0f8a06debc3c9809136c0b512e5be65df44a97972b7a20",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cc6ebc978cdfce294d27",
          "headline": "Google 모기업, 30억 달러 규모의 선불 에너지 거래에 참여",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794845416,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3a3d51b782ab77759f71c30a7ba48d5317f8fa11b7336fe2dc5d0962d8ab390c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c664e359c4da2b1cf4bd",
          "headline": "머스크: 엔비디아의 주요 공급 계약은 \"젠슨과의 악수\"였습니다. 이제 Google은 용량을 구걸하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794831615,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=23eb038d25c3f71bf64508da4b27b2d241367d6893beef3b10c18dd1ebdf708b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "edbdba7bc0d3739b0d93",
          "headline": "알파벳 주식은 지금 저렴합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794828482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b7047acf4f1cd9e8a581b6200295efd5f3e39c0078e4c4b389cf09893d27d8b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ab34873f91349da6a1cf",
          "headline": "Anthropic의 Lock-Up은 첫날에 \"거래의 거의 40%\"를 무료로 제공합니다. 그것은 Alphabet과 Amazon에 큰 위험입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794824712,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ff84d3851b9a24e07fb1914cecbd42f1267d72079d0122ff97cc37c58815679",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "aff754608d162d02fc12",
          "headline": "그는 자신의 200,000달러 S&P 500 401(k)가 AI 위험을 확산시킨다고 생각합니다. 두 개의 알파벳 주식 클래스가 한 회사에 $10,380를 투자했습니다. 20% 하락하면 $2,076의 비용이 발생할 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794697426,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f108095735710df780cee5d95409e144ce4f3de40be2a78e4c0e20c0bb6ab9a8",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "95ccdd82bd81c2f300be",
          "headline": "GOOGL SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793804400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526449835/d174184d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "616a5d2516bf0cb80f80",
          "headline": "GOOGL SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526447343/d125079d424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794914988,
      "signal": "중립·확인 대기",
      "netScore": -0.91,
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
          "score": -2.1,
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
          "eventId": "78ad9cff225d377a984d",
          "headline": "메타의 AI 지출이 가장 자르기 쉬운가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794914988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2c16790dafa5fdaf3f4bc6dc0f025c9688820f5909e8ad706a6832bf20715a5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6fd0bc58c6deeb767e4f",
          "headline": "Amazon도 아니고 American Express도 아닙니다: 이 신용카드는 2026년 최고의 보상을 제공합니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794871800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a929bfa9874d933ee0f8a06debc3c9809136c0b512e5be65df44a97972b7a20",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "af05797deeabdd6b5b66",
          "headline": "아마존 노조가 계약을 맺었지만 캐나다에 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794863720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3762c31ca0bc2a32c6f1b5775668fba6e7a4e1eee665ec8a2137980176a44856",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "e7f4a39316703d14eb51",
          "headline": "50억 달러 규모의 AWS 거래로 Blackstone 디지털 인프라 주가 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794843032,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73d658b5996f4caadbb73d44970239d3488b4e9d47461496d56262441882e639",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "54811efec2b7023fc659",
          "headline": "미국 행정부, Nvidia, Amazon 및 Microsoft를 포함한 AI 국가 챔피언 프로그램 계획, WSJ 보고서",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794827247,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9213bcdfc5e66bd4e08245ea29794c715aed1792770021d0082883a8217d14c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ab34873f91349da6a1cf",
          "headline": "Anthropic의 Lock-Up은 첫날에 \"거래의 거의 40%\"를 무료로 제공합니다. 그것은 Alphabet과 Amazon에 큰 위험입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794824712,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ff84d3851b9a24e07fb1914cecbd42f1267d72079d0122ff97cc37c58815679",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
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
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794914988,
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
          "score": 0.17,
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
          "eventId": "78ad9cff225d377a984d",
          "headline": "메타의 AI 지출이 가장 자르기 쉬운가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794914988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2c16790dafa5fdaf3f4bc6dc0f025c9688820f5909e8ad706a6832bf20715a5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "edf27dd9f9266c350e30",
          "headline": "Meta의 선불로 최대 5개의 원자로에 대한 Oklo의 핵 연료를 구매하고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794849844,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ff51f6d4931c70fb076d8842a7614d5b706979d29000c8009956c6012451958",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c93314b7eb02a57e740b",
          "headline": "이탈리아 규제 당국, 모바일 사진 동의에 대해 Meta에 8억 8700만 달러 벌금 부과",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794824347,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2dde471619000e9eeefbf392ac734fbcbe69a002048c2b4b19bf0462fc257a07",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e845905f71b692556cda",
          "headline": "\"빅 숏\" 투자자: 빅 테크는 2027년에 \"플러스 현금 흐름\"으로 돌아갈 수 있습니다. 메타가 가장 큰 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794824118,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67e59bc0f24bef7f2d0f115b9c655aa91ea2e71398e3b5e5a6ab856dae4c0a0b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "874af98cad2f26ece217",
          "headline": "META SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794409200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526458525/d177728d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "4669fc21bc6f029f2c6d",
          "headline": "META SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793890800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526450754/d44678d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "fa7278579cf26e022f17",
          "headline": "META SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793804400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526450074/d166273d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f1d7b78f09df22cbfdbe",
          "headline": "META SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793804400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526448015/d135326d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "cab5aebcea94d6985a75",
          "headline": "META SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526446110/d44678d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "fdae760b0ce210e64541",
          "headline": "META SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000119312526444440/d135326d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 6,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794838252,
      "signal": "주의 강화",
      "netScore": -7.4,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -4.0,
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
          "score": -2.0,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -3.65,
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
          "eventId": "bc2167dd131740429f5b",
          "headline": "Apple(AAPL), iPhone Duo용 핵심 폴더블 유리 공급업체 선정",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794838252,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6891e0e89f18517969a3a2f1c689c4bfdd117904a591a273aefc862e063fe230",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6ff08acb8a5111eb3bfa",
          "headline": "AAPL SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794150000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/320193/000114036126042798/ef20085077_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "46d0d6c359fd0830b089",
          "headline": "AAPL SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793890800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/320193/000114036126042505/ny20084621x2_424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "c4911ea8125f05b636a5",
          "headline": "AAPL SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793804400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/320193/000114036126042046/ny20084621x1_424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "7f973250812fe77e865a",
          "headline": "AAPL SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000026/aapl-20260926.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
      "confirmedEvidenceCount": 5,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794921681,
      "signal": "주의 강화",
      "netScore": -6.36,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.17,
          "level": "중립"
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
          "score": -2.45,
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
          "eventId": "5b964c26b657c838351e",
          "headline": "Elon Musk는 Tesla의 299달러 Cybercab 수수료가 \"너무 높다\"고 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794921681,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=75c5eb1238f156dfd8cfb149eef65e7feccd90a22e2bdb571674b130a94b1838",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d878c91a89789128d262",
          "headline": "Tesla가 320달러까지 하락할 때까지 기다리십시오: FOMO에 대한 인내심이 가장 중요합니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794917706,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1fe36fd8a92b7e89b84016d5c40e2840bf53155b863340bba7617bf5513ad95",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9abf6838450994c323fd",
          "headline": "XLY의 $300,000는 Amazon과 Tesla에서만 $125,585를 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794870199,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=215966c7c0cd7f3a8dedbcb8141d456a56198bfadf51acb77b97547bcd87e4c7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9063e7107d7a901d8bcb",
          "headline": "Lucid는 17억 5천만 달러 규모의 사우디 라이프라인에도 불구하고 8% 하락했습니다. 테슬라 하락 3%, 리비안 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794844667,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c8e5623d35860b33b07e601216247be68179c4a33ab1c79557aa9bb275f57dd4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ea68e532ca68c7862ab8",
          "headline": "Tesla 합병은 SpaceX를 S&P 500으로 빠르게 진입시킬 수 있습니다. 인덱스 펀드는 매수해야 할 것입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794825890,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=707bf57b9f6fe03f3f1a7e818f16a4f039225c5b27dba255411cbaae832906c2",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794856257,
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
          "score": 0.7,
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
          "eventId": "8621a499d4c4876d64cc",
          "headline": "확장된 연방 의료 데이터 교환 거래로 인해 Oracle(ORCL)이 저평가되어 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794856257,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc11cd7b3ac8e205346a1d4bd362e0e4ffb2f0f30529921d153742bac772e4c5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "b027713d6a1cdcc95008",
          "headline": "투자자들이 회사를 상대로 집단소송을 제기한 후 인텔 주가 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794844514,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=812efd1de924e8908360fc6ffd23815f7b9a6cffee0191e7d2c50724e6bbfd55",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "클라우드 수요와 자본 부담 동시 확대"
        },
        {
          "eventId": "d1769d8db0914f34a83f",
          "headline": "ORCL SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526447507/d131790d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "ff0c47a5e3f151b4f047",
          "headline": "ORCL SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526445847/d181425d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "5f65566f62c03854c2f2",
          "headline": "ORCL SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526445846/d181336d424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
        }
      ],
      "confirmedEvidenceCount": 6,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794843348,
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
          "score": -0.52,
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
          "eventId": "75358690358a080da24a",
          "headline": "Salesforce는 5년 동안 자사주 매입에 320억 달러를 지출했습니다. 어쨌든 점유율은 여전히 ​​증가하고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794843348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9e30b62016510485a972100142992de913bec15ca8250c62bf3ee0cd4ae1ac26",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f5742506fd714da9c816",
          "headline": "주요 자본 파트너는 TaskRay에 투자하고 Cloud Coach 및 JustOn에 합류하여 Salesforce에서 고객 제공을 혁신합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794840840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25b19d847998bef33b2aebaa5fa9b200bb5dcf6c772a7a3102c5ae87a9ce7229",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794847317,
      "signal": "우호적 변화",
      "netScore": 2.1,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "eventId": "2369c1d16f5c4c59d97a",
          "headline": "업데이트: 시장 잡담: Palantir Technologies, NHS 데이터 계약을 놓고 영국 경쟁에 직면",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794847317,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a73f19bd20ab9900ea8566172e30c7f9c4eaadb7bce60e44607ec34ad8b9509",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bf1d71746a67ac3ca8d5",
          "headline": "글로벌 GovTech 이중 용도 방어 플랫폼 시장 보고서 2026: 2030년 규모 및 예측 | Microsoft, Palantir, Anduril 및 BAE Systems를 통해 AI, 클라우드 및 15% CAGR을 활용하세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794842940,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a96543bb068239839b93c8021f15a4ec72a6658c527c006b0196229df03f300b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d746edbda425108c45ce",
          "headline": "PLTR SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000048/pltr-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794923220,
      "signal": "주의 강화",
      "netScore": -3.8,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 3.85,
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
          "eventId": "8ea1ce975ab250e0405a",
          "headline": "워렌 버핏의 버크셔는 2분기 연속 애플 주식을 단 한 주도 매도하지 않았습니다. 지분 가치는 현재 800억 달러에 이릅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794923220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b899dccb0df67e6419f921bc675f6fccad4c1c15013cd84903d3fabac0d6f393",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "38df75aa8c3388b77a0c",
          "headline": "David Tepper는 지난 분기에 Broadcom 주식을 모두 매각하고 Micron과 Nvidia를 더 많이 매입했습니다. Broadcom은 그 이후로 더 나은 모습을 유지했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794920160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=832fdf6c69e09ee75305213a040b5f903acb10d2868851bbb92c3cd8360549ed",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9360e011cdf86e6c85ad",
          "headline": "50% 하락 후 SanDisk 주식을 매수해야 할까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794918518,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c2cb890edc44bcd341759396d720cf3326618c167063281ae29e2d5214a35bc6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ed2ed1ff2394f7c45c97",
          "headline": "억만장자 Stanley Druckenmiller는 또 다른 수조 달러 규모의 AI 거인을 위해 Google 모회사 알파벳을 버렸습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794918361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c5d864962c877ef1994492efd7b946fa82647e833678995632f2efbdbcddb8d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "f47accc178f7081ec6a8",
          "headline": "3개월에 걸친 인텔의 45% 하락은 투자자들을 불안하게 합니다: 이 월스트리트 분석가는 어쨌든 155%의 이익을 예측합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794917709,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48d7bd6469688f8c1f50107d7ea93cdaccdb8f4964186f723d55b049b95e6b0a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "21cc804eb32faa8ba3bb",
          "headline": "억만장자 David Tepper는 AMD 주식을 버리고 Oracle에 1억 7200만 달러를 베팅했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794916585,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a3a3f0921c93030082eb2f5f7c6d8fac4a60597d4bc3face162de1a4b4eaa01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "55849083ad2d7b83bd4e",
          "headline": "억만장자 David Tepper는 AMD와 Broadcom을 버리고 Oracle과 Nvidia를 선택합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794914171,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67ac8f9d221eee54abcfe2c56113e2e3cd657e6017c3ae7aead05b6a2c521c9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "623a962cb1e79a275080",
          "headline": "Amazon은 \"7% 한도율\"로 50억 달러 규모의 데이터 센터를 판매했습니다. 이는 Digital Realty와 Equinix의 큰 문제입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794897213,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=016db3f6a94cf9e6ab4ef4d426b444ec813883c3e2780af592dbfabccf020879",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "4ed295fdb9a1d90d85f9",
          "headline": "SPCX 주식은 Intel을 Nvidia의 가장 큰 보유로 제압했습니다. Druckenmiller가 인수하고 Tepper가 지분을 1,600% 이상 늘렸습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1794887150,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=54f0eca7f0b233ecce6eb5b77ad85e7786d73be63302269f6a6e5c6cab043650",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e6824f3477b2803a965d",
          "headline": "이번 주는 주식 시장에 있어 엄청난 한 주입니다: Nvidia 수익, 연준 회의록 및 Anthropic의 IPO",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794877801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3aa37774fbae62d6611f869f3f52bb1660e5e496139a8f66b78a28a93e2d5daf",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5dff9e2d16440a566403",
          "headline": "대만 반도체는 NT$5,870억의 달 기록을 세웠습니다. 어쨌든 주식은 3일 만에 거의 10% 하락했습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794876070,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e345e01c765ee04f7f15e45ba82ca4d379078fb4a28dc2e5429620a8c31d332",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "b7e3802ae84d931d7949",
          "headline": "퀄컴 CEO “퀄컴에는 AI 교정은 없다” Nvidia의 11월 17일 수익은 중대한 시험대에 직면했습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794875261,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8fa795500cb727f1833fd28f316f6a4478f2c7e57bcb5173fa11046ad0ca8c14",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 35,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794923220,
      "signal": "우호적 변화",
      "netScore": 7.97,
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
          "score": -1.75,
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
          "eventId": "8ea1ce975ab250e0405a",
          "headline": "워렌 버핏의 버크셔는 2분기 연속 애플 주식을 단 한 주도 매도하지 않았습니다. 지분 가치는 현재 800억 달러에 이릅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794923220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b899dccb0df67e6419f921bc675f6fccad4c1c15013cd84903d3fabac0d6f393",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "3c9ae446214bc996abb2",
          "headline": "Bank of America는 AMD의 상승 여력이 39%라고 보고 있으며 그 이유는 GPU와 관련이 없습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794919682,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a3ce1180554252c873470732c049ff7e94378a97f5e260b2acf89ee4e9f024e8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ed2ed1ff2394f7c45c97",
          "headline": "억만장자 Stanley Druckenmiller는 또 다른 수조 달러 규모의 AI 거인을 위해 Google 모회사 알파벳을 버렸습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794918361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c5d864962c877ef1994492efd7b946fa82647e833678995632f2efbdbcddb8d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f47accc178f7081ec6a8",
          "headline": "3개월에 걸친 인텔의 45% 하락은 투자자들을 불안하게 합니다: 이 월스트리트 분석가는 어쨌든 155%의 이익을 예측합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794917709,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48d7bd6469688f8c1f50107d7ea93cdaccdb8f4964186f723d55b049b95e6b0a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "21cc804eb32faa8ba3bb",
          "headline": "억만장자 David Tepper는 AMD 주식을 버리고 Oracle에 1억 7200만 달러를 베팅했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794916585,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a3a3f0921c93030082eb2f5f7c6d8fac4a60597d4bc3face162de1a4b4eaa01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "55849083ad2d7b83bd4e",
          "headline": "억만장자 David Tepper는 AMD와 Broadcom을 버리고 Oracle과 Nvidia를 선택합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794914171,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67ac8f9d221eee54abcfe2c56113e2e3cd657e6017c3ae7aead05b6a2c521c9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "623a962cb1e79a275080",
          "headline": "Amazon은 \"7% 한도율\"로 50억 달러 규모의 데이터 센터를 판매했습니다. 이는 Digital Realty와 Equinix의 큰 문제입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794897213,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=016db3f6a94cf9e6ab4ef4d426b444ec813883c3e2780af592dbfabccf020879",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "cbae235c1020201df0bc",
          "headline": "인류의 IPO가 과대평가됐나요? 거의 ~ 아니다. Scott Galloway는 가치 평가가 \"Broadcom과 AMD가 거래하는 위치에 관한 것\"이라고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794879154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae61ee244708f72f0e7319c8db6260e4064ab6a6e486810ff4951adf76fa731e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5dff9e2d16440a566403",
          "headline": "대만 반도체는 NT$5,870억의 달 기록을 세웠습니다. 어쨌든 주식은 3일 만에 거의 10% 하락했습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794876070,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e345e01c765ee04f7f15e45ba82ca4d379078fb4a28dc2e5429620a8c31d332",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c3b28575741e6462d725",
          "headline": "AMD 주식은 수익 후 상승 후에도 여전히 매수세를 보이고 있습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794865398,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=688edc5f4e03992262336142073e2d779a2ec98a51868c3f9d3796fdcbcb562a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cbec0954b09828b4f0b5",
          "headline": "오늘 Marvell 주식이 하락한 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794854402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1b2c5f0ea46a144e09a3c274f1b0b7607781a228a08f99e0c9c369949d64618d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "deed1a091c295391e142",
          "headline": "Nvidia의 리더십 공백이 지속됨에 따라 AMD는 11월 말까지 Broadcom보다 더 많은 시장 점유율을 차지할 것입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794851152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5db98f9eca8765c429c7bf4917e5cb92196b6c6f355e11363839eabdfc962583",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 23,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794914171,
      "signal": "중립·확인 대기",
      "netScore": -1.26,
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
          "eventId": "55849083ad2d7b83bd4e",
          "headline": "억만장자 David Tepper는 AMD와 Broadcom을 버리고 Oracle과 Nvidia를 선택합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794914171,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67ac8f9d221eee54abcfe2c56113e2e3cd657e6017c3ae7aead05b6a2c521c9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cbae235c1020201df0bc",
          "headline": "인류의 IPO가 과대평가됐나요? 거의 ~ 아니다. Scott Galloway는 가치 평가가 \"Broadcom과 AMD가 거래하는 위치에 관한 것\"이라고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794879154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae61ee244708f72f0e7319c8db6260e4064ab6a6e486810ff4951adf76fa731e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bc5cec78dcfa3f712974",
          "headline": "ACC는 Broadcom 법적 특권 사건에서 EU 일반 법원에 개입할 수 있는 권한을 부여했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794854880,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78f722ee6a57aa33384e6eb3fa738b111e8564b187afab89fd097f6c48c44151",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "cbec0954b09828b4f0b5",
          "headline": "오늘 Marvell 주식이 하락한 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794854402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1b2c5f0ea46a144e09a3c274f1b0b7607781a228a08f99e0c9c369949d64618d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "deed1a091c295391e142",
          "headline": "Nvidia의 리더십 공백이 지속됨에 따라 AMD는 11월 말까지 Broadcom보다 더 많은 시장 점유율을 차지할 것입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794851152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5db98f9eca8765c429c7bf4917e5cb92196b6c6f355e11363839eabdfc962583",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1c015dbb5105e2ed156c",
          "headline": "Advanced Micro Devices 대 Broadcom: 하나의 주식에는 270억 달러의 이점이 있습니다. 투자자는 무시해서는 안 됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794825302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd240e1543f7fef0bb1af526ee1af5eb689ac415ffcb68feff3bf26711e2b5d3",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f77e0df2e77dddd4c998",
          "headline": "Marvell의 수조 달러 목표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794788402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e7b9d4be69140363f7f827ad1fcb1c798bf60be17ab934c4ec283261e6d3a7a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794829331,
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
          "score": -0.35,
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
          "score": -3.22,
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
          "eventId": "3d95f8417013f9999973",
          "headline": "전화 판매가 계속 줄어들면 Qualcomm 주식은 어떻게 되나요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794829331,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb7d26f11c3fada460f0ef2bf5c704494387a3f46d747ff47f6c6ef7edb8c248",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "34eb6a3aa1444869771d",
          "headline": "Bernstein은 Qualcomm의 \"마진 전망이 형편없다\"고 말합니다. 6% 슬라이드가 매수 기회인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794717201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe5bdb9b2ab222ac2639d0dbec55ec7c7095ba514f5ca347af1f286a5ee3e4b9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6bc58a529b4b93b444c6",
          "headline": "QCOM SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794495600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000110465926127163/tm2629667d1_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "a748407586d6b5366d91",
          "headline": "QCOM SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1794236400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000110465926125254/tm2629187-2_424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "481afffd415c4a0ef823",
          "headline": "QCOM SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1794150000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000110465926124219/tm2629187-1_424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "2d1f86479f5eec74f8f0",
          "headline": "QCOM SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000128/qcom-20260927.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "7b437239c73a66b08c17",
          "headline": "QCOM SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000127/qcom-20261104.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 5,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794686042,
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
          "eventId": "61029359415450de3acd",
          "headline": "Astera Labs vs. Arm: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794686042,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b704d7f9e43b187031eafc6ac533b40fd9991afc03548f042e2c946f4e3f8f7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "970425ee8c73d961bcd0",
          "headline": "Arm 대 ASML: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794676921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da3e6f96f225f82e78985b8c0203ab09a89fd2ec24388158e961e649684e7e09",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "acd3dcf57743b7781f1b",
          "headline": "ARM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000142/arm-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "07c747d5bcc6ae95ffe2",
          "headline": "ARM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000141/arm-20261104.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794854402,
      "signal": "우호적 변화",
      "netScore": 6.78,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.55,
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
          "eventId": "cbec0954b09828b4f0b5",
          "headline": "오늘 Marvell 주식이 하락한 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794854402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1b2c5f0ea46a144e09a3c274f1b0b7607781a228a08f99e0c9c369949d64618d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c2302659fb7507d38987",
          "headline": "Marvell Slide가 거래 가치를 660달러 이하로 줄임에 따라 Lumentum 주식은 8.32% 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794851555,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c689e0c37fd70b0ce019cd445bceea03c52390f15c07cd0ce0fc63a35a67bb6d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3d1efea95f419657c2fb",
          "headline": "Penguin 솔루션과 새로운 AI 데이터 센터 거래 후 Marvell 주식에 집중",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794848804,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95bc92f1d5672ab0f81cbcf455aaec9e9e22d6f71bd77ad5ae35120ae3f61089",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b5b450a497428d789067",
          "headline": "Marvell과 Penguin 솔루션, 데이터 센터 AI 메모리 문제를 해결하고 대규모 추론 가속화를 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794837600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=255aa638f6bfc717f44ade9669bed5d88e53ad1cb83606a531bc0b932bec2c02",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "90ae148862d5d59d56e8",
          "headline": "Marvell CEO, 1,150억 달러 규모의 Lumentum 거래 옹호: “때때로 비정통적”이 성과를 거두다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794716976,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea7b989306f9e5017e485a1e75682f5de954f4cfb0d298145bc468ddb16fcedd",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4670d0cc7f8c0c76dc24",
          "headline": "Lumentum 거래 스프레드가 18%로 확대되면서 Marvell 주식은 6.6% 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794588033,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57f7f3ee3c37dcbc79dc0e0b2e913061eae1255ffce119b01a2bfe263f879f59",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c0cdd1344625b90f0369",
          "headline": "MRVL SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794409200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000026/mrvl-20261111.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794859392,
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
          "score": -3.67,
          "level": "주의"
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
          "eventId": "dcb843a7ef535888b0c9",
          "headline": "INTW 2X Intel ETF는 주주 소송과 AI 칩 매각으로 Intel이 하락하면서 13% 하락했습니다. 대만 반도체 5% 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794859392,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c62335723868c483e22a6ee74ea08e056bfd5df0228ab9486a41ff961d572c2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1ce77744b4df8eaa76be",
          "headline": "Dan Niles는 Intel이 “단지 11% 성장을 위해 PER 34배로 거래합니다”라고 말했습니다. 이제 주주들이 소송을 제기하고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794857974,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df8713115f19e55bb9ac869e5ce676103b79b643293b2f196727c69b9ec76ea4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "488a2856d095a1e7b2bd",
          "headline": "PC 부진 공개를 겨냥한 주주 소송으로 인텔 주가 6.13% 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794855223,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dccff98112da4a08f1690b14a7335bb1f38ab188607c5bfe4cf66f525b41f307",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "cbec0954b09828b4f0b5",
          "headline": "오늘 Marvell 주식이 하락한 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794854402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1b2c5f0ea46a144e09a3c274f1b0b7607781a228a08f99e0c9c369949d64618d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1acf5b9c3899d029370f",
          "headline": "10월 주가 급락에 대한 주주들의 소송으로 인텔 주가는 6% 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794849000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91f25af43cf77ea977569625dc1891982232a28a5ade7a7e167f135acde431a4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1b178a1bf0b95a39e5b7",
          "headline": "인텔, 주가 29% 하락 후 주주 소송 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794848006,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e09634e8ee02bcc450394557670e1297c0d4a7ef7a9b42f72578552022d0b323",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b027713d6a1cdcc95008",
          "headline": "투자자들이 회사를 상대로 집단소송을 제기한 후 인텔 주가 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794844514,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=812efd1de924e8908360fc6ffd23815f7b9a6cffee0191e7d2c50724e6bbfd55",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e9db5583b6bca746d828",
          "headline": "인텔이 PC 속도 저하로 인해 주주 소송에 직면한 이유는 무엇입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794839611,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee4bfdb8f7cbd919e682778194b3f0d46ea182f861837f77ec2c90e2efcc5aec",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1355dc098be9ec94162e",
          "headline": "인텔 주식 소유에 있어 무엇이 바뀌었나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794829331,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb0ef93d4a3489af2b50fbdc395a54a92a9ef44ade7e79cd4f95555053812e3f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "72a777659b1fa9078597",
          "headline": "인텔, 주가 29% 폭락 후 소송 직면. 투자자들은 사기를 주장합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794829152,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b51357d4dc5cca8cf298a596c0fa7f66fea296d1eb2db6c609d0182844079c69",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0684c3a8bd7fe1f09932",
          "headline": "인텔, 1400억 달러 규모 주식 전락 후 대규모 소송 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794829108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e52d376e5d52cfdc41fd728522053f4919924446dea0321a2fa8b9f781a0724",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794859392,
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
          "eventId": "dcb843a7ef535888b0c9",
          "headline": "INTW 2X Intel ETF는 주주 소송과 AI 칩 매각으로 Intel이 하락하면서 13% 하락했습니다. 대만 반도체 5% 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794859392,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c62335723868c483e22a6ee74ea08e056bfd5df0228ab9486a41ff961d572c2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3737363b2475623334f2",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794495600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000801/tsm-fsx20261113x6k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "0ad454e998a76dedc1b0",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794409200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000800/a20261112statementregardin.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "ae07fea7d8534bc76db3",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794236400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000797/tsm-boardx202611xx.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "a5837a92d46d8a93d0fb",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794236400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000796/tsm-revenue20261110.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 4,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794694442,
      "signal": "주의 강화",
      "netScore": -2.52,
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
          "eventId": "048bba1084a07c6a0613",
          "headline": "ASML 대 NVIDIA: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794694442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a652f9ff4264cf0c0451a92ef62c2ddde9638eaa4effc94da3629e4648b211c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "970425ee8c73d961bcd0",
          "headline": "Arm 대 ASML: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794676921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da3e6f96f225f82e78985b8c0203ab09a89fd2ec24388158e961e649684e7e09",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794409200.0,
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
          "eventId": "3170428ca0e1fa890986",
          "headline": "AMAT SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1794409200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026073360/amat-20261112.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1793804400.0,
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
          "eventId": "cd5efdbeb6384f64c575",
          "headline": "LRCX SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793804400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000057/lrcx-20261103.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1793890800.0,
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
          "eventId": "9ec89fb0fdc77e843bed",
          "headline": "KLAC SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793890800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000119312526451824/d76372d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MU": {
      "ticker": "MU",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794923220,
      "signal": "중립·확인 대기",
      "netScore": -0.21,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 2.98,
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
          "score": 1.93,
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
          "eventId": "8ea1ce975ab250e0405a",
          "headline": "워렌 버핏의 버크셔는 2분기 연속 애플 주식을 단 한 주도 매도하지 않았습니다. 지분 가치는 현재 800억 달러에 이릅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794923220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b899dccb0df67e6419f921bc675f6fccad4c1c15013cd84903d3fabac0d6f393",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "38df75aa8c3388b77a0c",
          "headline": "David Tepper는 지난 분기에 Broadcom 주식을 모두 매각하고 Micron과 Nvidia를 더 많이 매입했습니다. Broadcom은 그 이후로 더 나은 모습을 유지했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794920160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=832fdf6c69e09ee75305213a040b5f903acb10d2868851bbb92c3cd8360549ed",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ed2ed1ff2394f7c45c97",
          "headline": "억만장자 Stanley Druckenmiller는 또 다른 수조 달러 규모의 AI 거인을 위해 Google 모회사 알파벳을 버렸습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794918361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c5d864962c877ef1994492efd7b946fa82647e833678995632f2efbdbcddb8d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f47accc178f7081ec6a8",
          "headline": "3개월에 걸친 인텔의 45% 하락은 투자자들을 불안하게 합니다: 이 월스트리트 분석가는 어쨌든 155%의 이익을 예측합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794917709,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48d7bd6469688f8c1f50107d7ea93cdaccdb8f4964186f723d55b049b95e6b0a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "21cc804eb32faa8ba3bb",
          "headline": "억만장자 David Tepper는 AMD 주식을 버리고 Oracle에 1억 7200만 달러를 베팅했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794916585,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a3a3f0921c93030082eb2f5f7c6d8fac4a60597d4bc3face162de1a4b4eaa01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "55849083ad2d7b83bd4e",
          "headline": "억만장자 David Tepper는 AMD와 Broadcom을 버리고 Oracle과 Nvidia를 선택합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794914171,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67ac8f9d221eee54abcfe2c56113e2e3cd657e6017c3ae7aead05b6a2c521c9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "623a962cb1e79a275080",
          "headline": "Amazon은 \"7% 한도율\"로 50억 달러 규모의 데이터 센터를 판매했습니다. 이는 Digital Realty와 Equinix의 큰 문제입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794897213,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=016db3f6a94cf9e6ab4ef4d426b444ec813883c3e2780af592dbfabccf020879",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "5dff9e2d16440a566403",
          "headline": "대만 반도체는 NT$5,870억의 달 기록을 세웠습니다. 어쨌든 주식은 3일 만에 거의 10% 하락했습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794876070,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e345e01c765ee04f7f15e45ba82ca4d379078fb4a28dc2e5429620a8c31d332",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "cbec0954b09828b4f0b5",
          "headline": "오늘 Marvell 주식이 하락한 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794854402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1b2c5f0ea46a144e09a3c274f1b0b7607781a228a08f99e0c9c369949d64618d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "154468dd6659774f18a4",
          "headline": "판사가 DRAM 공급 소송을 진행하자 마이크론 주가는 거의 7% 하락했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794853212,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53e8ca19485f1d3ed9d97a4f65e37f38532d931b422aa0d8b4e52cbb13610231",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5484c69d7689a4bb0f0d",
          "headline": "오늘 마이크론 주식이 급등한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794851022,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0cddf5f4fa1017ce360639e5ee825583f07135191cc1e2fb1bb2d0998e08ff7d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9aaee0aaedcc3c0abf60",
          "headline": "AMD, 82억 달러 규모의 World Labs 인수 마무리, EVP 겸 수석 과학자로 'AI의 대모' 추가",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794849291,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67049a45a63042d7fc84b38044a98d81a0af5785a9ac75baf0fe91bf448f3752",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 28,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794918518,
      "signal": "주의 강화",
      "netScore": -2.52,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -1.4,
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
          "eventId": "9360e011cdf86e6c85ad",
          "headline": "50% 하락 후 SanDisk 주식을 매수해야 할까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794918518,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c2cb890edc44bcd341759396d720cf3326618c167063281ae29e2d5214a35bc6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4771956b7e0d4639b1b6",
          "headline": "Sandisk는 주식을 8대 1로 분할하고 있습니다. 구매하기 전에 확인하고 싶은 번호는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794852302,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=678d0eac32e975779f5f6b735e8c4bbcc4122bb0ffb7ac2403428ba902456c9d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "693192507f8cfed02dba",
          "headline": "Evercore의 2,500달러 목표에도 불구하고 AI 칩 매도가 메모리 주식에 도달함에 따라 SanDisk는 7% 하락했습니다. 마이크론과 웨스턴 디지털 하락 6%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794838389,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=778229e4140ff2594f1ba4ae1059feffe1fa9382a697e60958be71948894d903",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7b9f7ff0d5248a202164",
          "headline": "Sandisk는 11월 19일에 주식을 8대 1로 분할합니다. 플래시 메모리 가격은 여전히 ​​주식 수보다 더 중요합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794822182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48d932537e4d31d717f89ea9afd0853924a84b82f959cc79d05e0b0c6dc458cf",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794919844,
      "signal": "주의 강화",
      "netScore": -3.13,
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
          "score": -0.87,
          "level": "중립"
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
          "eventId": "740b6e04a3bd5be5dea9",
          "headline": "Stanley Druckenmiller는 Seagate 지분을 거의 3배로 늘리고 Western Digital을 인수하고 SanDisk를 모두 매각했습니다. 이후 3개 주식 모두 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794919844,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50f181b6ed793f1dbf9fc39c0182483d6e3b2298894e564e39175dc634c3492a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cff0a28bf369946b4a8e",
          "headline": "Bill Ackman은 3분기에 Netflix에 더 많은 기능을 추가합니다. Hertz 퇴사, Microsoft 퇴사",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794874087,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20e89db6e669806b510a276ead872a1aa1934ad209b88a093ba569a56c409b20",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a96aefb154e89d8bc77d",
          "headline": "WDC SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794754800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000119312526463554/d162653d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794838200,
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
          "eventId": "87bbb0a98755f2f04204",
          "headline": "GLW 대 ANET: 현재 어떤 AI 주식이 더 현명한 투자 옵션입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794838200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=827669dcab69fdf48d966ec6b7174ff3f90a7b2145c72157b8cd7f3879331114",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a462278c94da57a48de9",
          "headline": "ANET SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000254/anet-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "385d6990a7e0b82ee8bf",
          "headline": "ANET SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000252/anet-20261103.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794920492,
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
          "eventId": "71d809d4849140850800",
          "headline": "미국이 중국 장비 규제를 추진함에 따라 Coherent, Lumentum이 뛰어 올랐습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794920492,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2889fa7a98508bc1193068d763898cb033ace990e7fa550a589a86f809d21b65",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0364965cbb3cf1e50dd1",
          "headline": "COHR SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000082031826000023/iivi-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "c2999afa352c772a79f2",
          "headline": "COHR SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526447200/d176836d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794920492,
      "signal": "우호적 변화",
      "netScore": 3.07,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.15,
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
          "score": 0.17,
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
          "eventId": "71d809d4849140850800",
          "headline": "미국이 중국 장비 규제를 추진함에 따라 Coherent, Lumentum이 뛰어 올랐습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794920492,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2889fa7a98508bc1193068d763898cb033ace990e7fa550a589a86f809d21b65",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cbec0954b09828b4f0b5",
          "headline": "오늘 Marvell 주식이 하락한 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1794854402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1b2c5f0ea46a144e09a3c274f1b0b7607781a228a08f99e0c9c369949d64618d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c2302659fb7507d38987",
          "headline": "Marvell Slide가 거래 가치를 660달러 이하로 줄임에 따라 Lumentum 주식은 8.32% 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794851555,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c689e0c37fd70b0ce019cd445bceea03c52390f15c07cd0ce0fc63a35a67bb6d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "85e2e50150dff802d2d8",
          "headline": "Nvidia 리더십 혼란으로 인해 AI 하드웨어 주가가 하락하면서 Coherent는 9% 하락하고 Lumentum은 8% 하락했습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794839554,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ad731b274c1c63aab6cccd69bfc3d79c80f2956cfa22ef9da581ea1a46dd4e5",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f77e0df2e77dddd4c998",
          "headline": "Marvell의 수조 달러 목표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794788402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e7b9d4be69140363f7f827ad1fcb1c798bf60be17ab934c4ec283261e6d3a7a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "90ae148862d5d59d56e8",
          "headline": "Marvell CEO, 1,150억 달러 규모의 Lumentum 거래 옹호: “때때로 비정통적”이 성과를 거두다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794716976,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea7b989306f9e5017e485a1e75682f5de954f4cfb0d298145bc468ddb16fcedd",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4670d0cc7f8c0c76dc24",
          "headline": "Lumentum 거래 스프레드가 18%로 확대되면서 Marvell 주식은 6.6% 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794588033,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57f7f3ee3c37dcbc79dc0e0b2e913061eae1255ffce119b01a2bfe263f879f59",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "97f1f329bfc158dd493a",
          "headline": "LITE SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026069615/lite-20260926.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794920400,
      "signal": "중립·확인 대기",
      "netScore": 1.05,
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
          "eventId": "f166de0a38ba53514472",
          "headline": "이지스, SEETEL의 GE Vernova와 SK 파트너십 파트너십 축하 및 14기 GGV 에너지 수주 첫 대금 수령",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794920400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a556e56c4e7dccc97b0a929aa78cc2587b0383b300084825f67743adb1321bf8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "adec62ae9203c21bb113",
          "headline": "GEV, VRT, HUBB에 초점 — JPMorgan은 잠재적인 AI 주식 반등을 보고 있지만 전기 장비 부문에 대해서는 여전히 조심스럽습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794397878,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a54c44f1f88ccb6502c88cd88a43ef24e3a5548a22188bb411374717125936e",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794835924,
      "signal": "중립·확인 대기",
      "netScore": -1.53,
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
          "eventId": "01c0b2073b52e9608e64",
          "headline": "BMO Capital은 Constellation Energy에서 우수한 성과를 유지하고 목표 가격을 335달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794835924,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8e006a3e8090752957c7f06b44df20aab4e5c8a3c2d2b6f314391a692353677",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "986ec4fb1e27c461a623",
          "headline": "블룸 에너지 vs. 별자리 에너지: 현장 전력 또는 그리드 전력, 데이터 센터의 승리는 무엇입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794560760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e48c7d6925da7bb9567ab69d7d9f433d8b2ffd7471290df3f302752656f1b6d1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2546597951a305d8608f",
          "headline": "CEG SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1794150000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000119/ceg-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "44fb5e0d5c0b85ddc8fe",
          "headline": "CEG SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1794150000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000116/ceg-20261109.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794754800.0,
      "signal": "주의 강화",
      "netScore": -4.75,
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
          "score": -2.35,
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
          "eventId": "7b6f6109aa20f13b8e0b",
          "headline": "VST SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794754800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126044139/ef20085745_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "fcb5a428d837ea239b75",
          "headline": "별자리 에너지는 지침 인상으로 일주일 만에 13% 급등: \"지금까지 볼 수 없었던 플랫폼\"",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794501334,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51969d2bbbe81357aea82325f999229842a572555188f69d41878d654ed50228",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ecc3696039a74a72dbc4",
          "headline": "VST SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794150000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126042795/ef20085053_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "7ef42d43619b11bad633",
          "headline": "VST SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1794150000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000025/vistra-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "ef1587ba1d33c764cd10",
          "headline": "VST SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1793890800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000023/vistra-20261106.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f3f7b6b489bbad46c877",
          "headline": "VST SEC Form 8-K 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1793804400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126042013/ef20084950_8k.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 5,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794923281,
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
          "eventId": "86371e5c73d706ce9df6",
          "headline": "Eaton 대 Vertiv: 2027년에는 어떤 산업재 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794923281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8fee1f720de101b50ebde1e2dc9951fac75f42aaba0f93b8b2b3c7d3b20402e5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "930d501949246ba3c666",
          "headline": "ETN SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000040/etn-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "906231c6728f81e433cb",
          "headline": "ETN SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000037/etn-20261103.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794846155,
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
          "eventId": "6db2ae8f899ff9d1e0ab",
          "headline": "Kevin O'Leary는 AI를 '우리 경제에서 가장 중요한 자본 활용'이라고 부릅니다. 유권자들은 이에 동의하지 않습니다. PWR 주식이 어느 한쪽을 선택할 필요가 없는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794846155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e909d9b4d57fe6f6d79c1fd8f111ac4472b4f483826d8099031ce4e93069c687",
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
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1794946216.5300279,
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
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794923281,
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
          "eventId": "86371e5c73d706ce9df6",
          "headline": "Eaton 대 Vertiv: 2027년에는 어떤 산업재 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1794923281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8fee1f720de101b50ebde1e2dc9951fac75f42aaba0f93b8b2b3c7d3b20402e5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "626d74d96db0593c9a76",
          "headline": "VRT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794495600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026073564/vrt-20261113.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "adec62ae9203c21bb113",
          "headline": "GEV, VRT, HUBB에 초점 — JPMorgan은 잠재적인 AI 주식 반등을 보고 있지만 전기 장비 부문에 대해서는 여전히 조심스럽습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1794397878,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a54c44f1f88ccb6502c88cd88a43ef24e3a5548a22188bb411374717125936e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794874438,
      "signal": "중립·확인 대기",
      "netScore": 0.2,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "fdc6b736a70025325e5a",
          "headline": "Modine 제조: 건전한 잔고, 강력한 주문 파이프라인 및 삼성 인수 관심으로 매수 사례 강화",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1794874438,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60ab9845065bdda75778ff271725f8b1d0bf753f29edf8730630b5716b3aad65",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "890f884979a036e93e13",
          "headline": "MOD SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1794754800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926128553/tm2629849d1_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "c57656216d76fa2ed4c4",
          "headline": "삼성, 데이터센터 공급업체 Modine 인수 거래 검토 중; 주가 35% 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794603725,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=618cca6a3f62f200e123684bc37f58c2ba49436aa1fddb115486dc3e58cf160f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "f8f1b55abe51cbceeb52",
          "headline": "MOD SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1793718000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926122523/mod-20260930x10q.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "1a8616c994889850d245",
          "headline": "MOD SEC Form 8-K 공식 제출",
          "eventLabel": "매출",
          "publishedAt": 1793631600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926122032/mod-20261103x8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "STX": {
      "ticker": "STX",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794919844,
      "signal": "중립·확인 대기",
      "netScore": 0.14,
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
          "score": -0.35,
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
          "eventId": "740b6e04a3bd5be5dea9",
          "headline": "Stanley Druckenmiller는 Seagate 지분을 거의 3배로 늘리고 Western Digital을 인수하고 SanDisk를 모두 매각했습니다. 이후 3개 주식 모두 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1794919844,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50f181b6ed793f1dbf9fc39c0182483d6e3b2298894e564e39175dc634c3492a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5f96b06ada5b1bbf4fe9",
          "headline": "Seagate는 주식이 소진되기 전에 무엇을 말했습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1794914986,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bdf95d10ed2154c4c786552a93587a3ce015a36903c4fc81cf15df266be116b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1794576600,
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
          "eventId": "0d296982db813c310c57",
          "headline": "EMCOR Group, Inc., P1 Construction, LLC 인수 계약 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1794576600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43e26c090b747550f1bcb8d5abe7521c41399da1de62be911bd9739a50199b1b",
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
    "FIX": {
      "ticker": "FIX",
      "updatedAt": 1794946216.5300279,
      "dataAsOf": 1793804400.0,
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
          "eventId": "27fd8bf4ef95741240e9",
          "headline": "FIX SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1793804400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1035983/000110465926122938/tm2629087d1_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "BE": {
      "ticker": "BE",
      "updatedAt": 1794946216.5300279,
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
