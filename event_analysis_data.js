// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1789581609.2066228,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789504981,
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
          "eventId": "2042ed7b9f52da1b9a52",
          "headline": "Microsoft는 주식 매입에 지출하는 것보다 더 많은 배당금을 지급합니다. 이것이 투자자에게 미치는 영향은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789504981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cad7d7a86b6465d3cd46ba27d3e520cbddec799887b2a2958c36950b0ff25a93",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "816e8fd4233ba5701ef1",
          "headline": "Blykalla와 Microsoft는 납 냉각형 첨단 원자로에 대한 AI 기반 원자력 라이센스를 발전시키기 위해 협력하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789473600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=402e8a1971cd01e8d80d87f19c751eb034ca31fa96778612d92e78e4ba7d4db0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fa36b1beda9ea1dcb283",
          "headline": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789422834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0831fd07e88fc24cfe13",
          "headline": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789422834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a696029dc28e52ea50b8",
          "headline": "별자리 에너지는 시장이 반영하는 것보다 더 많은 상승 여력을 갖고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789392022,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f0954ed281fc8eaff1cbeca84aa6946c926a6d5d51420d39c5f1a3a5e9b17257",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c4de54ec5abc0b1963a5",
          "headline": "MSFT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788274800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526380280/d291965d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789558200,
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
          "score": -1.57,
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
          "eventId": "af81b99410a8de01a1be",
          "headline": "알파벳 대. Apple: 과도한 규제 압력으로 인해 이 회사의 현금 흐름이 더 위협받음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789558200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cec7f72fdadcecd975fa6a2a3658b45ee6086faea8838c62e3b4a19de24d2088",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3a109dd6d9131b3a57fc",
          "headline": "Anthropic IPO가 Amazon 및 Alphabet 투자자에게 의미하는 것",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789546620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=585e4b7f02f007b282c0b8ac7ed929c4683d791e027b025c58aa7096908698e7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fdfb8e9d095ff1305354",
          "headline": "Fortum Oyj(HLSE:FORTUM), Google 핵 계약 체결, 현재 과대평가되어 있나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789528827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dd6999ebd88725734decd1a9e5c4ea9a70e33d5a4c34bd502fedbe5942753fda",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dd446379d2e63a9d1e28",
          "headline": "GOOY: GOOGL 주식의 주식과 유사한 수익을 위한 주간 배포",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789520611,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bab13c1a32d4c2286929712e73d9ca4eec6e0f96cc101ff4bb7d648bbaa74435",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9c382b9539c9481a3722",
          "headline": "상원이 제안한 AI 킬 스위치로 워싱턴이 Google의 프론티어 모델에 대한 거부권을 행사할 수 있음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789495838,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6177bb7089f02866b538cb7e83daaf306639e70a547ab4103598168c5215cfad",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "da5134b69e58c8dcb361",
          "headline": "잉여현금흐름이 마이너스로 유지된다면 알파벳 주식은 어떻게 되나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789491747,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=023fb1b377234f01c269732a7d0c0e91df3a5c3ae2f8abf0790609439cd6d97b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "865ec0a8fc6705bc30a5",
          "headline": "워렌 버핏은 약 1년 전에 알파벳 주식을 샀습니다. 오늘날에도 여전히 매수세를 보이는 3가지 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789488301,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fc9f1a2f406e58f09b56576d6d108dea818de09ab6ff71d850a09bb631efd912",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "20e3e789b9bde85398fb",
          "headline": "Anthropic은 2분기 연속 조정 영업 이익을 기록할 것으로 예상합니다. 아마존과 알파벳 투자자들은 작은 글씨를 읽어야 합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789465660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2674ebc6289625a3f9c0d3ddc374a830cde7e15a9a0a533e3fd00936639cc3b4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1117c18898ed8a8b2ca8",
          "headline": "Alphabet의 왜곡된 순방향 P/E가 AI 규제 전망을 충족합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789463877,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d882b508f39877909430aa9ac80ff2e8a31e00507555f96a888df82523e647fd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a2ccdece8bb262a7701b",
          "headline": "GOOGL SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786287600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526342390/d171253d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "78a805549f8a85dbe83b",
          "headline": "GOOGL SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1786028400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526340264/d32286d424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "95b3e5b92f5774fd6f19",
          "headline": "GOOGL SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1785942000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526336853/d140593d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 4,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789547564,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.92,
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
          "eventId": "9c997994fdcaa7c3b408",
          "headline": "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까? INTC, SKHY, ORCL, SPCX, ASTS, CRCL, COIN 주식에 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789547564,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b04351b6a1f3e365dc88e64a6e7379760ffbc892797f0c86bbbae4f505ac12e2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3a109dd6d9131b3a57fc",
          "headline": "Anthropic IPO가 Amazon 및 Alphabet 투자자에게 의미하는 것",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789546620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=585e4b7f02f007b282c0b8ac7ed929c4683d791e027b025c58aa7096908698e7",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fc7a0e97a9ee022f10d8",
          "headline": "AI 데이터 센터 추진이 모멘텀을 얻으면서 QCOM 주식이 2개월 최고치로 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789528721,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f78d34dbf87d1dcea315771ac79466660955119a71bb26aaa0aa9a8c59f4675b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "651799e9871e68378cc7",
          "headline": "S&P 500, Nasdaq, Dow는 Fed 회의를 앞두고 투자자들의 금리 인상으로 하락 마감 — AMZN, META, MU, TSLA, PLTR 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789509895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=937b1548531416896a208cab353bef25747baa53e6bb5913f23c7bfa721f6d8a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9927c6186faad952050d",
          "headline": "퀄컴 주가 급등. Amazon AI 칩 거래로 새로운 성장의 길 열다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789500904,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a09085e1224b7d222fe74b90a81b30fc3fdcde863033b121dbdac60706468a9a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d84101dd43db587b4a25",
          "headline": "퀄컴 쌓기 시작했는데 아마존과 메타 때문은 아니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789491333,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e485e125aac2c0892310b29c48014eee7c31b9422b3044c44a41584dbd81dfe5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d1c72e036b23083768c4",
          "headline": "Amazon, 조기 연휴 푸시에서 프라임 딜 날짜 설정",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789487171,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38d36c54137fe66c095428984759a772a8ab7620643ede47e78b9a4ab6f6592a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "20e3e789b9bde85398fb",
          "headline": "Anthropic은 2분기 연속 조정 영업 이익을 기록할 것으로 예상합니다. 아마존과 알파벳 투자자들은 작은 글씨를 읽어야 합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789465660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2674ebc6289625a3f9c0d3ddc374a830cde7e15a9a0a533e3fd00936639cc3b4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "88763b89f5f3ad2d3cc5",
          "headline": "아마존의 인류 지분이 2조 달러로 표시된다면 아마존에 대한 10,000달러 투자의 가치는 얼마나 될까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789465200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=08861e5240ed0be4dd4c0d93a9ad98c860e758cb0c1510f6c7571f503524931c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f0d48099dba721b699b1",
          "headline": "AI, 연준 및 5% 국채 수익률: 수요일 금리 결정을 앞두고 나스닥, 다우 선물을 위축시키는 세 가지 위험",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789461851,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c8e68c00cd1fe9317ebb5d445d870f0e4d3e3b7bba3b5bcf02b475fae464f078",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0416214ecdc2fb924bf4",
          "headline": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789445485,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "80177b84463f10bd6b2c",
          "headline": "BE 주식은 거의 한 달 만에 가장 많이 하락했습니다: 이 분석가가 36% 이상의 상승 여력을 보는 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789434808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45bc5ebd57993dbf5273bf53afe9f375d12eb1f7a8e9fc2cba0fd4a1691bed12",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 6,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789565492,
      "signal": "주의 강화",
      "netScore": -5.39,
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
          "eventId": "a4567036ef9f678c9959",
          "headline": "이 억만장자가 페이스북에 투자하지 않은 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789565492,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fed714c3b839228ce5910d7766bf6e95d05c4f762e191a63af19a2cdb7cf311d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "651799e9871e68378cc7",
          "headline": "S&P 500, Nasdaq, Dow는 Fed 회의를 앞두고 투자자들의 금리 인상으로 하락 마감 — AMZN, META, MU, TSLA, PLTR 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789509895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=937b1548531416896a208cab353bef25747baa53e6bb5913f23c7bfa721f6d8a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5ddc0789b8904a8c5936",
          "headline": "Meta의 24억 달러 규모의 법적 탭이 국가 규제의 악몽으로 폭발할 수 있는 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789492531,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d72d95b9329f2f78fbfe1b1675882caeec92a4007752adee786052b14085667",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d84101dd43db587b4a25",
          "headline": "퀄컴 쌓기 시작했는데 아마존과 메타 때문은 아니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789491333,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e485e125aac2c0892310b29c48014eee7c31b9422b3044c44a41584dbd81dfe5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "96bb0a0b35daa163d9d7",
          "headline": "META SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1785337200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050705/meta-20260630.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789558200,
      "signal": "중립·확인 대기",
      "netScore": -0.98,
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
          "eventId": "af81b99410a8de01a1be",
          "headline": "알파벳 대. Apple: 과도한 규제 압력으로 인해 이 회사의 현금 흐름이 더 위협받음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789558200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cec7f72fdadcecd975fa6a2a3658b45ee6086faea8838c62e3b4a19de24d2088",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d55edb3320abbea3b46b",
          "headline": "Apple에서 Tim Cook의 가장 결정적인 움직임은 AI와 관련이 없습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789555800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db732d605a24a75a773506774ccc7adc0510edccf1cae68f084a011a6594952a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "d84ab48fbd444914a48c",
          "headline": "인도, 아이폰 수리 조사 확대 후 애플 주가 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789486736,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c5ad6092fabe1a15a62383727d518cb6da5eb62192629f1cb9e8df4d4d43151",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "29c48a92bfea97add066",
          "headline": "Apple의 뛰어난 코미디 Widow's Bay가 Emmy 역사상 가장 많은 상을 받은 신입생 코미디로 승리하고 Apple TV가 제78회 Primetime Emmy Awards에서 가장 많은 상을 받은 네트워크로 선두를 달리고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789465200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9da3ddeef7b6f27f8c0a89b7e0069c8814a95518bd8c92ce96e279c28d0de679",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0416214ecdc2fb924bf4",
          "headline": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789445485,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f00d218f1a7a74b9c69a",
          "headline": "AAPL SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1785423600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000020/aapl-20260627.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789565103,
      "signal": "주의 강화",
      "netScore": -7.35,
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
          "eventId": "f4051bb3d0d2d6624126",
          "headline": "레귤레이터는 Cybercab 디자인을 통해 Tesla를 그릴",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789565103,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=708c8c357374ed44f136ca5d40951de7df1bdb050ccf685e0b0a0a1cb5b55741",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "651799e9871e68378cc7",
          "headline": "S&P 500, Nasdaq, Dow는 Fed 회의를 앞두고 투자자들의 금리 인상으로 하락 마감 — AMZN, META, MU, TSLA, PLTR 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789509895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=937b1548531416896a208cab353bef25747baa53e6bb5913f23c7bfa721f6d8a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bc4ea0b4db44200a402c",
          "headline": "규제 당국이 바퀴 없는 사이버캡을 사람이 운전할 수 있는지 묻는 후 TSLA 가장자리가 낮아짐",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789505855,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0015a1044a45251b75e62890f8a1f4b8bb9dd96703a0cba44b43117ee094df1d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "734a322e0ee18fc2919a",
          "headline": "Tesla, SpaceX 주가 밤새 상승: Elon Musk, 합병 추측 촉진, '밀접한 협력' 속에서 '힌트' 실행",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789455971,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b45de987449ba7b66ed9151b2baf646fdce89e96f912ecf81230076b2ef62ae0",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789562100,
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
          "eventId": "a9cc191d7fece1ecb9c5",
          "headline": "예측: Oracle 주식에 투자된 1,000달러는 2030년까지 이만큼 가치가 있을 수 있습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789562100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae21232d1959f080abb0a255b06bb8e82026e0722060227cb4ef0a0d4790bdae",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d696a8688f3eb1d181c5",
          "headline": "ORCL 주식이 5회 연속 하락: Traders Eye OpenAI 자금 조달 뉴스, 촉매제로서의 일본 클라우드 거래 가능성",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789539287,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3072fc34ebf8b4895e3bcf8dd6f19387d42d53700e522fc84297dad6d5bd12f5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "ddfcbab5d20cf6e0584a",
          "headline": "Oracle(ORCL), Post Quantum Cryptography를 갖춘 Java 27 출시",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789517892,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7090b2c12f87b8393dfedbe067a871f31a238eacb105d34a730efcb172993130",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "86e33445f188d4075d6f",
          "headline": "ORCL 주식이 시판 전 하락하는 이유는 무엇입니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789463454,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b1620b1ab41d44b1ab71f2e01995ed08184563b8c062e4fac5c9c667216830b5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fa36b1beda9ea1dcb283",
          "headline": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789422834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0831fd07e88fc24cfe13",
          "headline": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789422834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "75a90f1f3dd72953e4d1",
          "headline": "ORCL SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1789311600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526389753/d20034d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "e548b5db9c8e6ac3b0f5",
          "headline": "ORCL SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1789052400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526389274/orcl-20260831.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "aac1345472f0f12eae51",
          "headline": "ORCL SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1788966000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526387905/orcl-20260910.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789506958,
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
          "eventId": "2df89d5586c920ea45e1",
          "headline": "NVIDIA(NVDA)는 Salesforce 거래로 인해 저평가된 견해를 촉발한 후 새로운 플랫폼 테스트를 받았습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789506958,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a740db073e65b758284a46c3b47fbb8f82ef2de169baf77c3457fe3f490655f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "41dd3fefc137fa35a3c9",
          "headline": "Dreamforce가 39억 달러 규모의 AI 엔진을 시험하면서 Salesforce가 미끄러졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789486515,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24e4f2f5249502eb40e171d322d9193341589e949ccd6162e862dcddf163f570",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cf40304f418ac01b0cf2",
          "headline": "CRM SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788447600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000197/crm-20260902.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "50b22c5e8494cfb63372",
          "headline": "CRM SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1787756400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000190/crm-20260731.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "9d8a67042fcb833894b1",
          "headline": "CRM SEC Form 8-K 공식 제출",
          "eventLabel": "매출",
          "publishedAt": 1787670000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000187/crm-20260826.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "8bdf83810a4dc3af3fbd",
          "headline": "CRM SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1785855600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000160/crm-20260805.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 4,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789509895,
      "signal": "주의 강화",
      "netScore": -5.45,
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
          "score": -2.27,
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
          "eventId": "651799e9871e68378cc7",
          "headline": "S&P 500, Nasdaq, Dow는 Fed 회의를 앞두고 투자자들의 금리 인상으로 하락 마감 — AMZN, META, MU, TSLA, PLTR 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789509895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=937b1548531416896a208cab353bef25747baa53e6bb5913f23c7bfa721f6d8a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cd6ae5488138c31c055c",
          "headline": "Palantir는 AI 소프트웨어 주식 중에서 저렴해 보인다고 UBS는 말합니다 — PLTR이 더 많은 운영 여지를 가질 수 있는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789497588,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=638c2e5bea5033d976ca592dd5616e3876bea8b6fb40e7429789e5a00b544d69",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cb7ba6b14becc9e5568d",
          "headline": "Palantir의 CEO는 미래의 가장 큰 기회를 밝혔습니다. 그리고 AI 모델과는 거의 관련이 없습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789473900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28259ee6f958c93947dd89312674e1ed7c4a65baf608c23e056c0c8b4d38bd61",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bea246a4715072801b1d",
          "headline": "PLTR SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1785769200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000041/pltr-20260630.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "9bbcd2e10ce634ef4800",
          "headline": "PLTR SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1785682800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/pltr-20260803.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789565492,
      "signal": "우호적 변화",
      "netScore": 9.65,
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
          "score": 4.72,
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
          "eventId": "a4567036ef9f678c9959",
          "headline": "이 억만장자가 페이스북에 투자하지 않은 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789565492,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fed714c3b839228ce5910d7766bf6e95d05c4f762e191a63af19a2cdb7cf311d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "7998265fcf68fd522baf",
          "headline": "Nvidia와 SK Hynix가 Micron의 전망에 대해 시사하는 것",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789565100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4fbadb3b4cb5846297a34b0a128c34fb903759c5997163ac6feb286f7cfe312b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "482578830f952e373bee",
          "headline": "Big Short의 Michael Burry는 1987년 스타일의 하락 가능성을 예측하고 AI 거대 기업 Nvidia 및 Palantir에 베팅하고 있습니다. 따라야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789551001,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=77fc41009a7326a5c25bfbe001f7d4a79e97fe4b5126c5f2f6ceca3f6cce57f0",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "08e8464ea255b351f00f",
          "headline": "Michael Burry는 속도 저하에 대한 우려로 AI를 무시하는 7가지 단어를 말했습니다. \"속도를 늦출 수 있는 AI는 없습니다.\" 투자자들은 Nvidia와 Palantir Shorts를 신뢰해야 합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789538100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a52efd4d6f50652742b93398ab977a1c3d7b903f74e868b8a4514054b90eea9e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "73ac2cf8e14ab103cfc1",
          "headline": "Nvidia는 990억 달러 규모의 포트폴리오를 개편했고, 1개의 주식이 순위를 올렸습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789518000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02724e8cc32dbaa8f471c8c4fb6f644d5278e11501b084c52049ceddfd776859",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dce2b9bf2760d850ecb2",
          "headline": "엔비디아(NVDA)가 AI IPO를 위해 최대 100억 달러를 논의하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789510402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06b55f52d782a58df06d9f4f9b68914742e6842528624ac6f94e9d64a7e2dc91",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2df89d5586c920ea45e1",
          "headline": "NVIDIA(NVDA)는 Salesforce 거래로 인해 저평가된 견해를 촉발한 후 새로운 플랫폼 테스트를 받았습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789506958,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a740db073e65b758284a46c3b47fbb8f82ef2de169baf77c3457fe3f490655f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b0ffa5164e4650ae65cd",
          "headline": "CSCO, NVDA 주가 상승 — Cisco와 Nvidia, Splunk 고객에게 에이전트 AI 제공을 위해 파트너십 확대",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789492169,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c6457795d0afc5861889af2a37e8e742284d5649309e336147b7319ef810bf2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d84ab48fbd444914a48c",
          "headline": "인도, 아이폰 수리 조사 확대 후 애플 주가 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789486736,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c5ad6092fabe1a15a62383727d518cb6da5eb62192629f1cb9e8df4d4d43151",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "41dd3fefc137fa35a3c9",
          "headline": "Dreamforce가 39억 달러 규모의 AI 엔진을 시험하면서 Salesforce가 미끄러졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789486515,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24e4f2f5249502eb40e171d322d9193341589e949ccd6162e862dcddf163f570",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "9cdeb832d0e87e2bbbc9",
          "headline": "Zacks 투자 아이디어 주요 내용: Nvidia, Taiwan Semiconductor, Arista Networks, Dell Technologies, Hewlett Packard 및 Super Micro Computer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789482840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86be1487052bf9f91d895920708fbf05ac247b0ccde50cc7dca7796d04f04d15",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "426edf304ec5572e0d5f",
          "headline": "SNDK, AI 스토리지 성장 활용: MU 및 STX를 능가할 수 있을까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789481640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ab152b6e703157b1d6f11642c064b1e41f40d6bdb2e5e71e84b8b10ac0af183",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 4,
      "unverifiedEvidenceCount": 18,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789565492,
      "signal": "주의 강화",
      "netScore": -8.76,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 2.97,
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
          "score": -4.08,
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
          "eventId": "a4567036ef9f678c9959",
          "headline": "이 억만장자가 페이스북에 투자하지 않은 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789565492,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fed714c3b839228ce5910d7766bf6e95d05c4f762e191a63af19a2cdb7cf311d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9c997994fdcaa7c3b408",
          "headline": "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까? INTC, SKHY, ORCL, SPCX, ASTS, CRCL, COIN 주식에 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789547564,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b04351b6a1f3e365dc88e64a6e7379760ffbc892797f0c86bbbae4f505ac12e2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "08e8464ea255b351f00f",
          "headline": "Michael Burry는 속도 저하에 대한 우려로 AI를 무시하는 7가지 단어를 말했습니다. \"속도를 늦출 수 있는 AI는 없습니다.\" 투자자들은 Nvidia와 Palantir Shorts를 신뢰해야 합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789538100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a52efd4d6f50652742b93398ab977a1c3d7b903f74e868b8a4514054b90eea9e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e97402f29b3673422fa9",
          "headline": "AMD 주식은 이미 2027년에 두 배로 가격이 책정되어 아직 제공되지 않았습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789520011,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=148d2b9a86f9fd2d148af7d671fb89645b9a830632cc135d26a642bc5aacc0af",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dce2b9bf2760d850ecb2",
          "headline": "엔비디아(NVDA)가 AI IPO를 위해 최대 100억 달러를 논의하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789510402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06b55f52d782a58df06d9f4f9b68914742e6842528624ac6f94e9d64a7e2dc91",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "60f526e50a15fa838e25",
          "headline": "인텔: 나쁜 제품은 없고 가격만 나쁠 뿐(등급 하향)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789493921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24253218157182bdae74306508e7f30ef1f0e4b3be7679ed837b8e25702026a8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d84ab48fbd444914a48c",
          "headline": "인도, 아이폰 수리 조사 확대 후 애플 주가 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789486736,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c5ad6092fabe1a15a62383727d518cb6da5eb62192629f1cb9e8df4d4d43151",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "41dd3fefc137fa35a3c9",
          "headline": "Dreamforce가 39억 달러 규모의 AI 엔진을 시험하면서 Salesforce가 미끄러졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789486515,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24e4f2f5249502eb40e171d322d9193341589e949ccd6162e862dcddf163f570",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9cdeb832d0e87e2bbbc9",
          "headline": "Zacks 투자 아이디어 주요 내용: Nvidia, Taiwan Semiconductor, Arista Networks, Dell Technologies, Hewlett Packard 및 Super Micro Computer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789482840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86be1487052bf9f91d895920708fbf05ac247b0ccde50cc7dca7796d04f04d15",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "90b3c99770c4da15a5f8",
          "headline": "Micron이 512GB DDR5 서버 메모리를 출시한 후 MU 주가 상승 – AMD, Intel, 새로운 서버 기술 검증",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789482183,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e4428fda73784dbdeb7055d7ffda5624234c4013c22e39ffa0204af82bac225",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "426edf304ec5572e0d5f",
          "headline": "SNDK, AI 스토리지 성장 활용: MU 및 STX를 능가할 수 있을까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789481640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ab152b6e703157b1d6f11642c064b1e41f40d6bdb2e5e71e84b8b10ac0af183",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "81f84c6e4cbb67927930",
          "headline": "AMD는 인텔의 점심을 먹고 있다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789470959,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=949e3443f330ecc33392d77b0b35a5a42fba5647548d2656aaa1a6166d077ce8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 7,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789477204,
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
          "eventId": "63482f4f4c9833cd1952",
          "headline": "Broadcom의 가장 큰 고객은 AI 속도를 늦추기를 원하며 여전히 구매 중입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789477204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ecdc138706f4585bbc86b0085bf0ebf3be910adb813656cfc39510626a2fd90",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2543381a2e0f2eaf8fd7",
          "headline": "Broadcom의 실제 제약은 수요가 아닙니다. 공급입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789475218,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0e96996b1a5bd3ab418e03e965cde68da13a9d89d81f37c97a72eed40e089a30",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d6bd7213d2d299f254dc",
          "headline": "Broadcom CEO Hock Tan, 2,300억 달러 규모의 AI 칩 매출 목표 방어",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789470673,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3ebebd478c4862b49060cd207358ab883dbf83476d3c20bde53335d1766c2b4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "de0d69e7ecefe1341be9",
          "headline": "AVGO SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1788966000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000080/avgo-20260802.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "bac04a9caa289d28845f",
          "headline": "AVGO SEC Form 8-K 공식 제출",
          "eventLabel": "매출",
          "publishedAt": 1788274800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-20260902.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789555800,
      "signal": "주의 강화",
      "netScore": -7.69,
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
          "score": -3.62,
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
          "eventId": "d55edb3320abbea3b46b",
          "headline": "Apple에서 Tim Cook의 가장 결정적인 움직임은 AI와 관련이 없습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789555800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db732d605a24a75a773506774ccc7adc0510edccf1cae68f084a011a6594952a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "9927c6186faad952050d",
          "headline": "퀄컴 주가 급등. Amazon AI 칩 거래로 새로운 성장의 길 열다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789500904,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a09085e1224b7d222fe74b90a81b30fc3fdcde863033b121dbdac60706468a9a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d84101dd43db587b4a25",
          "headline": "퀄컴 쌓기 시작했는데 아마존과 메타 때문은 아니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789491333,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e485e125aac2c0892310b29c48014eee7c31b9422b3044c44a41584dbd81dfe5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7d0fbba28ef9104c3259",
          "headline": "어플라이드 머티어리얼즈 vs. 퀄컴: 2026년에는 어느 기술주를 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789473901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45da079c6df91916bb73bfc99fcc10f7c4724d722da16eb42437cb64d43331ee",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0416214ecdc2fb924bf4",
          "headline": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789445485,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "369524e40b4f3b079903",
          "headline": "QCOM SEC Form 8-K 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1788793200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000110465926105718/tm2623289d1_8k.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789493921,
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
          "eventId": "60f526e50a15fa838e25",
          "headline": "인텔: 나쁜 제품은 없고 가격만 나쁠 뿐(등급 하향)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789493921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24253218157182bdae74306508e7f30ef1f0e4b3be7679ed837b8e25702026a8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8a37500c13eff07bd7cc",
          "headline": "ARM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788966000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000128/arm-20260910.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "9763781dbb5a08504fd7",
          "headline": "ARM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786287600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000117/arm-20260810.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789486213,
      "signal": "주의 강화",
      "netScore": -6.71,
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
          "score": -1.52,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -3.05,
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
          "eventId": "7e3c1b8e6bc92400c87d",
          "headline": "AI 붐에는 비밀 무기가 있는데 바로 마블입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789486213,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac7a8728ad8901634fc0ef1272c7c4607c5dc0a89015d347b657db3bda065c13",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c8e7208365402c91d4f3",
          "headline": "MRVL SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1787842800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000025/mrvl-20260801.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f38e3eb137af6ef4160e",
          "headline": "MRVL SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1787756400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000022/mrvl-20260827.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "b853cd77f81c66b56636",
          "headline": "MRVL SEC Form 8-K 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1787065200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000119312526356217/d412696d8k.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789563508,
      "signal": "주의 강화",
      "netScore": -10,
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
          "eventId": "91740a818f95262c5a58",
          "headline": "메모리 제조사가 인텔과의 잠재적 거래 보고에 대응하면서 SK하이닉스 주가가 급등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789563508,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a6c72bd0bc5edb668e73d1b55bdcfed9598afb680d50146a2370c6132c8ba42",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "be68fc37ec0520421f2b",
          "headline": "인텔은 4% 상승, SK하이닉스는 오하이오 캠퍼스에서 메모리 칩 제조 협상 보고에 3% 상승; 마이크론은 평탄한 상태를 유지",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789562373,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf2b4193a38b60bb74c14ee5664c161e79694ba18e28ba25e2f7f3a8efcd60a0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9c997994fdcaa7c3b408",
          "headline": "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까? INTC, SKHY, ORCL, SPCX, ASTS, CRCL, COIN 주식에 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789547564,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b04351b6a1f3e365dc88e64a6e7379760ffbc892797f0c86bbbae4f505ac12e2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "00aca045952220366f55",
          "headline": "META의 Zuckerberg, Wang, AI 진행 속도 저하 요구에 반발: '정렬'이 리더를 차별화할 수 있음",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789533911,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f0bc7a9cdb72f4cd3a37e50321de63789449c63b188dd21b996dc04ee58f8da2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32f774ca32b9d01d172a",
          "headline": "아직 충분히 만들지 못하는 칩을 위해 인텔 주식을 구입해야 합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789521106,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae4a63dbd83214990ec83173a2f2c9f9f22bb6da71d3a9dd4e66e2dcd98f9d70",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "18ba5e5d76041e245e20",
          "headline": "Pinterest, Nvidia와 파트너십을 맺고 AI 쇼핑 및 검색 서비스 강화",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789510649,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=69d2d83cebfb06867ffe434c344b470660b6aef597bb73d3efc38eeec82ca282",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "651799e9871e68378cc7",
          "headline": "S&P 500, Nasdaq, Dow는 Fed 회의를 앞두고 투자자들의 금리 인상으로 하락 마감 — AMZN, META, MU, TSLA, PLTR 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789509895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=937b1548531416896a208cab353bef25747baa53e6bb5913f23c7bfa721f6d8a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "18ab7fbd2f3aeb135149",
          "headline": "Meta, 크리에이터 마케팅 허브인 IG 라이브 비디오 광고 출시",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789508725,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0d381a388807a7dac4de2ba471589c7568d04c9651e97316e90abc96b781635",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "60f526e50a15fa838e25",
          "headline": "인텔: 나쁜 제품은 없고 가격만 나쁠 뿐(등급 하향)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789493921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24253218157182bdae74306508e7f30ef1f0e4b3be7679ed837b8e25702026a8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cc92d86dd4094ccba548",
          "headline": "GE Vernova, 일본 풍력 발전 단지에 터빈 공급 예정",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789481701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc1b9166f31dbd9db487213fa2f2fbf1a4b787e7f220539f62f3661cd0bea689",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "81f84c6e4cbb67927930",
          "headline": "AMD는 인텔의 점심을 먹고 있다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789470959,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=949e3443f330ecc33392d77b0b35a5a42fba5647548d2656aaa1a6166d077ce8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c8802c62cd9001629875",
          "headline": "Nvidia의 최신 움직임은 AMD와 Intel 투자자들에게 문제를 야기합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789466100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dadd884607cb04d8639fd58d2e8c6c540bba449b4232c96827aad817e6d127c3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 4,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789566011,
      "signal": "주의 강화",
      "netScore": -2.87,
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
          "eventId": "692ef92f49e0b4cb0349",
          "headline": "ASML 대. 대만 반도체 제조: 하나가 더 오해를 받고 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789566011,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d4485437bdbb25eab7aa5b1cb32e77f6e248dd4cdfc25e701eaf76eee2e61b2c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cb43b8aee1c751382be3",
          "headline": "ASML vs. Taiwan Semiconductor Manufacturing: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789559101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2e9e4b68b3d1a3ce1a37a54e494f94c665cb44ec0c6871a6e5505f97c5f051d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9cdeb832d0e87e2bbbc9",
          "headline": "Zacks 투자 아이디어 주요 내용: Nvidia, Taiwan Semiconductor, Arista Networks, Dell Technologies, Hewlett Packard 및 Super Micro Computer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789482840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86be1487052bf9f91d895920708fbf05ac247b0ccde50cc7dca7796d04f04d15",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f86b3b227df61c7eef51",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788966000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000658/tsm-revenue20260910.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "3af05215b5a12b002b10",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788188400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000552/tsm-dividendadjustmentx202.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "375f36acf0e374440d57",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787583600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000545/tsm-monthend6kx20260825.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f7beb34b8c4ab4d90ad5",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786633200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000541/tsm-fsx20260814x6k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "7154ba9075f3fb096448",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786374000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000539/sonysemiconductorsolutions.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "3df7c4c53d2030407c4b",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786374000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000536/tsm-boardx20260811.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "e6bbd93755feb2a10bc4",
          "headline": "TSM SEC Form 6-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1786287600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000471/tsm-revenue20260810.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 7,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789566011,
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
          "eventId": "692ef92f49e0b4cb0349",
          "headline": "ASML 대. 대만 반도체 제조: 하나가 더 오해를 받고 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789566011,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d4485437bdbb25eab7aa5b1cb32e77f6e248dd4cdfc25e701eaf76eee2e61b2c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cb43b8aee1c751382be3",
          "headline": "ASML vs. Taiwan Semiconductor Manufacturing: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789559101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2e9e4b68b3d1a3ce1a37a54e494f94c665cb44ec0c6871a6e5505f97c5f051d",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789473901,
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
          "eventId": "7d0fbba28ef9104c3259",
          "headline": "어플라이드 머티어리얼즈 vs. 퀄컴: 2026년에는 어느 기술주를 사는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789473901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45da079c6df91916bb73bfc99fcc10f7c4724d722da16eb42437cb64d43331ee",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "437ebc3c071f1823cd7e",
          "headline": "AMAT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787756400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026059257/amat-20260827.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "2e59ff4c9a3f1304342c",
          "headline": "AMAT SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1787151600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/amat-20260726.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "1eb3897c85f78df77466",
          "headline": "AMAT SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1786546800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026056699/amat-20260813.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1787756400.0,
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
          "eventId": "bec0478fe9fa24e04eff",
          "headline": "LRCX SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787756400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000043/lrcx-20260824.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "d6c857ebbafe6d07ab73",
          "headline": "LRCX SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786028400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000037/lrcx-20260628.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1785942000.0,
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
          "eventId": "0697ca75061948d7413f",
          "headline": "KLAC SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1785942000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000027/klac-20260630.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "465854d165b277703795",
          "headline": "KLAC SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1785942000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000119312526338242/d165938d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MU": {
      "ticker": "MU",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789565492,
      "signal": "주의 강화",
      "netScore": -5.6,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.23,
          "level": "우호적"
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
          "score": -5,
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
          "eventId": "a4567036ef9f678c9959",
          "headline": "이 억만장자가 페이스북에 투자하지 않은 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789565492,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fed714c3b839228ce5910d7766bf6e95d05c4f762e191a63af19a2cdb7cf311d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7998265fcf68fd522baf",
          "headline": "Nvidia와 SK Hynix가 Micron의 전망에 대해 시사하는 것",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789565100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4fbadb3b4cb5846297a34b0a128c34fb903759c5997163ac6feb286f7cfe312b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "be68fc37ec0520421f2b",
          "headline": "인텔은 4% 상승, SK하이닉스는 오하이오 캠퍼스에서 메모리 칩 제조 협상 보고에 3% 상승; 마이크론은 평탄한 상태를 유지",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789562373,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf2b4193a38b60bb74c14ee5664c161e79694ba18e28ba25e2f7f3a8efcd60a0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d55edb3320abbea3b46b",
          "headline": "Apple에서 Tim Cook의 가장 결정적인 움직임은 AI와 관련이 없습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789555800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db732d605a24a75a773506774ccc7adc0510edccf1cae68f084a011a6594952a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "08e8464ea255b351f00f",
          "headline": "Michael Burry는 속도 저하에 대한 우려로 AI를 무시하는 7가지 단어를 말했습니다. \"속도를 늦출 수 있는 AI는 없습니다.\" 투자자들은 Nvidia와 Palantir Shorts를 신뢰해야 합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789538100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a52efd4d6f50652742b93398ab977a1c3d7b903f74e868b8a4514054b90eea9e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "dce2b9bf2760d850ecb2",
          "headline": "엔비디아(NVDA)가 AI IPO를 위해 최대 100억 달러를 논의하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789510402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06b55f52d782a58df06d9f4f9b68914742e6842528624ac6f94e9d64a7e2dc91",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "651799e9871e68378cc7",
          "headline": "S&P 500, Nasdaq, Dow는 Fed 회의를 앞두고 투자자들의 금리 인상으로 하락 마감 — AMZN, META, MU, TSLA, PLTR 초점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789509895,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=937b1548531416896a208cab353bef25747baa53e6bb5913f23c7bfa721f6d8a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d84ab48fbd444914a48c",
          "headline": "인도, 아이폰 수리 조사 확대 후 애플 주가 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789486736,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c5ad6092fabe1a15a62383727d518cb6da5eb62192629f1cb9e8df4d4d43151",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "41dd3fefc137fa35a3c9",
          "headline": "Dreamforce가 39억 달러 규모의 AI 엔진을 시험하면서 Salesforce가 미끄러졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789486515,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=24e4f2f5249502eb40e171d322d9193341589e949ccd6162e862dcddf163f570",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9cdeb832d0e87e2bbbc9",
          "headline": "Zacks 투자 아이디어 주요 내용: Nvidia, Taiwan Semiconductor, Arista Networks, Dell Technologies, Hewlett Packard 및 Super Micro Computer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789482840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86be1487052bf9f91d895920708fbf05ac247b0ccde50cc7dca7796d04f04d15",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "90b3c99770c4da15a5f8",
          "headline": "Micron이 512GB DDR5 서버 메모리를 출시한 후 MU 주가 상승 – AMD, Intel, 새로운 서버 기술 검증",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789482183,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e4428fda73784dbdeb7055d7ffda5624234c4013c22e39ffa0204af82bac225",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "426edf304ec5572e0d5f",
          "headline": "SNDK, AI 스토리지 성장 활용: MU 및 STX를 능가할 수 있을까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789481640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ab152b6e703157b1d6f11642c064b1e41f40d6bdb2e5e71e84b8b10ac0af183",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 18,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789485090,
      "signal": "주의 강화",
      "netScore": -2.38,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -1.4,
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
          "eventId": "a81298f51aa31b342fbe",
          "headline": "SNDK 주식은 이전에 딥 구매자에게 보상을 받았지만 여전히 같은 회사입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789485090,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9024c47232dd90e524c5f0c4260c38d28f3ee443361b404fe93f92eb86dcb1c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "426edf304ec5572e0d5f",
          "headline": "SNDK, AI 스토리지 성장 활용: MU 및 STX를 능가할 수 있을까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789481640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ab152b6e703157b1d6f11642c064b1e41f40d6bdb2e5e71e84b8b10ac0af183",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ff2b8e4713a284a821e3",
          "headline": "차세대 인프라 병목 현상으로 인해 Micron 및 Sandisk를 능가할 3가지 AI 주식",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789472700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f360aa56f15b34bd05cab5f5f70875eec577478da7f8f69be14e92f44077be5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "50226a5e93c94d2dae2b",
          "headline": "SKHY, MU, SNDK를 조심하세요: 일본의 KIOXIA는 AI 메모리 붐을 타고 100억 달러 규모의 미국 상장을 주목하고 있는 것으로 알려졌습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789458532,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a98ae0ca329afb8b781d88770532343287f62f1fa376ffa6883bd19032c5434",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "736e6c7bdd834dc87f7d",
          "headline": "자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789413156,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0a6793ba3a2c331f1f62688ec5ecc953b11ea5b426897bc3da48486cc550ac5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fefd486f5309387c2330",
          "headline": "AMD, BE, CRWV에 초점: 상황 인식이 이러한 주식과 관련된 옵션을 구매하는 것으로 보고됨",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789141691,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=714d14fc03292749fb6230cbe86b6010bac8821b4abcd12b5ab43fc3b3fef54f",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c539f2fe14adb2f5d70b",
          "headline": "SNDK SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1789052400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000119312526389293/d138343d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "9bfd5d4890acc33d83b2",
          "headline": "SNDK SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786892400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026057406/sndk-20260703.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "ab131d5f57bdcb8639aa",
          "headline": "SNDK SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1785855600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndk-20260805.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789555800,
      "signal": "주의 강화",
      "netScore": -6.28,
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
          "score": -2.52,
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
          "eventId": "d55edb3320abbea3b46b",
          "headline": "Apple에서 Tim Cook의 가장 결정적인 움직임은 AI와 관련이 없습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789555800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db732d605a24a75a773506774ccc7adc0510edccf1cae68f084a011a6594952a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "3051ab30aff887d7694e",
          "headline": "WDC SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1789311600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000119312526389859/d23939d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "701badfc640c40d23ccc",
          "headline": "WDC SEC Form 8-K 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1787670000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000119312526365796/d376254d8k.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "b5ac926ef185c3fc6f5a",
          "headline": "WDC SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786633200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026057139/wdc-20260703.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "41d3295b1e13e31c69d0",
          "headline": "WDC SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1785855600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026053305/wdc-20260805.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 4,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789482840,
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
          "eventId": "9cdeb832d0e87e2bbbc9",
          "headline": "Zacks 투자 아이디어 주요 내용: Nvidia, Taiwan Semiconductor, Arista Networks, Dell Technologies, Hewlett Packard 및 Super Micro Computer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789482840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86be1487052bf9f91d895920708fbf05ac247b0ccde50cc7dca7796d04f04d15",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cde9c5b2ac00b4a9e1ce",
          "headline": "ANET SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1785855600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000175/anet-20260630.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "da282ee100d0f5c5f9c1",
          "headline": "ANET SEC Form 8-K 공식 제출",
          "eventLabel": "매출",
          "publishedAt": 1785769200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000174/anet-20260804.htm",
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
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789408190,
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
          "eventId": "70cf57446a6c47a317ed",
          "headline": "코닝, 20억 달러 규모의 시장 주식 공모에서 12% 하락; 코히런트 싱크 11%, 루멘텀 드롭 9%, 파브리넷 슬라이드 6%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789408190,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12a7d152d69368274062f1295fd27d17ab50c5b0392ff5563a0679785b3bd09a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8221d0ebdc98201d7b6e",
          "headline": "COHR SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788102000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526375462/d110649d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "a569bcdbdc06e58f6f0b",
          "headline": "COHR SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786633200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000082031826000020/iivi-20260630.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "a1a151634101bb46047f",
          "headline": "COHR SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1786460400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526346860/d128030d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789408190,
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
          "eventId": "70cf57446a6c47a317ed",
          "headline": "코닝, 20억 달러 규모의 시장 주식 공모에서 12% 하락; 코히런트 싱크 11%, 루멘텀 드롭 9%, 파브리넷 슬라이드 6%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789408190,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12a7d152d69368274062f1295fd27d17ab50c5b0392ff5563a0679785b3bd09a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6c5e1c93ecb7dc96dc6e",
          "headline": "LITE SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786892400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026057358/lite-20260627.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "c034a4cec92feb979458",
          "headline": "LITE SEC Form 8-K 공식 제출",
          "eventLabel": "EPS",
          "publishedAt": 1786374000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026055726/lite-20260811.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789552800,
      "signal": "주의 강화",
      "netScore": -2.31,
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
          "eventId": "ff7af9360e95b1f05851",
          "headline": "GE Vernova, Eurus Energy에 29.4MW 풍력 용량 공급",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789552800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbbc1b9577592181744a08cc32b2b6efd8544e93b8768f156ffdc35cc71ba36c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "559dc483d0924f8e4a17",
          "headline": "GE Vernova는 파트너 Blue Energy가 BWRX-300 소형 모듈형 원자로 건설 허가 신청서의 첫 번째 부분을 미국 원자력 규제 위원회에 제출했다고 발표했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789551421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=231200261b3d5560790f5f14eddff26a17eb38b79471d81d3a49b8a3cec1fc3d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "69fd6db869a5cf4b5962",
          "headline": "GE Vernova가 베네수엘라에서 대규모 계약을 체결했습니다. 이 뉴스만으로 주식을 매수할 수 있나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789547700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16a145af9012e9c0b2e05d7db2338ac19aa8973d59271faa479c2c31651d5ba4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "55584eb1cecb323b96e8",
          "headline": "Bloom Energy vs. GE Vernova: 2026년에는 어느 주식을 사는 것이 더 나을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789483395,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a792e5c47f739cfecf0b4caef4d9ff51b40cbb84763725e2cfc253ead33377",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cc92d86dd4094ccba548",
          "headline": "GE Vernova, 일본 풍력 발전 단지에 터빈 공급 예정",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789481701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc1b9166f31dbd9db487213fa2f2fbf1a4b787e7f220539f62f3661cd0bea689",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3b99b703ef8adb532615",
          "headline": "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789404062,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99defa2386286d4beced20f4c09c63826a28bece3edf13b6686b154c99b93843",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fa137cefdf21cd107824",
          "headline": "GEV SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787756400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000153/gev-20260825.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789531431,
      "signal": "우호적 변화",
      "netScore": 3.7,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
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
          "eventId": "1e2e3da049e2755aba98",
          "headline": "Shell과 Constellation Energy, 7억 1500만 달러 규모의 전력 거래 성사",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789531431,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c836ad7ba737b36e691be0e1c075c90a443368f1f3d34c76f261721bfd0b0a2a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ae102a98e090cc8cf74",
          "headline": "Constellation Energy(CEG) 주식은 7억 1,500만 달러 규모의 발전소 거래에도 불구하고 적정 가치보다 낮을 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789428007,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfb5762b256eccdb074d6e0fd3553ba3cb1cbc2f2884e68baea77c0eff683ed4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a696029dc28e52ea50b8",
          "headline": "별자리 에너지는 시장이 반영하는 것보다 더 많은 상승 여력을 갖고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789392022,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f0954ed281fc8eaff1cbeca84aa6946c926a6d5d51420d39c5f1a3a5e9b17257",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "59cf30440f10eef41784",
          "headline": "Constellation Energy는 Shell로부터 609MW 로드아일랜드 가스 플랜트 구매 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789380997,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73b9f68e17e42e6a48c4316c080c35dda3806d1d72446301dcc81be4b4311778",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "898e985a475d0e51ecfc",
          "headline": "CEG SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1785942000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000104/ceg-20260630.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "6fc86a6be4821bf6b04e",
          "headline": "CEG SEC Form 8-K 공식 제출",
          "eventLabel": "매출",
          "publishedAt": 1785942000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000097/ceg-20260806.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "e3f9956c6d0fe5bfa978",
          "headline": "CEG SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1785855600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000089/ceg-20260804.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789311600.0,
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
          "score": -3.0,
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
          "eventId": "9dbfa76003414eefe7b9",
          "headline": "VST SEC Form 424B2 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1789311600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126036415/ny20081693x3_424b2.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "69eee8938aae6dc8d0a5",
          "headline": "VST SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1788966000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126036130/ny20081693x2_424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "6a49f6673bab26e1209f",
          "headline": "VST SEC Form S-3ASR 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1788879600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000114036126035954/ny20081693x1_s3asr.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "3590ae64ba75ef6c4e10",
          "headline": "VST SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786287600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000019/vistra-20260630.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f01358d6bad9129df567",
          "headline": "VST SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1786028400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000017/vistra-20260807.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 5,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1785423600.0,
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
          "eventId": "3848a25213b69fc5e991",
          "headline": "ETN SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1785423600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000030/etn-20260630.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789404062,
      "signal": "주의 강화",
      "netScore": -9.15,
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
          "eventId": "3b99b703ef8adb532615",
          "headline": "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789404062,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99defa2386286d4beced20f4c09c63826a28bece3edf13b6686b154c99b93843",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee781da57da68416acca",
          "headline": "PWR SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1789398000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1050915/000119312526391989/d78508d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "32f0f10ccd82aac763e3",
          "headline": "PWR SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1785942000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1050915/000119312526337945/d164254d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "6a34ff15d048e2983c79",
          "headline": "PWR SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1785855600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1050915/000119312526335074/d115922d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f94a3f33bf7306ae3013",
          "headline": "PWR SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1785769200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1050915/000119312526331400/d114917d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "e81980954593f4f2ba96",
          "headline": "PWR SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1785682800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1050915/000119312526329614/d115922d424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "4e43bca6fdef32d715b0",
          "headline": "PWR SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1785337200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1050915/000105091526000025/pwr-20260630.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 6,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1789581609.2066228,
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
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789515121,
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
          "eventId": "9c94ea50538cbe59fe52",
          "headline": "Intuitive Machines vs. Vertiv: 2026년에는 어떤 산업재 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789515121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d6c78ff6bfbbb964f4b33f062c3d432fe0189c113d4dd9daa7b1dd6919e66999",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "811a1b43c3ebee36214d",
          "headline": "Vertiv(VRT) 주식은 26억 달러 규모의 AI 전력 거래에 따라 공정한 가격을 유지합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789456270,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=172c9eb73e0695be9d952800d218689e92478c03d0caa8c526a60ac6cf25553c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "af75903b55282995fc28",
          "headline": "VRT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788274800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000119312526379306/d472406d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "d99316498a06134022f9",
          "headline": "VRT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788274800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026059961/vrt-20260902.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1788966000.0,
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
          "eventId": "834ee3a8b12e3092db74",
          "headline": "MOD SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788966000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926106727/tm2625001d1_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "a210724266081fe15be0",
          "headline": "MOD SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787238000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926099432/mod-20260820x8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f4500d5611906ec0b705",
          "headline": "MOD SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1785337200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926088569/mod-20260630x10q.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "STX": {
      "ticker": "STX",
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1789481640,
      "signal": "주의 강화",
      "netScore": -3.7,
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
          "score": -1.65,
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
          "eventId": "426edf304ec5572e0d5f",
          "headline": "SNDK, AI 스토리지 성장 활용: MU 및 STX를 능가할 수 있을까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789481640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ab152b6e703157b1d6f11642c064b1e41f40d6bdb2e5e71e84b8b10ac0af183",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "af0e184d3ebe0f40a23e",
          "headline": "STX SEC Form 8-K 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1788879600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000119312526385961/d109585d8k.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f8bcc0e54d7ed35676a8",
          "headline": "STX SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788447600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000201/stx-20260902.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "8208e8097462d73682da",
          "headline": "STX SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1785769200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000159/stx-20260703.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1789581609.2066228,
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
      "updatedAt": 1789581609.2066228,
      "dataAsOf": 1785682800.0,
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
          "eventId": "fdb69e8eee1fc8ef23c9",
          "headline": "FIX SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1785682800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1035983/000110465926089781/tm2621841d1_8k.htm",
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
      "updatedAt": 1789581609.2066228,
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
