// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1787574884.643864,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787381348,
      "signal": "주의 강화",
      "netScore": -6.92,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -1.4,
          "level": "주의"
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
          "score": -2.8,
          "level": "주의"
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
          "eventId": "6a671e52cf65751e29ac",
          "headline": "Microsoft: 측정된 자본 지출을 충족한 더 높은 수익 가시성",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787381348,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9180ed2f1e5947e13ec865da5f72aa4215ea7e1cfa9879a73e7b475c77724453",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fd7957f2ebbff3e2c9ea",
          "headline": "성능 비교: Microsoft와 소프트웨어 산업의 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787291901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03ec54d9efdf243476552f8c91ff6fe9fa68cf758c466dace0d950ed7d1de3b5",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "647268a1ae5381003afe",
          "headline": "비교 연구: 소프트웨어 산업의 Microsoft와 업계 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787119120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5472286926ad547dca238fda7db1a25ef36e61957bbc612fe5d811b128c36e6d",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f20046d1524e1e46c369",
          "headline": "심층 분석: Microsoft와 소프트웨어 산업의 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787032718,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a577a428369a4c9a6fd573f6048ec05ff2bf0b62117bcb82c8f43b9464702ab",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "05e05c7819322ec51447",
          "headline": "Microsoft를 소프트웨어 산업의 업계 경쟁사와 비교",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1786946311,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e94e8a13f2a2a6a5dbd759ae5020f8dea8ced052cef64843cf2ad251de51e6a",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787537609,
      "signal": "우호적 변화",
      "netScore": 3.19,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.68,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.67,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.62,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 1.75,
          "level": "우호적"
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
          "eventId": "4e62359796625faf1367",
          "headline": "마벨 테크놀로지: 수많은 움직이는 부품",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787537609,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfa3de0d1f365df4ac5b3127f32e9707f529fe59ec802d3d892bc869e11a0d94",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c44998aeb508a0d3cfa7",
          "headline": "Marvell 투자자는 최신 Google 거래를 신중하게 고려해야합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787429580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15f1670bbdc24b40cb41c83b37f90403c53024b5a1c3128e6de13a2ef973beb5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9da0a1c14d000a16790e",
          "headline": "알파벳은 Marvell의 7% 를 소유할 수 있습니다. 하지만 이를 얻기 위해 Google이 해야 할 일은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787417327,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3823748f09349ce02b5ea4ecf5c32ee421449de52fa4e7800bb5233d0896f24",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "649ac909bfe61a7ed225",
          "headline": "Meta는 법정에 상륙한 최신 기술 거인입니다. 이본느 곤잘레스 로저스 판사를 만나보세요",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787385601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c3e4671d412eba59683f5b4fd378521ca4434e4b991bed8d8da4491d9fa3690",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "778edd0b083374fb357d",
          "headline": "Google은 Marvell의 칩 구매에 대해 Marvell 주식 영장으로 돈을 받고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787374021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6caf38ab8ba9a2f6e73801672417a6805cfa580a5d37e9b2fab25f94c2f75c24",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6d2fc5c0b7f8eca00e1a",
          "headline": "Marvell의 전망은 계속 좋아지고 있지만 위험 보상은 그렇지 않습니다(등급 하향)",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1787361786,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3a13ec5d8b96e4090b06fef861716004198b53e96b80957597f7cbc14620f360",
          "factorChanges": {
            "growth": -2,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "262754c46c0a95aef371",
          "headline": "Broadcom(AVGO)은 Google이 Marvell과 AI 칩 관계를 확장한 후 6.2% 하락했습니다. - 변경된 사항",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787353957,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=385f87dc5a3077a001a300dcab06754fae86880aa05bd125bcc9fb850f436b75",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성"
        },
        {
          "eventId": "ebc15695cf2b9ca79c6c",
          "headline": "Google AI 파트너십 확장 후 Marvell Technology(MRVL) 주식 공정 가치가 더 높아졌습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787350242,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4606ed97a124a5f7d5e42efc68f840b45657a022b36e2d2ddae287c35651dd8e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "395303ef342f3de4c776",
          "headline": "Broadcom보다 먼저 Marvell을 구입하는 것은 큰 실수입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787301401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=41a87a44b2d9db0343df5a3e124c0a41c98f2e1827eabeae6e09369b39409150",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "46f9fdd0cb4f1a46cfed",
          "headline": "Meta, Google 및 Snap은 청소년이 주요 재판을 앞두고 소셜 미디어 중독 소송을 제기함에 따라 휴식을 취합니다(업데이트됨)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787300740,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b900c64d3b6d10f749db951b4aa543bb3fc992e0717798efb60a5f171b692dfa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1167a4f5402a87596d89",
          "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787228312,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a884e1373759b4a84537",
          "headline": "Marvell Technology: Google과의 122억 달러 규모의 거래가 엄청나게 유익한 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787221144,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0cc7f51ab765279a8768d07c2f8734e8112595c50744b39a0c87b0b99b7ed788",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787499300,
      "signal": "중립·확인 대기",
      "netScore": -1.12,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 2.27,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.0,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.95,
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
          "eventId": "92327917c606609aac4d",
          "headline": "아마존의 잉여현금흐름 (Free Cash Flow) 은 영업현금흐름 (Operating Cash Flow) 이 33% 상승하더라도 마이너스 76억 $ 를 기록했다. Gap AI Capex가 실제로 만들고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787499300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9905b210869231b722441eba4e31cff86108bf3179b3579bcc7fa5dfcd60758",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "5e07841cef5fe94c78c3",
          "headline": "아마존이 최고 성장 주식이라면 S&P 500이 20.4배로 거래되는 동안 왜 단지 21.3배의 순이익으로 거래됩니까? 이것이 내가 생각할 수 있는 유일한 해답입니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787488500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9dcc2287ef66a958ed72e89b6c823acb682681976b1000979d8ef38026bd6060",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5f8be2a7ad25578f86cb",
          "headline": "억만장자 데이비드 테퍼는 아마존 주식에서 75억 $ Appaloosa 포트폴리오의 16% 를 보유하고 있습니다. 여전히 구매인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787484120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1a2fe8374bda66402021b3d6c7cac518a1fd05ef6031ff44d3525ca525fe7b7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ac0db9d90ad213e82d68",
          "headline": "광범위한 소매 산업의 경쟁사와 비교하여 Amazon.com의 성과 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787291906,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9d79cdecc5fa42b3b1a0d63f1cf5967e0ae1cc258a0ddba105e8ece418391dc0",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "81f1190433cb049b2da2",
          "headline": "AMZN SEC Form 424B3 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1786978800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926098339/tm2617924-6_424b3.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787462400,
      "signal": "주의 강화",
      "netScore": -3.49,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.35,
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
          "score": -4.72,
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
          "eventId": "edd1dce8f2aa962cdd91",
          "headline": "마크 주커버그 (Mark Zuckerberg) 는 이번 주에 메타의 무제한 AI 구축을 방어하는 6,500단어 AI 선언문을 발표했습니다. 투자자가 관심을 가져야 하는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787462400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e79f44d2940251377f849af19d030c8f19209e97d2d57cfe1b276158b1728d80",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d94b12657c1c50ca60da",
          "headline": "메타: 우리는 전에도 이런 상황을 본 적이 있습니다(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787387443,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ae7b8de08aa2e1923c854462aad4d7a236ddd84cf640268226a5120b025d2a95",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "649ac909bfe61a7ed225",
          "headline": "Meta는 법정에 상륙한 최신 기술 거인입니다. 이본느 곤잘레스 로저스 판사를 만나보세요",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787385601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c3e4671d412eba59683f5b4fd378521ca4434e4b991bed8d8da4491d9fa3690",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "66d5920aa7c21a67b5e0",
          "headline": "Broadcom의 최신 부채 거래",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787310979,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c04227ae5351fa6a90d147eba0b15cb06cef2dd3553225b4a061c65c3016eeb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "46f9fdd0cb4f1a46cfed",
          "headline": "Meta, Google 및 Snap은 청소년이 주요 재판을 앞두고 소셜 미디어 중독 소송을 제기함에 따라 휴식을 취합니다(업데이트됨)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787300740,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b900c64d3b6d10f749db951b4aa543bb3fc992e0717798efb60a5f171b692dfa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0b9f59ba003e93a2b87c",
          "headline": "더 이상 둠 스크롤이나 인스타그램 스토리가 없나요? 메타 시험에서 패배하면 우리가 알고 있는 소셜 미디어가 종료될 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787295601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e5a0aa94129cb28a903a31cddf27ec507b838c34d1913e6987fa3f4ad78221a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8d90c24c842f7dce6142",
          "headline": "Marvell, Google 거래에 뛰어들다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787161425,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51ace3d5fb5d7a5b702eb2d19980758b78e0c04d20dd7e908a3abb0d3b8ae002",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6983b352153d3b458e14",
          "headline": "정오에 가장 큰 움직임을 보이는 주식: Meta, Amylyx, Baidu, Klarna, Coherent, Sandisk 등",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787057783,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c72c281529f57a71ec992c40b253a421c53b8fa4b522b66a5a9c0b159bc2e730",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f0a3b94e466980dad610",
          "headline": "Viking Global Investors, Meta Platforms Inc의 주식 지분을 75.8%에서 190만 클래스 A 주식으로 인상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786724767,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c269b2e7e7c4825e0c701852021f83c6a10a024167f8475b6181c283b74946ba",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0c86068003c54a67c471",
          "headline": "텐센트, 메타딜 청산으로 마누스 최대주주로 올라 텐센트, 페이스북 모기업 메타로부터 중국 인공지능 개발자 마누스 지분 인수해 최대 기업으로 성장",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786621274,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d11879ecc00cfe961d0b9427413876c6169fb16bcb2b9b809664dd9b3c2a0d0d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "11ce3cc826b4233fee60",
          "headline": "개방형 AI 추진이 확대되는 가운데 투자자가 메타 플랫폼(META) 청소년 시험에 대응할 수 있는 방법",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786601450,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a1011b2a9ce41507a89e0bd142cdcdafa1d3dfe31c0e9d8ebe3ecc2c2296e68",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787478600,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -3.32,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -5,
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
          "eventId": "5bdf6a9f44afed3a3725",
          "headline": "Qualcomm: 붕괴의 순간 구매가 드디어 시작되었습니다 (등급 업그레이드)",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787478600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e509ebb77bba321cbfc8f884501983f0ffa14a81e5bdee57affacee016d60339",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f8d0d7a34cae686c9a67",
          "headline": "Apple, EU 표준 앱스토어 커미션 30% 에서 26% 로 삭감",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787460181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d48f1ed8d15eae99f6ae5306f20167c82d36f8ec33de008f03f4a4d7b36f22c7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "40591f6267cbe7055f16",
          "headline": "모든 S&P 500 인덱스 펀드 소유자는 Apple보다 Nvidia를 더 많이 보유하고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787391121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd4f750c40540d512caea103877ee7b76543da7f09a057e562044f77890fed31",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "649ac909bfe61a7ed225",
          "headline": "Meta는 법정에 상륙한 최신 기술 거인입니다. 이본느 곤잘레스 로저스 판사를 만나보세요",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787385601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c3e4671d412eba59683f5b4fd378521ca4434e4b991bed8d8da4491d9fa3690",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f81200ea6bc1cc4c3155",
          "headline": "'애플은 법원의 체납금 판결 이후 아일랜드에 170억 달러의 세금을 납부했습니다' - Financial Times",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787301459,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78ec50cf42fcc10fcff5bdf09a62da923d9804a1534ff1738bdbbea873a9474a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cc11065509f12201d74d",
          "headline": "Qualcomm: 강력한 전환 기회",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787297649,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d860c72aeabbc88ffd7ac5ac5309f7b2fdbac3c079348b1be7706a340bda729a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "936d88911278db315ec0",
          "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787212801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "62d42c0b5788d9ff03ad",
          "headline": "기술 하드웨어, 스토리지 및 주변 장치 산업에서 Apple과 업계 경쟁사 비교",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787119115,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c43c3f8c098b3de957c02804e4fcfc2dca39323873cbbb19061f40e998f2067",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787352524,
      "signal": "중립·확인 대기",
      "netScore": -0.83,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
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
          "eventId": "059dbce5349413805718",
          "headline": "미국 주식 지수는 장기 국채 수익률 상승으로 인한 압력으로 주말 하락세 — PSKY, MSTR, WMT, TSLA, NVDA 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787352524,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c391ed03d42e61632a99f98d9ca8ec0f32a5195b33a7b6127966b427202f7024",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "71d150723dca23fbe3f8",
          "headline": "Tesla Optimus 라이벌 Unitree Robotics, 상하이 데뷔에서 629% 폭발, 일시적으로 660억 달러 가치 달성",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787108869,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1e9f6f7defea1395e1ca247dcfabde935aa8775c4294cbe5f77f86a7ab1563e",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787508600,
      "signal": "우호적 변화",
      "netScore": 10,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.97,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
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
          "eventId": "9c82f665511ef98a944a",
          "headline": "9월 이전에 오라클 주식을 매입해야 합니까? 대답은 당신을 놀라게 할 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787508600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d1cccd4fe41315a157b13f0f470600fd0876205c14ede0837ef75c37b002d65",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "92327917c606609aac4d",
          "headline": "아마존의 잉여현금흐름 (Free Cash Flow) 은 영업현금흐름 (Operating Cash Flow) 이 33% 상승하더라도 마이너스 76억 $ 를 기록했다. Gap AI Capex가 실제로 만들고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787499300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9905b210869231b722441eba4e31cff86108bf3179b3579bcc7fa5dfcd60758",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "e637620d54da6a921336",
          "headline": "Oracle의 VA 계약이 170억 달러 증가했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787344885,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9983b40991e9ebf3fe564ca0e83bc6f35ad1292e859367d5059a557de848eb8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "f81200ea6bc1cc4c3155",
          "headline": "'애플은 법원의 체납금 판결 이후 아일랜드에 170억 달러의 세금을 납부했습니다' - Financial Times",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787301459,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78ec50cf42fcc10fcff5bdf09a62da923d9804a1534ff1738bdbbea873a9474a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "클라우드 수요와 자본 부담 동시 확대"
        },
        {
          "eventId": "0f6c6c87f9b053c30feb",
          "headline": "Quantinuum-Oracle 파트너십이 엔터프라이즈 컴퓨팅에 미치는 영향",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787219040,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=26e39312b0a20c9b8e439281fdf5f2daa8121afdd5d8536f433547e1c3cc9c96",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "a493a8d0ed370870376f",
          "headline": "Oracle은 X에 대해 \"Jupiter 프로젝트는 일정대로 유지되고 있으며 프로젝트를 발전시키기 위해 파트너와 계속 긴밀하게 협력하고 있습니다\"라고 게시했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786722030,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a67af2b029a3acd2bb45f4837b0db9ac60d0d62f0f4d983e7779b622cc60c91",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d6666f4e2f5424578bae",
          "headline": "새로운 AI 및 Quantum 거래를 통해 Oracle(ORCL)은 무엇을 구축하고 있습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1786637443,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f83d95c50c2851a3ac8fc9f8de93137a2207f286a8a879c84b5c044690283171",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787378897,
      "signal": "중립·확인 대기",
      "netScore": -0.13,
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
          "eventId": "a540fc650ec5344487fd",
          "headline": "Salesforce(CRM)는 AgentExchange에 코드 계약 관리 앱을 추가하지 않습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787378897,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1d5fa24a1b5d9aae612b93d57781a8f53af8ce1888ad84da28487ab921cbb64",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d9950ac75b92a238cbc9",
          "headline": "Arista Networks vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787361159,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ea1b2100a38d7a49a7bdb4e6a2dfa06eaba295f18ed95892b4ec945feb3a97f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0adb305fd30d06727560",
          "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787232003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
          "factorChanges": {
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
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787496293,
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
          "eventId": "66ddda975052640de7e1",
          "headline": "트럼프, 워프 속도로 주식 거래 계속: 버크셔 매수, 메타 판매",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787496293,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9e0bdc9badb8609b9eb8174cf6711e4131b5f18c8a220c9ca0c969805b9bdd83",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "654e3abf05f35895332c",
          "headline": "Sky News는 Arcturis Data와 Akrivia Health가 1억 4천만 파운드 규모의 거래로 합병하여 Palantir Technologies와의 NHS 환자 데이터 전쟁에서 기반을 확보할 것이라고 보도했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787290440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4ceea1716bfafab0a89f62ff7a87b851250c9392aaebbd538ea60cb7d4b0ebdb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b7de4fb6606e4067026b",
          "headline": "Palantir: Michael Burry의 풋 매수가 소매 투자자를 방해해서는 안 되는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787289244,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb6d0b4e229c71f8998c80f8371c3b91003c4401f6d439d64fb5bfb42f9d5191",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787503800,
      "signal": "우호적 변화",
      "netScore": 7.72,
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
          "score": -4.9,
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
          "eventId": "993b64250ade9b6d8981",
          "headline": "AMD는 TSMC와 함께 첨단 칩 패키징을 구축하기 위해 대만에 $ 100억 이상을 투자하고 있습니다. Lisa Su가 실제로 그 돈으로 구매하는 것은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787503800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7b88ad01664211237a7e92988a4351927f4bb52466ecdbb4a762bbe0ffa7ade1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "a907a46054bff96b5f17",
          "headline": "NVIDIA, 데이터 센터 개발 발전을 위한 Cloverleaf 파트너십",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787502323,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f1513663152e58106526751dba1deddb9f809f8ba6b9d18cbc805e7ccb0b3e5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "92327917c606609aac4d",
          "headline": "아마존의 잉여현금흐름 (Free Cash Flow) 은 영업현금흐름 (Operating Cash Flow) 이 33% 상승하더라도 마이너스 76억 $ 를 기록했다. Gap AI Capex가 실제로 만들고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787499300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9905b210869231b722441eba4e31cff86108bf3179b3579bcc7fa5dfcd60758",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "데이터센터 투자 지속 시 AI 컴퓨팅 수요 유지 가능성"
        },
        {
          "eventId": "9a55c2b362d82cd124ea",
          "headline": "메타가 5년 이상 사고 보유할 수 있는 최고의 인공지능 (AI) 주식이 될 수 있는 1가지 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787489400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44d90aae0b5b834375b618ae37a566ff4b64ad0b8fbc6f7884a4dcebbcc1d404",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5f8be2a7ad25578f86cb",
          "headline": "억만장자 데이비드 테퍼는 아마존 주식에서 75억 $ Appaloosa 포트폴리오의 16% 를 보유하고 있습니다. 여전히 구매인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787484120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1a2fe8374bda66402021b3d6c7cac518a1fd05ef6031ff44d3525ca525fe7b7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "d37c9afcd2168102b35a",
          "headline": "브로드컴은 잊어라: 엔비디아 (NVDA) 는 여전히 2027년 이후 최고의 반도체 주식이다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787481000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b40be1909044dd7a0c90eeb83fd286d6cccfbb4425b8e58d4185c1043fe67018",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "41f2013dd08ded2131e6",
          "headline": "AMD 대 NVDA: 거북이는 토끼의 빠른 속도에 주의하지 않고 계속 앞서 나갑니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787476868,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11155d3408aa838914d6a94061caed3a78f8fe059a61db2e33a7df90d1b4da9b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "edd1dce8f2aa962cdd91",
          "headline": "마크 주커버그 (Mark Zuckerberg) 는 이번 주에 메타의 무제한 AI 구축을 방어하는 6,500단어 AI 선언문을 발표했습니다. 투자자가 관심을 가져야 하는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787462400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e79f44d2940251377f849af19d030c8f19209e97d2d57cfe1b276158b1728d80",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "74946ea31bacb6a4754a",
          "headline": "샌디스크 (SNDK) 주식은 투자자의 날 및 수익 후 공정가치 상승을 봅니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787454484,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=17347806dc7705dd4c86d3a06f09b418fec541f29bd63178bfb8a86d5dd7a8c4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "e1cd0b773c16bd61ff1e",
          "headline": "Don 't Sell SanDisk Corporation (NASDAQ: SNDK) Because A Billionaire Did So, Says Jim Cramer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787448450,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=585e4c040966a311a704971332a9f168c11e751eab650107ff0b5bdcbc5651eb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "26717142aa8ae30255d9",
          "headline": "Alphabet과 Amazon이 인공 지능(AI) 인프라에 4,200억 달러를 투자하고 있습니다. 하드웨어 주식 4곳이 흑자로 전환되었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787398500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45010cc5dfaaf75e827cb8825140c700529ba7fb5c0db0795bcec5c068e82173",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "40591f6267cbe7055f16",
          "headline": "모든 S&P 500 인덱스 펀드 소유자는 Apple보다 Nvidia를 더 많이 보유하고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787391121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd4f750c40540d512caea103877ee7b76543da7f09a057e562044f77890fed31",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 39,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787503800,
      "signal": "우호적 변화",
      "netScore": 5.08,
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
          "score": -2.35,
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
          "score": -3.1,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 5,
          "level": "우호적"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "993b64250ade9b6d8981",
          "headline": "AMD는 TSMC와 함께 첨단 칩 패키징을 구축하기 위해 대만에 $ 100억 이상을 투자하고 있습니다. Lisa Su가 실제로 그 돈으로 구매하는 것은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787503800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7b88ad01664211237a7e92988a4351927f4bb52466ecdbb4a762bbe0ffa7ade1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "5f8be2a7ad25578f86cb",
          "headline": "억만장자 데이비드 테퍼는 아마존 주식에서 75억 $ Appaloosa 포트폴리오의 16% 를 보유하고 있습니다. 여전히 구매인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787484120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1a2fe8374bda66402021b3d6c7cac518a1fd05ef6031ff44d3525ca525fe7b7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "d37c9afcd2168102b35a",
          "headline": "브로드컴은 잊어라: 엔비디아 (NVDA) 는 여전히 2027년 이후 최고의 반도체 주식이다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787481000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b40be1909044dd7a0c90eeb83fd286d6cccfbb4425b8e58d4185c1043fe67018",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "41f2013dd08ded2131e6",
          "headline": "AMD 대 NVDA: 거북이는 토끼의 빠른 속도에 주의하지 않고 계속 앞서 나갑니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787476868,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11155d3408aa838914d6a94061caed3a78f8fe059a61db2e33a7df90d1b4da9b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "edd1dce8f2aa962cdd91",
          "headline": "마크 주커버그 (Mark Zuckerberg) 는 이번 주에 메타의 무제한 AI 구축을 방어하는 6,500단어 AI 선언문을 발표했습니다. 투자자가 관심을 가져야 하는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787462400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e79f44d2940251377f849af19d030c8f19209e97d2d57cfe1b276158b1728d80",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "74946ea31bacb6a4754a",
          "headline": "샌디스크 (SNDK) 주식은 투자자의 날 및 수익 후 공정가치 상승을 봅니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787454484,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=17347806dc7705dd4c86d3a06f09b418fec541f29bd63178bfb8a86d5dd7a8c4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e1cd0b773c16bd61ff1e",
          "headline": "Don 't Sell SanDisk Corporation (NASDAQ: SNDK) Because A Billionaire Did So, Says Jim Cramer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787448450,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=585e4c040966a311a704971332a9f168c11e751eab650107ff0b5bdcbc5651eb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "26717142aa8ae30255d9",
          "headline": "Alphabet과 Amazon이 인공 지능(AI) 인프라에 4,200억 달러를 투자하고 있습니다. 하드웨어 주식 4곳이 흑자로 전환되었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787398500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45010cc5dfaaf75e827cb8825140c700529ba7fb5c0db0795bcec5c068e82173",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "be381641c3e536144ba3",
          "headline": "Advanced Micro Devices와 Arm Holdings: 인공 지능 기업 간의 수익 추세 비교",
          "eventLabel": "실적 발표",
          "publishedAt": 1787346101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=00b00095b875a42cfd5f20d67e9a75de9328986f35d84ea949edb3554b8211f2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "665b5eae3853597a3de7",
          "headline": "Citadel의 40억 달러 규모의 AI 주식 매도가 MU, SNDK, NBIS에 영향을 미쳤습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787324763,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db33e45db8700a7a0ad75086825d79953df31ab74d702f85ca90f0e2936ea34f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f81200ea6bc1cc4c3155",
          "headline": "'애플은 법원의 체납금 판결 이후 아일랜드에 170억 달러의 세금을 납부했습니다' - Financial Times",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787301459,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78ec50cf42fcc10fcff5bdf09a62da923d9804a1534ff1738bdbbea873a9474a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "15db9e349ce3e8af283b",
          "headline": "억만장자 투자자 스탠리 드러켄밀러(Stanley Druckenmiller)는 방금 인텔과 마이크론을 매각하고 로봇공학에 큰 투자를 하는 2개의 인공지능(AI) 주식에 투자했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787300700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=167a50bb523e026e53bd063e915289e08c11244cfb3e2a5d015f2a3409802422",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 3,
      "unverifiedEvidenceCount": 32,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787371290,
      "signal": "주의 강화",
      "netScore": -8.84,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.52,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -0.87,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": -0.52,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -3.15,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -1.92,
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
          "eventId": "cffed85e9c93ffc3d2e0",
          "headline": "Broadcom: 시장에는 이것이 잘못되었습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787371290,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c958e6fc4f170f0735375bb2c1d20177889e3f3acf7b82f35c7b194ecc6ac73a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "262754c46c0a95aef371",
          "headline": "Broadcom(AVGO)은 Google이 Marvell과 AI 칩 관계를 확장한 후 6.2% 하락했습니다. - 변경된 사항",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787353957,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=385f87dc5a3077a001a300dcab06754fae86880aa05bd125bcc9fb850f436b75",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
        },
        {
          "eventId": "395303ef342f3de4c776",
          "headline": "Broadcom보다 먼저 Marvell을 구입하는 것은 큰 실수입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787301401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=41a87a44b2d9db0343df5a3e124c0a41c98f2e1827eabeae6e09369b39409150",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "263f0693121d2a4d52d8",
          "headline": "'Broadcom, 최신 AI 부채 거래에서 600억 달러 이상 모색' - Bloomberg",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787242528,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=be47314eef46f3b29cea6eeebfb187ebbd7607353b02e61277f02148e320b8f9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b9c7025e1cb203d86c40",
          "headline": "성능 비교: Broadcom과 반도체 및 반도체 장비 산업의 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787205521,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=860a6a46b2fa8c28931a3ec0b03e217324af1036a4b3a94b9d42db3294065fe2",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "62b916efd3248dd12ccb",
          "headline": "Marvell은 Google이 최대 122억 달러의 주식을 매입할 수 있는 AI 칩 거래에서 6%의 이익을 얻습니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787137685,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9b4190634fc00669c88233fc42770d49901fdc0f4b44de410eb9b78af92c5fb",
          "factorChanges": {
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
        },
        {
          "eventId": "24779cee834e6c7b893a",
          "headline": "산업 비교: 반도체 및 반도체 장비 산업의 경쟁사와 Broadcom 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787119132,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66c895b62d64dee0439b63f581116edbd2c44fce2e2d06a34d6b779ec506194a",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "12f70222c531ccf29edd",
          "headline": "경쟁사 분석: 반도체 및 반도체 장비 산업의 Broadcom 및 경쟁사 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787032728,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1b21c5056a4d186b9fba9774e73719a97969f6d8eaf9340929388ae2170d0622",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8e99cde91279342fe095",
          "headline": "SNDK, WDC, MU, SMCI 주식은 최고의 S&P 500 상승주입니다. SanDisk의 장밋빛 전망이 뒷받침하는 지속적인 기업 수요가 메모리 주식을 돕고 있습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1786647929,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45f2789ca5cf4e831eafc73eb25852d2de89e03837693f4006bcebe38cb58c5e",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f4aeb7f976140dc699ef",
          "headline": "Broadcom(AVGO), 주요 고객 및 전략적 계약을 통해 시장 입지 강화",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786625104,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=259042175823bd04dbed68a3cae047c802d73b88d51e977025ee26a649edb4a0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787357580,
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
          "eventId": "f1aba2e05fae72dfee11",
          "headline": "매수해야 할 최고의 반도체 주식은 AMD나 Qualcomm이 아닙니다. 바로 Nvidia이며, 우리의 데이터가 이를 증명합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787357580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ec3c53052e5e56bf744c5cccdbb59776bc76160fcad6a76ec0da00a099b49d6",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "936d88911278db315ec0",
          "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787212801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787334260,
      "signal": "중립·확인 대기",
      "netScore": -0.71,
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
          "score": -0.35,
          "level": "중립"
        },
        "insiderSignal": {
          "label": "내부자 거래 신호",
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "a75bfa5f8d1227df9ad3",
          "headline": "Arm Holdings: 250억 달러 목표에 실제로 필요한 것",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787334260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95fc669b7bfc8de616e12888438390a25c310f8706c46f814c239eadfe81b32e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a453b0fdbc6878344a50",
          "headline": "ARM CFO는 칩 디자이너의 눈이 라이센스에서 칩 제조로 ​​이동함에 따라 '실리콘 제공이 확실히 더 복잡하다'고 말합니다: 보고서",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786983815,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86b2c2b5374b53d7fe2a8a0338265f75e577ff8e8a9228a63f8d96027f522d00",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "741cd2c933964ed84e9a",
          "headline": "훌륭한 회사, 정가: Arm의 수치가 향후 1년에 대해 말해주는 것",
          "eventLabel": "내부자 매도",
          "publishedAt": 1786627807,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5c68441c34702b7547b979a0f03e5f1f1106b77e3c372730060d55bc46c151e",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787537609,
      "signal": "중립·확인 대기",
      "netScore": 1.18,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -2.75,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.42,
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
          "eventId": "4e62359796625faf1367",
          "headline": "마벨 테크놀로지: 수많은 움직이는 부품",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787537609,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dfa3de0d1f365df4ac5b3127f32e9707f529fe59ec802d3d892bc869e11a0d94",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "601831703227ae82f0c3",
          "headline": "Broadcom vs. Marvell 기술: 1 치명적인 메트릭이 더 나은 맞춤형 AI 칩 스톡을 결정합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787509560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=12f1e456221807cd220275e57f4df8b49a9783c2523e582ee86b95a6dfcf70a1",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c44998aeb508a0d3cfa7",
          "headline": "Marvell 투자자는 최신 Google 거래를 신중하게 고려해야합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787429580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15f1670bbdc24b40cb41c83b37f90403c53024b5a1c3128e6de13a2ef973beb5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9da0a1c14d000a16790e",
          "headline": "알파벳은 Marvell의 7% 를 소유할 수 있습니다. 하지만 이를 얻기 위해 Google이 해야 할 일은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787417327,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3823748f09349ce02b5ea4ecf5c32ee421449de52fa4e7800bb5233d0896f24",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "778edd0b083374fb357d",
          "headline": "Google은 Marvell의 칩 구매에 대해 Marvell 주식 영장으로 돈을 받고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787374021,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6caf38ab8ba9a2f6e73801672417a6805cfa580a5d37e9b2fab25f94c2f75c24",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "262754c46c0a95aef371",
          "headline": "Broadcom(AVGO)은 Google이 Marvell과 AI 칩 관계를 확장한 후 6.2% 하락했습니다. - 변경된 사항",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787353957,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=385f87dc5a3077a001a300dcab06754fae86880aa05bd125bcc9fb850f436b75",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회"
        },
        {
          "eventId": "ebc15695cf2b9ca79c6c",
          "headline": "Google AI 파트너십 확장 후 Marvell Technology(MRVL) 주식 공정 가치가 더 높아졌습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787350242,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4606ed97a124a5f7d5e42efc68f840b45657a022b36e2d2ddae287c35651dd8e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1167a4f5402a87596d89",
          "headline": "분석가는 Marvell의 Google AI 거래로 1,200억 달러의 엄청난 기회를 얻을 수 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787228312,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a1db5cb0d5fde30c9941cc028cc4062f471dd101bfa5a86d3c6b5fb160f71f58",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a884e1373759b4a84537",
          "headline": "Marvell Technology: Google과의 122억 달러 규모의 거래가 엄청나게 유익한 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787221144,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0cc7f51ab765279a8768d07c2f8734e8112595c50744b39a0c87b0b99b7ed788",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2b6bd21d192a850d3ed4",
          "headline": "RBC Capital, Marvell Technology에 대한 우수한 성과 유지, $360 목표 가격 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787218279,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=696e70aa6d42b97ca3cc4ffbebd4394239ab8ae1ab0be26558be876334ed35d1",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9df37e733119f1cdcc57",
          "headline": "Marvell: 거래와 희석은 모두 현실입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787214238,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b5fbd015aa9fe59291856988109e96ec2f864c527b3f49ec724d7fc320554a99",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8d90c24c842f7dce6142",
          "headline": "Marvell, Google 거래에 뛰어들다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787161425,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51ace3d5fb5d7a5b702eb2d19980758b78e0c04d20dd7e908a3abb0d3b8ae002",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787502323,
      "signal": "주의 강화",
      "netScore": -3.64,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.87,
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
          "score": -3.32,
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
          "eventId": "a907a46054bff96b5f17",
          "headline": "NVIDIA, 데이터 센터 개발 발전을 위한 Cloverleaf 파트너십",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787502323,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f1513663152e58106526751dba1deddb9f809f8ba6b9d18cbc805e7ccb0b3e5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9a55c2b362d82cd124ea",
          "headline": "메타가 5년 이상 사고 보유할 수 있는 최고의 인공지능 (AI) 주식이 될 수 있는 1가지 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787489400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44d90aae0b5b834375b618ae37a566ff4b64ad0b8fbc6f7884a4dcebbcc1d404",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d37c9afcd2168102b35a",
          "headline": "브로드컴은 잊어라: 엔비디아 (NVDA) 는 여전히 2027년 이후 최고의 반도체 주식이다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787481000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b40be1909044dd7a0c90eeb83fd286d6cccfbb4425b8e58d4185c1043fe67018",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4e8a36c484ff5a8144b8",
          "headline": "마이크론 vs. 샌디스크: 어떤 AI 메모리 스톡을 소유해야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787480100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9f95a3ddc0f438beae6bdd8d5b0aef37b17bfc7403c2ad950068d215fca7ce1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d403b5d28dfd51800e12",
          "headline": "Palantir는 모든 수익 달러의 55 센트를 이익으로 유지합니다",
          "eventLabel": "실적 발표",
          "publishedAt": 1787453881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2ec5c00db1df302373f5a9efafef31d30058f44460268739459ffa06f96978e",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "955fe598721329b733bb",
          "headline": "예측: 2030년 말까지 Palantir의 주가가 될 것입니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1787394900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a1e9cee3c5f01b21c88074e05d2c81bbf596cd5ce6df16601d859cf3bfeccf0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "32b6c5388b87e41e2c84",
          "headline": "인텔은 주당 95달러에 200억 달러 규모의 주식을 매각했습니다. 현재 $93 이하로 거래되고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787362321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df168fa33197a3cfe327cfb541dff88c722f6f5e002b77a51a8184aa265c1f3f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "81960f7f0fd69223ed37",
          "headline": "Apple은 Siri 및 Vision Pro 팀의 인력 감축을 통해 AI 및 스마트 안경에 초점을 맞춘 것으로 알려졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787357701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09e53b50ed5e0a2a9cbc83b8763d8c89305307a7897a706e836c8e4db69a32fa",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f1aba2e05fae72dfee11",
          "headline": "매수해야 할 최고의 반도체 주식은 AMD나 Qualcomm이 아닙니다. 바로 Nvidia이며, 우리의 데이터가 이를 증명합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787357580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ec3c53052e5e56bf744c5cccdbb59776bc76160fcad6a76ec0da00a099b49d6",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "be381641c3e536144ba3",
          "headline": "Advanced Micro Devices와 Arm Holdings: 인공 지능 기업 간의 수익 추세 비교",
          "eventLabel": "실적 발표",
          "publishedAt": 1787346101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=00b00095b875a42cfd5f20d67e9a75de9328986f35d84ea949edb3554b8211f2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c3cd64e017df49517a9d",
          "headline": "소식통에 따르면 브로드컴의 부채 거래 규모는 700억 달러 이상에 달할 것으로 예상됩니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787313509,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b3b41e43c9ac2b333f576f83346cbcd8b0303b5709bac4d8256b0d01b83dbd59",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "15db9e349ce3e8af283b",
          "headline": "억만장자 투자자 스탠리 드러켄밀러(Stanley Druckenmiller)는 방금 인텔과 마이크론을 매각하고 로봇공학에 큰 투자를 하는 2개의 인공지능(AI) 주식에 투자했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787300700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=167a50bb523e026e53bd063e915289e08c11244cfb3e2a5d015f2a3409802422",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787503800,
      "signal": "중립·확인 대기",
      "netScore": -0.08,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.52,
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
          "eventId": "993b64250ade9b6d8981",
          "headline": "AMD는 TSMC와 함께 첨단 칩 패키징을 구축하기 위해 대만에 $ 100억 이상을 투자하고 있습니다. Lisa Su가 실제로 그 돈으로 구매하는 것은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787503800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7b88ad01664211237a7e92988a4351927f4bb52466ecdbb4a762bbe0ffa7ade1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4aa211b84fb6dff20dc4",
          "headline": "TSMC vs. ASML: 더 넓은 해자를 가진 세미 모노폴리는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787406772,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45c2ea3817192ec133825430adebe9a42a48ee1ee61eee77b7489357f53fa9b2",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9413195d1932dbcfbc8e",
          "headline": "TSMC의 지출 예측이 850억 달러에 도달함에 따라 ASML이 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787256478,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=54269e0ef76fffb5e35aa26a20c5f9c1e274bdf1e56b5c04462f9ba85d9c4956",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e84755db67438624264d",
          "headline": "대만 반도체 대 ASML: 현재 어느 반도체 타이탄이 더 나은 구매인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787219700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c69e4aaa4be8baa7aafad761b37f5892a77147655c0ac3ca8dc1af1d5ec17e8",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f1cc1da7ac46289240c2",
          "headline": "20년 전 대만 반도체에 투자한 1000달러가 오늘날 이 정도 가치가 될 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786962640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b38c8d8239c2a11948fc03b2c539db254ba530969e46d4f3d592c03fbc0d3ce",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787256478,
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
          "eventId": "9413195d1932dbcfbc8e",
          "headline": "TSMC의 지출 예측이 850억 달러에 도달함에 따라 ASML이 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787256478,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=54269e0ef76fffb5e35aa26a20c5f9c1e274bdf1e56b5c04462f9ba85d9c4956",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787163259,
      "signal": "주의 강화",
      "netScore": -2.86,
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
          "score": -0.7,
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
          "eventId": "0a8e1651fa4f0399016b",
          "headline": "Applied Materials 4% 하락, Lam Research 및 Teradyne Sink 5%: 칩 장비 주식 매도를 촉진하는 요인은 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787163259,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a19157318a679304836f7d2fc5d4ba80a2578ae575634b1681497cf3ab94884c",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "eventId": "0405e689846c8d38de6d",
          "headline": "Tesla 인수 후 스웨덴 연합이 거의 3 년간의 파업을 종료함에 따라 TSLA 주가 상승",
          "eventLabel": "실적 발표",
          "publishedAt": 1786658320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c3b3e474ad5c6247d385c0e99bc647cc12745d3382f82defc8ff1b2e76262f6",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "857490f774b5ced606db",
          "headline": "SanDisk가 새로운 다년간 성장 계획을 수립하고 조정된 무료 현금 흐름 마진 50%를 목표로 한 후 SNDK 주가 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786636066,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0da710356de174e0f4c5f4296fdb7c884c5e5de83a1d66cd424e9790925d757b",
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
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1787574884.643864,
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
      "updatedAt": 1787574884.643864,
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
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787503800,
      "signal": "우호적 변화",
      "netScore": 7.83,
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
          "eventId": "993b64250ade9b6d8981",
          "headline": "AMD는 TSMC와 함께 첨단 칩 패키징을 구축하기 위해 대만에 $ 100억 이상을 투자하고 있습니다. Lisa Su가 실제로 그 돈으로 구매하는 것은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787503800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7b88ad01664211237a7e92988a4351927f4bb52466ecdbb4a762bbe0ffa7ade1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "5f8be2a7ad25578f86cb",
          "headline": "억만장자 데이비드 테퍼는 아마존 주식에서 75억 $ Appaloosa 포트폴리오의 16% 를 보유하고 있습니다. 여전히 구매인가요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787484120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1a2fe8374bda66402021b3d6c7cac518a1fd05ef6031ff44d3525ca525fe7b7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "4e8a36c484ff5a8144b8",
          "headline": "마이크론 vs. 샌디스크: 어떤 AI 메모리 스톡을 소유해야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787480100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9f95a3ddc0f438beae6bdd8d5b0aef37b17bfc7403c2ad950068d215fca7ce1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "edd1dce8f2aa962cdd91",
          "headline": "마크 주커버그 (Mark Zuckerberg) 는 이번 주에 메타의 무제한 AI 구축을 방어하는 6,500단어 AI 선언문을 발표했습니다. 투자자가 관심을 가져야 하는 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787462400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e79f44d2940251377f849af19d030c8f19209e97d2d57cfe1b276158b1728d80",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "74946ea31bacb6a4754a",
          "headline": "샌디스크 (SNDK) 주식은 투자자의 날 및 수익 후 공정가치 상승을 봅니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787454484,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=17347806dc7705dd4c86d3a06f09b418fec541f29bd63178bfb8a86d5dd7a8c4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e1cd0b773c16bd61ff1e",
          "headline": "Don 't Sell SanDisk Corporation (NASDAQ: SNDK) Because A Billionaire Did So, Says Jim Cramer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787448450,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=585e4c040966a311a704971332a9f168c11e751eab650107ff0b5bdcbc5651eb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "26717142aa8ae30255d9",
          "headline": "Alphabet과 Amazon이 인공 지능(AI) 인프라에 4,200억 달러를 투자하고 있습니다. 하드웨어 주식 4곳이 흑자로 전환되었습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787398500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45010cc5dfaaf75e827cb8825140c700529ba7fb5c0db0795bcec5c068e82173",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "c4ed8baad3ca4c9f2d3a",
          "headline": "SNDK, MU, BE, NBIS 주식 하락: Ken Griffin의 Citadel, 상황 인식 포트폴리오에서 40억 달러 손실",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787355216,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06321b39f10122eebcadf0aebf8e66dbc9423feca1fb6851ccc0b7b0a9803206",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "665b5eae3853597a3de7",
          "headline": "Citadel의 40억 달러 규모의 AI 주식 매도가 MU, SNDK, NBIS에 영향을 미쳤습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787324763,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db33e45db8700a7a0ad75086825d79953df31ab74d702f85ca90f0e2936ea34f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f81200ea6bc1cc4c3155",
          "headline": "'애플은 법원의 체납금 판결 이후 아일랜드에 170억 달러의 세금을 납부했습니다' - Financial Times",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787301459,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78ec50cf42fcc10fcff5bdf09a62da923d9804a1534ff1738bdbbea873a9474a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "15db9e349ce3e8af283b",
          "headline": "억만장자 투자자 스탠리 드러켄밀러(Stanley Druckenmiller)는 방금 인텔과 마이크론을 매각하고 로봇공학에 큰 투자를 하는 2개의 인공지능(AI) 주식에 투자했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787300700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=167a50bb523e026e53bd063e915289e08c11244cfb3e2a5d015f2a3409802422",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "b7de4fb6606e4067026b",
          "headline": "Palantir: Michael Burry의 풋 매수가 소매 투자자를 방해해서는 안 되는 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787289244,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb6d0b4e229c71f8998c80f8371c3b91003c4401f6d439d64fb5bfb42f9d5191",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 33,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787529484,
      "signal": "중립·확인 대기",
      "netScore": -1.53,
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
          "score": -2.27,
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
          "eventId": "27290a3b3124c8571445",
          "headline": "왜 샌디스크인가? 순환성만이 열린 질문이 아닙니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787529484,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d871a4b9f9be55eade90d6bcac76248076964637eac0d530c31f0911db394e0d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4e8a36c484ff5a8144b8",
          "headline": "마이크론 vs. 샌디스크: 어떤 AI 메모리 스톡을 소유해야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787480100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a9f95a3ddc0f438beae6bdd8d5b0aef37b17bfc7403c2ad950068d215fca7ce1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "74946ea31bacb6a4754a",
          "headline": "샌디스크 (SNDK) 주식은 투자자의 날 및 수익 후 공정가치 상승을 봅니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787454484,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=17347806dc7705dd4c86d3a06f09b418fec541f29bd63178bfb8a86d5dd7a8c4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e1cd0b773c16bd61ff1e",
          "headline": "Don 't Sell SanDisk Corporation (NASDAQ: SNDK) Because A Billionaire Did So, Says Jim Cramer",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787448450,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=585e4c040966a311a704971332a9f168c11e751eab650107ff0b5bdcbc5651eb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c4ed8baad3ca4c9f2d3a",
          "headline": "SNDK, MU, BE, NBIS 주식 하락: Ken Griffin의 Citadel, 상황 인식 포트폴리오에서 40억 달러 손실",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787355216,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06321b39f10122eebcadf0aebf8e66dbc9423feca1fb6851ccc0b7b0a9803206",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "665b5eae3853597a3de7",
          "headline": "Citadel의 40억 달러 규모의 AI 주식 매도가 MU, SNDK, NBIS에 영향을 미쳤습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787324763,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db33e45db8700a7a0ad75086825d79953df31ab74d702f85ca90f0e2936ea34f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6983b352153d3b458e14",
          "headline": "정오에 가장 큰 움직임을 보이는 주식: Meta, Amylyx, Baidu, Klarna, Coherent, Sandisk 등",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787057783,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c72c281529f57a71ec992c40b253a421c53b8fa4b522b66a5a9c0b159bc2e730",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787374212,
      "signal": "주의 강화",
      "netScore": -2.72,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "eventId": "ffea981cd31a70136c98",
          "headline": "Seagate: 총이익이 지속되지 않으면 주가가 공격적으로 하락할 수 있음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787374212,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32b9407b3571fb8a740cc19340fcc20cf9675dfb9c6d8e5dada2ef078a7bebda",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ad165dbb9ea8550001bb",
          "headline": "슈퍼마이크로 컴퓨터와 웨스턴 디지털: 최근 매출 동향 및 사업 규모 분석",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787234401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c019df79aeb64a57110444a7f5ae48b96950fa80d5e4741bb27b74b09096dfe6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "936d88911278db315ec0",
          "headline": "Apple 제품을 구매하시나요? 비용을 지불하는 데 도움이 되는 4가지 도구",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787212801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a03b08e1b2008c44e24564b7729d0b10f7da5eb33418846cce278009d8d4233d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "8e99cde91279342fe095",
          "headline": "SNDK, WDC, MU, SMCI 주식은 최고의 S&P 500 상승주입니다. SanDisk의 장밋빛 전망이 뒷받침하는 지속적인 기업 수요가 메모리 주식을 돕고 있습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1786647929,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45f2789ca5cf4e831eafc73eb25852d2de89e03837693f4006bcebe38cb58c5e",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787361159,
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
          "eventId": "d9950ac75b92a238cbc9",
          "headline": "Arista Networks vs. Salesforce: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787361159,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ea1b2100a38d7a49a7bdb4e6a2dfa06eaba295f18ed95892b4ec945feb3a97f",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1786633200.0,
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
          "eventId": "a569bcdbdc06e58f6f0b",
          "headline": "COHR SEC Form 10-K 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1786633200.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000082031826000020/iivi-20260630.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787066566,
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
          "eventId": "d4b66a9978dbfea020ab",
          "headline": "루멘텀(Lumentum): 시력 부족이 점점 더 커지고 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787066566,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd6c9f881646850fb77de7101295ec91a1bfab48195f2c13595f10972a40843c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787444700,
      "signal": "우호적 변화",
      "netScore": 2.52,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
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
          "eventId": "d8eca2f40c9ac026d891",
          "headline": "GE Vernova의 잔고는 일부 국가의 GDP보다 큽니다. 여기에 실제로 $ 1760억 안에 있는 것이 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787444700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aaade768f9f996e2350da0fbe381bfc606abd645683aedcf32005330567aaca0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0e3337a0a433b6b0ae15",
          "headline": "GE Vernova, 퀸즈랜드 슈퍼노드 배터리 프로젝트 3단계 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787319770,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b8291ab8a1fad046f97f122a145b5809ffca5f3df10cdd5326dca1cc4fdde8e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "6a391c9d30f7f9b1347d",
          "headline": "GE Vernova, 퀸즈랜드 슈퍼노드 배터리 프로젝트 3단계 계약 체결",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787319770,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b8291ab8a1fad046f97f122a145b5809ffca5f3df10cdd5326dca1cc4fdde8e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "75cd65ee4b2194bc4cf4",
          "headline": "GE Vernova, 최대 배터리 프로젝트 중 하나에 전력을 공급하기 위해 호주와 주요 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787302246,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1940dd03378e1c2642650f3af5bf911668697efc181df0b8af99824be8e80fd4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "556809ef8d2493e70822",
          "headline": "Queensland의 슈퍼노드 배터리 에너지 저장 시스템 프로젝트 3단계에 GE Vernova가 Quinbrook에 의해 선정되었습니다. 공개되지 않은 약관",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787292551,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e39205d060bb77236887e7c66794f266631a1307a15269e401803f78edddb583",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3c921136aef8967d8312",
          "headline": "GE Vernova와 Blue Energy, 2.5GW 텍사스 가스-원자력 발전 프로젝트 추진",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786628029,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f3e9ce2217d0360a5ea341b991a062971eae46a13cf20342f5b2c94f342c665",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787318284,
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
          "eventId": "e933d78cec94953e9992",
          "headline": "Constellation Energy vs. Vistra: AI 전력 수익 경쟁을 주도하는 사람은 누구입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787318284,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa80810a001357d7eb9d8985ade214e9e13891a64b16cbcc5bd5e764056ccd08",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a7d2e820887a5fcf998f",
          "headline": "Constellation Energy vs. Vistra: AI 전력 수익 경쟁을 주도하는 사람은 누구입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787314684,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa80810a001357d7eb9d8985ade214e9e13891a64b16cbcc5bd5e764056ccd08",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787318284,
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
          "eventId": "e933d78cec94953e9992",
          "headline": "Constellation Energy vs. Vistra: AI 전력 수익 경쟁을 주도하는 사람은 누구입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787318284,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa80810a001357d7eb9d8985ade214e9e13891a64b16cbcc5bd5e764056ccd08",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a7d2e820887a5fcf998f",
          "headline": "Constellation Energy vs. Vistra: AI 전력 수익 경쟁을 주도하는 사람은 누구입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787314684,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fa80810a001357d7eb9d8985ade214e9e13891a64b16cbcc5bd5e764056ccd08",
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
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1786948356,
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
          "eventId": "2c2b67af7865a01bdc07",
          "headline": "Trane Technologies와 Eaton, 통합된 고급 열 관리 및 전기 시스템 아키텍처를 통해 AI 공장 효율성을 가속화하기 위해 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786948356,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c42d54a070b06b70b801e32403c39d65dbb427851d4b3df69e487ef3ddd0bc0",
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
      "updatedAt": 1787574884.643864,
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
      "updatedAt": 1787574884.643864,
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
      "updatedAt": 1787574884.643864,
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
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787238000.0,
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
          "eventId": "a210724266081fe15be0",
          "headline": "MOD SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787238000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926099432/mod-20260820x8k.htm",
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
      "updatedAt": 1787574884.643864,
      "dataAsOf": 1787374212,
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
          "eventId": "ffea981cd31a70136c98",
          "headline": "Seagate: 총이익이 지속되지 않으면 주가가 공격적으로 하락할 수 있음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787374212,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=32b9407b3571fb8a740cc19340fcc20cf9675dfb9c6d8e5dada2ef078a7bebda",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bf526f71edcb59ccd854",
          "headline": "STX 주식을 보유하고 있는 동안 연간 26%의 이자를 지급하도록 하세요",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1786650714,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bb20357837052229f0c2e0c5c971a33a470bf8a8336d37e287200a776efdf370",
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
      "updatedAt": 1787574884.643864,
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
      "updatedAt": 1787574884.643864,
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
    "SBGSY": {
      "ticker": "SBGSY",
      "updatedAt": 1787574884.643864,
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
