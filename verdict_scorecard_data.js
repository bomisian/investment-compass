// 자동 생성 파일 - verdict_scoring.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 판정 성적표 데이터 - 개인 매매 정보 없음, 집계 숫자만.
const VERDICT_SCORECARD_DATA = {
  "generatedAt": "2026-10-25T00:02:30",
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
          "n": 3,
          "avgExcessVsSectorPct": -0.81,
          "medianExcessVsSectorPct": -0.73,
          "avgExcessVsSpyPct": -2.21,
          "avgMddPct": -4.22,
          "hitRate": 0.3333
        },
        "20": {
          "n": 0
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
          "n": 22,
          "avgExcessVsSectorPct": -1.76,
          "medianExcessVsSectorPct": -1.43,
          "avgExcessVsSpyPct": -3.55,
          "avgMddPct": -7.36,
          "hitRate": 0.6364
        },
        "20": {
          "n": 0
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
          "n": 53,
          "avgExcessVsSectorPct": -4.74,
          "medianExcessVsSectorPct": -4.2,
          "avgExcessVsSpyPct": -6.51,
          "avgMddPct": -9.14
        },
        "20": {
          "n": 0
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
          "n": 2,
          "avgExcessVsSectorPct": -0.85,
          "medianExcessVsSectorPct": -0.85,
          "avgExcessVsSpyPct": -3.1,
          "avgMddPct": -5.17,
          "hitRate": 0.5
        },
        "20": {
          "n": 0
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
          "n": 13,
          "avgExcessVsSectorPct": -2.2,
          "medianExcessVsSectorPct": -2.69,
          "avgExcessVsSpyPct": -4.51,
          "avgMddPct": -7.69,
          "hitRate": 0.6923
        },
        "20": {
          "n": 0
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
          "n": 32,
          "avgExcessVsSectorPct": -4.4,
          "medianExcessVsSectorPct": -4.1,
          "avgExcessVsSpyPct": -6.81,
          "avgMddPct": -8.93
        },
        "20": {
          "n": 0
        },
        "60": {
          "n": 0
        }
      }
    }
  },
  "totalRowsScored": 78,
  "totalChangeDaysScored": 47,
  "perTickerHistory": {
    "NVDA": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "AAPL": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "GOOGL": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "추세 반전 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "MSFT": [
      {
        "date": "2026-10-15",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "AMZN": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "TSM": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "AVGO": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "META": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "TSLA": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "MU": [
      {
        "date": "2026-10-15",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "AMD": [
      {
        "date": "2026-10-15",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "INTC": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "AMAT": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "ORCL": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "CRM": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "기대 대비 낮음",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "PLTR": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "기대와 부합",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "QCOM": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "ARM": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "기대 선반영 큼",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "MRVL": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "ASML": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "분할 축적 검토",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "LRCX": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "KLAC": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "SNDK": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "판단 유보 - 이익 정점 가능, 이력 부족",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "WDC": [
      {
        "date": "2026-10-15",
        "final_tier": "눌림 대기",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "ANET": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "COHR": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "LITE": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "판단 유보(모델 불신)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "GEV": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "고평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "비교 불가(컨센서스 1·2년차 방향 엇갈림)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "CEG": [
      {
        "date": "2026-10-15",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "VST": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "ETN": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "PWR": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "HUBB": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "VRT": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "MOD": [
      {
        "date": "2026-10-15",
        "final_tier": "신규 접근 중지",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "STX": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "저평가",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "판단 유보(밴드 넓음)",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "EME": [
      {
        "date": "2026-10-15",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "추세 반전 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "눌림 대기",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "FIX": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ],
    "BE": [
      {
        "date": "2026-10-15",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-16",
        "final_tier": "관찰",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
      },
      {
        "date": "2026-10-19",
        "final_tier": "신규 접근 중지",
        "price_label": "적정",
        "excess_vs_sector_20d_pct": null
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
      }
    ]
  }
};
