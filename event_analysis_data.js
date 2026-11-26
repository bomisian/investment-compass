// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1795712422.46332,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795680000,
      "signal": "주의 강화",
      "netScore": -2.16,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "score": -3.15,
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
          "eventId": "7ea5b3dee28f5f4f3e3c",
          "headline": "마이크로소프트: 추수감사절 만찬에 부조종사 초대",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795680000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ede980a35f3b6f66bed0acdf99d20bf1fa4ba27cc85718bbbd40699e32d2c63",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "db44d14642333ea76283",
          "headline": "마이크로소프트의 영주권 신청은 대량 해고 이후 눈에 띄는 패턴을 드러낸다. 트럼프의 새로운 규정으로 인해 스폰서십이 2년 동안 중단될 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795650487,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=50a30bb11dcb9838d602bc541d5cb1ba3446c6f63216bea4dc6ea7009ee03417",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6d765f9801a10cc8f6f",
          "headline": "PINS의 새로운 Microsoft 광고 거래가 경쟁 우위를 강화할 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795622340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=901b40018919cf3a0535968d6f6df1a430f67812643e36779c8dae548a4c3ac1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fdcbd267b8b3d534a569",
          "headline": "Oracle은 Microsoft의 레버리지가 높고 현금이 부족한 쌍둥이입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795535101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1aa587113643b358b8db9c27840c1dbfc0f65130a9f79cf1f1d6897750222acb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "66bcfd4195c99362577a",
          "headline": "글로벌 문서 협업 시장 보고서 2026: 2030년 규모, 점유율, 추세 및 예측 | Microsoft, Google, Adobe 및 Box를 통해 AI, 클라우드 및 보안 워크플로를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff7c423c3e96ad7fd0dc54c6f8d8d63ad1d374f39150836d414d6bc9e0494c86",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d039498fab611b522cc1",
          "headline": "트럼프, 해외 데이터센터에 '엄청난 세금' 부과 위협. 이는 마이크로소프트, 아마존, 알파벳에게 큰 문제이다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795515621,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1141281cff2f99fb759fbfcadf374188e918464420071aab5f5142490bfcb04",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795695305,
      "signal": "중립·확인 대기",
      "netScore": 0.78,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.98,
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
          "score": -3.67,
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
          "eventId": "78b4293e28b885f5207e",
          "headline": "Tepper는 알파벳을 46%까지 줄이고 Micron과 Oracle을 지원하면서 Broadcom과 AMD를 제치고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795695305,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bdc426d908017f10bca2c77adfabda1a60a7364765a771393f3e9e5e31e66b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "acef17698a1c091172b4",
          "headline": "UBS의 425달러 목표는 Broadcom의 매각이 너무 멀리 갔다고 말합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795693883,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddb6b035b8e9da0e66351567114e458711fab79ead56c81a3d766b3bc161500e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89d131430a6e6b0016b6",
          "headline": "Google이 TPU 주문을 삭감한 것으로 알려지자 Broadcom은 일주일 만에 15% 하락하여 52주 최저치를 기록했습니다. 판매가 과도합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795681834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9f3e25b8b6dc31052278b99a543bbc59832541a1aad00ce40a8ece1e6c868983",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8032953b222dc7a6e5d2",
          "headline": "Bill Gurley: 투자자들은 \"실제로 Anthropic을 소유하기 위해 애쓰지\" 않았습니다. 그것은 Amazon과 Alphabet의 문제입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795650186,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccb83e0bd6299a160bd26c2c7dab41080b62eb966bf96d125c76f3e43f010e28",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f68a2a1f4af6009d072d",
          "headline": "구글이 호주의 대규모 뉴스 거래에서 물러나면서 알파벳 주가가 급락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795626890,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e3cfa996ee24a054a8efadb4a54928eb459a3efbf4d78eb0abb2d78edc8e466",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8c6b85c4f2e5bb757f75",
          "headline": "시장 잡담: Google은 호주 미디어 자금 지원이 철회되는 가운데 ABC 거래를 종료합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795600108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f0cc25a87ab7c17dd1accb3cddb8d4ad5f17285420fa774a4314772550bb3f8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ee69f7e169e095a00d04",
          "headline": "Alphabet, 최대 인공지능 파트너 2곳에 2,510억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795591742,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f514bf23501c0e6ff9e5d689c788eac2f25c8bba676c8ea3b0e805f4db47489",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "644888c524bbe2e87062",
          "headline": "AI 우려 재부상? ORCL, GOOGL, SPCX, CRWV 신용 기본 스왑으로 NVDA, ANT Tumble으로 히트 기록 확산",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795589778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ac599c6404e881c0a4503e8042450bb20ce30c035d91e8b872505b947450078",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5079f362dad41ed30fc0",
          "headline": "귀하의 XLC $300,000는 메타와 알파벳으로 $130,206를 보유하고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795568646,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f2764349e8df4813ed5e5b28b83896a77d010bfcbfaa1cae24df10742250120a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ece45c107007ce09c442",
          "headline": "글로벌 신경 프로세서 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | NVIDIA, Apple, Alphabet 및 Intel Accelerate Edge AI로 CAGR 22.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99ecd98b1bdd47f6ad8586279612445a4ea947265f81931d52ff1e61c2c775c6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "66bcfd4195c99362577a",
          "headline": "글로벌 문서 협업 시장 보고서 2026: 2030년 규모, 점유율, 추세 및 예측 | Microsoft, Google, Adobe 및 Box를 통해 AI, 클라우드 및 보안 워크플로를 활용하세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff7c423c3e96ad7fd0dc54c6f8d8d63ad1d374f39150836d414d6bc9e0494c86",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8e0bfad2895dba91a11e",
          "headline": "억만장자 투자자 1명이 아마존, 메타, 알파벳에 30억 달러를 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795516502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25fb2922ee50e89e5904cde1880e4c22a733ce503eba07a5b5d3a92f34f25f3f",
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
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795650186,
      "signal": "중립·확인 대기",
      "netScore": 0.98,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.75,
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
          "score": -3.15,
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
          "eventId": "8032953b222dc7a6e5d2",
          "headline": "Bill Gurley: 투자자들은 \"실제로 Anthropic을 소유하기 위해 애쓰지\" 않았습니다. 그것은 Amazon과 Alphabet의 문제입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795650186,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccb83e0bd6299a160bd26c2c7dab41080b62eb966bf96d125c76f3e43f010e28",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "500da79913088ca631b2",
          "headline": "100만 개의 AI 위성을 궤도에 올리겠다는 머스크의 계획이 미국의 승인을 받았습니다. 아마존은 그것이 가능한지 질문합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795648590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1941f15a07a41c34a8084c1a2b761aff803fe78d8f61ebbbb01e846ba6c475a6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "78f8793ee3bd584a5b64",
          "headline": "아마존은 실제 할인이 아닌 블랙 프라이데이 제안으로 당신을 속이려고 한다고 엘리자베스 워렌이 말했습니다: 전자상거래 거대 기업이 반발",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795575357,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3eeb17ee22d7e3ff2c94d8ee8906e8faf828295a0b59ed82234bf3ab1be2aee",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "38fab0c8ec4be3e5a1ba",
          "headline": "Amazon, Nvidia에 도전하기 위해 75억 달러 규모의 AI 투자 추진",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795538535,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c106181f27b22d86feec4230720d0fcfd38ed81de2fa747ec1606b3560a6c9b4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "94e15d14ee61c4a9c026",
          "headline": "Amazon의 75억 달러 규모 Decart 기술 거래로 Wedbush의 칩 선택 사례 제공",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795538220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96fcd7edc3b7334aedd9595224573cff160f7fdfb3fbdc308d7581ce0e89303e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b4c898a7952be92e2290",
          "headline": "Amazon.com(AMZN)이 Decart AI 최적화 기술을 75억 달러에 인수하기로 합의했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795533107,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=529a67a14958d5dd8ee99ef0905fdcf1232f1f37ace2de44082daa67d69b88f7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8e0bfad2895dba91a11e",
          "headline": "억만장자 투자자 1명이 아마존, 메타, 알파벳에 30억 달러를 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795516502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25fb2922ee50e89e5904cde1880e4c22a733ce503eba07a5b5d3a92f34f25f3f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d039498fab611b522cc1",
          "headline": "트럼프, 해외 데이터센터에 '엄청난 세금' 부과 위협. 이는 마이크로소프트, 아마존, 알파벳에게 큰 문제이다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795515621,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1141281cff2f99fb759fbfcadf374188e918464420071aab5f5142490bfcb04",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "906d75b18c453b33c5f1",
          "headline": "Anthropic의 IPO 안전망이 사라졌습니다: Morgan Stanley는 \"더 이상\" 83달러 이하로 구매할 수 없습니다. 그것은 Amazon의 위험입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795513830,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5475d3f0b812fe9705178090c28b9734dd66668de81959ba1ae93577003a79f9",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795568646,
      "signal": "주의 강화",
      "netScore": -5.94,
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
          "eventId": "5079f362dad41ed30fc0",
          "headline": "귀하의 XLC $300,000는 메타와 알파벳으로 $130,206를 보유하고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795568646,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f2764349e8df4813ed5e5b28b83896a77d010bfcbfaa1cae24df10742250120a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "231c09090f3729b2ebdd",
          "headline": "AMD는 10% 하락, Nvidia는 칩 주식이 황 랠리를 반납하고 재판매 신고가 가중되면서 7% 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795533597,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9e6aa8e68ecdd7e8079fc72f960060d5bb0286e1d40461dd63e61d0d7c8a314",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5878ffe28716d861c04a",
          "headline": "Meta는 영국에서 Muse 개인 에이전트를 출시했지만 큰 경고가 따릅니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795533108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=976c6cf38f54207a805a6ea15dc92adfa139ae73ba54023d99ac09f01e98d5b0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8e0bfad2895dba91a11e",
          "headline": "억만장자 투자자 1명이 아마존, 메타, 알파벳에 30억 달러를 투자한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795516502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25fb2922ee50e89e5904cde1880e4c22a733ce503eba07a5b5d3a92f34f25f3f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5805d2b252fdcd5cf5fc",
          "headline": "Nvidia가 촉발한 랠리 이후 밤새 AMD 주가 하락: AMD는 OpenAI, Meta Warrants와 관련된 재판매를 위해 3억 3700만 주 등록",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795492068,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65b84ff5d824ba1bb5f8a8b11ce90a25daf9124937c7c86a0c8450b6953663bc",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a7a54099d51f21b930aa",
          "headline": "'그는 신이 아니다': 팔머 럭키(Palmer Luckey)가 페이스북 해고에 대해 공개하고 마크 주커버그와 여전히 거래를 하는 이유를 설명합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795483807,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=46d6aa5c127ed0bc92a4cd3a7e0d82a56653ab4a95a1f5103e78bf65c13b089e",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795697875,
      "signal": "중립·확인 대기",
      "netScore": 0.84,
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
          "score": -0.7,
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
          "eventId": "c0c59964d10b6a5b6c38",
          "headline": "Apple 임원이 사상 최고치보다 낮은 주가로 1,900만 달러 규모의 Apple 주식을 매각하겠다고 방금 신청했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795697875,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f0b2176c87cc2467f6a3be423a549dd918bd7cec8a863f6442c3787928cdaa3b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccfed0703d05cdbb6816",
          "headline": "Apple의 새로운 침묵은 당신이 걱정해야 한다는 것을 의미합니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795608473,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eba1b49b5b4d72a66eb80b07f4d21d59bd158c4a0865b46174f10a70e47b2f20",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ece45c107007ce09c442",
          "headline": "글로벌 신경 프로세서 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | NVIDIA, Apple, Alphabet 및 Intel Accelerate Edge AI로 CAGR 22.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99ecd98b1bdd47f6ad8586279612445a4ea947265f81931d52ff1e61c2c775c6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795693559,
      "signal": "주의 강화",
      "netScore": -7.0,
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
          "eventId": "31c3e7b6b6099ac7b563",
          "headline": "JPMorgan은 S&P가 Tesla-SpaceX 합병에 대한 규칙을 포기할 수 있다고 말했습니다. SpaceX 보유자에게는 좋은 소식입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795693559,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca7788213e9a1f61b0dd77cfccf3f504925b8609a8a56d277921da43433e570a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1289100cec301fe3df4c",
          "headline": "Cathie Wood는 Tesla 합병 협상 중에 SpaceX를 더 많이 구매합니다. Ron Baron은 SpaceX가 하나의 데이터 센터에서 연간 500억 달러를 벌 수 있다고 말했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795663955,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e20a1c6864b0638103683a558a2c7228a0744bf93030d68b2b61b1dbc26e5cd8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a24e38b8af1cd97db15c",
          "headline": "EU가 자율주행 소프트웨어에 대한 투표를 연기하면서 Tesla는 6% 하락했습니다. 리비안과 루시드 드롭 4%",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795622051,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f288f7f05044535871a8ec162d5f9a27236f09c26e30adb7f5b4ede486951ed5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bf42fdc6ca61a8787848",
          "headline": "Tesla와 SpaceX가 방금 3조 2천억 달러 규모의 합병을 위해 거래팀을 모았습니다. 투자자가 알아야 할 사항은 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795553995,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=84cab5d56e33ccf2917566fc40ded4f22140bdec50a467c2541d8a6b5baa3be0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7316d6024f002f6df99d",
          "headline": "Tesla와 SpaceX는 머스크에게 과반수 통제권을 부여할 수 있는 합병을 위해 거래 팀을 구성합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795531555,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9f5de9aed35522b805eec4c362b4673769714c57149068fa499331142b4bdddb",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795695305,
      "signal": "주의 강화",
      "netScore": -6.22,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.18,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.8,
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
          "eventId": "78b4293e28b885f5207e",
          "headline": "Tepper는 알파벳을 46%까지 줄이고 Micron과 Oracle을 지원하면서 Broadcom과 AMD를 제치고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795695305,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bdc426d908017f10bca2c77adfabda1a60a7364765a771393f3e9e5e31e66b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec9358c78f42c96283c1",
          "headline": "Bloom Energy는 Oracle 215만주를 발행했습니다. 이제 오라클의 신용이 깨지고 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795692926,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5cf2f4b5ff4ec31e779c49bc9412efece52ac42cad704f1508a011af50301117",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b6f94f45bf5ed8c67fda",
          "headline": "Amazon과 CoreWeave의 부채는 어떻게 되나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795691211,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2f04636a6c47fc970bd019c82066156744d22c84a8c1de6cd2e1e99b2b44b5b8",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "182ecd4bd643807cb193",
          "headline": "AI 클라우드 매도세가 심화되면서 Nebius는 12% 급락, Oracle은 8% 하락; IBM 2% 상승: IBM은 더 안전한 AI 플레이인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795625761,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=87d468dc76d07822bdf2bec8fd0a5e851f2f894174365b136e24b53f7e309707",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "644888c524bbe2e87062",
          "headline": "AI 우려 재부상? ORCL, GOOGL, SPCX, CRWV 신용 기본 스왑으로 NVDA, ANT Tumble으로 히트 기록 확산",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795589778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ac599c6404e881c0a4503e8042450bb20ce30c035d91e8b872505b947450078",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5edd34e13ff13b6b0049",
          "headline": "Oracle은 Microsoft의 레버리지가 높고 현금이 부족한 쌍둥이입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795535101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1aa587113643b358b8db9c27840c1dbfc0f65130a9f79cf1f1d6897750222acb",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fdcbd267b8b3d534a569",
          "headline": "Oracle은 Microsoft의 레버리지가 높고 현금이 부족한 쌍둥이입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795535101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1aa587113643b358b8db9c27840c1dbfc0f65130a9f79cf1f1d6897750222acb",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1795712422.46332,
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
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795614827,
      "signal": "주의 강화",
      "netScore": -2.67,
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
          "score": -2.27,
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
          "eventId": "5a2c7e82f587da9f2766",
          "headline": "Palantir의 CEO인 Alex Karp는 7,500만 달러를 매각했습니다. 공동 창업자 피터 틸(Peter Thiel), 1억 2200만 달러 매입",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795614827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7fcb3980de5f8ed26d011b8cb92d61ece7e5c8729ebc14b71d23ad96bb2519ce",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0cbeee52962c17aa1ecc",
          "headline": "Axon Enterprise vs. Palantir Technologies: 2027년에는 어떤 법 집행 기관 주식이 더 나은 구매입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795551602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=633a25b0d9127bec17a20e979a33c0d9ec2c52f43448722b297d87b3a189e6ac",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5fb2e5ae1081175bdfae",
          "headline": "AI 지원 전장 관리 및 의사결정 지원 시스템 글로벌 시장 보고서 2026 | Lockheed Martin, RTX, Palantir, 2030년까지 시장이 178억 8천만 달러에 도달함에 따라 Edge AI 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2fd92dcec9d54af17d9945fcc008a89c15bcd5c8ce1437622a4c5fe67b69806c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "01ce90514019d720352f",
          "headline": "Palantir: 매도 이후 적극 매수로 업그레이드하는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795498139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82678e0e21c4e19005257f0eefd037c992be2e3f381ac30df360d30494348c80",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "87bed95771709ef49cf6",
          "headline": "Palantir: 147.8%의 규칙은 주권 AI 성장 플라이휠을 강조합니다(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795488040,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6bff52794bfe6f3a673fa09818fd85cbc35c6bbdeaaa2dfec7fe55fda5cb6e1d",
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
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795693510,
      "signal": "우호적 변화",
      "netScore": 4.18,
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
          "score": 4.73,
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
          "eventId": "6bfbeb30f2033393e478",
          "headline": "'그것은 어디서 나올까?': Elon Musk는 Oracle이 언급한 대로 AI 기업에 수천억 달러의 운전 자본이 필요하다고 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795693510,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e059000bf0610d271662c6e6da88614c059a977e5c6af9c3caa941eef4e0101",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "08c9b0e7548b83f9f21e",
          "headline": "Kioxia와 NVIDIA가 SSD를 통해 효과적인 고대역폭 메모리 용량 확장을 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795666740,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4477e5e6603d215bdd29c214b86d6e011582231a752e552d2208785d3e37ae7e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a3605efe6f4a379d855e",
          "headline": "Nvidia의 시가총액은 Microsoft보다 낮습니다. 분석가는 NVDA 주식에 5가지 오버행이 있다고 지적합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795660782,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=93e694d0d5d96ee714e44261e18d84fe92e620d072c98af04c437fc031464488",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ada53346c8d7f3ded74b",
          "headline": "소매 투자자들이 SpaceX 이후 AMD 및 AI 인프라 주식을 주목하는 이유 위성 뉴스",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795659135,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=442e0173216e5623398d76d234b8bed3cc7fb6ba4864c58911444a33195f4caa",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "300ff1da3dfde2b67825",
          "headline": "S&P 500, Nasdaq은 하락 마감했지만 거래자가 AI에서 회전함에 따라 Dow는 반등했습니다 — NVDA, SPCX, PANW 초점",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795651790,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6dfdcab5190999e3b1cc53253d4a097aa42a9f3abc948ea292b3aea25e0ff60",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92ef8e4d3ae03cc9158b",
          "headline": "2 억만장자 펀드가 지난 분기에 AMD를 버렸습니다. 매도인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795646581,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=def680434403928ad4731c8de8094f5803e59a7a71323052b08ca43e9853b6d4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "1b606dd6beac9bd5ca79",
          "headline": "인상된 지침에는 GE Vernova 주식 투자자의 조치가 필요합니까?",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1795641065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95e0a15887cbba508fc760819b5fd476c8a302df1856f13496d88c54936527f4",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "7d7b64a5a048aa6d5139",
          "headline": "억만장자 브래드 거스트너(Brad Gerstner)의 고도계(Altimeter)가 6억 8천만 달러 규모의 Tesla 지분을 개설하고 Qualcomm 및 Applied Materials에서 퇴사",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795638121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8dddda9e784ea509d9f37136165d64d0c78e37e7811e2b73b98aa8e65a9423a5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "811fdbb7a8139f36c1ff",
          "headline": "SPYD와 SCHD는 Nvidia를 보유하지 않습니다. 포기한 것과 얻는 것은 다음과 같습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795629062,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=015e3475881621a1f894cbebf893166c1b4603ee153a144dd3e1cac9f9aa2e41",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "38a1d1477bc449e1b12f",
          "headline": "억만장자 스티븐 만델(Stephen Mandel)의 론 파인(Lone Pine)이 알파벳 지분을 901% 늘려 7억 4,300만 달러로 늘렸습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795626255,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f7451099374f3cf0717e3b1ccd4860bd91b8ac3caa0f0b356f4df8205f098f9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ccb6009c1950d321a97a",
          "headline": "트럼프는 엔비디아 지분을 인수하면서 떠돌았습니다. 인텔 스타일 거래의 가치는 3,800억 달러에 달할 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795623948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=68707db74465da173a9255dc6e23a776c886cdb67da9413c5d4df9887122ff2b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d4eeec0221a4d447e716",
          "headline": "매도에서 RSP가 SPY보다 더 나은 성능을 발휘합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795619320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=69ac0e310b3db78f05e898d7595b92019b015f98a4cdddf204658975c234fc7a",
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
      "unverifiedEvidenceCount": 55,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795695305,
      "signal": "우호적 변화",
      "netScore": 5.13,
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
          "score": -3.15,
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
          "eventId": "78b4293e28b885f5207e",
          "headline": "Tepper는 알파벳을 46%까지 줄이고 Micron과 Oracle을 지원하면서 Broadcom과 AMD를 제치고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795695305,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bdc426d908017f10bca2c77adfabda1a60a7364765a771393f3e9e5e31e66b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6bfbeb30f2033393e478",
          "headline": "'그것은 어디서 나올까?': Elon Musk는 Oracle이 언급한 대로 AI 기업에 수천억 달러의 운전 자본이 필요하다고 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795693510,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e059000bf0610d271662c6e6da88614c059a977e5c6af9c3caa941eef4e0101",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "78870d0ef302b719a327",
          "headline": "인텔에 대한 나쁜 소식: Dell은 기업들이 AI 서버를 위해 \"PC 구매를 연기\"하고 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795683021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf806c87bc09f123ed7e89090174206ef3f2ff7c28eeed0b167f418ebbe3d8a5",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ada53346c8d7f3ded74b",
          "headline": "소매 투자자들이 SpaceX 이후 AMD 및 AI 인프라 주식을 주목하는 이유 위성 뉴스",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795659135,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=442e0173216e5623398d76d234b8bed3cc7fb6ba4864c58911444a33195f4caa",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "14c50d74359d491630c6",
          "headline": "대형 AI 구매자는 두 번째 소스를 원합니다. AMD(AMD)인가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795654562,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=386a5a97e9cde7407e154a7f4ac01e84d15d15b708941326f8a277c6694fb8da",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "06fdfa59d5b78a788ac8",
          "headline": "Altimeter의 Brad Gerstner는 Nvidia가 \"2028년과 2029년에 마이너스 성장\"으로 가격이 책정되었다고 말했습니다. 월스트리트는 29%를 예상한다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795649942,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d770f4fdc86e5b30c9d3d6a4d9cf85135d8e263481f11187b0825a7388865971",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92ef8e4d3ae03cc9158b",
          "headline": "2 억만장자 펀드가 지난 분기에 AMD를 버렸습니다. 매도인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795646581,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=def680434403928ad4731c8de8094f5803e59a7a71323052b08ca43e9853b6d4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1b606dd6beac9bd5ca79",
          "headline": "인상된 지침에는 GE Vernova 주식 투자자의 조치가 필요합니까?",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1795641065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95e0a15887cbba508fc760819b5fd476c8a302df1856f13496d88c54936527f4",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7d7b64a5a048aa6d5139",
          "headline": "억만장자 브래드 거스트너(Brad Gerstner)의 고도계(Altimeter)가 6억 8천만 달러 규모의 Tesla 지분을 개설하고 Qualcomm 및 Applied Materials에서 퇴사",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795638121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8dddda9e784ea509d9f37136165d64d0c78e37e7811e2b73b98aa8e65a9423a5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "38a1d1477bc449e1b12f",
          "headline": "억만장자 스티븐 만델(Stephen Mandel)의 론 파인(Lone Pine)이 알파벳 지분을 901% 늘려 7억 4,300만 달러로 늘렸습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795626255,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f7451099374f3cf0717e3b1ccd4860bd91b8ac3caa0f0b356f4df8205f098f9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ea6f7b04320358249fb2",
          "headline": "Modine Manufacturing은 2029년까지 데이터 센터 매출 최대 65억 달러 목표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795612374,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=404300b53da3a36435d95b25f7348d0dca38e9dfa908f8cc04459a65ebd9aba9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "dbfa4d6b58836c782ba1",
          "headline": "2026년 전망을 높이려면 Quanta Services(PWR) 투자자의 조치가 필요합니까?",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1795608850,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f40f75158dd96aaf1e4908e4b795eeacce93124e604efcb409e416fca7b3871",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 35,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795695305,
      "signal": "주의 강화",
      "netScore": -9.8,
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
          "score": -3.85,
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
          "eventId": "78b4293e28b885f5207e",
          "headline": "Tepper는 알파벳을 46%까지 줄이고 Micron과 Oracle을 지원하면서 Broadcom과 AMD를 제치고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795695305,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bdc426d908017f10bca2c77adfabda1a60a7364765a771393f3e9e5e31e66b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "89d131430a6e6b0016b6",
          "headline": "Google이 TPU 주문을 삭감한 것으로 알려지자 Broadcom은 일주일 만에 15% 하락하여 52주 최저치를 기록했습니다. 판매가 과도합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795681834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9f3e25b8b6dc31052278b99a543bbc59832541a1aad00ce40a8ece1e6c868983",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a138c2896cea0d6fe105",
          "headline": "Broadcom: 시장에서 판매가 잘못된 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795658620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc248dc804f8a89f5070370cb339d0208eedbd91657c66fdf0d643786c6e7967",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d45925d827ca658e8618",
          "headline": "Broadcom은 10억 달러 상당의 Anthropic IPO를 매입했으며 그 성공에 수백억 달러를 더 투자했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795605602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f551b24ccd3b89b1384abd08dc9232c219cc9822c91e2d765f25591009dcbfe",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "07f101f0724707f5284f",
          "headline": "억만장자 David Tepper는 AMD와 Broadcom에 대한 Appaloosa의 지분을 버리고 44배의 조정 EPS로 인공 지능(AI) 주식 거래에 투자했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795599602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=34ccafa095a063c896ae462a37d15bf60ff3e11df8943bfce28ccef52dd83158",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f76f73eb2538dbafe478",
          "headline": "ASML, 칩 대패 속에 시장 전 하락: 네덜란드 국회의원들이 미국의 중국 판매 억제 제안을 철회",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795598735,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c5acd245466d1fb279b14a316ff44629d9539c761e6cdc584594b7e30ded8983",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6c7a6c9f17e60787a68f",
          "headline": "TrendForce가 DRAM 가격 예측을 낮춘 후 MU, SKHY, SNDK 주식에 주목",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795595230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=873869e31a8598101fc396de900f98666b3bf5bf205776772350af4d0d7bc751",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "644888c524bbe2e87062",
          "headline": "AI 우려 재부상? ORCL, GOOGL, SPCX, CRWV 신용 기본 스왑으로 NVDA, ANT Tumble으로 히트 기록 확산",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795589778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ac599c6404e881c0a4503e8042450bb20ce30c035d91e8b872505b947450078",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "00cf356dd99c1df528c3",
          "headline": "Nvidia가 주도하는 AI 랠리 이후 COHR 주가 변동: 1,500만 달러 규모의 내부자 매수로 주목",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795581637,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0500c32fdfaebd4176969edc06743f868ead5d6c1243cf48a90766d4e792d6c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "446c2a90ec54e2666501",
          "headline": "Jensen Huang이 CEO로 돌아왔음에도 불구하고 Nvidia는 최고치에서 31% 하락했고 Broadcom은 35% 하락했습니다. 여기 Better Buy Now가 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795537322,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ea5fc474349c211bef9ed84d57f98dee7b14e423e5331cadaadafb835c9f813",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795625521,
      "signal": "우호적 변화",
      "netScore": 2.93,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.75,
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
          "score": -0.35,
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
          "eventId": "6a9336f3adb70a834350",
          "headline": "Broadcom vs. Qualcomm: 2027년에는 어느 기술 주식이 더 나은 매수인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795625521,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6960670cbd9919810b2d46f8eca3172bba29c3e10e134a3310abd3c9a3035d9e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "496d55db5cad07e9572f",
          "headline": "예측: Qualcomm은 2027년 최고의 자동차 칩 제조업체가 됩니다. SemiAnalytics에서는 \"시장이 조용히 무시해 온 이야기\"입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795615557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=259c522c58ecf2dd72da051301046d2483ef1ece7b9ad7adb11e94817e309820",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "자동차 고객·설계 채택 확대 가능성"
        },
        {
          "eventId": "c13ec16edfa36a2da2f3",
          "headline": "Qualcomm 주식이 지금 보이는 것만큼 저렴합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795542560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=421948667af23b68825bdf03c53b4d9880999e5b7caaa0eb2034eb53def59f31",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7d419f006a33477fae38",
          "headline": "임베디드 마이크로프로세서 유닛(MPU) 글로벌 시장 보고서 2026 | NVIDIA, Intel, Qualcomm, NXP 및 Renesas를 통해 Edge AI 및 IoT 성장을 활용하여 2030년까지 591억 8천만 달러 규모로 성장",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2669220dd9cb4a8ab8dc7a928c0217a35a81c8f6669ff6751ecd5fd06a950683",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1795712422.46332,
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
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795595940,
      "signal": "주의 강화",
      "netScore": -8.81,
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
          "eventId": "415c20bce74a85359592",
          "headline": "Lumentum은 역대 최고의 분기에도 불구하고 10월 28일 이후 42% 손실을 입었습니다. Marvell의 주식이 중요한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795595940,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=04c52ff729eaf3f8784c59c7ddccc040d3a13d1cca6adb44e8e2ca06be51cddf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "34d6ae1711a6c04830a5",
          "headline": "Stephanie Link는 Marvell이 2031년까지 주당 30달러를 벌 수 있다고 말했습니다. 그녀의 말이 맞나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795558073,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab77a10b151f09ce79026aae903aebe9440ff11260eb8efa36ce9f47eef12ded",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6658530ab24f0e21a2ff",
          "headline": "오늘 Marvell Technology 주식이 5% 하락하는 이유는 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795528016,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce8ec9751785327fb3598d8bdf03173994f07289f91e2c4cf26399b2dd0f5a59",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d5e70b8655ac70bdaf7e",
          "headline": "월스트리트의 새로운 M&A 분위기: Marvell-Lumentum과 CrowdStrike-Zscaler가 모두 반발하는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795527912,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65e20a886059b73e6edf4251bb4f1a4ed48b6f23a839071cf2139c331de95fb7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795623948,
      "signal": "중립·확인 대기",
      "netScore": 1.82,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.75,
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
          "score": 1.23,
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
          "eventId": "ccb6009c1950d321a97a",
          "headline": "트럼프는 엔비디아 지분을 인수하면서 떠돌았습니다. 인텔 스타일 거래의 가치는 3,800억 달러에 달할 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795623948,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=68707db74465da173a9255dc6e23a776c886cdb67da9413c5d4df9887122ff2b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "07f101f0724707f5284f",
          "headline": "억만장자 David Tepper는 AMD와 Broadcom에 대한 Appaloosa의 지분을 버리고 44배의 조정 EPS로 인공 지능(AI) 주식 거래에 투자했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795599602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=34ccafa095a063c896ae462a37d15bf60ff3e11df8943bfce28ccef52dd83158",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee69f7e169e095a00d04",
          "headline": "Alphabet, 최대 인공지능 파트너 2곳에 2,510억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795591742,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7f514bf23501c0e6ff9e5d689c788eac2f25c8bba676c8ea3b0e805f4db47489",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7acc1b767d2d9dcd4f3c",
          "headline": "어플라이드 머티어리얼즈 vs. 인텔: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795549802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0bfe8206232df7e673ddff8c19707e6a1bbb8633aeca76ed1d889864f0fcb2fb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ece45c107007ce09c442",
          "headline": "글로벌 신경 프로세서 시장 보고서 2026: 규모, 점유율, 추세 및 2030년 예측 | NVIDIA, Apple, Alphabet 및 Intel Accelerate Edge AI로 CAGR 22.2% 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795531260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99ecd98b1bdd47f6ad8586279612445a4ea947265f81931d52ff1e61c2c775c6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7d419f006a33477fae38",
          "headline": "임베디드 마이크로프로세서 유닛(MPU) 글로벌 시장 보고서 2026 | NVIDIA, Intel, Qualcomm, NXP 및 Renesas를 통해 Edge AI 및 IoT 성장을 활용하여 2030년까지 591억 8천만 달러 규모로 성장",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795530960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2669220dd9cb4a8ab8dc7a928c0217a35a81c8f6669ff6751ecd5fd06a950683",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cc94730914e7701ad7d4",
          "headline": "TSMC: AI 시장 패닉을 두 배로 늘릴 놀라운 기회",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795519800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=583080a066d9daca735474eb2e32bb107e356985b283e63921a2c4a4db5d0cf7",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795649942,
      "signal": "주의 강화",
      "netScore": -3.07,
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
          "eventId": "06fdfa59d5b78a788ac8",
          "headline": "Altimeter의 Brad Gerstner는 Nvidia가 \"2028년과 2029년에 마이너스 성장\"으로 가격이 책정되었다고 말했습니다. 월스트리트는 29%를 예상한다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795649942,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d770f4fdc86e5b30c9d3d6a4d9cf85135d8e263481f11187b0825a7388865971",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e87aa8a72970d84de809",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1795532400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000807/tsm-dividendadjustmentx202.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "8760add990a0a8927669",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1795532400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000805/tsm-monthend6kx20261125.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "cc94730914e7701ad7d4",
          "headline": "TSMC: AI 시장 패닉을 두 배로 늘릴 놀라운 기회",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795519800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=583080a066d9daca735474eb2e32bb107e356985b283e63921a2c4a4db5d0cf7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "59c9a14cc526fb6c3ad0",
          "headline": "Jensen Huang이 Nvidia CEO로 복귀함에 따라 TSMC는 하루 만에 1,580억 달러의 가치를 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795503956,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ebb99a0a01e92c8006406a376f7ee95adea9f6bae8a8e570e9666c9af8d273f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795637700,
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
          "eventId": "50e68a9cecf136e4d3b2",
          "headline": "ASML Holding (ENXTAM:ASML), 새로운 미국 중국 칩 규제에 대한 네덜란드의 반발에 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795637700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12f26563f8ad5dfa1114107c9fe813cd1f59b714e41be0ab0e833f048d1c0764",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1de86ebdb81fd97ee8d1",
          "headline": "네덜란드 국회의원이 MATCH 법안이 \"ASML에 재앙\"이라고 경고함에 따라 ASML은 칩 라우팅에서 6% 하락했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795626676,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=768a04695b8a6583ebe218ed2939e17d0a3c811e47db4f278a9aa07c23e76317",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "72876ccff2017a3a561b",
          "headline": "ASML에 '재앙': 네덜란드 국회의원들이 중국 칩 규제를 강화하려는 미국의 추진에 반발",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795588950,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=679a0d0c5237dfdfb27ade814b5b92a5411bf5e166193037731cf64b72642a20",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795654402,
      "signal": "중립·확인 대기",
      "netScore": 0.57,
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
          "eventId": "d740df005a99ee1db247",
          "headline": "Applied Materials(AMAT)는 거의 모든 Fab에 공급합니다. 그것으로 충분합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795654402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dce155d86f3bc1e10325489775dc75a0d77660cc5907fcc95f962795388d027d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7156435b03b6bbe65d4f",
          "headline": "Applied Materials는 중국 칩 억제로 장비 주가가 하락함에 따라 UBS의 575달러 목표에도 불구하고 6% 하락했습니다. Lam Research 7% 하락, KLA Edges 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795637384,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7382695e2801a77c6f2041556316435c416f7a219011c7495d5733cf9df6e118",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6510334490ba54828b57",
          "headline": "오늘 Applied Materials(AMAT) 재고가 하락한 이유는 무엇입니까? 칩 매도 드래그 공급자",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795553209,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18564793c25b019fb6f8a2ac56cd0784354096225d3dda645f37f38b89dd99e8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7acc1b767d2d9dcd4f3c",
          "headline": "어플라이드 머티어리얼즈 vs. 인텔: 2027년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795549802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0bfe8206232df7e673ddff8c19707e6a1bbb8633aeca76ed1d889864f0fcb2fb",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795680409,
      "signal": "중립·확인 대기",
      "netScore": -1.68,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "527c8203e273d932b8ea",
          "headline": "Lam Research: 더 저렴하지만 저렴하지는 않습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795680409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38b06e49842fe2035f0bcacf7b6e41d6b85a8e1416176cd4d9e9db2395451692",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "16ce1f63f06bcf8d1a6d",
          "headline": "Lam Research: 가격이 이야기를 사로잡았습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795650362,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ba9fccba661ffe23097ee801713a885798837c9a466f84bb06610bd4a142ea7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "88f6ad09082576b95068",
          "headline": "Lam Research: 여러분이 보게 될 최고의 블랙 프라이데이 특가 중 하나",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795642065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d3a2f0296e295db6eaa187f9095e6c157f0befe755d509b3b2ccbf44fbfcfbb",
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
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795637384,
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
          "eventId": "7156435b03b6bbe65d4f",
          "headline": "Applied Materials는 중국 칩 억제로 장비 주가가 하락함에 따라 UBS의 575달러 목표에도 불구하고 6% 하락했습니다. Lam Research 7% 하락, KLA Edges 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795637384,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7382695e2801a77c6f2041556316435c416f7a219011c7495d5733cf9df6e118",
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
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795695305,
      "signal": "우호적 변화",
      "netScore": 7.06,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
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
          "eventId": "78b4293e28b885f5207e",
          "headline": "Tepper는 알파벳을 46%까지 줄이고 Micron과 Oracle을 지원하면서 Broadcom과 AMD를 제치고",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795695305,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bdc426d908017f10bca2c77adfabda1a60a7364765a771393f3e9e5e31e66b7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6bfbeb30f2033393e478",
          "headline": "'그것은 어디서 나올까?': Elon Musk는 Oracle이 언급한 대로 AI 기업에 수천억 달러의 운전 자본이 필요하다고 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795693510,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e059000bf0610d271662c6e6da88614c059a977e5c6af9c3caa941eef4e0101",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ada53346c8d7f3ded74b",
          "headline": "소매 투자자들이 SpaceX 이후 AMD 및 AI 인프라 주식을 주목하는 이유 위성 뉴스",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795659135,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=442e0173216e5623398d76d234b8bed3cc7fb6ba4864c58911444a33195f4caa",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "92ef8e4d3ae03cc9158b",
          "headline": "2 억만장자 펀드가 지난 분기에 AMD를 버렸습니다. 매도인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795646581,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=def680434403928ad4731c8de8094f5803e59a7a71323052b08ca43e9853b6d4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "1b606dd6beac9bd5ca79",
          "headline": "인상된 지침에는 GE Vernova 주식 투자자의 조치가 필요합니까?",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1795641065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95e0a15887cbba508fc760819b5fd476c8a302df1856f13496d88c54936527f4",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7d7b64a5a048aa6d5139",
          "headline": "억만장자 브래드 거스트너(Brad Gerstner)의 고도계(Altimeter)가 6억 8천만 달러 규모의 Tesla 지분을 개설하고 Qualcomm 및 Applied Materials에서 퇴사",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795638121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8dddda9e784ea509d9f37136165d64d0c78e37e7811e2b73b98aa8e65a9423a5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "38a1d1477bc449e1b12f",
          "headline": "억만장자 스티븐 만델(Stephen Mandel)의 론 파인(Lone Pine)이 알파벳 지분을 901% 늘려 7억 4,300만 달러로 늘렸습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795626255,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f7451099374f3cf0717e3b1ccd4860bd91b8ac3caa0f0b356f4df8205f098f9b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ea6f7b04320358249fb2",
          "headline": "Modine Manufacturing은 2029년까지 데이터 센터 매출 최대 65억 달러 목표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795612374,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=404300b53da3a36435d95b25f7348d0dca38e9dfa908f8cc04459a65ebd9aba9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "dbfa4d6b58836c782ba1",
          "headline": "2026년 전망을 높이려면 Quanta Services(PWR) 투자자의 조치가 필요합니까?",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1795608850,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f40f75158dd96aaf1e4908e4b795eeacce93124e604efcb409e416fca7b3871",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "527e19fa80620c23c9fa",
          "headline": "마이크론의 기록적인 마진이 애플과 HP를 압박하고 있는가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795606689,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1b1347717473954d72a1c240dca993d9ce2cc8da2fbe7f9b4bb49004b4512f49",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "07f101f0724707f5284f",
          "headline": "억만장자 David Tepper는 AMD와 Broadcom에 대한 Appaloosa의 지분을 버리고 44배의 조정 EPS로 인공 지능(AI) 주식 거래에 투자했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795599602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=34ccafa095a063c896ae462a37d15bf60ff3e11df8943bfce28ccef52dd83158",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "6c7a6c9f17e60787a68f",
          "headline": "TrendForce가 DRAM 가격 예측을 낮춘 후 MU, SKHY, SNDK 주식에 주목",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795595230,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=873869e31a8598101fc396de900f98666b3bf5bf205776772350af4d0d7bc751",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 36,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795641602,
      "signal": "주의 강화",
      "netScore": -5.23,
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
          "eventId": "2230c71ec90bbab80f01",
          "headline": "Qualcomm vs. Sandisk: 2027년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795641602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b6236334201c9643249d124aa4570edf40accf5cced23e6434560b08e8a94307",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6162d1827a5758f48a07",
          "headline": "Sandisk 대 Western Digital: 2027년에는 어떤 컴퓨터 드라이브 주식이 더 나은 구매입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795627142,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9a3524348fd19abc99596758d1444285e82e053e19f7104939db9f2f5ea8225",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "674d3e0c1a03d92f7041",
          "headline": "AI 매각이 심화되고 EU가 FSD 승인을 지연함에 따라 Tesla는 5% 하락, Sandisk는 13% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795624301,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=92f351eadad0432cc90d3b37f23e944b7e27bd16708e901c04486fc6938c6efe",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e07b80ee5ffb84b2ed82",
          "headline": "Micron vs. Sandisk: 어느 AI 메모리 주식이 더 나은 구매인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795551902,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=82856c1659dbc51bf1a6ace1a66150e39e201307be765fdf2d177f3b15aa697d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9b8c094d96125a59be06",
          "headline": "메모리 주식이 Nvidia의 황 랠리를 되돌리면서 Sandisk는 14% 하락했습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1795535308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e807449de607bb7c06ec05d29cf2131ca53dea8b14e876b86b171800331f2375",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795627142,
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
          "eventId": "6162d1827a5758f48a07",
          "headline": "Sandisk 대 Western Digital: 2027년에는 어떤 컴퓨터 드라이브 주식이 더 나은 구매입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1795627142,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9a3524348fd19abc99596758d1444285e82e053e19f7104939db9f2f5ea8225",
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
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1795712422.46332,
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
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795620532,
      "signal": "주의 강화",
      "netScore": -2.44,
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
          "score": -1.57,
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
          "eventId": "734651265c22d48a641f",
          "headline": "코히런트 이사는 주가가 13% 급락하면서 1,500만 달러 상당의 주식을 매입했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795620532,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=60663571b33fa02861fff0a68fc1771926c5edd3a4493926e910766d1ca811ff",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c6936b6b1f27f21d50d7",
          "headline": "Nvidia가 주도하는 AI 랠리 이후 COHR 주가 변동: 1,500만 달러 규모의 내부자 매수로 주목",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795581637,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0500c32fdfaebd4176969edc06743f868ead5d6c1243cf48a90766d4e792d6c",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "00cf356dd99c1df528c3",
          "headline": "Nvidia가 주도하는 AI 랠리 이후 COHR 주가 변동: 1,500만 달러 규모의 내부자 매수로 주목",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795581637,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0500c32fdfaebd4176969edc06743f868ead5d6c1243cf48a90766d4e792d6c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5281c3c66340586905f2",
          "headline": "Applied Optoelectronics는 22억 달러 규모의 하이퍼스케일러 공급 거래로 5% 상승; Lumentum 및 Coherent Drop 6%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795532304,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=279feed7f8e83c0bab8dca5730281447f596e24431227f8e50ac870e7ae96808",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795681663,
      "signal": "주의 강화",
      "netScore": -8.4,
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
          "eventId": "997a9bf532496c63c714",
          "headline": "Lumentum은 AI 주가 하락으로 일주일 만에 14% 하락했지만 CEO는 \"우리는 둔화를 보지 못했다\"고 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795681663,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=79733b3fe30ffb3b3000e0713f8043abdba8bc82becd03b538c4d3f202f6cc59",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "415c20bce74a85359592",
          "headline": "Lumentum은 역대 최고의 분기에도 불구하고 10월 28일 이후 42% 손실을 입었습니다. Marvell의 주식이 중요한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795595940,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=04c52ff729eaf3f8784c59c7ddccc040d3a13d1cca6adb44e8e2ca06be51cddf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5281c3c66340586905f2",
          "headline": "Applied Optoelectronics는 22억 달러 규모의 하이퍼스케일러 공급 거래로 5% 상승; Lumentum 및 Coherent Drop 6%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795532304,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=279feed7f8e83c0bab8dca5730281447f596e24431227f8e50ac870e7ae96808",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d5e70b8655ac70bdaf7e",
          "headline": "월스트리트의 새로운 M&A 분위기: Marvell-Lumentum과 CrowdStrike-Zscaler가 모두 반발하는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795527912,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65e20a886059b73e6edf4251bb4f1a4ed48b6f23a839071cf2139c331de95fb7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795641065,
      "signal": "우호적 변화",
      "netScore": 3.14,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.75,
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
          "eventId": "1b606dd6beac9bd5ca79",
          "headline": "인상된 지침에는 GE Vernova 주식 투자자의 조치가 필요합니까?",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1795641065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95e0a15887cbba508fc760819b5fd476c8a302df1856f13496d88c54936527f4",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4abbf15156f71bb2a08b",
          "headline": "GE Vernova의 트렌치 거래가 전기화 성장을 가속화할 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795604040,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6215b1b0347514d3f01768e2e9ea6f00e17366b6c839f3ad788b6dd0ad516f36",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "df3d1cfedba93fdcba55",
          "headline": "Vertiv는 한 달 만에 11% 손실을 입었습니다. Evercore는 목표를 줄였지만 여전히 58%의 상승 여력을 갖고 있습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795597461,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0348af3dba6c79c14a8c5fac49f52ec816486216ca8489e76a07eaa15345d953",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795626110,
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
          "eventId": "b703b5d03f9400e5bd15",
          "headline": "Vistra가 1년 동안 하락했습니다: Morgan Stanley가 여전히 82%의 상승 여력을 보이는 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1795626110,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f62b5f7f692a5b5fe8ef1644ab71dc22abcc94f68c6d72743d7a716a6265dc3",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795543525,
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
          "eventId": "cf2517d2cbd0f8a6fc58",
          "headline": "Vistra Stock의 이야기는 어떻게 바뀌었나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1795543525,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c77d71095aca3b50b7c14c7b4f3159fda74cee49350e520cb2d1e5e3cfd38c3c",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795579958,
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
          "eventId": "283ecd5e02cebbac8366",
          "headline": "Dana, Eaton Mobility 거래를 통해 2억 5천만 달러 절감 목표, 2027년 마감 예상",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1795579958,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=781759566c4c99dbb6ee7aca972c0ad86e7320ad055146e0325f0f66f4730079",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795608850,
      "signal": "중립·확인 대기",
      "netScore": 1.4,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
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
          "eventId": "dbfa4d6b58836c782ba1",
          "headline": "2026년 전망을 높이려면 Quanta Services(PWR) 투자자의 조치가 필요합니까?",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1795608850,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f40f75158dd96aaf1e4908e4b795eeacce93124e604efcb409e416fca7b3871",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
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
      "updatedAt": 1795712422.46332,
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
      "updatedAt": 1795712422.46332,
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
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795612374,
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
          "eventId": "ea6f7b04320358249fb2",
          "headline": "Modine Manufacturing은 2029년까지 데이터 센터 매출 최대 65억 달러 목표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795612374,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=404300b53da3a36435d95b25f7348d0dca38e9dfa908f8cc04459a65ebd9aba9",
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
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795624301,
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
          "score": -1.05,
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
          "eventId": "674d3e0c1a03d92f7041",
          "headline": "AI 매각이 심화되고 EU가 FSD 승인을 지연함에 따라 Tesla는 5% 하락, Sandisk는 13% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1795624301,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=92f351eadad0432cc90d3b37f23e944b7e27bd16708e901c04486fc6938c6efe",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4435bec3fb9a7a06053c",
          "headline": "예측: Seagate의 기록적인 수익성은 시작일 뿐이며 앞으로 27% 상승 여력이 있을 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1795609034,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=75c78e6926208a4d1f20340377d6b3988adc734769e7d5b633635064452deb7d",
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
      "updatedAt": 1795712422.46332,
      "dataAsOf": 1795570789,
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
          "eventId": "65aff63beabcb7014309",
          "headline": "EMCOR 그룹: 탁월한 마진은 영원히 지속되지 않을 수 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1795570789,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a614dfc6c13d7cf7654134ce1aa5d35e1556eb11653aad40bbafe32180b73d6b",
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
    "FIX": {
      "ticker": "FIX",
      "updatedAt": 1795712422.46332,
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
      "updatedAt": 1795712422.46332,
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
