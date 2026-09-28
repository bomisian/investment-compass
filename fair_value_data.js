window.FAIR_VALUE = {
 "schema": "100/v1",
 "generated_at": "2026-09-28T14:57:04.146894+00:00",
 "as_of_consensus_day": "2026-09-28",
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
    "p25": 0.35653130875054106,
    "median": 0.5108258878840017,
    "p75": 0.608511870779704,
    "recent36_median": 0.5933649314770011,
    "months": 96,
    "from": "2017-03",
    "to": "2026-09"
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
   "confidence": "보통",
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
    "p25": 0.7965570046063193,
    "median": 0.9159413792172268,
    "p75": 1.067874813344685,
    "recent36_median": 0.8289591918366179,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.3406131729046291,
   "peer_pe_spread": 1.2922694881270693,
   "today_q": 0.9297290427558677,
   "band": [
    294.65776847431545,
    338.8197471024959,
    395.0220859153496
   ],
   "band_mid_gap": 0.015052997769817722,
   "band_1y": [
    268.25572100830993,
    308.4606797283743,
    359.62715329076934
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
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.22 > 2.0)"
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
    "p25": 1.7629005947978138,
    "median": 2.2594759209145865,
    "p75": 3.9120745274064177,
    "recent36_median": 1.397504554976643,
    "months": 104,
    "from": "2017-02",
    "to": "2026-09"
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
    "p25": 0.6724503004354137,
    "median": 0.8830202445053476,
    "p75": 1.0303051462729504,
    "recent36_median": 0.8990566894072358,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.5321654932800606,
   "peer_pe_spread": 1.3370103765481278,
   "today_q": 1.0047026494689644,
   "band": [
    503.08814562442,
    660.6243124129358,
    770.8142968039904
   ],
   "band_mid_gap": 0.13780250874291267,
   "band_1y": [
    514.053380008995,
    675.0231816543599,
    787.6148505537642
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
    "p25": 0.6099201521663145,
    "median": 0.9367882627174189,
    "p75": 1.100324955219516,
    "recent36_median": 1.059387438622195,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.8040475483739662,
   "peer_pe_spread": 1.0365034754830267,
   "today_q": 1.5859134172072742,
   "band": [
    131.17075878309223,
    201.46772787109285,
    236.63828580099042
   ],
   "band_mid_gap": 0.6929262249794681,
   "band_1y": [
    131.22772599539934,
    201.55522492404228,
    236.74105736069075
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
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 3.42 > 2.0)",
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
    "p25": 1.615747964163502,
    "median": 3.545881254382694,
    "p75": 5.52144062349749,
    "recent36_median": 3.639173080741928,
    "months": 56,
    "from": "2022-02",
    "to": "2026-09"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "ORCL": {
   "ticker": "ORCL",
   "theme": "빅테크·AI SW",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.02 > 2.0)"
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
    "p25": 0.34455918313854184,
    "median": 0.5180247608316433,
    "p75": 0.6970895910983312,
    "recent36_median": 0.67356301228037,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "CRM": {
   "ticker": "CRM",
   "theme": "빅테크·AI SW",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.81 > 2.0)"
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
    "p25": 0.8123157167534368,
    "median": 1.2049733092178323,
    "p75": 2.2853378766855625,
    "recent36_median": 0.771115861044643,
    "months": 79,
    "from": "2017-03",
    "to": "2026-09"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "PLTR": {
   "ticker": "PLTR",
   "theme": "빅테크·AI SW",
   "status": "자료부족",
   "reasons": [
    "상대 PER 이력 19개월(<24)"
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
    "p25": 1.4819431520722568,
    "median": 1.7450884351510132,
    "p75": 2.5639515862940767,
    "recent36_median": 2.5438553792503464,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "note": "이 종목에는 '동종 PER × 평소 상대비율' 방식이 믿을 만하지 않아 적정가를 내지 않음"
  },
  "AMD": {
   "ticker": "AMD",
   "theme": "반도체 설계·파운드리",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 3.14 > 2.0)"
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
    "p25": 2.2208074116106316,
    "median": 5.394951957585472,
    "p75": 6.968438608322698,
    "recent36_median": 6.793189521447382,
    "months": 100,
    "from": "2018-02",
    "to": "2026-09"
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
    "p25": 0.9406622571649628,
    "median": 1.1504038988190906,
    "p75": 1.5916860814573017,
    "recent36_median": 1.7150864605206433,
    "months": 94,
    "from": "2018-12",
    "to": "2026-09"
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
    "p25": 0.3890342953046747,
    "median": 0.46275770394912075,
    "p75": 0.6221278450072812,
    "recent36_median": 0.5471511582154039,
    "months": 106,
    "from": "2016-12",
    "to": "2026-09"
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
    "상대 PER 이력 7개월(<24)"
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
    "recent36_median": 0.6368175193093106,
    "months": 98,
    "from": "2016-12",
    "to": "2025-01"
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
    "p25": 1.3552870048237697,
    "median": 1.8614949945843593,
    "p75": 2.10021815230368,
    "recent36_median": 1.1967038800457748,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.5496482625661823,
   "peer_pe_spread": 1.2078288216233477,
   "today_q": 1.0117433670208829,
   "band": [
    2336.1054751976253,
    3208.655165602328,
    3620.141790811346
   ],
   "band_mid_gap": -0.45648880605946074,
   "band_1y": [
    2503.080950663602,
    3437.997002934175,
    3878.8950462583584
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
   "confidence": "보통",
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
    "p25": 0.6403933708889153,
    "median": 0.7654771116275241,
    "p75": 0.8648883875072293,
    "recent36_median": 0.6887777628889924,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.3505579957935816,
   "peer_pe_spread": 1.0402844688295725,
   "today_q": 0.8512877032656208,
   "band": [
    364.84819842888373,
    436.11154926257507,
    492.7486516390122
   ],
   "band_mid_gap": 0.11210079352425062,
   "band_1y": [
    375.13488113720535,
    448.407460690991,
    506.6414132209276
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
    "p25": 0.7605058552443495,
    "median": 0.8178164641993928,
    "p75": 0.9436009467538056,
    "recent36_median": 0.8940858022734575,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.2407543482365797,
   "peer_pe_spread": 1.2078288216233477,
   "today_q": 0.9883929389569791,
   "band": [
    242.53415942503557,
    260.811178955125,
    300.92531290251674
   ],
   "band_mid_gap": 0.2085754961225601,
   "band_1y": [
    283.1286832380417,
    304.46484671017987,
    351.2931448380975
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
    "p25": 0.8703927627638618,
    "median": 0.9709898420595742,
    "p75": 1.1216061197576035,
    "recent36_median": 1.0336488810393507,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.2886206868219285,
   "peer_pe_spread": 1.1746909959628273,
   "today_q": 1.0402844688295725,
   "band": [
    157.2302700650828,
    175.40241788395724,
    202.6101786004643
   ],
   "band_mid_gap": 0.0713649347999532,
   "band_1y": [
    182.93599840383197,
    204.07912817783642,
    235.73511190760118
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
    "상대 PER 이력 2개월(<24)"
   ],
   "peer_basis": "GICS 세부업종: Technology Hardware, Storage & Peripherals",
   "price": 1777.8
  },
  "WDC": {
   "ticker": "WDC",
   "theme": "메모리·스토리지",
   "status": "방법부적합",
   "reasons": [
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.83 > 2.0)",
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
    "p25": 1.0581970142889754,
    "median": 1.704749194122967,
    "p75": 2.9913929883858628,
    "recent36_median": 1.0611213469516012,
    "months": 70,
    "from": "2016-12",
    "to": "2026-09"
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
    "p25": 1.3647375312589827,
    "median": 1.7859332068556182,
    "p75": 2.3284223371403776,
    "recent36_median": 1.6529394532921966,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.7061319732244684,
   "peer_pe_spread": 1.4898725925700311,
   "today_q": 1.715769136978739,
   "band": [
    164.2916468225503,
    214.9965842873178,
    280.3032315776552
   ],
   "band_mid_gap": -0.03928706270063309,
   "band_1y": [
    173.5563956658574,
    227.12069037618258,
    296.11011580311583
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
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 2.43 > 2.0)"
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
    "p25": 0.5123487377846606,
    "median": 0.5823692391882498,
    "p75": 1.2468148760812447,
    "recent36_median": 0.6303505384557966,
    "months": 50,
    "from": "2018-08",
    "to": "2025-09"
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
    "p25": 1.180925713649696,
    "median": 1.7193827872553396,
    "p75": 1.8643274682652051,
    "recent36_median": 1.7193827872553396,
    "months": 32,
    "from": "2024-02",
    "to": "2026-09"
   },
   "q_spread": 1.5787000373659659,
   "peer_pe_spread": 1.218583669660851,
   "today_q": 1.2837044265407782,
   "band": [
    242.19150935729778,
    352.62159812014477,
    382.3477448720857
   ],
   "band_mid_gap": -0.2533923009721629,
   "band_1y": [
    247.82711737562605,
    360.8268283987583,
    391.24467946120046
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
    "p25": 0.6613041619733226,
    "median": 0.8655983713659392,
    "p75": 1.163187081239505,
    "recent36_median": 0.9666228153532157,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.758929019543096,
   "peer_pe_spread": 1.0994206210560589,
   "today_q": 0.9743110490554838,
   "band": [
    298.6321518852582,
    390.8874602241096,
    525.2727581195821
   ],
   "band_mid_gap": 0.12559251644384783,
   "band_1y": [
    311.33873146364493,
    407.51943567677125,
    547.6227296791402
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
    "p25": 0.9965993396015257,
    "median": 1.3583825816355004,
    "p75": 1.8504040384479414,
    "recent36_median": 1.884729941980079,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.8567181061827673,
   "peer_pe_spread": 1.3204903794250713,
   "today_q": 1.6031455267982726,
   "band": [
    403.5332529090742,
    550.0229832397537,
    749.2474971231079
   ],
   "band_mid_gap": 0.18018704632392746,
   "band_1y": [
    420.2162370646007,
    572.7621866348003,
    780.2230958698342
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
    "p25": 0.8575114504791167,
    "median": 0.930688547249541,
    "p75": 1.0415112836258424,
    "recent36_median": 1.0018386041284797,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.2145741996143837,
   "peer_pe_spread": 1.5529960615141092,
   "today_q": 1.1900043920484824,
   "band": [
    336.2441312790243,
    364.93805637978494,
    408.3934466232547
   ],
   "band_mid_gap": 0.27862795299812837,
   "band_1y": [
    345.75117967154057,
    375.25640379324324,
    419.9404623152904
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
    "p25": 1.7678742069847142,
    "median": 2.4533262573644947,
    "p75": 2.762388386065826,
    "recent36_median": 2.5017698905283954,
    "months": 43,
    "from": "2022-03",
    "to": "2026-09"
   },
   "q_spread": 1.562548045076892,
   "peer_pe_spread": 1.0823074255347607,
   "today_q": 1.0425949397441678,
   "band": [
    429.4737697988076,
    595.9922216942211,
    671.0733994109299
   ],
   "band_mid_gap": -0.5750280108018802,
   "band_1y": [
    460.92892403073745,
    639.6433793963656,
    720.2235891636241
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
    "평소 상대 PER 비율이 들쭉날쭉함(p75/p25 3.31 > 2.0)",
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
    "p25": 0.6381361168039749,
    "median": 0.8844442725183735,
    "p75": 2.110426005297047,
    "recent36_median": 2.2636143436822387,
    "months": 106,
    "from": "2016-12",
    "to": "2026-09"
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
    "p25": 0.603530880267663,
    "median": 0.7958433003759344,
    "p75": 0.941800795185598,
    "recent36_median": 0.688998606853063,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.5604848500343742,
   "peer_pe_spread": 1.3815360217807104,
   "today_q": 0.7365493334660149,
   "band": [
    624.5573125212001,
    823.5697113797336,
    974.6122241675166
   ],
   "band_mid_gap": -0.07450457506133523,
   "band_1y": [
    642.0991354582984,
    846.7011578679053,
    1001.9859731028442
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
    "p25": 0.8154605592828311,
    "median": 0.9562693564122697,
    "p75": 1.2537864154875913,
    "recent36_median": 1.2505835812611927,
    "months": 118,
    "from": "2016-12",
    "to": "2026-09"
   },
   "q_spread": 1.5375193824091902,
   "peer_pe_spread": 1.457969384072225,
   "today_q": 1.3576823093359585,
   "band": [
    996.3860227813701,
    1168.4359346346412,
    1531.9628223879615
   ],
   "band_mid_gap": 0.41976975444419673,
   "band_1y": [
    1046.4131703105868,
    1227.10146741403,
    1608.880531360776
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
