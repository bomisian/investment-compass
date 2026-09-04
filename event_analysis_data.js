// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1788498542.1912267,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788450534,
      "signal": "주의 강화",
      "netScore": -2.1,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788460010,
      "signal": "중립·확인 대기",
      "netScore": 0.96,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.32,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 4.2,
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
          "score": -0.88,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 18,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788469980,
      "signal": "주의 강화",
      "netScore": -4.35,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "score": -4.37,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "META": {
      "ticker": "META",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788471160,
      "signal": "중립·확인 대기",
      "netScore": -0.98,
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
          "score": -2.1,
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
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 4,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788457675,
      "signal": "주의 강화",
      "netScore": -6.78,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.22,
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
          "score": -4.2,
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
        },
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSLA": {
      "ticker": "TSLA",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788457800,
      "signal": "주의 강화",
      "netScore": -4.2,
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
          "score": -2.8,
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
          "eventId": "547e6d9d0f1481b50188",
          "headline": "Bull vs. Bear: Tesla의 Robotaxi 출시에 대한 나의 견해는 다음과 같습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1788457800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5bde31bc19b4abee125f9994f437c459c2ad6cee54246574e565dd8ae754cb4e",
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
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788443408,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788440400,
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
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788470626,
      "signal": "주의 강화",
      "netScore": -3.7,
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
      "unverifiedEvidenceCount": 5,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788477121,
      "signal": "우호적 변화",
      "netScore": 7.92,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 3.32,
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
          "score": -0.7,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "a679944bf3f827b85f28",
          "headline": "Hock Tan은 Broadcom의 2028년 AI 매출에 2,300억 달러를 기록했습니다. 올해는 4번입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788477121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b37fd1d13d880cb8fecf07556978e321b5448d4ecf29bae8e3d5613ecb23c04b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "회사 실적과의 연결고리 확인"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "1ed72289d61d218e3acc",
          "headline": "Rosenblatt는 대규모 거래 후 Nvidia를 두 배로 줄였습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788470720,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bf6f8843f780644c22602f7937c87c53524cf9d44b2fc1c010df9e34e549f2b",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1c87e702594bd6e0720c",
          "headline": "Micron, Nvidia 및 9월 효과: 98년간의 데이터가 투자자가 해야 할 일",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788467400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e3cfd789e6381cb89bf83f0d06994c43992f2b2ba1e410f6c0f8053fc5c76b8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6fbdc1664f9422be410b",
          "headline": "Nvidia, Huang이 '성장 동인'이라고 칭찬하면서 129억 달러 규모의 Hugging Face 거래 확정",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788457515,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=83a1f11a644899da4dfcf19f93a9fb86c1c485cc2a803d801ee6207a3c314ea3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "10bfe136926db68873a5",
          "headline": "Cramer, Broadcom의 300억 달러 AI 베팅은 구매할 수 없는 주식에 달려 있다고 경고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788456233,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbd009e0a2ae87f7151cc05c490f18ba63837b0611cd007d9aed5fbfe788fe14",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "349d7baacda4201eb266",
          "headline": "Jensen Huang이 129억 달러 규모의 허깅 페이스 거래를 확정한 후 Nvidia 주가 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1788450236,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9c9efae4a29541e7e9afff08ecd5f1bd52e101bb7df6d0284e4ce6dd39fab414",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 40,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788477121,
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
          "score": 0.0,
          "level": "중립"
        }
      },
      "evidence": [
        {
          "eventId": "a679944bf3f827b85f28",
          "headline": "Hock Tan은 Broadcom의 2028년 AI 매출에 2,300억 달러를 기록했습니다. 올해는 4번입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788477121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b37fd1d13d880cb8fecf07556978e321b5448d4ecf29bae8e3d5613ecb23c04b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "10bfe136926db68873a5",
          "headline": "Cramer, Broadcom의 300억 달러 AI 베팅은 구매할 수 없는 주식에 달려 있다고 경고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788456233,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbd009e0a2ae87f7151cc05c490f18ba63837b0611cd007d9aed5fbfe788fe14",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
          "reason": "사업·실적 연결 경로 확인 필요"
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
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 27,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788444356,
      "signal": "주의 강화",
      "netScore": -6.31,
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
          "score": -2.45,
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
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788290100,
      "signal": "중립·확인 대기",
      "netScore": -0.32,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788470392,
      "signal": "주의 강화",
      "netScore": -8.9,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 8,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788471580,
      "signal": "우호적 변화",
      "netScore": 6.68,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 12,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1788498542.1912267,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788319010,
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
          "eventId": "be886586317106dbfc23",
          "headline": "어플라이드 머티리얼즈 자사주 매입: 역사 및 투자자 영향 설명",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788319010,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e9cf7661d15f873fa05ed31caef7ac055d8ac9497816dd1916c155a9e296d6a",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788278554,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "KLAC": {
      "ticker": "KLAC",
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788477121,
      "signal": "우호적 변화",
      "netScore": 7.65,
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
          "eventId": "a679944bf3f827b85f28",
          "headline": "Hock Tan은 Broadcom의 2028년 AI 매출에 2,300억 달러를 기록했습니다. 올해는 4번입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788477121,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b37fd1d13d880cb8fecf07556978e321b5448d4ecf29bae8e3d5613ecb23c04b",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "1c87e702594bd6e0720c",
          "headline": "Micron, Nvidia 및 9월 효과: 98년간의 데이터가 투자자가 해야 할 일",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1788467400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5e3cfd789e6381cb89bf83f0d06994c43992f2b2ba1e410f6c0f8053fc5c76b8",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "10bfe136926db68873a5",
          "headline": "Cramer, Broadcom의 300억 달러 AI 베팅은 구매할 수 없는 주식에 달려 있다고 경고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1788456233,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbd009e0a2ae87f7151cc05c490f18ba63837b0611cd007d9aed5fbfe788fe14",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "a794da85bd3224401c5f",
          "headline": "연준의 9월 결정은 마이크론 자체 수익보다 더 큰 타격을 줄 수 있습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1788449700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=d8239a05c5bbef1806c2de55b58a63fe0ad6c8988ceecff623bab1bdaaa4c857",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
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
          "reason": "AI 서버 메모리 수요와 가격 강세"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 36,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788405452,
      "signal": "우호적 변화",
      "netScore": 2.44,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.05,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.92,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 6,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788439557,
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
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788289235,
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 1,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788430800,
      "signal": "중립·확인 대기",
      "netScore": -1.68,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
        },
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
      "unverifiedEvidenceCount": 3,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788372720,
      "signal": "우호적 변화",
      "netScore": 2.79,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.52,
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
          "score": 0.0,
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
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
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
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 2,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "PWR": {
      "ticker": "PWR",
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
      "dataAsOf": 1788450600,
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
          "score": 0.0,
          "level": "중립"
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
      "unverifiedEvidenceCount": 9,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
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
      "updatedAt": 1788498542.1912267,
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
