window.FAIR_VALUE = {
 "schema": "100/v2",
 "generated_at": "2026-09-29T22:36:30.220179+00:00",
 "as_of_consensus_day": "2026-09-29",
 "consensus_fetched_day": "2026-09-29",
 "price_session_day": "2026-09-29",
 "cons_dir_file_count": 507,
 "cons_dir": "raw_92\\daily\\consensus_2026-09-29",
 "eurusd": {
  "rate": 1.139211654663086,
  "row_date": "2026-09-28",
  "stale": false
 },
 "method": "동종 = 같은 GICS 세부업종(부족하면 워치리스트 테마, 최소 3개). 적정가 범위 = NTM EPS × 동종 NTM PER 중앙값 × 평소 상대 PER 비율 q[p25·중앙·p75]. q는 2016-12~ 월말 후행 PER(10-K 최초 공시 GAAP EPS) 비율 -- 선행 PER에 적용(기준 혼합). 매수·매도 신호 아님, 예측력 미검증.",
 "unmapped_tickers": [],
 "rows": {
  "QQQ": {
   "ticker": "QQQ",
   "status": "대상아님",
   "reason": "ETF"
  },
  "SPY": {
   "ticker": "SPY",
   "status": "대상아님",
   "reason": "ETF"
  },
  "MSFT": {
   "ticker": "MSFT",
   "theme": "빅테크·AI SW",
   "status": "방법부적합",
   "reasons": [
    "동종 선행 PER 차이가 큼(상위/하위 사분위 3.69 > 2.0) -- 동종이 이질적"
   ],
   "price": 508.96,
   "peer_basis": "GICS 세부업종: Systems Software",
   "fwd_pe": 24.544661116582468,
   "peer_median_pe": 47.63043739308897,
   "peers": [
    "CRWD",
    "FTNT",
    "GEN",
    "PANW",
    "NOW"
   ],
   "q": {
    "p25": 0.4074594390999211,
    "median": 0.49847525029596895,
    "p75": 0.6037640518529178,
    "months": 66,
    "from": "2020-02",
    "to": "2026-08",
    "recent36_median": 0.5933649314770011,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.19035986465665355,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "GOOGL": {
   "ticker": "GOOGL",
   "theme": "빅테크·AI SW",
   "status": "ok",
   "reasons": [],
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "label": "중립",
   "confidence": "낮음",
   "caution": [
    "세부업종 동종이 부족해 워치리스트 테마로 대체 -- 연구 참고"
   ],
   "fwd_to_last_gaap_eps": 1.5163337143436442,
   "price": 340.92,
   "ntm_eps": 16.391567452054794,
   "fwd_pe": 20.79849904514552,
   "peer_median_pe": 22.205935787413207,
   "peer_pe": {
    "AMZN": 22.205935787413207,
    "META": 22.17691163080387,
    "AAPL": 34.39773836136253
   },
   "peers": [
    "AMZN",
    "META",
    "AAPL"
   ],
   "q": {
    "p25": 0.7921774664762444,
    "median": 0.947815933202502,
    "p75": 1.0832550813462953,
    "months": 103,
    "from": "2017-02",
    "to": "2026-08",
    "recent36_median": 0.7968888443224154,
    "recent36_valid_months": 31,
    "drift_recent36_vs_all": -0.1592367078807494,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.3674399073288708,
   "peer_pe_spread": 1.275350218416644,
   "today_q": 0.9366188952475737,
   "band": [
    288.3447507213643,
    344.99561090104334,
    394.29411920518874
   ],
   "band_mid_gap": -0.0118135152224077,
   "band_1y": [
    262.8073522082266,
    314.4409003373092,
    359.37326134896324
   ],
   "fy1_end": "2027-12-31",
   "methodology": "gaap",
   "display_only": {
    "rev90": 0.13456056217287915,
    "peer_rev90_median": -0.010727241424370204,
    "rev30": 0.0044265400317728965,
    "ev_ebitda_ttm": 23.609,
    "peer_ev_ebitda_median": 16.826,
    "yahoo_peg": 1.22
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "AMZN": {
   "ticker": "AMZN",
   "theme": "빅테크·AI SW",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.20 > 2.0)"
   ],
   "price": 246.67,
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "fwd_pe": 22.205935787413207,
   "peer_median_pe": 22.17691163080387,
   "peers": [
    "GOOGL",
    "META",
    "AAPL"
   ],
   "q": {
    "p25": 1.7770837935984733,
    "median": 2.2954504432924447,
    "p75": 3.916336098142793,
    "months": 103,
    "from": "2017-02",
    "to": "2026-08",
    "recent36_median": 1.3661150729603189,
    "recent36_valid_months": 31,
    "drift_recent36_vs_all": -0.4048596967308724,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "META": {
   "ticker": "META",
   "theme": "빅테크·AI SW",
   "status": "ok",
   "reasons": [],
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "label": "높음",
   "confidence": "낮음",
   "caution": [
    "세부업종 동종이 부족해 워치리스트 테마로 대체 -- 연구 참고"
   ],
   "fwd_to_last_gaap_eps": 1.418198186345691,
   "price": 738.79,
   "ntm_eps": 33.31347539726028,
   "fwd_pe": 22.17691163080387,
   "peer_median_pe": 22.205935787413207,
   "peer_pe": {
    "GOOGL": 20.79849904514552,
    "AMZN": 22.205935787413207,
    "AAPL": 34.39773836136253
   },
   "peers": [
    "GOOGL",
    "AMZN",
    "AAPL"
   ],
   "q": {
    "p25": 0.6505892128553078,
    "median": 0.8176345348658686,
    "p75": 0.9871108546155365,
    "months": 103,
    "from": "2017-02",
    "to": "2026-08",
    "recent36_median": 0.8214749971868704,
    "recent36_valid_months": 31,
    "drift_recent36_vs_all": 0.0046970402511581355,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.5172567191566266,
   "peer_pe_spread": 1.3162287649905586,
   "today_q": 0.9986929550329606,
   "band": [
    481.27785636528256,
    604.850785188145,
    730.2220613515228
   ],
   "band_mid_gap": 0.22144174743890233,
   "band_1y": [
    491.6537168096324,
    617.8907521298286,
    745.964905327744
   ],
   "fy1_end": "2027-12-31",
   "methodology": "gaap",
   "display_only": {
    "rev90": -0.03283216950090795,
    "peer_rev90_median": 0.13456056217287915,
    "rev30": 0.0006874261321982988,
    "ev_ebitda_ttm": 16.826,
    "peer_ev_ebitda_median": 23.609,
    "yahoo_peg": 0.95
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "AAPL": {
   "ticker": "AAPL",
   "theme": "빅테크·AI SW",
   "status": "ok",
   "reasons": [],
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "label": "높음",
   "confidence": "낮음",
   "caution": [
    "세부업종 동종이 부족해 워치리스트 테마로 대체 -- 연구 참고"
   ],
   "fwd_to_last_gaap_eps": 1.2836743949465645,
   "price": 329.4,
   "ntm_eps": 9.576210986301371,
   "fwd_pe": 34.39773836136253,
   "peer_median_pe": 22.17691163080387,
   "peer_pe": {
    "GOOGL": 20.79849904514552,
    "AMZN": 22.205935787413207,
    "META": 22.17691163080387
   },
   "peers": [
    "GOOGL",
    "AMZN",
    "META"
   ],
   "q": {
    "p25": 0.5863717552864478,
    "median": 0.9360912222916522,
    "p75": 1.1190115896128188,
    "months": 103,
    "from": "2017-02",
    "to": "2026-08",
    "recent36_median": 1.0908659286204139,
    "recent36_valid_months": 31,
    "drift_recent36_vs_all": 0.16534147809853028,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.9083654345973258,
   "peer_pe_spread": 1.0327498148390084,
   "today_q": 1.5510608029651818,
   "band": [
    124.52822985540415,
    198.7984275235353,
    237.64536948764402
   ],
   "band_mid_gap": 0.6569547561486775,
   "band_1y": [
    124.55526517199291,
    198.84158704191674,
    237.69696275133543
   ],
   "fy1_end": "2027-09-30",
   "methodology": "gaap",
   "display_only": {
    "rev90": -0.010727241424370204,
    "peer_rev90_median": 0.13456056217287915,
    "rev30": 0.0049227375498586134,
    "ev_ebitda_ttm": 29.535,
    "peer_ev_ebitda_median": 16.826,
    "yahoo_peg": 2.71
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "TSLA": {
   "ticker": "TSLA",
   "theme": "빅테크·AI SW",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.91 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.71 > 2.0) -- 동종이 이질적"
   ],
   "price": 352.84,
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "fwd_pe": 171.43470462221276,
   "peer_median_pe": 19.85311139085839,
   "peers": [
    "MSFT",
    "ORCL",
    "CRM",
    "PLTR"
   ],
   "q": {
    "p25": 1.9709651078800405,
    "median": 4.185392742954027,
    "p75": 5.7412269158844556,
    "months": 44,
    "from": "2022-02",
    "to": "2026-08",
    "recent36_median": 3.720346357480194,
    "recent36_valid_months": 31,
    "drift_recent36_vs_all": -0.11111176752927754,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "ORCL": {
   "ticker": "ORCL",
   "theme": "빅테크·AI SW",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.03 > 2.0)"
   ],
   "price": 137.79,
   "peer_basis": "GICS 세부업종: Application Software",
   "fwd_pe": 15.161561665134316,
   "peer_median_pe": 15.133508651654077,
   "peers": [
    "ADBE",
    "ADSK",
    "CDNS",
    "DDOG",
    "FICO",
    "INTU",
    "PLTR",
    "PTC",
    "CRM",
    "SNPS",
    "TRMB",
    "TYL",
    "WDAY"
   ],
   "q": {
    "p25": 0.34444956822048994,
    "median": 0.5138237299430962,
    "p75": 0.7001428579104765,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 0.67356301228037,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.3108834275812138,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "CRM": {
   "ticker": "CRM",
   "theme": "빅테크·AI SW",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.85 > 2.0)"
   ],
   "price": 225.31,
   "peer_basis": "GICS 세부업종: Application Software",
   "fwd_pe": 13.855807021683182,
   "peer_median_pe": 15.161561665134316,
   "peers": [
    "ADBE",
    "ADSK",
    "CDNS",
    "DDOG",
    "FICO",
    "INTU",
    "ORCL",
    "PLTR",
    "PTC",
    "SNPS",
    "TRMB",
    "TYL",
    "WDAY"
   ],
   "q": {
    "p25": 0.8076678401278523,
    "median": 1.2151414189507204,
    "p75": 2.3003678535802043,
    "months": 78,
    "from": "2017-03",
    "to": "2026-08",
    "recent36_median": 0.7146830764353895,
    "recent36_valid_months": 30,
    "drift_recent36_vs_all": -0.41185193320747693,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "PLTR": {
   "ticker": "PLTR",
   "theme": "빅테크·AI SW",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 18개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Application Software",
   "price": 186.97
  },
  "NVDA": {
   "ticker": "NVDA",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.37 > 2.0) -- 동종이 이질적"
   ],
   "price": 227.21,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 16.80956795435672,
   "peer_median_pe": 19.151314002645808,
   "peers": [
    "AMD",
    "ADI",
    "AVGO",
    "INTC",
    "MRVL",
    "MCHP",
    "MPWR",
    "NXPI",
    "ON",
    "QCOM",
    "SWKS"
   ],
   "q": {
    "p25": 1.4853854572643472,
    "median": 1.7454565711354393,
    "p75": 2.565465652715913,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 2.5894640448569333,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.4835453873094404,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "AMD": {
   "ticker": "AMD",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 3.19 > 2.0)"
   ],
   "price": 607.57,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 44.874569270462494,
   "peer_median_pe": 18.98578492535928,
   "peers": [
    "ADI",
    "AVGO",
    "INTC",
    "MRVL",
    "MCHP",
    "MPWR",
    "NVDA",
    "NXPI",
    "ON",
    "QCOM",
    "SWKS"
   ],
   "q": {
    "p25": 2.1994862570659106,
    "median": 5.4316652522544855,
    "p75": 7.013196608730183,
    "months": 99,
    "from": "2018-02",
    "to": "2026-08",
    "recent36_median": 6.793189521447382,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.2506642449344201,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "AVGO": {
   "ticker": "AVGO",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.40 > 2.0) -- 동종이 이질적"
   ],
   "price": 355.1,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 18.98578492535928,
   "peer_median_pe": 19.151314002645808,
   "peers": [
    "AMD",
    "ADI",
    "INTC",
    "MRVL",
    "MCHP",
    "MPWR",
    "NVDA",
    "NXPI",
    "ON",
    "QCOM",
    "SWKS"
   ],
   "q": {
    "p25": 0.9453095092153576,
    "median": 1.1521407245238917,
    "p75": 1.5934123521214911,
    "months": 93,
    "from": "2018-12",
    "to": "2026-08",
    "recent36_median": 1.7150864605206433,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.48860848680562197,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "QCOM": {
   "ticker": "QCOM",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.39 > 2.0) -- 동종이 이질적"
   ],
   "price": 184.1,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 18.040569372198387,
   "peer_median_pe": 19.151314002645808,
   "peers": [
    "AMD",
    "ADI",
    "AVGO",
    "INTC",
    "MRVL",
    "MCHP",
    "MPWR",
    "NVDA",
    "NXPI",
    "ON",
    "SWKS"
   ],
   "q": {
    "p25": 0.3878637016670977,
    "median": 0.45947137788059206,
    "p75": 0.6258593849818237,
    "months": 105,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 0.5471511582154039,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.1908275129982051,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "ARM": {
   "ticker": "ARM",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.88 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.42 > 2.0) -- 동종이 이질적"
   ],
   "price": 293.67,
   "peer_basis": "워치리스트 테마: 반도체 설계·파운드리 (세부업종 동종 부족)",
   "fwd_pe": 111.33307305997955,
   "peer_median_pe": 22.124237616597078,
   "peers": [
    "NVDA",
    "AMD",
    "AVGO",
    "QCOM",
    "MRVL",
    "INTC",
    "TSM"
   ],
   "q": {
    "p25": 2.1254701163709457,
    "median": 4.914253708597636,
    "p75": 6.131399913165981,
    "months": 26,
    "from": "2024-05",
    "to": "2026-08",
    "recent36_median": 4.914253708597636,
    "recent36_valid_months": 26,
    "drift_recent36_vs_all": 0.0,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "MRVL": {
   "ticker": "MRVL",
   "theme": "반도체 설계·파운드리",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 6개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Semiconductors",
   "price": 263.27
  },
  "INTC": {
   "ticker": "INTC",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.84 > 2.0)"
   ],
   "price": 115.93,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 60.253824903853925,
   "peer_median_pe": 18.98578492535928,
   "peers": [
    "AMD",
    "ADI",
    "AVGO",
    "MRVL",
    "MCHP",
    "MPWR",
    "NVDA",
    "NXPI",
    "ON",
    "QCOM",
    "SWKS"
   ],
   "q": {
    "p25": 0.2180226570477703,
    "median": 0.4180872351878793,
    "p75": 0.6196866889186345,
    "months": 98,
    "from": "2016-12",
    "to": "2025-01",
    "recent36_median": 1.8109546016459643,
    "recent36_valid_months": 17,
    "drift_recent36_vs_all": 3.3315233023848734,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "TSM": {
   "ticker": "TSM",
   "theme": "반도체 설계·파운드리",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 0개월(<24)"
   ],
   "peer_basis": "워치리스트 테마: 반도체 설계·파운드리 (세부업종 동종 부족)",
   "price": 456.94
  },
  "ASML": {
   "ticker": "ASML",
   "theme": "반도체 장비",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Semiconductor Materials & Equipment",
   "label": "낮음",
   "confidence": "낮음",
   "caution": [
    "최근 36개월 비율이 전체 기간과 -36% 달라 구조 변화 가능"
   ],
   "fwd_to_last_gaap_eps": null,
   "price": 1834.39,
   "ntm_eps": 55.034042709017456,
   "fwd_pe": 33.33191438795448,
   "peer_median_pe": 32.2756607460706,
   "peer_pe": {
    "AMAT": 28.504577473779698,
    "KLAC": 34.08079441290374,
    "LRCX": 32.2756607460706,
    "Q": 24.267385908751727,
    "TER": 36.63853031767692
   },
   "peers": [
    "AMAT",
    "KLAC",
    "LRCX",
    "Q",
    "TER"
   ],
   "q": {
    "p25": 1.4075777917759809,
    "median": 1.8853138467904114,
    "p75": 2.1020540647128207,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.2104377848475556,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": -0.3579648359830251,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.4933839372817892,
   "peer_pe_spread": 1.1956253147149225,
   "today_q": 1.0327260114113224,
   "band": [
    2500.224257862276,
    3348.807746875297,
    3733.794746293805
   ],
   "band_mid_gap": -0.4522259446778839,
   "band_1y": [
    2676.894822209586,
    3585.4408219567135,
    3997.631729280586
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.22564108575773245,
    "peer_rev90_median": 0.12763251099359052,
    "rev30": 0.0012260971471165227,
    "ev_ebitda_ttm": null,
    "peer_ev_ebitda_median": 41.027,
    "yahoo_peg": 1.09
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "AMAT": {
   "ticker": "AMAT",
   "theme": "반도체 장비",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Semiconductor Materials & Equipment",
   "label": "중립",
   "confidence": "낮음",
   "caution": [
    "선행 EPS가 최근 연간 GAAP EPS의 2.07배 -- 후행 기준 비율 적용이 특히 불안정"
   ],
   "fwd_to_last_gaap_eps": 2.0741776171343607,
   "price": 512.01,
   "ntm_eps": 17.962378164383562,
   "fwd_pe": 28.504577473779698,
   "peer_median_pe": 33.33191438795448,
   "peer_pe": {
    "KLAC": 34.08079441290374,
    "LRCX": 32.2756607460706,
    "Q": 24.267385908751727,
    "TER": 36.63853031767692,
    "ASML": 33.33191438795448
   },
   "peers": [
    "KLAC",
    "LRCX",
    "Q",
    "TER",
    "ASML"
   ],
   "q": {
    "p25": 0.6395706350796121,
    "median": 0.763565798285024,
    "p75": 0.8564031269798226,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 0.6887777628889924,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": -0.09794576389357179,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.3390282167554797,
   "peer_pe_spread": 1.0559286355447552,
   "today_q": 0.8551737275576561,
   "band": [
    382.92401919589406,
    457.1624592542887,
    512.746066576719
   ],
   "band_mid_gap": 0.11997385094825397,
   "band_1y": [
    393.52193216835,
    469.8150161965899,
    526.9369710855565
   ],
   "fy1_end": "2027-10-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.11991908946114704,
    "peer_rev90_median": 0.18010274988173602,
    "rev30": 3.604924612554683e-05,
    "ev_ebitda_ttm": 37.854,
    "peer_ev_ebitda_median": 41.286,
    "yahoo_peg": 0.97
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "LRCX": {
   "ticker": "LRCX",
   "theme": "반도체 장비",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Semiconductor Materials & Equipment",
   "label": "높음",
   "confidence": "보통",
   "caution": [],
   "fwd_to_last_gaap_eps": 1.7420462709284625,
   "price": 323.86,
   "ntm_eps": 10.034186520547944,
   "fwd_pe": 32.2756607460706,
   "peer_median_pe": 33.33191438795448,
   "peer_pe": {
    "AMAT": 28.504577473779698,
    "KLAC": 34.08079441290374,
    "Q": 24.267385908751727,
    "TER": 36.63853031767692,
    "ASML": 33.33191438795448
   },
   "peers": [
    "AMAT",
    "KLAC",
    "Q",
    "TER",
    "ASML"
   ],
   "q": {
    "p25": 0.7597347022321055,
    "median": 0.8158654451932549,
    "p75": 0.9409179235639751,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 0.8830110780906943,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.08229988571404023,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.2384822238599238,
   "peer_pe_spread": 1.1956253147149225,
   "today_q": 0.9683110417964595,
   "band": [
    254.0998398700583,
    272.8732521629432,
    314.69813476472035
   ],
   "band_mid_gap": 0.18685139504479786,
   "band_1y": [
    297.28520872514616,
    319.24924378643374,
    368.1824464225807
   ],
   "fy1_end": "2028-06-30",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.18010274988173602,
    "peer_rev90_median": 0.12763251099359052,
    "rev30": 0.005166043720716829,
    "ev_ebitda_ttm": 45.369,
    "peer_ev_ebitda_median": 39.4405,
    "yahoo_peg": 1.46
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "KLAC": {
   "ticker": "KLAC",
   "theme": "반도체 장비",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Semiconductor Materials & Equipment",
   "label": "중립",
   "confidence": "보통",
   "caution": [],
   "fwd_to_last_gaap_eps": 1.5755712927614343,
   "price": 196.53,
   "ntm_eps": 5.766590931506849,
   "fwd_pe": 34.08079441290374,
   "peer_median_pe": 32.2756607460706,
   "peer_pe": {
    "AMAT": 28.504577473779698,
    "LRCX": 32.2756607460706,
    "Q": 24.267385908751727,
    "TER": 36.63853031767692,
    "ASML": 33.33191438795448
   },
   "peers": [
    "AMAT",
    "LRCX",
    "Q",
    "TER",
    "ASML"
   ],
   "q": {
    "p25": 0.8689928033541744,
    "median": 0.9711104660406361,
    "p75": 1.1297381064513494,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.0336488810393507,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.06439886829115649,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.3000546173578649,
   "peer_pe_spread": 1.169353042282955,
   "today_q": 1.0559286355447552,
   "band": [
    161.73740335689317,
    180.74359712056224,
    210.26745803360038
   ],
   "band_mid_gap": 0.0873414224953577,
   "band_1y": [
    188.06819834745718,
    210.1685940777413,
    244.49892963978647
   ],
   "fy1_end": "2028-06-30",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.08248964333353537,
    "peer_rev90_median": 0.18010274988173602,
    "rev30": 0.005132642862686332,
    "ev_ebitda_ttm": 41.027,
    "peer_ev_ebitda_median": 39.6995,
    "yahoo_peg": 1.81
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "MU": {
   "ticker": "MU",
   "theme": "메모리·스토리지",
   "status": "자료부족",
   "reasons": [
    "NTM EPS 계산 불가 또는 0 이하(적자·기간·통화)"
   ],
   "peer_basis": "GICS 세부업종: Semiconductors",
   "price": 1065.08
  },
  "SNDK": {
   "ticker": "SNDK",
   "theme": "메모리·스토리지",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 1개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "price": 1729.76
  },
  "WDC": {
   "ticker": "WDC",
   "theme": "메모리·스토리지",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.85 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.28 > 2.0) -- 동종이 이질적"
   ],
   "price": 453.48,
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "fwd_pe": 19.71826209008882,
   "peer_median_pe": 16.77695449134636,
   "peers": [
    "DELL",
    "P",
    "HPE",
    "HPQ",
    "NTAP",
    "SNDK",
    "STX",
    "SMCI"
   ],
   "q": {
    "p25": 1.0669700122768524,
    "median": 1.7168666006628166,
    "p75": 3.035785812792438,
    "months": 69,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 2.5713897174017695,
    "recent36_valid_months": 13,
    "drift_recent36_vs_all": 0.4977224884036151,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "ANET": {
   "ticker": "ANET",
   "theme": "AI 네트워킹·광통신",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Communications Equipment",
   "label": "중립",
   "confidence": "낮음",
   "caution": [],
   "fwd_to_last_gaap_eps": 1.786709887920299,
   "price": 202.86,
   "ntm_eps": 4.913452191780822,
   "fwd_pe": 41.286653880410675,
   "peer_median_pe": 24.236615882136167,
   "peer_pe": {
    "CIEN": 35.61243579402964,
    "CSCO": 20.46805030115481,
    "FFIV": 24.236615882136167,
    "LITE": 38.96140891015924,
    "MSI": 23.48496872177467
   },
   "peers": [
    "CIEN",
    "CSCO",
    "FFIV",
    "LITE",
    "MSI"
   ],
   "q": {
    "p25": 1.3364103571372317,
    "median": 1.750499409599772,
    "p75": 2.312197746359518,
    "months": 114,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.6423091193814388,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": -0.06180538515181189,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.7301555124973385,
   "peer_pe_spread": 1.5163927282990457,
   "today_q": 1.7034826182495801,
   "band": [
    159.14703334480333,
    208.45901591664054,
    275.3491170391092
   ],
   "band_mid_gap": -0.0268590729550382,
   "band_1y": [
    168.02086832034172,
    220.08242395340616,
    290.7022315390286
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.15785013342898724,
    "peer_rev90_median": 0.07869835168693684,
    "rev30": 0.004202564742719295,
    "ev_ebitda_ttm": 52.829,
    "peer_ev_ebitda_median": 25.248,
    "yahoo_peg": 1.53
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "COHR": {
   "ticker": "COHR",
   "theme": "AI 네트워킹·광통신",
   "status": "자료부족",
   "reasons": [
    "같은 EPS 정의의 동종 2개(<3)"
   ],
   "peer_basis": "GICS 세부업종: Electronic Components",
   "price": 292.21
  },
  "LITE": {
   "ticker": "LITE",
   "theme": "AI 네트워킹·광통신",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.39 > 2.0)"
   ],
   "price": 973.49,
   "peer_basis": "GICS 세부업종: Communications Equipment",
   "fwd_pe": 38.96140891015924,
   "peer_median_pe": 24.236615882136167,
   "peers": [
    "ANET",
    "CIEN",
    "CSCO",
    "FFIV",
    "MSI"
   ],
   "q": {
    "p25": 0.526597337220609,
    "median": 0.6052544652170688,
    "p75": 1.2567340606449833,
    "months": 48,
    "from": "2018-08",
    "to": "2025-09",
    "recent36_median": 7.94424562856371,
    "recent36_valid_months": 2,
    "drift_recent36_vs_all": 12.125463891810497,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "GEV": {
   "ticker": "GEV",
   "theme": "AI 전력·인프라",
   "status": "자료부족",
   "reasons": [
    "같은 EPS 정의의 동종 0개(<3)"
   ],
   "peer_basis": "GICS 세부업종: Heavy Electrical Equipment",
   "price": 962.49
  },
  "CEG": {
   "ticker": "CEG",
   "theme": "AI 전력·인프라",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Electric Utilities",
   "label": "중립",
   "confidence": "낮음",
   "caution": [],
   "fwd_to_last_gaap_eps": 1.7595244427989631,
   "price": 264.58,
   "ntm_eps": 13.020480876712329,
   "fwd_pe": 20.32029404330314,
   "peer_median_pe": 15.94527365696821,
   "peer_pe": {
    "LNT": 17.772417788198272,
    "AEP": 17.71117304192904,
    "DUK": 16.190991686467495,
    "EIX": 8.361338510975607,
    "ETR": 20.25751777812431,
    "EVRG": 17.545689974491374,
    "ES": 13.17842382920749,
    "EXC": 13.586050554126995,
    "FE": 15.077602903650648,
    "PPL": 15.699555627468925,
    "PEG": 14.727540325131239,
    "SO": 17.248575799407647
   },
   "peers": [
    "LNT",
    "AEP",
    "DUK",
    "EIX",
    "ETR",
    "EVRG",
    "ES",
    "EXC",
    "FE",
    "PPL",
    "PEG",
    "SO"
   ],
   "q": {
    "p25": 1.174821545690429,
    "median": 1.7163487682453609,
    "p75": 1.8904104445731582,
    "months": 31,
    "from": "2024-02",
    "to": "2026-08",
    "recent36_median": 1.7163487682453609,
    "recent36_valid_months": 31,
    "drift_recent36_vs_all": 0.0,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.6091043371716391,
   "peer_pe_spread": 1.2177576721572019,
   "today_q": 1.2743772531256001,
   "band": [
    243.9107287864769,
    356.33997388809416,
    392.47781157301534
   ],
   "band_mid_gap": -0.2575068210475614,
   "band_1y": [
    249.5245731640622,
    364.54148748642297,
    401.51107290919447
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": -0.003302471769752402,
    "peer_rev90_median": 0.0006002371097074688,
    "rev30": -0.0012284333582553986,
    "ev_ebitda_ttm": 14.666,
    "peer_ev_ebitda_median": 11.898499999999999,
    "yahoo_peg": 3.74
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "VST": {
   "ticker": "VST",
   "theme": "AI 전력·인프라",
   "status": "자료부족",
   "reasons": [
    "같은 EPS 정의의 동종 1개(<3)"
   ],
   "peer_basis": "GICS 세부업종: Electric Utilities",
   "price": 140.83
  },
  "ETN": {
   "ticker": "ETN",
   "theme": "AI 전력·인프라",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Electrical Components & Equipment",
   "label": "중립",
   "confidence": "낮음",
   "caution": [],
   "fwd_to_last_gaap_eps": 1.480078817591925,
   "price": 433.27,
   "ntm_eps": 15.466823643835616,
   "fwd_pe": 28.01286223837446,
   "peer_median_pe": 29.010790886367527,
   "peer_pe": {
    "AME": 26.982019389822867,
    "BE": 66.76478230766696,
    "EMR": 21.66010606026954,
    "ROK": 29.010790886367527,
    "VRT": 29.069708988398048
   },
   "peers": [
    "AME",
    "BE",
    "EMR",
    "ROK",
    "VRT"
   ],
   "q": {
    "p25": 0.6612458710954021,
    "median": 0.8568702899292532,
    "p75": 1.171468257935615,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.0013124250085563,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.16856942850851886,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.7716076714324012,
   "peer_pe_spread": 1.077373363661677,
   "today_q": 0.9656014669885472,
   "band": [
    296.70418735279634,
    384.4818004217582,
    525.6434144603304
   ],
   "band_mid_gap": 0.12689339137697409,
   "band_1y": [
    309.1887785963738,
    400.6598603328333,
    547.7612120821501
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.021297311693676324,
    "peer_rev90_median": 0.04046478631425754,
    "rev30": 0.004861037129986645,
    "ev_ebitda_ttm": 28.353,
    "peer_ev_ebitda_median": 24.389,
    "yahoo_peg": 2.62
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "PWR": {
   "ticker": "PWR",
   "theme": "AI 전력·인프라",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Construction & Engineering",
   "label": "중립",
   "confidence": "낮음",
   "caution": [
    "최근 36개월 비율이 전체 기간과 +39% 달라 구조 변화 가능",
    "선행 EPS가 최근 연간 GAAP EPS의 2.79배 -- 후행 기준 비율 적용이 특히 불안정"
   ],
   "fwd_to_last_gaap_eps": 2.7943472038678485,
   "price": 651.79,
   "ntm_eps": 19.00156098630137,
   "fwd_pe": 34.30191869341099,
   "peer_median_pe": 21.31212247361738,
   "peer_pe": {
    "FIX": 29.04221434453968,
    "EME": 21.31212247361738,
    "J": 16.51452287742547
   },
   "peers": [
    "FIX",
    "EME",
    "J"
   ],
   "q": {
    "p25": 0.9964604389427736,
    "median": 1.3557015895413067,
    "p75": 1.8527106254222938,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.8888922921348743,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.39329503388276565,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.85929170192445,
   "peer_pe_spread": 1.331186954350654,
   "today_q": 1.6095027013791747,
   "band": [
    403.5302015597561,
    549.0097893529149,
    750.2803552359552
   ],
   "band_mid_gap": 0.18721016025638804,
   "band_1y": [
    419.9329728532846,
    571.3260422079829,
    780.7778917905772
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.19986575340469348,
    "peer_rev90_median": 0.12380333540867494,
    "rev30": 0.00542953305798255,
    "ev_ebitda_ttm": 33.851,
    "peer_ev_ebitda_median": 18.037,
    "yahoo_peg": 1.44
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "HUBB": {
   "ticker": "HUBB",
   "theme": "AI 전력·인프라",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Industrial Machinery & Supplies & Components",
   "label": "높음",
   "confidence": "보통",
   "caution": [],
   "fwd_to_last_gaap_eps": 1.348024917592884,
   "price": 459.09,
   "ntm_eps": 22.2963321369863,
   "fwd_pe": 20.590382183912567,
   "peer_median_pe": 17.368520472210708,
   "peer_pe": {
    "DOV": 16.65506076615415,
    "FTV": 17.368520472210708,
    "IEX": 24.456354716270674,
    "IR": 19.995159508478306,
    "NDSN": 25.560948165286597,
    "OTIS": 14.888865497033569,
    "PH": 26.601955612126662,
    "PNR": 10.617498624377411,
    "SWK": 14.371591944463814,
    "GWW": 25.07971178513023,
    "XYL": 16.552741233508833
   },
   "peers": [
    "DOV",
    "FTV",
    "IEX",
    "IR",
    "NDSN",
    "OTIS",
    "PH",
    "PNR",
    "SWK",
    "GWW",
    "XYL"
   ],
   "q": {
    "p25": 0.8601073086077567,
    "median": 0.9314944676300954,
    "p75": 1.0420554669962483,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.0238771388279688,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.09917683293698265,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.2115412304576372,
   "peer_pe_spread": 1.5754941191755802,
   "today_q": 1.1855000670239457,
   "band": [
    333.0802547316593,
    360.72523911182753,
    403.5404616587377
   ],
   "band_mid_gap": 0.27268610627402934,
   "band_1y": [
    342.3948580200553,
    370.81293554746713,
    414.82548758798583
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.021287836267386062,
    "peer_rev90_median": 0.016388234887625197,
    "rev30": 0.0015718335775969372,
    "ev_ebitda_ttm": 19.649,
    "peer_ev_ebitda_median": 16.259,
    "yahoo_peg": 1.96
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "VRT": {
   "ticker": "VRT",
   "theme": "AI 전력·인프라",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Electrical Components & Equipment",
   "label": "낮음",
   "confidence": "낮음",
   "caution": [
    "선행 EPS가 최근 연간 GAAP EPS의 2.51배 -- 후행 기준 비율 적용이 특히 불안정"
   ],
   "fwd_to_last_gaap_eps": 2.505253131402402,
   "price": 248.34,
   "ntm_eps": 8.542913178082191,
   "fwd_pe": 29.069708988398048,
   "peer_median_pe": 28.01286223837446,
   "peer_pe": {
    "AME": 26.982019389822867,
    "BE": 66.76478230766696,
    "ETN": 28.01286223837446,
    "EMR": 21.66010606026954,
    "ROK": 29.010790886367527
   },
   "peers": [
    "AME",
    "BE",
    "ETN",
    "EMR",
    "ROK"
   ],
   "q": {
    "p25": 1.7381466861999701,
    "median": 2.4574382112225797,
    "p75": 2.7685041425918637,
    "months": 42,
    "from": "2022-03",
    "to": "2026-08",
    "recent36_median": 2.6363515732167637,
    "recent36_valid_months": 31,
    "drift_recent36_vs_all": 0.072804826252447,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.5927908527930497,
   "peer_pe_spread": 1.0751897575653613,
   "today_q": 1.0377271962083128,
   "band": [
    415.9584037385594,
    588.0931015442985,
    662.5347406171757
   ],
   "band_mid_gap": -0.5777199233456853,
   "band_1y": [
    446.07573529971785,
    630.6737893458893,
    710.5053508383243
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.04046478631425754,
    "peer_rev90_median": 0.021297311693676324,
    "rev30": 0.006289275478009282,
    "ev_ebitda_ttm": 35.158,
    "peer_ev_ebitda_median": 24.389,
    "yahoo_peg": 0.82
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "MOD": {
   "ticker": "MOD",
   "theme": "AI 전력·인프라",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 3.94 > 2.0)"
   ],
   "price": 183.72,
   "peer_basis": "워치리스트 테마: AI 전력·인프라 (세부업종 동종 부족)",
   "fwd_pe": 19.73201177443592,
   "peer_median_pe": 28.52753829145707,
   "peers": [
    "CEG",
    "ETN",
    "PWR",
    "HUBB",
    "VRT",
    "EME",
    "FIX",
    "BE"
   ],
   "q": {
    "p25": 0.4738522485451539,
    "median": 0.9116530166977544,
    "p75": 1.8687978016835,
    "months": 89,
    "from": "2017-05",
    "to": "2026-08",
    "recent36_median": 1.000538415978364,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.09749915554777155,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "STX": {
   "ticker": "STX",
   "theme": "메모리·스토리지",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 3.30 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.13 > 2.0) -- 동종이 이질적"
   ],
   "price": 913.45,
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "fwd_pe": 22.462742684050294,
   "peer_median_pe": 16.646708980683925,
   "peers": [
    "DELL",
    "P",
    "HPE",
    "HPQ",
    "NTAP",
    "SNDK",
    "SMCI",
    "WDC"
   ],
   "q": {
    "p25": 0.6378930796789117,
    "median": 0.8816874898949303,
    "p75": 2.1067112031518795,
    "months": 105,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 2.8356101621087917,
    "recent36_valid_months": 25,
    "drift_recent36_vs_all": 2.2161170421582232,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "EME": {
   "ticker": "EME",
   "theme": "AI 전력·인프라",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Construction & Engineering",
   "label": "중립",
   "confidence": "낮음",
   "caution": [],
   "fwd_to_last_gaap_eps": 1.268382642246595,
   "price": 762.03,
   "ntm_eps": 35.75570668493151,
   "fwd_pe": 21.31212247361738,
   "peer_median_pe": 29.04221434453968,
   "peer_pe": {
    "FIX": 29.04221434453968,
    "J": 16.51452287742547,
    "PWR": 34.30191869341099
   },
   "peers": [
    "FIX",
    "J",
    "PWR"
   ],
   "q": {
    "p25": 0.6053085121570789,
    "median": 0.798726818603722,
    "p75": 0.9475042594069174,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 0.6943236451141994,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": -0.13071199195744154,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.5653245252249781,
   "peer_pe_spread": 1.3904449023493575,
   "today_q": 0.7338325590735935,
   "band": [
    628.5674297436024,
    829.4178148063809,
    983.912013535289
   ],
   "band_mid_gap": -0.08124712732642703,
   "band_1y": [
    646.0288533384805,
    852.4588047084189,
    1011.2448081336939
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.12380333540867494,
    "peer_rev90_median": 0.132257986814714,
    "rev30": 0.11651005093613831,
    "ev_ebitda_ttm": 16.775,
    "peer_ev_ebitda_median": 28.327,
    "yahoo_peg": 0.32
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "FIX": {
   "ticker": "FIX",
   "theme": "AI 전력·인프라",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Construction & Engineering",
   "label": "높음",
   "confidence": "낮음",
   "caution": [
    "최근 36개월 비율이 전체 기간과 +31% 달라 구조 변화 가능"
   ],
   "fwd_to_last_gaap_eps": 1.9851821623724055,
   "price": 1665.05,
   "ntm_eps": 57.33206084931507,
   "fwd_pe": 29.04221434453968,
   "peer_median_pe": 21.31212247361738,
   "peer_pe": {
    "EME": 21.31212247361738,
    "J": 16.51452287742547,
    "PWR": 34.30191869341099
   },
   "peers": [
    "EME",
    "J",
    "PWR"
   ],
   "q": {
    "p25": 0.8117686446425479,
    "median": 0.9516883180240463,
    "p75": 1.2569892497139898,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.2505835812611927,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.3140684377189069,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.5484575044993136,
   "peer_pe_spread": 1.470234556908577,
   "today_q": 1.3627086828396142,
   "band": [
    991.8740511328766,
    1162.8374089639824,
    1535.8748179948386
   ],
   "band_mid_gap": 0.4318854787131923,
   "band_1y": [
    1041.1185620119197,
    1220.5698996676977,
    1612.1278504208913
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.132257986814714,
    "peer_rev90_median": 0.12380333540867494,
    "rev30": 0.0019273058059714465,
    "ev_ebitda_ttm": 28.327,
    "peer_ev_ebitda_median": 18.037,
    "yahoo_peg": 0.55
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "BE": {
   "ticker": "BE",
   "theme": "AI 전력·인프라",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 0개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Electrical Components & Equipment",
   "price": 291.25
  }
 }
};
