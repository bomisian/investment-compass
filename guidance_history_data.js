// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 티커별 SEC 8-K(Item 2.02) 공시에서 파싱한 공식 매출/EPS 가이던스 이력.
// 각 기록: filingDate, sourceUrl(SEC 원문), guidance{metrics,targetPeriod}, comparison(이전 동일기간 가이던스 대비 상향/하향/유지), outcome(실제 결과 확정 시 대조 결과).
const GUIDANCE_HISTORY_DATA = {
  "AMAT": [
    {
      "capturedAt": 1787803662.1049721,
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
      "capturedAt": 1787735518.9601738,
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
      "capturedAt": 1787667873.3191955,
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
      "capturedAt": 1788458648.9315727,
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
      "capturedAt": 1788458648.9315727,
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
  ]
};
