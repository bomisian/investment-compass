// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1790787347.7755342,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790759798,
      "signal": "중립·확인 대기",
      "netScore": 1.9,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 3.68,
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
        },
        {
          "eventId": "6fe9bf8765596c2fc91f",
          "headline": "MSFT 주식이 고갈되었나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790713937,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5269c26441c3abf13e705ed88d84cca3c0a1b94315f7cd480a5b50aa8846f2a8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fb99bdb450b2b46e5dfc",
          "headline": "워렌 버핏과 빌 애크먼이 알파벳, 아마존, 마이크로소프트, 메타를 사랑하는 이유를 설명하는 두 가지 숫자",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790704320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5fe16063f9dd6ed4111dbfd11d4c5a1c2905557d82ff4e6ac8c74ffcdc65cec",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "14f536041b0a07af25f0",
          "headline": "2026년 디지털 혁신 시장 보고서: Microsoft, Google, IBM, Accenture 및 Oracle이 AI, 클라우드 및 자동화를 가속화함에 따라 2조 4700억 달러의 수익이 2030년까지 5조 1000억 달러로 급증할 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790697420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbf169ae7e7a6e63f914b2b8ebd494377b20d76375560a69f136a10eba4dc481",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f505606a97ed76c3f864",
          "headline": "2026년 차세대 컴퓨팅 시장 보고서: Microsoft, AWS, NVIDIA, IBM 및 Intel이 AI, 양자 및 엣지 컴퓨팅을 가속화함에 따라 2030년까지 4,860억 달러의 매출 급증을 8,118억 5천만 달러로 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790697360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91fb73dffa21ff5d80fdaf7d34a2d0b476d482388a30e3c4850260c6ce25fe8e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "eb145d717ac5dd655bbb",
          "headline": "2026년 클라이언트 컴퓨팅 글로벌 시장 보고서: 매출이 2030년까지 417억 3천만 달러에서 2,778억 8천만 달러로 증가함에 따라 AI, 하이브리드 및 엣지 파괴를 활용—Microsoft, Apple, Dell, Lenovo 및 HP를 벤치마킹하여 점유율 B 확보",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790669760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11813ebad115844ef52fa88f70f3eda6381a3cd945b0688ad7b71e3738a709c7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7e82c424f51a5959b7cf",
          "headline": "나는 AI 킬스위치를 지지한다는 Microsoft Exec의 전술적 주장을 믿고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790602193,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b874ab533cda9d15435386ec4bfbe8b044a91f4911c6a9bc0e19f900886d896a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e24865a84ea3dc3e655a",
          "headline": "ChronoScale: 50MW Microsoft Win이 시작되었으나 더 많은 용량이 필요할 수 있음",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790599973,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=162e4f9143aaf53907bbb1956c4845b53024d52d3cb18f2a40db970df3680d79",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4b3d96f8093aa2d22e65",
          "headline": "2026년 컴퓨터 비전 글로벌 시장 보고서: 2030년까지 매년 15.9% 성장하는 371억 달러 시장 점유율 확보—Microsoft, Sony, Intel, Texas Instruments 및 MediaTek을 AI, Edge Visio로 벤치마킹",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790587680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=466e72eda9d3ce0ac7473abf0a66463f4e2fd5eac2e75107f4d5905d61948025",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5257258a8a5235dbb0b9",
          "headline": "2026년 가상 데스크톱 인프라 시장 보고서: 241억 4천만 달러의 매출 급증을 활용하여 2030년까지 500억 3천만 달러로 급증—AWS, Microsoft, VMware, Citrix 및 Nutanix를 벤치마킹하여 1년 안에 점유율을 확보",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790587560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac8434089321a778049a233a51f940c4489191f45db0bcb5f55ac8b702383da0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "30676da4ec1c066a1ee8",
          "headline": "2026년 컴퓨터 글로벌 시장 보고서: 1,612억 9천만 달러의 매출 급증을 활용하여 2030년까지 6,764억 1천만 달러로 급증 - Apple, Microsoft, Dell, Lenovo 및 ASUS를 벤치마킹하여 AI PC 및 관세로 점유율 확보",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790587260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae3fd240d4e28f00d3957d8020301e0cc93a999f473eab42b81d2f44e7226acd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2eb14f30191727202ddc",
          "headline": "고가용성 클러스터 솔루션 글로벌 시장 보고서 2026: 24억 9천만 달러의 수익 급증을 활용하여 2030년까지 88억 4천만 달러로 증가 Microsoft, Dell, IBM, Cisco 및 Oracle을 하이브리드 클라우드로 벤치마킹",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790582700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85e9b96d08b4e927f9e80c53e018196425df23b1c2b14bed7d699979ac60efc5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790774940,
      "signal": "주의 강화",
      "netScore": -7.08,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
        },
        {
          "eventId": "05dd8b9611aa5e83c8be",
          "headline": "알파벳: 아무도 이야기하지 않는 AI 승자",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790711970,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=423e22e36d01e009356d82e8c81dcefda5262f4825bcb45d72fa7df64b9d69f8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fb99bdb450b2b46e5dfc",
          "headline": "워렌 버핏과 빌 애크먼이 알파벳, 아마존, 마이크로소프트, 메타를 사랑하는 이유를 설명하는 두 가지 숫자",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790704320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5fe16063f9dd6ed4111dbfd11d4c5a1c2905557d82ff4e6ac8c74ffcdc65cec",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b9803e02cb6f518c0e90",
          "headline": "Bank of America가 Meta의 쇼핑 에이전트로 선정되면서 Apple은 2% 하락했습니다. 알파벳 전표, Microsoft는 꾸준한 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790703787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=079983d534993d813acc1a04372fd4576a566e907c6daf552a7fd3919d8b8148",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "14f536041b0a07af25f0",
          "headline": "2026년 디지털 혁신 시장 보고서: Microsoft, Google, IBM, Accenture 및 Oracle이 AI, 클라우드 및 자동화를 가속화함에 따라 2조 4700억 달러의 수익이 2030년까지 5조 1000억 달러로 급증할 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790697420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbf169ae7e7a6e63f914b2b8ebd494377b20d76375560a69f136a10eba4dc481",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "410b8352c314242bfcba",
          "headline": "Magnite의 성장 전망은 Google 법원 판결 이후 '상당히' 개선되었다고 BofA는 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790695442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b96c896e47d0c8718a9b3eb85fcd4337a8cba8b0c5f606abea44abb3562478ea",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "90bbde23a1609d7a4576",
          "headline": "억만장자 자금 관리자가 가장 좋아하는 AI 주식 2개를 선택했습니다(Nvidia나 Alphabet은 아닙니다).",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790681161,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddbe6ec8f5d5edb27302fbff5d8dd3ffbc3c5c91fca475eb0eac3882d05e3d63",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b0773e95073e3e8d7c96",
          "headline": "Google, 검색 데이터 및 AI 서비스 액세스에 대한 EU 명령에 항소",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790677865,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c580aeae71cc91f9f2edc97a2973b07f022985e6452448fe929e596b7a2493b7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f2c0a3f058df7ce3b7bb",
          "headline": "Google의 4억 3백만 유로에 달하는 개인정보 보호 벌금으로 Alphabet의 EU 규제 위험에 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790622039,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ed22390073d186221c5181e4e63e111884fff40d002cd79c454f30f7c1e246f1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "71a1c8813a4db1c1c162",
          "headline": "시장은 알파벳에 시달려가고 있다: 나는 그들이 잃어버린 것을 사고 있다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790605896,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfaab022bf2ca2afcd1423342d8a5f87b30102d351691c848ed07ecf9f9869f4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "557097cc5612d67d9d89",
          "headline": "가상 데스크탑 강화제 글로벌 시장 보고서 2026: AI 및 클라우드 VDI가 2030년까지 매출을 46억 2천만 달러로 늘리고 Riv 이전에 Microsoft, AWS, Google, Huawei 및 Dell을 벤치마킹함에 따라 CAGR 14.9%를 활용합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790582640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a2444f97d500561d0f04c1152eaec39eecc6f7728a2abe0bad301e5ce65ef3b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790775993,
      "signal": "우호적 변화",
      "netScore": 2.88,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.98,
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
          "score": -3.32,
          "level": "주의"
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
          "eventId": "d88a70d2957813290fb2",
          "headline": "AWS는 Synopsys와 10억 달러 이상의 칩 설계 라이선스 계약을 체결했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790775993,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18624a06df4fff4be8675f2445b1d1cc0953cdca8482952124abeb2de2fc89e1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "36a8a7ecd7a5c6e11a2e",
          "headline": "아마존 프라임 빅딜 데이 미리보기: 경제적 압박으로 인해 6월 프라임데이 세일보다 딜 모색이 더 많아졌습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790773200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2f91e0e59d5d3dd7a095707036be35f3d57b8408b51e9038542ab8646e6ab71",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0f78292a37b2c3d81acc",
          "headline": "Synopsys와 Amazon은 맞춤형 실리콘에 대한 전략적 다년간 IP 계약을 발표했습니다. 협업은 클라우드 및 AI 기반 엔지니어링으로도 확장됩니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790773200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=42340b2b5e7624f73c5b4a8c5e510aba0b3b888558c32dcf2e32cb9467f0072e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "dfb69c8f361506c21afd",
          "headline": "인류의 IPO 제출은 주요 취약점을 드러냅니다. 수익 집중으로 인해 위험이 높아짐에 따라 판매 흐름의 약 50%가 Amazon과 Google을 통해 발생함: 보고서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790770697,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c372ef091144bce462a4693104be1599db6b8865e879fad757dce4619ab90eee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92e3fb02dfcafc94dbcc",
          "headline": "이 3가지 AI 주식은 Meta의 Muse를 차단하기 위해 Amazon의 선택에서 큰 승자가 될 준비가 되어 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790754600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c04ede28227099abe60f969c2362828fad36bf797514a0fb8180ad6a5aedb01",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "16eef998e091f775eefb",
          "headline": "아마존(AMZN)과 애플(AAPL)은 마켓플레이스 판매에 대해 영국 집단소송에 직면해야 합니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790748498,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=669783a8227114e6de2f820923e64d9c78a1feec557326ccd2c999418529837d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "be084e07878e681f27ba",
          "headline": "SpaceX는 IPO 후 시가총액에서 Amazon과 Microsoft를 잠시 추월했습니다. 다시 거기까지 갈 수 있을까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790709540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=81753abf08510cb607b0440483dfb9e964feb80c5a8c24c4ad358cf2e2f03532",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fb99bdb450b2b46e5dfc",
          "headline": "워렌 버핏과 빌 애크먼이 알파벳, 아마존, 마이크로소프트, 메타를 사랑하는 이유를 설명하는 두 가지 숫자",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790704320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5fe16063f9dd6ed4111dbfd11d4c5a1c2905557d82ff4e6ac8c74ffcdc65cec",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f505606a97ed76c3f864",
          "headline": "2026년 차세대 컴퓨팅 시장 보고서: Microsoft, AWS, NVIDIA, IBM 및 Intel이 AI, 양자 및 엣지 컴퓨팅을 가속화함에 따라 2030년까지 4,860억 달러의 매출 급증을 8,118억 5천만 달러로 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790697360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91fb73dffa21ff5d80fdaf7d34a2d0b476d482388a30e3c4850260c6ce25fe8e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "69f8fefe2d65fe5b31bd",
          "headline": "업데이트: Apple, Amazon, 영국 소비자 소송 갱신",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790597984,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=146616e3062191bb2ccd8d35492086b76dbba65773d551d433ce8477bc0bde25",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "92027e423385283d1c08",
          "headline": "애플과 아마존, 마켓플레이스 판매에 대한 영국 소비자 소송에 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790591444,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6605328b763b7a861d1ad51a136bf7f9c2d3937c0ea2d00b95a6ef706eafa11c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5257258a8a5235dbb0b9",
          "headline": "2026년 가상 데스크톱 인프라 시장 보고서: 241억 4천만 달러의 매출 급증을 활용하여 2030년까지 500억 3천만 달러로 급증—AWS, Microsoft, VMware, Citrix 및 Nutanix를 벤치마킹하여 1년 안에 점유율을 확보",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790587560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac8434089321a778049a233a51f940c4489191f45db0bcb5f55ac8b702383da0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790754600,
      "signal": "중립·확인 대기",
      "netScore": 0.72,
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
          "eventId": "92e3fb02dfcafc94dbcc",
          "headline": "이 3가지 AI 주식은 Meta의 Muse를 차단하기 위해 Amazon의 선택에서 큰 승자가 될 준비가 되어 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790754600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c04ede28227099abe60f969c2362828fad36bf797514a0fb8180ad6a5aedb01",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fb99bdb450b2b46e5dfc",
          "headline": "워렌 버핏과 빌 애크먼이 알파벳, 아마존, 마이크로소프트, 메타를 사랑하는 이유를 설명하는 두 가지 숫자",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790704320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5fe16063f9dd6ed4111dbfd11d4c5a1c2905557d82ff4e6ac8c74ffcdc65cec",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b9803e02cb6f518c0e90",
          "headline": "Bank of America가 Meta의 쇼핑 에이전트로 선정되면서 Apple은 2% 하락했습니다. 알파벳 전표, Microsoft는 꾸준한 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790703787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=079983d534993d813acc1a04372fd4576a566e907c6daf552a7fd3919d8b8148",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "914e69549026c68ad1ca",
          "headline": "Meta는 대규모 AI 투자를 수익으로 전환하기 위해 소비자를 넘어 찾고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790674204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=84825a24505ba0db6f260edb85e358fec1c41a96fbaa17e69206f1df5af80b3b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dd1e9e16c090d8e891bf",
          "headline": "오라클, 메타 파이낸싱 방법은 엔론 시대를 반영한다고 Steve Eisman은 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790603915,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b91fdf41540755b0f9795f1aa1e6f1324e00718f8dab2078f62be73b41d73561",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50a3ab19233d314672ba",
          "headline": "CEO는 Muse 덕분에 AMD와 Intel이 최대 17% 상승함에 따라 “수요는 계속 증가할 것”이라고 예측합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790602403,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3fd93b7486e6a08a5c3abd2db432ed9d4c1130842dee47f4f03b9a413e6a67a",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790748498,
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
          "score": -3.15,
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
          "eventId": "16eef998e091f775eefb",
          "headline": "아마존(AMZN)과 애플(AAPL)은 마켓플레이스 판매에 대해 영국 집단소송에 직면해야 합니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790748498,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=669783a8227114e6de2f820923e64d9c78a1feec557326ccd2c999418529837d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ad35ec884648fe43904",
          "headline": "AAPL 주식이 사상 최고치에서 후퇴: 조사 회사는 Apple이 올해 600만 대의 iPhone Duo를 판매할 수 있다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790744870,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48c00d487e3102d6248327f8af0c102d2aaa795c483683307689b27e6eb01d5b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "e227c2a28a84461b826f",
          "headline": "S&P 500, Dow는 높은 수익률 압력으로 인한 손실 확대 — SPCX, TGT, AAPL, MU, NTAP 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790721008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df076b1e0ea4fcf5a99c515a953021e0b32023f0067e91178578e91f8038213b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b9803e02cb6f518c0e90",
          "headline": "Bank of America가 Meta의 쇼핑 에이전트로 선정되면서 Apple은 2% 하락했습니다. 알파벳 전표, Microsoft는 꾸준한 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790703787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=079983d534993d813acc1a04372fd4576a566e907c6daf552a7fd3919d8b8148",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2287fdaee8f16e55db50",
          "headline": "퀄컴 주가는 AI와 애플 랠리가 냉각되면서 하루 만에 7% 하락했다. 2027년 매출 추정치의 의미는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790692298,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=183a9c78b76bdcc51136f8f8146bd5a698aa670669df0bdc4a5c1706729274cf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "eb145d717ac5dd655bbb",
          "headline": "2026년 클라이언트 컴퓨팅 글로벌 시장 보고서: 매출이 2030년까지 417억 3천만 달러에서 2,778억 8천만 달러로 증가함에 따라 AI, 하이브리드 및 엣지 파괴를 활용—Microsoft, Apple, Dell, Lenovo 및 HP를 벤치마킹하여 점유율 B 확보",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790669760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11813ebad115844ef52fa88f70f3eda6381a3cd945b0688ad7b71e3738a709c7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8f6e0a20ed1656796873",
          "headline": "Qualcomm: 휴대폰 수익 악화 및 경쟁 해자 약화",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790639900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df14e666052f40ca2e1ba3829fc402e5dcabb3e1e6c20bd18d89eabb6e21dcee",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c430bebbbe48e6fb56e9",
          "headline": "미국 배심원단, Apple(AAPL)에 특허 소송에서 기록적인 57억 달러 지불 명령",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790624023,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2bcd3b8223c0bd29eaa411eefb419930289a32aa8b06c279625275f5cfd54557",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e98fa7663941a67f486a",
          "headline": "Burford Capital은 57억 달러 규모의 Apple 특허 판결로 이익을 얻었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790608576,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15aa19cb77725497199b1da05da8e77599d093f457b35c16ed0bd0710e0f143b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b0e1dfc65d4e4ee79a14",
          "headline": "Qualcomm은 Apple에 막혔습니다. 우리의 목표는 월스트리트보다 높습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790602244,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=19bd6ca840c3e7afe5e9e3a4d57b88ae449a153ec10e44db987c7acf1a1adee7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "69f8fefe2d65fe5b31bd",
          "headline": "업데이트: Apple, Amazon, 영국 소비자 소송 갱신",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790597984,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=146616e3062191bb2ccd8d35492086b76dbba65773d551d433ce8477bc0bde25",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92027e423385283d1c08",
          "headline": "애플과 아마존, 마켓플레이스 판매에 대한 영국 소비자 소송에 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790591444,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6605328b763b7a861d1ad51a136bf7f9c2d3937c0ea2d00b95a6ef706eafa11c",
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
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790772346,
      "signal": "주의 강화",
      "netScore": -3.85,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.88,
          "level": "중립"
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
          "score": -2.62,
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
        },
        {
          "eventId": "7b3e9e5cc4ffcc5f687e",
          "headline": "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까? MU, TSLA, CAPR, VNDA, ASTS, HOOD, BA 주식에 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790756993,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8061e07c3ce84f11db65cb4769735fc78b1a562630c4f6b75ed2233268f23dec",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0f7f894b68f03f9f21df",
          "headline": "Tesla, 300억 달러 규모의 정기 대출 및 회전 신용 시설 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790716411,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22d36f2c6b08a84f7fd3f14f10d23e93b0fea92ed7198267e88096db2d6ff0fa",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0a2ae68bd6673e79a63a",
          "headline": "Elon Musk는 일주일에 20,000대의 Optimus 로봇을 만들고 싶어합니다. 단 하나의 문제가 있습니다. Tesla는 여전히 일을 할 수 없습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790695233,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2398788a41d8a489a5455a082d8eda387c19189d0b2218772b0c7efc56647212",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e40b941fb47ec0d5be02",
          "headline": "Tesla(TSLA)의 보증 청구서가 늘어나고 있습니다. 미래의 마진은 과거 판매에 대한 비용을 지불하고 있습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790647737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e95261c59ea3411791a01cdbeeb5fda5130dcc418c034ab2675ea9cb65f9fc5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7a9c3e7342e212083bd7",
          "headline": "SpaceX 대 Tesla: 향후 5년간 어떤 Elon Musk 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790609100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5768e7377628f5a563dd28a7c1194e44ead46e91850b8bb75d00da90f144c94",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b176ec0c38924e67a9a4",
          "headline": "TSLA SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1790607600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026063820/tsla-20260929.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790746620,
      "signal": "주의 강화",
      "netScore": -3.15,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
          "score": -2.97,
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
          "eventId": "0e8711d9b6aecf4b0618",
          "headline": "오라클 주식은 지금 구매 가능한가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790746620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=14fbc1758e3894e92626f19ea198fb167b75e71e7994f00436dd749a297f4541",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e1a4f31815b74a29b94b",
          "headline": "Palantir의 가치는 Oracle 매출의 10분의 1 미만으로 Oracle만큼 가치가 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790737561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=55c85eea021a4b3f2a0b284ca1d7725e4ba06fc63dd71f261aa5f190bd22eed4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3146039f6a2cc26a04c7",
          "headline": "NTAP 주가 사상 최고치 경신: NetApp, 클라우드 인프라 추진을 위해 SAP, Oracle 및 Supermicro와의 전략적 파트너십 확장",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790711268,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efe745b6908904e67351b4f79914300f2d9b32f141c22b767d6361e905641acc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "1e633b125ee50754bf15",
          "headline": "Oracle은 Fusion Claw 출시로 25개의 에이전트 애플리케이션을 추가하면서 5% 증가했습니다. Salesforce는 정체 상태를 유지하고 ServiceNow는 미끄러졌습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790697141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1a9d37fd5f3965059517e1a8a3388c8e5137fa4a88b8c696665cfdd7788a8e1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5fbdf5a0ed1839f87b54",
          "headline": "SWIFT의 Oracle 블록체인 거래에는 Quant(QNT) 연결이 있지만 XRP는 어디에 적합합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790669925,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac3a6e18a91c148e08126ad24036f2f7a54c0307d4d89625c767255610056d8c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "362b2499166f18e14898",
          "headline": "Accenture(ACN), 공급망 확보 및 Oracle Cloud 혁신 성공",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790662175,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=037546b6199c388b880faddfca8ba15a090e4c5c5c9ec6f17f9d2f3c2555fb5a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "96c6870ec90f58e79ec9",
          "headline": "Michael Burry: Oracle이 현금 흐름을 잠식하고 있습니다. \"WorldCom이 그랬던 것과 매우 흡사합니다\"",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790607926,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=19e3cf8a50dc0c0c6ecefedc72fbadece97a491f9fb08e1c2bfbcac6a265ddaf",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4d308aaf0bfc74beff8c",
          "headline": "Snowflake는 제안된 $35억 전환사채에서 4% 하락; Oracle 하락 3%, Datadog 하락 4%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790603151,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3a1e201d37199e73a708618cbbda3fda1776335e8c1a2b08f1094a9b78068130",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3182bfd4f6c5bc2235e6",
          "headline": "Oracle vs. Salesforce: 어느 기업 AI 주식에 더 많은 투자 여지가 있나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790588400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ad228e5cee00579bb888434211ab0045679fddb600ae20cefccc7b78154a030",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790702781,
      "signal": "우호적 변화",
      "netScore": 2.23,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
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
          "eventId": "694e011482317996f8df",
          "headline": "Salesforce 주가는 Fin Deal이 종료된 후 최고치보다 16% 하락했습니다. Koa가 바꿀 수 있는 것은 다음과 같습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790702781,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e56a1ffe3416280215f7e4a46ac93c4549ff13db82a3cdbc705ca13a7ce40062",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1e633b125ee50754bf15",
          "headline": "Oracle은 Fusion Claw 출시로 25개의 에이전트 애플리케이션을 추가하면서 5% 증가했습니다. Salesforce는 정체 상태를 유지하고 ServiceNow는 미끄러졌습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790697141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1a9d37fd5f3965059517e1a8a3388c8e5137fa4a88b8c696665cfdd7788a8e1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3182bfd4f6c5bc2235e6",
          "headline": "Oracle vs. Salesforce: 어느 기업 AI 주식에 더 많은 투자 여지가 있나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790588400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ad228e5cee00579bb888434211ab0045679fddb600ae20cefccc7b78154a030",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790760276,
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
          "eventId": "a49990fe1242029afb4b",
          "headline": "Palantir: 완전히 다른 AI 이야기",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790760276,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8512a834d5707404f18e7d78462ed9fe592092a978248312fb640c14ed3ac18a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e1a4f31815b74a29b94b",
          "headline": "Palantir의 가치는 Oracle 매출의 10분의 1 미만으로 Oracle만큼 가치가 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790737561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=55c85eea021a4b3f2a0b284ca1d7725e4ba06fc63dd71f261aa5f190bd22eed4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "667b1f8f8ca589511a70",
          "headline": "Michael Burry는 MU, NBIS, NVDA, PLTR 공매도를 풋으로 교환 — AI 버블이 '나중에보다 빨리' 터질 수 있다고 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790628163,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30700271e6181cc735bab112c230aa0551f18a37307e5e36857e5d834888d07c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4fd948fb9353a328845d",
          "headline": "Palantir는 SMART에 대한 FAA 계약을 체결하지 못했습니다. 어쨌든 주식을 살 시간인가?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790611980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0e16a7e2236ea5bedd337cd3cda61d4a74bf319e28d5c93e33234d9d81d9f37",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790774341,
      "signal": "우호적 변화",
      "netScore": 5.82,
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
          "eventId": "629e78ec0241ecaeab96",
          "headline": "Broadcom 대 NVIDIA: 2026년에는 어떤 기술 주식을 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790774341,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=872c9f4e118e82c038a8020d70b5cbeab8ee164d42bf633e122a33c7636a9214",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fafb7d47f16722e5080c",
          "headline": "Meta는 AI 데이터 센터를 실험적이라는 라벨로 지정하여 수십억 달러의 세금을 삭감했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790769066,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=75362e589cf71b3165d971a2225b6fabaf4f0a2ede9733b6a78f233c8c365ba0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "f8c068711ca1681a671f",
          "headline": "Applied Materials(AMAT), 50억 달러 규모의 EPIC 센터를 차세대 AI 메모리와 연결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790755787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70dbbcf35681147bb4c01b4fc05085c74fea63b9f26fd51b1f4d5c838b7b698d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "e49085bd8ed66865a234",
          "headline": "Zuckerberg는 Meta의 AI 랠리가 깨지면서 하루에 89억 달러의 손실을 입었습니다. Goldman Sachs가 AI 비용을 경고한 후 Meta 주가가 약 4% 하락한 749.26달러로 그의 순자산은 2,664억 달러에서 2,575억 달러로 감소했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790746380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b565584ed742e93763e03c39714309075484c614447d33a7c56a88334da78c0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "89a696716d4d74b20d3b",
          "headline": "AMD, AI의 다음 시대에 82억 달러 공격적 투자로 엔비디아에 도전",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790719620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1763d3b5fcdebe2a59d1c89258683faf1d2b6126e97164eca7f62ab9f43dda05",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "9e107aa94dc77de1a6d9",
          "headline": "AMD, AI의 차세대 거대 시장에 82억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790708728,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=388be4fd69883f29a861a84bd68954c39724936912792e523e662c960ffa781a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "7907349f89af6f8ad0fd",
          "headline": "Marvell은 2026년에 210% 상승합니다: 이익을 얻나요, 아니면 더 많이 사나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790708512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=513f74c8c35d4f0cfed1620f5cbe2dbf7603340c1e5c30742f2664c172d78bf0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "74900e07dd2cea30df7c",
          "headline": "167억 달러 규모의 AI 엔진이 마진 테스트에 직면하면서 Broadcom 주가는 약 3.2% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790707601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb8b32c7d964b863df44f8539dd51812887f54327e0d02334589cdf35160c33f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "4194863cceef8709395b",
          "headline": "Nvidia 파트너십으로 에이전트에 신원을 부여함에 따라 IBM 주가 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790702200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0ff6aa090dfa2d6401a5f1f4f865452cbf70f12df5b03bbb15d8ee187ff2bd4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "361e4a37f812237f7e63",
          "headline": "AMD의 82억 달러 AI 거래는 Nvidia의 가장 큰 이점을 목표로 합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790699967,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=04a77a7a7a24d1a7dc3bbc9a060a1271af56a158681385f9a4b07628db84b3d0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "f84872758b7c010870ac",
          "headline": "AMD의 82억 달러 AI 거래는 Nvidia의 가장 큰 이점을 목표로 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790699967,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=04a77a7a7a24d1a7dc3bbc9a060a1271af56a158681385f9a4b07628db84b3d0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 48,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790769066,
      "signal": "우호적 변화",
      "netScore": 7.79,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
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
          "score": -3.5,
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
          "eventId": "fafb7d47f16722e5080c",
          "headline": "Meta는 AI 데이터 센터를 실험적이라는 라벨로 지정하여 수십억 달러의 세금을 삭감했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790769066,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=75362e589cf71b3165d971a2225b6fabaf4f0a2ede9733b6a78f233c8c365ba0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "fc4363ef292647fc6638",
          "headline": "HPE, Vultr와 12억 달러 규모의 첫 AMD Helios 주문 확보",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790768760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1d68f540487f8d818c7518e2f4ab83ca70c8981d4fad00d7c7b8d59e4f0a0a07",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f8c068711ca1681a671f",
          "headline": "Applied Materials(AMAT), 50억 달러 규모의 EPIC 센터를 차세대 AI 메모리와 연결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790755787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70dbbcf35681147bb4c01b4fc05085c74fea63b9f26fd51b1f4d5c838b7b698d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e49085bd8ed66865a234",
          "headline": "Zuckerberg는 Meta의 AI 랠리가 깨지면서 하루에 89억 달러의 손실을 입었습니다. Goldman Sachs가 AI 비용을 경고한 후 Meta 주가가 약 4% 하락한 749.26달러로 그의 순자산은 2,664억 달러에서 2,575억 달러로 감소했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790746380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b565584ed742e93763e03c39714309075484c614447d33a7c56a88334da78c0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "89a696716d4d74b20d3b",
          "headline": "AMD, AI의 다음 시대에 82억 달러 공격적 투자로 엔비디아에 도전",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790719620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1763d3b5fcdebe2a59d1c89258683faf1d2b6126e97164eca7f62ab9f43dda05",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9e107aa94dc77de1a6d9",
          "headline": "AMD, AI의 차세대 거대 시장에 82억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790708728,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=388be4fd69883f29a861a84bd68954c39724936912792e523e662c960ffa781a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "74900e07dd2cea30df7c",
          "headline": "167억 달러 규모의 AI 엔진이 마진 테스트에 직면하면서 Broadcom 주가는 약 3.2% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790707601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb8b32c7d964b863df44f8539dd51812887f54327e0d02334589cdf35160c33f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "361e4a37f812237f7e63",
          "headline": "AMD의 82억 달러 AI 거래는 Nvidia의 가장 큰 이점을 목표로 합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790699967,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=04a77a7a7a24d1a7dc3bbc9a060a1271af56a158681385f9a4b07628db84b3d0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f84872758b7c010870ac",
          "headline": "AMD의 82억 달러 AI 거래는 Nvidia의 가장 큰 이점을 목표로 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790699967,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=04a77a7a7a24d1a7dc3bbc9a060a1271af56a158681385f9a4b07628db84b3d0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "d338353b78076c1be625",
          "headline": "AMD는 CEO가 물리적 AI에 투자함에 따라 비칩메이킹 스타트업에 82억 달러의 주식을 지불했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790699936,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f57741d3e2d3d82602b6f374616c38443e30279a7267941cf57a0724f80924f3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "14f536041b0a07af25f0",
          "headline": "2026년 디지털 혁신 시장 보고서: Microsoft, Google, IBM, Accenture 및 Oracle이 AI, 클라우드 및 자동화를 가속화함에 따라 2조 4700억 달러의 수익이 2030년까지 5조 1000억 달러로 급증할 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790697420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbf169ae7e7a6e63f914b2b8ebd494377b20d76375560a69f136a10eba4dc481",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 38,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790774341,
      "signal": "주의 강화",
      "netScore": -7.98,
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
          "eventId": "629e78ec0241ecaeab96",
          "headline": "Broadcom 대 NVIDIA: 2026년에는 어떤 기술 주식을 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790774341,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=872c9f4e118e82c038a8020d70b5cbeab8ee164d42bf633e122a33c7636a9214",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7907349f89af6f8ad0fd",
          "headline": "Marvell은 2026년에 210% 상승합니다: 이익을 얻나요, 아니면 더 많이 사나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790708512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=513f74c8c35d4f0cfed1620f5cbe2dbf7603340c1e5c30742f2664c172d78bf0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "74900e07dd2cea30df7c",
          "headline": "167억 달러 규모의 AI 엔진이 마진 테스트에 직면하면서 Broadcom 주가는 약 3.2% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790707601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb8b32c7d964b863df44f8539dd51812887f54327e0d02334589cdf35160c33f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d7168ee8b2f13c506bdd",
          "headline": "Broadcom-Toppan JV, 싱가포르에 '최초' 기판 공장 설립",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790689313,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5117758abdb846c71ccc7faf972dbae02f4b9d3b53e4075d74aab7e8d23c29ef",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "db16c1259bff667165c7",
          "headline": "브로드컴이 아닙니다. AMD가 아닙니다. Nvidia의 가장 큰 위협은 계속해서 마음에 가깝고 소중한 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790673961,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=133ab9206371966c9bbbaf2629830513c37bf335f467ac43a1a16845c2cd8f91",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "41da8439d04ede29eb98",
          "headline": "Broadcom 대 Marvell Technology: 2026년에는 어느 반도체 주식을 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790627378,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b78a942e2c9f8288e314af078a248061aa2c8937e49521b76557761845e29fe2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2fbd2ca170283e77894e",
          "headline": "Broadcom 주식은 1,150억 달러 예측으로 전환율이 높아짐에 따라 하락",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1790624150,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=acb1d609aa4809e9aea1a204f9b1f0a01c54c30f1eccebe9cd1c1752f7187026",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5257258a8a5235dbb0b9",
          "headline": "2026년 가상 데스크톱 인프라 시장 보고서: 241억 4천만 달러의 매출 급증을 활용하여 2030년까지 500억 3천만 달러로 급증—AWS, Microsoft, VMware, Citrix 및 Nutanix를 벤치마킹하여 1년 안에 점유율을 확보",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790587560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac8434089321a778049a233a51f940c4489191f45db0bcb5f55ac8b702383da0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f51116253d27afe9d256",
          "headline": "INTC, AMD, AVGO: 미국-이란 긴장이 다시 고조되는 가운데 기술이 타격을 입으면서 칩 주식이 하락세를 주도",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790586499,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f0962506e75fdbd8c68f04e26ab77822fa6dfca9adfe3e913a6fa0130704283f",
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
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790770801,
      "signal": "주의 강화",
      "netScore": -9.94,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.97,
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
        },
        {
          "eventId": "2ad35ec884648fe43904",
          "headline": "AAPL 주식이 사상 최고치에서 후퇴: 조사 회사는 Apple이 올해 600만 대의 iPhone Duo를 판매할 수 있다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790744870,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48c00d487e3102d6248327f8af0c102d2aaa795c483683307689b27e6eb01d5b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "2287fdaee8f16e55db50",
          "headline": "퀄컴 주가는 AI와 애플 랠리가 냉각되면서 하루 만에 7% 하락했다. 2027년 매출 추정치의 의미는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790692298,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=183a9c78b76bdcc51136f8f8146bd5a698aa670669df0bdc4a5c1706729274cf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "b6fea683c59567484cd9",
          "headline": "Qualcomm: 1년 만에 처음으로 다운그레이드",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790683738,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a77e3bf96e2d112ebd8db6a71a2018cae2b3b6518b5f98f1ba35094a11d36b2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8f6e0a20ed1656796873",
          "headline": "Qualcomm: 휴대폰 수익 악화 및 경쟁 해자 약화",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790639900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df14e666052f40ca2e1ba3829fc402e5dcabb3e1e6c20bd18d89eabb6e21dcee",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6980c5957876f0f27997",
          "headline": "Arm은 칩 매도세가 심화되면서 9% 하락했습니다. 퀄컴 하락 6%, 마벨 하락 5%",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790610689,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c84c0a9086b4db88b83c7b9f423e233038d7c8e3ecb42583415a66ea4f53f3d4",
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
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790694374,
      "signal": "주의 강화",
      "netScore": -4.83,
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
          "score": -1.57,
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
          "eventId": "02d7937e27f8999977f5",
          "headline": "칩 매도세가 풀리면서 Arm은 5% 증가합니다. Marvell은 4% 상승, Qualcomm은 인치 더 높아졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790694374,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4922c0685c8237a023b42b66dc0317eb0195f1ace54e4fc26927e3490ff4dfbf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "afb402a5cd0dec1088a9",
          "headline": "Arm 대 Marvell Technology: 2026년에는 어떤 AI 칩 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790631435,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c41fd07c0ce8d0cfccf39b78e7cab5eed1c04fccaeed0859318311f4372dca0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6980c5957876f0f27997",
          "headline": "Arm은 칩 매도세가 심화되면서 9% 하락했습니다. 퀄컴 하락 6%, 마벨 하락 5%",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790610689,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c84c0a9086b4db88b83c7b9f423e233038d7c8e3ecb42583415a66ea4f53f3d4",
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
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790767201,
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
          "score": -1.57,
          "level": "주의"
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
          "score": -3.85,
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
        },
        {
          "eventId": "7907349f89af6f8ad0fd",
          "headline": "Marvell은 2026년에 210% 상승합니다: 이익을 얻나요, 아니면 더 많이 사나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790708512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=513f74c8c35d4f0cfed1620f5cbe2dbf7603340c1e5c30742f2664c172d78bf0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "02d7937e27f8999977f5",
          "headline": "칩 매도세가 풀리면서 Arm은 5% 증가합니다. Marvell은 4% 상승, Qualcomm은 인치 더 높아졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790694374,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4922c0685c8237a023b42b66dc0317eb0195f1ace54e4fc26927e3490ff4dfbf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "afb402a5cd0dec1088a9",
          "headline": "Arm 대 Marvell Technology: 2026년에는 어떤 AI 칩 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790631435,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c41fd07c0ce8d0cfccf39b78e7cab5eed1c04fccaeed0859318311f4372dca0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "41da8439d04ede29eb98",
          "headline": "Broadcom 대 Marvell Technology: 2026년에는 어느 반도체 주식을 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790627378,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b78a942e2c9f8288e314af078a248061aa2c8937e49521b76557761845e29fe2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6980c5957876f0f27997",
          "headline": "Arm은 칩 매도세가 심화되면서 9% 하락했습니다. 퀄컴 하락 6%, 마벨 하락 5%",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790610689,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c84c0a9086b4db88b83c7b9f423e233038d7c8e3ecb42583415a66ea4f53f3d4",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790711220,
      "signal": "우호적 변화",
      "netScore": 3.63,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
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
          "score": -0.7,
          "level": "중립"
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
          "eventId": "67caf8abc8fd5925144a",
          "headline": "저는 Palantir를 5년 동안 다루었습니다. 인공지능(AI) 주식이 과대평가되었는지 확인하는 방법은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790711220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd7e4b72c0da063d663a0f4fef188bcc7b66f2363034f5fc031c8d81d69b9eab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f505606a97ed76c3f864",
          "headline": "2026년 차세대 컴퓨팅 시장 보고서: Microsoft, AWS, NVIDIA, IBM 및 Intel이 AI, 양자 및 엣지 컴퓨팅을 가속화함에 따라 2030년까지 4,860억 달러의 매출 급증을 8,118억 5천만 달러로 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790697360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91fb73dffa21ff5d80fdaf7d34a2d0b476d482388a30e3c4850260c6ce25fe8e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bb2677c9783e279722b8",
          "headline": "Intel은 석유로 인한 환율 우려로 4% 하락하고 NVIDIA는 기록적인 1,500억 달러 자사주 매입으로 3% 상승합니다. 대만 반도체 전표",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790606000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c137c0bee7bc7b4e2bab604d0f52aebd7876e01950616f18bd02213909f5b5bc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "47c6a97397cde014297f",
          "headline": "SKHY는 잠재적인 인텔 파트너십을 통해 이익을 얻을 가능성이 높습니다: 구매할 가치가 있나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790602860,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8edece9a2392b198f2b5e891047de03b6cd7d2e9cae3c610edd9ed520a41ea47",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "50a3ab19233d314672ba",
          "headline": "CEO는 Muse 덕분에 AMD와 Intel이 최대 17% 상승함에 따라 “수요는 계속 증가할 것”이라고 예측합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790602403,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3fd93b7486e6a08a5c3abd2db432ed9d4c1130842dee47f4f03b9a413e6a67a",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4b3d96f8093aa2d22e65",
          "headline": "2026년 컴퓨터 비전 글로벌 시장 보고서: 2030년까지 매년 15.9% 성장하는 371억 달러 시장 점유율 확보—Microsoft, Sony, Intel, Texas Instruments 및 MediaTek을 AI, Edge Visio로 벤치마킹",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790587680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=466e72eda9d3ce0ac7473abf0a66463f4e2fd5eac2e75107f4d5905d61948025",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790701774,
      "signal": "주의 강화",
      "netScore": -6.29,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.75,
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
          "score": -2.97,
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
          "eventId": "52feea82e87d7ea469af",
          "headline": "Taiwan Semiconductor Manufacturing(TSM)은 새로운 AI 공급망에 어떻게 적합합니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790701774,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06fe4a3f20a3696e49c680628f703acb5ec32d9cd97476e6bca6cbf5a9ac644e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "787d6c81d6af080aa74c",
          "headline": "TSMC: 2nm가 하이 기어로 ​​이동하고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790680240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9d98446224caa70206c6c50ea21fef2ec02622d271f85ec953376e3c51884011",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bb2677c9783e279722b8",
          "headline": "Intel은 석유로 인한 환율 우려로 4% 하락하고 NVIDIA는 기록적인 1,500억 달러 자사주 매입으로 3% 상승합니다. 대만 반도체 전표",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790606000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c137c0bee7bc7b4e2bab604d0f52aebd7876e01950616f18bd02213909f5b5bc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "631b87b8af24698ee33c",
          "headline": "Lam Research: 성장 가능성이 있는 주요 AI 인프라 플레이어",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790576802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5efcd72c9dbb46f835e255b6c8630e53a2b2636d5cd0522655c76dee8be0258d",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790769940,
      "signal": "주의 강화",
      "netScore": -3.22,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.35,
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
        },
        {
          "eventId": "c7fddf847df6637b5653",
          "headline": "ASML은 트럼프에 대한 중국 경고를 가지고 있습니다: 너무 많은 압력이 경쟁자를 만들 수 있습니다",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1790590817,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=281d4f6f7a8dc819586b5eda31c41fd872da84e9326c5d6dde68634eada3dbe5",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790755787,
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
          "eventId": "f8c068711ca1681a671f",
          "headline": "Applied Materials(AMAT), 50억 달러 규모의 EPIC 센터를 차세대 AI 메모리와 연결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790755787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70dbbcf35681147bb4c01b4fc05085c74fea63b9f26fd51b1f4d5c838b7b698d",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1790787347.7755342,
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
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790751906,
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
          "eventId": "cac8339bb793903665cf",
          "headline": "KLA Corporation: 펀더멘털은 탄탄하지만 주식에는 더 많은 것이 필요합니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790751906,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f5fe2c23712d243acff5b685188fbbfccb200516c982610e76a84a1ea302787",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c31f3c478b43f6454682",
          "headline": "KLA Corporation: AI 노출은 강력하지만 안전 한계는 제한적",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790743458,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db2484a50e291bc2feef09f0d35c11f52596d0ced0c8d78e9fbf173582b66835",
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
    "MU": {
      "ticker": "MU",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790773540,
      "signal": "우호적 변화",
      "netScore": 5.02,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
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
          "eventId": "377408d91ff0daec0d3c",
          "headline": "5 마이크론 진입점을 통해 보유 시간보다 타이밍이 더 중요한 이유를 알 수 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790773540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=769786dea7563e29bad583af20a10e7795eff857db6af398f3a73070ab2d963a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7ab299734fef8532013d",
          "headline": "2027년 말까지 Micron과 Sandisk 간의 10,000달러 투자 분할 가치는 얼마나 될까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790770080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e6c95bc5b1fdb450f7756ad22b91a42f2eac3e0e45ddb2f3ea4519a47315322",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fafb7d47f16722e5080c",
          "headline": "Meta는 AI 데이터 센터를 실험적이라는 라벨로 지정하여 수십억 달러의 세금을 삭감했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790769066,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=75362e589cf71b3165d971a2225b6fabaf4f0a2ede9733b6a78f233c8c365ba0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7b3e9e5cc4ffcc5f687e",
          "headline": "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까? MU, TSLA, CAPR, VNDA, ASTS, HOOD, BA 주식에 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790756993,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8061e07c3ce84f11db65cb4769735fc78b1a562630c4f6b75ed2233268f23dec",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f8c068711ca1681a671f",
          "headline": "Applied Materials(AMAT), 50억 달러 규모의 EPIC 센터를 차세대 AI 메모리와 연결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790755787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70dbbcf35681147bb4c01b4fc05085c74fea63b9f26fd51b1f4d5c838b7b698d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e49085bd8ed66865a234",
          "headline": "Zuckerberg는 Meta의 AI 랠리가 깨지면서 하루에 89억 달러의 손실을 입었습니다. Goldman Sachs가 AI 비용을 경고한 후 Meta 주가가 약 4% 하락한 749.26달러로 그의 순자산은 2,664억 달러에서 2,575억 달러로 감소했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790746380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b565584ed742e93763e03c39714309075484c614447d33a7c56a88334da78c0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2ad35ec884648fe43904",
          "headline": "AAPL 주식이 사상 최고치에서 후퇴: 조사 회사는 Apple이 올해 600만 대의 iPhone Duo를 판매할 수 있다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790744870,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48c00d487e3102d6248327f8af0c102d2aaa795c483683307689b27e6eb01d5b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "20098347f2d989128d0f",
          "headline": "Tesla, 막대한 자본 지출을 앞두고 300억 달러 규모의 신용 백업 준비",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790721368,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d11e1ad48fd0d25672f39134f57f04a2522ab5fe1f7b1649c0265db69dc76744",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e227c2a28a84461b826f",
          "headline": "S&P 500, Dow는 높은 수익률 압력으로 인한 손실 확대 — SPCX, TGT, AAPL, MU, NTAP 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790721008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df076b1e0ea4fcf5a99c515a953021e0b32023f0067e91178578e91f8038213b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5b03345b136391e8da73",
          "headline": "S&P 500, Dow는 높은 수익률 압력으로 인한 손실 확대 — SPCX, TGT, AAPL, MU, NTAP 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790721008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df076b1e0ea4fcf5a99c515a953021e0b32023f0067e91178578e91f8038213b",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89a696716d4d74b20d3b",
          "headline": "AMD, AI의 다음 시대에 82억 달러 공격적 투자로 엔비디아에 도전",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790719620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1763d3b5fcdebe2a59d1c89258683faf1d2b6126e97164eca7f62ab9f43dda05",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 45,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790743998,
      "signal": "주의 강화",
      "netScore": -5.25,
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
          "eventId": "c77d3f2dd60bd5e1e8b5",
          "headline": "Sandisk: Fab 통제도 없고 HBF 독점도 없습니다 - 실제로 돈이 나오는 곳",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790743998,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a6ed4145bd7c7969cecb4e0c352badccf0ab709dfcf3b3b18e2e3e6f52f032d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ebb3a4ff77d41ce6e95e",
          "headline": "Sandisk는 2026년 출시 이후 백만장자 주식인가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790720400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dcc6ab761207a781d78fffa709a885f5ddd8c7c2ca2b43f425d11b0e78e794f9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f95f1eadf2fd6dc2207c",
          "headline": "SanDisk는 투자자가 기대하는 것보다 훨씬 더 큰 기회를 가질 수 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790692227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25a915c7b31086363632835c27c4da0ef6cfd5b07ec9f09e553e614f50d10730",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bb63b31c9863c9d0f32b",
          "headline": "환매 뉴스에 뛰어들기 전에 Sandisk를 주의 깊게 살펴보세요",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790687106,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3cc48e861d7c3c2c1d057705a3509c28f173382f35ac060783f49339fe1436ae",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6c010b47417483c46032",
          "headline": "소매 투자자들은 이 두 주식이 차세대 NVIDIA와 Sandisk가 될 수 있다고 생각합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790600907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9db4ee7029044d78b8904947ea6744c90168a8b9f20f63d282b6bfbcf8ffbd1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2e33d04ec036997cea29",
          "headline": "NVDA 주식에 초점이 맞춰져 있음: 중국은 ByteDance, Alibaba가 일부 Nvidia AI 칩을 구매하도록 허용하는 데 무게를 두고 있는 것으로 알려짐",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790565238,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=333ff7d6bb612eaddc2e47370baa06c2dae3102539c654a4cd38c5bba323a74a",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790744870,
      "signal": "주의 강화",
      "netScore": -5.04,
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
          "score": -2.8,
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
          "eventId": "2ad35ec884648fe43904",
          "headline": "AAPL 주식이 사상 최고치에서 후퇴: 조사 회사는 Apple이 올해 600만 대의 iPhone Duo를 판매할 수 있다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790744870,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48c00d487e3102d6248327f8af0c102d2aaa795c483683307689b27e6eb01d5b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "2287fdaee8f16e55db50",
          "headline": "퀄컴 주가는 AI와 애플 랠리가 냉각되면서 하루 만에 7% 하락했다. 2027년 매출 추정치의 의미는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790692298,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=183a9c78b76bdcc51136f8f8146bd5a698aa670669df0bdc4a5c1706729274cf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "a98c57babacea29b03ac",
          "headline": "Bloomberg가 잠재적 Solidigm IPO에 1000억 달러 가치를 부여함에 따라 SK 하이닉스는 6% 하락합니다. 마이크론과 웨스턴디지털은 4% 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790607821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1715eb35bdfa249e25ee317a97245090cdc5d298d59d43578d1b2af3edac8349",
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
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790688601,
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
          "eventId": "73467221e2717d0aced6",
          "headline": "Arista Networks vs. International Business Machines: 2026년에는 어느 기술주를 구매하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790688601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6d52503c54b2c69cef1fa63a0f169cbe2fba6b51f2de8f1b82c4021b5355b52",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790717577,
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
          "eventId": "4301db55de7ffc62c9ac",
          "headline": "Coherent가 제공하지 않는 Amphen은 무엇을 제공합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790717577,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e9ada8de20b1ed204f9f3f701be6b0fc9c0c054a84c5bf48fe7117aad284b33",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a4117deabec311576612",
          "headline": "코히런트: 신중한 구매",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790675903,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c971573319d6aeb3c9e5162e80f65701694ea1ab87fbf53cc31d3446eba84661",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790691433,
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
          "eventId": "96ffa0d6e594a3b00494",
          "headline": "Lumentum 주식: $800에 샀습니다. 2027년은 이야기를 바꿀 수 있다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790691433,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a223c39c5dd9b033b379985885bd4a7bd985d6f3df536ea54387da38b311859",
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
      "updatedAt": 1790787347.7755342,
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
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790687028,
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
          "eventId": "d95500913fef736dfcdd",
          "headline": "Constellation Energy: 프리미엄 가격으로 만나는 프리미엄 기업",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790687028,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=278b0ce19e307011f21688e3117b83bfc62317c00d040893606edfa8b63ec3b4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "817417e4d5ab8b742416",
          "headline": "BlackRock은 AI 가치가 소프트웨어를 넘어 이동하고 있다고 말하며 '물리적 AI'를 표시: MU, VRT 및 CEG에 초점을 맞춘 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790657638,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10f27c45142ba2356ae27a775a4a7ab67225334cd3b40043f8e0e41c79485544",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790756993,
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
          "eventId": "7b3e9e5cc4ffcc5f687e",
          "headline": "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까? MU, TSLA, CAPR, VNDA, ASTS, HOOD, BA 주식에 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790756993,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8061e07c3ce84f11db65cb4769735fc78b1a562630c4f6b75ed2233268f23dec",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d95500913fef736dfcdd",
          "headline": "Constellation Energy: 프리미엄 가격으로 만나는 프리미엄 기업",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790687028,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=278b0ce19e307011f21688e3117b83bfc62317c00d040893606edfa8b63ec3b4",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1790787347.7755342,
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
      "updatedAt": 1790787347.7755342,
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
      "updatedAt": 1790787347.7755342,
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
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790759222,
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
        },
        {
          "eventId": "817417e4d5ab8b742416",
          "headline": "BlackRock은 AI 가치가 소프트웨어를 넘어 이동하고 있다고 말하며 '물리적 AI'를 표시: MU, VRT 및 CEG에 초점을 맞춘 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790657638,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10f27c45142ba2356ae27a775a4a7ab67225334cd3b40043f8e0e41c79485544",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1790787347.7755342,
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
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790701127,
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
          "eventId": "ce65f19dd9553fc014ef",
          "headline": "SK하이닉스, 트레이더들이 메모리 수요에 무게를 두는 가운데 3% 상승, 미국 경쟁사 마이크론과 씨게이트 제치고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790701127,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=27be0b0b3b849ca40a5664512c4f6d988e5b75d1d842cad6fc523758e85e9cf4",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1790787347.7755342,
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
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790611800,
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
          "eventId": "0b44214ea9cd3bfef913",
          "headline": "Hunt Electric이 컴포트 시스템에 대한 강력한 거래가 될 수 있는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790611800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6488f0121a776474bd93c42f70a8c0b1561b48a28e4d0f63c3a23372cc80b7fe",
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
      "updatedAt": 1790787347.7755342,
      "dataAsOf": 1790628358,
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
          "eventId": "0d361b49754e60b4ae8d",
          "headline": "AI 파워 붐이 Bloom Energy(BE)의 850억 달러 가치 평가를 정당화할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790628358,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=121f55c1cfd2d0c62dc038be4f3d0d6d229467e263ff799f25efc098015054cf",
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
    }
  }
};
