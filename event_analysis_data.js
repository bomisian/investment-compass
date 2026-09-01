// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1788254478.7731478,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788188205,
      "signal": "주의 강화",
      "netScore": -9.72,
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
          "score": -2.8,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.2,
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
          "eventId": "d80496fe71fac7718962",
          "headline": "Amazon Web Services와 Microsoft가 멀티클라우드 네트워킹에 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788188205,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1fa2617cd13045c45fbc0bd9b671fa784644bf62082b7acd58a057a03008b784",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1d279150f84d72c7bd5a",
          "headline": "경쟁사 분석: 소프트웨어 산업의 Microsoft 및 경쟁사 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1788155919,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=35292225fb919529ddbd9de95bf762221796c52a755d27b88a6460f791599bc5",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5ae8df2fdb7624e86806",
          "headline": "Google은 예산 친화적인 AI 가격으로 Anthropic, Microsoft를 목표로 삼고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788136801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d56be9e39de8b38b8bf7117425a2966b574bfded7adff7d52183193a2fa0cf30",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9e99302e869cf72fd20",
          "headline": "Microsoft, 14개 배당 성장 기업 중 9월에 연간 배당 증가율 발표 예정",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788096438,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d51433a38a0f4890cf4c5e89cba7f152e5467f9b5df585ace5da77fceb26f54f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "741796c3cc0dcd3ac93e",
          "headline": "비교 연구: 소프트웨어 업계의 Microsoft 및 업계 경쟁사",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787896710,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=46ccd9bc9d1f8744b2c555f17933a4776b6b08ac073999fe2ce4752207d026d0",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9faab8aabe78cb7c1704",
          "headline": "Bessent 블랙리스트 위협에도 불구하고 Microsoft, Amazon, Google Court Kimi K3 Maker",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787748592,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c61b3ea63bf2475f36326e1d3e147963041e66d3a17afacd7431ae125672655",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8226704045e4e70472fe",
          "headline": "Microsoft, 장기 HUMAIN 거래를 통해 중동 AI 입지 확장",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787731686,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ccd74fc2c117b4b6acc7a504cc535ecf7cdc01bec7f5626690ced1879d7d8419",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "be963e21eb7b2ee85a86",
          "headline": "Microsoft를 소프트웨어 산업의 업계 경쟁사와 비교",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787723905,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=26d046a2282eca44949316d830a89a9a68252a0edcb298be9b887c2793f1d97d",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "986500052a65c604ca3e",
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b585b42a9cf2f35d19c5",
          "headline": "경쟁사와 비교하여 소프트웨어 산업에서 Microsoft의 위치 이해",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787637509,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=15b2920fc24b9ff12d0e708c84e07adade1edc4a4b664332aed632bf6b491b38",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0b1a1e816c0c815b0943",
          "headline": "엔비디아: 차세대 AI 업그레이드 슈퍼사이클은 독점적이며 GPU보다 큽니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787563834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2b119cb948dbc9e29f9e032f928f4b695c25d81281e877ecbe16b7d4de27e69d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788193597,
      "signal": "주의 강화",
      "netScore": -4.77,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.62,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.45,
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
          "eventId": "af16bde21a9de5d05b27",
          "headline": "Marvell 기술: 더 높은 선명도는 인상적이지 않습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788193597,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b4a71f6c01dc5299eafffd7f57c6315118979a3a2767dca80452da6a9f002aa",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f4db1be0e6cff3f47d76",
          "headline": "Marvell: 알파벳 거래의 잠재력에 대한 시장의 근시안은 당황스럽습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788191921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e98513098d2b5cc14bbfe6fb8c034e9bee1ed220022a46f52ccf43edf7d570d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b0f7c85204f372b5f47b",
          "headline": "마벨 테크놀로지: 나는 이 시장과 격렬하게 동의하지 않는다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788121044,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3b007c538c1fc7a3b43563051c1cb3819993afbb0f92b26a6ffbc956cf84161f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성"
        },
        {
          "eventId": "9e5666be192e65dc0192",
          "headline": "Meta의 $ 180억 정산은 TikTok과 YouTube를 통지합니다. 다음은 누가 발사 라인에 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787965201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c2e66c3961adc17bc6d599cf3432a561b5ad6dca0be837dd804d63714674b59e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "898b714bdb251875f0a7",
          "headline": "글렌뷰 트러스트 (Glenview Trust) 의 빌 스톤 (Bill Stone) 은 알파벳은 AI의 네 가지 기둥을 가지고 있다고",
          "eventLabel": "공급망 문제",
          "publishedAt": 1787925025,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=59a0de77575baf87db7f7e63a713a38646fbaa24a812ab4571d225bdc68879c1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7a2b579ed7dfcef1db7a",
          "headline": "Marvell의 Google AI 칩 거래로 $ 1,200억의 장기 수익 창출 가능: 애널리스트",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787922326,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e77e8cf70ecc98e852fe1fee5b1997608e093632fe46b11766d869fa1791065b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성"
        },
        {
          "eventId": "aeb50a507e2b94a53da7",
          "headline": "투자자들이 클라우드 성장에 대한 AI 지출을 평가함에 따라 알파벳 주가가 수요일 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787752283,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dbbbd79949df8b4e2d169ae00b761bd98851f15ecb988f1faef94de16bf2c4f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9faab8aabe78cb7c1704",
          "headline": "Bessent 블랙리스트 위협에도 불구하고 Microsoft, Amazon, Google Court Kimi K3 Maker",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787748592,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c61b3ea63bf2475f36326e1d3e147963041e66d3a17afacd7431ae125672655",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0249ab7077282660f38b",
          "headline": "Marvell: Google은 AI 논문을 강화하지만 2분기는 프리미엄을 정당화해야 합니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787598125,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d367226c7afd0def73450d4508a39879b195389ed00dee3bb31ce07eeba5fa78",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "16f25a68b20e583bbcdd",
          "headline": "Google Cloud는 Verizon과 협력하여 Verizon 운영에 전체 지분 AI를 배포합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787562291,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=936fd0342e2fccaf85f8413669dd855cd0f2e5c0e83a27a7b4ba1f8274a10eb2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788191921,
      "signal": "중립·확인 대기",
      "netScore": -0.08,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "score": -1.4,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.5,
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
          "eventId": "f4db1be0e6cff3f47d76",
          "headline": "Marvell: 알파벳 거래의 잠재력에 대한 시장의 근시안은 당황스럽습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788191921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e98513098d2b5cc14bbfe6fb8c034e9bee1ed220022a46f52ccf43edf7d570d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4c0b19c9c108c1b72007",
          "headline": "아마존, 스폰서 광고 가격, 경매에 대해 오해의 소지가 있는 광고주에 대한 미국 연방 무역 위원회의 소송을 반박",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788191242,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6fcb3635a2d7b479e61b4db10106767e6bad59d263380ffa6f99148f42d0b392",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d80496fe71fac7718962",
          "headline": "Amazon Web Services와 Microsoft가 멀티클라우드 네트워킹에 협력",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788188205,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1fa2617cd13045c45fbc0bd9b671fa784644bf62082b7acd58a057a03008b784",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fb277a9105e85e82ee78",
          "headline": "'FTC, 아마존 광고주 사기 혐의로 소송 제기' - Wall Street Journal",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788185189,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53363cfc83b1641545d8a0f016e99d5da82b65a71680c7f55d5ab7c9d69ba844",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "fbe84a66acb173fb6b94",
          "headline": "성능 비교: Amazon.com 및 브로드라인 소매 산업의 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787896728,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4b9ece611cc806e1bb748f9ccc87644447c833efe1627b2dbff537f033858949",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9faab8aabe78cb7c1704",
          "headline": "Bessent 블랙리스트 위협에도 불구하고 Microsoft, Amazon, Google Court Kimi K3 Maker",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787748592,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5c61b3ea63bf2475f36326e1d3e147963041e66d3a17afacd7431ae125672655",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0a08530127a14e920458",
          "headline": "Vistra: 시장은 전력 부족에 대한 가격을 책정하고 있지만 계약 수입 업그레이드는 아닙니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787663760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=976b0e6c23eb5be32d099a3f07581040104e6978ae0999653761b44c0b776eb3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "986500052a65c604ca3e",
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1d38271ae482f5f2a27a",
          "headline": "심층 분석: Amazon.com과 브로드라인 소매 업계의 경쟁업체 비교",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787637530,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5cfb51c4985eac3cf6e798fff9e1688a4f85d0595a79270950753b584bc51759",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788175278,
      "signal": "주의 강화",
      "netScore": -7.14,
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
          "eventId": "b8d7cbca777d4bbb71e9",
          "headline": "Inside Meta의 획기적인 청소년 안전 거래: 180억 달러 합의금으로 새로운 청소년 제한 충족",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788175278,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7cd15b699e9e0e3a1e9c0eecc5f46f76c6af87c682fabdb83c6d659e591577e6",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "78e4b843d5367bd1c43d",
          "headline": "Apple 시대의 종말: 팀 쿡의 CEO로서의 마지막 날",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788168521,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ef431aa85514a3f4392c6880b48b8cbec15a10ef463b014e9387c1256ab35d9c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "67617fc04b8ab86cafda",
          "headline": "Futurum CEO Daniel Newman: Apple은 스스로를 재창조해야 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788158834,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f9117493efd2da8cbb8a9bb1378bc33ca9e5e39da9eddff09ab73c63c02a109c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b1db90a46b3ef67c59d7",
          "headline": "그는 Big Tobacco를 이겼습니다. 메타 및 소셜 미디어에 대해 동일한 플레이북이 작동합니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788076802,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b52aac3aa9daaa50b1b2d38dd97cf26c1c6e9fe2ea4ab1783557a3e010a163b5",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9e5666be192e65dc0192",
          "headline": "Meta의 $ 180억 정산은 TikTok과 YouTube를 통지합니다. 다음은 누가 발사 라인에 있습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787965201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c2e66c3961adc17bc6d599cf3432a561b5ad6dca0be837dd804d63714674b59e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "19b6f90ae2097a53bf3d",
          "headline": "메타, 팔란티르, 파라마운트 스카이댄스 헤지 트럼프, 중간고사로 인해 하우스 플립 가능성이 높아짐에 따라 민주당에 구애됨: 보고서",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787891396,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=81ac3ae056abd0aeff19be3eb6c666186fbd81ee85b6f02de3daf41c426b7114",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "37cf64d6776cdffade5d",
          "headline": "'우리는 이것이 좋은 기회라고 생각합니다': Oracle에 대한 황소 사건에 대한 Citi의 Tyler Radke",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787748118,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b153fd3a294b47cc6013e90a0e75946218916114ca195dae8c6a7aa4d9a23ab0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0a08530127a14e920458",
          "headline": "Vistra: 시장은 전력 부족에 대한 가격을 책정하고 있지만 계약 수입 업그레이드는 아닙니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787663760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=976b0e6c23eb5be32d099a3f07581040104e6978ae0999653761b44c0b776eb3",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788100500,
      "signal": "주의 강화",
      "netScore": -8.82,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -1.05,
          "level": "주의"
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
          "score": -2.1,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.8,
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
          "eventId": "6fbd8d2e9fe0aacfe32b",
          "headline": "Amazon은 Jeff Bezos가 CEO에서 물러난 이후 S&P 500 및 Nasdaq-100 지수보다 크게 저조했습니다. 팀 쿡이 물러나면 애플도 9월 1일부터 같은 일을 할 수 있을까?",
          "eventLabel": "실적 발표",
          "publishedAt": 1788100500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=442a98a01d4b544b63f3f6eb062c31499cb76e9914eeb9f5cf5f089d0096eed1",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "afa2160e94cdfee476fa",
          "headline": "Apple, AI 업그레이드가 포함된 새로운 Mac Mini 및 Mac Studio 모델 발표",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787648401,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a7ff5dcc42a625cae9e085a8cce28c6ff2b713534fb0a8a0e99cb5054e003202",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "793da6349f6097241ad7",
          "headline": "경쟁사 분석: 기술 하드웨어, 스토리지 및 주변 장치 산업에서 Apple 및 경쟁사 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787637514,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7eac5c1858f7c0b533e8daafee53dc942f65f199458d44c7af2b2a3b47c080e7",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d46f696c3f04367773db",
          "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787593932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ac2d3b4f3cd6463fb936",
          "headline": "기술 하드웨어, 스토리지 및 주변 장치 업계에서 Apple의 경쟁업체 역학 관계에 대한 문의",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787551109,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bf8e169ffbc4a3dc5fd47415ac9da02ae465db7ff168f6db0384b4507963d06c",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787582385,
      "signal": "주의 강화",
      "netScore": -6.92,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": -0.35,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.15,
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
          "eventId": "3e002d4bd4bee383e3e2",
          "headline": "XPeng Q2: 테슬라보다 나은 점",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787582385,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03e43707ec88b1cbb3d7bf62c30654eef16c1aba21213c240d939987abd8f3b0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0dd95fd7ab7e7dd009c0",
          "headline": "테슬라: SpaceX만이 유일한 희망입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787578131,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6cda9280ff0d8b18a0b37e2fb9355148d2c4ca08ec9b14be1d27ad880b3a0581",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "97b339fbc4dd03105d10",
          "headline": "TSLA 경쟁자? 샤오미, NIO와 함께 자율주행차 사내 칩 개발 경주에 참여",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787553071,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6ab1c7962d91710079f7dd3a76f0e68630e1692b673bf5b0e0dbfc766b509a19",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788199421,
      "signal": "중립·확인 대기",
      "netScore": 0.21,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "0e891ad4686defdef1fd",
          "headline": "오라클은 만성적으로 실적이 저조한 상태로 남아 있을 수 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788199421,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=374000e1f8d016e545b2c5caa232ac45ab390a88e6e763202ce64831a747321b",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7a2b579ed7dfcef1db7a",
          "headline": "Marvell의 Google AI 칩 거래로 $ 1,200억의 장기 수익 창출 가능: 애널리스트",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787922326,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e77e8cf70ecc98e852fe1fee5b1997608e093632fe46b11766d869fa1791065b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 수요와 자본 부담 동시 확대"
        },
        {
          "eventId": "b5e0ff3e25321c0311a4",
          "headline": "오라클: 주식 리바운드에 베팅하는 동안 7% 지급받기",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787916308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9abd8eb771891f0b4d78bb6aba063728820228c1a7e9250e4f77ef0c89547274",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "37cf64d6776cdffade5d",
          "headline": "'우리는 이것이 좋은 기회라고 생각합니다': Oracle에 대한 황소 사건에 대한 Citi의 Tyler Radke",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787748118,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b153fd3a294b47cc6013e90a0e75946218916114ca195dae8c6a7aa4d9a23ab0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787762346,
      "signal": "중립·확인 대기",
      "netScore": -0.28,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "b3634d900eefec19e38f",
          "headline": "세일즈포스 주식은 2분기 더블 비트, 'Claudeforce' 인류애적 파트너십으로 급등",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787762346,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c23072556bdd438138a5dc8e09adda7ebe6e2f3f8ab8da3b1bd9193cefbc1e60",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "eventId": "37cf64d6776cdffade5d",
          "headline": "'우리는 이것이 좋은 기회라고 생각합니다': Oracle에 대한 황소 사건에 대한 Citi의 Tyler Radke",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787748118,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b153fd3a294b47cc6013e90a0e75946218916114ca195dae8c6a7aa4d9a23ab0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "eventId": "2b44c6ce927d537c9229",
          "headline": "Salesforce, 2분기 혼합 보고서 작성, 투자자들은 H2 가속화에 대해 회의적 태도 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787570681,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3bde0ff5073e01d5f7d622876a639af648b59960068b47f82b6e23556dfc694",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787891396,
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
          "eventId": "19b6f90ae2097a53bf3d",
          "headline": "메타, 팔란티르, 파라마운트 스카이댄스 헤지 트럼프, 중간고사로 인해 하우스 플립 가능성이 높아짐에 따라 민주당에 구애됨: 보고서",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787891396,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=81ac3ae056abd0aeff19be3eb6c666186fbd81ee85b6f02de3daf41c426b7114",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788198351,
      "signal": "중립·확인 대기",
      "netScore": 1.25,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.2,
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
          "score": 2.1,
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
          "eventId": "1c80bb1458e82f446d2b",
          "headline": "Nvidia: 이 요새는 감정의 폭풍을 견딜 수 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788198351,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8ebab418c29d8b95bd9d4fbaa3f279658429e6b5908b4d304bc969b388b9c729",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "5971244267261c0821f6",
          "headline": "OpenAI는 Nvidia 지원 AI 데이터 센터 임대를 위해 SB 에너지 보증으로 55억 달러를 받았습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788188511,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ec20d97d1eecd24fe43a985d3bf704b4b8e79d82435f4cd0a3b034fcc1aec9d",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "c928b7bc676dd70cff71",
          "headline": "억만장자 투자자, 이익 77% 급증, 수익 36% 증가로 TSMC 지분 67% 인상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788188315,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=588551889f11d42fff4cd1fb39ae978e4eab4a5e5345f412c9f30956b8920882",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "54c7f5dc1d7281b699f2",
          "headline": "엔비디아: 주가가 수익 성장을 따라잡을 것",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788150180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=acf97cc25e2e683b51527b41f31cd317f3ee2460fb1fa882d0f00520063dc567",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7a2b579ed7dfcef1db7a",
          "headline": "Marvell의 Google AI 칩 거래로 $ 1,200억의 장기 수익 창출 가능: 애널리스트",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787922326,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e77e8cf70ecc98e852fe1fee5b1997608e093632fe46b11766d869fa1791065b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "8dcae7c2e78ca564e8f4",
          "headline": "Nvidia Crushed 수입: Oracle 포지션 두 배 증가",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787919310,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=100a250bec5d579c9263b1b356a51852eeac9f63ca6ecd9eea7d5f69a58421cd",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e8b539a446990e9de047",
          "headline": "씨게이트: 욕심을 부릴 때가 아닙니다 - 더 많은 통합을 앞두고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787919234,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4385ee1e34b196366d48f723daeea011b4a89385d39f461274bcbb10b907f8f3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aeb50a507e2b94a53da7",
          "headline": "투자자들이 클라우드 성장에 대한 AI 지출을 평가함에 따라 알파벳 주가가 수요일 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787752283,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dbbbd79949df8b4e2d169ae00b761bd98851f15ecb988f1faef94de16bf2c4f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "b2df436b97fe71911f33",
          "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787734386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "515b3734bcb10d894b30",
          "headline": "NVDA SEC Form 10-Q 공식 제출",
          "eventLabel": "정기 실적 공시",
          "publishedAt": 1787670000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "b41569f194537cd2d02d",
          "headline": "NVDA SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1787670000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/nvda-20260826.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "f271cdceec7e8f1b202f",
          "headline": "'OpenAI는 자사의 새로운 칩이 테스트에서 Nvidia 프로세서보다 성능이 뛰어날 수 있다고 주장합니다' - Bloomberg",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787652827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=903e5212809579008dc7e473dd0a14501e4d115a30dfe9b9eae22f6c1a3092ed",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 32,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788189545,
      "signal": "우호적 변화",
      "netScore": 8.11,
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
          "eventId": "c2ebf782b459946b819a",
          "headline": "AMD: 아직도 인텔의 점심을 먹고 있다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788189545,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f98b088261d3a83eaf699b4660bb59129dc2f89466316756897a3e101aa6a75b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c928b7bc676dd70cff71",
          "headline": "억만장자 투자자, 이익 77% 급증, 수익 36% 증가로 TSMC 지분 67% 인상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788188315,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=588551889f11d42fff4cd1fb39ae978e4eab4a5e5345f412c9f30956b8920882",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "7a2b579ed7dfcef1db7a",
          "headline": "Marvell의 Google AI 칩 거래로 $ 1,200억의 장기 수익 창출 가능: 애널리스트",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787922326,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e77e8cf70ecc98e852fe1fee5b1997608e093632fe46b11766d869fa1791065b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "aeb50a507e2b94a53da7",
          "headline": "투자자들이 클라우드 성장에 대한 AI 지출을 평가함에 따라 알파벳 주가가 수요일 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787752283,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dbbbd79949df8b4e2d169ae00b761bd98851f15ecb988f1faef94de16bf2c4f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "b2df436b97fe71911f33",
          "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787734386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "986500052a65c604ca3e",
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "d46f696c3f04367773db",
          "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787593932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "98df8fa767f0713581ce",
          "headline": "Nvidia Q2 미리보기: 비트의 가격이 책정되었지만 AI 투자에 대해 궁금한 점이 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787578175,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e89ef21adffa834d2233b744bf1c031a94c4326cda283b7f8d865627254cd23",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "2b44c6ce927d537c9229",
          "headline": "Salesforce, 2분기 혼합 보고서 작성, 투자자들은 H2 가속화에 대해 회의적 태도 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787570681,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3bde0ff5073e01d5f7d622876a639af648b59960068b47f82b6e23556dfc694",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "6d38a6f33bc14bb1a7ec",
          "headline": "엔비디아: AI 칩과 재무화 전략을 모두 갖춘 디스럽터",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787569791,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0665b2f98336b15334e7573b52b4a913863de3d52074a520fe3e0acca62154f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "defd46a5766c56b00a23",
          "headline": "Broadcom: $ 1,000억의 AI 수익은 물어볼 것이 많습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787562824,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d6581f1a65860a5b7f92df7eebf715ff68f6df0ca68e08e235901cb8678b7c9a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 20,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788155927,
      "signal": "주의 강화",
      "netScore": -8.33,
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
          "score": -1.4,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -3.5,
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
          "eventId": "698649ae67bebca5dee5",
          "headline": "반도체 및 반도체 장비 산업의 경쟁업체에 대한 Broadcom의 성과 평가",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1788155927,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cea49b19330bb571858cca3a769968bfa37d47846e66511ee8e9f0f308efbc22",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b0f7c85204f372b5f47b",
          "headline": "마벨 테크놀로지: 나는 이 시장과 격렬하게 동의하지 않는다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788121044,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3b007c538c1fc7a3b43563051c1cb3819993afbb0f92b26a6ffbc956cf84161f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
        },
        {
          "eventId": "7a2b579ed7dfcef1db7a",
          "headline": "Marvell의 Google AI 칩 거래로 $ 1,200억의 장기 수익 창출 가능: 애널리스트",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787922326,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e77e8cf70ecc98e852fe1fee5b1997608e093632fe46b11766d869fa1791065b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
        },
        {
          "eventId": "b2df436b97fe71911f33",
          "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787734386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4b57ae92922de7ed91f2",
          "headline": "성능 비교: Broadcom과 반도체 및 반도체 장비 산업의 경쟁업체",
          "eventLabel": "경쟁사 기술·시장 진입",
          "publishedAt": 1787723914,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=94ef2ff6f34b60cb54311b1a8b97f72dfb3c8740b26914dc9c404085950c2192",
          "factorChanges": {
            "competitiveRisk": -2,
            "longTermCompetitiveness": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "872daef07ddeb7981bf6",
          "headline": "Broadcom: 대규모 벤더 자금 조달",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787678675,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1e3a378c6c5ede2d5185cdc9938738b11f392691a0fd607ae87896267a54b8a3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fe25943be3f431441337",
          "headline": "Broadcom 3분기 실적 미리보기: 지속적인 마진 계약이 확인됨",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787666784,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=47b43a5df59caa71cc5d7b2540dd8cfd706d3d6eee70d159cd692ca42ac81686",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "defd46a5766c56b00a23",
          "headline": "Broadcom: $ 1,000억의 AI 수익은 물어볼 것이 많습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787562824,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d6581f1a65860a5b7f92df7eebf715ff68f6df0ca68e08e235901cb8678b7c9a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
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
          "reason": "Google 관련 고객 집중도와 AI 커스텀 실리콘 경쟁 심화 가능성"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787357580,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1788254478.7731478,
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
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788193597,
      "signal": "주의 강화",
      "netScore": -4.13,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.27,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 3.5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -4.55,
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
          "eventId": "af16bde21a9de5d05b27",
          "headline": "Marvell 기술: 더 높은 선명도는 인상적이지 않습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788193597,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5b4a71f6c01dc5299eafffd7f57c6315118979a3a2767dca80452da6a9f002aa",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9e8ff232087874189f30",
          "headline": "Marvell: 주식이 또 한 번 더 상승할 준비가 되어 있다고 생각하는 이유(등급 업그레이드)",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788192438,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=16bb3d49b6611e263d23a47d594b1f25483f338ceab03bc5ab3c421ddd9af491",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f4db1be0e6cff3f47d76",
          "headline": "Marvell: 알파벳 거래의 잠재력에 대한 시장의 근시안은 당황스럽습니다",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788191921,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4e98513098d2b5cc14bbfe6fb8c034e9bee1ed220022a46f52ccf43edf7d570d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b0f7c85204f372b5f47b",
          "headline": "마벨 테크놀로지: 나는 이 시장과 격렬하게 동의하지 않는다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788121044,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3b007c538c1fc7a3b43563051c1cb3819993afbb0f92b26a6ffbc956cf84161f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7a2b579ed7dfcef1db7a",
          "headline": "Marvell의 Google AI 칩 거래로 $ 1,200억의 장기 수익 창출 가능: 애널리스트",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787922326,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e77e8cf70ecc98e852fe1fee5b1997608e093632fe46b11766d869fa1791065b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "Google TPU 생태계 진입 가능성과 커스텀 실리콘 성장 기회"
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
          "eventLabel": "매출",
          "publishedAt": 1787756400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000022/mrvl-20260827.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "c07e647f0219a2fc08b9",
          "headline": "한낮에 가장 큰 움직임을 보이는 주식: Dick's Sporting Goods, Marvell, AMD, Kura Oncology 등",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787659503,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b0296d9ed0160108953be1b90a0b93a55834e9460c42c9978afba664f9529302",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0249ab7077282660f38b",
          "headline": "Marvell: Google은 AI 논문을 강화하지만 2분기는 프리미엄을 정당화해야 합니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787598125,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d367226c7afd0def73450d4508a39879b195389ed00dee3bb31ce07eeba5fa78",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ac69fd63efdf9046e805",
          "headline": "가장 큰 움직임을 보이는 주식 프리마켓: 알리바바, 마벨, 샌디스크, 코인베이스 등",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787556683,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9aa75525346d31a1dfb90d34d8747ec329f9b8486db12c5b152cef660cddf179",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 14,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788189545,
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
          "score": -1.75,
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
          "eventId": "c2ebf782b459946b819a",
          "headline": "AMD: 아직도 인텔의 점심을 먹고 있다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788189545,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f98b088261d3a83eaf699b4660bb59129dc2f89466316756897a3e101aa6a75b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9e99302e869cf72fd20",
          "headline": "Microsoft, 14개 배당 성장 기업 중 9월에 연간 배당 증가율 발표 예정",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788096438,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d51433a38a0f4890cf4c5e89cba7f152e5467f9b5df585ace5da77fceb26f54f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788188315,
      "signal": "중립·확인 대기",
      "netScore": 0.48,
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
          "eventId": "c928b7bc676dd70cff71",
          "headline": "억만장자 투자자, 이익 77% 급증, 수익 36% 증가로 TSMC 지분 67% 인상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788188315,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=588551889f11d42fff4cd1fb39ae978e4eab4a5e5345f412c9f30956b8920882",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787680074,
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
          "eventId": "05c98b4fb4a0a75d4390",
          "headline": "ASML과 KLA: 둘 다 인공지능 빌드아웃에서 승리 - 오직 전 (前) 만이 여전히 구매할 가치가 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787680074,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9d42a31020776c638c9d9dee4edfa26ea5cb6e4092950728273a114c2845c96",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1788254478.7731478,
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
          "eventId": "437ebc3c071f1823cd7e",
          "headline": "AMAT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787756400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026059257/amat-20260827.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788176639,
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
          "eventId": "9644714a19036971fdc4",
          "headline": "Lam Research: 중국 노출도 하락하고 있지만 주가도 하락할 수 있음",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788176639,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c8d3a3a761744bc88a350e71e5902cd2bb008fb43d061d5f13b38585fc0f7b4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bec0478fe9fa24e04eff",
          "headline": "LRCX SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787756400.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000043/lrcx-20260824.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787680074,
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
          "eventId": "05c98b4fb4a0a75d4390",
          "headline": "ASML과 KLA: 둘 다 인공지능 빌드아웃에서 승리 - 오직 전 (前) 만이 여전히 구매할 가치가 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787680074,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b9d42a31020776c638c9d9dee4edfa26ea5cb6e4092950728273a114c2845c96",
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
    "MU": {
      "ticker": "MU",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788188315,
      "signal": "우호적 변화",
      "netScore": 10,
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
          "score": -1.75,
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
          "eventId": "c928b7bc676dd70cff71",
          "headline": "억만장자 투자자, 이익 77% 급증, 수익 36% 증가로 TSMC 지분 67% 인상",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788188315,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=588551889f11d42fff4cd1fb39ae978e4eab4a5e5345f412c9f30956b8920882",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "4bdff85c3176072538d6",
          "headline": "Micron 기술: 메모리 슈퍼사이클의 무게 중심",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788185860,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd730bf8518f7b01b93c3c35f61ed2fefc7198400e8ce5a565138c469df4129a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7a2b579ed7dfcef1db7a",
          "headline": "Marvell의 Google AI 칩 거래로 $ 1,200억의 장기 수익 창출 가능: 애널리스트",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1787922326,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e77e8cf70ecc98e852fe1fee5b1997608e093632fe46b11766d869fa1791065b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e8b539a446990e9de047",
          "headline": "씨게이트: 욕심을 부릴 때가 아닙니다 - 더 많은 통합을 앞두고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787919234,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4385ee1e34b196366d48f723daeea011b4a89385d39f461274bcbb10b907f8f3",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "aeb50a507e2b94a53da7",
          "headline": "투자자들이 클라우드 성장에 대한 AI 지출을 평가함에 따라 알파벳 주가가 수요일 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787752283,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1dbbbd79949df8b4e2d169ae00b761bd98851f15ecb988f1faef94de16bf2c4f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "b2df436b97fe71911f33",
          "headline": "RBC Capital, Broadcom 부문에서 실적을 유지하고 목표 가격 400달러 유지",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1787734386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4481eba7a3af2264a31e545919a5f64097bc00f6a382588094477dc6abd03663",
          "factorChanges": {
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "875baf9070786a5d102d",
          "headline": "MU SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1787670000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/723125/000110465926101067/tm2624017d1_8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
        },
        {
          "eventId": "986500052a65c604ca3e",
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "d46f696c3f04367773db",
          "headline": "Cowell은 여전히 Apple에 묶여 있지만 투자자들은 강력한 수입을 응원합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787593932,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2f48d983bd7a3006b3e02d1bc4ccadf789ebd14740b2a1b1eea7f1de4f5449ee",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "98df8fa767f0713581ce",
          "headline": "Nvidia Q2 미리보기: 비트의 가격이 책정되었지만 AI 투자에 대해 궁금한 점이 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787578175,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2e89ef21adffa834d2233b744bf1c031a94c4326cda283b7f8d865627254cd23",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "2b44c6ce927d537c9229",
          "headline": "Salesforce, 2분기 혼합 보고서 작성, 투자자들은 H2 가속화에 대해 회의적 태도 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787570681,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d3bde0ff5073e01d5f7d622876a639af648b59960068b47f82b6e23556dfc694",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "6d38a6f33bc14bb1a7ec",
          "headline": "엔비디아: AI 칩과 재무화 전략을 모두 갖춘 디스럽터",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787569791,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e0665b2f98336b15334e7573b52b4a913863de3d52074a520fe3e0acca62154f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 21,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787727600,
      "signal": "주의 강화",
      "netScore": -3.49,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.88,
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
          "score": -2.62,
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
          "eventId": "34ab0e9e5bdac00081c5",
          "headline": "SNXX: Sandisk의 회복에 대한 레버리지 노출 그러나 단기 변동성으로 인해 주의가 요구됨",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787727600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2655b5499832086dd089e5178af7978d49bb40a69b0518d9322e793fbb21256c",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "986500052a65c604ca3e",
          "headline": "Amazon 및 Microsoft에서 AI 투자가 성과를 내기 시작하면 SanDisk가 혜택을 볼 수 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787645530,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4149fc64b4cd21b278e0a067b703e12566c3056dad0e555e5cc45b39bb8f51a4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ac69fd63efdf9046e805",
          "headline": "가장 큰 움직임을 보이는 주식 프리마켓: 알리바바, 마벨, 샌디스크, 코인베이스 등",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787556683,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9aa75525346d31a1dfb90d34d8747ec329f9b8486db12c5b152cef660cddf179",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787670000.0,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 0,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1788254478.7731478,
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
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1788102000.0,
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
          "eventId": "8221d0ebdc98201d7b6e",
          "headline": "COHR SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788102000.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526375462/d110649d8k.htm",
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
      "updatedAt": 1788254478.7731478,
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
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787895398,
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
          "eventId": "6b6cbd5cd6003e021adf",
          "headline": "GE 베르노바: 2030년까지 매진",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787895398,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c3d61cd93ae43e3d95f406503c53632572b3cbd740e17001e2d44067f73d21bf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
        },
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1788254478.7731478,
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
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787663760,
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
          "eventId": "0a08530127a14e920458",
          "headline": "Vistra: 시장은 전력 부족에 대한 가격을 책정하고 있지만 계약 수입 업그레이드는 아닙니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787663760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=976b0e6c23eb5be32d099a3f07581040104e6978ae0999653761b44c0b776eb3",
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
      "updatedAt": 1788254478.7731478,
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
      "updatedAt": 1788254478.7731478,
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
      "updatedAt": 1788254478.7731478,
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
      "updatedAt": 1788254478.7731478,
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
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787912154,
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
          "eventId": "d6919d33bcd3dd20f75f",
          "headline": "모딘: 중장기 고위험 투자",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787912154,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9acfc02476ed3b2a72733aaa0a06aeb185080661e233b770a789c5abb45150f8",
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
    "STX": {
      "ticker": "STX",
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787919234,
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
          "eventId": "e8b539a446990e9de047",
          "headline": "씨게이트: 욕심을 부릴 때가 아닙니다 - 더 많은 통합을 앞두고 있습니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787919234,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4385ee1e34b196366d48f723daeea011b4a89385d39f461274bcbb10b907f8f3",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1788254478.7731478,
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
      "updatedAt": 1788254478.7731478,
      "dataAsOf": 1787636195,
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
          "eventId": "ec2be997df85cf7de347",
          "headline": "Comfort Systems USA: 더 매력적인 가격의 품질",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1787636195,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=034b9935adb58451af3726fb7895c45732bec31a0d0a8f0764e9c8d181673c7e",
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
    "SBGSY": {
      "ticker": "SBGSY",
      "updatedAt": 1788254478.7731478,
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
      "updatedAt": 1788254478.7731478,
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
