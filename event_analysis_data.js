// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1790978622.258398,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790948708,
      "signal": "주의 강화",
      "netScore": -5.25,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.35,
          "level": "중립"
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
          "eventId": "5c5535c60fdbeef6746d",
          "headline": "OpenAI의 향후 IPO로 인해 Microsoft를 계속 구매하게 되었습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790948708,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=47ae2b80d403110e44e6036990235f72616e04c671dd37caf5a2da68448ca91e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cafc5d15193d5f54da75",
          "headline": "Tesla는 2026년 적자를 기록한 유일한 Magnificent Seven 주식입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790909821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a75ff1b036abc59b1be1398245a1af37ef409a9f0295f758a32c6de04fbb79",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ea6a1b85f299d64ee6f3",
          "headline": "기술 부문 상승으로 Gemini 4 Argon 출시 후 알파벳 미끄러짐; Microsoft는 꾸준한 유지, Amazon Dips",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790877108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11c7537e6686b271eb579ad83c3fd9904ab61164c2f9627049fcb3bc53531c11",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "de477e34add1d3d18ee9",
          "headline": "별자리 에너지: 원자력 발전 붐으로의 더욱 매력적인 진입점",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790777907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bca46b101bf91743494afb78ea9f8f722a58c2ab6fb6e0603070cf6c6e80ca3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b6a98167a10e98033b12",
          "headline": "Microsoft: Xbox 세그먼트 개편",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790759798,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a685d8e578e53fe077d45ece7ab9db25a999a11bc2fa844abcb84cc1daeb14b4",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790944299,
      "signal": "주의 강화",
      "netScore": -7.64,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.4,
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
          "score": -5,
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
          "eventId": "6d34d2872ecac5a74198",
          "headline": "프리미엄 서비스를 위해 스포츠 생방송 대량 권리를 추구하는 YouTube",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790944299,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=26d2b6f73176beaa382db72748d9a1cd47149ddf313c717fd228fe47cefbe40f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cafc5d15193d5f54da75",
          "headline": "Tesla는 2026년 적자를 기록한 유일한 Magnificent Seven 주식입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790909821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a75ff1b036abc59b1be1398245a1af37ef409a9f0295f758a32c6de04fbb79",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fc9adc00e2cd5ce31fd0",
          "headline": "ASTS 주식이 밤새 상승: 새로운 커머셜 책임자가 Google Fi를 도입하고 SiriusXM이 찹을 사용하는 동안 소매업은 Big 3 위성 JV를 차지합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790905933,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae7229e07cf9abb0b0e63ace92375cf10093cbd3c33022e5591233d6e88ebf3c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "374db392c7e83c40ed3e",
          "headline": "투자자들이 수익률 냉각을 응원함에 따라 S&P 500, 나스닥, 다우 선물이 1인치 더 높아졌습니다 — GOOGL, MU, MAT, NVDA In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790897279,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=08849f65268b05479a386e4e1416205e9ce4b6026de02408d117e683d1982533",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "34f90c178fc001c0cef5",
          "headline": "Google은 연방 판사 판결에 따라 광고 기술 독점으로 인해 32억 달러의 손해를 입을 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790881987,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=87c7524a63caab07a03ecdc09c03d13e9a4a8b37cc499acc369ec7a9637fa9b4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "42500eb53b7898478cc7",
          "headline": "Alphabet의 Google은 32억 달러 규모의 게시자 광고 기술 청구에 직면해야 합니다. 판사 규칙",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790879181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d6e33ad090dcc657e1f11bc3a25e8997e6142041e4b5ff3c0d6f123410011cf2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ea6a1b85f299d64ee6f3",
          "headline": "기술 부문 상승으로 Gemini 4 Argon 출시 후 알파벳 미끄러짐; Microsoft는 꾸준한 유지, Amazon Dips",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790877108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11c7537e6686b271eb579ad83c3fd9904ab61164c2f9627049fcb3bc53531c11",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2569d5cd2c24cea6cbe8",
          "headline": "Google, 2건의 독점금지 소송에서 승소. AI와 검색의 거대 기업이 여전히 인터넷을 지배하고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790877060,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bf49e260515e0a0202282fbf798bb5dcd7d66340d2af204a1e1022238e867f1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "553055248cdd2b7dc45a",
          "headline": "알파벳 vs. 아마존 vs. 마이크로소프트: 지금 당장 매수하는 것이 더 나은 \"매그니피센트 세븐\" 주식은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790876220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c49f56fa2c33e5bfa9bc0912241d0a962a5ae595f2d1ad5be48f0ce101c3e16",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c85328226c921c62b4d1",
          "headline": "OpenAI, Google 및 Meta는 자발적인 백악관 계약에 따라 외부 AI 감사를 약속합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790870766,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=413b48f81fdfa2d52e9913635e6ccb7062e2986e85c90df4799126b3bafafe6a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "be2f24e078980d90d55c",
          "headline": "Socure, 디지털 ID를 삭제하는 규제 기관으로서 삼성 및 Google과 함께 mDL 검증 출시",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790774940,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9455b2b67da1c2b8d0e3e626b99cb98f0953e700bf32c97853c408ee693e9d46",
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
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790954727,
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
          "score": -2.8,
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
          "eventId": "a03ad9c455a26e496a51",
          "headline": "Amazon Prime Big Deal Days 쇼핑을 계획 중이신가요? 돈을 절약하려면 먼저 다음 6가지 팁을 읽어보세요",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790954727,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6ffa57fe72d35c223d4fbdf1f270d5b4313b09a7739e5b08d59e692e29420bb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "383f3e94372ab8a930b4",
          "headline": "Amazon Prime 고객은 확장된 FTC 거래에서 $200 환불을 받을 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790952283,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b79280fdf3817b5275da32efc52d6735c1722fee77aeec56b92bc04faec9ea33",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d001966a9e7705adab2c",
          "headline": "퀄컴은 애플을 잃고 아마존을 추가하고 있다. 재고가 준비되어 있나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790945931,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c45d7eacf35cf50cb326056e2c2f659e5c5ae4b85c4b2bab92fb91b362cf355",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7814bc12b5d564e43e8a",
          "headline": "컨스텔레이션 에너지(Constellation Energy) 주가는 아마존과의 20년 원자력 계약 이후 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790943280,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab3769d82a562727abbaf453060254287d890701255aeea23595f5a7db0dceb8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5919e96d87d5217351eb",
          "headline": "시장 잡담: Amazon, 80억 달러 상당의 Nvidia AI 칩 오프로드 고려 중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790930557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d87231187e482616f3912b5e1643475be425d23d1fa00bd94c002aa6861f3b09",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2b704432c27532f8733f",
          "headline": "OpenAI와 AWS 거래는 Synopsys의 설계 자동화 전망을 어떻게 재구성합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790927753,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9d62851e57a2c072716936925963898b96b087106bfab3cf5da008492a78def",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cafc5d15193d5f54da75",
          "headline": "Tesla는 2026년 적자를 기록한 유일한 Magnificent Seven 주식입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790909821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a75ff1b036abc59b1be1398245a1af37ef409a9f0295f758a32c6de04fbb79",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6832cb655a90a3dafd84",
          "headline": "아마존, 20년 원자력 계약 체결. 이 핵 재고에 대한 좋은 소식입니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790891863,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36bbb932031d0a68e628d1da02b329b52f3b418594e9cf3aaed4bffe4471a56c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "29fe8dd9dff4fa8a9084",
          "headline": "Synopsys는 주요 AI 플레이어가 되고 있습니다: CEO, OpenAI, Amazon 거래에 대해 논의",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790886421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1ea559934e0f0123eb996c4cb36fd9780357e41096fae7a248738e8c46990057",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "ea6a1b85f299d64ee6f3",
          "headline": "기술 부문 상승으로 Gemini 4 Argon 출시 후 알파벳 미끄러짐; Microsoft는 꾸준한 유지, Amazon Dips",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790877108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11c7537e6686b271eb579ad83c3fd9904ab61164c2f9627049fcb3bc53531c11",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "553055248cdd2b7dc45a",
          "headline": "알파벳 vs. 아마존 vs. 마이크로소프트: 지금 당장 매수하는 것이 더 나은 \"매그니피센트 세븐\" 주식은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790876220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c49f56fa2c33e5bfa9bc0912241d0a962a5ae595f2d1ad5be48f0ce101c3e16",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3df816986c9db94cf94c",
          "headline": "OpenAI 및 Amazon과 AI 거래 후 Synopsys 주식 반등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790872375,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ad4c591b85ac8f1b51167dc97c5b09f28abab7ac8dd5f2d15c8349be3b93d27b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 27,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790919842,
      "signal": "중립·확인 대기",
      "netScore": -0.22,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.87,
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
          "score": -1.75,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.18,
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
          "eventId": "9300b1599e56fea8d471",
          "headline": "META 주식이 밤새 유지됨: 뉴멕시코주, Cambridge Analytica 사건에서 최대 400억 달러의 개인 정보 보호 벌금 청구",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790919842,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb75a95de2de0a771fcb1753603431da915512ab5318be66343c4c712eb74469",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cafc5d15193d5f54da75",
          "headline": "Tesla는 2026년 적자를 기록한 유일한 Magnificent Seven 주식입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790909821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a75ff1b036abc59b1be1398245a1af37ef409a9f0295f758a32c6de04fbb79",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c85328226c921c62b4d1",
          "headline": "OpenAI, Google 및 Meta는 자발적인 백악관 계약에 따라 외부 AI 감사를 약속합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790870766,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=413b48f81fdfa2d52e9913635e6ccb7062e2986e85c90df4799126b3bafafe6a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "36d4e817286b3d43f32c",
          "headline": "VIG는 늦어도 2035년까지 메타 또는 알파벳의 배당금을 소유할 수 없습니다: 지수에 기록된 10년 규칙",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790807721,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=385fe360bd925dc7aec0eaf265ded2160ac19c98a77a7438b11801e72ced6398",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "de477e34add1d3d18ee9",
          "headline": "별자리 에너지: 원자력 발전 붐으로의 더욱 매력적인 진입점",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790777907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bca46b101bf91743494afb78ea9f8f722a58c2ab6fb6e0603070cf6c6e80ca3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790945931,
      "signal": "주의 강화",
      "netScore": -9.04,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.22,
          "level": "주의"
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
          "eventId": "d001966a9e7705adab2c",
          "headline": "퀄컴은 애플을 잃고 아마존을 추가하고 있다. 재고가 준비되어 있나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790945931,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c45d7eacf35cf50cb326056e2c2f659e5c5ae4b85c4b2bab92fb91b362cf355",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "79ec7f6c493e8e437885",
          "headline": "짐 크레이머, 폴더블 아이폰 출시 전에 애플 주식 매입 촉구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790943360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1281cd16ffa72e2dfe84cbd522bcee206aa6a7d016e93e16e0316bc95bb08520",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "cafc5d15193d5f54da75",
          "headline": "Tesla는 2026년 적자를 기록한 유일한 Magnificent Seven 주식입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790909821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a75ff1b036abc59b1be1398245a1af37ef409a9f0295f758a32c6de04fbb79",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8263d2be765e18fde8c7",
          "headline": "Morgan Stanley는 Apple의 가을 제품 주기가 수익 성장을 지원할 수 있다고 말하며 메모리 비용을 상쇄 요인으로 보고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790859867,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d6aafb377b0b1d0c0c5015d62fcf0f627adc32004208f06272bfcbfbf342515",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "8749c2287eba81efb104",
          "headline": "투자자들이 예상보다 낮은 인플레이션 데이터를 무시함에 따라 S&P 500, Dow는 하락 마감 - MGM, SPCX, AAPL, TSM In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790803409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8ee20b68da4f30c86817c3e8c558746e67664bb035e14246f6f82f294a2fc4a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c992c6aef9f54a73c695",
          "headline": "Cramer는 새 휴대폰이 나오기 전에 Apple을 사라고 말했습니다. Apple의 듀오 모델은 \"놀라운 정도\"이기 때문입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790786819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=49cacb9c9c1d8eae92007f150c6e13417160ceb7987bfb2b4a354933b1295a61",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "529d4453631ae95d8eee",
          "headline": "QUALCOMM(QCOM)은 Apple 특허 계약을 갱신하고 AI, 클라우드 푸시를 심화한 후 6.7% 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790785170,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce490dc860da448ed0eaf18350c5b1a7fa898609cba8afb37f707f9c45d4fa90",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1c31ac315baa273dc334",
          "headline": "위스콘신 AI 데이터 센터 지연 가능성 보고 후 오라클 주가 1.8% 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790775827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec72dc0e97fc31589e09008f281bdacbd0a75c4981df575b8613c2261423859c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "25dc717fb2b07a5ff45d",
          "headline": "Apple이 Qualcomm과 라이센스 계약을 갱신함에 따라 QCOM 주식을 플레이하는 방법",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790773203,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a086872d6be15fc7b9bb394c6f3d844296c1a9f2c903446a6d791a1651c330be",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790866800.0,
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
          "score": 1.05,
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
          "score": -1.05,
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
          "eventId": "57e748ea4345c1a44426",
          "headline": "TSLA SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1790866800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026064366/tsla-20261002.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f34ff13fae74720b54cc",
          "headline": "Cathie Wood가 중국 합병 장애물 속에서 머스크가 트럼프, 시과 '모든 각도에서 일하고 있다'고 말한 후 TSLA, SPCX 상승",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790829586,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fce5bb4bbd6d3f02b4f37709d86a481c20fac2e9f4c3014a018a723e47ea0670",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0760c72e3009db7b04b0",
          "headline": "Tesla의 250억 달러 신용 한도가 AI와 Robotaxis에 큰 투자를 하는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790782080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9806c32816c9b40acc33c979802485ba4670b27546c9bc1fbb6e957444592036",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7b8067e01cf1a55fd54f",
          "headline": "시장이 Tesla와 SpaceX를 동시에 가혹하게 처벌한다면 어떻게 될까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790772346,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6df815b103448c7ce746ee33b4418ef9cf24fc4d0628cb6c03326c91f5fd7b85",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "675e61ebde2a3ecc9aa8",
          "headline": "리비안 대. Tesla: 적어도 시장은 Rivian을 실제 모습으로 취급합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790772308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f2b5b8f3210a521c796fcde6bc7ec41eced29dddeb73064af1eb6e7880e0b98",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790938090,
      "signal": "중립·확인 대기",
      "netScore": 0.21,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.1,
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
          "score": -2.1,
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
          "eventId": "346b62693c53d7f34360",
          "headline": "20년 만기 오라클 채권 수익률은 8.1%: 주식이 그 수익과 일치할 수 있을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790938090,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8b1e33b567232d2ea2b65d08e7e9f3fc8e2fa362da17d429c6d19a7c68b89118",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4eed8934dc823ec1c391",
          "headline": "Oracle 데이터 센터 거래로 We Energies의 전기 요금이 낮아질 수 있음",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790899805,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7cdc08e84da6c26d5c7359ec1d455a4e67b9a2eec968609e5098d4cb340465b3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "76af77f731a884c7a632",
          "headline": "Oracle, Tencent와 주요 클라우드 계약 체결: 보고서",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790863749,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b76d02ae3d7435573ab3b219adf16772cb30ac398e07e7d6240e7b00fe5e024f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "546242c9e3c762d54f96",
          "headline": "오라클의 마이너스 잉여 현금 흐름은 AI 금융 게임에 대한 불편한 진실을 폭로합니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790859914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=119689c2b2e10598031b9355e0d285992edfc7b6c8bbb130fae2194c332d876b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "0903700366d285ff6ca4",
          "headline": "CEG 주가 밤새 상승: Constellation, Amazon과 20년 원자력 계약 체결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790817386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28875decffb04ca755d66f2a77f936619eed8e8ea6a6e3e494fbc092a4b150a9",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7c0eae5d7ba4e2795881",
          "headline": "오라클 주가는 고점 대비 60% 하락했습니다. 내가 아직도 구매하지 않는 이유는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790793120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7497e076cb0508135a64dcf3be06ba5a6124ddd2c84eef6f1708a0a73eb2a543",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1c31ac315baa273dc334",
          "headline": "위스콘신 AI 데이터 센터 지연 가능성 보고 후 오라클 주가 1.8% 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790775827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec72dc0e97fc31589e09008f281bdacbd0a75c4981df575b8613c2261423859c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790955901,
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
          "eventId": "f6f7a85ca6fdcf937de1",
          "headline": "Salesforce vs. Palantir: 2026년에는 어느 AI 소프트웨어 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790955901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca5f1498dd9e6e0fe41ea247f0824a8d131e4a55ba16176bcb9837a3c7a2446b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "74d045e231e831f66fd7",
          "headline": "Salesforce(CRM)에 새로운 AI 거래가 추가되었습니다. 주식은 여전히 ​​저렴한가요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790899899,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12ea4e382e2316fb17dcbdef5effeb2fb910c08ea30f0a1efe55fe4d4dc3fb68",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790955901,
      "signal": "주의 강화",
      "netScore": -3.63,
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
          "eventId": "f6f7a85ca6fdcf937de1",
          "headline": "Salesforce vs. Palantir: 2026년에는 어느 AI 소프트웨어 주식이 더 나은 매수인가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790955901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca5f1498dd9e6e0fe41ea247f0824a8d131e4a55ba16176bcb9837a3c7a2446b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "40b67c8308f5886f650b",
          "headline": "Palantir의 성장은 훨씬 더 높은 주가를 정당화할 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790945123,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8138498d3a228c281ed608b4d41ace9303fffc2c057ccbb8c769ab202d8354f1",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0e01c69790881ae304cf",
          "headline": "Palantir의 억만장자 Peter Thiel은 이 2개의 인공 지능 주식에 자신의 포트폴리오의 42%를 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790914800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9af7daa37f7801ef72a28fe2aaf0d05bd9a625b8590c8b07d50ed983a6295560",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e16287760074f0049784",
          "headline": "Palantir의 CEO는 스웨덴 산림지 37,000에이커를 구입했고 사냥 임대는 사라졌습니다. 5년 임대료는 사회보장 소득 심사에서 $0으로 계산될 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790844680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c28b18d887d69e5aa9abb30d0f47068ec5cb024d5ff94eb2ffd9f8543cbf175c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ca0b78262fce14ab2b4a",
          "headline": "ServiceNow 대 Palantir Technologies: 2026년에는 어느 기술주를 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790812505,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=798e106826e9de2192270e05537827876be12e9f21ed313169722199fe0ca1de",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790955935,
      "signal": "우호적 변화",
      "netScore": 5.17,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
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
          "score": -4.72,
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
          "eventId": "565a01e3f7f0155b5eba",
          "headline": "AI 부채는 '양조 위기'입니다. Ed Zitron은 Amazon, CoreWeave가 복잡한 금융으로 전환하자 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790955935,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=abe298cee1ccd32322482e33bab5358a8aba8093d9f1c558cfef3cf5a55bda3a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "7db500f9d5fcc874e200",
          "headline": "정정: 주요 정오 기사: 강력한 수익, 지침에도 불구하고 Micron 주가 하락; Broadcom, 인프라 지출을 위해 인류에게 420억 달러 대출",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790943802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95ffa93fa911e6705859ccbcbefc3050b33ff77314171d8a8239c21077836479",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "e0eeae9ec683bcaedb54",
          "headline": "Taiwan Semiconductor (NYSE:TSM), 높은 성장과 펀더멘탈 개선을 보여",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790932250,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32956140f744174585ac905b63ab9e3772197a3d0469e1b6126016d87d435119",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "4ca621a1ddee5bfc88d5",
          "headline": "AMZN 인치 더 높은 프리마켓: Amazon은 투자자에게 80억 달러의 Nvidia 칩을 오프로드하려고 하는 것으로 알려졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790931964,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f2358a639c87c7bda68100377ca49eb26249af6f5f0bc2b3ff06bc280ceb561e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5919e96d87d5217351eb",
          "headline": "시장 잡담: Amazon, 80억 달러 상당의 Nvidia AI 칩 오프로드 고려 중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790930557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d87231187e482616f3912b5e1643475be425d23d1fa00bd94c002aa6861f3b09",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ccec3c3d5322269c8824",
          "headline": "Stocktwits AI 요약: Micron의 폭발적인 분기, Nvidia의 1,500억 달러 자사주 매입 및 AI 에이전트 경쟁",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790925110,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d4ef37ddec382e461ea60f1d1fc6e25e2551cce81705ab0fd567f5c73f55a3d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0e01c69790881ae304cf",
          "headline": "Palantir의 억만장자 Peter Thiel은 이 2개의 인공 지능 주식에 자신의 포트폴리오의 42%를 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790914800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9af7daa37f7801ef72a28fe2aaf0d05bd9a625b8590c8b07d50ed983a6295560",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "cafc5d15193d5f54da75",
          "headline": "Tesla는 2026년 적자를 기록한 유일한 Magnificent Seven 주식입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790909821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a75ff1b036abc59b1be1398245a1af37ef409a9f0295f758a32c6de04fbb79",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "374db392c7e83c40ed3e",
          "headline": "투자자들이 수익률 냉각을 응원함에 따라 S&P 500, 나스닥, 다우 선물이 1인치 더 높아졌습니다 — GOOGL, MU, MAT, NVDA In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790897279,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=08849f65268b05479a386e4e1416205e9ce4b6026de02408d117e683d1982533",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b3a6dde48d569609fa3a",
          "headline": "ASML 대 SK 하이닉스: 인공지능 기업에 대한 수익 추세가 투자자에게 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790883456,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48501e5554ef601c8f233da1ca52c43dccb15f3f8b70d35f845a44aee1068504",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "42500eb53b7898478cc7",
          "headline": "Alphabet의 Google은 32억 달러 규모의 게시자 광고 기술 청구에 직면해야 합니다. 판사 규칙",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790879181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d6e33ad090dcc657e1f11bc3a25e8997e6142041e4b5ff3c0d6f123410011cf2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "9c7fec58601a3cca010b",
          "headline": "주요 정오 기사: 강력한 수익과 가이던스에도 불구하고 Micron 주가 하락; Broadcom, 인프라 지출을 위해 인류에게 420억 달러 대출",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790869103,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ba659041f67ce3709677047ffb605c15f6b63ae040b7a5399c67b2d5252f134",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 37,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790956051,
      "signal": "우호적 변화",
      "netScore": 8.6,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
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
          "score": -2.97,
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
          "eventId": "af6425171f6659bcec20",
          "headline": "AMD는 칩 주식이 상승세를 이어가면서 3% 상승했습니다. Arm 점프 8%, NVIDIA 상승 2%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790956051,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73b493ec511e22341068073b5e1770e7afca1b286fb436d4610f7e22d7eafd29",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "565a01e3f7f0155b5eba",
          "headline": "AI 부채는 '양조 위기'입니다. Ed Zitron은 Amazon, CoreWeave가 복잡한 금융으로 전환하자 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790955935,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=abe298cee1ccd32322482e33bab5358a8aba8093d9f1c558cfef3cf5a55bda3a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7db500f9d5fcc874e200",
          "headline": "정정: 주요 정오 기사: 강력한 수익, 지침에도 불구하고 Micron 주가 하락; Broadcom, 인프라 지출을 위해 인류에게 420억 달러 대출",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790943802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95ffa93fa911e6705859ccbcbefc3050b33ff77314171d8a8239c21077836479",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e0eeae9ec683bcaedb54",
          "headline": "Taiwan Semiconductor (NYSE:TSM), 높은 성장과 펀더멘탈 개선을 보여",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790932250,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32956140f744174585ac905b63ab9e3772197a3d0469e1b6126016d87d435119",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "5919e96d87d5217351eb",
          "headline": "시장 잡담: Amazon, 80억 달러 상당의 Nvidia AI 칩 오프로드 고려 중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790930557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d87231187e482616f3912b5e1643475be425d23d1fa00bd94c002aa6861f3b09",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "0e01c69790881ae304cf",
          "headline": "Palantir의 억만장자 Peter Thiel은 이 2개의 인공 지능 주식에 자신의 포트폴리오의 42%를 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790914800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9af7daa37f7801ef72a28fe2aaf0d05bd9a625b8590c8b07d50ed983a6295560",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "b3a6dde48d569609fa3a",
          "headline": "ASML 대 SK 하이닉스: 인공지능 기업에 대한 수익 추세가 투자자에게 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790883456,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48501e5554ef601c8f233da1ca52c43dccb15f3f8b70d35f845a44aee1068504",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "0db9edf1f3485e2c1c6b",
          "headline": "어플라이드 머티리얼즈 vs. AMD: 2026년에는 어느 AI 반도체 주식이 더 나은 매수인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790882881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bfab893cbdad513869c723262909369260c2ca0e76dd1c8da9690133180b48c4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "42500eb53b7898478cc7",
          "headline": "Alphabet의 Google은 32억 달러 규모의 게시자 광고 기술 청구에 직면해야 합니다. 판사 규칙",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790879181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d6e33ad090dcc657e1f11bc3a25e8997e6142041e4b5ff3c0d6f123410011cf2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "98385b7b1b6b52c9aaa3",
          "headline": "AMD(Advanced Micro Devices)는 World Labs 거래로 인해 33% 저평가될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790874650,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7739c22b8c40ddd95f74bfadc661a431e3c5ff5af5a845d48fbc911e5e4a2827",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9c7fec58601a3cca010b",
          "headline": "주요 정오 기사: 강력한 수익과 가이던스에도 불구하고 Micron 주가 하락; Broadcom, 인프라 지출을 위해 인류에게 420억 달러 대출",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790869103,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ba659041f67ce3709677047ffb605c15f6b63ae040b7a5399c67b2d5252f134",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "6a8965da998a08e77331",
          "headline": "Broadcom, 금융 인프라 지출로 Anthropic에 420억 달러 대출 제공",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790861885,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43f9370f1a90e171b25ea647f8816600621ed547eccef5b1f1fd267d85f50aa7",
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
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790943802,
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
          "score": -1.4,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -4.55,
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
          "eventId": "7db500f9d5fcc874e200",
          "headline": "정정: 주요 정오 기사: 강력한 수익, 지침에도 불구하고 Micron 주가 하락; Broadcom, 인프라 지출을 위해 인류에게 420억 달러 대출",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790943802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95ffa93fa911e6705859ccbcbefc3050b33ff77314171d8a8239c21077836479",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "336e627f67bd847501a6",
          "headline": "Broadcom은 칩 구매를 위해 최대 고객 중 한 명에게 420억 달러를 대출하고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790943157,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8ff4600b010d81379d8072e7e7ae7e35e92fb6b5d09edd133800157706b758a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1687ebb13284d0b26d93",
          "headline": "2026년 700% 급증하는 SanDisk, 글로벌 NAND 스토리지 압박에서 중심 무대 차지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790934920,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=130546d1ad7a3901e42401910a78338c8b4089c318958ef80d43a54764af81b6",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0ec7f967303bb5b42416",
          "headline": "어플라이드 머티어리얼즈 vs. 브로드컴: 2026년에는 어느 반도체 주식이 더 나은 매수인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790879382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f3e91de8704ac93d4fdf702bbb7770dbd94930ccf9dc6f9975ef83e8b8b86bf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9c7fec58601a3cca010b",
          "headline": "주요 정오 기사: 강력한 수익과 가이던스에도 불구하고 Micron 주가 하락; Broadcom, 인프라 지출을 위해 인류에게 420억 달러 대출",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790869103,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ba659041f67ce3709677047ffb605c15f6b63ae040b7a5399c67b2d5252f134",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92ea573756206a441158",
          "headline": "AI에는 대용량 스토리지가 필요합니다. Seagate는 준비되어 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790868629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0cdb66a0a874d28ef5cae8b94079fdcfc7fb61adffa33d8d83475100402a76ba",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6a8965da998a08e77331",
          "headline": "Broadcom, 금융 인프라 지출로 Anthropic에 420억 달러 대출 제공",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790861885,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43f9370f1a90e171b25ea647f8816600621ed547eccef5b1f1fd267d85f50aa7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c4dbe9f8dd0d50234cec",
          "headline": "Broadcom은 Anthropic에게 칩 임대 계약으로 최대 420억 달러를 빌려줄 예정입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790856977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6e6b24ebe125bdf94d1072cadb97a3247e19e7737e993d56938737d75313a09",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "4b4a344308ae870cc6a5",
          "headline": "역사에 따르면 AMD 주식의 1조 달러 이정표는 한도가 아닙니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790834461,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b7deef85221430a024a04d7f5653a91a75e6f3b37f8f949b6802afdcb00b5c74",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "76674ba06ec9e7bbcb73",
          "headline": "Nvidia, Broadcom 및 AMD 투자자는 달력에 10월 15일을 표시해야 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790809440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a438b5d0e95cb6bd7403fa88539f5348b58651232f9615f1d3f5d35a122dbaa",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b412ca3fff1db1f4ee01",
          "headline": "칩 경쟁자가 9월 놀랍도록 강세를 보이면서 인텔은 3% 상승; NVIDIA의 상승, AMD의 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790785753,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4bcd5a5cd8da8dd27f905adce97cf90beb0d7209180c08583789f727f5171568",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f7c4d4fa261b1dc74b3c",
          "headline": "Broadcom vs. SK Hynix: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790778901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4727c817a76bb9bb2b2ea4a1fb8cb5453883ad980a03ffad1635bfc094534805",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790945931,
      "signal": "주의 강화",
      "netScore": -7.29,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
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
          "score": -5,
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
          "eventId": "d001966a9e7705adab2c",
          "headline": "퀄컴은 애플을 잃고 아마존을 추가하고 있다. 재고가 준비되어 있나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790945931,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c45d7eacf35cf50cb326056e2c2f659e5c5ae4b85c4b2bab92fb91b362cf355",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "79ec7f6c493e8e437885",
          "headline": "짐 크레이머, 폴더블 아이폰 출시 전에 애플 주식 매입 촉구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790943360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1281cd16ffa72e2dfe84cbd522bcee206aa6a7d016e93e16e0316bc95bb08520",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "8263d2be765e18fde8c7",
          "headline": "Morgan Stanley는 Apple의 가을 제품 주기가 수익 성장을 지원할 수 있다고 말하며 메모리 비용을 상쇄 요인으로 보고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790859867,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d6aafb377b0b1d0c0c5015d62fcf0f627adc32004208f06272bfcbfbf342515",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "9d256b65576f1051da97",
          "headline": "연방순회법원, ParkerVision 대 ​​Qualcomm 사건을 지방법원에 환송",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790852400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc8244858d41cc72c60c6587ddc6bc2497c61f366bb4d3276da3b0e86e28134c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "9691f49475a741a5f772",
          "headline": "Qualcomm 주식을 기다리는 경우는 무엇입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790794314,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aabf53418ee4821a01d0435e9eb0313fc7949e476e15f00ff28c97fba0c2ccbf",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c992c6aef9f54a73c695",
          "headline": "Cramer는 새 휴대폰이 나오기 전에 Apple을 사라고 말했습니다. Apple의 듀오 모델은 \"놀라운 정도\"이기 때문입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790786819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=49cacb9c9c1d8eae92007f150c6e13417160ceb7987bfb2b4a354933b1295a61",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "529d4453631ae95d8eee",
          "headline": "QUALCOMM(QCOM)은 Apple 특허 계약을 갱신하고 AI, 클라우드 푸시를 심화한 후 6.7% 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790785170,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce490dc860da448ed0eaf18350c5b1a7fa898609cba8afb37f707f9c45d4fa90",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1c31ac315baa273dc334",
          "headline": "위스콘신 AI 데이터 센터 지연 가능성 보고 후 오라클 주가 1.8% 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790775827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec72dc0e97fc31589e09008f281bdacbd0a75c4981df575b8613c2261423859c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "25dc717fb2b07a5ff45d",
          "headline": "Apple이 Qualcomm과 라이센스 계약을 갱신함에 따라 QCOM 주식을 플레이하는 방법",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790773203,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a086872d6be15fc7b9bb394c6f3d844296c1a9f2c903446a6d791a1651c330be",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3cc99b7cba5bb0905d9c",
          "headline": "Broadcom vs. Qualcomm: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790770801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=63d7092cecaa0e9e11b0aa2091f6175e232409165fd108fadcf208f5dc3ec931",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790956051,
      "signal": "주의 강화",
      "netScore": -4.4,
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
          "eventId": "af6425171f6659bcec20",
          "headline": "AMD는 칩 주식이 상승세를 이어가면서 3% 상승했습니다. Arm 점프 8%, NVIDIA 상승 2%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790956051,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73b493ec511e22341068073b5e1770e7afca1b286fb436d4610f7e22d7eafd29",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2a3328576b40bfa42e50",
          "headline": "Arm 대 ASML: 2026년에는 어느 반도체 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790881055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=765128583c336b8b2089b2c94158c196c41a092d709b38c5fc2968e5b3354c69",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5a05fe9c6a91476fe414",
          "headline": "Advanced Micro Devices vs. Arm: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790809209,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05f0faa62c99f8b860e776225960b1b9282d8a0daccfaf8d8a47b1ec1a05a793",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790940900,
      "signal": "중립·확인 대기",
      "netScore": -1.47,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "6b42964d65017c6fcfd3",
          "headline": "Marvell의 하이퍼스케일러와의 맞춤형 AI 실리콘 거래로 성장 스토리를 재정의할 수 있음",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790940900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c34e384aef29741842c48ab4579aa3559fb30b3d02e8315cf4151b5e2d9d0a0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "18b65fc56af4f3139b49",
          "headline": "Marvell 기술 하락이 발생하면 구매하세요.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790858709,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9c2d95eda7185245dcef5cbc6f94102a42686bfb4ed473bdfb21908187effe5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9586df933e07fa8661dc",
          "headline": "ASML Holding N.V. 대 Marvell Technology: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790767201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=244f04f2afa5a68275b1c06bc7ba67f53209402059e444073e48d05f20f0d6fe",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790938946,
      "signal": "중립·확인 대기",
      "netScore": -0.56,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
          "eventId": "06d55b15401e5a5d3f8d",
          "headline": "인텔은 주식을 95달러에 매도했습니다. 현재 $120에 거래되고 있습니다. 누가 이겼나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790938946,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a96fc8d27baab826688895ecf7aebf895f4750a555b7107d9b325177ae0402f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8b663cf8c07b0af83f86",
          "headline": "Trump는 OpenAI 및 Anthropic에서 인텔 스타일의 정부 지분을 떠 올랐습니다. '나는 그런 거래가 많이 있습니다'(업데이트됨)",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790927686,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4010a2a42ea84afca48e347c8d3d94f42330ebcb13c9cbef01e66e456d5d5473",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0e01c69790881ae304cf",
          "headline": "Palantir의 억만장자 Peter Thiel은 이 2개의 인공 지능 주식에 자신의 포트폴리오의 42%를 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790914800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9af7daa37f7801ef72a28fe2aaf0d05bd9a625b8590c8b07d50ed983a6295560",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dbd6070b0f467abae622",
          "headline": "트럼프는 인텔과 마찬가지로 정부가 OpenAI, Anthropic에 지분을 가질 수도 있다고 말했습니다: '나는 그런 거래를 많이 가지고 있습니다'",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790906061,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=77ef244975ca9da7f5dd0f41cc88fba9f5bc0cdd945844f0466d9ee537037991",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6ce4b782c82187856beb",
          "headline": "인텔 대 대만 반도체 제조: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790893201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=122862f215fd764d32810677d9c84ae6ee40be99ec463a2134ddd4b22bd71f0a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "55bff1c06e0bc2949f2e",
          "headline": "인텔이 아닙니다. 엔비디아가 아닙니다. 이 2개의 칩 주식은 Advanced Chip Tech에서 깨지지 않는 해자를 유지합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790859120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eac12169f885113769af0741873cfe186c5949d460f006440f3c0ccc6947220e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b412ca3fff1db1f4ee01",
          "headline": "칩 경쟁자가 9월 놀랍도록 강세를 보이면서 인텔은 3% 상승; NVIDIA의 상승, AMD의 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790785753,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4bcd5a5cd8da8dd27f905adce97cf90beb0d7209180c08583789f727f5171568",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790932250,
      "signal": "주의 강화",
      "netScore": -5.87,
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
          "eventId": "e0eeae9ec683bcaedb54",
          "headline": "Taiwan Semiconductor (NYSE:TSM), 높은 성장과 펀더멘탈 개선을 보여",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790932250,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32956140f744174585ac905b63ab9e3772197a3d0469e1b6126016d87d435119",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f1d465f4e21862b12b70",
          "headline": "예측: 대만 반도체 제조업 주가는 10월 15일 이후 급등할 것입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790895000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af6dad4c2fe6a4c9ea9366915719e20622689d8207876c32b663b1b4b9ff7e45",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6ce4b782c82187856beb",
          "headline": "인텔 대 대만 반도체 제조: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790893201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=122862f215fd764d32810677d9c84ae6ee40be99ec463a2134ddd4b22bd71f0a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8992693dc4a207c42370",
          "headline": "'TSMC, 더 많은 AI 칩을 위해 수십억 달러 규모의 텍사스 캠퍼스 고려' - Bloomberg",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790837486,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d996c407476320a84a09d18adf4d2ae4922f1f9d72327f629f841df5638b7f8c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8dc1bde4a73fd588f4f4",
          "headline": "어플라이드 머티어리얼즈 vs. 대만 반도체 제조업: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790818441,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=58722402d0441489d12660ed1cd5a05a795c50e55f398528b0f90d8d821626d9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8749c2287eba81efb104",
          "headline": "투자자들이 예상보다 낮은 인플레이션 데이터를 무시함에 따라 S&P 500, Dow는 하락 마감 - MGM, SPCX, AAPL, TSM In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790803409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8ee20b68da4f30c86817c3e8c558746e67664bb035e14246f6f82f294a2fc4a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "170a7f9a6553e8adb38b",
          "headline": "알파벳 주식이 수요일에 터진 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790784767,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=244c52e0c9a271b854718c30371260a87503a4975648a84fac1f754167296228",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790881055,
      "signal": "주의 강화",
      "netScore": -7.0,
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
          "score": -3.5,
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
          "eventId": "2a3328576b40bfa42e50",
          "headline": "Arm 대 ASML: 2026년에는 어느 반도체 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790881055,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=765128583c336b8b2089b2c94158c196c41a092d709b38c5fc2968e5b3354c69",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "447d854aeb11e2cf1e97",
          "headline": "어플라이드 머티어리얼즈 vs. ASML: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790877928,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffe9e9ca6f612f7e1a96f1294ad12865338a1094eb9ef801bf56b5c931dc8bfa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1f3ea04df805c0a36731",
          "headline": "ASML 대 SK 하이닉스: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790862361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2816a35c4eb8bc7c10e68df639a850d91e324d370aa93c6f44b1d93d3b1cd670",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "056c2a0396eb7cce39c3",
          "headline": "ASML, TSM 수익이 AI 거래에 새로운 위험을 노출할 수 있음",
          "eventLabel": "실적 발표",
          "publishedAt": 1790769940,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b486481e42fb611758c206dc6fae54aa514110ce3c206bce472ed6914a8e56f",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9586df933e07fa8661dc",
          "headline": "ASML Holding N.V. 대 Marvell Technology: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790767201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=244f04f2afa5a68275b1c06bc7ba67f53209402059e444073e48d05f20f0d6fe",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790882881,
      "signal": "주의 강화",
      "netScore": -9.88,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.8,
          "level": "주의"
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
          "eventId": "0db9edf1f3485e2c1c6b",
          "headline": "어플라이드 머티리얼즈 vs. AMD: 2026년에는 어느 AI 반도체 주식이 더 나은 매수인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790882881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bfab893cbdad513869c723262909369260c2ca0e76dd1c8da9690133180b48c4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "73945795dc7e99004cb6",
          "headline": "ASML 대 Applied Digital: 향후 1년간 소유하기에 더 나은 반도체 장비 주식은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790882400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc2f7a91d6773fdaef3242b2831d8a46ffeeeda63b52043de6065713645a64e8",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0ec7f967303bb5b42416",
          "headline": "어플라이드 머티어리얼즈 vs. 브로드컴: 2026년에는 어느 반도체 주식이 더 나은 매수인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790879382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f3e91de8704ac93d4fdf702bbb7770dbd94930ccf9dc6f9975ef83e8b8b86bf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "447d854aeb11e2cf1e97",
          "headline": "어플라이드 머티어리얼즈 vs. ASML: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790877928,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffe9e9ca6f612f7e1a96f1294ad12865338a1094eb9ef801bf56b5c931dc8bfa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9d5845851e5e3a582796",
          "headline": "AI 컴퓨팅 확장 및 메모리 부족으로 AMAT(Applied Materials) 성장 활주로 확장",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790865281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b4e1f0c3507b0b86122dbfd1d25d6a30188a3931f40b8835a672bd86ac72bac5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8dc1bde4a73fd588f4f4",
          "headline": "어플라이드 머티어리얼즈 vs. 대만 반도체 제조업: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790818441,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=58722402d0441489d12660ed1cd5a05a795c50e55f398528b0f90d8d821626d9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1790978622.258398,
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
      "updatedAt": 1790978622.258398,
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
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790955935,
      "signal": "우호적 변화",
      "netScore": 4.95,
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
          "score": 4.55,
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
          "eventId": "565a01e3f7f0155b5eba",
          "headline": "AI 부채는 '양조 위기'입니다. Ed Zitron은 Amazon, CoreWeave가 복잡한 금융으로 전환하자 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790955935,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=abe298cee1ccd32322482e33bab5358a8aba8093d9f1c558cfef3cf5a55bda3a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7db500f9d5fcc874e200",
          "headline": "정정: 주요 정오 기사: 강력한 수익, 지침에도 불구하고 Micron 주가 하락; Broadcom, 인프라 지출을 위해 인류에게 420억 달러 대출",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790943802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95ffa93fa911e6705859ccbcbefc3050b33ff77314171d8a8239c21077836479",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "79ec7f6c493e8e437885",
          "headline": "짐 크레이머, 폴더블 아이폰 출시 전에 애플 주식 매입 촉구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790943360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1281cd16ffa72e2dfe84cbd522bcee206aa6a7d016e93e16e0316bc95bb08520",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "e0eeae9ec683bcaedb54",
          "headline": "Taiwan Semiconductor (NYSE:TSM), 높은 성장과 펀더멘탈 개선을 보여",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790932250,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32956140f744174585ac905b63ab9e3772197a3d0469e1b6126016d87d435119",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "5919e96d87d5217351eb",
          "headline": "시장 잡담: Amazon, 80억 달러 상당의 Nvidia AI 칩 오프로드 고려 중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790930557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d87231187e482616f3912b5e1643475be425d23d1fa00bd94c002aa6861f3b09",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "0e01c69790881ae304cf",
          "headline": "Palantir의 억만장자 Peter Thiel은 이 2개의 인공 지능 주식에 자신의 포트폴리오의 42%를 보유하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790914800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9af7daa37f7801ef72a28fe2aaf0d05bd9a625b8590c8b07d50ed983a6295560",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "3a72b6df53e77404ce30",
          "headline": "Micron은 2028년에 메모리 공급이 훨씬 더 엄격해질 것이라고 말했습니다. Sandisk의 계약은 얻을 수 있는 금액을 제한합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790913482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=083eb6300141fad73672a0f96edcaff05674be5e6054f0a6ed58fabf49ef7015",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "374db392c7e83c40ed3e",
          "headline": "투자자들이 수익률 냉각을 응원함에 따라 S&P 500, 나스닥, 다우 선물이 1인치 더 높아졌습니다 — GOOGL, MU, MAT, NVDA In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790897279,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=08849f65268b05479a386e4e1416205e9ce4b6026de02408d117e683d1982533",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7baac916e0254fc4d56b",
          "headline": "마이크론의 불런은 끝나지 않았다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790888701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4973b4ac885fe174c1c825f17a1b174b0a3eb72c49ed0d890cd9051056dbbc04",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "499170549b66ab2405e5",
          "headline": "오늘 주식 시장: S&P는 10월부터 상승하고 Micron은 상승합니다. Barbie Maker, 거래 뉴스로 급증",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790887324,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc513ee84a3d9b0fbe4b51adb17093431be740abf1f38ea281bfbd8b418e7237",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "ad26742d95a90576b8fb",
          "headline": "MU Q3 심층 분석: AI 수요, HBM 모멘텀 및 공급 제약으로 인한 전망",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790886547,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44983bcab36527f22d2816d0c3e04dd4e643a9aa78c8a51941bdefaa6cbfe4d5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "b3a6dde48d569609fa3a",
          "headline": "ASML 대 SK 하이닉스: 인공지능 기업에 대한 수익 추세가 투자자에게 알려주는 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790883456,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48501e5554ef601c8f233da1ca52c43dccb15f3f8b70d35f845a44aee1068504",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 44,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790942008,
      "signal": "우호적 변화",
      "netScore": 4.54,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
          "eventId": "6fced187c8f62c63b6d2",
          "headline": "Sandisk: 더 풍부한 가치 평가로 균형을 이루는 훌륭한 장기 거래 보장(업그레이드)",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790942008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a691cb3366d8e147b14462718a7de6fd523d477dbb75761ed8d8d67d89fb1c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3a72b6df53e77404ce30",
          "headline": "Micron은 2028년에 메모리 공급이 훨씬 더 엄격해질 것이라고 말했습니다. Sandisk의 계약은 얻을 수 있는 금액을 제한합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790913482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=083eb6300141fad73672a0f96edcaff05674be5e6054f0a6ed58fabf49ef7015",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c44538476f9e611ecb80",
          "headline": "SanDisk 주가가 급등한 이유는 무엇입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790899318,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=256266dd661d1979a3c1a2ab118571b05853fee761e293f70f90d4fc843d1e2f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1919ed183035f36200af",
          "headline": "2026년 엄청난 이익 이후 NVIDIA, Micron 및 SanDisk는 2027년에도 계속 상승할 수 있습니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790785853,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a15a5bc04dedc10a49256249fbeb0f8e33859ca15b3b5b9d47270d6f611ef66d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790943360,
      "signal": "주의 강화",
      "netScore": -6.72,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.4,
          "level": "주의"
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
          "score": -4.55,
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
          "eventId": "79ec7f6c493e8e437885",
          "headline": "짐 크레이머, 폴더블 아이폰 출시 전에 애플 주식 매입 촉구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790943360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1281cd16ffa72e2dfe84cbd522bcee206aa6a7d016e93e16e0316bc95bb08520",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "153b34f2955f97f974f5",
          "headline": "Toshiba는 HDD 공급을 두 배로 늘리고 싶어 - Western Digital, Seagate 투자자들은 이를 좋아하지 않음",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790932527,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1ae18bd9a14eb157bee6bc79971dad842ae599ae37fd3c5d621ee1a727ac7ba6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0269855baa404240fe02",
          "headline": "Stocktwits 여권 포트폴리오: QQQ는 이번 주 채권 시장 하락 속에서 SPY, DIA 및 아시아 주식보다 더 나은 모습을 유지합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790921953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc8aa8f8dc7b1b729cc67078895996bac0600bf43adbaf273446fd9ed902bc59",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8263d2be765e18fde8c7",
          "headline": "Morgan Stanley는 Apple의 가을 제품 주기가 수익 성장을 지원할 수 있다고 말하며 메모리 비용을 상쇄 요인으로 보고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790859867,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d6aafb377b0b1d0c0c5015d62fcf0f627adc32004208f06272bfcbfbf342515",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "c992c6aef9f54a73c695",
          "headline": "Cramer는 새 휴대폰이 나오기 전에 Apple을 사라고 말했습니다. Apple의 듀오 모델은 \"놀라운 정도\"이기 때문입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790786819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=49cacb9c9c1d8eae92007f150c6e13417160ceb7987bfb2b4a354933b1295a61",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "1c31ac315baa273dc334",
          "headline": "위스콘신 AI 데이터 센터 지연 가능성 보고 후 오라클 주가 1.8% 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790775827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec72dc0e97fc31589e09008f281bdacbd0a75c4981df575b8613c2261423859c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1790978622.258398,
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
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790947452,
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
          "eventId": "b6d37edd07f93a2607bd",
          "headline": "지금 코히런트 주식을 구매하려면 무엇이 진실이어야 합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790947452,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d34451c97b4198aecadba904305f0519140fdc87caa0ee01adc989df39b4f5b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b2a7b0306e701a097adc",
          "headline": "Coherent의 PhotonLink 푸시는 투자자를 위한 AI 데이터 센터 광학 엣지(COHR)를 재구성하고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790780952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53f315e8d6ee6d1832aa8da105118ee59f97c1fcf44db7f6578e6d350ddf49c4",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790882335,
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
          "eventId": "3920fd4b73f7cdc79031",
          "headline": "AI의 새로운 \"구조적 승리자\"를 만나보세요: Coherent는 11% 상승, Lumentum은 8% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790882335,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3619be35bcf1a7fabfa8ddef55707eb9969ae0256b378e5ec8f53df2bf153674",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1790978622.258398,
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
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790899860,
      "signal": "우호적 변화",
      "netScore": 3.86,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.15,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.02,
          "level": "우호적"
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
          "score": -4.72,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.88,
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
          "eventId": "b3e08c8c61e4e22cbacf",
          "headline": "이 숫자가 별자리 에너지 주식을 더 높일 수 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790899860,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d102b527043245215d108f026511fa763ab64bf6b516888563668d986b0dbf5c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "177d16eccbb51963aa41",
          "headline": "오늘 별자리 에너지 주식이 상승하는 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790876367,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c31c0c17d8388bc9c0076b7e3b083800f8db811842479be4078a12e9d9f6b6d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "20c248f2c324b56fd70b",
          "headline": "Amazon Nuke 거래, 도끼 데이터 센터 이후 별자리 에너지에 연료 공급",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790864905,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=927824c86c9d3752fa15e7e693696d1189d45a25843c792923dc9903b0f95957",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9a85fdbd8e563df5538a",
          "headline": "아마존, 컨스텔레이션 에너지와 20년 원자력 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790854215,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70ac3e3e4fe7f9bd3fc3fb4ad6b1e4ca0e6dedf8ea0a7163f6503f95769c447f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3f6178e27076eef980c0",
          "headline": "아마존, 컨스텔레이션 에너지와 20년 원자력 계약 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790854215,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70ac3e3e4fe7f9bd3fc3fb4ad6b1e4ca0e6dedf8ea0a7163f6503f95769c447f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "71614825c4b16ebb2dad",
          "headline": "Amazon, Constellation과 20년 원자력 계약 체결, AI로 인한 전력 수요 촉진을 위해 30억 달러 투자 유치",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790832003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f317ff8db46435518ae4ebd81d6452319e844ba10ab9138aa424ebef2cb4efc0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0903700366d285ff6ca4",
          "headline": "CEG 주가 밤새 상승: Constellation, Amazon과 20년 원자력 계약 체결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790817386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28875decffb04ca755d66f2a77f936619eed8e8ea6a6e3e494fbc092a4b150a9",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0e12ddd5812d18a4993a",
          "headline": "CEG 주가 밤새 상승: Constellation, Amazon과 20년 원자력 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790817386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28875decffb04ca755d66f2a77f936619eed8e8ea6a6e3e494fbc092a4b150a9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3ddb2ec57353bc895f1b",
          "headline": "컨스텔레이션 에너지(Constellation Energy) 주가는 아마존 원자력 발전 계약으로 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790801086,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96e2ec16b7523fceb3accad82133a5a2a5c56a7f092efedc3614e16f97458a9f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9429347d27d6133237d",
          "headline": "Constellation과 Amazon은 Calvert Cliffs에 190메가와트의 원자력 용량을 추가하는 20년 전력 구매 계약을 발표했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790798400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b48b08f2162baae41e27808ff8c840e7e2a6995a76e3cc6de1cad3da6d3f27e5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "20c2eeffd66c5421ac31",
          "headline": "CEG, NRG, TLN 주식 주목: TD Cowen, FERC가 AI 수요 충족을 위한 PJM 계획 지연 후 '급성' 불확실성 경고",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790790707,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb5d8998d21c36ab561e55469cea3c9082fb86354151ff9f85e560ebe9acf727",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9a8d080f6150ebb5dda1",
          "headline": "오늘 Constellation Energy를 구입하면 평생을 보낼 수 있을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790783400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=658839c5fcf180103d60c10c4cc8bea118d4f020862a906f0107e7d90cd7326d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1790978622.258398,
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
      "updatedAt": 1790978622.258398,
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
      "updatedAt": 1790978622.258398,
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
      "updatedAt": 1790978622.258398,
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
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790899108,
      "signal": "중립·확인 대기",
      "netScore": 0.35,
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
          "eventId": "95a85be980d087563fd9",
          "headline": "월스트리트는 Coherent, Rocket Lab 및 Vertiv를 지원합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790899108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c446ea8bf121259d1da41295ccca5053960528dc6f7b29aae514cb9fdd17daf0",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fb865f74703464c3c0c8",
          "headline": "Vertiv Holdings Co(VRT)의 AI 파워 체인 범위 확장에 대한 투자자들의 반응",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790759222,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8c23c9e09859be3bce59c5702a8d29db7a96cc0edf5ec39cf63440a767348d3",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790780400.0,
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
          "eventId": "40e4d5457caa873b201e",
          "headline": "MOD SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1790780400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926112870/tm2626618d1_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "STX": {
      "ticker": "STX",
      "updatedAt": 1790978622.258398,
      "dataAsOf": 1790932527,
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
          "eventId": "153b34f2955f97f974f5",
          "headline": "Toshiba는 HDD 공급을 두 배로 늘리고 싶어 - Western Digital, Seagate 투자자들은 이를 좋아하지 않음",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790932527,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1ae18bd9a14eb157bee6bc79971dad842ae599ae37fd3c5d621ee1a727ac7ba6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92ea573756206a441158",
          "headline": "AI에는 대용량 스토리지가 필요합니다. Seagate는 준비되어 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790868629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0cdb66a0a874d28ef5cae8b94079fdcfc7fb61adffa33d8d83475100402a76ba",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
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
      "updatedAt": 1790978622.258398,
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
      "updatedAt": 1790978622.258398,
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
      "updatedAt": 1790978622.258398,
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
