window.FAIR_VALUE = {
 "schema": "100/v2",
 "generated_at": "2026-09-28T15:12:00.957525+00:00",
 "as_of_consensus_day": "2026-09-28",
 "consensus_fetched_day": "2026-09-28",
 "price_session_day": "2026-09-25",
 "cons_dir_file_count": 504,
 "cons_dir": "raw_92\\daily\\consensus_2026-09-25",
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 3.40 > 2.0) -- 동종이 이질적"
   ],
   "price": 516.17,
   "peer_basis": "GICS 세부업종: Systems Software",
   "fwd_pe": 24.905250696777614,
   "peer_median_pe": 46.96512831674728,
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
   "fwd_to_last_gaap_eps": 1.5162581729246132,
   "price": 343.92,
   "ntm_eps": 16.39075084931507,
   "fwd_pe": 20.982565299281067,
   "peer_median_pe": 22.568473538360532,
   "peer_pe": {
    "AMZN": 22.462838681961372,
    "META": 22.568473538360532,
    "AAPL": 35.6241172542851
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
   "peer_pe_spread": 1.2922694881270693,
   "today_q": 0.9297290427558677,
   "band": [
    293.03771501311485,
    350.61059809508384,
    400.7114658613978
   ],
   "band_mid_gap": -0.019082703521898003,
   "band_1y": [
    266.78082824862946,
    319.19504200463626,
    364.8067510574253
   ],
   "fy1_end": "2027-12-31",
   "methodology": "gaap",
   "display_only": {
    "rev90": 0.13533960542843193,
    "peer_rev90_median": -0.010683570460989333,
    "rev30": 0.004181219823836679,
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
   "price": 249.67,
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "fwd_pe": 22.462838681961372,
   "peer_median_pe": 22.568473538360532,
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
   "fwd_to_last_gaap_eps": 1.4178694238877518,
   "price": 751.66,
   "ntm_eps": 33.30575276712329,
   "fwd_pe": 22.568473538360532,
   "peer_median_pe": 22.462838681961372,
   "peer_pe": {
    "GOOGL": 20.982565299281067,
    "AMZN": 22.462838681961372,
    "AAPL": 35.6241172542851
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
   "peer_pe_spread": 1.3370103765481278,
   "today_q": 1.0047026494689644,
   "band": [
    486.73295327059515,
    611.7065330743545,
    738.4988437847588
   ],
   "band_mid_gap": 0.22879184602174862,
   "band_1y": [
    497.3417123155616,
    625.0391976741354,
    754.5950547276478
   ],
   "fy1_end": "2027-12-31",
   "methodology": "gaap",
   "display_only": {
    "rev90": -0.0316804498393769,
    "peer_rev90_median": 0.13533960542843193,
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
   "price": 341.07,
   "ntm_eps": 9.574131972602741,
   "fwd_pe": 35.6241172542851,
   "peer_median_pe": 22.462838681961372,
   "peer_pe": {
    "GOOGL": 20.982565299281067,
    "AMZN": 22.462838681961372,
    "META": 22.568473538360532
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
   "peer_pe_spread": 1.0365034754830267,
   "today_q": 1.5859134172072742,
   "band": [
    126.10638916702611,
    201.31782083617105,
    240.65707416823128
   ],
   "band_mid_gap": 0.6941868264983697,
   "band_1y": [
    126.16115693319294,
    201.4052527847789,
    240.7615910801142
   ],
   "fy1_end": "2027-09-30",
   "methodology": "gaap",
   "display_only": {
    "rev90": -0.010683570460989333,
    "peer_rev90_median": 0.13533960542843193,
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.74 > 2.0) -- 동종이 이질적"
   ],
   "price": 372.11,
   "peer_basis": "워치리스트 테마: 빅테크·AI SW (세부업종 동종 부족)",
   "fwd_pe": 179.9437336624764,
   "peer_median_pe": 20.00194382105358,
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
   "price": 137.1,
   "peer_basis": "GICS 세부업종: Application Software",
   "fwd_pe": 15.098636945329547,
   "peer_median_pe": 15.474334590536689,
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
   "price": 234.02,
   "peer_basis": "GICS 세부업종: Application Software",
   "fwd_pe": 14.389627846720385,
   "peer_median_pe": 15.474334590536689,
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
   "price": 189.67
  },
  "NVDA": {
   "ticker": "NVDA",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.30 > 2.0) -- 동종이 이질적"
   ],
   "price": 225.07,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 16.672790975775815,
   "peer_median_pe": 19.84214738512818,
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
   "price": 630.63,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 46.65330740332027,
   "peer_median_pe": 19.141385931149152,
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.36 > 2.0) -- 동종이 이질적"
   ],
   "price": 352.81,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 18.8839076390811,
   "peer_median_pe": 19.84214738512818,
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
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.36 > 2.0) -- 동종이 이질적"
   ],
   "price": 201.97,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 19.84214738512818,
   "peer_median_pe": 19.141385931149152,
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
   "status": "자료부족",
   "reasons": [
    "컨센서스 원자료 없음",
    "같은 EPS 정의의 동종 0개(<3)"
   ],
   "peer_basis": "GICS 세부업종: None",
   "price": null
  },
  "MRVL": {
   "ticker": "MRVL",
   "theme": "반도체 설계·파운드리",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 6개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Semiconductors",
   "price": 261.935
  },
  "INTC": {
   "ticker": "INTC",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.84 > 2.0)"
   ],
   "price": 123.0,
   "peer_basis": "GICS 세부업종: Semiconductors",
   "fwd_pe": 63.97776962393926,
   "peer_median_pe": 19.141385931149152,
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
    "컨센서스 원자료 없음",
    "같은 EPS 정의의 동종 0개(<3)"
   ],
   "peer_basis": "GICS 세부업종: None",
   "price": null
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
   "price": 1743.94,
   "ntm_eps": 54.99222755509206,
   "fwd_pe": 31.712481518463573,
   "peer_median_pe": 31.344392809653094,
   "peer_pe": {
    "AMAT": 26.996445556706302,
    "KLAC": 32.60708502477544,
    "LRCX": 31.344392809653094,
    "Q": 24.09976118218678,
    "TER": 36.23982583214778
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
   "peer_pe_spread": 1.2078288216233477,
   "today_q": 1.0117433670208829,
   "band": [
    2426.2389991424943,
    3249.7116730826137,
    3623.3063493260456
   ],
   "band_mid_gap": -0.4633554679804156,
   "band_1y": [
    2599.656858386046,
    3481.988065352273,
    3882.2857947581606
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
    "선행 EPS가 최근 연간 GAAP EPS의 2.07배 -- 후행 기준 비율 적용이 특히 불안정"
   ],
   "fwd_to_last_gaap_eps": 2.0745182479673514,
   "price": 485.0,
   "ntm_eps": 17.965328027397263,
   "fwd_pe": 26.996445556706302,
   "peer_median_pe": 31.712481518463573,
   "peer_pe": {
    "KLAC": 32.60708502477544,
    "LRCX": 31.344392809653094,
    "Q": 24.09976118218678,
    "TER": 36.23982583214778,
    "ASML": 31.712481518463573
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
   "peer_pe_spread": 1.0402844688295725,
   "today_q": 0.8512877032656208,
   "band": [
    364.37946516047003,
    435.02262601423433,
    487.91438545613966
   ],
   "band_mid_gap": 0.11488453932538745,
   "band_1y": [
    374.6529322069691,
    447.28783588513227,
    501.67084771530943
   ],
   "fy1_end": "2027-10-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.1260691818541293,
    "peer_rev90_median": 0.18339201773873093,
    "rev30": 0.0010651188150607727,
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
   "price": 315.21,
   "ntm_eps": 10.056344109589041,
   "fwd_pe": 31.344392809653094,
   "peer_median_pe": 31.712481518463573,
   "peer_pe": {
    "AMAT": 26.996445556706302,
    "KLAC": 32.60708502477544,
    "Q": 24.09976118218678,
    "TER": 36.23982583214778,
    "ASML": 31.712481518463573
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
   "peer_pe_spread": 1.2078288216233477,
   "today_q": 0.9883929389569791,
   "band": [
    242.28822976345182,
    260.1889763101185,
    300.06966561252403
   ],
   "band_mid_gap": 0.21146562191129137,
   "band_1y": [
    282.8415907253068,
    303.7385019511343,
    350.2942822815564
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
   "price": 187.92,
   "ntm_eps": 5.763164657534246,
   "fwd_pe": 32.60708502477544,
   "peer_median_pe": 31.344392809653094,
   "peer_pe": {
    "AMAT": 26.996445556706302,
    "LRCX": 31.344392809653094,
    "Q": 24.09976118218678,
    "TER": 36.23982583214778,
    "ASML": 31.712481518463573
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
   "peer_pe_spread": 1.1746909959628273,
   "today_q": 1.0402844688295725,
   "band": [
    156.97737734184102,
    175.42420774932614,
    204.07916423398825
   ],
   "band_mid_gap": 0.07123185796871212,
   "band_1y": [
    182.64176000561417,
    204.10448048928825,
    237.4442634176657
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
   "price": 1082.28
  },
  "SNDK": {
   "ticker": "SNDK",
   "theme": "메모리·스토리지",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 1개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "price": 1777.8
  },
  "WDC": {
   "ticker": "WDC",
   "theme": "메모리·스토리지",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.85 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.29 > 2.0) -- 동종이 이질적"
   ],
   "price": 456.81,
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "fwd_pe": 19.890682020357893,
   "peer_median_pe": 16.55935490413092,
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
   "price": 206.55,
   "ntm_eps": 4.910506301369863,
   "fwd_pe": 42.06287240531178,
   "peer_median_pe": 24.5154616077192,
   "peer_pe": {
    "CIEN": 35.84234760239122,
    "CSCO": 20.42720588384933,
    "FFIV": 24.5154616077192,
    "LITE": 37.910120193651835,
    "MSI": 24.057323949132556
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
   "peer_pe_spread": 1.4898725925700311,
   "today_q": 1.715769136978739,
   "band": [
    160.88152730894805,
    210.73094582497626,
    278.3500613325676
   ],
   "band_mid_gap": -0.019840208131788883,
   "band_1y": [
    169.9539723959156,
    222.614503658502,
    294.04680221161385
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
   "price": 295.83
  },
  "LITE": {
   "ticker": "LITE",
   "theme": "AI 네트워킹·광통신",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.39 > 2.0)"
   ],
   "price": 941.65,
   "peer_basis": "GICS 세부업종: Communications Equipment",
   "fwd_pe": 37.910120193651835,
   "peer_median_pe": 24.5154616077192,
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
   "price": 957.63
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
   "price": 263.27,
   "ntm_eps": 13.017258520547944,
   "fwd_pe": 20.2246885997097,
   "peer_median_pe": 15.75494185543127,
   "peer_pe": {
    "LNT": 17.571507592281773,
    "AEP": 17.57353072972851,
    "DUK": 16.071951094326312,
    "EIX": 8.220618598613955,
    "ETR": 20.023734810383655,
    "EVRG": 17.395163993448094,
    "ES": 13.13295952085244,
    "EXC": 13.484684116642791,
    "FE": 14.963192695133024,
    "PPL": 15.437932616536225,
    "PEG": 14.586546946585164,
    "SO": 17.13160935055869
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
   "peer_pe_spread": 1.218583669660851,
   "today_q": 1.2837044265407782,
   "band": [
    240.93962904481276,
    351.9993628389987,
    387.69700209253404
   ],
   "band_mid_gap": -0.2520725098004871,
   "band_1y": [
    246.54610678212603,
    360.19011418666616,
    396.71840973590105
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
   "price": 138.46
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
   "price": 439.98,
   "ntm_eps": 15.459825726027397,
   "fwd_pe": 28.45957048915962,
   "peer_median_pe": 29.209943289413463,
   "peer_pe": {
    "AME": 26.988582541583348,
    "BE": 66.2727535610092,
    "EMR": 21.802250053496792,
    "ROK": 29.209943289413463,
    "VRT": 29.671804179290273
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
   "peer_pe_spread": 1.0994206210560589,
   "today_q": 0.9743110490554838,
   "band": [
    298.605828853725,
    386.9460276864864,
    529.0123771316898
   ],
   "band_mid_gap": 0.1370578026878806,
   "band_1y": [
    311.31128840637837,
    403.41029806829084,
    551.5214667442447
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.021282297733524747,
    "peer_rev90_median": 0.04057712409941261,
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
   "fwd_to_last_gaap_eps": 2.7924846736502817,
   "price": 649.13,
   "ntm_eps": 18.988895780821917,
   "fwd_pe": 34.184715503868176,
   "peer_median_pe": 21.32352611315349,
   "peer_pe": {
    "FIX": 28.950574176491845,
    "EME": 21.32352611315349,
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
   "peer_pe_spread": 1.3204903794250713,
   "today_q": 1.6031455267982726,
   "band": [
    403.47701061346936,
    548.9374221543669,
    750.1814577509067
   ],
   "band_mid_gap": 0.18252094647221528,
   "band_1y": [
    420.15766958434335,
    571.6317459806127,
    781.1956685580843
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.19957412594589008,
    "peer_rev90_median": 0.1237909570788489,
    "rev30": 0.00518393463671174,
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
   "price": 466.62,
   "ntm_eps": 22.289627643835615,
   "fwd_pe": 20.934400854787167,
   "peer_median_pe": 17.591868563401295,
   "peer_pe": {
    "DOV": 16.843557343765223,
    "FTV": 17.591868563401295,
    "IEX": 24.424887311431124,
    "IR": 19.89480068542966,
    "NDSN": 25.274863708406084,
    "OTIS": 14.963551115699135,
    "PH": 26.827958926250563,
    "PNR": 10.65824285698178,
    "SWK": 14.791473848817448,
    "GWW": 24.95959703134812,
    "XYL": 16.835939923982796
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
   "peer_pe_spread": 1.5529960615141092,
   "today_q": 1.1900043920484824,
   "band": [
    337.2620093037439,
    365.2540708167795,
    408.60682973847304
   ],
   "band_mid_gap": 0.277521695943173,
   "band_1y": [
    346.79783742723095,
    375.5813532993313,
    420.159878676635
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.02129256296262083,
    "peer_rev90_median": 0.017710078396089735,
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
   "fwd_to_last_gaap_eps": 2.503240429036275,
   "price": 253.28,
   "ntm_eps": 8.536049863013698,
   "fwd_pe": 29.671804179290273,
   "peer_median_pe": 28.45957048915962,
   "peer_pe": {
    "AME": 26.988582541583348,
    "BE": 66.2727535610092,
    "ETN": 28.45957048915962,
    "EMR": 21.802250053496792,
    "ROK": 29.209943289413463
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
   "peer_pe_spread": 1.0823074255347607,
   "today_q": 1.0425949397441678,
   "band": [
    422.25199442149034,
    596.9911481549915,
    672.5591142881717
   ],
   "band_mid_gap": -0.5757391030289729,
   "band_1y": [
    453.1782174955796,
    640.7154683832307,
    721.8181195120184
   ],
   "fy1_end": "2027-12-31",
   "methodology": "nongaap",
   "display_only": {
    "rev90": 0.04057712409941261,
    "peer_rev90_median": 0.021282297733524747,
    "rev30": 0.006257349798960865,
    "ev_ebitda_ttm": 36.486,
    "peer_ev_ebitda_median": 24.545,
    "yahoo_peg": 0.85
   },
   "horizon_3y": "자료부족(컨센서스가 FY1까지만 있음)"
  },
  "MOD": {
   "ticker": "MOD",
   "theme": "AI 전력·인프라",
   "status": "자료부족",
   "reasons": [
    "컨센서스 원자료 없음",
    "같은 EPS 정의의 동종 0개(<3)"
   ],
   "peer_basis": "GICS 세부업종: None",
   "price": null
  },
  "STX": {
   "ticker": "STX",
   "theme": "메모리·스토리지",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 3.30 > 2.0)",
    "동종 선행 PER 차이가 큼(상위/하위 사분위 2.09 > 2.0) -- 동종이 이질적"
   ],
   "price": 916.83,
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "fwd_pe": 22.57565749445906,
   "peer_median_pe": 16.55935490413092,
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
   "price": 762.21,
   "ntm_eps": 35.74502621917808,
   "fwd_pe": 21.32352611315349,
   "peer_median_pe": 28.950574176491845,
   "peer_pe": {
    "FIX": 28.950574176491845,
    "J": 16.748769658917322,
    "PWR": 34.184715503868176
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
   "peer_pe_spread": 1.3815360217807104,
   "today_q": 0.7365493334660149,
   "band": [
    626.3968753866714,
    826.5536885942121,
    980.514391567051
   ],
   "band_mid_gap": -0.07784574611680295,
   "band_1y": [
    643.9903657775338,
    849.7689454852009,
    1008.0539135601781
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
   "price": 1658.91,
   "ntm_eps": 57.30145419178082,
   "fwd_pe": 28.950574176491845,
   "peer_median_pe": 21.32352611315349,
   "peer_pe": {
    "EME": 21.32352611315349,
    "J": 16.748769658917322,
    "PWR": 34.184715503868176
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
   "peer_pe_spread": 1.457969384072225,
   "today_q": 1.3576823093359585,
   "band": [
    991.8749865295184,
    1162.8385055893111,
    1535.8762664167884
   ],
   "band_mid_gap": 0.42660394545439173,
   "band_1y": [
    1041.6756412427771,
    1221.2229992912414,
    1612.9904639365127
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
   "price": 288.7
  }
 }
};
