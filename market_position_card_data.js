// market_position_card_data.js
// "시장 기대 대비 가격 위치" 카드 — 목표가 컨센서스 전수 데이터 (읽기 전용, 39종목 전수)
// 생성: 2026-10-08 · 출처: Yahoo Finance quoteSummary(financialData 모듈), 동일 소스로 39종목 전수 수집
// 근거 문서: MARKET_POSITION_CARD_DECLARATION_v1_1_20261008.md, MARKET_POSITION_CARD_FULL_ROLLOUT_v2_20261008.md
// 중심값 정의: target_median(컨센서스 중앙값) — Yahoo가 39종목 전체에 중앙값을 일관되게 제공하여 평균으로 전환하지 않음(target_mean은 참고용 보조값으로 함께 보관)
// 주의: 이 데이터에 없는 종목은 카드에서 "컨센서스 데이터 미확보"로 표시한다. 추정값으로 채우지 않는다.
// SPY/QQQ는 기업 컨센서스 대상이 아니므로 이 데이터에 포함하지 않는다 — 화면에서 "시장 문맥 — 기업 컨센서스 대상 아님"으로 별도 고정 처리한다.
const MARKET_TARGET_CONSENSUS = {
  "generated": "2026-10-08",
  "source": "Yahoo Finance quoteSummary(financialData), 39종목 전수 동일 소스 수집",
  "coverage_total": 39,
  "coverage_confirmed": 39,
  "coverage_missing": [],
  "tickers": {
    "AAPL": {target_low:215.0, target_median:340.0, target_mean:328.09384, target_high:405.0, num_analysts:39, price:336.67, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "AMAT": {target_low:358.0, target_median:650.0, target_mean:638.94446, target_high:900.0, num_analysts:36, price:520.65, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "AMD": {target_low:365.0, target_median:635.5, target_mean:636.208, target_high:1250.0, num_analysts:50, price:645.86, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "AMZN": {target_low:230.0, target_median:330.0, target_mean:331.53, target_high:405.0, num_analysts:58, price:259.92, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "ANET": {target_low:190.0, target_median:248.0, target_mean:242.55206, target_high:289.0, num_analysts:29, price:215.83, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "ARM": {target_low:125.0, target_median:278.6, target_mean:290.705, target_high:500.0, num_analysts:40, price:294.37, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "ASML": {target_low:865.27234, target_median:2151.9685, target_mean:2102.055, target_high:2908.48, num_analysts:16, price:1804.96, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "AVGO": {target_low:215.88, target_median:535.0, target_mean:531.3149, target_high:715.0, num_analysts:47, price:376.51, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "BE": {target_low:97.0, target_median:303.0, target_mean:283.77692, target_high:390.0, num_analysts:26, price:291.29, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "CEG": {target_low:290.0, target_median:345.5, target_mean:341.532, target_high:395.0, num_analysts:20, price:299.59, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "COHR": {target_low:280.0, target_median:420.0, target_mean:412.52014, target_high:500.0, num_analysts:23, price:334.56, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "CRM": {target_low:160.0, target_median:282.5, target_mean:283.36075, target_high:475.0, num_analysts:54, price:224.56, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "EME": {target_low:885.0, target_median:1047.0, target_mean:1033.2858, target_high:1200.0, num_analysts:7, price:784.66, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "ETN": {target_low:333.0, target_median:490.0, target_mean:482.895, target_high:534.0, num_analysts:26, price:431.33, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "FIX": {target_low:1910.0, target_median:2165.5, target_mean:2197.0, target_high:2500.0, num_analysts:8, price:1741.36, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "GEV": {target_low:940.0, target_median:1250.0, target_mean:1230.341, target_high:1450.0, num_analysts:33, price:997.09, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "GOOGL": {target_low:340.0, target_median:430.0, target_mean:429.47406, target_high:515.0, num_analysts:54, price:350.5, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "HUBB": {target_low:502.0, target_median:562.5, target_mean:560.5833, target_high:630.0, num_analysts:12, price:475.41, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "INTC": {target_low:80.0, target_median:115.0, target_mean:118.04651, target_high:200.0, num_analysts:43, price:113.12, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "KLAC": {target_low:175.0, target_median:228.5, target_mean:232.76923, target_high:325.0, num_analysts:26, price:196.83, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "LITE": {target_low:820.0, target_median:1193.0, target_mean:1161.9557, target_high:1400.0, num_analysts:26, price:1111.07, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "LRCX": {target_low:290.0, target_median:385.0, target_mean:375.64517, target_high:500.0, num_analysts:31, price:329.51, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "META": {target_low:580.0, target_median:800.0, target_mean:799.34, target_high:1050.0, num_analysts:58, price:721.31, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "MOD": {target_low:260.0, target_median:301.0, target_mean:302.125, target_high:355.0, num_analysts:8, price:189.44, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "MRVL": {target_low:210.0, target_median:350.0, target_mean:337.9938, target_high:450.0, num_analysts:44, price:284.68, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "MSFT": {target_low:440.0, target_median:586.0, target_mean:587.6338, target_high:870.0, num_analysts:53, price:529.76, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "MU": {target_low:361.0, target_median:1550.0, target_mean:1555.1304, target_high:3000.0, num_analysts:46, price:1088.0, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "NVDA": {target_low:180.0, target_median:315.0, target_mean:328.71695, target_high:515.0, num_analysts:59, price:237.47, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "ORCL": {target_low:110.0, target_median:240.0, target_mean:237.97415, target_high:400.0, num_analysts:41, price:143.56, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "PLTR": {target_low:80.0, target_median:205.1, target_mean:199.844, target_high:255.0, num_analysts:25, price:194.12, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "PWR": {target_low:410.0, target_median:800.0, target_mean:766.0062, target_high:945.0, num_analysts:29, price:701.07, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "QCOM": {target_low:100.0, target_median:175.0, target_mean:194.13333, target_high:400.0, num_analysts:30, price:177.12, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "SNDK": {target_low:1000.0, target_median:2150.0, target_mean:2173.0, target_high:3600.0, num_analysts:24, price:1692.42, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "STX": {target_low:700.0, target_median:1150.0, target_mean:1142.174, target_high:1600.0, num_analysts:23, price:807.57, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "TSLA": {target_low:128.11, target_median:410.0, target_mean:392.42215, target_high:600.0, num_analysts:37, price:377.81, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "TSM": {target_low:440.0, target_median:538.5, target_mean:555.0094, target_high:700.0, num_analysts:20, price:472.2, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "VRT": {target_low:236.0, target_median:340.0, target_mean:337.42856, target_high:427.0, num_analysts:28, price:246.49, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "VST": {target_low:106.0, target_median:211.0, target_mean:210.25, target_high:305.0, num_analysts:20, price:166.72, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"},
    "WDC": {target_low:420.0, target_median:650.0, target_mean:673.5, target_high:1050.0, num_analysts:24, price:405.42, price_as_of:"2026-10-07", source:"Yahoo Finance quoteSummary(financialData)", fetched_at:"2026-10-08"}
  }
};
