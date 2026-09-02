// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1788383226.4726202,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788329286,
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
          "score": -1.92,
          "level": "주의"
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
          "score": -1.4,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.55,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -2.98,
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
          "eventId": "99c84182ef22525cd118",
          "headline": "Opera는 한때 €561M의 Microsoft 벌금을 부과하는 데 도움을 주었습니다. 이제 Edge에 대한 EU 독점 금지 싸움에서 패했습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788329286,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd75fc4bb310944e142653ad32dbd9867ab91a20d63c030341bd0545a5bb3fc8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "16a618a026a6ea68ec5d",
          "headline": "Microsoft와 Tesla는 모멘텀을 가지고 9월을 맞이하지만 어느 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788273359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dadf44465f03f95c4e25fcc4d6ae8569d942346851708542ebfac061500c0d45",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9b609fa951a5397d050a",
          "headline": "오라클은 마이크로소프트가 PIP에 500명을 배치함에 따라 인도에서 3,000명의 일자리를 해고했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788269111,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=72135367ce7280280326e685ee71b10dde48fc85baa35bcacd47389f16fcbd46",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788361242,
      "signal": "우호적 변화",
      "netScore": 3.27,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.67,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.9,
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
          "score": -5,
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
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "027eefd79e80fe66e6db",
          "headline": "Tiger Global은 알파벳을 45% 삭감하고 AMD 포지션을 개설했습니다. AI 플랫폼에서 AI 칩으로 바뀌고 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788350467,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1a5e35e325794f45fe4aa4a55ba561bf1d97c6540dd7089fad281eebaf275d94",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "a42fb94afe58839852bb",
          "headline": "오늘, 9월 1일 주식 시장: Fervo Energy, 396MW Google Power Deal에서 28% 급등",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788304031,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bbdaf020b03e8f2d56de2cf7a71b02c31193ce46aed64227bf173c2e432d9e27",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "85761d28518acc121777",
          "headline": "FRVO 주식은 Google 거래 후 한 달 만에 가장 좋은 날입니다: 분석가는 계약이 예상보다 일찍 도착했다고 말합니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788301556,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=45c183f1a67d5ecd874280714e9c673d765525452365e8606c0fb41a5e4fe9d4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d0a189fca84ff4a89328",
          "headline": "AMD 대 알파벳: 하나의 주식이 AI의 놀라운 승자가 될 수 있습니다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788280224,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=759858f4e1be2d1477c5f66fb1184bd2cc07c1fba2c88bb0bd57639f3a4d670a",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0a0fd6abc3bfe250f1d3",
          "headline": "Marvell Stock: AI 성장 스토리가 점점 커지고 있지만 Google 거래는 여전히 문제입니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788275998,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6341e9e2db2653878ddc79acd53362995a0de174d18b2125d7c454d4aac78421",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0d6d27f9be543a9f41f0",
          "headline": "Google은 '시작일 뿐'입니다: Rezolve AI, 더 많은 인프라 거래 예고",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788269766,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=37ace4725ea475ba3c3552a7f9ac4bf5638b6de58b961409c2aed0dada234f5c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b3bbb76f44b420a36c3c",
          "headline": "Google이 유타 지열 발전 계약을 체결한 후 Fervo Energy 주가가 24% 상승했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788258706,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5d06f42dff4c616b8cdc3f566d32028e83bd87ccec4107a9811a97d668e327e9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
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
          "eventId": "2f1da592e24d4bf917c4",
          "headline": "Marvell: 알파벳 거래의 잠재력에 대한 시장의 근시안은 당황스럽습니다",
          "eventLabel": "주요 고객 계약",
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
          "reason": "TPU 공급업체 다변화와 특정 공급사 의존도 완화 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 17,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788337808,
      "signal": "주의 강화",
      "netScore": -4.83,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -4.72,
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
          "eventId": "4386851795ae9f877900",
          "headline": "Cathie Wood의 ARK Invest는 Amazon이 눈에 잘 띄는 곳에 숨어 있는 잠재적인 1조 달러 규모의 AI 사업을 갖고 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788337808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8525376d6526a36a1312d6f3d125ce11360d9053a603c6519b8cec67815f11ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "93f3c913a8138abfc386",
          "headline": "아마존은 배당금을 지급하지 않으며 지속적으로 주주를 희석시킵니다. 제가 그것을 영원히 사서 보유해야 하는 이유는 다음과 같습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788288180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6c2606d394776553c4efd386dabb8dea79a57e55468411ce6afcc5e008db9015",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "66ba290b30f3117a4897",
          "headline": "Amazon vs. Shopify: 2026년에는 어떤 소비자 주식이 더 나은 구매입니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788284952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fd1cabd099626274b9164cc149d7277cccc04d78ec9667ec74fa0c2b8476159a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "30a934e066e5e114aa0e",
          "headline": "채권 매도가 부채 기반 AI 구축을 테스트함에 따라 Oracle은 4% 하락하고 Nebius는 미끄러짐",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788282824,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=080d937249bd77c901ae5bf56b2b93380ea4f0f5bb7081fc5e6493a2bffd0b4f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "클라우드 CAPEX 경쟁과 가격·마진 압력 비교 필요"
        },
        {
          "eventId": "d0aff465dc806f75a1d3",
          "headline": "아마존 주식, 광고 관행에 대한 FTC 소송 후 손실 확대",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788270471,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10e9f01a1c12a84f71dc20755dcf837b00c34e4aa3d1f8162c246282a7616060",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788289026,
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
          "eventId": "cce272cb64500427f8f9",
          "headline": "PJM이 메타 지원을 받는 오하이오 프로젝트를 추진함에 따라 Oklo가 5% 하락하고 NuScale Power는 거의 예산을 유지하지 못함",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788289026,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=481a968aceed238ff759767244ad77eafcff2c65bec52c42a104e54084cd65fc",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "aef74eeadca73c1b354c",
          "headline": "메타스톡 투자자를 위한 좋은 소식",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788279601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0171f5e8ad2f7fe67459fe06dcbd24d791b9b5a39e9dc1340161e665b146ba0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788292404,
      "signal": "중립·확인 대기",
      "netScore": -0.01,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.87,
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
          "eventId": "f5a4ac9ec2cf9aeff842",
          "headline": "AAPL 주식은 한 달 만에 최고의 날을 맞이했습니다. CEO John Ternus는 직원들에게 보낸 첫 번째 메모에서 '경이로운' iPhone 출시를 홍보했다고 합니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788292404,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0d0fa081d258806db0b2c220e75bc4f240fc571c3b4b39d1cbf5e7f7527379a9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "4771c7405feee78cc629",
          "headline": "Ternus 시대가 시작되면서 Apple 주가 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788290100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6dec1da8d8f0d2c53deb4b6a4d56130695ec1ecacda4749599c17b318b3b697a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "25bc0168b90ac2fc9ffe",
          "headline": "Salesforce 급증: Oakmark Select Fund 관리자는 최고 보유량이 여전히 '극적으로 저평가'되어 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788268282,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=85e4d19a31f2e30490e9a85a6b5e3f0d303371c61644aaaee5a7d62ebcdfdd26",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "94ff0bdcbbd5e747251b",
          "headline": "XOM, CVX, GEV 주식이 밤새 상승하는 이유는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788249807,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3a52cfeaef2d2df657c92719bd6173fc4aaa904812ca392747f7e2a7c78824a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ab92edebe33adb10466f",
          "headline": "MU와 SNDK의 초기 반등이 새로운 테스트에 직면 - 중국의 CXMT가 새로운 AI 메모리 칩으로 획기적인 발전을 이룬 것으로 알려짐",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788239656,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=fe7eb5945cebee5f13bd808c726705f2adeae6d583502b53a1510a66fe20e999",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "eventId": "d47e3edaaa6e746703d5",
          "headline": "Qualcomm: 핸드셋 통증 지속 - 2027 회계연도 데이터 센터 굴절",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787829307,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a1f65b2b906390ebf59dfa48d25cb0470b02a79966351cfb5ea59eb0622f27a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788304020,
      "signal": "주의 강화",
      "netScore": -2.44,
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
          "eventId": "e66aef4a24b3b0f2ecc0",
          "headline": "Tesla 주식 투자자들은 미국 전력망에서 이익을 얻을 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788304020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=80faddeb46792ec5aa19fa9c92256b9e03b88f35fab34a5800120b1004fc688f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "16a618a026a6ea68ec5d",
          "headline": "Microsoft와 Tesla는 모멘텀을 가지고 9월을 맞이하지만 어느 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788273359,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dadf44465f03f95c4e25fcc4d6ae8569d942346851708542ebfac061500c0d45",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "94ff0bdcbbd5e747251b",
          "headline": "XOM, CVX, GEV 주식이 밤새 상승하는 이유는 무엇입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788249807,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e3a52cfeaef2d2df657c92719bd6173fc4aaa904812ca392747f7e2a7c78824a",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788282824,
      "signal": "주의 강화",
      "netScore": -2.59,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "eventId": "30a934e066e5e114aa0e",
          "headline": "채권 매도가 부채 기반 AI 구축을 테스트함에 따라 Oracle은 4% 하락하고 Nebius는 미끄러짐",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788282824,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=080d937249bd77c901ae5bf56b2b93380ea4f0f5bb7081fc5e6493a2bffd0b4f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 매출 기회와 FCF·부채·신용 부담이 동시에 존재"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788371400,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788282506,
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
          "eventId": "fd6f4c11637a7bd55bfd",
          "headline": "Palantir Technologies의 자회사인 Palantir USG는 육군 계약으로부터 접근 거점 지상국 시스템을 목표로 하는 전술 정보 생산 및 제공에 대한 프라임 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788282506,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c208a02c9869a5043187cbd17fbf04d9d1add5c8684c3095e8290220eb432db",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788355620,
      "signal": "중립·확인 대기",
      "netScore": 1.7,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.9,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.27,
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
          "score": 1.4,
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
          "eventId": "bc40ecde4d85b2bee1d9",
          "headline": "억만장자 David Tepper는 Micron과 Sandisk를 매각하고 최대 고객 중 한 곳을 상대로 헤징하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788355620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffa1ff2780a4397efd1c6b3878cabb3067edbc1bbc113a8a27f9656421319068",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "34335ee341cff1df990f",
          "headline": "Vertiv의 마이크로그리드 공급업체에 대한 14억 5천만 달러 규모의 거래 이면에 숨어 있는 데이터 센터 방지 정서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788353880,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=726ad06e9f39d610b2467131c426f62dc375f99ec353b0d00f50c7f72cfa9405",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "ef0940f7bec43eec2f1b",
          "headline": "Schneider Electric, Vertiv 및 Huawei의 프로필을 포함하는 2025~2035년 컨테이너형 데이터센터 시장 전망 - 클라우드, 엣지 컴퓨팅 및 AI 수요가 가속화됨에 따라 업계는 2035년까지 1,113억 6천만 달러에 도달할 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788353340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=498fe99a3bfb9e109034ebddb99c25befca485bd095eeacc151215725eec6cc9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "570e12f738ae57a4edc4",
          "headline": "Eaton은 차세대 중요 인프라 개발을 지원하기 위해 새로운 아칸소 시설에 2억 4200만 달러 이상을 투자하여 모듈식 전기 인클로저 제조를 확장했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788352200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20f87beb5fc3c063cec875d031989fa083df8691dc4df3082248b2ca966a90a2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "89d6ef3b2acb9aed1af4",
          "headline": "엔비디아는 코히런트에 20억 달러를 투자했습니다. 광학 대역폭이 차세대 AI 병목 현상입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788350591,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d709cdf8bdd5add0bc9c101301d160b5a316ff9b2578014e5781fe8de779b9c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "85815a920410528043f6",
          "headline": "억만장자 David Tepper는 역사적인 랠리 기간 동안 SanDisk를 떠났습니다. 이후 주가는 30% 이상 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788343357,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01a9f4fa34127ec187d6fa7a8ccce92a9ecb71bfa975558bd2772c4e832730f5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "4386851795ae9f877900",
          "headline": "Cathie Wood의 ARK Invest는 Amazon이 눈에 잘 띄는 곳에 숨어 있는 잠재적인 1조 달러 규모의 AI 사업을 갖고 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788337808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8525376d6526a36a1312d6f3d125ce11360d9053a603c6519b8cec67815f11ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "e66aef4a24b3b0f2ecc0",
          "headline": "Tesla 주식 투자자들은 미국 전력망에서 이익을 얻을 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788304020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=80faddeb46792ec5aa19fa9c92256b9e03b88f35fab34a5800120b1004fc688f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "4fa5eae7bcd88ece6fca",
          "headline": "Nvidia는 AI 붐의 두뇌를 판매합니다. 뭔가 다른 것이 인기를 끌고 있지만 월스트리트의 레이더에는 없습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788291300,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=99be8f57191c0c8d6a52fcc0e4ac2336cfc50e21c4243622efd96ad584760f40",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "99026eec57ccbd99b7f0",
          "headline": "Nvidia: AI의 집주인에 대한 베팅은 과부 거래입니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788289614,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=917d8a7976ba8b3e4504514f0e93cec344656db2b6fbf75b1141b2e6a9c958f9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "89c598b05d545ff7f100",
          "headline": "Nvidia: Vera Rubin 플랫폼이 도약하면서 멈출 수 없는 추진력",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788283075,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d7a82738066e6cd87991a741cf9c9dbbf5c4296e1bb9d0f722feba3d0c81a6f6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "30a934e066e5e114aa0e",
          "headline": "채권 매도가 부채 기반 AI 구축을 테스트함에 따라 Oracle은 4% 하락하고 Nebius는 미끄러짐",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788282824,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=080d937249bd77c901ae5bf56b2b93380ea4f0f5bb7081fc5e6493a2bffd0b4f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "데이터센터 투자 지속 시 AI 컴퓨팅 수요 유지 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 29,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788355620,
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
          "eventId": "bc40ecde4d85b2bee1d9",
          "headline": "억만장자 David Tepper는 Micron과 Sandisk를 매각하고 최대 고객 중 한 곳을 상대로 헤징하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788355620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffa1ff2780a4397efd1c6b3878cabb3067edbc1bbc113a8a27f9656421319068",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "34335ee341cff1df990f",
          "headline": "Vertiv의 마이크로그리드 공급업체에 대한 14억 5천만 달러 규모의 거래 이면에 숨어 있는 데이터 센터 방지 정서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788353880,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=726ad06e9f39d610b2467131c426f62dc375f99ec353b0d00f50c7f72cfa9405",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "ef0940f7bec43eec2f1b",
          "headline": "Schneider Electric, Vertiv 및 Huawei의 프로필을 포함하는 2025~2035년 컨테이너형 데이터센터 시장 전망 - 클라우드, 엣지 컴퓨팅 및 AI 수요가 가속화됨에 따라 업계는 2035년까지 1,113억 6천만 달러에 도달할 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788353340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=498fe99a3bfb9e109034ebddb99c25befca485bd095eeacc151215725eec6cc9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "570e12f738ae57a4edc4",
          "headline": "Eaton은 차세대 중요 인프라 개발을 지원하기 위해 새로운 아칸소 시설에 2억 4200만 달러 이상을 투자하여 모듈식 전기 인클로저 제조를 확장했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788352200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20f87beb5fc3c063cec875d031989fa083df8691dc4df3082248b2ca966a90a2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "89d6ef3b2acb9aed1af4",
          "headline": "엔비디아는 코히런트에 20억 달러를 투자했습니다. 광학 대역폭이 차세대 AI 병목 현상입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788350591,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d709cdf8bdd5add0bc9c101301d160b5a316ff9b2578014e5781fe8de779b9c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "85815a920410528043f6",
          "headline": "억만장자 David Tepper는 역사적인 랠리 기간 동안 SanDisk를 떠났습니다. 이후 주가는 30% 이상 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788343357,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01a9f4fa34127ec187d6fa7a8ccce92a9ecb71bfa975558bd2772c4e832730f5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "4386851795ae9f877900",
          "headline": "Cathie Wood의 ARK Invest는 Amazon이 눈에 잘 띄는 곳에 숨어 있는 잠재적인 1조 달러 규모의 AI 사업을 갖고 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788337808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8525376d6526a36a1312d6f3d125ce11360d9053a603c6519b8cec67815f11ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "e66aef4a24b3b0f2ecc0",
          "headline": "Tesla 주식 투자자들은 미국 전력망에서 이익을 얻을 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788304020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=80faddeb46792ec5aa19fa9c92256b9e03b88f35fab34a5800120b1004fc688f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f77ce872a6e2c3d93af5",
          "headline": "AMD의 Instinct 시스템이 이제 사우디아라비아에 출시되었습니다. 다음 250메가와트의 주식 가치는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788284641,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3c2c7e8525a1f3f4b9011f9f61f6ebe2e1a4e2309ce9cb831645fea2bf5d1870",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1d128098b61f7774187d",
          "headline": "글로벌 채권 매도가 수익률을 높이면서 반도체 주가 하락: Intel 하락 3%, NVIDIA 및 AMD 하락",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788272116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eee0f7082b069c45d973aabac70b91f371df91e53cfdeb082e6561287225c5b4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d07939fbac8873f36991",
          "headline": "NVDA는 호황을 누리고 있지만 BlackRock은 1000억 달러 규모의 AI 부채 문제에 대해 경고합니다. AI 병목 현상 플레이가 BE, VRT, MU가 다음 승자가 될까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788247323,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b61277ffeb68645f1ac6247887f96e447e1946211065fea69ac920df725df94a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "f68478e0f50e9a3f9ea9",
          "headline": "Qualcomm의 경쟁사인 MediaTek은 35억 달러 규모의 Nvidia AI 칩 거래 이후 10% 상승",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1788235223,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a391a6562161c9049791ec5f8b17bf02953dc5fa902c118f9753e107ad84483b",
          "factorChanges": {
            "growth": 2,
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
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788361221,
      "signal": "주의 강화",
      "netScore": -6.36,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.1,
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
        },
        {
          "eventId": "b76f2a087c30405b4ab0",
          "headline": "맞춤형 Silicon King: Broadcom을 선택해야 하는 경우와 Marvell 기술을 선택해야 하는 경우",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788266483,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c14a3448264e7514848c4de6ff4f6feca055bbcd705d6548fe098c3304ffe93",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788290100,
      "signal": "우호적 변화",
      "netScore": 3.88,
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
          "eventId": "4771c7405feee78cc629",
          "headline": "Ternus 시대가 시작되면서 Apple 주가 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788290100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6dec1da8d8f0d2c53deb4b6a4d56130695ec1ecacda4749599c17b318b3b697a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "f68478e0f50e9a3f9ea9",
          "headline": "Qualcomm의 경쟁사인 MediaTek은 35억 달러 규모의 Nvidia AI 칩 거래 이후 10% 상승",
          "eventLabel": "경쟁사 공급 계약",
          "publishedAt": 1788235223,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a391a6562161c9049791ec5f8b17bf02953dc5fa902c118f9753e107ad84483b",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b23b54deaa5530b1d077",
          "headline": "Qualcomm 대 Sandisk: 점진적인 수익 감소와 빠른 수익 가속화 비교",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788184321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d22192571a8df0cd2dd3d0240473f79c8655b7659e6f8eb2f0a6631f2a8cb00",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d47e3edaaa6e746703d5",
          "headline": "Qualcomm: 핸드셋 통증 지속 - 2027 회계연도 데이터 센터 굴절",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787829307,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6a1f65b2b906390ebf59dfa48d25cb0470b02a79966351cfb5ea59eb0622f27a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788201060,
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
          "eventId": "ea0f2927241104aa1220",
          "headline": "ARM 대 NVDA: 어떤 AI 칩 디자이너에 투자할 가치가 있나요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788201060,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a53b55e33d985976ef4eb6f8ea67c228996a484c07513b7eb8e797b29e93df11",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788361242,
      "signal": "주의 강화",
      "netScore": -4.63,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.62,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.2,
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
          "score": -4.72,
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
        },
        {
          "eventId": "31ac92cbab9d61552966",
          "headline": "Marvell Technology: 잘못된 이유로 주식이 하락함(강한 매도 반복)",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788353211,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bb73080c2723a8ceb080e344b8b4015b9e68226d014f93a971bb53fc26bbb9f3",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "97be8d3d31896fd2d1f8",
          "headline": "Marvell의 $ 120B AI 거래는 예기치 않게",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788292020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8471d33a020d2e999e06df0373c13a11351cd1f84df5c7553cddf284f0be2941",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0a0fd6abc3bfe250f1d3",
          "headline": "Marvell Stock: AI 성장 스토리가 점점 커지고 있지만 Google 거래는 여전히 문제입니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788275998,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6341e9e2db2653878ddc79acd53362995a0de174d18b2125d7c454d4aac78421",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0a6cd4892cdef50f2191",
          "headline": "나는 Marvell Technology가 역사적으로 승리했기 때문에 계속 구매하고 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788274167,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7b3fc12b56e290dd8a4eb6c48e32ece5d1d1f98d48429eeba2403314eb1986cf",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b76f2a087c30405b4ab0",
          "headline": "맞춤형 Silicon King: Broadcom을 선택해야 하는 경우와 Marvell 기술을 선택해야 하는 경우",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788266483,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c14a3448264e7514848c4de6ff4f6feca055bbcd705d6548fe098c3304ffe93",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
          "eventId": "2f1da592e24d4bf917c4",
          "headline": "Marvell: 알파벳 거래의 잠재력에 대한 시장의 근시안은 당황스럽습니다",
          "eventLabel": "주요 고객 계약",
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 13,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788360181,
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
        },
        {
          "eventId": "a8d4152b20b5b524ffa5",
          "headline": "오늘, 9월 1일 주식 시장: 인텔이 칩 주식 압력으로 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788302636,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=414d4ecbf50d8436ed528681a78503db385ac131e6ce1f0991d417d42eb903fa",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b970246492fec105c56a",
          "headline": "주식 시장이 폭락할 경우 내가 투자하고 있는 인공지능(AI) 주식 2개는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788286801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=092653ec3259ec1705cce90c34f0893f6a27ab23f03422df61fc7e2a76d4a68a",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fd6f4c11637a7bd55bfd",
          "headline": "Palantir Technologies의 자회사인 Palantir USG는 육군 계약으로부터 접근 거점 지상국 시스템을 목표로 하는 전술 정보 생산 및 제공에 대한 프라임 계약을 체결했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788282506,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=0c208a02c9869a5043187cbd17fbf04d9d1add5c8684c3095e8290220eb432db",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1d128098b61f7774187d",
          "headline": "글로벌 채권 매도가 수익률을 높이면서 반도체 주가 하락: Intel 하락 3%, NVIDIA 및 AMD 하락",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788272116,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eee0f7082b069c45d973aabac70b91f371df91e53cfdeb082e6561287225c5b4",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788188400.0,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1788383226.4726202,
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
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1787875983,
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
          "eventId": "70bfd28063281f82c32b",
          "headline": "AMAT(Applied Materials) AI 기반 백로그, 새로운 Fab 및 EPIC Center Bet에 대한 투자자의 반응",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787875983,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d13d62850b1ddf6358d0cf3674ce6dde1b3dc6db681957119485c58ff4e0bb1f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788278554,
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
          "eventId": "0c459e3765f0ddc83390",
          "headline": "Lam Research 주식 슬라이드: UBS 컷, 내부자 판매, 수익률 상승이 LRCX에 부담",
          "eventLabel": "내부자 매도",
          "publishedAt": 1788278554,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e69728715fee2dde3e1383ac97f7739e97b40fc726d3f3dcc4aa88692df8534e",
          "factorChanges": {
            "insiderSignal": -2,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
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
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1788383226.4726202,
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
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788360120,
      "signal": "우호적 변화",
      "netScore": 7.86,
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
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "12d88406bfdded99a78b",
          "headline": "Dell은 메모리 칩 부족을 지적했습니다. 마이크론 스톡은 어깨를 으쓱합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788360120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9acb9cfa57abbdd01129b242d71c149557e85169830fcb6e397e34bc406577d0",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bc40ecde4d85b2bee1d9",
          "headline": "억만장자 David Tepper는 Micron과 Sandisk를 매각하고 최대 고객 중 한 곳을 상대로 헤징하고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788355620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ffa1ff2780a4397efd1c6b3878cabb3067edbc1bbc113a8a27f9656421319068",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "34335ee341cff1df990f",
          "headline": "Vertiv의 마이크로그리드 공급업체에 대한 14억 5천만 달러 규모의 거래 이면에 숨어 있는 데이터 센터 방지 정서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788353880,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=726ad06e9f39d610b2467131c426f62dc375f99ec353b0d00f50c7f72cfa9405",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "ef0940f7bec43eec2f1b",
          "headline": "Schneider Electric, Vertiv 및 Huawei의 프로필을 포함하는 2025~2035년 컨테이너형 데이터센터 시장 전망 - 클라우드, 엣지 컴퓨팅 및 AI 수요가 가속화됨에 따라 업계는 2035년까지 1,113억 6천만 달러에 도달할 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788353340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=498fe99a3bfb9e109034ebddb99c25befca485bd095eeacc151215725eec6cc9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "570e12f738ae57a4edc4",
          "headline": "Eaton은 차세대 중요 인프라 개발을 지원하기 위해 새로운 아칸소 시설에 2억 4200만 달러 이상을 투자하여 모듈식 전기 인클로저 제조를 확장했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788352200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20f87beb5fc3c063cec875d031989fa083df8691dc4df3082248b2ca966a90a2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "89d6ef3b2acb9aed1af4",
          "headline": "엔비디아는 코히런트에 20억 달러를 투자했습니다. 광학 대역폭이 차세대 AI 병목 현상입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788350591,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d709cdf8bdd5add0bc9c101301d160b5a316ff9b2578014e5781fe8de779b9c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "85815a920410528043f6",
          "headline": "억만장자 David Tepper는 역사적인 랠리 기간 동안 SanDisk를 떠났습니다. 이후 주가는 30% 이상 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788343357,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01a9f4fa34127ec187d6fa7a8ccce92a9ecb71bfa975558bd2772c4e832730f5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "4386851795ae9f877900",
          "headline": "Cathie Wood의 ARK Invest는 Amazon이 눈에 잘 띄는 곳에 숨어 있는 잠재적인 1조 달러 규모의 AI 사업을 갖고 있다고 말합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788337808,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8525376d6526a36a1312d6f3d125ce11360d9053a603c6519b8cec67815f11ad",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "e66aef4a24b3b0f2ecc0",
          "headline": "Tesla 주식 투자자들은 미국 전력망에서 이익을 얻을 것입니다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788304020,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=80faddeb46792ec5aa19fa9c92256b9e03b88f35fab34a5800120b1004fc688f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "a7bb3f52c79c36c766f6",
          "headline": "Broadcom, AI 칩 판매 143% 급증 후 중요한 수익 테스트 직면",
          "eventLabel": "실적 발표",
          "publishedAt": 1788295939,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d41616697790a2bd8323949b38d3d79e34f6d9e8af0e7fa7637a1002f0b53d8b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4771c7405feee78cc629",
          "headline": "Ternus 시대가 시작되면서 Apple 주가 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788290100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6dec1da8d8f0d2c53deb4b6a4d56130695ec1ecacda4749599c17b318b3b697a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "c28464c23a4646a11b6b",
          "headline": "$ 1,000를 받으셨나요? 마이크론에 대한 투자는 2027년까지 이 정도의 가치가 있을 수 있습니다. (힌트: $ 3,000 이상입니다.)",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788288540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c7cf6ab604f4f7e0342b4fe99585f3e621ee3813d5f4ea06e4aed5d946dcd0f",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 26,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788343357,
      "signal": "중립·확인 대기",
      "netScore": 1.96,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
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
          "eventId": "85815a920410528043f6",
          "headline": "억만장자 David Tepper는 역사적인 랠리 기간 동안 SanDisk를 떠났습니다. 이후 주가는 30% 이상 하락했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788343357,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=01a9f4fa34127ec187d6fa7a8ccce92a9ecb71bfa975558bd2772c4e832730f5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "49a367f7507f259b1ae9",
          "headline": "ARM 대 Sandisk: 꾸준한 역사적 수익 창출과 급속한 순차적 수익 확장 비교",
          "eventLabel": "실적 발표",
          "publishedAt": 1788312901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1deaf7a19bceba3d59398f2a9420a48afa5bd761a82f7d3b2e0969070279d62c",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "331811bd05bf7fe6cbea",
          "headline": "Sandisk: 주기를 과소평가하지 마십시오",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788270346,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5fac44548a9f98a2c74a6d700e684349d3ab0f4521e89a1fe3bae7ee18dd0db4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6c0ea1ff5b490565ec97",
          "headline": "천장 SanDisk는 자체 계약을 작성했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788222910,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=bb0f95c6621c12d61021b60d686d83085cdcca5bb946f400e9aa76bc1f68a845",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "b23b54deaa5530b1d077",
          "headline": "Qualcomm 대 Sandisk: 점진적인 수익 감소와 빠른 수익 가속화 비교",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788184321,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6d22192571a8df0cd2dd3d0240473f79c8655b7659e6f8eb2f0a6631f2a8cb00",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788290100,
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
          "eventId": "4771c7405feee78cc629",
          "headline": "Ternus 시대가 시작되면서 Apple 주가 상승",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788290100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6dec1da8d8f0d2c53deb4b6a4d56130695ec1ecacda4749599c17b318b3b697a",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ANET": {
      "ticker": "ANET",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1787955941,
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
          "eventId": "bf54e0823235d899517a",
          "headline": "Arista의 가격은 부품이 정시에 도착한다고 가정합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787955941,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7ca249c28c47540def5712b078fe2ed68ac53ca1b059ecca99573455ce2837b4",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788350591,
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
          "eventId": "89d6ef3b2acb9aed1af4",
          "headline": "엔비디아는 코히런트에 20억 달러를 투자했습니다. 광학 대역폭이 차세대 AI 병목 현상입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788350591,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3d709cdf8bdd5add0bc9c101301d160b5a316ff9b2578014e5781fe8de779b9c",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
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
          "eventId": "978f127c1dcf179ad905",
          "headline": "AI 하드웨어 거래 냉각으로 광학 주식 하락: Applied Optoelectronics 및 Lumentum 6% 하락, Coherent 하락 5%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787943297,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b64a0124d7c358965083b30b9eb6b280c71066b35cf794a9038722f02f26c389",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788289235,
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
          "eventId": "98d93926b229539e9fcc",
          "headline": "Deutsche Bank, 지출 급증으로 Lumentum과 Coherent의 최고 AI 추천 상품 선정",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788289235,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=270f7b075f5072783e394ae88924eb86eb999eb5c2ee995d83c94d9818a935f3",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "978f127c1dcf179ad905",
          "headline": "AI 하드웨어 거래 냉각으로 광학 주식 하락: Applied Optoelectronics 및 Lumentum 6% 하락, Coherent 하락 5%",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1787943297,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b64a0124d7c358965083b30b9eb6b280c71066b35cf794a9038722f02f26c389",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788287700,
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
          "eventId": "478a335bfebc6836d50c",
          "headline": "I Wouldn 't Sell GE Vernova, Even After the Wind Business Fell 40%",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788287700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3840aabb197925b02a8da4e84ed20cf657f97b8ebf1d8299c2f75c8675bb7f49",
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1787779500,
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
          "eventId": "140947ab446ca57ecdbd",
          "headline": "Constellation의 새로운 전력 거래가 늘어나고 있습니다. 주식이 아직 이를 반영하지 않는 이유는 다음과 같습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1787779500,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=80e89ea81005b77faf1a63391a2a3a5c42f3d2a9e55268cacc87a0afa5b01625",
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
      "updatedAt": 1788383226.4726202,
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
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788352200,
      "signal": "중립·확인 대기",
      "netScore": -0.91,
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
          "eventId": "570e12f738ae57a4edc4",
          "headline": "Eaton은 차세대 중요 인프라 개발을 지원하기 위해 새로운 아칸소 시설에 2억 4200만 달러 이상을 투자하여 모듈식 전기 인클로저 제조를 확장했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788352200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=20f87beb5fc3c063cec875d031989fa083df8691dc4df3082248b2ca966a90a2",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8fa943c36d2b51ed9f4d",
          "headline": "이튼 주식은 1년 전보다 더 위험한가?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788205299,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=252010de3040dbb18d1303b66707f40318a8328d2d3a8474a3ff6deb1d0057cb",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b63fb9526fdee061881a",
          "headline": "Eaton의 AI 데이터 센터 및 헬스케어 거래가 Trane Signal과 함께 ETN 투자자에게 전략적 변화를 가져올까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1787998011,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=acc2e54c59021eff636643208dfbff6cdb90c84f29e4f12a85c0e69941353d2f",
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
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1788383226.4726202,
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
      "updatedAt": 1788383226.4726202,
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
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788358304,
      "signal": "우호적 변화",
      "netScore": 5.59,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 2.8,
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
          "eventId": "40d7f8b7dbe63c703c0f",
          "headline": "Vertiv, 최대 26억 달러 규모의 유틸리티 혁신 인수",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788358304,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=19ae97de5f9b26a23671ed1b2e1006cf03c210fb21fb574f7a61717f45ce2572",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "34335ee341cff1df990f",
          "headline": "Vertiv의 마이크로그리드 공급업체에 대한 14억 5천만 달러 규모의 거래 이면에 숨어 있는 데이터 센터 방지 정서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788353880,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=726ad06e9f39d610b2467131c426f62dc375f99ec353b0d00f50c7f72cfa9405",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "ef0940f7bec43eec2f1b",
          "headline": "Schneider Electric, Vertiv 및 Huawei의 프로필을 포함하는 2025~2035년 컨테이너형 데이터센터 시장 전망 - 클라우드, 엣지 컴퓨팅 및 AI 수요가 가속화됨에 따라 업계는 2035년까지 1,113억 6천만 달러에 도달할 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788353340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=498fe99a3bfb9e109034ebddb99c25befca485bd095eeacc151215725eec6cc9",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "e8ea1860280b2c814abd",
          "headline": "Vertiv, AI 데이터 센터의 전력 공급 시간을 단축하기 위해 UtilityInnovation Group 인수 계약 발표",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788348600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b01f058ce0a82d79dc0911b51cd28472afe5f758c27cb9948e24eb56d5b44b2",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
          "eventId": "d07939fbac8873f36991",
          "headline": "NVDA는 호황을 누리고 있지만 BlackRock은 1000억 달러 규모의 AI 부채 문제에 대해 경고합니다. AI 병목 현상 플레이가 BE, VRT, MU가 다음 승자가 될까요?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788247323,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b61277ffeb68645f1ac6247887f96e447e1946211065fea69ac920df725df94a",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 2,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788346043,
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
          "eventId": "54d9e45cffdcb5a06b32",
          "headline": "Modine: 구매할 가치가 있는 붕괴 - 임시 공급망/마진/실행 위험",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788346043,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cf363cd44249a0720d734a06850f2b6cef625f9d7f57e3fad8d19fb20c41829e",
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
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788154225,
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
          "eventId": "83b60256ba0d24822cee",
          "headline": "Seagate Technology Holdings (STX), 투자자들의 요청에 따라 AI Summit으로 향하다",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788154225,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=47aaed3f1ca9addee86209abcf8ae8eed09583ae186f8a3d58445714d5abd63d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1788383226.4726202,
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
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788319200,
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
          "eventId": "8b06659042eb85e02bbb",
          "headline": "Comfort Systems USA 주식을 사상 최고치보다 20% 이상 낮게 구매한 사례",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1788319200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6c853288785a53f7c60023d60171af4151fdeb33b9b60f0d01f78adae047748f",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
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
      "updatedAt": 1788383226.4726202,
      "dataAsOf": 1788353340,
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
          "eventId": "ef0940f7bec43eec2f1b",
          "headline": "Schneider Electric, Vertiv 및 Huawei의 프로필을 포함하는 2025~2035년 컨테이너형 데이터센터 시장 전망 - 클라우드, 엣지 컴퓨팅 및 AI 수요가 가속화됨에 따라 업계는 2035년까지 1,113억 6천만 달러에 도달할 것",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788353340,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=498fe99a3bfb9e109034ebddb99c25befca485bd095eeacc151215725eec6cc9",
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1788383226.4726202,
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
