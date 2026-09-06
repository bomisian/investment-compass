// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 티커별 SEC 8-K(Item 2.02) 공시에서 파싱한 공식 매출/EPS 가이던스 이력.
// 각 기록: filingDate, sourceUrl(SEC 원문), guidance{metrics,targetPeriod}, comparison(이전 동일기간 가이던스 대비 상향/하향/유지), outcome(실제 결과 확정 시 대조 결과).
const GUIDANCE_HISTORY_DATA = {
  "AMAT": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-11-14",
      "accessionNumber": "0000006951-24-000037",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000000695124000037/exhibit991q42024earningsre.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 7.15,
            "plusMinus": 400.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 2.29,
            "plusMinus": 0.18,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "first quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "met",
        "metric": "revenue",
        "period": "2025-Q1",
        "actual": 7.166,
        "low": 6.75,
        "high": 7.55,
        "unit": "billion",
        "variancePct": 0.22,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-13",
      "accessionNumber": "0000006951-25-000005",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000000695125000005/exhibit991q12025earningsre.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 7100.0,
            "plusMinus": 400.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          },
          {
            "metric": "eps",
            "center": 2.3,
            "plusMinus": 0.18,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-05-15",
      "accessionNumber": "0000006951-25-000017",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000000695125000017/exhibit991q22025earningsre.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 7200.0,
            "plusMinus": 500.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          },
          {
            "metric": "eps",
            "center": 2.35,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-08-14",
      "accessionNumber": "0000006951-25-000032",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000000695125000032/exhibit991q32025earningsre.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 6700.0,
            "plusMinus": 500.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          },
          {
            "metric": "eps",
            "center": 2.11,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-11-13",
      "accessionNumber": "0001628280-25-051998",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828025051998/exhibit991q42025earningsre.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 6850.0,
            "plusMinus": 500.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          },
          {
            "metric": "eps",
            "center": 2.18,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-12",
      "accessionNumber": "0001628280-26-007661",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026007661/exhibit991q12026earningsre.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 7650.0,
            "plusMinus": 500.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          },
          {
            "metric": "eps",
            "center": 2.64,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-05-14",
      "accessionNumber": "0001628280-26-035071",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026035071/exhibit991q22026earningsre.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 8950.0,
            "plusMinus": 500.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          },
          {
            "metric": "eps",
            "center": 3.36,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-08-13",
      "accessionNumber": "0001628280-26-056699",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026056699/exhibit991q32026earningsre.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 10250.0,
            "plusMinus": 500.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          },
          {
            "metric": "eps",
            "center": 4.02,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "COHR": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-11-06",
      "accessionNumber": "0001193125-24-252062",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312524252062/d857703dex992.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.33,
            "high": 1.41,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 0.61,
            "high": 0.77,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-05",
      "accessionNumber": "0001193125-25-020821",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312525020821/d835094dex992.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.39,
            "high": 1.48,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 0.75,
            "high": 0.95,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "third quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q3",
        "actual": 1.5814,
        "low": 1.39,
        "high": 1.48,
        "unit": "billion",
        "variancePct": 10.2,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-05-07",
      "accessionNumber": "0001193125-25-114882",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312525114882/d930395dex992.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.425,
            "high": 1.575,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 0.81,
            "high": 1.01,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "fourth quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q4",
        "actual": 1.6856,
        "low": 1.425,
        "high": 1.575,
        "unit": "billion",
        "variancePct": 12.38,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-08-13",
      "accessionNumber": "0001193125-25-179833",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312525179833/d22249dex992.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.46,
            "high": 1.6,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 0.93,
            "high": 1.13,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "first quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2026-Q1",
        "actual": 1.8056,
        "low": 1.46,
        "high": 1.6,
        "unit": "billion",
        "variancePct": 18.02,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-11-05",
      "accessionNumber": "0001193125-25-266951",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312525266951/d27982dex992.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.56,
            "high": 1.7,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 1.1,
            "high": 1.3,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "second quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-04",
      "accessionNumber": "0001193125-26-037556",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526037556/d101115dex992.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.7,
            "high": 1.84,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 1.28,
            "high": 1.48,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "third quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-05-06",
      "accessionNumber": "0001193125-26-208972",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526208972/d57080dex992.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.91,
            "high": 2.05,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 1.52,
            "high": 1.72,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "fourth quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-08-12",
      "accessionNumber": "0001193125-26-346860",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000119312526346860/d128030dex992.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 2.2,
            "high": 2.4,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 1.85,
            "high": 2.05,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "first quarter 2027",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "LITE": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-11-07",
      "accessionNumber": "0001628280-24-046302",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828024046302/lite_ex991xq1fy25.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 380.0,
            "high": 400.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 0.3,
            "high": 0.4,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-03",
      "accessionNumber": "0001193125-25-019371",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000119312525019371/d842830dex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 380.0,
            "high": 400.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 0.4,
            "high": 0.42,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-06",
      "accessionNumber": "0001628280-25-004265",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828025004265/lite_ex991xq2fy25.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 410.0,
            "high": 425.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 0.47,
            "high": 0.53,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "third quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q3",
        "actual": 533.8,
        "low": 410.0,
        "high": 425.0,
        "unit": "million",
        "variancePct": 27.86,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-05-06",
      "accessionNumber": "0001628280-25-022709",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828025022709/lite_ex991xq3fy25.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 440.0,
            "high": 470.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 0.7,
            "high": 0.8,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-08-12",
      "accessionNumber": "0001628280-25-039896",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828025039896/lite_ex991xq4fy25.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 510.0,
            "high": 540.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 0.95,
            "high": 1.1,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-11-04",
      "accessionNumber": "0001628280-25-048860",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828025048860/lite_ex991xq1fy26.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 630.0,
            "high": 670.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 1.3,
            "high": 1.5,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-03",
      "accessionNumber": "0001628280-26-005005",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026005005/lite_ex991xq2fy26.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 780.0,
            "high": 830.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 2.15,
            "high": 2.35,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "third quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-05-05",
      "accessionNumber": "0001628280-26-030530",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026030530/lite_ex991xq3fy26.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 960.0,
            "high": 1.01,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 2.85,
            "high": 3.05,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-08-11",
      "accessionNumber": "0001628280-26-055726",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026055726/lite_ex991xq4fy26.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.225,
            "high": 1.275,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "CRM": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-12-03",
      "accessionNumber": "0001108524-24-000033",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852424000033/crm-q3fy25xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 9.9,
            "high": 10.1,
            "unit": "billion"
          }
        ],
        "targetPeriod": "fiscal year 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-26",
      "accessionNumber": "0001108524-25-000002",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852425000002/crm-q4fy25xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 40.5,
            "high": 40.9,
            "unit": "billion"
          }
        ],
        "targetPeriod": "fiscal year 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-05-28",
      "accessionNumber": "0001108524-25-000027",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852425000027/crm-q1fy26xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 10.11,
            "high": 10.16,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-09-03",
      "accessionNumber": "0001108524-25-000083",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852425000083/crm-q2fy26xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 10.24,
            "high": 10.29,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-12-03",
      "accessionNumber": "0001108524-25-000234",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852425000234/crm-q3fy26xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 41.45,
            "high": 41.55,
            "unit": "billion"
          }
        ],
        "targetPeriod": "fourth quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-25",
      "accessionNumber": "0001108524-26-000056",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 45.8,
            "high": 46.2,
            "unit": "billion"
          }
        ],
        "targetPeriod": "first quarter 2027",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-05-27",
      "accessionNumber": "0001108524-26-000125",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000125/crm-q1fy27xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 11.27,
            "high": 11.35,
            "unit": "billion"
          }
        ],
        "targetPeriod": "second quarter 2027",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788660944.9160054,
      "filingDate": "2026-08-26",
      "accessionNumber": "0001108524-26-000187",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000187/crm-q2fy27xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 46.1,
            "high": 46.4,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "MRVL": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-12-03",
      "accessionNumber": "0001835632-24-000197",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563224000197/q325_8kx1122024ex-991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 1.8,
            "plusMinus": 5.0,
            "unit": "billion",
            "deltaUnit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-03-05",
      "accessionNumber": "0001835632-25-000051",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563225000051/q425_8kx212025ex-991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 1.875,
            "plusMinus": 5.0,
            "unit": "billion",
            "deltaUnit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-05-06",
      "accessionNumber": "0001193125-25-113881",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000119312525113881/d920821dex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 1.875,
            "plusMinus": 2.0,
            "unit": "billion",
            "deltaUnit": "billion"
          }
        ],
        "targetPeriod": "first quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "met",
        "metric": "revenue",
        "period": "2026-Q1",
        "actual": 2.2187,
        "low": -0.125,
        "high": 3.875,
        "unit": "billion",
        "variancePct": 18.33,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-05-29",
      "accessionNumber": "0001835632-25-000115",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563225000115/q126_8kx532025ex-991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.0,
            "plusMinus": 5.0,
            "unit": "billion",
            "deltaUnit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-08-28",
      "accessionNumber": "0001835632-25-000187",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563225000187/q226_8kx822025ex-991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.06,
            "plusMinus": 5.0,
            "unit": "billion",
            "deltaUnit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-12-02",
      "accessionNumber": "0001835632-25-000193",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563225000193/q326_8kx1112025ex-991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.2,
            "plusMinus": 5.0,
            "unit": "billion",
            "deltaUnit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-03-05",
      "accessionNumber": "0001835632-26-000006",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000006/q426_8kx1312026ex-991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.4,
            "plusMinus": 5.0,
            "unit": "billion",
            "deltaUnit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-05-27",
      "accessionNumber": "0001835632-26-000014",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000014/q127_8kx522026ex-991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.7,
            "plusMinus": 5.0,
            "unit": "billion",
            "deltaUnit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788660944.9160054,
      "filingDate": "2026-08-27",
      "accessionNumber": "0001835632-26-000022",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000022/q227_8kx812026ex-991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 3.15,
            "plusMinus": 5.0,
            "unit": "billion",
            "deltaUnit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "META": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-10-30",
      "accessionNumber": "0001326801-24-000077",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000132680124000077/meta-09302024xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 45.0,
            "high": 48.0,
            "unit": "billion"
          }
        ],
        "targetPeriod": "fourth quarter 2024",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2024-Q4",
        "actual": 48.385,
        "low": 45.0,
        "high": 48.0,
        "unit": "billion",
        "variancePct": 4.05,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-01-29",
      "accessionNumber": "0001326801-25-000014",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000132680125000014/meta-12312024xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 39.5,
            "high": 41.8,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-04-30",
      "accessionNumber": "0001326801-25-000050",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000132680125000050/meta-03312025xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 42.5,
            "high": 45.5,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-30",
      "accessionNumber": "0001628280-25-036719",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828025036719/meta-06302025xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 47.5,
            "high": 50.5,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-10-29",
      "accessionNumber": "0001628280-25-047114",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828025047114/meta-09302025xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 56.0,
            "high": 59.0,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 6.2,
            "high": 7.25,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-01-28",
      "accessionNumber": "0001628280-26-003832",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003832/meta-12312025xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 53.5,
            "high": 56.5,
            "unit": "billion"
          }
        ],
        "targetPeriod": "first quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "met",
        "metric": "revenue",
        "period": "2026-Q1",
        "actual": 56.311,
        "low": 53.5,
        "high": 56.5,
        "unit": "billion",
        "variancePct": 2.38,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-29",
      "accessionNumber": "0001628280-26-028364",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026028364/meta-03312026xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 58.0,
            "high": 61.0,
            "unit": "billion"
          }
        ],
        "targetPeriod": "second quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "met",
        "metric": "revenue",
        "period": "2026-Q2",
        "actual": 60.801,
        "low": 58.0,
        "high": 61.0,
        "unit": "billion",
        "variancePct": 2.19,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-29",
      "accessionNumber": "0001628280-26-050596",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050596/meta-06302026xexhibit991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 61.0,
            "high": 64.0,
            "unit": "billion"
          }
        ],
        "targetPeriod": "third quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "PLTR": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-11-04",
      "accessionNumber": "0001321655-24-000207",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165524000207/a2024q3ex991earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 767.0,
            "high": 771.0,
            "unit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-03",
      "accessionNumber": "0001321655-25-000007",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165525000007/a2024q4ex991earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 858.0,
            "high": 862.0,
            "unit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-05-05",
      "accessionNumber": "0001321655-25-000063",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165525000063/a2025q1ex991pressrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 934.0,
            "high": 938.0,
            "unit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-08-04",
      "accessionNumber": "0001321655-25-000105",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165525000105/a2025q2ex991pressrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.083,
            "high": 1.087,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-11-03",
      "accessionNumber": "0001321655-25-000130",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165525000130/a2025q3ex991earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.327,
            "high": 1.331,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-02",
      "accessionNumber": "0001321655-26-000004",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000004/a2025q4ex991earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.532,
            "high": 1.536,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-05-04",
      "accessionNumber": "0001321655-26-000026",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000026/a2026q1ex991pressrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.797,
            "high": 1.801,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-08-03",
      "accessionNumber": "0001321655-26-000039",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000039/a2026q2ex991pressrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 2.16,
            "high": 2.164,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "AMD": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-08-05",
      "accessionNumber": "0000002488-25-000106",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248825000106/amdq225earningsslidesfin.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 8.7,
            "plusMinus": 300.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": "q2 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q2",
        "actual": 7.685,
        "low": 8.4,
        "high": 9.0,
        "unit": "billion",
        "variancePct": -11.67,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-11-04",
      "accessionNumber": "0000002488-25-000163",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248825000163/amdq325earningsslidesfin.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 9.6,
            "plusMinus": 300.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": "q3 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q3",
        "actual": 9.246,
        "low": 9.3,
        "high": 9.9,
        "unit": "billion",
        "variancePct": -3.69,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-03",
      "accessionNumber": "0000002488-26-000014",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000014/amdq425earningsslidesfin.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 9.8,
            "plusMinus": 300.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": "q4 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q4",
        "actual": 10.27,
        "low": 9.5,
        "high": 10.1,
        "unit": "billion",
        "variancePct": 4.8,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-08-04",
      "accessionNumber": "0000002488-26-000121",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000121/amdq22026earningsslidesf.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 13.0,
            "plusMinus": 300.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": "q2 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2026-Q2",
        "actual": 11.536,
        "low": 12.7,
        "high": 13.3,
        "unit": "billion",
        "variancePct": -11.26,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    }
  ],
  "QCOM": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-11-06",
      "accessionNumber": "0000804328-24-000074",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432824000074/qcom092924erex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 2.39,
            "high": 2.59,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "first quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-05",
      "accessionNumber": "0000804328-25-000010",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432825000010/qcom122924erex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 2.38,
            "high": 2.58,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-04-30",
      "accessionNumber": "0000804328-25-000029",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432825000029/qcom033025erex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 2.14,
            "high": 2.34,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-30",
      "accessionNumber": "0000804328-25-000044",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432825000044/qcom062925erex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 2.23,
            "high": 2.43,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-11-05",
      "accessionNumber": "0000804328-25-000084",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432825000084/qcom092825erex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 2.55,
            "high": 2.75,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-04",
      "accessionNumber": "0000804328-26-000016",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000016/qcom122825erex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 1.69,
            "high": 1.89,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-29",
      "accessionNumber": "0000804328-26-000060",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000060/qcom032926erex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 1.26,
            "high": 1.46,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-29",
      "accessionNumber": "0000804328-26-000085",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000085/qcom062826erex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 1.22,
            "high": 1.42,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "INTC": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-10-31",
      "accessionNumber": "0000050863-24-000147",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086324000147/q324_earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 13.3,
            "high": 14.3,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-01-30",
      "accessionNumber": "0000050863-25-000004",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086325000004/q424_earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 11.7,
            "high": 12.7,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-04-24",
      "accessionNumber": "0000050863-25-000070",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086325000070/q125_earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 11.2,
            "high": 12.4,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-24",
      "accessionNumber": "0000050863-25-000107",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086325000107/q225_earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 12.6,
            "high": 13.6,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-10-23",
      "accessionNumber": "0000050863-25-000169",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086325000169/q325earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 12.8,
            "high": 13.8,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-01-22",
      "accessionNumber": "0000050863-26-000009",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000009/q425earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 11.7,
            "high": 12.7,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-23",
      "accessionNumber": "0000050863-26-000077",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000077/q126earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 13.8,
            "high": 14.8,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-23",
      "accessionNumber": "0000050863-26-000155",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000155/q226earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 15.8,
            "high": 16.8,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "LRCX": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-10-23",
      "accessionNumber": "0000707549-24-000125",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754924000125/lrcx_exhibitx991xq1x2025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 4.3,
            "plusMinus": 300.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-01-29",
      "accessionNumber": "0000707549-25-000009",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754925000009/lrcx_exhibitx991xq2x2025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 4.65,
            "plusMinus": 300.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-04-23",
      "accessionNumber": "0000707549-25-000051",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754925000051/lrcx_exhibitx991xq3x2025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 5.0,
            "plusMinus": 300.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-30",
      "accessionNumber": "0000707549-25-000068",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754925000068/lrcx_exhibitx991xq4x2025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 5.2,
            "plusMinus": 300.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-10-22",
      "accessionNumber": "0000707549-25-000082",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754925000082/lrcx_exhibitx991xq1x2026.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 5.2,
            "plusMinus": 300.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-01-28",
      "accessionNumber": "0000707549-26-000006",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000006/lrcx_exhibitx991xq2x2026.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 5.7,
            "plusMinus": 300.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-22",
      "accessionNumber": "0000707549-26-000020",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000020/lrcx_exhibitx991xq3x2026.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 6.6,
            "plusMinus": 400.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-29",
      "accessionNumber": "0000707549-26-000033",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000033/lrcx_exhibitx991xq4x2026.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 8.1,
            "plusMinus": 400.0,
            "unit": "billion",
            "deltaUnit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "KLAC": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-10-30",
      "accessionNumber": "0000319201-24-000024",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920124000024/exhibit991earningsrelease0.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.95,
            "plusMinus": 150.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 7.45,
            "plusMinus": 0.6,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-01-30",
      "accessionNumber": "0000319201-25-000004",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920125000004/exhibit991earningsrelease1.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 3.0,
            "plusMinus": 150.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 7.77,
            "plusMinus": 0.6,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "third quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q3",
        "actual": 3.2097,
        "low": 2.85,
        "high": 3.15,
        "unit": "billion",
        "variancePct": 6.99,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-04-30",
      "accessionNumber": "0000319201-25-000009",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920125000009/exhibit991earningsrelease0.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 3.075,
            "plusMinus": 150.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 8.28,
            "plusMinus": 0.78,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-31",
      "accessionNumber": "0000319201-25-000020",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920125000020/exhibit991earningsrelease7.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 3.15,
            "plusMinus": 150.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 8.28,
            "plusMinus": 0.77,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-10-29",
      "accessionNumber": "0000319201-25-000031",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920125000031/exhibit991earningsrelease0.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 3.225,
            "plusMinus": 150.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 8.46,
            "plusMinus": 0.78,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-01-29",
      "accessionNumber": "0000319201-26-000006",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000006/exhibit991earningsrelease1.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 3.35,
            "plusMinus": 150.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 8.85,
            "plusMinus": 0.78,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-29",
      "accessionNumber": "0000319201-26-000014",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000014/exhibit991earningsrelease3.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 3.575,
            "plusMinus": 200.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 9.66,
            "plusMinus": 1.0,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "fourth quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-28",
      "accessionNumber": "0000319201-26-000024",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000024/exhibit991earningsrelease7.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 4.0,
            "plusMinus": 200.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 1.14,
            "plusMinus": 0.1,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "first quarter 2027",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "SNDK": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-05-07",
      "accessionNumber": "0002023554-25-000021",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000202355425000021/sndkq3fy25ex991-pressrelea.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.75,
            "high": 1.85,
            "unit": "billion"
          }
        ],
        "targetPeriod": "fourth quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q4",
        "actual": 2.308,
        "low": 1.75,
        "high": 1.85,
        "unit": "billion",
        "variancePct": 28.22,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-08-14",
      "accessionNumber": "0001193125-25-180782",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000119312525180782/d926236dex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 2.1,
            "high": 2.2,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 0.7,
            "high": 0.9,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-11-06",
      "accessionNumber": "0001628280-25-050180",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828025050180/sndkq1fy26ex991-pressrelea.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 2.55,
            "high": 2.65,
            "unit": "billion"
          }
        ],
        "targetPeriod": "second quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2026-Q2",
        "actual": 5.95,
        "low": 2.55,
        "high": 2.65,
        "unit": "billion",
        "variancePct": 128.85,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-01-29",
      "accessionNumber": "0001628280-26-004121",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026004121/sndkq2fy26ex991-pressrelea.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 4.4,
            "high": 4.8,
            "unit": "billion"
          }
        ],
        "targetPeriod": "third quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-30",
      "accessionNumber": "0001628280-26-028879",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026028879/sndkq3-26ex991xpressrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 7.75,
            "high": 8.25,
            "unit": "billion"
          }
        ],
        "targetPeriod": "fourth quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-08-05",
      "accessionNumber": "0001628280-26-053346",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 10.3,
            "high": 10.8,
            "unit": "billion"
          }
        ],
        "targetPeriod": "first quarter 2027",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "WDC": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-10-24",
      "accessionNumber": "0000106040-24-000037",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000010604024000037/a4ex991-pressreleaseq125.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 4.2,
            "high": 4.4,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 1.75,
            "high": 2.05,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "second quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q2",
        "actual": 2.605,
        "low": 4.2,
        "high": 4.4,
        "unit": "billion",
        "variancePct": -39.42,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-01-29",
      "accessionNumber": "0000106040-25-000005",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000010604025000005/a4ex991-pressreleaseq225.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 3.75,
            "high": 3.95,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 0.9,
            "high": 1.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-04-30",
      "accessionNumber": "0000106040-25-000020",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000010604025000020/a4ex991-pressreleaseq325.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.45,
            "plusMinus": 150.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 1.45,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-30",
      "accessionNumber": "0000106040-25-000030",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000010604025000030/a4ex991-pressreleaseq425.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.7,
            "plusMinus": 100.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          },
          {
            "metric": "eps",
            "center": 1.54,
            "plusMinus": 0.15,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-10-30",
      "accessionNumber": "0001628280-25-047539",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828025047539/a4ex991-pressreleaseq126.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.9,
            "plusMinus": 100.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-01-29",
      "accessionNumber": "0001628280-26-004131",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026004131/a4ex991-pressreleaseq226.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 3.2,
            "plusMinus": 100.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-30",
      "accessionNumber": "0001628280-26-028878",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026028878/a4ex991-pressreleaseq326.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 3.65,
            "plusMinus": 100.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-08-05",
      "accessionNumber": "0001628280-26-053305",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026053305/a4ex991-pressreleaseq426.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 4.1,
            "plusMinus": 100.0,
            "unit": "unspecified",
            "deltaUnit": "unspecified"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "ANET": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-11-07",
      "accessionNumber": "0001596532-24-000366",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653224000366/ex991q324-earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.85,
            "high": 1.9,
            "unit": "billion"
          }
        ],
        "targetPeriod": "fourth quarter 2024",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2024-Q4",
        "actual": 1.9304,
        "low": 1.85,
        "high": 1.9,
        "unit": "billion",
        "variancePct": 2.96,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-18",
      "accessionNumber": "0001596532-25-000018",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653225000018/ex991q424-earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.93,
            "high": 1.97,
            "unit": "billion"
          }
        ],
        "targetPeriod": "first quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q1",
        "actual": 2.0048,
        "low": 1.93,
        "high": 1.97,
        "unit": "billion",
        "variancePct": 2.81,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-11-04",
      "accessionNumber": "0001596532-25-000284",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653225000284/ex991q325-earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 2.3,
            "high": 2.4,
            "unit": "billion"
          }
        ],
        "targetPeriod": "fourth quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q4",
        "actual": 2.4878,
        "low": 2.3,
        "high": 2.4,
        "unit": "billion",
        "variancePct": 5.86,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    }
  ],
  "GEV": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-10-23",
      "accessionNumber": "0001996810-24-000080",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681024000080/gev3q2024earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 34.0,
            "high": 35.0,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-01-22",
      "accessionNumber": "0001996810-25-000004",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681025000004/gev4q2024earningsrelease.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 36.0,
            "high": 37.0,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-04-23",
      "accessionNumber": "0001996810-25-000072",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681025000072/gevpressrelease1q25.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 36.0,
            "high": 37.0,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-23",
      "accessionNumber": "0001996810-25-000132",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681025000132/gevpressrelease2q25.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 36.0,
            "high": 37.0,
            "unit": "billion"
          }
        ],
        "targetPeriod": "second quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q2",
        "actual": 9.111,
        "low": 36.0,
        "high": 37.0,
        "unit": "billion",
        "variancePct": -75.04,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-10-22",
      "accessionNumber": "0001996810-25-000159",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681025000159/gevpressrelease3q25.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 36.0,
            "high": 37.0,
            "unit": "billion"
          }
        ],
        "targetPeriod": "third quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q3",
        "actual": 9.969,
        "low": 36.0,
        "high": 37.0,
        "unit": "billion",
        "variancePct": -72.69,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-01-28",
      "accessionNumber": "0001996810-26-000012",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000012/gevpressrelease4q25.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 44.0,
            "high": 45.0,
            "unit": "billion"
          }
        ],
        "targetPeriod": "fourth quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q4",
        "actual": 10.956,
        "low": 44.0,
        "high": 45.0,
        "unit": "billion",
        "variancePct": -75.38,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-22",
      "accessionNumber": "0001996810-26-000063",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000063/gevpressrelease1q26.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 44.5,
            "high": 45.5,
            "unit": "billion"
          }
        ],
        "targetPeriod": "first quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2026-Q1",
        "actual": 9.339,
        "low": 44.5,
        "high": 45.5,
        "unit": "billion",
        "variancePct": -79.25,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-22",
      "accessionNumber": "0001996810-26-000147",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000147/gevpressrelease2q26.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 45.5,
            "high": 46.5,
            "unit": "billion"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "CEG": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-05-11",
      "accessionNumber": "0001868275-26-000063",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000063/ceg-20260511992.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 0.3,
            "high": 1.0,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "VST": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-11-07",
      "accessionNumber": "0001193125-24-252608",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000119312524252608/d852941dex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 500.0,
            "high": 2024.0,
            "unit": "million"
          }
        ],
        "targetPeriod": "third quarter 2024",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2024-Q3",
        "actual": 6288.0,
        "low": 500.0,
        "high": 2024.0,
        "unit": "million",
        "variancePct": 398.26,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    }
  ],
  "PWR": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-31",
      "accessionNumber": "0001193125-25-169944",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1050915/000119312525169944/d28227dex992.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 425.0,
            "high": 475.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 0.08,
            "high": 0.12,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-30",
      "accessionNumber": "0001193125-26-324855",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1050915/000119312526324855/d56853dex991.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 120.0,
            "high": 140.0,
            "unit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "HUBB": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-10-29",
      "accessionNumber": "0001628280-24-044010",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828024044010/exhibit991_10292024.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 14.2,
            "high": 14.4,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "third quarter 2024",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-04",
      "accessionNumber": "0001628280-25-003586",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828025003586/exhibit991_02042025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 16.0,
            "high": 16.5,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "fourth quarter 2024",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-05-01",
      "accessionNumber": "0001628280-25-021342",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828025021342/exhibit991_05012025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 15.95,
            "high": 16.45,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "first quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-29",
      "accessionNumber": "0001628280-25-036316",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828025036316/exhibit991_07292025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 16.25,
            "high": 16.75,
            "unit": "unspecified"
          },
          {
            "metric": "eps",
            "low": 16.25,
            "high": 16.75,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "second quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-10-28",
      "accessionNumber": "0001628280-25-046573",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828025046573/exhibit991_10282025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 16.55,
            "high": 16.75,
            "unit": "unspecified"
          },
          {
            "metric": "eps",
            "low": 16.55,
            "high": 16.75,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "third quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-03",
      "accessionNumber": "0001628280-26-004800",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026004800/exhibit991_02032026.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 17.3,
            "high": 18.0,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "fourth quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-30",
      "accessionNumber": "0001628280-26-028600",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026028600/exhibit991_04302026.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 17.45,
            "high": 18.0,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "first quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-28",
      "accessionNumber": "0001628280-26-049934",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026049934/exhibit991_07282026.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 17.25,
            "high": 17.55,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "second quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "VRT": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-10-23",
      "accessionNumber": "0001628280-24-043343",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828024043343/q32024exhibit991vrt102324.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 0.8,
            "high": 0.84,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-12",
      "accessionNumber": "0001628280-25-005006",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828025005006/exhibit991vrt02122025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 9125.0,
            "high": 9275.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 2.93,
            "high": 3.03,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-04-23",
      "accessionNumber": "0001628280-25-018915",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828025018915/q12025exhibit991vrt042325.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 0.77,
            "high": 0.85,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-30",
      "accessionNumber": "0001674101-25-000006",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000167410125000006/q22025exhibit991vrt7302025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 0.94,
            "high": 1.0,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-10-22",
      "accessionNumber": "0001674101-25-000020",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000167410125000020/q32025exhibit991vrt10222025.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 3.8,
            "high": 4.1,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-11",
      "accessionNumber": "0001674101-26-000006",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000167410126000006/exhibit991vrt02112026.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 13250.0,
            "high": 13750.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 5.27,
            "high": 5.37,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-22",
      "accessionNumber": "0001628280-26-026379",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026026379/q12026exhibit991vrt04222026.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 13500.0,
            "high": 14000.0,
            "unit": "million"
          },
          {
            "metric": "eps",
            "low": 5.6,
            "high": 5.7,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-29",
      "accessionNumber": "0001628280-26-050323",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026050323/q22026exhibit991vrt07292026.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 5.82,
            "high": 5.92,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "MOD": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-04",
      "accessionNumber": "0001558370-25-000627",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000155837025000627/tmb-20250204xex99d2.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 3.65,
            "high": 3.95,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "fiscal year 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-05-26",
      "accessionNumber": "0001104659-26-066291",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926066291/mod-20260526xex99d2.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 150.0,
            "high": 200.0,
            "unit": "million"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-29",
      "accessionNumber": "0001104659-26-088230",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926088230/mod-20260729xex99d2.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 150.0,
            "high": 200.0,
            "unit": "million"
          }
        ],
        "targetPeriod": "fiscal year 2027",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "STX": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-10-22",
      "accessionNumber": "0001137789-24-000141",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778924000141/stxq12025pressreleasefinan.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.3,
            "plusMinus": 150.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 1.85,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "second quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "met",
        "metric": "revenue",
        "period": "2025-Q2",
        "actual": 2.444,
        "low": 2.15,
        "high": 2.45,
        "unit": "billion",
        "variancePct": 6.26,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-01-21",
      "accessionNumber": "0001137789-25-000006",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778925000006/stxq22025pressreleasefinan.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "center": 1.7,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "third quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-04-29",
      "accessionNumber": "0001137789-25-000070",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778925000070/stxq32025pressreleasefinan.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.4,
            "plusMinus": 150.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 2.4,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "fourth quarter 2025",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2025-Q4",
        "actual": 2.629,
        "low": 2.25,
        "high": 2.55,
        "unit": "billion",
        "variancePct": 9.54,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-29",
      "accessionNumber": "0001137789-25-000148",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778925000148/stxq42025pressreleasefinan.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.5,
            "plusMinus": 150.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 2.3,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "first quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2026-Q1",
        "actual": 2.825,
        "low": 2.35,
        "high": 2.65,
        "unit": "billion",
        "variancePct": 13.0,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-10-28",
      "accessionNumber": "0001137789-25-000283",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778925000283/stxq12026pressreleasefinan.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.7,
            "plusMinus": 100.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 2.75,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "second quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      },
      "outcome": {
        "status": "missed",
        "metric": "revenue",
        "period": "2026-Q2",
        "actual": 3.112,
        "low": 2.6,
        "high": 2.8,
        "unit": "billion",
        "variancePct": 15.26,
        "source": "SEC Company Facts",
        "settledAt": 1788681558.1690705,
        "notice": "SEC 검증 매출만 비교했습니다. EPS는 현재 출처가 혼합돼 사후 판정에서 제외합니다."
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-01-27",
      "accessionNumber": "0001137789-26-000016",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000016/stxq22026pressreleasefinan.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 2.9,
            "plusMinus": 100.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 3.4,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "third quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-28",
      "accessionNumber": "0001137789-26-000084",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000084/stxq32026pressreleasefinan.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 3.45,
            "plusMinus": 100.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 5.0,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "fourth quarter 2026",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-28",
      "accessionNumber": "0001137789-26-000153",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000153/stxq42026pressreleasefinan.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "center": 4.1,
            "plusMinus": 100.0,
            "unit": "billion",
            "deltaUnit": "million"
          },
          {
            "metric": "eps",
            "center": 7.3,
            "plusMinus": 0.2,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": "first quarter 2027",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "EME": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-10-31",
      "accessionNumber": "0000105634-24-000039",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563424000039/eme-ex991_2024930xq3.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 20.5,
            "high": 21.0,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-02-26",
      "accessionNumber": "0000105634-25-000019",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563425000019/eme-ex991_20241231xq4.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 16.1,
            "high": 16.9,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 22.25,
            "high": 24.0,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-04-30",
      "accessionNumber": "0000105634-25-000032",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563425000032/eme-ex991_2025331xq1.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 16.1,
            "high": 16.9,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 22.65,
            "high": 24.0,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-07-31",
      "accessionNumber": "0000105634-25-000049",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563425000049/eme-ex991_2025630xq2.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 16.4,
            "high": 16.9,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 24.5,
            "high": 25.75,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2025-10-30",
      "accessionNumber": "0000105634-25-000082",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563425000082/eme-ex991_2025930xq3.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 16.7,
            "high": 16.8,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 25.0,
            "high": 25.75,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-26",
      "accessionNumber": "0000105634-26-000027",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000027/eme-ex991_20251231xq4.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 17.75,
            "high": 18.5,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 27.25,
            "high": 29.25,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-29",
      "accessionNumber": "0000105634-26-000048",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000048/eme-ex991_2026331xq1.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 18.5,
            "high": 19.25,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 28.25,
            "high": 29.75,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-30",
      "accessionNumber": "0000105634-26-000112",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000112/eme-ex991_2026630xq2.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 20.0,
            "high": 20.5,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 32.0,
            "high": 33.25,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ],
  "BE": [
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2024-11-07",
      "accessionNumber": "0001628280-24-046303",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1664703/000162828024046303/ex991_q32024financialresul.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 1.4,
            "high": 1.6,
            "unit": "unspecified"
          }
        ],
        "targetPeriod": "third quarter 2024",
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-02-05",
      "accessionNumber": "0001628280-26-005798",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1664703/000162828026005798/ex991_q42025financialresul.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 1.33,
            "high": 1.48,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-04-28",
      "accessionNumber": "0001628280-26-027913",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1664703/000162828026027913/ex991_q126financialresults.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "eps",
            "low": 1.85,
            "high": 2.25,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    },
    {
      "capturedAt": 1788497406.3788342,
      "filingDate": "2026-07-28",
      "accessionNumber": "0001628280-26-050150",
      "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1664703/000162828026050150/ex991_q226financialresults.htm",
      "guidance": {
        "status": "available",
        "metrics": [
          {
            "metric": "revenue",
            "low": 3.9,
            "high": 4.2,
            "unit": "billion"
          },
          {
            "metric": "eps",
            "low": 2.55,
            "high": 2.85,
            "unit": "USD/share"
          }
        ],
        "targetPeriod": null,
        "comparison": "no_prior_guidance"
      },
      "comparison": {
        "status": "unavailable",
        "reason": "같은 대상기간의 이전 공식 가이던스 없음"
      }
    }
  ]
};
