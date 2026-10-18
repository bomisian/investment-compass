// top100_reference_sample.py가 자동 생성 - 직접 수정하지 마세요.
const TOP100_REFERENCE_SAMPLE_DATA = {
  "schemaVersion": 1,
  "note": "참고 표본(과거 TOP100 신호) - 그 날짜에 실제로 기록된 신호와 이후 수익률, 현재 판정 로직으로 다시 계산하지 않음. 실시간 판정 성적표(verdict_scorecard_data.js)와는 분리된 구역.",
  "horizonDays": 20,
  "benchmarkNote": "TOP100 유니버스는 섹터 ETF가 지정돼 있지 않아 전부 SPY 대비로 계산함",
  "minSampleForRate": 20,
  "aggregate": {
    "n": 0,
    "label": "표본 부족(0개)",
    "hit_rate": null,
    "avg_excess": null
  },
  "rows": [],
  "skipped": [
    {
      "t": "DELL",
      "d": "2026-10-15",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "ANET",
      "d": "2026-10-15",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "PANW",
      "d": "2026-10-16",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "MRVL",
      "d": "2026-10-16",
      "reason": "20거래일 뒤 데이터 아직 없음"
    }
  ]
};
