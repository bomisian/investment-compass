// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1789412462.2515655,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789405802,
      "signal": "주의 강화",
      "netScore": -8.6,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.17,
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
          "score": -4.9,
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
          "eventId": "84a1c5e58d1b3dae39af",
          "headline": "Netflix, Amazon And YouTube Reportedly Form Coalition As Washington Scrutinizes Sports Broadcasting",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789405802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06054e8b3b2d30574507ce066130f9ba3e47a637bd3db9b0bf8f0ecb12ae676e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e762b258dcb6f20a3875",
          "headline": "Microsoft AI CEO Agrees: AI Is Getting Dangerous and Needs to Be Controlled",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789402758,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6eef32cd2927461cef7379644642c62134ce910dbe9ea1e46cbcb15564a237aa",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d96a033ef33839959038",
          "headline": "Meta, Alphabet and Microsoft Rise While Nvidia Falls After Three AI Chiefs Call For Slowing Down Frontier Models",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789395884,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c0ebd118351da2bba43575d435d35bd0cc1786cc0d2c62feed0fc8f6877bc1d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a1826d04bd028c6cf9d8",
          "headline": "AI 속도 저하? Microsoft CEO, Anthropic의 요구에 맞서 트럼프 대통령 라인업 — 빅 테크의 분열이 이제 열려 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789363706,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6de8506a41786510ea6f82656f3b8d28c8d76ebc6ed509033ca6596270fe1884",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0f3aecac0a3bd0883448",
          "headline": "Microsoft Stock: 지금이 매수 적기인가, 아니면 보류해야 하는가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789300260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=965d66cfdb98daac9e470ce3989486cb2d09f2419f96faab3765894fb6c5b64b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789407952,
      "signal": "주의 강화",
      "netScore": -10,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -3.33,
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
          "eventId": "67169fd0f99b5a50defa",
          "headline": "Netflix Climbs 4%, Alphabet Ticks Up, Amazon Barely Budges as New Streaming Policy Alliance Launches",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789407952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fade9e0faef0b0639f6398ea9e50dfffd2e862e25a6145ef9901dd9a9e1071a9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9ab6cfb892b90705f5cc",
          "headline": "Netflix, Amazon, YouTube form streaming lobbying coalition",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789406506,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a1fad44027e9bed7e3109b649f1a49d1509ee8c19b1673c76e52c79af90735d2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "84a1c5e58d1b3dae39af",
          "headline": "Netflix, Amazon And YouTube Reportedly Form Coalition As Washington Scrutinizes Sports Broadcasting",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789405802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06054e8b3b2d30574507ce066130f9ba3e47a637bd3db9b0bf8f0ecb12ae676e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2d9f98d878010703650c",
          "headline": "Whoever Spends Smarter Wins the Microsoft-Alphabet Cloud Fight. Here Is Who Is Ahead.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789404331,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=deeeed8a2af58f60c595c3d92caa55f1f020967d3872e74c40703b5fb60a3824",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d96a033ef33839959038",
          "headline": "Meta, Alphabet and Microsoft Rise While Nvidia Falls After Three AI Chiefs Call For Slowing Down Frontier Models",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789395884,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c0ebd118351da2bba43575d435d35bd0cc1786cc0d2c62feed0fc8f6877bc1d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f90b64aca9eedbf5f3a2",
          "headline": "Nasdaq Futures가 프리마켓에서 텀블링을 하는 이유는 무엇인가요? MU, AMD, NVDA, ORCL, RUM, TSLA, SPCX Stocks In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789375410,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=603bf62362314d8abc2cda4c0680ad5a49b6d7fe89058bb4377cb43c920811b9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b80b0b762eddbe1c1d93",
          "headline": "지수 부스트를 위한 SPCX 주식 세트? Elon Musk ‘매우 자신있는’ Nvidia AI 컴퓨터가 내년 우주로 출시됩니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789368674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d131df8ae888b4ebd3bb1e8a7a42f2c39947acbf2730ffba2260e9a55e7966fa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a1826d04bd028c6cf9d8",
          "headline": "AI 속도 저하? Microsoft CEO, Anthropic의 요구에 맞서 트럼프 대통령 라인업 — 빅 테크의 분열이 이제 열려 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789363706,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6de8506a41786510ea6f82656f3b8d28c8d76ebc6ed509033ca6596270fe1884",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7efd683b9ebb6ccef810",
          "headline": "MU, SNDK, INTC, AMD: 인류가 AI 산업 침체를 요구한 후 칩 주식 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789352418,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d610f6ef7b0b38f225d3912367f42af0b6e869261694dcb6006a8e6d1b802d95",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5cd843f30876c0fa139d",
          "headline": "새로운 Tesla Roadster는 SpaceX 기술을 사용합니다. 주가에 영향을 미칠까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789319800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a3c08cc622bc9d316a0fa72ddb0dc025a2f99d14b9420d8101dc12d97183f63",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fc35169ae2ded9fa8edc",
          "headline": "Sundar Pichai는 Alphabet의 클라우드 백로그가 지난 분기에 82%의 수익 성장을 달성한 후 5,140억 달러를 기록했다고 밝혔습니다. Google Cloud가 검색보다 더 큰 성장 동력이 되고 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789302180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dede3f6ed5e4e8effe4ec2312fea9adbc1def21971d4ea75457dd2f1714ba69c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "55eeaf44180b56f91c1c",
          "headline": "Google의 역사적인 396MW 청정 에너지 계약으로 AI Power Play의 판도가 바뀌었습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789239900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=547aacb955fd8ad53b9a48b5b9fada52d5ad914cd9a01910856e8429208de56e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 20,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789407952,
      "signal": "주의 강화",
      "netScore": -6.85,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.15,
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
          "score": -4.1,
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
          "eventId": "67169fd0f99b5a50defa",
          "headline": "Netflix Climbs 4%, Alphabet Ticks Up, Amazon Barely Budges as New Streaming Policy Alliance Launches",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789407952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fade9e0faef0b0639f6398ea9e50dfffd2e862e25a6145ef9901dd9a9e1071a9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9ab6cfb892b90705f5cc",
          "headline": "Netflix, Amazon, YouTube form streaming lobbying coalition",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789406506,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a1fad44027e9bed7e3109b649f1a49d1509ee8c19b1673c76e52c79af90735d2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "84a1c5e58d1b3dae39af",
          "headline": "Netflix, Amazon And YouTube Reportedly Form Coalition As Washington Scrutinizes Sports Broadcasting",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789405802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06054e8b3b2d30574507ce066130f9ba3e47a637bd3db9b0bf8f0ecb12ae676e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2339ab3da2726373fde1",
          "headline": "10년 전 Apple 주식에 20,000달러를 투자한 것은 Amazon에 같은 금액을 투자한 것보다 더 많은 수익을 거두었습니다. 다음 10년을 위한 Better Buy가 여기에 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789286700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20a10f3a75b537f65670fd11dc2107ae145daa107c44d0c80bd3fa9ceb45e98e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "36bd66db65510aef8927",
          "headline": "아마존 가격 예측: $ 300를 향한 주식의 경로가 더 명확해 보입니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789227052,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9aa61a3e839bf1149079c3d1018e5c485680bd8ab2003c3515172a697d0a77ff",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "614498358e0ee6c923b5",
          "headline": "Qualcomm이 Apple의 모뎀 비즈니스를 잃었습니다. Amazon은 방금 $ 600억 규모의 탈출 경로를 제공했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789220229,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=332503480b1329d0e654a007d8e1251b42257f9052784264d67932caede0c951",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 16,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789174583,
      "signal": "주의 강화",
      "netScore": -3.08,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789406737,
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
          "score": -1.92,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -3.67,
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
          "eventId": "0b96a73958734eb3cc27",
          "headline": "X Corp and SpaceXAI drop antitrust lawsuit against Apple",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789406737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8d96f02c2ea6f17e279b25202fd2387903d3cb200dcd3f101f59b15e0ab27077",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "92ea595b36a623f71b96",
          "headline": "Apple iPhone 18 Pro pre-orders point to mixed demand signals, brokers say",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789405680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e70841dd783d2063c1aab2c77bc3c2642ad7ff2cd6ba4358771fde40970226b5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "b3d2ccb2cbc68911f6f6",
          "headline": "지난주 소매업자들이 이러한 주식에서 눈을 뗄 수 없었던 이유: AAPL, NVDA, ORCL, NOK, SPCX",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789350287,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b9ed8531c128af820c6b6c73a4be8375c6074899daa4d361d670dbca7f87ab3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "b1e8dfaae7bbd7205162",
          "headline": "애플: 듀오가 바늘을 움직이지 않을 것이다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789329600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1e1133a739d53bfb86e7a16c3d7f3798e28e0b487ce7dc0610584a9b5bc94d8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2339ab3da2726373fde1",
          "headline": "10년 전 Apple 주식에 20,000달러를 투자한 것은 Amazon에 같은 금액을 투자한 것보다 더 많은 수익을 거두었습니다. 다음 10년을 위한 Better Buy가 여기에 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789286700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20a10f3a75b537f65670fd11dc2107ae145daa107c44d0c80bd3fa9ceb45e98e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "34b51ca7b14c8be5425a",
          "headline": "애플과 대만 반도체 제조사가 최첨단 칩을 발표했습니다. 1 주식은 훨씬 더 큰 업사이드를 제공합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789220640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b6449707f953acd9b5a6928bd1f587d4e7019e018c0d2db66479e4ef5f28ebe",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "614498358e0ee6c923b5",
          "headline": "Qualcomm이 Apple의 모뎀 비즈니스를 잃었습니다. Amazon은 방금 $ 600억 규모의 탈출 경로를 제공했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789220229,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=332503480b1329d0e654a007d8e1251b42257f9052784264d67932caede0c951",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789402189,
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
          "score": -1.92,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.37,
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
          "eventId": "164d91c7f121edfdb611",
          "headline": "Millions of Tesla Owners Are About to Get a Software Update That Lets The Car Intervene and Steer Even If They Never Turned on Full Self-Driving.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789402189,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f41cbf9436621336ea23837e11678d75e95fc9f0fa6289d0bb12563a7dd8a900",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dbfb6f3fc313e4615d59",
          "headline": "포드 자동차와 테슬라 비교: 2026년에는 어떤 자동차 주식을 사는 것이 더 좋을까요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789382276,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf982076d1fa1b9a4a1ae03eb6a25bd3a6486fa1b6a0f058aff1472f2c4668a1",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5cd843f30876c0fa139d",
          "headline": "새로운 Tesla Roadster는 SpaceX 기술을 사용합니다. 주가에 영향을 미칠까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789319800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a3c08cc622bc9d316a0fa72ddb0dc025a2f99d14b9420d8101dc12d97183f63",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4ca22e99f89b1c0dc509",
          "headline": "Tesla 네트워크는 죽었습니다: JPMorgan의 폭탄 메모는 거의 모든 Robotaxi 수십억 달러가 TSLA로 흘러가는 것을 보여줍니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789314093,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fea943af624d97a648f988107802bf2a3077832175fce3409300a938c059a946",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d59debbc12334c26450a",
          "headline": "Tesla가 S&P 500에 합류했을 때 Tesla의 10,000달러는 오늘날 약 15,700달러가 될 것입니다. 인덱스 펀드가 더 나았을 것입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789252681,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f943a12719707ac9beef8dd9b9298f8492a3b6cba62f8c451e55b9221de532dd",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7207af0898502c082598",
          "headline": "Elon Musk는 현금화를 위해 Tesla가 8조 5천억 달러의 시가총액에 도달해야 합니다. Tesla가 그 가치에 도달할 수 있는 방법은 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789237500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=be9bb308faf1e10f2071dd53f4f0451955481885cad5de849b026764f02a2c35",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789375410,
      "signal": "주의 강화",
      "netScore": -7.5,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
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
          "score": -5,
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
          "eventId": "f90b64aca9eedbf5f3a2",
          "headline": "Nasdaq Futures가 프리마켓에서 텀블링을 하는 이유는 무엇인가요? MU, AMD, NVDA, ORCL, RUM, TSLA, SPCX Stocks In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789375410,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=603bf62362314d8abc2cda4c0680ad5a49b6d7fe89058bb4377cb43c920811b9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b80b0b762eddbe1c1d93",
          "headline": "지수 부스트를 위한 SPCX 주식 세트? Elon Musk ‘매우 자신있는’ Nvidia AI 컴퓨터가 내년 우주로 출시됩니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789368674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d131df8ae888b4ebd3bb1e8a7a42f2c39947acbf2730ffba2260e9a55e7966fa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7efd683b9ebb6ccef810",
          "headline": "MU, SNDK, INTC, AMD: 인류가 AI 산업 침체를 요구한 후 칩 주식 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789352418,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d610f6ef7b0b38f225d3912367f42af0b6e869261694dcb6006a8e6d1b802d95",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b3d2ccb2cbc68911f6f6",
          "headline": "지난주 소매업자들이 이러한 주식에서 눈을 뗄 수 없었던 이유: AAPL, NVDA, ORCL, NOK, SPCX",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789350287,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b9ed8531c128af820c6b6c73a4be8375c6074899daa4d361d670dbca7f87ab3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
          "eventId": "ffc8803fecdb6e1d1907",
          "headline": "오라클의 AI 칩은 지난 분기에 97.9% 활용되었습니다. Nvidia의 경우 이것이 부족해 보입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789270681,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c19765ee99d1f808e0834ec4e72c6dcedabb281158a7cecf64700d17a6ae1f1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fb4e7bdcb542737d150c",
          "headline": "Larry Ellison nixes는 최대 75억 $ 상당의 오라클 주식을 오프로드할 계획입니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789218896,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=750d8bac777cc1be3c8dda98b6232992e5626b0a1f9fc638da63916fdeb7c71b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
          "eventId": "ba8a60504553b25aeb8d",
          "headline": "CEG, SHEL 주가 밤새 상승: Constellation Energy, Shell로부터 로드아일랜드 주 에너지 센터를 7억 1500만 달러에 인수",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789089623,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=198c2843212812e718341ca796fb137f93c2f16a250cc84296c4f41d0d5fb20b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789166911,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789252992,
      "signal": "중립·확인 대기",
      "netScore": 0.62,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.57,
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
          "eventId": "d03b5f98c1a4088147b5",
          "headline": "Nebius와 Palantir: 새로운 파트너십의 의미",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789252992,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e64b016ea3de207f1f7a0fc1d9494659a8dad54373215c8245c70b56ceb00ec",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789407960,
      "signal": "우호적 변화",
      "netScore": 6.18,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.98,
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
          "eventId": "7a1580fb2be3a233cf46",
          "headline": "Micron은 500억 달러 예측이 AI 지출 의심을 충족하면서 거의 6% 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789407960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dee20cf07314c0b2178e4a18e93614c6277a13c7fd67f0cbb61851398149c2c3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ef7610a0fac03fa075d8",
          "headline": "AI 둔화로 엔비디아, 인텔 및 기타 칩 주식이 침몰함에 따라 비트코인 ​​상승",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789407604,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a78e6d955f6a37eecc480087ec33c613d0b97aa4364bffe7e673442af27b2c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "956ac1b99f02b074871f",
          "headline": "Palantir, Nvidia, Booz Allen은 Anthropic 및 OpenAI 모델을 제한합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789407457,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=248b657ec28da438120b07529761197b455c0278d6b060333499f14124ef716e",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1c6d4f63840c2c50185f",
          "headline": "Intel 또는 NVIDIA: AI 구축 비용은 누가 지불합니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789406581,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd3160dead8735bc6a8bebd2b1cc70d5f7f95c90cc4dd0652fc2e33e0afc43b0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f7aeff8831bdc3e47d06",
          "headline": "AI 속도 논쟁이 Fed Week와 충돌함에 따라 Marvell은 7% 하락했습니다. Broadcom은 4% 하락, NVIDIA는 후퇴",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789404210,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51ce192cc0d5fc4b15eefddfa0f619e62d07e62550aaa14561671637ceb98230",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d96a033ef33839959038",
          "headline": "Meta, Alphabet and Microsoft Rise While Nvidia Falls After Three AI Chiefs Call For Slowing Down Frontier Models",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789395884,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1c0ebd118351da2bba43575d435d35bd0cc1786cc0d2c62feed0fc8f6877bc1d",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bc633867dcb5216d7af0",
          "headline": "AI 페이싱 호출이 메모리를 넘어 도달함에 따라 칩 주가 폭락: Intel 하락 7%, AMD 하락 6%, NVIDIA 철수",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789392214,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9eb8768f7f3fe078bb98c9011bad4cdc405c341fa918859a8ffcf1f787766b9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "eb9f1b3f68baac2e55ba",
          "headline": "Cornelis는 AI Infra Summit에서 Active Compute Fabric, 2억 5백만 달러의 자금 지원 및 Qualcomm 협업을 통해 확장 네트워킹으로 확장합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789390800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=996d0b562b9716f878232ec30d5eb9b97d7f9e46f7e646f481ba3205e7943b20",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "fc8ef1e8f50a8027eed9",
          "headline": "예측: 다음 엔비디아 지원 주식은 평범한 시야에 숨어있을 수 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789378200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=483c602a287d33e3dffd4a2666c3057c7144a127ce6bfc5f8f31c331aa230e47",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f90b64aca9eedbf5f3a2",
          "headline": "Nasdaq Futures가 프리마켓에서 텀블링을 하는 이유는 무엇인가요? MU, AMD, NVDA, ORCL, RUM, TSLA, SPCX Stocks In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789375410,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=603bf62362314d8abc2cda4c0680ad5a49b6d7fe89058bb4377cb43c920811b9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b80b0b762eddbe1c1d93",
          "headline": "지수 부스트를 위한 SPCX 주식 세트? Elon Musk ‘매우 자신있는’ Nvidia AI 컴퓨터가 내년 우주로 출시됩니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789368674,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d131df8ae888b4ebd3bb1e8a7a42f2c39947acbf2730ffba2260e9a55e7966fa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b3d2ccb2cbc68911f6f6",
          "headline": "지난주 소매업자들이 이러한 주식에서 눈을 뗄 수 없었던 이유: AAPL, NVDA, ORCL, NOK, SPCX",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789350287,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b9ed8531c128af820c6b6c73a4be8375c6074899daa4d361d670dbca7f87ab3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 56,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789407960,
      "signal": "우호적 변화",
      "netScore": 6.85,
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
          "eventId": "7a1580fb2be3a233cf46",
          "headline": "Micron은 500억 달러 예측이 AI 지출 의심을 충족하면서 거의 6% 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789407960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dee20cf07314c0b2178e4a18e93614c6277a13c7fd67f0cbb61851398149c2c3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ef7610a0fac03fa075d8",
          "headline": "AI 둔화로 엔비디아, 인텔 및 기타 칩 주식이 침몰함에 따라 비트코인 ​​상승",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789407604,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a78e6d955f6a37eecc480087ec33c613d0b97aa4364bffe7e673442af27b2c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bc633867dcb5216d7af0",
          "headline": "AI 페이싱 호출이 메모리를 넘어 도달함에 따라 칩 주가 폭락: Intel 하락 7%, AMD 하락 6%, NVIDIA 철수",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789392214,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9eb8768f7f3fe078bb98c9011bad4cdc405c341fa918859a8ffcf1f787766b9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "eb9f1b3f68baac2e55ba",
          "headline": "Cornelis는 AI Infra Summit에서 Active Compute Fabric, 2억 5백만 달러의 자금 지원 및 Qualcomm 협업을 통해 확장 네트워킹으로 확장합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789390800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=996d0b562b9716f878232ec30d5eb9b97d7f9e46f7e646f481ba3205e7943b20",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "eb8c38c0cf881bec1026",
          "headline": "Advanced Micro Devices vs. ASML: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789390201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52275edceb16f705c6d4f1eb47a54ac1ad149c00ab87514d588258c76472a95e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f90b64aca9eedbf5f3a2",
          "headline": "Nasdaq Futures가 프리마켓에서 텀블링을 하는 이유는 무엇인가요? MU, AMD, NVDA, ORCL, RUM, TSLA, SPCX Stocks In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789375410,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=603bf62362314d8abc2cda4c0680ad5a49b6d7fe89058bb4377cb43c920811b9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7efd683b9ebb6ccef810",
          "headline": "MU, SNDK, INTC, AMD: 인류가 AI 산업 침체를 요구한 후 칩 주식 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789352418,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d610f6ef7b0b38f225d3912367f42af0b6e869261694dcb6006a8e6d1b802d95",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8aa0ccfcbe1a7761d0d9",
          "headline": "Nvidia는 AI의 과대광고를 얻습니다. Dell, 억만장자 재산 획득",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789333200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9edb401d7c8d79849e871d46a723f1df046c8a6b3094f40b02076df507933ec6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f935a204986b3ca53e1a",
          "headline": "Nvidia의 990억 달러 규모 인공 지능(AI) 포트폴리오에 포함된 회사는 다음과 같습니다. 이 3가지가 이 그룹 중 최고입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789321380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df63c0bccb7dbb77885ad5efc3a1f0a7de24886a8773628a4272e12b7f98db41",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "9b18e01d208eb0a50d98",
          "headline": "AMD와 Intel의 공유 AI 지침이 GCC에 도달했습니다. 소프트웨어 협력이 두 주식을 모두 강화할 수 있을까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789318757,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6737783dfdd1322ee1c99e8df4498131a67bb92ccc41e0130c7122f826eb571",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c6223010b9ed1fd7c705",
          "headline": "Google은 2006년에 YouTube를 16억 5천만 달러에 인수했습니다. 스트리밍 플랫폼은 이제 Alphabet에서 약 930억 달러 규모의 비즈니스를 이끄는 주요 동인입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789306800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6496489e08510f4066ed1b0011c27210180b5c022d6dbc65dbb2f27f48f1968",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7b3d9e95845a7a72de77",
          "headline": "Broadcom CEO Hock Tan은 수요가 이미 Broadcom의 1,150억 달러 AI 예측을 초과했다고 말했습니다. 이것이 주식에 의미하는 바는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789305600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=98bded0276935d6299d45aae01bdae07abd3804685232179ef62991f93ac6ff7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 36,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789320420,
      "signal": "중립·확인 대기",
      "netScore": 1.75,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
          "eventId": "b71ac945fa7dd0c4a76b",
          "headline": "Nvidia 대 Broadcom: 최근 수익 이후 어느 조 달러 규모의 AI 칩 주식이 더 많은 상승 여력을 가지고 있습니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1789320420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99a0a7d560641299354330c6b8697f0729b8a0eb4fbdd064f27eeff597908e7c",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7b3d9e95845a7a72de77",
          "headline": "Broadcom CEO Hock Tan은 수요가 이미 Broadcom의 1,150억 달러 AI 예측을 초과했다고 말했습니다. 이것이 주식에 의미하는 바는 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789305600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=98bded0276935d6299d45aae01bdae07abd3804685232179ef62991f93ac6ff7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e773664a85e7a50d0600",
          "headline": "Broadcom 대 Micron Technology: 2026년에는 어떤 기술 주식을 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789236502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03ad308a7a6fb74074dd64001006d02c01b4acae01f7797db1a1b4c790483715",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789405680,
      "signal": "주의 강화",
      "netScore": -6.24,
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
          "eventId": "92ea595b36a623f71b96",
          "headline": "Apple iPhone 18 Pro pre-orders point to mixed demand signals, brokers say",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789405680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e70841dd783d2063c1aab2c77bc3c2642ad7ff2cd6ba4358771fde40970226b5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "eb9f1b3f68baac2e55ba",
          "headline": "Cornelis는 AI Infra Summit에서 Active Compute Fabric, 2억 5백만 달러의 자금 지원 및 Qualcomm 협업을 통해 확장 네트워킹으로 확장합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789390800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=996d0b562b9716f878232ec30d5eb9b97d7f9e46f7e646f481ba3205e7943b20",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b3d2ccb2cbc68911f6f6",
          "headline": "지난주 소매업자들이 이러한 주식에서 눈을 뗄 수 없었던 이유: AAPL, NVDA, ORCL, NOK, SPCX",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789350287,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b9ed8531c128af820c6b6c73a4be8375c6074899daa4d361d670dbca7f87ab3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "34b51ca7b14c8be5425a",
          "headline": "애플과 대만 반도체 제조사가 최첨단 칩을 발표했습니다. 1 주식은 훨씬 더 큰 업사이드를 제공합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789220640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b6449707f953acd9b5a6928bd1f587d4e7019e018c0d2db66479e4ef5f28ebe",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "614498358e0ee6c923b5",
          "headline": "Qualcomm이 Apple의 모뎀 비즈니스를 잃었습니다. Amazon은 방금 $ 600억 규모의 탈출 경로를 제공했습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789220229,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=332503480b1329d0e654a007d8e1251b42257f9052784264d67932caede0c951",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1789412462.2515655,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789407604,
      "signal": "중립·확인 대기",
      "netScore": -0.84,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
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
          "score": -2.45,
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
          "eventId": "ef7610a0fac03fa075d8",
          "headline": "AI 둔화로 엔비디아, 인텔 및 기타 칩 주식이 침몰함에 따라 비트코인 ​​상승",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789407604,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a78e6d955f6a37eecc480087ec33c613d0b97aa4364bffe7e673442af27b2c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f7aeff8831bdc3e47d06",
          "headline": "AI 속도 논쟁이 Fed Week와 충돌함에 따라 Marvell은 7% 하락했습니다. Broadcom은 4% 하락, NVIDIA는 후퇴",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789404210,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51ce192cc0d5fc4b15eefddfa0f619e62d07e62550aaa14561671637ceb98230",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0ff955d1f2f0f58903e9",
          "headline": "오늘 Marvell 주식이 하락하는 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789403400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7253414ae758a3fa5559234ffe6889ee1426b681044df5ed554cda7e2020801f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789407604,
      "signal": "중립·확인 대기",
      "netScore": -1.56,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
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
          "score": -5,
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
          "eventId": "ef7610a0fac03fa075d8",
          "headline": "AI 둔화로 엔비디아, 인텔 및 기타 칩 주식이 침몰함에 따라 비트코인 ​​상승",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789407604,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6a78e6d955f6a37eecc480087ec33c613d0b97aa4364bffe7e673442af27b2c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1c6d4f63840c2c50185f",
          "headline": "Intel 또는 NVIDIA: AI 구축 비용은 누가 지불합니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789406581,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bd3160dead8735bc6a8bebd2b1cc70d5f7f95c90cc4dd0652fc2e33e0afc43b0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e762b258dcb6f20a3875",
          "headline": "Microsoft AI CEO Agrees: AI Is Getting Dangerous and Needs to Be Controlled",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789402758,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6eef32cd2927461cef7379644642c62134ce910dbe9ea1e46cbcb15564a237aa",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bc633867dcb5216d7af0",
          "headline": "AI 페이싱 호출이 메모리를 넘어 도달함에 따라 칩 주가 폭락: Intel 하락 7%, AMD 하락 6%, NVIDIA 철수",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789392214,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9eb8768f7f3fe078bb98c9011bad4cdc405c341fa918859a8ffcf1f787766b9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "7efd683b9ebb6ccef810",
          "headline": "MU, SNDK, INTC, AMD: 인류가 AI 산업 침체를 요구한 후 칩 주식 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789352418,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d610f6ef7b0b38f225d3912367f42af0b6e869261694dcb6006a8e6d1b802d95",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e6ae3663ddcf0b10eb01",
          "headline": "Intel(INTC)은 CPU 부족으로 승리하고 있지만 파운드리 가치 평가에는 더 많은 증거가 필요합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789326652,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=958a691c65294af0436ba0a4f03da20b8a7bae7677a8ea9914091a4689266779",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f935a204986b3ca53e1a",
          "headline": "Nvidia의 990억 달러 규모 인공 지능(AI) 포트폴리오에 포함된 회사는 다음과 같습니다. 이 3가지가 이 그룹 중 최고입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789321380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df63c0bccb7dbb77885ad5efc3a1f0a7de24886a8773628a4272e12b7f98db41",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9b18e01d208eb0a50d98",
          "headline": "AMD와 Intel의 공유 AI 지침이 GCC에 도달했습니다. 소프트웨어 협력이 두 주식을 모두 강화할 수 있을까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789318757,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6737783dfdd1322ee1c99e8df4498131a67bb92ccc41e0130c7122f826eb571",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b19d20d5c9da85f5bd56",
          "headline": "어플라이드 머티어리얼즈 vs. ASML: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789303801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f55ede1a59d67b89304725096b5809cb70dc7f00a4502825e1e617846e8aeaac",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8f467c43891b70437366",
          "headline": "10년 후 마이크론은 어디에 있을까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789212900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c85b24cac3b2b14cb4bd0fffcafac0404e7ed0e2199f9e7c7f9b4cfe4a9350a7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
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
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 15,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789220640,
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
          "eventId": "34b51ca7b14c8be5425a",
          "headline": "애플과 대만 반도체 제조사가 최첨단 칩을 발표했습니다. 1 주식은 훨씬 더 큰 업사이드를 제공합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789220640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b6449707f953acd9b5a6928bd1f587d4e7019e018c0d2db66479e4ef5f28ebe",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
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
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789390201,
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
          "score": -2.45,
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
          "eventId": "eb8c38c0cf881bec1026",
          "headline": "Advanced Micro Devices vs. ASML: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789390201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52275edceb16f705c6d4f1eb47a54ac1ad149c00ab87514d588258c76472a95e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b19d20d5c9da85f5bd56",
          "headline": "어플라이드 머티어리얼즈 vs. ASML: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789303801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f55ede1a59d67b89304725096b5809cb70dc7f00a4502825e1e617846e8aeaac",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789397549,
      "signal": "주의 강화",
      "netScore": -7.55,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.1,
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
          "score": -3.67,
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
          "eventId": "b4154027aff4bc2c0ddf",
          "headline": "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주가 하락: Applied Materials 및 Lam Research는 6% 하락, ASML은 5% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789397549,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc44bdc8f76f0c1eac85348fbfa20d94e3946efc3398fc096a2a44326f03af90",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b19d20d5c9da85f5bd56",
          "headline": "어플라이드 머티어리얼즈 vs. ASML: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789303801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f55ede1a59d67b89304725096b5809cb70dc7f00a4502825e1e617846e8aeaac",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789397549,
      "signal": "중립·확인 대기",
      "netScore": -1.87,
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
          "eventId": "b4154027aff4bc2c0ddf",
          "headline": "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주가 하락: Applied Materials 및 Lam Research는 6% 하락, ASML은 5% 하락",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789397549,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dc44bdc8f76f0c1eac85348fbfa20d94e3946efc3398fc096a2a44326f03af90",
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
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1789412462.2515655,
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
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789407960,
      "signal": "우호적 변화",
      "netScore": 4.18,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 3.5,
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
          "eventId": "7a1580fb2be3a233cf46",
          "headline": "Micron은 500억 달러 예측이 AI 지출 의심을 충족하면서 거의 6% 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789407960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dee20cf07314c0b2178e4a18e93614c6277a13c7fd67f0cbb61851398149c2c3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "92ea595b36a623f71b96",
          "headline": "Apple iPhone 18 Pro pre-orders point to mixed demand signals, brokers say",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789405680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e70841dd783d2063c1aab2c77bc3c2642ad7ff2cd6ba4358771fde40970226b5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "ff90230a32e0dc20bb6a",
          "headline": "9월 14일 정오 주식 시장: 심각한 AI 경고로 기술주 하락, 마이크론 5% 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789404299,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c3a7f6df902153201ddaa417045b4c76713a7f0f97f8a3aee05d22f18d2bf26",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "eb9f1b3f68baac2e55ba",
          "headline": "Cornelis는 AI Infra Summit에서 Active Compute Fabric, 2억 5백만 달러의 자금 지원 및 Qualcomm 협업을 통해 확장 네트워킹으로 확장합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789390800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=996d0b562b9716f878232ec30d5eb9b97d7f9e46f7e646f481ba3205e7943b20",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f90b64aca9eedbf5f3a2",
          "headline": "Nasdaq Futures가 프리마켓에서 텀블링을 하는 이유는 무엇인가요? MU, AMD, NVDA, ORCL, RUM, TSLA, SPCX Stocks In Focus",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1789375410,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=603bf62362314d8abc2cda4c0680ad5a49b6d7fe89058bb4377cb43c920811b9",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0e07be035dbb9373d2cb",
          "headline": "예측: Micron의 9월 30일 수익은 메모리 부족이 아직 끝나지 않았음을 확인할 것입니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789374900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0e02ae1a8e5f35bfaea82a89343eb164b1c53af6da8279776fabe670b275df2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7efd683b9ebb6ccef810",
          "headline": "MU, SNDK, INTC, AMD: 인류가 AI 산업 침체를 요구한 후 칩 주식 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789352418,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d610f6ef7b0b38f225d3912367f42af0b6e869261694dcb6006a8e6d1b802d95",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b3d2ccb2cbc68911f6f6",
          "headline": "지난주 소매업자들이 이러한 주식에서 눈을 뗄 수 없었던 이유: AAPL, NVDA, ORCL, NOK, SPCX",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789350287,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b9ed8531c128af820c6b6c73a4be8375c6074899daa4d361d670dbca7f87ab3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "8aa0ccfcbe1a7761d0d9",
          "headline": "Nvidia는 AI의 과대광고를 얻습니다. Dell, 억만장자 재산 획득",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789333200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9edb401d7c8d79849e871d46a723f1df046c8a6b3094f40b02076df507933ec6",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f935a204986b3ca53e1a",
          "headline": "Nvidia의 990억 달러 규모 인공 지능(AI) 포트폴리오에 포함된 회사는 다음과 같습니다. 이 3가지가 이 그룹 중 최고입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1789321380,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df63c0bccb7dbb77885ad5efc3a1f0a7de24886a8773628a4272e12b7f98db41",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "41c89ead85a561c711d3",
          "headline": "마이크론 테크놀로지 주식은 9월 30일 이후 1,500달러까지 급등할 것인가?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789317300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6554577461ebbe83fac99d6c3156ddfb8c87e83b2f8b4e53f3ab6e3ea19418f8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b9cf2f9ec1dfd4d56f67",
          "headline": "예측: 이 메모리 재고는 향후 3년 동안 233% 급등할 수 있습니다(힌트: Micron이나 Sandisk가 아닙니다).",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789317060,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=931cd51bccc9fb009e23939eec1f809a190fbed2a77781028f98e2675b0717fa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 47,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789352418,
      "signal": "주의 강화",
      "netScore": -5.6,
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
          "score": -3.15,
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
          "eventId": "7efd683b9ebb6ccef810",
          "headline": "MU, SNDK, INTC, AMD: 인류가 AI 산업 침체를 요구한 후 칩 주식 하락",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789352418,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d610f6ef7b0b38f225d3912367f42af0b6e869261694dcb6006a8e6d1b802d95",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b9cf2f9ec1dfd4d56f67",
          "headline": "예측: 이 메모리 재고는 향후 3년 동안 233% 급등할 수 있습니다(힌트: Micron이나 Sandisk가 아닙니다).",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789317060,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=931cd51bccc9fb009e23939eec1f809a190fbed2a77781028f98e2675b0717fa",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fa54fd1bc75e281cba49",
          "headline": "DeepSeek는 KV-캐시 HBM 필요를 75%, SSD 필요를 87.5% 줄였습니다. 마이크론과 샌디스크 투자자들은 주목해야 한다",
          "eventLabel": "실적 발표",
          "publishedAt": 1789262163,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8403adbcc3b4e194435cab8a15470c1a10c97fb0538c44beb963b05c82ef996a",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789405680,
      "signal": "주의 강화",
      "netScore": -6.1,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "score": -5,
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
          "eventId": "92ea595b36a623f71b96",
          "headline": "Apple iPhone 18 Pro pre-orders point to mixed demand signals, brokers say",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789405680,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e70841dd783d2063c1aab2c77bc3c2642ad7ff2cd6ba4358771fde40970226b5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "b3d2ccb2cbc68911f6f6",
          "headline": "지난주 소매업자들이 이러한 주식에서 눈을 뗄 수 없었던 이유: AAPL, NVDA, ORCL, NOK, SPCX",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789350287,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b9ed8531c128af820c6b6c73a4be8375c6074899daa4d361d670dbca7f87ab3",
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
          "eventId": "34b51ca7b14c8be5425a",
          "headline": "애플과 대만 반도체 제조사가 최첨단 칩을 발표했습니다. 1 주식은 훨씬 더 큰 업사이드를 제공합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789220640,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b6449707f953acd9b5a6928bd1f587d4e7019e018c0d2db66479e4ef5f28ebe",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "4cfda87c52da42fad0e6",
          "headline": "Western Digital, 2027년까지 AI 기반 HDD 수요가 공급을 초과할 것으로 예상",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789203716,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=64e899ae32f1bcbfd3dea3da88846df3d9d829f1edcf5c62f402ef905427defd",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789156143,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789408190,
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
          "eventId": "a295bcf5854dc06fd966",
          "headline": "Lumentum이 완화되고 Coherent가 정체를 유지함에 따라 GoPro는 11% 급등: 이것은 합병 거래입니까, 아니면 밈 거래입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789054970,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b66d533dd27d5264d40c95ba304afa7ed195264f13942927fc7d33513d59daf2",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789408190,
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
          "eventId": "a295bcf5854dc06fd966",
          "headline": "Lumentum이 완화되고 Coherent가 정체를 유지함에 따라 GoPro는 11% 급등: 이것은 합병 거래입니까, 아니면 밈 거래입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789054970,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b66d533dd27d5264d40c95ba304afa7ed195264f13942927fc7d33513d59daf2",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1789412462.2515655,
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
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789380997,
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
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ba8a60504553b25aeb8d",
          "headline": "CEG, SHEL 주가 밤새 상승: Constellation Energy, Shell로부터 로드아일랜드 주 에너지 센터를 7억 1500만 달러에 인수",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1789089623,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=198c2843212812e718341ca796fb137f93c2f16a250cc84296c4f41d0d5fb20b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "VST": {
      "ticker": "VST",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789311600.0,
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
          "score": 0.0,
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
          "score": -2.0,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789404062,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789404062,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "HUBB": {
      "ticker": "HUBB",
      "updatedAt": 1789412462.2515655,
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
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789351320,
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
          "eventId": "de8eeada2d64ad7968a4",
          "headline": "Vertiv는 AI 인프라 파이프라인이 확장됨에 따라 데이터 센터 수요가 강화될 것으로 보고 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1789351320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6d75be1524d8a0425d1a4662a6bf046eb545a55ec4a478974f812c091fb93ae",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1789412462.2515655,
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
      "updatedAt": 1789412462.2515655,
      "dataAsOf": 1789394139,
      "signal": "중립·확인 대기",
      "netScore": -0.57,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.57,
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
          "eventId": "0142508f12001efb6ce9",
          "headline": "Seagate는 실질적인 상승 여력이 있습니다. 그렇다고 지금 당장 돈을 쓸 가치가 있다는 뜻은 아닙니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1789394139,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8e5de3319b11b28ed3d3afd1effd46206b029d12da514206d01ba7071dd1b6b4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "679bb1aa58be940c67e6",
          "headline": "Seagate는 AI와 클라우드가 HDD 성장을 주도하면서 스토리지 수요가 공급을 앞지르는 것으로 보고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1789304519,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7cb6bba65d027a64490f03bb679e0ad86dcf7f4b95b82e2feaf03ed72887891b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d4cf73958b6685bea54c",
          "headline": "Seagate는 AI와 클라우드가 HDD 성장을 주도하면서 스토리지 수요가 공급을 앞지르는 것으로 보고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789304519,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7cb6bba65d027a64490f03bb679e0ad86dcf7f4b95b82e2feaf03ed72887891b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ac54bc527575ee616525",
          "headline": "Seagate Technology는 AI 스토리지 수요가 HAMR 성장과 마진 증대를 촉진한다고 보고 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1789297317,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b15c6ba31bd42b1d656637da2cd0b740d627769711edec0e769fddc50c286f4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "16c549c84f68e451eb9e",
          "headline": "Seagate: HDD 부족 현상은 여전히 ​​남아 있습니다.",
          "eventLabel": "공급망 문제",
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
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1789412462.2515655,
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
      "updatedAt": 1789412462.2515655,
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
      "updatedAt": 1789412462.2515655,
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
