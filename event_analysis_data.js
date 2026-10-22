// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792689724.3616152,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792608719,
      "signal": "주의 강화",
      "netScore": -2.94,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "score": -2.45,
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
          "eventId": "73b96e05d70c546c697f",
          "headline": "스티브 발머, 마이크로소프트에서 쫓겨난 뒤 자산 1640억 달러",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792608719,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=684c170a8af7eb567f99eb3901ed2614de11e7fd938138bb53463cdfeccbf327",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "91987a674b9f255d3804",
          "headline": "마이크로소프트는 10월 28일에 이 말을 해야 합니다. 그렇지 않으면 주가가 자유낙하할 것입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792603020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f2a51d27d3eb4d1dc2ce2941ad92ac66049328fb5b04fe8543dcf8df14f05005",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "db29787372e159d28a64",
          "headline": "Pichai가 Google Cloud가 AI 용량에 대한 수익을 포기하고 있다고 말하면서 Alphabet은 NASDAQ 랠리에도 불구하고 2% 하락했습니다. Amazon Dips, Microsoft는 꾸준한 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792597719,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5023793fb4092c84946cf9fcdad5139d31ad359f180b7a1d2d6dce3b83f9c3b6",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fd790f6b701f5ab39c9f",
          "headline": "시장 재평가는 Microsoft Corporation(MSFT)의 가치 평가를 핵심 AI 기본 사항에 맞춰 조정합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586799,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e035b347bfaef9f6c8fc077e3034ac9a3c2c980df4b9ec6562bb11e03f1e1a47",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "185877cbeb9150390e48",
          "headline": "마이크로소프트, 알파벳, 골드만삭스, 토큰화된 주식에 반대하는 기업 목록에 합류",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792527364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff421581c018f3402bb5ad1299329d569d3dd4c647b80838d83c89620729be28",
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
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792682127,
      "signal": "주의 강화",
      "netScore": -9.09,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.57,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -1.75,
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
          "eventId": "8241f137ecc055f197a1",
          "headline": "Constellation Energy(CEG), Google 원자력 계약 체결, 여전히 저평가되어 있나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792682127,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e7a5a5d34e9ddd803a9adbbf47b79f25504929c77f94fad5c2535b166f8b595",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b561dabbf1fec817e2c0",
          "headline": "Nvidia, Apple, Alphabet, Microsoft, Amazon은 현재 VOO의 30.8%, VUG의 49.2%를 차지하고 있습니다. 지금 구매할 수 있는 더 나은 저비용 Vanguard ETF는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792677900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36f99411ae8ecd18fa47bee5747037181e55eb937eb50772a1ddd77629538b1c",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5833befc1dbc5942408d",
          "headline": "Cathie Wood는 Google 검색 수익이 증가함에도 불구하고 Ark의 알파벳 지분을 줄였고, Ark는 중성자 발사가 지연된 후에도 Rocket Lab에 쌓였습니다. Ark는 잘못된 AI 승자를 상대로 베팅하고 있나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792626600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=028ad676e5d15edc6914371c7fd5b34a6468974233aaf327cfc19b1cadf00b52",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a2700bd73ce152b20284",
          "headline": "카자흐스탄의 AIFC 규제 기관, Apple과 Google에 의존하여 Coinbase, HTX 금지 명령 집행",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792615320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0537f70210129aee0bbb1e00c5dc17da8c4b3f81a75e14c6007f42e0ce6c56a8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "db29787372e159d28a64",
          "headline": "Pichai가 Google Cloud가 AI 용량에 대한 수익을 포기하고 있다고 말하면서 Alphabet은 NASDAQ 랠리에도 불구하고 2% 하락했습니다. Amazon Dips, Microsoft는 꾸준한 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792597719,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5023793fb4092c84946cf9fcdad5139d31ad359f180b7a1d2d6dce3b83f9c3b6",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "87b76b1839ee6a097353",
          "headline": "Revolut 중단은 Google 클라우드 장애로 인해 뱅킹 서비스가 중단됨에 따라 암호화 액세스를 차단합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792566859,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6a2b5d73c3249443d8b5dfbb272490faa322484523f1eef9e609c0e58a272c1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "185877cbeb9150390e48",
          "headline": "마이크로소프트, 알파벳, 골드만삭스, 토큰화된 주식에 반대하는 기업 목록에 합류",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792527364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff421581c018f3402bb5ad1299329d569d3dd4c647b80838d83c89620729be28",
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
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792677900,
      "signal": "주의 강화",
      "netScore": -4.47,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "score": -2.8,
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
          "eventId": "b561dabbf1fec817e2c0",
          "headline": "Nvidia, Apple, Alphabet, Microsoft, Amazon은 현재 VOO의 30.8%, VUG의 49.2%를 차지하고 있습니다. 지금 구매할 수 있는 더 나은 저비용 Vanguard ETF는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792677900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36f99411ae8ecd18fa47bee5747037181e55eb937eb50772a1ddd77629538b1c",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee2dfb2b98edc31e1585",
          "headline": "Amazon 대 Target: 장기 투자자는 어디에 돈을 투자해야 할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792635602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e73cd924c0f88f6ba82af2e9a1d0059d9d8eb92323d40703349dc6e15c14606e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "973c423976faceab7eac",
          "headline": "Amazon은 Ashburn 데이터 센터 계획을 버리고 혼합 용도 비전으로 전환합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792606534,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60a74472702071845e1c72cf0b9c4ae4afd8bbb33ac5effead40d026631ec193",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "439e47d9f8a1fe382b75",
          "headline": "Amazon 또는 Alphabet: 앞으로 10년 동안 하나만 소유할 수 있다면 이 제품을 살 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792605000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02cf2847c4e279da41791771f54cac60db898b106e5eff2381797663c9234341",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "db29787372e159d28a64",
          "headline": "Pichai가 Google Cloud가 AI 용량에 대한 수익을 포기하고 있다고 말하면서 Alphabet은 NASDAQ 랠리에도 불구하고 2% 하락했습니다. Amazon Dips, Microsoft는 꾸준한 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792597719,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5023793fb4092c84946cf9fcdad5139d31ad359f180b7a1d2d6dce3b83f9c3b6",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "549f47214d7241564468",
          "headline": "아마존 vs 알파벳: 지금 당장 매수하는 것이 더 나은 \"매그니피센트 세븐\" 주식은 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792534502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d48ac5d0639424d1a7b3caec6ecf5b2b7ddf99ab2287fbc0de0ea40172572acb",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "219d5a4cd2fadc264980",
          "headline": "Amazon, 전력 공급에 앞서 Nvidia AI 하드웨어 비축 -Business Insider",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792525575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab574575bc56dcfc0cd06ef844851b998d5564737e945aab4859e7d98b0587f1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "544d5a069a5cbff4afaf",
          "headline": "시장 잡담: Amazon은 전력을 공급할 수 있는 것보다 더 많은 Nvidia AI 하드웨어를 구매하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792524552,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af5b78cf3bc72ee40b61c9f88597575013b276cf78183bbb30a4005d404291c0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792638665,
      "signal": "주의 강화",
      "netScore": -3.28,
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
          "eventId": "d64ebe781809ff4427fb",
          "headline": "기록적인 이익에도 불구하고 LRCX 주가는 하룻밤 사이에 폭락했습니다. 중국 경기 둔화로 인해 공급 차질로 인해 판매가 보류되었습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792638665,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=298d1053d0d062b5a162557d29731819751b8505e06c5af80c4ccc1a05d4ff51",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7beaed8e68252428f6cb",
          "headline": "원자력 분석가 정리: 월스트리트는 OKLO, SMR, CEG, VST, LEU 주식에 무게를 두고 있습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792634388,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c06c25c1f058f70ec4593dd906f41f5b9f37329c2a91d15677856d45031a3757",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92f2ead9e4850bf4622c",
          "headline": "TSLA, SPCX 밤새 미끄러짐: 머스크가 트럼프 퇴임 전에 합병을 추진한 것으로 알려짐 — ARK는 2036년까지 Tesla 보유자가 '5배 더 나은 이익'을 볼 것으로 예상",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792633462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b696da95f6bf98c02c5a416ea7c7ee55bdfea8e49f22b1b85de74a049572c79",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "03371d96a3c7fe607147",
          "headline": "S&P 500, Nasdaq Gain, Powered by Meta, Tesla Stock — SPCX, META, TSLA, SKYD, IBM In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792624519,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb984dff87c16cb0fb9dc5bdb0ae874b9a3b6de4e0696a3acc91bdec5631af8e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b070636c7ab59e58df13",
          "headline": "META SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026066773/meta-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "dba1ce9366b704763571",
          "headline": "SpaceX CEO Elon Musk가 AI의 진정한 제약은 칩이 아니라 전력과 냉각이라고 말한 후 BE Stock이 에너지 랠리를 주도합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792545801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2dae608d19f7468857e723c7cb48b098105a7e402e363e493d2330a93b099f4",
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
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792677900,
      "signal": "주의 강화",
      "netScore": -6.03,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
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
          "eventId": "b561dabbf1fec817e2c0",
          "headline": "Nvidia, Apple, Alphabet, Microsoft, Amazon은 현재 VOO의 30.8%, VUG의 49.2%를 차지하고 있습니다. 지금 구매할 수 있는 더 나은 저비용 Vanguard ETF는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792677900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36f99411ae8ecd18fa47bee5747037181e55eb937eb50772a1ddd77629538b1c",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "96e7f5f4cc007396abc5",
          "headline": "Apple의 1,999달러 iPhone Duo는 제한된 공급으로 금요일 매장에 출시됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792676477,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53040484e292da91b6a75d7383b29583eb958466af86a148f18979e31334b2a5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "7bcc44fe0b57377fa9ab",
          "headline": "제품 출시와 미국 공급 거래가 Apple(AAPL)의 투자 사례를 변화시키고 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792660641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd0f6da674a6ee3d6dcffb01e7f3f17e88573eb48b3e4f4f58b6d45ee9470dca",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ee68785ed7fc498de6f",
          "headline": "META, TSLA 수익 이후 다우, S&P 500, 나스닥 선물 거래는 어떻게 되나요?",
          "eventLabel": "실적 발표",
          "publishedAt": 1792638670,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60133aeb982309e8301b5283a3d3effb082ec1f309ad7d0112729532a151236a",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a2700bd73ce152b20284",
          "headline": "카자흐스탄의 AIFC 규제 기관, Apple과 Google에 의존하여 Coinbase, HTX 금지 명령 집행",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792615320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0537f70210129aee0bbb1e00c5dc17da8c4b3f81a75e14c6007f42e0ce6c56a8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4f6145074c5ef7b53ca3",
          "headline": "Apple vs. SK 하이닉스: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792601582,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2461f787aa0d833bbe8552b28a586e7d204ad0d3df7dfa46304235ebd2634b98",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d32c9c11dcb404bc6e32",
          "headline": "Apple, iPhone 소재 및 부품에 대한 미국 공급업체 네트워크 확장",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792595100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf835681acbd9faef8d8c8bcbc9c70eae912544eb4eb96678464303517d091e5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "44aab30b46955414eb32",
          "headline": "억만장자 켄 피셔(Ken Fisher)와 짐 크레이머(Jim Cramer)는 여전히 애플을 좋아합니다(AAPL). 당신은해야합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792589076,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7307e073dc81404619fb541f83f62c705c833b9087935f0ceba509ca6f7db01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "00189ca4847b578494d9",
          "headline": "Apple vs. Intel: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792588802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=61e6782c0290ae7071c4c0d953a461699d4571767ade50f9a1e358c15ed52f71",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "27c626c27d6292d15e4b",
          "headline": "Apple vs. Broadcom: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792587122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=289575aff4f1af4bc127de6d96ba6be4e28486061b9b98d8e450a596b9bfd508",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1a1744250bb549c9e8a8",
          "headline": "S&P 500, Dow는 수익 시즌이 시작됨에 따라 상승하고 SpaceX는 Nasdaq 영업 시간 외 지원 — SPCX, BA, MMM, NFLX, QCOM 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792540077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140e19bf8785e4c9553980a5aa5e4962e59391604d10894c3f0b722ae84edb24",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "549f47214d7241564468",
          "headline": "아마존 vs 알파벳: 지금 당장 매수하는 것이 더 나은 \"매그니피센트 세븐\" 주식은 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792534502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d48ac5d0639424d1a7b3caec6ecf5b2b7ddf99ab2287fbc0de0ea40172572acb",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792684537,
      "signal": "주의 강화",
      "netScore": -8.45,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.27,
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
          "score": -4.02,
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
          "eventId": "b9bcc4f873414e39ee3e",
          "headline": "주요 정오 기사: AI 지출 계획 속에서 메타 신용 위험 게이지가 사상 최고치를 기록했습니다. Tesla Q3 수익이 합의를 놓쳤습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792684537,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f4a8a21d6f7b241cb6411d7cc1471f18105dba976b9585e96384dbe91cb29f91",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e37aa70d52bfeeaf2e6b",
          "headline": "테슬라는 자동차 회사일 뿐이다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792684260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=14dca2af3604357a7cf9f437081b7fc2c7b4076c7671e4fc396da486ae1074c8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ee68785ed7fc498de6f",
          "headline": "META, TSLA 수익 이후 다우, S&P 500, 나스닥 선물 거래는 어떻게 되나요?",
          "eventLabel": "실적 발표",
          "publishedAt": 1792638670,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60133aeb982309e8301b5283a3d3effb082ec1f309ad7d0112729532a151236a",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92f2ead9e4850bf4622c",
          "headline": "TSLA, SPCX 밤새 미끄러짐: 머스크가 트럼프 퇴임 전에 합병을 추진한 것으로 알려짐 — ARK는 2036년까지 Tesla 보유자가 '5배 더 나은 이익'을 볼 것으로 예상",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792633462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b696da95f6bf98c02c5a416ea7c7ee55bdfea8e49f22b1b85de74a049572c79",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "03371d96a3c7fe607147",
          "headline": "S&P 500, Nasdaq Gain, Powered by Meta, Tesla Stock — SPCX, META, TSLA, SKYD, IBM In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792624519,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb984dff87c16cb0fb9dc5bdb0ae874b9a3b6de4e0696a3acc91bdec5631af8e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "15725fd6ea11f6cf0a43",
          "headline": "TSLA SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026066775/tsla-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "3e40b595602b29329fe2",
          "headline": "테슬라의 새로운 플라잉 로드스터가 주식을 날려보낼까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792565401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b35ab90750fd2e701c66b1744d7b8005b8fc2f342b5654ac7d453f4ebd393bd8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6113f9ec74b13f27089e",
          "headline": "일론 머스크 (Elon Musk) 는 테슬라와 스페이스X를 합병하기 위한 협상이 진행 중이라고",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792561577,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=071f827b9d9d41ddfc9176795698299e6afe8d3d72e988c49df26a6cfe3eae44",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792680578,
      "signal": "중립·확인 대기",
      "netScore": 1.4,
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
          "eventId": "a9409648c3c99e8699c6",
          "headline": "Oracle 투자자의 날, OCI 용량 증가, 애플리케이션 성장에 중점을 둘 것이라고 RBC가 밝혔습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792680578,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5bca8004578ef77d38aeebd8cdaeb17a0b9653da87ca8d047a7ca68be88742e2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "814fa883f2a1292171ba",
          "headline": "Oracle의 가치 평가 불일치로 인한 성장은 점점 더 매력적이지 않습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792593956,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=93ba5f83bd45bd646bdf7d764921eb00134a5e86377ed7bc08068a53f0b1481c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d3fb0f80f6f35c98c5fd",
          "headline": "블룸 에너지 vs. 오라클: 목성 후퇴 후 더 나은 구매는 어떤 AI 인프라 스톡입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792550100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f62ce5dfdcfdaf5f6d68906fc931df81caa8d9f83855c3008c1c2df6ff5d20e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ec2221058850042aeea5",
          "headline": "오라클은 이미 불가항력을 요구하고 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792543894,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb66098ebad996fe22bf10cd8684f2aaec16eb653e112e5ca3b2d58f83acdf85",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "faa0718155f002c10b17",
          "headline": "오라클(ORCL), 새로운 제약회사 파트너십으로 AI 헬스케어 사업 확장",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792512826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9deffecb0b309742ae93c8101e3125a8864e6c1fe78c207c71d198c6aa1cd39d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792656905,
      "signal": "중립·확인 대기",
      "netScore": -1.26,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
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
          "score": -4.2,
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
          "eventId": "7064ff5727e30a0bfe0c",
          "headline": "Braze (BRZE) 주식은 Salesforce 거래가 한도를 설정 한 후 공정 가치 상승을 확인합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792656905,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9e98062591b1352f8925b6d5766e60ca7ac0ed368d6ae7d7a8512a839eb19f9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cda38fb9b8ef8a805cf1",
          "headline": "Salesforce의 Braze 거래로 UBS의 전략 지원을 얻었지만 성장에 대한 우려는 여전히 남아 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792610400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=986bc47727d8056d7fdd3b1487ee3736ff4eeae71330d0dc2c87cdc7e90af488",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "03b396211e0fe3e80270",
          "headline": "Palantir는 소프트웨어 주식 반등으로 4% 상승했습니다. ServiceNow는 3% 상승, Salesforce는 정체 상태 유지",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792601708,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=311496efe7500bc9c1abecb0f74f4921ce9161abca586d8584117491974514b7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3bf2930af3a7f7a073a8",
          "headline": "Salesforce-Braze 거래는 분석가가 인수 가치를 평가함에 따라 다운그레이드를 유도합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792576554,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8426c3c1de631aaf33cfaf624c98728faae4b188f5f20d0b9896968072130e30",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8e8cb0a5b215c423b4a1",
          "headline": "CRM 재고 집중: Jefferies, Salesforce의 브레이즈 딜이 더 많은 소프트웨어 인수를 촉발할 수 있다고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792567275,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db7b198b02d8c1696422328ab488f30c90e2b9a287036642b04b92f1fa21bbd7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "616ecbf23622b713caf5",
          "headline": "Salesforce 주식 투자자는 실행 전에 무엇을 놓쳤습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792547105,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=31df9a65c80a88d10eddfcccc30117eea1111c3b5318887fd25cf13c4b7dc3fe",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0c54e1164988202deca6",
          "headline": "오늘, 10월 20일 주식 시장: Salesforce, Braze를 56억 6천만 달러에 인수하기로 합의: BRZE 주가 52% 급등",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792530582,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99d7cbc62881a063480458d9a2416bbdc7ff90bfde447492ed838de1bca0151a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "35430766304f80f2c01d",
          "headline": "Salesforce가 \"와우 순간\"을 전달하기 위해 56억 6천만 달러 규모의 인수에 동의하면서 Braze는 51% 급등했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792525738,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74a2e566db82e7429a93ec905ebd47ae7c2718dba4388379c3d623bca3934171",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792601708,
      "signal": "중립·확인 대기",
      "netScore": 0.92,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
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
          "eventId": "03b396211e0fe3e80270",
          "headline": "Palantir는 소프트웨어 주식 반등으로 4% 상승했습니다. ServiceNow는 3% 상승, Salesforce는 정체 상태 유지",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792601708,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=311496efe7500bc9c1abecb0f74f4921ce9161abca586d8584117491974514b7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1a13806de3f188b5408c",
          "headline": "Federal Cloud Partnership이 Palantir Stock Narrative를 변경합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792556701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6609ad07a119dbe75c27d4276330b3cfc0b4c33d63c0446a3b547d95767df9e0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "68d176b235ebbe3b2705",
          "headline": "Palantir Technologies (PLTR), Knox 파트너십 체결, 주식 가격이 완전히 책정되나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792552818,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f4d49c9f26a81da3c76ad11024ad47d7fc60da283b010ce88561eac2f0643e0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792682794,
      "signal": "우호적 변화",
      "netScore": 9.41,
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
          "score": -1.22,
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
          "eventId": "1308179f0693e7358a4c",
          "headline": "Nvidia 사장이 AI 자금 조달 둔화를 경고함에 따라 기술 주식 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792682794,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c903a79d13a920e56cf645e7e76bd47d0765c8f703ed34d3cb36ebaf3e85fd9d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "b561dabbf1fec817e2c0",
          "headline": "Nvidia, Apple, Alphabet, Microsoft, Amazon은 현재 VOO의 30.8%, VUG의 49.2%를 차지하고 있습니다. 지금 구매할 수 있는 더 나은 저비용 Vanguard ETF는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792677900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36f99411ae8ecd18fa47bee5747037181e55eb937eb50772a1ddd77629538b1c",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e8515071c90186e4941c",
          "headline": "Nvidia 파트너십을 통해 첫 해 토큰 생산량을 30% 더 늘리는 것을 목표로 한 Vertiv 랠리",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792669090,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7297c99548c9cc2e33e9e53bf2ba01ed15b0c8aba31249fafcaa0713fb850601",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4d7dce063d14e9a6a4b3",
          "headline": "Nvidia 지원 광학 램프가 현금 소진 테스트를 충족함에 따라 Coherent 슬라이드 3개월 만에 25%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792667464,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6c5699d9498955268547eda41ad4386e1a97d3c06a4cea69ef8a0dbb1ff2a190",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6efc8ff7fb701b2ac47d",
          "headline": "엔비디아는 포트폴리오의 80%를 인공지능(AI) 주식 2개에 투자했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792660382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f954b1df6911881b08eeae61076867e33f5d0732aa0f577bf2d44b99069f2d8c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ce4de9d37058e8724f20",
          "headline": "Nvidia의 11억 달러 KYEC 거래는 2,790억 달러 공급 베팅 중 작은 숫자입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792608320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=737a12aa1e274557876c52bec25cb7058bb1587718f6982bdc519983d0ca8160",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "59874c41c96001d8e8b0",
          "headline": "Alphabet은 정점 이후 약 8,600억 달러의 손실을 입었습니다. 이는 Walmart 전체의 거의 전체 손실입니다. 애플은 AI 경쟁을 피하고 사상 최고치에 가까워졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792598778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38f1ac5655414ebb9f503108f276a5e1b66747bba211d0fc9a6c65815630b771",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8a4c23979d2f08a3ba60",
          "headline": "AMD 대 엔비디아. 1개의 지표가 어느 주식이 최고의 주식인지 증명합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792596900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c998c48b5282eb333f3fff9ff77e7388dea045b303e0f412843f2fd0b9759bd",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "af20c168dadff23b9a8a",
          "headline": "Elon Musk는 One SpaceX 인용 이후 NVIDIA, Intel 및 SanDisk 랠리로 10월 AI 충돌을 종료했을 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792595065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c148a30507b181b491832d05201a856845755646d305bde08e40c3b1c17b5d13",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "44aab30b46955414eb32",
          "headline": "억만장자 켄 피셔(Ken Fisher)와 짐 크레이머(Jim Cramer)는 여전히 애플을 좋아합니다(AAPL). 당신은해야합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792589076,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7307e073dc81404619fb541f83f62c705c833b9087935f0ceba509ca6f7db01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "fd790f6b701f5ab39c9f",
          "headline": "시장 재평가는 Microsoft Corporation(MSFT)의 가치 평가를 핵심 AI 기본 사항에 맞춰 조정합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586799,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e035b347bfaef9f6c8fc077e3034ac9a3c2c980df4b9ec6562bb11e03f1e1a47",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "1134e2b063a1faf056b0",
          "headline": "TD Cowen은 Nvidia가 Oracle의 데이터 센터 자금 조달을 돕고 있다고 생각합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586754,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0e1953e059e068a96186ca440d1acaaaf2c60dc1ea55e69609929fd1e358bce",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 23,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792683908,
      "signal": "우호적 변화",
      "netScore": 8.85,
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
          "score": -1.57,
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
          "eventId": "f2d349ed01d15a51b2b8",
          "headline": "공급 경고가 AI 매도를 심화함에 따라 칩 재고 하락: Marvell과 AMD는 8% 하락, Intel은 7% 하락",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792683908,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f60df6060f5377484118df074e70e99b09cbb1e2c929d709401ed6890e3622e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1308179f0693e7358a4c",
          "headline": "Nvidia 사장이 AI 자금 조달 둔화를 경고함에 따라 기술 주식 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792682794,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c903a79d13a920e56cf645e7e76bd47d0765c8f703ed34d3cb36ebaf3e85fd9d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "6efc8ff7fb701b2ac47d",
          "headline": "엔비디아는 포트폴리오의 80%를 인공지능(AI) 주식 2개에 투자했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792660382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f954b1df6911881b08eeae61076867e33f5d0732aa0f577bf2d44b99069f2d8c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "55625c5924477a84aa6b",
          "headline": "BE 주식은 2026년에 174% 이상 상승: 이 분석가가 추가로 9% 상승 여력을 보는 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792643000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=42f2adcd9ac9d1cf36ef22649d71ac518efabdc598039d3db1ca8bffff083059",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "03371d96a3c7fe607147",
          "headline": "S&P 500, Nasdaq Gain, Powered by Meta, Tesla Stock — SPCX, META, TSLA, SKYD, IBM In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792624519,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb984dff87c16cb0fb9dc5bdb0ae874b9a3b6de4e0696a3acc91bdec5631af8e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "59874c41c96001d8e8b0",
          "headline": "Alphabet은 정점 이후 약 8,600억 달러의 손실을 입었습니다. 이는 Walmart 전체의 거의 전체 손실입니다. 애플은 AI 경쟁을 피하고 사상 최고치에 가까워졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792598778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38f1ac5655414ebb9f503108f276a5e1b66747bba211d0fc9a6c65815630b771",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "4ba14f93f316d92eb9ba",
          "headline": "Anthropic은 Intel의 가치보다 더 많은 6000억 달러 이상의 컴퓨팅 분야에 투자했습니다. 여전히 더 많은 것을 원하며 이는 AMD에게는 큰 소식입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792595780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e16ad8d5c99aece4ced267f91a11eb6605a8e01c36e1ce3f36a2f8551b997c55",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "119b05f0491e549cd6aa",
          "headline": "INTC, COHR이 인하하는 동안 AMD, QCOM 목표는 상향 조정됨 - Susquehanna는 칩 수익에 대해 '보통의 상승'을 확인",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792593029,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ec20134b7b0279facf740220681c46e08c4fcbea48568c3079ab0d00328d34f",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "44aab30b46955414eb32",
          "headline": "억만장자 켄 피셔(Ken Fisher)와 짐 크레이머(Jim Cramer)는 여전히 애플을 좋아합니다(AAPL). 당신은해야합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792589076,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7307e073dc81404619fb541f83f62c705c833b9087935f0ceba509ca6f7db01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "fd790f6b701f5ab39c9f",
          "headline": "시장 재평가는 Microsoft Corporation(MSFT)의 가치 평가를 핵심 AI 기본 사항에 맞춰 조정합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586799,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e035b347bfaef9f6c8fc077e3034ac9a3c2c980df4b9ec6562bb11e03f1e1a47",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1134e2b063a1faf056b0",
          "headline": "TD Cowen은 Nvidia가 Oracle의 데이터 센터 자금 조달을 돕고 있다고 생각합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586754,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0e1953e059e068a96186ca440d1acaaaf2c60dc1ea55e69609929fd1e358bce",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "0b89ccb7319a855fc994",
          "headline": "Taiwan Semiconductor는 요금소를 소유하고 AI 금융 소음을 무시하도록 도와줍니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7e4838207418d22c7ded0cb98580c4f18b0ba63d0d45138686846ccca76bd25",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 19,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792587122,
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
          "eventId": "27c626c27d6292d15e4b",
          "headline": "Apple vs. Broadcom: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792587122,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=289575aff4f1af4bc127de6d96ba6be4e28486061b9b98d8e450a596b9bfd508",
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
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792591108,
      "signal": "중립·확인 대기",
      "netScore": -0.63,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "3122a969bb065d762abf",
          "headline": "Qualcomm(QCOM): 자동차 성장이 휴대폰 수익에 대한 압박을 충족시키다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792591108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95e1721f6e2b1d4a156222904ca8c56abf6d84c16d44c42489042c2695236f1e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "자동차 고객·설계 채택 확대 가능성"
        },
        {
          "eventId": "1a1744250bb549c9e8a8",
          "headline": "S&P 500, Dow는 수익 시즌이 시작됨에 따라 상승하고 SpaceX는 Nasdaq 영업 시간 외 지원 — SPCX, BA, MMM, NFLX, QCOM 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792540077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140e19bf8785e4c9553980a5aa5e4962e59391604d10894c3f0b722ae84edb24",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "185877cbeb9150390e48",
          "headline": "마이크로소프트, 알파벳, 골드만삭스, 토큰화된 주식에 반대하는 기업 목록에 합류",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792527364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff421581c018f3402bb5ad1299329d569d3dd4c647b80838d83c89620729be28",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "67f7a539c9bc5d7990a4",
          "headline": "Qualcomm, 성과 중심 점검을 통해 글로벌 정리해고를 실시할 것으로 알려짐",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792519635,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57aac6b44d03630ef98220890683ea170489e9be169e2c169f3d64dee028a9ac",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ee26a1916b0c6d8898c4",
          "headline": "지금 애플 주식을 사야 할까요, 아니면 하락을 기다려야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792509541,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d900116cb4f7aa1c70fb3b960f3e6b2e95c1c557cc1fa75f77385a8693392631",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1792689724.3616152,
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792683908,
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
          "eventId": "f2d349ed01d15a51b2b8",
          "headline": "공급 경고가 AI 매도를 심화함에 따라 칩 재고 하락: Marvell과 AMD는 8% 하락, Intel은 7% 하락",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792683908,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f60df6060f5377484118df074e70e99b09cbb1e2c929d709401ed6890e3622e",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792683908,
      "signal": "주의 강화",
      "netScore": -4.61,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": -0.17,
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
          "score": -4.02,
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
          "eventId": "f2d349ed01d15a51b2b8",
          "headline": "공급 경고가 AI 매도를 심화함에 따라 칩 재고 하락: Marvell과 AMD는 8% 하락, Intel은 7% 하락",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792683908,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f60df6060f5377484118df074e70e99b09cbb1e2c929d709401ed6890e3622e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ee68785ed7fc498de6f",
          "headline": "META, TSLA 수익 이후 다우, S&P 500, 나스닥 선물 거래는 어떻게 되나요?",
          "eventLabel": "실적 발표",
          "publishedAt": 1792638670,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60133aeb982309e8301b5283a3d3effb082ec1f309ad7d0112729532a151236a",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f73e73a5602c503d591c",
          "headline": "ASML은 Nvidia 주식 및 Micron 주식 투자자를 위한 놀라운 소식을 전합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792608722,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0958b6354c07d821287d407ea22dba633e56150b386ad9f6da3c47a0369ec6da",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ba14f93f316d92eb9ba",
          "headline": "Anthropic은 Intel의 가치보다 더 많은 6000억 달러 이상의 컴퓨팅 분야에 투자했습니다. 여전히 더 많은 것을 원하며 이는 AMD에게는 큰 소식입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792595780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e16ad8d5c99aece4ced267f91a11eb6605a8e01c36e1ce3f36a2f8551b997c55",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "af20c168dadff23b9a8a",
          "headline": "Elon Musk는 One SpaceX 인용 이후 NVIDIA, Intel 및 SanDisk 랠리로 10월 AI 충돌을 종료했을 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792595065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c148a30507b181b491832d05201a856845755646d305bde08e40c3b1c17b5d13",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "119b05f0491e549cd6aa",
          "headline": "INTC, COHR이 인하하는 동안 AMD, QCOM 목표는 상향 조정됨 - Susquehanna는 칩 수익에 대해 '보통의 상승'을 확인",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792593029,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ec20134b7b0279facf740220681c46e08c4fcbea48568c3079ab0d00328d34f",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "00189ca4847b578494d9",
          "headline": "Apple vs. Intel: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792588802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=61e6782c0290ae7071c4c0d953a461699d4571767ade50f9a1e358c15ed52f71",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b36f7369d5f0c696be09",
          "headline": "인텔 주식은 35% 하락한 후에도 여전히 84배의 수익으로 거래되고 있습니다. 아직 구매하지 않았습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792587661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7bf5e32f3313d756e8018e3161b7566049ff7b2586dc3d220efe8a3977c4a2c3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dba1ce9366b704763571",
          "headline": "SpaceX CEO Elon Musk가 AI의 진정한 제약은 칩이 아니라 전력과 냉각이라고 말한 후 BE Stock이 에너지 랠리를 주도합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792545801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2dae608d19f7468857e723c7cb48b098105a7e402e363e493d2330a93b099f4",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f0dd6c6d4ba9fbe05264",
          "headline": "마이크론이 아닙니다. 샌디스크가 아닙니다. 이 스토리지 주식은 동일한 AI 인프라 물결을 타고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792517700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70d3e1d0872b6ee59b501ee3152b6d9ed8027582e16905468d03a356033ce027",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9f1a14c5b4f90e510e68",
          "headline": "인텔 대. 마이크론: 중국 라이벌 CXMT의 진전에 더 많이 노출되는 사람은 누구입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792514712,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0714160c956c1e36fb80d4b05e2bc5646f21aa5300978c36a447459b96639889",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792673109,
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
          "eventId": "379b95f12e51777c62b4",
          "headline": "ASML 대. 대만 반도체: AI 수요를 더 완벽하게 충족할 수 있는 사람은 누구입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792673109,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=adde38a3e1f9887f916a420b6f37d6bd5a658d87e38afb5760ae9cb22f48d677",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "307b663ba1733a6842f9",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000728/tsm-monthend6kx20261022.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f96c0e625871e943312c",
          "headline": "Taiwan Semiconductor Manufacturing (TSM)은 개인적으로 투자하기 위해 회사를 떠나는 펀드 매니저를 모집합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792530584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efacde59aa4d6ffc0d005195757b9803f041edf06b2c7e12212f161ac59533ed",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792680290,
      "signal": "주의 강화",
      "netScore": -5.88,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "eventId": "6296133b7872d5df884b",
          "headline": "Lam Research, 공급 제약으로 인해 전망이 9% 하락; 어플라이드 머티리얼즈 6% 하락, ASML 홀딩스 4% 하락",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792680290,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18c507fe1f0241929a4e0affa7d8806083a68178299388fa33305e58228d5d2a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "379b95f12e51777c62b4",
          "headline": "ASML 대. 대만 반도체: AI 수요를 더 완벽하게 충족할 수 있는 사람은 누구입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792673109,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=adde38a3e1f9887f916a420b6f37d6bd5a658d87e38afb5760ae9cb22f48d677",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f73e73a5602c503d591c",
          "headline": "ASML은 Nvidia 주식 및 Micron 주식 투자자를 위한 놀라운 소식을 전합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792608722,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0958b6354c07d821287d407ea22dba633e56150b386ad9f6da3c47a0369ec6da",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "267a37584de38ce50edc",
          "headline": "ASML 대 Dell Technologies: 2026년에는 어느 기술주를 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792587902,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b656bf7c38b27b7821ec20fad5f1992d730ca33302cb921cc8321d67b5fb446e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "82d90a3a8c6ca95f395e",
          "headline": "ASML은 CFO가 중국 규제에 맞서 싸우면서 기록적인 Q3 이후 상승: “상식이 우세할 것입니다”",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792577522,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b80fbecc9d6c7e486e34a72c594428ee7da3c1b7b76f5c71024a2dffb7a5cad9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792680290,
      "signal": "우호적 변화",
      "netScore": 4.2,
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
          "score": 0.0,
          "level": "중립"
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
          "eventId": "6296133b7872d5df884b",
          "headline": "Lam Research, 공급 제약으로 인해 전망이 9% 하락; 어플라이드 머티리얼즈 6% 하락, ASML 홀딩스 4% 하락",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792680290,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18c507fe1f0241929a4e0affa7d8806083a68178299388fa33305e58228d5d2a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "eeec6352f3b31966f4e8",
          "headline": "2030년까지 120억 달러 서비스 목표 달성 후 Applied Materials 슬라이드",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792578498,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=360fedd8c9bd18938e1cd45cba424ba9086f86db4414811d6f1642331a537d91",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792680290,
      "signal": "중립·확인 대기",
      "netScore": -0.5,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.87,
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
          "score": -2.45,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.53,
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
          "eventId": "6296133b7872d5df884b",
          "headline": "Lam Research, 공급 제약으로 인해 전망이 9% 하락; 어플라이드 머티리얼즈 6% 하락, ASML 홀딩스 4% 하락",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792680290,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18c507fe1f0241929a4e0affa7d8806083a68178299388fa33305e58228d5d2a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e79297fd20bc3c9b3f15",
          "headline": "장비 제조사 Lam Research가 '공급망 제약'을 언급하면서 칩 재고 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792674408,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a2613bbfa50561469d906f95ac6f9d2e4ebaa8495163db96a683988090918d9d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7eafa2846978c7a600e5",
          "headline": "분석가가 목표를 조정함에 따라 LRCX 주식은 하락하고 공급 제약을 확인하지만 장기적인 강세 사례는 남아 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792674276,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d65c22671c638de4b594233e45f2746fe73219702c089b38b99273351a5451c0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "cedfbc7166963c3dc502",
          "headline": "업데이트: Lam Research, 공급망이 1분기 조정 수익 이후 2분기 회계 매출을 방해하는 것으로 보여 Pre-Bell을 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792661306,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3a52883f9373257bf6698a639db020ab11450634c7bfa808336762d73050b144",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "902a07950d3a6d087c54",
          "headline": "LRCX Q3 심층 분석: AI 수요 및 공급망 병목 현상으로 인해 전망이 형성됨",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792660227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f7b4aec5c12d72b774b2baae8b909ba67e77356ff9ef2f9cdaff6566854f8bae",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ee68785ed7fc498de6f",
          "headline": "META, TSLA 수익 이후 다우, S&P 500, 나스닥 선물 거래는 어떻게 되나요?",
          "eventLabel": "실적 발표",
          "publishedAt": 1792638670,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60133aeb982309e8301b5283a3d3effb082ec1f309ad7d0112729532a151236a",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d64ebe781809ff4427fb",
          "headline": "기록적인 이익에도 불구하고 LRCX 주가는 하룻밤 사이에 폭락했습니다. 중국 경기 둔화로 인해 공급 차질로 인해 판매가 보류되었습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792638665,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=298d1053d0d062b5a162557d29731819751b8505e06c5af80c4ccc1a05d4ff51",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dba1ce9366b704763571",
          "headline": "SpaceX CEO Elon Musk가 AI의 진정한 제약은 칩이 아니라 전력과 냉각이라고 말한 후 BE Stock이 에너지 랠리를 주도합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792545801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2dae608d19f7468857e723c7cb48b098105a7e402e363e493d2330a93b099f4",
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
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1792689724.3616152,
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
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792682794,
      "signal": "우호적 변화",
      "netScore": 8.43,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
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
          "eventId": "1308179f0693e7358a4c",
          "headline": "Nvidia 사장이 AI 자금 조달 둔화를 경고함에 따라 기술 주식 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792682794,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c903a79d13a920e56cf645e7e76bd47d0765c8f703ed34d3cb36ebaf3e85fd9d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "6efc8ff7fb701b2ac47d",
          "headline": "엔비디아는 포트폴리오의 80%를 인공지능(AI) 주식 2개에 투자했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792660382,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f954b1df6911881b08eeae61076867e33f5d0732aa0f577bf2d44b99069f2d8c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "5e3b2d3e10acfc6bbaef",
          "headline": "Micron (MU) 주식은 중요한 광물 거래 후 완전히 가치가 높아 보입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792632213,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b007c0190f40ae5c638ae368d8754b4f299793a934fc73538591c2374457b186",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f73e73a5602c503d591c",
          "headline": "ASML은 Nvidia 주식 및 Micron 주식 투자자를 위한 놀라운 소식을 전합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792608722,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0958b6354c07d821287d407ea22dba633e56150b386ad9f6da3c47a0369ec6da",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8b1053e9b0f587ea2a81",
          "headline": "마이크론은 중국이 공급을 장악함에 따라 미국 금속 정제 산업을 부활시키는 데 도움을 줍니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792601220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd52523004832ac008391f828884478c3a852743b0a0b8f4abace72f81a20a7a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "59874c41c96001d8e8b0",
          "headline": "Alphabet은 정점 이후 약 8,600억 달러의 손실을 입었습니다. 이는 Walmart 전체의 거의 전체 손실입니다. 애플은 AI 경쟁을 피하고 사상 최고치에 가까워졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792598778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38f1ac5655414ebb9f503108f276a5e1b66747bba211d0fc9a6c65815630b771",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "44aab30b46955414eb32",
          "headline": "억만장자 켄 피셔(Ken Fisher)와 짐 크레이머(Jim Cramer)는 여전히 애플을 좋아합니다(AAPL). 당신은해야합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792589076,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7307e073dc81404619fb541f83f62c705c833b9087935f0ceba509ca6f7db01",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "d18b5aaed4030775de78",
          "headline": "예측: Micron 주식에 투자된 월 150달러는 2030년 말까지 이만큼 가치가 있을 것입니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792588800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab74fae28a9f094f1703db72fb73c9624a20c602eb768cf61367a4da1dd51d07",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fd790f6b701f5ab39c9f",
          "headline": "시장 재평가는 Microsoft Corporation(MSFT)의 가치 평가를 핵심 AI 기본 사항에 맞춰 조정합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586799,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e035b347bfaef9f6c8fc077e3034ac9a3c2c980df4b9ec6562bb11e03f1e1a47",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "1134e2b063a1faf056b0",
          "headline": "TD Cowen은 Nvidia가 Oracle의 데이터 센터 자금 조달을 돕고 있다고 생각합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586754,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0e1953e059e068a96186ca440d1acaaaf2c60dc1ea55e69609929fd1e358bce",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "0b89ccb7319a855fc994",
          "headline": "Taiwan Semiconductor는 요금소를 소유하고 AI 금융 소음을 무시하도록 도와줍니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7e4838207418d22c7ded0cb98580c4f18b0ba63d0d45138686846ccca76bd25",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "a4e0cc48154b70841ef7",
          "headline": "GE Vernova의 1,760억 달러 백로그 설명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792573800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d811057d36492f9a6f387d3789c817f50d40e11c1dd75faa47cfb9ff4a97e952",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 22,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792595065,
      "signal": "우호적 변화",
      "netScore": 2.8,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "eventId": "af20c168dadff23b9a8a",
          "headline": "Elon Musk는 One SpaceX 인용 이후 NVIDIA, Intel 및 SanDisk 랠리로 10월 AI 충돌을 종료했을 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792595065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c148a30507b181b491832d05201a856845755646d305bde08e40c3b1c17b5d13",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "33fff44de311f6b51037",
          "headline": "SanDisk가 귀하의 포트폴리오에 대한 가치주가 될 수 있습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792545014,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b344e6deb60f52c7bb332c9d58eb61f3bb551052ca53cad8b2c92389b3739420",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792527364,
      "signal": "주의 강화",
      "netScore": -3.78,
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
          "eventId": "185877cbeb9150390e48",
          "headline": "마이크로소프트, 알파벳, 골드만삭스, 토큰화된 주식에 반대하는 기업 목록에 합류",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792527364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff421581c018f3402bb5ad1299329d569d3dd4c647b80838d83c89620729be28",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee26a1916b0c6d8898c4",
          "headline": "지금 애플 주식을 사야 할까요, 아니면 하락을 기다려야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792509541,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d900116cb4f7aa1c70fb3b960f3e6b2e95c1c557cc1fa75f77385a8693392631",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792667554,
      "signal": "주의 강화",
      "netScore": -6.29,
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
          "score": -1.05,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.45,
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
          "eventId": "dd2ed68d2c408655442b",
          "headline": "경쟁사보다 Arista Networks 주식을 선택해야 합니까?",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1792667554,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=27181a635f1729a793388f607d13ac18f157cd418f399d588e644bb9d0c9eb1d",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "41dbdc7514e4750eef86",
          "headline": "Arista Networks 대 CrowdStrike: 2026년에는 어느 기술주를 구매하는 것이 더 낫습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792634222,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2808c6e25b307bbc086f99021375af7f6b17296a37bf0a9bbf131017a43e3bf2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ee45c2b9085941aef646",
          "headline": "Arista Networks 대 Datadog: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792593644,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=701f310f04ba1f08eed26771d996652dba505f5b3c73f58ef6c915979f9e0e03",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e894c888b199e01d972f",
          "headline": "Arista Networks vs. Axon Enterprise: 2026년에는 어떤 기술주를 구매하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792552561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=317db81f856e0553821b07f0de02c5a5a0de38ff197d9689967b873c6b76066d",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792593029,
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
          "eventId": "119b05f0491e549cd6aa",
          "headline": "INTC, COHR이 인하하는 동안 AMD, QCOM 목표는 상향 조정됨 - Susquehanna는 칩 수익에 대해 '보통의 상승'을 확인",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792593029,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ec20134b7b0279facf740220681c46e08c4fcbea48568c3079ab0d00328d34f",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792675491,
      "signal": "주의 강화",
      "netScore": -3.22,
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
          "score": -1.4,
          "level": "주의"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "f5b2b76006caa6834383",
          "headline": "Lumentum 주식의 하락세를 매수해야 할까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792675491,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=326b3a622f66ba130775b8ca36058d3d130683f1529a9db95f380c57b10ac3da",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b8d282e03b23005b0b21",
          "headline": "Lumentum은 CFO가 수익보다 2,570만 달러를 먼저 매도함에 따라 최고가인 1,143달러에서 하락했습니다.",
          "eventLabel": "내부자 매도",
          "publishedAt": 1792667906,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7863cd4d589a804d6a83806fd14f9af78c3883fa797e40bbfaf2aacac8aed1b0",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792586700,
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
          "eventId": "6fcce1a0ee9cd3cad665",
          "headline": "VG Inks, LNG 성장 지원을 위해 GEV, BKR과 전력 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792586700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62c0d7b9aec82e38345815f57ef3ab1dae29bf5bbf7ff707736b7068de1c2b3e",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792682127,
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
          "eventId": "8241f137ecc055f197a1",
          "headline": "Constellation Energy(CEG), Google 원자력 계약 체결, 여전히 저평가되어 있나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792682127,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e7a5a5d34e9ddd803a9adbbf47b79f25504929c77f94fad5c2535b166f8b595",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792634388,
      "signal": "주의 강화",
      "netScore": -2.23,
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
          "eventId": "7beaed8e68252428f6cb",
          "headline": "원자력 분석가 정리: 월스트리트는 OKLO, SMR, CEG, VST, LEU 주식에 무게를 두고 있습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792634388,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c06c25c1f058f70ec4593dd906f41f5b9f37329c2a91d15677856d45031a3757",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f3e1640352ca330e77b5",
          "headline": "Bloom Energy 대 Vistra: 2026년에는 어떤 에너지 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792579962,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac12347eb89d0e11da68847692774635282e11e248ca66d01f8d30858bc0f812",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1792689724.3616152,
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
      "updatedAt": 1792689724.3616152,
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
      "updatedAt": 1792689724.3616152,
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
      "updatedAt": 1792689724.3616152,
      "dataAsOf": 1792676696,
      "signal": "우호적 변화",
      "netScore": 2.31,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.57,
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
          "score": -0.52,
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
          "eventId": "9267e53d9d3e21203b4d",
          "headline": "AI 전력주 하락으로 GE Vernova가 일주일 만에 11%, Vertiv 14%, Bloom Energy 15% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792676696,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2de3c5d8e5f4f5c014570bb5f74c53f66fdf480163c6697899324705b4ba4900",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e8515071c90186e4941c",
          "headline": "Nvidia 파트너십을 통해 첫 해 토큰 생산량을 30% 더 늘리는 것을 목표로 한 Vertiv 랠리",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792669090,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7297c99548c9cc2e33e9e53bf2ba01ed15b0c8aba31249fafcaa0713fb850601",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6675944168df2785c938",
          "headline": "Dassault Systemes, Vertiv, 건설 전 AI 공장 인프라 구성, 시뮬레이션, 검증을 위해 협력하여 구축 기간 최대 50% 단축 목표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792633246,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f04f8fb891980d4706fb8aa2372eeb990330530900bf760f72c9ee93e7944c69",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1792689724.3616152,
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
      "updatedAt": 1792689724.3616152,
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1792689724.3616152,
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
      "updatedAt": 1792689724.3616152,
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
      "updatedAt": 1792689724.3616152,
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
