// top100_reference_sample.py가 자동 생성 - 직접 수정하지 마세요.
const TOP100_REFERENCE_SAMPLE_DATA = {
  "schemaVersion": 1,
  "note": "참고 표본(과거 TOP100 신호) - 그 날짜에 실제로 기록된 신호와 이후 수익률, 현재 판정 로직으로 다시 계산하지 않음. 실시간 판정 성적표(verdict_scorecard_data.js)와는 분리된 구역.",
  "horizonDays": 20,
  "benchmarkNote": "TOP100 유니버스는 섹터 ETF가 지정돼 있지 않아 전부 SPY 대비로 계산함",
  "minSampleForRate": 20,
  "aggregate": {
    "n": 7,
    "label": "표본 부족(7개)",
    "hit_rate": 42.9,
    "avg_excess": -4.59
  },
  "rows": [
    {
      "t": "DELL",
      "d": "2026-10-15",
      "ret": -21.59,
      "benchmark_ret": -1.9,
      "excess": -19.69,
      "hit": false,
      "benchmark": "SPY"
    },
    {
      "t": "ANET",
      "d": "2026-10-15",
      "ret": 11.34,
      "benchmark_ret": -1.9,
      "excess": 13.24,
      "hit": true,
      "benchmark": "SPY"
    },
    {
      "t": "PANW",
      "d": "2026-10-16",
      "ret": -5.78,
      "benchmark_ret": -1.16,
      "excess": -4.61,
      "hit": false,
      "benchmark": "SPY"
    },
    {
      "t": "MRVL",
      "d": "2026-10-16",
      "ret": -31.19,
      "benchmark_ret": -1.16,
      "excess": -30.03,
      "hit": false,
      "benchmark": "SPY"
    },
    {
      "t": "APH",
      "d": "2026-10-20",
      "ret": -3.73,
      "benchmark_ret": -4.76,
      "excess": 1.03,
      "hit": true,
      "benchmark": "SPY"
    },
    {
      "t": "META",
      "d": "2026-10-22",
      "ret": -8.11,
      "benchmark_ret": -6.29,
      "excess": -1.82,
      "hit": false,
      "benchmark": "SPY"
    },
    {
      "t": "APH",
      "d": "2026-10-22",
      "ret": 3.48,
      "benchmark_ret": -6.29,
      "excess": 9.77,
      "hit": true,
      "benchmark": "SPY"
    }
  ],
  "skipped": [
    {
      "t": "AMD",
      "d": "2026-11-02",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "PLTR",
      "d": "2026-11-02",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "CRM",
      "d": "2026-11-03",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "CRWD",
      "d": "2026-11-05",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "XOM",
      "d": "2026-11-09",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "CVX",
      "d": "2026-11-09",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "XOM",
      "d": "2026-11-10",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "CVX",
      "d": "2026-11-10",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "CRWD",
      "d": "2026-11-17",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "PFE",
      "d": "2026-11-18",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "PM",
      "d": "2026-11-19",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "DE",
      "d": "2026-11-19",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "MSFT",
      "d": "2026-11-20",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "TXN",
      "d": "2026-11-20",
      "reason": "20거래일 뒤 데이터 아직 없음"
    },
    {
      "t": "CRWD",
      "d": "2026-11-23",
      "reason": "20거래일 뒤 데이터 아직 없음"
    }
  ]
};
