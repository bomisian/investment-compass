// 자동 생성 파일 - verdict_scoring.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 판정 성적표 데이터 - 개인 매매 정보 없음, 집계 숫자만.
const VERDICT_SCORECARD_DATA = {
  "generatedAt": "2026-11-18T00:12:44",
  "horizons": [
    5,
    20,
    60
  ],
  "sampleMinForDisplay": 20,
  "all": {
    "buy": {
      "label": "매수 계열(분할 축적 검토)",
      "byHorizon": {
        "5": {
          "n": 17,
          "avgExcessVsSectorPct": 1.66,
          "medianExcessVsSectorPct": 0.08,
          "avgExcessVsSpyPct": 0.01,
          "avgMddPct": -4.0,
          "hitRate": 0.5294
        },
        "20": {
          "n": 5,
          "avgExcessVsSectorPct": 5.07,
          "medianExcessVsSectorPct": 5.1,
          "avgExcessVsSpyPct": -3.17,
          "avgMddPct": -11.61,
          "hitRate": 1.0
        },
        "60": {
          "n": 0
        }
      }
    },
    "avoid": {
      "label": "회피 계열(신규 접근 중지)",
      "byHorizon": {
        "5": {
          "n": 132,
          "avgExcessVsSectorPct": -3.1,
          "medianExcessVsSectorPct": -2.67,
          "avgExcessVsSpyPct": -3.44,
          "avgMddPct": -10.46,
          "hitRate": 0.7045
        },
        "20": {
          "n": 35,
          "avgExcessVsSectorPct": -6.46,
          "medianExcessVsSectorPct": -7.5,
          "avgExcessVsSpyPct": -10.36,
          "avgMddPct": -25.55,
          "hitRate": 0.6857
        },
        "60": {
          "n": 0
        }
      }
    },
    "neutral": {
      "label": "중립(관찰/눌림 대기/추세 반전 대기)",
      "byHorizon": {
        "5": {
          "n": 397,
          "avgExcessVsSectorPct": -2.51,
          "medianExcessVsSectorPct": -1.36,
          "avgExcessVsSpyPct": -4.45,
          "avgMddPct": -11.31
        },
        "20": {
          "n": 77,
          "avgExcessVsSectorPct": -4.86,
          "medianExcessVsSectorPct": -5.84,
          "avgExcessVsSpyPct": -9.32,
          "avgMddPct": -24.63
        },
        "60": {
          "n": 0
        }
      }
    }
  },
  "changeDaysOnly": {
    "buy": {
      "label": "매수 계열(분할 축적 검토)",
      "byHorizon": {
        "5": {
          "n": 5,
          "avgExcessVsSectorPct": -0.16,
          "medianExcessVsSectorPct": 0.08,
          "avgExcessVsSpyPct": -2.54,
          "avgMddPct": -5.83,
          "hitRate": 0.6
        },
        "20": {
          "n": 3,
          "avgExcessVsSectorPct": 3.56,
          "medianExcessVsSectorPct": 4.65,
          "avgExcessVsSpyPct": -5.52,
          "avgMddPct": -15.0,
          "hitRate": 1.0
        },
        "60": {
          "n": 0
        }
      }
    },
    "avoid": {
      "label": "회피 계열(신규 접근 중지)",
      "byHorizon": {
        "5": {
          "n": 20,
          "avgExcessVsSectorPct": -2.3,
          "medianExcessVsSectorPct": -2.44,
          "avgExcessVsSpyPct": -4.17,
          "avgMddPct": -7.89,
          "hitRate": 0.75
        },
        "20": {
          "n": 17,
          "avgExcessVsSectorPct": -7.41,
          "medianExcessVsSectorPct": -7.5,
          "avgExcessVsSpyPct": -11.19,
          "avgMddPct": -24.67,
          "hitRate": 0.7647
        },
        "60": {
          "n": 0
        }
      }
    },
    "neutral": {
      "label": "중립(관찰/눌림 대기/추세 반전 대기)",
      "byHorizon": {
        "5": {
          "n": 88,
          "avgExcessVsSectorPct": -2.95,
          "medianExcessVsSectorPct": -2.54,
          "avgExcessVsSpyPct": -5.52,
          "avgMddPct": -11.25
        },
        "20": {
          "n": 36,
          "avgExcessVsSectorPct": -4.42,
          "medianExcessVsSectorPct": -6.03,
          "avgExcessVsSpyPct": -8.22,
          "avgMddPct": -24.7
        },
        "60": {
          "n": 0
        }
      }
    }
  },
  "totalRowsScored": 546,
  "totalChangeDaysScored": 113,
  "perTickerHistory": {
    "NVDA": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -13.28
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -14.12
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -12.29
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AAPL": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 11.92
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 10.92
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 14.27
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "GOOGL": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -10.13
      },
      {
        "date": "2026-10-16",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -11.68
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -14.6
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MSFT": [
      {
        "date": "2026-10-15",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 5.1
      },
      {
        "date": "2026-10-16",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 6.21
      },
      {
        "date": "2026-10-19",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 8.49
      },
      {
        "date": "2026-10-20",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AMZN": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -1.24
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -0.02
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -5.01
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "TSM": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 6.25
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 6.46
      },
      {
        "date": "2026-10-19",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 4.65
      },
      {
        "date": "2026-10-20",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AVGO": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 16.04
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 15.38
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 15.43
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "META": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -11.01
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": -8.06
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -8.23
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "TSLA": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 15.14
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 14.88
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 11.73
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MU": [
      {
        "date": "2026-10-15",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -4.04
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.61
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.76
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AMD": [
      {
        "date": "2026-10-15",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 14.32
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 10.83
      },
      {
        "date": "2026-10-19",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 9.51
      },
      {
        "date": "2026-10-20",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "INTC": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -25.61
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -23.77
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -23.94
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AMAT": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.19
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.35
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 0.57
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ORCL": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 2.68
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 4.94
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 3.3
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "CRM": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": -4.39
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": -6.48
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": -4.8
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "PLTR": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": -6.99
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": -6.68
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": -10.79
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "눌림 대기",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "QCOM": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 9.51
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 10.04
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 12.9
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ARM": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": -8.17
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": -6.53
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": -7.46
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MRVL": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -21.61
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -21.37
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -22.91
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ASML": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.55
      },
      {
        "date": "2026-10-16",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.91
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 1.19
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "LRCX": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.52
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.58
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.76
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "KLAC": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.38
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 1.73
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 2.3
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "SNDK": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -22.57
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": -22.06
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": -25.21
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "WDC": [
      {
        "date": "2026-10-15",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -2.47
      },
      {
        "date": "2026-10-16",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.12
      },
      {
        "date": "2026-10-19",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.46
      },
      {
        "date": "2026-10-20",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ANET": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 19.49
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 18.67
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 13.62
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "COHR": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 0.76
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 0.86
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -0.92
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "LITE": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -20.01
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -20.42
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -23.17
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "추세 반전 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "추세 반전 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "GEV": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": -7.72
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": -9.63
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": -9.98
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "CEG": [
      {
        "date": "2026-10-15",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -2.5
      },
      {
        "date": "2026-10-16",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.08
      },
      {
        "date": "2026-10-19",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.11
      },
      {
        "date": "2026-10-20",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "VST": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -17.94
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -16.84
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -19.73
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ETN": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -11.72
      },
      {
        "date": "2026-10-16",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -10.39
      },
      {
        "date": "2026-10-19",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -13.34
      },
      {
        "date": "2026-10-20",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "PWR": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.54
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.33
      },
      {
        "date": "2026-10-19",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.65
      },
      {
        "date": "2026-10-20",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "HUBB": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.68
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.84
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -8.1
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "VRT": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -3.3
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -2.72
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -7.84
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MOD": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -32.03
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -9.48
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -12.12
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "STX": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -10.87
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -7.5
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -8.7
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "EME": [
      {
        "date": "2026-10-15",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -10.45
      },
      {
        "date": "2026-10-16",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -9.24
      },
      {
        "date": "2026-10-19",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -10.28
      },
      {
        "date": "2026-10-20",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "FIX": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -24.77
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -23.3
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -27.15
      },
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "BE": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -10.62
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -10.06
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -15.67
      },
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-30",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-02",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-09",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-10",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-11",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-12",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-13",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-16",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ]
  }
};
