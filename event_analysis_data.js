// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1792623348.0271804,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792608719,
      "signal": "주의 강화",
      "netScore": -2.38,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.23,
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
          "eventId": "73b96e05d70c546c697f",
          "headline": "Steve Ballmer Is Worth $164 Billion, After Being Kicked Out Of Microsoft",
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
          "headline": "Microsoft Must Say This on Oct. 28 or the Stock Will Go Into Free Fall",
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
        },
        {
          "eventId": "185877cbeb9150390e48",
          "headline": "마이크로소프트, 알파벳, 골드만삭스, 토큰화된 주식에 반대하는 기업 목록에 합류",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792527364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff421581c018f3402bb5ad1299329d569d3dd4c647b80838d83c89620729be28",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "da8bacdb99b09836e6f1",
          "headline": "업데이트: 시장 잡담: Microsoft, Nscale과의 영국 데이터 센터 거래 철회",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792500792,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f6f05377f89e818acee2d57cd3df61a93b6dd86bf1a56d336fc1c0d703912f47",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "503f74bcd19213300618",
          "headline": "마이크로소프트는 AI에 현금을 지불합니다. CoreWeave 차용.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792496960,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=400e89cf45109f3e6ba2c05cbe9032a6ed9df6bba438ccd2f60036f3cfa3f207",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "166ca2101a701cce018b",
          "headline": "Microsoft vs. Oracle: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792469402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1e505b35a5f707444373e7c8181733e4fa60a1c6fb2d85ffe25265775e4f055",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0a29b7d3852ee13f280f",
          "headline": "Microsoft는 AI 데이터 센터 거래에서 손을 떼지만 SemiAnalytic은 2027년에 50GW 붐을 예측합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792435586,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d30ac0baba303f813e7df935792ae283a06a6d1c991cddbf9fd15b979ae63453",
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
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792615320,
      "signal": "주의 강화",
      "netScore": -6.92,
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
          "eventId": "a2700bd73ce152b20284",
          "headline": "Kazakhstan’s AIFC Regulator Turns to Apple and Google to Enforce Coinbase, HTX Injunctions",
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
          "eventId": "db29787372e159d28a64",
          "headline": "Alphabet Slips 2% Despite NASDAQ Rally as Pichai Says Google Cloud Is Giving Up Revenue for AI Capacity; Amazon Dips, Microsoft Holds Steady",
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
          "eventId": "87b76b1839ee6a097353",
          "headline": "Revolut 중단은 Google 클라우드 장애로 인해 뱅킹 서비스가 중단됨에 따라 암호화 액세스를 차단합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792566859,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e6a2b5d73c3249443d8b5dfbb272490faa322484523f1eef9e609c0e58a272c1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "185877cbeb9150390e48",
          "headline": "마이크로소프트, 알파벳, 골드만삭스, 토큰화된 주식에 반대하는 기업 목록에 합류",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792527364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff421581c018f3402bb5ad1299329d569d3dd4c647b80838d83c89620729be28",
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
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792606534,
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
          "score": 0.35,
          "level": "중립"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -4.9,
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
          "eventId": "973c423976faceab7eac",
          "headline": "Amazon Ditches Ashburn Data Center Plan, Shifts To Mixed-Use Vision",
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
          "headline": "Amazon or Alphabet: If I Could Only Own One for the Next Decade, It Would Be This One",
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
          "headline": "Alphabet Slips 2% Despite NASDAQ Rally as Pichai Says Google Cloud Is Giving Up Revenue for AI Capacity; Amazon Dips, Microsoft Holds Steady",
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
          "eventId": "549f47214d7241564468",
          "headline": "아마존 vs 알파벳: 지금 당장 매수하는 것이 더 나은 \"매그니피센트 세븐\" 주식은 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792534502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d48ac5d0639424d1a7b3caec6ecf5b2b7ddf99ab2287fbc0de0ea40172572acb",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "219d5a4cd2fadc264980",
          "headline": "Amazon, 전력 공급에 앞서 Nvidia AI 하드웨어 비축 -Business Insider",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792525575,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab574575bc56dcfc0cd06ef844851b998d5564737e945aab4859e7d98b0587f1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "544d5a069a5cbff4afaf",
          "headline": "시장 잡담: Amazon은 전력을 공급할 수 있는 것보다 더 많은 Nvidia AI 하드웨어를 구매하고 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792524552,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af5b78cf3bc72ee40b61c9f88597575013b276cf78183bbb30a4005d404291c0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "57fe5ee56128b32c90fb",
          "headline": "3M, 확장된 Amazon 데이터 센터 거래로 6% 증가 및 수익 개선 일관된 가장자리는 더 높고 코닝은 평탄함을 유지합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792508325,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6129f56cc87faa8ab520b296dffab50edcea140b5d320765804380efcaa18679",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c2f0cae2d0cdfd873990",
          "headline": "Morgan Stanley Top Pick에서 Amazon 주가 상승: 350달러 목표에 필요한 것",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792499257,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=760c6eb9175adc6c96225d582675e3b33ddd711e4f2116a85354b90723f2b93e",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3e1942bbb4cc365db652",
          "headline": "MMM 주가 밤새 상승: Amazon이 데이터 센터 제품에 60억 달러를 지출하면 300만 달러를 소유할 수 있음",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792460827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e74b531e89ef7af2922fba2beb11ecbfb482b11e12672af124e18844fc2bd03b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1432e8c717f5a1591599",
          "headline": "Amazon은 확장된 데이터 센터 파트너십을 통해 5억 2,140만 달러 규모의 3M 주식을 매입할 수 있는 영장을 받았습니다. MMM은 영업 시간 외 5% 이상 상승합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792460428,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ecd1af9cf2c3406b4af22abcb96b91424fd304fa192b786d4793423e9792f94a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "fabac6490a7f1432285f",
          "headline": "AI Rout이 식으면서 Nasdaq 100은 거의 한 달 만에 최고의 날을 맞이했습니다 — AMZN, BE, CRWV, AAPL, PLTR 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792450823,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2c49c35a756adb72db9233d431d447e8200033fa768a6a031f1d0857617d958",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "864570426d6afecc0c80",
          "headline": "BE 주식은 Oracle이 Jupiter 프로젝트에 '빠른 움직임' 신호를 보낸 후 3%를 추가합니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792439436,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccd00c5c3fd4561eca5fa8d0496bf03dc8814aa87fb54276ccd5d784ce66bb28",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792604487,
      "signal": "주의 강화",
      "netScore": -2.65,
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
          "eventId": "7f609b4b4352b6534aff",
          "headline": "Intel’s $28B Ohio Chip Project Hits Construction Milestone After Years Of Delays — Arizona Fab Targets 2028 Start",
          "eventLabel": "실적 발표",
          "publishedAt": 1792604487,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09a241c5532847859dd335abef472930a78c2640d951d6c94ea750d0fc53fe6f",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "119b05f0491e549cd6aa",
          "headline": "AMD, QCOM Targets Raised While INTC, COHR Face Cuts — Susquehanna Sees ‘Modest Upside’ For Chip Earnings",
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
          "eventId": "dba1ce9366b704763571",
          "headline": "SpaceX CEO Elon Musk가 AI의 진정한 제약은 칩이 아니라 전력과 냉각이라고 말한 후 BE Stock이 에너지 랠리를 주도합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792545801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2dae608d19f7468857e723c7cb48b098105a7e402e363e493d2330a93b099f4",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a92c2cef5f4c1a6b56ce",
          "headline": "META SEC Form 8-K 공식 제출",
          "eventLabel": "매출",
          "publishedAt": 1792508400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026066700/meta-20261019.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792615320,
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
          "score": -4.38,
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
          "eventId": "a2700bd73ce152b20284",
          "headline": "Kazakhstan’s AIFC Regulator Turns to Apple and Google to Enforce Coinbase, HTX Injunctions",
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
          "eventId": "4f6145074c5ef7b53ca3",
          "headline": "Apple vs. SK hynix: Which Tech Stock Is a Better Buy in 2026?",
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
        },
        {
          "eventId": "1a1744250bb549c9e8a8",
          "headline": "S&P 500, Dow는 수익 시즌이 시작됨에 따라 상승하고 SpaceX는 Nasdaq 영업 시간 외 지원 — SPCX, BA, MMM, NFLX, QCOM 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792540077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140e19bf8785e4c9553980a5aa5e4962e59391604d10894c3f0b722ae84edb24",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "549f47214d7241564468",
          "headline": "아마존 vs 알파벳: 지금 당장 매수하는 것이 더 나은 \"매그니피센트 세븐\" 주식은 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792534502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d48ac5d0639424d1a7b3caec6ecf5b2b7ddf99ab2287fbc0de0ea40172572acb",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "109d5c3a4a9aa38b5984",
          "headline": "Morgan Stanley가 가격 목표를 현재 수준보다 거의 두 배로 인상 한 후 STX 주식은 2 % 추가",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792520385,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3d58c57a27b5075c38302a8281351a4c4febcd2ad3e14b963a5711f17c44359",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee26a1916b0c6d8898c4",
          "headline": "지금 애플 주식을 사야 할까요, 아니면 하락을 기다려야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792509541,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d900116cb4f7aa1c70fb3b960f3e6b2e95c1c557cc1fa75f77385a8693392631",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "54bc9020bb7c90036444",
          "headline": "Apple 대 ASML: 2026년에는 어떤 기술주를 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792497601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fbc85a70aebb4549f22f8c830881dc7ff6d9e4916c01327b354afe1c8e058ef7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c11ece71bb149befb39a",
          "headline": "Apple, 10월 28일 'Pro And Tell' 이벤트 확인 — 최초의 터치스크린 MacBook Pro 예상",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792431800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=522773942a919b923a94eb66756e848a851f89569c35a3e3afdb53e4bc65736e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792604487,
      "signal": "주의 강화",
      "netScore": -3.36,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -1.92,
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
          "eventId": "7f609b4b4352b6534aff",
          "headline": "Intel’s $28B Ohio Chip Project Hits Construction Milestone After Years Of Delays — Arizona Fab Targets 2028 Start",
          "eventLabel": "실적 발표",
          "publishedAt": 1792604487,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09a241c5532847859dd335abef472930a78c2640d951d6c94ea750d0fc53fe6f",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "119b05f0491e549cd6aa",
          "headline": "AMD, QCOM Targets Raised While INTC, COHR Face Cuts — Susquehanna Sees ‘Modest Upside’ For Chip Earnings",
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
          "eventId": "3e40b595602b29329fe2",
          "headline": "테슬라의 새로운 플라잉 로드스터가 주식을 날려보낼까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792565401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b35ab90750fd2e701c66b1744d7b8005b8fc2f342b5654ac7d453f4ebd393bd8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6113f9ec74b13f27089e",
          "headline": "일론 머스크 (Elon Musk) 는 테슬라와 스페이스X를 합병하기 위한 협상이 진행 중이라고",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792561577,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=071f827b9d9d41ddfc9176795698299e6afe8d3d72e988c49df26a6cfe3eae44",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "dba1ce9366b704763571",
          "headline": "SpaceX CEO Elon Musk가 AI의 진정한 제약은 칩이 아니라 전력과 냉각이라고 말한 후 BE Stock이 에너지 랠리를 주도합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792545801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2dae608d19f7468857e723c7cb48b098105a7e402e363e493d2330a93b099f4",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c06813123f3184e0eb21",
          "headline": "TSLA SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1792508400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026066738/tsla-20261021.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "dff35b67ce2b3330873a",
          "headline": "Tesla는 21명의 애널리스트가 보류된 보고서를 발표했습니다. 그들의 마음을 바꿀 것은 다음과 같습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792501223,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53011929080f0c03c6183ad058f12c411b63af3b3817da164ffdf7b1ae7b770a",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "da989621894fd2900d83",
          "headline": "JPMorgan이 주식을 업그레이드함에 따라 Tesla는 Intel과의 파운드리 계약을 맺었습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792440467,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bb54ff3683b83061badd91f3a125a0617189000da3f2260cf75bdd41478f462",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792593956,
      "signal": "중립·확인 대기",
      "netScore": -0.49,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
          "level": "우호적"
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
          "score": -2.62,
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
          "eventId": "814fa883f2a1292171ba",
          "headline": "Oracle’s Growth to Valuation Mismatch is Less and Less Compelling",
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
        },
        {
          "eventId": "d3fb0f80f6f35c98c5fd",
          "headline": "블룸 에너지 vs. 오라클: 목성 후퇴 후 더 나은 구매는 어떤 AI 인프라 스톡입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792550100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8f62ce5dfdcfdaf5f6d68906fc931df81caa8d9f83855c3008c1c2df6ff5d20e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ec2221058850042aeea5",
          "headline": "오라클은 이미 불가항력을 요구하고 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792543894,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb66098ebad996fe22bf10cd8684f2aaec16eb653e112e5ca3b2d58f83acdf85",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "faa0718155f002c10b17",
          "headline": "오라클(ORCL), 새로운 제약회사 파트너십으로 AI 헬스케어 사업 확장",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792512826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9deffecb0b309742ae93c8101e3125a8864e6c1fe78c207c71d198c6aa1cd39d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "cb204625b730d750f316",
          "headline": "AstraZeneca와 Oracle, 임상 시험 및 환자 치료 개선을 위해 AI 파트너십 개시",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792492863,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8ae13749806499f734e5ead993cc11fa4369da2835d237a97993fe54c35e450",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "166ca2101a701cce018b",
          "headline": "Microsoft vs. Oracle: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792469402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e1e505b35a5f707444373e7c8181733e4fa60a1c6fb2d85ffe25265775e4f055",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792601708,
      "signal": "중립·확인 대기",
      "netScore": 0.84,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
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
          "score": -4.2,
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
          "eventId": "03b396211e0fe3e80270",
          "headline": "Palantir Rises 4% as Software Stocks Rally; ServiceNow Gains 3%, Salesforce Holds Flat",
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
        },
        {
          "eventId": "3bf2930af3a7f7a073a8",
          "headline": "Salesforce-Braze 거래는 분석가가 인수 가치를 평가함에 따라 다운그레이드를 유도합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792576554,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8426c3c1de631aaf33cfaf624c98728faae4b188f5f20d0b9896968072130e30",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8e8cb0a5b215c423b4a1",
          "headline": "CRM 재고 집중: Jefferies, Salesforce의 브레이즈 딜이 더 많은 소프트웨어 인수를 촉발할 수 있다고 말함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792567275,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=db7b198b02d8c1696422328ab488f30c90e2b9a287036642b04b92f1fa21bbd7",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "616ecbf23622b713caf5",
          "headline": "Salesforce 주식 투자자는 실행 전에 무엇을 놓쳤습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792547105,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=31df9a65c80a88d10eddfcccc30117eea1111c3b5318887fd25cf13c4b7dc3fe",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0c54e1164988202deca6",
          "headline": "오늘, 10월 20일 주식 시장: Salesforce, Braze를 56억 6천만 달러에 인수하기로 합의: BRZE 주가 52% 급등",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792530582,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99d7cbc62881a063480458d9a2416bbdc7ff90bfde447492ed838de1bca0151a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "35430766304f80f2c01d",
          "headline": "Salesforce가 \"와우 순간\"을 전달하기 위해 56억 6천만 달러 규모의 인수에 동의하면서 Braze는 51% 급등했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792525738,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=74a2e566db82e7429a93ec905ebd47ae7c2718dba4388379c3d623bca3934171",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6dba29f9246cd326720a",
          "headline": "Salesforce는 ServiceNow와 Adobe가 2%를 얻었음에도 불구하고 Braze에 대한 56억 6천만 달러 거래에서 2%를 철회했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792503443,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=00c89d8811e1f08eef06c56dc15d26447343c61555cc5672c937beae38808e67",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e1495d7d686ab763aceb",
          "headline": "Salesforce, 인수가 계속됨에 따라 Braze를 56억 달러에 전액 현금 거래로 인수",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792502213,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=61f3339e45a25197d7e8629434c16719a06b922cc15f27855729c69cd16d7b6e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8ffb356474c5c03f8aa1",
          "headline": "CRM 주가 하락: Salesforce, AI 마케팅 강화를 위해 56억 6천만 달러 규모의 Braze 거래 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792502103,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7c462b685c6ac6693a06c6eaf9ee5bdf56b178bb040e0f99637f57bc4304017",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792601708,
      "signal": "중립·확인 대기",
      "netScore": 1.25,
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
          "eventId": "03b396211e0fe3e80270",
          "headline": "Palantir Rises 4% as Software Stocks Rally; ServiceNow Gains 3%, Salesforce Holds Flat",
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
        },
        {
          "eventId": "1a13806de3f188b5408c",
          "headline": "Federal Cloud Partnership이 Palantir Stock Narrative를 변경합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792556701,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6609ad07a119dbe75c27d4276330b3cfc0b4c33d63c0446a3b547d95767df9e0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "68d176b235ebbe3b2705",
          "headline": "Palantir Technologies (PLTR), Knox 파트너십 체결, 주식 가격이 완전히 책정되나요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792552818,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4f4d49c9f26a81da3c76ad11024ad47d7fc60da283b010ce88561eac2f0643e0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fabac6490a7f1432285f",
          "headline": "AI Rout이 식으면서 Nasdaq 100은 거의 한 달 만에 최고의 날을 맞이했습니다 — AMZN, BE, CRWV, AAPL, PLTR 초점",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792450823,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2c49c35a756adb72db9233d431d447e8200033fa768a6a031f1d0857617d958",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792608320,
      "signal": "우호적 변화",
      "netScore": 8.18,
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
          "score": -2.27,
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
          "eventId": "ce4de9d37058e8724f20",
          "headline": "Nvidia’s $1.1 Billion KYEC Deal Is the Small Number in a $279 Billion Supply Bet",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792608320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=737a12aa1e274557876c52bec25cb7058bb1587718f6982bdc519983d0ca8160",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "59874c41c96001d8e8b0",
          "headline": "Alphabet Has Lost About $860 Billion Since Its Peak, Nearly a Whole Walmart. Apple Has Avoided the AI Race and Is Near All-Time Highs.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792598778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38f1ac5655414ebb9f503108f276a5e1b66747bba211d0fc9a6c65815630b771",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8a4c23979d2f08a3ba60",
          "headline": "AMD vs. Nvidia. 1 Metric Proves Which Is the Best Stock.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792596900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c998c48b5282eb333f3fff9ff77e7388dea045b303e0f412843f2fd0b9759bd",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "af20c168dadff23b9a8a",
          "headline": "Elon Musk May Have Ended the October AI Crash as NVIDIA, Intel, and SanDisk Rally after One SpaceX Quote",
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "1134e2b063a1faf056b0",
          "headline": "TD Cowen은 Nvidia가 Oracle의 데이터 센터 자금 조달을 돕고 있다고 생각합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586754,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0e1953e059e068a96186ca440d1acaaaf2c60dc1ea55e69609929fd1e358bce",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "52ef9d769b15ea1b97b2",
          "headline": "Zacks 투자 아이디어 주요 특징: Taiwan Semiconductor Manufacturing, ASML 및 BWX Technologies",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792585560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15707185a21230d63d4127b9e760898f2b2db7ab34cb6510f3bf54d0ba2e8d62",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "a4e0cc48154b70841ef7",
          "headline": "GE Vernova의 1,760억 달러 백로그 설명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792573800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d811057d36492f9a6f387d3789c817f50d40e11c1dd75faa47cfb9ff4a97e952",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "aa189df1adcd5f080ada",
          "headline": "ASML, AI 주식 투자자를 위한 환상적인 소식 발표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792535402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65ac30a4f1d2621054a16ce8d522fcaa91da121242ae9e192baabd062408f419",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "549f47214d7241564468",
          "headline": "아마존 vs 알파벳: 지금 당장 매수하는 것이 더 나은 \"매그니피센트 세븐\" 주식은 무엇입니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792534502,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d48ac5d0639424d1a7b3caec6ecf5b2b7ddf99ab2287fbc0de0ea40172572acb",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f96c0e625871e943312c",
          "headline": "Taiwan Semiconductor Manufacturing (TSM)은 개인적으로 투자하기 위해 회사를 떠나는 펀드 매니저를 모집합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792530584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efacde59aa4d6ffc0d005195757b9803f041edf06b2c7e12212f161ac59533ed",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 23,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792598778,
      "signal": "우호적 변화",
      "netScore": 9.51,
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
          "score": -1.05,
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
          "eventId": "59874c41c96001d8e8b0",
          "headline": "Alphabet Has Lost About $860 Billion Since Its Peak, Nearly a Whole Walmart. Apple Has Avoided the AI Race and Is Near All-Time Highs.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792598778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38f1ac5655414ebb9f503108f276a5e1b66747bba211d0fc9a6c65815630b771",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "4ba14f93f316d92eb9ba",
          "headline": "Anthropic Has Locked In Over $600 Billion of Computing, More Than Intel Is Worth. It Still Wants More and That’s Big News for AMD.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792595780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e16ad8d5c99aece4ced267f91a11eb6605a8e01c36e1ce3f36a2f8551b997c55",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "119b05f0491e549cd6aa",
          "headline": "AMD, QCOM Targets Raised While INTC, COHR Face Cuts — Susquehanna Sees ‘Modest Upside’ For Chip Earnings",
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1134e2b063a1faf056b0",
          "headline": "TD Cowen은 Nvidia가 Oracle의 데이터 센터 자금 조달을 돕고 있다고 생각합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586754,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0e1953e059e068a96186ca440d1acaaaf2c60dc1ea55e69609929fd1e358bce",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "52ef9d769b15ea1b97b2",
          "headline": "Zacks 투자 아이디어 주요 특징: Taiwan Semiconductor Manufacturing, ASML 및 BWX Technologies",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792585560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15707185a21230d63d4127b9e760898f2b2db7ab34cb6510f3bf54d0ba2e8d62",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "a4e0cc48154b70841ef7",
          "headline": "GE Vernova의 1,760억 달러 백로그 설명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792573800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d811057d36492f9a6f387d3789c817f50d40e11c1dd75faa47cfb9ff4a97e952",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "bedbcd845618a1bbb666",
          "headline": "Cathie Wood의 Ark Invest는 지난 분기에 Tesla, AMD 및 ARKK 자산의 약 18% 를 차지하는 새로운 SpaceX 지분으로 포트폴리오를 $ 154억으로 늘렸습니다. 그녀의 집중된 베팅이 성과를 거두고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792563600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bc2a190a66617284b7b837954a09524416c000a2e85c2af8031adb67f4ca0bee",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aa189df1adcd5f080ada",
          "headline": "ASML, AI 주식 투자자를 위한 환상적인 소식 발표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792535402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65ac30a4f1d2621054a16ce8d522fcaa91da121242ae9e192baabd062408f419",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f96c0e625871e943312c",
          "headline": "Taiwan Semiconductor Manufacturing (TSM)은 개인적으로 투자하기 위해 회사를 떠나는 펀드 매니저를 모집합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792530584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efacde59aa4d6ffc0d005195757b9803f041edf06b2c7e12212f161ac59533ed",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "bf74af7c8b3df8a61500",
          "headline": "Anthropic은 또 다른 450억 달러 규모의 AI 거래를 논의 중입니다. Nvidia는 큰 승자가 될 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792525441,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e7614a1c2f40846e8541b05cc5535d834a3170da285d81e21d784000cd103613",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792593029,
      "signal": "중립·확인 대기",
      "netScore": -1.62,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.52,
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
          "eventId": "119b05f0491e549cd6aa",
          "headline": "AMD, QCOM Targets Raised While INTC, COHR Face Cuts — Susquehanna Sees ‘Modest Upside’ For Chip Earnings",
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
        },
        {
          "eventId": "dba1ce9366b704763571",
          "headline": "SpaceX CEO Elon Musk가 AI의 진정한 제약은 칩이 아니라 전력과 냉각이라고 말한 후 BE Stock이 에너지 랠리를 주도합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792545801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2dae608d19f7468857e723c7cb48b098105a7e402e363e493d2330a93b099f4",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0576611f612a8c06288b",
          "headline": "NVIDIA가 주목을 받지만 Broadcom은 더 큰 놀라움을 선사할 수 있습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792503017,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b5af670081a927e2468e1d3008c68af70dc5c3e2b902101d7d6a313edf2a67a2",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6442c510c3e64c7acb42",
          "headline": "Broadcom, 글로벌 운영 지원을 위해 FedEx와 지속적인 인프라 계약 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792501200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dac0d99e77c6a45c3f613ed28c686344503f3c88fd3d1408b8f71e14605f26be",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9463a4fe79bfe6761413",
          "headline": "FedEx, 확장된 협력 하에 Broadcom의 인프라 소프트웨어 포트폴리오 계속 활용",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792487054,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c8b08edb11558d8493814c5309fa741999649b83ea63fa4f255f472acb2227e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "dc714bb527c91d469cce",
          "headline": "AVGO 주식은 10년간의 Docomo 거래 이후 밤새 상승했지만 소매업은 CEO의 AI '카지노' 발언보다 우위를 유지했습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792465702,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=830600d0ab1059368bebd62f0917350abcd36044def65619d3975d1db6c77e19",
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
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792591108,
      "signal": "주의 강화",
      "netScore": -2.52,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "eventId": "3122a969bb065d762abf",
          "headline": "Qualcomm (QCOM): Automotive Growth Meets Pressure on Handset Earnings",
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
        },
        {
          "eventId": "1a1744250bb549c9e8a8",
          "headline": "S&P 500, Dow는 수익 시즌이 시작됨에 따라 상승하고 SpaceX는 Nasdaq 영업 시간 외 지원 — SPCX, BA, MMM, NFLX, QCOM 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792540077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=140e19bf8785e4c9553980a5aa5e4962e59391604d10894c3f0b722ae84edb24",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "185877cbeb9150390e48",
          "headline": "마이크로소프트, 알파벳, 골드만삭스, 토큰화된 주식에 반대하는 기업 목록에 합류",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792527364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff421581c018f3402bb5ad1299329d569d3dd4c647b80838d83c89620729be28",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "67f7a539c9bc5d7990a4",
          "headline": "Qualcomm, 성과 중심 점검을 통해 글로벌 정리해고를 실시할 것으로 알려짐",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792519635,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=57aac6b44d03630ef98220890683ea170489e9be169e2c169f3d64dee028a9ac",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ee26a1916b0c6d8898c4",
          "headline": "지금 애플 주식을 사야 할까요, 아니면 하락을 기다려야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792509541,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d900116cb4f7aa1c70fb3b960f3e6b2e95c1c557cc1fa75f77385a8693392631",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "c11ece71bb149befb39a",
          "headline": "Apple, 10월 28일 'Pro And Tell' 이벤트 확인 — 최초의 터치스크린 MacBook Pro 예상",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792431800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=522773942a919b923a94eb66756e848a851f89569c35a3e3afdb53e4bc65736e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1792623348.0271804,
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
      "updatedAt": 1792623348.0271804,
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792608722,
      "signal": "주의 강화",
      "netScore": -9.39,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": -1.22,
          "level": "주의"
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
          "eventId": "f73e73a5602c503d591c",
          "headline": "ASML Has Incredible News for Nvidia Stock and Micron Stock Investors",
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
          "eventId": "4f6145074c5ef7b53ca3",
          "headline": "Apple vs. SK hynix: Which Tech Stock Is a Better Buy in 2026?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792601582,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2461f787aa0d833bbe8552b28a586e7d204ad0d3df7dfa46304235ebd2634b98",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8a4c23979d2f08a3ba60",
          "headline": "AMD vs. Nvidia. 1 Metric Proves Which Is the Best Stock.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792596900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c998c48b5282eb333f3fff9ff77e7388dea045b303e0f412843f2fd0b9759bd",
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
          "headline": "Anthropic Has Locked In Over $600 Billion of Computing, More Than Intel Is Worth. It Still Wants More and That’s Big News for AMD.",
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
          "headline": "Elon Musk May Have Ended the October AI Crash as NVIDIA, Intel, and SanDisk Rally after One SpaceX Quote",
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
          "eventId": "ee45c2b9085941aef646",
          "headline": "Arista Networks vs. Datadog: Which Technology Stock Is a Better Buy in 2026?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792593644,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=701f310f04ba1f08eed26771d996652dba505f5b3c73f58ef6c915979f9e0e03",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "119b05f0491e549cd6aa",
          "headline": "AMD, QCOM Targets Raised While INTC, COHR Face Cuts — Susquehanna Sees ‘Modest Upside’ For Chip Earnings",
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
        },
        {
          "eventId": "f0dd6c6d4ba9fbe05264",
          "headline": "마이크론이 아닙니다. 샌디스크가 아닙니다. 이 스토리지 주식은 동일한 AI 인프라 물결을 타고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792517700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70d3e1d0872b6ee59b501ee3152b6d9ed8027582e16905468d03a356033ce027",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9f1a14c5b4f90e510e68",
          "headline": "인텔 대. 마이크론: 중국 라이벌 CXMT의 진전에 더 많이 노출되는 사람은 누구입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792514712,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0714160c956c1e36fb80d4b05e2bc5646f21aa5300978c36a447459b96639889",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792585560,
      "signal": "중립·확인 대기",
      "netScore": 0.36,
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
          "score": 0.0,
          "level": "중립"
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
          "eventId": "52ef9d769b15ea1b97b2",
          "headline": "Zacks 투자 아이디어 주요 특징: Taiwan Semiconductor Manufacturing, ASML 및 BWX Technologies",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792585560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15707185a21230d63d4127b9e760898f2b2db7ab34cb6510f3bf54d0ba2e8d62",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f96c0e625871e943312c",
          "headline": "Taiwan Semiconductor Manufacturing (TSM)은 개인적으로 투자하기 위해 회사를 떠나는 펀드 매니저를 모집합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792530584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efacde59aa4d6ffc0d005195757b9803f041edf06b2c7e12212f161ac59533ed",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bcd0a132340afbf71af8",
          "headline": "Texas Instruments 및 Lam Research 수익 보고서: AI 장비 붐이 아날로그 반등을 만나다",
          "eventLabel": "실적 발표",
          "publishedAt": 1792497003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f25362727c7acb6e5ebc787851c7ca738354347168475017152ae4d1282fc37d",
          "factorChanges": {
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792608722,
      "signal": "주의 강화",
      "netScore": -6.85,
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
          "score": -3.67,
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
          "eventId": "f73e73a5602c503d591c",
          "headline": "ASML Has Incredible News for Nvidia Stock and Micron Stock Investors",
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
        },
        {
          "eventId": "52ef9d769b15ea1b97b2",
          "headline": "Zacks 투자 아이디어 주요 특징: Taiwan Semiconductor Manufacturing, ASML 및 BWX Technologies",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792585560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15707185a21230d63d4127b9e760898f2b2db7ab34cb6510f3bf54d0ba2e8d62",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "82d90a3a8c6ca95f395e",
          "headline": "ASML은 CFO가 중국 규제에 맞서 싸우면서 기록적인 Q3 이후 상승: “상식이 우세할 것입니다”",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792577522,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b80fbecc9d6c7e486e34a72c594428ee7da3c1b7b76f5c71024a2dffb7a5cad9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "54bc9020bb7c90036444",
          "headline": "Apple 대 ASML: 2026년에는 어떤 기술주를 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792497601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fbc85a70aebb4549f22f8c830881dc7ff6d9e4916c01327b354afe1c8e058ef7",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1792623348.0271804,
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
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792604487,
      "signal": "중립·확인 대기",
      "netScore": -0.9,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -0.17,
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
          "eventId": "7f609b4b4352b6534aff",
          "headline": "Intel’s $28B Ohio Chip Project Hits Construction Milestone After Years Of Delays — Arizona Fab Targets 2028 Start",
          "eventLabel": "실적 발표",
          "publishedAt": 1792604487,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=09a241c5532847859dd335abef472930a78c2640d951d6c94ea750d0fc53fe6f",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "119b05f0491e549cd6aa",
          "headline": "AMD, QCOM Targets Raised While INTC, COHR Face Cuts — Susquehanna Sees ‘Modest Upside’ For Chip Earnings",
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
          "eventId": "dba1ce9366b704763571",
          "headline": "SpaceX CEO Elon Musk가 AI의 진정한 제약은 칩이 아니라 전력과 냉각이라고 말한 후 BE Stock이 에너지 랠리를 주도합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792545801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2dae608d19f7468857e723c7cb48b098105a7e402e363e493d2330a93b099f4",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "396fa2979e0c43cb1504",
          "headline": "LRCX SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1792508400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000052/lrcx-20261021.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "a1aab4850ad3552dcd2f",
          "headline": "BE 주가 밤새 하락: Bloom Energy의 가치 평가는 3분기 실적에 앞서 집중됩니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1792476892,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e27903826eae789ac1f92317410288da15e1a7b85b79f679d95fd4d095c5c947",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bdf58dad04f3050349f7",
          "headline": "Micron 대 Lam 연구: 도구 공급업체를 구매하면 메모리 주기 위험이 줄어듭니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792436224,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6e86ea4141ff54d14491414a41d9714f577c17d27b8152fd2d7e7384c608ce8c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1792623348.0271804,
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
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792608722,
      "signal": "우호적 변화",
      "netScore": 6.87,
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
          "eventId": "f73e73a5602c503d591c",
          "headline": "ASML Has Incredible News for Nvidia Stock and Micron Stock Investors",
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
          "eventId": "8b1053e9b0f587ea2a81",
          "headline": "Micron helps revive U.S. metal refining as China dominates supply",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792601220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd52523004832ac008391f828884478c3a852743b0a0b8f4abace72f81a20a7a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "59874c41c96001d8e8b0",
          "headline": "Alphabet Has Lost About $860 Billion Since Its Peak, Nearly a Whole Walmart. Apple Has Avoided the AI Race and Is Near All-Time Highs.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792598778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38f1ac5655414ebb9f503108f276a5e1b66747bba211d0fc9a6c65815630b771",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "d18b5aaed4030775de78",
          "headline": "예측: Micron 주식에 투자된 월 150달러는 2030년 말까지 이만큼 가치가 있을 것입니다",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792588800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab74fae28a9f094f1703db72fb73c9624a20c602eb768cf61367a4da1dd51d07",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "1134e2b063a1faf056b0",
          "headline": "TD Cowen은 Nvidia가 Oracle의 데이터 센터 자금 조달을 돕고 있다고 생각합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792586754,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a0e1953e059e068a96186ca440d1acaaaf2c60dc1ea55e69609929fd1e358bce",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "52ef9d769b15ea1b97b2",
          "headline": "Zacks 투자 아이디어 주요 특징: Taiwan Semiconductor Manufacturing, ASML 및 BWX Technologies",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792585560,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15707185a21230d63d4127b9e760898f2b2db7ab34cb6510f3bf54d0ba2e8d62",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "a4e0cc48154b70841ef7",
          "headline": "GE Vernova의 1,760억 달러 백로그 설명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792573800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d811057d36492f9a6f387d3789c817f50d40e11c1dd75faa47cfb9ff4a97e952",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2677d35bbb9579dbb124",
          "headline": "마이크론과 엔비디아는 S&P 500 수익 성장의 두 가지 가장 큰 원동력입니다. 그들의 주식은 매수되나요?",
          "eventLabel": "실적 발표",
          "publishedAt": 1792569841,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf8968c993b182d59962150d7520476827cd6985884ee35f74d3751a08f46175",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aa189df1adcd5f080ada",
          "headline": "ASML, AI 주식 투자자를 위한 환상적인 소식 발표",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792535402,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=65ac30a4f1d2621054a16ce8d522fcaa91da121242ae9e192baabd062408f419",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "f96c0e625871e943312c",
          "headline": "Taiwan Semiconductor Manufacturing (TSM)은 개인적으로 투자하기 위해 회사를 떠나는 펀드 매니저를 모집합니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792530584,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efacde59aa4d6ffc0d005195757b9803f041edf06b2c7e12212f161ac59533ed",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 25,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792595065,
      "signal": "중립·확인 대기",
      "netScore": 1.54,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.05,
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
          "eventId": "af20c168dadff23b9a8a",
          "headline": "Elon Musk May Have Ended the October AI Crash as NVIDIA, Intel, and SanDisk Rally after One SpaceX Quote",
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
        },
        {
          "eventId": "33fff44de311f6b51037",
          "headline": "SanDisk가 귀하의 포트폴리오에 대한 가치주가 될 수 있습니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1792545014,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b344e6deb60f52c7bb332c9d58eb61f3bb551052ca53cad8b2c92389b3739420",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c9421d067cb5124143a9",
          "headline": "SK하이닉스, 서울 매각으로 AI 지출 공포 다시 살아나면서 4% 하락 SanDisk 하락 3%, Micron 완화",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792503044,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8726e579aa0e69836d74ddb9c4077f531ab99020418ea320d926351a7c2ec603",
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
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792527364,
      "signal": "주의 강화",
      "netScore": -6.92,
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
          "eventId": "185877cbeb9150390e48",
          "headline": "마이크로소프트, 알파벳, 골드만삭스, 토큰화된 주식에 반대하는 기업 목록에 합류",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792527364,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff421581c018f3402bb5ad1299329d569d3dd4c647b80838d83c89620729be28",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee26a1916b0c6d8898c4",
          "headline": "지금 애플 주식을 사야 할까요, 아니면 하락을 기다려야 할까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792509541,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d900116cb4f7aa1c70fb3b960f3e6b2e95c1c557cc1fa75f77385a8693392631",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "4de3c4f0b24b3415c4ce",
          "headline": "Cramer는 데이터 센터 용량이 줄어들면 SanDisk와 Western Digital이 최악의 주식이라고 경고합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792495521,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=02effdae69d202ca0ef91538f492a96670a5bc3261c42e6c6ffaf666292f3f54",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c11ece71bb149befb39a",
          "headline": "Apple, 10월 28일 'Pro And Tell' 이벤트 확인 — 최초의 터치스크린 MacBook Pro 예상",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792431800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=522773942a919b923a94eb66756e848a851f89569c35a3e3afdb53e4bc65736e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792593644,
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
          "eventId": "ee45c2b9085941aef646",
          "headline": "Arista Networks vs. Datadog: Which Technology Stock Is a Better Buy in 2026?",
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
        },
        {
          "eventId": "e894c888b199e01d972f",
          "headline": "Arista Networks vs. Axon Enterprise: 2026년에는 어떤 기술주를 구매하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792552561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=317db81f856e0553821b07f0de02c5a5a0de38ff197d9689967b873c6b76066d",
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
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792593029,
      "signal": "주의 강화",
      "netScore": -3.92,
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
          "eventId": "119b05f0491e549cd6aa",
          "headline": "AMD, QCOM Targets Raised While INTC, COHR Face Cuts — Susquehanna Sees ‘Modest Upside’ For Chip Earnings",
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
          "eventId": "57fe5ee56128b32c90fb",
          "headline": "3M, 확장된 Amazon 데이터 센터 거래로 6% 증가 및 수익 개선 일관된 가장자리는 더 높고 코닝은 평탄함을 유지합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1792508325,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6129f56cc87faa8ab520b296dffab50edcea140b5d320765804380efcaa18679",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "844472acb46e221b94d3",
          "headline": "AI 섬유 부족으로 인해 가격이 상승함에 따라 GLW, VZ, COHR에 주목 - TrendForce는 2028년까지 공급 위기를 예상",
          "eventLabel": "공급망 문제",
          "publishedAt": 1792429764,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7338b03f36359df8ead95869e3f85bb510ab485bcb98b7cf16f7f99405289a2f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1792623348.0271804,
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792586700,
      "signal": "우호적 변화",
      "netScore": 3.49,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "47999d60e8e78b41fe67",
          "headline": "GE Vernova, 2029년 가동 예정인 코트디부아르의 372MW 송곤 발전소에 9E 가스 터빈 공급 주문 확보",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792467183,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d1921842c6cc0a893491608a8f01386edc57e0dab4c875ce81b198c4871ff108",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1792623348.0271804,
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
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792579962,
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
          "eventId": "f3e1640352ca330e77b5",
          "headline": "Bloom Energy 대 Vistra: 2026년에는 어떤 에너지 주식을 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1792579962,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac12347eb89d0e11da68847692774635282e11e248ca66d01f8d30858bc0f812",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1792623348.0271804,
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
      "updatedAt": 1792623348.0271804,
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
      "updatedAt": 1792623348.0271804,
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
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792430100,
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
          "eventId": "0e3ae56299bc90968508",
          "headline": "Vertiv 주식은 1년 후 어디에 있을까요?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1792430100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=98b26193ea3693ccac8d7387ce196d9b2b973cc9712f3c2ac7e8f2c8b5ae6a25",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1792623348.0271804,
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
      "updatedAt": 1792623348.0271804,
      "dataAsOf": 1792608873,
      "signal": "주의 강화",
      "netScore": -3.13,
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
          "eventId": "66cd144f443fbc1831ac",
          "headline": "Micron Is Up 221% in 2026 and Seagate Is Up 155%: Take Profits, or Hold On for the Ride?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792608873,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f37320366f7f91aa723b4a021b0c2817f8909ea8d624f70f7bb98b7662f2a762",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ca7d9db8b15b79ee638a",
          "headline": "Morgan Stanley, Western Digital 목표 축소, HDD 매각 속에 Seagate 인상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1792501993,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=63925b9f98713884274bf59082b3e8777cfea4de703cd5b3685ad3240b801d2e",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1792623348.0271804,
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
      "updatedAt": 1792623348.0271804,
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
      "updatedAt": 1792623348.0271804,
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
