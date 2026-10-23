// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792761410.2037323,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792608719,
      "signal": "중립·확인 대기",
      "netScore": -1.04,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792724820,
      "signal": "주의 강화",
      "netScore": -3.21,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.53,
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
          "score": -2.27,
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
          "eventId": "0bae6ef2017d9db452b1",
          "headline": "구글의 AI 칩은 750억 달러 규모의 사업이 될 수 있다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792724820,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a66362dbb043c2a4c05a77ab0bd4e74d737a875a4553ea7aa2a52322bff40291",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3722b7360694233e6653",
          "headline": "Google은 컴퓨팅을 위해 SpaceX에 연간 110억 달러를 지불하고 있습니다. 아무도 가격을 책정하지 않는 집중 위험은 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792699800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ea940cce4c769226bc004eef1d6ce0b25762f1748ff1989c83ce7075c3bd518",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792742448,
      "signal": "주의 강화",
      "netScore": -5.52,
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
          "eventId": "788cabfcefef0e4cbe86",
          "headline": "Amazon 주식에 어떤 문제가 발생할 수 있나요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792742448,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=159a0e936032fb8049c2cbee82ce1c1eea7b2e67f320f7c6fd3c3cce09ce525f",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792750428,
      "signal": "중립·확인 대기",
      "netScore": -1.54,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "1dbb3d9feb5257d03a76",
          "headline": "Nasdaq, Dow, S&P 500 선물 하락 프리마켓: NVDA, AMD, META, CRWV, MRNA, WDC, BE In Focus",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792750428,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5922972d586f65fcf83214c46c06e90ef1c3a8fbb7f6857fb86f2fb48028df32",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "09dac6ae38cb6af975ac",
          "headline": "Meta에 대한 통제력을 잃지 않고 캘리포니아가 제안한 억만장자 세금을 납부하려는 Mark Zuckerberg의 창의적인 계획",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792713041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ac573909bbfe809bec722908ab64fed05966f09641f7ad568010f6d1a681755",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e83e74b5cf404f6c0e33",
          "headline": "Meta가 억만장자 세금 부과에도 불구하고 Mark Zuckerberg를 캘리포니아에 유지하기로 계약을 체결한 방법",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792701881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09de2531fff485dc12f816084bb0e8898d1a47852f2596aba12c175ced03af14",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792701125,
      "signal": "주의 강화",
      "netScore": -4.98,
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
          "eventId": "069ca67e5f81e5ea6610",
          "headline": "애플은 아이폰 듀오 목표를 44% 높인 것으로 알려졌다. 11월 2일에 보여줄 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792701125,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4fe983b29a7fa808125e898fb5812a9bb07bb8e5b67c2d399786bc6e494da761",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792684537,
      "signal": "주의 강화",
      "netScore": -7.97,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.45,
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
          "score": -2.97,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792680578,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792706659,
      "signal": "주의 강화",
      "netScore": -2.79,
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
          "eventId": "96d2e0f3fb7f1bc32ecf",
          "headline": "세일즈포스(Salesforce), 브레이즈(Braze)를 56억 6천만 달러에 인수, 실시간 AI 마케팅에 큰 투자",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792706659,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74e124eda8c1df35aebf0bb40906effc59c72eaac163cc4776960e0249dfd754",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792601708,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792750428,
      "signal": "우호적 변화",
      "netScore": 5.21,
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
          "score": -2.8,
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
          "eventId": "1dbb3d9feb5257d03a76",
          "headline": "Nasdaq, Dow, S&P 500 선물 하락 프리마켓: NVDA, AMD, META, CRWV, MRNA, WDC, BE In Focus",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792750428,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5922972d586f65fcf83214c46c06e90ef1c3a8fbb7f6857fb86f2fb48028df32",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f4a5ef095d46406452c2",
          "headline": "Pony.ai는 inDrive, Nvidia와 협력하여 카자흐스탄에서 로봇택시를 출시합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792731936,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=239dd7672cdf9232ab33770b37bfa17bcb46bc4fe537a7f8d5d1e97d19829006",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0bae6ef2017d9db452b1",
          "headline": "구글의 AI 칩은 750억 달러 규모의 사업이 될 수 있다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792724820,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a66362dbb043c2a4c05a77ab0bd4e74d737a875a4553ea7aa2a52322bff40291",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "36ba6440b6419c9945aa",
          "headline": "Zscaler(ZS)의 Nvidia AI 보안 제휴로 투자 스토리가 어떻게 바뀌었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792721988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=405ee119ee20a571f786eeb53334f19741e04d448b7abea95e8ab38e05407de4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "09dac6ae38cb6af975ac",
          "headline": "Meta에 대한 통제력을 잃지 않고 캘리포니아가 제안한 억만장자 세금을 납부하려는 Mark Zuckerberg의 창의적인 계획",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792713041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ac573909bbfe809bec722908ab64fed05966f09641f7ad568010f6d1a681755",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "586304bb5881bae4c426",
          "headline": "TD Cowen이 Nvidia 지원 가능성을 밝혔음에도 불구하고 Oracle은 2026년에 3분의 1 이상 하락했습니다. 2031년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792698907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12ce660f13f73a5285b9ac629476dd020f82c7d61ef072ae0194c8fe1adfab90",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "74a1bd8462f125678ce0",
          "headline": "GE Vernova는 Meta의 지출 전망으로 인해 AI 파이낸싱에 대한 우려가 커지면서 11% 급락했습니다. Vertiv Holdings 하락 7%, Eaton 하락 6%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792694380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25ff6ac0db9451ddb385916b421d330e512ea445530eb263ac90f7f2edd2963a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "fecc0baa58060faedaa7",
          "headline": "AI 에이전트에 CPU가 필요한 이유는 무엇입니까? Nvidia가 AMD와 Intel이 지배하는 비즈니스에 참여하기를 원하는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792693500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=880f03ba7e81048e0aebf80b9e558d26a95dadedeeeb78a657d262fb3ef5dfaa",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "eventId": "fb1365d21adb17220a51",
          "headline": "MRVL, AI 인프라 성장 활용: 투자자를 위한 다음 단계는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792677180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=684a46bcd007305ce6429ab78c1b5f587c61fe7f85c239fac32026fb12dffe89",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 22,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792750428,
      "signal": "우호적 변화",
      "netScore": 6.08,
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
          "eventId": "1dbb3d9feb5257d03a76",
          "headline": "Nasdaq, Dow, S&P 500 선물 하락 프리마켓: NVDA, AMD, META, CRWV, MRNA, WDC, BE In Focus",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792750428,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5922972d586f65fcf83214c46c06e90ef1c3a8fbb7f6857fb86f2fb48028df32",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0bae6ef2017d9db452b1",
          "headline": "구글의 AI 칩은 750억 달러 규모의 사업이 될 수 있다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792724820,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a66362dbb043c2a4c05a77ab0bd4e74d737a875a4553ea7aa2a52322bff40291",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "36ba6440b6419c9945aa",
          "headline": "Zscaler(ZS)의 Nvidia AI 보안 제휴로 투자 스토리가 어떻게 바뀌었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792721988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=405ee119ee20a571f786eeb53334f19741e04d448b7abea95e8ab38e05407de4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "09dac6ae38cb6af975ac",
          "headline": "Meta에 대한 통제력을 잃지 않고 캘리포니아가 제안한 억만장자 세금을 납부하려는 Mark Zuckerberg의 창의적인 계획",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792713041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ac573909bbfe809bec722908ab64fed05966f09641f7ad568010f6d1a681755",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c5cb5c6f14bbe92ff27d",
          "headline": "NVT(nVent Electric)가 AMD AI 데이터 센터 냉각 거래에서 저평가되어 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792707335,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a29042cfb6f143aad3031c76ae37c54306bbd5fb7e8fe421695cd6d2ee32cb0f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "74a1bd8462f125678ce0",
          "headline": "GE Vernova는 Meta의 지출 전망으로 인해 AI 파이낸싱에 대한 우려가 커지면서 11% 급락했습니다. Vertiv Holdings 하락 7%, Eaton 하락 6%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792694380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25ff6ac0db9451ddb385916b421d330e512ea445530eb263ac90f7f2edd2963a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
          "eventId": "fb1365d21adb17220a51",
          "headline": "MRVL, AI 인프라 성장 활용: 투자자를 위한 다음 단계는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792677180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=684a46bcd007305ce6429ab78c1b5f587c61fe7f85c239fac32026fb12dffe89",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 19,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792718977,
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
          "eventId": "4a8bd96a453139ede239",
          "headline": "10년간의 VMware 거래 후 칩 주가가 하락하면서 Broadcom 주가는 4% 하락했습니다. 월스트리트의 표적이 말하는 것은 다음과 같습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792718977,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25924971557454c65f4a79283c5c7f91dc242612787f2f184a8a70a61f49dada",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792701125,
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
          "eventId": "069ca67e5f81e5ea6610",
          "headline": "애플은 아이폰 듀오 목표를 44% 높인 것으로 알려졌다. 11월 2일에 보여줄 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792701125,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4fe983b29a7fa808125e898fb5812a9bb07bb8e5b67c2d399786bc6e494da761",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1792761410.2037323,
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
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792683908,
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
          "eventId": "fb1365d21adb17220a51",
          "headline": "MRVL, AI 인프라 성장 활용: 투자자를 위한 다음 단계는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792677180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=684a46bcd007305ce6429ab78c1b5f587c61fe7f85c239fac32026fb12dffe89",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792701916,
      "signal": "주의 강화",
      "netScore": -7.76,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "eventId": "6fcf5473b3bfa13e1c13",
          "headline": "Intel 대 Qualcomm: 수익 격차 확대",
          "eventLabel": "실적 발표",
          "publishedAt": 1792701916,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29b9fa56f5808b68b18027a3e11472f8520e87b60c011c5bdc9074703bc4bde2",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fecc0baa58060faedaa7",
          "headline": "AI 에이전트에 CPU가 필요한 이유는 무엇입니까? Nvidia가 AMD와 Intel이 지배하는 비즈니스에 참여하기를 원하는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792693500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=880f03ba7e81048e0aebf80b9e558d26a95dadedeeeb78a657d262fb3ef5dfaa",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792686519,
      "signal": "중립·확인 대기",
      "netScore": -0.91,
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
          "eventId": "3a83d33bc4365b959c21",
          "headline": "Taiwan Semiconductor는 SpaceX의 Terafab에 참여하기를 원하지만 Fab를 운영하는 경우에만 가능합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792686519,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=89838a397678ea0df1ea24ff84ad059096bc78044f5c5240c276388eb1239621",
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
          "eventId": "307b663ba1733a6842f9",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000728/tsm-monthend6kx20261022.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792680290,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792680290,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792680290,
      "signal": "중립·확인 대기",
      "netScore": 0.76,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
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
          "score": -2.1,
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
          "eventId": "398b2497902a948113f2",
          "headline": "LRCX SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000054/lrcx-20260927.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1792761410.2037323,
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
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792748100,
      "signal": "우호적 변화",
      "netScore": 6.57,
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
          "score": -2.8,
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
          "eventId": "767ba5bd509c21554bb4",
          "headline": "더 나은 메모리 주식: SK 하이닉스 vs. 마이크론",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792748100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5109588cb1b53aadbbeb1bf26eae9e27450339d738949267438acf89270479e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6bc0534703df5a2a2a97",
          "headline": "더 나은 메모리 재고: Micron 대 Sandisk",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792746240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=940739524acba0d8f2b5e26d880ba582742a081c819751c86648ca6ba4ca158c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0bae6ef2017d9db452b1",
          "headline": "구글의 AI 칩은 750억 달러 규모의 사업이 될 수 있다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792724820,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a66362dbb043c2a4c05a77ab0bd4e74d737a875a4553ea7aa2a52322bff40291",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "36ba6440b6419c9945aa",
          "headline": "Zscaler(ZS)의 Nvidia AI 보안 제휴로 투자 스토리가 어떻게 바뀌었나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792721988,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=405ee119ee20a571f786eeb53334f19741e04d448b7abea95e8ab38e05407de4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "09dac6ae38cb6af975ac",
          "headline": "Meta에 대한 통제력을 잃지 않고 캘리포니아가 제안한 억만장자 세금을 납부하려는 Mark Zuckerberg의 창의적인 계획",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792713041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ac573909bbfe809bec722908ab64fed05966f09641f7ad568010f6d1a681755",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "069ca67e5f81e5ea6610",
          "headline": "애플은 아이폰 듀오 목표를 44% 높인 것으로 알려졌다. 11월 2일에 보여줄 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792701125,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4fe983b29a7fa808125e898fb5812a9bb07bb8e5b67c2d399786bc6e494da761",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "74a1bd8462f125678ce0",
          "headline": "GE Vernova는 Meta의 지출 전망으로 인해 AI 파이낸싱에 대한 우려가 커지면서 11% 급락했습니다. Vertiv Holdings 하락 7%, Eaton 하락 6%",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792694380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25ff6ac0db9451ddb385916b421d330e512ea445530eb263ac90f7f2edd2963a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "fb1365d21adb17220a51",
          "headline": "MRVL, AI 인프라 성장 활용: 투자자를 위한 다음 단계는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792677180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=684a46bcd007305ce6429ab78c1b5f587c61fe7f85c239fac32026fb12dffe89",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 19,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792746240,
      "signal": "중립·확인 대기",
      "netScore": 0.49,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "6bc0534703df5a2a2a97",
          "headline": "더 나은 메모리 재고: Micron 대 Sandisk",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792746240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=940739524acba0d8f2b5e26d880ba582742a081c819751c86648ca6ba4ca158c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "37531818a1c6b371824f",
          "headline": "SanDisk 주식의 높은 현금 수익률이 왜 그렇게 적은 신용을 얻습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792697297,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=924c8f0aa88642cd187ffff2b18fd91a40f6f957043807c5fbfab9db70f513d7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792750428,
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
          "eventId": "1dbb3d9feb5257d03a76",
          "headline": "Nasdaq, Dow, S&P 500 선물 하락 프리마켓: NVDA, AMD, META, CRWV, MRNA, WDC, BE In Focus",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792750428,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5922972d586f65fcf83214c46c06e90ef1c3a8fbb7f6857fb86f2fb48028df32",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "069ca67e5f81e5ea6610",
          "headline": "애플은 아이폰 듀오 목표를 44% 높인 것으로 알려졌다. 11월 2일에 보여줄 내용은 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792701125,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4fe983b29a7fa808125e898fb5812a9bb07bb8e5b67c2d399786bc6e494da761",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "54381e331309323e91f8",
          "headline": "WDC SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1792681200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026066933/wdc-20261002.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "a8e19f9a2f8d58db2493",
          "headline": "WDC SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026066882/wdc-20261022.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792720742,
      "signal": "주의 강화",
      "netScore": -6.92,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.52,
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
          "score": -1.05,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.8,
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
          "eventId": "22db549ff920e633c8a7",
          "headline": "Adobe vs. Arista Networks: 2026년에는 어떤 기술주를 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792720742,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab7306cd139a0f7b7da3c22533b6faf03dc94e3e784a9008f99b110bb361f507",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792689005,
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
          "eventId": "519ba20aef5115902769",
          "headline": "수익에 앞서 기술 매도가 심화되면서 광학 주가 하락: Coherent 하락 12%, Applied Optoelectronics 하락 10%, Lumentum 하락 9%",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792689005,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a27bbb91413423e8aebb42d3eb1f75d0733f821f6645cb3948e88f46eafbe471",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792689005,
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
          "score": -1.22,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.1,
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
          "eventId": "519ba20aef5115902769",
          "headline": "수익에 앞서 기술 매도가 심화되면서 광학 주가 하락: Coherent 하락 12%, Applied Optoelectronics 하락 10%, Lumentum 하락 9%",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792689005,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a27bbb91413423e8aebb42d3eb1f75d0733f821f6645cb3948e88f46eafbe471",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6462cbd20b307b2eb0fb",
          "headline": "Coherent는 일주일 만에 19%, Lumentum은 16% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792682108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24008cbf297571cfa001b8842737a871e83bb9d25e16e988be109859f5aebf4e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1792761410.2037323,
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
      "updatedAt": 1792761410.2037323,
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
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792634388,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1792761410.2037323,
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
      "updatedAt": 1792761410.2037323,
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
      "updatedAt": 1792761410.2037323,
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
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792698420,
      "signal": "중립·확인 대기",
      "netScore": 1.05,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
          "level": "우호적"
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
          "eventId": "729fe10a55264aa65cb4",
          "headline": "Vertiv, Nvidia, AI 전력 및 냉각 설정 10주 감축 목표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792698420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a50ebd79af547e0ca96287af0003f685083379d3157a8a03ca0ed9baa654b68",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1792761410.2037323,
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
      "updatedAt": 1792761410.2037323,
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
      "updatedAt": 1792761410.2037323,
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
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792594800.0,
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
          "eventId": "ca61973d7556b577c74f",
          "headline": "FIX SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1035983/000110465926118159/fix-20260930x10q.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "8297f93631d953b5c859",
          "headline": "FIX SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1035983/000110465926118156/fix-20261022x8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "81ee0511a83fddabdfe1",
          "headline": "FIX SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1035983/000110465926118149/tm2628079d1_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "BE": {
      "ticker": "BE",
      "updatedAt": 1792761410.2037323,
      "dataAsOf": 1792594800.0,
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
          "eventId": "767eda9785d6096ab2ff",
          "headline": "BE SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1664703/000162828026066931/be-20260930.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "3f8656e225a7284a1b94",
          "headline": "BE SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1792594800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1664703/000162828026066890/be-20261022.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    }
  }
};
