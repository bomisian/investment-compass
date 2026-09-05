// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// 티커별 {date, revenueAvg, analystCount, fiscalDate} 하루 1건씩 누적.
const REVENUE_ESTIMATE_HISTORY_DATA = {
  "KLAC": [
    {
      "date": "2026-09-03",
      "revenueAvg": 18099628000.0,
      "analystCount": 24.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 18099628000.0,
      "analystCount": 24.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 18099628000.0,
      "analystCount": 24.0,
      "fiscalDate": "2027-06-30"
    }
  ],
  "MU": [
    {
      "date": "2026-09-03",
      "revenueAvg": 240323154000.0,
      "analystCount": 39.0,
      "fiscalDate": "2027-08-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 240323154000.0,
      "analystCount": 39.0,
      "fiscalDate": "2027-08-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 240323154000.0,
      "analystCount": 39.0,
      "fiscalDate": "2027-08-31"
    }
  ],
  "SNDK": [
    {
      "date": "2026-09-03",
      "revenueAvg": 48960258320.0,
      "analystCount": 20.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 48960258320.0,
      "analystCount": 20.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 48960258320.0,
      "analystCount": 20.0,
      "fiscalDate": "2027-06-30"
    }
  ],
  "WDC": [
    {
      "date": "2026-09-03",
      "revenueAvg": 19191868230.0,
      "analystCount": 22.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 19191868230.0,
      "analystCount": 22.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 19191868230.0,
      "analystCount": 22.0,
      "fiscalDate": "2027-06-30"
    }
  ],
  "ANET": [
    {
      "date": "2026-09-03",
      "revenueAvg": 12667530860.0,
      "analystCount": 26.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 12667530860.0,
      "analystCount": 26.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 12667530860.0,
      "analystCount": 26.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "COHR": [
    {
      "date": "2026-09-03",
      "revenueAvg": 10682807980.0,
      "analystCount": 21.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 10682807980.0,
      "analystCount": 21.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 10682807980.0,
      "analystCount": 21.0,
      "fiscalDate": "2027-06-30"
    }
  ],
  "LITE": [
    {
      "date": "2026-09-03",
      "revenueAvg": 5693190710.0,
      "analystCount": 24.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 5693190710.0,
      "analystCount": 24.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 5693190710.0,
      "analystCount": 24.0,
      "fiscalDate": "2027-06-30"
    }
  ],
  "GEV": [
    {
      "date": "2026-09-03",
      "revenueAvg": 46207611420.0,
      "analystCount": 20.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 46207611420.0,
      "analystCount": 20.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 46207611420.0,
      "analystCount": 20.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "CEG": [
    {
      "date": "2026-09-03",
      "revenueAvg": 35127500850.0,
      "analystCount": 17.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 35127500850.0,
      "analystCount": 17.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 35127500850.0,
      "analystCount": 17.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "VST": [
    {
      "date": "2026-09-03",
      "revenueAvg": 22828866860.0,
      "analystCount": 9.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 22828866860.0,
      "analystCount": 9.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 22828866860.0,
      "analystCount": 9.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "ETN": [
    {
      "date": "2026-09-03",
      "revenueAvg": 32754468680.0,
      "analystCount": 24.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 32754468680.0,
      "analystCount": 24.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 32754468680.0,
      "analystCount": 24.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "PWR": [
    {
      "date": "2026-09-03",
      "revenueAvg": 39590244570.0,
      "analystCount": 24.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 39590244570.0,
      "analystCount": 24.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 39590244570.0,
      "analystCount": 24.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "HUBB": [
    {
      "date": "2026-09-03",
      "revenueAvg": 6868127530.0,
      "analystCount": 11.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 6868127530.0,
      "analystCount": 11.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 6868127530.0,
      "analystCount": 11.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "VRT": [
    {
      "date": "2026-09-03",
      "revenueAvg": 14016338910.0,
      "analystCount": 28.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 14016338910.0,
      "analystCount": 28.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 14016338910.0,
      "analystCount": 28.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "MOD": [
    {
      "date": "2026-09-03",
      "revenueAvg": 4062548340.0,
      "analystCount": 8.0,
      "fiscalDate": "2027-03-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 4062548340.0,
      "analystCount": 8.0,
      "fiscalDate": "2027-03-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 4062548340.0,
      "analystCount": 8.0,
      "fiscalDate": "2027-03-31"
    }
  ],
  "STX": [
    {
      "date": "2026-09-03",
      "revenueAvg": 18784871990.0,
      "analystCount": 21.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 18784871990.0,
      "analystCount": 21.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 18784871990.0,
      "analystCount": 21.0,
      "fiscalDate": "2027-06-30"
    }
  ],
  "EME": [
    {
      "date": "2026-09-03",
      "revenueAvg": 20319659700.0,
      "analystCount": 9.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 20319659700.0,
      "analystCount": 9.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 20319659700.0,
      "analystCount": 9.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "FIX": [
    {
      "date": "2026-09-03",
      "revenueAvg": 12982378220.0,
      "analystCount": 10.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 12982378220.0,
      "analystCount": 10.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 12982378220.0,
      "analystCount": 10.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "BE": [
    {
      "date": "2026-09-03",
      "revenueAvg": 4125862880.0,
      "analystCount": 26.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 4125862880.0,
      "analystCount": 26.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 4125862880.0,
      "analystCount": 26.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "TSM": [
    {
      "date": "2026-09-03",
      "revenueAvg": 5435176569510.0,
      "analystCount": 12.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 5435176569510.0,
      "analystCount": 12.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 5435176569510.0,
      "analystCount": 12.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "ASML": [
    {
      "date": "2026-09-03",
      "revenueAvg": 43311939400.0,
      "analystCount": 32.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 43311939400.0,
      "analystCount": 32.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 43311939400.0,
      "analystCount": 32.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "AMAT": [
    {
      "date": "2026-09-03",
      "revenueAvg": 34177828999.0,
      "analystCount": 27.0,
      "fiscalDate": "2026-10-31"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 34177828999.0,
      "analystCount": 27.0,
      "fiscalDate": "2026-10-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 34177828999.0,
      "analystCount": 27.0,
      "fiscalDate": "2026-10-31"
    }
  ],
  "LRCX": [
    {
      "date": "2026-09-03",
      "revenueAvg": 34792865450.0,
      "analystCount": 29.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-04",
      "revenueAvg": 34792865450.0,
      "analystCount": 29.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 34792865450.0,
      "analystCount": 29.0,
      "fiscalDate": "2027-06-30"
    }
  ],
  "MSFT": [
    {
      "date": "2026-09-04",
      "revenueAvg": 391082615630.0,
      "analystCount": 33.0,
      "fiscalDate": "2027-06-30"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 391082615630.0,
      "analystCount": 33.0,
      "fiscalDate": "2027-06-30"
    }
  ],
  "GOOGL": [
    {
      "date": "2026-09-04",
      "revenueAvg": 497864285580.0,
      "analystCount": 53.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 497864285580.0,
      "analystCount": 53.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "AMZN": [
    {
      "date": "2026-09-04",
      "revenueAvg": 828185897360.0,
      "analystCount": 53.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 828185897360.0,
      "analystCount": 53.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "META": [
    {
      "date": "2026-09-04",
      "revenueAvg": 254185499680.0,
      "analystCount": 53.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 254185499680.0,
      "analystCount": 53.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "AAPL": [
    {
      "date": "2026-09-04",
      "revenueAvg": 477683718840.0,
      "analystCount": 37.0,
      "fiscalDate": "2026-09-30"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 477683718840.0,
      "analystCount": 37.0,
      "fiscalDate": "2026-09-30"
    }
  ],
  "TSLA": [
    {
      "date": "2026-09-04",
      "revenueAvg": 106034594570.0,
      "analystCount": 34.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 106034594570.0,
      "analystCount": 34.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "ORCL": [
    {
      "date": "2026-09-04",
      "revenueAvg": 89339564120.0,
      "analystCount": 42.0,
      "fiscalDate": "2027-05-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 89339564120.0,
      "analystCount": 42.0,
      "fiscalDate": "2027-05-31"
    }
  ],
  "CRM": [
    {
      "date": "2026-09-04",
      "revenueAvg": 46160328640.0,
      "analystCount": 25.0,
      "fiscalDate": "2027-01-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 46160328640.0,
      "analystCount": 25.0,
      "fiscalDate": "2027-01-31"
    }
  ],
  "PLTR": [
    {
      "date": "2026-09-04",
      "revenueAvg": 8188880520.0,
      "analystCount": 29.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 8188880520.0,
      "analystCount": 29.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "NVDA": [
    {
      "date": "2026-09-04",
      "revenueAvg": 397012036470.0,
      "analystCount": 49.0,
      "fiscalDate": "2027-01-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 397012036470.0,
      "analystCount": 49.0,
      "fiscalDate": "2027-01-31"
    }
  ],
  "AMD": [
    {
      "date": "2026-09-04",
      "revenueAvg": 50813933620.0,
      "analystCount": 47.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 50813933620.0,
      "analystCount": 47.0,
      "fiscalDate": "2026-12-31"
    }
  ],
  "AVGO": [
    {
      "date": "2026-09-04",
      "revenueAvg": 106039607190.0,
      "analystCount": 44.0,
      "fiscalDate": "2026-10-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 106039607190.0,
      "analystCount": 44.0,
      "fiscalDate": "2026-10-31"
    }
  ],
  "QCOM": [
    {
      "date": "2026-09-04",
      "revenueAvg": 42951447040.0,
      "analystCount": 30.0,
      "fiscalDate": "2026-09-30"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 42951447040.0,
      "analystCount": 30.0,
      "fiscalDate": "2026-09-30"
    }
  ],
  "ARM": [
    {
      "date": "2026-09-04",
      "revenueAvg": 6049280780.0,
      "analystCount": 38.0,
      "fiscalDate": "2027-03-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 6049280780.0,
      "analystCount": 38.0,
      "fiscalDate": "2027-03-31"
    }
  ],
  "MRVL": [
    {
      "date": "2026-09-04",
      "revenueAvg": 11545115670.0,
      "analystCount": 38.0,
      "fiscalDate": "2027-01-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 11545115670.0,
      "analystCount": 38.0,
      "fiscalDate": "2027-01-31"
    }
  ],
  "INTC": [
    {
      "date": "2026-09-04",
      "revenueAvg": 62993527030.0,
      "analystCount": 38.0,
      "fiscalDate": "2026-12-31"
    },
    {
      "date": "2026-09-05",
      "revenueAvg": 62993527030.0,
      "analystCount": 38.0,
      "fiscalDate": "2026-12-31"
    }
  ]
};
