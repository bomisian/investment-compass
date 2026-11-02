// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1793591773.4988337,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793495421,
      "signal": "중립·확인 대기",
      "netScore": 0.69,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
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
          "score": -1.4,
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
          "eventId": "9dd4c45b3c2022f3b43c",
          "headline": "마이크로소프트 (MSFT), AI 추진에 따라 250억 $ 규모의 채권 거래 성사",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793495421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca1077f52aa08f87115a6058e806fb5c89fa7db0e774c6b5ebdc65e2d4afeea0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92a9b0cdf20264e63e37",
          "headline": "Microsoft: Azure 성장율 48%, 아직 용량이 충분하지 않음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793385072,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee6bc40590ad9a9297e1b283be8caf536159a1639b5ec878f55881b6f93c02e9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "361b11c026a18b4384b9",
          "headline": "Microsoft Copilot AI, XRP의 믿을 수 없는 가격 예측",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793376130,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d314691a5e637b5dbd74b84bf0582ffd17c08eb5ebbd7efd96518fd6ea254b2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9f8e57729fa2a8273ba1",
          "headline": "에스티로더 컴퍼니즈와 마이크로소프트, 기업 효율성과 소비자 중심 성장을 위한 새로운 전략적 파트너십 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793366520,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=71a80a63c2c40b6665fa7ec8ac4d90094e8de8ef8c75702429f63b19f718705a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2b0b6acc725a494df875",
          "headline": "Satya Nadella가 방금 Oracle과 CoreWeave에 도전했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793360826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=61a5ce9b32f7a42b7da1de1e0ddc31477aac623e03ce3546f813fce72bdc308e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9ed0edfbe42b9d861d20",
          "headline": "Stocktwits AI Roundup: Intel, Amazon, Alphabet 결과는 Big Tech의 기록적인 지출이 다시 집중됨에 따라 붕괴를 유발합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793347648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=544f8ceb63673476c922742e2395753107476625ca1607f20698a02929e45c17",
          "factorChanges": {
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
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793518177,
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
          "score": -3.5,
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
          "eventId": "3b7bbe3cbe0af7acd816",
          "headline": "Josh Brown: 메타는 Nvidia를 비싸게 보이게 만드는 \"현금 마개\"가 될 수 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793518177,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c200f9d99312f45e0eac115dab8519cf030e196c1822267b63d298ba4854eb4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c33ae1365e456e3cd2a1",
          "headline": "3가지 AI 인프라 주식 소매 투자자들이 Google 검색 변화 이후 주목하고 있는 곳",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793448629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f47e4bc9349c8cbc9ffa3ca6e38a1eb2fa228ae0797c3f5b6bfb3c3d0d6310b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec689f09a585d4788173",
          "headline": "엔비디아는 한 달 만에 11% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793434017,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca315ceb1c09466e33895c42865dbdf07fb056318ad7781267a642d1f54b9938",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8085f97dbf2dc072ed97",
          "headline": "알파벳: 12% 하락 후 부품 가치는 주당 약 337달러입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793404740,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=43a4f26ac3240435c2568b2fc90b657f94943587c9948e752362827b99e66689",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "368b41fdf70a02fd574f",
          "headline": "Google의 AI 검색이 트래픽과 사용자 증가에 타격을 주면서 Reddit 주가는 30% 급락했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793388662,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=298366f9c22a828f3769a949fd98357eef5465e9a3d642c1430583504f14a4a4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bafa7271d3086be0d412",
          "headline": "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권이 주식보다 더 나은 기회를 제공한다고 BofA는 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793382914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140c11f582fab1e9b8596a6940e26df2a11d6b9c6a7f972984cc28434ed23755",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1c5924b18efbbc349e2f",
          "headline": "알파벳이 실제로 67% 상승할 수 있을까? 아니면 중추적인 연구가 완전히 잘못된 것인가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793366432,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e02cc8da486647e7639e592ce06b3ba6904d5010a9f8d618b63dbd1301419f4a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b92dbb1712ca4bf77679",
          "headline": "Stocktwits 월스트리트 랩 — Tesla, Broadcom, MercadoLibre가 알파벳으로 강세 전화를 받고 Enphase Face Downgrades",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793350846,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3c5c2950ec23adfded7279946ece523231db65c988c21898a7d230997b282d3d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ab8c3c94a2df6bbb052f",
          "headline": "Alphabet의 4,820억 달러 전멸로 인해 AI 지출에 대한 우려가 촉발됨: QQQ의 거대 기술 노출이 위험해지고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793349027,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c17d0eb62617989532bb892bf2c11e17712070198437fcc7112bff6caf92f8d5",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ae25a5f4e8d88480b225",
          "headline": "Big Tech Capex Scorecard: Amazon은 한 분기에 770억 달러 이상을 지출합니다. MSFT, TSLA, GOOGL과 비교하여 비교하면 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793337370,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6b2beae9f5c0d2265589cfb47eba8e599d42190cf3c4e90228ee3c5d90f2413",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0d2069a724b6d64f327c",
          "headline": "Alphabet, 103%의 클라우드 성장에도 불구하고 하루 만에 5,000억 달러 손실",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793321281,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5eab6a291c48f1d3cc1f7d4b91f5788d4bb39ef05c091f0e444053f767032594",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
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
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793507700,
      "signal": "주의 강화",
      "netScore": -6.71,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.97,
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
          "eventId": "66313ba0d255d75828c7",
          "headline": "AMZN Q3 심층 분석: 클라우드 급증 및 AI 투자로 인해 혼합된 시장 수용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793507700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0123324ff65107780545b5a52c13947e2a6ce969a318cd3ea8b36cca30db2819",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "006e8a8b4f47da414422",
          "headline": "Apple, 투자자로서 꽉 찬 수익 캘린더 주도 Eye Tech, Pharma 결과",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793444400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=830af5c87daf35a8f602c2ec6680ca3553df23bdc7beabc0bcac73d5ef2dce14",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8b74984edb37f833ba11",
          "headline": "Qualcomm 수익 미리보기: 150억 달러 규모의 AI 목표는 여전히 오늘날의 가격을 정당화하지 못합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793443050,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64603d2ad227a174af26847836359df71ae1b323f11aede2e2702812d57ac37e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8b5c56426402a46b9721",
          "headline": "S&P 500, Nasdaq은 투자자들이 기술, AI에서 멀어짐에 따라 3주 연속 하락 마감 — AMZN, INTC, LLY, RBLX 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793405139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f910b2c47ad6d48765be636222f6aeb2210ae6a085a1b96532370a41075f104",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bafa7271d3086be0d412",
          "headline": "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권이 주식보다 더 나은 기회를 제공한다고 BofA는 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793382914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140c11f582fab1e9b8596a6940e26df2a11d6b9c6a7f972984cc28434ed23755",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "52cadd2accc273784755",
          "headline": "Amazon의 3분기 인쇄 쇼에서 AI 수요가 공급을 초과하여 달러 성장이 둔화되었다고 BofA 증권이 밝혔습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793373009,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28c179a774104db81f5720401e1438384548de317f397a459e83eead858ad78a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1db9f5256d199efb544c",
          "headline": "실망스러운 결과 이후 아마존과 인텔이 급락하여 AI 지출에 대한 월스트리트의 신경을 곤두세우고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793367806,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3f06717b09126c5e2b8e96226dd07320ae1d42670c1b02d610b8c92f97a80742",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "41501b25c7815b1a77a3",
          "headline": "Amazon은 실적 부진과 AI 지출로 인해 잉여현금흐름이 마이너스로 전환되면서 7% 하락했습니다. 메타 하락 2%, 알파벳 하락, 월마트 상승 2%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793365922,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b81a4de86f69370ba7626576c5f97c64f1fc869f993129f417460726b12bd943",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b10856bb8836abe07ae4",
          "headline": "분석가들의 견해가 엇갈리는 가운데 GEV 주식에 집중 — HSBC, GE Vernova를 매수로 업그레이드, 풍력 사업이 '최악을 지나갔다'고 말함",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793358385,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=54f780c20736dda53dc5076705ac0ffa77efcd6349ec0a496867da0537ee41e7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9ed0edfbe42b9d861d20",
          "headline": "Stocktwits AI Roundup: Intel, Amazon, Alphabet 결과는 Big Tech의 기록적인 지출이 다시 집중됨에 따라 붕괴를 유발합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793347648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=544f8ceb63673476c922742e2395753107476625ca1607f20698a02929e45c17",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "201321795d2b79494035",
          "headline": "NVDA 주가 하락: Nvidia가 자체 고객에게 데이터 센터 대출을 지원할 수 있음, 분석가는 Intel의 취약한 보고서에 거의 영향을 받지 않음",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793344958,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b599ef299c6f21cb13de346fe40c20fc70de2324fb560e4bd69af2aa92844679",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5c5ebacde7fe36a1031f",
          "headline": "Stocktwits 여권 포트폴리오: 기술 변동성 속에서 SPY, DIA Edge가 10월에 QQQ 및 아시아 주식을 제치고 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793342585,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=808e938e31b35f0219b8e2faf62b72e159c3d06e41b1940cfa0ba7d10288323b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793523421,
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
          "score": -0.7,
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
          "eventId": "f3baf1b5ab3123b6915f",
          "headline": "2030년에 메타 스톡이 있을 것이라고 생각하는 곳은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793523421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df03913e4ea5c1ff59dac50c7de4da7ee105c83a6049e73fe1d7b6f3c2d44fa8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3b7bbe3cbe0af7acd816",
          "headline": "Josh Brown: 메타는 Nvidia를 비싸게 보이게 만드는 \"현금 마개\"가 될 수 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793518177,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c200f9d99312f45e0eac115dab8519cf030e196c1822267b63d298ba4854eb4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e4cf2d073ed6e53fb733",
          "headline": "메타 이후, 이것이 월스트리트의 다음 블록버스터 주식 분할이 될 수 있습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793479982,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2db57f22e7203ff3914635076defa5ea786c69521259cb944d56df9d61ca6d4a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "13f349f7fe7707be70f9",
          "headline": "메타 플랫폼의 AI 지출이 성과를 거두고 있는지 알아보기 위해 주목해야 할 3가지 수치",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793474460,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=62cddd48a770c1431a793e5aeb0e2d9d84be3948e899f950f9f2fcb839893afe",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9f2da03fe32d506b0f33",
          "headline": "Broadcom은 430억 달러 규모의 인류 백스톱이 Intel 주도 칩 라우팅을 만나면서 5.5% 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793446685,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8dc2623a1e1874eadc808a7c011499077df58cf4ce1b864f7bbb858135a1a3d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a3e8c6bcd4247102eaf7",
          "headline": "저커버그는 메타의 “핵심 사업이 강하다”고 말했다. S&P는 여전히 전망을 부정적으로 하향",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793446379,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6305495d1312cf251c271642469527687157cb97b9c849c54bb4364303805f91",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d0e63f3e665325002d91",
          "headline": "Meta Stock은 10월에 15% 하락했으며 S&P는 710억 달러의 현금 흐름 적자를 예측했습니다. 2030년까지 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793428613,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c0e751eb46c0cfa05f5836da3439a664bfc1e3c62daada8bb52f55cca6c7b48",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "061710eddcd3130215c6",
          "headline": "메타(META) 주식은 뮤즈와 자금 조달이 토론을 주도함에 따라 적당한 공정 가치 상승을 봅니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793383804,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a5a12b38bb8670431b6bfe950375367a074e4c0b05b41f69d8a333e08c954ae1",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bafa7271d3086be0d412",
          "headline": "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권이 주식보다 더 나은 기회를 제공한다고 BofA는 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793382914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140c11f582fab1e9b8596a6940e26df2a11d6b9c6a7f972984cc28434ed23755",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7002c5da604af95e12e5",
          "headline": "공개된 법원 문서에 따르면 메타는 솔직한 NYU 교수의 신용을 떨어뜨리기 위해 계획을 세웠다고 합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793377800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=56abb699fde6097ca74ff6a7a5be9aafd959a34c624721653525bd5ddee2f224",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "374522afd04ec24a8ba8",
          "headline": "AMD, 메타로 AI 영역 확장: NVDA 및 AVGO를 능가할 수 있을까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793369100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38831521ffb450e45251727a3d225682d9f1fcde4f3e76f188ce850fa526179d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "692a57e1429cfe0a1bcc",
          "headline": "업데이트: 시장 잡담: Meta, TikTok, X가 안전 데이터 요청에 대한 영국 규제 기관에 대한 도전에서 패함",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793368350,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d14c0bcd6d88fb2b6fa070037c2bc3200867957a4a6b8eb2dab8f1d7fa7c56ce",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 15,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793554141,
      "signal": "주의 강화",
      "netScore": -3.29,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "eventId": "3cf4075d96bcea8d393e",
          "headline": "Apple의 최신 iPhone이 몇 년 만에 가장 큰 성장의 촉매제가 될 수 있을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793554141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f3ec7ce6e72f17b0ad4a2fb3ea8f14ebe35380a42293db2b5308756ff6f10c6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "8b74984edb37f833ba11",
          "headline": "Qualcomm 수익 미리보기: 150억 달러 규모의 AI 목표는 여전히 오늘날의 가격을 정당화하지 못합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793443050,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64603d2ad227a174af26847836359df71ae1b323f11aede2e2702812d57ac37e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a8134328fd692556ef21",
          "headline": "Apple의 가장 큰 위협은 Android가 아닙니다. 분석가는 4분기 실적을 앞두고 AAPL 자체 기기라고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793430907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d6a4755c644d1653996a8d2f144acc6ce849d623ae1c5b636f062459cd02d38",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "8185f73313c0172f2433",
          "headline": "2030년까지 TSMC 주식에 대한 10,000달러 투자의 가치는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793371802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5bd6ab28e097a5631ac7d0c54747b332b0cfb74ceb3b68a1744e0310cc91d22b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9ed0edfbe42b9d861d20",
          "headline": "Stocktwits AI Roundup: Intel, Amazon, Alphabet 결과는 Big Tech의 기록적인 지출이 다시 집중됨에 따라 붕괴를 유발합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793347648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=544f8ceb63673476c922742e2395753107476625ca1607f20698a02929e45c17",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "107e016713e23efd519c",
          "headline": "Apple 공급업체인 Luxshare는 3분기 이익 성장이 둔화되면서 하락했습니다. 900만 이익 손실 예상",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793338575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aebbde9f4d51aa9b38bd966841a5ea94b6f5eb2dd99333f8762f36bbbe844635",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4da78d36c3cfae88a5da",
          "headline": "낙관적인 1분기 보고서에도 불구하고 기술 매도 속에 SNDK 하락; 소매업은 강세로 전환",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793329548,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e77ff4515978e46db11001f58dda6269ebce33cfb3917b10d9c6e6162e2a6c2e",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b1f2d4abfbb724b03bfa",
          "headline": "밤새 SPCX, ASTS, RKLB 슬라이드: Amazon, 2026년 위성 서비스 데뷔 재확인 — 소매업, 경쟁 위협 고려",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793324065,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53ca1ba7bf9190dd43b764d7b2fa2ab2078af95f059c68f3ae08ce4843e6a76d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793567100,
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
          "score": -4.55,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.2,
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
          "eventId": "24aee6fb8f89ad55aef9",
          "headline": "Barclays는 SpaceX 합병이 이제 Tesla Bull Case의 \"핵심 부분\"이라고 말합니다. 실제로 이런 일이 발생하면 누가 승자가 되는지, 그리고 누가 비용을 지불하는지 알아보겠습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793567100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd3f88ac456fcaf4decb061e7e61e6100b2aa8ec471a83096350fb887480ba20",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "99384f2522e5c8f1b836",
          "headline": "Tesla의 발전은 여전히 ​​가격에 미치지 못합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793505211,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3cb0b6620643b85dbbd470b4ce727ae3a369eb734eb2199427f191dadfd50e2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3a07a2edbc96bcdfcc06",
          "headline": "SpaceX와 Tesla 합병은 이 한 가지 일이 일어날 경우에만 성공할 것입니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793429400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0321a7621bf1542528247f2d86b8ed42807a515b6961828be90f27d97011f313",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ba6a81a53297c26be7b8",
          "headline": "Tesla-SpaceX 합병은 중국에서 가장 큰 규제 위험에 직면할 수 있다고 BofA는 경고했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793383139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd4292130031202f74b1623152887dd7bc111a8cc9174c1fd0b1e5905b4b6d60",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "71065390b1f9cd7d60d2",
          "headline": "Tesla는 새로운 수익원을 창출할 수 있습니다. 주식을 살 시간인가?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793380141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f8150f7f30f690a09fd6311878d2b888ee0873a7439bca1400b351e52dcddb3e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "34cd26364bf5ef755194",
          "headline": "Tesla 주식은 이 3가지 성장 동인이 중심이 되면서 반등할 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793378007,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2196018df99c322a457e4ce56111ab569f7e11c40eef58ba86632837ee7b7ba5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9ed0edfbe42b9d861d20",
          "headline": "Stocktwits AI Roundup: Intel, Amazon, Alphabet 결과는 Big Tech의 기록적인 지출이 다시 집중됨에 따라 붕괴를 유발합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793347648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=544f8ceb63673476c922742e2395753107476625ca1607f20698a02929e45c17",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9d3ed1f8416201f6c599",
          "headline": "SpaceX와 Tesla 합병에 반대하는 사례",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793343000,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=88ab17534752bbf924b90cc37e81263a24a5c40b875e714ddbce57d49ffb89ec",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ae25a5f4e8d88480b225",
          "headline": "Big Tech Capex Scorecard: Amazon은 한 분기에 770억 달러 이상을 지출합니다. MSFT, TSLA, GOOGL과 비교하여 비교하면 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793337370,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6b2beae9f5c0d2265589cfb47eba8e599d42190cf3c4e90228ee3c5d90f2413",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793456877,
      "signal": "주의 강화",
      "netScore": -4.83,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "d990a18f934d1c7043e8",
          "headline": "ORCL 주식은 특히 Oracle이 주요 AI 파트너십을 발표함에 따라 1분기 이후 구축할 수 있는 견고한 기반을 보유하고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793456877,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30a71a7ce7452d0dc8247baddd1ba6b5eedf72a8f50c59dabff8319ff4501f44",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "bafa7271d3086be0d412",
          "headline": "META, AMZN, ORCL, GOOGL 초점: 거대 기술 채권이 주식보다 더 나은 기회를 제공한다고 BofA는 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793382914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140c11f582fab1e9b8596a6940e26df2a11d6b9c6a7f972984cc28434ed23755",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "20504403eaab3c5b9a11",
          "headline": "오라클은 많은 사람들이 이미 알고 있는 사실을 투자자들에게 말했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793378717,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7be43a727f5726785ef4bc4b0f3d49fe76a758107dc3d1c7abfa860a564a9b9b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b567c52faf3df2135f2c",
          "headline": "오라클은 얼마만큼의 새로운 자금을 조달할 것인지를 막았습니다. 나는 주식의 작은 지분을 사는 것을 고려하고 싶습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793347261,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=842a272dd9fd3986a39f51eec7218337918e54dffe504de8cb2b84fc91aeb16e",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793402483,
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
          "eventId": "788cc7003b8f4e178fdd",
          "headline": "국방 기술 스타트업 Rune에 대한 3억 7,500만 달러 규모의 거래로 Salesforce의 M&A가 계속되고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793402483,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0443800ddf46293c1da6d8109be691a21d454773ab480b1a15493b749ade90e1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cece9c24068749dabb71",
          "headline": "TPM Holdings, 건축 세계를 위한 AI 및 Salesforce CRM에 대한 투자 가속화",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793368080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c8740c49aa54a2db6a0a629bd78f46f24d10dc02dbcd7c5430eec402f844cf3",
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
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793532600,
      "signal": "중립·확인 대기",
      "netScore": -1.17,
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
          "eventId": "9f2cdf8a9422c4aff1bd",
          "headline": "연구실 원숭이 가격은 3,000달러에서 20,000달러로 급등한 것으로 알려졌습니다. 이제 Palantir 억만장자는 미국에서 30,000마리를 번식시키고 싶어합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793532600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e43dad412720bfe1833d233d39d09d7f1c1c9e0eebcb84c44e2053d8da67860b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4ea7cfb53a2fc8cad1e5",
          "headline": "이번 주 시장에서 기대할 사항: Apple, Palantir 보고서; 10월 채용정보 데이터 랜드",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793527200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df0e9686ac1a54a3e8ac0a0a6201c817b83c466f4898d8475de63e8fd77a6489",
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
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793533200,
      "signal": "우호적 변화",
      "netScore": 5.45,
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
          "score": -3.85,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 4.2,
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
          "eventId": "f44ba7ece204799ef1f6",
          "headline": "Lumentum 수익 미리보기: AI 붐은 이미 가격에 반영되었습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793533200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44cb3cbacafe19fcb3f1b427b49a04c93032dae4785ed4920b7ecd656356c91d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9f2cdf8a9422c4aff1bd",
          "headline": "연구실 원숭이 가격은 3,000달러에서 20,000달러로 급등한 것으로 알려졌습니다. 이제 Palantir 억만장자는 미국에서 30,000마리를 번식시키고 싶어합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793532600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e43dad412720bfe1833d233d39d09d7f1c1c9e0eebcb84c44e2053d8da67860b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "3b7bbe3cbe0af7acd816",
          "headline": "Josh Brown: 메타는 Nvidia를 비싸게 보이게 만드는 \"현금 마개\"가 될 수 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793518177,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c200f9d99312f45e0eac115dab8519cf030e196c1822267b63d298ba4854eb4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "10b87b6eeccc20854a04",
          "headline": "Nvidia Q3 FY2027 미리보기: Fabless 모델은 2,790억 달러의 각주를 받았습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793512167,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=103e92aac81d8a6c4e2d9aa5369a1008822986727f510206c0e921d4aa8ceb55",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "66313ba0d255d75828c7",
          "headline": "AMZN Q3 심층 분석: 클라우드 급증 및 AI 투자로 인해 혼합된 시장 수용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793507700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0123324ff65107780545b5a52c13947e2a6ce969a318cd3ea8b36cca30db2819",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "9dd4c45b3c2022f3b43c",
          "headline": "마이크로소프트 (MSFT), AI 추진에 따라 250억 $ 규모의 채권 거래 성사",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793495421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca1077f52aa08f87115a6058e806fb5c89fa7db0e774c6b5ebdc65e2d4afeea0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "da2a254f75cb48c6de1a",
          "headline": "대만 반도체 제조 (TSM), 피닉스 팹 주변 신규 선벨트 부동산 펀드 유치",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793477366,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c869f047ab09287a60c5a32300c5b57c7168fc6de437545b887b2290306ddd40",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "f87340c6ad9a1e22b938",
          "headline": "Amazon은 더 많은 데이터 센터에 자금을 지원하기 위해 자체 데이터 센터 장비를 빌리고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793461684,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66687a88aa2277b590ef30830abec06562cd19731444b650782099b696544d0f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "c33ae1365e456e3cd2a1",
          "headline": "3가지 AI 인프라 주식 소매 투자자들이 Google 검색 변화 이후 주목하고 있는 곳",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793448629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f47e4bc9349c8cbc9ffa3ca6e38a1eb2fa228ae0797c3f5b6bfb3c3d0d6310b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "395b9a890485ffa37511",
          "headline": "OpenAI, 메타, Microsoft 제품, Anthropic IPO 중 자금 목표 축소",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793447701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0af0d0e59182795d34c58490bd039c51f3c7051c45200f82458623daefea61fd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "a3e8c6bcd4247102eaf7",
          "headline": "저커버그는 메타의 “핵심 사업이 강하다”고 말했다. S&P는 여전히 전망을 부정적으로 하향",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793446379,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6305495d1312cf251c271642469527687157cb97b9c849c54bb4364303805f91",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0a620b5c68e7cb8cafcf",
          "headline": "2026년에 44%의 수익률로 Nvidia를 압도하는 뛰어난 AI 주식을 만나보세요",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793446140,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dcef16ea19de99613f9e3e2e7aadf799198554378c78216a51ccc635fe06511b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 29,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793532600,
      "signal": "우호적 변화",
      "netScore": 9.58,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
          "score": -1.4,
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
          "eventId": "9f2cdf8a9422c4aff1bd",
          "headline": "연구실 원숭이 가격은 3,000달러에서 20,000달러로 급등한 것으로 알려졌습니다. 이제 Palantir 억만장자는 미국에서 30,000마리를 번식시키고 싶어합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793532600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e43dad412720bfe1833d233d39d09d7f1c1c9e0eebcb84c44e2053d8da67860b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "66313ba0d255d75828c7",
          "headline": "AMZN Q3 심층 분석: 클라우드 급증 및 AI 투자로 인해 혼합된 시장 수용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793507700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0123324ff65107780545b5a52c13947e2a6ce969a318cd3ea8b36cca30db2819",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9dd4c45b3c2022f3b43c",
          "headline": "마이크로소프트 (MSFT), AI 추진에 따라 250억 $ 규모의 채권 거래 성사",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793495421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca1077f52aa08f87115a6058e806fb5c89fa7db0e774c6b5ebdc65e2d4afeea0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "da2a254f75cb48c6de1a",
          "headline": "대만 반도체 제조 (TSM), 피닉스 팹 주변 신규 선벨트 부동산 펀드 유치",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793477366,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c869f047ab09287a60c5a32300c5b57c7168fc6de437545b887b2290306ddd40",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f87340c6ad9a1e22b938",
          "headline": "Amazon은 더 많은 데이터 센터에 자금을 지원하기 위해 자체 데이터 센터 장비를 빌리고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793461684,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66687a88aa2277b590ef30830abec06562cd19731444b650782099b696544d0f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e870ac582b3ab561df69",
          "headline": "Intel은 AMD 주식 투자자들에게 대규모 경고를 보냅니다. 11월 3일 이전에 수익을 장담해야 할 때인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793461321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=83aad663f6eaa937cae162578455c434bf35bcd03a7f792250bcb6d0d89c5056",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c33ae1365e456e3cd2a1",
          "headline": "3가지 AI 인프라 주식 소매 투자자들이 Google 검색 변화 이후 주목하고 있는 곳",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793448629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f47e4bc9349c8cbc9ffa3ca6e38a1eb2fa228ae0797c3f5b6bfb3c3d0d6310b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "395b9a890485ffa37511",
          "headline": "OpenAI, 메타, Microsoft 제품, Anthropic IPO 중 자금 목표 축소",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793447701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0af0d0e59182795d34c58490bd039c51f3c7051c45200f82458623daefea61fd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1364d9a7c85d00f09d49",
          "headline": "예측: 지금으로부터 5년 후 마이크론 이상의 가치가 있을 1조 달러 미만의 주식 2개",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793427600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=405dc2a27de91c5f465d59f03738be19d5e1cf52cd3f05e7742167f7ae98d157",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "327c8b1bd399217ccd16",
          "headline": "HUBB 3분기 심층 분석: 데이터 센터의 강점이 유틸리티의 부드러움을 상쇄하고 용량 투자가 전망을 형성합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793426609,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78159b66c1182c7de0b1ea6935bae386f6c1647712ff016fc961ef9ba7fe97d8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "37ebfb280e7eaa69e5c2",
          "headline": "인텔, CPU 경쟁자를 끌어내리다. AMD와 Arm의 매수 기회인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793416801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0796c961ff6c86d9730c5b7605ff786dfe721c3271a1ecc1f8605b75dccf4ed3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8b5c56426402a46b9721",
          "headline": "S&P 500, Nasdaq은 투자자들이 기술, AI에서 멀어짐에 따라 3주 연속 하락 마감 — AMZN, INTC, LLY, RBLX 집중",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793405139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0f910b2c47ad6d48765be636222f6aeb2210ae6a085a1b96532370a41075f104",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 22,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793455676,
      "signal": "중립·확인 대기",
      "netScore": 0.98,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "b7ae7e1361c8219d8f90",
          "headline": "Marvell은 Lumentum Talks에서 일주일 만에 14% 하락: 칩 제조업체들은 \"선택의 여지가 없다\"고 좋아합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793455676,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d24e99c282495f8443c811863b4c5d17e75bfdc67fc718bc7d172edff74db37b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6069da803337a7f4aa85",
          "headline": "Broadcom 주식 전망은 AI 칩 성장과 인류적 파트너십에 달려 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793383830,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=098a3aad6d8eaa9e9d3e9ad50266a2fde26d457610a8efa0d790e98dff7f10a1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d70dbed3ba8a2de28e9a",
          "headline": "역사는 지금이 Broadcom 주식을 매수하기에 완벽한 시기라고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793381700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f5a72f82f0f1696ad7707d35f865192f7e36b9c799be6d2ce3b662e04ccd8f5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8185f73313c0172f2433",
          "headline": "2030년까지 TSMC 주식에 대한 10,000달러 투자의 가치는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793371802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5bd6ab28e097a5631ac7d0c54747b332b0cfb74ceb3b68a1744e0310cc91d22b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "374522afd04ec24a8ba8",
          "headline": "AMD, 메타로 AI 영역 확장: NVDA 및 AVGO를 능가할 수 있을까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793369100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38831521ffb450e45251727a3d225682d9f1fcde4f3e76f188ce850fa526179d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "eb3db0164d18b75d222b",
          "headline": "Broadcom의 630억 달러 규모의 Anthropic 거래가 마침내 장비에 적용되는 거래가 될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793358957,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=00f864c323fcb147a4dfe1eaabfb1dc30088024ec6594a25beca5de93e6cd56e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "b92dbb1712ca4bf77679",
          "headline": "Stocktwits 월스트리트 랩 — Tesla, Broadcom, MercadoLibre가 알파벳으로 강세 전화를 받고 Enphase Face Downgrades",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793350846,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3c5c2950ec23adfded7279946ece523231db65c988c21898a7d230997b282d3d",
          "factorChanges": {
            "shortTermMomentum": -1
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
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793554141,
      "signal": "주의 강화",
      "netScore": -5.04,
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
          "eventId": "3cf4075d96bcea8d393e",
          "headline": "Apple의 최신 iPhone이 몇 년 만에 가장 큰 성장의 촉매제가 될 수 있을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793554141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f3ec7ce6e72f17b0ad4a2fb3ea8f14ebe35380a42293db2b5308756ff6f10c6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "8b74984edb37f833ba11",
          "headline": "Qualcomm 수익 미리보기: 150억 달러 규모의 AI 목표는 여전히 오늘날의 가격을 정당화하지 못합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793443050,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64603d2ad227a174af26847836359df71ae1b323f11aede2e2702812d57ac37e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a8134328fd692556ef21",
          "headline": "Apple의 가장 큰 위협은 Android가 아닙니다. 분석가는 4분기 실적을 앞두고 AAPL 자체 기기라고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793430907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d6a4755c644d1653996a8d2f144acc6ce849d623ae1c5b636f062459cd02d38",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "77f0e0e9d310659ca9d1",
          "headline": "Qualcomm은 Anduril과 협력하여 미국산 노트북을 생산하고 있습니다. QCOM 주식의 바늘이 움직일 것이라고 기대하지 마십시오.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793396694,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d68c32470f5072e9e73f32aea1a580b8e7af9e2c8b3b65940837458cf2bacee6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c1554785a5116e5a9361",
          "headline": "Broadcom은 Anthropic 및 OpenAI IPO 희망에 대한 DA Davidson 업그레이드에도 불구하고 5% 하락했습니다. Arm 및 Qualcomm 싱크 10%, Marvell 하락 8%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793372209,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6c7ffa73b65110965c367031c2786a861fa3b8672294fa7fa3f078fc993d68e8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793416801,
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
          "eventId": "37ebfb280e7eaa69e5c2",
          "headline": "인텔, CPU 경쟁자를 끌어내리다. AMD와 Arm의 매수 기회인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793416801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0796c961ff6c86d9730c5b7605ff786dfe721c3271a1ecc1f8605b75dccf4ed3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c1554785a5116e5a9361",
          "headline": "Broadcom은 Anthropic 및 OpenAI IPO 희망에 대한 DA Davidson 업그레이드에도 불구하고 5% 하락했습니다. Arm 및 Qualcomm 싱크 10%, Marvell 하락 8%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793372209,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6c7ffa73b65110965c367031c2786a861fa3b8672294fa7fa3f078fc993d68e8",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793469855,
      "signal": "주의 강화",
      "netScore": -5.39,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -4.2,
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
          "eventId": "db8371e1281bbccb718c",
          "headline": "Lumentum은 일주일 만에 11% 상승했습니다. Marvell이 \"1000억 달러에 가까운\" 금액을 지불하게 될까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793469855,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5ca7ddf54214de92b35c22baa24864ec3b01f8d92b4063dfa4f2e141a2b0952",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1117af9c65c09638097b",
          "headline": "Piper Sandler의 400달러 목표는 Marvell의 매각이 너무 멀리 갔다고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793456670,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ef71a4b3e0394793097b4c1ed1b370a47d361debabe4ac9f54c37827d67d027f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b7ae7e1361c8219d8f90",
          "headline": "Marvell은 Lumentum Talks에서 일주일 만에 14% 하락: 칩 제조업체들은 \"선택의 여지가 없다\"고 좋아합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793455676,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d24e99c282495f8443c811863b4c5d17e75bfdc67fc718bc7d172edff74db37b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "862c90e122ef087d7ede",
          "headline": "8개월 전, 월스트리트의 주요 은행이 Marvell을 매수하겠다고 밝혔습니다. 150% 이상 상승했습니다. 주식이 움직이는 곳은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793391456,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b799c368b0dc4457243178034926a3994faa20f0ac10c05c40f539b82437f717",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "84f4c8d7a5df256d62e5",
          "headline": "투자자들이 철수함에 따라 Marvell은 자체 레이저 공급업체를 인수할 수도 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793381580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5178585465bd27f85e68654b05333e80b9d5f5fa68c85c2494ddef872b112c4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ba41b6cca3e49ff2a936",
          "headline": "하이퍼스케일러 지출이 AI 광학 주식에 타격을 줄 것이라는 우려로 Applied Optoelectronics는 15% 급락하고 Coherent는 13% 급락했습니다. 루멘텀 및 마벨 싱크 10%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793379446,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=853742c8081dcdf82ae36430fe967e33824508ee0106fc80121a2a26d47f5869",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c1554785a5116e5a9361",
          "headline": "Broadcom은 Anthropic 및 OpenAI IPO 희망에 대한 DA Davidson 업그레이드에도 불구하고 5% 하락했습니다. Arm 및 Qualcomm 싱크 10%, Marvell 하락 8%",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793372209,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6c7ffa73b65110965c367031c2786a861fa3b8672294fa7fa3f078fc993d68e8",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9b78bc7ef8cda0542cc7",
          "headline": "Marvell Technology(MRVL)는 Lumentum 거래 협상으로 주가가 낮아진 후 가격이 저렴합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793369438,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3bdfa6f31c1f8eab5e27b7fefe8f31459b28243d200e0af5d834270972b2dcf8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793532536,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": -1.4,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.97,
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
          "eventId": "dca8de5058cab8dad94e",
          "headline": "인텔: PC 수요 파괴와 AI 공급 역풍이 만나 이익 실현이 계속되고 있습니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793532536,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=648a904926833833fe9ba71f0f047adaeaee6929826c2144f25222c8b82192b0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "31f7ba2c51b686a30e4d",
          "headline": "예측: 2027년 연말까지 인텔의 주가가 될 것입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793499600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=83abd019783543ee3eb8a066c7d22f62e6837644c785c19c2d34ac70e2732fca",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bf46bb095531a135a066",
          "headline": "인텔의 폭발, 이제 때가 됐다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793497320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ebcf91723e03662ab929a6984593ec6c90a352abfce5f92cf781a1b4165e2ac",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a51e0807f713a58acf0e",
          "headline": "INTC 3분기 심층 분석: 강력한 데이터 센터 성장이 PC 문제를 상쇄하고 공급 제약으로 인해 압박을 받는 전망",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793469329,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9db1dbba34210ad1638e3d5a50eb26ec0ef179d8f8f9a2d1fa4e51a5ca7a365f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e870ac582b3ab561df69",
          "headline": "Intel은 AMD 주식 투자자들에게 대규모 경고를 보냅니다. 11월 3일 이전에 수익을 장담해야 할 때인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793461321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=83aad663f6eaa937cae162578455c434bf35bcd03a7f792250bcb6d0d89c5056",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9f2da03fe32d506b0f33",
          "headline": "Broadcom은 430억 달러 규모의 인류 백스톱이 Intel 주도 칩 라우팅을 만나면서 5.5% 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793446685,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8dc2623a1e1874eadc808a7c011499077df58cf4ce1b864f7bbb858135a1a3d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "006e8a8b4f47da414422",
          "headline": "Apple, 투자자로서 꽉 찬 수익 캘린더 주도 Eye Tech, Pharma 결과",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793444400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=830af5c87daf35a8f602c2ec6680ca3553df23bdc7beabc0bcac73d5ef2dce14",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec689f09a585d4788173",
          "headline": "엔비디아는 한 달 만에 11% 하락했습니다. 판매할 시간인가, 아니면 장전할 시간인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793434017,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca315ceb1c09466e33895c42865dbdf07fb056318ad7781267a642d1f54b9938",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "30206262fa16a687dbee",
          "headline": "Intel과 Amazon의 수익이 AI 하드웨어 주식에 타격을 주면서 Coherent 주식은 11% 하락했습니다. 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793430912,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c406ddf6b44b6ead86cb1d7597111211089282dcf6fe8995f84a3b7d63193e8c",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "695a46c04aa1c743f70a",
          "headline": "인텔의 PC 경고에 퀄컴 주가가 하루 만에 11% 하락했다. 11월 4일에 휴대폰 가격이 바닥을 쳤다는 주장을 테스트하는 이유는 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793429088,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8d6d9f8f3cc93a4b4e04835bdefe650f10200260eb9662e827be54fe1f3512f5",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4cc970dbdf51abcff6be",
          "headline": "AMD 주식은 11월 3일 보고서를 앞두고 하루 만에 11% 하락했습니다. Intel의 78% 데이터 센터 점프가 PC 경고보다 AMD에 더 중요한 이유는 다음과 같습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793428767,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc82042f1903b08727b8dc9a6447f717638be02f6f172710b950a60879d26b5c",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "37ebfb280e7eaa69e5c2",
          "headline": "인텔, CPU 경쟁자를 끌어내리다. AMD와 Arm의 매수 기회인가?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793416801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0796c961ff6c86d9730c5b7605ff786dfe721c3271a1ecc1f8605b75dccf4ed3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 28,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793477366,
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
          "eventId": "da2a254f75cb48c6de1a",
          "headline": "대만 반도체 제조 (TSM), 피닉스 팹 주변 신규 선벨트 부동산 펀드 유치",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793477366,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c869f047ab09287a60c5a32300c5b57c7168fc6de437545b887b2290306ddd40",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f05bb8fd599072035a92",
          "headline": "5년 전 대만 반도체에 투자한 1000달러가 오늘날 이 정도 가치가 될 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793358923,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f08bc9c48d6bbedd87d1de9974fccc7675ee195ae5d69247be633d9d4b41d83a",
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
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793328182,
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
          "eventId": "213525f4a0f1e6aa20c3",
          "headline": "ASML 대 Nvidia: AI 칩 붐을 실제로 포착하는 사람은 누구입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793328182,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44fffeaa3dadac97492431b88b690171b273176ee4d5d3877b09ede611dfeb87",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793344319,
      "signal": "중립·확인 대기",
      "netScore": -1.04,
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
          "score": 0.0,
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
          "eventId": "c6065afd266a8fb9aa86",
          "headline": "어플라이드 머티어리얼즈 vs. 대만 반도체 제조: 인공지능 기업 간 수익 성장 추세 비교",
          "eventLabel": "실적 발표",
          "publishedAt": 1793344319,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9d1e9ec74665b4ba416b6880cc7cd1b9be20fc6c070d61ce6d6fec6bf2efe542",
          "factorChanges": {
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1793591773.4988337,
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
      "updatedAt": 1793591773.4988337,
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
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793557200,
      "signal": "우호적 변화",
      "netScore": 3.55,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 4.72,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 3.32,
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
          "eventId": "1ab5ae78e805edee6ecf",
          "headline": "2028년에 Micron에 투자한 6,000달러의 가치는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793557200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fefe7947bad46edd4ee617c6499fb7c2e002cd01357e47193454676501c8a2d1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3cf4075d96bcea8d393e",
          "headline": "Apple의 최신 iPhone이 몇 년 만에 가장 큰 성장의 촉매제가 될 수 있을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793554141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f3ec7ce6e72f17b0ad4a2fb3ea8f14ebe35380a42293db2b5308756ff6f10c6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "47a48f0c8c4f3ffb67fb",
          "headline": "Micron 주식이 기록적인 해 이후 저렴해 보이는 이유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793544600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=98f248e877ae7e100d06536c6b8aa76c27c29be067ed9449c6a4f765417b5c72",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9f2cdf8a9422c4aff1bd",
          "headline": "연구실 원숭이 가격은 3,000달러에서 20,000달러로 급등한 것으로 알려졌습니다. 이제 Palantir 억만장자는 미국에서 30,000마리를 번식시키고 싶어합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793532600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e43dad412720bfe1833d233d39d09d7f1c1c9e0eebcb84c44e2053d8da67860b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "66313ba0d255d75828c7",
          "headline": "AMZN Q3 심층 분석: 클라우드 급증 및 AI 투자로 인해 혼합된 시장 수용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793507700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0123324ff65107780545b5a52c13947e2a6ce969a318cd3ea8b36cca30db2819",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "aa79547458eac4bdcf3a",
          "headline": "마이크론의 중국 라이벌 CXMT 매출이 7배 이상 늘었습니다. 나는 지금 마이크론 주식을 사고 싶습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793503981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c7f23a69be55171742486985b32cf863e0a92017973c23117b898bc866b6c60",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9dd4c45b3c2022f3b43c",
          "headline": "마이크로소프트 (MSFT), AI 추진에 따라 250억 $ 규모의 채권 거래 성사",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793495421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca1077f52aa08f87115a6058e806fb5c89fa7db0e774c6b5ebdc65e2d4afeea0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "da2a254f75cb48c6de1a",
          "headline": "대만 반도체 제조 (TSM), 피닉스 팹 주변 신규 선벨트 부동산 펀드 유치",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793477366,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c869f047ab09287a60c5a32300c5b57c7168fc6de437545b887b2290306ddd40",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f87340c6ad9a1e22b938",
          "headline": "Amazon은 더 많은 데이터 센터에 자금을 지원하기 위해 자체 데이터 센터 장비를 빌리고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793461684,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66687a88aa2277b590ef30830abec06562cd19731444b650782099b696544d0f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "c33ae1365e456e3cd2a1",
          "headline": "3가지 AI 인프라 주식 소매 투자자들이 Google 검색 변화 이후 주목하고 있는 곳",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793448629,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f47e4bc9349c8cbc9ffa3ca6e38a1eb2fa228ae0797c3f5b6bfb3c3d0d6310b3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "395b9a890485ffa37511",
          "headline": "OpenAI, 메타, Microsoft 제품, Anthropic IPO 중 자금 목표 축소",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793447701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0af0d0e59182795d34c58490bd039c51f3c7051c45200f82458623daefea61fd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "a8134328fd692556ef21",
          "headline": "Apple의 가장 큰 위협은 Android가 아닙니다. 분석가는 4분기 실적을 앞두고 AAPL 자체 기기라고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793430907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d6a4755c644d1653996a8d2f144acc6ce849d623ae1c5b636f062459cd02d38",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 24,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793536205,
      "signal": "주의 강화",
      "netScore": -6.16,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 0.88,
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
          "score": -2.1,
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
          "eventId": "3618b340cbb3b789db25",
          "headline": "SanDisk CEO David Goeckeler는 고객이 공급을 확보하고 더 많은 것을 위해 돌아오면서 '엄청난 수요 증가'를 보고 있습니다. 파이프라인은 2030년까지 운영됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793536205,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddad07457d45b58582acc92fe32dc93c233b390ca8939e279fe99617b2d14d3a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e88df904ed4a976ce338",
          "headline": "가이드 수익의 약 5배에 Sandisk 주식을 구매해야 합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793525821,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccffeb4298bafa1a447197f33ae1cc46df4a0ee7f44b52feea29f3cb03a94059",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2e8b9e07672f4fd63bb8",
          "headline": "Sandisk: 매도세는 시작일 뿐입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793440814,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9d69fbdd5daf26ea42fa0a2cf471b03c9efabf6363a5cfe89dcd881f2aacba4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2fe61d0e222660322817",
          "headline": "Sandisk의 AI 변화는 수익보다 더 큽니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793435400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20889545d2f9d8ce90f3d26b460387742b0bfb7b70c855b597ed9f9072a01cb5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fbe320f5b25d4bb25e2a",
          "headline": "Sandisk는 메모리 주식 하락으로 수익이 상회하고 8대 1 분할에도 불구하고 12% 하락했습니다: “터무니없는 일입니다”",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793378845,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f557c8141d70e993cfa78d31247772badb3e41a8f73099a7430a4b32b41a6585",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e41aade4b824a270a9b8",
          "headline": "오늘 마이크론 주식이 급등한 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793375808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=481b515c9e8fb0ab1baa5d6092f548ca11a1e27975467e56d831faa63f4a8fa5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2a30d86c588824563806",
          "headline": "Sandisk는 실적 저조, 가이던스 상향 및 8대1 분할에도 불구하고 9% 하락했습니다. Western Digital 하락 8%, Seagate 하락 7%, Micron 하락 6%",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1793366244,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f69bafad3da32bf7459890c8e19694ff814943466021c9678fb2954cc7dabe33",
          "factorChanges": {
            "growth": -2,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b10856bb8836abe07ae4",
          "headline": "분석가들의 견해가 엇갈리는 가운데 GEV 주식에 집중 — HSBC, GE Vernova를 매수로 업그레이드, 풍력 사업이 '최악을 지나갔다'고 말함",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793358385,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=54f780c20736dda53dc5076705ac0ffa77efcd6349ec0a496867da0537ee41e7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b92dbb1712ca4bf77679",
          "headline": "Stocktwits 월스트리트 랩 — Tesla, Broadcom, MercadoLibre가 알파벳으로 강세 전화를 받고 Enphase Face Downgrades",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793350846,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3c5c2950ec23adfded7279946ece523231db65c988c21898a7d230997b282d3d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9ed0edfbe42b9d861d20",
          "headline": "Stocktwits AI Roundup: Intel, Amazon, Alphabet 결과는 Big Tech의 기록적인 지출이 다시 집중됨에 따라 붕괴를 유발합니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793347648,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=544f8ceb63673476c922742e2395753107476625ca1607f20698a02929e45c17",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "201321795d2b79494035",
          "headline": "NVDA 주가 하락: Nvidia가 자체 고객에게 데이터 센터 대출을 지원할 수 있음, 분석가는 Intel의 취약한 보고서에 거의 영향을 받지 않음",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793344958,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b599ef299c6f21cb13de346fe40c20fc70de2324fb560e4bd69af2aa92844679",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5c5ebacde7fe36a1031f",
          "headline": "Stocktwits 여권 포트폴리오: 기술 변동성 속에서 SPY, DIA Edge가 10월에 QQQ 및 아시아 주식을 제치고 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793342585,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=808e938e31b35f0219b8e2faf62b72e159c3d06e41b1940cfa0ba7d10288323b",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793554141,
      "signal": "주의 강화",
      "netScore": -7.76,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.62,
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
          "eventId": "3cf4075d96bcea8d393e",
          "headline": "Apple의 최신 iPhone이 몇 년 만에 가장 큰 성장의 촉매제가 될 수 있을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793554141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6f3ec7ce6e72f17b0ad4a2fb3ea8f14ebe35380a42293db2b5308756ff6f10c6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "991337b25ca4056de65b",
          "headline": "Seagate: 진짜 위험은 Toshiba가 아니라 2028년 공급 물결입니다(다운그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793486591,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2c790ea13489ecf284713cf69cf1c23568e47798e28c3451632f3a9a083dcf5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a8134328fd692556ef21",
          "headline": "Apple의 가장 큰 위협은 Android가 아닙니다. 분석가는 4분기 실적을 앞두고 AAPL 자체 기기라고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793430907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d6a4755c644d1653996a8d2f144acc6ce849d623ae1c5b636f062459cd02d38",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "2a30d86c588824563806",
          "headline": "Sandisk는 실적 저조, 가이던스 상향 및 8대1 분할에도 불구하고 9% 하락했습니다. Western Digital 하락 8%, Seagate 하락 7%, Micron 하락 6%",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1793366244,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f69bafad3da32bf7459890c8e19694ff814943466021c9678fb2954cc7dabe33",
          "factorChanges": {
            "growth": -2,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793400422,
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
          "eventId": "ff59f912c37a19c5cbfd",
          "headline": "Arista Networks vs. Monday.com: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1793400422,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=88acb6b6188509fca9d9ff735e7248376829fa8098285de0d8315ee2aaa69c2b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "026603316c7236e0e8e0",
          "headline": "Arista Networks 대 Figma: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793389802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=875fea302cb85e850a78ca01821803ffb3125b5ee99f1b115748490382757347",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793455676,
      "signal": "주의 강화",
      "netScore": -4.97,
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
          "eventId": "b7ae7e1361c8219d8f90",
          "headline": "Marvell은 Lumentum Talks에서 일주일 만에 14% 하락: 칩 제조업체들은 \"선택의 여지가 없다\"고 좋아합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793455676,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d24e99c282495f8443c811863b4c5d17e75bfdc67fc718bc7d172edff74db37b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "30206262fa16a687dbee",
          "headline": "Intel과 Amazon의 수익이 AI 하드웨어 주식에 타격을 주면서 Coherent 주식은 11% 하락했습니다. 주식이 갈 수 있는 곳은 다음과 같습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1793430912,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c406ddf6b44b6ead86cb1d7597111211089282dcf6fe8995f84a3b7d63193e8c",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ba41b6cca3e49ff2a936",
          "headline": "하이퍼스케일러 지출이 AI 광학 주식에 타격을 줄 것이라는 우려로 Applied Optoelectronics는 15% 급락하고 Coherent는 13% 급락했습니다. 루멘텀 및 마벨 싱크 10%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793379446,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=853742c8081dcdf82ae36430fe967e33824508ee0106fc80121a2a26d47f5869",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793533200,
      "signal": "주의 강화",
      "netScore": -6.01,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "f44ba7ece204799ef1f6",
          "headline": "Lumentum 수익 미리보기: AI 붐은 이미 가격에 반영되었습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793533200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=44cb3cbacafe19fcb3f1b427b49a04c93032dae4785ed4920b7ecd656356c91d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "db8371e1281bbccb718c",
          "headline": "Lumentum은 일주일 만에 11% 상승했습니다. Marvell이 \"1000억 달러에 가까운\" 금액을 지불하게 될까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1793469855,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5ca7ddf54214de92b35c22baa24864ec3b01f8d92b4063dfa4f2e141a2b0952",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1117af9c65c09638097b",
          "headline": "Piper Sandler의 400달러 목표는 Marvell의 매각이 너무 멀리 갔다고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793456670,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ef71a4b3e0394793097b4c1ed1b370a47d361debabe4ac9f54c37827d67d027f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b7ae7e1361c8219d8f90",
          "headline": "Marvell은 Lumentum Talks에서 일주일 만에 14% 하락: 칩 제조업체들은 \"선택의 여지가 없다\"고 좋아합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793455676,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d24e99c282495f8443c811863b4c5d17e75bfdc67fc718bc7d172edff74db37b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ba41b6cca3e49ff2a936",
          "headline": "하이퍼스케일러 지출이 AI 광학 주식에 타격을 줄 것이라는 우려로 Applied Optoelectronics는 15% 급락하고 Coherent는 13% 급락했습니다. 루멘텀 및 마벨 싱크 10%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1793379446,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=853742c8081dcdf82ae36430fe967e33824508ee0106fc80121a2a26d47f5869",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9b78bc7ef8cda0542cc7",
          "headline": "Marvell Technology(MRVL)는 Lumentum 거래 협상으로 주가가 낮아진 후 가격이 저렴합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793369438,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3bdfa6f31c1f8eab5e27b7fefe8f31459b28243d200e0af5d834270972b2dcf8",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1793591773.4988337,
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
      "updatedAt": 1793591773.4988337,
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
      "updatedAt": 1793591773.4988337,
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
      "updatedAt": 1793591773.4988337,
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
      "updatedAt": 1793591773.4988337,
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
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793426609,
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
          "eventId": "327c8b1bd399217ccd16",
          "headline": "HUBB 3분기 심층 분석: 데이터 센터의 강점이 유틸리티의 부드러움을 상쇄하고 용량 투자가 전망을 형성합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1793426609,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=78159b66c1182c7de0b1ea6935bae386f6c1647712ff016fc961ef9ba7fe97d8",
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
    "VRT": {
      "ticker": "VRT",
      "updatedAt": 1793591773.4988337,
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
      "updatedAt": 1793591773.4988337,
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
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793486591,
      "signal": "주의 강화",
      "netScore": -3.98,
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
          "eventId": "991337b25ca4056de65b",
          "headline": "Seagate: 진짜 위험은 Toshiba가 아니라 2028년 공급 물결입니다(다운그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1793486591,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2c790ea13489ecf284713cf69cf1c23568e47798e28c3451632f3a9a083dcf5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2a30d86c588824563806",
          "headline": "Sandisk는 실적 저조, 가이던스 상향 및 8대1 분할에도 불구하고 9% 하락했습니다. Western Digital 하락 8%, Seagate 하락 7%, Micron 하락 6%",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1793366244,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f69bafad3da32bf7459890c8e19694ff814943466021c9678fb2954cc7dabe33",
          "factorChanges": {
            "growth": -2,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793366074,
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
          "eventId": "f8676083a56f9f37ed0c",
          "headline": "투자자가 EMCOR 그룹(EME)이 제기한 2026년 지침에 대응할 수 있는 방법",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1793366074,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6ec621216d5bc77b988a787a7ab5c5834c3235f026f7ba675a9d9fd488a8987",
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
    "FIX": {
      "ticker": "FIX",
      "updatedAt": 1793591773.4988337,
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
      "updatedAt": 1793591773.4988337,
      "dataAsOf": 1793363038,
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
          "eventId": "86e3ea927a65215cd9f6",
          "headline": "블룸 에너지 보기; Hunterbrook 미디어 문제 보고서, \"개화: 중국 스칸듐 공급 경로 재개\"; 상태 Hunterbrook Capital의 매도 $BE",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1793363038,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aff4725ce4e04c14cb0d1df29d046e21c176c2c9a5d24e76d351f55b48ef3195",
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
    }
  }
};
