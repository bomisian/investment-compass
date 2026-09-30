window.FAIR_VALUE = {
 "schema": "100/v2",
 "generated_at": "2026-09-30T22:36:32.231359+00:00",
 "as_of_consensus_day": "2026-09-30",
 "consensus_fetched_day": "2026-09-30",
 "price_session_day": "2026-09-30",
 "cons_dir_file_count": 507,
 "cons_dir": "raw_92\\daily\\consensus_2026-09-30",
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 3.66 > 2.0) -- 동종이 이질적"
   ],
   "price": 512.9,
   "peer_basis": "GICS 세부업종: Systems Software",
   "fwd_pe": 24.741973255831176,
   "peer_median_pe": 48.37661015358966,
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
   "status": "자료부족",
   "reasons": [
    "같은 EPS 정의의 동종 2개(<3)"
   ],
   "peer_basis": "GICS 세부업종: Interactive Media & Services",
   "price": 344.08
  },
  "AMZN": {
   "ticker": "AMZN",
   "theme": "빅테크·AI SW",
   "status": "자료부족",
   "reasons": [
    "같은 EPS 정의의 동종 0개(<3)"
   ],
   "peer_basis": "GICS 세부업종: Broadline Retail",
   "price": 249.15
  },
  "META": {
   "ticker": "META",
   "theme": "빅테크·AI SW",
   "status": "자료부족",
   "reasons": [
    "같은 EPS 정의의 동종 2개(<3)"
   ],
   "peer_basis": "GICS 세부업종: Interactive Media & Services",
   "price": 725.18
  },
  "AAPL": {
   "ticker": "AAPL",
   "theme": "빅테크·AI SW",
   "status": "자료부족",
   "reasons": [
    "NTM EPS 계산 불가 또는 0 이하(적자·기간·통화)"
   ],
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "price": 333.02
  },
  "TSLA": {
   "ticker": "TSLA",
   "theme": "빅테크·AI SW",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.91 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.72 > 2.0) -- 동종이 이질적"
   ],
   "price": 354.81,
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "fwd_pe": 172.29749793970456,
   "peer_median_pe": 19.91831157595547,
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.27 > 2.0) -- 동종이 이질적"
   ],
   "price": 137.3,
   "peer_basis": "GICS 세부업종: Application Software",
   "fwd_pe": 15.094649896079762,
   "peer_median_pe": 15.294985095484636,
   "peers": [
    "ADBE",
    "ADSK",
    "CDNS",
    "DDOG",
    "INTU",
    "PLTR",
    "CRM",
    "SNPS",
    "TRMB",
    "TYL",
    "WDAY"
   ],
   "q": {
    "p25": 0.3452551007544345,
    "median": 0.48128817711692345,
    "p75": 0.6860150903211696,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 0.6812594327392387,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.415491726433443,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "CRM": {
   "ticker": "CRM",
   "theme": "빅테크·AI SW",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.43 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.20 > 2.0) -- 동종이 이질적"
   ],
   "price": 229.57,
   "peer_basis": "GICS 세부업종: Application Software",
   "fwd_pe": 14.119563502008509,
   "peer_median_pe": 15.294985095484636,
   "peers": [
    "ADBE",
    "ADSK",
    "CDNS",
    "DDOG",
    "INTU",
    "ORCL",
    "PLTR",
    "SNPS",
    "TRMB",
    "TYL",
    "WDAY"
   ],
   "q": {
    "p25": 0.8734044634753495,
    "median": 1.2409757133690982,
    "p75": 2.119288250379512,
    "months": 78,
    "from": "2017-03",
    "to": "2026-08",
    "recent36_median": 0.7013643942852579,
    "recent36_valid_months": 30,
    "drift_recent36_vs_all": -0.43482826720183043,
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
   "price": 187.05
  },
  "NVDA": {
   "ticker": "NVDA",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.37 > 2.0) -- 동종이 이질적"
   ],
   "price": 228.38,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 16.874321460168982,
   "peer_median_pe": 21.801835570511365,
   "peers": [
    "AMD",
    "ADI",
    "AVGO",
    "INTC",
    "MRVL",
    "MCHP",
    "MU",
    "MPWR",
    "NXPI",
    "ON"
   ],
   "q": {
    "p25": 1.189325722565478,
    "median": 1.6230042893379453,
    "p75": 2.1521124337717468,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.7123787879491177,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.05506732126236713,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "AMD": {
   "ticker": "AMD",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 4.37 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.13 > 2.0) -- 동종이 이질적"
   ],
   "price": 611.76,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 45.11098896182996,
   "peer_median_pe": 18.824749169197815,
   "peers": [
    "ADI",
    "AVGO",
    "INTC",
    "MRVL",
    "MCHP",
    "MU",
    "MPWR",
    "NVDA",
    "NXPI",
    "ON"
   ],
   "q": {
    "p25": 1.397001207814724,
    "median": 4.146464771061032,
    "p75": 6.106725686678281,
    "months": 99,
    "from": "2018-02",
    "to": "2026-08",
    "recent36_median": 4.317856060550756,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.04133431705145485,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "AVGO": {
   "ticker": "AVGO",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.54 > 2.0) -- 동종이 이질적"
   ],
   "price": 351.19,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 18.755510350720222,
   "peer_median_pe": 21.801835570511365,
   "peers": [
    "AMD",
    "ADI",
    "INTC",
    "MRVL",
    "MCHP",
    "MU",
    "MPWR",
    "NVDA",
    "NXPI",
    "ON"
   ],
   "q": {
    "p25": 0.7526096902506615,
    "median": 1.0055216466046464,
    "p75": 1.2658272432604172,
    "months": 93,
    "from": "2018-12",
    "to": "2026-08",
    "recent36_median": 1.2185864729914848,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.21189481808402255,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "QCOM": {
   "ticker": "QCOM",
   "theme": "반도체 설계·파운드리",
   "status": "자료부족",
   "reasons": [
    "NTM EPS 계산 불가 또는 0 이하(적자·기간·통화)"
   ],
   "peer_basis": "GICS 세부업종: Semiconductors",
   "price": 184.04
  },
  "ARM": {
   "ticker": "ARM",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.97 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.30 > 2.0) -- 동종이 이질적"
   ],
   "price": 289.66,
   "peer_basis": "워치리스트 테마: 반도체 설계·파운드리 (세부업종 동종 부족)",
   "fwd_pe": 109.71806190185876,
   "peer_median_pe": 33.400131285922846,
   "peers": [
    "NVDA",
    "AMD",
    "AVGO",
    "MRVL",
    "INTC",
    "TSM"
   ],
   "q": {
    "p25": 1.641992222878606,
    "median": 3.9175771046580516,
    "p75": 4.8717009921219905,
    "months": 26,
    "from": "2024-05",
    "to": "2026-08",
    "recent36_median": 3.9175771046580516,
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
   "price": 264.21
  },
  "INTC": {
   "ticker": "INTC",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.64 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.13 > 2.0) -- 동종이 이질적"
   ],
   "price": 120.23,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 62.440545957853644,
   "peer_median_pe": 18.824749169197815,
   "peers": [
    "AMD",
    "ADI",
    "AVGO",
    "MRVL",
    "MCHP",
    "MU",
    "MPWR",
    "NVDA",
    "NXPI",
    "ON"
   ],
   "q": {
    "p25": 0.20491202207062642,
    "median": 0.3718839399562,
    "p75": 0.5412847375053669,
    "months": 98,
    "from": "2016-12",
    "to": "2025-01",
    "recent36_median": 1.2930819836482936,
    "recent36_valid_months": 17,
    "drift_recent36_vs_all": 2.477111659623137,
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
   "price": 456.19
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
   "price": 1811.67,
   "ntm_eps": 55.08950689822811,
   "fwd_pe": 32.88593603400488,
   "peer_median_pe": 32.718781967820064,
   "peer_pe": {
    "AMAT": 28.44490263154617,
    "KLAC": 33.783261480552646,
    "LRCX": 32.718781967820064,
    "Q": 24.282308942400164,
    "TER": 36.423475450976824
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
   "peer_pe_spread": 1.1876736552118161,
   "today_q": 1.005108810784864,
   "band": [
    2537.104869308139,
    3398.205746647127,
    3788.871659024188
   ],
   "band_mid_gap": -0.4668745405461391,
   "band_1y": [
    2714.13928194604,
    3635.326161202347,
    4053.252007203745
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.20093392508901808,
    "peer_rev90_median": 0.12764768930945225,
    "rev30": 0.0014674976121706873,
    "ev_ebitda_ttm": null,
    "peer_ev_ebitda_median": 41.724,
    "yahoo_peg": 1.12
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "AMAT": {
   "ticker": "AMAT",
   "theme": "반도체 장비",
   "status": "ok",
   "reasons": [],
   "peer_basis": "GICS 세부업종: Semiconductor Materials & Equipment",
   "label": "높음",
   "confidence": "낮음",
   "caution": [
    "선행 EPS가 최근 연간 GAAP EPS의 2.08배 -- 후행 기준 비율 적용이 특히 불안정"
   ],
   "fwd_to_last_gaap_eps": 2.075971539751337,
   "price": 511.38,
   "ntm_eps": 17.97791353424658,
   "fwd_pe": 28.44490263154617,
   "peer_median_pe": 32.88593603400488,
   "peer_pe": {
    "KLAC": 33.783261480552646,
    "LRCX": 32.718781967820064,
    "Q": 24.282308942400164,
    "TER": 36.423475450976824,
    "ASML": 32.88593603400488
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
   "peer_pe_spread": 1.0325342035586633,
   "today_q": 0.8649564543984223,
   "band": [
    378.12727993860113,
    451.435764125917,
    506.32309736278506
   ],
   "band_mid_gap": 0.13278574857742775,
   "band_1y": [
    388.25664012695046,
    463.5289287806244,
    519.8865964726645
   ],
   "fy1_end": "2027-10-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.120090814988556,
    "peer_rev90_median": 0.18015325057583165,
    "rev30": 3.7013298987975674e-05,
    "ev_ebitda_ttm": 39.827,
    "peer_ev_ebitda_median": 42.1695,
    "yahoo_peg": 1.02
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
   "fwd_to_last_gaap_eps": 1.7431268122146117,
   "price": 328.51,
   "ntm_eps": 10.040410438356163,
   "fwd_pe": 32.718781967820064,
   "peer_median_pe": 32.88593603400488,
   "peer_pe": {
    "AMAT": 28.44490263154617,
    "KLAC": 33.783261480552646,
    "Q": 24.282308942400164,
    "TER": 36.423475450976824,
    "ASML": 32.88593603400488
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
   "peer_pe_spread": 1.1876736552118161,
   "today_q": 0.9949171565008224,
   "band": [
    250.8555063097484,
    269.3892206493623,
    310.68008532200435
   ],
   "band_mid_gap": 0.21946230516620946,
   "band_1y": [
    293.3075563617789,
    314.97771438712084,
    363.2561946778559
   ],
   "fy1_end": "2028-06-30",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.18015325057583165,
    "peer_rev90_median": 0.12764768930945225,
    "rev30": 0.005210875204149978,
    "ev_ebitda_ttm": 46.728,
    "peer_ev_ebitda_median": 40.775499999999994,
    "yahoo_peg": 1.51
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
   "fwd_to_last_gaap_eps": 1.576507433191107,
   "price": 194.93,
   "ntm_eps": 5.770017205479452,
   "fwd_pe": 33.783261480552646,
   "peer_median_pe": 32.718781967820064,
   "peer_pe": {
    "AMAT": 28.44490263154617,
    "LRCX": 32.718781967820064,
    "Q": 24.282308942400164,
    "TER": 36.423475450976824,
    "ASML": 32.88593603400488
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
   "peer_pe_spread": 1.156127565630458,
   "today_q": 1.0325342035586633,
   "band": [
    164.05535678528753,
    183.3339394403376,
    213.28092409100495
   ],
   "band_mid_gap": 0.06325103030601786,
   "band_1y": [
    190.65023719337273,
    213.05405519699767,
    247.85572116361632
   ],
   "fy1_end": "2028-06-30",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.08263348338064502,
    "peer_rev90_median": 0.18015325057583165,
    "rev30": 0.005175657197640016,
    "ev_ebitda_ttm": 42.615,
    "peer_ev_ebitda_median": 40.775499999999994,
    "yahoo_peg": 1.88
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "MU": {
   "ticker": "MU",
   "theme": "메모리·스토리지",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 3.13 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.37 > 2.0) -- 동종이 이질적"
   ],
   "price": 1065.11,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 6.527339088076302,
   "peer_median_pe": 21.801835570511365,
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
    "ON"
   ],
   "q": {
    "p25": 0.16394911428916553,
    "median": 0.267237981036338,
    "p75": 0.512600610162638,
    "months": 95,
    "from": "2017-10",
    "to": "2026-08",
    "recent36_median": 1.7233232073234972,
    "recent36_valid_months": 24,
    "drift_recent36_vs_all": 5.448646261435295,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "SNDK": {
   "ticker": "SNDK",
   "theme": "메모리·스토리지",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 1개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "price": 1739.89
  },
  "WDC": {
   "ticker": "WDC",
   "theme": "메모리·스토리지",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.85 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.24 > 2.0) -- 동종이 이질적"
   ],
   "price": 454.46,
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "fwd_pe": 19.73346834616375,
   "peer_median_pe": 17.08265093736115,
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
   "fwd_to_last_gaap_eps": 1.7917374545454543,
   "price": 203.59,
   "ntm_eps": 4.927277999999999,
   "fwd_pe": 41.31895947417622,
   "peer_median_pe": 29.371593495029696,
   "peer_pe": {
    "CIEN": 35.27189007362904,
    "CSCO": 20.600270896135683,
    "LITE": 38.7834388308953,
    "MSI": 23.471296916430354
   },
   "peers": [
    "CIEN",
    "CSCO",
    "LITE",
    "MSI"
   ],
   "q": {
    "p25": 1.2677161966271921,
    "median": 1.482329117095735,
    "p75": 2.1111984645546253,
    "months": 93,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.4422324750284592,
    "recent36_valid_months": 33,
    "drift_recent36_vs_all": -0.027049756767805633,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.6653557556269694,
   "peer_pe_spread": 1.588753952545452,
   "today_q": 1.4067660129222568,
   "band": [
    183.4664315888568,
    214.52564404980305,
    305.5368778108443
   ],
   "band_mid_gap": -0.05097592923326355,
   "band_1y": [
    193.6952902720158,
    226.4861562693713,
    322.57156649233804
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.1604884855268387,
    "peer_rev90_median": 0.1444201743552882,
    "rev30": 0.006438446380026663,
    "ev_ebitda_ttm": 52.269,
    "peer_ev_ebitda_median": 36.576499999999996,
    "yahoo_peg": 1.52
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
   "price": 287.81
  },
  "LITE": {
   "ticker": "LITE",
   "theme": "AI 네트워킹·광통신",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 3.15 > 2.0)"
   ],
   "price": 971.26,
   "peer_basis": "GICS 세부업종: Communications Equipment",
   "fwd_pe": 38.7834388308953,
   "peer_median_pe": 29.371593495029696,
   "peers": [
    "ANET",
    "CIEN",
    "CSCO",
    "MSI"
   ],
   "q": {
    "p25": 0.559891798361847,
    "median": 0.7350992946429089,
    "p75": 1.7617528768453505,
    "months": 39,
    "from": "2018-08",
    "to": "2025-09",
    "recent36_median": 7.020693659471991,
    "recent36_valid_months": 2,
    "drift_recent36_vs_all": 8.550673916620273,
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
   "price": 950.49
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
   "fwd_to_last_gaap_eps": 1.7599598963346907,
   "price": 254.02,
   "ntm_eps": 13.023703232876713,
   "fwd_pe": 19.504437060478946,
   "peer_median_pe": 16.000690009141245,
   "peer_pe": {
    "LNT": 17.481662564862592,
    "AEP": 17.60978916824323,
    "DUK": 16.159745558173256,
    "EIX": 8.38650874808124,
    "ETR": 20.14807625659166,
    "EVRG": 17.477798700842563,
    "ES": 13.230060627138114,
    "EXC": 13.500251099543544,
    "FE": 14.967437498838319,
    "PPL": 15.841634460109233,
    "PEG": 14.650916612905927,
    "SO": 17.129586482258663
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
   "peer_pe_spread": 1.216908734541484,
   "today_q": 1.2189747472975228,
   "band": [
    244.8189921061946,
    357.6668959519246,
    393.93930202006703
   ],
   "band_mid_gap": -0.2897861030053398,
   "band_1y": [
    250.39177318331323,
    365.8084183580296,
    402.9064882213666
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": -0.003433392080843811,
    "peer_rev90_median": 0.0006900882782211459,
    "rev30": -0.0012326394070391045,
    "ev_ebitda_ttm": 14.85,
    "peer_ev_ebitda_median": 11.99,
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
   "price": 138.35
  },
  "ETN": {
   "ticker": "ETN",
   "theme": "AI 전력·인프라",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 0개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Electrical Components & Equipment",
   "price": 429.71
  },
  "PWR": {
   "ticker": "PWR",
   "theme": "AI 전력·인프라",
   "status": "ok",
   "reasons": [],
   "peer_basis": "워치리스트 테마: AI 전력·인프라 (세부업종 동종 부족)",
   "label": "중립",
   "confidence": "낮음",
   "caution": [
    "세부업종 동종이 부족해 워치리스트 테마로 대체 -- 연구 참고",
    "최근 36개월 비율이 전체 기간과 +41% 달라 구조 변화 가능",
    "선행 EPS가 최근 연간 GAAP EPS의 2.80배 -- 후행 기준 비율 적용이 특히 불안정"
   ],
   "fwd_to_last_gaap_eps": 2.795568549556809,
   "price": 642.51,
   "ntm_eps": 19.0098661369863,
   "fwd_pe": 33.7987650922964,
   "peer_median_pe": 24.41043453301942,
   "peer_pe": {
    "CEG": 19.504437060478946,
    "ETN": 27.7259232214583,
    "HUBB": 20.30621969155144,
    "VRT": 28.246265246095977,
    "MOD": 20.0857694219694,
    "EME": 21.094945844580543,
    "FIX": 28.8356534291662,
    "BE": 63.40507671226124
   },
   "peers": [
    "CEG",
    "ETN",
    "HUBB",
    "VRT",
    "MOD",
    "EME",
    "FIX",
    "BE"
   ],
   "q": {
    "p25": 1.010156359964381,
    "median": 1.3015725713058621,
    "p75": 1.705503039962408,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.8317485451109075,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.40733493121564646,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.6883554938193386,
   "peer_pe_spread": 1.4020770379509306,
   "today_q": 1.3846031723268837,
   "band": [
    468.752040882575,
    603.9805552260414,
    791.4200834631226
   ],
   "band_mid_gap": 0.06379252517415712,
   "band_1y": [
    487.5928459725095,
    628.2566733581326,
    823.2300602446929
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.199881932024647,
    "peer_rev90_median": 0.031309574928114925,
    "rev30": 0.005444317937397969,
    "ev_ebitda_ttm": 34.218,
    "peer_ev_ebitda_median": 25.7215,
    "yahoo_peg": 1.46
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
   "fwd_to_last_gaap_eps": 1.3505431366053238,
   "price": 453.6,
   "ntm_eps": 22.337983479452053,
   "fwd_pe": 20.30621969155144,
   "peer_median_pe": 17.176954021316696,
   "peer_pe": {
    "DOV": 16.412570564203232,
    "FTV": 17.176954021316696,
    "IEX": 24.190702624751136,
    "IR": 19.630079670621452,
    "NDSN": 25.425030179744166,
    "OTIS": 14.584803867910262,
    "PH": 26.169662021576162,
    "PNR": 10.519208648722593,
    "SWK": 14.324559625563298,
    "GWW": 25.01503309181486,
    "XYL": 16.60416751800147
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
   "peer_pe_spread": 1.587416244699374,
   "today_q": 1.182178147903948,
   "band": [
    330.0218971871723,
    357.4130441052118,
    399.8351353961106
   ],
   "band_mid_gap": 0.2691198809925741,
   "band_1y": [
    339.26728206872923,
    367.42577714688457,
    411.0363003715665
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.015853440170346067,
    "peer_rev90_median": 0.0164882984491741,
    "rev30": 0.0031440499776562714,
    "ev_ebitda_ttm": 19.418,
    "peer_ev_ebitda_median": 16.173,
    "yahoo_peg": 1.93
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "VRT": {
   "ticker": "VRT",
   "theme": "AI 전력·인프라",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 0개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Electrical Components & Equipment",
   "price": 241.31
  },
  "MOD": {
   "ticker": "MOD",
   "theme": "AI 전력·인프라",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 3.94 > 2.0)"
   ],
   "price": 187.2,
   "peer_basis": "워치리스트 테마: AI 전력·인프라 (세부업종 동종 부족)",
   "fwd_pe": 20.0857694219694,
   "peer_median_pe": 27.986094233777138,
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.11 > 2.0) -- 동종이 이질적"
   ],
   "price": 922.34,
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "fwd_pe": 22.651460652584518,
   "peer_median_pe": 16.915935953155824,
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
   "peer_basis": "워치리스트 테마: AI 전력·인프라 (세부업종 동종 부족)",
   "label": "중립",
   "confidence": "낮음",
   "caution": [
    "세부업종 동종이 부족해 워치리스트 테마로 대체 -- 연구 참고"
   ],
   "fwd_to_last_gaap_eps": 1.2687615165195079,
   "price": 754.49,
   "ntm_eps": 35.76638715068493,
   "fwd_pe": 21.094945844580543,
   "peer_median_pe": 27.986094233777138,
   "peer_pe": {
    "CEG": 19.504437060478946,
    "ETN": 27.7259232214583,
    "PWR": 33.7987650922964,
    "HUBB": 20.30621969155144,
    "VRT": 28.246265246095977,
    "MOD": 20.0857694219694,
    "FIX": 28.8356534291662,
    "BE": 63.40507671226124
   },
   "peers": [
    "CEG",
    "ETN",
    "PWR",
    "HUBB",
    "VRT",
    "MOD",
    "FIX",
    "BE"
   ],
   "q": {
    "p25": 0.682629138090594,
    "median": 0.7600923930881948,
    "p75": 0.996580296450216,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 0.7025836108944974,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": -0.07566025224912953,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.4599146752478012,
   "peer_pe_spread": 1.4851746702318798,
   "today_q": 0.7537652688641528,
   "band": [
    683.285473174003,
    760.8232076350386,
    997.5384896703647
   ],
   "band_mid_gap": -0.008324151486814979,
   "band_1y": [
    702.0572392460904,
    781.7251524833569,
    1024.9436664393238
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.12381570661817953,
    "peer_rev90_median": 0.031309574928114925,
    "rev30": 0.11650562474141024,
    "ev_ebitda_ttm": 16.698,
    "peer_ev_ebitda_median": 28.4535,
    "yahoo_peg": 0.32
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "FIX": {
   "ticker": "FIX",
   "theme": "AI 전력·인프라",
   "status": "ok",
   "reasons": [],
   "peer_basis": "워치리스트 테마: AI 전력·인프라 (세부업종 동종 부족)",
   "label": "높음",
   "confidence": "낮음",
   "caution": [
    "세부업종 동종이 부족해 워치리스트 테마로 대체 -- 연구 참고"
   ],
   "fwd_to_last_gaap_eps": 1.986241949683148,
   "price": 1654.09,
   "ntm_eps": 57.36266750684931,
   "fwd_pe": 28.8356534291662,
   "peer_median_pe": 24.41043453301942,
   "peer_pe": {
    "CEG": 19.504437060478946,
    "ETN": 27.7259232214583,
    "PWR": 33.7987650922964,
    "HUBB": 20.30621969155144,
    "VRT": 28.246265246095977,
    "MOD": 20.0857694219694,
    "EME": 21.094945844580543,
    "BE": 63.40507671226124
   },
   "peers": [
    "CEG",
    "ETN",
    "PWR",
    "HUBB",
    "VRT",
    "MOD",
    "EME",
    "BE"
   ],
   "q": {
    "p25": 0.8302968375073969,
    "median": 0.9468015905936962,
    "p75": 1.13738866246296,
    "months": 117,
    "from": "2016-12",
    "to": "2026-08",
    "recent36_median": 1.123822421926831,
    "recent36_valid_months": 36,
    "drift_recent36_vs_all": 0.18696718836533965,
    "eps_basis": "10-K 최초 공시 연간 GAAP EPS(TTM 아님, 분할 조정)"
   },
   "q_spread": 1.3698578762234865,
   "peer_pe_spread": 1.4633466716640684,
   "today_q": 1.1812839050513784,
   "band": [
    1162.6211870658447,
    1325.7566926022,
    1592.625790166447
   ],
   "band_mid_gap": 0.24765728827161038,
   "band_1y": [
    1219.6918116659087,
    1390.8352954663656,
    1670.8044347758384
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.1322468071835785,
    "peer_rev90_median": 0.031309574928114925,
    "rev30": 0.001931061922407551,
    "ev_ebitda_ttm": 28.445,
    "peer_ev_ebitda_median": 25.73,
    "yahoo_peg": 0.56
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
   "price": 276.98
  }
 }
};
