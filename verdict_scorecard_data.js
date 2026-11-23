// 자동 생성 파일 - verdict_scoring.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 판정 성적표 데이터 - 개인 매매 정보 없음, 집계 숫자만.
const VERDICT_SCORECARD_DATA = {
  "generatedAt": "2026-11-24T00:02:32",
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
          "n": 19,
          "avgExcessVsSectorPct": 1.59,
          "medianExcessVsSectorPct": 0.08,
          "avgExcessVsSpyPct": -0.05,
          "avgMddPct": -4.02,
          "hitRate": 0.5263
        },
        "20": {
          "n": 11,
          "avgExcessVsSectorPct": 5.58,
          "medianExcessVsSectorPct": 6.21,
          "avgExcessVsSpyPct": -2.96,
          "avgMddPct": -12.58,
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
          "n": 156,
          "avgExcessVsSectorPct": -2.42,
          "medianExcessVsSectorPct": -2.48,
          "avgExcessVsSpyPct": -2.86,
          "avgMddPct": -10.43,
          "hitRate": 0.6923
        },
        "20": {
          "n": 87,
          "avgExcessVsSectorPct": -6.09,
          "medianExcessVsSectorPct": -5.78,
          "avgExcessVsSpyPct": -10.15,
          "avgMddPct": -26.24,
          "hitRate": 0.6667
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
          "n": 527,
          "avgExcessVsSectorPct": -2.03,
          "medianExcessVsSectorPct": -0.95,
          "avgExcessVsSpyPct": -4.25,
          "avgMddPct": -11.27
        },
        "20": {
          "n": 175,
          "avgExcessVsSectorPct": -3.47,
          "medianExcessVsSectorPct": -4.8,
          "avgExcessVsSpyPct": -8.46,
          "avgMddPct": -24.7
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
          "n": 19,
          "avgExcessVsSectorPct": -7.03,
          "medianExcessVsSectorPct": -7.5,
          "avgExcessVsSpyPct": -10.63,
          "avgMddPct": -23.79,
          "hitRate": 0.7895
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
          "n": 100,
          "avgExcessVsSectorPct": -2.98,
          "medianExcessVsSectorPct": -3.0,
          "avgExcessVsSpyPct": -5.65,
          "avgMddPct": -11.52
        },
        "20": {
          "n": 47,
          "avgExcessVsSectorPct": -4.4,
          "medianExcessVsSectorPct": -6.44,
          "avgExcessVsSpyPct": -8.52,
          "avgMddPct": -25.11
        },
        "60": {
          "n": 0
        }
      }
    }
  },
  "totalRowsScored": 702,
  "totalChangeDaysScored": 125,
  "perTickerHistory": {
    "NVDA": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -12.4
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -14.54
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -16.71
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -16.38
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AAPL": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 15.62
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 15.58
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 12.16
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 17.19
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "GOOGL": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -13.18
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -12.52
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -11.56
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -11.96
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MSFT": [
      {
        "date": "2026-10-20",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 7.14
      },
      {
        "date": "2026-10-21",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 8.49
      },
      {
        "date": "2026-10-22",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 7.5
      },
      {
        "date": "2026-10-23",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 11.05
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AMZN": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -3.19
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -1.13
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 2.04
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 0.09
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "TSM": [
      {
        "date": "2026-10-20",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.41
      },
      {
        "date": "2026-10-21",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 1.41
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -0.12
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.27
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AVGO": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 17.95
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 22.26
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 21.74
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 18.75
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "META": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.38
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -8.52
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -3.77
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -7.53
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "TSLA": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 11.55
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 8.52
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 9.1
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 5.91
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MU": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.71
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.36
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.89
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -8.14
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AMD": [
      {
        "date": "2026-10-20",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 9.93
      },
      {
        "date": "2026-10-21",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 13.37
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 10.81
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 6.24
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "INTC": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -24.04
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -23.74
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -20.33
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -16.91
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AMAT": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 2.02
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 3.6
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 4.74
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 4.34
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ORCL": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -0.35
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 1.31
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -0.05
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -1.12
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "CRM": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": -9.3
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": -10.33
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": -15.15
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": -10.22
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "PLTR": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": -8.25
      },
      {
        "date": "2026-10-21",
        "final_tier": "눌림 대기",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": -11.42
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": -10.06
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": -9.95
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "눌림 대기",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "눌림 대기",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "QCOM": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 10.64
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 7.25
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 8.24
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 9.35
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ARM": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": -1.25
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": -1.89
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": -1.18
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": -3.52
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MRVL": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -22.35
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -23.08
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -23.54
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -22.37
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ASML": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 0.6
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 0.67
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 1.4
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 4.67
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "LRCX": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.24
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.39
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 3.0
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 3.76
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "KLAC": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 5.17
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 6.1
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 10.2
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 11.25
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "SNDK": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": -25.82
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": -26.23
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": -25.61
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": -24.68
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "WDC": [
      {
        "date": "2026-10-20",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.44
      },
      {
        "date": "2026-10-21",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.41
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.71
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.09
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ANET": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 14.85
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 18.33
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 22.7
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 15.92
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "COHR": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 2.93
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 2.72
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 15.3
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 8.13
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "LITE": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -19.96
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -22.11
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -17.01
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -20.42
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "GEV": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": -3.34
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": -5.81
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": 1.79
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": -0.58
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "CEG": [
      {
        "date": "2026-10-20",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -0.11
      },
      {
        "date": "2026-10-21",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.65
      },
      {
        "date": "2026-10-22",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.57
      },
      {
        "date": "2026-10-23",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.63
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "VST": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -19.09
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -23.26
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -12.17
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -18.08
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ETN": [
      {
        "date": "2026-10-20",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -10.52
      },
      {
        "date": "2026-10-21",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -11.95
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -7.19
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -9.95
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "PWR": [
      {
        "date": "2026-10-20",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 1.65
      },
      {
        "date": "2026-10-21",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 2.41
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 9.55
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 7.32
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "HUBB": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.28
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.27
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -2.85
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.91
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "VRT": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.25
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.16
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -2.2
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -9.44
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MOD": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -10.34
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -5.78
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": 2.77
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -1.49
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "STX": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -9.5
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -8.52
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -4.31
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -3.4
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "EME": [
      {
        "date": "2026-10-20",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.78
      },
      {
        "date": "2026-10-21",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.4
      },
      {
        "date": "2026-10-22",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -0.46
      },
      {
        "date": "2026-10-23",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.83
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "FIX": [
      {
        "date": "2026-10-20",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -20.11
      },
      {
        "date": "2026-10-21",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -16.43
      },
      {
        "date": "2026-10-22",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -9.7
      },
      {
        "date": "2026-10-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.19
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "BE": [
      {
        "date": "2026-10-20",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -13.03
      },
      {
        "date": "2026-10-21",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -17.53
      },
      {
        "date": "2026-10-22",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -12.41
      },
      {
        "date": "2026-10-23",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -12.73
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
      },
      {
        "date": "2026-11-17",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-18",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-19",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-20",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ]
  }
};
