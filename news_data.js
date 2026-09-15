// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// Finnhub 실적 캘린더 + 회사 뉴스 헤드라인. 이 파일이 없어도 대시보드는 정상 동작함(해당 섹션만 숨김).
const NEWS_DATA = {
  "QQQ": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": null,
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
        "datetime": 1789422834,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "S&P 500, Nasdaq, Dow 하락 칩 제조업체 약세, 국채 수익률 압박 - MSFT, NFLX, ORCL, CRWD, RBLX 초점 신규 에이전트 연결 동향 뉴스 수익 전체 DIA 0.53% SPY 0.15% QQQ 0.01% 추세 RDDT 0.56% FPS 7.12% VERA 2.10% PLAY 8",
            "S&P 500, Nasdaq, 칩 제조업체 약점에 대한 Dow 하락, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX In Focus Anthropic CEO Dario Amodei는 AI 기능 개발 속도를 늦출 것을 촉구했습니다.",
            "트레이더들이 2026년 7월 29일 뉴욕시 뉴욕증권거래소(NYSE)에서 일하고 있다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.53%, 0.15%, 0.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "QQQ",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "QQQ에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "0.53%",
            "0.15%",
            "0.01%",
            "0.56%",
            "7.12%",
            "2.10%",
            "8.97%",
            "0.82%"
          ],
          "sourceExcerpt": [
            "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus New Connect your Agent Trending News Earnings All DIA 0.53% SPY 0.15% QQQ 0.01% Trending RDDT 0.56% FPS 7.12% VERA 2.10% PLAY 8",
            "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus Anthropic CEO Dario Amodei called for a slowdown of the development of AI capabilities.",
            "Traders work on the New York Stock Exchange (NYSE) on July 29, 2026 in New York City."
          ],
          "analysisUpdatedAt": 1789479625.4116356
        },
        "headlineKo": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중"
      },
      {
        "headline": "Forget JEPI: QQQ’s Sponsor Sells an Equal-Weight S&P Income Fund That Charges Less and Is Beating It by 8 Points",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66ede0b73e9b5bc754f3317022ba5940fd534d2389a04d6f091a5237514c9244",
        "datetime": 1789422324,
        "relevance": 1.0,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "AI 투자 변화 · 수요와 현금 부담",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "JEPI는 잊어라: QQQ의 스폰서는 수수료가 더 저렴하고 8포인트 더 나은 동일 가중치 S&P 소득 펀드를 판매합니다 - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Ryne Mauck 작성 2026년 9월 14일 오후 5시 45분(ET) 게시 · 4분 읽기 ETF 심사관 데스크."
          ],
          "why": [
            "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.31%, 0.63%, 0.30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "QQQ",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "실제 CAPEX 집행",
            "공급업체 수주·매출",
            "투자 기업 OCF·FCF·부채"
          ],
          "interpretation": "QQQ에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1.0,
          "quality": "medium",
          "verifiedNumbers": [
            "0.31%",
            "0.63%",
            "0.30%",
            "0.60%",
            "$44.7 billion",
            "$4.58338",
            "$56.67",
            "8.1%"
          ],
          "sourceExcerpt": [
            "Forget JEPI: QQQ's Sponsor Sells an Equal-Weight S&P Income Fund That Charges Less and Is Beating It by 8 Points - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By Ryne Mauck Published September 14, 2026, 5:45pm ET · 4 min read The ETF Examiner desk."
          ],
          "analysisUpdatedAt": 1789479628.790125
        },
        "headlineKo": "JEPI는 잊어라: QQQ의 스폰서는 수수료가 더 저렴하고 8포인트 더 나은 동일 가중치 S&P 소득 펀드를 판매합니다."
      },
      {
        "headline": "What Old-School Chart Analysis and Gamma Exposure Tell Us About QQQ This Fed Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee8857a251962b234994abdbf46472a865bc9476db764c9d1ba4cd69757b1343",
        "datetime": 1789404934,
        "relevance": 1.0,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "What Old-School Chart Analysis and Gamma Exposure Tell Us About QQQ This Fed Week",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "QQQ",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 QQQ의 사업과 관련된 'What Old-School Chart Analysis and Gamma Exposure Tell Us About QQQ This Fed Week' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "QQQ 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1.0,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479629.933194
        },
        "headlineKo": "이번 Fed Week의 QQQ에 대해 기존 차트 분석 및 감마 노출이 알려주는 것"
      },
      {
        "headline": "Stock Market Today: Dow, S&P 500, Nasdaq Futures Fall After OpenAI, Anthropic’s Appeals Rattle AI Trade — NVDA, MU, SNDK, ORCL, TSLA In Focus (UPDATED)",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=bfdad68bc6be1f32768d43602a691b7e830d9837432279415b49d87158bdb593",
        "datetime": 1789375077,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "오늘의 주식 시장: OpenAI 이후 Dow, S&P 500, Nasdaq 선물 하락, Anthropic의 항소 Rattle AI Trade — NVDA, MU, SNDK, ORCL, TSLA In Focus (업데이트됨)"
      },
      {
        "headline": "SpaceX weighting in Nasdaq 100 set to more than double - Bloomberg",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f23e6da2d5030bdba5b8359970fc8d2cd2153b337b422f69bdca358a9b84dbde",
        "datetime": 1789259879,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "나스닥 100의 SpaceX 가중치가 두 배 이상으로 설정 - Bloomberg"
      }
    ],
    "newsHistory": [
      {
        "headline": "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
        "datetime": 1789422834,
        "headlineKo": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "S&P 500, Nasdaq, Dow 하락 칩 제조업체 약세, 국채 수익률 압박 - MSFT, NFLX, ORCL, CRWD, RBLX 초점 신규 에이전트 연결 동향 뉴스 수익 전체 DIA 0.53% SPY 0.15% QQQ 0.01% 추세 RDDT 0.56% FPS 7.12% VERA 2.10% PLAY 8",
            "S&P 500, Nasdaq, 칩 제조업체 약점에 대한 Dow 하락, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX In Focus Anthropic CEO Dario Amodei는 AI 기능 개발 속도를 늦출 것을 촉구했습니다.",
            "트레이더들이 2026년 7월 29일 뉴욕시 뉴욕증권거래소(NYSE)에서 일하고 있다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.53%, 0.15%, 0.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "QQQ",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "QQQ에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "0.53%",
            "0.15%",
            "0.01%",
            "0.56%",
            "7.12%",
            "2.10%",
            "8.97%",
            "0.82%"
          ],
          "sourceExcerpt": [
            "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus New Connect your Agent Trending News Earnings All DIA 0.53% SPY 0.15% QQQ 0.01% Trending RDDT 0.56% FPS 7.12% VERA 2.10% PLAY 8",
            "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus Anthropic CEO Dario Amodei called for a slowdown of the development of AI capabilities.",
            "Traders work on the New York Stock Exchange (NYSE) on July 29, 2026 in New York City."
          ],
          "analysisUpdatedAt": 1789479625.4116356
        }
      },
      {
        "headline": "Forget JEPI: QQQ’s Sponsor Sells an Equal-Weight S&P Income Fund That Charges Less and Is Beating It by 8 Points",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=66ede0b73e9b5bc754f3317022ba5940fd534d2389a04d6f091a5237514c9244",
        "datetime": 1789422324,
        "headlineKo": "JEPI는 잊어라: QQQ의 스폰서는 수수료가 더 저렴하고 8포인트 더 나은 동일 가중치 S&P 소득 펀드를 판매합니다.",
        "relevance": 1.0,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "AI 투자 변화 · 수요와 현금 부담",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "JEPI는 잊어라: QQQ의 스폰서는 수수료가 더 저렴하고 8포인트 더 나은 동일 가중치 S&P 소득 펀드를 판매합니다 - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Ryne Mauck 작성 2026년 9월 14일 오후 5시 45분(ET) 게시 · 4분 읽기 ETF 심사관 데스크."
          ],
          "why": [
            "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.31%, 0.63%, 0.30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "QQQ의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "QQQ",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "실제 CAPEX 집행",
            "공급업체 수주·매출",
            "투자 기업 OCF·FCF·부채"
          ],
          "interpretation": "QQQ에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1.0,
          "quality": "medium",
          "verifiedNumbers": [
            "0.31%",
            "0.63%",
            "0.30%",
            "0.60%",
            "$44.7 billion",
            "$4.58338",
            "$56.67",
            "8.1%"
          ],
          "sourceExcerpt": [
            "Forget JEPI: QQQ's Sponsor Sells an Equal-Weight S&P Income Fund That Charges Less and Is Beating It by 8 Points - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By Ryne Mauck Published September 14, 2026, 5:45pm ET · 4 min read The ETF Examiner desk."
          ],
          "analysisUpdatedAt": 1789479628.790125
        }
      },
      {
        "headline": "What Old-School Chart Analysis and Gamma Exposure Tell Us About QQQ This Fed Week",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ee8857a251962b234994abdbf46472a865bc9476db764c9d1ba4cd69757b1343",
        "datetime": 1789404934,
        "headlineKo": "이번 Fed Week의 QQQ에 대해 기존 차트 분석 및 감마 노출이 알려주는 것",
        "relevance": 1.0,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "What Old-School Chart Analysis and Gamma Exposure Tell Us About QQQ This Fed Week",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "QQQ",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 QQQ의 사업과 관련된 'What Old-School Chart Analysis and Gamma Exposure Tell Us About QQQ This Fed Week' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "QQQ 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1.0,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479629.933194
        }
      },
      {
        "headline": "Stock Market Today: Dow, S&P 500, Nasdaq Futures Fall After OpenAI, Anthropic’s Appeals Rattle AI Trade — NVDA, MU, SNDK, ORCL, TSLA In Focus (UPDATED)",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=bfdad68bc6be1f32768d43602a691b7e830d9837432279415b49d87158bdb593",
        "datetime": 1789375077,
        "headlineKo": "오늘의 주식 시장: OpenAI 이후 Dow, S&P 500, Nasdaq 선물 하락, Anthropic의 항소 Rattle AI Trade — NVDA, MU, SNDK, ORCL, TSLA In Focus (업데이트됨)",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "SpaceX weighting in Nasdaq 100 set to more than double - Bloomberg",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f23e6da2d5030bdba5b8359970fc8d2cd2153b337b422f69bdca358a9b84dbde",
        "datetime": 1789259879,
        "headlineKo": "나스닥 100의 SpaceX 가중치가 두 배 이상으로 설정 - Bloomberg",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:40",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "SPY": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": null,
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "The Outlook For S&P 500 Dividends In September 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c8af2ec0f81fb78dec0593859a1e32d57a0f2b38a875f01ccb3272b664f08788",
        "datetime": 1789456860,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "The Outlook For S&P 500 Dividends In September 2026",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "SPY",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 SPY의 사업과 관련된 'The Outlook For S&P 500 Dividends In September 2026' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "SPY 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479637.009997
        },
        "headlineKo": "2026년 9월 S&P 500 배당금 전망"
      },
      {
        "headline": "Stock Market: Will S&P 500 Open Up or Down Today?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43277ce301f5a73ef9eed5e9b450a6813cdda242f20b9b020a4b549df170155f",
        "datetime": 1789451882,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Stock Market: Will S&P 500 Open Up or Down Today?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "SPY",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 SPY의 사업과 관련된 'Stock Market: Will S&P 500 Open Up or Down Today?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "SPY 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479638.0721486
        },
        "headlineKo": "주식시장: 오늘 S&P 500이 상승할 것인가, 하락할 것인가?"
      },
      {
        "headline": "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
        "datetime": 1789422834,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "S&P 500, Nasdaq, Dow 하락세 칩 제조업체 약세, 국채 수익률 압박 — MSFT, NFLX, ORCL, CRWD, RBLX 초점 신규 에이전트 연결 동향 뉴스 수익 전체 DIA 0.56% SPY 0.15% QQQ 0.04% 추세 RDDT 0.52% FPS 6.98% VERA 2.44% PLAY 9",
            "S&P 500, Nasdaq, 칩 제조업체 약점에 대한 Dow 하락, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX In Focus Anthropic CEO Dario Amodei는 AI 기능 개발 속도를 늦출 것을 촉구했습니다.",
            "트레이더들이 2026년 7월 29일 뉴욕시 뉴욕증권거래소(NYSE)에서 일하고 있다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.56%, 0.15%, 0.04% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "SPY",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "SPY에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "0.56%",
            "0.15%",
            "0.04%",
            "0.52%",
            "6.98%",
            "2.44%",
            "9.33%",
            "0.82%"
          ],
          "sourceExcerpt": [
            "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus New Connect your Agent Trending News Earnings All DIA 0.56% SPY 0.15% QQQ 0.04% Trending RDDT 0.52% FPS 6.98% VERA 2.44% PLAY 9",
            "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus Anthropic CEO Dario Amodei called for a slowdown of the development of AI capabilities.",
            "Traders work on the New York Stock Exchange (NYSE) on July 29, 2026 in New York City."
          ],
          "analysisUpdatedAt": 1789479641.3125098
        },
        "headlineKo": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중"
      },
      {
        "headline": "TPAY Yields 10% With Full S&P 500 Exposure. Here’s Exactly What You Give Up to Get It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61efc1183654479716645cb72e833026b1d9c8c5e84df8f016da853f7c781543",
        "datetime": 1789418619,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "TPAY는 S&P 500 전체 노출로 10%의 수익을 얻습니다. 당신이 그것을 얻기 위해 포기한 것이 바로 여기에 있습니다"
      },
      {
        "headline": "Bloom Energy Falls 8% as AI Power Bid Unwinds Days Before Bloom’s S&P 500 Add; FuelCell Energy Drops 5%, Plug Power Dips",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=26dedfbc492f0f4c23b4f62c2f49ad47d767194a31ee68960688f22f30f2efab",
        "datetime": 1789401466,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "AI Power Bid가 Bloom의 S&P 500 지수 며칠 전에 풀리면서 Bloom Energy는 8% 하락합니다. FuelCell 에너지 5% 하락, 플러그 전력 하락"
      }
    ],
    "newsHistory": [
      {
        "headline": "The Outlook For S&P 500 Dividends In September 2026",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=c8af2ec0f81fb78dec0593859a1e32d57a0f2b38a875f01ccb3272b664f08788",
        "datetime": 1789456860,
        "headlineKo": "2026년 9월 S&P 500 배당금 전망",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "The Outlook For S&P 500 Dividends In September 2026",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "SPY",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 SPY의 사업과 관련된 'The Outlook For S&P 500 Dividends In September 2026' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "SPY 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479637.009997
        }
      },
      {
        "headline": "Stock Market: Will S&P 500 Open Up or Down Today?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=43277ce301f5a73ef9eed5e9b450a6813cdda242f20b9b020a4b549df170155f",
        "datetime": 1789451882,
        "headlineKo": "주식시장: 오늘 S&P 500이 상승할 것인가, 하락할 것인가?",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Stock Market: Will S&P 500 Open Up or Down Today?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "SPY",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 SPY의 사업과 관련된 'Stock Market: Will S&P 500 Open Up or Down Today?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "SPY 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479638.0721486
        }
      },
      {
        "headline": "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
        "datetime": 1789422834,
        "headlineKo": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "S&P 500, Nasdaq, Dow 하락세 칩 제조업체 약세, 국채 수익률 압박 — MSFT, NFLX, ORCL, CRWD, RBLX 초점 신규 에이전트 연결 동향 뉴스 수익 전체 DIA 0.56% SPY 0.15% QQQ 0.04% 추세 RDDT 0.52% FPS 6.98% VERA 2.44% PLAY 9",
            "S&P 500, Nasdaq, 칩 제조업체 약점에 대한 Dow 하락, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX In Focus Anthropic CEO Dario Amodei는 AI 기능 개발 속도를 늦출 것을 촉구했습니다.",
            "트레이더들이 2026년 7월 29일 뉴욕시 뉴욕증권거래소(NYSE)에서 일하고 있다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.56%, 0.15%, 0.04% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "SPY의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "SPY",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "SPY에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "0.56%",
            "0.15%",
            "0.04%",
            "0.52%",
            "6.98%",
            "2.44%",
            "9.33%",
            "0.82%"
          ],
          "sourceExcerpt": [
            "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus New Connect your Agent Trending News Earnings All DIA 0.56% SPY 0.15% QQQ 0.04% Trending RDDT 0.52% FPS 6.98% VERA 2.44% PLAY 9",
            "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus Anthropic CEO Dario Amodei called for a slowdown of the development of AI capabilities.",
            "Traders work on the New York Stock Exchange (NYSE) on July 29, 2026 in New York City."
          ],
          "analysisUpdatedAt": 1789479641.3125098
        }
      },
      {
        "headline": "TPAY Yields 10% With Full S&P 500 Exposure. Here’s Exactly What You Give Up to Get It",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=61efc1183654479716645cb72e833026b1d9c8c5e84df8f016da853f7c781543",
        "datetime": 1789418619,
        "headlineKo": "TPAY는 S&P 500 전체 노출로 10%의 수익을 얻습니다. 당신이 그것을 얻기 위해 포기한 것이 바로 여기에 있습니다",
        "relevance": 0.5,
        "keywordFlag": false
      },
      {
        "headline": "Bloom Energy Falls 8% as AI Power Bid Unwinds Days Before Bloom’s S&P 500 Add; FuelCell Energy Drops 5%, Plug Power Dips",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=26dedfbc492f0f4c23b4f62c2f49ad47d767194a31ee68960688f22f30f2efab",
        "datetime": 1789401466,
        "headlineKo": "AI Power Bid가 Bloom의 S&P 500 지수 며칠 전에 풀리면서 Bloom Energy는 8% 하락합니다. FuelCell 에너지 5% 하락, 플러그 전력 하락",
        "relevance": 0.5,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:40",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "MSFT": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 4.8236,
      "revenueEstimate": 92464857114
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Blykalla and Microsoft Collaborate to Advance AI-driven Nuclear Licensing for its Lead-Cooled Advanced Nuclear Reactor",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=402e8a1971cd01e8d80d87f19c751eb034ca31fa96778612d92e78e4ba7d4db0",
        "datetime": 1789473600,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Blykalla and Microsoft Collaborate to Advance AI-driven Nuclear Licensing for its Lead-Cooled Advanced Nuclear Reactor",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MSFT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MSFT의 사업과 관련된 'Blykalla and Microsoft Collaborate to Advance AI-driven Nuclear Licensing for its Lead-Cooled Advanced Nuclear Reactor' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MSFT 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479649.6490786
        },
        "headlineKo": "Blykalla와 Microsoft는 납 냉각형 첨단 원자로에 대한 AI 기반 원자력 라이센스를 발전시키기 위해 협력하고 있습니다."
      },
      {
        "headline": "Vietnam Green IT Software Forecasts Growth from $124.40M (2026) to $385.37M by 2031, Profiling Schneider Electric, Microsoft, IBM, SAP & 16 Other Key Players",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d71fac71e1b66f85a6c8d9df7fa1628d1923457a4ff7fe25e343af578fcb1938",
        "datetime": 1789461120,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Vietnam Green IT Software Forecasts Growth from $124.40M (2026) to $385.37M by 2031, Profiling Schneider Electric, Microsoft, IBM, SAP & 16 Other Key Players",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MSFT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MSFT의 사업과 관련된 'Vietnam Green IT Software Forecasts Growth from $124.40M (2026) to $385.37M by 2031, Profiling Schneider Electric, Microsoft, IBM, SAP & 16 Other Key Players' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MSFT 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479651.9913232
        },
        "headlineKo": "베트남 그린 IT 소프트웨어(Vietnam Green IT Software)는 슈나이더 일렉트릭(Schneider Electric), 마이크로소프트(Microsoft), IBM, SAP 및 기타 16개 주요 기업을 프로파일링하여 2026년 1억 2,440만 달러에서 2031년 3억 8,537만 달러로 성장할 것으로 예측합니다."
      },
      {
        "headline": "Microsoft: Cheap After A 27% Rally As The AI Bear Case Cracks",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7ef822fae6194a8147a253cdce7e07dc23cb3d795a0afb283212fdd5a8f40540",
        "datetime": 1789445874,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Microsoft: Cheap After A 27% Rally As The AI Bear Case Cracks",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MSFT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MSFT의 사업과 관련된 'Microsoft: Cheap After A 27% Rally As The AI Bear Case Cracks' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MSFT 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479652.8648467
        },
        "headlineKo": "마이크로소프트: AI 베어 케이스 균열로 인해 27% 상승 후 저렴"
      },
      {
        "headline": "Microsoft Just Made a Move That Could Put More Pressure on Its Azure Business. Here's Why It Could Turn Out Great for the Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8ea0d71b0bb73d7b17a1a4044a495959394b695d92256cd9c59015d0da8e08c",
        "datetime": 1789426897,
        "relevance": 0.8,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Microsoft는 Azure 비즈니스에 더 많은 압력을 가할 수 있는 조치를 취했습니다. 이것이 주식에 좋은 결과를 가져올 수 있는 이유는 다음과 같습니다."
      },
      {
        "headline": "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
        "datetime": 1789422834,
        "relevance": 0.6,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중"
      }
    ],
    "newsHistory": [
      {
        "headline": "Blykalla and Microsoft Collaborate to Advance AI-driven Nuclear Licensing for its Lead-Cooled Advanced Nuclear Reactor",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=402e8a1971cd01e8d80d87f19c751eb034ca31fa96778612d92e78e4ba7d4db0",
        "datetime": 1789473600,
        "headlineKo": "Blykalla와 Microsoft는 납 냉각형 첨단 원자로에 대한 AI 기반 원자력 라이센스를 발전시키기 위해 협력하고 있습니다.",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Blykalla and Microsoft Collaborate to Advance AI-driven Nuclear Licensing for its Lead-Cooled Advanced Nuclear Reactor",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MSFT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MSFT의 사업과 관련된 'Blykalla and Microsoft Collaborate to Advance AI-driven Nuclear Licensing for its Lead-Cooled Advanced Nuclear Reactor' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MSFT 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479649.6490786
        }
      },
      {
        "headline": "Vietnam Green IT Software Forecasts Growth from $124.40M (2026) to $385.37M by 2031, Profiling Schneider Electric, Microsoft, IBM, SAP & 16 Other Key Players",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d71fac71e1b66f85a6c8d9df7fa1628d1923457a4ff7fe25e343af578fcb1938",
        "datetime": 1789461120,
        "headlineKo": "베트남 그린 IT 소프트웨어(Vietnam Green IT Software)는 슈나이더 일렉트릭(Schneider Electric), 마이크로소프트(Microsoft), IBM, SAP 및 기타 16개 주요 기업을 프로파일링하여 2026년 1억 2,440만 달러에서 2031년 3억 8,537만 달러로 성장할 것으로 예측합니다.",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Vietnam Green IT Software Forecasts Growth from $124.40M (2026) to $385.37M by 2031, Profiling Schneider Electric, Microsoft, IBM, SAP & 16 Other Key Players",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MSFT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MSFT의 사업과 관련된 'Vietnam Green IT Software Forecasts Growth from $124.40M (2026) to $385.37M by 2031, Profiling Schneider Electric, Microsoft, IBM, SAP & 16 Other Key Players' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MSFT 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479651.9913232
        }
      },
      {
        "headline": "Microsoft: Cheap After A 27% Rally As The AI Bear Case Cracks",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=7ef822fae6194a8147a253cdce7e07dc23cb3d795a0afb283212fdd5a8f40540",
        "datetime": 1789445874,
        "headlineKo": "마이크로소프트: AI 베어 케이스 균열로 인해 27% 상승 후 저렴",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Microsoft: Cheap After A 27% Rally As The AI Bear Case Cracks",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MSFT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MSFT의 사업과 관련된 'Microsoft: Cheap After A 27% Rally As The AI Bear Case Cracks' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MSFT 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479652.8648467
        }
      },
      {
        "headline": "Microsoft Just Made a Move That Could Put More Pressure on Its Azure Business. Here's Why It Could Turn Out Great for the Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b8ea0d71b0bb73d7b17a1a4044a495959394b695d92256cd9c59015d0da8e08c",
        "datetime": 1789426897,
        "headlineKo": "Microsoft는 Azure 비즈니스에 더 많은 압력을 가할 수 있는 조치를 취했습니다. 이것이 주식에 좋은 결과를 가져올 수 있는 이유는 다음과 같습니다.",
        "relevance": 0.8,
        "keywordFlag": false
      },
      {
        "headline": "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
        "datetime": 1789422834,
        "headlineKo": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
        "relevance": 0.6,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:40",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "GOOGL": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 3.109,
      "revenueEstimate": 131091007319
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Alphabet May Have Just Gotten Its Biggest Competitor Yet. And It's Not OpenAI or Anthropic.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bb0b7302f62273ec2bd19f3de62c29db82694c68dedbfab0e83ccfd1e01182c6",
        "datetime": 1789468500,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "경쟁사 진입 · 해자 점검",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "알파벳은 이제 막 가장 큰 경쟁자가 되었을 수도 있습니다.",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 수년 동안 투자자들은 Alphabet의( GOOGL +3.22% ) 최대 인공 지능(AI) 경쟁자를 쉽게 식별할 수 있었습니다.",
            "Nvidia는 업계에 전력을 공급하는 칩을 공급했습니다."
          ],
          "why": [
            "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 3.22 %, $ 10.89, $ 349.39 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "GOOGL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "성능·가격 비교",
            "실제 고객 수주",
            "기존 회사 점유율·마진"
          ],
          "interpretation": "GOOGL에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.4,
          "quality": "medium",
          "verifiedNumbers": [
            "3.22 %",
            "$ 10.89",
            "$ 349.39",
            "$4.3",
            "$ 342.14",
            "$ 349.91",
            "$ 235.84",
            "$ 408.61"
          ],
          "sourceExcerpt": [
            "Alphabet May Have Just Gotten Its Biggest Competitor Yet.",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool For years, investors could easily identify Alphabet's ( GOOGL +3.22% ) biggest artificial intelligence (AI) competitors.",
            "Nvidia supplied the chips powering the industry."
          ],
          "analysisUpdatedAt": 1789479664.62495
        },
        "headlineKo": "알파벳은 이제 막 가장 큰 경쟁자가 되었을 수도 있습니다. 그리고 그것은 OpenAI나 Anthropic이 아닙니다."
      },
      {
        "headline": "Google’s Traffic Numbers Look Fine, Its Search Economics Tell Another Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be78064e700450b39f88775a5771f5c9e457db0d7ee01a9fe760848d347801ad",
        "datetime": 1789467777,
        "relevance": 1.0,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Google’s Traffic Numbers Look Fine, Its Search Economics Tell Another Story",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "GOOGL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 GOOGL의 사업과 관련된 'Google’s Traffic Numbers Look Fine, Its Search Economics Tell Another Story' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "GOOGL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1.0,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479666.6112704
        },
        "headlineKo": "Google의 트래픽 수치는 괜찮아 보이지만 검색 경제는 또 다른 이야기를 들려줍니다."
      },
      {
        "headline": "Anthropic Expects a Second Straight Quarter of Adjusted Operating Profit. Amazon and Alphabet Investors Should Read the Fine Print",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2674ebc6289625a3f9c0d3ddc374a830cde7e15a9a0a533e3fd00936639cc3b4",
        "datetime": 1789465660,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "전망·추정 포함",
          "label": "AI 인프라 자금 유입 확대",
          "horizon": "중기 투자 사이클",
          "facts": [
            "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
            "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
            "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
          ],
          "why": [
            "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
            "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
            "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
          ],
          "beginner": [
            "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
            "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
            "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "긍정",
              "reason": "AI 컴퓨팅 수요 확대 가능성"
            },
            {
              "ticker": "AMD",
              "stance": "긍정",
              "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
            },
            {
              "ticker": "MU",
              "stance": "긍정",
              "reason": "AI 서버 메모리 수요와 가격 강세"
            },
            {
              "ticker": "ORCL",
              "stance": "혼합",
              "reason": "클라우드 수요와 자본 부담 동시 확대"
            }
          ],
          "watch": [
            "실제 수주·가동 데이터센터",
            "관련 기업 매출·수주잔고",
            "CAPEX 대비 영업현금흐름",
            "금리와 프로젝트 부채 비용"
          ],
          "interpretation": "이 기사는 GOOGL의 사업과 관련된 'Anthropic Expects a Second Straight Quarter of Adjusted Operating Profit. Amazon and Alphabet Investors Should Read the Fine Print' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "현재 해석: GOOGL에 우호적인 뉴스입니다. 다만 주가가 이미 기대를 반영했는지와 다음 실적의 매출·이익·현금흐름가 실제로 개선되는지를 확인해야 합니다.",
          "relevance": 0.4,
          "quality": "high",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479668.7682464
        },
        "headlineKo": "Anthropic은 2분기 연속 조정 영업 이익을 기록할 것으로 예상합니다. 아마존과 알파벳 투자자들은 작은 글씨를 읽어야 합니다"
      },
      {
        "headline": "Market Chatter: Google to Be Questioned by Indian Police Over Fake Gmail Accounts Used In Bomb Threats",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f170b3df6972343cca61f3e354f0bf4891679a5ca3be81367d1bd7db48eb7ac7",
        "datetime": 1789465331,
        "relevance": 1.0,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "시장 잡담: 폭발물 위협에 사용된 가짜 Gmail 계정에 대해 인도 경찰이 Google을 심문할 예정"
      },
      {
        "headline": "Alphabet's Distorted Forward P/E Meets AI Regulation Prospects",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d882b508f39877909430aa9ac80ff2e8a31e00507555f96a888df82523e647fd",
        "datetime": 1789463877,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Alphabet의 왜곡된 순방향 P/E가 AI 규제 전망을 충족합니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Alphabet May Have Just Gotten Its Biggest Competitor Yet. And It's Not OpenAI or Anthropic.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bb0b7302f62273ec2bd19f3de62c29db82694c68dedbfab0e83ccfd1e01182c6",
        "datetime": 1789468500,
        "headlineKo": "알파벳은 이제 막 가장 큰 경쟁자가 되었을 수도 있습니다. 그리고 그것은 OpenAI나 Anthropic이 아닙니다.",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "경쟁사 진입 · 해자 점검",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "알파벳은 이제 막 가장 큰 경쟁자가 되었을 수도 있습니다.",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 수년 동안 투자자들은 Alphabet의( GOOGL +3.22% ) 최대 인공 지능(AI) 경쟁자를 쉽게 식별할 수 있었습니다.",
            "Nvidia는 업계에 전력을 공급하는 칩을 공급했습니다."
          ],
          "why": [
            "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 3.22 %, $ 10.89, $ 349.39 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "GOOGL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "GOOGL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "성능·가격 비교",
            "실제 고객 수주",
            "기존 회사 점유율·마진"
          ],
          "interpretation": "GOOGL에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.4,
          "quality": "medium",
          "verifiedNumbers": [
            "3.22 %",
            "$ 10.89",
            "$ 349.39",
            "$4.3",
            "$ 342.14",
            "$ 349.91",
            "$ 235.84",
            "$ 408.61"
          ],
          "sourceExcerpt": [
            "Alphabet May Have Just Gotten Its Biggest Competitor Yet.",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool For years, investors could easily identify Alphabet's ( GOOGL +3.22% ) biggest artificial intelligence (AI) competitors.",
            "Nvidia supplied the chips powering the industry."
          ],
          "analysisUpdatedAt": 1789479664.62495
        }
      },
      {
        "headline": "Google’s Traffic Numbers Look Fine, Its Search Economics Tell Another Story",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be78064e700450b39f88775a5771f5c9e457db0d7ee01a9fe760848d347801ad",
        "datetime": 1789467777,
        "headlineKo": "Google의 트래픽 수치는 괜찮아 보이지만 검색 경제는 또 다른 이야기를 들려줍니다.",
        "relevance": 1.0,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Google’s Traffic Numbers Look Fine, Its Search Economics Tell Another Story",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "GOOGL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 GOOGL의 사업과 관련된 'Google’s Traffic Numbers Look Fine, Its Search Economics Tell Another Story' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "GOOGL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1.0,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479666.6112704
        }
      },
      {
        "headline": "Anthropic Expects a Second Straight Quarter of Adjusted Operating Profit. Amazon and Alphabet Investors Should Read the Fine Print",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2674ebc6289625a3f9c0d3ddc374a830cde7e15a9a0a533e3fd00936639cc3b4",
        "datetime": 1789465660,
        "headlineKo": "Anthropic은 2분기 연속 조정 영업 이익을 기록할 것으로 예상합니다. 아마존과 알파벳 투자자들은 작은 글씨를 읽어야 합니다",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "전망·추정 포함",
          "label": "AI 인프라 자금 유입 확대",
          "horizon": "중기 투자 사이클",
          "facts": [
            "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
            "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
            "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
          ],
          "why": [
            "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
            "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
            "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
          ],
          "beginner": [
            "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
            "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
            "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "긍정",
              "reason": "AI 컴퓨팅 수요 확대 가능성"
            },
            {
              "ticker": "AMD",
              "stance": "긍정",
              "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
            },
            {
              "ticker": "MU",
              "stance": "긍정",
              "reason": "AI 서버 메모리 수요와 가격 강세"
            },
            {
              "ticker": "ORCL",
              "stance": "혼합",
              "reason": "클라우드 수요와 자본 부담 동시 확대"
            }
          ],
          "watch": [
            "실제 수주·가동 데이터센터",
            "관련 기업 매출·수주잔고",
            "CAPEX 대비 영업현금흐름",
            "금리와 프로젝트 부채 비용"
          ],
          "interpretation": "이 기사는 GOOGL의 사업과 관련된 'Anthropic Expects a Second Straight Quarter of Adjusted Operating Profit. Amazon and Alphabet Investors Should Read the Fine Print' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "현재 해석: GOOGL에 우호적인 뉴스입니다. 다만 주가가 이미 기대를 반영했는지와 다음 실적의 매출·이익·현금흐름가 실제로 개선되는지를 확인해야 합니다.",
          "relevance": 0.4,
          "quality": "high",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479668.7682464
        }
      },
      {
        "headline": "Market Chatter: Google to Be Questioned by Indian Police Over Fake Gmail Accounts Used In Bomb Threats",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f170b3df6972343cca61f3e354f0bf4891679a5ca3be81367d1bd7db48eb7ac7",
        "datetime": 1789465331,
        "headlineKo": "시장 잡담: 폭발물 위협에 사용된 가짜 Gmail 계정에 대해 인도 경찰이 Google을 심문할 예정",
        "relevance": 1.0,
        "keywordFlag": false
      },
      {
        "headline": "Alphabet's Distorted Forward P/E Meets AI Regulation Prospects",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d882b508f39877909430aa9ac80ff2e8a31e00507555f96a888df82523e647fd",
        "datetime": 1789463877,
        "headlineKo": "Alphabet의 왜곡된 순방향 P/E가 AI 규제 전망을 충족합니다.",
        "relevance": 0.4,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:41",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "AMZN": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 1.9886,
      "revenueEstimate": 206203051896
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Anthropic Expects a Second Straight Quarter of Adjusted Operating Profit. Amazon and Alphabet Investors Should Read the Fine Print",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2674ebc6289625a3f9c0d3ddc374a830cde7e15a9a0a533e3fd00936639cc3b4",
        "datetime": 1789465660,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "전망·추정 포함",
          "label": "AI 인프라 자금 유입 확대",
          "horizon": "중기 투자 사이클",
          "facts": [
            "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
            "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
            "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
          ],
          "why": [
            "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
            "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
            "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
          ],
          "beginner": [
            "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
            "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
            "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "긍정",
              "reason": "AI 컴퓨팅 수요 확대 가능성"
            },
            {
              "ticker": "AMD",
              "stance": "긍정",
              "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
            },
            {
              "ticker": "MU",
              "stance": "긍정",
              "reason": "AI 서버 메모리 수요와 가격 강세"
            },
            {
              "ticker": "ORCL",
              "stance": "혼합",
              "reason": "클라우드 수요와 자본 부담 동시 확대"
            }
          ],
          "watch": [
            "실제 수주·가동 데이터센터",
            "관련 기업 매출·수주잔고",
            "CAPEX 대비 영업현금흐름",
            "금리와 프로젝트 부채 비용"
          ],
          "interpretation": "이 기사는 AMZN의 사업과 관련된 'Anthropic Expects a Second Straight Quarter of Adjusted Operating Profit. Amazon and Alphabet Investors Should Read the Fine Print' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "현재 해석: AMZN에 우호적인 뉴스입니다. 다만 주가가 이미 기대를 반영했는지와 다음 실적의 매출·이익·현금흐름가 실제로 개선되는지를 확인해야 합니다.",
          "relevance": 0.5,
          "quality": "high",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479677.5988016
        },
        "headlineKo": "Anthropic은 2분기 연속 조정 영업 이익을 기록할 것으로 예상합니다. 아마존과 알파벳 투자자들은 작은 글씨를 읽어야 합니다"
      },
      {
        "headline": "What a $10,000 Investment in Amazon Now Would Be Worth if Its Anthropic Stake Gets Marked at $2 Trillion",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=08861e5240ed0be4dd4c0d93a9ad98c860e758cb0c1510f6c7571f503524931c",
        "datetime": 1789465200,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "아마존의 인류 지분이 2조 달러로 표시된다면 아마존에 대한 10,000달러 투자의 가치는 얼마나 될까요 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Wall Street는 이미 3위입니다.",
            "올 여름 초 기밀 S-1을 제출한 후 이르면 10월에 2조 달러 규모의 상장이 보고되고 있습니다.",
            "지난 5월, Anthropic은 연간 수익 실행률이 470억 달러를 달성했다고 대중에게 밝혔습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $2 trillion, $47 billion, $65 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMZN",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "AMZN에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "$2 trillion",
            "$47 billion",
            "$65 billion",
            "31 times",
            "$1.8 trillion",
            "70%",
            "1.26%",
            "$1.25 billion"
          ],
          "sourceExcerpt": [
            "What a $10,000 Investment in Amazon Now Would Be Worth if Its Anthropic Stake Gets Marked at $2 Trillion | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Wall Street is already tre",
            "Reports are floating a $2 trillion listing as early as October, following the filing of a confidential S-1 earlier this summer.",
            "In May, Anthropic told the public its annualized revenue run rate had cleared $47 billion."
          ],
          "analysisUpdatedAt": 1789479682.4243624
        },
        "headlineKo": "아마존의 인류 지분이 2조 달러로 표시된다면 아마존에 대한 10,000달러 투자의 가치는 얼마나 될까요?"
      },
      {
        "headline": "Amazon Now crosses $1bn in gross annualised sales – report",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8580f800aadedce68c98c55aa43dd1455b568b2cfb77332c8b887ab1ae9ceed",
        "datetime": 1789463688,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Amazon Now crosses $1bn in gross annualised sales – report",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "AMZN",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 AMZN의 사업과 관련된 'Amazon Now crosses $1bn in gross annualised sales – report' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "AMZN 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479683.1341584
        },
        "headlineKo": "Amazon Now, 연간 총 매출 10억 달러 돌파 – 보고서"
      },
      {
        "headline": "Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
        "datetime": 1789445485,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?"
      },
      {
        "headline": "AI Books Are Flooding Amazon — 63% of Religious Titles Flagged as AI, While Human Authors Face a Revenue Squeeze: Report",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ccff269ff80c53706e5c3b25ac66b0fce4124126e8dc8ee94a42c57f1279c3b",
        "datetime": 1789443007,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "AI 도서가 아마존에 넘쳐나고 있습니다. 종교 서적 중 63%가 AI로 표시되고 인간 작가는 수익 압박에 직면해 있습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Anthropic Expects a Second Straight Quarter of Adjusted Operating Profit. Amazon and Alphabet Investors Should Read the Fine Print",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2674ebc6289625a3f9c0d3ddc374a830cde7e15a9a0a533e3fd00936639cc3b4",
        "datetime": 1789465660,
        "headlineKo": "Anthropic은 2분기 연속 조정 영업 이익을 기록할 것으로 예상합니다. 아마존과 알파벳 투자자들은 작은 글씨를 읽어야 합니다",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "전망·추정 포함",
          "label": "AI 인프라 자금 유입 확대",
          "horizon": "중기 투자 사이클",
          "facts": [
            "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
            "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
            "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
          ],
          "why": [
            "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
            "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
            "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
          ],
          "beginner": [
            "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
            "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
            "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "긍정",
              "reason": "AI 컴퓨팅 수요 확대 가능성"
            },
            {
              "ticker": "AMD",
              "stance": "긍정",
              "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
            },
            {
              "ticker": "MU",
              "stance": "긍정",
              "reason": "AI 서버 메모리 수요와 가격 강세"
            },
            {
              "ticker": "ORCL",
              "stance": "혼합",
              "reason": "클라우드 수요와 자본 부담 동시 확대"
            }
          ],
          "watch": [
            "실제 수주·가동 데이터센터",
            "관련 기업 매출·수주잔고",
            "CAPEX 대비 영업현금흐름",
            "금리와 프로젝트 부채 비용"
          ],
          "interpretation": "이 기사는 AMZN의 사업과 관련된 'Anthropic Expects a Second Straight Quarter of Adjusted Operating Profit. Amazon and Alphabet Investors Should Read the Fine Print' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "현재 해석: AMZN에 우호적인 뉴스입니다. 다만 주가가 이미 기대를 반영했는지와 다음 실적의 매출·이익·현금흐름가 실제로 개선되는지를 확인해야 합니다.",
          "relevance": 0.5,
          "quality": "high",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479677.5988016
        }
      },
      {
        "headline": "What a $10,000 Investment in Amazon Now Would Be Worth if Its Anthropic Stake Gets Marked at $2 Trillion",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=08861e5240ed0be4dd4c0d93a9ad98c860e758cb0c1510f6c7571f503524931c",
        "datetime": 1789465200,
        "headlineKo": "아마존의 인류 지분이 2조 달러로 표시된다면 아마존에 대한 10,000달러 투자의 가치는 얼마나 될까요?",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "아마존의 인류 지분이 2조 달러로 표시된다면 아마존에 대한 10,000달러 투자의 가치는 얼마나 될까요 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Wall Street는 이미 3위입니다.",
            "올 여름 초 기밀 S-1을 제출한 후 이르면 10월에 2조 달러 규모의 상장이 보고되고 있습니다.",
            "지난 5월, Anthropic은 연간 수익 실행률이 470억 달러를 달성했다고 대중에게 밝혔습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $2 trillion, $47 billion, $65 billion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMZN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMZN",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "AMZN에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "$2 trillion",
            "$47 billion",
            "$65 billion",
            "31 times",
            "$1.8 trillion",
            "70%",
            "1.26%",
            "$1.25 billion"
          ],
          "sourceExcerpt": [
            "What a $10,000 Investment in Amazon Now Would Be Worth if Its Anthropic Stake Gets Marked at $2 Trillion | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Wall Street is already tre",
            "Reports are floating a $2 trillion listing as early as October, following the filing of a confidential S-1 earlier this summer.",
            "In May, Anthropic told the public its annualized revenue run rate had cleared $47 billion."
          ],
          "analysisUpdatedAt": 1789479682.4243624
        }
      },
      {
        "headline": "Amazon Now crosses $1bn in gross annualised sales – report",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c8580f800aadedce68c98c55aa43dd1455b568b2cfb77332c8b887ab1ae9ceed",
        "datetime": 1789463688,
        "headlineKo": "Amazon Now, 연간 총 매출 10억 달러 돌파 – 보고서",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Amazon Now crosses $1bn in gross annualised sales – report",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "AMZN",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 AMZN의 사업과 관련된 'Amazon Now crosses $1bn in gross annualised sales – report' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "AMZN 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479683.1341584
        }
      },
      {
        "headline": "Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
        "datetime": 1789445485,
        "headlineKo": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?",
        "relevance": 0.5,
        "keywordFlag": false
      },
      {
        "headline": "AI Books Are Flooding Amazon — 63% of Religious Titles Flagged as AI, While Human Authors Face a Revenue Squeeze: Report",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5ccff269ff80c53706e5c3b25ac66b0fce4124126e8dc8ee94a42c57f1279c3b",
        "datetime": 1789443007,
        "headlineKo": "AI 도서가 아마존에 넘쳐나고 있습니다. 종교 서적 중 63%가 AI로 표시되고 인간 작가는 수익 압박에 직면해 있습니다.",
        "relevance": 0.5,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:41",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "META": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "amc",
      "epsEstimate": 6.6602,
      "revenueEstimate": 64526032014
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Fifty-Five Analysts Cover Meta and None Say Sell",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47b122dc86633a9de389113a6e8a07f4670e259525ab0f13c8fb404bdeac1056",
        "datetime": 1789473643,
        "relevance": 0.6,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "55명의 분석가가 메타를 다루지만 아무도 매도라고 말하지 않습니다. - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "작성자 Vandita Jadeja 2026년 9월 15일 오전 8시(ET) 게시 · 3분 읽기 가격 목표 데스크."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $660.71,, $805.90,, 24.36% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "META",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "META에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.6,
          "quality": "medium",
          "verifiedNumbers": [
            "$660.71,",
            "$805.90,",
            "24.36%",
            "90%",
            "$660.71",
            "$805.90",
            "7.12%",
            "14.14%"
          ],
          "sourceExcerpt": [
            "Fifty-Five Analysts Cover Meta and None Say Sell - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By Vandita Jadeja Published September 15, 2026, 8:00am ET · 3 min read Price Targets desk."
          ],
          "analysisUpdatedAt": 1789479692.765567
        },
        "headlineKo": "55명의 분석가가 메타를 다루지만 아무도 매도를 말하지 않습니다."
      },
      {
        "headline": "Meta’s (META) Muse Math: 10 Million Paying Users Could Mean $2.4 Billion a Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=782391bdb227ee68ba7399f9356f0276f75fc1de575834954c32ffa61d9fee9e",
        "datetime": 1789471798,
        "relevance": 0.6,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Meta’s (META) Muse Math: 10 Million Paying Users Could Mean $2.4 Billion a Year",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "META",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 META의 사업과 관련된 'Meta’s (META) Muse Math: 10 Million Paying Users Could Mean $2.4 Billion a Year' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "META 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.6,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479694.8105385
        },
        "headlineKo": "Meta의 (META) Muse Math: 유료 사용자 1천만 명은 연간 24억 달러를 의미할 수 있습니다."
      },
      {
        "headline": "Meta Bulls Bet Stock Will Break Out After Year of Head Fakes",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2dd59282a2d06bc5dea385fc6289f74fa4af0f83b15668cbf07dabfc017affb3",
        "datetime": 1789464636,
        "relevance": 0.6,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Meta Bulls Bet Stock Will Break Out After Year of Head Fakes",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "META",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 META의 사업과 관련된 'Meta Bulls Bet Stock Will Break Out After Year of Head Fakes' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "META 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.6,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479696.776662
        },
        "headlineKo": "메타 불스(Meta Bulls)는 헤드 페이크가 발생한 해 이후 주식이 폭발할 것이라고 장담합니다."
      },
      {
        "headline": "Meta: The Case For $1,000 Is Easy To Make",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ad9bd50f25940bfa8b5ace52e011a494108e618b3bc7ea0170f34b380987932b",
        "datetime": 1789460400,
        "relevance": 0.6,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "메타: 1,000달러짜리 사례는 만들기 쉽습니다"
      },
      {
        "headline": "Meta: AI Is Working, But The $279 Billion Bill Just Arrived",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=86b5ea893b83181bc04ac60edac7cff8a78433e12a22cbecad7042b2fb3dc19d",
        "datetime": 1789445297,
        "relevance": 0.6,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "메타: AI는 작동하고 있지만 2,790억 달러 규모의 법안이 막 도착했습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Fifty-Five Analysts Cover Meta and None Say Sell",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=47b122dc86633a9de389113a6e8a07f4670e259525ab0f13c8fb404bdeac1056",
        "datetime": 1789473643,
        "headlineKo": "55명의 분석가가 메타를 다루지만 아무도 매도를 말하지 않습니다.",
        "relevance": 0.6,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "55명의 분석가가 메타를 다루지만 아무도 매도라고 말하지 않습니다. - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "작성자 Vandita Jadeja 2026년 9월 15일 오전 8시(ET) 게시 · 3분 읽기 가격 목표 데스크."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $660.71,, $805.90,, 24.36% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "META의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "META",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "META에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.6,
          "quality": "medium",
          "verifiedNumbers": [
            "$660.71,",
            "$805.90,",
            "24.36%",
            "90%",
            "$660.71",
            "$805.90",
            "7.12%",
            "14.14%"
          ],
          "sourceExcerpt": [
            "Fifty-Five Analysts Cover Meta and None Say Sell - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By Vandita Jadeja Published September 15, 2026, 8:00am ET · 3 min read Price Targets desk."
          ],
          "analysisUpdatedAt": 1789479692.765567
        }
      },
      {
        "headline": "Meta’s (META) Muse Math: 10 Million Paying Users Could Mean $2.4 Billion a Year",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=782391bdb227ee68ba7399f9356f0276f75fc1de575834954c32ffa61d9fee9e",
        "datetime": 1789471798,
        "headlineKo": "Meta의 (META) Muse Math: 유료 사용자 1천만 명은 연간 24억 달러를 의미할 수 있습니다.",
        "relevance": 0.6,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Meta’s (META) Muse Math: 10 Million Paying Users Could Mean $2.4 Billion a Year",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "META",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 META의 사업과 관련된 'Meta’s (META) Muse Math: 10 Million Paying Users Could Mean $2.4 Billion a Year' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "META 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.6,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479694.8105385
        }
      },
      {
        "headline": "Meta Bulls Bet Stock Will Break Out After Year of Head Fakes",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2dd59282a2d06bc5dea385fc6289f74fa4af0f83b15668cbf07dabfc017affb3",
        "datetime": 1789464636,
        "headlineKo": "메타 불스(Meta Bulls)는 헤드 페이크가 발생한 해 이후 주식이 폭발할 것이라고 장담합니다.",
        "relevance": 0.6,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Meta Bulls Bet Stock Will Break Out After Year of Head Fakes",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "META",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 META의 사업과 관련된 'Meta Bulls Bet Stock Will Break Out After Year of Head Fakes' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "META 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.6,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479696.776662
        }
      },
      {
        "headline": "Meta: The Case For $1,000 Is Easy To Make",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=ad9bd50f25940bfa8b5ace52e011a494108e618b3bc7ea0170f34b380987932b",
        "datetime": 1789460400,
        "headlineKo": "메타: 1,000달러짜리 사례는 만들기 쉽습니다",
        "relevance": 0.6,
        "keywordFlag": false
      },
      {
        "headline": "Meta: AI Is Working, But The $279 Billion Bill Just Arrived",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=86b5ea893b83181bc04ac60edac7cff8a78433e12a22cbecad7042b2fb3dc19d",
        "datetime": 1789445297,
        "headlineKo": "메타: AI는 작동하고 있지만 2,790억 달러 규모의 법안이 막 도착했습니다.",
        "relevance": 0.6,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:41",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "AAPL": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "amc",
      "epsEstimate": 2.0214,
      "revenueEstimate": 115213998571
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Apple’s Outstanding Comedy Widow’s Bay triumphs as the most decorated freshman comedy in Emmy history and Apple TV leads as the most awarded network at the 78th Primetime Emmy Awards",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9da3ddeef7b6f27f8c0a89b7e0069c8814a95518bd8c92ce96e279c28d0de679",
        "datetime": 1789465200,
        "relevance": 0.29,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Apple’s Outstanding Comedy Widow’s Bay triumphs as the most decorated freshman comedy in Emmy history and Apple TV leads as the most awarded network at the 78th Primetime Emmy Awards",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "AAPL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 AAPL의 사업과 관련된 'Apple’s Outstanding Comedy Widow’s Bay triumphs as the most decorated freshman comedy in Emmy history and Apple TV leads as the most awarded network at the 78th Primetime Emmy Awards' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "AAPL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.29,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479704.9219277
        },
        "headlineKo": "Apple의 뛰어난 코미디 Widow's Bay가 Emmy 역사상 가장 많은 상을 받은 신입생 코미디로 승리하고 Apple TV가 제78회 Primetime Emmy Awards에서 가장 많은 상을 받은 네트워크로 선두를 달리고 있습니다."
      },
      {
        "headline": "Gene Munster Says iPhone 18 Pre-Order Wait Times Are Climbing, Calls It a 'Favorable Sign for Demand'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3930dddbfa34181d795505c7587ad2b064f2f77614c61e310b9fafb14026c16",
        "datetime": 1789455318,
        "relevance": 0.29,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Gene Munster Says iPhone 18 Pre-Order Wait Times Are Climbing, Calls It a 'Favorable Sign for Demand'",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "AAPL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 AAPL의 사업과 관련된 'Gene Munster Says iPhone 18 Pre-Order Wait Times Are Climbing, Calls It a 'Favorable Sign for Demand'' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "AAPL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.29,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479706.9560146
        },
        "headlineKo": "Gene Munster는 iPhone 18 사전 주문 대기 시간이 늘어나고 있으며 이를 '수요에 유리한 신호'라고 말합니다."
      },
      {
        "headline": "Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
        "datetime": 1789445485,
        "relevance": 0.29,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "전망·추정 포함",
          "label": "AI 인프라 자금 유입 확대",
          "horizon": "중기 투자 사이클",
          "facts": [
            "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
            "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
            "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
          ],
          "why": [
            "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
            "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
            "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
          ],
          "beginner": [
            "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
            "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
            "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "긍정",
              "reason": "AI 컴퓨팅 수요 확대 가능성"
            },
            {
              "ticker": "AMD",
              "stance": "긍정",
              "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
            },
            {
              "ticker": "MU",
              "stance": "긍정",
              "reason": "AI 서버 메모리 수요와 가격 강세"
            },
            {
              "ticker": "ORCL",
              "stance": "혼합",
              "reason": "클라우드 수요와 자본 부담 동시 확대"
            }
          ],
          "watch": [
            "실제 수주·가동 데이터센터",
            "관련 기업 매출·수주잔고",
            "CAPEX 대비 영업현금흐름",
            "금리와 프로젝트 부채 비용"
          ],
          "interpretation": "이 기사는 AAPL의 사업과 관련된 'Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "현재 해석: AAPL에 우호적인 뉴스입니다. 다만 주가가 이미 기대를 반영했는지와 다음 실적의 매출·이익·현금흐름가 실제로 개선되는지를 확인해야 합니다.",
          "relevance": 0.29,
          "quality": "high",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479709.104191
        },
        "headlineKo": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?"
      },
      {
        "headline": "OpenAI Left Exposed After Apple's Surprise Legal Break",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f981a1af8463704c66004d8e5152dc621421ecce2be1e9b707dad15a84622fa6",
        "datetime": 1789419380,
        "relevance": 0.29,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "OpenAI는 Apple의 깜짝 법적 위반 이후 노출된 상태로 남아 있습니다."
      },
      {
        "headline": "Apple's Siri Upgrade Does Not Require Every User to Buy Another iPhone",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0396f3d364d15ba913e7c0c957b4ba2cb6cf1172c1e6059049b4d8127a0ef7df",
        "datetime": 1789410070,
        "relevance": 0.57,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Apple의 Siri 업그레이드는 모든 사용자가 다른 iPhone을 구입할 것을 요구하지 않습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Apple’s Outstanding Comedy Widow’s Bay triumphs as the most decorated freshman comedy in Emmy history and Apple TV leads as the most awarded network at the 78th Primetime Emmy Awards",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9da3ddeef7b6f27f8c0a89b7e0069c8814a95518bd8c92ce96e279c28d0de679",
        "datetime": 1789465200,
        "headlineKo": "Apple의 뛰어난 코미디 Widow's Bay가 Emmy 역사상 가장 많은 상을 받은 신입생 코미디로 승리하고 Apple TV가 제78회 Primetime Emmy Awards에서 가장 많은 상을 받은 네트워크로 선두를 달리고 있습니다.",
        "relevance": 0.29,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Apple’s Outstanding Comedy Widow’s Bay triumphs as the most decorated freshman comedy in Emmy history and Apple TV leads as the most awarded network at the 78th Primetime Emmy Awards",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "AAPL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 AAPL의 사업과 관련된 'Apple’s Outstanding Comedy Widow’s Bay triumphs as the most decorated freshman comedy in Emmy history and Apple TV leads as the most awarded network at the 78th Primetime Emmy Awards' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "AAPL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.29,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479704.9219277
        }
      },
      {
        "headline": "Gene Munster Says iPhone 18 Pre-Order Wait Times Are Climbing, Calls It a 'Favorable Sign for Demand'",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3930dddbfa34181d795505c7587ad2b064f2f77614c61e310b9fafb14026c16",
        "datetime": 1789455318,
        "headlineKo": "Gene Munster는 iPhone 18 사전 주문 대기 시간이 늘어나고 있으며 이를 '수요에 유리한 신호'라고 말합니다.",
        "relevance": 0.29,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Gene Munster Says iPhone 18 Pre-Order Wait Times Are Climbing, Calls It a 'Favorable Sign for Demand'",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "AAPL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 AAPL의 사업과 관련된 'Gene Munster Says iPhone 18 Pre-Order Wait Times Are Climbing, Calls It a 'Favorable Sign for Demand'' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "AAPL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.29,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479706.9560146
        }
      },
      {
        "headline": "Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
        "datetime": 1789445485,
        "headlineKo": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?",
        "relevance": 0.29,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "전망·추정 포함",
          "label": "AI 인프라 자금 유입 확대",
          "horizon": "중기 투자 사이클",
          "facts": [
            "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
            "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
            "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
          ],
          "why": [
            "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
            "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
            "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
          ],
          "beginner": [
            "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
            "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
            "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "긍정",
              "reason": "AI 컴퓨팅 수요 확대 가능성"
            },
            {
              "ticker": "AMD",
              "stance": "긍정",
              "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
            },
            {
              "ticker": "MU",
              "stance": "긍정",
              "reason": "AI 서버 메모리 수요와 가격 강세"
            },
            {
              "ticker": "ORCL",
              "stance": "혼합",
              "reason": "클라우드 수요와 자본 부담 동시 확대"
            }
          ],
          "watch": [
            "실제 수주·가동 데이터센터",
            "관련 기업 매출·수주잔고",
            "CAPEX 대비 영업현금흐름",
            "금리와 프로젝트 부채 비용"
          ],
          "interpretation": "이 기사는 AAPL의 사업과 관련된 'Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "현재 해석: AAPL에 우호적인 뉴스입니다. 다만 주가가 이미 기대를 반영했는지와 다음 실적의 매출·이익·현금흐름가 실제로 개선되는지를 확인해야 합니다.",
          "relevance": 0.29,
          "quality": "high",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479709.104191
        }
      },
      {
        "headline": "OpenAI Left Exposed After Apple's Surprise Legal Break",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f981a1af8463704c66004d8e5152dc621421ecce2be1e9b707dad15a84622fa6",
        "datetime": 1789419380,
        "headlineKo": "OpenAI는 Apple의 깜짝 법적 위반 이후 노출된 상태로 남아 있습니다.",
        "relevance": 0.29,
        "keywordFlag": false
      },
      {
        "headline": "Apple's Siri Upgrade Does Not Require Every User to Buy Another iPhone",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0396f3d364d15ba913e7c0c957b4ba2cb6cf1172c1e6059049b4d8127a0ef7df",
        "datetime": 1789410070,
        "headlineKo": "Apple의 Siri 업그레이드는 모든 사용자가 다른 iPhone을 구입할 것을 요구하지 않습니다.",
        "relevance": 0.57,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:41",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "TSLA": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "amc",
      "epsEstimate": 0.4508,
      "revenueEstimate": 28265984061
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Elon Musk Makes Strongest Hint Yet About A Tesla-SpaceX Merger",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da2f2145f193ffeba098896500ae24d126d835026e25c9be73d7c677e54fc4b3",
        "datetime": 1789475693,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Elon Musk Makes Strongest Hint Yet About A Tesla-SpaceX Merger",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "TSLA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 TSLA의 사업과 관련된 'Elon Musk Makes Strongest Hint Yet About A Tesla-SpaceX Merger' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "TSLA 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479716.699911
        },
        "headlineKo": "Elon Musk는 Tesla-SpaceX 합병에 대해 사상 가장 강력한 힌트를 제공합니다"
      },
      {
        "headline": "Elon Musk Is Teasing a Tesla and SpaceX Merger Again",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b894235f1e5f834c26cd5ce5a03b70aae6af4d04b172cea7f4bbb90aae69f56d",
        "datetime": 1789471440,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Elon Musk Is Teasing a Tesla and SpaceX Merger Again",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "TSLA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 TSLA의 사업과 관련된 'Elon Musk Is Teasing a Tesla and SpaceX Merger Again' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "TSLA 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479718.5628636
        },
        "headlineKo": "Elon Musk는 Tesla와 SpaceX의 합병을 다시 놀리고 있습니다."
      },
      {
        "headline": "Tesla, SpaceX Stocks Rise Overnight: Elon Musk Fuels Merger Speculation, ‘Hints’ At Action Amid ‘Close Collaboration’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b45de987449ba7b66ed9151b2baf646fdce89e96f912ecf81230076b2ef62ae0",
        "datetime": 1789455971,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Tesla, SpaceX 주가 밤새 상승: Elon Musk, 합병 추측 촉진, '긴밀한 협력' 중 실행에 대한 '힌트' 신규 에이전트 연결 동향 뉴스 수익 전체 DIA 0.53% SPY 0.15% QQQ 0.01% 추세 RDDT 0.56% FPS 7.12% VERA 2.10% P",
            "Tesla, SpaceX 주가 밤새 상승: Elon Musk, 합병 추측 촉진, '긴밀한 협력' 속에서 '힌트' 실행 Jefferies는 거래에서 전략적 논리를 확인하고 Musk가 합병 프리미엄 없이 55.3%의 의결권을 유지할 수 있을 것으로 추정합니다.",
            "SpaceX 소유주이자 Tesla CEO인 Elon Musk가 Axel Springer Award 2020 레드카펫에 도착했습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.53%, 0.15%, 0.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "TSLA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "TSLA에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.4,
          "quality": "medium",
          "verifiedNumbers": [
            "0.53%",
            "0.15%",
            "0.01%",
            "0.56%",
            "7.12%",
            "2.10%",
            "8.97%",
            "0.82%"
          ],
          "sourceExcerpt": [
            "Tesla, SpaceX Stocks Rise Overnight: Elon Musk Fuels Merger Speculation, ‘Hints’ At Action Amid ‘Close Collaboration’ New Connect your Agent Trending News Earnings All DIA 0.53% SPY 0.15% QQQ 0.01% Trending RDDT 0.56% FPS 7.12% VERA 2.10% P",
            "Tesla, SpaceX Stocks Rise Overnight: Elon Musk Fuels Merger Speculation, ‘Hints’ At Action Amid ‘Close Collaboration’ Jefferies sees strategic logic in a deal and estimates Musk could retain 55.3% voting control without a merger premium.",
            "SpaceX owner and Tesla CEO Elon Musk arrives on the red carpet for the Axel Springer Award 2020."
          ],
          "analysisUpdatedAt": 1789479723.9799595
        },
        "headlineKo": "Tesla, SpaceX 주가 밤새 상승: Elon Musk, 합병 추측 촉진, '밀접한 협력' 속에서 '힌트' 실행"
      },
      {
        "headline": "3 AI Robotics Stocks Worth Owning Over Tesla Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8031a72f1c1a08b7b3acb0772a948c52177fc1524ccdd5ad618f0818aaa6a09b",
        "datetime": 1789446900,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "현재 Tesla보다 소유할 가치가 있는 AI 로봇공학 주식 3개"
      },
      {
        "headline": "If You'd Invested $1,000 in Tesla Stock 1 Year Ago, Here's How Much You'd Have Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4359748e4127532b19df217ee4ec848843bd603fec7d0efe2152d6306af1476f",
        "datetime": 1789422780,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "1년 전에 Tesla 주식에 1,000달러를 투자했다면 현재 얼마를 갖게 될까요?"
      }
    ],
    "newsHistory": [
      {
        "headline": "Elon Musk Makes Strongest Hint Yet About A Tesla-SpaceX Merger",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=da2f2145f193ffeba098896500ae24d126d835026e25c9be73d7c677e54fc4b3",
        "datetime": 1789475693,
        "headlineKo": "Elon Musk는 Tesla-SpaceX 합병에 대해 사상 가장 강력한 힌트를 제공합니다",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Elon Musk Makes Strongest Hint Yet About A Tesla-SpaceX Merger",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "TSLA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 TSLA의 사업과 관련된 'Elon Musk Makes Strongest Hint Yet About A Tesla-SpaceX Merger' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "TSLA 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479716.699911
        }
      },
      {
        "headline": "Elon Musk Is Teasing a Tesla and SpaceX Merger Again",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b894235f1e5f834c26cd5ce5a03b70aae6af4d04b172cea7f4bbb90aae69f56d",
        "datetime": 1789471440,
        "headlineKo": "Elon Musk는 Tesla와 SpaceX의 합병을 다시 놀리고 있습니다.",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Elon Musk Is Teasing a Tesla and SpaceX Merger Again",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "TSLA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 TSLA의 사업과 관련된 'Elon Musk Is Teasing a Tesla and SpaceX Merger Again' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "TSLA 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479718.5628636
        }
      },
      {
        "headline": "Tesla, SpaceX Stocks Rise Overnight: Elon Musk Fuels Merger Speculation, ‘Hints’ At Action Amid ‘Close Collaboration’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b45de987449ba7b66ed9151b2baf646fdce89e96f912ecf81230076b2ef62ae0",
        "datetime": 1789455971,
        "headlineKo": "Tesla, SpaceX 주가 밤새 상승: Elon Musk, 합병 추측 촉진, '밀접한 협력' 속에서 '힌트' 실행",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Tesla, SpaceX 주가 밤새 상승: Elon Musk, 합병 추측 촉진, '긴밀한 협력' 중 실행에 대한 '힌트' 신규 에이전트 연결 동향 뉴스 수익 전체 DIA 0.53% SPY 0.15% QQQ 0.01% 추세 RDDT 0.56% FPS 7.12% VERA 2.10% P",
            "Tesla, SpaceX 주가 밤새 상승: Elon Musk, 합병 추측 촉진, '긴밀한 협력' 속에서 '힌트' 실행 Jefferies는 거래에서 전략적 논리를 확인하고 Musk가 합병 프리미엄 없이 55.3%의 의결권을 유지할 수 있을 것으로 추정합니다.",
            "SpaceX 소유주이자 Tesla CEO인 Elon Musk가 Axel Springer Award 2020 레드카펫에 도착했습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.53%, 0.15%, 0.01% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "TSLA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "TSLA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "TSLA에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.4,
          "quality": "medium",
          "verifiedNumbers": [
            "0.53%",
            "0.15%",
            "0.01%",
            "0.56%",
            "7.12%",
            "2.10%",
            "8.97%",
            "0.82%"
          ],
          "sourceExcerpt": [
            "Tesla, SpaceX Stocks Rise Overnight: Elon Musk Fuels Merger Speculation, ‘Hints’ At Action Amid ‘Close Collaboration’ New Connect your Agent Trending News Earnings All DIA 0.53% SPY 0.15% QQQ 0.01% Trending RDDT 0.56% FPS 7.12% VERA 2.10% P",
            "Tesla, SpaceX Stocks Rise Overnight: Elon Musk Fuels Merger Speculation, ‘Hints’ At Action Amid ‘Close Collaboration’ Jefferies sees strategic logic in a deal and estimates Musk could retain 55.3% voting control without a merger premium.",
            "SpaceX owner and Tesla CEO Elon Musk arrives on the red carpet for the Axel Springer Award 2020."
          ],
          "analysisUpdatedAt": 1789479723.9799595
        }
      },
      {
        "headline": "3 AI Robotics Stocks Worth Owning Over Tesla Right Now",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8031a72f1c1a08b7b3acb0772a948c52177fc1524ccdd5ad618f0818aaa6a09b",
        "datetime": 1789446900,
        "headlineKo": "현재 Tesla보다 소유할 가치가 있는 AI 로봇공학 주식 3개",
        "relevance": 0.4,
        "keywordFlag": false
      },
      {
        "headline": "If You'd Invested $1,000 in Tesla Stock 1 Year Ago, Here's How Much You'd Have Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4359748e4127532b19df217ee4ec848843bd603fec7d0efe2152d6306af1476f",
        "datetime": 1789422780,
        "headlineKo": "1년 전에 Tesla 주식에 1,000달러를 투자했다면 현재 얼마를 갖게 될까요?",
        "relevance": 0.4,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:42",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "ORCL": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-12-08",
      "hour": "",
      "epsEstimate": 1.9272,
      "revenueEstimate": 21721285182
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Oracle Stock Sank After Earnings -- Is It a Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6423f4f936d47739d465d8e6e3d356d83d1e9072a8cc4d0038e0f0691a5892e7",
        "datetime": 1789466700,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "오라클 주식은 수익 후 하락했습니다. 매수인가요?",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Oracle( ORCL -3.65% ) 주식은 9월 1일 시장 마감 후 최신 분기별 보고서를 보고했습니다.",
            "10, 거래 다음 날에는 1.7% 하락했습니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 1.7%, 8.5%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ORCL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "ORCL에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "1.7%",
            "8.5%",
            "30%",
            "$19.4 billion",
            "$19.1 billion",
            "$1.92",
            "$1.74.",
            "$90 billion"
          ],
          "sourceExcerpt": [
            "Oracle Stock Sank After Earnings -- Is It a Buy?",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Oracle ( ORCL -3.65% ) stock reported its latest quarterly report after the market closed on Sept.",
            "10, and wound up falling 1.7% in the next day of trading."
          ],
          "analysisUpdatedAt": 1789479732.5590596
        },
        "headlineKo": "오라클 주식은 수익 후 하락했습니다. 매수인가요?"
      },
      {
        "headline": "Why Is ORCL Stock Slipping Premarket?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b1620b1ab41d44b1ab71f2e01995ed08184563b8c062e4fac5c9c667216830b5",
        "datetime": 1789463454,
        "relevance": 0.75,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "ORCL 주식이 시판 전 하락하는 이유는 무엇입니까?",
            "신규 에이전트 연결 트렌드 뉴스 수입 전체 DIA 0.57% SPY 0.16% QQQ 0.06% Trending RDDT 0.78% FPS 7.02% VERA 0.35% PLAY 9.80% LLY 0.93% AXON 4.93% MAAS 3.48% RKLB 3.68% IBIT 3.38% CCXI 0.50% 홈 뉴스 시장 주식 ORCL 주식이 필요한 이유",
            "ORCL 주식이 시판 전 하락하는 이유는 무엇입니까?"
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.57%, 0.16%, 0.06% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ORCL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "ORCL에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.75,
          "quality": "medium",
          "verifiedNumbers": [
            "0.57%",
            "0.16%",
            "0.06%",
            "0.78%",
            "7.02%",
            "0.35%",
            "9.80%",
            "0.93%"
          ],
          "sourceExcerpt": [
            "Why Is ORCL Stock Slipping Premarket?",
            "New Connect your Agent Trending News Earnings All DIA 0.57% SPY 0.16% QQQ 0.06% Trending RDDT 0.78% FPS 7.02% VERA 0.35% PLAY 9.80% LLY 0.93% AXON 4.93% MAAS 3.48% RKLB 3.68% IBIT 3.38% CCXI 0.50% Home News Markets Equity Why Is ORCL Stock ",
            "Why Is ORCL Stock Slipping Premarket?"
          ],
          "analysisUpdatedAt": 1789479736.4512072
        },
        "headlineKo": "ORCL 주식이 시판 전 하락하는 이유는 무엇입니까?"
      },
      {
        "headline": "Oracle: OpenAI Could Walk Away",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d3be6208226f7c3079a7106f92c276dbb67e2b332c1a6b2e32791384b99de423",
        "datetime": 1789459839,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Oracle: OpenAI Could Walk Away",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ORCL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ORCL의 사업과 관련된 'Oracle: OpenAI Could Walk Away' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ORCL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479737.3612738
        },
        "headlineKo": "오라클: OpenAI는 사라질 수도 있다"
      },
      {
        "headline": "Is Oracle’s AI Buildout Strategy Stretching Its Balance Sheet Too Far for (ORCL) Investors?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2b91df2b669181fc3cb8c0d7f789136684c68f6e1de000a39e51156fe66db6e",
        "datetime": 1789424106,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "오라클의 AI 구축 전략이 (ORCL) 투자자에게 대차대조표를 너무 확대하고 있습니까?"
      },
      {
        "headline": "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
        "datetime": 1789422834,
        "relevance": 0.75,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중"
      }
    ],
    "newsHistory": [
      {
        "headline": "Oracle Stock Sank After Earnings -- Is It a Buy?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6423f4f936d47739d465d8e6e3d356d83d1e9072a8cc4d0038e0f0691a5892e7",
        "datetime": 1789466700,
        "headlineKo": "오라클 주식은 수익 후 하락했습니다. 매수인가요?",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "오라클 주식은 수익 후 하락했습니다. 매수인가요?",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 Oracle( ORCL -3.65% ) 주식은 9월 1일 시장 마감 후 최신 분기별 보고서를 보고했습니다.",
            "10, 거래 다음 날에는 1.7% 하락했습니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 1.7%, 8.5%, 30% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ORCL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "ORCL에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "1.7%",
            "8.5%",
            "30%",
            "$19.4 billion",
            "$19.1 billion",
            "$1.92",
            "$1.74.",
            "$90 billion"
          ],
          "sourceExcerpt": [
            "Oracle Stock Sank After Earnings -- Is It a Buy?",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Oracle ( ORCL -3.65% ) stock reported its latest quarterly report after the market closed on Sept.",
            "10, and wound up falling 1.7% in the next day of trading."
          ],
          "analysisUpdatedAt": 1789479732.5590596
        }
      },
      {
        "headline": "Why Is ORCL Stock Slipping Premarket?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b1620b1ab41d44b1ab71f2e01995ed08184563b8c062e4fac5c9c667216830b5",
        "datetime": 1789463454,
        "headlineKo": "ORCL 주식이 시판 전 하락하는 이유는 무엇입니까?",
        "relevance": 0.75,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "ORCL 주식이 시판 전 하락하는 이유는 무엇입니까?",
            "신규 에이전트 연결 트렌드 뉴스 수입 전체 DIA 0.57% SPY 0.16% QQQ 0.06% Trending RDDT 0.78% FPS 7.02% VERA 0.35% PLAY 9.80% LLY 0.93% AXON 4.93% MAAS 3.48% RKLB 3.68% IBIT 3.38% CCXI 0.50% 홈 뉴스 시장 주식 ORCL 주식이 필요한 이유",
            "ORCL 주식이 시판 전 하락하는 이유는 무엇입니까?"
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.57%, 0.16%, 0.06% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ORCL의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ORCL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "ORCL에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.75,
          "quality": "medium",
          "verifiedNumbers": [
            "0.57%",
            "0.16%",
            "0.06%",
            "0.78%",
            "7.02%",
            "0.35%",
            "9.80%",
            "0.93%"
          ],
          "sourceExcerpt": [
            "Why Is ORCL Stock Slipping Premarket?",
            "New Connect your Agent Trending News Earnings All DIA 0.57% SPY 0.16% QQQ 0.06% Trending RDDT 0.78% FPS 7.02% VERA 0.35% PLAY 9.80% LLY 0.93% AXON 4.93% MAAS 3.48% RKLB 3.68% IBIT 3.38% CCXI 0.50% Home News Markets Equity Why Is ORCL Stock ",
            "Why Is ORCL Stock Slipping Premarket?"
          ],
          "analysisUpdatedAt": 1789479736.4512072
        }
      },
      {
        "headline": "Oracle: OpenAI Could Walk Away",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d3be6208226f7c3079a7106f92c276dbb67e2b332c1a6b2e32791384b99de423",
        "datetime": 1789459839,
        "headlineKo": "오라클: OpenAI는 사라질 수도 있다",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Oracle: OpenAI Could Walk Away",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ORCL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ORCL의 사업과 관련된 'Oracle: OpenAI Could Walk Away' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ORCL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479737.3612738
        }
      },
      {
        "headline": "Is Oracle’s AI Buildout Strategy Stretching Its Balance Sheet Too Far for (ORCL) Investors?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2b91df2b669181fc3cb8c0d7f789136684c68f6e1de000a39e51156fe66db6e",
        "datetime": 1789424106,
        "headlineKo": "오라클의 AI 구축 전략이 (ORCL) 투자자에게 대차대조표를 너무 확대하고 있습니까?",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "S&P 500, Nasdaq, Dow Drop On Chipmaker Weakness, Treasury Yield Pressure — MSFT, NFLX, ORCL, CRWD, RBLX In Focus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=db6776d4bff4441c92f392c62a0e505a23b277087447f368a4fc8b71000cc7bd",
        "datetime": 1789422834,
        "headlineKo": "S&P 500, Nasdaq, Dow 하락, 칩 제조업체 약점, 재무부 수익률 압력 — MSFT, NFLX, ORCL, CRWD, RBLX 집중",
        "relevance": 0.75,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:42",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "CRM": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-12-01",
      "hour": "amc",
      "epsEstimate": 3.4643,
      "revenueEstimate": 11573246327
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Salesforce: Its AI Distribution Advantage Could Restart Growth",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2a841361ee09cc9fc17f0c090974f09d84e787c20635dc835abc5bbedd65536d",
        "datetime": 1789463802,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Salesforce: Its AI Distribution Advantage Could Restart Growth",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "CRM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 CRM의 사업과 관련된 'Salesforce: Its AI Distribution Advantage Could Restart Growth' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "CRM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479743.709573
        },
        "headlineKo": "Salesforce: AI 배포 이점으로 성장을 재개할 수 있음"
      },
      {
        "headline": "Europe Green IT Software Forecasts Growth from $6.94B (2026) to $14.45B by 2031, Profiling SAP, IBM, Schneider Electric, Salesforce & 20 Other Key Players",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f71daf138f7fa17529e930a9e6cd074a313cf594ff45cc33f3f310c3b5591a8a",
        "datetime": 1789461180,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Europe Green IT Software Forecasts Growth from $6.94B (2026) to $14.45B by 2031, Profiling SAP, IBM, Schneider Electric, Salesforce & 20 Other Key Players",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "CRM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 CRM의 사업과 관련된 'Europe Green IT Software Forecasts Growth from $6.94B (2026) to $14.45B by 2031, Profiling SAP, IBM, Schneider Electric, Salesforce & 20 Other Key Players' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "CRM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479746.1055295
        },
        "headlineKo": "유럽 ​​그린 IT 소프트웨어는 SAP, IBM, Schneider Electric, Salesforce 및 기타 20개 주요 업체를 프로파일링하여 2026년 69억 4천만 달러에서 2031년 144억 5천만 달러로 성장할 것으로 예측합니다."
      },
      {
        "headline": "Salesforce (CRM) Sees Fresh Partner Tools Push Agentic AI Into Enterprise Workflows",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b46f14427949f2926519624fd7aa7763061c286b40c87ae904ffac3cb899b148",
        "datetime": 1789442521,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Salesforce (CRM) Sees Fresh Partner Tools Push Agentic AI Into Enterprise Workflows",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "CRM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 CRM의 사업과 관련된 'Salesforce (CRM) Sees Fresh Partner Tools Push Agentic AI Into Enterprise Workflows' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "CRM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479747.870074
        },
        "headlineKo": "Salesforce(CRM)는 새로운 파트너 도구가 Agentic AI를 엔터프라이즈 워크플로에 도입하는 것을 확인했습니다."
      },
      {
        "headline": "NOW, INTU, ADBE, CRM Stocks Surge As AI Pacing Debate Hammers Chips: Analyst Says Hardware Vs Software Trade ‘Is Turned On Its Head’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=693b1520223b32e3da5ac6888ac7c153d507d17ca4f6658172244205ed6be59a",
        "datetime": 1789439124,
        "relevance": 0.75,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "AI 속도 논쟁이 칩을 망치면서 NOW, INTU, ADBE, CRM 주식이 급등: 분석가는 하드웨어 대 소프트웨어 거래가 '역전됐다'고 말합니다."
      },
      {
        "headline": "SilverRide appoints Salesforce Cofounder Dave Moellenhoff to its Board of Directors as Company Scales Its Technology Platform",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=41e69f3442634c9cf89cf24c51a729c9a02a56d1bcc0e0dc0b61479406544599",
        "datetime": 1789429440,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "SilverRide는 회사가 기술 플랫폼을 확장함에 따라 Salesforce 공동 창립자 Dave Moellenhoff를 이사회에 임명했습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Salesforce: Its AI Distribution Advantage Could Restart Growth",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2a841361ee09cc9fc17f0c090974f09d84e787c20635dc835abc5bbedd65536d",
        "datetime": 1789463802,
        "headlineKo": "Salesforce: AI 배포 이점으로 성장을 재개할 수 있음",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Salesforce: Its AI Distribution Advantage Could Restart Growth",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "CRM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 CRM의 사업과 관련된 'Salesforce: Its AI Distribution Advantage Could Restart Growth' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "CRM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479743.709573
        }
      },
      {
        "headline": "Europe Green IT Software Forecasts Growth from $6.94B (2026) to $14.45B by 2031, Profiling SAP, IBM, Schneider Electric, Salesforce & 20 Other Key Players",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f71daf138f7fa17529e930a9e6cd074a313cf594ff45cc33f3f310c3b5591a8a",
        "datetime": 1789461180,
        "headlineKo": "유럽 ​​그린 IT 소프트웨어는 SAP, IBM, Schneider Electric, Salesforce 및 기타 20개 주요 업체를 프로파일링하여 2026년 69억 4천만 달러에서 2031년 144억 5천만 달러로 성장할 것으로 예측합니다.",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Europe Green IT Software Forecasts Growth from $6.94B (2026) to $14.45B by 2031, Profiling SAP, IBM, Schneider Electric, Salesforce & 20 Other Key Players",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "CRM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 CRM의 사업과 관련된 'Europe Green IT Software Forecasts Growth from $6.94B (2026) to $14.45B by 2031, Profiling SAP, IBM, Schneider Electric, Salesforce & 20 Other Key Players' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "CRM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479746.1055295
        }
      },
      {
        "headline": "Salesforce (CRM) Sees Fresh Partner Tools Push Agentic AI Into Enterprise Workflows",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b46f14427949f2926519624fd7aa7763061c286b40c87ae904ffac3cb899b148",
        "datetime": 1789442521,
        "headlineKo": "Salesforce(CRM)는 새로운 파트너 도구가 Agentic AI를 엔터프라이즈 워크플로에 도입하는 것을 확인했습니다.",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Salesforce (CRM) Sees Fresh Partner Tools Push Agentic AI Into Enterprise Workflows",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "CRM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 CRM의 사업과 관련된 'Salesforce (CRM) Sees Fresh Partner Tools Push Agentic AI Into Enterprise Workflows' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "CRM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479747.870074
        }
      },
      {
        "headline": "NOW, INTU, ADBE, CRM Stocks Surge As AI Pacing Debate Hammers Chips: Analyst Says Hardware Vs Software Trade ‘Is Turned On Its Head’",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=693b1520223b32e3da5ac6888ac7c153d507d17ca4f6658172244205ed6be59a",
        "datetime": 1789439124,
        "headlineKo": "AI 속도 논쟁이 칩을 망치면서 NOW, INTU, ADBE, CRM 주식이 급등: 분석가는 하드웨어 대 소프트웨어 거래가 '역전됐다'고 말합니다.",
        "relevance": 0.75,
        "keywordFlag": false
      },
      {
        "headline": "SilverRide appoints Salesforce Cofounder Dave Moellenhoff to its Board of Directors as Company Scales Its Technology Platform",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=41e69f3442634c9cf89cf24c51a729c9a02a56d1bcc0e0dc0b61479406544599",
        "datetime": 1789429440,
        "headlineKo": "SilverRide는 회사가 기술 플랫폼을 확장함에 따라 Salesforce 공동 창립자 Dave Moellenhoff를 이사회에 임명했습니다.",
        "relevance": 0.5,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:42",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "PLTR": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "",
      "epsEstimate": 0.425,
      "revenueEstimate": 2220416029
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Palantir's CEO Revealed the Biggest Opportunity in Its Future. And It Has Little to Do with AI Models",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28259ee6f958c93947dd89312674e1ed7c4a65baf608c23e056c0c8b4d38bd61",
        "datetime": 1789473900,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "공급망 · 생산 차질 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Palantir의 CEO는 미래의 가장 큰 기회를 밝혔습니다.",
            "그리고 AI 모델과는 거의 관련이 없습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool \"글로벌 움직임이 나타나고 있습니다.",
            "독립과 AI 주권을 위한 혁명은 이제 잘 진행되고 있습니다.\" 이는 Palantir Technologies의 CEO인 Alex Karp가 회사의 최신 주주 서한에서 처음으로 한 말입니다."
          ],
          "why": [
            "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 3.64%, 3.64 %, $ 6.08 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "PLTR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "출하 지연 기간",
            "재고와 리드타임",
            "매출총이익률·대체 공급처"
          ],
          "interpretation": "PLTR에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "3.64%",
            "3.64 %",
            "$ 6.08",
            "$ 173.31",
            "$416",
            "$ 166.42",
            "$ 174.36",
            "$ 106.37"
          ],
          "sourceExcerpt": [
            "Palantir's CEO Revealed the Biggest Opportunity in Its Future.",
            "And It Has Little to Do with AI Models | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool \"A global movement is emerging.",
            "The revolution for independence and AI sovereignty is now well underway.\" That was the opening line from Palantir Technologies CEO Alex Karp in the company's latest shareholder letter."
          ],
          "analysisUpdatedAt": 1789479760.802245
        },
        "headlineKo": "Palantir의 CEO는 미래의 가장 큰 기회를 밝혔습니다. 그리고 AI 모델과는 거의 관련이 없습니다"
      },
      {
        "headline": "Intel, Sandisk, Palantir, Coinbase, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=034f1d50cbfef79771d6ee9a5bab700c07ef421a9274d442addadc35258cedb2",
        "datetime": 1789471800,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Intel, Sandisk, Palantir, Coinbase, and More Stocks That Explain Today’s Market",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "PLTR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 PLTR의 사업과 관련된 'Intel, Sandisk, Palantir, Coinbase, and More Stocks That Explain Today’s Market' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "PLTR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479762.976278
        },
        "headlineKo": "Intel, Sandisk, Palantir, Coinbase 및 오늘날 시장을 설명하는 기타 주식"
      },
      {
        "headline": "Palantir and Nvidia rethink AI use over a growing data risk",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9e352c764d6430688b49bda6d055cc16caae9229abb11e3230e1b88e0552947d",
        "datetime": 1789412443,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "risk",
          "certainty": "본문 확인 필요",
          "label": "실적·재무 부담 확인 필요",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Palantir and Nvidia rethink AI use over a growing data risk",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "PLTR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 PLTR의 사업과 관련된 'Palantir and Nvidia rethink AI use over a growing data risk' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "PLTR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479764.6275826
        },
        "headlineKo": "Palantir와 Nvidia는 증가하는 데이터 위험에 대해 AI 사용을 재고합니다."
      },
      {
        "headline": "Did You Pay For Palantir's Guidance Or For Something Else?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3974509279070742f85a17dc52cf35f3ccacec4f79c8067045cb4f8fe25d44d",
        "datetime": 1789408836,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Palantir의 지도 비용을 지불하셨나요, 아니면 다른 비용을 지불하셨나요?"
      },
      {
        "headline": "Does PLTR's One-Year Consolidation Offer a Buying Opportunity?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=611bc3b3cdc4790c70fed23152f63c1308aa787cc116ce90f9a62d3c44e844ce",
        "datetime": 1789407600,
        "relevance": 1.0,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "PLTR의 1년 통합이 구매 기회를 제공합니까?"
      }
    ],
    "newsHistory": [
      {
        "headline": "Palantir's CEO Revealed the Biggest Opportunity in Its Future. And It Has Little to Do with AI Models",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28259ee6f958c93947dd89312674e1ed7c4a65baf608c23e056c0c8b4d38bd61",
        "datetime": 1789473900,
        "headlineKo": "Palantir의 CEO는 미래의 가장 큰 기회를 밝혔습니다. 그리고 AI 모델과는 거의 관련이 없습니다",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "공급망 · 생산 차질 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Palantir의 CEO는 미래의 가장 큰 기회를 밝혔습니다.",
            "그리고 AI 모델과는 거의 관련이 없습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool \"글로벌 움직임이 나타나고 있습니다.",
            "독립과 AI 주권을 위한 혁명은 이제 잘 진행되고 있습니다.\" 이는 Palantir Technologies의 CEO인 Alex Karp가 회사의 최신 주주 서한에서 처음으로 한 말입니다."
          ],
          "why": [
            "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 3.64%, 3.64 %, $ 6.08 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "PLTR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "PLTR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "출하 지연 기간",
            "재고와 리드타임",
            "매출총이익률·대체 공급처"
          ],
          "interpretation": "PLTR에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "3.64%",
            "3.64 %",
            "$ 6.08",
            "$ 173.31",
            "$416",
            "$ 166.42",
            "$ 174.36",
            "$ 106.37"
          ],
          "sourceExcerpt": [
            "Palantir's CEO Revealed the Biggest Opportunity in Its Future.",
            "And It Has Little to Do with AI Models | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool \"A global movement is emerging.",
            "The revolution for independence and AI sovereignty is now well underway.\" That was the opening line from Palantir Technologies CEO Alex Karp in the company's latest shareholder letter."
          ],
          "analysisUpdatedAt": 1789479760.802245
        }
      },
      {
        "headline": "Intel, Sandisk, Palantir, Coinbase, and More Stocks That Explain Today’s Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=034f1d50cbfef79771d6ee9a5bab700c07ef421a9274d442addadc35258cedb2",
        "datetime": 1789471800,
        "headlineKo": "Intel, Sandisk, Palantir, Coinbase 및 오늘날 시장을 설명하는 기타 주식",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Intel, Sandisk, Palantir, Coinbase, and More Stocks That Explain Today’s Market",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "PLTR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 PLTR의 사업과 관련된 'Intel, Sandisk, Palantir, Coinbase, and More Stocks That Explain Today’s Market' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "PLTR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479762.976278
        }
      },
      {
        "headline": "Palantir and Nvidia rethink AI use over a growing data risk",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9e352c764d6430688b49bda6d055cc16caae9229abb11e3230e1b88e0552947d",
        "datetime": 1789412443,
        "headlineKo": "Palantir와 Nvidia는 증가하는 데이터 위험에 대해 AI 사용을 재고합니다.",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "risk",
          "certainty": "본문 확인 필요",
          "label": "실적·재무 부담 확인 필요",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Palantir and Nvidia rethink AI use over a growing data risk",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "PLTR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 PLTR의 사업과 관련된 'Palantir and Nvidia rethink AI use over a growing data risk' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "PLTR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479764.6275826
        }
      },
      {
        "headline": "Did You Pay For Palantir's Guidance Or For Something Else?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c3974509279070742f85a17dc52cf35f3ccacec4f79c8067045cb4f8fe25d44d",
        "datetime": 1789408836,
        "headlineKo": "Palantir의 지도 비용을 지불하셨나요, 아니면 다른 비용을 지불하셨나요?",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Does PLTR's One-Year Consolidation Offer a Buying Opportunity?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=611bc3b3cdc4790c70fed23152f63c1308aa787cc116ce90f9a62d3c44e844ce",
        "datetime": 1789407600,
        "headlineKo": "PLTR의 1년 통합이 구매 기회를 제공합니까?",
        "relevance": 1.0,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:42",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "NVDA": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-17",
      "hour": "amc",
      "epsEstimate": 2.5231,
      "revenueEstimate": 111273704778
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Announcing Koa: Salesforce’s First CRM Reasoning Model, Built on NVIDIA Nemotron",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a7f14d2c95b607fa90540651fa71b562dec0a5463e35f387b5fcd9f5fdfbca52",
        "datetime": 1789477560,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Announcing Koa: Salesforce’s First CRM Reasoning Model, Built on NVIDIA Nemotron",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 NVDA의 사업과 관련된 'Announcing Koa: Salesforce’s First CRM Reasoning Model, Built on NVIDIA Nemotron' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "NVDA 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479771.8369634
        },
        "headlineKo": "Koa 발표: NVIDIA Nemotron을 기반으로 구축된 Salesforce의 첫 번째 CRM 추론 모델"
      },
      {
        "headline": "Stock Market Today: Dow Falls As Yields, Oil Prices Rise Ahead Of Fed Meeting; Nvidia Set To Rebound (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a759b36acdc088d789e0bb7d0d9fef082b5e693bf696fea6a6e2053615ebeb1d",
        "datetime": 1789476738,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Stock Market Today: Dow Falls As Yields, Oil Prices Rise Ahead Of Fed Meeting; Nvidia Set To Rebound (Live Coverage)",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 NVDA의 사업과 관련된 'Stock Market Today: Dow Falls As Yields, Oil Prices Rise Ahead Of Fed Meeting; Nvidia Set To Rebound (Live Coverage)' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "NVDA 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479773.2963085
        },
        "headlineKo": "오늘의 주식 시장: 수익률이 떨어지면서 다우지수는 하락하고 연준 회의를 앞두고 유가는 상승합니다. 반등할 엔비디아(실시간 보도)"
      },
      {
        "headline": "What Will $5,000 Invested in Nvidia Stock Be Worth in 5 Years?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17787ae882f648f5aa81c39dcbdec6178c4020fdf1f55dcf44526dede5e48261",
        "datetime": 1789475405,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Nvidia 주식에 투자한 5,000달러의 가치는 5년 후에 얼마가 될까요?",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Nvidia는 AI 인프라 붐의 중심에 있지만 어느 세력이 승리하느냐에 따라 5년 동안 적당한 지분을 보유하면 약간의 이익에서 인생을 바꾸는 수익까지 끝날 수 있습니다."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $5,000, $218.29, $532.58, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "NVDA에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.4,
          "quality": "medium",
          "verifiedNumbers": [
            "$5,000",
            "$218.29",
            "$532.58,",
            "$12,199",
            "143.98%",
            "19.53%",
            "37.4%",
            "$616.10"
          ],
          "sourceExcerpt": [
            "What Will $5,000 Invested in Nvidia Stock Be Worth in 5 Years?",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Nvidia sits at the center of the AI infrastructure boom, but a five-year hold on a modest stake could end up anywhere from a modest gain to a life-changing return depending on which forces win out."
          ],
          "analysisUpdatedAt": 1789479775.8826375
        },
        "headlineKo": "Nvidia 주식에 투자한 5,000달러의 가치는 5년 후에 얼마가 될까요?"
      },
      {
        "headline": "Synaptics Brings Tactile Sensing and Edge AI to NVIDIA Isaac Sim and Holoscan",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9fceb411a4c7a9bb6b4f168fe3c3f6c99428f5cb0dc64a85433b2f9673eefc98",
        "datetime": 1789475400,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Synaptics, NVIDIA Isaac Sim 및 Holoscan에 촉각 감지 및 엣지 AI 제공"
      },
      {
        "headline": "Nvidia eyes a $10 billion Anthropic bet at an awkward moment",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73456aacf14a9fab999dc8b2aae30e9c855c7a0cb47e7008298b506f963f0b17",
        "datetime": 1789474629,
        "relevance": 0.4,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Nvidia는 어색한 순간에 100억 달러 규모의 Anthropic 베팅을 주목하고 있습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Announcing Koa: Salesforce’s First CRM Reasoning Model, Built on NVIDIA Nemotron",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a7f14d2c95b607fa90540651fa71b562dec0a5463e35f387b5fcd9f5fdfbca52",
        "datetime": 1789477560,
        "headlineKo": "Koa 발표: NVIDIA Nemotron을 기반으로 구축된 Salesforce의 첫 번째 CRM 추론 모델",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Announcing Koa: Salesforce’s First CRM Reasoning Model, Built on NVIDIA Nemotron",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 NVDA의 사업과 관련된 'Announcing Koa: Salesforce’s First CRM Reasoning Model, Built on NVIDIA Nemotron' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "NVDA 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479771.8369634
        }
      },
      {
        "headline": "Stock Market Today: Dow Falls As Yields, Oil Prices Rise Ahead Of Fed Meeting; Nvidia Set To Rebound (Live Coverage)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a759b36acdc088d789e0bb7d0d9fef082b5e693bf696fea6a6e2053615ebeb1d",
        "datetime": 1789476738,
        "headlineKo": "오늘의 주식 시장: 수익률이 떨어지면서 다우지수는 하락하고 연준 회의를 앞두고 유가는 상승합니다. 반등할 엔비디아(실시간 보도)",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Stock Market Today: Dow Falls As Yields, Oil Prices Rise Ahead Of Fed Meeting; Nvidia Set To Rebound (Live Coverage)",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 NVDA의 사업과 관련된 'Stock Market Today: Dow Falls As Yields, Oil Prices Rise Ahead Of Fed Meeting; Nvidia Set To Rebound (Live Coverage)' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "NVDA 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.4,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479773.2963085
        }
      },
      {
        "headline": "What Will $5,000 Invested in Nvidia Stock Be Worth in 5 Years?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17787ae882f648f5aa81c39dcbdec6178c4020fdf1f55dcf44526dede5e48261",
        "datetime": 1789475405,
        "headlineKo": "Nvidia 주식에 투자한 5,000달러의 가치는 5년 후에 얼마가 될까요?",
        "relevance": 0.4,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Nvidia 주식에 투자한 5,000달러의 가치는 5년 후에 얼마가 될까요?",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Nvidia는 AI 인프라 붐의 중심에 있지만 어느 세력이 승리하느냐에 따라 5년 동안 적당한 지분을 보유하면 약간의 이익에서 인생을 바꾸는 수익까지 끝날 수 있습니다."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $5,000, $218.29, $532.58, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "NVDA의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "NVDA에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.4,
          "quality": "medium",
          "verifiedNumbers": [
            "$5,000",
            "$218.29",
            "$532.58,",
            "$12,199",
            "143.98%",
            "19.53%",
            "37.4%",
            "$616.10"
          ],
          "sourceExcerpt": [
            "What Will $5,000 Invested in Nvidia Stock Be Worth in 5 Years?",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Nvidia sits at the center of the AI infrastructure boom, but a five-year hold on a modest stake could end up anywhere from a modest gain to a life-changing return depending on which forces win out."
          ],
          "analysisUpdatedAt": 1789479775.8826375
        }
      },
      {
        "headline": "Synaptics Brings Tactile Sensing and Edge AI to NVIDIA Isaac Sim and Holoscan",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9fceb411a4c7a9bb6b4f168fe3c3f6c99428f5cb0dc64a85433b2f9673eefc98",
        "datetime": 1789475400,
        "headlineKo": "Synaptics, NVIDIA Isaac Sim 및 Holoscan에 촉각 감지 및 엣지 AI 제공",
        "relevance": 0.4,
        "keywordFlag": false
      },
      {
        "headline": "Nvidia eyes a $10 billion Anthropic bet at an awkward moment",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73456aacf14a9fab999dc8b2aae30e9c855c7a0cb47e7008298b506f963f0b17",
        "datetime": 1789474629,
        "headlineKo": "Nvidia는 어색한 순간에 100억 달러 규모의 Anthropic 베팅을 주목하고 있습니다.",
        "relevance": 0.4,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:42",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "AMD": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.9539,
      "revenueEstimate": 13194354452
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "AMD Is Eating Intel’s Lunch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=949e3443f330ecc33392d77b0b35a5a42fba5647548d2656aaa1a6166d077ce8",
        "datetime": 1789470959,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "장기 공급계약 · 매출 가시성 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "AMD는 Intel의 점심을 먹고 있습니다 - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "작성자: Alex Sirois 2026년 9월 15일 오전 7시 15분(ET) 게시 · 3분 읽기 𝕏 f ⧉ AMD EPYC 프로세서는 데이터 센터 부문에서 회사의 강력한 성과와 증가하는 시장 점유율을 상징합니다."
          ],
          "why": [
            "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $2.1 billion, $6.72 billion, 107% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "계약 기간·최소구매 조건",
            "연도별 매출 인식",
            "수주잔고·취소 조건"
          ],
          "interpretation": "AMD에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "$2.1 billion",
            "$6.72 billion",
            "107%",
            "70%",
            "$6.26 billion",
            "59%",
            "$6.72",
            "$6.26"
          ],
          "sourceExcerpt": [
            "AMD Is Eating Intel's Lunch - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By Alex Sirois Published September 15, 2026, 7:15am ET · 3 min read 𝕏 f ⧉ An AMD EPYC processor, symbolizing the company's strong performance and increasing market share in the data center segment."
          ],
          "analysisUpdatedAt": 1789479785.9324234
        },
        "headlineKo": "AMD는 인텔의 점심을 먹고 있다"
      },
      {
        "headline": "Nvidia's Latest Move Spells Trouble for AMD and Intel Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dadd884607cb04d8639fd58d2e8c6c540bba449b4232c96827aad817e6d127c3",
        "datetime": 1789466100,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Nvidia의 최근 움직임으로 AMD와 Intel 투자자들에게 문제 발생 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia( NVDA -3.36% )는 고급 시장을 절대적으로 장악하고 있습니다.",
            "AI 모델 훈련에 필요한 초컴퓨팅 집약적 처리 분야에서 이 회사는 시장의 90% 이상을 점유할 것으로 예상되는 경우가 많습니다.",
            "AI 소프트웨어를 실행하는 데 사용되는 계산 집약도가 낮은 추론 애플리케이션의 경우에도 해당 카테고리에서 회사의 시장 점유율 추정치는 60%에서 75% 사이인 경우가 많습니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 90%, 60%, 75% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "AMD에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "90%",
            "60%",
            "75%",
            "5.59%",
            "4.40%",
            "$5 billion",
            "3.36 %",
            "$ 210.96"
          ],
          "sourceExcerpt": [
            "Nvidia's Latest Move Spells Trouble for AMD and Intel Investors | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia ( NVDA -3.36% ) absolutely dominates the market for advanced",
            "When it comes to the ultra-computationally intensive processing required to train AI models, the company is often projected to command more than 90% of the market.",
            "Even for less computationally intensive inference applications used to run AI software, estimates of the company's market share in the category often range between 60% and 75%."
          ],
          "analysisUpdatedAt": 1789479789.7068334
        },
        "headlineKo": "Nvidia의 최신 움직임은 AMD와 Intel 투자자들에게 문제를 야기합니다"
      },
      {
        "headline": "AMD's Case For The Underdog",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e55cfa71d1fcb82b1c8692ffbb39f4f9a6dc4c22f5ce69c815bba6849888a534",
        "datetime": 1789460717,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "약자를 위한 AMD의 사례(NASDAQ:AMD) | 알파 Bill Gunderson 투자 그룹 리더 찾기 요약 팔로우 Advanced Micro Devices, Inc.",
            "Nvidia에 뒤지지 않는 신뢰할 수 있는 AI 칩 대안이며 Best Stocks Now 데이터베이스에서 5,234개 중 74위를 차지했습니다.",
            "AMD의 역사적 수익률은 YTD 141% 증가와 A+ 성능 등급으로 예외적이지만 변동성은 여전히 ​​주목할만한 위험으로 남아 있습니다."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 141%, 84%, $947.76 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "AMD에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "141%",
            "84%",
            "$947.76",
            "$516.13,"
          ],
          "sourceExcerpt": [
            "AMD's Case For The Underdog (NASDAQ:AMD) | Seeking Alpha Bill Gunderson Investing Group Leader Follow Summary Advanced Micro Devices, Inc.",
            "is a credible AI chip alternative, not just a distant second to Nvidia, and ranks #74 out of 5,234 in my Best Stocks Now database.",
            "AMD’s historical returns are exceptional, with a 141% YTD gain and an A+ performance grade, but volatility remains a notable risk."
          ],
          "analysisUpdatedAt": 1789479794.3149767
        },
        "headlineKo": "약자를 위한 AMD의 사례"
      },
      {
        "headline": "Donald Trump Rejects Calls For AI Slowdown. That Changes the Game for Nvidia and AMD",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=158e4f44ef405438edeb331d1302f389a15ff4d661cbc74e13e81705de2d9553",
        "datetime": 1789445349,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "도널드 트럼프, AI 속도 저하 요구 거부. 이는 Nvidia와 AMD의 판도를 변화시킵니다."
      },
      {
        "headline": "Why Micron, Intel, AMD, and Other Chip Stocks Fell Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1da4f2030c1574b519935f2a479a9b0993c010764c860f8888851706662c4d84",
        "datetime": 1789442902,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "오늘 Micron, Intel, AMD 및 기타 칩 주식이 하락한 이유"
      }
    ],
    "newsHistory": [
      {
        "headline": "AMD Is Eating Intel’s Lunch",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=949e3443f330ecc33392d77b0b35a5a42fba5647548d2656aaa1a6166d077ce8",
        "datetime": 1789470959,
        "headlineKo": "AMD는 인텔의 점심을 먹고 있다",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "장기 공급계약 · 매출 가시성 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "AMD는 Intel의 점심을 먹고 있습니다 - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "작성자: Alex Sirois 2026년 9월 15일 오전 7시 15분(ET) 게시 · 3분 읽기 𝕏 f ⧉ AMD EPYC 프로세서는 데이터 센터 부문에서 회사의 강력한 성과와 증가하는 시장 점유율을 상징합니다."
          ],
          "why": [
            "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $2.1 billion, $6.72 billion, 107% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "계약 기간·최소구매 조건",
            "연도별 매출 인식",
            "수주잔고·취소 조건"
          ],
          "interpretation": "AMD에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "$2.1 billion",
            "$6.72 billion",
            "107%",
            "70%",
            "$6.26 billion",
            "59%",
            "$6.72",
            "$6.26"
          ],
          "sourceExcerpt": [
            "AMD Is Eating Intel's Lunch - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By Alex Sirois Published September 15, 2026, 7:15am ET · 3 min read 𝕏 f ⧉ An AMD EPYC processor, symbolizing the company's strong performance and increasing market share in the data center segment."
          ],
          "analysisUpdatedAt": 1789479785.9324234
        }
      },
      {
        "headline": "Nvidia's Latest Move Spells Trouble for AMD and Intel Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dadd884607cb04d8639fd58d2e8c6c540bba449b4232c96827aad817e6d127c3",
        "datetime": 1789466100,
        "headlineKo": "Nvidia의 최신 움직임은 AMD와 Intel 투자자들에게 문제를 야기합니다",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Nvidia의 최근 움직임으로 AMD와 Intel 투자자들에게 문제 발생 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia( NVDA -3.36% )는 고급 시장을 절대적으로 장악하고 있습니다.",
            "AI 모델 훈련에 필요한 초컴퓨팅 집약적 처리 분야에서 이 회사는 시장의 90% 이상을 점유할 것으로 예상되는 경우가 많습니다.",
            "AI 소프트웨어를 실행하는 데 사용되는 계산 집약도가 낮은 추론 애플리케이션의 경우에도 해당 카테고리에서 회사의 시장 점유율 추정치는 60%에서 75% 사이인 경우가 많습니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 90%, 60%, 75% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "AMD에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "90%",
            "60%",
            "75%",
            "5.59%",
            "4.40%",
            "$5 billion",
            "3.36 %",
            "$ 210.96"
          ],
          "sourceExcerpt": [
            "Nvidia's Latest Move Spells Trouble for AMD and Intel Investors | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Nvidia ( NVDA -3.36% ) absolutely dominates the market for advanced",
            "When it comes to the ultra-computationally intensive processing required to train AI models, the company is often projected to command more than 90% of the market.",
            "Even for less computationally intensive inference applications used to run AI software, estimates of the company's market share in the category often range between 60% and 75%."
          ],
          "analysisUpdatedAt": 1789479789.7068334
        }
      },
      {
        "headline": "AMD's Case For The Underdog",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=e55cfa71d1fcb82b1c8692ffbb39f4f9a6dc4c22f5ce69c815bba6849888a534",
        "datetime": 1789460717,
        "headlineKo": "약자를 위한 AMD의 사례",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "약자를 위한 AMD의 사례(NASDAQ:AMD) | 알파 Bill Gunderson 투자 그룹 리더 찾기 요약 팔로우 Advanced Micro Devices, Inc.",
            "Nvidia에 뒤지지 않는 신뢰할 수 있는 AI 칩 대안이며 Best Stocks Now 데이터베이스에서 5,234개 중 74위를 차지했습니다.",
            "AMD의 역사적 수익률은 YTD 141% 증가와 A+ 성능 등급으로 예외적이지만 변동성은 여전히 ​​주목할만한 위험으로 남아 있습니다."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 141%, 84%, $947.76 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMD의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "AMD에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "141%",
            "84%",
            "$947.76",
            "$516.13,"
          ],
          "sourceExcerpt": [
            "AMD's Case For The Underdog (NASDAQ:AMD) | Seeking Alpha Bill Gunderson Investing Group Leader Follow Summary Advanced Micro Devices, Inc.",
            "is a credible AI chip alternative, not just a distant second to Nvidia, and ranks #74 out of 5,234 in my Best Stocks Now database.",
            "AMD’s historical returns are exceptional, with a 141% YTD gain and an A+ performance grade, but volatility remains a notable risk."
          ],
          "analysisUpdatedAt": 1789479794.3149767
        }
      },
      {
        "headline": "Donald Trump Rejects Calls For AI Slowdown. That Changes the Game for Nvidia and AMD",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=158e4f44ef405438edeb331d1302f389a15ff4d661cbc74e13e81705de2d9553",
        "datetime": 1789445349,
        "headlineKo": "도널드 트럼프, AI 속도 저하 요구 거부. 이는 Nvidia와 AMD의 판도를 변화시킵니다.",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "Why Micron, Intel, AMD, and Other Chip Stocks Fell Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1da4f2030c1574b519935f2a479a9b0993c010764c860f8888851706662c4d84",
        "datetime": 1789442902,
        "headlineKo": "오늘 Micron, Intel, AMD 및 기타 칩 주식이 하락한 이유",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:43",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "AVGO": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-12-09",
      "hour": "amc",
      "epsEstimate": 3.9012,
      "revenueEstimate": 35571998251
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Broadcom CEO Sends Urgent Message on AI Slowdown Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c75937cb9e2a9ecc7adf43c8b98c485d4e00fdf23a6a374bf8b589758de0a605",
        "datetime": 1789475942,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Broadcom CEO Sends Urgent Message on AI Slowdown Fears",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "AVGO",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 AVGO의 사업과 관련된 'Broadcom CEO Sends Urgent Message on AI Slowdown Fears' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "AVGO 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479802.3046174
        },
        "headlineKo": "Broadcom CEO, AI 둔화 우려에 대한 긴급 메시지 보내기"
      },
      {
        "headline": "Broadcom’s Real Constraint Isn’t Demand. It’s Supply.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e96996b1a5bd3ab418e03e965cde68da13a9d89d81f37c97a72eed40e089a30",
        "datetime": 1789475218,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 확인 필요",
          "label": "고객 계약 · 매출 연결 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Broadcom’s Real Constraint Isn’t Demand. It’s Supply.",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
            "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AVGO",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "계약 금액·기간·취소 조건",
            "수주잔고와 매출 인식 시점",
            "관련 사업부 매출총이익률"
          ],
          "interpretation": "AVGO에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479804.0494506
        },
        "headlineKo": "Broadcom의 실제 제약은 수요가 아닙니다. 공급입니다."
      },
      {
        "headline": "Broadcom CEO Hock Tan defends $230B AI chip revenue target",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3ebebd478c4862b49060cd207358ab883dbf83476d3c20bde53335d1766c2b4",
        "datetime": 1789470673,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Broadcom CEO Hock Tan은 2,300억 달러 규모의 AI 칩 수익 목표인 A.I.를 옹호합니다.",
            "Broadcom의 CEO는 2,300억 달러 규모의 칩 목표를 달성하며 AI 둔화 우려를 일축하고 있습니다. Hock Tan은 CNBC와의 인터뷰에서 Broadcom 주가가 월요일 4.8% 하락했음에도 불구하고 AI 컴퓨팅 인프라에 대한 수요는 여전히 강하고 내구성이 있다고 말했습니다. By Cris Tolomia · 2분",
            "Tan은 CNBC의 'Mad Money'에 출연하여 \"컴퓨팅 인프라, AI 개발 또는 AI 프론티어 모델에 대한 수요와 이들이 세계에 제공하는 제품에 대한 추론이 계속해서 매우 강력하고 내구성이 뛰어나다고 생각합니다.\"라고 말했습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $230, $230 billion, 4.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AVGO",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "AVGO에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "$230",
            "$230 billion",
            "4.8%",
            "5.6%",
            "$115 billion",
            "$29.6 billion",
            "86%",
            "$34.8 billion"
          ],
          "sourceExcerpt": [
            "Broadcom CEO Hock Tan defends $230B AI chip revenue target A.I.",
            "Broadcom's CEO is brushing off AI slowdown fears, standing by $230 billion chip target Hock Tan told CNBC that demand for AI compute infrastructure remains strong and durable, even as Broadcom stock fell 4.8% Monday By Cris Tolomia · 2 min ",
            "\"We see the demand for compute infrastructure, for AI development or AI frontier models, and inference for the products that they feed to the world, as continuing to be very strong and, I believe, very durable,\" Tan told CNBC's \"Mad Money.\""
          ],
          "analysisUpdatedAt": 1789479809.6111026
        },
        "headlineKo": "Broadcom CEO Hock Tan, 2,300억 달러 규모의 AI 칩 매출 목표 방어"
      },
      {
        "headline": "Broadcom (NASDAQ:AVGO): Dividend Quality and Growth for Income Investors",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d487ed937ef59eabf8f7d0e9e5ad514a71c1dfe15276c43d7b7fc4f5fcbffd4e",
        "datetime": 1789470047,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Broadcom(NASDAQ:AVGO): 소득 투자자를 위한 배당금 품질 및 성장"
      },
      {
        "headline": "AI Slowdown Debate Splits Tech CEOs: Nvidia, Broadcom Dismiss Any Threat While Elon Musk Calls For Peer Review System",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5dc798dae84bbd2108d61a5dfd47e5f1a36f4a00d6c30ff78882f0c74976b86e",
        "datetime": 1789442191,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "AI 둔화 논쟁으로 기술 CEO 분열: Nvidia, Broadcom은 Elon Musk가 동료 검토 시스템을 요구하는 동안 모든 위협을 무시"
      }
    ],
    "newsHistory": [
      {
        "headline": "Broadcom CEO Sends Urgent Message on AI Slowdown Fears",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c75937cb9e2a9ecc7adf43c8b98c485d4e00fdf23a6a374bf8b589758de0a605",
        "datetime": 1789475942,
        "headlineKo": "Broadcom CEO, AI 둔화 우려에 대한 긴급 메시지 보내기",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Broadcom CEO Sends Urgent Message on AI Slowdown Fears",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "AVGO",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 AVGO의 사업과 관련된 'Broadcom CEO Sends Urgent Message on AI Slowdown Fears' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "AVGO 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479802.3046174
        }
      },
      {
        "headline": "Broadcom’s Real Constraint Isn’t Demand. It’s Supply.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0e96996b1a5bd3ab418e03e965cde68da13a9d89d81f37c97a72eed40e089a30",
        "datetime": 1789475218,
        "headlineKo": "Broadcom의 실제 제약은 수요가 아닙니다. 공급입니다.",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 확인 필요",
          "label": "고객 계약 · 매출 연결 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Broadcom’s Real Constraint Isn’t Demand. It’s Supply.",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
            "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AVGO",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "계약 금액·기간·취소 조건",
            "수주잔고와 매출 인식 시점",
            "관련 사업부 매출총이익률"
          ],
          "interpretation": "AVGO에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479804.0494506
        }
      },
      {
        "headline": "Broadcom CEO Hock Tan defends $230B AI chip revenue target",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f3ebebd478c4862b49060cd207358ab883dbf83476d3c20bde53335d1766c2b4",
        "datetime": 1789470673,
        "headlineKo": "Broadcom CEO Hock Tan, 2,300억 달러 규모의 AI 칩 매출 목표 방어",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Broadcom CEO Hock Tan은 2,300억 달러 규모의 AI 칩 수익 목표인 A.I.를 옹호합니다.",
            "Broadcom의 CEO는 2,300억 달러 규모의 칩 목표를 달성하며 AI 둔화 우려를 일축하고 있습니다. Hock Tan은 CNBC와의 인터뷰에서 Broadcom 주가가 월요일 4.8% 하락했음에도 불구하고 AI 컴퓨팅 인프라에 대한 수요는 여전히 강하고 내구성이 있다고 말했습니다. By Cris Tolomia · 2분",
            "Tan은 CNBC의 'Mad Money'에 출연하여 \"컴퓨팅 인프라, AI 개발 또는 AI 프론티어 모델에 대한 수요와 이들이 세계에 제공하는 제품에 대한 추론이 계속해서 매우 강력하고 내구성이 뛰어나다고 생각합니다.\"라고 말했습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $230, $230 billion, 4.8% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AVGO의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AVGO",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "AVGO에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "$230",
            "$230 billion",
            "4.8%",
            "5.6%",
            "$115 billion",
            "$29.6 billion",
            "86%",
            "$34.8 billion"
          ],
          "sourceExcerpt": [
            "Broadcom CEO Hock Tan defends $230B AI chip revenue target A.I.",
            "Broadcom's CEO is brushing off AI slowdown fears, standing by $230 billion chip target Hock Tan told CNBC that demand for AI compute infrastructure remains strong and durable, even as Broadcom stock fell 4.8% Monday By Cris Tolomia · 2 min ",
            "\"We see the demand for compute infrastructure, for AI development or AI frontier models, and inference for the products that they feed to the world, as continuing to be very strong and, I believe, very durable,\" Tan told CNBC's \"Mad Money.\""
          ],
          "analysisUpdatedAt": 1789479809.6111026
        }
      },
      {
        "headline": "Broadcom (NASDAQ:AVGO): Dividend Quality and Growth for Income Investors",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=d487ed937ef59eabf8f7d0e9e5ad514a71c1dfe15276c43d7b7fc4f5fcbffd4e",
        "datetime": 1789470047,
        "headlineKo": "Broadcom(NASDAQ:AVGO): 소득 투자자를 위한 배당금 품질 및 성장",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "AI Slowdown Debate Splits Tech CEOs: Nvidia, Broadcom Dismiss Any Threat While Elon Musk Calls For Peer Review System",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5dc798dae84bbd2108d61a5dfd47e5f1a36f4a00d6c30ff78882f0c74976b86e",
        "datetime": 1789442191,
        "headlineKo": "AI 둔화 논쟁으로 기술 CEO 분열: Nvidia, Broadcom은 Elon Musk가 동료 검토 시스템을 요구하는 동안 모든 위협을 무시",
        "relevance": 0.5,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:43",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "QCOM": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "amc",
      "epsEstimate": 2.2028,
      "revenueEstimate": 10324902998
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Applied Materials vs. Qualcomm: Which Tech Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45da079c6df91916bb73bfc99fcc10f7c4724d722da16eb42437cb64d43331ee",
        "datetime": 1789473901,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "규제·법무 · 비선형 위험",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Qualcomm: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 2026년 디지털 경제가 성숙해지면서 많은 투자자들이 칩 제조 도구를 만드는 회사와 칩 제작 도구를 만드는 회사 중에서 선택하고 있습니다.",
            "Applied Materials(AMAT -7.07%) 또는 QUALCOMM(QCOM -1.00%)을 선호해야 합니까?"
          ],
          "why": [
            "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 7.07%, 1.00%, 19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "QCOM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 규제 적용일·대상 제품",
            "회사의 매출 영향 추정",
            "대체 제품·지역 판매"
          ],
          "interpretation": "QCOM에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "7.07%",
            "1.00%",
            "19%",
            "15%",
            "$28.4 billion",
            "4.4%",
            "$7 billion",
            "$7.2 billion"
          ],
          "sourceExcerpt": [
            "Qualcomm: Which Tech Stock Is a Better Buy in 2026?",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool As the digital economy matures in 2026, many investors are choosing between the companies that build chipmaking tools and those tha",
            "Should you favor Applied Materials ( AMAT -7.07% ) or QUALCOMM ( QCOM -1.00% ) ?"
          ],
          "analysisUpdatedAt": 1789479817.452371
        },
        "headlineKo": "어플라이드 머티어리얼즈 vs. 퀄컴: 2026년에는 어느 기술주를 사는 것이 더 나을까요?"
      },
      {
        "headline": "Qualcomm’s Datacenter Pivot Is Real, but The Market Already Knows This",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0d4e8f464b2af5df1000b2ed37760cd2d9c7c38418275908ba9c11051bcfde4",
        "datetime": 1789472620,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Qualcomm’s Datacenter Pivot Is Real, but The Market Already Knows This",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "QCOM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 QCOM의 사업과 관련된 'Qualcomm’s Datacenter Pivot Is Real, but The Market Already Knows This' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "QCOM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479819.232451
        },
        "headlineKo": "Qualcomm의 데이터 센터 피벗은 현실이지만 시장은 이미 이를 알고 있습니다."
      },
      {
        "headline": "Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
        "datetime": 1789445485,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "전망·추정 포함",
          "label": "AI 인프라 자금 유입 확대",
          "horizon": "중기 투자 사이클",
          "facts": [
            "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
            "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
            "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
          ],
          "why": [
            "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
            "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
            "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
          ],
          "beginner": [
            "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
            "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
            "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "긍정",
              "reason": "AI 컴퓨팅 수요 확대 가능성"
            },
            {
              "ticker": "AMD",
              "stance": "긍정",
              "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
            },
            {
              "ticker": "MU",
              "stance": "긍정",
              "reason": "AI 서버 메모리 수요와 가격 강세"
            },
            {
              "ticker": "ORCL",
              "stance": "혼합",
              "reason": "클라우드 수요와 자본 부담 동시 확대"
            }
          ],
          "watch": [
            "실제 수주·가동 데이터센터",
            "관련 기업 매출·수주잔고",
            "CAPEX 대비 영업현금흐름",
            "금리와 프로젝트 부채 비용"
          ],
          "interpretation": "이 기사는 QCOM의 사업과 관련된 'Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "현재 해석: QCOM에 우호적인 뉴스입니다. 다만 주가가 이미 기대를 반영했는지와 다음 실적의 매출·이익·현금흐름가 실제로 개선되는지를 확인해야 합니다.",
          "relevance": 0.5,
          "quality": "high",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479820.959678
        },
        "headlineKo": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?"
      },
      {
        "headline": "Marvell Technology: Qualcomm Just Entered Its AWS Territory, But The Buy Case Still Holds",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=431f78bb1c4a14b424439430603bce9ee26342cb5a0fe89e52811447f36ec15a",
        "datetime": 1789440986,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Marvell Technology: Qualcomm이 AWS 영역에 막 진입했지만 구매 사례는 여전히 유효합니다."
      },
      {
        "headline": "Qualcomm (QCOM) Expands AI Data Center Push With New Compute Fabric Partnership",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca2623d00d563488bd540cfae4b5c93c518021e25542996274c70e031dc43c26",
        "datetime": 1789438156,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Qualcomm(QCOM), 새로운 컴퓨팅 패브릭 파트너십으로 AI 데이터 센터 추진 확대"
      }
    ],
    "newsHistory": [
      {
        "headline": "Applied Materials vs. Qualcomm: Which Tech Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45da079c6df91916bb73bfc99fcc10f7c4724d722da16eb42437cb64d43331ee",
        "datetime": 1789473901,
        "headlineKo": "어플라이드 머티어리얼즈 vs. 퀄컴: 2026년에는 어느 기술주를 사는 것이 더 나을까요?",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "규제·법무 · 비선형 위험",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Qualcomm: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 2026년 디지털 경제가 성숙해지면서 많은 투자자들이 칩 제조 도구를 만드는 회사와 칩 제작 도구를 만드는 회사 중에서 선택하고 있습니다.",
            "Applied Materials(AMAT -7.07%) 또는 QUALCOMM(QCOM -1.00%)을 선호해야 합니까?"
          ],
          "why": [
            "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 7.07%, 1.00%, 19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "QCOM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "QCOM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 규제 적용일·대상 제품",
            "회사의 매출 영향 추정",
            "대체 제품·지역 판매"
          ],
          "interpretation": "QCOM에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "7.07%",
            "1.00%",
            "19%",
            "15%",
            "$28.4 billion",
            "4.4%",
            "$7 billion",
            "$7.2 billion"
          ],
          "sourceExcerpt": [
            "Qualcomm: Which Tech Stock Is a Better Buy in 2026?",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool As the digital economy matures in 2026, many investors are choosing between the companies that build chipmaking tools and those tha",
            "Should you favor Applied Materials ( AMAT -7.07% ) or QUALCOMM ( QCOM -1.00% ) ?"
          ],
          "analysisUpdatedAt": 1789479817.452371
        }
      },
      {
        "headline": "Qualcomm’s Datacenter Pivot Is Real, but The Market Already Knows This",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f0d4e8f464b2af5df1000b2ed37760cd2d9c7c38418275908ba9c11051bcfde4",
        "datetime": 1789472620,
        "headlineKo": "Qualcomm의 데이터 센터 피벗은 현실이지만 시장은 이미 이를 알고 있습니다.",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Qualcomm’s Datacenter Pivot Is Real, but The Market Already Knows This",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "QCOM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 QCOM의 사업과 관련된 'Qualcomm’s Datacenter Pivot Is Real, but The Market Already Knows This' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "QCOM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479819.232451
        }
      },
      {
        "headline": "Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be33aa8fe457fc100c608f4ac16fd2c35d3d2f29e18b273aa99468e0ec75182a",
        "datetime": 1789445485,
        "headlineKo": "Apple이 모뎀을 자체적으로 도입하는 것처럼 Amazon은 Qualcomm으로부터 최대 600억 달러를 구매할 수 있습니다. AI 피벗은 진짜인가?",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "전망·추정 포함",
          "label": "AI 인프라 자금 유입 확대",
          "horizon": "중기 투자 사이클",
          "facts": [
            "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
            "구체적인 투자 규모와 집행 시점은 원문 확인이 필요합니다.",
            "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
          ],
          "why": [
            "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
            "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
            "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
          ],
          "beginner": [
            "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
            "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
            "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "긍정",
              "reason": "AI 컴퓨팅 수요 확대 가능성"
            },
            {
              "ticker": "AMD",
              "stance": "긍정",
              "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
            },
            {
              "ticker": "MU",
              "stance": "긍정",
              "reason": "AI 서버 메모리 수요와 가격 강세"
            },
            {
              "ticker": "ORCL",
              "stance": "혼합",
              "reason": "클라우드 수요와 자본 부담 동시 확대"
            }
          ],
          "watch": [
            "실제 수주·가동 데이터센터",
            "관련 기업 매출·수주잔고",
            "CAPEX 대비 영업현금흐름",
            "금리와 프로젝트 부채 비용"
          ],
          "interpretation": "이 기사는 QCOM의 사업과 관련된 'Amazon Could Buy Up to $60 Billion From Qualcomm Just as Apple Brings Modems In-House. Is the AI Pivot Real?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "현재 해석: QCOM에 우호적인 뉴스입니다. 다만 주가가 이미 기대를 반영했는지와 다음 실적의 매출·이익·현금흐름가 실제로 개선되는지를 확인해야 합니다.",
          "relevance": 0.5,
          "quality": "high",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479820.959678
        }
      },
      {
        "headline": "Marvell Technology: Qualcomm Just Entered Its AWS Territory, But The Buy Case Still Holds",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=431f78bb1c4a14b424439430603bce9ee26342cb5a0fe89e52811447f36ec15a",
        "datetime": 1789440986,
        "headlineKo": "Marvell Technology: Qualcomm이 AWS 영역에 막 진입했지만 구매 사례는 여전히 유효합니다.",
        "relevance": 0.5,
        "keywordFlag": false
      },
      {
        "headline": "Qualcomm (QCOM) Expands AI Data Center Push With New Compute Fabric Partnership",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=ca2623d00d563488bd540cfae4b5c93c518021e25542996274c70e031dc43c26",
        "datetime": 1789438156,
        "headlineKo": "Qualcomm(QCOM), 새로운 컴퓨팅 패브릭 파트너십으로 AI 데이터 센터 추진 확대",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:43",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "ARM": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 0.4795,
      "revenueEstimate": 1389398945
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Arm Stock Is Down More Than 40%. Here's Why I'm Staying on the Sidelines.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=59df05b59c7081ed53624947bc18e8fce061adb73da368ab9e9da6a13ba508dd",
        "datetime": 1789450022,
        "relevance": 0.75,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "내가 방관하고 있는 이유는 다음과 같습니다.",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 칩 설계자 Arm Holdings(ARM -9.74%)의 주가는 인공 지능(A)을 휩쓴 매도세로 월요일에 거의 10% 하락했습니다.",
            "이 슬라이드는 업계가 AI 모델 기능을 개선하는 속도를 늦춰야 한다고 주장하는 Anthropic CEO Dario Amodei의 주말 에세이에 이어졌습니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 40%, $239, $452.70. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ARM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "ARM에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.75,
          "quality": "medium",
          "verifiedNumbers": [
            "40%",
            "$239",
            "$452.70.",
            "22%",
            "$1.29 billion",
            "$715 million",
            "23%",
            "$574 million"
          ],
          "sourceExcerpt": [
            "Here's Why I'm Staying on the Sidelines.",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Shares of chip designer Arm Holdings ( ARM -9.74% ) fell nearly 10% on Monday as a sell-off swept across artificial intelligence (A",
            "The slide followed a weekend essay from Anthropic CEO Dario Amodei arguing that the industry should slow the pace at which it improves AI model capabilities."
          ],
          "analysisUpdatedAt": 1789479828.484266
        },
        "headlineKo": "팔 재고가 40% 이상 하락했습니다. 내가 방관하고 있는 이유는 다음과 같습니다."
      },
      {
        "headline": "Is Arm Holdings (ARM) Cheap After The AI Stock Pullback?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87159c1a4977aed004381f6b06516654e481e6cbed42917e2e8fda9043b0544d",
        "datetime": 1789449334,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Is Arm Holdings (ARM) Cheap After The AI Stock Pullback?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ARM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ARM의 사업과 관련된 'Is Arm Holdings (ARM) Cheap After The AI Stock Pullback?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ARM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479830.8381243
        },
        "headlineKo": "AI 주가 하락 후 Arm Holdings(ARM)가 저렴합니까?"
      },
      {
        "headline": "Prediction: Arm Could Be the Picks-and-Shovels Winner of the AI Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e1eb5210a447cb19a38e970be2add0d0791738e927509aa65d3487b405e067e",
        "datetime": 1789394429,
        "relevance": 0.75,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "예측: Arm은 AI 붐의 승자가 될 수 있습니다 - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Vandita Jadeja 작성 2026년 9월 14일 오전 10시(ET) 게시 · 4분 읽기 가격 목표 데스크."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $264.79., $280.16, 5.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ARM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "ARM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.75,
          "quality": "medium",
          "verifiedNumbers": [
            "$264.79.",
            "$280.16",
            "5.81%",
            "$264.79",
            "90%",
            "$265",
            "142.24%",
            "71.16%"
          ],
          "sourceExcerpt": [
            "Prediction: Arm Could Be the Picks-and-Shovels Winner of the AI Boom - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By Vandita Jadeja Published September 14, 2026, 10:00am ET · 4 min read Price Targets desk."
          ],
          "analysisUpdatedAt": 1789479833.8849006
        },
        "headlineKo": "예측: Arm은 AI 붐의 승자가 될 수 있습니다."
      },
      {
        "headline": "Arm vs. Credo Technology Group: Which Semiconductor Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df7181a332ef16e41cfd20fe557eef7dc0727a4e8ba9e9a855139bf7243865e1",
        "datetime": 1789152953,
        "relevance": 0.75,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Arm 대 Credo Technology Group: 2026년에는 어느 반도체 주식을 매수하는 것이 더 나은가요?"
      },
      {
        "headline": "Arm vs. Sandisk: Which Technology Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e47286077fd301639ce641c0d8fefbd50888a95a4765e15ee649e8e62d9f0855",
        "datetime": 1789146508,
        "relevance": 0.75,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Arm 대 Sandisk: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?"
      }
    ],
    "newsHistory": [
      {
        "headline": "Arm Stock Is Down More Than 40%. Here's Why I'm Staying on the Sidelines.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=59df05b59c7081ed53624947bc18e8fce061adb73da368ab9e9da6a13ba508dd",
        "datetime": 1789450022,
        "headlineKo": "팔 재고가 40% 이상 하락했습니다. 내가 방관하고 있는 이유는 다음과 같습니다.",
        "relevance": 0.75,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "내가 방관하고 있는 이유는 다음과 같습니다.",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Motley Fool에 합류 칩 설계자 Arm Holdings(ARM -9.74%)의 주가는 인공 지능(A)을 휩쓴 매도세로 월요일에 거의 10% 하락했습니다.",
            "이 슬라이드는 업계가 AI 모델 기능을 개선하는 속도를 늦춰야 한다고 주장하는 Anthropic CEO Dario Amodei의 주말 에세이에 이어졌습니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 40%, $239, $452.70. — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ARM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "ARM에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.75,
          "quality": "medium",
          "verifiedNumbers": [
            "40%",
            "$239",
            "$452.70.",
            "22%",
            "$1.29 billion",
            "$715 million",
            "23%",
            "$574 million"
          ],
          "sourceExcerpt": [
            "Here's Why I'm Staying on the Sidelines.",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Shares of chip designer Arm Holdings ( ARM -9.74% ) fell nearly 10% on Monday as a sell-off swept across artificial intelligence (A",
            "The slide followed a weekend essay from Anthropic CEO Dario Amodei arguing that the industry should slow the pace at which it improves AI model capabilities."
          ],
          "analysisUpdatedAt": 1789479828.484266
        }
      },
      {
        "headline": "Is Arm Holdings (ARM) Cheap After The AI Stock Pullback?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=87159c1a4977aed004381f6b06516654e481e6cbed42917e2e8fda9043b0544d",
        "datetime": 1789449334,
        "headlineKo": "AI 주가 하락 후 Arm Holdings(ARM)가 저렴합니까?",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Is Arm Holdings (ARM) Cheap After The AI Stock Pullback?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ARM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ARM의 사업과 관련된 'Is Arm Holdings (ARM) Cheap After The AI Stock Pullback?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ARM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479830.8381243
        }
      },
      {
        "headline": "Prediction: Arm Could Be the Picks-and-Shovels Winner of the AI Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e1eb5210a447cb19a38e970be2add0d0791738e927509aa65d3487b405e067e",
        "datetime": 1789394429,
        "headlineKo": "예측: Arm은 AI 붐의 승자가 될 수 있습니다.",
        "relevance": 0.75,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "예측: Arm은 AI 붐의 승자가 될 수 있습니다 - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Vandita Jadeja 작성 2026년 9월 14일 오전 10시(ET) 게시 · 4분 읽기 가격 목표 데스크."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $264.79., $280.16, 5.81% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ARM의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ARM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "ARM에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.75,
          "quality": "medium",
          "verifiedNumbers": [
            "$264.79.",
            "$280.16",
            "5.81%",
            "$264.79",
            "90%",
            "$265",
            "142.24%",
            "71.16%"
          ],
          "sourceExcerpt": [
            "Prediction: Arm Could Be the Picks-and-Shovels Winner of the AI Boom - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By Vandita Jadeja Published September 14, 2026, 10:00am ET · 4 min read Price Targets desk."
          ],
          "analysisUpdatedAt": 1789479833.8849006
        }
      },
      {
        "headline": "Arm vs. Credo Technology Group: Which Semiconductor Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=df7181a332ef16e41cfd20fe557eef7dc0727a4e8ba9e9a855139bf7243865e1",
        "datetime": 1789152953,
        "headlineKo": "Arm 대 Credo Technology Group: 2026년에는 어느 반도체 주식을 매수하는 것이 더 나은가요?",
        "relevance": 0.75,
        "keywordFlag": false
      },
      {
        "headline": "Arm vs. Sandisk: Which Technology Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=e47286077fd301639ce641c0d8fefbd50888a95a4765e15ee649e8e62d9f0855",
        "datetime": 1789146508,
        "headlineKo": "Arm 대 Sandisk: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
        "relevance": 0.75,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:43",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "MRVL": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-30",
      "hour": "",
      "epsEstimate": 1.1108,
      "revenueEstimate": 3212261193
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Marvell Technology: Qualcomm Just Entered Its AWS Territory, But The Buy Case Still Holds",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=431f78bb1c4a14b424439430603bce9ee26342cb5a0fe89e52811447f36ec15a",
        "datetime": 1789440986,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Marvell Technology: Qualcomm Just Entered Its AWS Territory, But The Buy Case Still Holds",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MRVL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MRVL의 사업과 관련된 'Marvell Technology: Qualcomm Just Entered Its AWS Territory, But The Buy Case Still Holds' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MRVL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479840.2219074
        },
        "headlineKo": "Marvell Technology: Qualcomm이 AWS 영역에 막 진입했지만 구매 사례는 여전히 유효합니다."
      },
      {
        "headline": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ab1e1cd50b50858b11d889d162fcc50166258f5a189d9c817c451f30ab98b42",
        "datetime": 1789430130,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MRVL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MRVL의 사업과 관련된 'Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MRVL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479842.1339333
        },
        "headlineKo": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology 및 MACOM 주식이 하락하고 있습니다. 알아야 할 사항"
      },
      {
        "headline": "Marvell stock plunges as a new threat hits the AI trade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45dad0303e4090ef86c05699fb06733c5fe1a14e246609a667c59c70bfbc6204",
        "datetime": 1789412960,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Marvell stock plunges as a new threat hits the AI trade",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MRVL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MRVL의 사업과 관련된 'Marvell stock plunges as a new threat hits the AI trade' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MRVL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479844.3374534
        },
        "headlineKo": "AI 거래에 새로운 위협이 닥치면서 Marvell 주가 급락"
      },
      {
        "headline": "Marvell Falls 7% as AI Pacing Debate Collides With Fed Week; Broadcom Drops 4%, NVIDIA Pulls Back",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51ce192cc0d5fc4b15eefddfa0f619e62d07e62550aaa14561671637ceb98230",
        "datetime": 1789404210,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "AI 속도 논쟁이 Fed Week와 충돌함에 따라 Marvell은 7% 하락했습니다. Broadcom은 4% 하락, NVIDIA는 후퇴"
      },
      {
        "headline": "Why Marvell Stock Is Falling Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7253414ae758a3fa5559234ffe6889ee1426b681044df5ed554cda7e2020801f",
        "datetime": 1789403400,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "오늘 Marvell 주식이 하락하는 이유"
      }
    ],
    "newsHistory": [
      {
        "headline": "Marvell Technology: Qualcomm Just Entered Its AWS Territory, But The Buy Case Still Holds",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=431f78bb1c4a14b424439430603bce9ee26342cb5a0fe89e52811447f36ec15a",
        "datetime": 1789440986,
        "headlineKo": "Marvell Technology: Qualcomm이 AWS 영역에 막 진입했지만 구매 사례는 여전히 유효합니다.",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Marvell Technology: Qualcomm Just Entered Its AWS Territory, But The Buy Case Still Holds",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MRVL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MRVL의 사업과 관련된 'Marvell Technology: Qualcomm Just Entered Its AWS Territory, But The Buy Case Still Holds' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MRVL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479840.2219074
        }
      },
      {
        "headline": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ab1e1cd50b50858b11d889d162fcc50166258f5a189d9c817c451f30ab98b42",
        "datetime": 1789430130,
        "headlineKo": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology 및 MACOM 주식이 하락하고 있습니다. 알아야 할 사항",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MRVL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MRVL의 사업과 관련된 'Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MRVL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479842.1339333
        }
      },
      {
        "headline": "Marvell stock plunges as a new threat hits the AI trade",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45dad0303e4090ef86c05699fb06733c5fe1a14e246609a667c59c70bfbc6204",
        "datetime": 1789412960,
        "headlineKo": "AI 거래에 새로운 위협이 닥치면서 Marvell 주가 급락",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Marvell stock plunges as a new threat hits the AI trade",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MRVL",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MRVL의 사업과 관련된 'Marvell stock plunges as a new threat hits the AI trade' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MRVL 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479844.3374534
        }
      },
      {
        "headline": "Marvell Falls 7% as AI Pacing Debate Collides With Fed Week; Broadcom Drops 4%, NVIDIA Pulls Back",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=51ce192cc0d5fc4b15eefddfa0f619e62d07e62550aaa14561671637ceb98230",
        "datetime": 1789404210,
        "headlineKo": "AI 속도 논쟁이 Fed Week와 충돌함에 따라 Marvell은 7% 하락했습니다. Broadcom은 4% 하락, NVIDIA는 후퇴",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Why Marvell Stock Is Falling Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7253414ae758a3fa5559234ffe6889ee1426b681044df5ed554cda7e2020801f",
        "datetime": 1789403400,
        "headlineKo": "오늘 Marvell 주식이 하락하는 이유",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:44",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "INTC": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "amc",
      "epsEstimate": 0.3917,
      "revenueEstimate": 16728525136
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Embedded Systems Market Outlook 2026-2035 - Featuring Profiles of Intel, NXP Semiconductors, and Renesas Electronics",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2b5b919a4e1c8dd9df8981ba53b1524febffd655bd809105930dd5537609503",
        "datetime": 1789459440,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Embedded Systems Market Outlook 2026-2035 - Featuring Profiles of Intel, NXP Semiconductors, and Renesas Electronics",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "INTC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 INTC의 사업과 관련된 'Embedded Systems Market Outlook 2026-2035 - Featuring Profiles of Intel, NXP Semiconductors, and Renesas Electronics' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "INTC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479851.7665634
        },
        "headlineKo": "임베디드 시스템 시장 전망(2026~2035년) - Intel, NXP Semiconductors 및 Renesas Electronics의 프로필 포함"
      },
      {
        "headline": "Intel's Turnaround Is Running Out Of Excuses",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2898dec730552417d413681532694fb861452c7ea3a80207574151ee6bb5e924",
        "datetime": 1789452969,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Intel's Turnaround Is Running Out Of Excuses",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "INTC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 INTC의 사업과 관련된 'Intel's Turnaround Is Running Out Of Excuses' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "INTC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479852.6682823
        },
        "headlineKo": "인텔의 턴어라운드에는 변명의 여지가 부족합니다."
      },
      {
        "headline": "Intel: Fairly Valued Despite 150% Stock Price Surge",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2e1bb08e883ccef1e0d8902a65e1ebd6e5ab8328fa4824b1dffd67f192415cc4",
        "datetime": 1789445042,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Intel: Fairly Valued Despite 150% Stock Price Surge",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "INTC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 INTC의 사업과 관련된 'Intel: Fairly Valued Despite 150% Stock Price Surge' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "INTC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479853.561769
        },
        "headlineKo": "인텔: 주가 150% 급등에도 불구하고 상당한 가치 평가"
      },
      {
        "headline": "Why Micron, Intel, AMD, and Other Chip Stocks Fell Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1da4f2030c1574b519935f2a479a9b0993c010764c860f8888851706662c4d84",
        "datetime": 1789442902,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "오늘 Micron, Intel, AMD 및 기타 칩 주식이 하락한 이유"
      },
      {
        "headline": "Talk of AI pause slams Nvidia, AMD and Intel as fears of doomsday scenarios spread",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5732ba98264cae7c168162c0bc66ac8cfbbe64d1578580e28c10cccd3fe8f492",
        "datetime": 1789422436,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "종말 시나리오에 대한 두려움이 확산됨에 따라 AI 일시 중지에 대한 논의로 Nvidia, AMD 및 Intel이 비난을 받았습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Embedded Systems Market Outlook 2026-2035 - Featuring Profiles of Intel, NXP Semiconductors, and Renesas Electronics",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b2b5b919a4e1c8dd9df8981ba53b1524febffd655bd809105930dd5537609503",
        "datetime": 1789459440,
        "headlineKo": "임베디드 시스템 시장 전망(2026~2035년) - Intel, NXP Semiconductors 및 Renesas Electronics의 프로필 포함",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Embedded Systems Market Outlook 2026-2035 - Featuring Profiles of Intel, NXP Semiconductors, and Renesas Electronics",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "INTC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 INTC의 사업과 관련된 'Embedded Systems Market Outlook 2026-2035 - Featuring Profiles of Intel, NXP Semiconductors, and Renesas Electronics' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "INTC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479851.7665634
        }
      },
      {
        "headline": "Intel's Turnaround Is Running Out Of Excuses",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2898dec730552417d413681532694fb861452c7ea3a80207574151ee6bb5e924",
        "datetime": 1789452969,
        "headlineKo": "인텔의 턴어라운드에는 변명의 여지가 부족합니다.",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Intel's Turnaround Is Running Out Of Excuses",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "INTC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 INTC의 사업과 관련된 'Intel's Turnaround Is Running Out Of Excuses' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "INTC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479852.6682823
        }
      },
      {
        "headline": "Intel: Fairly Valued Despite 150% Stock Price Surge",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=2e1bb08e883ccef1e0d8902a65e1ebd6e5ab8328fa4824b1dffd67f192415cc4",
        "datetime": 1789445042,
        "headlineKo": "인텔: 주가 150% 급등에도 불구하고 상당한 가치 평가",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Intel: Fairly Valued Despite 150% Stock Price Surge",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "INTC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 INTC의 사업과 관련된 'Intel: Fairly Valued Despite 150% Stock Price Surge' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "INTC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479853.561769
        }
      },
      {
        "headline": "Why Micron, Intel, AMD, and Other Chip Stocks Fell Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1da4f2030c1574b519935f2a479a9b0993c010764c860f8888851706662c4d84",
        "datetime": 1789442902,
        "headlineKo": "오늘 Micron, Intel, AMD 및 기타 칩 주식이 하락한 이유",
        "relevance": 0.5,
        "keywordFlag": false
      },
      {
        "headline": "Talk of AI pause slams Nvidia, AMD and Intel as fears of doomsday scenarios spread",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=5732ba98264cae7c168162c0bc66ac8cfbbe64d1578580e28c10cccd3fe8f492",
        "datetime": 1789422436,
        "headlineKo": "종말 시나리오에 대한 두려움이 확산됨에 따라 AI 일시 중지에 대한 논의로 Nvidia, AMD 및 Intel이 비난을 받았습니다.",
        "relevance": 0.5,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:44",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "TSM": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "amc",
      "epsEstimate": 28.9619,
      "revenueEstimate": 1479386868558
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "TSMC Falls 3.3% as Its 2028 Chip Roadmap Precedes High-NA Adoption",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50d39a82cf61a70bd13fadc4a01cf9cd54061770e09adb3ddadf0b562d166974",
        "datetime": 1789406319,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "TSMC Falls 3.3% as Its 2028 Chip Roadmap Precedes High-NA Adoption",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "TSM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 TSM의 사업과 관련된 'TSMC Falls 3.3% as Its 2028 Chip Roadmap Precedes High-NA Adoption' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "TSM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479860.9323509
        },
        "headlineKo": "TSMC는 2028년 칩 로드맵이 High-NA 채택을 앞두고 3.3% 하락했습니다."
      },
      {
        "headline": "GSME Joined TSMC OIP Value Chain Alliance in North America",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f26bfbfba4f79637266f1dc5c55503f00c4a126f1d190c70b76fb518813a7d6b",
        "datetime": 1789390800,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "GSME Joined TSMC OIP Value Chain Alliance in North America",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "TSM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 TSM의 사업과 관련된 'GSME Joined TSMC OIP Value Chain Alliance in North America' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "TSM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479862.5225558
        },
        "headlineKo": "GSME, 북미 TSMC OIP Value Chain Alliance에 합류"
      },
      {
        "headline": "The Zacks Analyst Blog Highlights Amkor Technology, Ultra Clean, FormFactor, Taiwan Semiconducto and NVIDIA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e73f2ff756281a541a201e4b022e17cadd1dddb45a47d0da672cebebd088fcd",
        "datetime": 1789380360,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "The Zacks Analyst Blog Highlights Amkor Technology, Ultra Clean, FormFactor, Taiwan Semiconducto and NVIDIA",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "TSM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 TSM의 사업과 관련된 'The Zacks Analyst Blog Highlights Amkor Technology, Ultra Clean, FormFactor, Taiwan Semiconducto and NVIDIA' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "TSM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479864.0545828
        },
        "headlineKo": "Zacks 분석가 블로그에서는 Amkor Technology, Ultra Clean, FormFactor, Taiwan Semiconducto 및 NVIDIA를 소개합니다."
      },
      {
        "headline": "Prediction: Taiwan Semiconductor Manufacturing Stock Will Hit $600 by the End of 2027",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3a461a319b1aa58a968ebff66655ca54ce43bd37ddae590ef55f0fb922889376",
        "datetime": 1789297500,
        "relevance": 1.0,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "예측: 대만 반도체 제조 주식은 2027년 말까지 600달러에 도달할 것입니다"
      },
      {
        "headline": "Apple, Taiwan Semi Lead Five Stocks Near Buy Points",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9800edf1611a06a111c18e1929db27b1209f5b8bfa2f8b5aac93e80430ddc6d5",
        "datetime": 1789230125,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "애플, 대만 세미 리드 5개 주식 매수 포인트 근처"
      }
    ],
    "newsHistory": [
      {
        "headline": "TSMC Falls 3.3% as Its 2028 Chip Roadmap Precedes High-NA Adoption",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=50d39a82cf61a70bd13fadc4a01cf9cd54061770e09adb3ddadf0b562d166974",
        "datetime": 1789406319,
        "headlineKo": "TSMC는 2028년 칩 로드맵이 High-NA 채택을 앞두고 3.3% 하락했습니다.",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "TSMC Falls 3.3% as Its 2028 Chip Roadmap Precedes High-NA Adoption",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "TSM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 TSM의 사업과 관련된 'TSMC Falls 3.3% as Its 2028 Chip Roadmap Precedes High-NA Adoption' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "TSM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479860.9323509
        }
      },
      {
        "headline": "GSME Joined TSMC OIP Value Chain Alliance in North America",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f26bfbfba4f79637266f1dc5c55503f00c4a126f1d190c70b76fb518813a7d6b",
        "datetime": 1789390800,
        "headlineKo": "GSME, 북미 TSMC OIP Value Chain Alliance에 합류",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "GSME Joined TSMC OIP Value Chain Alliance in North America",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "TSM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 TSM의 사업과 관련된 'GSME Joined TSMC OIP Value Chain Alliance in North America' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "TSM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479862.5225558
        }
      },
      {
        "headline": "The Zacks Analyst Blog Highlights Amkor Technology, Ultra Clean, FormFactor, Taiwan Semiconducto and NVIDIA",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4e73f2ff756281a541a201e4b022e17cadd1dddb45a47d0da672cebebd088fcd",
        "datetime": 1789380360,
        "headlineKo": "Zacks 분석가 블로그에서는 Amkor Technology, Ultra Clean, FormFactor, Taiwan Semiconducto 및 NVIDIA를 소개합니다.",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "The Zacks Analyst Blog Highlights Amkor Technology, Ultra Clean, FormFactor, Taiwan Semiconducto and NVIDIA",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "TSM",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 TSM의 사업과 관련된 'The Zacks Analyst Blog Highlights Amkor Technology, Ultra Clean, FormFactor, Taiwan Semiconducto and NVIDIA' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "TSM 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479864.0545828
        }
      },
      {
        "headline": "Prediction: Taiwan Semiconductor Manufacturing Stock Will Hit $600 by the End of 2027",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3a461a319b1aa58a968ebff66655ca54ce43bd37ddae590ef55f0fb922889376",
        "datetime": 1789297500,
        "headlineKo": "예측: 대만 반도체 제조 주식은 2027년 말까지 600달러에 도달할 것입니다",
        "relevance": 1.0,
        "keywordFlag": false
      },
      {
        "headline": "Apple, Taiwan Semi Lead Five Stocks Near Buy Points",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9800edf1611a06a111c18e1929db27b1209f5b8bfa2f8b5aac93e80430ddc6d5",
        "datetime": 1789230125,
        "headlineKo": "애플, 대만 세미 리드 5개 주식 매수 포인트 근처",
        "relevance": 0.5,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:44",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "ASML": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-14",
      "hour": "bmo",
      "epsEstimate": 10.7674,
      "revenueEstimate": 11807105961
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Lam Research Vs. Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28f6ca7441b7edc9e5ca3bfa3061f8a841dc1bdfc9a8650623ed4e25fb39ff13",
        "datetime": 1789470049,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "경쟁사 진입 · 해자 점검",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?"
          ],
          "why": [
            "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $6.72, 30.0%, $9.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ASML",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "성능·가격 비교",
            "실제 고객 수주",
            "기존 회사 점유율·마진"
          ],
          "interpretation": "ASML에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "$6.72",
            "30.0%",
            "$9.12",
            "24.8%",
            "46%",
            "$150 billion",
            "$140",
            "$7.04"
          ],
          "sourceExcerpt": [
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?"
          ],
          "analysisUpdatedAt": 1789479872.7923124
        },
        "headlineKo": "램리서치 vs. Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?"
      },
      {
        "headline": "ASML Eyes 110+ EUV Machines as JPM Stresses 'Strong' AI Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f1e219b2a1049bb3b425b4ee6d40c96378a836263a41bcb42a614ee1f756c9b",
        "datetime": 1789412168,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "ASML Eyes 110+ EUV Machines as JPM Stresses 'Strong' AI Demand",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ASML",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ASML의 사업과 관련된 'ASML Eyes 110+ EUV Machines as JPM Stresses 'Strong' AI Demand' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ASML 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479873.8339834
        },
        "headlineKo": "JPM이 '강력한' AI 수요를 강조함에 따라 ASML은 110개 이상의 EUV 기계를 주시합니다."
      },
      {
        "headline": "Why ASML Stock Is Falling Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2cd7ed2982597117c00fda11d886d678395c523bab3f8513e602e821f2a0c9bf",
        "datetime": 1789411844,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "오늘 ASML 주식이 하락하는 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool ASML Holding ( ASML -7.25% ) 산업계 주요 AI 경영진 이후 월요일 주가 하락",
            "2026년 14일 ASML 주가는 6.2% 하락했고, S&P 500과 나스닥 종합지수는 각각 0.3%, 0.2% 하락했다.",
            "Expand NASDAQ: ASML ASML 프리미엄 기능 Moneyball Superscore 97 /100 오늘의 변동폭( -7.25 %) $ -123.15 현재 가격 $ 1,575.15 주요 데이터 포인트 시가 총액 $607B 시가 총액은 상장 주식 미결제만을 사용하여 계산되었습니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 7.25 %, $ 1,575.15, $607 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ASML",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "ASML에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "7.25 %",
            "$ 1,575.15",
            "$607",
            "$ 1572.84",
            "$ 1610.41",
            "$ 861.18",
            "$ 1999.96",
            "52.73%"
          ],
          "sourceExcerpt": [
            "Why ASML Stock Is Falling Today | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool ASML Holding ( ASML -7.25% ) stock fell on Monday after leading AI executives from around the indus",
            "14, 2026, ASML shares were down 6.2%, while the S&P 500 and Nasdaq Composite were down 0.3% and 0.2%, respectively.",
            "Expand NASDAQ : ASML ASML Premium Feature Moneyball Superscore 97 /100 Today's Change ( -7.25 %) $ -123.15 Current Price $ 1,575.15 Key Data Points Market Cap $607B Market cap calculated using publicly traded shares outstanding only."
          ],
          "analysisUpdatedAt": 1789479875.9891677
        },
        "headlineKo": "오늘 ASML 주식이 하락하는 이유"
      },
      {
        "headline": "ASML Drops 5.4% as Customers Prepare for $400 Million Machines",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbe808ba93ad30cda9a2b7dcdb048289d193c310f51454ad105dedfb435b610f",
        "datetime": 1789409866,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "고객이 4억 달러 규모의 기계를 준비함에 따라 ASML은 5.4% 하락"
      },
      {
        "headline": "Chip Equipment Stocks Slide as AI Pacing Call Reaches Fab Spending: Applied Materials and Lam Research Fall 6%, ASML Sinks 5%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc44bdc8f76f0c1eac85348fbfa20d94e3946efc3398fc096a2a44326f03af90",
        "datetime": 1789397549,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주가 하락: Applied Materials 및 Lam Research는 6% 하락, ASML은 5% 하락"
      }
    ],
    "newsHistory": [
      {
        "headline": "Lam Research Vs. Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28f6ca7441b7edc9e5ca3bfa3061f8a841dc1bdfc9a8650623ed4e25fb39ff13",
        "datetime": 1789470049,
        "headlineKo": "램리서치 vs. Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "경쟁사 진입 · 해자 점검",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?"
          ],
          "why": [
            "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $6.72, 30.0%, $9.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ASML",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "성능·가격 비교",
            "실제 고객 수주",
            "기존 회사 점유율·마진"
          ],
          "interpretation": "ASML에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "$6.72",
            "30.0%",
            "$9.12",
            "24.8%",
            "46%",
            "$150 billion",
            "$140",
            "$7.04"
          ],
          "sourceExcerpt": [
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?"
          ],
          "analysisUpdatedAt": 1789479872.7923124
        }
      },
      {
        "headline": "ASML Eyes 110+ EUV Machines as JPM Stresses 'Strong' AI Demand",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f1e219b2a1049bb3b425b4ee6d40c96378a836263a41bcb42a614ee1f756c9b",
        "datetime": 1789412168,
        "headlineKo": "JPM이 '강력한' AI 수요를 강조함에 따라 ASML은 110개 이상의 EUV 기계를 주시합니다.",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "ASML Eyes 110+ EUV Machines as JPM Stresses 'Strong' AI Demand",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ASML",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ASML의 사업과 관련된 'ASML Eyes 110+ EUV Machines as JPM Stresses 'Strong' AI Demand' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ASML 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479873.8339834
        }
      },
      {
        "headline": "Why ASML Stock Is Falling Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2cd7ed2982597117c00fda11d886d678395c523bab3f8513e602e821f2a0c9bf",
        "datetime": 1789411844,
        "headlineKo": "오늘 ASML 주식이 하락하는 이유",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "오늘 ASML 주식이 하락하는 이유 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool ASML Holding ( ASML -7.25% ) 산업계 주요 AI 경영진 이후 월요일 주가 하락",
            "2026년 14일 ASML 주가는 6.2% 하락했고, S&P 500과 나스닥 종합지수는 각각 0.3%, 0.2% 하락했다.",
            "Expand NASDAQ: ASML ASML 프리미엄 기능 Moneyball Superscore 97 /100 오늘의 변동폭( -7.25 %) $ -123.15 현재 가격 $ 1,575.15 주요 데이터 포인트 시가 총액 $607B 시가 총액은 상장 주식 미결제만을 사용하여 계산되었습니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 7.25 %, $ 1,575.15, $607 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ASML의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ASML",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "ASML에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "7.25 %",
            "$ 1,575.15",
            "$607",
            "$ 1572.84",
            "$ 1610.41",
            "$ 861.18",
            "$ 1999.96",
            "52.73%"
          ],
          "sourceExcerpt": [
            "Why ASML Stock Is Falling Today | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool ASML Holding ( ASML -7.25% ) stock fell on Monday after leading AI executives from around the indus",
            "14, 2026, ASML shares were down 6.2%, while the S&P 500 and Nasdaq Composite were down 0.3% and 0.2%, respectively.",
            "Expand NASDAQ : ASML ASML Premium Feature Moneyball Superscore 97 /100 Today's Change ( -7.25 %) $ -123.15 Current Price $ 1,575.15 Key Data Points Market Cap $607B Market cap calculated using publicly traded shares outstanding only."
          ],
          "analysisUpdatedAt": 1789479875.9891677
        }
      },
      {
        "headline": "ASML Drops 5.4% as Customers Prepare for $400 Million Machines",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dbe808ba93ad30cda9a2b7dcdb048289d193c310f51454ad105dedfb435b610f",
        "datetime": 1789409866,
        "headlineKo": "고객이 4억 달러 규모의 기계를 준비함에 따라 ASML은 5.4% 하락",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "Chip Equipment Stocks Slide as AI Pacing Call Reaches Fab Spending: Applied Materials and Lam Research Fall 6%, ASML Sinks 5%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc44bdc8f76f0c1eac85348fbfa20d94e3946efc3398fc096a2a44326f03af90",
        "datetime": 1789397549,
        "headlineKo": "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주가 하락: Applied Materials 및 Lam Research는 6% 하락, ASML은 5% 하락",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:44",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "AMAT": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-12",
      "hour": "amc",
      "epsEstimate": 4.1388,
      "revenueEstimate": 10513249854
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Applied Materials vs. Qualcomm: Which Tech Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45da079c6df91916bb73bfc99fcc10f7c4724d722da16eb42437cb64d43331ee",
        "datetime": 1789473901,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "규제·법무 · 비선형 위험",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Qualcomm: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 2026년 디지털 경제가 성숙해지면서 많은 투자자들이 칩 제조 도구를 만드는 회사와 칩 제작 도구를 만드는 회사 중에서 선택하고 있습니다.",
            "Applied Materials(AMAT -7.07%) 또는 QUALCOMM(QCOM -1.00%)을 선호해야 합니까?"
          ],
          "why": [
            "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 7.07%, 1.00%, 19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMAT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 규제 적용일·대상 제품",
            "회사의 매출 영향 추정",
            "대체 제품·지역 판매"
          ],
          "interpretation": "AMAT에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "7.07%",
            "1.00%",
            "19%",
            "15%",
            "$28.4 billion",
            "4.4%",
            "$7 billion",
            "$7.2 billion"
          ],
          "sourceExcerpt": [
            "Qualcomm: Which Tech Stock Is a Better Buy in 2026?",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool As the digital economy matures in 2026, many investors are choosing between the companies that build chipmaking tools and those tha",
            "Should you favor Applied Materials ( AMAT -7.07% ) or QUALCOMM ( QCOM -1.00% ) ?"
          ],
          "analysisUpdatedAt": 1789479883.4487348
        },
        "headlineKo": "어플라이드 머티어리얼즈 vs. 퀄컴: 2026년에는 어느 기술주를 사는 것이 더 나을까요?"
      },
      {
        "headline": "Lam Research Vs. Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28f6ca7441b7edc9e5ca3bfa3061f8a841dc1bdfc9a8650623ed4e25fb39ff13",
        "datetime": 1789470049,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "경쟁사 진입 · 해자 점검",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?"
          ],
          "why": [
            "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $6.72, 30.0%, $9.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMAT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "성능·가격 비교",
            "실제 고객 수주",
            "기존 회사 점유율·마진"
          ],
          "interpretation": "AMAT에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "$6.72",
            "30.0%",
            "$9.12",
            "24.8%",
            "46%",
            "$150 billion",
            "$140",
            "$7.04"
          ],
          "sourceExcerpt": [
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?"
          ],
          "analysisUpdatedAt": 1789479885.7344294
        },
        "headlineKo": "램리서치 vs. Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?"
      },
      {
        "headline": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ab1e1cd50b50858b11d889d162fcc50166258f5a189d9c817c451f30ab98b42",
        "datetime": 1789430130,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "AMAT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 AMAT의 사업과 관련된 'Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "AMAT 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479887.4204035
        },
        "headlineKo": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology 및 MACOM 주식이 하락하고 있습니다. 알아야 할 사항"
      },
      {
        "headline": "Chip Equipment Stocks Slide as AI Pacing Call Reaches Fab Spending: Applied Materials and Lam Research Fall 6%, ASML Sinks 5%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc44bdc8f76f0c1eac85348fbfa20d94e3946efc3398fc096a2a44326f03af90",
        "datetime": 1789397549,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주가 하락: Applied Materials 및 Lam Research는 6% 하락, ASML은 5% 하락"
      },
      {
        "headline": "Applied Materials Shares Fall 5.8% as Semiconductor Stocks Decline",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=36f018ce01cba4410c80f0f4e5464fe693f539a7c3792438bf0de916c4c7813c",
        "datetime": 1789387483,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "반도체 주가 하락으로 어플라이드 머티어리얼즈 주가 5.8% 하락"
      }
    ],
    "newsHistory": [
      {
        "headline": "Applied Materials vs. Qualcomm: Which Tech Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45da079c6df91916bb73bfc99fcc10f7c4724d722da16eb42437cb64d43331ee",
        "datetime": 1789473901,
        "headlineKo": "어플라이드 머티어리얼즈 vs. 퀄컴: 2026년에는 어느 기술주를 사는 것이 더 나을까요?",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "규제·법무 · 비선형 위험",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Qualcomm: 2026년에는 어느 기술주를 매수하는 것이 더 나은가요?",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 2026년 디지털 경제가 성숙해지면서 많은 투자자들이 칩 제조 도구를 만드는 회사와 칩 제작 도구를 만드는 회사 중에서 선택하고 있습니다.",
            "Applied Materials(AMAT -7.07%) 또는 QUALCOMM(QCOM -1.00%)을 선호해야 합니까?"
          ],
          "why": [
            "규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 7.07%, 1.00%, 19% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "정부 규칙이나 소송 때문에 팔 수 있는 제품과 지역이 달라질 수 있다는 뜻입니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMAT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 규제 적용일·대상 제품",
            "회사의 매출 영향 추정",
            "대체 제품·지역 판매"
          ],
          "interpretation": "AMAT에 대한 규제·법무 · 비선형 위험 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 규제와 수출 제한은 매출 시장·제품 출하·비용을 동시에 바꿀 수 있어 공식 문서의 적용 범위를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "7.07%",
            "1.00%",
            "19%",
            "15%",
            "$28.4 billion",
            "4.4%",
            "$7 billion",
            "$7.2 billion"
          ],
          "sourceExcerpt": [
            "Qualcomm: Which Tech Stock Is a Better Buy in 2026?",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool As the digital economy matures in 2026, many investors are choosing between the companies that build chipmaking tools and those tha",
            "Should you favor Applied Materials ( AMAT -7.07% ) or QUALCOMM ( QCOM -1.00% ) ?"
          ],
          "analysisUpdatedAt": 1789479883.4487348
        }
      },
      {
        "headline": "Lam Research Vs. Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28f6ca7441b7edc9e5ca3bfa3061f8a841dc1bdfc9a8650623ed4e25fb39ff13",
        "datetime": 1789470049,
        "headlineKo": "램리서치 vs. Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "경쟁사 진입 · 해자 점검",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?"
          ],
          "why": [
            "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $6.72, 30.0%, $9.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "AMAT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "AMAT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "성능·가격 비교",
            "실제 고객 수주",
            "기존 회사 점유율·마진"
          ],
          "interpretation": "AMAT에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "$6.72",
            "30.0%",
            "$9.12",
            "24.8%",
            "46%",
            "$150 billion",
            "$140",
            "$7.04"
          ],
          "sourceExcerpt": [
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?"
          ],
          "analysisUpdatedAt": 1789479885.7344294
        }
      },
      {
        "headline": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ab1e1cd50b50858b11d889d162fcc50166258f5a189d9c817c451f30ab98b42",
        "datetime": 1789430130,
        "headlineKo": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology 및 MACOM 주식이 하락하고 있습니다. 알아야 할 사항",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "AMAT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 AMAT의 사업과 관련된 'Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "AMAT 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479887.4204035
        }
      },
      {
        "headline": "Chip Equipment Stocks Slide as AI Pacing Call Reaches Fab Spending: Applied Materials and Lam Research Fall 6%, ASML Sinks 5%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc44bdc8f76f0c1eac85348fbfa20d94e3946efc3398fc096a2a44326f03af90",
        "datetime": 1789397549,
        "headlineKo": "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주가 하락: Applied Materials 및 Lam Research는 6% 하락, ASML은 5% 하락",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Applied Materials Shares Fall 5.8% as Semiconductor Stocks Decline",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=36f018ce01cba4410c80f0f4e5464fe693f539a7c3792438bf0de916c4c7813c",
        "datetime": 1789387483,
        "headlineKo": "반도체 주가 하락으로 어플라이드 머티어리얼즈 주가 5.8% 하락",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:44",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "LRCX": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 2.2199,
      "revenueEstimate": 8306592543
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Lam Research Vs. Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28f6ca7441b7edc9e5ca3bfa3061f8a841dc1bdfc9a8650623ed4e25fb39ff13",
        "datetime": 1789470049,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "경쟁사 진입 · 해자 점검",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?"
          ],
          "why": [
            "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $6.72, 30.0%, $9.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "LRCX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "성능·가격 비교",
            "실제 고객 수주",
            "기존 회사 점유율·마진"
          ],
          "interpretation": "LRCX에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "$6.72",
            "30.0%",
            "$9.12",
            "24.8%",
            "46%",
            "$150 billion",
            "$140",
            "$7.04"
          ],
          "sourceExcerpt": [
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?"
          ],
          "analysisUpdatedAt": 1789479894.9544623
        },
        "headlineKo": "램리서치 vs. Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?"
      },
      {
        "headline": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ab1e1cd50b50858b11d889d162fcc50166258f5a189d9c817c451f30ab98b42",
        "datetime": 1789430130,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "LRCX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 LRCX의 사업과 관련된 'Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "LRCX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479897.1437666
        },
        "headlineKo": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology 및 MACOM 주식이 하락하고 있습니다. 알아야 할 사항"
      },
      {
        "headline": "Chip Equipment Stocks Slide as AI Pacing Call Reaches Fab Spending: Applied Materials and Lam Research Fall 6%, ASML Sinks 5%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc44bdc8f76f0c1eac85348fbfa20d94e3946efc3398fc096a2a44326f03af90",
        "datetime": 1789397549,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주식 하락: Applied Materials 및 Lam Research는 6% 하락하고 ASML은 5% 하락 - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "작성자 David Moadel 2026년 9월 14일 오전 10시 52분(ET) 게시 · 4분 읽기 Market Movers 데스크."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 6%, 5%, $429.71, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "LRCX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "LRCX에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "6%",
            "5%",
            "$429.71,",
            "$279.18,",
            "$1,606.66.",
            "22%",
            "$9.12 billion",
            "25%"
          ],
          "sourceExcerpt": [
            "Chip Equipment Stocks Slide as AI Pacing Call Reaches Fab Spending: Applied Materials and Lam Research Fall 6%, ASML Sinks 5% - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By David Moadel Published September 14, 2026, 10:52am ET · 4 min read Market Movers desk."
          ],
          "analysisUpdatedAt": 1789479900.1693225
        },
        "headlineKo": "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주가 하락: Applied Materials 및 Lam Research는 6% 하락, ASML은 5% 하락"
      },
      {
        "headline": "Lam Research Lifts 2026 WFE Outlook as AI Demand Strains Fab Capacity",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4dbc75a57c4e859b98ec8c7067a71a973246a7f1393faa131dee7f0b8e4dcd6f",
        "datetime": 1789149749,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Lam Research, AI 수요로 인해 Fab 용량이 부담됨에 따라 2026년 WFE 전망 상향"
      },
      {
        "headline": "Lam Research Sees Sold-Out Chip Demand, Targets Capacity and AI Service Gains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fbb7649df533dc71d3586e35a5c2dfda8b3be77f5a9757095615a9a3f59d92ea",
        "datetime": 1789142613,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Lam Research는 매진된 칩 수요를 확인하고 용량 및 AI 서비스 이익을 목표로 삼고 있습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Lam Research Vs. Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=28f6ca7441b7edc9e5ca3bfa3061f8a841dc1bdfc9a8650623ed4e25fb39ff13",
        "datetime": 1789470049,
        "headlineKo": "램리서치 vs. Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "경쟁사 진입 · 해자 점검",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Applied Materials: ASML 주가 상승을 실제로 돕는 사람은 누구입니까?"
          ],
          "why": [
            "경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $6.72, 30.0%, $9.12 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "새 경쟁자가 같은 시장에 들어왔다는 뜻입니다. 제품 발표만으로 기존 회사 매출이 바로 줄지는 않습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "LRCX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "성능·가격 비교",
            "실제 고객 수주",
            "기존 회사 점유율·마진"
          ],
          "interpretation": "LRCX에 대한 경쟁사 진입 · 해자 점검 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 경쟁사의 신제품·시장 진입은 가격·점유율·고객 선택에 영향을 줄 수 있어 성능과 실제 수주를 확인해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "$6.72",
            "30.0%",
            "$9.12",
            "24.8%",
            "46%",
            "$150 billion",
            "$140",
            "$7.04"
          ],
          "sourceExcerpt": [
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Applied Materials: Who Actually Helps ASML Share Prices Rise Higher?"
          ],
          "analysisUpdatedAt": 1789479894.9544623
        }
      },
      {
        "headline": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3ab1e1cd50b50858b11d889d162fcc50166258f5a189d9c817c451f30ab98b42",
        "datetime": 1789430130,
        "headlineKo": "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology 및 MACOM 주식이 하락하고 있습니다. 알아야 할 사항",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "LRCX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 LRCX의 사업과 관련된 'Applied Materials, Lam Research, Monolithic Power Systems, Marvell Technology, and MACOM Shares Are Falling, What You Need To Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "LRCX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479897.1437666
        }
      },
      {
        "headline": "Chip Equipment Stocks Slide as AI Pacing Call Reaches Fab Spending: Applied Materials and Lam Research Fall 6%, ASML Sinks 5%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dc44bdc8f76f0c1eac85348fbfa20d94e3946efc3398fc096a2a44326f03af90",
        "datetime": 1789397549,
        "headlineKo": "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주가 하락: Applied Materials 및 Lam Research는 6% 하락, ASML은 5% 하락",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "AI 페이싱 요청이 Fab 지출에 도달함에 따라 칩 장비 주식 하락: Applied Materials 및 Lam Research는 6% 하락하고 ASML은 5% 하락 - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "작성자 David Moadel 2026년 9월 14일 오전 10시 52분(ET) 게시 · 4분 읽기 Market Movers 데스크."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 6%, 5%, $429.71, — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "LRCX의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "LRCX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "LRCX에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "6%",
            "5%",
            "$429.71,",
            "$279.18,",
            "$1,606.66.",
            "22%",
            "$9.12 billion",
            "25%"
          ],
          "sourceExcerpt": [
            "Chip Equipment Stocks Slide as AI Pacing Call Reaches Fab Spending: Applied Materials and Lam Research Fall 6%, ASML Sinks 5% - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By David Moadel Published September 14, 2026, 10:52am ET · 4 min read Market Movers desk."
          ],
          "analysisUpdatedAt": 1789479900.1693225
        }
      },
      {
        "headline": "Lam Research Lifts 2026 WFE Outlook as AI Demand Strains Fab Capacity",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4dbc75a57c4e859b98ec8c7067a71a973246a7f1393faa131dee7f0b8e4dcd6f",
        "datetime": 1789149749,
        "headlineKo": "Lam Research, AI 수요로 인해 Fab 용량이 부담됨에 따라 2026년 WFE 전망 상향",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Lam Research Sees Sold-Out Chip Demand, Targets Capacity and AI Service Gains",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fbb7649df533dc71d3586e35a5c2dfda8b3be77f5a9757095615a9a3f59d92ea",
        "datetime": 1789142613,
        "headlineKo": "Lam Research는 매진된 칩 수요를 확인하고 용량 및 AI 서비스 이익을 목표로 삼고 있습니다.",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:45",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "KLAC": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-27",
      "hour": "",
      "epsEstimate": 1.2005,
      "revenueEstimate": 4119385586
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Why KLA (KLAC) Outpaced the Stock Market Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7066da30a5f4060292fcffc77dfb2894caf4915b22d4be33d228f4cea8629a08",
        "datetime": 1789164002,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Why KLA (KLAC) Outpaced the Stock Market Today",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "KLAC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 KLAC의 사업과 관련된 'Why KLA (KLAC) Outpaced the Stock Market Today' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "KLAC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479907.7116067
        },
        "headlineKo": "KLA(KLAC)가 오늘 주식 시장을 앞지른 이유"
      },
      {
        "headline": "KLA Corporation (KLAC) Presents at Goldman Sachs Communacopia + Technology Conference 2026 Transcript",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0d53ed14ef8db49a86874b24f1eb87308398ea3d24cba0dd0e4348243b50c820",
        "datetime": 1789140424,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "KLA Corporation (KLAC) Presents at Goldman Sachs Communacopia + Technology Conference 2026 Transcript",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "KLAC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 KLAC의 사업과 관련된 'KLA Corporation (KLAC) Presents at Goldman Sachs Communacopia + Technology Conference 2026 Transcript' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "KLAC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479908.747638
        },
        "headlineKo": "KLA Corporation(KLAC), Goldman Sachs Communacopia + Technology Conference 2026에서 발표"
      },
      {
        "headline": "JPMorgan names KLA top chip-equipment pick, lifts WFE forecasts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6f80b9a6d7d77090a4f167b42491b3080d1c369489ee116ef60561863a89d62",
        "datetime": 1789126456,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "JPMorgan names KLA top chip-equipment pick, lifts WFE forecasts",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "KLAC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 KLAC의 사업과 관련된 'JPMorgan names KLA top chip-equipment pick, lifts WFE forecasts' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "KLAC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479910.8016598
        },
        "headlineKo": "JPMorgan은 KLA를 최고의 칩 장비로 선정하고 WFE 예측을 상향 조정했습니다."
      },
      {
        "headline": "KLA (KLAC) Dips More Than Broader Market: What You Should Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6f1ff8177424be5419ddc4120ad737a16ba641312d3c218a7062b398a990a622",
        "datetime": 1789078504,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "KLA(KLAC)는 더 넓은 시장보다 더 하락합니다: 알아야 할 사항"
      },
      {
        "headline": "KLA Corporation (KLAC) Presents at Citi's 2026 Global TMT Conference Transcript",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bcd4dc69b1af14cfac3f37283270b599489774f19884fa933a8f56e413ba3ab7",
        "datetime": 1788956225,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "KLA Corporation(KLAC), Citi의 2026 글로벌 TMT 컨퍼런스 성적표에서 발표"
      }
    ],
    "newsHistory": [
      {
        "headline": "Why KLA (KLAC) Outpaced the Stock Market Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7066da30a5f4060292fcffc77dfb2894caf4915b22d4be33d228f4cea8629a08",
        "datetime": 1789164002,
        "headlineKo": "KLA(KLAC)가 오늘 주식 시장을 앞지른 이유",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Why KLA (KLAC) Outpaced the Stock Market Today",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "KLAC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 KLAC의 사업과 관련된 'Why KLA (KLAC) Outpaced the Stock Market Today' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "KLAC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479907.7116067
        }
      },
      {
        "headline": "KLA Corporation (KLAC) Presents at Goldman Sachs Communacopia + Technology Conference 2026 Transcript",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=0d53ed14ef8db49a86874b24f1eb87308398ea3d24cba0dd0e4348243b50c820",
        "datetime": 1789140424,
        "headlineKo": "KLA Corporation(KLAC), Goldman Sachs Communacopia + Technology Conference 2026에서 발표",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "KLA Corporation (KLAC) Presents at Goldman Sachs Communacopia + Technology Conference 2026 Transcript",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "KLAC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 KLAC의 사업과 관련된 'KLA Corporation (KLAC) Presents at Goldman Sachs Communacopia + Technology Conference 2026 Transcript' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "KLAC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479908.747638
        }
      },
      {
        "headline": "JPMorgan names KLA top chip-equipment pick, lifts WFE forecasts",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b6f80b9a6d7d77090a4f167b42491b3080d1c369489ee116ef60561863a89d62",
        "datetime": 1789126456,
        "headlineKo": "JPMorgan은 KLA를 최고의 칩 장비로 선정하고 WFE 예측을 상향 조정했습니다.",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "JPMorgan names KLA top chip-equipment pick, lifts WFE forecasts",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "KLAC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 KLAC의 사업과 관련된 'JPMorgan names KLA top chip-equipment pick, lifts WFE forecasts' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "KLAC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.5,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479910.8016598
        }
      },
      {
        "headline": "KLA (KLAC) Dips More Than Broader Market: What You Should Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6f1ff8177424be5419ddc4120ad737a16ba641312d3c218a7062b398a990a622",
        "datetime": 1789078504,
        "headlineKo": "KLA(KLAC)는 더 넓은 시장보다 더 하락합니다: 알아야 할 사항",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "KLA Corporation (KLAC) Presents at Citi's 2026 Global TMT Conference Transcript",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=bcd4dc69b1af14cfac3f37283270b599489774f19884fa933a8f56e413ba3ab7",
        "datetime": 1788956225,
        "headlineKo": "KLA Corporation(KLAC), Citi의 2026 글로벌 TMT 컨퍼런스 성적표에서 발표",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:45",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "MU": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-09-30",
      "hour": "amc",
      "epsEstimate": 32.2164,
      "revenueEstimate": 52104999710
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "3 AI Stocks Poised to Outperform Micron and Sandisk as the Next Infrastructure Bottleneck Builds",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f360aa56f15b34bd05cab5f5f70875eec577478da7f8f69be14e92f44077be5",
        "datetime": 1789472700,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "차세대 인프라 병목 현상으로 인해 Micron 및 Sandisk를 능가할 AI 주식 3개 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron과 Sandisk가 두 해 동안 활동했습니다.",
            "AI 칩에서 메모리 칩으로 초점이 옮겨지면서 초기 투자자들에게는 엄청난 수익이 발생했고, 이 두 성장주를 놓친 사람들은 새로운 기회를 찾고 있습니다.",
            "AI 구축에서 더 많은 병목 현상이 명백해짐에 따라 이 세 가지 주식은 메모리 칩 거대 기업을 능가하는 데 필요한 역량을 갖추고 있을 수 있습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 3.81%, 3.81 %, $ 2.03 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "MU",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "MU에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "3.81%",
            "3.81 %",
            "$ 2.03",
            "$ 55.24",
            "$1.9",
            "$ 51.97",
            "$ 55.58",
            "$ 34.23"
          ],
          "sourceExcerpt": [
            "3 AI Stocks Poised to Outperform Micron and Sandisk as the Next Infrastructure Bottleneck Builds | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron and Sandisk have been two o",
            "The shifting focus from AI chips to memory chips produced tremendous returns for early investors, and people who missed out on those two growth stocks are eying new opportunities.",
            "These three stocks may have what it takes to outperform the memory chip giants as more bottlenecks become apparent in the AI buildout."
          ],
          "analysisUpdatedAt": 1789479919.92435
        },
        "headlineKo": "차세대 인프라 병목 현상으로 인해 Micron 및 Sandisk를 능가할 3가지 AI 주식"
      },
      {
        "headline": "Micron Sits Far Below Wall Street’s Target. Here’s What Gets It There.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4ce09e657247d4c4c09fe49c72cb6549457bde117977213d449397a866df3a7",
        "datetime": 1789472119,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "AI 투자 변화 · 수요와 현금 부담",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "마이크론은 월스트리트의 목표보다 훨씬 낮습니다.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "마이크론의 주가는 이미 수백 퍼센트나 뛰었지만 월스트리트의 합의 목표는 훨씬 더 높으며 한 평가 모델은 가격이 실제로 어디에 속하는지에 대해 매우 다른 이야기를 합니다."
          ],
          "why": [
            "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $933.44, $1,513.11., $1.1 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "MU",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "실제 CAPEX 집행",
            "공급업체 수주·매출",
            "투자 기업 OCF·FCF·부채"
          ],
          "interpretation": "MU에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "$933.44",
            "$1,513.11.",
            "$1.1 trillion",
            "223.8%",
            "487.7%",
            "$154.65.",
            "9.1%",
            "$924.03,"
          ],
          "sourceExcerpt": [
            "Micron Sits Far Below Wall Street's Target.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Micron's stock has already sprinted hundreds of percent, yet Wall Street's consensus target is even higher while one valuation model tells a very different story about where the price actually belongs."
          ],
          "analysisUpdatedAt": 1789479922.702126
        },
        "headlineKo": "마이크론은 월스트리트의 목표보다 훨씬 낮습니다. 여기에 그 내용이 나와 있습니다."
      },
      {
        "headline": "Where Will Micron Technology Stock Be in 10 Years? Here's What History Says Could Come Next",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=161a4e1a825c7fae67e69a796a631d6e5b76f061f5f2a505bec8a28c86983cf8",
        "datetime": 1789468560,
        "relevance": 1.0,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "공급망 · 생산 차질 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "10년 후 Micron Technology 주식은 어디에 있을까요?",
            "역사가 다음에 올 수 있다고 말하는 것은 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% 잡다한 바보에 합류하세요 장기적으로 주식 시장 투자는 부를 창출하는 기계입니다.",
            "그리고 Micron Technology(MU -5.25%)보다 이를 더 잘 보여주는 회사는 거의 없습니다."
          ],
          "why": [
            "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 5.25%, $10,000, $550,790 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "MU",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "출하 지연 기간",
            "재고와 리드타임",
            "매출총이익률·대체 공급처"
          ],
          "interpretation": "MU에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1.0,
          "quality": "medium",
          "verifiedNumbers": [
            "5.25%",
            "$10,000",
            "$550,790",
            "$5,410",
            "346%",
            "$41.5 billion",
            "84.6%",
            "$24.67."
          ],
          "sourceExcerpt": [
            "Where Will Micron Technology Stock Be in 10 Years?",
            "Here's What History Says Could Come Next | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Over the long haul, stock market investing is a wealth-generating machine.",
            "And few companies exemplify this better than Micron Technology ( MU -5.25% ) ."
          ],
          "analysisUpdatedAt": 1789479926.2550426
        },
        "headlineKo": "10년 후 Micron Technology 주식은 어디에 있을까요? 역사가 다음에 올 수 있다고 말하는 것은 다음과 같습니다."
      },
      {
        "headline": "Watch Out SKHY, MU, SNDK: Japan’s Kioxia Reportedly Eyes $10B US Listing To Ride AI Memory Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a98ae0ca329afb8b781d88770532343287f62f1fa376ffa6883bd19032c5434",
        "datetime": 1789458532,
        "relevance": 0.75,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "SKHY, MU, SNDK를 조심하세요: 일본의 KIOXIA는 AI 메모리 붐을 타고 100억 달러 규모의 미국 상장을 주목하고 있는 것으로 알려졌습니다."
      },
      {
        "headline": "Prediction: Micron Stock Will Hit $1,250 After Sept. 30",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=923a2b57a46feb6aa5023765521668c593dbced86624296e98dbf301534fe4c0",
        "datetime": 1789446000,
        "relevance": 0.5,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "예측: Micron 주식은 9월 30일 이후 $1,250에 도달할 것입니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "3 AI Stocks Poised to Outperform Micron and Sandisk as the Next Infrastructure Bottleneck Builds",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1f360aa56f15b34bd05cab5f5f70875eec577478da7f8f69be14e92f44077be5",
        "datetime": 1789472700,
        "headlineKo": "차세대 인프라 병목 현상으로 인해 Micron 및 Sandisk를 능가할 3가지 AI 주식",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "차세대 인프라 병목 현상으로 인해 Micron 및 Sandisk를 능가할 AI 주식 3개 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron과 Sandisk가 두 해 동안 활동했습니다.",
            "AI 칩에서 메모리 칩으로 초점이 옮겨지면서 초기 투자자들에게는 엄청난 수익이 발생했고, 이 두 성장주를 놓친 사람들은 새로운 기회를 찾고 있습니다.",
            "AI 구축에서 더 많은 병목 현상이 명백해짐에 따라 이 세 가지 주식은 메모리 칩 거대 기업을 능가하는 데 필요한 역량을 갖추고 있을 수 있습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 3.81%, 3.81 %, $ 2.03 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "MU",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "MU에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "3.81%",
            "3.81 %",
            "$ 2.03",
            "$ 55.24",
            "$1.9",
            "$ 51.97",
            "$ 55.58",
            "$ 34.23"
          ],
          "sourceExcerpt": [
            "3 AI Stocks Poised to Outperform Micron and Sandisk as the Next Infrastructure Bottleneck Builds | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Micron and Sandisk have been two o",
            "The shifting focus from AI chips to memory chips produced tremendous returns for early investors, and people who missed out on those two growth stocks are eying new opportunities.",
            "These three stocks may have what it takes to outperform the memory chip giants as more bottlenecks become apparent in the AI buildout."
          ],
          "analysisUpdatedAt": 1789479919.92435
        }
      },
      {
        "headline": "Micron Sits Far Below Wall Street’s Target. Here’s What Gets It There.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d4ce09e657247d4c4c09fe49c72cb6549457bde117977213d449397a866df3a7",
        "datetime": 1789472119,
        "headlineKo": "마이크론은 월스트리트의 목표보다 훨씬 낮습니다. 여기에 그 내용이 나와 있습니다.",
        "relevance": 0.5,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "AI 투자 변화 · 수요와 현금 부담",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "마이크론은 월스트리트의 목표보다 훨씬 낮습니다.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "마이크론의 주가는 이미 수백 퍼센트나 뛰었지만 월스트리트의 합의 목표는 훨씬 더 높으며 한 평가 모델은 가격이 실제로 어디에 속하는지에 대해 매우 다른 이야기를 합니다."
          ],
          "why": [
            "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $933.44, $1,513.11., $1.1 trillion — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "MU",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "실제 CAPEX 집행",
            "공급업체 수주·매출",
            "투자 기업 OCF·FCF·부채"
          ],
          "interpretation": "MU에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.5,
          "quality": "medium",
          "verifiedNumbers": [
            "$933.44",
            "$1,513.11.",
            "$1.1 trillion",
            "223.8%",
            "487.7%",
            "$154.65.",
            "9.1%",
            "$924.03,"
          ],
          "sourceExcerpt": [
            "Micron Sits Far Below Wall Street's Target.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Micron's stock has already sprinted hundreds of percent, yet Wall Street's consensus target is even higher while one valuation model tells a very different story about where the price actually belongs."
          ],
          "analysisUpdatedAt": 1789479922.702126
        }
      },
      {
        "headline": "Where Will Micron Technology Stock Be in 10 Years? Here's What History Says Could Come Next",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=161a4e1a825c7fae67e69a796a631d6e5b76f061f5f2a505bec8a28c86983cf8",
        "datetime": 1789468560,
        "headlineKo": "10년 후 Micron Technology 주식은 어디에 있을까요? 역사가 다음에 올 수 있다고 말하는 것은 다음과 같습니다.",
        "relevance": 1.0,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "공급망 · 생산 차질 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "10년 후 Micron Technology 주식은 어디에 있을까요?",
            "역사가 다음에 올 수 있다고 말하는 것은 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ 주식 고문 + ---% 잡다한 바보에 합류하세요 장기적으로 주식 시장 투자는 부를 창출하는 기계입니다.",
            "그리고 Micron Technology(MU -5.25%)보다 이를 더 잘 보여주는 회사는 거의 없습니다."
          ],
          "why": [
            "부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 5.25%, $10,000, $550,790 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "MU의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "주문은 있어도 부품이나 생산 문제로 제때 팔지 못할 수 있다는 뉴스입니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "MU",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "출하 지연 기간",
            "재고와 리드타임",
            "매출총이익률·대체 공급처"
          ],
          "interpretation": "MU에 대한 공급망 · 생산 차질 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 부품 부족과 생산 지연은 출하량·재고·마진에 순차적으로 반영될 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1.0,
          "quality": "medium",
          "verifiedNumbers": [
            "5.25%",
            "$10,000",
            "$550,790",
            "$5,410",
            "346%",
            "$41.5 billion",
            "84.6%",
            "$24.67."
          ],
          "sourceExcerpt": [
            "Where Will Micron Technology Stock Be in 10 Years?",
            "Here's What History Says Could Come Next | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Over the long haul, stock market investing is a wealth-generating machine.",
            "And few companies exemplify this better than Micron Technology ( MU -5.25% ) ."
          ],
          "analysisUpdatedAt": 1789479926.2550426
        }
      },
      {
        "headline": "Watch Out SKHY, MU, SNDK: Japan’s Kioxia Reportedly Eyes $10B US Listing To Ride AI Memory Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a98ae0ca329afb8b781d88770532343287f62f1fa376ffa6883bd19032c5434",
        "datetime": 1789458532,
        "headlineKo": "SKHY, MU, SNDK를 조심하세요: 일본의 KIOXIA는 AI 메모리 붐을 타고 100억 달러 규모의 미국 상장을 주목하고 있는 것으로 알려졌습니다.",
        "relevance": 0.75,
        "keywordFlag": false
      },
      {
        "headline": "Prediction: Micron Stock Will Hit $1,250 After Sept. 30",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=923a2b57a46feb6aa5023765521668c593dbced86624296e98dbf301534fe4c0",
        "datetime": 1789446000,
        "headlineKo": "예측: Micron 주식은 9월 30일 이후 $1,250에 도달할 것입니다.",
        "relevance": 0.5,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:45",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "SNDK": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 47.0782,
      "revenueEstimate": 10842310136
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Watch Out SKHY, MU, SNDK: Japan’s Kioxia Reportedly Eyes $10B US Listing To Ride AI Memory Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a98ae0ca329afb8b781d88770532343287f62f1fa376ffa6883bd19032c5434",
        "datetime": 1789458532,
        "relevance": 1.0,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "SKHY, MU, SNDK를 조심하세요: 일본의 KIOXIA가 AI 메모리 붐을 타기 위해 100억 달러 규모의 미국 상장을 주목하고 있는 것으로 알려졌습니다. 새로운 에이전트 연결 트렌드 뉴스 수익 전체 DIA 0.52% SPY 0.12% QQQ 0.01% 트렌드 RDDT 0.73% FPS 8.76% VERA 0.06% PLAY 12.40% AXON 5.95%",
            "SKHY, MU, SNDK 조심: 일본의 KIOXIA는 AI 메모리 붐을 타기 위해 100억 달러 규모의 미국 상장을 주목하고 있는 것으로 알려졌습니다. 이 회사의 도쿄 상장 주식은 올해 거의 400% 급등하여 시장 가치가 약 1,830억 달러에 이르렀습니다.",
            "노트북 RAM에 칩이 보입니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $10, 0.52%, 0.12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "SNDK",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "SNDK에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1.0,
          "quality": "medium",
          "verifiedNumbers": [
            "$10",
            "0.52%",
            "0.12%",
            "0.01%",
            "0.73%",
            "8.76%",
            "0.06%",
            "12.40%"
          ],
          "sourceExcerpt": [
            "Watch Out SKHY, MU, SNDK: Japan’s Kioxia Reportedly Eyes $10B US Listing To Ride AI Memory Boom New Connect your Agent Trending News Earnings All DIA 0.52% SPY 0.12% QQQ 0.01% Trending RDDT 0.73% FPS 8.76% VERA 0.06% PLAY 12.40% AXON 5.95% ",
            "Watch Out SKHY, MU, SNDK: Japan’s Kioxia Reportedly Eyes $10B US Listing To Ride AI Memory Boom The company’s Tokyo-listed shares have surged almost 400% this year, giving it a market value of about $183 billion.",
            "Chips are seen on a notebook's RAM."
          ],
          "analysisUpdatedAt": 1789479935.0545194
        },
        "headlineKo": "SKHY, MU, SNDK를 조심하세요: 일본의 KIOXIA는 AI 메모리 붐을 타고 100억 달러 규모의 미국 상장을 주목하고 있는 것으로 알려졌습니다."
      },
      {
        "headline": "Dow Jones Futures: Nvidia, Micron, Sandisk Dive On AI Fears; Fed Rate Hike Looms",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3086ce98c2030ae87a703075da360704d392c311f567a47242863841cfaa49f4",
        "datetime": 1789424968,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Dow Jones Futures: Nvidia, Micron, Sandisk Dive On AI Fears; Fed Rate Hike Looms",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "SNDK",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 SNDK의 사업과 관련된 'Dow Jones Futures: Nvidia, Micron, Sandisk Dive On AI Fears; Fed Rate Hike Looms' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "SNDK 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479936.8305466
        },
        "headlineKo": "다우존스 선물: Nvidia, Micron, Sandisk AI 우려에 대한 다이빙; 연준 금리 인상 가능성"
      },
      {
        "headline": "Should You Buy SanDisk Stock Because It Has Started Retiring Its Own Shares?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0a6793ba3a2c331f1f62688ec5ecc953b11ea5b426897bc3da48486cc550ac5",
        "datetime": 1789413156,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "장기 공급계약 · 매출 가시성 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?",
            "| Trefis는 자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?",
            "2026년 9월 14일 · Trefis Team SNDK YTD +553.8% SPY YTD +11.9% QQQ YTD +15.6% SNDK 분석 → SanDisk(SNDK) 주가는 지난 12개월 동안 80달러 미만에서 1,650달러 이상으로 급등하여 20배 이상 상승했습니다."
          ],
          "why": [
            "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 553.8%, 11.9%, 15.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "SNDK",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "계약 기간·최소구매 조건",
            "연도별 매출 인식",
            "수주잔고·취소 조건"
          ],
          "interpretation": "SNDK에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "553.8%",
            "11.9%",
            "15.6%",
            "$80",
            "$1,650",
            "13%",
            "30%",
            "$2,354"
          ],
          "sourceExcerpt": [
            "Should You Buy SanDisk Stock Because It Has Started Retiring Its Own Shares?",
            "| Trefis Should You Buy SanDisk Stock Because It Has Started Retiring Its Own Shares?",
            "September 14th, 2026 · by Trefis Team SNDK YTD +553.8% SPY YTD +11.9% QQQ YTD +15.6% Analyze SNDK → SanDisk (SNDK) shares have surged from below $80 to over $1,650 over the past twelve months—a more than twentyfold run—and while they have g"
          ],
          "analysisUpdatedAt": 1789479940.8708143
        },
        "headlineKo": "자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?"
      },
      {
        "headline": "SanDisk Falls 4.6% With Prices Driving Two-Thirds of Its Quarterly Sales Jump",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=692c1605946878aae78ada777307520432842230ce8a54202785627a782c8da9",
        "datetime": 1789407574,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "SanDisk는 분기별 매출 증가의 3분의 2를 견인하는 가격으로 4.6% 하락했습니다."
      },
      {
        "headline": "Why Sandisk Stock Crashed Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c89e88d4d51eda639f9819d957c72b79af671a47ec2e5aa6d63c930eaa02bc9c",
        "datetime": 1789399105,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "오늘 Sandisk 주식이 폭락한 이유"
      }
    ],
    "newsHistory": [
      {
        "headline": "Watch Out SKHY, MU, SNDK: Japan’s Kioxia Reportedly Eyes $10B US Listing To Ride AI Memory Boom",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4a98ae0ca329afb8b781d88770532343287f62f1fa376ffa6883bd19032c5434",
        "datetime": 1789458532,
        "headlineKo": "SKHY, MU, SNDK를 조심하세요: 일본의 KIOXIA는 AI 메모리 붐을 타고 100억 달러 규모의 미국 상장을 주목하고 있는 것으로 알려졌습니다.",
        "relevance": 1.0,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "SKHY, MU, SNDK를 조심하세요: 일본의 KIOXIA가 AI 메모리 붐을 타기 위해 100억 달러 규모의 미국 상장을 주목하고 있는 것으로 알려졌습니다. 새로운 에이전트 연결 트렌드 뉴스 수익 전체 DIA 0.52% SPY 0.12% QQQ 0.01% 트렌드 RDDT 0.73% FPS 8.76% VERA 0.06% PLAY 12.40% AXON 5.95%",
            "SKHY, MU, SNDK 조심: 일본의 KIOXIA는 AI 메모리 붐을 타기 위해 100억 달러 규모의 미국 상장을 주목하고 있는 것으로 알려졌습니다. 이 회사의 도쿄 상장 주식은 올해 거의 400% 급등하여 시장 가치가 약 1,830억 달러에 이르렀습니다.",
            "노트북 RAM에 칩이 보입니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $10, 0.52%, 0.12% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "SNDK",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "SNDK에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1.0,
          "quality": "medium",
          "verifiedNumbers": [
            "$10",
            "0.52%",
            "0.12%",
            "0.01%",
            "0.73%",
            "8.76%",
            "0.06%",
            "12.40%"
          ],
          "sourceExcerpt": [
            "Watch Out SKHY, MU, SNDK: Japan’s Kioxia Reportedly Eyes $10B US Listing To Ride AI Memory Boom New Connect your Agent Trending News Earnings All DIA 0.52% SPY 0.12% QQQ 0.01% Trending RDDT 0.73% FPS 8.76% VERA 0.06% PLAY 12.40% AXON 5.95% ",
            "Watch Out SKHY, MU, SNDK: Japan’s Kioxia Reportedly Eyes $10B US Listing To Ride AI Memory Boom The company’s Tokyo-listed shares have surged almost 400% this year, giving it a market value of about $183 billion.",
            "Chips are seen on a notebook's RAM."
          ],
          "analysisUpdatedAt": 1789479935.0545194
        }
      },
      {
        "headline": "Dow Jones Futures: Nvidia, Micron, Sandisk Dive On AI Fears; Fed Rate Hike Looms",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3086ce98c2030ae87a703075da360704d392c311f567a47242863841cfaa49f4",
        "datetime": 1789424968,
        "headlineKo": "다우존스 선물: Nvidia, Micron, Sandisk AI 우려에 대한 다이빙; 연준 금리 인상 가능성",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Dow Jones Futures: Nvidia, Micron, Sandisk Dive On AI Fears; Fed Rate Hike Looms",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "SNDK",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 SNDK의 사업과 관련된 'Dow Jones Futures: Nvidia, Micron, Sandisk Dive On AI Fears; Fed Rate Hike Looms' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "SNDK 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479936.8305466
        }
      },
      {
        "headline": "Should You Buy SanDisk Stock Because It Has Started Retiring Its Own Shares?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a0a6793ba3a2c331f1f62688ec5ecc953b11ea5b426897bc3da48486cc550ac5",
        "datetime": 1789413156,
        "headlineKo": "자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "positive",
          "certainty": "본문 기반 간이 분석",
          "label": "장기 공급계약 · 매출 가시성 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?",
            "| Trefis는 자체 주식 소각을 시작했기 때문에 SanDisk 주식을 구입해야 합니까?",
            "2026년 9월 14일 · Trefis Team SNDK YTD +553.8% SPY YTD +11.9% QQQ YTD +15.6% SNDK 분석 → SanDisk(SNDK) 주가는 지난 12개월 동안 80달러 미만에서 1,650달러 이상으로 급등하여 20배 이상 상승했습니다."
          ],
          "why": [
            "장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 553.8%, 11.9%, 15.6% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "SNDK의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "오랫동안 공급하기로 한 계약입니다. 계약 기간 전체 금액이 한 번에 매출로 잡히는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "SNDK",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "계약 기간·최소구매 조건",
            "연도별 매출 인식",
            "수주잔고·취소 조건"
          ],
          "interpretation": "SNDK에 대한 장기 공급계약 · 매출 가시성 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 장기 계약은 매출 가시성을 높일 수 있지만 최소구매 의무·취소 조건·실제 인식 시점이 확인돼야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "553.8%",
            "11.9%",
            "15.6%",
            "$80",
            "$1,650",
            "13%",
            "30%",
            "$2,354"
          ],
          "sourceExcerpt": [
            "Should You Buy SanDisk Stock Because It Has Started Retiring Its Own Shares?",
            "| Trefis Should You Buy SanDisk Stock Because It Has Started Retiring Its Own Shares?",
            "September 14th, 2026 · by Trefis Team SNDK YTD +553.8% SPY YTD +11.9% QQQ YTD +15.6% Analyze SNDK → SanDisk (SNDK) shares have surged from below $80 to over $1,650 over the past twelve months—a more than twentyfold run—and while they have g"
          ],
          "analysisUpdatedAt": 1789479940.8708143
        }
      },
      {
        "headline": "SanDisk Falls 4.6% With Prices Driving Two-Thirds of Its Quarterly Sales Jump",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=692c1605946878aae78ada777307520432842230ce8a54202785627a782c8da9",
        "datetime": 1789407574,
        "headlineKo": "SanDisk는 분기별 매출 증가의 3분의 2를 견인하는 가격으로 4.6% 하락했습니다.",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Why Sandisk Stock Crashed Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c89e88d4d51eda639f9819d957c72b79af671a47ec2e5aa6d63c930eaa02bc9c",
        "datetime": 1789399105,
        "headlineKo": "오늘 Sandisk 주식이 폭락한 이유",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:45",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "WDC": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 4.0949,
      "revenueEstimate": 4162115363
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Why Western Digital (WDC) Stock Is Trading Lower Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=08932665ba5bbd038ed81ee3781efc91a559366b1313c52568fb2cd220c21dd5",
        "datetime": 1789432050,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Why Western Digital (WDC) Stock Is Trading Lower Today",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "WDC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 WDC의 사업과 관련된 'Why Western Digital (WDC) Stock Is Trading Lower Today' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "WDC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479948.2848668
        },
        "headlineKo": "오늘 Western Digital(WDC) 주식이 하락세를 보이는 이유"
      },
      {
        "headline": "Western Digital (WDC) Falls More Steeply Than Broader Market: What Investors Need to Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11e6980996bbe6adec3ea0c19804db7ee4015e27fb700ba53cde4af2cb742213",
        "datetime": 1789422606,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Western Digital (WDC) Falls More Steeply Than Broader Market: What Investors Need to Know",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "WDC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 WDC의 사업과 관련된 'Western Digital (WDC) Falls More Steeply Than Broader Market: What Investors Need to Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "WDC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479950.0588546
        },
        "headlineKo": "Western Digital(WDC)은 더 넓은 시장보다 더 가파르게 하락합니다: 투자자가 알아야 할 사항"
      },
      {
        "headline": "Seagate Vs. Western Digital: One Moved First on AI Storage Demand. The Other Is Playing It Safe.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b1a6923e505450bebcd8832ef22ad0ab112689e242fd8cbf207cbf68ae354a8",
        "datetime": 1789394943,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Western Digital: AI 스토리지 수요에서 먼저 움직입니다.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Western Digital: AI 스토리지 수요에서 먼저 움직입니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $4.10 billion, $3.63, 48.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "WDC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "WDC에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "$4.10 billion",
            "$3.63",
            "48.5%",
            "$5.71",
            "$5.0932",
            "75%",
            "$3.75",
            "43.8%"
          ],
          "sourceExcerpt": [
            "Western Digital: One Moved First on AI Storage Demand.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Western Digital: One Moved First on AI Storage Demand."
          ],
          "analysisUpdatedAt": 1789479953.1835294
        },
        "headlineKo": "씨게이트 대. Western Digital: AI 스토리지 수요에서 먼저 움직입니다. 다른 하나는 안전하게 플레이하고 있습니다."
      },
      {
        "headline": "Western Digital Announces Redemption of 3.00% Convertible Senior Notes Due 2028",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f93128013f6809b81627755d9ce3acf44d08b5196f9baf4b50191be91731f29e",
        "datetime": 1789387200,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Western Digital, 2028년 만기 3.00% 전환선순위 채권 상환 발표"
      },
      {
        "headline": "Western Digital: More Consolidation Necessary - Multi-Year AI-Driven Tailwinds",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8a4f22638d10ca7a693a05aa25e2589a7c9c08f30aa17489ad54b7271d6fbb47",
        "datetime": 1789383605,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Western Digital: 더 많은 통합이 필요함 - 다년간의 AI 기반 순풍"
      }
    ],
    "newsHistory": [
      {
        "headline": "Why Western Digital (WDC) Stock Is Trading Lower Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=08932665ba5bbd038ed81ee3781efc91a559366b1313c52568fb2cd220c21dd5",
        "datetime": 1789432050,
        "headlineKo": "오늘 Western Digital(WDC) 주식이 하락세를 보이는 이유",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Why Western Digital (WDC) Stock Is Trading Lower Today",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "WDC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 WDC의 사업과 관련된 'Why Western Digital (WDC) Stock Is Trading Lower Today' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "WDC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479948.2848668
        }
      },
      {
        "headline": "Western Digital (WDC) Falls More Steeply Than Broader Market: What Investors Need to Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11e6980996bbe6adec3ea0c19804db7ee4015e27fb700ba53cde4af2cb742213",
        "datetime": 1789422606,
        "headlineKo": "Western Digital(WDC)은 더 넓은 시장보다 더 가파르게 하락합니다: 투자자가 알아야 할 사항",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Western Digital (WDC) Falls More Steeply Than Broader Market: What Investors Need to Know",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "WDC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 WDC의 사업과 관련된 'Western Digital (WDC) Falls More Steeply Than Broader Market: What Investors Need to Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "WDC 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479950.0588546
        }
      },
      {
        "headline": "Seagate Vs. Western Digital: One Moved First on AI Storage Demand. The Other Is Playing It Safe.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b1a6923e505450bebcd8832ef22ad0ab112689e242fd8cbf207cbf68ae354a8",
        "datetime": 1789394943,
        "headlineKo": "씨게이트 대. Western Digital: AI 스토리지 수요에서 먼저 움직입니다. 다른 하나는 안전하게 플레이하고 있습니다.",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Western Digital: AI 스토리지 수요에서 먼저 움직입니다.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Western Digital: AI 스토리지 수요에서 먼저 움직입니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $4.10 billion, $3.63, 48.5% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "WDC의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "WDC",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "WDC에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "$4.10 billion",
            "$3.63",
            "48.5%",
            "$5.71",
            "$5.0932",
            "75%",
            "$3.75",
            "43.8%"
          ],
          "sourceExcerpt": [
            "Western Digital: One Moved First on AI Storage Demand.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Western Digital: One Moved First on AI Storage Demand."
          ],
          "analysisUpdatedAt": 1789479953.1835294
        }
      },
      {
        "headline": "Western Digital Announces Redemption of 3.00% Convertible Senior Notes Due 2028",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f93128013f6809b81627755d9ce3acf44d08b5196f9baf4b50191be91731f29e",
        "datetime": 1789387200,
        "headlineKo": "Western Digital, 2028년 만기 3.00% 전환선순위 채권 상환 발표",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Western Digital: More Consolidation Necessary - Multi-Year AI-Driven Tailwinds",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=8a4f22638d10ca7a693a05aa25e2589a7c9c08f30aa17489ad54b7271d6fbb47",
        "datetime": 1789383605,
        "headlineKo": "Western Digital: 더 많은 통합이 필요함 - 다년간의 AI 기반 순풍",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:45",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "ANET": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 1.0953,
      "revenueEstimate": 3389867643
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Arista Networks (NYSE:ANET): High-Growth Leadership and Momentum in Focus",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=9ad16a21ad92f60c647e6cbd462229ba18fa741122112a8035808831db6dc684",
        "datetime": 1789462891,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Arista Networks (NYSE:ANET): High-Growth Leadership and Momentum in Focus",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ANET",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ANET의 사업과 관련된 'Arista Networks (NYSE:ANET): High-Growth Leadership and Momentum in Focus' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ANET 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479959.5474267
        },
        "headlineKo": "Arista Networks(NYSE:ANET): 고성장 리더십 및 추진력에 집중"
      },
      {
        "headline": "Arista Networks: AI Networking And EOS Drive Multi-Year Growth",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=312b56fa7853b1b2834578159e8ad320634140e78763c101d2c8a2b3854cf0c9",
        "datetime": 1789447456,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Arista Networks: AI Networking And EOS Drive Multi-Year Growth",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ANET",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ANET의 사업과 관련된 'Arista Networks: AI Networking And EOS Drive Multi-Year Growth' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ANET 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479960.633308
        },
        "headlineKo": "Arista Networks: AI 네트워킹과 EOS가 다년간의 성장을 주도합니다"
      },
      {
        "headline": "Should You Invest in Arista Networks (ANET) Based on Bullish Wall Street Views?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=383690ffc94df6780cad6df94f96e2e5b62620938587de8316db73ec4de14c37",
        "datetime": 1789392603,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Should You Invest in Arista Networks (ANET) Based on Bullish Wall Street Views?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ANET",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ANET의 사업과 관련된 'Should You Invest in Arista Networks (ANET) Based on Bullish Wall Street Views?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ANET 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479962.646821
        },
        "headlineKo": "낙관적인 월스트리트 전망을 바탕으로 Arista Networks(ANET)에 투자해야 합니까?"
      },
      {
        "headline": "Investors Heavily Search Arista Networks, Inc. (ANET): Here is What You Need to Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc7776aea72254c3dfe8cbd44a0ce020988e43f37914fd4b495140be213bc4be",
        "datetime": 1789390804,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "투자자들의 대대적인 검색 Arista Networks, Inc.(ANET): 알아야 할 사항은 다음과 같습니다."
      },
      {
        "headline": "Arista's Cash Flow Momentum Builds: How Sustainable is it?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d2ce02b7884145ff21adac32df89cb3e76930d4d19ee18d0534852aef9a79f4",
        "datetime": 1789389600,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Arista의 현금 흐름 모멘텀 구축: 얼마나 지속 가능합니까?"
      }
    ],
    "newsHistory": [
      {
        "headline": "Arista Networks (NYSE:ANET): High-Growth Leadership and Momentum in Focus",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=9ad16a21ad92f60c647e6cbd462229ba18fa741122112a8035808831db6dc684",
        "datetime": 1789462891,
        "headlineKo": "Arista Networks(NYSE:ANET): 고성장 리더십 및 추진력에 집중",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Arista Networks (NYSE:ANET): High-Growth Leadership and Momentum in Focus",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ANET",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ANET의 사업과 관련된 'Arista Networks (NYSE:ANET): High-Growth Leadership and Momentum in Focus' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ANET 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479959.5474267
        }
      },
      {
        "headline": "Arista Networks: AI Networking And EOS Drive Multi-Year Growth",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=312b56fa7853b1b2834578159e8ad320634140e78763c101d2c8a2b3854cf0c9",
        "datetime": 1789447456,
        "headlineKo": "Arista Networks: AI 네트워킹과 EOS가 다년간의 성장을 주도합니다",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Arista Networks: AI Networking And EOS Drive Multi-Year Growth",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ANET",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ANET의 사업과 관련된 'Arista Networks: AI Networking And EOS Drive Multi-Year Growth' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ANET 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479960.633308
        }
      },
      {
        "headline": "Should You Invest in Arista Networks (ANET) Based on Bullish Wall Street Views?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=383690ffc94df6780cad6df94f96e2e5b62620938587de8316db73ec4de14c37",
        "datetime": 1789392603,
        "headlineKo": "낙관적인 월스트리트 전망을 바탕으로 Arista Networks(ANET)에 투자해야 합니까?",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Should You Invest in Arista Networks (ANET) Based on Bullish Wall Street Views?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ANET",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ANET의 사업과 관련된 'Should You Invest in Arista Networks (ANET) Based on Bullish Wall Street Views?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ANET 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479962.646821
        }
      },
      {
        "headline": "Investors Heavily Search Arista Networks, Inc. (ANET): Here is What You Need to Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bc7776aea72254c3dfe8cbd44a0ce020988e43f37914fd4b495140be213bc4be",
        "datetime": 1789390804,
        "headlineKo": "투자자들의 대대적인 검색 Arista Networks, Inc.(ANET): 알아야 할 사항은 다음과 같습니다.",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "Arista's Cash Flow Momentum Builds: How Sustainable is it?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9d2ce02b7884145ff21adac32df89cb3e76930d4d19ee18d0534852aef9a79f4",
        "datetime": 1789389600,
        "headlineKo": "Arista의 현금 흐름 모멘텀 구축: 얼마나 지속 가능합니까?",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:46",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "COHR": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-03",
      "hour": "",
      "epsEstimate": 2.0003,
      "revenueEstimate": 2345484900
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Coherent: Riding The AI Optics Boom",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=485827c61b0cb1f511d1c79eb85d690dfce59576537c11b2bf07b03aa2a063f8",
        "datetime": 1789459971,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Coherent: Riding The AI Optics Boom",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "COHR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 COHR의 사업과 관련된 'Coherent: Riding The AI Optics Boom' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "COHR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479968.9855988
        },
        "headlineKo": "Coherent: AI 광학 붐을 타고"
      },
      {
        "headline": "Coherent Is A Buy-The-Dip Opportunity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1257df99f8f06197c5e0db54e4fc8002f3f5892cf7c3906395a185686d9f9b9",
        "datetime": 1789457700,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Coherent Is A Buy-The-Dip Opportunity",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "COHR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 COHR의 사업과 관련된 'Coherent Is A Buy-The-Dip Opportunity' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "COHR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479969.8338504
        },
        "headlineKo": "코히런트는 매수 기회입니다"
      },
      {
        "headline": "Coherent: I'm Completely Unfazed (Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3cfc56d23d81b88162c637bb0b0b2de52bcaadc1767a84ba60c5c8ea2f4975eb",
        "datetime": 1789430395,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Coherent: I'm Completely Unfazed (Upgrade)",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "COHR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 COHR의 사업과 관련된 'Coherent: I'm Completely Unfazed (Upgrade)' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "COHR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479970.9388895
        },
        "headlineKo": "Coherent: 저는 전혀 당황하지 않습니다(업그레이드)"
      },
      {
        "headline": "Corning Tumbles 12% on $2B At-the-Market Equity Offering; Coherent Sinks 11%, Lumentum Drops 9%, Fabrinet Slides 6%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12a7d152d69368274062f1295fd27d17ab50c5b0392ff5563a0679785b3bd09a",
        "datetime": 1789408190,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "코닝, 20억 달러 규모의 시장 주식 공모에서 12% 하락; 코히런트 싱크 11%, 루멘텀 드롭 9%, 파브리넷 슬라이드 6%"
      },
      {
        "headline": "Coherent (COHR) Down 10.4% Since Last Earnings Report: Can It Rebound?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0fdb852a0c6f0c18d927e3e9cb22b3edde1db3592af4b0fcf1fbee25ceb83a6c",
        "datetime": 1789140602,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Coherent (COHR)는 지난 수익 보고서 이후 10.4% 하락: 반등할 수 있을까요?"
      }
    ],
    "newsHistory": [
      {
        "headline": "Coherent: Riding The AI Optics Boom",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=485827c61b0cb1f511d1c79eb85d690dfce59576537c11b2bf07b03aa2a063f8",
        "datetime": 1789459971,
        "headlineKo": "Coherent: AI 광학 붐을 타고",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Coherent: Riding The AI Optics Boom",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "COHR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 COHR의 사업과 관련된 'Coherent: Riding The AI Optics Boom' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "COHR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479968.9855988
        }
      },
      {
        "headline": "Coherent Is A Buy-The-Dip Opportunity",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f1257df99f8f06197c5e0db54e4fc8002f3f5892cf7c3906395a185686d9f9b9",
        "datetime": 1789457700,
        "headlineKo": "코히런트는 매수 기회입니다",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Coherent Is A Buy-The-Dip Opportunity",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "COHR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 COHR의 사업과 관련된 'Coherent Is A Buy-The-Dip Opportunity' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "COHR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479969.8338504
        }
      },
      {
        "headline": "Coherent: I'm Completely Unfazed (Upgrade)",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=3cfc56d23d81b88162c637bb0b0b2de52bcaadc1767a84ba60c5c8ea2f4975eb",
        "datetime": 1789430395,
        "headlineKo": "Coherent: 저는 전혀 당황하지 않습니다(업그레이드)",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Coherent: I'm Completely Unfazed (Upgrade)",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "COHR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 COHR의 사업과 관련된 'Coherent: I'm Completely Unfazed (Upgrade)' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "COHR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479970.9388895
        }
      },
      {
        "headline": "Corning Tumbles 12% on $2B At-the-Market Equity Offering; Coherent Sinks 11%, Lumentum Drops 9%, Fabrinet Slides 6%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12a7d152d69368274062f1295fd27d17ab50c5b0392ff5563a0679785b3bd09a",
        "datetime": 1789408190,
        "headlineKo": "코닝, 20억 달러 규모의 시장 주식 공모에서 12% 하락; 코히런트 싱크 11%, 루멘텀 드롭 9%, 파브리넷 슬라이드 6%",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Coherent (COHR) Down 10.4% Since Last Earnings Report: Can It Rebound?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0fdb852a0c6f0c18d927e3e9cb22b3edde1db3592af4b0fcf1fbee25ceb83a6c",
        "datetime": 1789140602,
        "headlineKo": "Coherent (COHR)는 지난 수익 보고서 이후 10.4% 하락: 반등할 수 있을까요?",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:46",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "LITE": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "amc",
      "epsEstimate": 4.2722,
      "revenueEstimate": 1272242654
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "What Does Lumentum Holdings (LITE) Mean For Investors After The LITEON Token Launch?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17a981c991bbaae2d955e71a505e6d4f6ff6d05569cb371cc86956212248ba4b",
        "datetime": 1789446612,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "What Does Lumentum Holdings (LITE) Mean For Investors After The LITEON Token Launch?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "LITE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 LITE의 사업과 관련된 'What Does Lumentum Holdings (LITE) Mean For Investors After The LITEON Token Launch?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "LITE 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479979.4671192
        },
        "headlineKo": "LITEON 토큰 출시 후 Lumentum Holdings(LITE)는 투자자에게 무엇을 의미합니까?"
      },
      {
        "headline": "Corning Tumbles 12% on $2B At-the-Market Equity Offering; Coherent Sinks 11%, Lumentum Drops 9%, Fabrinet Slides 6%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12a7d152d69368274062f1295fd27d17ab50c5b0392ff5563a0679785b3bd09a",
        "datetime": 1789408190,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "코닝, 20억 달러 규모의 시장 주식 공모에서 12% 하락; 코히런트 싱크 11%, 루멘텀 드롭 9%, 파브리넷 슬라이드 6% - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "𝕏 f ⧉ 빨간색 레이저 빔은 광학 구성 요소를 조명하여 Lumentum의 다가오는 2026년 3분기 수익 보고서와 놀라운 주식 실적에 대한 집중을 상징합니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 12%, $2, 11% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "LITE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "LITE에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "12%",
            "$2",
            "11%",
            "9%",
            "6%",
            "$145.61",
            "$2 billion",
            "$273.30,"
          ],
          "sourceExcerpt": [
            "Corning Tumbles 12% on $2B At-the-Market Equity Offering; Coherent Sinks 11%, Lumentum Drops 9%, Fabrinet Slides 6% - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "𝕏 f ⧉ Red laser beams illuminate an optical component, symbolizing the intense focus on Lumentum's upcoming Q3 2026 earnings report and its remarkable stock performance."
          ],
          "analysisUpdatedAt": 1789479982.293494
        },
        "headlineKo": "코닝, 20억 달러 규모의 시장 주식 공모에서 12% 하락; 코히런트 싱크 11%, 루멘텀 드롭 9%, 파브리넷 슬라이드 6%"
      },
      {
        "headline": "AAOI's Optical Networking Demand Rise: Can It Beat LITE and COHR?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b7c764fc67cd4624676c7f2e4457c20da10a97432d4014f73674257ba317fdad",
        "datetime": 1789137540,
        "relevance": 1.0,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "AAOI's Optical Networking Demand Rise: Can It Beat LITE and COHR?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "LITE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 LITE의 사업과 관련된 'AAOI's Optical Networking Demand Rise: Can It Beat LITE and COHR?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "LITE 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1.0,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479984.6347291
        },
        "headlineKo": "AAOI의 광 네트워킹 수요 증가: LITE 및 COHR을 이길 수 있습니까?"
      },
      {
        "headline": "Lumentum: Why 2027 Will Be A Game Changer",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9ce3696c7d7c4b9e6956f65a9c0c862360daf626afa67ef80e136b43a01a0dfb",
        "datetime": 1789102233,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Lumentum: 2027년이 게임 체인저가 될 이유"
      },
      {
        "headline": "GoPro Spikes 11% as Lumentum Eases and Coherent Holds Flat: Is This a Merger Trade or a Meme Trade?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b66d533dd27d5264d40c95ba304afa7ed195264f13942927fc7d33513d59daf2",
        "datetime": 1789054970,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Lumentum이 완화되고 Coherent가 정체를 유지함에 따라 GoPro는 11% 급등: 이것은 합병 거래입니까, 아니면 밈 거래입니까?"
      }
    ],
    "newsHistory": [
      {
        "headline": "What Does Lumentum Holdings (LITE) Mean For Investors After The LITEON Token Launch?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=17a981c991bbaae2d955e71a505e6d4f6ff6d05569cb371cc86956212248ba4b",
        "datetime": 1789446612,
        "headlineKo": "LITEON 토큰 출시 후 Lumentum Holdings(LITE)는 투자자에게 무엇을 의미합니까?",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "What Does Lumentum Holdings (LITE) Mean For Investors After The LITEON Token Launch?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "LITE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 LITE의 사업과 관련된 'What Does Lumentum Holdings (LITE) Mean For Investors After The LITEON Token Launch?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "LITE 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479979.4671192
        }
      },
      {
        "headline": "Corning Tumbles 12% on $2B At-the-Market Equity Offering; Coherent Sinks 11%, Lumentum Drops 9%, Fabrinet Slides 6%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=12a7d152d69368274062f1295fd27d17ab50c5b0392ff5563a0679785b3bd09a",
        "datetime": 1789408190,
        "headlineKo": "코닝, 20억 달러 규모의 시장 주식 공모에서 12% 하락; 코히런트 싱크 11%, 루멘텀 드롭 9%, 파브리넷 슬라이드 6%",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "코닝, 20억 달러 규모의 시장 주식 공모에서 12% 하락; 코히런트 싱크 11%, 루멘텀 드롭 9%, 파브리넷 슬라이드 6% - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "𝕏 f ⧉ 빨간색 레이저 빔은 광학 구성 요소를 조명하여 Lumentum의 다가오는 2026년 3분기 수익 보고서와 놀라운 주식 실적에 대한 집중을 상징합니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 12%, $2, 11% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "LITE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "LITE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "LITE에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "12%",
            "$2",
            "11%",
            "9%",
            "6%",
            "$145.61",
            "$2 billion",
            "$273.30,"
          ],
          "sourceExcerpt": [
            "Corning Tumbles 12% on $2B At-the-Market Equity Offering; Coherent Sinks 11%, Lumentum Drops 9%, Fabrinet Slides 6% - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "𝕏 f ⧉ Red laser beams illuminate an optical component, symbolizing the intense focus on Lumentum's upcoming Q3 2026 earnings report and its remarkable stock performance."
          ],
          "analysisUpdatedAt": 1789479982.293494
        }
      },
      {
        "headline": "AAOI's Optical Networking Demand Rise: Can It Beat LITE and COHR?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b7c764fc67cd4624676c7f2e4457c20da10a97432d4014f73674257ba317fdad",
        "datetime": 1789137540,
        "headlineKo": "AAOI의 광 네트워킹 수요 증가: LITE 및 COHR을 이길 수 있습니까?",
        "relevance": 1.0,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "AAOI's Optical Networking Demand Rise: Can It Beat LITE and COHR?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "LITE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 LITE의 사업과 관련된 'AAOI's Optical Networking Demand Rise: Can It Beat LITE and COHR?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "LITE 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1.0,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479984.6347291
        }
      },
      {
        "headline": "Lumentum: Why 2027 Will Be A Game Changer",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=9ce3696c7d7c4b9e6956f65a9c0c862360daf626afa67ef80e136b43a01a0dfb",
        "datetime": 1789102233,
        "headlineKo": "Lumentum: 2027년이 게임 체인저가 될 이유",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "GoPro Spikes 11% as Lumentum Eases and Coherent Holds Flat: Is This a Merger Trade or a Meme Trade?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b66d533dd27d5264d40c95ba304afa7ed195264f13942927fc7d33513d59daf2",
        "datetime": 1789054970,
        "headlineKo": "Lumentum이 완화되고 Coherent가 정체를 유지함에 따라 GoPro는 11% 급등: 이것은 합병 거래입니까, 아니면 밈 거래입니까?",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:46",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "GEV": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 4.0398,
      "revenueEstimate": 12128695948
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "GLJ Starts GE Vernova at Sell With EBITDA 22% Below Consensus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6a39a968acbc0e95b57e545d59e9ed06d82d3a8e786e10255357a9c35ff1c5f4",
        "datetime": 1789474954,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "GLJ Starts GE Vernova at Sell With EBITDA 22% Below Consensus",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "GEV",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 GEV의 사업과 관련된 'GLJ Starts GE Vernova at Sell With EBITDA 22% Below Consensus' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "GEV 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479993.2154422
        },
        "headlineKo": "GLJ, 컨센서스보다 22% 낮은 EBITDA로 GE Vernova 매도 시작"
      },
      {
        "headline": "Is GE Vernova (GEV) Stock Above Fair Value After A 39% Gain?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11c3c4f473a7fb996f18a87e71542261adc2399298fe8a2d0ed40386fa01235b",
        "datetime": 1789463452,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Is GE Vernova (GEV) Stock Above Fair Value After A 39% Gain?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "GEV",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 GEV의 사업과 관련된 'Is GE Vernova (GEV) Stock Above Fair Value After A 39% Gain?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "GEV 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479994.998907
        },
        "headlineKo": "GE Vernova(GEV) 주식은 39% 상승 후 공정 가치보다 높습니까?"
      },
      {
        "headline": "GEV Stock Plunges After New Sell Rating, But Retail Investors Smell A Buying Opportunity",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c31055a6fbc58add2f7fb1f02248eb2d05571ebee281782b6f652541afe675b",
        "datetime": 1789447732,
        "relevance": 1.0,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "mixed",
          "certainty": "전망·추정 포함",
          "label": "AI 인프라 자금 유입 확대",
          "horizon": "중기 투자 사이클",
          "facts": [
            "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
            "기사에서 언급된 규모: 0.52%, 0.12%, 0.01%, 0.73%, 8.76%, 0.06%, 12.40%, 5.95%.",
            "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
          ],
          "why": [
            "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
            "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
            "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
          ],
          "beginner": [
            "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
            "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
            "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "긍정",
              "reason": "AI 컴퓨팅 수요 확대 가능성"
            },
            {
              "ticker": "AMD",
              "stance": "긍정",
              "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
            },
            {
              "ticker": "MU",
              "stance": "긍정",
              "reason": "AI 서버 메모리 수요와 가격 강세"
            },
            {
              "ticker": "ORCL",
              "stance": "혼합",
              "reason": "클라우드 수요와 자본 부담 동시 확대"
            }
          ],
          "watch": [
            "실제 수주·가동 데이터센터",
            "관련 기업 매출·수주잔고",
            "CAPEX 대비 영업현금흐름",
            "금리와 프로젝트 부채 비용"
          ],
          "interpretation": "이 기사는 GEV의 사업과 관련된 'GEV Stock Plunges After New Sell Rating, But Retail Investors Smell A Buying Opportunity' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "현재 해석: GEV에 기회와 부담이 함께 있습니다. 기사 속 전망만으로 매수·매도하지 말고, 매출·EPS·영업이익률 중 실제 숫자로 확인되는 부분을 우선 보세요.",
          "relevance": 1.0,
          "quality": "high",
          "verifiedNumbers": [
            "0.52%",
            "0.12%",
            "0.01%",
            "0.73%",
            "8.76%",
            "0.06%",
            "12.40%",
            "5.95%"
          ],
          "sourceExcerpt": [
            "GEV Stock Plunges After New Sell Rating, But Retail Investors Smell A Buying Opportunity New Connect your Agent Trending News Earnings All DIA 0.52% SPY 0.12% QQQ 0.01% Trending RDDT 0.73% FPS 8.76% VERA 0.06% PLAY 12.40% AXON 5.95% MAAS 3.",
            "GEV Stock Plunges After New Sell Rating, But Retail Investors Smell A Buying Opportunity GLJ Research analyst Gordon Johnson initiated coverage of GE Vernova with a ‘Sell’ rating and a $470 price target.",
            "In this photo illustration, the GE Vernova logo is seen displayed on a smartphone screen."
          ],
          "analysisUpdatedAt": 1789479996.170945
        },
        "headlineKo": "GEV 주식은 새로운 매도 등급 이후 급락했지만 소매 투자자들은 매수 기회를 포착했습니다."
      },
      {
        "headline": "Why GE Vernova (GEV) Stock Is Nosediving",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=738c0c897c616e20840abb227d796a40c831245b297a5b082051fb4a30b96910",
        "datetime": 1789440210,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "GE Vernova(GEV) 주식이 폭락하는 이유"
      },
      {
        "headline": "Why Did GE Vernova Stock Fall Today?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bf5024d65c835ad80a771e1d5f106c7f325e20588f338e2f21f8daf2fe23800f",
        "datetime": 1789420008,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "오늘 GE Vernova 주식이 하락한 이유는 무엇입니까?"
      }
    ],
    "newsHistory": [
      {
        "headline": "GLJ Starts GE Vernova at Sell With EBITDA 22% Below Consensus",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=6a39a968acbc0e95b57e545d59e9ed06d82d3a8e786e10255357a9c35ff1c5f4",
        "datetime": 1789474954,
        "headlineKo": "GLJ, 컨센서스보다 22% 낮은 EBITDA로 GE Vernova 매도 시작",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "GLJ Starts GE Vernova at Sell With EBITDA 22% Below Consensus",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "GEV",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 GEV의 사업과 관련된 'GLJ Starts GE Vernova at Sell With EBITDA 22% Below Consensus' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "GEV 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479993.2154422
        }
      },
      {
        "headline": "Is GE Vernova (GEV) Stock Above Fair Value After A 39% Gain?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11c3c4f473a7fb996f18a87e71542261adc2399298fe8a2d0ed40386fa01235b",
        "datetime": 1789463452,
        "headlineKo": "GE Vernova(GEV) 주식은 39% 상승 후 공정 가치보다 높습니까?",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Is GE Vernova (GEV) Stock Above Fair Value After A 39% Gain?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "GEV",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 GEV의 사업과 관련된 'Is GE Vernova (GEV) Stock Above Fair Value After A 39% Gain?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "GEV 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789479994.998907
        }
      },
      {
        "headline": "GEV Stock Plunges After New Sell Rating, But Retail Investors Smell A Buying Opportunity",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3c31055a6fbc58add2f7fb1f02248eb2d05571ebee281782b6f652541afe675b",
        "datetime": 1789447732,
        "headlineKo": "GEV 주식은 새로운 매도 등급 이후 급락했지만 소매 투자자들은 매수 기회를 포착했습니다.",
        "relevance": 1.0,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "mixed",
          "certainty": "전망·추정 포함",
          "label": "AI 인프라 자금 유입 확대",
          "horizon": "중기 투자 사이클",
          "facts": [
            "AI 데이터센터·반도체·전력·에너지저장 등으로 자금 공급 범위가 넓어지는 내용입니다.",
            "기사에서 언급된 규모: 0.52%, 0.12%, 0.01%, 0.73%, 8.76%, 0.06%, 12.40%, 5.95%.",
            "대출·투자은행·자본시장 조달 등 여러 방식의 자금 공급이 포함될 수 있습니다."
          ],
          "why": [
            "AI 투자가 빅테크 자체 자금뿐 아니라 금융기관·채권시장까지 동원하는 단계로 확장됐다는 의미입니다.",
            "전력·가스·저장장치·핵심광물처럼 데이터센터 주변 산업으로 수혜 범위가 넓어질 수 있습니다.",
            "반대로 프로젝트 수익성이 낮으면 신용시장 부담과 부채 문제가 함께 커질 수 있습니다."
          ],
          "beginner": [
            "AI에 돈을 대는 주체가 많아졌다는 뜻입니다.",
            "반도체뿐 아니라 전력·가스·배터리·핵심광물 기업도 수혜를 받을 수 있습니다.",
            "투자금액보다 실제 매출·현금흐름으로 돌아오는지가 더 중요합니다."
          ],
          "impacts": [
            {
              "ticker": "NVDA",
              "stance": "긍정",
              "reason": "AI 컴퓨팅 수요 확대 가능성"
            },
            {
              "ticker": "AMD",
              "stance": "긍정",
              "reason": "AI 가속기·서버 경쟁 수요 확대 가능성"
            },
            {
              "ticker": "MU",
              "stance": "긍정",
              "reason": "AI 서버 메모리 수요와 가격 강세"
            },
            {
              "ticker": "ORCL",
              "stance": "혼합",
              "reason": "클라우드 수요와 자본 부담 동시 확대"
            }
          ],
          "watch": [
            "실제 수주·가동 데이터센터",
            "관련 기업 매출·수주잔고",
            "CAPEX 대비 영업현금흐름",
            "금리와 프로젝트 부채 비용"
          ],
          "interpretation": "이 기사는 GEV의 사업과 관련된 'GEV Stock Plunges After New Sell Rating, But Retail Investors Smell A Buying Opportunity' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 매출·EPS·영업이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "현재 해석: GEV에 기회와 부담이 함께 있습니다. 기사 속 전망만으로 매수·매도하지 말고, 매출·EPS·영업이익률 중 실제 숫자로 확인되는 부분을 우선 보세요.",
          "relevance": 1.0,
          "quality": "high",
          "verifiedNumbers": [
            "0.52%",
            "0.12%",
            "0.01%",
            "0.73%",
            "8.76%",
            "0.06%",
            "12.40%",
            "5.95%"
          ],
          "sourceExcerpt": [
            "GEV Stock Plunges After New Sell Rating, But Retail Investors Smell A Buying Opportunity New Connect your Agent Trending News Earnings All DIA 0.52% SPY 0.12% QQQ 0.01% Trending RDDT 0.73% FPS 8.76% VERA 0.06% PLAY 12.40% AXON 5.95% MAAS 3.",
            "GEV Stock Plunges After New Sell Rating, But Retail Investors Smell A Buying Opportunity GLJ Research analyst Gordon Johnson initiated coverage of GE Vernova with a ‘Sell’ rating and a $470 price target.",
            "In this photo illustration, the GE Vernova logo is seen displayed on a smartphone screen."
          ],
          "analysisUpdatedAt": 1789479996.170945
        }
      },
      {
        "headline": "Why GE Vernova (GEV) Stock Is Nosediving",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=738c0c897c616e20840abb227d796a40c831245b297a5b082051fb4a30b96910",
        "datetime": 1789440210,
        "headlineKo": "GE Vernova(GEV) 주식이 폭락하는 이유",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "Why Did GE Vernova Stock Fall Today?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=bf5024d65c835ad80a771e1d5f106c7f325e20588f338e2f21f8daf2fe23800f",
        "datetime": 1789420008,
        "headlineKo": "오늘 GE Vernova 주식이 하락한 이유는 무엇입니까?",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:46",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "CEG": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 3.8111,
      "revenueEstimate": 9411197170
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Constellation Energy (CEG) Stock May Be Below Fair Value Despite $715 Million Power Plant Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dfb5762b256eccdb074d6e0fd3553ba3cb1cbc2f2884e68baea77c0eff683ed4",
        "datetime": 1789428007,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "고객 계약 · 매출 연결 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Constellation Energy (CEG) Stock May Be Below Fair Value Despite $715 Million Power Plant Deal",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
            "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "CEG",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "계약 금액·기간·취소 조건",
            "수주잔고와 매출 인식 시점",
            "관련 사업부 매출총이익률"
          ],
          "interpretation": "CEG에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480003.3601856
        },
        "headlineKo": "Constellation Energy(CEG) 주식은 7억 1,500만 달러 규모의 발전소 거래에도 불구하고 적정 가치보다 낮을 수 있습니다."
      },
      {
        "headline": "Here's Why Constellation Energy Corporation (CEG) Fell More Than Broader Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1c5589d15ce61e706c580427f63ae81180a7dd6ea9ecc3abb04c03bcd8ae045c",
        "datetime": 1789422305,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Here's Why Constellation Energy Corporation (CEG) Fell More Than Broader Market",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "CEG",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 CEG의 사업과 관련된 'Here's Why Constellation Energy Corporation (CEG) Fell More Than Broader Market' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "CEG 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480004.98867
        },
        "headlineKo": "Constellation Energy Corporation(CEG)이 더 넓은 시장보다 하락한 이유는 다음과 같습니다."
      },
      {
        "headline": "Constellation Energy Has More Upside Than The Market Reflects",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f0954ed281fc8eaff1cbeca84aa6946c926a6d5d51420d39c5f1a3a5e9b17257",
        "datetime": 1789392022,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Constellation Energy Has More Upside Than The Market Reflects",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "CEG",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 CEG의 사업과 관련된 'Constellation Energy Has More Upside Than The Market Reflects' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "CEG 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480005.8842173
        },
        "headlineKo": "별자리 에너지는 시장이 반영하는 것보다 더 많은 상승 여력을 갖고 있습니다."
      },
      {
        "headline": "Constellation Energy in deal to buy 609-MW Rhode Island gas plant from Shell",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73b9f68e17e42e6a48c4316c080c35dda3806d1d72446301dcc81be4b4311778",
        "datetime": 1789380997,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Constellation Energy는 Shell로부터 609MW 로드아일랜드 가스 플랜트 구매 계약을 체결했습니다."
      },
      {
        "headline": "Shell Just Sold a $715 Million Stake in a Major New England Asset to Constellation Energy. Here's What Investors Need to Know.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b81beb9ac0d5e0ab76434f1a69aa687cfa86fbd48812762a5b5bd4c36b97cbca",
        "datetime": 1789207971,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Shell은 방금 Constellation Energy에 뉴잉글랜드 주요 자산의 7억 1500만 달러 지분을 매각했습니다. 투자자가 알아야 할 사항은 다음과 같습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Constellation Energy (CEG) Stock May Be Below Fair Value Despite $715 Million Power Plant Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=dfb5762b256eccdb074d6e0fd3553ba3cb1cbc2f2884e68baea77c0eff683ed4",
        "datetime": 1789428007,
        "headlineKo": "Constellation Energy(CEG) 주식은 7억 1,500만 달러 규모의 발전소 거래에도 불구하고 적정 가치보다 낮을 수 있습니다.",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "고객 계약 · 매출 연결 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Constellation Energy (CEG) Stock May Be Below Fair Value Despite $715 Million Power Plant Deal",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
            "CEG의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "CEG",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "계약 금액·기간·취소 조건",
            "수주잔고와 매출 인식 시점",
            "관련 사업부 매출총이익률"
          ],
          "interpretation": "CEG에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 다음 실적의 매출·이익·현금흐름에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480003.3601856
        }
      },
      {
        "headline": "Here's Why Constellation Energy Corporation (CEG) Fell More Than Broader Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1c5589d15ce61e706c580427f63ae81180a7dd6ea9ecc3abb04c03bcd8ae045c",
        "datetime": 1789422305,
        "headlineKo": "Constellation Energy Corporation(CEG)이 더 넓은 시장보다 하락한 이유는 다음과 같습니다.",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Here's Why Constellation Energy Corporation (CEG) Fell More Than Broader Market",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "CEG",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 CEG의 사업과 관련된 'Here's Why Constellation Energy Corporation (CEG) Fell More Than Broader Market' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "CEG 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480004.98867
        }
      },
      {
        "headline": "Constellation Energy Has More Upside Than The Market Reflects",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f0954ed281fc8eaff1cbeca84aa6946c926a6d5d51420d39c5f1a3a5e9b17257",
        "datetime": 1789392022,
        "headlineKo": "별자리 에너지는 시장이 반영하는 것보다 더 많은 상승 여력을 갖고 있습니다.",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Constellation Energy Has More Upside Than The Market Reflects",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "CEG",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 CEG의 사업과 관련된 'Constellation Energy Has More Upside Than The Market Reflects' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "CEG 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480005.8842173
        }
      },
      {
        "headline": "Constellation Energy in deal to buy 609-MW Rhode Island gas plant from Shell",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=73b9f68e17e42e6a48c4316c080c35dda3806d1d72446301dcc81be4b4311778",
        "datetime": 1789380997,
        "headlineKo": "Constellation Energy는 Shell로부터 609MW 로드아일랜드 가스 플랜트 구매 계약을 체결했습니다.",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "Shell Just Sold a $715 Million Stake in a Major New England Asset to Constellation Energy. Here's What Investors Need to Know.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b81beb9ac0d5e0ab76434f1a69aa687cfa86fbd48812762a5b5bd4c36b97cbca",
        "datetime": 1789207971,
        "headlineKo": "Shell은 방금 Constellation Energy에 뉴잉글랜드 주요 자산의 7억 1500만 달러 지분을 매각했습니다. 투자자가 알아야 할 사항은 다음과 같습니다.",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:46",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "VST": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-04",
      "hour": "",
      "epsEstimate": 2.9504,
      "revenueEstimate": 7225728870
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "If You'd Invested $10,000 in Vistra 5 Years Ago, Here's How Much You'd Have Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b44f8ce922957f9ffde08ab826549a46e8a7ae8137dffd8b1993ca391b117fa6",
        "datetime": 1789469400,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "AI 투자 변화 · 수요와 현금 부담",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "5년 전에 Vistra에 10,000달러를 투자했다면 현재 투자 금액은 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 표면적으로 Vistra( VST -5.16% )는 다음과 같습니다.",
            "실제로 어떤 면에서는 그렇습니다. 텍사스에 본사를 둔 이 회사는 미국의 가정과 기업에 전기를 판매합니다.",
            "계속 불을 붙일 수도 있겠지만, 아마도 '짜릿한 성장주'가 가장 먼저 떠오르는 문구는 아닐 것입니다."
          ],
          "why": [
            "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $17, $142, 663% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "VST",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "실제 CAPEX 집행",
            "공급업체 수주·매출",
            "투자 기업 OCF·FCF·부채"
          ],
          "interpretation": "VST에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "$17",
            "$142",
            "663%",
            "$10,000",
            "$76,350",
            "3.36%",
            "854%",
            "30%"
          ],
          "sourceExcerpt": [
            "If You'd Invested $10,000 in Vistra 5 Years Ago, Here's How Much You'd Have Today | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool On the surface, Vistra ( VST -5.16% ) sounds like",
            "Indeed, in some ways it is: The Texas-based company sells electricity to homes and businesses in the U.S.",
            "It might keep the lights on, but \" thrilling growth stock \" is probably not the first phrase that comes to mind."
          ],
          "analysisUpdatedAt": 1789480015.7315576
        },
        "headlineKo": "5년 전에 Vistra에 10,000달러를 투자했다면 현재 투자한 금액은 다음과 같습니다."
      },
      {
        "headline": "Vistra Corp. (VST) Suffers a Larger Drop Than the General Market: Key Insights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0cce5d5fed89bb979f3370bbfc9cf94288d27e5d4a65ddda4d7915441c281147",
        "datetime": 1789422305,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "risk",
          "certainty": "본문 확인 필요",
          "label": "실적·재무 부담 확인 필요",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Vistra Corp. (VST) Suffers a Larger Drop Than the General Market: Key Insights",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "VST",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 VST의 사업과 관련된 'Vistra Corp. (VST) Suffers a Larger Drop Than the General Market: Key Insights' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "VST 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480017.7500083
        },
        "headlineKo": "Vistra Corp.(VST)은 일반 시장보다 하락 폭이 더 컸습니다: 주요 통찰"
      },
      {
        "headline": "Vistra’s Price Has Edged Downward Throught 2026: One Analyst Says It’s Due to Double Soon.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2c06ec2086221811ae0c8f3c1b7f109aaed6ccf9dcfd23231c0d92708e0144f",
        "datetime": 1789386546,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Vistra의 가격은 2026년까지 하락했습니다. 한 분석가는 곧 두 배가 될 것이라고 말합니다.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Vistra는 운영 결과가 기대치를 계속 상회하는 동안 조용히 가치의 4분의 1을 잃었으며, 월스트리트의 가장 낙관적인 분석가는 단절이 2027년에 큰 일이 일어날 것이라고 생각합니다."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $148.34, $217.42,, 47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "VST",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "VST에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "$148.34",
            "$217.42,",
            "47%",
            "$176.96",
            "$143.87",
            "30%",
            "$1.77 billion",
            "$311 million"
          ],
          "sourceExcerpt": [
            "Vistra's Price Has Edged Downward Throught 2026: One Analyst Says It's Due to Double Soon.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Vistra has quietly shed a quarter of its value while its operating results kept beating expectations, and Wall Street's most bullish analyst thinks that disconnect points to something big coming in 2027."
          ],
          "analysisUpdatedAt": 1789480020.8650465
        },
        "headlineKo": "Vistra의 가격은 2026년까지 하락했습니다. 한 분석가는 곧 두 배가 될 것이라고 말했습니다."
      },
      {
        "headline": "Is Vistra Stock Underperforming the Nasdaq?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be5b0872f31084cc16bb301d7db652a282cbf3e0546d547fe5a62e4d5cdea22e",
        "datetime": 1789152021,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Vistra 주식이 Nasdaq보다 실적이 저조합니까?"
      },
      {
        "headline": "What's Going On With Vistra Stock Friday?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f73ade1e6a4a86c6d7e65ea94424873dccd5f46ed123ebd48f9b8229c8a0cede",
        "datetime": 1789122722,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "비스트라 주식 금요일에 무슨 일이 일어나고 있나요?"
      }
    ],
    "newsHistory": [
      {
        "headline": "If You'd Invested $10,000 in Vistra 5 Years Ago, Here's How Much You'd Have Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=b44f8ce922957f9ffde08ab826549a46e8a7ae8137dffd8b1993ca391b117fa6",
        "datetime": 1789469400,
        "headlineKo": "5년 전에 Vistra에 10,000달러를 투자했다면 현재 투자한 금액은 다음과 같습니다.",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "AI 투자 변화 · 수요와 현금 부담",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "5년 전에 Vistra에 10,000달러를 투자했다면 현재 투자 금액은 다음과 같습니다 | Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 표면적으로 Vistra( VST -5.16% )는 다음과 같습니다.",
            "실제로 어떤 면에서는 그렇습니다. 텍사스에 본사를 둔 이 회사는 미국의 가정과 기업에 전기를 판매합니다.",
            "계속 불을 붙일 수도 있겠지만, 아마도 '짜릿한 성장주'가 가장 먼저 떠오르는 문구는 아닐 것입니다."
          ],
          "why": [
            "AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: $17, $142, 663% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "AI 투자가 늘면 공급업체에는 주문 기회지만, 투자하는 회사에는 현금 부담이 커질 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "VST",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "실제 CAPEX 집행",
            "공급업체 수주·매출",
            "투자 기업 OCF·FCF·부채"
          ],
          "interpretation": "VST에 대한 AI 투자 변화 · 수요와 현금 부담 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: AI CAPEX 변화는 반도체·클라우드 수요와 투자 기업의 현금흐름을 서로 다른 방향으로 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "$17",
            "$142",
            "663%",
            "$10,000",
            "$76,350",
            "3.36%",
            "854%",
            "30%"
          ],
          "sourceExcerpt": [
            "If You'd Invested $10,000 in Vistra 5 Years Ago, Here's How Much You'd Have Today | The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool On the surface, Vistra ( VST -5.16% ) sounds like",
            "Indeed, in some ways it is: The Texas-based company sells electricity to homes and businesses in the U.S.",
            "It might keep the lights on, but \" thrilling growth stock \" is probably not the first phrase that comes to mind."
          ],
          "analysisUpdatedAt": 1789480015.7315576
        }
      },
      {
        "headline": "Vistra Corp. (VST) Suffers a Larger Drop Than the General Market: Key Insights",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=0cce5d5fed89bb979f3370bbfc9cf94288d27e5d4a65ddda4d7915441c281147",
        "datetime": 1789422305,
        "headlineKo": "Vistra Corp.(VST)은 일반 시장보다 하락 폭이 더 컸습니다: 주요 통찰",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "risk",
          "certainty": "본문 확인 필요",
          "label": "실적·재무 부담 확인 필요",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Vistra Corp. (VST) Suffers a Larger Drop Than the General Market: Key Insights",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "VST",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 VST의 사업과 관련된 'Vistra Corp. (VST) Suffers a Larger Drop Than the General Market: Key Insights' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "VST 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480017.7500083
        }
      },
      {
        "headline": "Vistra’s Price Has Edged Downward Throught 2026: One Analyst Says It’s Due to Double Soon.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d2c06ec2086221811ae0c8f3c1b7f109aaed6ccf9dcfd23231c0d92708e0144f",
        "datetime": 1789386546,
        "headlineKo": "Vistra의 가격은 2026년까지 하락했습니다. 한 분석가는 곧 두 배가 될 것이라고 말했습니다.",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Vistra의 가격은 2026년까지 하락했습니다. 한 분석가는 곧 두 배가 될 것이라고 말합니다.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "Vistra는 운영 결과가 기대치를 계속 상회하는 동안 조용히 가치의 4분의 1을 잃었으며, 월스트리트의 가장 낙관적인 분석가는 단절이 2027년에 큰 일이 일어날 것이라고 생각합니다."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: $148.34, $217.42,, 47% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "VST의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "VST",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "VST에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "$148.34",
            "$217.42,",
            "47%",
            "$176.96",
            "$143.87",
            "30%",
            "$1.77 billion",
            "$311 million"
          ],
          "sourceExcerpt": [
            "Vistra's Price Has Edged Downward Throught 2026: One Analyst Says It's Due to Double Soon.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "Vistra has quietly shed a quarter of its value while its operating results kept beating expectations, and Wall Street's most bullish analyst thinks that disconnect points to something big coming in 2027."
          ],
          "analysisUpdatedAt": 1789480020.8650465
        }
      },
      {
        "headline": "Is Vistra Stock Underperforming the Nasdaq?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=be5b0872f31084cc16bb301d7db652a282cbf3e0546d547fe5a62e4d5cdea22e",
        "datetime": 1789152021,
        "headlineKo": "Vistra 주식이 Nasdaq보다 실적이 저조합니까?",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "What's Going On With Vistra Stock Friday?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f73ade1e6a4a86c6d7e65ea94424873dccd5f46ed123ebd48f9b8229c8a0cede",
        "datetime": 1789122722,
        "headlineKo": "비스트라 주식 금요일에 무슨 일이 일어나고 있나요?",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:47",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "ETN": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-11-02",
      "hour": "bmo",
      "epsEstimate": 3.5527,
      "revenueEstimate": 8526011495
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "GE Vernova Sinks 9% as GLJ Research Starts at Sell With $470 Target; Eaton Drops 7%, Quanta Services Falls 4%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99defa2386286d4beced20f4c09c63826a28bece3edf13b6686b154c99b93843",
        "datetime": 1789404062,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4% - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "작성자: David Moadel 2026년 9월 14일 오후 12:41(ET) 게시 · 3분 읽기 Market Movers 데스크."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 9%, $470, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ETN",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "ETN에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "9%",
            "$470",
            "7%",
            "4%",
            "$873.89",
            "$395.29.",
            "$623.31.",
            "$176 billion"
          ],
          "sourceExcerpt": [
            "GE Vernova Sinks 9% as GLJ Research Starts at Sell With $470 Target; Eaton Drops 7%, Quanta Services Falls 4% - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By David Moadel Published September 14, 2026, 12:41pm ET · 3 min read Market Movers desk."
          ],
          "analysisUpdatedAt": 1789480030.1772106
        },
        "headlineKo": "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4%"
      },
      {
        "headline": "Eaton vs. Rivian Automotive: Which Industrials Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04926b7ccc235448f0239cf02978be5839303cf0f766038ca679f26f3538eab6",
        "datetime": 1789390136,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Rivian Automotive: 2026년에는 어떤 산업재 주식을 매수하는 것이 더 나은가요?",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 기존 강자에 투자하는 것이 더 낫습니까, 아니면 파괴적인 신규 기업에 투자하는 것이 더 낫습니까?",
            "Eaton(ETN -7.57%)과 Rivian Automotive(RIVN -1.06%)를 비교하면 2026년 포트폴리오에 대해 매우 다른 두 가지 경로가 드러납니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 7.57%, 1.06%, $ 393.16 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ETN",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "ETN에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "7.57%",
            "1.06%",
            "$ 393.16",
            "7.57 %",
            "$ 32.21",
            "$ 15.86",
            "1.06 %",
            "$ 0.17"
          ],
          "sourceExcerpt": [
            "Rivian Automotive: Which Industrials Stock Is a Better Buy in 2026?",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Is it better to invest in an established powerhouse or a disruptive newcomer?",
            "Comparing Eaton ( ETN -7.57% ) and Rivian Automotive ( RIVN -1.06% ) reveals two very different paths for your portfolio in 2026."
          ],
          "analysisUpdatedAt": 1789480032.7063785
        },
        "headlineKo": "Eaton vs. Rivian Automotive: 2026년에는 어느 산업 주식이 더 나은 매수인가요?"
      },
      {
        "headline": "Eaton Announces $1 Million Commitment to Support Global Freshwater Conservation Through The Nature Conservancy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d48fa13549507a507eac972bf89fdeec587726acd71dbccde50a8f018d21d284",
        "datetime": 1789387200,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Eaton Announces $1 Million Commitment to Support Global Freshwater Conservation Through The Nature Conservancy",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ETN",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ETN의 사업과 관련된 'Eaton Announces $1 Million Commitment to Support Global Freshwater Conservation Through The Nature Conservancy' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ETN 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480034.7374244
        },
        "headlineKo": "이튼, 자연 보호 협회(The Nature Conservancy)를 통해 전 세계 담수 보존을 지원하기 위해 100만 달러 지원 약속 발표"
      },
      {
        "headline": "Why Is Eaton Priced Above Peers That Earn More Per Sale?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=456fbbf893fb96f1c6137822ce5d8e518d47274ada7c0c407bd56ace31d585a4",
        "datetime": 1789154312,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Eaton의 가격이 판매당 더 많은 수익을 올리는 동종 업체보다 높은 이유는 무엇입니까?"
      },
      {
        "headline": "Is Eaton Stock Amplifying A Risk You Already Own?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e320e4183282bf98d8260b64f4b0a85fd66033736dd8d281ec591854e727c43",
        "datetime": 1789089415,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Eaton 주식이 귀하가 이미 갖고 있는 위험을 증폭시키고 있습니까?"
      }
    ],
    "newsHistory": [
      {
        "headline": "GE Vernova Sinks 9% as GLJ Research Starts at Sell With $470 Target; Eaton Drops 7%, Quanta Services Falls 4%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99defa2386286d4beced20f4c09c63826a28bece3edf13b6686b154c99b93843",
        "datetime": 1789404062,
        "headlineKo": "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4%",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4% - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "작성자: David Moadel 2026년 9월 14일 오후 12:41(ET) 게시 · 3분 읽기 Market Movers 데스크."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 9%, $470, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ETN",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "ETN에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "9%",
            "$470",
            "7%",
            "4%",
            "$873.89",
            "$395.29.",
            "$623.31.",
            "$176 billion"
          ],
          "sourceExcerpt": [
            "GE Vernova Sinks 9% as GLJ Research Starts at Sell With $470 Target; Eaton Drops 7%, Quanta Services Falls 4% - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By David Moadel Published September 14, 2026, 12:41pm ET · 3 min read Market Movers desk."
          ],
          "analysisUpdatedAt": 1789480030.1772106
        }
      },
      {
        "headline": "Eaton vs. Rivian Automotive: Which Industrials Stock Is a Better Buy in 2026?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=04926b7ccc235448f0239cf02978be5839303cf0f766038ca679f26f3538eab6",
        "datetime": 1789390136,
        "headlineKo": "Eaton vs. Rivian Automotive: 2026년에는 어느 산업 주식이 더 나은 매수인가요?",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Rivian Automotive: 2026년에는 어떤 산업재 주식을 매수하는 것이 더 나은가요?",
            "| Motley Fool 접근성 도움말 회사 소개 ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool 기존 강자에 투자하는 것이 더 낫습니까, 아니면 파괴적인 신규 기업에 투자하는 것이 더 낫습니까?",
            "Eaton(ETN -7.57%)과 Rivian Automotive(RIVN -1.06%)를 비교하면 2026년 포트폴리오에 대해 매우 다른 두 가지 경로가 드러납니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 7.57%, 1.06%, $ 393.16 — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "ETN의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "ETN",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "ETN에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "7.57%",
            "1.06%",
            "$ 393.16",
            "7.57 %",
            "$ 32.21",
            "$ 15.86",
            "1.06 %",
            "$ 0.17"
          ],
          "sourceExcerpt": [
            "Rivian Automotive: Which Industrials Stock Is a Better Buy in 2026?",
            "| The Motley Fool Accessibility Help About Us ▲ S&P 500 + ---% | ▲ Stock Advisor + ---% Join The Motley Fool Is it better to invest in an established powerhouse or a disruptive newcomer?",
            "Comparing Eaton ( ETN -7.57% ) and Rivian Automotive ( RIVN -1.06% ) reveals two very different paths for your portfolio in 2026."
          ],
          "analysisUpdatedAt": 1789480032.7063785
        }
      },
      {
        "headline": "Eaton Announces $1 Million Commitment to Support Global Freshwater Conservation Through The Nature Conservancy",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d48fa13549507a507eac972bf89fdeec587726acd71dbccde50a8f018d21d284",
        "datetime": 1789387200,
        "headlineKo": "이튼, 자연 보호 협회(The Nature Conservancy)를 통해 전 세계 담수 보존을 지원하기 위해 100만 달러 지원 약속 발표",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Eaton Announces $1 Million Commitment to Support Global Freshwater Conservation Through The Nature Conservancy",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "ETN",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 ETN의 사업과 관련된 'Eaton Announces $1 Million Commitment to Support Global Freshwater Conservation Through The Nature Conservancy' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "ETN 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480034.7374244
        }
      },
      {
        "headline": "Why Is Eaton Priced Above Peers That Earn More Per Sale?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=456fbbf893fb96f1c6137822ce5d8e518d47274ada7c0c407bd56ace31d585a4",
        "datetime": 1789154312,
        "headlineKo": "Eaton의 가격이 판매당 더 많은 수익을 올리는 동종 업체보다 높은 이유는 무엇입니까?",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Is Eaton Stock Amplifying A Risk You Already Own?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2e320e4183282bf98d8260b64f4b0a85fd66033736dd8d281ec591854e727c43",
        "datetime": 1789089415,
        "headlineKo": "Eaton 주식이 귀하가 이미 갖고 있는 위험을 증폭시키고 있습니까?",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:47",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "PWR": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "bmo",
      "epsEstimate": 5.045,
      "revenueEstimate": 11079301050
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Quanta Services (PWR) Declines More Than Market: Some Information for Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91c7ba24225803915d49c5228b2da8bdfed85ac904077cd6111d565ba8efd9ab",
        "datetime": 1789423205,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "risk",
          "certainty": "본문 확인 필요",
          "label": "실적·재무 부담 확인 필요",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Quanta Services (PWR) Declines More Than Market: Some Information for Investors",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "PWR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 PWR의 사업과 관련된 'Quanta Services (PWR) Declines More Than Market: Some Information for Investors' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "PWR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480043.3707352
        },
        "headlineKo": "Quanta Services(PWR)는 시장보다 더 많이 감소합니다: 투자자를 위한 일부 정보"
      },
      {
        "headline": "GE Vernova Sinks 9% as GLJ Research Starts at Sell With $470 Target; Eaton Drops 7%, Quanta Services Falls 4%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99defa2386286d4beced20f4c09c63826a28bece3edf13b6686b154c99b93843",
        "datetime": 1789404062,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4% - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "작성자: David Moadel 2026년 9월 14일 오후 12:41(ET) 게시 · 3분 읽기 Market Movers 데스크."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 9%, $470, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "PWR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "PWR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "PWR에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "9%",
            "$470",
            "7%",
            "4%",
            "$873.89",
            "$395.29.",
            "$623.31.",
            "$176 billion"
          ],
          "sourceExcerpt": [
            "GE Vernova Sinks 9% as GLJ Research Starts at Sell With $470 Target; Eaton Drops 7%, Quanta Services Falls 4% - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By David Moadel Published September 14, 2026, 12:41pm ET · 3 min read Market Movers desk."
          ],
          "analysisUpdatedAt": 1789480045.603243
        },
        "headlineKo": "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4%"
      },
      {
        "headline": "Why Quanta (PWR) Stock Is Up Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=099061d19d3a69f3849785e603dd85483aed66889fa0f353d4272db650270da0",
        "datetime": 1789190105,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Why Quanta (PWR) Stock Is Up Today",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "PWR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 PWR의 사업과 관련된 'Why Quanta (PWR) Stock Is Up Today' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "PWR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480047.4715593
        },
        "headlineKo": "오늘 Quanta(PWR) 주식이 상승한 이유"
      },
      {
        "headline": "3 Big Reasons to Love Quanta (PWR)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=737cc1bc665857167f46f7a29e94b0f2972f17576dc18f5df5bfdfd2716f91b5",
        "datetime": 1789161305,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Quanta(PWR)를 사랑해야 하는 3가지 큰 이유"
      },
      {
        "headline": "Q2 Energy Products and Services Earnings: Quanta (NYSE:PWR) Earns Top Marks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb74f1b629b11e0d26dabeb14f9258ec176c192e31d9853cf666bc9199f8caed",
        "datetime": 1789064224,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "2분기 에너지 제품 및 서비스 수익: Quanta(NYSE:PWR)가 최고 등급 획득"
      }
    ],
    "newsHistory": [
      {
        "headline": "Quanta Services (PWR) Declines More Than Market: Some Information for Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=91c7ba24225803915d49c5228b2da8bdfed85ac904077cd6111d565ba8efd9ab",
        "datetime": 1789423205,
        "headlineKo": "Quanta Services(PWR)는 시장보다 더 많이 감소합니다: 투자자를 위한 일부 정보",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "risk",
          "certainty": "본문 확인 필요",
          "label": "실적·재무 부담 확인 필요",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Quanta Services (PWR) Declines More Than Market: Some Information for Investors",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "PWR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 PWR의 사업과 관련된 'Quanta Services (PWR) Declines More Than Market: Some Information for Investors' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "PWR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480043.3707352
        }
      },
      {
        "headline": "GE Vernova Sinks 9% as GLJ Research Starts at Sell With $470 Target; Eaton Drops 7%, Quanta Services Falls 4%",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=99defa2386286d4beced20f4c09c63826a28bece3edf13b6686b154c99b93843",
        "datetime": 1789404062,
        "headlineKo": "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4%",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "목표주가 변경 · 근거 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "GE Vernova는 GLJ Research가 $470 목표로 매도를 시작하면서 9% 하락했습니다. Eaton 하락 7%, Quanta 서비스 하락 4% - 24/7 Wall St.",
            "내용으로 건너뛰기 ❚❚ 종가 S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% 다우존스 52,135.20 −0.63% 나스닥 100 29,097.60 −0.30% 러셀 2000 2,878.50 −0.",
            "작성자: David Moadel 2026년 9월 14일 오후 12:41(ET) 게시 · 3분 읽기 Market Movers 데스크."
          ],
          "why": [
            "목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다.",
            "이번 기사에서 확인된 구체적 수치: 9%, $470, 7% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "PWR의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "증권사가 생각하는 적정 가격을 바꾼 것입니다. 회사가 실제로 그 가격을 보장하는 것은 아닙니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "PWR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "목표주가 산식의 EPS",
            "적용 PER 변화",
            "회사 공식 가이던스"
          ],
          "interpretation": "PWR에 대한 목표주가 변경 · 근거 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 목표주가 변경은 애널리스트의 EPS·PER 가정 변화이며 회사 공식 전망과는 구분해야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "9%",
            "$470",
            "7%",
            "4%",
            "$873.89",
            "$395.29.",
            "$623.31.",
            "$176 billion"
          ],
          "sourceExcerpt": [
            "GE Vernova Sinks 9% as GLJ Research Starts at Sell With $470 Target; Eaton Drops 7%, Quanta Services Falls 4% - 24/7 Wall St.",
            "Skip to content ❚❚ At close S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.60% S&P 500 7,607.40 −0.31% Dow Jones 52,135.20 −0.63% Nasdaq 100 29,097.60 −0.30% Russell 2000 2,878.50 −0.",
            "By David Moadel Published September 14, 2026, 12:41pm ET · 3 min read Market Movers desk."
          ],
          "analysisUpdatedAt": 1789480045.603243
        }
      },
      {
        "headline": "Why Quanta (PWR) Stock Is Up Today",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=099061d19d3a69f3849785e603dd85483aed66889fa0f353d4272db650270da0",
        "datetime": 1789190105,
        "headlineKo": "오늘 Quanta(PWR) 주식이 상승한 이유",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Why Quanta (PWR) Stock Is Up Today",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "PWR",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 PWR의 사업과 관련된 'Why Quanta (PWR) Stock Is Up Today' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "PWR 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480047.4715593
        }
      },
      {
        "headline": "3 Big Reasons to Love Quanta (PWR)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=737cc1bc665857167f46f7a29e94b0f2972f17576dc18f5df5bfdfd2716f91b5",
        "datetime": 1789161305,
        "headlineKo": "Quanta(PWR)를 사랑해야 하는 3가지 큰 이유",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "Q2 Energy Products and Services Earnings: Quanta (NYSE:PWR) Earns Top Marks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fb74f1b629b11e0d26dabeb14f9258ec176c192e31d9853cf666bc9199f8caed",
        "datetime": 1789064224,
        "headlineKo": "2분기 에너지 제품 및 서비스 수익: Quanta(NYSE:PWR)가 최고 등급 획득",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:47",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "HUBB": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-26",
      "hour": "",
      "epsEstimate": 5.8335,
      "revenueEstimate": 1861040592
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Hubbell: The Grid's Small Components Can Deliver Large Returns",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d606fd40fc8ea46edf8b5681a610d09bcce137544979e549701f9392505c0ea7",
        "datetime": 1789108488,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Hubbell: The Grid's Small Components Can Deliver Large Returns",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "HUBB",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 HUBB의 사업과 관련된 'Hubbell: The Grid's Small Components Can Deliver Large Returns' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "HUBB 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480054.5893319
        },
        "headlineKo": "허벨: 그리드의 작은 구성 요소는 큰 수익을 제공할 수 있습니다"
      },
      {
        "headline": "Hubbell to Participate in Upcoming Investor Conference",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6f2a24c8b927089be33be5947b6958ce6000deda02c0ddace534aa2fbdeef77",
        "datetime": 1788958800,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Hubbell to Participate in Upcoming Investor Conference",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "HUBB",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 HUBB의 사업과 관련된 'Hubbell to Participate in Upcoming Investor Conference' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "HUBB 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480056.7833717
        },
        "headlineKo": "허벨, 다가오는 투자자 컨퍼런스에 참가"
      }
    ],
    "newsHistory": [
      {
        "headline": "Hubbell: The Grid's Small Components Can Deliver Large Returns",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=d606fd40fc8ea46edf8b5681a610d09bcce137544979e549701f9392505c0ea7",
        "datetime": 1789108488,
        "headlineKo": "허벨: 그리드의 작은 구성 요소는 큰 수익을 제공할 수 있습니다",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Hubbell: The Grid's Small Components Can Deliver Large Returns",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "HUBB",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 HUBB의 사업과 관련된 'Hubbell: The Grid's Small Components Can Deliver Large Returns' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "HUBB 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480054.5893319
        }
      },
      {
        "headline": "Hubbell to Participate in Upcoming Investor Conference",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=c6f2a24c8b927089be33be5947b6958ce6000deda02c0ddace534aa2fbdeef77",
        "datetime": 1788958800,
        "headlineKo": "허벨, 다가오는 투자자 컨퍼런스에 참가",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Hubbell to Participate in Upcoming Investor Conference",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "HUBB",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 HUBB의 사업과 관련된 'Hubbell to Participate in Upcoming Investor Conference' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "HUBB 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480056.7833717
        }
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:47",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 4,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "VRT": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-20",
      "hour": "",
      "epsEstimate": 1.8525,
      "revenueEstimate": 3803286199
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Vertiv (VRT) Stock Stays Fairly Priced Following Its $2.6B AI Power Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=172c9eb73e0695be9d952800d218689e92478c03d0caa8c526a60ac6cf25553c",
        "datetime": 1789456270,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "고객 계약 · 매출 연결 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Vertiv (VRT) Stock Stays Fairly Priced Following Its $2.6B AI Power Deal",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
            "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "VRT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "계약 금액·기간·취소 조건",
            "수주잔고와 매출 인식 시점",
            "관련 사업부 매출총이익률"
          ],
          "interpretation": "VRT에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480063.9986258
        },
        "headlineKo": "Vertiv(VRT) 주식은 26억 달러 규모의 AI 전력 거래에 따라 공정한 가격을 유지합니다."
      },
      {
        "headline": "Vertiv Has Guided Itself Into A Steep Second Half",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=267becee7efd814a23b13e54bd53751a98c6e0ff27d3d2454ef7f7319402cfca",
        "datetime": 1789425056,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Vertiv는 가파른 하반기를 맞이했습니다 | Trefis Vertiv는 가파른 하반기로 진입했습니다. 2026년 9월 14일 · by Trefis Team VRT YTD +46.6% SPY YTD +11.9% XLI YTD +9.9% VRT 분석 → Vertiv(VRT)는 t 대비 약 88% 상승했습니다.",
            "보유자가 걱정해야 할 숫자는 회사 자체 지침에 있습니다. 2026년 3분기 유기적 성장은 방금 전달한 18%의 유기적 성장에 비해 약 35%입니다.",
            "2026년 하반기의 모든 것이 그 단계에 있습니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 46.6%, 11.9%, 9.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "VRT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "VRT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "46.6%",
            "11.9%",
            "9.9%",
            "88%",
            "14%",
            "35%",
            "18%",
            "24%"
          ],
          "sourceExcerpt": [
            "Vertiv Has Guided Itself Into A Steep Second Half | Trefis Vertiv Has Guided Itself Into A Steep Second Half September 14th, 2026 · by Trefis Team VRT YTD +46.6% SPY YTD +11.9% XLI YTD +9.9% Analyze VRT → Vertiv (VRT) is up about 88% over t",
            "The number that should worry a holder sits in the company’s own guidance: organic growth of roughly 35% in the third quarter of 2026, against the 18% organic pace it just delivered.",
            "Everything about the second half of 2026 turns on that step."
          ],
          "analysisUpdatedAt": 1789480067.5007434
        },
        "headlineKo": "Vertiv는 가파른 후반전을 맞이했습니다."
      },
      {
        "headline": "Unusually High Volume in Deep Out-of-the-Money Vertiv Call Options Shows Investors Bullish on VRT",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=05153fd3e4f635eeb8308784217c0f37c7332234bc8cb3b5650e343dd1385534",
        "datetime": 1789407002,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Unusually High Volume in Deep Out-of-the-Money Vertiv Call Options Shows Investors Bullish on VRT",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "VRT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 VRT의 사업과 관련된 'Unusually High Volume in Deep Out-of-the-Money Vertiv Call Options Shows Investors Bullish on VRT' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "VRT 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480068.6062326
        },
        "headlineKo": "깊은 외가격 Vertiv 콜 옵션의 비정상적으로 높은 거래량은 투자자들이 VRT에 대해 낙관적이라는 것을 보여줍니다"
      },
      {
        "headline": "Vertiv vs. Broadcom: Which AI Infrastructure Stock Has More Upside?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4884c92aa2a6bec95c3ed8333166e11febb5730a577a4c2c7c8da773d9950a5b",
        "datetime": 1789404420,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Vertiv vs. Broadcom: 어떤 AI 인프라 주식이 더 많은 상승 여력을 가지고 있나요?"
      },
      {
        "headline": "Is Vertiv (VRT) a Solid Growth Stock? 3 Reasons to Think \"Yes\"",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34c960045559082c4a7bbfb81bbeea9a3001c738119fb8e290681936f9fbd011",
        "datetime": 1789404302,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Vertiv(VRT)는 견고한 성장주입니까? \"예\"라고 생각하는 3가지 이유"
      }
    ],
    "newsHistory": [
      {
        "headline": "Vertiv (VRT) Stock Stays Fairly Priced Following Its $2.6B AI Power Deal",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=172c9eb73e0695be9d952800d218689e92478c03d0caa8c526a60ac6cf25553c",
        "datetime": 1789456270,
        "headlineKo": "Vertiv(VRT) 주식은 26억 달러 규모의 AI 전력 거래에 따라 공정한 가격을 유지합니다.",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "medium",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "고객 계약 · 매출 연결 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Vertiv (VRT) Stock Stays Fairly Priced Following Its $2.6B AI Power Deal",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다.",
            "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 새 고객을 확보했다는 뜻입니다. 발표 당일 매출이 생긴 것은 아니며 실제 주문과 매출 인식 시점을 봐야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "VRT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "계약 금액·기간·취소 조건",
            "수주잔고와 매출 인식 시점",
            "관련 사업부 매출총이익률"
          ],
          "interpretation": "VRT에 대한 고객 계약 · 매출 연결 확인 뉴스입니다. 현재 확인된 기사 내용이 판매량·ASP(평균판매가격)·매출총이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 계약 발표는 향후 매출 가시성을 높일 수 있지만 계약 금액·기간·매출 인식 시점이 확인돼야 합니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480063.9986258
        }
      },
      {
        "headline": "Vertiv Has Guided Itself Into A Steep Second Half",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=267becee7efd814a23b13e54bd53751a98c6e0ff27d3d2454ef7f7319402cfca",
        "datetime": 1789425056,
        "headlineKo": "Vertiv는 가파른 후반전을 맞이했습니다.",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "회사 전망 변경 · 추정치 재평가",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Vertiv는 가파른 하반기를 맞이했습니다 | Trefis Vertiv는 가파른 하반기로 진입했습니다. 2026년 9월 14일 · by Trefis Team VRT YTD +46.6% SPY YTD +11.9% XLI YTD +9.9% VRT 분석 → Vertiv(VRT)는 t 대비 약 88% 상승했습니다.",
            "보유자가 걱정해야 할 숫자는 회사 자체 지침에 있습니다. 2026년 3분기 유기적 성장은 방금 전달한 18%의 유기적 성장에 비해 약 35%입니다.",
            "2026년 하반기의 모든 것이 그 단계에 있습니다."
          ],
          "why": [
            "가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 46.6%, 11.9%, 9.9% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "VRT의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사가 앞으로 벌 돈의 예상치를 바꾼 뉴스입니다. 실제 실적이 새 전망을 달성하는지 확인해야 합니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "VRT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "공식 매출·EPS 가이던스",
            "컨센서스 추정치 변경",
            "마진·FCF 전망"
          ],
          "interpretation": "VRT에 대한 회사 전망 변경 · 추정치 재평가 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 가이던스 변화는 다음 분기의 매출·EPS 컨센서스와 적정가 계산을 직접 바꿀 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 0.67,
          "quality": "medium",
          "verifiedNumbers": [
            "46.6%",
            "11.9%",
            "9.9%",
            "88%",
            "14%",
            "35%",
            "18%",
            "24%"
          ],
          "sourceExcerpt": [
            "Vertiv Has Guided Itself Into A Steep Second Half | Trefis Vertiv Has Guided Itself Into A Steep Second Half September 14th, 2026 · by Trefis Team VRT YTD +46.6% SPY YTD +11.9% XLI YTD +9.9% Analyze VRT → Vertiv (VRT) is up about 88% over t",
            "The number that should worry a holder sits in the company’s own guidance: organic growth of roughly 35% in the third quarter of 2026, against the 18% organic pace it just delivered.",
            "Everything about the second half of 2026 turns on that step."
          ],
          "analysisUpdatedAt": 1789480067.5007434
        }
      },
      {
        "headline": "Unusually High Volume in Deep Out-of-the-Money Vertiv Call Options Shows Investors Bullish on VRT",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=05153fd3e4f635eeb8308784217c0f37c7332234bc8cb3b5650e343dd1385534",
        "datetime": 1789407002,
        "headlineKo": "깊은 외가격 Vertiv 콜 옵션의 비정상적으로 높은 거래량은 투자자들이 VRT에 대해 낙관적이라는 것을 보여줍니다",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Unusually High Volume in Deep Out-of-the-Money Vertiv Call Options Shows Investors Bullish on VRT",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "VRT",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 VRT의 사업과 관련된 'Unusually High Volume in Deep Out-of-the-Money Vertiv Call Options Shows Investors Bullish on VRT' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "VRT 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480068.6062326
        }
      },
      {
        "headline": "Vertiv vs. Broadcom: Which AI Infrastructure Stock Has More Upside?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4884c92aa2a6bec95c3ed8333166e11febb5730a577a4c2c7c8da773d9950a5b",
        "datetime": 1789404420,
        "headlineKo": "Vertiv vs. Broadcom: 어떤 AI 인프라 주식이 더 많은 상승 여력을 가지고 있나요?",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Is Vertiv (VRT) a Solid Growth Stock? 3 Reasons to Think \"Yes\"",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=34c960045559082c4a7bbfb81bbeea9a3001c738119fb8e290681936f9fbd011",
        "datetime": 1789404302,
        "headlineKo": "Vertiv(VRT)는 견고한 성장주입니까? \"예\"라고 생각하는 3가지 이유",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:47",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "MOD": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-26",
      "hour": "",
      "epsEstimate": 1.4961,
      "revenueEstimate": 978233106
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Modine to Host Analyst and Investor Day on November 18, 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b825d7f21d8a76795d15bf48a76189d38a1f23c7c4db28fcd5970e9abd16539",
        "datetime": 1789383600,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Modine to Host Analyst and Investor Day on November 18, 2026",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MOD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MOD의 사업과 관련된 'Modine to Host Analyst and Investor Day on November 18, 2026' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MOD 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480075.9381657
        },
        "headlineKo": "Modine은 2026년 11월 18일에 분석가 및 투자자의 날을 주최합니다."
      },
      {
        "headline": "Gentherm (THRM) Shareholders Approve Modine Merger, Clear for October Close",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=236d75e584bb848970fb5d9d6654fe59b5f521b2971f7883947ea38320cc7811",
        "datetime": 1789292111,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Gentherm (THRM) Shareholders Approve Modine Merger, Clear for October Close",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MOD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MOD의 사업과 관련된 'Gentherm (THRM) Shareholders Approve Modine Merger, Clear for October Close' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MOD 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480077.9175053
        },
        "headlineKo": "Gentherm(THRM) 주주, Modine 합병 승인, 10월 종료"
      },
      {
        "headline": "Modine to Become Modexus Solutions, Marking Next Chapter as Diversified Thermal Management Solutions Company",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1aaea81ab172fecb24ce561401c2e1aa55178c3f5a7b6ee4b0564e102fd1b8ab",
        "datetime": 1789071300,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Modine to Become Modexus Solutions, Marking Next Chapter as Diversified Thermal Management Solutions Company",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MOD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MOD의 사업과 관련된 'Modine to Become Modexus Solutions, Marking Next Chapter as Diversified Thermal Management Solutions Company' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MOD 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480079.6474626
        },
        "headlineKo": "Modine, Modexus 솔루션이 되어 다각화된 열 관리 솔루션 회사로 다음 장을 열다"
      },
      {
        "headline": "Gentherm Shareholders Approve Combination with Modine’s Performance Technologies Business",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ddbf7f532f1fb214994c50c52fb3dea9ded08b9d8d1cd244ab9919d85ff68b1",
        "datetime": 1789059600,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Gentherm 주주들은 Modine의 성능 기술 사업과의 결합을 승인했습니다."
      },
      {
        "headline": "Modine Plans To Change Name To Modexus Solutions Following Spinoff Of Performance Technologies Operations, Merger With Gentherm",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=af0d6389d4392b308a5a921d67215cf8b84e1dfb14e92ce750d0cf3fe9d5ffd7",
        "datetime": 1789057106,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Modine은 Performance Technologies 운영 분사 후 Gentherm과 합병하여 Modexus Solutions로 이름을 변경할 계획입니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Modine to Host Analyst and Investor Day on November 18, 2026",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=4b825d7f21d8a76795d15bf48a76189d38a1f23c7c4db28fcd5970e9abd16539",
        "datetime": 1789383600,
        "headlineKo": "Modine은 2026년 11월 18일에 분석가 및 투자자의 날을 주최합니다.",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Modine to Host Analyst and Investor Day on November 18, 2026",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MOD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MOD의 사업과 관련된 'Modine to Host Analyst and Investor Day on November 18, 2026' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MOD 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480075.9381657
        }
      },
      {
        "headline": "Gentherm (THRM) Shareholders Approve Modine Merger, Clear for October Close",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=236d75e584bb848970fb5d9d6654fe59b5f521b2971f7883947ea38320cc7811",
        "datetime": 1789292111,
        "headlineKo": "Gentherm(THRM) 주주, Modine 합병 승인, 10월 종료",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Gentherm (THRM) Shareholders Approve Modine Merger, Clear for October Close",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MOD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MOD의 사업과 관련된 'Gentherm (THRM) Shareholders Approve Modine Merger, Clear for October Close' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MOD 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480077.9175053
        }
      },
      {
        "headline": "Modine to Become Modexus Solutions, Marking Next Chapter as Diversified Thermal Management Solutions Company",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=1aaea81ab172fecb24ce561401c2e1aa55178c3f5a7b6ee4b0564e102fd1b8ab",
        "datetime": 1789071300,
        "headlineKo": "Modine, Modexus 솔루션이 되어 다각화된 열 관리 솔루션 회사로 다음 장을 열다",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Modine to Become Modexus Solutions, Marking Next Chapter as Diversified Thermal Management Solutions Company",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "MOD",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 MOD의 사업과 관련된 'Modine to Become Modexus Solutions, Marking Next Chapter as Diversified Thermal Management Solutions Company' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "MOD 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480079.6474626
        }
      },
      {
        "headline": "Gentherm Shareholders Approve Combination with Modine’s Performance Technologies Business",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=9ddbf7f532f1fb214994c50c52fb3dea9ded08b9d8d1cd244ab9919d85ff68b1",
        "datetime": 1789059600,
        "headlineKo": "Gentherm 주주들은 Modine의 성능 기술 사업과의 결합을 승인했습니다.",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Modine Plans To Change Name To Modexus Solutions Following Spinoff Of Performance Technologies Operations, Merger With Gentherm",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=af0d6389d4392b308a5a921d67215cf8b84e1dfb14e92ce750d0cf3fe9d5ffd7",
        "datetime": 1789057106,
        "headlineKo": "Modine은 Performance Technologies 운영 분사 후 Gentherm과 합병하여 Modexus Solutions로 이름을 변경할 계획입니다.",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:48",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "STX": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-26",
      "hour": "",
      "epsEstimate": 7.4374,
      "revenueEstimate": 4159155760
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Seagate (STX) Stock Could Trade At A Discount Following AI Storage Demand Research",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=82e28d53564e3b9fa71a4cac737775a7c06aa3719dcc7b3e3445f4fd03442136",
        "datetime": 1789463541,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Seagate (STX) Stock Could Trade At A Discount Following AI Storage Demand Research",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "STX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 STX의 사업과 관련된 'Seagate (STX) Stock Could Trade At A Discount Following AI Storage Demand Research' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "STX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480089.3624003
        },
        "headlineKo": "Seagate(STX) 주식은 AI 스토리지 수요 조사에 따라 할인 거래될 수 있습니다."
      },
      {
        "headline": "Seagate, Skyworks Solutions, Semtech, Nova, and FormFactor Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=01264e068db9fbcfdea72f04fa10ae9bb0ac692f9cf1d5ca2f7345e3c9c06520",
        "datetime": 1789432530,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Seagate, Skyworks Solutions, Semtech, Nova, and FormFactor Shares Are Falling, What You Need To Know",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "STX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 STX의 사업과 관련된 'Seagate, Skyworks Solutions, Semtech, Nova, and FormFactor Shares Are Falling, What You Need To Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "STX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480091.4105825
        },
        "headlineKo": "Seagate, Skyworks Solutions, Semtech, Nova 및 FormFactor 주식이 하락하고 있습니다. 알아야 할 사항"
      },
      {
        "headline": "Q2 Rundown: Seagate (NASDAQ:STX) Vs Other Semiconductors Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc0aef41d07f9c48f6fd7e6dcad495275dde8a1fd03ef4813dd64c2bbb3c5263",
        "datetime": 1789426770,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Q2 Rundown: Seagate (NASDAQ:STX) Vs Other Semiconductors Stocks",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "STX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 STX의 사업과 관련된 'Q2 Rundown: Seagate (NASDAQ:STX) Vs Other Semiconductors Stocks' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "STX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480093.469774
        },
        "headlineKo": "2분기 요약: Seagate(NASDAQ:STX) 대 기타 반도체 주식"
      },
      {
        "headline": "Seagate Vs. Western Digital: One Moved First on AI Storage Demand. The Other Is Playing It Safe.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b1a6923e505450bebcd8832ef22ad0ab112689e242fd8cbf207cbf68ae354a8",
        "datetime": 1789394943,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "씨게이트 대. Western Digital: AI 스토리지 수요에서 먼저 움직입니다. 다른 하나는 안전하게 플레이하고 있습니다."
      },
      {
        "headline": "Seagate Has Real Upside Left. That Does Not Mean It Deserves Your Money Right Now.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8e5de3319b11b28ed3d3afd1effd46206b029d12da514206d01ba7071dd1b6b4",
        "datetime": 1789394139,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Seagate는 실질적인 상승 여력이 있습니다. 그렇다고 지금 당장 돈을 쓸 가치가 있다는 뜻은 아닙니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Seagate (STX) Stock Could Trade At A Discount Following AI Storage Demand Research",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=82e28d53564e3b9fa71a4cac737775a7c06aa3719dcc7b3e3445f4fd03442136",
        "datetime": 1789463541,
        "headlineKo": "Seagate(STX) 주식은 AI 스토리지 수요 조사에 따라 할인 거래될 수 있습니다.",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Seagate (STX) Stock Could Trade At A Discount Following AI Storage Demand Research",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "STX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 STX의 사업과 관련된 'Seagate (STX) Stock Could Trade At A Discount Following AI Storage Demand Research' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 판매량·ASP(평균판매가격)·매출총이익률 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "STX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480089.3624003
        }
      },
      {
        "headline": "Seagate, Skyworks Solutions, Semtech, Nova, and FormFactor Shares Are Falling, What You Need To Know",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=01264e068db9fbcfdea72f04fa10ae9bb0ac692f9cf1d5ca2f7345e3c9c06520",
        "datetime": 1789432530,
        "headlineKo": "Seagate, Skyworks Solutions, Semtech, Nova 및 FormFactor 주식이 하락하고 있습니다. 알아야 할 사항",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Seagate, Skyworks Solutions, Semtech, Nova, and FormFactor Shares Are Falling, What You Need To Know",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "STX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 STX의 사업과 관련된 'Seagate, Skyworks Solutions, Semtech, Nova, and FormFactor Shares Are Falling, What You Need To Know' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "STX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480091.4105825
        }
      },
      {
        "headline": "Q2 Rundown: Seagate (NASDAQ:STX) Vs Other Semiconductors Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=fc0aef41d07f9c48f6fd7e6dcad495275dde8a1fd03ef4813dd64c2bbb3c5263",
        "datetime": 1789426770,
        "headlineKo": "2분기 요약: Seagate(NASDAQ:STX) 대 기타 반도체 주식",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Q2 Rundown: Seagate (NASDAQ:STX) Vs Other Semiconductors Stocks",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "STX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 STX의 사업과 관련된 'Q2 Rundown: Seagate (NASDAQ:STX) Vs Other Semiconductors Stocks' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "STX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480093.469774
        }
      },
      {
        "headline": "Seagate Vs. Western Digital: One Moved First on AI Storage Demand. The Other Is Playing It Safe.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=3b1a6923e505450bebcd8832ef22ad0ab112689e242fd8cbf207cbf68ae354a8",
        "datetime": 1789394943,
        "headlineKo": "씨게이트 대. Western Digital: AI 스토리지 수요에서 먼저 움직입니다. 다른 하나는 안전하게 플레이하고 있습니다.",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Seagate Has Real Upside Left. That Does Not Mean It Deserves Your Money Right Now.",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=8e5de3319b11b28ed3d3afd1effd46206b029d12da514206d01ba7071dd1b6b4",
        "datetime": 1789394139,
        "headlineKo": "Seagate는 실질적인 상승 여력이 있습니다. 그렇다고 지금 당장 돈을 쓸 가치가 있다는 뜻은 아닙니다.",
        "relevance": 0.67,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:48",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "EME": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-28",
      "hour": "",
      "epsEstimate": 8.4031,
      "revenueEstimate": 5240414997
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Here's Why Emcor Group (EME) Fell More Than Broader Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11d6be4d10f624684c8cb5f99097e7f3d760a7d0ace0cf32ac81252b73080a26",
        "datetime": 1789422604,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Here's Why Emcor Group (EME) Fell More Than Broader Market",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "EME",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 EME의 사업과 관련된 'Here's Why Emcor Group (EME) Fell More Than Broader Market' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "EME 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480100.4063008
        },
        "headlineKo": "Emcor Group(EME)이 더 넓은 시장보다 더 하락한 이유는 다음과 같습니다."
      },
      {
        "headline": "EMCOR Group, Inc. Announces Participation in Upcoming Investor Event",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2ba3619f3e5d6ad82c4dda4d32a6a1307f552345dec5d842989e038535fa2a35",
        "datetime": 1789140600,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "EMCOR Group, Inc. Announces Participation in Upcoming Investor Event",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "EME",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 EME의 사업과 관련된 'EMCOR Group, Inc. Announces Participation in Upcoming Investor Event' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "EME 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480102.7316864
        },
        "headlineKo": "EMCOR Group, Inc., 다가오는 투자자 이벤트에 참가 발표"
      },
      {
        "headline": "Will EMCOR's 19.6% Organic Growth Stay Elevated Into 2027?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=96b2d961eee6e242695c4e2685b131622967b45c9d68405ac62d3da48a1815e5",
        "datetime": 1789139820,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Will EMCOR's 19.6% Organic Growth Stay Elevated Into 2027?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "EME",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 EME의 사업과 관련된 'Will EMCOR's 19.6% Organic Growth Stay Elevated Into 2027?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "EME 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480104.3331594
        },
        "headlineKo": "EMCOR의 19.6% 유기적 성장이 2027년까지 유지됩니까?"
      },
      {
        "headline": "Here is What to Know Beyond Why EMCOR Group, Inc. (EME) is a Trending Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70ff1306ad807e96d66305155331b32d3c9bd48477392341b6e8907d0b11c86d",
        "datetime": 1788958802,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "EMCOR Group, Inc.(EME)가 인기 주식인 이유 외에 알아야 할 사항은 다음과 같습니다."
      },
      {
        "headline": "EMCOR Group: AI-Driven Data Center Growth Supports Strong Revenue And Earnings Upside",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f09c9827fe678c36993e2ca3b6fbd551c4a4d1bfe816a45587fc7f51253f1d7c",
        "datetime": 1788932363,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "EMCOR 그룹: AI 기반 데이터 센터 성장으로 강력한 수익 및 이익 상승세 지원"
      }
    ],
    "newsHistory": [
      {
        "headline": "Here's Why Emcor Group (EME) Fell More Than Broader Market",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=11d6be4d10f624684c8cb5f99097e7f3d760a7d0ace0cf32ac81252b73080a26",
        "datetime": 1789422604,
        "headlineKo": "Emcor Group(EME)이 더 넓은 시장보다 더 하락한 이유는 다음과 같습니다.",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Here's Why Emcor Group (EME) Fell More Than Broader Market",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "EME",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 EME의 사업과 관련된 'Here's Why Emcor Group (EME) Fell More Than Broader Market' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "EME 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480100.4063008
        }
      },
      {
        "headline": "EMCOR Group, Inc. Announces Participation in Upcoming Investor Event",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=2ba3619f3e5d6ad82c4dda4d32a6a1307f552345dec5d842989e038535fa2a35",
        "datetime": 1789140600,
        "headlineKo": "EMCOR Group, Inc., 다가오는 투자자 이벤트에 참가 발표",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "EMCOR Group, Inc. Announces Participation in Upcoming Investor Event",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "EME",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 EME의 사업과 관련된 'EMCOR Group, Inc. Announces Participation in Upcoming Investor Event' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "EME 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480102.7316864
        }
      },
      {
        "headline": "Will EMCOR's 19.6% Organic Growth Stay Elevated Into 2027?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=96b2d961eee6e242695c4e2685b131622967b45c9d68405ac62d3da48a1815e5",
        "datetime": 1789139820,
        "headlineKo": "EMCOR의 19.6% 유기적 성장이 2027년까지 유지됩니까?",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Will EMCOR's 19.6% Organic Growth Stay Elevated Into 2027?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "EME",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 EME의 사업과 관련된 'Will EMCOR's 19.6% Organic Growth Stay Elevated Into 2027?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "EME 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480104.3331594
        }
      },
      {
        "headline": "Here is What to Know Beyond Why EMCOR Group, Inc. (EME) is a Trending Stock",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=70ff1306ad807e96d66305155331b32d3c9bd48477392341b6e8907d0b11c86d",
        "datetime": 1788958802,
        "headlineKo": "EMCOR Group, Inc.(EME)가 인기 주식인 이유 외에 알아야 할 사항은 다음과 같습니다.",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "EMCOR Group: AI-Driven Data Center Growth Supports Strong Revenue And Earnings Upside",
        "source": "SeekingAlpha",
        "url": "https://finnhub.io/api/news?id=f09c9827fe678c36993e2ca3b6fbd551c4a4d1bfe816a45587fc7f51253f1d7c",
        "datetime": 1788932363,
        "headlineKo": "EMCOR 그룹: AI 기반 데이터 센터 성장으로 강력한 수익 및 이익 상승세 지원",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:48",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "FIX": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-21",
      "hour": "",
      "epsEstimate": 12.9358,
      "revenueEstimate": 3427700125
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "Is Comfort Systems (FIX) a Buy as Wall Street Analysts Look Optimistic?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a752cbd461f75fd768c588e3ab1e0f847d89f5e1977d09994ab73fb24c012fbe",
        "datetime": 1789392603,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Is Comfort Systems (FIX) a Buy as Wall Street Analysts Look Optimistic?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "FIX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 FIX의 사업과 관련된 'Is Comfort Systems (FIX) a Buy as Wall Street Analysts Look Optimistic?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "FIX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480112.666541
        },
        "headlineKo": "월스트리트 분석가들이 낙관적으로 보이므로 Comfort Systems(FIX)를 매수해야 합니까?"
      },
      {
        "headline": "Comfort Systems USA (NYSE:FIX) Stands Out for High Growth and Improving Fundamentals",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=443b93fe5a587cde594a42497faf1ea17ba22c99ac09fbc91fd5ac6d00efbd21",
        "datetime": 1789374652,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Comfort Systems USA (NYSE:FIX) Stands Out for High Growth and Improving Fundamentals",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "FIX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 FIX의 사업과 관련된 'Comfort Systems USA (NYSE:FIX) Stands Out for High Growth and Improving Fundamentals' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "FIX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480113.7127411
        },
        "headlineKo": "Comfort Systems USA(NYSE:FIX)는 높은 성장과 펀더멘털 개선을 위해 두각을 나타내고 있습니다."
      },
      {
        "headline": "Will Comfort Systems' Modular Expansion Strengthen Growth and Returns?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f41e302a8eadb0f8773fd4862202c56676f2fd8930eaea3acde1d687aaf1fba8",
        "datetime": 1789135740,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Will Comfort Systems' Modular Expansion Strengthen Growth and Returns?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "FIX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 FIX의 사업과 관련된 'Will Comfort Systems' Modular Expansion Strengthen Growth and Returns?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "FIX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480115.7520797
        },
        "headlineKo": "Comfort Systems의 모듈식 확장으로 성장과 수익이 강화될까요?"
      },
      {
        "headline": "Comfort Systems Stock Plunges 12.4% in 3 Months: Buy the Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=898e32ce03efa32e0c7b4c719a5416387a1278fd33a30a878a299bcceb2eded1",
        "datetime": 1789059120,
        "relevance": 0.67,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "Comfort Systems 주식은 3개월 만에 12.4% 급락: 딥을 매수하시겠습니까?"
      },
      {
        "headline": "Here's How Much $1000 Invested In Comfort Systems USA 5 Years Ago Would Be Worth Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=26a9a1dcab5ae745740d5dfda713c61a7a9244f89978c030e5f26839f51b9784",
        "datetime": 1789057831,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "5년 전 미국 Comfort Systems에 투자한 $1000의 현재 가치는 다음과 같습니다."
      }
    ],
    "newsHistory": [
      {
        "headline": "Is Comfort Systems (FIX) a Buy as Wall Street Analysts Look Optimistic?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a752cbd461f75fd768c588e3ab1e0f847d89f5e1977d09994ab73fb24c012fbe",
        "datetime": 1789392603,
        "headlineKo": "월스트리트 분석가들이 낙관적으로 보이므로 Comfort Systems(FIX)를 매수해야 합니까?",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "neutral",
          "certainty": "본문 확인 필요",
          "label": "추가 확인이 필요한 뉴스",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Is Comfort Systems (FIX) a Buy as Wall Street Analysts Look Optimistic?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "FIX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 FIX의 사업과 관련된 'Is Comfort Systems (FIX) a Buy as Wall Street Analysts Look Optimistic?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "FIX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480112.666541
        }
      },
      {
        "headline": "Comfort Systems USA (NYSE:FIX) Stands Out for High Growth and Improving Fundamentals",
        "source": "ChartMill",
        "url": "https://finnhub.io/api/news?id=443b93fe5a587cde594a42497faf1ea17ba22c99ac09fbc91fd5ac6d00efbd21",
        "datetime": 1789374652,
        "headlineKo": "Comfort Systems USA(NYSE:FIX)는 높은 성장과 펀더멘털 개선을 위해 두각을 나타내고 있습니다.",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Comfort Systems USA (NYSE:FIX) Stands Out for High Growth and Improving Fundamentals",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "FIX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 FIX의 사업과 관련된 'Comfort Systems USA (NYSE:FIX) Stands Out for High Growth and Improving Fundamentals' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "FIX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480113.7127411
        }
      },
      {
        "headline": "Will Comfort Systems' Modular Expansion Strengthen Growth and Returns?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=f41e302a8eadb0f8773fd4862202c56676f2fd8930eaea3acde1d687aaf1fba8",
        "datetime": 1789135740,
        "headlineKo": "Comfort Systems의 모듈식 확장으로 성장과 수익이 강화될까요?",
        "relevance": 0.67,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "positive",
          "certainty": "본문 확인 필요",
          "label": "실적·수요 개선 가능성",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Will Comfort Systems' Modular Expansion Strengthen Growth and Returns?",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "FIX",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 FIX의 사업과 관련된 'Will Comfort Systems' Modular Expansion Strengthen Growth and Returns?' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "FIX 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 0.67,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480115.7520797
        }
      },
      {
        "headline": "Comfort Systems Stock Plunges 12.4% in 3 Months: Buy the Dip?",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=898e32ce03efa32e0c7b4c719a5416387a1278fd33a30a878a299bcceb2eded1",
        "datetime": 1789059120,
        "headlineKo": "Comfort Systems 주식은 3개월 만에 12.4% 급락: 딥을 매수하시겠습니까?",
        "relevance": 0.67,
        "keywordFlag": false
      },
      {
        "headline": "Here's How Much $1000 Invested In Comfort Systems USA 5 Years Ago Would Be Worth Today",
        "source": "Benzinga",
        "url": "https://finnhub.io/api/news?id=26a9a1dcab5ae745740d5dfda713c61a7a9244f89978c030e5f26839f51b9784",
        "datetime": 1789057831,
        "headlineKo": "5년 전 미국 Comfort Systems에 투자한 $1000의 현재 가치는 다음과 같습니다.",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:48",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  },
  "BE": {
    "_last_attempt_at": 1789479620.1462314,
    "nextEarnings": {
      "date": "2026-10-26",
      "hour": "amc",
      "epsEstimate": 0.6894,
      "revenueEstimate": 1079985251
    },
    "_earnings_status": "ok",
    "news": [
      {
        "headline": "BE Stock Falls Most In Nearly A Month: Why This Analyst Sees Over 36% Upside",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45bc5ebd57993dbf5273bf53afe9f375d12eb1f7a8e9fc2cba0fd4a1691bed12",
        "datetime": 1789434808,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "오늘 BE 주가가 거의 7% 하락한 이유는 무엇입니까?",
            "신규 에이전트 연결 트렌드 뉴스 수입 전체 DIA 0.60% SPY 0.18% QQQ 0.04% Trending FPS 10.11% RDDT 0.41% VERA 0.18% PLAY 12.40% RKLB 2.56% VKTX 3.87% MAAS 1.41% LLY 0.77% XLM 2.11% AXON 7.95% 홈 뉴스 시장 주식 BE 주식 하락 Mo",
            "BE 주식은 거의 한 달 만에 가장 많이 하락했습니다: 이 분석가가 36% 이상의 상승세를 보이는 이유 에너지 주식은 업계의 안전 문제를 제기한 최고 AI 리더들에 따른 AI 역풍 속에서 하락했습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 7%, 0.60%, 0.18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "BE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "BE에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "7%",
            "0.60%",
            "0.18%",
            "0.04%",
            "10.11%",
            "0.41%",
            "12.40%",
            "2.56%"
          ],
          "sourceExcerpt": [
            "Why Did BE Stock Fall Nearly 7% Today?",
            "New Connect your Agent Trending News Earnings All DIA 0.60% SPY 0.18% QQQ 0.04% Trending FPS 10.11% RDDT 0.41% VERA 0.18% PLAY 12.40% RKLB 2.56% VKTX 3.87% MAAS 1.41% LLY 0.77% XLM 2.11% AXON 7.95% Home News Markets Equity BE Stock Falls Mo",
            "BE Stock Falls Most In Nearly A Month: Why This Analyst Sees Over 36% Upside Bloom Energy shares declined amid AI headwinds following top AI leaders flagging safety concerns in the industry."
          ],
          "analysisUpdatedAt": 1789480125.8032334
        },
        "headlineKo": "BE 주식은 거의 한 달 만에 가장 많이 하락했습니다: 이 분석가가 36% 이상의 상승 여력을 보는 이유"
      },
      {
        "headline": "Bloom Energy (BE) Declines More Than Market: Some Information for Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ddd830e14e0456c6869c6d86ce3e765a01e458867b16a2cb61ea5e04192f7e0",
        "datetime": 1789423202,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "risk",
          "certainty": "본문 확인 필요",
          "label": "실적·재무 부담 확인 필요",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Bloom Energy (BE) Declines More Than Market: Some Information for Investors",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "BE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 BE의 사업과 관련된 'Bloom Energy (BE) Declines More Than Market: Some Information for Investors' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "BE 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480127.941917
        },
        "headlineKo": "Bloom Energy(BE)는 시장보다 더 많이 하락합니다: 투자자를 위한 일부 정보"
      },
      {
        "headline": "AMD, BE, CRWV In Focus: Situational Awareness Has Been Reportedly Buying Options Tied To These Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=714d14fc03292749fb6230cbe86b6010bac8821b4abcd12b5ab43fc3b3fef54f",
        "datetime": 1789141691,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "AMD, BE, CRWV 초점: 상황 인식이 이러한 주식과 관련된 옵션을 구매하는 것으로 보고됨 New 에이전트 연결 동향 뉴스 수익 모든 DIA 0.61% SPY 0.18% QQQ 0.03% 추세 FPS 10.11% RDDT 0.41% VERA 0.18% PLAY 12.04% RKLB",
            "AMD, BE, CRWV 집중: 상황 인식은 이러한 주식과 관련된 옵션을 구매한 것으로 보고되었습니다. 금요일 CNBC 보고서에 따르면 상황 인식은 SK Hynix, SanDisk 및 Roundhill Memory ETF와 같은 이름에서도 활성화되었습니다.",
            "해당 분기 동안 Blackstone의 기업 사모 펀드는 6.2% 상승했습니다 | 대표 이미지 출처: Pexels Arnab Paul · Stocktwits 2026년 9월 11일 게시 | 오전 11:48 EDT 공유 · 우리를 추가하세요 Leopold Aschenbrenn 여부는 확실하지 않습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.61%, 0.18%, 0.03% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "BE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "BE에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "0.61%",
            "0.18%",
            "0.03%",
            "10.11%",
            "0.41%",
            "12.04%",
            "2.53%",
            "3.95%"
          ],
          "sourceExcerpt": [
            "AMD, BE, CRWV In Focus: Situational Awareness Has Been Reportedly Buying Options Tied To These Stocks New Connect your Agent Trending News Earnings All DIA 0.61% SPY 0.18% QQQ 0.03% Trending FPS 10.11% RDDT 0.41% VERA 0.18% PLAY 12.04% RKLB",
            "AMD, BE, CRWV In Focus: Situational Awareness Has Been Reportedly Buying Options Tied To These Stocks According to a CNBC report on Friday, Situational Awareness was also active in names like SK Hynix, SanDisk and the Roundhill Memory ETF.",
            "During the quarter, Blackstone’s corporate private equity funds appreciated 6.2% | Representative Image Source: Pexels Arnab Paul · Stocktwits Published Sep 11, 2026 | 11:48 AM EDT Share · Add us on It is unclear whether Leopold Aschenbrenn"
          ],
          "analysisUpdatedAt": 1789480130.899738
        },
        "headlineKo": "AMD, BE, CRWV에 초점: 상황 인식이 이러한 주식과 관련된 옵션을 구매하는 것으로 보고됨"
      },
      {
        "headline": "Increasing Power Demand Amid AI Boom Strengthens Bloom Energy (BE)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d26d142d18e74a8761d0f015682096b8049e6b707103075dfd7bfeec451fc2e8",
        "datetime": 1789041662,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "AI 붐에 따른 전력 수요 증가 Bloom Energy (BE) 강화"
      },
      {
        "headline": "Stocks to Consider Before the Fed's September Decision: JPM, EOG, BE",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a40fb46e21f86db8f3d36fde087eb9d253f01b54d76d194b20674da0e7ba2ced",
        "datetime": 1788980400,
        "relevance": 1,
        "keywordFlag": false,
        "flagTerms": [],
        "headlineKo": "연준의 9월 결정 전 고려해야 할 주식: JPM, EOG, BE"
      }
    ],
    "newsHistory": [
      {
        "headline": "BE Stock Falls Most In Nearly A Month: Why This Analyst Sees Over 36% Upside",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=45bc5ebd57993dbf5273bf53afe9f375d12eb1f7a8e9fc2cba0fd4a1691bed12",
        "datetime": 1789434808,
        "headlineKo": "BE 주식은 거의 한 달 만에 가장 많이 하락했습니다: 이 분석가가 36% 이상의 상승 여력을 보는 이유",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "오늘 BE 주가가 거의 7% 하락한 이유는 무엇입니까?",
            "신규 에이전트 연결 트렌드 뉴스 수입 전체 DIA 0.60% SPY 0.18% QQQ 0.04% Trending FPS 10.11% RDDT 0.41% VERA 0.18% PLAY 12.40% RKLB 2.56% VKTX 3.87% MAAS 1.41% LLY 0.77% XLM 2.11% AXON 7.95% 홈 뉴스 시장 주식 BE 주식 하락 Mo",
            "BE 주식은 거의 한 달 만에 가장 많이 하락했습니다: 이 분석가가 36% 이상의 상승세를 보이는 이유 에너지 주식은 업계의 안전 문제를 제기한 최고 AI 리더들에 따른 AI 역풍 속에서 하락했습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 7%, 0.60%, 0.18% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "BE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "BE에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "7%",
            "0.60%",
            "0.18%",
            "0.04%",
            "10.11%",
            "0.41%",
            "12.40%",
            "2.56%"
          ],
          "sourceExcerpt": [
            "Why Did BE Stock Fall Nearly 7% Today?",
            "New Connect your Agent Trending News Earnings All DIA 0.60% SPY 0.18% QQQ 0.04% Trending FPS 10.11% RDDT 0.41% VERA 0.18% PLAY 12.40% RKLB 2.56% VKTX 3.87% MAAS 1.41% LLY 0.77% XLM 2.11% AXON 7.95% Home News Markets Equity BE Stock Falls Mo",
            "BE Stock Falls Most In Nearly A Month: Why This Analyst Sees Over 36% Upside Bloom Energy shares declined amid AI headwinds following top AI leaders flagging safety concerns in the industry."
          ],
          "analysisUpdatedAt": 1789480125.8032334
        }
      },
      {
        "headline": "Bloom Energy (BE) Declines More Than Market: Some Information for Investors",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=7ddd830e14e0456c6869c6d86ce3e765a01e458867b16a2cb61ea5e04192f7e0",
        "datetime": 1789423202,
        "headlineKo": "Bloom Energy(BE)는 시장보다 더 많이 하락합니다: 투자자를 위한 일부 정보",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "low",
          "tone": "risk",
          "certainty": "본문 확인 필요",
          "label": "실적·재무 부담 확인 필요",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "Bloom Energy (BE) Declines More Than Market: Some Information for Investors",
            "제목만으로는 수치와 원인을 확정할 수 없습니다."
          ],
          "why": [
            "일시적 사건인지 구조적 변화인지에 따라 주가 영향이 달라집니다.",
            "다음 실적에서 매출·이익·현금흐름에 실제 반영됐는지 확인해야 합니다."
          ],
          "beginner": [
            "뉴스가 나왔다고 바로 매수·매도할 필요는 없습니다.",
            "기사의 전망과 회사가 공시한 실제 숫자를 구분해서 보세요."
          ],
          "impacts": [
            {
              "ticker": "BE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "다음 실적 매출·EPS",
            "영업현금흐름과 CAPEX",
            "회사 공식 가이던스",
            "주가 반응이 하루 이상 지속되는지"
          ],
          "interpretation": "이 기사는 BE의 사업과 관련된 'Bloom Energy (BE) Declines More Than Market: Some Information for Investors' 이슈입니다. 기사에 나온 전망은 아직 회사가 공시한 실적이 아니므로, 뉴스 → 다음 실적의 매출·이익·현금흐름 → 주가 반영 순서로 확인해야 합니다.",
          "decision": "BE 실적과의 직접 연결 근거가 부족해 자동 상세 해석을 보류합니다. 원문에서 회사명·사업부·금액·공식 전망이 확인될 때 다시 평가합니다.",
          "relevance": 1,
          "quality": "low",
          "verifiedNumbers": [],
          "sourceExcerpt": [],
          "analysisUpdatedAt": 1789480127.941917
        }
      },
      {
        "headline": "AMD, BE, CRWV In Focus: Situational Awareness Has Been Reportedly Buying Options Tied To These Stocks",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=714d14fc03292749fb6230cbe86b6010bac8821b4abcd12b5ab43fc3b3fef54f",
        "datetime": 1789141691,
        "headlineKo": "AMD, BE, CRWV에 초점: 상황 인식이 이러한 주식과 관련된 옵션을 구매하는 것으로 보고됨",
        "relevance": 1,
        "keywordFlag": false,
        "analysis": {
          "version": 9,
          "importance": "high",
          "tone": "risk",
          "certainty": "본문 기반 간이 분석",
          "label": "주식 희석 · 주당가치 확인",
          "horizon": "다음 실적까지 확인",
          "facts": [
            "AMD, BE, CRWV 초점: 상황 인식이 이러한 주식과 관련된 옵션을 구매하는 것으로 보고됨 New 에이전트 연결 동향 뉴스 수익 모든 DIA 0.61% SPY 0.18% QQQ 0.03% 추세 FPS 10.11% RDDT 0.41% VERA 0.18% PLAY 12.04% RKLB",
            "AMD, BE, CRWV 집중: 상황 인식은 이러한 주식과 관련된 옵션을 구매한 것으로 보고되었습니다. 금요일 CNBC 보고서에 따르면 상황 인식은 SK Hynix, SanDisk 및 Roundhill Memory ETF와 같은 이름에서도 활성화되었습니다.",
            "해당 분기 동안 Blackstone의 기업 사모 펀드는 6.2% 상승했습니다 | 대표 이미지 출처: Pexels Arnab Paul · Stocktwits 2026년 9월 11일 게시 | 오전 11:48 EDT 공유 · 우리를 추가하세요 Leopold Aschenbrenn 여부는 확실하지 않습니다."
          ],
          "why": [
            "신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다.",
            "이번 기사에서 확인된 구체적 수치: 0.61%, 0.18%, 0.03% — 공식 실적·가이던스와 일치하는지 확인이 필요합니다.",
            "BE의 다음 공시에서 기사 내용이 실제 숫자로 연결되는지 확인합니다."
          ],
          "beginner": [
            "회사 전체 가치는 같아도 주식 수가 늘면 한 주가 차지하는 몫이 줄 수 있습니다.",
            "뉴스의 방향과 현재 주가에 이미 반영된 기대는 별개로 봐야 합니다."
          ],
          "impacts": [
            {
              "ticker": "BE",
              "stance": "확인 필요",
              "reason": "회사 실적과의 연결고리 확인"
            }
          ],
          "watch": [
            "신규 주식 수·행사가격",
            "조달 자금 사용처",
            "완전희석 주식수와 EPS"
          ],
          "interpretation": "BE에 대한 주식 희석 · 주당가치 확인 뉴스입니다. 현재 확인된 기사 내용이 매출·EPS·영업이익률에 어떤 영향을 주는지 다음 공시와 비교합니다.",
          "decision": "현재 판단: 신주·워런트는 회사 자금을 늘리지만 기존 주주의 지분과 주당 이익을 희석할 수 있습니다. 원문에서 확인되지 않은 금액과 인과관계는 사실로 저장하지 않습니다.",
          "relevance": 1,
          "quality": "medium",
          "verifiedNumbers": [
            "0.61%",
            "0.18%",
            "0.03%",
            "10.11%",
            "0.41%",
            "12.04%",
            "2.53%",
            "3.95%"
          ],
          "sourceExcerpt": [
            "AMD, BE, CRWV In Focus: Situational Awareness Has Been Reportedly Buying Options Tied To These Stocks New Connect your Agent Trending News Earnings All DIA 0.61% SPY 0.18% QQQ 0.03% Trending FPS 10.11% RDDT 0.41% VERA 0.18% PLAY 12.04% RKLB",
            "AMD, BE, CRWV In Focus: Situational Awareness Has Been Reportedly Buying Options Tied To These Stocks According to a CNBC report on Friday, Situational Awareness was also active in names like SK Hynix, SanDisk and the Roundhill Memory ETF.",
            "During the quarter, Blackstone’s corporate private equity funds appreciated 6.2% | Representative Image Source: Pexels Arnab Paul · Stocktwits Published Sep 11, 2026 | 11:48 AM EDT Share · Add us on It is unclear whether Leopold Aschenbrenn"
          ],
          "analysisUpdatedAt": 1789480130.899738
        }
      },
      {
        "headline": "Increasing Power Demand Amid AI Boom Strengthens Bloom Energy (BE)",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=d26d142d18e74a8761d0f015682096b8049e6b707103075dfd7bfeec451fc2e8",
        "datetime": 1789041662,
        "headlineKo": "AI 붐에 따른 전력 수요 증가 Bloom Energy (BE) 강화",
        "relevance": 1,
        "keywordFlag": false
      },
      {
        "headline": "Stocks to Consider Before the Fed's September Decision: JPM, EOG, BE",
        "source": "Yahoo",
        "url": "https://finnhub.io/api/news?id=a40fb46e21f86db8f3d36fde087eb9d253f01b54d76d194b20674da0e7ba2ced",
        "datetime": 1788980400,
        "headlineKo": "연준의 9월 결정 전 고려해야 할 주식: JPM, EOG, BE",
        "relevance": 1,
        "keywordFlag": false
      }
    ],
    "_fetched_at": 1789479620.1462314,
    "_updated_label": "2026-09-15 22:48",
    "_last_success_at": 1789479620.1462314,
    "_collection_status": "ok",
    "_relevance_audit": {
      "ruleVersion": 3,
      "checked": 10,
      "removed": 0,
      "updated": "2026-09-15 22:48"
    }
  }
};
