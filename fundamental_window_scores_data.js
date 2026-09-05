// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
const FUNDAMENTAL_WINDOW_SCORES_DATA = {
  "schemaVersion": 1,
  "scoringVersion": "fundamental-window-v1",
  "generatedAt": 1788638676.181965,
  "records": {
    "MSFT": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 2,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 0,
            "eventCount": 1
          }
        }
      },
      "events": [
        {
          "ticker": "MSFT",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "annual",
          "filedAt": "2026-07-29",
          "effectiveAt": 1785283200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm",
          "form": "10-K",
          "summary": "2026-06-30 기준(10-K, 2026-07-29 공시) 매출이 전년 동기 대비 +17.8% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 331839000000,
            "previous": 281724000000.0,
            "changePct": 17.788686799846666,
            "periodKind": "annual"
          }
        }
      ]
    },
    "GOOGL": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 2,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 0,
            "eventCount": 1
          }
        }
      },
      "events": [
        {
          "ticker": "GOOGL",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-23",
          "effectiveAt": 1784764800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-23 공시) 매출이 전년 동기 대비 +24.2% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 119796000000,
            "previous": 96428000000.0,
            "changePct": 24.23362508814868,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "AMZN": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 4,
            "change": 0,
            "positiveEvents": 2,
            "negativeEvents": 0,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "AMZN",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-31",
          "effectiveAt": 1785456000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-31 공시) 매출이 전년 동기 대비 +19.6% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 200606000000,
            "previous": 167702000000.0,
            "changePct": 19.620517346245126,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "AMZN",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-31",
          "effectiveAt": 1785456000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-31 공시) 영업이익률이 전년 동기 대비 +2.3%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 27461000000,
            "currentRevenue": 200606000000,
            "previousOpIncome": 19171000000,
            "previousRevenue": 167702000000.0,
            "changePercentagePoints": 2.2574352808746228,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "META": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": -2,
              "change": 0,
              "positiveEvents": 0,
              "negativeEvents": 1,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 1,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "META",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-30",
          "effectiveAt": 1785369600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050705/meta-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-30 공시) 매출이 전년 동기 대비 +28.0% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 60801000000,
            "previous": 47516000000.0,
            "changePct": 27.959003283104632,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "META",
          "category": "Margin",
          "eventType": "official_operating_margin_decline",
          "direction": -1,
          "baseScore": -2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-30",
          "effectiveAt": 1785369600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050705/meta-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-30 공시) 영업이익률이 전년 동기 대비 -12.1%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 18775000000,
            "currentRevenue": 60801000000,
            "previousOpIncome": 20441000000,
            "previousRevenue": 47516000000.0,
            "changePercentagePoints": -12.139767209584413,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "AAPL": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "TSLA": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": -2,
              "change": 0,
              "positiveEvents": 0,
              "negativeEvents": 1,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 1,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "TSLA",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-23",
          "effectiveAt": 1784764800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049270/tsla-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-23 공시) 매출이 전년 동기 대비 +25.5% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 28236000000,
            "previous": 22496000000.0,
            "changePct": 25.51564722617354,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "TSLA",
          "category": "Margin",
          "eventType": "official_operating_margin_decline",
          "direction": -1,
          "baseScore": -2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-23",
          "effectiveAt": 1784764800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1318605/000162828026049270/tsla-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-23 공시) 영업이익률이 전년 동기 대비 -2.7%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 398000000,
            "currentRevenue": 28236000000,
            "previousOpIncome": 923000000,
            "previousRevenue": 22496000000.0,
            "changePercentagePoints": -2.693403541215405,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "ORCL": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "CRM": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": -2,
              "change": 0,
              "positiveEvents": 0,
              "negativeEvents": 1,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 1,
            "eventCount": 2
          }
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": -2,
              "change": 0,
              "positiveEvents": 0,
              "negativeEvents": 1,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 1,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "CRM",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-31",
          "periodKind": "quarter",
          "filedAt": "2026-08-27",
          "effectiveAt": 1787788800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000190/crm-20260731.htm",
          "form": "10-Q",
          "summary": "2026-07-31 기준(10-Q, 2026-08-27 공시) 매출이 전년 동기 대비 +10.8% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 11345000000,
            "previous": 10236000000.0,
            "changePct": 10.834310277452118,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "CRM",
          "category": "Margin",
          "eventType": "official_operating_margin_decline",
          "direction": -1,
          "baseScore": -2,
          "periodEnd": "2026-07-31",
          "periodKind": "quarter",
          "filedAt": "2026-08-27",
          "effectiveAt": 1787788800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000190/crm-20260731.htm",
          "form": "10-Q",
          "summary": "2026-07-31 기준(10-Q, 2026-08-27 공시) 영업이익률이 전년 동기 대비 -2.2%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 2331000000,
            "currentRevenue": 11345000000,
            "previousOpIncome": 2332000000,
            "previousRevenue": 10236000000.0,
            "changePercentagePoints": -2.2358405964758354,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "PLTR": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 4,
            "change": 0,
            "positiveEvents": 2,
            "negativeEvents": 0,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "PLTR",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-08-04",
          "effectiveAt": 1785801600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000041/pltr-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-08-04 공시) 매출이 전년 동기 대비 +92.8% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 1935464000,
            "previous": 1003697000,
            "changePct": 92.8334945705726,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "PLTR",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-08-04",
          "effectiveAt": 1785801600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000041/pltr-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-08-04 공시) 영업이익률이 전년 동기 대비 +20.3%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 912004000,
            "currentRevenue": 1935464000,
            "previousOpIncome": 269317000,
            "previousRevenue": 1003697000,
            "changePercentagePoints": 20.288190192500146,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "NVDA": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 4,
            "change": 0,
            "positiveEvents": 2,
            "negativeEvents": 0,
            "eventCount": 2
          }
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 4,
            "change": 0,
            "positiveEvents": 2,
            "negativeEvents": 0,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "NVDA",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-26",
          "periodKind": "quarter",
          "filedAt": "2026-08-26",
          "effectiveAt": 1787702400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm",
          "form": "10-Q",
          "summary": "2026-07-26 기준(10-Q, 2026-08-26 공시) 매출이 전년 동기 대비 +105.9% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 96221000000,
            "previous": 46743000000.0,
            "changePct": 105.85114348672526,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "NVDA",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-26",
          "periodKind": "quarter",
          "filedAt": "2026-08-26",
          "effectiveAt": 1787702400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm",
          "form": "10-Q",
          "summary": "2026-07-26 기준(10-Q, 2026-08-26 공시) 영업이익률이 전년 동기 대비 +5.4%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 63734000000,
            "currentRevenue": 96221000000,
            "previousOpIncome": 28440000000,
            "previousRevenue": 46743000000.0,
            "changePercentagePoints": 5.3937651784697005,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "AMD": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "AVGO": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "QCOM": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "ARM": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "MRVL": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 4,
            "change": 0,
            "positiveEvents": 2,
            "negativeEvents": 0,
            "eventCount": 2
          }
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 4,
            "change": 0,
            "positiveEvents": 2,
            "negativeEvents": 0,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "MRVL",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-08-01",
          "periodKind": "quarter",
          "filedAt": "2026-08-28",
          "effectiveAt": 1787875200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000025/mrvl-20260801.htm",
          "form": "10-Q",
          "summary": "2026-08-01 기준(10-Q, 2026-08-28 공시) 매출이 전년 동기 대비 +36.5% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 2739300000,
            "previous": 2006100000.0,
            "changePct": 36.54852699267235,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "MRVL",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-08-01",
          "periodKind": "quarter",
          "filedAt": "2026-08-28",
          "effectiveAt": 1787875200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000025/mrvl-20260801.htm",
          "form": "10-Q",
          "summary": "2026-08-01 기준(10-Q, 2026-08-28 공시) 영업이익률이 전년 동기 대비 +2.3%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 459700000,
            "currentRevenue": 2739300000,
            "previousOpIncome": 290100000,
            "previousRevenue": 2006100000.0,
            "changePercentagePoints": 2.3207652755907553,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "INTC": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "TSM": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "ASML": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "AMAT": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "LRCX": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "KLAC": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 2,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 0,
            "eventCount": 1
          }
        }
      },
      "events": [
        {
          "ticker": "KLAC",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "annual",
          "filedAt": "2026-08-06",
          "effectiveAt": 1785974400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000027/klac-20260630.htm",
          "form": "10-K",
          "summary": "2026-06-30 기준(10-K, 2026-08-06 공시) 매출이 전년 동기 대비 +11.7% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 13579476000,
            "previous": 12156162000.0,
            "changePct": 11.70858038910636,
            "periodKind": "annual"
          }
        }
      ]
    },
    "MU": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "SNDK": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "WDC": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "ANET": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 2,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 0,
            "eventCount": 1
          }
        }
      },
      "events": [
        {
          "ticker": "ANET",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-08-05",
          "effectiveAt": 1785888000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000175/anet-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-08-05 공시) 매출이 전년 동기 대비 +37.7% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 3035700000,
            "previous": 2204800000.0,
            "changePct": 37.68595791001452,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "COHR": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 2,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 0,
            "eventCount": 1
          }
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 2,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 0,
            "eventCount": 1
          }
        }
      },
      "events": [
        {
          "ticker": "COHR",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "annual",
          "filedAt": "2026-08-14",
          "effectiveAt": 1786665600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/820318/000082031826000020/iivi-20260630.htm",
          "form": "10-K",
          "summary": "2026-06-30 기준(10-K, 2026-08-14 공시) 매출이 전년 동기 대비 +22.5% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 7118181000,
            "previous": 5810115000.0,
            "changePct": 22.513599128416573,
            "periodKind": "annual"
          }
        }
      ]
    },
    "LITE": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "GEV": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "CEG": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": -2,
              "change": 0,
              "positiveEvents": 0,
              "negativeEvents": 1,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 1,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "CEG",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-08-06",
          "effectiveAt": 1785974400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000104/ceg-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-08-06 공시) 매출이 전년 동기 대비 +23.0% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 7504000000,
            "previous": 6101000000.0,
            "changePct": 22.996230126208815,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "CEG",
          "category": "Margin",
          "eventType": "official_operating_margin_decline",
          "direction": -1,
          "baseScore": -2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-08-06",
          "effectiveAt": 1785974400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000104/ceg-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-08-06 공시) 영업이익률이 전년 동기 대비 -7.9%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 580000000,
            "currentRevenue": 7504000000,
            "previousOpIncome": 951000000,
            "previousRevenue": 6101000000.0,
            "changePercentagePoints": -7.858397501335898,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "VST": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "ETN": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 2,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 0,
            "eventCount": 1
          }
        }
      },
      "events": [
        {
          "ticker": "ETN",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-31",
          "effectiveAt": 1785456000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000030/etn-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-31 공시) 매출이 전년 동기 대비 +21.4% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 8531000000,
            "previous": 7028000000,
            "changePct": 21.385885031303363,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "PWR": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 2,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 0,
            "eventCount": 1
          }
        }
      },
      "events": [
        {
          "ticker": "PWR",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-30",
          "effectiveAt": 1785369600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1050915/000105091526000025/pwr-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-30 공시) 매출이 전년 동기 대비 +41.1% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 9556997000,
            "previous": 6773007000.0,
            "changePct": 41.10419493143886,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "HUBB": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": -2,
              "change": 0,
              "positiveEvents": 0,
              "negativeEvents": 1,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 1,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "HUBB",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-29",
          "effectiveAt": 1785283200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026050405/hubb-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-29 공시) 매출이 전년 동기 대비 +15.3% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 1711800000.0,
            "previous": 1484300000.0,
            "changePct": 15.327090210873816,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "HUBB",
          "category": "Margin",
          "eventType": "official_operating_margin_decline",
          "direction": -1,
          "baseScore": -2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-29",
          "effectiveAt": 1785283200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/48898/000162828026050405/hubb-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-29 공시) 영업이익률이 전년 동기 대비 -2.3%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 348600000.0,
            "currentRevenue": 1711800000.0,
            "previousOpIncome": 336300000,
            "previousRevenue": 1484300000.0,
            "changePercentagePoints": -2.2926162156308356,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "VRT": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 4,
            "change": 0,
            "positiveEvents": 2,
            "negativeEvents": 0,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "VRT",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-29",
          "effectiveAt": 1785283200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026050609/vrt-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-29 공시) 매출이 전년 동기 대비 +24.1% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 3274300000,
            "previous": 2638100000.0,
            "changePct": 24.11584094613548,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "VRT",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-29",
          "effectiveAt": 1785283200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026050609/vrt-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-29 공시) 영업이익률이 전년 동기 대비 +2.7%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 637900000,
            "currentRevenue": 3274300000,
            "previousOpIncome": 442400000,
            "previousRevenue": 2638100000.0,
            "changePercentagePoints": 2.7123818725925117,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "MOD": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": -2,
              "change": 0,
              "positiveEvents": 0,
              "negativeEvents": 1,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 1,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "MOD",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-30",
          "effectiveAt": 1785369600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926088569/mod-20260630x10q.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-30 공시) 매출이 전년 동기 대비 +28.0% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 874100000,
            "previous": 682800000.0,
            "changePct": 28.01698886936146,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "MOD",
          "category": "Margin",
          "eventType": "official_operating_margin_decline",
          "direction": -1,
          "baseScore": -2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-30",
          "effectiveAt": 1785369600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926088569/mod-20260630x10q.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-30 공시) 영업이익률이 전년 동기 대비 -2.5%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 74800000,
            "currentRevenue": 874100000,
            "previousOpIncome": 75700000,
            "previousRevenue": 682800000.0,
            "changePercentagePoints": -2.529328517801925,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "STX": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": false,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        }
      },
      "events": []
    },
    "EME": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 2,
            "change": 0,
            "positiveEvents": 1,
            "negativeEvents": 0,
            "eventCount": 1
          }
        }
      },
      "events": [
        {
          "ticker": "EME",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-30",
          "effectiveAt": 1785369600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/105634/000010563426000110/eme-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-30 공시) 매출이 전년 동기 대비 +19.8% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 5154892000,
            "previous": 4304400000.0,
            "changePct": 19.758665551528676,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "FIX": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 4,
            "change": 0,
            "positiveEvents": 2,
            "negativeEvents": 0,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "FIX",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-23",
          "effectiveAt": 1784764800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1035983/000110465926086258/fix-20260630x10q.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-23 공시) 매출이 전년 동기 대비 +50.3% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 3265656000,
            "previous": 2173319000.0,
            "changePct": 50.2612363854547,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "FIX",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-23",
          "effectiveAt": 1784764800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1035983/000110465926086258/fix-20260630x10q.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-23 공시) 영업이익률이 전년 동기 대비 +3.3%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 557966000,
            "currentRevenue": 3265656000,
            "previousOpIncome": 299873000,
            "previousRevenue": 2173319000.0,
            "changePercentagePoints": 3.2879495762519224,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "BE": {
      "asOfDate": "2026-09-05",
      "calculatedAt": 1788638676.181965,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "30": {
          "overall": {
            "score": 0,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 0,
            "eventCount": 0
          },
          "categories": {}
        },
        "90": {
          "categories": {
            "Growth": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            },
            "Margin": {
              "score": 2,
              "change": 0,
              "positiveEvents": 1,
              "negativeEvents": 0,
              "eventCount": 1
            }
          },
          "overall": {
            "score": 4,
            "change": 0,
            "positiveEvents": 2,
            "negativeEvents": 0,
            "eventCount": 2
          }
        }
      },
      "events": [
        {
          "ticker": "BE",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-28",
          "effectiveAt": 1785196800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1664703/000162828026050247/be-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-28 공시) 매출이 전년 동기 대비 +165.5% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 1065365000.0,
            "previous": 401242000.0,
            "changePct": 165.5168202730522,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "BE",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-28",
          "effectiveAt": 1785196800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1664703/000162828026050247/be-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-28 공시) 영업이익률이 전년 동기 대비 +18.0%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 182237000.0,
            "currentRevenue": 1065365000.0,
            "previousOpIncome": -3503000,
            "previousRevenue": 401242000.0,
            "changePercentagePoints": 17.978632132101676,
            "periodKind": "quarter"
          }
        }
      ]
    }
  }
};
