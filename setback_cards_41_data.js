// setback_cards_41_data.js
// 사건 영향 의견 카드 데이터 — 읽기 전용, 자동매매/텔레그램/매수매도신호 연결 없음
// 생성: 2026-10-08T00:00:00
// 출처: LONGTERM_SHORTTERM_SETBACK_CARD_PILOT_v2_20261008.md (수동 반영, 자동 생성 아님)
// 주의: 이 데이터에 없는 종목은 '최근 구조화 사건 없음'으로 표시한다. 빈 값·추정값으로 채우지 않는다.
const SETBACK_CARDS_41 = {
  "generated": "2026-10-08T00:00:00",
  "source": "LONGTERM_SHORTTERM_SETBACK_CARD_PILOT_v2_20261008.md (수동 반영, 자동 생성 아님)",
  "note": "이 데이터에 없는 종목은 '최근 구조화 사건 없음'으로 표시한다. 빈 값·추정값으로 채우지 않는다.",
  "tickers": {
    "TSLA": {
      "event_date": "2026-07-23",
      "state": "혼합 — 다음 확인 필요",
      "evidence_confidence": "높음",
      "price_context_confidence": "보통",
      "facts": [
        "Q2 2026 영업이익 -57% YoY($398M) — 자동차 규제크레딧 매출 급감($439M→$146M) 동반",
        "같은 기간 매출 +21% YoY, OCF +84% YoY — 수요 자체는 성장 지속"
      ],
      "next_check": "2026-10-21 Q3 10-Q에서 영업이익률 회복 여부, 규제크레딧 제외 본업 마진 개선 여부",
      "source_correction_case": false
    },
    "HUBB": {
      "event_date": "2026-07-28",
      "state": "혼합 — 다음 확인 필요",
      "evidence_confidence": "높음",
      "price_context_confidence": "낮음",
      "facts": [
        "NSI 인수 자금조달로 부채 확대($900M 텀론+$1.9B 선순위채), 조정영업마진 -50bp",
        "유기성장 +10%, 그리드·데이터센터 수요 서사는 매출로 뒷받침됨"
      ],
      "next_check": "마진이 추가로 밀리는지(구조적 신호) 또는 회복하는지(일시적 비용), 인수 통합비용 별도 공시 여부",
      "source_correction_case": false
    },
    "INTC": {
      "event_date": "2026-07-23",
      "state": "중요 악재 근거 없음",
      "evidence_confidence": "보통",
      "price_context_confidence": "보통",
      "facts": [
        "Q2 2026 GAAP 순손실 -$11.0B 공시 — 이 중 약 $13.6B는 정부 관련 에스크로 주식의 비현금 공정가치 평가손실",
        "매출 +25% YoY, GAAP 영업이익 흑자전환($1.8B) — 본업은 개선 방향"
      ],
      "next_check": "(별도 관찰 대상, 이번 판정을 바꾸지 않음) CAPEX가 증설 서사와 반대로 계속 줄어드는지, 파운드리 외부 수주 공식 발표 여부",
      "source_correction_case": false
    },
    "BE": {
      "event_date": "2026-07-28",
      "state": "혼합 — 다음 확인 필요",
      "evidence_confidence": "보통",
      "price_context_confidence": "높음",
      "facts": [
        "발행주식수 +25.9% YoY, 총부채 +120% YoY — 자본집약적 성장의 구조적 특성 가능성",
        "매출 +165.5% YoY, OCF 흑자 전환, Brookfield 파트너십 5배 확대($5B→$25B)"
      ],
      "next_check": "다음 1~2개 분기에도 희석·차입이 비슷한 속도로 지속되는지(구조적 신호 강화)",
      "source_correction_case": false
    },
    "ORCL": {
      "event_date": "2026-09-10",
      "state": "단기 압박 우세",
      "evidence_confidence": "보통",
      "price_context_confidence": "높음",
      "facts": [
        "2차 소스 기반 'FY2027 중 $40B 추가 차입' 서술 — SEC 8-K 원문 확인 결과 사실이 아니었음(실제는 부채 $4.2B 감소 + $20B 지분증자)",
        "Q1 FY2027 OCF +184% YoY 중 상당부분이 AI 계약 선수금(금융구조성), FCF는 약 -$5,396M"
      ],
      "next_check": "다음 분기 FCF 지속 음수 여부, 선수금 아닌 순수 반복매출 기반 OCF 증가 확인",
      "source_correction_case": true
    }
  }
};
