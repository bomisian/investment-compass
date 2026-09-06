// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1788710020.360385,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788601680,
      "signal": "중립·확인 대기",
      "netScore": 0.13,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.92,
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
          "eventId": "7155a2db9d9ccbb51a8c",
          "headline": "Amazon, Alphabet 및 Microsoft: 두 개는 구매하고 하나는 판매합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788601680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b49a12a2280f98ea7df336d9d898d9719782308d1835256ed6df4f4f8eab6bd6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "20058ef05e4a5636d589",
          "headline": "ChronoScale은 50MW 규모의 Microsoft AI 배포를 계획하고 있다고 밝혔습니다. CHRN이 주주를 희석시키지 않고 건설 자금을 조달할 수 있습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788567034,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d2f2ebf4d76116c9839a16c7d0ac9322a0abf855fddaa7bd0d6c0eb4392f6f0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "e4814d4b7067690f2446",
          "headline": "Michael Burry, Nvidia-Hugging Face Deal에 ‘No-Brainer’ — Wall Street, OpenAI 및 Anthropic에 대한 새로운 위협",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788498512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37e95a2f72d12f992573a72602ea44ee802e7f1ce1899ae99d18a53de9c3a4ba",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "03daf22b336c78c03fb9",
          "headline": "마이크로소프트의 AI 개편으로 투자자들의 시각이 바뀌다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788450534,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e9e64e0ca224e8b4ed933effd67e650bef2e5b9d5969f5cc12ae7cda2fd97fdc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "035c25c3b72107c5a978",
          "headline": "Microsoft는 새로운 보고 구조로 AI와 클라우드를 조명합니다. 그것은 큰 거래입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788448260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b8d31ce605ae2fc153ca8e9bfbdd1661f917d05466e51ae4d178e12ddefd9bb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a272104596ec66b546ef",
          "headline": "Microsoft와 Meta는 수십 년간의 원자력 계약을 체결했습니다. 힘을 실어주는 3가지 주식",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788444049,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0bdf4e075bff2eb19523d11ee6ef673d49c496b45db459aaf5d86b32ddf8af3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7402d83c7f05d0dfdae6",
          "headline": "업데이트: Microsoft Edge는 유럽 법원 판결에서 게이트키퍼 지정에서 제외됩니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788369561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1cf508982dc12839bec64eaea4ef7b342fb5b8ee42112d187332bb94ec5e22aa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788601680,
      "signal": "주의 강화",
      "netScore": -6.1,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
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
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "7155a2db9d9ccbb51a8c",
          "headline": "Amazon, Alphabet 및 Microsoft: 두 개는 구매하고 하나는 판매합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788601680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b49a12a2280f98ea7df336d9d898d9719782308d1835256ed6df4f4f8eab6bd6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "24f6d74f0c8a1317c2e5",
          "headline": "월스트리트는 알파벳의 아킬레스건을 잘못 읽고 있다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788537013,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac887af7eb7a3fd8e798a3753a83e814fe4bb6c28da503d727af97aed919033d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e4814d4b7067690f2446",
          "headline": "Michael Burry, Nvidia-Hugging Face Deal에 ‘No-Brainer’ — Wall Street, OpenAI 및 Anthropic에 대한 새로운 위협",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788498512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37e95a2f72d12f992573a72602ea44ee802e7f1ce1899ae99d18a53de9c3a4ba",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d065a9a372ac9eb0f080",
          "headline": "Google은 광고 기술 도구를 유지할 권리를 획득했습니다. 그들은 줄어들고 있는 하나의 비즈니스에 살고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788480721,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4f9c7399d26a285830d0f12e83fd19af9b433576f19536e973f7064cbe3618e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "078a5a075718ef00ef7e",
          "headline": "PG&E, Google, Rewiring America 캘리포니아에서 VPP 출시",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788460010,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d419d4a24ae6c640c2e84078661540fd24e42dce22d1c50c67772e829fe79b2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "639a15e84a650d9813ce",
          "headline": "Google은 광고 기술 독점 사건에서 Ad Exchange를 매각할 필요가 없습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788455413,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f364634540fc5883fc2ea4c089597e6f85701d6091d50f853115474bb56b705",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c2f282be06e174010844",
          "headline": "TSLA, PCG, GOOGL, RUN, CARR 주식에 초점: 21,000개의 가정용 에너지 장치를 연결하는 새로운 가상 발전소",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788442927,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dddf3fdf06b97cbf4b6989f45c418378d109a18b0e0704f3dc781dfb85ced51d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "99a34cae1f28cf60949b",
          "headline": "의견: Google의 최신 독점 금지 규정은 알파벳 투자자에게 큰 승리입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788427501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=31b3be631266fe6f5dee69a7ca9f7c6e255098d151d7c1b6f54a62e39be9bb85",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a08e3a369108f9c0a316",
          "headline": "엔비디아 인사이더, 단일 파일링에서 $ 10억 9천만 히트: 소지자가 걱정해야 합니까?",
          "eventLabel": "내부자 매도",
          "publishedAt": 1788421002,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f01816156153674c9a0c2eb4751c77e34323fbe5fbd2bd7c94647e2f97dc8f52",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a13ff18325cd9f1fbe41",
          "headline": "더 큰 지열 베팅: Google의 Fervo 거래가 의미할 수 있는 것",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788399542,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3ed43ebc363cb54823932b266f707ca0d332a93c3e8c5b38aaea6e061a1cb073",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e4d84aa786b13dc70c00",
          "headline": "MrBeast, 다년간의 Gemini 거래 체결: AI의 실제 가격은 얼마입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788397796,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8175733c66059c3c3a67c2d4e4013da37ded02a61b7c518846430192a004b55c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "8ecba0abad31ef65af5b",
          "headline": "GOOGL 주식이 소유자에게 조용히 지불한 2,770억 달러",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788380786,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06f38cc0c2bacadc255373916dad613fbc155c0a71a3767988a70a290aa8cc9a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 15,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788601680,
      "signal": "중립·확인 대기",
      "netScore": 1.75,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -2.62,
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
          "eventId": "7155a2db9d9ccbb51a8c",
          "headline": "Amazon, Alphabet 및 Microsoft: 두 개는 구매하고 하나는 판매합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788601680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b49a12a2280f98ea7df336d9d898d9719782308d1835256ed6df4f4f8eab6bd6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ddfd294de4a283ab6730",
          "headline": "Amazon의 1000억 달러 규모 인류 계약으로 엔진 가격이 45% 저렴해졌습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788550640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=194d12b09b91aa6894ab1cfaffb277e2a1a6dfd30c53d527cf70044543ad37b9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6d07dc02661b93d6a1b5",
          "headline": "AI 인프라 구축을 위한 자금 조달을 위한 오라클의 연속 해고로 인해 실행 위험이 발생한다고 RBC가 밝혔습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788542377,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5dc831e4308213cc183335a68d41b9fc8c651b723cc01d46af7f36108576eed",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "8ae685f5c68a22bc5a37",
          "headline": "경쟁사와 비교하여 광범위한 소매 산업에서 Amazon.com의 위치 이해",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1788501529,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d15268fc1a95e2607cb02f88b5c276700d78ad71d0feee3a79c389e928569a17",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "7d3fee91bc3a36a3cfce",
          "headline": "2026년 더 나은 소비자 주식: Amazon.com vs. Walt Disney",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788491864,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=429aa610495729f4740d060817269bf49848c9b8a351a361a4c4ff6eade346c8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7d47ebbf47f40eeb974b",
          "headline": "오라클 (ORCL) 주식은 분석가가 AI와 Capex에 분할됨에 따라 공정 가치 트림을 얻습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788491332,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6561b66fd220b940c3e3107cd3bf0886ba13370be85b444bdf7186936450a743",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "9f1b76b9593fe3e51f58",
          "headline": "Amazon 대 Microsoft: 우수한 인공 지능(AI) 클라우드 주식을 식별하는 1가지 주요 지표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788469980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3413ec929cf8b8d3bbeafd6ee9b96378ac8cfe451773cf8204bf8f5c4b564066",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ac123eb08d490bd5e3a5",
          "headline": "이것이 내가 올해 10% 상승한 이후에도 아마존 주식을 계속 축적하는 가장 큰 이유이다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788449625,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2939ce31b6d6569c582b428449c959013d4f1434074b81382ded26e3a17788c2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0354b587b99f048bd310",
          "headline": "2026년 고성장 주식 개선: Amazon.com vs. Uber Technologies",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788400137,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=92364eaf497a6578fcf1c53fa0f011973cf2ffff067a875b0e11b56950b47086",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c5314d9fe1e8777a3ccd",
          "headline": "Amazon, Walmart, DOJ 쇠고기 독점금지 조사에서 데이터 요청",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788374011,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3438c0eceb1ec6c11c81ea637891cc8def662ece9a3eee6692584395cdf7ce54",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788565700,
      "signal": "중립·확인 대기",
      "netScore": -0.36,
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
          "score": -1.75,
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
          "eventId": "66797f47a5e1b0d990a5",
          "headline": "Jim Cramer는 Meta Platforms, Inc.(NASDAQ: META)의 대규모 법원 승리가 아슬아슬한 상황이었다고 말했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788565700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3fd8ebcf47ac803c19af2b5be8c23376d35a75ee74d7197f3ac7342fb9b3069a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "01b66b7a762fcfab504a",
          "headline": "메타의 사업은 무사히 소송을 면할 예정",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788541040,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3370adbd69f184aa8474a0ff9b0b2f08f368644fb5fafebafda49f9db5634e26",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "821ae153d31f7b81a385",
          "headline": "100억 달러가 넘는 Meta의 데이터 센터가 텍사스의 반발에 직면",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788471160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67b6a9b58cd46cb668be6a63262d97688e2efae6b8b0d56a95a2e83181d41ac1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a272104596ec66b546ef",
          "headline": "Microsoft와 Meta는 수십 년간의 원자력 계약을 체결했습니다. 힘을 실어주는 3가지 주식",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788444049,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0bdf4e075bff2eb19523d11ee6ef673d49c496b45db459aaf5d86b32ddf8af3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788633300,
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
          "score": -4.72,
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
          "eventId": "1fd39215a412312fcfaa",
          "headline": "새로운 CEO 존 터너스(John Ternus)가 이끄는 Apple의 첫 번째 iPhone이 9월 9일 출시됩니다. 이제 주식을 매입할 때가 되었는지 알아보겠습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788633300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c686985f2d1ee36acd57cf68fc1ec368cbd7560286e77ee01a4f48c461c0159b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "8d8419343b08e02023cd",
          "headline": "Apple(AAPL), 더 넓은 유럽 지분을 대상으로 20억 파운드 규모의 새로운 영국 ATT 소송 제기",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788627934,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05c91b0250bd447583cf3e54e7a07aa669542e0140205e7d3070c6698ccefebf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9531ad704c5fa19fe096",
          "headline": "모건스탠리는 애플의 폴더블 아이폰이 12월 분기 매출 140억 달러를 창출할 수 있을 것으로 예상했다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788613800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c22111359976c8182e714c1ffd434881519f76bc0943a0ddbf6303b437e103cc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "285f88d9a19ce5a20677",
          "headline": "애플의 주가는 325달러입니다. 과매수인가요, 아니면 재평가 시작인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788536529,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b32f31cda5ccb21e4c683de47dd2f1d5cd1a9372cfe11498c296494463a4ce2a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8337cbc7fc2ff63bc499",
          "headline": "SCHG는 Tesla, Meta, Palantir를 합친 것보다 더 많은 Apple을 소유하고 있습니다. 이것이 성장 투자자들이 뒤처지는 이유입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788536261,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2da3af33aa4555aededcd0604efcbd3c46d26c9dc1ff162141907f83c6a5bf52",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d79a8daa76dde3162513",
          "headline": "Apple 메모리 비용 400% 상승, iPhone 18 Pro 가격 100달러 상승 가능",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788496678,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0dddeca1009928774a28a221d266e1f13a5640e1ab2e232491e33fecb518085",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "f190ccf52523b3f92b90",
          "headline": "애플, 앱 개인정보 보호 기능 관련 영국에서 20억 파운드 규모 소송 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788457675,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b35e471fcbb7c23a13bab094d1acddbcd475b4fc166c778beea352f0d6ed066d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2825dc12fa38e7bc86df",
          "headline": "애플, 앱 추적 규칙과 관련해 영국에서 27억 달러 규모의 소송에 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788443718,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=63181b51f129fc19d9a97c51a01ffd846913f6a8e230b7fc0ead5e710a83cfe5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c5efd581b708dd2ede88",
          "headline": "Apple, 앱 추적 규칙과 관련해 영국에서 20억 파운드 규모의 소송에 직면",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788440638,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=00646846eda28b0ad4e5bf2efe0155917ead6122d9dca40bc15fcbef49c6271b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788659400,
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
          "score": -4.55,
          "level": "주의"
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
          "eventId": "ecf752c89ea4b806ecf3",
          "headline": "Elon Musk는 자신의 새 주조소에서 가스 터빈을 18개월 더 빠르게 온라인에 구축할 수 있다고 말합니다. 이 \"심오한 게임 체인저\"가 SpaceX와 Tesla에 의미하는 바는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788659400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ddfa76d72c5e3c87b19596fd4877ebbb7605cf8cac1b7c04c396777e01024d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "65f0ea36084495f3b4b8",
          "headline": "S&P 500, 다우지수는 폭발적 일자리 보고로 하락 마감, 팬들은 인상 우려를 표명하고 칩 제조업체의 강세는 Nasdaq에 도움이 됨 —TSLA, NFLX, BE, NVDA 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1788560329,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edf096e6792c207b0d0c8ecea67ebbe33d0294943b3f3486d6969b08c6574e5d",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5aa8c64a82238a1c5f36",
          "headline": "출시 파티부터 연방 조사까지: 24시간 만에 Tesla의 Cybercab에 문제가 발생한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788558601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c60d480af4ed2a78af0d7e2e7e913ee06adfc9a13b5ce57fc4547f9c586cd7fe",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f37db3b8820b1f85c7e5",
          "headline": "Cybercab 출시 및 NHTSA 조사 이후 Tesla 주가 6% 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788544864,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=31e9f51a3ec1e967982c711e69a611a4ca1374414f0a2dc8bc2e6f37ec2ec0e2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ae4bd9ec467cc872e7a7",
          "headline": "NVDA 주가 2개월 최고치 이상 기록 - 분석가는 129억 달러 규모의 허깅 페이스 거래를 '전략적으로 가치가 있다'고 평가",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788540809,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=991659cd50feea78c009ce9f25450b91263b2dc74a3392925895154aaa267d61",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8337cbc7fc2ff63bc499",
          "headline": "SCHG는 Tesla, Meta, Palantir를 합친 것보다 더 많은 Apple을 소유하고 있습니다. 이것이 성장 투자자들이 뒤처지는 이유입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788536261,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2da3af33aa4555aededcd0604efcbd3c46d26c9dc1ff162141907f83c6a5bf52",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b9919c73a92d6264545d",
          "headline": "Tesla가 핸들이 없는 자동차를 출시한 후 연방 규제 당국이 조사를 시작했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788535260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52dc025bf393dbfa59260916be6506155ef425b970c55b65c75266d963797876",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e17b01bface06627ef63",
          "headline": "AVGO 주식의 27% 매도는 신호를 보내고 있습니다. 그러나 Morningstar는 2030년까지 AI 수요가 더욱 강해질 것으로 보고 있습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788523139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a8fbd2b6b50e0aeae3666440614ae5119a3951fabd952c23d344a0423924d38",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e4814d4b7067690f2446",
          "headline": "Michael Burry, Nvidia-Hugging Face Deal에 ‘No-Brainer’ — Wall Street, OpenAI 및 Anthropic에 대한 새로운 위협",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788498512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37e95a2f72d12f992573a72602ea44ee802e7f1ce1899ae99d18a53de9c3a4ba",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f7cf48f3dff4e76f521a",
          "headline": "새로운 HPE 장비 거래에 대한 ORCL 재고 급증: 소매업체가 1분기 보고서를 앞두고 강세를 보임",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788497674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57de79d3f9a8b3c8aa18f7c2d92cb60e671c33a148e77a9094c3706d671d534b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b1d7f34226d92a8c05bb",
          "headline": "Palantir 주식은 PwC AI 거래 확장 후 한 달 만에 최고의 날을 기록하며 Michael Burry의 약세 베팅을 무시했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788491749,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d91c654bfd19dedaa097db31f9bc7cb6790ab7b80072442a4369329de1c7e0c3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ac9b4f817e3ee70d3430",
          "headline": "Dow, S&P 500, Nasdaq 선물은 8월 채용 데이터가 밝아지면서 물길을 밟았습니다: TSLA, LULU, PL, CRDO 주식에 초점이 맞춰져 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788491100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=728a0f19bb7e14e4d433d3269cf626cd80aeca0ba4bbba1ea418453976212f3c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788542377,
      "signal": "중립·확인 대기",
      "netScore": -0.49,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.92,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.5,
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
          "score": -2.27,
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
          "eventId": "6d07dc02661b93d6a1b5",
          "headline": "AI 인프라 구축을 위한 자금 조달을 위한 오라클의 연속 해고로 인해 실행 위험이 발생한다고 RBC가 밝혔습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788542377,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5dc831e4308213cc183335a68d41b9fc8c651b723cc01d46af7f36108576eed",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "f7cf48f3dff4e76f521a",
          "headline": "새로운 HPE 장비 거래에 대한 ORCL 재고 급증: 소매업체가 1분기 보고서를 앞두고 강세를 보임",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788497674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57de79d3f9a8b3c8aa18f7c2d92cb60e671c33a148e77a9094c3706d671d534b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b1d7f34226d92a8c05bb",
          "headline": "Palantir 주식은 PwC AI 거래 확장 후 한 달 만에 최고의 날을 기록하며 Michael Burry의 약세 베팅을 무시했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788491749,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d91c654bfd19dedaa097db31f9bc7cb6790ab7b80072442a4369329de1c7e0c3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7d47ebbf47f40eeb974b",
          "headline": "오라클 (ORCL) 주식은 분석가가 AI와 Capex에 분할됨에 따라 공정 가치 트림을 얻습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788491332,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6561b66fd220b940c3e3107cd3bf0886ba13370be85b444bdf7186936450a743",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
        {
          "eventId": "f35e2b3cccf7140bfdf5",
          "headline": "HPE와 Oracle이 AI 데이터 센터 네트워킹 계약 확대",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788443408,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06be496920be0d30445d4522237e7f4e70427b501194d917d986f24d31566cfe",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ab9bb62c536081fe2e18",
          "headline": "Oracle AI 데이터 센터 거래 중 HPE 수익 최고 추정치",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788383234,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=822979e0be99a83a36517cfb40988fdf9d4f04dddf1f0f683954c4ff5ef362dd",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c5c4638e76e611f302f3",
          "headline": "오라클 주식은 헤지입니까, 아니면 하락 함정입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788376023,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3dc2a8c10ede2ce1faa6e0bd23c0b1b63f9d3332c1f79dd6d5d53828dd94a38d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d2e00861a5f580f67d9a",
          "headline": "OpenAI의 3000억 달러 거래로 Oracle이 AI 붐의 약한 고리가 될 수 있음",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788374652,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efdd132a943a62f5a35aaaf97e7363c7106235bd23fd9acd0bb74dca4a86c27a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788447600.0,
      "signal": "우호적 변화",
      "netScore": 4.19,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
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
          "eventId": "d36b654dd5a021d7ca75",
          "headline": "Salesforce 재고는 인류애 거래 후 일주일 만에 22% 상승하여 20개월 하락세를 깨뜨렸습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788440400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4ec1ab8cc0ee8abd772773470c0cd1a42dd51f6b430654f44a7d55f9b3445343",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6e5f3fd14d560d5d94da",
          "headline": "Salesforce: 가장 큰 AI 위협이 파트너가 되었습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788371400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=035327cba1dda3d6d12570b659dcbb4f2ad1e4b6e9d0dc4bfdf90a0a751ce940",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "218d3602bd588615b442",
          "headline": "NOW, CRM 및 MSFT로 AI 야망 확대로 Aramco AI 입지 확대",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788368700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db3cb47d63115c1b6a04add08beb42df00719dd82a4063eb32d1790b9d7c7883",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788666361,
      "signal": "주의 강화",
      "netScore": -6.44,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
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
          "eventId": "0f154036fc741067c037",
          "headline": "Michael Burry는 Palantir의 책이 소프트웨어 회사의 책보다는 컨설턴트의 책과 더 비슷하다고 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788666361,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5714bc35e234c84b1b652560d57698764d9188429e146be68b146a681ea2b14e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ce2f204dad370a3aa984",
          "headline": "AI의 다음 승자는? Snowflake, CrowdStrike 및 Palantir에 대한 투자자 베팅",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788627609,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f8a6b5f4133111819463fc584550cb7e590786996b6b8367da79bc9fb2e2bd6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "05e6ad8bd35770cf2cc8",
          "headline": "Globant가 Salesforce AI Pod를 출시함에 따라 Palantir는 확장된 PwC Alliance에서 7.7% 상승했습니다. 어떤 서비스 모델이 더 잘 확장됩니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788611918,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5a2f5b5946be969785ae2300e9a842b5f392385024dc2a85726f501ff38b8e1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c6eb28448873372e603f",
          "headline": "Palantir 억만장자 Peter Thiel은 IPO 이후 200,000% 상승한 이 AI 주식의 주식을 방금 구입했으며 이것이 그의 최고 위치입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788603901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7851080814ece1f2459e7b7035f5dc8898c0f342737d0ffa07834b75c6555933",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8337cbc7fc2ff63bc499",
          "headline": "SCHG는 Tesla, Meta, Palantir를 합친 것보다 더 많은 Apple을 소유하고 있습니다. 이것이 성장 투자자들이 뒤처지는 이유입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788536261,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2da3af33aa4555aededcd0604efcbd3c46d26c9dc1ff162141907f83c6a5bf52",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c6fb4293e7f004e8c532",
          "headline": "팔란티르 억만장자 피터 틸, 10년 만에 AI 주식 560% 증가 (힌트: 엔비디아 아님)",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788516240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a903dd5b68bf809c45e58ea947afa4c20289169754c7dcc9819730ac46ff338",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b1d7f34226d92a8c05bb",
          "headline": "Palantir 주식은 PwC AI 거래 확장 후 한 달 만에 최고의 날을 기록하며 Michael Burry의 약세 베팅을 무시했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788491749,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d91c654bfd19dedaa097db31f9bc7cb6790ab7b80072442a4369329de1c7e0c3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "631bfa2bc237b9b6850a",
          "headline": "Palantir Stock, 붉은 깃발과 급등락에 저항하다 8% – 그 이유는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788470626,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c670f41e113be40dfa000d22fe72e8bbd4c24510a0a7d6e36b7becd36e7dc852",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "58af2c520afb1464cd73",
          "headline": "Palantir 주식에 걸려 있는 1조 달러 규모의 문제",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788456654,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db0908f319d462ebb96eb0a10573879f2ca42eff057944ceff1ca770c26d5e07",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "546083d1f4a2cc59a974",
          "headline": "'빅쇼트' 마이클 버리, 팰런티어를 'AI FOMO' 컨설턴트로 불러 시가총액 1000억 달러 이하로 추락할 수 있다고 경고",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788416999,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2c9f1b7bd3d55abe5fd8638e26058c67ed954125391b9cb91a5d2ee5657634c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "42a4fa5288053a9d34ef",
          "headline": "Palantir 주가는 1억 9200만 달러 규모의 육군 계약에도 불구하고 하락",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788384739,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da6278cd27393f4f00d3af0202e77e5818bb723976c46352215a52efb9d8621d",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788676462,
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
          "eventId": "f7abfd02fe21db6af72a",
          "headline": "Nvidia의 2,790억 달러 베팅으로 모든 것이 바뀌었습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788676462,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c894a3a8d556b8d736a1e286c9cc55bc7c49c8203ca8ab596d47ff8eb33e2ab",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7652b6bc6572aebcf538",
          "headline": "Nvidia가 지원하는 AI 회사, 1,030억 달러라는 엄청난 금액 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788650220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e354cb6b2a7f1bfb803503068deaad9ddf4b46f37e11d5767bea6d223bee6d37",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2f10ef61d397fe350663",
          "headline": "ASML vs. 대만 반도체: 어느 반도체 독점이 더 안전한 투자인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788636000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f50564404dc39947250382175907bb112df0c9db516eb919910c753e1df9760c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ce2f204dad370a3aa984",
          "headline": "AI의 다음 승자는? Snowflake, CrowdStrike 및 Palantir에 대한 투자자 베팅",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788627609,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f8a6b5f4133111819463fc584550cb7e590786996b6b8367da79bc9fb2e2bd6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8cee827e6d2b6afff6ed",
          "headline": "순다르 피차이(Sundar Pichai)의 수익이 주식 보유에 대한 771억 달러의 미실현 이익으로 부풀려진 후 알파벳의 주가는 2.2% 하락했습니다. 투자자들은 실질 성장을 판단할 때 그 이익을 할인해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788618900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=471d86a51f588be1a870c3977aa8e718c04a275f395ed19b785ab08e403aa9d0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2c14c1f10228f7447468",
          "headline": "대부분의 투자자는 AI 과대광고에 너무 많은 비용을 지불합니다. 엔비디아는 예외입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788618540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8653711909bcf63268b8735b727b4d523f28088f9484dfb08fc7e423bd8e422c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "c4e5da7e7f840875b571",
          "headline": "Nvidia와 SK Hynix의 최근 뉴스는 시장이 Micron Technology의 미래에 대해 무엇을 기대하는지 정확하게 보여줍니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788609900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=26483af76fc42582dd341a593e346c4ea82af57dda0fb958f5406f12a3a41cf7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c6eb28448873372e603f",
          "headline": "Palantir 억만장자 Peter Thiel은 IPO 이후 200,000% 상승한 이 AI 주식의 주식을 방금 구입했으며 이것이 그의 최고 위치입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788603901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7851080814ece1f2459e7b7035f5dc8898c0f342737d0ffa07834b75c6555933",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "32cb35710ae36df4ba11",
          "headline": "NVDX: Nvidia 주식에 대한 레버리지 플레이를 위한 좋은 설정",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788599709,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=534096569206e7f5bd4d97078686e2330b58b918be5a5dfabfd65942bfdfbb21",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9952f26e2bbd48af0e35",
          "headline": "Broadcom: 3,500억 달러 규모의 AI 신호에는 290억 달러의 각주가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788586217,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a957a36461a14b44c31074dca27a2577e27ff6326f67b70ee770161e499b813",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "65f0ea36084495f3b4b8",
          "headline": "S&P 500, 다우지수는 폭발적 일자리 보고로 하락 마감, 팬들은 인상 우려를 표명하고 칩 제조업체의 강세는 Nasdaq에 도움이 됨 —TSLA, NFLX, BE, NVDA 집중",
          "eventLabel": "실적 발표",
          "publishedAt": 1788560329,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=edf096e6792c207b0d0c8ecea67ebbe33d0294943b3f3486d6969b08c6574e5d",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6d07dc02661b93d6a1b5",
          "headline": "AI 인프라 구축을 위한 자금 조달을 위한 오라클의 연속 해고로 인해 실행 위험이 발생한다고 RBC가 밝혔습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788542377,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d5dc831e4308213cc183335a68d41b9fc8c651b723cc01d46af7f36108576eed",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "데이터센터 투자 지속 시 AI 컴퓨팅 수요 유지 가능성"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 48,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788650220,
      "signal": "우호적 변화",
      "netScore": 8.53,
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
          "eventId": "7652b6bc6572aebcf538",
          "headline": "Nvidia가 지원하는 AI 회사, 1,030억 달러라는 엄청난 금액 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788650220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e354cb6b2a7f1bfb803503068deaad9ddf4b46f37e11d5767bea6d223bee6d37",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f2a4842761cc8102121d",
          "headline": "AMD는 Anthropic에 최대 50억 달러를 투자했으며 Anthropic의 IPO 안내서는 며칠 앞으로 다가온 것으로 알려졌습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788649381,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3c1b14af9f07ae4408f612a0ca2ff1c346c2a8171e3ad2d1445e4137cf940adb",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2f10ef61d397fe350663",
          "headline": "ASML vs. 대만 반도체: 어느 반도체 독점이 더 안전한 투자인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788636000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f50564404dc39947250382175907bb112df0c9db516eb919910c753e1df9760c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "23bb64bc332b943998df",
          "headline": "Broadcom 대 Nvidia: 수익 창출 후 어느 인공 지능(AI) 칩 제조업체가 더 나은 구매인지 보여주는 1가지 중요한 지표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788635100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df0f33cba1195e3098ad03ae5ff7a516af30f6bd19e205403a453411b81836f0",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ce2f204dad370a3aa984",
          "headline": "AI의 다음 승자는? Snowflake, CrowdStrike 및 Palantir에 대한 투자자 베팅",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788627609,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f8a6b5f4133111819463fc584550cb7e590786996b6b8367da79bc9fb2e2bd6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "8cee827e6d2b6afff6ed",
          "headline": "순다르 피차이(Sundar Pichai)의 수익이 주식 보유에 대한 771억 달러의 미실현 이익으로 부풀려진 후 알파벳의 주가는 2.2% 하락했습니다. 투자자들은 실질 성장을 판단할 때 그 이익을 할인해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788618900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=471d86a51f588be1a870c3977aa8e718c04a275f395ed19b785ab08e403aa9d0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "2c14c1f10228f7447468",
          "headline": "대부분의 투자자는 AI 과대광고에 너무 많은 비용을 지불합니다. 엔비디아는 예외입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788618540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8653711909bcf63268b8735b727b4d523f28088f9484dfb08fc7e423bd8e422c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c6eb28448873372e603f",
          "headline": "Palantir 억만장자 Peter Thiel은 IPO 이후 200,000% 상승한 이 AI 주식의 주식을 방금 구입했으며 이것이 그의 최고 위치입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788603901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7851080814ece1f2459e7b7035f5dc8898c0f342737d0ffa07834b75c6555933",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9952f26e2bbd48af0e35",
          "headline": "Broadcom: 3,500억 달러 규모의 AI 신호에는 290억 달러의 각주가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788586217,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a957a36461a14b44c31074dca27a2577e27ff6326f67b70ee770161e499b813",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1128e721d972efc35cb6",
          "headline": "오라클, AI 투자로 1분기 성과 달성, Stargate에 집중, RBC Capital Markets 발표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788538914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ba4cc3451f980e35756ac5a2f52a209a067b5a9b85fa106a833282a5c0a29f1a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "54b750cc8db9bd930554",
          "headline": "Arista의 2분기 AI 네트워킹이 ANET(Arista Networks) 투자자의 조치를 요구해야 합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788531003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eda3441ae6de14bde730deaa00dd0aea947dd6d99caa80773a0dea973ff60985",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "4ac4dd5bd64db8ced620",
          "headline": "올해 초 \"SaaSpocalypse\"에 대한 Marc Benioff의 250억 달러 베팅은 이제 Salesforce 투자자들에게 결실을 맺고 있으며 참여하기에 너무 늦지 않았습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788525840,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c12bb948e77af759b1d49f4fea82ce4340113af33b5a56dd05619ccd94265b4b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 30,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788635100,
      "signal": "주의 강화",
      "netScore": -4.56,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.92,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -3.85,
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
          "eventId": "23bb64bc332b943998df",
          "headline": "Broadcom 대 Nvidia: 수익 창출 후 어느 인공 지능(AI) 칩 제조업체가 더 나은 구매인지 보여주는 1가지 중요한 지표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788635100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df0f33cba1195e3098ad03ae5ff7a516af30f6bd19e205403a453411b81836f0",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9952f26e2bbd48af0e35",
          "headline": "Broadcom: 3,500억 달러 규모의 AI 신호에는 290억 달러의 각주가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788586217,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a957a36461a14b44c31074dca27a2577e27ff6326f67b70ee770161e499b813",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "62362d03cbbc263295bf",
          "headline": "Soft Guidance가 221%의 AI 수익 급증을 가리면서 Broadcom은 6% 하락; NVIDIA 인치 더 높음, AMD 미끄러짐",
          "eventLabel": "실적 발표",
          "publishedAt": 1788444356,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=616da197b6fde819be618af72337fbb47e098bbbf8bf2d81f0df3266cd4fbfb5",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c2f282be06e174010844",
          "headline": "TSLA, PCG, GOOGL, RUN, CARR 주식에 초점: 21,000개의 가정용 에너지 장치를 연결하는 새로운 가상 발전소",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788442927,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dddf3fdf06b97cbf4b6989f45c418378d109a18b0e0704f3dc781dfb85ced51d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1d8f02d86bf5df7f8d16",
          "headline": "Broadcom은 370달러에 머물고 있으며 Wall Street는 갑자기 AI 사업에 대해 의구심을 품고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788441502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52fb2e2e44ca7fc52b53fe260023a7493ed5bd62efc0f7d31bd437545b67776b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "546083d1f4a2cc59a974",
          "headline": "'빅쇼트' 마이클 버리, 팰런티어를 'AI FOMO' 컨설턴트로 불러 시가총액 1000억 달러 이하로 추락할 수 있다고 경고",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788416999,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2c9f1b7bd3d55abe5fd8638e26058c67ed954125391b9cb91a5d2ee5657634c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5a8ad5e841d509fad5c3",
          "headline": "억만장자 Dan Loeb는 Nvidia와 Broadcom을 떠났습니다. 그는 AI 칩의 최고라고 부르고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788405833,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c8c88244c26033b707b730a9c0166ebdf6e1fd2884f6dc35bfb58d7b0991e98",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "361f7c74d50d04eb19fd",
          "headline": "MGNI 주식은 또 다른 녹색 주간을 맞이합니다: 애널리스트는 Google AdTech 판결로 더 큰 기회의 문이 열렸다고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788405750,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7911ffd674e57b6d45a595995fbe11514a34ab920b3baf40b7fa38b048590313",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "57d9a862c24a8b6a02ca",
          "headline": "Broadcom은 2028년까지 AI 수익에서 $ 230B를 봅니다. '천재들' 이 주도하는 OpenAI, Anthropic: 분석가는 일부 위험이 해결되지 않은 채 남아 있다고 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788402864,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57a32e69965e4c5f2cf33ba46429128fdd67fcb7740bc3c25666c01c707da8d6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e8e2ee05ec464a14345d",
          "headline": "Microsoft, 오랜 투자자 수요에 따라 처음으로 정확한 Azure 판매 수치 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788388712,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c7b36c87819101d21ce06157a2997d7da6f9edee6752c1a921476918b994d95",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "75f885d5ba5676a2a7ff",
          "headline": "Broadcom 2026년 3분기 실적: AI 칩 수요에 따른 기록적인 수익",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788385577,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=843481624f0f311bd97eb4eb6b949072f718ead3bb8acf7033e149572dc51165",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c89b54469e1b3165018a",
          "headline": "Marvell 대 Broadcom: 현재 하나의 AI 주식이 더 매력적으로 보입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788361221,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0cbff147062f86b2c7f366c43d81f820f0ead453d1f145a70d48b48263a3e49",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788633300,
      "signal": "주의 강화",
      "netScore": -5.66,
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
          "eventId": "1fd39215a412312fcfaa",
          "headline": "새로운 CEO 존 터너스(John Ternus)가 이끄는 Apple의 첫 번째 iPhone이 9월 9일 출시됩니다. 이제 주식을 매입할 때가 되었는지 알아보겠습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788633300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c686985f2d1ee36acd57cf68fc1ec368cbd7560286e77ee01a4f48c461c0159b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "9531ad704c5fa19fe096",
          "headline": "모건스탠리는 애플의 폴더블 아이폰이 12월 분기 매출 140억 달러를 창출할 수 있을 것으로 예상했다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788613800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c22111359976c8182e714c1ffd434881519f76bc0943a0ddbf6303b437e103cc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "d79a8daa76dde3162513",
          "headline": "Apple 메모리 비용 400% 상승, iPhone 18 Pro 가격 100달러 상승 가능",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788496678,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0dddeca1009928774a28a221d266e1f13a5640e1ab2e232491e33fecb518085",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788566336,
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
          "score": 0.35,
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
          "score": -2.97,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.9,
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
          "eventId": "827bd1bf3f1f9b6cad08",
          "headline": "Marvell은 전망을 높였지만 Google 칩 수익이 정체되면서 하락했습니다. AI 보상에 가격이 책정되었나요? (검토 준비 중)",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1788566336,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c671bd5fcba653dfdc97d99024b47750c2036530faca328cad1456ce7b7e280b",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c102fb1c411610ba2375",
          "headline": "무너진 AI 실리콘이 반등하면서 Marvell은 6% 상승하고 Qualcomm은 거의 버지 못합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788537738,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c5f1033f4c42345d20bf9c704f050455e74dfbce12245e557cb95efbbb770c9",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5b82a5b5b975e9730dda",
          "headline": "Marvell Technology와 Taiwan Semiconductor는 No-Brainer Picks입니다. 그들은 골드 러시에서 이기는 것을 가지고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788524785,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4573c14df2074810d02255c764ad9b85d8e4f7277498a39cadeb692b5120936a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fbb7a9c0283352091cc4",
          "headline": "영업이익률이 계속 확대되기 때문에 Marvell 주식을 사야 할까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788470392,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fed7f650e1edb9385988469941a361630ab1832a2d80d3233bf03cedd534bc52",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6879de66abaf9265192f",
          "headline": "Marvell Technology는 Synopsys가 거대한 위협이라는 것을 알고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788441732,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38acf07709bd251eb353fc4c38bee193bbd5d3acd534eeae8e6a3bbf261d6d01",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "64a12357069e5865547f",
          "headline": "Jim Cramer는 Marvell의 120억 달러 규모의 Google 거래를 응원했지만 주가는 거의 10% 하락했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788361242,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb3d6e200c9f8bc12d0c4b8ce3847aa6c2a5e4d7f774b8042a98660acf6babb9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c89b54469e1b3165018a",
          "headline": "Marvell 대 Broadcom: 현재 하나의 AI 주식이 더 매력적으로 보입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788361221,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0cbff147062f86b2c7f366c43d81f820f0ead453d1f145a70d48b48263a3e49",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788635100,
      "signal": "우호적 변화",
      "netScore": 4.48,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
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
          "eventId": "23bb64bc332b943998df",
          "headline": "Broadcom 대 Nvidia: 수익 창출 후 어느 인공 지능(AI) 칩 제조업체가 더 나은 구매인지 보여주는 1가지 중요한 지표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788635100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df0f33cba1195e3098ad03ae5ff7a516af30f6bd19e205403a453411b81836f0",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "10920d99d3f2df0e658d",
          "headline": "엔비디아의 50억 달러 인텔 베팅은 6월까지 300억 달러 가치가 되었습니다. 파트너십 가격이 여전히 잘못 책정되어 있나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788471580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8316bfe61c35a3736280c7432450477ce7b65b3cb2e2b4370124e71ff192953e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9f1b76b9593fe3e51f58",
          "headline": "Amazon 대 Microsoft: 우수한 인공 지능(AI) 클라우드 주식을 식별하는 1가지 주요 지표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788469980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3413ec929cf8b8d3bbeafd6ee9b96378ac8cfe451773cf8204bf8f5c4b564066",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "078a5a075718ef00ef7e",
          "headline": "PG&E, Google, Rewiring America 캘리포니아에서 VPP 출시",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788460010,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7d419d4a24ae6c640c2e84078661540fd24e42dce22d1c50c67772e829fe79b2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "afc6ef41efa5323e7e01",
          "headline": "AMD는 조용히 인텔의 점심을 먹고 있다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788441886,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3577b3383e7b6b7ac340201e2b25e75bef5b793e8bf04c3c5e4813688dac7de4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "33a4d1e376879311121b",
          "headline": "Intel(INTC)은 Kasm AI 파트너십 후 공정 가치보다 82% 낮을 수 있음",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788430267,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ea5610c9f7b503761640d56cf69d35aa270e00eaaf0b7da3f048e8b3efdfe7d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "efbf58bb83907973e184",
          "headline": "8월 샌디스크 주가가 29% 급등한 이유",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788422501,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3235a52f3816e052fe310a8daaa40f34e0316c43dd7f138271f0018900adc03",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0f2879b21dfc6022ebfc",
          "headline": "인텔 주식이 1년 만에 3배로 증가했습니다. 그렇다면 5년 후에는 어디가 될까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788415861,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66de8b389445dcffe91465cf96dfb9e76ec485e0f14515f5caea99fe55974f22",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0185e62e8f2998d0cde4",
          "headline": "예측: 2030년까지 Intel에 대한 1,000달러 투자의 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788360181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3b531ac70fc8697dd84872e651c29f586eee1e5492c3a1ddeb5570491c9c04e7",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788524785,
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
          "eventId": "5b82a5b5b975e9730dda",
          "headline": "Marvell Technology와 Taiwan Semiconductor는 No-Brainer Picks입니다. 그들은 골드 러시에서 이기는 것을 가지고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788524785,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4573c14df2074810d02255c764ad9b85d8e4f7277498a39cadeb692b5120936a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "88a356a1f4609afca6b0",
          "headline": "내부자 움직임: Shu-Hua Fang, 대만 반도체 주식에 154,000달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788519681,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=796857e1b09107fc367bc66044ea9736905283b50d6e10e3f6008896a8a00a40",
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
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788650220,
      "signal": "우호적 변화",
      "netScore": 7.57,
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
          "eventId": "7652b6bc6572aebcf538",
          "headline": "Nvidia가 지원하는 AI 회사, 1,030억 달러라는 엄청난 금액 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788650220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e354cb6b2a7f1bfb803503068deaad9ddf4b46f37e11d5767bea6d223bee6d37",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2f10ef61d397fe350663",
          "headline": "ASML vs. 대만 반도체: 어느 반도체 독점이 더 안전한 투자인가?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788636000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f50564404dc39947250382175907bb112df0c9db516eb919910c753e1df9760c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "1fd39215a412312fcfaa",
          "headline": "새로운 CEO 존 터너스(John Ternus)가 이끄는 Apple의 첫 번째 iPhone이 9월 9일 출시됩니다. 이제 주식을 매입할 때가 되었는지 알아보겠습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788633300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c686985f2d1ee36acd57cf68fc1ec368cbd7560286e77ee01a4f48c461c0159b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "ce2f204dad370a3aa984",
          "headline": "AI의 다음 승자는? Snowflake, CrowdStrike 및 Palantir에 대한 투자자 베팅",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788627609,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f8a6b5f4133111819463fc584550cb7e590786996b6b8367da79bc9fb2e2bd6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "8cee827e6d2b6afff6ed",
          "headline": "순다르 피차이(Sundar Pichai)의 수익이 주식 보유에 대한 771억 달러의 미실현 이익으로 부풀려진 후 알파벳의 주가는 2.2% 하락했습니다. 투자자들은 실질 성장을 판단할 때 그 이익을 할인해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788618900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=471d86a51f588be1a870c3977aa8e718c04a275f395ed19b785ab08e403aa9d0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2c14c1f10228f7447468",
          "headline": "대부분의 투자자는 AI 과대광고에 너무 많은 비용을 지불합니다. 엔비디아는 예외입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788618540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8653711909bcf63268b8735b727b4d523f28088f9484dfb08fc7e423bd8e422c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9531ad704c5fa19fe096",
          "headline": "모건스탠리는 애플의 폴더블 아이폰이 12월 분기 매출 140억 달러를 창출할 수 있을 것으로 예상했다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788613800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c22111359976c8182e714c1ffd434881519f76bc0943a0ddbf6303b437e103cc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "c4e5da7e7f840875b571",
          "headline": "Nvidia와 SK Hynix의 최근 뉴스는 시장이 Micron Technology의 미래에 대해 무엇을 기대하는지 정확하게 보여줍니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788609900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=26483af76fc42582dd341a593e346c4ea82af57dda0fb958f5406f12a3a41cf7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8b75a18b4250ccf231bc",
          "headline": "중국 최대 메모리 칩 주가는 거의 마이크론 수준이다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788603960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=97dcbda399d49b1527416f9cd9b2484dd6af44cfb677fb9e5d8061ce1342e00a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c6eb28448873372e603f",
          "headline": "Palantir 억만장자 Peter Thiel은 IPO 이후 200,000% 상승한 이 AI 주식의 주식을 방금 구입했으며 이것이 그의 최고 위치입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788603901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7851080814ece1f2459e7b7035f5dc8898c0f342737d0ffa07834b75c6555933",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9952f26e2bbd48af0e35",
          "headline": "Broadcom: 3,500억 달러 규모의 AI 신호에는 290억 달러의 각주가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788586217,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a957a36461a14b44c31074dca27a2577e27ff6326f67b70ee770161e499b813",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "63884840a6fb9c0c01f3",
          "headline": "Micron vs. Sandisk: 어느 AI 메모리 주식이 더 나은 구매인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788542400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df7e6ecd63fbb15f388c10b48a656208c55bc1067164d604779a0949ffba0368",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 40,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788536185,
      "signal": "중립·확인 대기",
      "netScore": -0.36,
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
          "score": -1.75,
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
          "eventId": "df48f6bae44281cdf2cf",
          "headline": "오늘 Sandisk 주가가 상승한 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788536185,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c1f02dc19328b5375b1b66dcdce93af411c45248cafc1783119e6ee737767d70",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4e2980d96fa059a8405f",
          "headline": "Leopold Aschenbrenner의 AI 펀드는 강제로 매각되었습니다. Micron과 SanDisk가 틀렸습니까? 아니면 레버리지입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788405452,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=665448d42f78e46e1e76524f9b023f91df352d9f1e664660c0594888cca4a72b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bf5375a671f25211ad82",
          "headline": "Sandisk 주식: 구매, 판매 또는 보유?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788377520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4616a4eb94be3a1e6329b79ec8c9746a072ccd853bf52fc605460ed620a8e2b1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "483da06cbebb29afc471",
          "headline": "메모리 위기가 예상보다 큽니다. 하락장에서 매수할 수 있는 상위 주식 1개(힌트: Micron이나 Sandisk 아님)",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788363901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ed7ea83f1e4e4a4d89be13bf5006976b5ea937d1097c37eae8fe1ac8641adf1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788633300,
      "signal": "주의 강화",
      "netScore": -5.66,
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
          "eventId": "1fd39215a412312fcfaa",
          "headline": "새로운 CEO 존 터너스(John Ternus)가 이끄는 Apple의 첫 번째 iPhone이 9월 9일 출시됩니다. 이제 주식을 매입할 때가 되었는지 알아보겠습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788633300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c686985f2d1ee36acd57cf68fc1ec368cbd7560286e77ee01a4f48c461c0159b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "9531ad704c5fa19fe096",
          "headline": "모건스탠리는 애플의 폴더블 아이폰이 12월 분기 매출 140억 달러를 창출할 수 있을 것으로 예상했다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788613800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c22111359976c8182e714c1ffd434881519f76bc0943a0ddbf6303b437e103cc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "d79a8daa76dde3162513",
          "headline": "Apple 메모리 비용 400% 상승, iPhone 18 Pro 가격 100달러 상승 가능",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788496678,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0dddeca1009928774a28a221d266e1f13a5640e1ab2e232491e33fecb518085",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788531003,
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
          "eventId": "54b750cc8db9bd930554",
          "headline": "Arista의 2분기 AI 네트워킹이 ANET(Arista Networks) 투자자의 조치를 요구해야 합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788531003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eda3441ae6de14bde730deaa00dd0aea947dd6d99caa80773a0dea973ff60985",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788538833,
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
          "eventId": "71af741db2d528d0ebb6",
          "headline": "GoPro는 Starman Optical Merger와 Markiplier 지분을 34% 확대했습니다. 일관된 등반 7%, Lumentum 3% 증가",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788538833,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f4cd1e985d5f0d0dd650f0ec64360c43779f228908471c2596d762cf8077d0f1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5c7681044d66570f035b",
          "headline": "코히런트는 실제 AI 문제를 해결하고 있습니다. 아직도 이 가격에 매수인가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788439557,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f7a0ad435f03656e3d577a7a4beff1b57272c4423879fa838c69b853b3d6eed",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788538833,
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
          "eventId": "71af741db2d528d0ebb6",
          "headline": "GoPro는 Starman Optical Merger와 Markiplier 지분을 34% 확대했습니다. 일관된 등반 7%, Lumentum 3% 증가",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788538833,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f4cd1e985d5f0d0dd650f0ec64360c43779f228908471c2596d762cf8077d0f1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8ad3266eab3c29dc03c4",
          "headline": "Lumentum: 너무 비싸요",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788441473,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=86852b5a071747870ce5682b25e2c15e702f19f5b2230f088366cfbff6c67993",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788523200,
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
          "eventId": "e83fb78d3e05f36c87f5",
          "headline": "GE Vernova, 스코틀랜드 ESB 풍력 발전 단지에 터빈 공급 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788523200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=485703247cec76fcd07b2f015353af4f6d3a2de4dd5f1c64fb122198c24fc7b0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6664fe238ac5ad4945c7",
          "headline": "시장의 대화: GE Vernova 거래, 6~12개월 내에 베네수엘라 전력망 안정화 목표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788516641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fef8b4ec0362edf694401fe016aa02b528c27848c00e6df722437b7b18090da1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "faf85bda6709f6513b53",
          "headline": "10년 후 GE Vernova는 어디에 있을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788430800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b3b7fe395e8a0b687df3ebf6d968c9dca6eed4b9b7d4be2a9759a91b09ba686",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788372720,
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
          "eventId": "72e4f9271a149b2fc540",
          "headline": "ATS, Eaton 공급업체 우수상 수상",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788372720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=63f47a7f532110dd4219f12de4da8071bbbacc245c3d6829192bc20ba74c3b68",
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
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788574392,
      "signal": "우호적 변화",
      "netScore": 5.94,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.97,
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
          "score": 1.92,
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
          "eventId": "e799cbdf421216e4335e",
          "headline": "Vertiv Holdings Co(VRT), AI 데이터센터 전력 도달 범위를 심화하기 위한 유틸리티 계약에 합의",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788574392,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fdf5335c10e11621038f4cafb4041e1163de35450be064a4856316c862ce12e4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b981a2f7783e2fccce20",
          "headline": "VRT의 UIG 거래가 APH 및 SMCI에 비해 AI 성능 우위를 강화할 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788450600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d30cb98c403a70559cf0d33d776e3ab063b9d615bb60f534197c71c22cdf447a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "69e1f2b58f7d72c7ad1d",
          "headline": "Vertiv는 AI 데이터 센터의 가장 큰 병목 현상을 해결하기 위해 최대 26억 달러를 투자했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788418201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cc78d5f06cef09bc52e8b32687c4fd5244354883743471487d85f16fe988907e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2a6c8c1433318f89e67b",
          "headline": "Vertiv, AI 데이터 센터용 그리드, 마이크로그리드 솔루션에 26억 달러 투자",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788374807,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fb0beecba6e4fc983687386eaedd3bfda10fd41c51d2c135e4cbef3b7fab3207",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4afeff423b45c0835f54",
          "headline": "Vertiv, AI 데이터센터 전력 공급업체 인수",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788361620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=27583fadc5bb3932f896d12ce770589f875701f7a5ecb95d298a05055875e929",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
      "dataAsOf": 1788447600.0,
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
          "eventId": "f8bcc0e54d7ed35676a8",
          "headline": "STX SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788447600.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000201/stx-20260902.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
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
      "updatedAt": 1788710020.360385,
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
