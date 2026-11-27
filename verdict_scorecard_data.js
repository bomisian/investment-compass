// 자동 생성 파일 - verdict_scoring.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 판정 성적표 데이터 - 개인 매매 정보 없음, 집계 숫자만.
const VERDICT_SCORECARD_DATA = {
  "generatedAt": "2026-11-28T00:02:10",
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
          "n": 16,
          "avgExcessVsSectorPct": 6.13,
          "medianExcessVsSectorPct": 6.68,
          "avgExcessVsSpyPct": -2.8,
          "avgMddPct": -13.57,
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
          "n": 184,
          "avgExcessVsSectorPct": -2.11,
          "medianExcessVsSectorPct": -2.31,
          "avgExcessVsSpyPct": -2.55,
          "avgMddPct": -10.25,
          "hitRate": 0.6685
        },
        "20": {
          "n": 114,
          "avgExcessVsSectorPct": -5.72,
          "medianExcessVsSectorPct": -4.27,
          "avgExcessVsSpyPct": -9.7,
          "avgMddPct": -26.84,
          "hitRate": 0.6404
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
          "n": 655,
          "avgExcessVsSectorPct": -1.89,
          "medianExcessVsSectorPct": -0.95,
          "avgExcessVsSpyPct": -4.06,
          "avgMddPct": -11.33
        },
        "20": {
          "n": 299,
          "avgExcessVsSectorPct": -3.89,
          "medianExcessVsSectorPct": -4.65,
          "avgExcessVsSpyPct": -9.9,
          "avgMddPct": -25.67
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
          "n": 4,
          "avgExcessVsSectorPct": 2.85,
          "medianExcessVsSectorPct": 2.78,
          "avgExcessVsSpyPct": -6.31,
          "avgMddPct": -18.12,
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
          "n": 21,
          "avgExcessVsSectorPct": -2.17,
          "medianExcessVsSectorPct": -2.29,
          "avgExcessVsSpyPct": -3.91,
          "avgMddPct": -7.65,
          "hitRate": 0.7143
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
          "n": 109,
          "avgExcessVsSectorPct": -2.74,
          "medianExcessVsSectorPct": -2.26,
          "avgExcessVsSpyPct": -5.22,
          "avgMddPct": -11.5
        },
        "20": {
          "n": 66,
          "avgExcessVsSectorPct": -4.87,
          "medianExcessVsSectorPct": -5.93,
          "avgExcessVsSpyPct": -9.79,
          "avgMddPct": -26.28
        },
        "60": {
          "n": 0
        }
      }
    }
  },
  "totalRowsScored": 858,
  "totalChangeDaysScored": 135,
  "perTickerHistory": {
    "NVDA": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -8.55
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -5.19
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -5.1
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -7.29
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AAPL": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 14.35
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 19.11
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 21.85
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 19.09
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "GOOGL": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -10.71
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -13.79
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -18.11
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -9.75
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MSFT": [
      {
        "date": "2026-10-26",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 5.32
      },
      {
        "date": "2026-10-27",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 10.47
      },
      {
        "date": "2026-10-28",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 10.7
      },
      {
        "date": "2026-10-29",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 9.44
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AMZN": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 0.19
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -2.29
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -5.87
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 0.24
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "TSM": [
      {
        "date": "2026-10-26",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.72
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 3.45
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 3.47
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 4.48
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AVGO": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 10.29
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 11.47
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 11.1
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 13.36
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "META": [
      {
        "date": "2026-10-26",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.99
      },
      {
        "date": "2026-10-27",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.74
      },
      {
        "date": "2026-10-28",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -2.6
      },
      {
        "date": "2026-10-29",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.64
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "TSLA": [
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 7.49
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 5.05
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 4.91
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": 4.19
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MU": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.65
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -8.67
      },
      {
        "date": "2026-10-28",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -13.27
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -10.02
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AMD": [
      {
        "date": "2026-10-26",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.39
      },
      {
        "date": "2026-10-27",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -2.72
      },
      {
        "date": "2026-10-28",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.23
      },
      {
        "date": "2026-10-29",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.94
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "INTC": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -19.02
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -18.02
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -17.4
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -15.95
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "AMAT": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 4.53
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 5.29
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 0.38
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -1.99
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ORCL": [
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 3.03
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": 0.99
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -9.7
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -8.25
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "CRM": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": -10.62
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": -5.07
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": -3.45
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": -2.82
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "PLTR": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": -5.37
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": -4.2
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": -1.79
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": -3.64
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "QCOM": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 7.12
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 13.09
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 17.76
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 17.77
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ARM": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": -5.86
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": -5.18
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": -5.95
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": -4.71
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MRVL": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -23.05
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -22.46
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -22.39
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -14.13
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ASML": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 2.02
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 5.21
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 3.94
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 보수가 아래(모델 밴드 하단)",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 1.83
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "LRCX": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 3.36
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 4.96
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.53
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -2.91
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "KLAC": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 12.78
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 10.5
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 10.1
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 4.79
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "SNDK": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": -29.08
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": -28.69
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": -32.5
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": -27.94
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "WDC": [
      {
        "date": "2026-10-26",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.5
      },
      {
        "date": "2026-10-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.56
      },
      {
        "date": "2026-10-28",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -5.69
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -4.45
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ANET": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 13.45
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 7.24
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 6.26
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 8.0
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "COHR": [
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 10.28
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 0.33
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 0.32
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": 5.75
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "LITE": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -20.61
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -26.66
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -29.42
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": -29.44
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "추세 반전 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "눌림 대기",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "GEV": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": -3.02
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": -8.14
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": -8.73
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": -11.75
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "CEG": [
      {
        "date": "2026-10-26",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -2.11
      },
      {
        "date": "2026-10-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.74
      },
      {
        "date": "2026-10-28",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -11.47
      },
      {
        "date": "2026-10-29",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -12.6
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "VST": [
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -14.41
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -18.97
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -17.63
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": -15.34
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "ETN": [
      {
        "date": "2026-10-26",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.88
      },
      {
        "date": "2026-10-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -13.14
      },
      {
        "date": "2026-10-28",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -15.82
      },
      {
        "date": "2026-10-29",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -15.55
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "PWR": [
      {
        "date": "2026-10-26",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 10.68
      },
      {
        "date": "2026-10-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 5.63
      },
      {
        "date": "2026-10-28",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -3.54
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -6.42
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "HUBB": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -2.68
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.95
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 1.32
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 1.79
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "VRT": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.03
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -12.9
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -25.35
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -25.69
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "MOD": [
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": 8.15
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -0.18
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -1.73
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": 1.87
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "STX": [
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -4.23
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -4.24
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -6.75
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": -6.34
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰 — 가격 판단 불가(모델 불신)",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "EME": [
      {
        "date": "2026-10-26",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": 0.22
      },
      {
        "date": "2026-10-27",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -1.4
      },
      {
        "date": "2026-10-28",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.06
      },
      {
        "date": "2026-10-29",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -3.63
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "FIX": [
      {
        "date": "2026-10-26",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -4.2
      },
      {
        "date": "2026-10-27",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -11.15
      },
      {
        "date": "2026-10-28",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -15.01
      },
      {
        "date": "2026-10-29",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -12.94
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ],
    "BE": [
      {
        "date": "2026-10-26",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -9.05
      },
      {
        "date": "2026-10-27",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -17.07
      },
      {
        "date": "2026-10-28",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -23.13
      },
      {
        "date": "2026-10-29",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": -23.87
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
      },
      {
        "date": "2026-11-23",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-24",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-25",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-11-27",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      }
    ]
  }
};
