// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1787270820.06323,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787119120,
      "signal": "주의 강화",
      "netScore": -3.08,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -1.05,
          "level": "주의"
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
          "score": -2.1,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
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
        },
        {
          "eventId": "9e2b6f889088611db9ed",
          "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786563660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
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
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787221144,
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
          "score": 3.85,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": 0.0,
          "level": "중립"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": 2.1,
          "level": "우호적"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.35,
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
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "db589d1617495ab5aeee",
          "headline": "Marvell은 Alphabet과의 새로운 AI 거래에도 불구하고 매우 위험합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787148912,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1fc826bb58c12a64eda93eedb38f7fef433fbd62aeeb51b0835e971898cc5918",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "27e4d337f5faf3af65b2",
          "headline": "Marvell은 Alphabet의 거래를 따냈습니다. 모든 것이 변경됩니다(업그레이드)",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787147454,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d43c746f0dbb97241e734fe4bda17e4e10a8f572faa86b8719fb158727659c3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "62b916efd3248dd12ccb",
          "headline": "Marvell은 Google이 최대 122억 달러의 주식을 매입할 수 있는 AI 칩 거래에서 6%의 이익을 얻습니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787137685,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9b4190634fc00669c88233fc42770d49901fdc0f4b44de410eb9b78af92c5fb",
          "factorChanges": {
            "customerConcentration": 2,
            "businessRisk": 1,
            "longTermCompetitiveness": 1
          },
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성"
        },
        {
          "eventId": "c944cc698ca3dfd70ec6",
          "headline": "Broadcom의 라이벌 Marvell, Google이 AI 칩 거래를 성사시킨 후 급등, 122억 달러 규모의 지분 매입 옵션 확보",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787135863,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee610846551e06b5814d7484d6a8749e30197f4ffe09530a339f56f4264a3b15",
          "factorChanges": {
            "customerConcentration": 2,
            "businessRisk": 1,
            "longTermCompetitiveness": 1
          },
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성"
        },
        {
          "eventId": "9e2b6f889088611db9ed",
          "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786563660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6c8c3d2d0c8298a5ccef",
          "headline": "Google의 새로운 Pixel 11은 Gemini를 Apple과의 AI 전화 전쟁의 중심에 놓습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1786528801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5dde94cd3b8300f913fde5fb98794701c69bc5e0d4e729aee0641f5b85b2c50e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "abc6306b4550f2d5c686",
          "headline": "Ryanair, 5년 Google Cloud 계약 체결, 항공사 운영에 AI 활용 확대",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1786489355,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=865400540defe3092d219e3951fa3b1a39e99073cbc21ff669483787002eef4b",
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
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786563660,
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
          "eventId": "9e2b6f889088611db9ed",
          "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786563660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787161425,
      "signal": "우호적 변화",
      "netScore": 2.94,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.7,
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
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787212801,
      "signal": "중립·확인 대기",
      "netScore": 1.68,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.57,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.45,
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
        },
        {
          "eventId": "6c8c3d2d0c8298a5ccef",
          "headline": "Google의 새로운 Pixel 11은 Gemini를 Apple과의 AI 전화 전쟁의 중심에 놓습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1786528801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5dde94cd3b8300f913fde5fb98794701c69bc5e0d4e729aee0641f5b85b2c50e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ab0f1b4c65f4fb3e09cc",
          "headline": "보고된 Apple 공급업체 위협에도 불구하고 마이크론 주가 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786392471,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51fea410f251d2efb829da27462a179e0ef0fcf273b56fb0a616fd68fe522364",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d77dd36955dddea615a2",
          "headline": "애플이 전 세계적인 부족 상황 속에서 아이폰, 맥북용 중국산 메모리 칩을 테스트하고 있는 것으로 알려졌습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1786385747,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29aaf140cb2ed909321ab2a99380f77b4f570ee5733f216a0da8df65ad82f421",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ccd63433aa056ab856db",
          "headline": "MSFT 주식, 올해 최고 수준 기록: Microsoft, AI 칩 생산량 증가 보도",
          "eventLabel": "실적 발표",
          "publishedAt": 1786380865,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d83f4d38a5ddf96afc007fea6d9b45885d617167e90700791ab7fc9ecca51282",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4a50c58ef79c47b80bde",
          "headline": "Apple, iPhone, MacBook용 CXMT 중국 메모리 칩 테스트",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786368357,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6fa7b31205424356e183cae0c4e58fa7d136ba7b686dc4c903ac8ab01cb3be49",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e7ffd7ef8646b89eb67f",
          "headline": "AI 수요로 인해 글로벌 공급이 부족해지면서 Apple이 CXMT 메모리 칩을 테스트한 것으로 알려졌습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786357009,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=daec81ef0e6a5b48ede68e5921b32f148fa8271401fac142ced8652aa74cc2ce",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2b49f3b84ef220e51323",
          "headline": "시장 잡담: Apple, 글로벌 공급 위기 속에서 CXMT 메모리 칩 테스트",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786349937,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35a60baacd08c1e279f21460cc9bb9c537b8326f5544692a5b716036f1438aee",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "972a5f8a7fe157a478d9",
          "headline": "Apple, AI 기반 공급 위기 속에 중국의 iPhone 및 Macbook용 CXMT 메모리 칩 테스트: 보고서",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786346136,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=92efb754a753730841ca727f6ed9315e774c2b8d873f1638b4967975962a14c5",
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
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787108869,
      "signal": "중립·확인 대기",
      "netScore": 1.05,
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
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787219040,
      "signal": "우호적 변화",
      "netScore": 10,
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
        },
        {
          "eventId": "eea78530785dee53ba26",
          "headline": "Oracle 파트너십을 맺은 Quantinuum CEO: '빙산의 일각'",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786536581,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d79f08414cca50954c6b154b44a0879cf7c5103e710110d575988f156f77dc86",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d75d48ab5148f28499ac",
          "headline": "Quantum Cloud 경쟁이 가열됨에 따라 Quantinuum, Oracle 계약 성사: '엔터프라이즈 컴퓨팅의 다음 단계'",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786514798,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22aa240f54a202d18a701589ae11d3cc64385d6f83e41a447c68b041e86befd6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "1260edb76bf6c45b217f",
          "headline": "Quantinuum, Oracle Cloud 인프라에 Quantum 컴퓨팅을 도입하기 위해 Oracle과 다년간의 전략적 파트너십 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1786464233,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d734868e811b464cf00c58c7a1cf76cbab3039307bb6833dd33fa42f4d5ffab4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787232003,
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
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786427893,
      "signal": "중립·확인 대기",
      "netScore": 0.83,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.17,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
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
          "eventId": "5276eb10acfa1ed513bf",
          "headline": "비교 연구: Palantir 기술과 소프트웨어 산업의 업계 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1786427893,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=54ca110a49a968016a935b5cb0a0753251474f61448e8e40279b6248aefa4127",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "12f994e4f2ddb8465c2a",
          "headline": "USA Today, Palantir와 협력하여 청중에 대한 \"실행 가능한 인텔리전스\" 확보",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786291260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2924d64c2d603f07bcf03f9ce4729aed346f0cd5375b69ad2c89d7ce77376fb0",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787232003,
      "signal": "우호적 변화",
      "netScore": 10,
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
          "eventId": "0adb305fd30d06727560",
          "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787232003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "10ea61204d3816dd5c72",
          "headline": "Micron, 메모리 및 AI 발전을 위해 100억 달러 규모의 연구실 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787220296,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51b5addae5e8d30c7c91c2a81c0092a081a4dbe5ff962ef44222663b91c57f83",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "776a3e679c69bb87afdf",
          "headline": "CoreWeave, Nvidia 칩을 위한 월스트리트 경쟁으로 수십억 달러 규모의 Hudson River 거래 성사",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787219841,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8cfc4b742ab1b52daa98e5678147ad342d5e9dcaefdd61ad243bcce4ee50dc4c",
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "60ec89bd736ba90c8275",
          "headline": "'중국은 AI 경쟁이 확대됨에 따라 NVIDIA H200 칩에 대한 제한을 완화합니다. 베이징, 미국 라이벌을 따라잡기 위해 선도적인 기술 그룹을 돕기 위해 소규모 선적 허용 - Financial Times",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787157622,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3b54bed45cae16d5770db0c5b6a6167e474b3acd789e09a814bf92dc512a5f8",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "d1ceb5ae4cce111fd630",
          "headline": "AMD, 팀 라이언(Tim Ryan)을 이사회에 임명하고, 집주인 은퇴 후 KC McClure 감사 및 재무 위원회 의장으로 임명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787156452,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da69e4b6f7750cb1bbe806db07447d752ca772be9efc07c6e091723c8a097974",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "c035ee54c03279533915",
          "headline": "수요일 AMD 주식에 무슨 일이 일어나고 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787131813,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4e1d89b47e11158614ea23439c8622abbb8fb1d63e7ce00d78c6704ec52140e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "c6839bdecffd2904108e",
          "headline": "'본드 킹' Jeff Gundlach는 Nvidia의 5000억 달러 AI 자금 조달 추진을 바나나가 뒷받침하는 채권에 비유: '잘 늙지 않을 것'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787063256,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52094c7471cfcd697fd91302652b3962d34ceba4bf0941a8289607ca3dbd4a24",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "803236e9c2b77ae14fbf",
          "headline": "Nvidia Q2 미리보기: AI 모멘텀 및 자금조달에 중점을 두고 있으며, 주가는 상당히 평가됨",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787049282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7858199a2f5f922d062b092faed638f58108c496aabdcd9526e78b22f0ba2cd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "f5b406a754cb9ac66bd2",
          "headline": "Jensen Huang은 Nvidia-OpenAI 거래는 '순환 금융'이 아니며 6000억 달러 규모의 컴퓨팅 기회를 보고 있다고 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786972924,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=900390f49533645dc9b523a1294ebbc57eb9f6db3d302b21d82033ca7e266810",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 27,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787232003,
      "signal": "우호적 변화",
      "netScore": 10,
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
          "eventId": "0adb305fd30d06727560",
          "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787232003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "10ea61204d3816dd5c72",
          "headline": "Micron, 메모리 및 AI 발전을 위해 100억 달러 규모의 연구실 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787220296,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51b5addae5e8d30c7c91c2a81c0092a081a4dbe5ff962ef44222663b91c57f83",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "60ec89bd736ba90c8275",
          "headline": "'중국은 AI 경쟁이 확대됨에 따라 NVIDIA H200 칩에 대한 제한을 완화합니다. 베이징, 미국 라이벌을 따라잡기 위해 선도적인 기술 그룹을 돕기 위해 소규모 선적 허용 - Financial Times",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787157622,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3b54bed45cae16d5770db0c5b6a6167e474b3acd789e09a814bf92dc512a5f8",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "d1ceb5ae4cce111fd630",
          "headline": "AMD, 팀 라이언(Tim Ryan)을 이사회에 임명하고, 집주인 은퇴 후 KC McClure 감사 및 재무 위원회 의장으로 임명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787156452,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da69e4b6f7750cb1bbe806db07447d752ca772be9efc07c6e091723c8a097974",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "c035ee54c03279533915",
          "headline": "수요일 AMD 주식에 무슨 일이 일어나고 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787131813,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4e1d89b47e11158614ea23439c8622abbb8fb1d63e7ce00d78c6704ec52140e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "a6de8919bcdd1f1f8e86",
          "headline": "AMD: 희석화 및 내부자 판매",
          "eventLabel": "내부자 매도",
          "publishedAt": 1787073913,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=66ab3affb53046c7710ef217f37050fe03579ce79910d4c241482d9ea6d6c1bc",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "c6839bdecffd2904108e",
          "headline": "'본드 킹' Jeff Gundlach는 Nvidia의 5000억 달러 AI 자금 조달 추진을 바나나가 뒷받침하는 채권에 비유: '잘 늙지 않을 것'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787063256,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52094c7471cfcd697fd91302652b3962d34ceba4bf0941a8289607ca3dbd4a24",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "803236e9c2b77ae14fbf",
          "headline": "Nvidia Q2 미리보기: AI 모멘텀 및 자금조달에 중점을 두고 있으며, 주가는 상당히 평가됨",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787049282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7858199a2f5f922d062b092faed638f58108c496aabdcd9526e78b22f0ba2cd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "cd2e7ecbfb7dbc8e4596",
          "headline": "'Nvidia, OpenAI 데이터 센터에 대한 2,500억 달러 보장 계획 축소' - WSJ Exclusive",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786737713,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e4ded91a95fa6eac7a865682f08a697cc4e7697b87d517e847c997799f0fcb3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 26,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787137685,
      "signal": "주의 강화",
      "netScore": -3.3,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.17,
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
          "score": -1.05,
          "level": "주의"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -3.5,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": 0.0,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -1.23,
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
          "eventId": "c944cc698ca3dfd70ec6",
          "headline": "Broadcom의 라이벌 Marvell, Google이 AI 칩 거래를 성사시킨 후 급등, 122억 달러 규모의 지분 매입 옵션 확보",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787135863,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee610846551e06b5814d7484d6a8749e30197f4ffe09530a339f56f4264a3b15",
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
        },
        {
          "eventId": "af6938dfb18b2db7d1d3",
          "headline": "인텔은 올해 176% 상승했습니다. INTC, AMD, Broadcom 및 NVIDIA에서 이익을 얻을 때입니까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1786558077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e79098a589836c215d4ec48d5a9982b2bba6a01043dc03e604391be3f939e6de",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "65b479b8a291d1ea568b",
          "headline": "Broadcom 주식은 비명을 지르는 거래처럼 보입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786377900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0bd94c7c14fd3fe71b54a01fcca801254e906522aa11e0c7ba3d1b767c722541",
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
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787212801,
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
          "score": 3.15,
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
        },
        {
          "eventId": "ff2eb1eb0dfc36d120b8",
          "headline": "Qualcomm의 새로운 EMEA 리더십은 QCOM의 다각화 스토리에서 누락된 고리입니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786551109,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2c735624fb50ccd89a37ffa477005a31cd44fe916a417b6d1b71673a990792f4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "자동차 고객·설계 채택 확대 가능성"
        },
        {
          "eventId": "d33fc914f9bbe3149b2e",
          "headline": "Matrix Asset의 David Katz는 지금이 Qualcomm을 인수하기에 좋은 시기라고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786455466,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35e5940fda796b0603800d298b6751ee37ab5020ddb7526b898657638f9d07a0",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ee66bc5a69428ce051ee",
          "headline": "Qualcomm(QCOM)의 BMW 거래로 다각화에 박차를 가함",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786022389,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=58260b94a197da7687acca00e9780366db549017fa3fdb4257e8b899a50f3f54",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "자동차 고객·설계 채택 확대 가능성"
        },
        {
          "eventId": "e394f2f2a0c2977f339d",
          "headline": "Qualcomm은 주요 재평가에서 하나의 AI 거래가 될 수 있습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1785926043,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=84daa929718cdc9402d777fa025b69b6063afcb9f78591ee979e77c3d86e0a29",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786381956,
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
          "eventId": "29ab68548377ce8754a2",
          "headline": "Arm Holdings(ARM)가 임베디드 AI 도구 거래 및 2026년 1분기 실적 이후 18.2% 상승한 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786381956,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=69da1ad2660a9ed0f7f4fe85689ab1bf558c2fd0500dc843d1fbaf68788baecd",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787221144,
      "signal": "우호적 변화",
      "netScore": 8.0,
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
          "score": -0.35,
          "level": "중립"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 2.27,
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
        },
        {
          "eventId": "db589d1617495ab5aeee",
          "headline": "Marvell은 Alphabet과의 새로운 AI 거래에도 불구하고 매우 위험합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787148912,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1fc826bb58c12a64eda93eedb38f7fef433fbd62aeeb51b0835e971898cc5918",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "27e4d337f5faf3af65b2",
          "headline": "Marvell은 Alphabet의 거래를 따냈습니다. 모든 것이 변경됩니다(업그레이드)",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787147454,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d43c746f0dbb97241e734fe4bda17e4e10a8f572faa86b8719fb158727659c3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "62b916efd3248dd12ccb",
          "headline": "Marvell은 Google이 최대 122억 달러의 주식을 매입할 수 있는 AI 칩 거래에서 6%의 이익을 얻습니다.",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787137685,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c9b4190634fc00669c88233fc42770d49901fdc0f4b44de410eb9b78af92c5fb",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회"
        },
        {
          "eventId": "c944cc698ca3dfd70ec6",
          "headline": "Broadcom의 라이벌 Marvell, Google이 AI 칩 거래를 성사시킨 후 급등, 122억 달러 규모의 지분 매입 옵션 확보",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787135863,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ee610846551e06b5814d7484d6a8749e30197f4ffe09530a339f56f4264a3b15",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786621274,
      "signal": "주의 강화",
      "netScore": -6.52,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
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
          "score": -3.15,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -4.55,
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
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9e2b6f889088611db9ed",
          "headline": "Alphabet, Amazon, Meta Platform 및 Microsoft: 이러한 주식 중 하나는 향후 12개월 동안 상승 여력이 가장 적은 것처럼 보이지만 문제가 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786563660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2743c4a0a093bef477eba4a0a9e9bc0ccb4677ce6623fa9695f0ae0caa6d1d6c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0b7329bb39af563ea655",
          "headline": "분석가는 인텔의 200억 달러 자본 조달이 파운드리 사업에 대한 낙관적인 소식이라고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786538449,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a56b79e8ef5dbb4aafe65515c8c15168b7e26bb4b9a60b5355b74b1b2aff97a5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6fc436f12633afe7242a",
          "headline": "인텔은 주식 공모를 200억 달러로 늘렸습니다. 이것이 ASML에게 좋은 소식인 이유.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1786480020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a1496c06da8bffd21287216bd5731d6fa5deaa76fed8fba32205f989887bb8cb",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "caf1f4262913095e2603",
          "headline": "인텔이 주식 공모를 200억 달러로 늘리는 이유",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1786437660,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cc3e9a957ec2390155fa739eefbc9e828aa31b53ed3f2e4c76dca4ccfd216c26",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3c173510c4bf5d9487e8",
          "headline": "CPI 카운트다운이 시작되면서 S&P 500, Nasdaq, Dow 선물이 혼합되었습니다: INTC, SLS, SPCX, RKLB, ASTS, RIOT, FRMI 주식이 주목받는 이유",
          "eventLabel": "실적 발표",
          "publishedAt": 1786437214,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ed3ebaad429867949cc2a2be8ad01fbb1079e34a31499f03efa43a5b02c3e876",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d6a8f095f7cdaeffff64",
          "headline": "인텔, 200억 달러 규모의 보통주 공모 규모 확대 및 가격 책정 발표",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1786430160,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3e45615d99a87be9bd29c15f1f671bd50e4635bff56307fba51bee855323ce5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "b32f43684339eed27cf2",
          "headline": "수십억 달러 규모의 Nvidia 거래, Intel 주식 매각 이해하기",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786426015,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=38c941030982cc5758c079dedf52662ab3e141ca1d3d4c847971dd0c324a0a8d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "835204f8b1d9c3d38332",
          "headline": "인텔, 주식 공모를 200억 달러로 확대: Dan Niles는 '주요' 파운드리 거래가 임박했다고 예측",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1786419234,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9acb64e1e3d787f92c53be83ed59540ed8f934f055db4cab91563e88e18818ed",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "5e1c1163fec43b04063b",
          "headline": "인텔은 AI 구축 자금을 조달하기 위해 150억 달러 규모의 주식을 매각합니다. 희석은 약 3%입니다. 시판 전 히트율은 5%였습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1786412580,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=33fd80cb9b43fabda35e9bcf6e7189fdfeb18b88cc49bcc03cba67c7ce8f3eb6",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "6d4b64e0156b5fb8544c",
          "headline": "인텔, AI 칩 성장을 위해 150억 달러 규모의 주식 공모",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1786365934,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2d23f0cdf57c68ebf5bf4b25669138210ffe4ca1ca37f65d3547be5090948979",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "12f994e4f2ddb8465c2a",
          "headline": "USA Today, Palantir와 협력하여 청중에 대한 \"실행 가능한 인텔리전스\" 확보",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786291260,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2924d64c2d603f07bcf03f9ce4729aed346f0cd5375b69ad2c89d7ce77376fb0",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786962640,
      "signal": "중립·확인 대기",
      "netScore": 1.74,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "160ab68d66eb78c1da91",
          "headline": "ASML Holding N.V.(ASML) 대 Taiwan Semiconductor Manufacturing Company Limited(TSM): 주요 공급업체는 AI 붐을 따라잡을 수 있다고 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786541926,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=14826e30a1bdde9f772f4961c2bcc688f62b80dd8111d0872189a8cd821cb167",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ccd63433aa056ab856db",
          "headline": "MSFT 주식, 올해 최고 수준 기록: Microsoft, AI 칩 생산량 증가 보도",
          "eventLabel": "실적 발표",
          "publishedAt": 1786380865,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d83f4d38a5ddf96afc007fea6d9b45885d617167e90700791ab7fc9ecca51282",
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
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786541926,
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
          "eventId": "160ab68d66eb78c1da91",
          "headline": "ASML Holding N.V.(ASML) 대 Taiwan Semiconductor Manufacturing Company Limited(TSM): 주요 공급업체는 AI 붐을 따라잡을 수 있다고 말합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786541926,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=14826e30a1bdde9f772f4961c2bcc688f62b80dd8111d0872189a8cd821cb167",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6fc436f12633afe7242a",
          "headline": "인텔은 주식 공모를 200억 달러로 늘렸습니다. 이것이 ASML에게 좋은 소식인 이유.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1786480020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a1496c06da8bffd21287216bd5731d6fa5deaa76fed8fba32205f989887bb8cb",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786658320,
      "signal": "중립·확인 대기",
      "netScore": -1.6,
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
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786439482,
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
          "eventId": "eac6af73eb5b7c9d5eed",
          "headline": "Lam Research(LRCX), 고객 수요 급증으로 AI 공급망 순풍 확보",
          "eventLabel": "공급망 문제",
          "publishedAt": 1786439482,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0b8fba81d9e8efc083788830c1261fbe8d3e8364d9b983ce373d0708ac1c5995",
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
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787232003,
      "signal": "우호적 변화",
      "netScore": 9.68,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "eventId": "0adb305fd30d06727560",
          "headline": "BMO Capital은 Salesforce에서 우수한 성과를 유지하고 목표 가격을 230달러로 높였습니다.",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787232003,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=577f00b4dc8186ab9553d9fc43ff117d55928e5bfa1319baa5b1f9729b9f1c4b",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "10ea61204d3816dd5c72",
          "headline": "Micron, 메모리 및 AI 발전을 위해 100억 달러 규모의 연구실 공개",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787220296,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=51b5addae5e8d30c7c91c2a81c0092a081a4dbe5ff962ef44222663b91c57f83",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "60ec89bd736ba90c8275",
          "headline": "'중국은 AI 경쟁이 확대됨에 따라 NVIDIA H200 칩에 대한 제한을 완화합니다. 베이징, 미국 라이벌을 따라잡기 위해 선도적인 기술 그룹을 돕기 위해 소규모 선적 허용 - Financial Times",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1787157622,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f3b54bed45cae16d5770db0c5b6a6167e474b3acd789e09a814bf92dc512a5f8",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "d1ceb5ae4cce111fd630",
          "headline": "AMD, 팀 라이언(Tim Ryan)을 이사회에 임명하고, 집주인 은퇴 후 KC McClure 감사 및 재무 위원회 의장으로 임명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787156452,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da69e4b6f7750cb1bbe806db07447d752ca772be9efc07c6e091723c8a097974",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "c035ee54c03279533915",
          "headline": "수요일 AMD 주식에 무슨 일이 일어나고 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787131813,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a4e1d89b47e11158614ea23439c8622abbb8fb1d63e7ce00d78c6704ec52140e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "c6839bdecffd2904108e",
          "headline": "'본드 킹' Jeff Gundlach는 Nvidia의 5000억 달러 AI 자금 조달 추진을 바나나가 뒷받침하는 채권에 비유: '잘 늙지 않을 것'",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787063256,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=52094c7471cfcd697fd91302652b3962d34ceba4bf0941a8289607ca3dbd4a24",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "803236e9c2b77ae14fbf",
          "headline": "Nvidia Q2 미리보기: AI 모멘텀 및 자금조달에 중점을 두고 있으며, 주가는 상당히 평가됨",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787049282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c7858199a2f5f922d062b092faed638f58108c496aabdcd9526e78b22f0ba2cd",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "cd2e7ecbfb7dbc8e4596",
          "headline": "'Nvidia, OpenAI 데이터 센터에 대한 2,500억 달러 보장 계획 축소' - WSJ Exclusive",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1786737713,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e4ded91a95fa6eac7a865682f08a697cc4e7697b87d517e847c997799f0fcb3",
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
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787057783,
      "signal": "중립·확인 대기",
      "netScore": 0.83,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "eventId": "dd957c5d66d419f8ec0c",
          "headline": "Sandisk: 순환 라벨의 가격은 책정되지만 계약은 무시됩니다(구매 시작).",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786444989,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6961ffda41f1c85b42a6c9d98c2b6dd3bfcd29e2bbb196e3287a32fa4f81739f",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787212801,
      "signal": "중립·확인 대기",
      "netScore": -0.15,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "851e3639d85604b93bca",
          "headline": "AI 스토리지 거래 협상 후 Western Digital(WDC) 주식은 49% 저평가될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786043455,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=392afc4b9af9cc8c00f82e75f5902de6113b3f8bb6110eb8d907a3d6193a6e60",
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
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1787066566,
      "signal": "주의 강화",
      "netScore": -2.52,
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
          "score": -1.4,
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
          "eventId": "d77dd36955dddea615a2",
          "headline": "애플이 전 세계적인 부족 상황 속에서 아이폰, 맥북용 중국산 메모리 칩을 테스트하고 있는 것으로 알려졌습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1786385747,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=29aaf140cb2ed909321ab2a99380f77b4f570ee5733f216a0da8df65ad82f421",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786628029,
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
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786274516,
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
          "eventId": "a3631458e2e8098eaaa8",
          "headline": "Constellation(CEG)은 원자력 생산량이 감소함에 따라 더 많은 전력 거래를 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786274516,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=af546604142d92c324404f859d1cd66395c5ea5075800be31aa8debfb336adef",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
      "dataAsOf": 1786533168,
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
          "eventId": "dee895d66364a8201fd0",
          "headline": "더 강력한 결과, AI 거래 및 환매는 Vertiv Holdings Co(VRT)의 게임 체인저가 될 수 있습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1786533168,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6dddc2638d017cb8d7e83ad4c4f381765721fc9bb85f187e150b16b49e2914b0",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
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
      "updatedAt": 1787270820.06323,
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
