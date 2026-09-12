// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1789232404.3429835,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789168800,
      "signal": "중립·확인 대기",
      "netScore": -0.55,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.58,
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
          "eventId": "48ab40d9100f1879b8b7",
          "headline": "Apple, Microsoft, Nvidia가 시가총액 기준으로 가장 큰 회사 목록에 올랐습니다. 여기 제가 지금 구매하고 있는 제품이 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789168800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ea8b86b30d8520a3fd0d71a133eb31bc29f2f7b55ca5a26f30c0561604667e9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a39b70f250160cbd18b6",
          "headline": "사설 LTE/5G 네트워크 시장 - 제4판 출시 - 시장이 120억 달러 규모를 향해 경쟁하면서 Nokia, AWS, Microsoft가 근본적으로 다른 투자를 하고 있는 이유를 알아보세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789114080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b60bdf1fcc8c2cb653ff22e4a9d990230ef9b20d92985f0e176af8965ff1b73b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5e4f8334592e0ef45a87",
          "headline": "Microsoft는 대규모 데이터 센터에서 컴퓨팅 성능을 3배로 늘리고 용량 병목 현상을 해결하려고 한다고 보고합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789083026,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=42140cbf3036b07c534c6dccd40c65f3f8d27804e304f3d5f64d9761dcef5d0c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e2b22001fd6c0cceba1b",
          "headline": "Glassbox, Microsoft AI 클라우드 파트너 프로그램 내에서 금융 서비스 AI에 대한 인증 소프트웨어 지정을 통해 솔루션 파트너 획득",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789041600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a31cd22ac49e2eba0cd6cae0338fa3501118594f608eb3808c9ca74f502017",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a578610b818a3f2cffe1",
          "headline": "시장이 거대 기술의 위험을 제거함에 따라 Microsoft와 함께 해야 할 일",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789038003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0997941a91c9b915ead6d6b66e6a98556d02525b80eb7151e07e5d30d73fd852",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0b1926b2dc974afa68fc",
          "headline": "Google이 Microsoft 및 TikTok에 합류하여 핀란드에 302억 달러 이상을 투자하면서 유럽의 데이터 센터 수도를 만나보세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789023600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=625a9199994b44f142f5cedf8f2d994d6a54131927ca628d42c49fe8344b9cd8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d0b7db76e84b919b52e5",
          "headline": "Microsoft Stock이 계속해서 이렇게 수익을 낼 수 있을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788983679,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1936d438ad55a94bd69e7342245ccb247cbbe85dd91eee960172a47c6bd063a4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "80dadce986324e659d92",
          "headline": "Microsoft CFO, Goldman 컨퍼런스에서 AI 스택, Azure 효율성 및 에이전트 성장 발표",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788976958,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=945bcbea9e766ac2534f5811dc639cbfdf20f037785d3c5fc14f448615ad178e",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789185873,
      "signal": "우호적 변화",
      "netScore": 2.1,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.55,
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
          "score": -2.8,
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
          "eventId": "b595f7e220020bde323d",
          "headline": "Marvell: AI 공장 10년 중 가장 강력한 설정",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789185873,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bc118ef675f259739e22037baee6d4dc8a8767a9873a9114da16b3cec5c41de",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "48ab40d9100f1879b8b7",
          "headline": "Apple, Microsoft, Nvidia가 시가총액 기준으로 가장 큰 회사 목록에 올랐습니다. 여기 제가 지금 구매하고 있는 제품이 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789168800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ea8b86b30d8520a3fd0d71a133eb31bc29f2f7b55ca5a26f30c0561604667e9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aaa8c920ca38b8162032",
          "headline": "Google의 150억 달러 핀란드 AI 빌드는 Nvidia에 좋은 소식이지만 한 가지 중요한 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789168344,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c798576399fa62f56cf31458447c17380596c637f7ab19c36b094846e4addfe",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3fbbd574689574839e71",
          "headline": "Google, AI 인프라 성장 지원을 위해 핀란드에 투자 확대",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789097420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=371697d4a2d5c014aa21f5f16d57654add54d4d62fb24faa3ff6d1ffb87d8b5b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "42ac9fc651062967543d",
          "headline": "ASML이란 무엇입니까? 칩프린팅 기계를 만드는 회사",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789074049,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a87363ccf34ece186929d74d9b5e5ad3dac5336a5a1c17d905315db560915648",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c25a39baa7f8c002cfa3",
          "headline": "150억 달러 규모의 핵 베팅으로 AI 파워가 잠기면서 알파벳 가장자리가 더 높아졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789062653,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff3a802637a90748c5c85f5658206cc5b6a37b5ccb9c36920eeb41183714e722",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a3c962e2ef105d1c61c9",
          "headline": "Google은 2049년까지 원자력 발전소 생산량의 절반을 구매합니다. 저렴한 전력이 진정한 AI 해자가 되었습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789062464,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3a9604e87009b109a4093758319b74e6973ffb0b0b76b2b0c9d507478f176b55",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cf22f0a365a72bab755d",
          "headline": "크레이머가 원자력은 건설하기 너무 어렵다고 경고한 지 6일 만에 구글은 사상 최초의 원자력 계약에 서명했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789059927,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5a5c99aaf579f1fc73645536adcec9819f9e2fc25c855d0e7e9274d4d0988c50",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0b1926b2dc974afa68fc",
          "headline": "Google이 Microsoft 및 TikTok에 합류하여 핀란드에 302억 달러 이상을 투자하면서 유럽의 데이터 센터 수도를 만나보세요.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789023600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=625a9199994b44f142f5cedf8f2d994d6a54131927ca628d42c49fe8344b9cd8",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a66e455b3f1e8dd64c22",
          "headline": "아이폰 전환자들이 삼성 폴더블에 몰려들다: 애플의 듀오가 이를 바꿀 것인가?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789008087,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=87db35c1f6a0acc4716bebd554f20b21949f2d19395bf1b45d4f06ac10bdedd4",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "84c2b50b8f9a7d350a30",
          "headline": "Google, 핀란드 AI 인프라에 130억 유로 투입하여 미국 외 첫 핵 거래 성사",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788986051,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a29bf8e89f6758373947f59b69f9421f978df487722e86ca7aab54218452ec0c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "357e787aeb5840b8328d",
          "headline": "Google, 핀란드 데이터 센터에 원자력 발전을 위한 22년 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788972276,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d98f0025564decc3fde914e84f39fd1db3f8d9a3baa610fa9e10d2e1ea8525a0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789168800,
      "signal": "우호적 변화",
      "netScore": 2.54,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 4.9,
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
          "score": -4.32,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 0.1,
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
          "eventId": "48ab40d9100f1879b8b7",
          "headline": "Apple, Microsoft, Nvidia가 시가총액 기준으로 가장 큰 회사 목록에 올랐습니다. 여기 제가 지금 구매하고 있는 제품이 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789168800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ea8b86b30d8520a3fd0d71a133eb31bc29f2f7b55ca5a26f30c0561604667e9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b1de46d0de953f114f19",
          "headline": "S&P가 1000억 달러의 부채를 신고하면서 아마존이 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789161144,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d4f438939d5d54223c42baa2e6f56b810e9e9cd2aba3a48c76c09a1f2bfb5e9f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0f3136c2e6e829a7142c",
          "headline": "Qualcomm의 AWS 거래는 Nvidia를 겨냥하지만 작은 글씨로 제공됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789141205,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ae03f3aa2cf27bf64944edc0c724f62ad65a535cc1bd99a0ca07f2b3e5fcb34",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "69916ef230062d0fe05b",
          "headline": "Qualcomm의 AI 야망은 Amazon 파트너십을 통해 강화됩니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789139537,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7001ae59ce31cacb4e3e5d607e1bd8ca8bc96498d91d1f178b68f4096bd71390",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "167d9898cbfc6a8a0c10",
          "headline": "XLY에 대한 Tesla의 끌림은 Amazon의 이익으로 인해 완화되었습니다. QQQ는 거의 아무것도 느끼지 못했습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789128337,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e352130308e398c902be2617def5fb7f8a1212ef836029354a8b8fbd6505ca7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e885a91801869d5e33f4",
          "headline": "Andy Jassy는 Micron과 Broadcom 투자자들을 흥분시킬 조치를 취했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789114980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=068df1e7dae22bbc3a21d7901108c8b19c7811d42c957801818ae2c38ff8cf8d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a39b70f250160cbd18b6",
          "headline": "사설 LTE/5G 네트워크 시장 - 제4판 출시 - 시장이 120억 달러 규모를 향해 경쟁하면서 Nokia, AWS, Microsoft가 근본적으로 다른 투자를 하고 있는 이유를 알아보세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789114080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b60bdf1fcc8c2cb653ff22e4a9d990230ef9b20d92985f0e176af8965ff1b73b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5571442d2d0704473243",
          "headline": "AMZN은 2억 3천만 달러의 투자로 전체 식품에 더 큰 투자를 하고 있지만 Amazon의 실제 매장은 활력을 잃고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789067866,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce60885893e1428e238dc0ba35bfaec010118efa1e0bd9e42b8465e6b3714a52",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bb616618c351a0d96219",
          "headline": "퀄컴, 아마존과 대규모 데이터센터 거래 성사로 주가 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789060114,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36007f2444a9d2baeaa9634ac59d05b0cd85d36b5c19635ed06e6cabab1394da",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "be045fbb2728a062edd2",
          "headline": "주요 정오 기사: 강력한 수익에도 불구하고 Macy의 주가는 하락했습니다. Amazon, ChatGPT 광고에서 OpenAI와 협력한 것으로 알려짐",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789054894,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9eb6838b8d45ba358fc71c72b976b1b187d057a99181e53329d9e4d71b330e26",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "deda9784c435751774b4",
          "headline": "AMZN SEC Form 424B5 공식 제출",
          "eventLabel": "증권등록·투자설명서 제출",
          "publishedAt": 1789052400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926107122/tm2624614-3_424b5.htm",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "167286f06cba9abc13f0",
          "headline": "S&P 500, Dow, Nasdaq은 유가가 101달러를 넘으면서 하락 마감, Bessent의 확장된 환매 계획에 따라 팝 수익률 — AAPL, META, AMZN, CRM 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788991309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3337d011ae7dd402563733535a14ca9a5cc988f69539437d6ff2872117c48d2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 21,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789174583,
      "signal": "주의 강화",
      "netScore": -5.81,
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
          "eventId": "ef4b1757b8001da10bff",
          "headline": "Meta의 180억 달러 합의는 새로운 AI 추진의 청신호가 될 수 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789174583,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73f84b9746574b833103dd38ccedb3d41cec3df34d088550f0e30f94d504e5fb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1a4232af56d9ee3031ba",
          "headline": "지출할 현금 흐름을 위해 메타 주식을 구입해야 합니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789060696,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90591b88066e21ffa21ae683a8dfb3d3ac603a8323fda952241b93119d2c2801",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dc114c2498e1e47defdd",
          "headline": "DOW, S&P 500, Nasdaq Futures Edge PPI보다 높음, Jobless Claims: NVDA, AAPL, META, ORCL, TSM, TSLA, SLS In Focus",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789029946,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1be9c526b747c8a49308868ae0515dcbe3544422a0972b7257d0026f88f69bc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "167286f06cba9abc13f0",
          "headline": "S&P 500, Dow, Nasdaq은 유가가 101달러를 넘으면서 하락 마감, Bessent의 확장된 환매 계획에 따라 팝 수익률 — AAPL, META, AMZN, CRM 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788991309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3337d011ae7dd402563733535a14ca9a5cc988f69539437d6ff2872117c48d2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "87dcd7e24de31ce660d7",
          "headline": "오늘, 9월 9일 주식 시장: Muse AI 에이전트 출시로 메타가 6.5% 이상 급등",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788989729,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c50c9c122ce361357da6c5f6f43119bb626ae70541fda74045942e1bcefff7f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4d7d75cd442cdbf0e3da",
          "headline": "META 주식 상승 프리마켓: Zuckerberg는 스레드가 'X보다 크거나 규모가 비슷하다'고 말합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788943590,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d2690b055b5759a8377f3b08a922d55af75802b5bb7e2e416f493da1e9b39051",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ec840ea366a86511d1d6",
          "headline": "유가가 다시 100달러를 기록하면서 Nasdaq, Dow, S&P 500 선물 혼합: QCOM, ORCL, AAPL, AMD, TSLA, RKLB, HOOD, GME 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788943155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ac2ba787536589b8e9b25b125562b5cf8a6fed3b33a834f5fb8f3541beb7db9",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789168800,
      "signal": "주의 강화",
      "netScore": -7.63,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.17,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.18,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.2,
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
          "eventId": "48ab40d9100f1879b8b7",
          "headline": "Apple, Microsoft, Nvidia가 시가총액 기준으로 가장 큰 회사 목록에 올랐습니다. 여기 제가 지금 구매하고 있는 제품이 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789168800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ea8b86b30d8520a3fd0d71a133eb31bc29f2f7b55ca5a26f30c0561604667e9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "251efb9a6aa19939813b",
          "headline": "네 번째 레드 세션은 석유 가격이 105달러를 돌파하고 오라클이 285억 달러의 AI 청구서를 발송함에 따라 폴더블 구동 Apple로 실행됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789113954,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=353e4ae02b79598186ded3dea272fb32a65f2f8712e0a0e9c1c4dcc2a3721420",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "cb2a768c3576e7a2346b",
          "headline": "Crypto Billionaire는 금융 차트에서 iPhone Duo가 매우 '좋다'고 생각합니다. Crypto 예측 시장은 이미 차세대 Big Apple 가제트에 베팅하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789101321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4ae5798ccafa694e75c97823d072ed20c01611aca833199b88692afad6ff3e7b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "43aa0111c11bedb8d1c7",
          "headline": "기술 백만장자들은 주식을 팔지 않고도 다각화하기 위해 7자리 숫자의 Nvidia와 Apple 지분을 교환 자금으로 모으고 있습니다. 7년 락업이 대가입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789084350,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8921289cb1f7b10eb6ba4514047370ed7900e7c9bf6eb93c33fce00878e367cc",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ba68e681cd3a11b0af86",
          "headline": "시장이 이란 분쟁, Oracle 및 Adobe 수익을 주시하면서 미국 선물 상승: Dow Jones, S&P, Nasdaq, Wall Street",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789032628,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d7c68691cbed56914140a3e12eb162d737c2f9ae5dfe6513912336871a67b52f",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dc114c2498e1e47defdd",
          "headline": "DOW, S&P 500, Nasdaq Futures Edge PPI보다 높음, Jobless Claims: NVDA, AAPL, META, ORCL, TSM, TSLA, SLS In Focus",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789029946,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1be9c526b747c8a49308868ae0515dcbe3544422a0972b7257d0026f88f69bc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "3df204073c0e790cd731",
          "headline": "애플이 15년 암호화폐 트렌드를 깨면서 비트코인과 이더리움의 아이폰 18 가격이 급등",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789029293,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=98c3442cad543ee19aa36499ff45b541c7e9af83bc22127f89daf15891f72b8d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "167286f06cba9abc13f0",
          "headline": "S&P 500, Dow, Nasdaq은 유가가 101달러를 넘으면서 하락 마감, Bessent의 확장된 환매 계획에 따라 팝 수익률 — AAPL, META, AMZN, CRM 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788991309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3337d011ae7dd402563733535a14ca9a5cc988f69539437d6ff2872117c48d2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "63442a4a2206bc3b1a77",
          "headline": "폴더블 iPhone Duo의 소프트웨어는 경쟁사 대비 '빛나는' 데 도움이 됩니다.",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1788982308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ad66e505147f480152d6169b3fc788b5c2965eb3b24b17a9d831ea7e9a9a0ab",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1d21c76dd5aca4de2ee1",
          "headline": "ORCL 주식은 수익보다 목표 가격 인하를 확인했습니다. 분석가는 나쁜 소식이 가격에 반영되어 있다고 말합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788975533,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e051c71e4aaf3784fe1d4d6b9113dd3459a6de5bad1a02cd40ec40f3c4721f31",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7d0e76d9146d442821ca",
          "headline": "Qualcomm 주식: Amazon 거래로 Apple의 우려 완화",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788974711,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d01479bb9cb3a96afa4dd3b2dc234eb325d74fe201ac98bdef65c2a2fa34eb37",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a6882d34e26af4d6edc2",
          "headline": "광자 양자 칩의 광 손실 문제를 해결하기 위해 ASML 거래에서 XNDU 주식 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788959661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67ee6961c7d4faeca11aba19c36354167c6ef013b1fdd65183f353d547f8b830",
          "factorChanges": {
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
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789161138,
      "signal": "주의 강화",
      "netScore": -5.17,
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
          "eventId": "5fc669ccc45a389304e1",
          "headline": "Semi가 170억 달러 규모의 소프트웨어 시장을 열면서 Tesla가 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789161138,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8dfa4f241cd6fec0c207ced86357dae489f4878f482b06161a2e3c92657bca0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "167d9898cbfc6a8a0c10",
          "headline": "XLY에 대한 Tesla의 끌림은 Amazon의 이익으로 인해 완화되었습니다. QQQ는 거의 아무것도 느끼지 못했습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789128337,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e352130308e398c902be2617def5fb7f8a1212ef836029354a8b8fbd6505ca7",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9a14a2e2de33afa1c32c",
          "headline": "Nasdaq, Dow, S&P 500 선물은 CPI가 커지면서 4일간의 시장 하락 후 상승: ORCL, ADBE, MU, TSLA, RKLB, IBRX, HOOD, GME 집중",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789115632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5743c1cd4f6a2ed60b6deedbfb832a269a672180158ecab790803d669582bf9b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dc114c2498e1e47defdd",
          "headline": "DOW, S&P 500, Nasdaq Futures Edge PPI보다 높음, Jobless Claims: NVDA, AAPL, META, ORCL, TSM, TSLA, SLS In Focus",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789029946,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1be9c526b747c8a49308868ae0515dcbe3544422a0972b7257d0026f88f69bc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "52269353f42ebfb85658",
          "headline": "45개의 Tesla Cybercabs가 이제 오스틴을 로밍하고 있습니다. 월스트리트가 기다려온 Robotaxi 비즈니스에 대한 의미는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788972870,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99a677ec4cf665b629a92b42115236392ed42a00b3719588f54f15efed30dc16",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "76ec4922ba02519db2fb",
          "headline": "Palantir vs. Tesla: 어떤 AI 주식을 사야 할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788950340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=faac4ecff935680afd2a469ed75675f15ac5005b6db2223458f9f7c80125e4f4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ec840ea366a86511d1d6",
          "headline": "유가가 다시 100달러를 기록하면서 Nasdaq, Dow, S&P 500 선물 혼합: QCOM, ORCL, AAPL, AMD, TSLA, RKLB, HOOD, GME 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788943155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2ac2ba787536589b8e9b25b125562b5cf8a6fed3b33a834f5fb8f3541beb7db9",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789183385,
      "signal": "주의 강화",
      "netScore": -3.15,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.27,
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
          "eventId": "8e72a2b8fb89167f1c1c",
          "headline": "ORCL Q3 심층 분석: 클라우드 인프라 및 AI 수요로 마진 확대",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789183385,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5dee27f38540701b8f49b6250b478dbc12092ebe5b685704b89f9721a621461e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "9a14a2e2de33afa1c32c",
          "headline": "Nasdaq, Dow, S&P 500 선물은 CPI가 커지면서 4일간의 시장 하락 후 상승: ORCL, ADBE, MU, TSLA, RKLB, IBRX, HOOD, GME 집중",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789115632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5743c1cd4f6a2ed60b6deedbfb832a269a672180158ecab790803d669582bf9b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5e4f8334592e0ef45a87",
          "headline": "Microsoft는 대규모 데이터 센터에서 컴퓨팅 성능을 3배로 늘리고 용량 병목 현상을 해결하려고 한다고 보고합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789083026,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=42140cbf3036b07c534c6dccd40c65f3f8d27804e304f3d5f64d9761dcef5d0c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5571442d2d0704473243",
          "headline": "AMZN은 2억 3천만 달러의 투자로 전체 식품에 더 큰 투자를 하고 있지만 Amazon의 실제 매장은 활력을 잃고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789067866,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce60885893e1428e238dc0ba35bfaec010118efa1e0bd9e42b8465e6b3714a52",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "eventId": "dc114c2498e1e47defdd",
          "headline": "DOW, S&P 500, Nasdaq Futures Edge PPI보다 높음, Jobless Claims: NVDA, AAPL, META, ORCL, TSM, TSLA, SLS In Focus",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789029946,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1be9c526b747c8a49308868ae0515dcbe3544422a0972b7257d0026f88f69bc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6cdd66a58c67e4b8faad",
          "headline": "테슬라, 리비안과 함께 거친 라이딩을 즐기고 싶으신가요? 상원 의원, 트럼프가 Xi 거래에 따라 중국 EV 메이커를 미국으로 들여올 수 있다고 경고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789017155,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6158ff4e2636fab0219a892d092dfcb3ae9f491b5d306a1c02d41ad1a71fd30",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ef0274471843356cbac7",
          "headline": "오라클 보고서 목요일. 자본 예산은 사업에서 창출하는 현금의 두 배 이상입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788992641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9a0a6074224133694dcc57e2d033d109069e8b898dcd4643b33009273eaebe06",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "439b219541349671293b",
          "headline": "HPE(Hewlett Packard)의 ORCL(Oracle Corporation) 파트너십이 AI 네트워킹을 차세대 성장 엔진으로 바꿀 수 있을까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788987790,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f66a7d2886da47ab9de96ac6b264dfeb62e11c063193eef594d61af60f3deb1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "af543bdca1a1eb660b95",
          "headline": "Oracle의 파괴적인 성격은 매우 매력적입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788972586,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c5b94b4dfcc242a16664c1243c5ed5607d1a12fff13c8269217b59d4b9f4885f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "99cc2084d3c9ee2551f4",
          "headline": "아마존과 오라클은 다가오는 Fed 회의에 대해 극도로 불안해하고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788968246,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a4afe8f0d68f1791e7388071cfff24c832e920589365d338c68d45c8da7bdd1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789166911,
      "signal": "주의 강화",
      "netScore": -2.38,
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
          "eventId": "08f4fbb258e59d82f42a",
          "headline": "Adobe Beat 및 상승했지만 하락했습니다. Salesforce는 현재 투자자들이 AI 소프트웨어에 무엇을 요구하는지 보여줍니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789166911,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95d1181ae5f1ac276885b16602a933db2f618a2565b4fb871824c04c85322d84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fea6cbc2a855b617a610",
          "headline": "Adobe vs. Salesforce: 2026년에는 어떤 소프트웨어 주식이 더 나은 구매입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789155252,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e2254945ae6fdd8cf275daf9698b35b25e38171ec59311e77312bc17dc2c0d4c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "56a1cac3074a99cfdcd0",
          "headline": "AI 연구 스타트업 Listen Labs는 Salesforce 강연을 위해 15억 달러 자금 조달 라운드를 취소했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788998437,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2c907e57a2108a79ff71459f4dcefee7104f52adc9852990f8235668aec4799",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "167286f06cba9abc13f0",
          "headline": "S&P 500, Dow, Nasdaq은 유가가 101달러를 넘으면서 하락 마감, Bessent의 확장된 환매 계획에 따라 팝 수익률 — AAPL, META, AMZN, CRM 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788991309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3337d011ae7dd402563733535a14ca9a5cc988f69539437d6ff2872117c48d2",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789081391,
      "signal": "중립·확인 대기",
      "netScore": -0.56,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
          "level": "우호적"
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
          "score": -4.2,
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
          "eventId": "8785534b3520550a5619",
          "headline": "Palantir Technologies, NVIDIA, Cisco 및 FAA를 통해 Sovereign AI의 승리 선보여",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789081391,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ca5dfa845c2fc8ad6c69657740ce95cc87875accde629091606d1e92d759759b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a93e2189a18bd54ab251",
          "headline": "Nvidia 거래가 55배의 판매 가격을 충족함에 따라 Palantir 슬라이드",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789065994,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=631a0a72316ab6b87e3fe2f8d5eea6331bc270ad452719dcd8f8dd67f26f6def",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "7e9cf5b92af4cb2a5982",
          "headline": "Nvidia와 Palantir Land 역사적인 AI 파트너십",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789059575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11299d49d2bba45acf05282b8e725c84ae731e45eb9e95f4c7edca57db16e3fb",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cbe6a3c0c76aadb7b2c7",
          "headline": "Nvidia와 Palantir, 공급망을 위한 새로운 AI 스택 출시",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789055024,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9bb6a57ca33db288f36e083409271487c8c42b14cbe47ea8b4ac38f7fd192e2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bcc7a8b64f0d3ee8bbfb",
          "headline": "Nvidia와 Palantir가 AI 공급망 기술을 위해 협력 - 주식 시장이 흔들리지 않는 이유",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789051200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da0d542866d9998fe0e1733cdcf943ea2090f42a9ff1a78357b7a2f80e42fb56",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "e2e9505628b1d4f5c2c5",
          "headline": "Palantir와 Fujitsu, 글로벌 FDE 파트너로서의 Fujitsu와 함께 기업 AI 혁신 발전을 위한 파트너십 강화",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789030800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cec8e5ec114e22298e97c6ca486fbc83c2f65e7c8e5107732a95261d0c41c7d7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3ead9eafcedae622ba46",
          "headline": "NVIDIA와 Palantir, 중요한 공급망에 Sovereign Intelligence 제공",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789030800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da36d9fd6c16f413a7398cb8bfcc1b9abc8eab7a877ef5fc3258cf2585d845a8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "76ec4922ba02519db2fb",
          "headline": "Palantir vs. Tesla: 어떤 AI 주식을 사야 할까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788950340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=faac4ecff935680afd2a469ed75675f15ac5005b6db2223458f9f7c80125e4f4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e2d25f8e85acbd4b8a05",
          "headline": "Palantir와 Nebius, 주권 AI 인프라 파트너십 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788944837,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e44365a641798ff91dfa0b16d19f30dea4fe7e5a7624b9c36baa4eb0e8b7fa27",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789204081,
      "signal": "우호적 변화",
      "netScore": 6.63,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.15,
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
          "eventId": "fc2f9096053575b158ce",
          "headline": "Micron Stock이 차세대 Nvidia입니까? 그 대답은 투자자들에게 충격을 줄 수 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789204081,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f5ce76a18fc3e8ab12d611f5715402d4b8724e2d5d2e3432a3951342af4b103",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "226453c8c2ad689479cd",
          "headline": "억만장자 Stanley Druckenmiller는 이 칩 주식을 위해 Broadcom, Intel 및 Micron을 버렸습니다. 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789201380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9f957b325d3887f289d92a1d4247fc7927cfb16f5bdbc75b2d4c975e8d52365",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "043c72c2285634816755",
          "headline": "Michael Burry는 Nvidia, Palantir 및 Tesla에 투자를 아끼지 않고 AI 주식에 \"1987년형 하락\" 가능성을 경고하고 있습니다. 투자자들은 베팅을 진지하게 받아들여야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789192200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8684d6d6991c450552622d4b3ad43a48707665f98c6cbf28c139e264b45a02e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "b595f7e220020bde323d",
          "headline": "Marvell: AI 공장 10년 중 가장 강력한 설정",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789185873,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bc118ef675f259739e22037baee6d4dc8a8767a9873a9114da16b3cec5c41de",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ef4b1757b8001da10bff",
          "headline": "Meta의 180억 달러 합의는 새로운 AI 추진의 청신호가 될 수 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789174583,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73f84b9746574b833103dd38ccedb3d41cec3df34d088550f0e30f94d504e5fb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "48ab40d9100f1879b8b7",
          "headline": "Apple, Microsoft, Nvidia가 시가총액 기준으로 가장 큰 회사 목록에 올랐습니다. 여기 제가 지금 구매하고 있는 제품이 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789168800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5ea8b86b30d8520a3fd0d71a133eb31bc29f2f7b55ca5a26f30c0561604667e9",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aaa8c920ca38b8162032",
          "headline": "Google의 150억 달러 핀란드 AI 빌드는 Nvidia에 좋은 소식이지만 한 가지 중요한 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789168344,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c798576399fa62f56cf31458447c17380596c637f7ab19c36b094846e4addfe",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "9b5e438a6b9bcbe5a887",
          "headline": "AI의 HBM 부족으로 Micron의 역량이 강화되고 Nvidia의 GPU 경제성이 압박받음",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789167693,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bb2125d66ab42e8a1e871dd01f83fb39e45eac7646b8a7920594ad74f6b9cfb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "08f4fbb258e59d82f42a",
          "headline": "Adobe Beat 및 상승했지만 하락했습니다. Salesforce는 현재 투자자들이 AI 소프트웨어에 무엇을 요구하는지 보여줍니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789166911,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95d1181ae5f1ac276885b16602a933db2f618a2565b4fb871824c04c85322d84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "b1de46d0de953f114f19",
          "headline": "S&P가 1000억 달러의 부채를 신고하면서 아마존이 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789161144,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d4f438939d5d54223c42baa2e6f56b810e9e9cd2aba3a48c76c09a1f2bfb5e9f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "5fc669ccc45a389304e1",
          "headline": "Semi가 170억 달러 규모의 소프트웨어 시장을 열면서 Tesla가 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789161138,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8dfa4f241cd6fec0c207ced86357dae489f4878f482b06161a2e3c92657bca0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "2ef8b4a9aeb1f4e391a9",
          "headline": "더 나은 Nvidia Killer: Broadcom 또는 AMD?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789144812,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=94e47a2c283974fa41a19a7c19875f7088b5dbb3c84a3584136eda05e5e6d009",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 53,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789201380,
      "signal": "우호적 변화",
      "netScore": 8.95,
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
          "eventId": "226453c8c2ad689479cd",
          "headline": "억만장자 Stanley Druckenmiller는 이 칩 주식을 위해 Broadcom, Intel 및 Micron을 버렸습니다. 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789201380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9f957b325d3887f289d92a1d4247fc7927cfb16f5bdbc75b2d4c975e8d52365",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "043c72c2285634816755",
          "headline": "Michael Burry는 Nvidia, Palantir 및 Tesla에 투자를 아끼지 않고 AI 주식에 \"1987년형 하락\" 가능성을 경고하고 있습니다. 투자자들은 베팅을 진지하게 받아들여야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789192200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8684d6d6991c450552622d4b3ad43a48707665f98c6cbf28c139e264b45a02e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ef4b1757b8001da10bff",
          "headline": "Meta의 180억 달러 합의는 새로운 AI 추진의 청신호가 될 수 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789174583,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73f84b9746574b833103dd38ccedb3d41cec3df34d088550f0e30f94d504e5fb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "aaa8c920ca38b8162032",
          "headline": "Google의 150억 달러 핀란드 AI 빌드는 Nvidia에 좋은 소식이지만 한 가지 중요한 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789168344,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c798576399fa62f56cf31458447c17380596c637f7ab19c36b094846e4addfe",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "08f4fbb258e59d82f42a",
          "headline": "Adobe Beat 및 상승했지만 하락했습니다. Salesforce는 현재 투자자들이 AI 소프트웨어에 무엇을 요구하는지 보여줍니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789166911,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95d1181ae5f1ac276885b16602a933db2f618a2565b4fb871824c04c85322d84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "b1de46d0de953f114f19",
          "headline": "S&P가 1000억 달러의 부채를 신고하면서 아마존이 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789161144,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d4f438939d5d54223c42baa2e6f56b810e9e9cd2aba3a48c76c09a1f2bfb5e9f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "5fc669ccc45a389304e1",
          "headline": "Semi가 170억 달러 규모의 소프트웨어 시장을 열면서 Tesla가 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789161138,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8dfa4f241cd6fec0c207ced86357dae489f4878f482b06161a2e3c92657bca0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "2ef8b4a9aeb1f4e391a9",
          "headline": "더 나은 Nvidia Killer: Broadcom 또는 AMD?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789144812,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=94e47a2c283974fa41a19a7c19875f7088b5dbb3c84a3584136eda05e5e6d009",
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
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a39b70f250160cbd18b6",
          "headline": "사설 LTE/5G 네트워크 시장 - 제4판 출시 - 시장이 120억 달러 규모를 향해 경쟁하면서 Nokia, AWS, Microsoft가 근본적으로 다른 투자를 하고 있는 이유를 알아보세요",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789114080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b60bdf1fcc8c2cb653ff22e4a9d990230ef9b20d92985f0e176af8965ff1b73b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "251efb9a6aa19939813b",
          "headline": "네 번째 레드 세션은 석유 가격이 105달러를 돌파하고 오라클이 285억 달러의 AI 청구서를 발송함에 따라 폴더블 구동 Apple로 실행됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789113954,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=353e4ae02b79598186ded3dea272fb32a65f2f8712e0a0e9c1c4dcc2a3721420",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "cb2a768c3576e7a2346b",
          "headline": "Crypto Billionaire는 금융 차트에서 iPhone Duo가 매우 '좋다'고 생각합니다. Crypto 예측 시장은 이미 차세대 Big Apple 가제트에 베팅하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789101321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4ae5798ccafa694e75c97823d072ed20c01611aca833199b88692afad6ff3e7b",
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
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789201380,
      "signal": "우호적 변화",
      "netScore": 3.42,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.02,
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
          "eventId": "226453c8c2ad689479cd",
          "headline": "억만장자 Stanley Druckenmiller는 이 칩 주식을 위해 Broadcom, Intel 및 Micron을 버렸습니다. 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789201380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9f957b325d3887f289d92a1d4247fc7927cfb16f5bdbc75b2d4c975e8d52365",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ef8b4a9aeb1f4e391a9",
          "headline": "더 나은 Nvidia Killer: Broadcom 또는 AMD?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789144812,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=94e47a2c283974fa41a19a7c19875f7088b5dbb3c84a3584136eda05e5e6d009",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f027734a71c0c5becc0a",
          "headline": "Marvell Technology와 Broadcom: 인공 지능 회사 간의 수익 추세 비교",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789064227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e649459a66cef5d880c0b73b5ad92c514ef9f9e70d703bf837e45fa0f343c3f5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fdb04b5607f13eefc8ab",
          "headline": "Nvidia에 대한 Broadcom의 주장이 9월에 더욱 강화되었습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789059499,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f88e0286a270d9ffb2c1a59b448d41edd096f7e11b00ea5bd17125cc44082de4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "948223b15a4004e1003f",
          "headline": "엔비디아가 아닙니다. 브로드컴이 아닙니다. 하지만 이 반도체 주식은 2010년 말까지 다른 어떤 주요 AI 칩 제조업체보다 빠르게 성장할 것입니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789030200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b7d429b4e11a2c61494d8eda52080e14b16466380cda734b3a4ee2c4fd7b9e23",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5ffa1c94a1b793397e4a",
          "headline": "간과된 칩 주식은 AI 반도체 붐에서 Nvidia, AMD, Broadcom을 능가할 준비가 되어 있음",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788986580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=835f3b1f585ccb6ae04d006003d09a06bad19dbccf12a972791656216f94634e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "eventId": "77b8d7f174b775696a9b",
          "headline": "Marvell Technology는 '반 브로드컴'으로 자리매김해야 합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788961622,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65f159f354364e44572271ea9b561deee7509d7b6d274a135788f61c267883b6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "284166d2557ccb6fa65a",
          "headline": "Broadcom: 2,300억 달러 규모의 AI 꿈이 점점 비싸지고 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788947566,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c68b3de3c3cbc60df036a5955ac9b4c37dfcf7a02ec292a8772a1ca52b46a933",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789149146,
      "signal": "우호적 변화",
      "netScore": 2.9,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.67,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
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
          "score": -4.9,
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
          "eventId": "ee75b870b1630d5371d3",
          "headline": "Qualcomm 주주들은 수익 감소를 걱정해야 합니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789149146,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01e42f1321f025e25fa8da462ddcaebaec4d00e0a93859640c3ff3f6ea36ce7f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0f3136c2e6e829a7142c",
          "headline": "Qualcomm의 AWS 거래는 Nvidia를 겨냥하지만 작은 글씨로 제공됩니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789141205,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ae03f3aa2cf27bf64944edc0c724f62ad65a535cc1bd99a0ca07f2b3e5fcb34",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "69916ef230062d0fe05b",
          "headline": "Qualcomm의 AI 야망은 Amazon 파트너십을 통해 강화됩니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789139537,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7001ae59ce31cacb4e3e5d607e1bd8ca8bc96498d91d1f178b68f4096bd71390",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bb616618c351a0d96219",
          "headline": "퀄컴, 아마존과 대규모 데이터센터 거래 성사로 주가 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789060114,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=36007f2444a9d2baeaa9634ac59d05b0cd85d36b5c19635ed06e6cabab1394da",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dc114c2498e1e47defdd",
          "headline": "DOW, S&P 500, Nasdaq Futures Edge PPI보다 높음, Jobless Claims: NVDA, AAPL, META, ORCL, TSM, TSLA, SLS In Focus",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789029946,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1be9c526b747c8a49308868ae0515dcbe3544422a0972b7257d0026f88f69bc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "3df204073c0e790cd731",
          "headline": "애플이 15년 암호화폐 트렌드를 깨면서 비트코인과 이더리움의 아이폰 18 가격이 급등",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789029293,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=98c3442cad543ee19aa36499ff45b541c7e9af83bc22127f89daf15891f72b8d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "2392d667122816e7803d",
          "headline": "Qualcomm의 600억 달러 계약으로 스마트폰 이후의 모습 공개",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789004220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1288fafcac4f00523f553e146b67ae89eb285135d12ff0116e6920aedadd6c85",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "167286f06cba9abc13f0",
          "headline": "S&P 500, Dow, Nasdaq은 유가가 101달러를 넘으면서 하락 마감, Bessent의 확장된 환매 계획에 따라 팝 수익률 — AAPL, META, AMZN, CRM 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788991309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3337d011ae7dd402563733535a14ca9a5cc988f69539437d6ff2872117c48d2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "cb18d688d6640df3d8aa",
          "headline": "Qualcomm의 AI 칩 거래를 통해 Nvidia가 여전히 최고임을 입증하는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788982440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c0599bf40fca80776a43c8d40c92c3c7f6a76bb06d73ead9d4b6b7447626806",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e10ea018868c79bb36ff",
          "headline": "Cramer는 Qualcomm의 Amazon 협력이 정체된 재고에 \"특별한 것\"을 제공한다고 말합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788974739,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e16e1ac7659c6bd4d3c4abc36224bb9a8ff6a108cf38ce8550cdfad5cefbe499",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7d0e76d9146d442821ca",
          "headline": "Qualcomm 주식: Amazon 거래로 Apple의 우려 완화",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788974711,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d01479bb9cb3a96afa4dd3b2dc234eb325d74fe201ac98bdef65c2a2fa34eb37",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3b36b219343d29b6a7b3",
          "headline": "오늘 Marvell 주식이 폭등한 이유",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1788970980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5fdd23b9343fb4eac06e548073cad7fc97accfe82012f4b9e63ba7b0613a06a1",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789152953,
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
          "eventId": "37860c35e0dca189df18",
          "headline": "Arm 대 Credo Technology Group: 2026년에는 어느 반도체 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789152953,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df7181a332ef16e41cfd20fe557eef7dc0727a4e8ba9e9a855139bf7243865e1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6da6b252d71695f3a84d",
          "headline": "Arm 대 Sandisk: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789146508,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e47286077fd301639ce641c0d8fefbd50888a95a4765e15ee649e8e62d9f0855",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789185873,
      "signal": "주의 강화",
      "netScore": -2.31,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "b595f7e220020bde323d",
          "headline": "Marvell: AI 공장 10년 중 가장 강력한 설정",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789185873,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8bc118ef675f259739e22037baee6d4dc8a8767a9873a9114da16b3cec5c41de",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f027734a71c0c5becc0a",
          "headline": "Marvell Technology와 Broadcom: 인공 지능 회사 간의 수익 추세 비교",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789064227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e649459a66cef5d880c0b73b5ad92c514ef9f9e70d703bf837e45fa0f343c3f5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "917d980336044c494c97",
          "headline": "Marvell 주식이 하이퍼스케일러 거래가 성사되기 전에 수익을 창출할 수 있습니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789061575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3cf943b625a26c82b30c95218f1f9daead72b084e46bbab03fa17beb78de046",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6dff0babcde61d0dbeea",
          "headline": "Marvell 또는 NVIDIA: 이익 1달러당 비용이 더 적은 것은 어느 것입니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788994932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c4fe7030b5ff3d9fc13b612c854759c02fd9127736442ff58ab699f613224b83",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "77b8d7f174b775696a9b",
          "headline": "Marvell Technology는 '반 브로드컴'으로 자리매김해야 합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788961622,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65f159f354364e44572271ea9b561deee7509d7b6d274a135788f61c267883b6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789201380,
      "signal": "중립·확인 대기",
      "netScore": -1.9,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -2.1,
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
          "eventId": "226453c8c2ad689479cd",
          "headline": "억만장자 Stanley Druckenmiller는 이 칩 주식을 위해 Broadcom, Intel 및 Micron을 버렸습니다. 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789201380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9f957b325d3887f289d92a1d4247fc7927cfb16f5bdbc75b2d4c975e8d52365",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f027734a71c0c5becc0a",
          "headline": "Marvell Technology와 Broadcom: 인공 지능 회사 간의 수익 추세 비교",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789064227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e649459a66cef5d880c0b73b5ad92c514ef9f9e70d703bf837e45fa0f343c3f5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bd113307be6ee4f49cb3",
          "headline": "Nvidia의 움직임으로 AMD와 Intel이 방어에 나섰습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789061160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3c5c71e12ed2a7001ce14f1a7138094115f207f2f256a264a24ae40084536ace",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3ead9eafcedae622ba46",
          "headline": "NVIDIA와 Palantir, 중요한 공급망에 Sovereign Intelligence 제공",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789030800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da36d9fd6c16f413a7398cb8bfcc1b9abc8eab7a877ef5fc3258cf2585d845a8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "30be6fc1ca57d6b54525",
          "headline": "Meta, 자동화된 비즈니스 메시징 강화를 위해 스웨덴 AI 스타트업 인수",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788989390,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d22aa0272d9035e92d7f7b24d9f4ddb003a454c5e657c603da3dbdfb0f3fccc9",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "43f7f68c9f6d663e33e7",
          "headline": "복귀가 효과가 있기 때문에 인텔 주식을 구입해야 합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788969981,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c7be1f00a9df62a20da1b4bd8d49f55215f440ee3ccbd7176b12ba48777984e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7679767ca5850740a06d",
          "headline": "거의 4년이 지난 후에 인텔 주식을 구입해야 합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788941221,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=90cb1a5c17af47e73222909236c27015847f5d748ceb981d004df168986d1ed6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e77eae8fc08248932692",
          "headline": "Broadcom의 인공 지능(AI) 칩 수익은 221% 증가했습니다. 더 많은 성장이 이루어지고 있습니다.",
          "eventLabel": "실적 발표",
          "publishedAt": 1788941100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9db272ccd72a57fdd862933cd39e47c14a9fe5fddafdd1cbc9f5eb8c61662647",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789029946,
      "signal": "중립·확인 대기",
      "netScore": 0.22,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.53,
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
          "eventId": "dc114c2498e1e47defdd",
          "headline": "DOW, S&P 500, Nasdaq Futures Edge PPI보다 높음, Jobless Claims: NVDA, AAPL, META, ORCL, TSM, TSLA, SLS In Focus",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789029946,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1be9c526b747c8a49308868ae0515dcbe3544422a0972b7257d0026f88f69bc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ebab6bcb5ad1c2d433ad",
          "headline": "AI 칩 수요가 공급을 초과함에 따라 TSMC 매출 53% 증가",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789018524,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da1766e8268f2ed94f6dc645662e5cf26bda2f6dfd4820df8a763fa65824916f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "eventId": "3bff8df30dc448a70be9",
          "headline": "Taiwan Semiconductor Manufacturing Company Ltd.(TSM)가 투자자의 관심을 끌고 있습니다: 알아야 할 사항은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788958806,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0c5cb1eebb3c3eb0727923b0e64034d4a8884ba49cf97173f7e0b3831618045",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789074049,
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
          "eventId": "42ac9fc651062967543d",
          "headline": "ASML이란 무엇입니까? 칩프린팅 기계를 만드는 회사",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789074049,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a87363ccf34ece186929d74d9b5e5ad3dac5336a5a1c17d905315db560915648",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "97c251bf655c8efd38eb",
          "headline": "AI 성장이 프리미엄 가치 평가를 충족함에 따라 투자자는 ASML을 구매해야 합니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789051080,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=769fabda4db9dd4f907b42ce76e8a511a19a3bad3aab3c22d41011b0094bf7ea",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fcfae000015fa2ed0718",
          "headline": "Xanadu와 ASML, Photonic Quantum 하드웨어용 리소그래피 발전을 위한 협력 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788951600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9182a19b1e88461f2a60e2ebbbef2a5a41dff5f600513215909118d4c7e56b67",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789161181,
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
          "eventId": "35cd3099b6f97d2261fd",
          "headline": "어플라이드 머티어리얼즈 vs. 마이크론 테크놀로지: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789161181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5955dbd2f70057b69f8cbbfe3a58f8060947e71c49d4952fd7eac4a15de8e4cb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8f8388ba244ddc213065",
          "headline": "Astera Labs 대 Applied Materials: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789152601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4d472527ba77d71efd8935677a6c8a842d7f0f63b6ddb9233219cfa08e7e3b45",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1789232404.3429835,
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
      "updatedAt": 1789232404.3429835,
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
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789204081,
      "signal": "우호적 변화",
      "netScore": 6.42,
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
          "eventId": "fc2f9096053575b158ce",
          "headline": "Micron Stock이 차세대 Nvidia입니까? 그 대답은 투자자들에게 충격을 줄 수 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789204081,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f5ce76a18fc3e8ab12d611f5715402d4b8724e2d5d2e3432a3951342af4b103",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "226453c8c2ad689479cd",
          "headline": "억만장자 Stanley Druckenmiller는 이 칩 주식을 위해 Broadcom, Intel 및 Micron을 버렸습니다. 이유는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789201380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9f957b325d3887f289d92a1d4247fc7927cfb16f5bdbc75b2d4c975e8d52365",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "043c72c2285634816755",
          "headline": "Michael Burry는 Nvidia, Palantir 및 Tesla에 투자를 아끼지 않고 AI 주식에 \"1987년형 하락\" 가능성을 경고하고 있습니다. 투자자들은 베팅을 진지하게 받아들여야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789192200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8684d6d6991c450552622d4b3ad43a48707665f98c6cbf28c139e264b45a02e0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ef4b1757b8001da10bff",
          "headline": "Meta의 180억 달러 합의는 새로운 AI 추진의 청신호가 될 수 있습니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789174583,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=73f84b9746574b833103dd38ccedb3d41cec3df34d088550f0e30f94d504e5fb",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "aaa8c920ca38b8162032",
          "headline": "Google의 150억 달러 핀란드 AI 빌드는 Nvidia에 좋은 소식이지만 한 가지 중요한 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789168344,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c798576399fa62f56cf31458447c17380596c637f7ab19c36b094846e4addfe",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "9b5e438a6b9bcbe5a887",
          "headline": "AI의 HBM 부족으로 Micron의 역량이 강화되고 Nvidia의 GPU 경제성이 압박받음",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789167693,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9bb2125d66ab42e8a1e871dd01f83fb39e45eac7646b8a7920594ad74f6b9cfb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "08f4fbb258e59d82f42a",
          "headline": "Adobe Beat 및 상승했지만 하락했습니다. Salesforce는 현재 투자자들이 AI 소프트웨어에 무엇을 요구하는지 보여줍니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789166911,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=95d1181ae5f1ac276885b16602a933db2f618a2565b4fb871824c04c85322d84",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "35cd3099b6f97d2261fd",
          "headline": "어플라이드 머티어리얼즈 vs. 마이크론 테크놀로지: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789161181,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5955dbd2f70057b69f8cbbfe3a58f8060947e71c49d4952fd7eac4a15de8e4cb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b1de46d0de953f114f19",
          "headline": "S&P가 1000억 달러의 부채를 신고하면서 아마존이 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789161144,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d4f438939d5d54223c42baa2e6f56b810e9e9cd2aba3a48c76c09a1f2bfb5e9f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "5fc669ccc45a389304e1",
          "headline": "Semi가 170억 달러 규모의 소프트웨어 시장을 열면서 Tesla가 이익을 얻습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789161138,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8dfa4f241cd6fec0c207ced86357dae489f4878f482b06161a2e3c92657bca0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "5f47fa3d53f67315586e",
          "headline": "큰 폭의 이익실현으로 인해 스토리지 주가 하락: Seagate는 4% 하락, SanDisk는 3% 하락, Micron은 보합세 유지",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789149950,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=19669bdceec557f3347931c3fca94a891691f1bbe799d183a42ad2658a933bd7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9a14a2e2de33afa1c32c",
          "headline": "Nasdaq, Dow, S&P 500 선물은 CPI가 커지면서 4일간의 시장 하락 후 상승: ORCL, ADBE, MU, TSLA, RKLB, IBRX, HOOD, GME 집중",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789115632,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5743c1cd4f6a2ed60b6deedbfb832a269a672180158ecab790803d669582bf9b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 43,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789149950,
      "signal": "중립·확인 대기",
      "netScore": -1.68,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "5f47fa3d53f67315586e",
          "headline": "큰 폭의 이익실현으로 인해 스토리지 주가 하락: Seagate는 4% 하락, SanDisk는 3% 하락, Micron은 보합세 유지",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789149950,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=19669bdceec557f3347931c3fca94a891691f1bbe799d183a42ad2658a933bd7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6da6b252d71695f3a84d",
          "headline": "Arm 대 Sandisk: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789146508,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e47286077fd301639ce641c0d8fefbd50888a95a4765e15ee649e8e62d9f0855",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fefd486f5309387c2330",
          "headline": "AMD, BE, CRWV에 초점: 상황 인식이 이러한 주식과 관련된 옵션을 구매하는 것으로 보고됨",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789141691,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=714d14fc03292749fb6230cbe86b6010bac8821b4abcd12b5ab43fc3b3fef54f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
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
          "eventId": "8766466de73c61ecc430",
          "headline": "Goldman이 최악의 상황은 끝났다고 말하면서 메모리 주식 반등: SK Hynix 5% 상승, SanDisk 3% 상승, Micron 2% 상승",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788967201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a2f772375f30bb5c421e292a501701c5bb527cad99c636e7dfcc51f26b3b640",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789203716,
      "signal": "주의 강화",
      "netScore": -4.61,
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
          "eventId": "ca2a313cb063b36ebf38",
          "headline": "Western Digital, 2027년까지 AI 기반 HDD 수요가 공급을 초과할 것으로 예상",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789203716,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64e899ae32f1bcbfd3dea3da88846df3d9d829f1edcf5c62f402ef905427defd",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1d04c202b32c40d46f4f",
          "headline": "금리 하락과 석유 늪으로 메모리 주가 하락 JPMorgan의 비중확대 주장: SK 하이닉스 5% 하락, Western Digital 하락 3%, Micron 하락",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789046536,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=662ab8cf35c8ce268deb3690fc4c95df1f2eb40f34ace5f00fd4e388f89c06da",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "dc114c2498e1e47defdd",
          "headline": "DOW, S&P 500, Nasdaq Futures Edge PPI보다 높음, Jobless Claims: NVDA, AAPL, META, ORCL, TSM, TSLA, SLS In Focus",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789029946,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1be9c526b747c8a49308868ae0515dcbe3544422a0972b7257d0026f88f69bc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "3df204073c0e790cd731",
          "headline": "애플이 15년 암호화폐 트렌드를 깨면서 비트코인과 이더리움의 아이폰 18 가격이 급등",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789029293,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=98c3442cad543ee19aa36499ff45b541c7e9af83bc22127f89daf15891f72b8d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "167286f06cba9abc13f0",
          "headline": "S&P 500, Dow, Nasdaq은 유가가 101달러를 넘으면서 하락 마감, Bessent의 확장된 환매 계획에 따라 팝 수익률 — AAPL, META, AMZN, CRM 집중",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788991309,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3337d011ae7dd402563733535a14ca9a5cc988f69539437d6ff2872117c48d2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789168255,
      "signal": "우호적 변화",
      "netScore": 4.4,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.62,
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
          "score": 1.57,
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
          "eventId": "1b6c83c8f3cd59328dfc",
          "headline": "S&P 500, Dow는 다음 주 투자자 Eye Fed 회의에서 지난 4일 하락세를 넘어 더 높은 수준으로 마감 — DELL, HPE, EL, WMT 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789168255,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=664c334a388b9bd9fbcd5c61a7697cca3d9a216aeee1f50962dadfe90b527a25",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c1b5e3d6a4c055483ef0",
          "headline": "Arista Networks 주가가 반등했지만 이제는 공급업체에 베팅하는 것입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789156143,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0ec48e51f5660a858139e73e7219a3ef9d31faa94e6beb7d08523be8708baa78",
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
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "79e3118d486558c163bb",
          "headline": "Arista Networks는 AI 수요가 40% 성장을 촉진하고 공급 약속에서 96억 달러를 달성할 것으로 보고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789124524,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5898f504d9dcc315e780d2ffa96a7f77ff5c17af967465c98111600f7bf90bae",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "a9ef324c6e735ab939a1",
          "headline": "Arista의 97억 달러 AI 약속으로 18개월의 수익 대기 시간 숨김",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788980584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0cb8a1201db480bf206d7bd6164fa4bed765449e2d56ffa3e6a8bb3c0db8f9c5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6b1196410ac48bdc43a6",
          "headline": "Arista 대 IBM: 투자자는 지금 어떤 클라우드 AI 주식을 구매해야 할까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788961560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4c6721f6863f81b0676afbb9dfe754f6ba86610426f9c0a38b666c45568ab23a",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1789232404.3429835,
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789102233,
      "signal": "주의 강화",
      "netScore": -2.79,
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
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "1212beff380fe68cf05f",
          "headline": "Lumentum: 2027년이 게임 체인저가 될 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789102233,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9ce3696c7d7c4b9e6956f65a9c0c862360daf626afa67ef80e136b43a01a0dfb",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "959b52be41f628107e25",
          "headline": "Lumentum 사장, 1,500주 매각",
          "eventLabel": "내부자 매도",
          "publishedAt": 1788959941,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ea45863ffad64008ef78e9bb00e884467616a3d8d2a9b3176cd4665671d0aa72",
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
      "updatedAt": 1789232404.3429835,
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
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789053168,
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
          "eventId": "ab7ae848ae04e75c642f",
          "headline": "쉘 에너지 북미 잉크(Shell Energy North America Inks), 펜실베이니아 소재 헌록 크릭 제너레이팅(Hunlock Creek Generation) 지분 100% 인수 계약; RISEC 지분을 Constellation Energy에 7억 1500만 달러에 매각",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789053168,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8a31ac44178fd76f791aa7af516ab96790cd3a3ba53f030e375f9f888c851049",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789008146,
      "signal": "주의 강화",
      "netScore": -4.61,
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
          "eventId": "965594dc2c97ca7af01b",
          "headline": "줄어들고 있는 주식 수 때문에 Vistra 주식을 구입해야 합니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789008146,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2160e9a78634d856fee5f5e417254484e9cde4b24fdeaf16edefd73c5b86885d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "eventId": "a348e02999e6ba502322",
          "headline": "Vistra: AI 전력 공급업체가 부하 증가 및 인수 상승을 충족 - 매수 반복",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788946435,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f22fcaec8fc5c2298b000da277c7d34d628fa484bfc074ab03dc21a0207e8477",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1788959101,
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
          "eventId": "baa0247c0d8303fdb48d",
          "headline": "Eaton 대 Vertiv: 2026년에는 어떤 산업재 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788959101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f045e66d19da73afa5d8c2c945d634d9b80a98f6aa4a3bffb9de8fbf78fbe540",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1789232404.3429835,
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
      "updatedAt": 1789232404.3429835,
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
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789107900,
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
          "eventId": "510b4416b3d901c0dbb7",
          "headline": "Vertiv의 새로운 인수로 AI 지배력이 강화될 수 있는 1가지 큰 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789107900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7914867a607fbdd0dec3ac0321718a9b05092375705847899fd3ebda824bf9d9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "baa0247c0d8303fdb48d",
          "headline": "Eaton 대 Vertiv: 2026년에는 어떤 산업재 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788959101,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f045e66d19da73afa5d8c2c945d634d9b80a98f6aa4a3bffb9de8fbf78fbe540",
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
      "updatedAt": 1789232404.3429835,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "STX": {
      "ticker": "STX",
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1789195617,
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
          "eventId": "b378d30151ccb293df0a",
          "headline": "Seagate: HDD 부족 현상은 여전히 ​​남아 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789195617,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4bed8384bdfb8d1bf3519fa36e875208cd7e03d261a80b124270d571aa23de29",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5f47fa3d53f67315586e",
          "headline": "큰 폭의 이익실현으로 인해 스토리지 주가 하락: Seagate는 4% 하락, SanDisk는 3% 하락, Micron은 보합세 유지",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789149950,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=19669bdceec557f3347931c3fca94a891691f1bbe799d183a42ad2658a933bd7",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1789232404.3429835,
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
      "updatedAt": 1789232404.3429835,
      "dataAsOf": 1788959661,
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
          "eventId": "a6882d34e26af4d6edc2",
          "headline": "광자 양자 칩의 광 손실 문제를 해결하기 위해 ASML 거래에서 XNDU 주식 상승",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788959661,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=67ee6961c7d4faeca11aba19c36354167c6ef013b1fdd65183f353d547f8b830",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fe97d0c2e0220ac48117",
          "headline": "Google은 AI 에너지 문제에 대해 150억 달러의 멋진 해결책을 제시했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788949680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9eae671206d61f604157a5f0684f18cbe4f1fc5e5457e81e47bf49f9207bde38",
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1789232404.3429835,
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
