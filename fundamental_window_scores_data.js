// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
const FUNDAMENTAL_WINDOW_SCORES_DATA = {
  "schemaVersion": 1,
  "scoringVersion": "fundamental-window-v1",
  "generatedAt": 1789063204.6148958,
  "records": {
    "MSFT": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
            "previousOpIncome": 19171000000.0,
            "previousRevenue": 167702000000.0,
            "changePercentagePoints": 2.2574352808746228,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "META": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "AAPL",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-27",
          "periodKind": "quarter",
          "filedAt": "2026-07-31",
          "effectiveAt": 1785456000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000020/aapl-20260627.htm",
          "form": "10-Q",
          "summary": "2026-06-27 기준(10-Q, 2026-07-31 공시) 매출이 전년 동기 대비 +16.4% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 109417000000,
            "previous": 94036000000.0,
            "changePct": 16.356501765281383,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "AAPL",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-27",
          "periodKind": "quarter",
          "filedAt": "2026-07-31",
          "effectiveAt": 1785456000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000020/aapl-20260627.htm",
          "form": "10-Q",
          "summary": "2026-06-27 기준(10-Q, 2026-07-31 공시) 영업이익률이 전년 동기 대비 +2.6%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 35695000000,
            "currentRevenue": 109417000000,
            "previousOpIncome": 28202000000.0,
            "previousRevenue": 94036000000.0,
            "changePercentagePoints": 2.6322594954671983,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "TSLA": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "ORCL",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-05-31",
          "periodKind": "annual",
          "filedAt": "2026-06-22",
          "effectiveAt": 1782086400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526277521/orcl-20260531.htm",
          "form": "10-K",
          "summary": "2026-05-31 기준(10-K, 2026-06-22 공시) 매출이 전년 동기 대비 +17.3% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 67357000000.0,
            "previous": 57399000000.0,
            "changePct": 17.34873429850694,
            "periodKind": "annual"
          }
        }
      ]
    },
    "CRM": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
            "previousOpIncome": 28440000000.0,
            "previousRevenue": 46743000000.0,
            "changePercentagePoints": 5.3937651784697005,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "AMD": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "AMD",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-27",
          "periodKind": "quarter",
          "filedAt": "2026-08-05",
          "effectiveAt": 1785888000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000123/amd-20260627.htm",
          "form": "10-Q",
          "summary": "2026-06-27 기준(10-Q, 2026-08-05 공시) 매출이 전년 동기 대비 +50.1% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 11536000000,
            "previous": 7685000000.0,
            "changePct": 50.11060507482108,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "AMD",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-27",
          "periodKind": "quarter",
          "filedAt": "2026-08-05",
          "effectiveAt": 1785888000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000123/amd-20260627.htm",
          "form": "10-Q",
          "summary": "2026-06-27 기준(10-Q, 2026-08-05 공시) 영업이익률이 전년 동기 대비 +19.0%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 1990000000,
            "currentRevenue": 11536000000,
            "previousOpIncome": -134000000.0,
            "previousRevenue": 7685000000.0,
            "changePercentagePoints": 18.99400321428797,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "AVGO": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
      "hasConfirmedEvidence": true,
      "windows": {
        "7": {
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
          "ticker": "AVGO",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-08-02",
          "periodKind": "quarter",
          "filedAt": "2026-09-10",
          "effectiveAt": 1788998400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000080/avgo-20260802.htm",
          "form": "10-Q",
          "summary": "2026-08-02 기준(10-Q, 2026-09-10 공시) 매출이 전년 동기 대비 +85.5% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 29591000000,
            "previous": 15952000000.0,
            "changePct": 85.50025075225678,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "AVGO",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-08-02",
          "periodKind": "quarter",
          "filedAt": "2026-09-10",
          "effectiveAt": 1788998400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000080/avgo-20260802.htm",
          "form": "10-Q",
          "summary": "2026-08-02 기준(10-Q, 2026-09-10 공시) 영업이익률이 전년 동기 대비 +17.0%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 15955000000,
            "currentRevenue": 29591000000,
            "previousOpIncome": 5887000000.0,
            "previousRevenue": 15952000000.0,
            "changePercentagePoints": 17.013957751392798,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "QCOM": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
            "Margin": {
              "score": -2,
              "change": 0,
              "positiveEvents": 0,
              "negativeEvents": 1,
              "eventCount": 1
            }
          },
          "overall": {
            "score": -2,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 1,
            "eventCount": 1
          }
        }
      },
      "events": [
        {
          "ticker": "QCOM",
          "category": "Margin",
          "eventType": "official_operating_margin_decline",
          "direction": -1,
          "baseScore": -2,
          "periodEnd": "2026-06-28",
          "periodKind": "quarter",
          "filedAt": "2026-07-29",
          "effectiveAt": 1785283200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/804328/000080432826000086/qcom-20260628.htm",
          "form": "10-Q",
          "summary": "2026-06-28 기준(10-Q, 2026-07-29 공시) 영업이익률이 전년 동기 대비 -10.3%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 1626000000,
            "currentRevenue": 9947000000,
            "previousOpIncome": 2762000000,
            "previousRevenue": 10365000000,
            "changePercentagePoints": -10.300733782923105,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "ARM": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "ARM",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-29",
          "effectiveAt": 1785283200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000114/arm-20260630.htm",
          "form": "6-K",
          "summary": "2026-06-30 기준(6-K, 2026-07-29 공시) 매출이 전년 동기 대비 +22.4% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 1289000000.0,
            "previous": 1053000000.0,
            "changePct": 22.41215574548907,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "ARM",
          "category": "Margin",
          "eventType": "official_operating_margin_decline",
          "direction": -1,
          "baseScore": -2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-29",
          "effectiveAt": 1785283200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000114/arm-20260630.htm",
          "form": "6-K",
          "summary": "2026-06-30 기준(6-K, 2026-07-29 공시) 영업이익률이 전년 동기 대비 -3.2%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 98000000.0,
            "currentRevenue": 1289000000.0,
            "previousOpIncome": 114000000.0,
            "previousRevenue": 1053000000.0,
            "changePercentagePoints": -3.2234179635265745,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "ARM",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-03-31",
          "periodKind": "annual",
          "filedAt": "2026-05-26",
          "effectiveAt": 1779753600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000097/arm-20260331.htm",
          "form": "20-F",
          "summary": "2026-03-31 기준(20-F, 2026-05-26 공시) 매출이 전년 동기 대비 +22.8% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 4920000000.0,
            "previous": 4007000000.0,
            "changePct": 22.785126029448467,
            "periodKind": "annual"
          }
        },
        {
          "ticker": "ARM",
          "category": "Margin",
          "eventType": "official_operating_margin_decline",
          "direction": -1,
          "baseScore": -2,
          "periodEnd": "2026-03-31",
          "periodKind": "annual",
          "filedAt": "2026-05-26",
          "effectiveAt": 1779753600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1973239/000197323926000097/arm-20260331.htm",
          "form": "20-F",
          "summary": "2026-03-31 기준(20-F, 2026-05-26 공시) 영업이익률이 전년 동기 대비 -2.3%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 908000000.0,
            "currentRevenue": 4920000000.0,
            "previousOpIncome": 831000000.0,
            "previousRevenue": 4007000000.0,
            "changePercentagePoints": -2.283422709445462,
            "periodKind": "annual"
          }
        }
      ]
    },
    "MRVL": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "INTC",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-27",
          "periodKind": "quarter",
          "filedAt": "2026-07-24",
          "effectiveAt": 1784851200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000157/intc-20260627.htm",
          "form": "10-Q",
          "summary": "2026-06-27 기준(10-Q, 2026-07-24 공시) 매출이 전년 동기 대비 +25.4% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 16128000000,
            "previous": 12859000000.0,
            "changePct": 25.421883505715837,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "INTC",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-27",
          "periodKind": "quarter",
          "filedAt": "2026-07-24",
          "effectiveAt": 1784851200.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000157/intc-20260627.htm",
          "form": "10-Q",
          "summary": "2026-06-27 기준(10-Q, 2026-07-24 공시) 영업이익률이 전년 동기 대비 +35.8%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 1796000000,
            "currentRevenue": 16128000000,
            "previousOpIncome": -3176000000.0,
            "previousRevenue": 12859000000.0,
            "changePercentagePoints": 35.8345673371871,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "TSM": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "TSM",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-08-14",
          "effectiveAt": 1786665600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000541/tsm-fsx20260814x6k.htm",
          "form": "6-K",
          "summary": "2026-06-30 기준(6-K, 2026-08-14 공시) 매출이 전년 동기 대비 +36.0% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 1270380250000.0,
            "previous": 933791869000.0,
            "changePct": 36.04533217455119,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "TSM",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-08-14",
          "effectiveAt": 1786665600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000541/tsm-fsx20260814x6k.htm",
          "form": "6-K",
          "summary": "2026-06-30 기준(6-K, 2026-08-14 공시) 영업이익률이 전년 동기 대비 +10.7%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 766568191000.0,
            "currentRevenue": 1270380250000.0,
            "previousOpIncome": 463440498000.0,
            "previousRevenue": 933791869000.0,
            "changePercentagePoints": 10.711676764850969,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "ASML": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "ASML",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-15",
          "effectiveAt": 1784073600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/937966/000162828026048235/form6-kquarterlyfilings.htm",
          "form": "6-K",
          "summary": "2026-06-30 기준(6-K, 2026-07-15 공시) 매출이 전년 동기 대비 +21.3% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 9326500000.0,
            "previous": 7691700000.0,
            "changePct": 21.2540790722467,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "ASML",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-15",
          "effectiveAt": 1784073600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/937966/000162828026048235/form6-kquarterlyfilings.htm",
          "form": "6-K",
          "summary": "2026-06-30 기준(6-K, 2026-07-15 공시) 영업이익률이 전년 동기 대비 +2.4%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 3456100000.0,
            "currentRevenue": 9326500000.0,
            "previousOpIncome": 2664100000.0,
            "previousRevenue": 7691700000.0,
            "changePercentagePoints": 2.420737462459399,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "AMAT": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "AMAT",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-26",
          "periodKind": "quarter",
          "filedAt": "2026-08-20",
          "effectiveAt": 1787184000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/amat-20260726.htm",
          "form": "10-Q",
          "summary": "2026-07-26 기준(10-Q, 2026-08-20 공시) 매출이 전년 동기 대비 +24.8% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 9115000000,
            "previous": 7302000000.0,
            "changePct": 24.82881402355519,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "AMAT",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-26",
          "periodKind": "quarter",
          "filedAt": "2026-08-20",
          "effectiveAt": 1787184000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/amat-20260726.htm",
          "form": "10-Q",
          "summary": "2026-07-26 기준(10-Q, 2026-08-20 공시) 영업이익률이 전년 동기 대비 +3.2%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 3075000000,
            "currentRevenue": 9115000000,
            "previousOpIncome": 2233000000.0,
            "previousRevenue": 7302000000.0,
            "changePercentagePoints": 3.1549378261548244,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "LRCX": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "LRCX",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-28",
          "periodKind": "annual",
          "filedAt": "2026-08-07",
          "effectiveAt": 1786060800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000037/lrcx-20260628.htm",
          "form": "10-K",
          "summary": "2026-06-28 기준(10-K, 2026-08-07 공시) 매출이 전년 동기 대비 +26.0% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 23232690000,
            "previous": 18435591000.0,
            "changePct": 26.020858240997,
            "periodKind": "annual"
          }
        },
        {
          "ticker": "LRCX",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-28",
          "periodKind": "annual",
          "filedAt": "2026-08-07",
          "effectiveAt": 1786060800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/707549/000070754926000037/lrcx-20260628.htm",
          "form": "10-K",
          "summary": "2026-06-28 기준(10-K, 2026-08-07 공시) 영업이익률이 전년 동기 대비 +3.3%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 8199795000,
            "currentRevenue": 23232690000,
            "previousOpIncome": 5900968000,
            "previousRevenue": 18435591000.0,
            "changePercentagePoints": 3.28564829072055,
            "periodKind": "annual"
          }
        }
      ]
    },
    "KLAC": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "MU",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-05-28",
          "periodKind": "quarter",
          "filedAt": "2026-06-25",
          "effectiveAt": 1782345600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/723125/000072312526000015/mu-20260528.htm",
          "form": "10-Q",
          "summary": "2026-05-28 기준(10-Q, 2026-06-25 공시) 매출이 전년 동기 대비 +345.7% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 41456000000.0,
            "previous": 9301000000.0,
            "changePct": 345.7155144608107,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "MU",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-05-28",
          "periodKind": "quarter",
          "filedAt": "2026-06-25",
          "effectiveAt": 1782345600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/723125/000072312526000015/mu-20260528.htm",
          "form": "10-Q",
          "summary": "2026-05-28 기준(10-Q, 2026-06-25 공시) 영업이익률이 전년 동기 대비 +57.0%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 33318000000.0,
            "currentRevenue": 41456000000.0,
            "previousOpIncome": 2169000000.0,
            "previousRevenue": 9301000000.0,
            "changePercentagePoints": 57.049475326478714,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "SNDK": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "SNDK",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-03",
          "periodKind": "annual",
          "filedAt": "2026-08-17",
          "effectiveAt": 1786924800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026057406/sndk-20260703.htm",
          "form": "10-K",
          "summary": "2026-07-03 기준(10-K, 2026-08-17 공시) 매출이 전년 동기 대비 +175.3% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 20248000000,
            "previous": 7355000000.0,
            "changePct": 175.29571719918425,
            "periodKind": "annual"
          }
        },
        {
          "ticker": "SNDK",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-03",
          "periodKind": "annual",
          "filedAt": "2026-08-17",
          "effectiveAt": 1786924800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026057406/sndk-20260703.htm",
          "form": "10-K",
          "summary": "2026-07-03 기준(10-K, 2026-08-17 공시) 영업이익률이 전년 동기 대비 +79.9%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 12389000000,
            "currentRevenue": 20248000000,
            "previousOpIncome": -1377000000,
            "previousRevenue": 7355000000.0,
            "changePercentagePoints": 79.9082478557525,
            "periodKind": "annual"
          }
        }
      ]
    },
    "WDC": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "WDC",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-03",
          "periodKind": "annual",
          "filedAt": "2026-08-14",
          "effectiveAt": 1786665600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026057139/wdc-20260703.htm",
          "form": "10-K",
          "summary": "2026-07-03 기준(10-K, 2026-08-14 공시) 매출이 전년 동기 대비 +35.7% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 12919000000,
            "previous": 9520000000.0,
            "changePct": 35.70378151260505,
            "periodKind": "annual"
          }
        },
        {
          "ticker": "WDC",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-03",
          "periodKind": "annual",
          "filedAt": "2026-08-14",
          "effectiveAt": 1786665600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/106040/000162828026057139/wdc-20260703.htm",
          "form": "10-K",
          "summary": "2026-07-03 기준(10-K, 2026-08-14 공시) 영업이익률이 전년 동기 대비 +10.0%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 4453000000,
            "currentRevenue": 12919000000,
            "previousOpIncome": 2334000000,
            "previousRevenue": 9520000000.0,
            "changePercentagePoints": 9.951805398992173,
            "periodKind": "annual"
          }
        }
      ]
    },
    "ANET": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "LITE",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-27",
          "periodKind": "annual",
          "filedAt": "2026-08-17",
          "effectiveAt": 1786924800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026057358/lite-20260627.htm",
          "form": "10-K",
          "summary": "2026-06-27 기준(10-K, 2026-08-17 공시) 매출이 전년 동기 대비 +83.2% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 3014000000,
            "previous": 1645000000,
            "changePct": 83.22188449848025,
            "periodKind": "annual"
          }
        },
        {
          "ticker": "LITE",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-27",
          "periodKind": "annual",
          "filedAt": "2026-08-17",
          "effectiveAt": 1786924800.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026057358/lite-20260627.htm",
          "form": "10-K",
          "summary": "2026-06-27 기준(10-K, 2026-08-17 공시) 영업이익률이 전년 동기 대비 +28.4%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 524800000,
            "currentRevenue": 3014000000,
            "previousOpIncome": -180100000,
            "previousRevenue": 1645000000,
            "changePercentagePoints": 28.360405241597974,
            "periodKind": "annual"
          }
        }
      ]
    },
    "GEV": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "GEV",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-07-22",
          "effectiveAt": 1784678400.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000148/gev-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-07-22 공시) 매출이 전년 동기 대비 +21.9% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 11104000000,
            "previous": 9111000000.0,
            "changePct": 21.8746570080123,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "CEG": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
              "score": -2,
              "change": 0,
              "positiveEvents": 0,
              "negativeEvents": 1,
              "eventCount": 1
            }
          },
          "overall": {
            "score": -2,
            "change": 0,
            "positiveEvents": 0,
            "negativeEvents": 1,
            "eventCount": 1
          }
        }
      },
      "events": [
        {
          "ticker": "VST",
          "category": "Growth",
          "eventType": "official_revenue_decline",
          "direction": -1,
          "baseScore": -2,
          "periodEnd": "2026-06-30",
          "periodKind": "quarter",
          "filedAt": "2026-08-10",
          "effectiveAt": 1786320000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000019/vistra-20260630.htm",
          "form": "10-Q",
          "summary": "2026-06-30 기준(10-Q, 2026-08-10 공시) 매출이 전년 동기 대비 -5.5% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 4017000000,
            "previous": 4250000000.0,
            "changePct": -5.4823529411764715,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "ETN": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
            "previousOpIncome": 442400000.0,
            "previousRevenue": 2638100000.0,
            "changePercentagePoints": 2.7123818725925117,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "MOD": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
            "previousOpIncome": 75700000.0,
            "previousRevenue": 682800000.0,
            "changePercentagePoints": -2.529328517801925,
            "periodKind": "quarter"
          }
        },
        {
          "ticker": "MOD",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-03-31",
          "periodKind": "annual",
          "filedAt": "2026-05-27",
          "effectiveAt": 1779840000.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/67347/000110465926066795/mod-20260331x10k.htm",
          "form": "10-K",
          "summary": "2026-03-31 기준(10-K, 2026-05-27 공시) 매출이 전년 동기 대비 +23.1% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 3181100000.0,
            "previous": 2583500000.0,
            "changePct": 23.131410876717638,
            "periodKind": "annual"
          }
        }
      ]
    },
    "STX": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
          "ticker": "STX",
          "category": "Growth",
          "eventType": "official_revenue_growth",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-03",
          "periodKind": "annual",
          "filedAt": "2026-08-04",
          "effectiveAt": 1785801600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000159/stx-20260703.htm",
          "form": "10-K",
          "summary": "2026-07-03 기준(10-K, 2026-08-04 공시) 매출이 전년 동기 대비 +34.1% 변했어요.",
          "evidence": {
            "metric": "revenue",
            "current": 12195000000,
            "previous": 9097000000.0,
            "changePct": 34.05518302737167,
            "periodKind": "annual"
          }
        },
        {
          "ticker": "STX",
          "category": "Margin",
          "eventType": "official_operating_margin_expansion",
          "direction": 1,
          "baseScore": 2,
          "periodEnd": "2026-07-03",
          "periodKind": "annual",
          "filedAt": "2026-08-04",
          "effectiveAt": 1785801600.0,
          "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1137789/000113778926000159/stx-20260703.htm",
          "form": "10-K",
          "summary": "2026-07-03 기준(10-K, 2026-08-04 공시) 영업이익률이 전년 동기 대비 +12.8%p 변했어요(매출총이익 데이터가 없어 영업이익률로 대체).",
          "evidence": {
            "metric": "operating_margin",
            "currentOpIncome": 4094000000,
            "currentRevenue": 12195000000,
            "previousOpIncome": 1890000000,
            "previousRevenue": 9097000000.0,
            "changePercentagePoints": 12.795055684974791,
            "periodKind": "annual"
          }
        }
      ]
    },
    "EME": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
            "previousOpIncome": 299873000.0,
            "previousRevenue": 2173319000.0,
            "changePercentagePoints": 3.2879495762519224,
            "periodKind": "quarter"
          }
        }
      ]
    },
    "BE": {
      "asOfDate": "2026-09-10",
      "calculatedAt": 1789063204.6148958,
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
