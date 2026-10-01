// 자동 생성 파일 - 중요 뉴스의 기업분석 반영
const EVENT_ANALYSIS_DATA = {
  "schemaVersion": 1,
  "generatedAt": 1790827688.014613,
  "records": {
    "MSFT": {
      "ticker": "MSFT",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790777907,
      "signal": "중립·확인 대기",
      "netScore": 1.39,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 2.27,
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
          "eventId": "de477e34add1d3d18ee9",
          "headline": "별자리 에너지: 원자력 발전 붐으로의 더욱 매력적인 진입점",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790777907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bca46b101bf91743494afb78ea9f8f722a58c2ab6fb6e0603070cf6c6e80ca3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b6a98167a10e98033b12",
          "headline": "Microsoft: Xbox 세그먼트 개편",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790759798,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a685d8e578e53fe077d45ece7ab9db25a999a11bc2fa844abcb84cc1daeb14b4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6fe9bf8765596c2fc91f",
          "headline": "MSFT 주식이 고갈되었나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790713937,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5269c26441c3abf13e705ed88d84cca3c0a1b94315f7cd480a5b50aa8846f2a8",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fb99bdb450b2b46e5dfc",
          "headline": "워렌 버핏과 빌 애크먼이 알파벳, 아마존, 마이크로소프트, 메타를 사랑하는 이유를 설명하는 두 가지 숫자",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790704320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5fe16063f9dd6ed4111dbfd11d4c5a1c2905557d82ff4e6ac8c74ffcdc65cec",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "14f536041b0a07af25f0",
          "headline": "2026년 디지털 혁신 시장 보고서: Microsoft, Google, IBM, Accenture 및 Oracle이 AI, 클라우드 및 자동화를 가속화함에 따라 2조 4700억 달러의 수익이 2030년까지 5조 1000억 달러로 급증할 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790697420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbf169ae7e7a6e63f914b2b8ebd494377b20d76375560a69f136a10eba4dc481",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f505606a97ed76c3f864",
          "headline": "2026년 차세대 컴퓨팅 시장 보고서: Microsoft, AWS, NVIDIA, IBM 및 Intel이 AI, 양자 및 엣지 컴퓨팅을 가속화함에 따라 2030년까지 4,860억 달러의 매출 급증을 8,118억 5천만 달러로 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790697360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91fb73dffa21ff5d80fdaf7d34a2d0b476d482388a30e3c4850260c6ce25fe8e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "eb145d717ac5dd655bbb",
          "headline": "2026년 클라이언트 컴퓨팅 글로벌 시장 보고서: 매출이 2030년까지 417억 3천만 달러에서 2,778억 8천만 달러로 증가함에 따라 AI, 하이브리드 및 엣지 파괴를 활용—Microsoft, Apple, Dell, Lenovo 및 HP를 벤치마킹하여 점유율 B 확보",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790669760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11813ebad115844ef52fa88f70f3eda6381a3cd945b0688ad7b71e3738a709c7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 7,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "GOOGL": {
      "ticker": "GOOGL",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790774940,
      "signal": "주의 강화",
      "netScore": -6.72,
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
          "score": -5,
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
          "eventId": "be2f24e078980d90d55c",
          "headline": "Socure, 디지털 ID를 삭제하는 규제 기관으로서 삼성 및 Google과 함께 mDL 검증 출시",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790774940,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9455b2b67da1c2b8d0e3e626b99cb98f0953e700bf32c97853c408ee693e9d46",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "05dd8b9611aa5e83c8be",
          "headline": "알파벳: 아무도 이야기하지 않는 AI 승자",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790711970,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=423e22e36d01e009356d82e8c81dcefda5262f4825bcb45d72fa7df64b9d69f8",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "fb99bdb450b2b46e5dfc",
          "headline": "워렌 버핏과 빌 애크먼이 알파벳, 아마존, 마이크로소프트, 메타를 사랑하는 이유를 설명하는 두 가지 숫자",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790704320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5fe16063f9dd6ed4111dbfd11d4c5a1c2905557d82ff4e6ac8c74ffcdc65cec",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b9803e02cb6f518c0e90",
          "headline": "Bank of America가 Meta의 쇼핑 에이전트로 선정되면서 Apple은 2% 하락했습니다. 알파벳 전표, Microsoft는 꾸준한 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790703787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=079983d534993d813acc1a04372fd4576a566e907c6daf552a7fd3919d8b8148",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "14f536041b0a07af25f0",
          "headline": "2026년 디지털 혁신 시장 보고서: Microsoft, Google, IBM, Accenture 및 Oracle이 AI, 클라우드 및 자동화를 가속화함에 따라 2조 4700억 달러의 수익이 2030년까지 5조 1000억 달러로 급증할 것입니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790697420,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dbf169ae7e7a6e63f914b2b8ebd494377b20d76375560a69f136a10eba4dc481",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "410b8352c314242bfcba",
          "headline": "Magnite의 성장 전망은 Google 법원 판결 이후 '상당히' 개선되었다고 BofA는 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790695442,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b96c896e47d0c8718a9b3eb85fcd4337a8cba8b0c5f606abea44abb3562478ea",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "90bbde23a1609d7a4576",
          "headline": "억만장자 자금 관리자가 가장 좋아하는 AI 주식 2개를 선택했습니다(Nvidia나 Alphabet은 아닙니다).",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790681161,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ddbe6ec8f5d5edb27302fbff5d8dd3ffbc3c5c91fca475eb0eac3882d05e3d63",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b0773e95073e3e8d7c96",
          "headline": "Google, 검색 데이터 및 AI 서비스 액세스에 대한 EU 명령에 항소",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790677865,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c580aeae71cc91f9f2edc97a2973b07f022985e6452448fe929e596b7a2493b7",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f2c0a3f058df7ce3b7bb",
          "headline": "Google의 4억 3백만 유로에 달하는 개인정보 보호 벌금으로 Alphabet의 EU 규제 위험에 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790622039,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ed22390073d186221c5181e4e63e111884fff40d002cd79c454f30f7c1e246f1",
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
    "AMZN": {
      "ticker": "AMZN",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790817386,
      "signal": "우호적 변화",
      "netScore": 10,
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
          "score": -1.22,
          "level": "주의"
        },
        "shortTermMomentum": {
          "label": "단기 뉴스 모멘텀",
          "score": 4.38,
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
          "eventId": "7dac21f1d93fb8ea90db",
          "headline": "CEG 주가 밤새 상승: Constellation, Amazon과 20년 원자력 계약 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790817386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28875decffb04ca755d66f2a77f936619eed8e8ea6a6e3e494fbc092a4b150a9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3ddb2ec57353bc895f1b",
          "headline": "컨스텔레이션 에너지(Constellation Energy) 주가는 아마존 원자력 발전 계약으로 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790801086,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96e2ec16b7523fceb3accad82133a5a2a5c56a7f092efedc3614e16f97458a9f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "89b81cf29de4098fa03d",
          "headline": "Amazon과 Calvert Cliffs의 계약으로 원자력 발전소의 수명을 연장하고 새로운 원자로를 탐색할 것입니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790798700,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=550458b0defb76726d97772b8e0f16c56a2310552ca6cb8d18248015b9b4f45d",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "d9429347d27d6133237d",
          "headline": "Constellation과 Amazon은 Calvert Cliffs에 190메가와트의 원자력 용량을 추가하는 20년 전력 구매 계약을 발표했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790798400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b48b08f2162baae41e27808ff8c840e7e2a6995a76e3cc6de1cad3da6d3f27e5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "30311c519b024fe72de8",
          "headline": "AWS가 Nvidia의 도전 과제를 강화함에 따라 Amazon, 10억 달러 규모의 Synopsys 거래 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790796799,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8c26ba3bfc024599a5097724a731007e9c0dc6e84685e84e1218a807becf787",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "05bbbc0d31bf2f8dc53e",
          "headline": "Synopsys, Amazon과 10억 달러 규모의 실리콘 IP, AI 소프트웨어 계약 체결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790788108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=619fb8f356e576f71255b98230ca09215e135a87358eaffbd3c9e3c7d8ced502",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d88a70d2957813290fb2",
          "headline": "AWS는 Synopsys와 10억 달러 이상의 칩 설계 라이선스 계약을 체결했습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790775993,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=18624a06df4fff4be8675f2445b1d1cc0953cdca8482952124abeb2de2fc89e1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "36a8a7ecd7a5c6e11a2e",
          "headline": "아마존 프라임 빅딜 데이 미리보기: 경제적 압박으로 인해 6월 프라임데이 세일보다 딜 모색이 더 많아졌습니다",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790773200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b2f91e0e59d5d3dd7a095707036be35f3d57b8408b51e9038542ab8646e6ab71",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0f78292a37b2c3d81acc",
          "headline": "Synopsys와 Amazon은 맞춤형 실리콘에 대한 전략적 다년간 IP 계약을 발표했습니다. 협업은 클라우드 및 AI 기반 엔지니어링으로도 확장됩니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790773200,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=42340b2b5e7624f73c5b4a8c5e510aba0b3b888558c32dcf2e32cb9467f0072e",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "dfb69c8f361506c21afd",
          "headline": "인류의 IPO 제출은 주요 취약점을 드러냅니다. 수익 집중으로 인해 위험이 높아짐에 따라 판매 흐름의 약 50%가 Amazon과 Google을 통해 발생함: 보고서",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790770697,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c372ef091144bce462a4693104be1599db6b8865e879fad757dce4619ab90eee",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92e3fb02dfcafc94dbcc",
          "headline": "이 3가지 AI 주식은 Meta의 Muse를 차단하기 위해 Amazon의 선택에서 큰 승자가 될 준비가 되어 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790754600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c04ede28227099abe60f969c2362828fad36bf797514a0fb8180ad6a5aedb01",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "16eef998e091f775eefb",
          "headline": "아마존(AMZN)과 애플(AAPL)은 마켓플레이스 판매에 대해 영국 집단소송에 직면해야 합니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790748498,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=669783a8227114e6de2f820923e64d9c78a1feec557326ccd2c999418529837d",
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
    "META": {
      "ticker": "META",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790807721,
      "signal": "우호적 변화",
      "netScore": 3.07,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 2.1,
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
          "score": -0.7,
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
          "eventId": "36d4e817286b3d43f32c",
          "headline": "VIG는 늦어도 2035년까지 메타 또는 알파벳의 배당금을 소유할 수 없습니다: 지수에 기록된 10년 규칙",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790807721,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=385fe360bd925dc7aec0eaf265ded2160ac19c98a77a7438b11801e72ced6398",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "de477e34add1d3d18ee9",
          "headline": "별자리 에너지: 원자력 발전 붐으로의 더욱 매력적인 진입점",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790777907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bca46b101bf91743494afb78ea9f8f722a58c2ab6fb6e0603070cf6c6e80ca3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "92e3fb02dfcafc94dbcc",
          "headline": "이 3가지 AI 주식은 Meta의 Muse를 차단하기 위해 Amazon의 선택에서 큰 승자가 될 준비가 되어 있습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790754600,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7c04ede28227099abe60f969c2362828fad36bf797514a0fb8180ad6a5aedb01",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "fb99bdb450b2b46e5dfc",
          "headline": "워렌 버핏과 빌 애크먼이 알파벳, 아마존, 마이크로소프트, 메타를 사랑하는 이유를 설명하는 두 가지 숫자",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790704320,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e5fe16063f9dd6ed4111dbfd11d4c5a1c2905557d82ff4e6ac8c74ffcdc65cec",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b9803e02cb6f518c0e90",
          "headline": "Bank of America가 Meta의 쇼핑 에이전트로 선정되면서 Apple은 2% 하락했습니다. 알파벳 전표, Microsoft는 꾸준한 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790703787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=079983d534993d813acc1a04372fd4576a566e907c6daf552a7fd3919d8b8148",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "914e69549026c68ad1ca",
          "headline": "Meta는 대규모 AI 투자를 수익으로 전환하기 위해 소비자를 넘어 찾고 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790674204,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=84825a24505ba0db6f260edb85e358fec1c41a96fbaa17e69206f1df5af80b3b",
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
    "AAPL": {
      "ticker": "AAPL",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790803409,
      "signal": "주의 강화",
      "netScore": -9.46,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -2.45,
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
          "eventId": "8749c2287eba81efb104",
          "headline": "투자자들이 예상보다 낮은 인플레이션 데이터를 무시함에 따라 S&P 500, Dow는 하락 마감 - MGM, SPCX, AAPL, TSM In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790803409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8ee20b68da4f30c86817c3e8c558746e67664bb035e14246f6f82f294a2fc4a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c992c6aef9f54a73c695",
          "headline": "Cramer는 새 휴대폰이 나오기 전에 Apple을 사라고 말했습니다. Apple의 듀오 모델은 \"놀라운 정도\"이기 때문입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790786819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=49cacb9c9c1d8eae92007f150c6e13417160ceb7987bfb2b4a354933b1295a61",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "529d4453631ae95d8eee",
          "headline": "QUALCOMM(QCOM)은 Apple 특허 계약을 갱신하고 AI, 클라우드 푸시를 심화한 후 6.7% 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790785170,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce490dc860da448ed0eaf18350c5b1a7fa898609cba8afb37f707f9c45d4fa90",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1c31ac315baa273dc334",
          "headline": "위스콘신 AI 데이터 센터 지연 가능성 보고 후 오라클 주가 1.8% 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790775827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec72dc0e97fc31589e09008f281bdacbd0a75c4981df575b8613c2261423859c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "25dc717fb2b07a5ff45d",
          "headline": "Apple이 Qualcomm과 라이센스 계약을 갱신함에 따라 QCOM 주식을 플레이하는 방법",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790773203,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a086872d6be15fc7b9bb394c6f3d844296c1a9f2c903446a6d791a1651c330be",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "16eef998e091f775eefb",
          "headline": "아마존(AMZN)과 애플(AAPL)은 마켓플레이스 판매에 대해 영국 집단소송에 직면해야 합니다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790748498,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=669783a8227114e6de2f820923e64d9c78a1feec557326ccd2c999418529837d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ad35ec884648fe43904",
          "headline": "AAPL 주식이 사상 최고치에서 후퇴: 조사 회사는 Apple이 올해 600만 대의 iPhone Duo를 판매할 수 있다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790744870,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48c00d487e3102d6248327f8af0c102d2aaa795c483683307689b27e6eb01d5b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "e227c2a28a84461b826f",
          "headline": "S&P 500, Dow는 높은 수익률 압력으로 인한 손실 확대 — SPCX, TGT, AAPL, MU, NTAP 집중",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790721008,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df076b1e0ea4fcf5a99c515a953021e0b32023f0067e91178578e91f8038213b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b9803e02cb6f518c0e90",
          "headline": "Bank of America가 Meta의 쇼핑 에이전트로 선정되면서 Apple은 2% 하락했습니다. 알파벳 전표, Microsoft는 꾸준한 유지",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790703787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=079983d534993d813acc1a04372fd4576a566e907c6daf552a7fd3919d8b8148",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2287fdaee8f16e55db50",
          "headline": "퀄컴 주가는 AI와 애플 랠리가 냉각되면서 하루 만에 7% 하락했다. 2027년 매출 추정치의 의미는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790692298,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=183a9c78b76bdcc51136f8f8146bd5a698aa670669df0bdc4a5c1706729274cf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "가격 전가 시 마진 방어, 판매량·교체주기 둔화 위험"
        },
        {
          "eventId": "eb145d717ac5dd655bbb",
          "headline": "2026년 클라이언트 컴퓨팅 글로벌 시장 보고서: 매출이 2030년까지 417억 3천만 달러에서 2,778억 8천만 달러로 증가함에 따라 AI, 하이브리드 및 엣지 파괴를 활용—Microsoft, Apple, Dell, Lenovo 및 HP를 벤치마킹하여 점유율 B 확보",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790669760,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=11813ebad115844ef52fa88f70f3eda6381a3cd945b0688ad7b71e3738a709c7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8f6e0a20ed1656796873",
          "headline": "Qualcomm: 휴대폰 수익 악화 및 경쟁 해자 약화",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790639900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df14e666052f40ca2e1ba3829fc402e5dcabb3e1e6c20bd18d89eabb6e21dcee",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
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
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790772346,
      "signal": "주의 강화",
      "netScore": -3.85,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.87,
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
          "eventId": "7b8067e01cf1a55fd54f",
          "headline": "시장이 Tesla와 SpaceX를 동시에 가혹하게 처벌한다면 어떻게 될까요?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790772346,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6df815b103448c7ce746ee33b4418ef9cf24fc4d0628cb6c03326c91f5fd7b85",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "675e61ebde2a3ecc9aa8",
          "headline": "리비안 대. Tesla: 적어도 시장은 Rivian을 실제 모습으로 취급합니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790772308,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1f2b5b8f3210a521c796fcde6bc7ec41eced29dddeb73064af1eb6e7880e0b98",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7b3e9e5cc4ffcc5f687e",
          "headline": "나스닥 선물이 프리마켓 상승하는 이유는 무엇입니까? MU, TSLA, CAPR, VNDA, ASTS, HOOD, BA 주식에 집중",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790756993,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8061e07c3ce84f11db65cb4769735fc78b1a562630c4f6b75ed2233268f23dec",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0f7f894b68f03f9f21df",
          "headline": "Tesla, 300억 달러 규모의 정기 대출 및 회전 신용 시설 계약 체결",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790716411,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=22d36f2c6b08a84f7fd3f14f10d23e93b0fea92ed7198267e88096db2d6ff0fa",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "0a2ae68bd6673e79a63a",
          "headline": "Elon Musk는 일주일에 20,000대의 Optimus 로봇을 만들고 싶어합니다. 단 하나의 문제가 있습니다. Tesla는 여전히 일을 할 수 없습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790695233,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2398788a41d8a489a5455a082d8eda387c19189d0b2218772b0c7efc56647212",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e40b941fb47ec0d5be02",
          "headline": "Tesla(TSLA)의 보증 청구서가 늘어나고 있습니다. 미래의 마진은 과거 판매에 대한 비용을 지불하고 있습니까?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790647737,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7e95261c59ea3411791a01cdbeeb5fda5130dcc418c034ab2675ea9cb65f9fc5",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7a9c3e7342e212083bd7",
          "headline": "SpaceX 대 Tesla: 향후 5년간 어떤 Elon Musk 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790609100,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f5768e7377628f5a563dd28a7c1194e44ead46e91850b8bb75d00da90f144c94",
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
    "ORCL": {
      "ticker": "ORCL",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790793120,
      "signal": "주의 강화",
      "netScore": -4.14,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.22,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 1.22,
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
          "score": -3.5,
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
          "eventId": "7c0eae5d7ba4e2795881",
          "headline": "오라클 주가는 고점 대비 60% 하락했습니다. 내가 아직도 구매하지 않는 이유는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790793120,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7497e076cb0508135a64dcf3be06ba5a6124ddd2c84eef6f1708a0a73eb2a543",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "1c31ac315baa273dc334",
          "headline": "위스콘신 AI 데이터 센터 지연 가능성 보고 후 오라클 주가 1.8% 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790775827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec72dc0e97fc31589e09008f281bdacbd0a75c4981df575b8613c2261423859c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "0e8711d9b6aecf4b0618",
          "headline": "오라클 주식은 지금 구매 가능한가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790746620,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=14fbc1758e3894e92626f19ea198fb167b75e71e7994f00436dd749a297f4541",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e1a4f31815b74a29b94b",
          "headline": "Palantir의 가치는 Oracle 매출의 10분의 1 미만으로 Oracle만큼 가치가 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790737561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=55c85eea021a4b3f2a0b284ca1d7725e4ba06fc63dd71f261aa5f190bd22eed4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "3146039f6a2cc26a04c7",
          "headline": "NTAP 주가 사상 최고치 경신: NetApp, 클라우드 인프라 추진을 위해 SAP, Oracle 및 Supermicro와의 전략적 파트너십 확장",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790711268,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=efe745b6908904e67351b4f79914300f2d9b32f141c22b767d6361e905641acc",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "OCI 서비스 범위 확대 가능성, 매출화 시점 불확실"
        },
        {
          "eventId": "1e633b125ee50754bf15",
          "headline": "Oracle은 Fusion Claw 출시로 25개의 에이전트 애플리케이션을 추가하면서 5% 증가했습니다. Salesforce는 정체 상태를 유지하고 ServiceNow는 미끄러졌습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790697141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1a9d37fd5f3965059517e1a8a3388c8e5137fa4a88b8c696665cfdd7788a8e1",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "5fbdf5a0ed1839f87b54",
          "headline": "SWIFT의 Oracle 블록체인 거래에는 Quant(QNT) 연결이 있지만 XRP는 어디에 적합합니까?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790669925,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ac3a6e18a91c148e08126ad24036f2f7a54c0307d4d89625c767255610056d8c",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "362b2499166f18e14898",
          "headline": "Accenture(ACN), 공급망 확보 및 Oracle Cloud 혁신 성공",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790662175,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=037546b6199c388b880faddfca8ba15a090e4c5c5c9ec6f17f9d2f3c2555fb5a",
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
    "CRM": {
      "ticker": "CRM",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790697141,
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
          "eventId": "1e633b125ee50754bf15",
          "headline": "Oracle은 Fusion Claw 출시로 25개의 에이전트 애플리케이션을 추가하면서 5% 증가했습니다. Salesforce는 정체 상태를 유지하고 ServiceNow는 미끄러졌습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790697141,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f1a9d37fd5f3965059517e1a8a3388c8e5137fa4a88b8c696665cfdd7788a8e1",
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
    "PLTR": {
      "ticker": "PLTR",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790812505,
      "signal": "주의 강화",
      "netScore": -3.99,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
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
          "eventId": "ca0b78262fce14ab2b4a",
          "headline": "ServiceNow 대 Palantir Technologies: 2026년에는 어느 기술주를 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790812505,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=798e106826e9de2192270e05537827876be12e9f21ed313169722199fe0ca1de",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "e1a4f31815b74a29b94b",
          "headline": "Palantir의 가치는 Oracle 매출의 10분의 1 미만으로 Oracle만큼 가치가 있습니다.",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790737561,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=55c85eea021a4b3f2a0b284ca1d7725e4ba06fc63dd71f261aa5f190bd22eed4",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "667b1f8f8ca589511a70",
          "headline": "Michael Burry는 MU, NBIS, NVDA, PLTR 공매도를 풋으로 교환 — AI 버블이 '나중에보다 빨리' 터질 수 있다고 말합니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790628163,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=30700271e6181cc735bab112c230aa0551f18a37307e5e36857e5d834888d07c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4fd948fb9353a328845d",
          "headline": "Palantir는 SMART에 대한 FAA 계약을 체결하지 못했습니다. 어쨌든 주식을 살 시간인가?",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790611980,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c0e16a7e2236ea5bedd337cd3cda61d4a74bf319e28d5c93e33234d9d81d9f37",
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
    "NVDA": {
      "ticker": "NVDA",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790817817,
      "signal": "우호적 변화",
      "netScore": 6.0,
      "summary": "중요 뉴스가 성장 또는 경쟁력에 우호적으로 연결됩니다. 실제 공시 숫자로 확인될 때 신뢰도가 더 높아집니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 2.1,
          "level": "우호적"
        },
        "growth": {
          "label": "성장성",
          "score": 5,
          "level": "우호적"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.62,
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
          "eventId": "f45ae8a88327a1153100",
          "headline": "Nvidia 스택과 AI 기반 엣지 보안 통합이 Palo Alto Networks(PANW)의 투자 사례를 바꾸고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790817817,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a6afccba13160b8efd0d10ae187fa3c643fd3b77e26585b4bfef922ba4fc429e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "d74f764ca09818404c9f",
          "headline": "Anthropic은 클라우드 및 데이터 센터에 5,180억 달러를 지출할 계획입니다. 아마존에는 이미 1000억 달러 이상이 약속되어 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790816221,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5af6b2c051a415306e7762b6c8a3feebce0de42925d9c04761d4dcb2e67e4600",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "d37a6f45e006e5afe862",
          "headline": "Nvidia는 10월에 괴물을 만들 수 있습니다. 이유는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790814180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=098f9eddad33e548b6ace72d5b5df9d3bca0678e963281149902cb7192461575",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "70582716eb750e5389b3",
          "headline": "SPY의 배당을 위해 3개월을 기다리는 것은 잊어버리세요. Invesco의 고배당 펀드는 매달 지급됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790809589,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff7223554078df0ced7983593f33c82ca9484f684de84a872f948b0a1901ab86",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "76674ba06ec9e7bbcb73",
          "headline": "Nvidia, Broadcom 및 AMD 투자자는 달력에 10월 15일을 표시해야 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790809440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a438b5d0e95cb6bd7403fa88539f5348b58651232f9615f1d3f5d35a122dbaa",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "30311c519b024fe72de8",
          "headline": "AWS가 Nvidia의 도전 과제를 강화함에 따라 Amazon, 10억 달러 규모의 Synopsys 거래 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790796799,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=e8c26ba3bfc024599a5097724a731007e9c0dc6e84685e84e1218a807becf787",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "52b2fa8ceb442363713c",
          "headline": "Deutsche Bank가 매수 의사를 밝힌 후 Nvidia 공급업체 FormFactor의 주가가 급등했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790790540,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=da996aab99e37fa61106f4e1d778d5ed81cd50d778304f7d0e8f33e060dbc357",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "05bbbc0d31bf2f8dc53e",
          "headline": "Synopsys, Amazon과 10억 달러 규모의 실리콘 IP, AI 소프트웨어 계약 체결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790788108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=619fb8f356e576f71255b98230ca09215e135a87358eaffbd3c9e3c7d8ced502",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "702be6bdc6d216849274",
          "headline": "9월 30일 정오 주식 시장: 인플레이션 데이터 둔화로 시장 상승, 투자자들은 마이크론 수익 기대",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790786373,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9a7b4bca9b1a4309d6a925cc89baefdfbbb69cd7ecf668d5abdfc06493049831",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        },
        {
          "eventId": "1919ed183035f36200af",
          "headline": "2026년 엄청난 이익 이후 NVIDIA, Micron 및 SanDisk는 2027년에도 계속 상승할 수 있습니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790785853,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a15a5bc04dedc10a49256249fbeb0f8e33859ca15b3b5b9d47270d6f611ef66d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b412ca3fff1db1f4ee01",
          "headline": "칩 경쟁자가 9월 놀랍도록 강세를 보이면서 인텔은 3% 상승; NVIDIA의 상승, AMD의 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790785753,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4bcd5a5cd8da8dd27f905adce97cf90beb0d7209180c08583789f727f5171568",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "bbd621df0146549d9c04",
          "headline": "Piper Sandler는 Microsoft Target을 높이고 E7 및 AI에서 수십억 달러의 잠재력을 확인합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790784926,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec814ddc45d29bd4a70d6d3f62d73041df1e9bc13e7c52a1fe41d78d6af7a3c7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 컴퓨팅 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 46,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AMD": {
      "ticker": "AMD",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790817817,
      "signal": "우호적 변화",
      "netScore": 7.13,
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
          "score": -4.72,
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
          "eventId": "f45ae8a88327a1153100",
          "headline": "Nvidia 스택과 AI 기반 엣지 보안 통합이 Palo Alto Networks(PANW)의 투자 사례를 바꾸고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790817817,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a6afccba13160b8efd0d10ae187fa3c643fd3b77e26585b4bfef922ba4fc429e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "d74f764ca09818404c9f",
          "headline": "Anthropic은 클라우드 및 데이터 센터에 5,180억 달러를 지출할 계획입니다. 아마존에는 이미 1000억 달러 이상이 약속되어 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790816221,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5af6b2c051a415306e7762b6c8a3feebce0de42925d9c04761d4dcb2e67e4600",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "70582716eb750e5389b3",
          "headline": "SPY의 배당을 위해 3개월을 기다리는 것은 잊어버리세요. Invesco의 고배당 펀드는 매달 지급됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790809589,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff7223554078df0ced7983593f33c82ca9484f684de84a872f948b0a1901ab86",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "5a05fe9c6a91476fe414",
          "headline": "Advanced Micro Devices vs. Arm: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790809209,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05f0faa62c99f8b860e776225960b1b9282d8a0daccfaf8d8a47b1ec1a05a793",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "01cc4984e516cab98c3b",
          "headline": "HPE CFO, AMD Helios AI 랙 배포를 위해 Vultr와 12억 달러 규모의 거래 논의",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790797337,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=530663342e79870a433bfa5b2de632a6ee2af5b4f85b406b5ab140f497de6ff1",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "05bbbc0d31bf2f8dc53e",
          "headline": "Synopsys, Amazon과 10억 달러 규모의 실리콘 IP, AI 소프트웨어 계약 체결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790788108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=619fb8f356e576f71255b98230ca09215e135a87358eaffbd3c9e3c7d8ced502",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "702be6bdc6d216849274",
          "headline": "9월 30일 정오 주식 시장: 인플레이션 데이터 둔화로 시장 상승, 투자자들은 마이크론 수익 기대",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790786373,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9a7b4bca9b1a4309d6a925cc89baefdfbbb69cd7ecf668d5abdfc06493049831",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "b412ca3fff1db1f4ee01",
          "headline": "칩 경쟁자가 9월 놀랍도록 강세를 보이면서 인텔은 3% 상승; NVIDIA의 상승, AMD의 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790785753,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4bcd5a5cd8da8dd27f905adce97cf90beb0d7209180c08583789f727f5171568",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bbd621df0146549d9c04",
          "headline": "Piper Sandler는 Microsoft Target을 높이고 E7 및 AI에서 수십억 달러의 잠재력을 확인합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790784926,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec814ddc45d29bd4a70d6d3f62d73041df1e9bc13e7c52a1fe41d78d6af7a3c7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "1284af53445e61a8e677",
          "headline": "EMS는 AMD 공급업체 인수를 통해 울타리 및 허리케인 보호 전반에 걸쳐 제품 제공 범위를 확대합니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790781180,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c96a536b481f73798beef1ed203e7c3785dc5764b929c33dab9cc4af44105693",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "b2a7b0306e701a097adc",
          "headline": "Coherent의 PhotonLink 푸시는 투자자를 위한 AI 데이터 센터 광학 엣지(COHR)를 재구성하고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790780952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53f315e8d6ee6d1832aa8da105118ee59f97c1fcf44db7f6578e6d350ddf49c4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        },
        {
          "eventId": "165793d34e26f0ab2f21",
          "headline": "EMCOR의 AI 기반 데이터 센터 백로그 및 인수가 EMCOR 그룹(EME) 투자자에게 미치는 영향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790777499,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ba2d828b5db320bfc56a72d85f8a674311e7205b4249c321eeb4c1dc402705ef",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 39,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "AVGO": {
      "ticker": "AVGO",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790809440,
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
          "score": -2.27,
          "level": "주의"
        },
        "valuationBurden": {
          "label": "밸류에이션 부담",
          "score": -2.62,
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
          "eventId": "76674ba06ec9e7bbcb73",
          "headline": "Nvidia, Broadcom 및 AMD 투자자는 달력에 10월 15일을 표시해야 합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790809440,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4a438b5d0e95cb6bd7403fa88539f5348b58651232f9615f1d3f5d35a122dbaa",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "b412ca3fff1db1f4ee01",
          "headline": "칩 경쟁자가 9월 놀랍도록 강세를 보이면서 인텔은 3% 상승; NVIDIA의 상승, AMD의 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790785753,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4bcd5a5cd8da8dd27f905adce97cf90beb0d7209180c08583789f727f5171568",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f7c4d4fa261b1dc74b3c",
          "headline": "Broadcom vs. SK Hynix: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790778901,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4727c817a76bb9bb2b2ea4a1fb8cb5453883ad980a03ffad1635bfc094534805",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "629e78ec0241ecaeab96",
          "headline": "Broadcom 대 NVIDIA: 2026년에는 어떤 기술 주식을 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790774341,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=872c9f4e118e82c038a8020d70b5cbeab8ee164d42bf633e122a33c7636a9214",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3cc99b7cba5bb0905d9c",
          "headline": "Broadcom vs. Qualcomm: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790770801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=63d7092cecaa0e9e11b0aa2091f6175e232409165fd108fadcf208f5dc3ec931",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7907349f89af6f8ad0fd",
          "headline": "Marvell은 2026년에 210% 상승합니다: 이익을 얻나요, 아니면 더 많이 사나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790708512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=513f74c8c35d4f0cfed1620f5cbe2dbf7603340c1e5c30742f2664c172d78bf0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "74900e07dd2cea30df7c",
          "headline": "167억 달러 규모의 AI 엔진이 마진 테스트에 직면하면서 Broadcom 주가는 약 3.2% 상승",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790707601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cb8b32c7d964b863df44f8539dd51812887f54327e0d02334589cdf35160c33f",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d7168ee8b2f13c506bdd",
          "headline": "Broadcom-Toppan JV, 싱가포르에 '최초' 기판 공장 설립",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790689313,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5117758abdb846c71ccc7faf972dbae02f4b9d3b53e4075d74aab7e8d23c29ef",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "db16c1259bff667165c7",
          "headline": "브로드컴이 아닙니다. AMD가 아닙니다. Nvidia의 가장 큰 위협은 계속해서 마음에 가깝고 소중한 것입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790673961,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=133ab9206371966c9bbbaf2629830513c37bf335f467ac43a1a16845c2cd8f91",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "41da8439d04ede29eb98",
          "headline": "Broadcom 대 Marvell Technology: 2026년에는 어느 반도체 주식을 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790627378,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b78a942e2c9f8288e314af078a248061aa2c8937e49521b76557761845e29fe2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "2fbd2ca170283e77894e",
          "headline": "Broadcom 주식은 1,150억 달러 예측으로 전환율이 높아짐에 따라 하락",
          "eventLabel": "실적 전망 변경",
          "publishedAt": 1790624150,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=acb1d609aa4809e9aea1a204f9b1f0a01c54c30f1eccebe9cd1c1752f7187026",
          "factorChanges": {
            "growth": 2,
            "shortTermMomentum": 2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        }
      ],
      "confirmedEvidenceCount": 0,
      "unverifiedEvidenceCount": 11,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "QCOM": {
      "ticker": "QCOM",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790794314,
      "signal": "주의 강화",
      "netScore": -7.15,
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
          "eventId": "9691f49475a741a5f772",
          "headline": "Qualcomm 주식을 기다리는 경우는 무엇입니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790794314,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=aabf53418ee4821a01d0435e9eb0313fc7949e476e15f00ff28c97fba0c2ccbf",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "c992c6aef9f54a73c695",
          "headline": "Cramer는 새 휴대폰이 나오기 전에 Apple을 사라고 말했습니다. Apple의 듀오 모델은 \"놀라운 정도\"이기 때문입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790786819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=49cacb9c9c1d8eae92007f150c6e13417160ceb7987bfb2b4a354933b1295a61",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "529d4453631ae95d8eee",
          "headline": "QUALCOMM(QCOM)은 Apple 특허 계약을 갱신하고 AI, 클라우드 푸시를 심화한 후 6.7% 하락했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790785170,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ce490dc860da448ed0eaf18350c5b1a7fa898609cba8afb37f707f9c45d4fa90",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "1c31ac315baa273dc334",
          "headline": "위스콘신 AI 데이터 센터 지연 가능성 보고 후 오라클 주가 1.8% 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790775827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec72dc0e97fc31589e09008f281bdacbd0a75c4981df575b8613c2261423859c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "25dc717fb2b07a5ff45d",
          "headline": "Apple이 Qualcomm과 라이센스 계약을 갱신함에 따라 QCOM 주식을 플레이하는 방법",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790773203,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a086872d6be15fc7b9bb394c6f3d844296c1a9f2c903446a6d791a1651c330be",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "3cc99b7cba5bb0905d9c",
          "headline": "Broadcom vs. Qualcomm: 2026년에는 어떤 기술 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790770801,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=63d7092cecaa0e9e11b0aa2091f6175e232409165fd108fadcf208f5dc3ec931",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "2ad35ec884648fe43904",
          "headline": "AAPL 주식이 사상 최고치에서 후퇴: 조사 회사는 Apple이 올해 600만 대의 iPhone Duo를 판매할 수 있다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790744870,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48c00d487e3102d6248327f8af0c102d2aaa795c483683307689b27e6eb01d5b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "2287fdaee8f16e55db50",
          "headline": "퀄컴 주가는 AI와 애플 랠리가 냉각되면서 하루 만에 7% 하락했다. 2027년 매출 추정치의 의미는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790692298,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=183a9c78b76bdcc51136f8f8146bd5a698aa670669df0bdc4a5c1706729274cf",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "스마트폰 수요가 줄면 고객 칩 수요에 부담"
        },
        {
          "eventId": "b6fea683c59567484cd9",
          "headline": "Qualcomm: 1년 만에 처음으로 다운그레이드",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790683738,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a77e3bf96e2d112ebd8db6a71a2018cae2b3b6518b5f98f1ba35094a11d36b2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "8f6e0a20ed1656796873",
          "headline": "Qualcomm: 휴대폰 수익 악화 및 경쟁 해자 약화",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790639900,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=df14e666052f40ca2e1ba3829fc402e5dcabb3e1e6c20bd18d89eabb6e21dcee",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6980c5957876f0f27997",
          "headline": "Arm은 칩 매도세가 심화되면서 9% 하락했습니다. 퀄컴 하락 6%, 마벨 하락 5%",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790610689,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c84c0a9086b4db88b83c7b9f423e233038d7c8e3ecb42583415a66ea4f53f3d4",
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
    "ARM": {
      "ticker": "ARM",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790809209,
      "signal": "주의 강화",
      "netScore": -6.71,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": -1.22,
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
          "score": -2.62,
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
          "eventId": "5a05fe9c6a91476fe414",
          "headline": "Advanced Micro Devices vs. Arm: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790809209,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=05f0faa62c99f8b860e776225960b1b9282d8a0daccfaf8d8a47b1ec1a05a793",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "02d7937e27f8999977f5",
          "headline": "칩 매도세가 풀리면서 Arm은 5% 증가합니다. Marvell은 4% 상승, Qualcomm은 인치 더 높아졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790694374,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4922c0685c8237a023b42b66dc0317eb0195f1ace54e4fc26927e3490ff4dfbf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "afb402a5cd0dec1088a9",
          "headline": "Arm 대 Marvell Technology: 2026년에는 어떤 AI 칩 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790631435,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c41fd07c0ce8d0cfccf39b78e7cab5eed1c04fccaeed0859318311f4372dca0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "6980c5957876f0f27997",
          "headline": "Arm은 칩 매도세가 심화되면서 9% 하락했습니다. 퀄컴 하락 6%, 마벨 하락 5%",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790610689,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c84c0a9086b4db88b83c7b9f423e233038d7c8e3ecb42583415a66ea4f53f3d4",
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
    "MRVL": {
      "ticker": "MRVL",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790767201,
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
          "score": -1.57,
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
          "score": -3.85,
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
          "eventId": "9586df933e07fa8661dc",
          "headline": "ASML Holding N.V. 대 Marvell Technology: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790767201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=244f04f2afa5a68275b1c06bc7ba67f53209402059e444073e48d05f20f0d6fe",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "7907349f89af6f8ad0fd",
          "headline": "Marvell은 2026년에 210% 상승합니다: 이익을 얻나요, 아니면 더 많이 사나요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790708512,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=513f74c8c35d4f0cfed1620f5cbe2dbf7603340c1e5c30742f2664c172d78bf0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "02d7937e27f8999977f5",
          "headline": "칩 매도세가 풀리면서 Arm은 5% 증가합니다. Marvell은 4% 상승, Qualcomm은 인치 더 높아졌습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790694374,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4922c0685c8237a023b42b66dc0317eb0195f1ace54e4fc26927e3490ff4dfbf",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "afb402a5cd0dec1088a9",
          "headline": "Arm 대 Marvell Technology: 2026년에는 어떤 AI 칩 주식을 구매하는 것이 더 나은가요?",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790631435,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=8c41fd07c0ce8d0cfccf39b78e7cab5eed1c04fccaeed0859318311f4372dca0",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "41da8439d04ede29eb98",
          "headline": "Broadcom 대 Marvell Technology: 2026년에는 어느 반도체 주식을 매수하는 것이 더 낫습니까?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790627378,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b78a942e2c9f8288e314af078a248061aa2c8937e49521b76557761845e29fe2",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "6980c5957876f0f27997",
          "headline": "Arm은 칩 매도세가 심화되면서 9% 하락했습니다. 퀄컴 하락 6%, 마벨 하락 5%",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790610689,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c84c0a9086b4db88b83c7b9f423e233038d7c8e3ecb42583415a66ea4f53f3d4",
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
    "INTC": {
      "ticker": "INTC",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790785753,
      "signal": "중립·확인 대기",
      "netScore": -0.56,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
          "level": "중립"
        },
        "growth": {
          "label": "성장성",
          "score": 0.87,
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
          "eventId": "b412ca3fff1db1f4ee01",
          "headline": "칩 경쟁자가 9월 놀랍도록 강세를 보이면서 인텔은 3% 상승; NVIDIA의 상승, AMD의 하락",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790785753,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=4bcd5a5cd8da8dd27f905adce97cf90beb0d7209180c08583789f727f5171568",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "67caf8abc8fd5925144a",
          "headline": "저는 Palantir를 5년 동안 다루었습니다. 인공지능(AI) 주식이 과대평가되었는지 확인하는 방법은 다음과 같습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790711220,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=cd7e4b72c0da063d663a0f4fef188bcc7b66f2363034f5fc031c8d81d69b9eab",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "f505606a97ed76c3f864",
          "headline": "2026년 차세대 컴퓨팅 시장 보고서: Microsoft, AWS, NVIDIA, IBM 및 Intel이 AI, 양자 및 엣지 컴퓨팅을 가속화함에 따라 2030년까지 4,860억 달러의 매출 급증을 8,118억 5천만 달러로 활용",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790697360,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=91fb73dffa21ff5d80fdaf7d34a2d0b476d482388a30e3c4850260c6ce25fe8e",
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
    "TSM": {
      "ticker": "TSM",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790818441,
      "signal": "주의 강화",
      "netScore": -5.6,
      "summary": "경쟁·고객·재무 관련 위험 뉴스가 늘었습니다. 장기 경쟁력 훼손 여부는 다음 실적과 공시로 분리해 확인합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.0,
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
          "eventId": "8dc1bde4a73fd588f4f4",
          "headline": "어플라이드 머티어리얼즈 vs. 대만 반도체 제조업: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790818441,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=58722402d0441489d12660ed1cd5a05a795c50e55f398528b0f90d8d821626d9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "8749c2287eba81efb104",
          "headline": "투자자들이 예상보다 낮은 인플레이션 데이터를 무시함에 따라 S&P 500, Dow는 하락 마감 - MGM, SPCX, AAPL, TSM In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790803409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8ee20b68da4f30c86817c3e8c558746e67664bb035e14246f6f82f294a2fc4a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "170a7f9a6553e8adb38b",
          "headline": "알파벳 주식이 수요일에 터진 이유",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790784767,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=244c52e0c9a271b854718c30371260a87503a4975648a84fac1f754167296228",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "52feea82e87d7ea469af",
          "headline": "Taiwan Semiconductor Manufacturing(TSM)은 새로운 AI 공급망에 어떻게 적합합니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790701774,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=06fe4a3f20a3696e49c680628f703acb5ec32d9cd97476e6bca6cbf5a9ac644e",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "787d6c81d6af080aa74c",
          "headline": "TSMC: 2nm가 하이 기어로 ​​이동하고 있습니다.",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790680240,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9d98446224caa70206c6c50ea21fef2ec02622d271f85ec953376e3c51884011",
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
    "ASML": {
      "ticker": "ASML",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790769940,
      "signal": "중립·확인 대기",
      "netScore": -1.96,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
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
          "eventId": "056c2a0396eb7cce39c3",
          "headline": "ASML, TSM 수익이 AI 거래에 새로운 위험을 노출할 수 있음",
          "eventLabel": "실적 발표",
          "publishedAt": 1790769940,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9b486481e42fb611758c206dc6fae54aa514110ce3c206bce472ed6914a8e56f",
          "factorChanges": {
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "9586df933e07fa8661dc",
          "headline": "ASML Holding N.V. 대 Marvell Technology: 2026년에는 어떤 기술 주식을 구매하는 것이 더 낫습니까?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790767201,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=244f04f2afa5a68275b1c06bc7ba67f53209402059e444073e48d05f20f0d6fe",
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
    "AMAT": {
      "ticker": "AMAT",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790818441,
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
          "eventId": "8dc1bde4a73fd588f4f4",
          "headline": "어플라이드 머티어리얼즈 vs. 대만 반도체 제조업: 2026년에는 어느 기술주를 매수하는 것이 더 나을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790818441,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=58722402d0441489d12660ed1cd5a05a795c50e55f398528b0f90d8d821626d9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f8c068711ca1681a671f",
          "headline": "Applied Materials(AMAT), 50억 달러 규모의 EPIC 센터를 차세대 AI 메모리와 연결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790755787,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=70dbbcf35681147bb4c01b4fc05085c74fea63b9f26fd51b1f4d5c838b7b698d",
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
    "LRCX": {
      "ticker": "LRCX",
      "updatedAt": 1790827688.014613,
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
      "updatedAt": 1790827688.014613,
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
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790817817,
      "signal": "우호적 변화",
      "netScore": 5.44,
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
          "eventId": "f45ae8a88327a1153100",
          "headline": "Nvidia 스택과 AI 기반 엣지 보안 통합이 Palo Alto Networks(PANW)의 투자 사례를 바꾸고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790817817,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a6afccba13160b8efd0d10ae187fa3c643fd3b77e26585b4bfef922ba4fc429e",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "7dac21f1d93fb8ea90db",
          "headline": "CEG 주가 밤새 상승: Constellation, Amazon과 20년 원자력 계약 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790817386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28875decffb04ca755d66f2a77f936619eed8e8ea6a6e3e494fbc092a4b150a9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d74f764ca09818404c9f",
          "headline": "Anthropic은 클라우드 및 데이터 센터에 5,180억 달러를 지출할 계획입니다. 아마존에는 이미 1000억 달러 이상이 약속되어 있습니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790816221,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5af6b2c051a415306e7762b6c8a3feebce0de42925d9c04761d4dcb2e67e4600",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "eee0328cf6605613f86c",
          "headline": "마이크론 매출 4배 이상. AI Chipmaker의 다음 단계는 다음과 같습니다.",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790810041,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=f44b47335c1166f97f5a80826ad4aee231198581f39f1c005d754e956aa4f302",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "70582716eb750e5389b3",
          "headline": "SPY의 배당을 위해 3개월을 기다리는 것은 잊어버리세요. Invesco의 고배당 펀드는 매달 지급됩니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790809589,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ff7223554078df0ced7983593f33c82ca9484f684de84a872f948b0a1901ab86",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "8749c2287eba81efb104",
          "headline": "투자자들이 예상보다 낮은 인플레이션 데이터를 무시함에 따라 S&P 500, Dow는 하락 마감 - MGM, SPCX, AAPL, TSM In Focus",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790803409,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a8ee20b68da4f30c86817c3e8c558746e67664bb035e14246f6f82f294a2fc4a",
          "factorChanges": {
            "growth": -1,
            "valuationBurden": -1,
            "businessRisk": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "20c2eeffd66c5421ac31",
          "headline": "CEG, NRG, TLN 주식 주목: TD Cowen, FERC가 AI 수요 충족을 위한 PJM 계획 지연 후 '급성' 불확실성 경고",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790790707,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb5d8998d21c36ab561e55469cea3c9082fb86354151ff9f85e560ebe9acf727",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "05bbbc0d31bf2f8dc53e",
          "headline": "Synopsys, Amazon과 10억 달러 규모의 실리콘 IP, AI 소프트웨어 계약 체결",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790788108,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=619fb8f356e576f71255b98230ca09215e135a87358eaffbd3c9e3c7d8ced502",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "c992c6aef9f54a73c695",
          "headline": "Cramer는 새 휴대폰이 나오기 전에 Apple을 사라고 말했습니다. Apple의 듀오 모델은 \"놀라운 정도\"이기 때문입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790786819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=49cacb9c9c1d8eae92007f150c6e13417160ceb7987bfb2b4a354933b1295a61",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리 ASP와 이익률 개선 가능성"
        },
        {
          "eventId": "702be6bdc6d216849274",
          "headline": "9월 30일 정오 주식 시장: 인플레이션 데이터 둔화로 시장 상승, 투자자들은 마이크론 수익 기대",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790786373,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=9a7b4bca9b1a4309d6a925cc89baefdfbbb69cd7ecf668d5abdfc06493049831",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "bbd621df0146549d9c04",
          "headline": "Piper Sandler는 Microsoft Target을 높이고 E7 및 AI에서 수십억 달러의 잠재력을 확인합니다.",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790784926,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec814ddc45d29bd4a70d6d3f62d73041df1e9bc13e7c52a1fe41d78d6af7a3c7",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        },
        {
          "eventId": "b2a7b0306e701a097adc",
          "headline": "Coherent의 PhotonLink 푸시는 투자자를 위한 AI 데이터 센터 광학 엣지(COHR)를 재구성하고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790780952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53f315e8d6ee6d1832aa8da105118ee59f97c1fcf44db7f6578e6d350ddf49c4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "AI 서버 메모리 수요와 가격 강세"
        }
      ],
      "confirmedEvidenceCount": 1,
      "unverifiedEvidenceCount": 48,
      "notice": "뉴스 오버레이는 검증된 장기 눌림목 점수와 별개입니다. 확인 필요 뉴스는 35% 가중치만 반영합니다."
    },
    "SNDK": {
      "ticker": "SNDK",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790785853,
      "signal": "주의 강화",
      "netScore": -4.4,
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
          "eventId": "1919ed183035f36200af",
          "headline": "2026년 엄청난 이익 이후 NVIDIA, Micron 및 SanDisk는 2027년에도 계속 상승할 수 있습니까?",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790785853,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=a15a5bc04dedc10a49256249fbeb0f8e33859ca15b3b5b9d47270d6f611ef66d",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "c77d3f2dd60bd5e1e8b5",
          "headline": "Sandisk: Fab 통제도 없고 HBF 독점도 없습니다 - 실제로 돈이 나오는 곳",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790743998,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=2a6ed4145bd7c7969cecb4e0c352badccf0ab709dfcf3b3b18e2e3e6f52f032d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "ebb3a4ff77d41ce6e95e",
          "headline": "Sandisk는 2026년 출시 이후 백만장자 주식인가요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790720400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=dcc6ab761207a781d78fffa709a885f5ddd8c7c2ca2b43f425d11b0e78e794f9",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "f95f1eadf2fd6dc2207c",
          "headline": "SanDisk는 투자자가 기대하는 것보다 훨씬 더 큰 기회를 가질 수 있습니다",
          "eventLabel": "워런트·신주·희석 가능성",
          "publishedAt": 1790692227,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=25a915c7b31086363632835c27c4da0ef6cfd5b07ec9f09e553e614f50d10730",
          "factorChanges": {
            "valuationBurden": -2,
            "businessRisk": -1,
            "shortTermMomentum": -2
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "bb63b31c9863c9d0f32b",
          "headline": "환매 뉴스에 뛰어들기 전에 Sandisk를 주의 깊게 살펴보세요",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790687106,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3cc48e861d7c3c2c1d057705a3509c28f173382f35ac060783f49339fe1436ae",
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
    "WDC": {
      "ticker": "WDC",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790786819,
      "signal": "주의 강화",
      "netScore": -7.56,
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
          "eventId": "c992c6aef9f54a73c695",
          "headline": "Cramer는 새 휴대폰이 나오기 전에 Apple을 사라고 말했습니다. Apple의 듀오 모델은 \"놀라운 정도\"이기 때문입니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790786819,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=49cacb9c9c1d8eae92007f150c6e13417160ceb7987bfb2b4a354933b1295a61",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "1c31ac315baa273dc334",
          "headline": "위스콘신 AI 데이터 센터 지연 가능성 보고 후 오라클 주가 1.8% 하락",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790775827,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ec72dc0e97fc31589e09008f281bdacbd0a75c4981df575b8613c2261423859c",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "2ad35ec884648fe43904",
          "headline": "AAPL 주식이 사상 최고치에서 후퇴: 조사 회사는 Apple이 올해 600만 대의 iPhone Duo를 판매할 수 있다고 말합니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790744870,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=48c00d487e3102d6248327f8af0c102d2aaa795c483683307689b27e6eb01d5b",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "메모리·스토리지 가격 강세 수혜 가능성"
        },
        {
          "eventId": "2287fdaee8f16e55db50",
          "headline": "퀄컴 주가는 AI와 애플 랠리가 냉각되면서 하루 만에 7% 하락했다. 2027년 매출 추정치의 의미는 다음과 같습니다.",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790692298,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=183a9c78b76bdcc51136f8f8146bd5a698aa670669df0bdc4a5c1706729274cf",
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
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790688601,
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
          "eventId": "73467221e2717d0aced6",
          "headline": "Arista Networks vs. International Business Machines: 2026년에는 어느 기술주를 구매하는 것이 더 나을까요?",
          "eventLabel": "공급망 문제",
          "publishedAt": 1790688601,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c6d52503c54b2c69cef1fa63a0f169cbe2fba6b51f2de8f1b82c4021b5355b52",
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
    "COHR": {
      "ticker": "COHR",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790780952,
      "signal": "중립·확인 대기",
      "netScore": 0.21,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 0.35,
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
          "eventId": "b2a7b0306e701a097adc",
          "headline": "Coherent의 PhotonLink 푸시는 투자자를 위한 AI 데이터 센터 광학 엣지(COHR)를 재구성하고 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790780952,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=53f315e8d6ee6d1832aa8da105118ee59f97c1fcf44db7f6578e6d350ddf49c4",
          "factorChanges": {
            "growth": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "4301db55de7ffc62c9ac",
          "headline": "Coherent가 제공하지 않는 Amphen은 무엇을 제공합니까?",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790717577,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=3e9ada8de20b1ed204f9f3f701be6b0fc9c0c054a84c5bf48fe7117aad284b33",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "a4117deabec311576612",
          "headline": "코히런트: 신중한 구매",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790675903,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=c971573319d6aeb3c9e5162e80f65701694ea1ab87fbf53cc31d3446eba84661",
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
    "LITE": {
      "ticker": "LITE",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790691433,
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
          "eventId": "96ffa0d6e594a3b00494",
          "headline": "Lumentum 주식: $800에 샀습니다. 2027년은 이야기를 바꿀 수 있다",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790691433,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=7a223c39c5dd9b033b379985885bd4a7bd985d6f3df536ea54387da38b311859",
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
    "GEV": {
      "ticker": "GEV",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790676246,
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
          "eventId": "1a3e3194e3e5c956c1bf",
          "headline": "Tenova, GE Vernova와 협력하여 Nippon Steel의 Yawata Works에 세계 최대 EAF 공급",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790676246,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=976b3a54fc726e513d001c0552ba79df790ef613be9c9afa0157d3b5fbe298eb",
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
    "CEG": {
      "ticker": "CEG",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790817386,
      "signal": "중립·확인 대기",
      "netScore": -0.21,
      "summary": "뉴스 방향이 엇갈리거나 확인 강도가 낮아 기존 장기 판단을 바꿀 근거가 아직 부족합니다.",
      "factors": {
        "longTermCompetitiveness": {
          "label": "장기 사업 경쟁력",
          "score": 1.92,
          "level": "우호적"
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
          "score": -4.2,
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
          "eventId": "7dac21f1d93fb8ea90db",
          "headline": "CEG 주가 밤새 상승: Constellation, Amazon과 20년 원자력 계약 체결",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790817386,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=28875decffb04ca755d66f2a77f936619eed8e8ea6a6e3e494fbc092a4b150a9",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "3ddb2ec57353bc895f1b",
          "headline": "컨스텔레이션 에너지(Constellation Energy) 주가는 아마존 원자력 발전 계약으로 상승",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790801086,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=96e2ec16b7523fceb3accad82133a5a2a5c56a7f092efedc3614e16f97458a9f",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d9429347d27d6133237d",
          "headline": "Constellation과 Amazon은 Calvert Cliffs에 190메가와트의 원자력 용량을 추가하는 20년 전력 구매 계약을 발표했습니다.",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790798400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=b48b08f2162baae41e27808ff8c840e7e2a6995a76e3cc6de1cad3da6d3f27e5",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "기사 사건이 사업·실적에 연결되는지 다음 공시에서 확인"
        },
        {
          "eventId": "20c2eeffd66c5421ac31",
          "headline": "CEG, NRG, TLN 주식 주목: TD Cowen, FERC가 AI 수요 충족을 위한 PJM 계획 지연 후 '급성' 불확실성 경고",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790790707,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=eb5d8998d21c36ab561e55469cea3c9082fb86354151ff9f85e560ebe9acf727",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "9a8d080f6150ebb5dda1",
          "headline": "오늘 Constellation Energy를 구입하면 평생을 보낼 수 있을까요?",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790783400,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=658839c5fcf180103d60c10c4cc8bea118d4f020862a906f0107e7d90cd7326d",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "de477e34add1d3d18ee9",
          "headline": "별자리 에너지: 원자력 발전 붐으로의 더욱 매력적인 진입점",
          "eventLabel": "장기 공급계약",
          "publishedAt": 1790777907,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=1bca46b101bf91743494afb78ea9f8f722a58c2ab6fb6e0603070cf6c6e80ca3",
          "factorChanges": {
            "growth": 2,
            "longTermCompetitiveness": 1,
            "shortTermMomentum": 1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "0b033bf14b0854fa244e",
          "headline": "BE 주식은 분석가 지원에 대한 월요일 슬라이드 이후 회복됩니다: 동료 FCEL, PLUG Edge 더 높음",
          "eventLabel": "애널리스트 목표주가 변경",
          "publishedAt": 1790714447,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=5dea249fcdb71dbcde67c40998e918fb6f69e6873f8dc1f5c914a9807e671261",
          "factorChanges": {
            "shortTermMomentum": -1
          },
          "reason": "사업·실적 연결 경로 확인 필요"
        },
        {
          "eventId": "d95500913fef736dfcdd",
          "headline": "Constellation Energy: 프리미엄 가격으로 만나는 프리미엄 기업",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790687028,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=278b0ce19e307011f21688e3117b83bfc62317c00d040893606edfa8b63ec3b4",
          "factorChanges": {
            "businessRisk": -2,
            "growth": -1,
            "shortTermMomentum": -1
          },
          "reason": "회사 실적과의 연결고리 확인"
        },
        {
          "eventId": "817417e4d5ab8b742416",
          "headline": "BlackRock은 AI 가치가 소프트웨어를 넘어 이동하고 있다고 말하며 '물리적 AI'를 표시: MU, VRT 및 CEG에 초점을 맞춘 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790657638,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10f27c45142ba2356ae27a775a4a7ab67225334cd3b40043f8e0e41c79485544",
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
    "VST": {
      "ticker": "VST",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790687028,
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
          "eventId": "d95500913fef736dfcdd",
          "headline": "Constellation Energy: 프리미엄 가격으로 만나는 프리미엄 기업",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790687028,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=278b0ce19e307011f21688e3117b83bfc62317c00d040893606edfa8b63ec3b4",
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
    "ETN": {
      "ticker": "ETN",
      "updatedAt": 1790827688.014613,
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
      "updatedAt": 1790827688.014613,
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
      "updatedAt": 1790827688.014613,
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
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790657638,
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
          "eventId": "817417e4d5ab8b742416",
          "headline": "BlackRock은 AI 가치가 소프트웨어를 넘어 이동하고 있다고 말하며 '물리적 AI'를 표시: MU, VRT 및 CEG에 초점을 맞춘 이유",
          "eventLabel": "규제·소송·수출 제한",
          "publishedAt": 1790657638,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=10f27c45142ba2356ae27a775a4a7ab67225334cd3b40043f8e0e41c79485544",
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
    "MOD": {
      "ticker": "MOD",
      "updatedAt": 1790827688.014613,
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
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790701127,
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
          "eventId": "ce65f19dd9553fc014ef",
          "headline": "SK하이닉스, 트레이더들이 메모리 수요에 무게를 두는 가운데 3% 상승, 미국 경쟁사 마이크론과 씨게이트 제치고",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790701127,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=27be0b0b3b849ca40a5664512c4f6d988e5b75d1d842cad6fc523758e85e9cf4",
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
    "EME": {
      "ticker": "EME",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790777499,
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
          "eventId": "165793d34e26f0ab2f21",
          "headline": "EMCOR의 AI 기반 데이터 센터 백로그 및 인수가 EMCOR 그룹(EME) 투자자에게 미치는 영향",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790777499,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=ba2d828b5db320bfc56a72d85f8a674311e7205b4249c321eeb4c1dc402705ef",
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
    "FIX": {
      "ticker": "FIX",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790611800,
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
          "eventId": "0b44214ea9cd3bfef913",
          "headline": "Hunt Electric이 컴포트 시스템에 대한 강력한 거래가 될 수 있는 이유",
          "eventLabel": "주요 고객 계약",
          "publishedAt": 1790611800,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=6488f0121a776474bd93c42f70a8c0b1561b48a28e4d0f63c3a23372cc80b7fe",
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
    "BE": {
      "ticker": "BE",
      "updatedAt": 1790827688.014613,
      "dataAsOf": 1790628358,
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
          "eventId": "0d361b49754e60b4ae8d",
          "headline": "AI 파워 붐이 Bloom Energy(BE)의 850억 달러 가치 평가를 정당화할 수 있습니까?",
          "eventLabel": "AI·데이터센터 투자 변화",
          "publishedAt": 1790628358,
          "verificationStatus": "needs_confirmation",
          "sourceUrl": "https://finnhub.io/api/news?id=121f55c1cfd2d0c62dc038be4f3d0d6d229467e263ff799f25efc098015054cf",
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
    }
  }
};
