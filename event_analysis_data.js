// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792816761.5387387,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792700784,
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
          "eventId": "cb687254ba8ff64c9709",
          "headline": "Alphabet(GOOGL) 대 MSFT 및 AMZN: AI 투자와 Google Cloud 성장으로 26%의 상승 여력을 얻을 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792700784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76c1bd26b5efefa54a8a958e66f717ce5ce0aa2140eca2591ecdad295e7ba06b",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792774309,
      "signal": "중립·확인 대기",
      "netScore": -1.19,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.75,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.57,
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
          "eventId": "129638e89166535f6a87",
          "headline": "Alphabet(GOOGL): AI 수요 및 TPU 성장에 대한 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792774309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7461a9bba64726971fa5f3e70ed4dfa2042f77765f328e2d77b753d72d32525",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2f360a57599be3cfef43",
          "headline": "알파벳(GOOGL) 클라우드 중단 및 공유 토큰 싸움으로 규제에 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792761187,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1ab59349b99aff7a62c462bd4f3e198be2890579beabb493f7bfab1927c5b4eb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d7aa8079d758a4c118c5",
          "headline": "Alphabet, 경쟁업체가 부채로 구매할 수 없는 AI 인프라 병목 현상 해결",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1792759555,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6264ccb84378cf7b9f07b0bbba3586ea3d89010337fb5ad216fbde9ab55d5b98",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
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
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cb687254ba8ff64c9709",
          "headline": "Alphabet(GOOGL) 대 MSFT 및 AMZN: AI 투자와 Google Cloud 성장으로 26%의 상승 여력을 얻을 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792700784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76c1bd26b5efefa54a8a958e66f717ce5ce0aa2140eca2591ecdad295e7ba06b",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792784220,
      "signal": "중립·확인 대기",
      "netScore": 0.35,
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
          "eventId": "0a61a79ba67476b4d4db",
          "headline": "포스트잇 제조사 3M, 아마존 주요 거래에서 AI 골드러시 주목",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792784220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bda1f3e7e7e0d3eedc776f170bf5c181bc393017908c4d1feab41a24a755ce28",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
          "eventId": "cb687254ba8ff64c9709",
          "headline": "Alphabet(GOOGL) 대 MSFT 및 AMZN: AI 투자와 Google Cloud 성장으로 26%의 상승 여력을 얻을 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792700784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76c1bd26b5efefa54a8a958e66f717ce5ce0aa2140eca2591ecdad295e7ba06b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792791082,
      "signal": "주의 강화",
      "netScore": -6.42,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.88,
          "level": "중립"
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
          "score": -3.67,
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
          "eventId": "8bec762cafadf29ce7e4",
          "headline": "캐나다 뉴스 출판사, Meta가 AI 훈련 문제로 인해 새로운 서비스 약관을 폐기하길 원함",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792791082,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=310bdeba2307a2512d22e24a2ddae201d4867d5cc67a54fdd2a7432c0ecb31fa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d4ce2bc0194aae4ab866",
          "headline": "GE Vernova는 Meta의 수익 이후 하루 만에 거의 11% 하락했습니다. 2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792787820,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f962618b1e5a89cd82b255ecfad61a8f749d5eb037f143ebb4aa24a5e0f758f2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4192e742e61c5b3a149e",
          "headline": "Arm은 한 달 만에 19% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792778885,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc90b2ef741ab722f709f76c5e5e77ae9225575d44cc3f5104121050ecfb9a4d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "604b4ffd6aa7d428ee18",
          "headline": "메타 계획은 1:2 주식 분할에 해당합니다. 주식은 매수인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792770181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=437bbd7d85c79eaf4b05ba265db0d97b0d5003ca9159ed9e95c009b8c52d9a2c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792701125,
      "signal": "중립·확인 대기",
      "netScore": -0.7,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792789916,
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
          "score": -3.32,
          "level": "주의"
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
          "score": -4.38,
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
          "eventId": "22aa48b84d3b9d120858",
          "headline": "Tesla 주식은 '통신 문제'로 인해 Apple보다 뒤처져 있다고 투자자 Gary Black이 말했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792789916,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a32ae511329471acda20b1207114e05fe001cf6483bfd786481844cbe82e4f7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a3d31ae5e0ba2a8f4a94",
          "headline": "SpaceX 제출로 Elon Musk에게 Tesla 합병에 대한 최종 결정이 내려졌습니다. 그는 자신이 참여하지 않는다고 말했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792784162,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea2a4845b828d92fce5ab0d37e56e9af099815355b6e84e1166040e0a71b91cd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792680578,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792774202,
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
          "eventId": "cce31b057b76a97d3ea0",
          "headline": "Adobe vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792774202,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f49a272cc03038a6e1b688918fccee4a86534e8a38346934596b0f42a99edfaa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3cd4c78a990546c5bcdc",
          "headline": "Arista Networks vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792770602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1da8e6df2ebc69e9b8829b4b544cb7eb2546b3bf3fdf4176abececb829e1f2b5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7600b42a0a34960de031",
          "headline": "Salesforce vs. Snowflake: 2026년에는 어떤 기술 주식이 더 나은 구매입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792763160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b4e9b48ff49bcada303c228f0020bcc4e16eae8efb2e2ce9c536b1677620213",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1792816761.5387387,
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792774309,
      "signal": "우호적 변화",
      "netScore": 4.75,
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
          "score": -2.97,
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
          "eventId": "129638e89166535f6a87",
          "headline": "Alphabet(GOOGL): AI 수요 및 TPU 성장에 대한 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792774309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7461a9bba64726971fa5f3e70ed4dfa2042f77765f328e2d77b753d72d32525",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8d419f959c60efc6096d",
          "headline": "인텔이 아닙니다. CoreWeave가 아닙니다. 저평가된 Nvidia 지원 회사는 인공 지능(AI) 수익을 123% 성장시키고 있습니다. 오늘 이 제품을 8달러에 구매해야 하는 이유는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792767000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62658832c5c0472b4548f80863502bf78b11ed4ffd94b8f7f7faba61c7821e69",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3e9af0763fae1baa14bf",
          "headline": "단기적 마찰 무시: Nvidia의 비교할 수 없는 규모와 CUDA 생태계 잠금으로 인해 모든 철수는 향후 몇 년간 구매 기회가 됩니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792766702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ad1974e754e59904673975f1eded357d9cc1b1008ba0d7ca271fa21c3ac6c30d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0fd3f66d5487e22319f5",
          "headline": "엔비디아가 아닙니다. 마이크론이 아닙니다. 이 잘 알려지지 않은 칩 스톡은 AI 붐의 가장 잘 알려진 비밀입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792764300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73e664ee51583ba4c125d69e2c83cf57023aabdc7af01d5b73680914f201b9f8",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "428b5fec9823c9e243da",
          "headline": "inDrive와 Pony.ai, NVIDIA Hyperion을 기반으로 카자흐스탄에서 자율 이동성을 탐색하기 위한 협력 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792760400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9480010767035f21d28c99b3c43b7e91adb1be5221bbfbb55485ab4053aa3382",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "7dbdc8f4e520f1d7fda2",
          "headline": "예측: 오라클은 투자자들이 예상하는 것보다 훨씬 더 큰 AI 승자가 될 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792759545,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=388d8e963499928304d42e7adef8ebdc6acaca72f56166de8009485588991a0c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
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
          "eventId": "cb687254ba8ff64c9709",
          "headline": "Alphabet(GOOGL) 대 MSFT 및 AMZN: AI 투자와 Google Cloud 성장으로 26%의 상승 여력을 얻을 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792700784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76c1bd26b5efefa54a8a958e66f717ce5ce0aa2140eca2591ecdad295e7ba06b",
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
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792774309,
      "signal": "우호적 변화",
      "netScore": 5.84,
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
          "score": -1.57,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 2.62,
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
          "eventId": "129638e89166535f6a87",
          "headline": "Alphabet(GOOGL): AI 수요 및 TPU 성장에 대한 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792774309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7461a9bba64726971fa5f3e70ed4dfa2042f77765f328e2d77b753d72d32525",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "a77f34d5da04d61270c5",
          "headline": "TER 대 AMD: 어느 AI 구성 요소 공급업체 주식이 더 나은 구매입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792773840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7bb4a5450df076e9533e5d40868789c086b056481e4ecf223b97d0a39c226779",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0ff5c1012519558f5ac3",
          "headline": "AMD 또는 Broadcom: 2030년까지 AI 칩 주식을 1개만 소유할 수 있다면 여기 선택하세요",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792768800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e843060d2c10ea262cf0f3e2ba757c1b8084bd6d5f7b6864913fa96743e3478",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2ea5adbd89550e882b24",
          "headline": "동일한 플레이북, 다른 실리콘: Broadcom이 왕좌를 차지하고 Marvell이 AMD 도전자를 맡습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792759558,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdbc592301e26d867ac10077a02cac0747c960de442e10ee4e4d1bd10f32b4ee",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7dbdc8f4e520f1d7fda2",
          "headline": "예측: 오라클은 투자자들이 예상하는 것보다 훨씬 더 큰 AI 승자가 될 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792759545,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=388d8e963499928304d42e7adef8ebdc6acaca72f56166de8009485588991a0c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
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
          "eventId": "cb687254ba8ff64c9709",
          "headline": "Alphabet(GOOGL) 대 MSFT 및 AMZN: AI 투자와 Google Cloud 성장으로 26%의 상승 여력을 얻을 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792700784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76c1bd26b5efefa54a8a958e66f717ce5ce0aa2140eca2591ecdad295e7ba06b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 18,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792789501,
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
          "score": -0.87,
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
          "eventId": "4475725c166edd8a3245",
          "headline": "예측: Nvidia는 향후 5년 동안 Broadcom을 능가할 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792789501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66256381411d99cd7083b0b026b36dd3034d7e8981ef344027c64ed2a7d2c1a2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0ff5c1012519558f5ac3",
          "headline": "AMD 또는 Broadcom: 2030년까지 AI 칩 주식을 1개만 소유할 수 있다면 여기 선택하세요",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792768800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e843060d2c10ea262cf0f3e2ba757c1b8084bd6d5f7b6864913fa96743e3478",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ea5adbd89550e882b24",
          "headline": "동일한 플레이북, 다른 실리콘: Broadcom이 왕좌를 차지하고 Marvell이 AMD 도전자를 맡습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792759558,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdbc592301e26d867ac10077a02cac0747c960de442e10ee4e4d1bd10f32b4ee",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792701125,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792773000,
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
          "eventId": "2c101d8ace9d232629d0",
          "headline": "Wells Fargo, Arm, Intuit는 이의 제기가 22에 도달함에 따라 OKX-ICE 토큰 장소에서 재고를 유지합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792773000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ed00ce10a6aefbd8fea166230eb17a8f9840cb5694770e26e9c54ebda2b653f3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "32728da9c444c9658550",
          "headline": "Arm의 기성 청사진: Marvell의 Challenger Crown에 대한 청사진 공격",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792759557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6422e624202293c818b0014a49a90c6a1b51a77fac351d07cbfe06c3c660f3aa",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792773903,
      "signal": "주의 강화",
      "netScore": -4.13,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -1.57,
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
          "eventId": "537df95da4138a28f5e0",
          "headline": "Marvell Technology, 대만의 맞춤형 실리콘 생태계와 다각적인 전쟁에 직면",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792773903,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=72bda33fa34a1a399917ea1cd84f4e7e0e44c6793edc57c665f6cf3cfe8b03b9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2ea5adbd89550e882b24",
          "headline": "동일한 플레이북, 다른 실리콘: Broadcom이 왕좌를 차지하고 Marvell이 AMD 도전자를 맡습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792759558,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bdbc592301e26d867ac10077a02cac0747c960de442e10ee4e4d1bd10f32b4ee",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32728da9c444c9658550",
          "headline": "Arm의 기성 청사진: Marvell의 Challenger Crown에 대한 청사진 공격",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792759557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6422e624202293c818b0014a49a90c6a1b51a77fac351d07cbfe06c3c660f3aa",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
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
          "eventId": "300b30d20a807d5df31c",
          "headline": "MRVL SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1792681200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526430424/d147430d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792767000,
      "signal": "중립·확인 대기",
      "netScore": -0.42,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
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
          "score": -1.05,
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
          "eventId": "8d419f959c60efc6096d",
          "headline": "인텔이 아닙니다. CoreWeave가 아닙니다. 저평가된 Nvidia 지원 회사는 인공 지능(AI) 수익을 123% 성장시키고 있습니다. 오늘 이 제품을 8달러에 구매해야 하는 이유는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792767000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62658832c5c0472b4548f80863502bf78b11ed4ffd94b8f7f7faba61c7821e69",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a2d36c3fcc375f11d137",
          "headline": "The Foundry Disconnect: Intel은 트랜지스터를 압도하지만 TSMC는 생산량과 확장의 열쇠를 쥐고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792754158,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fbca34c34dde68eada86d9fca42fbd0932fd97b7b5a19e23c6f2ef800dafddee",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792754158,
      "signal": "중립·확인 대기",
      "netScore": 1.19,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "a2d36c3fcc375f11d137",
          "headline": "The Foundry Disconnect: Intel은 트랜지스터를 압도하지만 TSMC는 생산량과 확장의 열쇠를 쥐고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792754158,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fbca34c34dde68eada86d9fca42fbd0932fd97b7b5a19e23c6f2ef800dafddee",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792680290,
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
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1792816761.5387387,
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
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792787653,
      "signal": "중립·확인 대기",
      "netScore": 0.42,
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
          "eventId": "ac53770c2841f839eb28",
          "headline": "Lam Research의 공급 경고로 인해 AMD 주가는 하루 만에 8% 하락했습니다. 2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792787653,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c279a5197a081aaeca47e16b01468efee216c282c483f7927ea000767d794d58",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1792816761.5387387,
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
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792790046,
      "signal": "우호적 변화",
      "netScore": 6.54,
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
          "eventId": "2183a2c11516ce1313fe",
          "headline": "Micron Technology(MU)가 위험을 감수하고 공급 움직임이 투자자에게 의미할 수 있는 것은 무엇입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792790046,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=61cf8f284dd1529f89fa882a436c929933a54e42fb65be3a3fcf640bf168715f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "129638e89166535f6a87",
          "headline": "Alphabet(GOOGL): AI 수요 및 TPU 성장에 대한 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792774309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7461a9bba64726971fa5f3e70ed4dfa2042f77765f328e2d77b753d72d32525",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f58842d2b6cd7492d71a",
          "headline": "예측: 이 메모리 주식에 대한 10,000달러 투자는 2030년까지 두 배로 증가할 것입니다(힌트: Micron이나 Sandisk가 아닙니다).",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792770361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0428fc32483455473d87e00b2a233501cd59170afe70a9b1bd2d1343e1c67271",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7dbdc8f4e520f1d7fda2",
          "headline": "예측: 오라클은 투자자들이 예상하는 것보다 훨씬 더 큰 AI 승자가 될 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792759545,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=388d8e963499928304d42e7adef8ebdc6acaca72f56166de8009485588991a0c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
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
          "eventId": "cb687254ba8ff64c9709",
          "headline": "Alphabet(GOOGL) 대 MSFT 및 AMZN: AI 투자와 Google Cloud 성장으로 26%의 상승 여력을 얻을 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792700784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=76c1bd26b5efefa54a8a958e66f717ce5ce0aa2140eca2591ecdad295e7ba06b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792770361,
      "signal": "주의 강화",
      "netScore": -2.17,
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
          "eventId": "f58842d2b6cd7492d71a",
          "headline": "예측: 이 메모리 주식에 대한 10,000달러 투자는 2030년까지 두 배로 증가할 것입니다(힌트: Micron이나 Sandisk가 아닙니다).",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792770361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0428fc32483455473d87e00b2a233501cd59170afe70a9b1bd2d1343e1c67271",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792757199,
      "signal": "주의 강화",
      "netScore": -2.11,
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
          "score": -1.57,
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
          "eventId": "6363bda94e2a577ce827",
          "headline": "WDC의 가격 주도 수익이 월스트리트를 분열시킵니다. 분석가들은 Capex 증가, 잠재적 공급 증가로 인해 가치 평가에 압력을 가할 수 있다고 경고합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792757199,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e53156d529525947dd10c3b1126b5be4bbe223b0aecbc24ca82b9f26208b8969",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792770602,
      "signal": "주의 강화",
      "netScore": -6.3,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.35,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.8,
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
          "eventId": "3cd4c78a990546c5bcdc",
          "headline": "Arista Networks vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792770602,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1da8e6df2ebc69e9b8829b4b544cb7eb2546b3bf3fdf4176abececb829e1f2b5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792689005,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1792816761.5387387,
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792766325,
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
          "eventId": "828657714d6da5d068d2",
          "headline": "Constellation Energy vs. GE Vernova: 2026년에는 어느 유틸리티 주식이 더 나은 매수인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792766325,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5d921117474470ffa9f1e02eaddd10b48c4190d207f99b02cae8217c7d4d61d",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792766325,
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
          "eventId": "828657714d6da5d068d2",
          "headline": "Constellation Energy vs. GE Vernova: 2026년에는 어느 유틸리티 주식이 더 나은 매수인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792766325,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5d921117474470ffa9f1e02eaddd10b48c4190d207f99b02cae8217c7d4d61d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1792816761.5387387,
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
      "updatedAt": 1792816761.5387387,
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
      "updatedAt": 1792816761.5387387,
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
      "updatedAt": 1792816761.5387387,
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
      "updatedAt": 1792816761.5387387,
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
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1792816761.5387387,
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
      "updatedAt": 1792816761.5387387,
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
      "updatedAt": 1792816761.5387387,
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
      "updatedAt": 1792816761.5387387,
      "dataAsOf": 1792792807,
      "signal": "주의 강화",
      "netScore": -3.57,
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
          "score": -0.87,
          "level": "중립"
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
          "eventId": "b1dca53b08cd8e35fecf",
          "headline": "웨스 모스(Wes Moss)는 S&P 500 지수에서 100만 달러는 연간 배당금으로 12,000달러만 지불한다고 말했습니다. 여기 그의 해결책이 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792792807,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=781013207143a4352cd121910fcdebab291ca1f8e285f4635319060565edd2d2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "60ff2adddc6c178966c4",
          "headline": "컴포트 시스템: 장기 투자자를 위한 3가지 핵심 사항",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792785182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7caac4fd11d3e0e36b79c0bb8c4ca58a32eb1dff087bfeec8de5e33a5c038ea2",
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1792816761.5387387,
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
