// earnings_evidence_watch.py가 자동 생성 - 직접 수정하지 마세요.
const EVIDENCE_REVIEW_QUEUE_STATUS = {
  "META": {
    "pendingDays": 9,
    "form": "10-Q",
    "filingDate": "2026-10-22",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "TSLA": {
    "pendingDays": 9,
    "form": "10-Q",
    "filingDate": "2026-10-22",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "LRCX": {
    "pendingDays": 9,
    "form": "10-Q",
    "filingDate": "2026-10-22",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "WDC": {
    "pendingDays": 8,
    "form": "10-Q",
    "filingDate": "2026-10-23",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "FIX": {
    "pendingDays": 9,
    "form": "10-Q",
    "filingDate": "2026-10-22",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "BE": {
    "pendingDays": 9,
    "form": "10-Q",
    "filingDate": "2026-10-22",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "HUBB": {
    "pendingDays": 4,
    "form": "8-K",
    "filingDate": "2026-10-27",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "STX": {
    "pendingDays": 4,
    "form": "8-K",
    "filingDate": "2026-10-27",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "GEV": {
    "pendingDays": 3,
    "form": "10-Q",
    "filingDate": "2026-10-28",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "VRT": {
    "pendingDays": 3,
    "form": "8-K",
    "filingDate": "2026-10-28",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "MSFT": {
    "pendingDays": 3,
    "form": "10-Q",
    "filingDate": "2026-10-28",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "GOOGL": {
    "pendingDays": 3,
    "form": "8-K",
    "filingDate": "2026-10-28",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "KLAC": {
    "pendingDays": 3,
    "form": "8-K",
    "filingDate": "2026-10-28",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "PWR": {
    "pendingDays": 2,
    "form": "10-Q",
    "filingDate": "2026-10-29",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "EME": {
    "pendingDays": 2,
    "form": "8-K",
    "filingDate": "2026-10-29",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "AMZN": {
    "pendingDays": 2,
    "form": "8-K",
    "filingDate": "2026-10-29",
    "level": "ok",
    "confidenceLevel": "confirmed"
  },
  "INTC": {
    "pendingDays": 2,
    "form": "8-K",
    "filingDate": "2026-10-29",
    "level": "numbers_reflected",
    "confidenceLevel": "confirmed"
  },
  "SNDK": {
    "pendingDays": 2,
    "form": "8-K",
    "filingDate": "2026-10-29",
    "level": "ok",
    "confidenceLevel": "confirmed"
  }
};
const EVIDENCE_RESULTS_PERIOD = {
  "MSFT": {
    "periodEnd": "2026-06-30",
    "documentId": "MSFT-8K-Q4FY2026-20260729",
    "form": "8-K",
    "filingDate": "2026-07-29"
  },
  "META": {
    "periodEnd": "2026-09-30",
    "documentId": "META-8-K-0001628280-26-066700",
    "form": "8-K",
    "filingDate": "2026-10-21"
  },
  "ORCL": {
    "periodEnd": "2026-08-31",
    "documentId": "ORCL-8K-Q1FY2027",
    "form": "8-K",
    "filingDate": "2026-09-10"
  },
  "CRM": {
    "periodEnd": "2026-07-31",
    "documentId": "CRM-Q2FY27-PressRelease-20260826",
    "form": null,
    "filingDate": "2026-08-26"
  },
  "PLTR": {
    "periodEnd": "2026-06-30",
    "documentId": "PLTR-8K-Q2-2026-Ex99.1-20260803",
    "form": "8-K",
    "filingDate": "2026-08-03"
  },
  "AVGO": {
    "periodEnd": "2026-08-02",
    "documentId": "AVGO-8K-Q3FY2026",
    "form": "8-K",
    "filingDate": "2026-09-02"
  },
  "QCOM": {
    "periodEnd": "2026-06-28",
    "documentId": "QCOM-8K-Q3FY2026",
    "form": "8-K",
    "filingDate": "2026-07-29"
  },
  "MRVL": {
    "periodEnd": "2026-08-01",
    "documentId": "MRVL-8K-Q2FY2027",
    "form": "8-K",
    "filingDate": "2026-08-27"
  },
  "LRCX": {
    "periodEnd": "2026-09-27",
    "documentId": "LRCX-8-K-0000707549-26-000052",
    "form": "8-K",
    "filingDate": "2026-10-21"
  },
  "MU": {
    "periodEnd": "2026-09-03",
    "documentId": "MU-8K-FQ4FY2026",
    "form": "8-K",
    "filingDate": "2026-09-30"
  },
  "WDC": {
    "periodEnd": "2026-07-03",
    "documentId": "WDC-8K-Q4FY2026",
    "form": "8-K",
    "filingDate": "2026-08-05"
  },
  "STX": {
    "periodEnd": "2026-07-03",
    "documentId": "STX-8K-Q4FY2026",
    "form": "8-K",
    "filingDate": "2026-07-29"
  },
  "ANET": {
    "periodEnd": "2026-06-30",
    "documentId": "ANET-8K-Q22026",
    "form": "8-K",
    "filingDate": "2026-08-04"
  },
  "ARM": {
    "periodEnd": "2026-06-30",
    "documentId": "ARM-6K-Q1FY2027",
    "form": "6-K",
    "filingDate": "2026-07-29"
  },
  "INTC": {
    "periodEnd": "2026-06-27",
    "documentId": "INTC-8K-Q22026",
    "form": "8-K",
    "filingDate": "2026-07-23"
  },
  "TSM": {
    "periodEnd": "2026-09-30",
    "documentId": "TSM-6-K-0001046179-26-000726",
    "form": "6-K",
    "filingDate": "2026-10-15"
  },
  "ASML": {
    "periodEnd": "2026-09-30",
    "documentId": "ASML-6K-Q3-2026-20261014",
    "form": "6-K",
    "filingDate": "2026-10-14"
  },
  "KLAC": {
    "periodEnd": "2026-06-30",
    "documentId": "KLAC-8K-Q4FY2026",
    "form": "8-K",
    "filingDate": "2026-07-28"
  },
  "SNDK": {
    "periodEnd": "2026-07-03",
    "documentId": "SNDK-8K-Q4FY2026",
    "form": "8-K",
    "filingDate": "2026-08-05"
  },
  "COHR": {
    "periodEnd": "2026-06-30",
    "documentId": "COHR-8K-Q4FY2026",
    "form": "8-K",
    "filingDate": "2026-08-01"
  },
  "LITE": {
    "periodEnd": "2026-06-27",
    "documentId": "LITE-8K-Q4FY2026",
    "form": "8-K",
    "filingDate": "2026-08-11"
  },
  "CEG": {
    "periodEnd": "2026-06-30",
    "documentId": "CEG-8K-Q22026",
    "form": "8-K",
    "filingDate": "2026-08-06"
  },
  "VST": {
    "periodEnd": "2026-06-30",
    "documentId": "VST-8K-Q22026",
    "form": "8-K",
    "filingDate": "2026-08-07"
  },
  "GEV": {
    "periodEnd": "2026-06-30",
    "documentId": "GEV-8K-Q22026",
    "form": "8-K",
    "filingDate": "2026-07-22"
  },
  "BE": {
    "periodEnd": "2026-06-30",
    "documentId": "BE-8K-Q22026",
    "form": "8-K",
    "filingDate": "2026-07-28"
  },
  "ETN": {
    "periodEnd": "2026-06-30",
    "documentId": "ETN-8K-Q22026",
    "form": "8-K",
    "filingDate": "2026-07-30"
  },
  "HUBB": {
    "periodEnd": "2026-06-30",
    "documentId": "HUBB-8K-Q22026",
    "form": "8-K",
    "filingDate": "2026-07-28"
  },
  "VRT": {
    "periodEnd": "2026-06-30",
    "documentId": "VRT-8K-Q22026",
    "form": "8-K",
    "filingDate": "2026-07-29"
  },
  "MOD": {
    "periodEnd": "2026-06-30",
    "documentId": "MOD-IR-Q1FY27",
    "form": null,
    "filingDate": "2026-07-29"
  },
  "PWR": {
    "periodEnd": "2026-06-30",
    "documentId": "PWR-IR-Q22026",
    "form": null,
    "filingDate": "2026-07-30"
  },
  "EME": {
    "periodEnd": "2026-06-30",
    "documentId": "EME-10Q-Q22026",
    "form": "10-Q",
    "filingDate": "2026-07-30"
  },
  "FIX": {
    "periodEnd": "2026-06-30",
    "documentId": "FIX-10Q-Q22026",
    "form": "10-Q",
    "filingDate": "2026-07-23"
  },
  "AMAT": {
    "periodEnd": "2026-07-26",
    "documentId": "AMAT-8K-Q3FY2026-PR",
    "form": "8-K",
    "filingDate": "2026-08-13"
  },
  "NVDA": {
    "periodEnd": "2026-07-26",
    "documentId": "NVDA-8K-Q2FY2027-q2fy27pr.htm",
    "form": "8-K",
    "filingDate": "2026-08-27"
  },
  "GOOGL": {
    "periodEnd": "2026-06-30",
    "documentId": "GOOGL-8K-Q22026-Ex991",
    "form": "8-K",
    "filingDate": "2026-07-22"
  },
  "AMZN": {
    "periodEnd": "2026-06-30",
    "documentId": "AMZN-8K-Q22026-Ex991",
    "form": "8-K",
    "filingDate": "2026-07-30"
  },
  "AAPL": {
    "periodEnd": "2026-06-27",
    "documentId": "AAPL-10Q-Q3FY2026",
    "form": "10-Q",
    "filingDate": "2026-07-31"
  },
  "AMD": {
    "periodEnd": "2026-06-27",
    "documentId": "AMD-8K-Q2FY2026-EX99.1-20260804",
    "form": "8-K",
    "filingDate": "2026-08-04"
  },
  "TSLA": {
    "periodEnd": "2026-09-30",
    "documentId": "TSLA-8-K-0001628280-26-066738",
    "form": "8-K",
    "filingDate": "2026-10-21"
  }
};
