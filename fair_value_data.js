window.FAIR_VALUE = {
 "schema": "100/v2",
 "generated_at": "2026-09-28T22:36:30.842177+00:00",
 "as_of_consensus_day": "2026-09-28",
 "consensus_fetched_day": "2026-09-28",
 "price_session_day": "2026-09-28",
 "cons_dir_file_count": 507,
 "cons_dir": "raw_92\\daily\\consensus_2026-09-28",
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 3.67 > 2.0) -- 동종이 이질적"
   ],
   "price": 509.22,
   "peer_basis": "GICS 세부업종: Systems Software",
   "fwd_pe": 24.569912547829396,
   "peer_median_pe": 47.74219460447394,
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
   "fwd_to_last_gaap_eps": 1.5177777451117052,
   "price": 342.75,
   "ntm_eps": 16.407177424657533,
   "fwd_pe": 20.890247672027854,
   "peer_median_pe": 22.14614387617572,
   "peer_pe": {
    "AMZN": 22.14614387617572,
    "META": 21.48637819429205,
    "AAPL": 35.34524079763708
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
   "peer_pe_spread": 1.3176268972250234,
   "today_q": 0.9432905244737018,
   "band": [
    287.8422072417441,
    344.3943331100582,
    393.6069211959882
   ],
   "band_mid_gap": -0.004774564944809101,
   "band_1y": [
    262.09971466364266,
    313.59423381614147,
    358.405609530575
   ],
   "fy1_end": "2027-12-31",
   "methodology": "gaap",
   "display_only": {
    "rev90": 0.13570421251643716,
    "peer_rev90_median": -0.010683570460989333,
    "rev30": 0.0044138127177151265,
    "ev_ebitda_ttm": 23.691,
    "peer_ev_ebitda_median": 17.664,
    "yahoo_peg": 1.23
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
   "price": 246.15,
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "fwd_pe": 22.14614387617572,
   "peer_median_pe": 21.48637819429205,
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
   "label": "중립",
   "confidence": "낮음",
   "caution": [
    "세부업종 동종이 부족해 워치리스트 테마로 대체 -- 연구 참고"
   ],
   "fwd_to_last_gaap_eps": 1.4178694238877518,
   "price": 715.62,
   "ntm_eps": 33.30575276712329,
   "fwd_pe": 21.48637819429205,
   "peer_median_pe": 22.14614387617572,
   "peer_pe": {
    "GOOGL": 20.890247672027854,
    "AMZN": 22.14614387617572,
    "AAPL": 35.34524079763708
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
   "peer_pe_spread": 1.3358783718987846,
   "today_q": 0.970208552533002,
   "band": [
    479.87069510777036,
    603.0823211288997,
    728.0870364786255
   ],
   "band_mid_gap": 0.18660417480061908,
   "band_1y": [
    490.32988539462286,
    616.2270136880218,
    743.9563132182902
   ],
   "fy1_end": "2027-12-31",
   "methodology": "gaap",
   "display_only": {
    "rev90": -0.0316804498393769,
    "peer_rev90_median": 0.13570421251643716,
    "rev30": 0.000667352763868978,
    "ev_ebitda_ttm": 17.664,
    "peer_ev_ebitda_median": 23.691,
    "yahoo_peg": 0.99
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
   "fwd_to_last_gaap_eps": 1.2833957067832094,
   "price": 338.4,
   "ntm_eps": 9.574131972602741,
   "fwd_pe": 35.34524079763708,
   "peer_median_pe": 21.48637819429205,
   "peer_pe": {
    "GOOGL": 20.890247672027854,
    "AMZN": 22.14614387617572,
    "META": 21.48637819429205
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
   "peer_pe_spread": 1.029636531424415,
   "today_q": 1.6450069191757362,
   "band": [
    120.62453943255169,
    192.56652718653655,
    230.19570161730377
   ],
   "band_mid_gap": 0.7573147573679644,
   "band_1y": [
    120.6769264417529,
    192.65015846487364,
    230.2956751748853
   ],
   "fy1_end": "2027-09-30",
   "methodology": "gaap",
   "display_only": {
    "rev90": -0.010683570460989333,
    "peer_rev90_median": 0.13570421251643716,
    "rev30": 0.0049122352099979505,
    "ev_ebitda_ttm": 29.767,
    "peer_ev_ebitda_median": 17.664,
    "yahoo_peg": 2.74
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "TSLA": {
   "ticker": "TSLA",
   "theme": "빅테크·AI SW",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.91 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.79 > 2.0) -- 동종이 이질적"
   ],
   "price": 357.45,
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "fwd_pe": 173.77787711128283,
   "peer_median_pe": 19.5864852999931,
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
   "price": 132.6,
   "peer_basis": "GICS 세부업종: Application Software",
   "fwd_pe": 14.603058052156804,
   "peer_median_pe": 15.650230226991528,
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
   "price": 227.27,
   "peer_basis": "GICS 세부업종: Application Software",
   "fwd_pe": 13.974577902419203,
   "peer_median_pe": 15.650230226991528,
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
   "price": 187.48
  },
  "NVDA": {
   "ticker": "NVDA",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.30 > 2.0) -- 동종이 이질적"
   ],
   "price": 228.86,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 16.953547530617378,
   "peer_median_pe": 18.966245533761587,
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
   "price": 607.87,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 44.96954786682571,
   "peer_median_pe": 18.710488912994474,
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.35 > 2.0) -- 동종이 이질적"
   ],
   "price": 349.57,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 18.710488912994474,
   "peer_median_pe": 18.966245533761587,
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.35 > 2.0) -- 동종이 이질적"
   ],
   "price": 187.48,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 18.418605692745608,
   "peer_median_pe": 18.966245533761587,
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.36 > 2.0) -- 동종이 이질적"
   ],
   "price": 283.33,
   "peer_basis": "워치리스트 테마: 반도체 설계·파운드리 (세부업종 동종 부족)",
   "fwd_pe": 107.50595259059578,
   "peer_median_pe": 21.94218737271832,
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
   "price": 251.9
  },
  "INTC": {
   "ticker": "INTC",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.84 > 2.0)"
   ],
   "price": 116.03,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 60.3523626785827,
   "peer_median_pe": 18.710488912994474,
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
   "price": 452.88
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
   "price": 1771.41,
   "ntm_eps": 54.99222755509206,
   "fwd_pe": 32.21200665540188,
   "peer_median_pe": 31.270807419979093,
   "peer_pe": {
    "AMAT": 27.08070101305115,
    "KLAC": 32.82397974742853,
    "LRCX": 31.270807419979093,
    "Q": 24.14228221402639,
    "TER": 36.505452348112115
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
   "peer_pe_spread": 1.2120801352819297,
   "today_q": 1.0300983349352677,
   "band": [
    2420.5430603735294,
    3242.082515891912,
    3614.8001258607333
   ],
   "band_mid_gap": -0.4536197054464306,
   "band_1y": [
    2593.5537966963616,
    3473.8136065205085,
    3873.1715804625455
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.22560002046730743,
    "peer_rev90_median": 0.12761732033931517,
    "rev30": 0.0012328316593017696,
    "ev_ebitda_ttm": null,
    "peer_ev_ebitda_median": 40.757,
    "yahoo_peg": 1.59
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
    "선행 EPS가 최근 연간 GAAP EPS의 2.08배 -- 후행 기준 비율 적용이 특히 불안정"
   ],
   "fwd_to_last_gaap_eps": 2.075568581733051,
   "price": 486.76,
   "ntm_eps": 17.974423917808224,
   "fwd_pe": 27.08070101305115,
   "peer_median_pe": 32.21200665540188,
   "peer_pe": {
    "KLAC": 32.82397974742853,
    "LRCX": 31.270807419979093,
    "Q": 24.14228221402639,
    "TER": 36.505452348112115,
    "ASML": 32.21200665540188
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
   "peer_pe_spread": 1.0496684433692336,
   "today_q": 0.8407020805240576,
   "band": [
    370.3064492683187,
    442.09868939723935,
    495.8507844168103
   ],
   "band_mid_gap": 0.1010211332308002,
   "band_1y": [
    380.76036710300417,
    454.57933450323935,
    509.8488753730975
   ],
   "fy1_end": "2027-10-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.12146797269941145,
    "peer_rev90_median": 0.18339201773873093,
    "rev30": 0.0015719605827753114,
    "ev_ebitda_ttm": 37.716,
    "peer_ev_ebitda_median": 40.9995,
    "yahoo_peg": 0.96
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
   "fwd_to_last_gaap_eps": 1.7458930745814307,
   "price": 314.47,
   "ntm_eps": 10.056344109589041,
   "fwd_pe": 31.270807419979093,
   "peer_median_pe": 32.21200665540188,
   "peer_pe": {
    "AMAT": 27.08070101305115,
    "KLAC": 32.82397974742853,
    "Q": 24.14228221402639,
    "TER": 36.505452348112115,
    "ASML": 32.21200665540188
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
   "peer_pe_spread": 1.2120801352819297,
   "today_q": 0.9707811051484136,
   "band": [
    246.10467853554374,
    264.2873920693986,
    304.7962695750319
   ],
   "band_mid_gap": 0.18987893269393674,
   "band_1y": [
    287.29682341520675,
    308.52289628155717,
    355.8120087711571
   ],
   "fy1_end": "2028-06-30",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.18339201773873093,
    "peer_rev90_median": 0.12761732033931517,
    "rev30": 0.00796589129648062,
    "ev_ebitda_ttm": 45.476,
    "peer_ev_ebitda_median": 39.2365,
    "yahoo_peg": 1.47
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
   "fwd_to_last_gaap_eps": 1.5746351523317612,
   "price": 189.17,
   "ntm_eps": 5.763164657534246,
   "fwd_pe": 32.82397974742853,
   "peer_median_pe": 31.270807419979093,
   "peer_pe": {
    "AMAT": 27.08070101305115,
    "LRCX": 31.270807419979093,
    "Q": 24.14228221402639,
    "TER": 36.505452348112115,
    "ASML": 32.21200665540188
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
   "peer_pe_spread": 1.1894820093422902,
   "today_q": 1.0496684433692336,
   "band": [
    156.60885077468595,
    175.01237464208182,
    203.60005956873928
   ],
   "band_mid_gap": 0.08089499606454664,
   "band_1y": [
    182.2129826749326,
    203.62531639055388,
    236.88682946909472
   ],
   "fy1_end": "2028-06-30",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.08234567054163011,
    "peer_rev90_median": 0.18339201773873093,
    "rev30": 0.005089581070427895,
    "ev_ebitda_ttm": 40.757,
    "peer_ev_ebitda_median": 39.479,
    "yahoo_peg": 1.8
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
   "price": 1053.98
  },
  "SNDK": {
   "ticker": "SNDK",
   "theme": "메모리·스토리지",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 1개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "price": 1712.89
  },
  "WDC": {
   "ticker": "WDC",
   "theme": "메모리·스토리지",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.85 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.25 > 2.0) -- 동종이 이질적"
   ],
   "price": 453.23,
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "fwd_pe": 19.734799614909498,
   "peer_median_pe": 16.68108489681238,
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
   "fwd_to_last_gaap_eps": 1.7856386550435865,
   "price": 204.92,
   "ntm_eps": 4.910506301369863,
   "fwd_pe": 41.730931073815,
   "peer_median_pe": 24.10047049577523,
   "peer_pe": {
    "CIEN": 34.56495368935315,
    "CSCO": 20.434863692990415,
    "FFIV": 24.10047049577523,
    "LITE": 37.091649696612656,
    "MSI": 23.804576718008768
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
   "peer_pe_spread": 1.452029754564125,
   "today_q": 1.7315400992329324,
   "band": [
    158.1581682722101,
    207.16374929699512,
    273.63822668264595
   ],
   "band_mid_gap": -0.010830800777690275,
   "band_1y": [
    167.0770374594073,
    218.84614547351853,
    289.0692573721178
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.15777417375913116,
    "peer_rev90_median": 0.07872378696396098,
    "rev30": 0.004188982960359411,
    "ev_ebitda_ttm": 53.272,
    "peer_ev_ebitda_median": 25.707,
    "yahoo_peg": 1.55
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
   "price": 282.45
  },
  "LITE": {
   "ticker": "LITE",
   "theme": "AI 네트워킹·광통신",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.39 > 2.0)"
   ],
   "price": 921.32,
   "peer_basis": "GICS 세부업종: Communications Equipment",
   "fwd_pe": 37.091649696612656,
   "peer_median_pe": 24.10047049577523,
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
   "price": 949.77
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
   "fwd_to_last_gaap_eps": 1.7590889892632355,
   "price": 260.43,
   "ntm_eps": 13.017258520547944,
   "fwd_pe": 20.006516701570245,
   "peer_median_pe": 15.778474911268702,
   "peer_pe": {
    "LNT": 17.463757781574383,
    "AEP": 17.551257560235825,
    "DUK": 16.08045852322494,
    "EIX": 8.036376814257554,
    "ETR": 19.928257937492507,
    "EVRG": 17.36618691350001,
    "ES": 13.052515760633618,
    "EXC": 13.477998601463492,
    "FE": 14.8664330195063,
    "PPL": 15.476491299312462,
    "PEG": 14.523429987251985,
    "SO": 17.02205634674841
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
   "peer_pe_spread": 1.219358551746688,
   "today_q": 1.2679626398671744,
   "band": [
    241.29951902700316,
    352.52514203491336,
    388.27610262378124
   ],
   "band_mid_gap": -0.2612441810626728,
   "band_1y": [
    246.91437112423816,
    360.7281278554582,
    397.3109854860194
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": -0.0031714522129124845,
    "peer_rev90_median": 0.0005979741478908673,
    "rev30": -0.0012242251916475544,
    "ev_ebitda_ttm": 14.792,
    "peer_ev_ebitda_median": 11.911999999999999,
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
   "price": 138.02
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
   "fwd_to_last_gaap_eps": 1.479409160385397,
   "price": 431.41,
   "ntm_eps": 15.459825726027397,
   "fwd_pe": 27.90523047576788,
   "peer_median_pe": 28.588625335509843,
   "peer_pe": {
    "AME": 27.08868376900487,
    "BE": 60.34332777479213,
    "EMR": 21.962084535340036,
    "ROK": 28.998762281496855,
    "VRT": 28.588625335509843
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
   "peer_pe_spread": 1.0705120458705164,
   "today_q": 0.976095567669946,
   "band": [
    292.254253269724,
    378.7153881466816,
    517.759877101391
   ],
   "band_mid_gap": 0.13914040332818245,
   "band_1y": [
    304.68945792819824,
    394.8294508377424,
    539.7901810701759
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.021282297733524747,
    "peer_rev90_median": 0.04045994394804575,
    "rev30": 0.004856850990690775,
    "ev_ebitda_ttm": 28.854,
    "peer_ev_ebitda_median": 24.545,
    "yahoo_peg": 2.67
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
   "fwd_to_last_gaap_eps": 2.793125858178888,
   "price": 644.36,
   "ntm_eps": 18.993255835616438,
   "fwd_pe": 33.92572635133396,
   "peer_median_pe": 21.416126408917833,
   "peer_pe": {
    "FIX": 28.9399287223999,
    "EME": 21.416126408917833,
    "J": 16.748769658917322
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
   "peer_pe_spread": 1.3194338336940241,
   "today_q": 1.5841205689375757,
   "band": [
    405.32220907136497,
    551.4478464367824,
    753.6122199320758
   ],
   "band_mid_gap": 0.1684876532995383,
   "band_1y": [
    421.98226108317465,
    574.1141341403008,
    784.5881163912633
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.19984956107279706,
    "peer_rev90_median": 0.1237909570788489,
    "rev30": 0.005414735684027727,
    "ev_ebitda_ttm": 34.086,
    "peer_ev_ebitda_median": 18.037,
    "yahoo_peg": 1.45
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
   "fwd_to_last_gaap_eps": 1.3476195673419358,
   "price": 465.72,
   "ntm_eps": 22.289627643835615,
   "fwd_pe": 20.894023329671853,
   "peer_median_pe": 17.488368534413553,
   "peer_pe": {
    "DOV": 16.80844465386786,
    "FTV": 17.488368534413553,
    "IEX": 24.538476625683696,
    "IR": 19.97419039444969,
    "NDSN": 25.705460428735314,
    "OTIS": 15.052298397235443,
    "PH": 26.587192028197265,
    "PNR": 10.533108809275882,
    "SWK": 14.366809693679619,
    "GWW": 25.226993200561694,
    "XYL": 16.553782497604054
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
   "peer_pe_spread": 1.5745536433898986,
   "today_q": 1.1947382792486712,
   "band": [
    335.2777614329963,
    363.1051344044148,
    406.20283163161446
   ],
   "band_mid_gap": 0.2826037306354807,
   "band_1y": [
    344.75748644932065,
    373.3716573359014,
    417.68790934229213
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.02129256296262083,
    "peer_rev90_median": 0.01638221931082584,
    "rev30": 0.0015689927747490895,
    "ev_ebitda_ttm": 19.68,
    "peer_ev_ebitda_median": 16.34,
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
    "선행 EPS가 최근 연간 GAAP EPS의 2.50배 -- 후행 기준 비율 적용이 특히 불안정"
   ],
   "fwd_to_last_gaap_eps": 2.5033026794681237,
   "price": 244.04,
   "ntm_eps": 8.536262136986302,
   "fwd_pe": 28.588625335509843,
   "peer_median_pe": 27.90523047576788,
   "peer_pe": {
    "AME": 27.08868376900487,
    "BE": 60.34332777479213,
    "ETN": 27.90523047576788,
    "EMR": 21.962084535340036,
    "ROK": 28.998762281496855
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
   "peer_pe_spread": 1.0705120458705164,
   "today_q": 1.0244898482503273,
   "band": [
    414.03759932289324,
    585.3774169563293,
    659.4753009138981
   ],
   "band_mid_gap": -0.5831065686324451,
   "band_1y": [
    444.36181127304104,
    628.2505977776931,
    707.7754283262512
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.04045994394804575,
    "peer_rev90_median": 0.021282297733524747,
    "rev30": 0.00628237334598003,
    "ev_ebitda_ttm": 36.486,
    "peer_ev_ebitda_median": 24.545,
    "yahoo_peg": 0.85
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
   "price": 175.04,
   "peer_basis": "워치리스트 테마: AI 전력·인프라 (세부업종 동종 부족)",
   "fwd_pe": 18.818498352720137,
   "peer_median_pe": 28.246927905638863,
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.08 > 2.0) -- 동종이 이질적"
   ],
   "price": 921.51,
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "fwd_pe": 22.69089595423248,
   "peer_median_pe": 16.68108489681238,
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
   "fwd_to_last_gaap_eps": 1.2680037679736813,
   "price": 765.52,
   "ntm_eps": 35.74502621917808,
   "fwd_pe": 21.416126408917833,
   "peer_median_pe": 28.9399287223999,
   "peer_pe": {
    "FIX": 28.9399287223999,
    "J": 16.748769658917322,
    "PWR": 33.92572635133396
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
   "peer_pe_spread": 1.3759563590334312,
   "today_q": 0.740020012293308,
   "band": [
    626.1665421594402,
    826.2497554392834,
    980.1538453174918
   ],
   "band_mid_gap": -0.07350048219620453,
   "band_1y": [
    643.7535632245778,
    849.4564758173188,
    1007.6832407164
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.1237909570788489,
    "peer_rev90_median": 0.1322691786098209,
    "rev30": 0.1165144798110489,
    "ev_ebitda_ttm": 16.702,
    "peer_ev_ebitda_median": 28.338,
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
   "fwd_to_last_gaap_eps": 1.9841223750616628,
   "price": 1658.3,
   "ntm_eps": 57.30145419178082,
   "fwd_pe": 28.9399287223999,
   "peer_median_pe": 21.416126408917833,
   "peer_pe": {
    "EME": 21.416126408917833,
    "J": 16.748769658917322,
    "PWR": 33.92572635133396
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
   "peer_pe_spread": 1.4500721464532726,
   "today_q": 1.3513148068807206,
   "band": [
    996.1823377915234,
    1167.8882890525308,
    1542.5460168029547
   ],
   "band_mid_gap": 0.4199132019256089,
   "band_1y": [
    1046.1992585825046,
    1226.5263253137998,
    1619.995093153697
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.1322691786098209,
    "peer_rev90_median": 0.1237909570788489,
    "rev30": 0.0019235457052035887,
    "ev_ebitda_ttm": 28.338,
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
   "price": 262.87
  }
 }
};
