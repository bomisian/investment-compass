// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1788441747.2261245,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788369561,
      "signal": "주의 강화",
      "netScore": -9.3,
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
          "score": -0.7,
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
        },
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
          "eventId": "c4de54ec5abc0b1963a5",
          "headline": "MSFT SEC Form 8-K 공식 제출",
          "eventLabel": "중요사항 공시",
          "publishedAt": 1788274800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526380280/d291965d8k.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788427501,
      "signal": "우호적 변화",
      "netScore": 2.99,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 4.2,
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
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": -0.53,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        },
        {
          "eventId": "8690d6a2c34f6b457aa0",
          "headline": "Google Gemini 통합 및 AI 소송은 Wix.com(WIX)의 판도를 바꿀 수 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788379544,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6bf62433fa1b10d0ee7a33383fda41065078cad8f8a7b84f81b20c2a9639cbb1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3d109ca33f89b9425781",
          "headline": "Google 주식은 미국 법원으로부터 또 다른 강세 신호를 얻습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788379038,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=79c8a3170b96f96d786b4af4ea4d8db26d046e2b34dfc81e33ed5caecae308f6",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 20,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788400137,
      "signal": "주의 강화",
      "netScore": -5.19,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
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
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788289026,
      "signal": "주의 강화",
      "netScore": -4.76,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788292404,
      "signal": "주의 강화",
      "netScore": -2.44,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -1.4,
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
          "eventId": "98c0ee73ffcdabec5271",
          "headline": "Qualcomm의 AI 야망이 스마트폰 현실 점검에 부딪히다",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1788278700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1874be703028ecd1ec1eae682d8223673d30aca1809e747e7125497f599358e7",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788388712,
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
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788383234,
      "signal": "우호적 변화",
      "netScore": 2.03,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.4,
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
          "score": -1.22,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788371400,
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
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788416999,
      "signal": "중립·확인 대기",
      "netScore": 1.19,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
          "reason": "회사 실적과의 연결고리 확인"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788421002,
      "signal": "우호적 변화",
      "netScore": 2.33,
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
          "score": -1.75,
          "level": "주의"
        },
        "customerConcentration": {
          "label": "고객 집중도",
          "score": -0.52,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -1.05,
          "level": "주의"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -5,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 3.15,
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
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "d49961ea9a55b463e10e",
          "headline": "엔비디아 CEO 젠슨 황 (Jensen Huang) 은 인공지능 (AI) 에 남겨진 모든 국가에 대해 ‘단일 최악의 결과' 라고 말합니다. '이론적 해악' 을 규제하지 마십시오.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788411778,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b8182e0d6c7453317abe78ee04ac26c59ee255520c374004cd3554a4034c2d01",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "23e5f460937b05342416",
          "headline": "소로스 펀드 관리는 마이크론을 거의 8배 증가시켰습니다. AI 메모리는 여전히 최고의 칩 거래 중 하나입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788405955,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab5be9153b4c96e489848d530dc6299eb947b0e33fb8a8f42c68acae9e4b764d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "4d7b69cb7b83acfb69b3",
          "headline": "새로운 Nvidia 거래는 하나의 글로벌 기술 거대 기업에 중요한 신호를 보냅니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788393780,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=03bd8c25bdf8c7c46306c96dc3239273d4813df6e51113d1c3d72171bf3ae341",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "86b649f3fc2b87a9ed44",
          "headline": "데이터 센터는 이제 Sandisk 수익의 3분의 1을 제공합니다 -- 단일 분기에 29억 8천만 달러",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788389881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8e520116dd54ba2750fd498cb9585b825d051b80b68fdf737a32398e4330cf4d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "840acf4171507b96946e",
          "headline": "Vertiv는 데이터 센터 전력 대기 시간을 줄이기 위해 14억 5천만 달러를 지불했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788364077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=862bdb419a226016a345d6da1572c613d7f2cd85064f9affdea76c16868b4ef5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 35,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788405955,
      "signal": "우호적 변화",
      "netScore": 9.86,
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
          "eventId": "23e5f460937b05342416",
          "headline": "소로스 펀드 관리는 마이크론을 거의 8배 증가시켰습니다. AI 메모리는 여전히 최고의 칩 거래 중 하나입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788405955,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab5be9153b4c96e489848d530dc6299eb947b0e33fb8a8f42c68acae9e4b764d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "86b649f3fc2b87a9ed44",
          "headline": "데이터 센터는 이제 Sandisk 수익의 3분의 1을 제공합니다 -- 단일 분기에 29억 8천만 달러",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788389881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8e520116dd54ba2750fd498cb9585b825d051b80b68fdf737a32398e4330cf4d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "840acf4171507b96946e",
          "headline": "Vertiv는 데이터 센터 전력 대기 시간을 줄이기 위해 14억 5천만 달러를 지불했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788364077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=862bdb419a226016a345d6da1572c613d7f2cd85064f9affdea76c16868b4ef5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 24,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788416999,
      "signal": "주의 강화",
      "netScore": -7.5,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "score": -0.7,
          "level": "중립"
        },
        "businessRisk": {
          "label": "사업 리스크",
          "score": -2.97,
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
        },
        {
          "eventId": "bac04a9caa289d28845f",
          "headline": "AVGO SEC Form 8-K 공식 제출",
          "eventLabel": "실적·재무 공식 공시",
          "publishedAt": 1788274800.0,
          "verificationStatus": "confirmed",
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-20260902.htm",
          "factorChanges": {},
          "reason": "SEC 제출 사실 확인, 세부 내용 분석 대기"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 10,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788290100,
      "signal": "중립·확인 대기",
      "netScore": -0.88,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "score": -0.52,
          "level": "중립"
        },
        "competitiveRisk": {
          "label": "경쟁 심화 리스크",
          "score": -1.05,
          "level": "주의"
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
            "competitiveRisk": -2,
            "customerConcentration": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "cc33a54583070082b1ba",
          "headline": "QCOM이 모바일, 컴퓨팅 및 개인 AI를 주도할 Sergio Buniac을 지명한 것에 투자자들이 반응할 수 있는 방법",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788206826,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8ff77c13f33727e57f05fef07440facc6e9187870390de88c9e840e49779bf5c",
          "factorChanges": {
            "growth": 1,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788361242,
      "signal": "주의 강화",
      "netScore": -3.92,
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
          "score": -4.2,
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
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788422501,
      "signal": "주의 강화",
      "netScore": -2.45,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788345025,
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
          "eventId": "25fcbf2b872bc6e8c3b3",
          "headline": "20년 전 대만 반도체에 투자한 100달러가 오늘날 이 정도 가치가 될 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788345025,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=763380e0c76d4db7e125903c56e68ee82d1fa8bef002ab628d46779d41289cae",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
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
          "reason": "회사 실적과의 연결고리 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788405955,
      "signal": "우호적 변화",
      "netScore": 7.75,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.75,
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
          "eventId": "23e5f460937b05342416",
          "headline": "소로스 펀드 관리는 마이크론을 거의 8배 증가시켰습니다. AI 메모리는 여전히 최고의 칩 거래 중 하나입니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788405955,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ab5be9153b4c96e489848d530dc6299eb947b0e33fb8a8f42c68acae9e4b764d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "aa6ba15ccc1d70ed81e3",
          "headline": "항소 후 10개월 만에 NLST 시계 최악의 날 법원, 미크론 특허 5건 뒷받침 — 로스 캐피탈, 200% 가까운 거꾸로 보기 지속",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788394102,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5f38571875b5641522fef4ed0759249eb9f1e8944655e39607df912ce5ae97cf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "86b649f3fc2b87a9ed44",
          "headline": "데이터 센터는 이제 Sandisk 수익의 3분의 1을 제공합니다 -- 단일 분기에 29억 8천만 달러",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788389881,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8e520116dd54ba2750fd498cb9585b825d051b80b68fdf737a32398e4330cf4d",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "840acf4171507b96946e",
          "headline": "Vertiv는 데이터 센터 전력 대기 시간을 줄이기 위해 14억 5천만 달러를 지불했습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788364077,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=862bdb419a226016a345d6da1572c613d7f2cd85064f9affdea76c16868b4ef5",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "cb43821b18e87b0ae45e",
          "headline": "Micron의 전략적 고객 계약이 나를 더욱 걱정하게 만드는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788362737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ed3a7a891348a22931b95a350b9d02ef0eb467a1f9dc0aea34865b482ecd5b45",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 33,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788405452,
      "signal": "우호적 변화",
      "netScore": 3.49,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
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
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788350591,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788353831,
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
          "eventId": "36f183c8a386be1d903c",
          "headline": "GE Vernova의 Roger Martella는 베네수엘라와의 거래에 1,000명의 직원이 필요할 것이라고 말했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788353831,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a214f28de0998efb47c66928cc7be36e5d8cdc47ec823d673a66647723fe07db",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788372720,
      "signal": "중립·확인 대기",
      "netScore": 0.49,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 1.4,
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
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788374807,
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
        },
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "50087760c689afa203b8",
          "headline": "Vertiv의 마이크로그리드 공급업체에 대한 14억 5천만 달러 규모의 거래 이면에 숨어 있는 데이터 센터 방지 정서",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788353880,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=726ad06e9f39d610b2467131c426f62dc375f99ec353b0d00f50c7f72cfa9405",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
      "dataAsOf": 1788154225,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "EME": {
      "ticker": "EME",
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
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
      "updatedAt": 1788441747.2261245,
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
