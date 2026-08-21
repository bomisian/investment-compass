// 자동 생성 파일 - 데이터 최신성·수집 오류 상태(민감정보 없음)
const DATA_STATUS = {
  "sources": {
    "fundamentals": {
      "label": "가치·퀄리티",
      "status": "ok",
      "lastAttemptAt": 1787296903.5558217,
      "lastSuccessAt": 1787296903.5558217,
      "lastPartialSuccessAt": 1787296903.5558217,
      "lastFetchedAt": 1787278120.8417249,
      "oldestFetchedAt": 1787274424.5561414,
      "warningAfterHours": 6,
      "criticalAfterHours": 24,
      "lastError": null,
      "expectedItems": 41,
      "availableItems": 41,
      "emptyItems": [],
      "staleItems": [],
      "dataAsOfLabel": null
    },
    "financials": {
      "label": "재무제표",
      "status": "partial",
      "lastAttemptAt": 1787296903.5760229,
      "lastSuccessAt": null,
      "lastPartialSuccessAt": 1787296903.5760229,
      "lastFetchedAt": 1787296903.5861115,
      "oldestFetchedAt": 1787125925.0803819,
      "warningAfterHours": 6,
      "criticalAfterHours": 24,
      "lastError": "확인 필요: MOD",
      "expectedItems": 41,
      "availableItems": 40,
      "emptyItems": [
        "MOD"
      ],
      "staleItems": [
        "MOD"
      ],
      "dataAsOfLabel": "2026-07-26"
    },
    "estimates": {
      "label": "실적전망",
      "status": "ok",
      "lastAttemptAt": 1787296913.3174074,
      "lastSuccessAt": 1787296913.3174074,
      "lastPartialSuccessAt": 1787296913.3174074,
      "lastFetchedAt": 1787282270.6242602,
      "oldestFetchedAt": 1787215455.5113006,
      "warningAfterHours": 6,
      "criticalAfterHours": 24,
      "lastError": null,
      "expectedItems": 39,
      "availableItems": 39,
      "emptyItems": [],
      "staleItems": [],
      "dataAsOfLabel": null
    },
    "news": {
      "label": "종목뉴스",
      "status": "partial",
      "lastAttemptAt": 1787296913.337356,
      "lastSuccessAt": null,
      "lastPartialSuccessAt": 1787296913.337356,
      "lastFetchedAt": 1787278209.6740358,
      "oldestFetchedAt": 1787211520.4114065,
      "warningAfterHours": 6,
      "criticalAfterHours": 24,
      "lastError": "확인 필요: SBGSY, MOD",
      "expectedItems": 41,
      "availableItems": 40,
      "emptyItems": [
        "SBGSY"
      ],
      "staleItems": [
        "MOD",
        "SBGSY"
      ],
      "dataAsOfLabel": "2026-08-21"
    },
    "market": {
      "label": "시장환경",
      "status": "ok",
      "lastAttemptAt": 1787296919.5046532,
      "lastSuccessAt": 1787296919.5046532,
      "lastPartialSuccessAt": 1787296919.5046532,
      "lastFetchedAt": 1787296919.5050592,
      "oldestFetchedAt": 1787296919.5050592,
      "warningAfterHours": 6,
      "criticalAfterHours": 24,
      "lastError": null,
      "expectedItems": 1,
      "availableItems": 1,
      "emptyItems": [],
      "staleItems": [],
      "dataAsOfLabel": null
    },
    "prices": {
      "label": "가격·차트",
      "status": "ok",
      "lastAttemptAt": 1787296945.5936906,
      "lastSuccessAt": 1787296945.5936906,
      "lastPartialSuccessAt": 1787296945.5936906,
      "lastFetchedAt": 1787259645.0231078,
      "oldestFetchedAt": 1787245045.6700432,
      "warningAfterHours": 6,
      "criticalAfterHours": 24,
      "lastError": null,
      "expectedItems": 44,
      "availableItems": 44,
      "emptyItems": [],
      "staleItems": [],
      "dataAsOfLabel": "2026-08-20"
    },
    "businessAnalysis": {
      "label": "기업분석",
      "status": "critical",
      "lastAttemptAt": 1787296945.812829,
      "lastSuccessAt": 1787296945.812829,
      "lastFetchedAt": 1787200093.5224173,
      "oldestFetchedAt": 1787200093.5224173,
      "dataAsOfLabel": "2026-08-20 13:28",
      "expectedItems": 1,
      "availableItems": 1,
      "emptyItems": [],
      "staleItems": [
        "businessAnalysis"
      ],
      "warningAfterHours": 6,
      "criticalAfterHours": 24,
      "lastError": null
    },
    "events": {
      "label": "중요 이벤트",
      "status": "ok",
      "lastAttemptAt": 1787296919.3800907,
      "lastSuccessAt": 1787296919.3800907,
      "lastFetchedAt": 1787296919.3800907,
      "oldestFetchedAt": 1787296919.3800907,
      "dataAsOfLabel": "2026-08-21",
      "expectedItems": 1,
      "availableItems": 1,
      "emptyItems": [],
      "staleItems": [],
      "warningAfterHours": 6,
      "criticalAfterHours": 24,
      "lastError": null
    },
    "eventAnalysis": {
      "label": "뉴스 반영 기업분석",
      "status": "ok",
      "lastAttemptAt": 1787296919.442829,
      "lastSuccessAt": 1787296919.442829,
      "lastFetchedAt": 1787296919.442829,
      "oldestFetchedAt": 1787296919.442829,
      "dataAsOfLabel": "2026-08-21",
      "expectedItems": 39,
      "availableItems": 39,
      "emptyItems": [],
      "staleItems": [],
      "warningAfterHours": 6,
      "criticalAfterHours": 24,
      "lastError": null
    },
    "sigma": {
      "label": "시그마(옵션 IV)",
      "status": "partial",
      "lastAttemptAt": 1787296945.7273126,
      "lastSuccessAt": null,
      "lastPartialSuccessAt": 1787296945.7273126,
      "lastFetchedAt": 1787293298.1060984,
      "oldestFetchedAt": 1787234014.1232996,
      "warningAfterHours": 6,
      "criticalAfterHours": 24,
      "lastError": "확인 필요: SBGSY",
      "expectedItems": 42,
      "availableItems": 41,
      "emptyItems": [
        "SBGSY"
      ],
      "staleItems": [],
      "dataAsOfLabel": "2026-08-14"
    }
  },
  "generatedAt": 1787296945.812829,
  "timezoneGuide": {
    "collector": "Asia/Seoul",
    "market": "America/New_York"
  }
};
