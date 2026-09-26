// 자동 생성 아님 부분 있음(VST) + AMAT은 amat_run_store 실행기록에서 그대로 생성(Bundle C, 2026-09-15).
// AMAT 항목은 amat_collector_adapter.run_real_collection()의 last_successful_run을 그대로 반영하며,
// 독립 화면(amat_review_stage3_main.html 계열)과 항상 같은 실행 ID를 가리킨다(단일 진실 공급원).
// LRCX/KLAC/ASML(2026-09-20 추가)은 상대가치(동종기업 배수) 참고범위만 제공하며, 아직 독립 DCF
// 적정가 모델은 없다(AMAT의 DCF 가정을 복제하지 않음) -- valuation 키가 아예 없는 게 정상이다.
const INDEPENDENT_VALUATION_DATA = {
  "VST": {
    "valuation": {
      "kind": "independent_value",
      "asOf": "2026-09-15",
      "horizon": "12-24 months (normalized forward earnings power)",
      "accountingBasis": "Ongoing Operations Adjusted EBITDA / Adjusted FCF before Growth (company-defined non-GAAP, excludes one-time items)",
      "valueLow": 122.63,
      "valueBase": 208.61,
      "valueHigh": 234.13,
      "currentPrice": 140.73,
      "method": "EV/EBITDA multiple (3 scenarios) cross-checked with a 5-year DCF (Gordon growth terminal value)",
      "assumptions": {
        "normalizedEBITDA_B": 6.804,
        "normalizedEBITDA_weighting": "60% x FY2026 company guidance midpoint ($7.20B) + 20% x TTM ($6.645B, implied from current EV/EBITDA) + 20% x FY2024-25 actual Ongoing Adj. EBITDA average ($5.778B)",
        "netDebt_B": 20.075,
        "sharesOutstanding_M": 335.64,
        "evEbitdaScenarios": {
          "peerParity_CEG_NRG_avg_14.5x": {
            "multiple": 14.5,
            "ev_B": 98.66,
            "equity_B": 78.58,
            "perShare": 234.13,
            "note": "Average of CEG (14.81x) and NRG (14.18x) - the two closest AI-data-center-demand power generator peers. GE Vernova (57x) and Talen Energy (39.6x) were excluded: GEV is a turbine/equipment maker, not a generator, and TLN's multiple looked distorted versus its own fundamentals - including either would badly skew the average. This scenario assumes VST eventually re-rates to peer multiples; it is the bull case, not the base case."
          },
          "ownCurrentMultiple_10.13x": {
            "multiple": 10.13,
            "ev_B": 68.92,
            "equity_B": 48.85,
            "perShare": 145.54,
            "note": "VST's own current trading multiple applied to the normalized (higher, forward-looking) EBITDA instead of TTM - i.e. 'no re-rating, EBITDA growth alone flows through'. Closest to the DCF base case."
          },
          "conservative_9.0x": {
            "multiple": 9.0,
            "ev_B": 61.24,
            "equity_B": 41.16,
            "perShare": 122.63,
            "note": "Extra margin of safety for ERCOT power-price volatility and merchant-generation risk that peers (more contracted/regulated mix) carry less of."
          }
        },
        "dcf": {
          "wacc": 0.085,
          "terminalGrowth": 0.025,
          "cashflowBasis": "unlevered_FCFF_reconstructed_2026-09-21_v2_formula_corrected",
          "yearOneFCF_B": 4.931,
          "yearOneFCF_weighting": "60% x FY2026 guidance midpoint 재구성 FCFF($5.214B) + 40% x FY2025 실제 재구성 FCFF($4.507B) -- fcffReconstruction 참고(세후이자 add-back = Interest x (1-21%), 아래 formulaError 참고)",
          "growthPath": "10% -> 8% -> 6% -> 4% -> 2.5% (fading from current AI-demand-driven growth to terminal growth over 5 years, 변경 없음)",
          "yearly": [
            {
              "year": 1,
              "fcf": 4.931,
              "growth": 0.1,
              "pv": 4.546
            },
            {
              "year": 2,
              "fcf": 5.325,
              "growth": 0.08,
              "pv": 4.524
            },
            {
              "year": 3,
              "fcf": 5.644,
              "growth": 0.06,
              "pv": 4.419
            },
            {
              "year": 4,
              "fcf": 5.87,
              "growth": 0.04,
              "pv": 4.238
            },
            {
              "year": 5,
              "fcf": 6.017,
              "growth": 0.025,
              "pv": 4.005
            }
          ],
          "terminalValue_B": 102.796,
          "pvTerminal_B": 68.361,
          "enterpriseValue_B": 90.093,
          "equityValue_B": 70.018,
          "perShare": 208.61,
          "waccSensitivity": {
            "7.5%": 264.62,
            "8.5%": 208.61,
            "9.5%": 168.47,
            "10.5%": 138.63
          },
          "taxShieldRateSensitivity": {
            "note": "세후이자 add-back = Interest x (1-세율). 세율을 21%->20%로 바꾸면 208.61->209.23(0.3% 차이, 견고함). 하지만 VST 실제 납부세액이 EBITDA 대비 극히 작아($111M/$7.2B, FY2025 $89M/$5.9B) 가속상각·세액공제 등 이자와 무관한 세금방패가 이미 크게 작동 중일 가능성이 높다 -- 그 경우 '이자를 없애면 세금이 21% 늘어난다'는 표준공식의 전제 자체가 VST엔 약하게만 적용될 수 있고, 실제 세후이자 addback은 21% 가정보다 총이자(0% 세율 가정, addback=이자 전액)에 더 가까울 수 있다. 0% 세율 가정 시 결과는 $221.62 -- 즉 세율 가정을 21%에서 0%까지 낮추면 $208.61~$221.62 범위 안에서 움직인다(21%가 하한, 0%가 상한) -- 확정값이 아니다. 이전에 폐기한 산식 오류값 $172.67(세후이자 대신 세금절감분을 더했던 v2 오류)은 이 민감도 범위의 하한이 아니며, 이 범위와 무관하다.",
            "21%": 208.61,
            "20%": 209.23,
            "0%_전액addback_상한근사": 221.62
          },
          "formulaErrorHistory": {
            "note": "2026-09-21 재검토 반영: 직전 스냅샷(perShare $172.67)은 '세후이자 addback'이라는 라벨을 쓰면서 실제로는 Interest x 세율(=세금절감분, tax shield)을 더했다 -- Interest x (1-세율)이어야 할 것을 Interest x 세율로 계산한 산식 오류. FY2026 기준 236M(오류) vs 888.75M(올바른 세후이자) 차이. 이번에 실제 산식을 Interest x (1-세율)로 고쳐 재계산했다(perShare 172.67 -> 208.61) -- 172.67은 대표값으로 쓰지 않는다.",
            "wrongFormulaUsed": "interest x taxRate (세금절감분 = tax shield, After-tax interest 아님)",
            "correctFormula": "interest x (1 - taxRate) (After-tax interest)",
            "fy2026_wrong_vs_correct_B": {
              "wrong": 0.236,
              "correct": 0.889
            },
            "fy2025_wrong_vs_correct_B": {
              "wrong": 0.243,
              "correct": 0.915
            }
          },
          "priorLeveredValue_B": {
            "note": "2026-09-21 최초 수정 전(v1) 값 -- 레버드 현금흐름을 그대로 WACC로 할인. 재계산 근거 비교용으로만 보존, 대표값 아님.",
            "yearOneFCF_B": 4.032,
            "enterpriseValue_B": 73.668,
            "equityValue_B": 53.593,
            "perShare": 159.67
          },
          "priorFormulaErrorValue_B": {
            "note": "2026-09-21 v2(산식 오류 있던 버전) 값 -- Interest x 세율(세금절감분)을 세후이자로 잘못 라벨링해 계산. 오류 확인 후 폐기, 비교용으로만 보존.",
            "yearOneFCF_B": 4.271,
            "enterpriseValue_B": 78.031,
            "equityValue_B": 57.956,
            "perShare": 172.67
          }
        },
        "fcffReconstruction": {
          "note": "2026-09-21(v3, 산식 오류 수정): 'Adjusted FCF before Growth'는 Vistra 공식 조정표에서 'Interest paid, net'과 'Taxes paid'(실제 납부세액)를 이미 차감한 레버드(이자지급 후) 현금흐름이다. 언레버드 FCFF로 재구성하려면 세후이자(Interest x (1-세율), After-tax interest)를 다시 더해야 한다 -- 직전 버전은 이 식을 Interest x 세율(세금절감분, tax shield)로 잘못 구현했다(formulaErrorHistory 참고). 이번에 식을 고쳐 재계산했다.",
          "taxShieldRateUsed": 0.21,
          "taxShieldRateSource": "연방 법인세 statutory rate 근사(VST 발전자산 대부분 ERCOT/텍사스 소재로 주법인세 부담 미미하다고 가정) -- 실제 한계세율 확인 자료는 아님. VST의 실제 납부세액이 EBITDA 대비 매우 작아(가속상각 등 이자 외 세금방패 존재 가능성), 이 21% 가정이 이자 자체의 한계세율을 과대평가할 수 있음(taxShieldRateSensitivity의 0% 시나리오 참고).",
          "fy2026Guidance": {
            "source": "https://investor.vistracorp.com/2026-08-07-Vistra-Reports-Second-Quarter-2026-Results (2026 Guidance reconciliation, 2025-11-06 작성분)",
            "adjustedEbitda_B_range": [
              6.8,
              7.6
            ],
            "interestPaidNet_B": 1.125,
            "taxesPaid_B": 0.111,
            "capexMaintenance_B": 1.536,
            "adjustedFcfBeforeGrowth_levered_B_mid": 4.325,
            "afterTaxInterestAddback_B": 0.889,
            "afterTaxInterestFormula": "1.125 x (1-0.21) = 0.889",
            "reconstructedFcff_B": 5.214
          },
          "fy2025Actual": {
            "source": "https://www.prnewswire.com/news-releases/vistra-reports-fourth-quarter-and-full-year-2025-results-302697962.html",
            "adjustedEbitda_B": 5.912,
            "interestPaidNet_B": 1.158,
            "taxesPaid_B": 0.089,
            "capexMaintenance_B": 1.348,
            "adjustedFcfBeforeGrowth_levered_B": 3.592,
            "afterTaxInterestAddback_B": 0.915,
            "afterTaxInterestFormula": "1.158 x (1-0.21) = 0.915",
            "reconstructedFcff_B": 4.507
          },
          "remainingApproximations": [
            "순차입/상환(net borrowing) 현금흐름은 'Adjusted FCF before Growth' 산식에 별도 항목으로 없어 0으로 가정했다 -- 실제로는 0이 아닐 수 있고, 이 가정이 틀리면 FCFF 재구성치가 그만큼 달라진다.",
            "'Adjusted FCF before Growth'는 성장(growth) capex를 제외한 유지(maintenance) capex만 차감한 값이다(공식 명칭 그대로) -- 이 모델의 10%->2.5% 성장경로가 실제로는 별도 성장capex 지출 없이 달성 가능하다는 가정을 내포한다. 이 부분은 이번 수정 범위 밖이며, 성장경로 자체의 타당성은 AMAT 역산 DCF 작업과 같은 방식의 검증이 아직 필요하다.",
            "세후이자 add-back에 쓴 21% 세율의 타당성 자체가 불확실하다 -- VST의 실제 납부세액이 매우 작아(이자 외 세금방패 존재 가능성), 이자 자체의 한계세율이 21%보다 낮을 수 있고, 그러면 진짜 addback은 0.889B~1.125B(0%~21% 세율 범위) 사이 어딘가일 수 있다(taxShieldRateSensitivity 참고). 이 불확실성은 이번 수정으로 해소되지 않았다."
          ]
        }
      },
      "validationStatus": "draft_v3_fcff_formula_corrected_2026-09-21",
      "valueLowMethod": "EV/EBITDA 9.0배(보수 시나리오, evEbitdaScenarios.conservative_9.0x)",
      "valueBaseMethod": "5년 DCF(WACC 8.5%, Gordon growth 영구성장률 2.5%, assumptions.dcf.perShare) -- 2026-09-21 세후이자(Interest x (1-세율)) add-back으로 언레버드 FCFF 재구성 후 재계산(assumptions.dcf.fcffReconstruction 참고, formulaErrorHistory에 이전 산식오류 기록) -- EV/EBITDA 3개 시나리오의 평균·중앙값이 아님. 순차입 0 가정·이자의 실제 한계세율 불확실성 등 remainingApproximations가 남아 있어 여전히 '검토용 값'으로 취급해야 함(확정 적정가 아님, taxShieldRateSensitivity의 $208.61~$221.62 범위[세율 21%~0% 가정] 참고 -- 폐기한 산식오류값 $172.67은 이 범위에 포함되지 않음).",
      "valueHighMethod": "EV/EBITDA 14.5배(피어 CEG·NRG 평균 동일배수 재평가 가정, evEbitdaScenarios.peerParity_CEG_NRG_avg_14.5x)",
      "valueRangeCaveat": "valueLow/valueHigh(EV/EBITDA 배수 시나리오)와 valueBase(DCF 결과)는 서로 다른 계산 방식의 산출값이며, 하나의 일관된 low-base-high 구간(같은 방법으로 만든 신뢰구간)이 아니다 -- 세 값을 같은 모델의 세 지점처럼 보여주면 오해를 줄 수 있다. DCF 기준값과 가장 가까운 EV/EBITDA 결과는 evEbitdaScenarios.ownCurrentMultiple_10.13x.perShare($145.54, '재평가 없이 EBITDA 성장만 반영'하는 시나리오)이다.",
      "boundaryPolicyNote": "매입가 상한(보수 9.0배)·비중재검토 하한(피어 동일배수 14.5배)은 통계적으로 검증된 성공확률을 가진 경계가 아니라, 이미 계산해 둔 EV/EBITDA 시나리오 스펙트럼의 양끝을 매매 경계로 재사용한 것이다(AMAT처럼 요구수익률로 별도 매입가 상한을 다시 산출하지 않음). 9.0배는 ERCOT 상품형 발전 가격변동성·머천트 발전 위험을 반영해 피어 대비 낮게 잡은 하한이고, 14.5배는 '시장이 결국 CEG·NRG 수준으로 재평가한다면 도달 가능한 상단'(낙관 시나리오)이다 -- 이 두 배수 선택 자체가 옳다는 통계적 근거는 없고, ERCOT 상품 발전 vs CEG/NRG의 계약·규제 발전 비중 차이에 대한 정성적 판단에 의존한다.",
      "dcfCashflowMethodologyCaveat": "2026-09-21 3차 수정(산식 오류 발견·수정): 최초(v1) 문제는 Interest paid,net(이자지급)을 이미 차감한 레버드 현금흐름을 그대로 WACC로 할인해 이자비용을 이중반영한 것이었다 -- 이를 언레버드 FCFF로 재구성하는 게 목표다. 2차 수정(v2, perShare $172.67)에서 이를 고치려 했지만, '세후이자(after-tax interest) addback'이라고 설명하면서 실제로는 Interest x 세율(=세금절감분, tax shield)을 더하는 산식 오류가 있었다(예: FY2026 $1,125M 이자 부담 x 21% = $236M을 더함 -- 맞는 식은 $1,125M x (1-21%) = $889M). 이번(v3)에 식을 Interest x (1-세율)로 바로잡아 언레버드 FCFF를 재계산했다 -- perShare $172.67(v2, 오류)은 폐기하고 $208.61(v3, 수정)로 바뀐다. 세율 가정을 21%->20%로 바꿔도 $208.61->$209.23(0.3%)로 견고하지만, VST의 실제 납부세액이 EBITDA 대비 매우 작아(가속상각 등 이자 외 세금방패가 이미 크게 작동 중일 가능성) 21% 가정 자체가 이자의 실제 한계세율을 과대평가했을 수 있다 -- 0% 세율(총이자 전액 addback) 가정 시 $221.62까지 올라간다. 즉 $208.61은 세율 가정 21%~0%에 따라 $208.61~$221.62 사이에서 움직이며(21%가 하한), 순차입 0 가정과 함께 여전히 '검토용 값'이다 -- 폐기한 v2 산식오류값 $172.67은 이 민감도 범위의 일부가 아니며 정상 하한처럼 인용하지 않는다(assumptions.dcf.fcffReconstruction.remainingApproximations, formulaErrorHistory 참고). EV/EBITDA 9.0배/14.5배 시나리오(별도 계산방식)와 하나의 확정 적정가처럼 취급하면 안 된다.",
      "unavailableReasons": null,
      "sources": [
        "https://investor.vistracorp.com/2026-08-07-Vistra-Reports-Second-Quarter-2026-Results",
        "https://www.prnewswire.com/news-releases/vistra-reports-second-quarter-2026-results-302845874.html",
        "https://www.prnewswire.com/news-releases/vistra-reports-fourth-quarter-and-full-year-2025-results-302697962.html",
        "https://stockanalysis.com/stocks/vst/statistics/",
        "https://stockanalysis.com/stocks/ceg/statistics/",
        "https://stockanalysis.com/stocks/nrg/statistics/",
        "https://stockanalysis.com/stocks/gev/statistics/",
        "https://stockanalysis.com/stocks/tln/statistics/"
      ],
      "version": 3
    },
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "VST",
      "price": 138.4600067138672,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 9.47291,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 14.616417417020449,
          "per_price_basis_note": "현재가 $138.4600(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 10.38114,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 13.337649498404529,
          "per_price_basis_note": "현재가 $138.4600(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 10.14226306849315,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 13.651786172258927,
          "per_price_basis_note": "현재가 $138.4600(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    },
    "singleComparisonReference": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:32.618557+09:00",
      "ok": true,
      "reason": null,
      "referenceKind": "single_comparison",
      "peerCount": 1,
      "targetTicker": "VST",
      "peerTicker": "CEG",
      "targetEps1": 10.14226306849315,
      "targetEps1Basis": "NTM 컨센서스 EPS(blend_ntm_eps_from_annual_estimates, peer와 동일 함수로 산출)",
      "peerForwardPe": 20.23470575279152,
      "peerPrice": 263.2699890136719,
      "peerPriceAsOf": "2026-09-25",
      "appliedPrice": 205.22570885836333,
      "targetCurrentPrice": 138.4600067138672,
      "targetCurrentPriceAsOf": "2026-09-25",
      "targetCurrentPriceType": "confirmed_close",
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:32.618557+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 비교기업이 정확히 1개일 때 그 기업의 forward P/E를 대상종목 자신의 NTM EPS에 그대로 곱한 '단일 비교기업 참고가격'일 뿐이다 -- 검증된 매수가·매도가·성공확률·신뢰구간이 아니며, low/high 범위 개념 자체가 없다(peer 1개라 범위를 구성하지 않음, 산술 실패 아님). 여러 peer로 만드는 상대가치 밴드(relativeValueBand)와는 다른 개념이며 서로 바꿔 쓰면 안 된다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이므로(eps_definition_confirmation_level 참고) 이 적용가격도 잠정으로 취급해야 한다.",
      "priceAsOfDatesMatch": true,
      "priceAsOfDatesNote": null,
      "targetEpsPeriodDetail": {
        "0y_end": "2026-12-31",
        "0y_eps": 9.47291,
        "1y_end": "2027-12-31",
        "1y_eps": 10.38114
      },
      "targetEpsNtmWeight": {
        "weight_0y": 0.26301369863013696,
        "weight_1y": 0.736986301369863,
        "days_in_0y": 96,
        "days_in_1y": 269
      },
      "peerEpsPeriodDetail": {
        "0y_end": "2026-12-31",
        "0y_eps": 12.144,
        "1y_end": "2027-12-31",
        "1y_eps": 13.32016
      },
      "peerEpsNtmWeight": {
        "weight_0y": 0.26301369863013696,
        "weight_1y": 0.736986301369863,
        "days_in_0y": 96,
        "days_in_1y": 269
      },
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: target='USD', peer='USD'. 재무제표통화(financialCurrency): target='USD', peer='USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)",
      "targetPricePossibleMissingSessionDates": [],
      "targetPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "targetPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetEstimatesFetchedAt": "2026-09-26",
      "peerCurrentPriceType": "confirmed_close",
      "peerPricePossibleMissingSessionDates": [],
      "peerPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "peerPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetFinancialCurrency": "USD",
      "targetQuoteCurrency": "USD",
      "peerFinancialCurrency": "USD",
      "peerQuoteCurrency": "USD",
      "priceDateAlignmentApplied": true,
      "priceDateAlignmentCommonDate": "2026-09-25",
      "priceDateAlignmentIsPastReference": false,
      "priceDateAlignmentNote": "target·peer 공통 확정 거래일(2026-09-25)이 각자의 최신 확정 종가일과 일치합니다.",
      "peerPriceUsedInCalculation": 263.2699890136719,
      "peerPriceUsedInCalculationAsOf": "2026-09-25",
      "peerLastCollectionStatus": null,
      "peerLastCollectionNote": null,
      "targetHasMissingSessionsAsOfNow": false,
      "targetMissingSessionsAsOfNow": [],
      "targetCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary",
      "peerHasMissingSessionsAsOfNow": false,
      "peerMissingSessionsAsOfNow": [],
      "peerCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary"
    }
  },
  "AMAT": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": true,
      "rangeLow": 562.1254486514042,
      "rangeHigh": 584.7538394563309,
      "rangeMid": 573.4396440538676,
      "bandStatus": "BELOW_BAND",
      "bandDisclaimer": "이 범위는 검증된 매수가·바닥가격·성공확률이 아니다 -- 동종업계가 지금 받는 배수를 그대로 적용한 참고 범위일 뿐이며, 이 범위와 별도로 산출되는 장기 DCF 내재가치(조건부 참고값)와도 다른 개념이다.",
      "comparisonPrice": 485.0,
      "comparisonPriceAsOf": "2026-09-25",
      "comparisonPriceLabel": "최근 종가",
      "comparisonPriceNote": "실시간 시세가 아니라 prices_cache.json에 기록된 마지막 종가이며, 위 관측일 기준입니다.",
      "comparisonPriceType": "confirmed_close",
      "comparisonPriceIsIntradayFallbackSkipped": false,
      "comparisonPriceIntradayObservedDate": null,
      "comparisonPriceIntradayObservedValue": null,
      "comparisonPriceIntradayRetrievedAt": null,
      "comparisonPriceHasPossibleMissingSession": false,
      "comparisonPricePossibleMissingSessionDates": [],
      "comparisonPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "comparisonPricePossibleMissingSessionCalendarSource": null,
      "comparisonPriceIssue": null,
      "peersUsed": [
        "LRCX",
        "KLAC"
      ],
      "peersExcluded": [
        {
          "ticker": "AMAT",
          "reason": "대상 종목 자기 자신(AMAT) -- peer로 쓰지 않음"
        },
        {
          "ticker": "ASML",
          "reason": "통화 불일치: financial_currency='EUR', quote_currency='USD' (둘 다 'USD'이어야 함, 환전 미적용)"
        }
      ],
      "changeReasonVsPrevious": "입력값 완전 동일(변경 없음) -- 밴드(EPS·peer 배수) 근거 불변, 현재가만 바뀌었어도 밴드 자체는 재계산하지 않음",
      "generatedAt": "2026-09-26T13:21:28.241208+09:00",
      "asOfDate": "2026-09-26",
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckWasBenignSkip": false,
      "lastCheckBenignSkipNote": null,
      "priceAgeDaysAtBuild": 1,
      "snapshotAgeDaysAtBuild": 0,
      "priceDateClass": "ok",
      "snapshotDateClass": "ok",
      "priceStaleAfterDays": 7,
      "snapshotStaleAfterDays": 3,
      "builtAt": "2026-09-26",
      "isStaleReference": false,
      "staleReferenceNote": null,
      "conditionsForChange": [
        "동종기업(LRCX, KLAC)이 받는 주가수익배수가 재평가되면 참고범위 자체가 이동합니다.",
        "대상종목의 컨센서스 EPS 추정치가 바뀌면(실적 발표 등) 같은 배수라도 범위 값이 달라집니다.",
        "동종기업 포함/제외 구성이 바뀌면(신규 편입, 자료 결측으로 제외 등) 범위가 달라질 수 있습니다."
      ],
      "epsBasisNote": {
        "supplier": "Yahoo Finance quoteSummary API (earningsTrend 모듈)",
        "fieldPath": "earningsTrend.trend[].earningsEstimate.avg (buy_signal_telegram.py의 fetch_quote_summary()가 그대로 epsAvg로 저장, 가공 없음)",
        "underlyingProvider": "S&P Global Market Intelligence (Yahoo Finance 공식 고객센터 안내 기준: \"EPS and revenue estimates & actuals... provided by S&P Global Market Intelligence\", https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html)",
        "providerGeneralPolicy": "S&P Global의 공개 방법론 문서는 '일회성 항목을 조정·제외해 정규화된 이익 지표를 만든다'는 일반 관행을 설명하지만, 종목·기간별 필드 수준의 GAAP/조정 구분 스펙은 무료로 확인하지 못함.",
        "definitionConfirmationLevel": "source_traced_comparability_unconfirmed",
        "definitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
        "currency": "USD(quoteCurrency 필드 기준, 종목별 raw 데이터에서 확인됨)",
        "shareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
        "cautionNote": "아래 관찰된 GAAP·조정 EPS 격차는 해당 회사의 '이미 발표된 과거 분기 실적'을 실적발표 원문에서 직접 대조한 것이며, Yahoo/S&P 컨센서스가 실제로 어느 쪽을 썼는지 확정하지 않는다. 과거 격차를 미래 컨센서스에 보정계수로 적용하지 않았다.",
        "observations": [
          {
            "quarterLabel": "FY2026 Q1(2026-01-25 마감)",
            "gaapEps": 2.54,
            "adjustedEps": 2.38,
            "diffPct": -6.3,
            "diffCalc": "(조정-GAAP)/GAAP",
            "sourceUrl": "https://www.sec.gov/Archives/edgar/data/6951/000162828026007661/exhibit991q12026earningsre.htm"
          },
          {
            "quarterLabel": "FY2026 Q2(2026-04-26 마감)",
            "gaapEps": 3.51,
            "adjustedEps": 2.86,
            "diffPct": -18.5,
            "diffCalc": "(조정-GAAP)/GAAP",
            "sourceUrl": "https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-second-quarter-2026-results"
          },
          {
            "quarterLabel": "FY2026 Q3(2026-07 마감)",
            "gaapEps": 3.17,
            "adjustedEps": 3.5,
            "diffPct": 10.4,
            "diffCalc": "(조정-GAAP)/GAAP",
            "sourceUrl": "https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-third-quarter-2026-results/"
          }
        ],
        "observationSummary": "3개 분기 모두 격차가 존재하고 부호가 한 번 바뀜(Q1·Q2엔 조정이 GAAP보다 낮았다가, Q3엔 조정이 GAAP보다 높아짐) - 부호 자체가 바뀐 것은 EPS 값이 음수였다는 뜻이 아니라 (조정-GAAP)/GAAP 차이의 방향이 바뀌었다는 뜻임. 다른 두 종목보다 기준 모호성의 실질적 영향이 클 수 있음(확정 아님, 관찰일 뿐).",
        "splitNote": null,
        "lastReviewed": "2026-09-21"
      },
      "priceMultipleDiagnostic": {
        "ok": true,
        "current_price": 485.0,
        "current_price_as_of": "2026-09-25",
        "multiples": {
          "fy_current": {
            "eps": 12.79441,
            "period_end": "2026-10-31",
            "period_label": "FY0(당해 회계연도)",
            "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
            "per": 37.90717977616787,
            "per_price_basis_note": "현재가 $485.0000(2026-09-25) / 해당 기간 EPS"
          },
          "fy_next": {
            "eps": 18.45479,
            "period_end": "2027-10-31",
            "period_label": "FY1(익년 회계연도)",
            "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
            "per": 26.280439929145768,
            "per_price_basis_note": "현재가 $485.0000(2026-09-25) / 해당 기간 EPS"
          },
          "ntm": {
            "eps": 17.912013835616435,
            "period_end": null,
            "period_label": "NTM(향후 365일 일수보간)",
            "window_start": "2026-09-26",
            "window_end": "2027-09-26",
            "eps_basis_note": "0y 2026-10-31(가중10%) / +1y 2027-10-31(가중90%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
            "per": 27.076799094226967,
            "per_price_basis_note": "현재가 $485.0000(2026-09-25) / 해당 기간 EPS"
          }
        },
        "folded_required_eps_if_multiple_held": {
          "status": "folded_reference_only_not_core_diagnosis",
          "note": "[접힌 참고용, 핵심 진단(A-1) 아님] '지금 배수(FY0/FY1/NTM PER)가 미래에도 그대로 유지된다면' 필요한 EPS를 역산한 값이다. 배당을 제외하면 필요EPS = 현재EPS x (1+요구수익률)이 되는 항등식이므로(현재가/현재EPS로 만든 배수를 다시 곱해 현재가로 되돌리는 구조), 특히 NTM 행의 갭은 항상 요구수익률(현재 10%)과 같게 나온다 -- 종목별 미래 실적 부담의 차이를 보여주는 값이 아니다. 배당 포함 식은 필요EPS=(현재가x(1+요구수익률)-연배당)/현재배수이며, 미래 배수·배당이 지금과 동일하게 유지된다는 가정에서만 성립하는 조건부 산술이다. 매수가·매도가·확률·성공확률이 아니며 운영 매수 배지·사다리에 연결하지 않는다.",
          "required_return_assumption": 0.1,
          "annual_dividend_per_share": 2.12,
          "dividend_source_status": "model_assumption_maintained_after_confirmed_payment",
          "dividend_provenance": {
            "as_of": "2026-09-16",
            "note": "이번 3년 보유수익 계산은 다음 확정 지급(2026-12-10, $0.53) 이후의 향후 분기배당을 같은 금액($0.53, 연 $2.12/주)으로 3년간 유지한다고 가정한다(model_assumption, 확정 아님). 연차1,2,3 배당은 이 가정을 연 단위로 합산한 근사치이며, 실제 분기 지급일 4회를 정확히 반영하지 않는다. 이미 지급된 2026-09-10 배당은 이 근사에도 포함하지 않는다 -- 연차1의 근사 합계는 '매입 이후 12개월 동안 확정+가정된 분기배당의 합'으로 읽어야 하며, 이미 지난 지급을 재사용한 것이 아니다.",
            "next_confirmed_payment": {
              "declared_date": "2026-09-10",
              "ex_date": "2026-11-19",
              "payable_date": "2026-12-10",
              "amount_per_share": 0.53,
              "note": "회사가 실제로 확정한 다음 지급 -- 이 금액·날짜는 model_assumption이 아니라 확정 사실이다."
            }
          },
          "dividend_example_label": "실제 배당 반영",
          "by_multiple": {
            "fy_current": {
              "required_eps_if_multiple_unchanged": 14.017924919175258,
              "vs_same_period_eps_pct": 9.562886597938158
            },
            "fy_next": {
              "required_eps_if_multiple_unchanged": 20.21960063958763,
              "vs_same_period_eps_pct": 9.562886597938158
            },
            "ntm": {
              "required_eps_if_multiple_unchanged": 19.624919406123425,
              "vs_same_period_eps_pct": 9.562886597938135
            }
          }
        }
      }
    },
    "longTermScenario": {
      "kind": "amat_long_term_eps_growth_exit_multiple_scenario",
      "not_the_dcf": "기존 독립 DCF(compute_forward, 약 $191.30)와 완전히 별개의 시나리오 -- 바닥가격/최악 시나리오가 아니며, 두 값을 평균내지 않는다.",
      "assumption_disclaimer": "요약: FY2027 EPS는 '지금 관측된 컨센서스'이고, 이후 성장률·출구PER·요구수익률은 전부 분석자가 근거(과거 실적 이력·GAAP/조정 EPS 구분·사업부문별 매출 비중과 가이던스·정의를 맞춘 밸류에이션 관측값)를 조사해 선택한 가정이다. 회사가 확정한 전망이나 통계적으로 검증된 값이 아니다.",
      "assumption_review": {
        "eps_base": "FY2027 EPS $18.45479는 회사가 확정한 실적이 아니라, 지금(2026-09-21 기준) 관측된 컨센서스 전망치(estimates_cache.json, 34명 애널리스트)다 -- '그 시점에 관측된 전망'이라는 성격이지 '그 시점의 실제 달성'이라는 뜻이 아니다. 이후 FY2028~FY2031 성장 경로는 컨센서스 자체가 없어 EVIDENCE_BASE의 실제 과거 EPS 이력·현재 사이클 가이던스·밸류에이션 관측값을 근거로 분석자가 선택한 가정을 적용한다.",
        "growth_sustainability": "이 종목의 실제 GAAP EPS는 최근 8년간 -3.4%(FY2019 역성장)부터 +63.3%(FY2021)까지 크게 출렁였고, 지금의 AI 수퍼사이클 직전 3년(FY2023~FY2025)은 GAAP 기준 +9.0%→+6.2%→+0.6%로 뚜렷하게 둔화했다. 다만 FY2025 GAAP +0.6%는 사업 둔화만을 뜻하지 않는다 -- 같은 해 조정 (non-GAAP) EPS는 +9% 증가했다(EVIDENCE_BASE.eps_history.gaap_vs_adjusted_fy2025, 회사 공식 발표). 8.82%라는 성장률은 '5.2%와 16.6% 사이'라는 범위 설명도, 목표 성장률을 먼저 정하고 역산한 값도 아니다(EVIDENCE_BASE.revenue_to_eps_bridge.growth_rate_derivation, 2026-09-22 4차 개정) -- 매출·마진·주식수 세 입력을 각각 독립적으로 정한 결과다: 매출 73.3%를 차지하는 반도체장비는 실제 3년 실현 매출 CAGR(약 3.4%, segment_revenue_history -- 이전 버전이 근거로 인용한 5.2%는 실은 전사 EPS CAGR이었다는 점을 정정했다)에 첨단 패키징 가이던스를 반영해 연 6%로, 매출 22.5%를 차지하는 서비스(AGS)는 실제 3년 실현 CAGR(약 4.8%)보다 높지만 회사가 직접 밝힌 '지속가능한 장기 중간 10%대' 가이던스를 우선해 연 14%로, Display(3.7%, 변동성 큼)는 연 5%로 가정해 매출 비중으로 가중하면 전사 매출 성장률은 약 7.73%다. 영업이익률·법인세율·순이자가 일정하게 유지된다는 단순화(부문별 손익 공시가 없어 개별 재구성 불가라는 한계를 명시)를 적용하면 순이익도 같은 비율로 성장한다. 주식수는 관측된 최근 속도(-2.55%/yr)를 그대로 쓰지 않고, FY2025 공식 현금흐름표 실측(자사주 매입+배당이 이미 FCF의 약 110%, 발행대금 차감 기준으로도 약 106%, capex는 2028년 생산능력 확대를 앞두고 거의 두 배로 증가)에 근거해 독립적으로 -1.0%/yr를 가정한다(2026-09-22 5차 개정 -- 4차 개정이 '실제 현금검산'이라 불렀던 값이 사실은 추정치였던 것을 확인해 공식 실측값으로 교체했다). 이 세 입력의 결과로 EPS 성장률은 약 8.82%가 된다 -- 이 값은 growth_rate_derivation 딕셔너리의 하드코딩이 아니라 _eps_growth_from_bridge()의 실제 계산 결과이며, PRIMARY_GROWTH_RATE도 같은 함수의 같은 결과를 그대로 쓴다(2026-09-22 5차 개정 신규 -- 입력을 바꾸면 설명과 실제 계산이 함께 바뀐다, 회귀시험 LT1i). 목표 EPS 성장률을 먼저 정하고 필요 주식수 감소율을 역산하는 계산은 achievement_condition_diagnostic으로 이름을 분리해 참고용으로만 남기며, 이 8.82%의 근거로 쓰지 않는다. 참고로 7년 CAGR은 16.6%(8년 전체 '평균'이 아니라 연복리성장률)이며, 같은 7개 구간의 산술평균은 약 18.4%로 CAGR과는 다르다(복리효과) -- 두 표현을 혼용하지 않는다.",
        "exit_per_validity": "이전 버전(2026-09-22 3차 개정)은 base_eps(FY2027 컨센서스)가 GAAP 기준인지 확인하지 않은 채 GAAP 기준 트레일링 8년 평균(17.65배)을 출구 PER로 채택했다 -- 4차 개정에서 이 정의 불일치를 직접 검산했다(EVIDENCE_BASE.valuation_multiples.base_eps_basis_check): 트레일링 연간 PER 시리즈는 실제 가격 ÷ GAAP EPS로 역산해도 1.5% 이내로 일치해 GAAP 기준임이 확인됐고, base_eps는 Yahoo 쪽 문서로 직접 확정하지는 못했지만 교차 출처(stockanalysis.com)가 '비GAAP/조정 기준'이라고 명시하는 등 비GAAP일 가능성이 더 높다는 정황이 있다 -- 즉 이전 18배는 정의가 다른 이익과 배수를 묶은 값이었다.\n이번엔 base_eps와 같은(비GAAP) 기준으로 실측 가능한 유일한 트레일링 배수(FY2024·FY2025 2개년, non_gaap_matched_trailing_per, 21.49배·24.42배, 평균 22.96배)를 1차 근거로 삼는다. 표본이 2개뿐이라 8년 GAAP 평균과 같은 수준의 '정상화된 사이클 평균' 주장은 할 수 없다는 한계를 그대로 밝힌다 -- 8년 전체를 아우르는 비GAAP 이력은 이 프로젝트가 수집하지 않았다.\n22배를 선택한 이유: 관측된 두 값(21.49/24.42) 중 FY2025 쪽(24.42)은 이미 AI 사이클 재평가가 상당히 진행된 시점의 관측치라, 이 수준이 FY2031까지 그대로 유지된다고 가정하지 않는다(반도체 장비 사이클은 8년 GAAP PER 이력에서도 10.1배~26.3배로 크게 진동했다). 그렇다고 FY2024 쪽 (21.49)만 쓰지도 않는다 -- 두 값 모두 이미 AI 투자 확대 국면 안에서 관측된 것이라, 이보다 더 낮은 '사이클 저점' 비GAAP 배수를 뒷받침할 자료가 없다. 2개 관측치의 단순평균(22.96)에서 소폭 아래인 22배를 택해, 더 최근·더 높은 관측치 쪽으로 전량 반영하지 않으면서도 없는 자료를 근거로 임의로 더 낮추지 않는다. 이 선택 자체는 표본이 작다는 한계 위의 분석자 판단이며, 더 낮게(비GAAP 장기 이력이 확보되면 재검토) 혹은 더 높게(AI 프리미엄 유지) 갈 경우의 영향은 아래 범위·스트레스 시나리오에서 함께 보여준다.\n[2026-09-22 5차 개정 -- 봄이 재지적 반영] 18배(직전)->22배(이번)로 오른 것을 'EPS 기준 정렬 효과' 하나로 설명하면 부정확하다 -- 같은 두 해·같은 가격에서 분모만 GAAP->조정으로 바꾸면 오히려 배수는 24.08배->22.96배로 내려간다(정의 효과는 음수). 실제 상승分의 대부분은 8년 GAAP 평균 (17.65배)에서 최근 2년으로 표본을 좁힌 효과(+36%p 수준)에서 온다. 세 효과(표본기간·정의·정책선택)를 순서대로 분해한 것이 EVIDENCE_BASE.valuation_multiples.exit_per_selection_decomposition이다. 또한 조정 EPS 자체는 공식적으로 FY2022($7.70)·FY2023($8.05)까지 공개돼 있다 -- 조정 EPS가 공개된 연도 자체가 두 해뿐인 것처럼 표현했던 것은 부정확했고, 이 프로젝트가 동일 가격 관측 규칙으로 계산 가능한 표본이 가격 캐시 보관기간(2024-09월 이후) 제약으로 두 해뿐이라는 뜻으로 정정한다.",
        "no_reverse_engineering": "이 가정들은 '현재 주가와 비슷한 결과가 나오도록' 거꾸로 고른 것이 아니다 -- 추천 기준안(성장 8.82%·출구PER 22배)의 목표주가·매입가 상한은 현재 비교가격과 독립적으로 계산되며, 그 결과가 현재가보다 높을 수도 낮을 수도 있다는 것을 그대로 보여준다. 현재가에 맞추기 위해 이 숫자들을 사후에 조정하지 않았다. 이번 개정으로 목표주가가 이전(9%·18배, 약 $469)보다 오히려 높아졌는데, 그 원인은 '기준을 정렬했더니 배수가 올라간 것' 하나가 아니다(2026-09-22 5차 개정, 봄이 재지적 반영해 정정) -- 실제로는 8년 표본을 최근 2년으로 좁힌 효과(+36%p 수준)가 가장 크고, GAAP->조정 EPS 정의 효과는 오히려 음수(-4.7%p)이며, 22배를 고른 분석자 정책 선택도 음수(-4.2%p)다(EVIDENCE_BASE.valuation_multiples.exit_per_selection_decomposition). 성장률은 9%->8.82%로 소폭 낮아졌다. 이 사실들을 종합해도 '가격을 올리기 위해 가정을 바꿨다'는 뜻은 아니다 -- 원인을 정확하게 분해해 보여주는 것이 목적이며, 두 갈래 효과(성장률 변화 vs 출구배수 변화)의 가격 영향은 compute_amat_long_term_scenario 호출부가 _decompose_growth_and_per_effect로, 출구배수 자체가 왜 그 값인지는 exit_per_selection_decomposition으로 각각 보여준다.",
        "assumption_vs_fact_note": "요약: FY2027 EPS는 '지금 관측된 컨센서스'이고, 이후 성장률·출구PER·요구수익률은 전부 분석자가 근거(과거 실적 이력·GAAP/조정 EPS 구분·사업부문별 매출 비중과 가이던스·정의를 맞춘 밸류에이션 관측값)를 조사해 선택한 가정이다. 회사가 확정한 전망이나 통계적으로 검증된 값이 아니다.",
        "primary_vs_codex_initial": "이 모듈의 기본 가정은 성장 연 8.82%·출구PER 22배(추천 기준안, 2026-09-22 4차 개정 -- EPS/PER 기준 일치 + 성장률 도출·달성조건 역산 분리)다. 2026-09-19 최초 제안이었던 성장 10%·출구PER 24배(Codex 초안)는 삭제하지 않고 비교 시나리오로 계속 함께 계산한다 -- 이쪽은 '지금의 정의 미확인 forwardPE 수준 배수가 상당 부분 유지된다'는, 추천 기준안보다 낙관적인 가정 조합에 해당한다. 어느 쪽이 맞다고 확정하지 않으며, 두 값을 평균내지도 않는다.",
        "definition_correction_note": "2026-09-22 4차 개정: (1) base_eps(FY2027 컨센서스)가 비GAAP/조정 기준일 가능성이 높다는 점을 확인했다(교차출처, 미확정)면서도 GAAP 기준 트레일링 PER(8년 평균 17.65배)을 그대로 출구 PER로 썼던 정의 불일치를 바로잡았다 -- base_eps와 같은 기준으로 실측된 비GAAP 트레일링 배수(FY2024·FY2025 2개년 평균 22.96배)를 새 1차 근거로 삼아 출구PER을 18배→22배로 올렸다. (2) 반도체장비 부문 성장률의 근거로 인용했던 5.2%가 실은 전사 GAAP EPS CAGR이고 부문 매출 성장률이 아니었던 것을 확인, 회사 공식 자료에서 직접 확보한 부문별 실제 3년 매출 CAGR(반도체장비 3.4%·서비스 4.8%·Display -7.4%)로 교체했다. (3) 목표 EPS 성장률(9%)을 먼저 넣고 필요 주식수 감소율을 역산한 뒤 재대입해 '검증'이라 불렀던 순환 논리를 분리 -- 매출·마진·주식수(FY2025 현금흐름 검산에 근거한 독립 정책 가정 -1.0%/yr)를 각각 먼저 정하고 EPS 성장률(8.82%)을 결과로 산출하도록 재구성했다. 이전의 역산은 achievement_condition_diagnostic으로 이름을 분리해 참고용으로만 남겼다. (4) '필요 감소율이 관측 속도의 1/5라 자금 부담이 낮다'던 단정을 철회하고, 실제 FCF·capex 자료로 검산한 근거(buyback_cash_check_fy2025)로 교체했다. 이 정정의 결과로 추천 기준안이 성장 9%·출구PER 18배에서 성장 8.82%·출구PER 22배로 바뀌었다 -- 목표주가는 약 $469에서 더 올라간다. 실제 산출값은 아래를 참고할 것.\n2026-09-22 5차 개정(봄이 재지적 반영, 세 가지 추가 정정): (a) 위 (4)에서 '실제 FCF·capex 자료로 검산'했다고 한 buyback_cash_check_fy2025($3,419M/$1,702M, 89.9%)가 사실은 추정치였다 -- 순주식수 차이×평균주가(매입), 현재 분기배당을 과거 연도에 적용(배당)한 계산값이지 공식 현금흐름표 실측이 아니었다. 공식 FY2025 현금흐름표 실측값(자사주 매입 $4,895M, 배당 $1,384M, 합계는 FCF의 약 110.2%)으로 교체했고, 옛 추정치는 deprecated_estimate_musd로만 남겼다. (b) 위 (1)에서 18->22배 상승 '전부'를 EPS 기준 정렬 효과로 설명했던 것을 정정 -- 같은 표본·같은 가격에서 정의만 바꾸면 오히려 24.08->22.96배로 내려간다(exit_per_selection_decomposition.definition_effect_pct는 음수). 실제 상승의 대부분은 8년 표본을 최근 2년으로 좁힌 효과다. 조정 EPS 자체는 FY2022·FY2023도 공식 공개돼 있어(가격 캐시 보관기간 제약으로 이 프로젝트가 같은 규칙으로 계산 가능한 표본은 여전히 2개년) '공개 자료가 두 해뿐'이라는 표현도 정정했다. (c) growth_rate_derivation(설명용 딕셔너리)과 PRIMARY_GROWTH_RATE(실제 계산 상수)가 분리돼 있어, 입력을 바꿔도 설명만 바뀌고 실제 계산은 그대로였던 결함(Codex 독립검토가 AST 추출로 확인)을 고쳤다 -- 이제 둘 다 _eps_growth_from_bridge() 하나의 결과를 공유한다."
      },
      "evidence_base": {
        "eps_history": {
          "kind": "관측값(회사 공시 GAAP EPS, financials_cache.json에 이미 저장된 값 재사용 -- 새로 수집하지 않음)",
          "source": "SEC 공시 기반 자동수집 캐시(financials_cache.json, AMAT.annual) -- 이 프로젝트가 이미 매 분기 갱신 중인 값을 그대로 읽음",
          "observed_at": "2026-09-21",
          "series": [
            {
              "fiscal_year_end": "2018-10-28",
              "eps": 2.96,
              "yoy_growth": null
            },
            {
              "fiscal_year_end": "2019-10-27",
              "eps": 2.86,
              "yoy_growth": -0.034
            },
            {
              "fiscal_year_end": "2020-10-25",
              "eps": 3.92,
              "yoy_growth": 0.371
            },
            {
              "fiscal_year_end": "2021-10-31",
              "eps": 6.4,
              "yoy_growth": 0.633
            },
            {
              "fiscal_year_end": "2022-10-30",
              "eps": 7.44,
              "yoy_growth": 0.163
            },
            {
              "fiscal_year_end": "2023-10-29",
              "eps": 8.11,
              "yoy_growth": 0.09
            },
            {
              "fiscal_year_end": "2024-10-27",
              "eps": 8.61,
              "yoy_growth": 0.062
            },
            {
              "fiscal_year_end": "2025-10-26",
              "eps": 8.66,
              "yoy_growth": 0.006
            }
          ],
          "note": "실제 GAAP EPS는 -3.4%(FY2019 역성장)부터 +63.3%(FY2021)까지 매우 크게 출렁였고, AI 설비투자 수퍼사이클 직전인 FY2023~FY2025 3년은 GAAP 기준 +9.0%→+6.2%→+0.6%로 뚜렷하게 둔화했다. 다만 FY2025의 GAAP +0.6%는 사업 자체의 둔화만을 뜻하지 않는다 -- 회사 공식 발표(FY2025 실적)에 따르면 같은 해 조정(non-GAAP) EPS는 $9.42로 전년 대비 +9% 증가했다(GAAP $8.66, +1%). GAAP과 조정 EPS의 차이(세금·구조조정 등 일회성/조정항목)를 분리하지 않고 GAAP 성장률만으로 '사업이 정체됐다'고 단정하지 않는다.",
          "gaap_vs_adjusted_fy2025": {
            "kind": "관측값(회사 공식 실적발표 원문 확인, 2026-09-22 재확인)",
            "gaap_eps_fy2025": 8.66,
            "gaap_eps_fy2024": 8.61,
            "gaap_yoy_growth": 0.01,
            "adjusted_eps_fy2025": 9.42,
            "adjusted_eps_fy2024": 8.65,
            "adjusted_yoy_growth": 0.09,
            "note": "회사 발표 원문: \"Record annual GAAP EPS $8.66 and record non-GAAP EPS $9.42, up 1 percent and 9 percent year over year, respectively.\" GAAP 성장 둔화의 상당 부분이 세금·조정항목 영향이지 사업 자체의 둔화만은 아니라는 근거로 쓴다 -- 그렇다고 조정 EPS의 +9%를 미래 성장률로 그대로 채택하지도 않는다(1개년 관측치일 뿐).",
            "source": "https://investors.appliedmaterials.com/static-files/4d09885a-c580-4dc7-b04e-c9513ab03206"
          },
          "derived_cagr_full_7y_fy2018_2025": 0.1657,
          "derived_cagr_recent_precycle_3y_fy2022_2025": 0.0519,
          "cagr_naming_note": "위 두 값의 정확한 이름은 '7년/3년 CAGR(연복리성장률)'이다 -- '평균'이라고 부르지 않는다."
        },
        "segment_mix": {
          "kind": "관측값(회사 공식 FY2025 실적발표 원문, 2026-09-22 확인)",
          "observed_at": "2026-09-22",
          "fiscal_year": 2025,
          "semiconductor_systems_pct_of_revenue": 0.733,
          "applied_global_services_pct_of_revenue": 0.225,
          "display_pct_of_revenue": 0.037,
          "note": "반도체장비(Semiconductor Systems)가 매출의 73.3%로 압도적 비중이며 사이클(설비투자 증감)에 가장 크게 연동된다. Applied Global Services(서비스, 22.5%)는 설치 장비 기반 유지보수·부품 매출이라 상대적으로 경기 방어적이고 회사가 스스로 장기 성장률을 제시한다(아래 가이던스 참고). Display(3.7%)는 비중이 작아 전체 성장률에 미치는 영향이 제한적이다.",
          "source": "https://investors.appliedmaterials.com/static-files/4d09885a-c580-4dc7-b04e-c9513ab03206"
        },
        "segment_revenue_history": {
          "kind": "관측값(회사 공식 FY2023·FY2025 실적발표 원문, 2026-09-22 확인)",
          "observed_at": "2026-09-22",
          "semiconductor_systems_revenue_musd": {
            "fy2022": 18797,
            "fy2023": 19698,
            "fy2024": 19911,
            "fy2025": 20798
          },
          "applied_global_services_revenue_musd": {
            "fy2022": 5543,
            "fy2023": 5732,
            "fy2024": 6225,
            "fy2025": 6385
          },
          "display_revenue_musd": {
            "fy2022": 1331,
            "fy2023": 868,
            "fy2024": 885,
            "fy2025": 1060
          },
          "derived_3y_cagr_fy2022_2025": {
            "semiconductor_systems": 0.0343,
            "applied_global_services": 0.0483,
            "display": -0.0744
          },
          "note": "반도체장비(Semiconductor Systems) 3년 실현 매출 CAGR은 약 3.4%로, 이전 버전이 인용한 5.2%(실은 전사 EPS CAGR)보다 낮다 -- 즉 실현된 부문 매출 성장은 이전에 근거로 쓰인 수치보다도 더 완만했다. Applied Global Services는 3년 CAGR 약 4.8%로, 회사가 실적콜에서 밝힌 '지속가능한 장기 중간 10%대(mid-teens)' 가이던스보다 뚜렷이 낮다 -- 이는 가이던스가 과거 3년 실현치보다 낙관적인 전망이라는 뜻이며, 이 괴리를 감추지 않고 그대로 남긴다. Display는 FY2022→FY2023 -35% 급락 후 FY2025까지도 FY2022 수준을 회복하지 못해 3년 CAGR이 -7.4%로 마이너스다 -- 매출 비중이 3.7%로 작아 전사 영향은 제한적이지만 변동성이 매우 크다.",
          "source_fy2022_2023": "https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-fourth-quarter-and-fiscal-year-2023",
          "source_fy2024_2025": "https://investors.appliedmaterials.com/static-files/4d09885a-c580-4dc7-b04e-c9513ab03206"
        },
        "valuation_multiples": {
          "kind": "관측값 + 검산(fundamentals_cache.json의 원시값은 관측값, own_ntm_forward_per는 이 프로젝트가 이미 쓰는 함수로 재계산한 검산값)",
          "observed_at": "2026-09-22",
          "base_eps_basis_check": {
            "trailing_per_basis_check": {
              "method": "trailing_annual_pe_series의 각 회계연도 말 가격(prices_cache.json 실제 종가, 회계연도 마감일 전후 거래일 평균) ÷ 해당 연도 GAAP EPS를 계산해, Finnhub PE 시리즈의 실제 값과 비교한다.",
              "fy2025_check": {
                "price_used_avg": 230.04,
                "gaap_eps": 8.66,
                "implied_pe": 26.57,
                "series_pe": 26.3343,
                "diff_pct": 0.86
              },
              "fy2024_check": {
                "price_used_avg": 185.93,
                "gaap_eps": 8.61,
                "implied_pe": 21.6,
                "series_pe": 21.2895,
                "diff_pct": 1.46
              },
              "conclusion": "두 해 모두 GAAP EPS로 나눈 역산 PE가 Finnhub 시리즈 값과 1.5% 이내로 일치한다 -- 트레일링 연간 PER 시리즈의 분모는 GAAP EPS 기준이라고 판단할 수 있는 근거가 확인됐다(완전한 공급자 문서 확인은 아니지만 독립 역산으로 뒷받침됨)."
            },
            "forward_consensus_basis_check": {
              "method": "estimates_cache.json(Yahoo Finance 컨센서스)의 epsAvg 필드 자체에는 GAAP/조정 여부를 밝히는 메타데이터가 없다 -- Yahoo 쪽 문서를 직접 확인하지 못해 이 필드의 기준을 단독으로 확정할 수는 없다. 다만 교차 출처(stockanalysis.com의 AMAT 전망 페이지)는 'EPS and Forward PE are based on non-GAAP adjusted numbers'라고 명시하며, 애널리스트 컨센서스 EPS는 업계 관행상 일반적으로 비GAAP(조정) 기준으로 집계되는 경우가 많다.",
              "status": "정의 미확정 -- 그러나 GAAP이라고 단정할 근거는 없고, 비GAAP/조정 기준일 가능성이 더 높다는 정황 증거가 있다. 이전 버전의 '미래 EPS도 같은 GAAP이라 문제없다'는 단정은 철회한다.",
              "cross_source": "https://stockanalysis.com/stocks/amat/forecast/"
            },
            "implication": "트레일링 연간 PER(GAAP 기준으로 확인됨)과 FY2027 컨센서스 EPS(비GAAP/조정 기준일 가능성이 높음, 미확정)를 그대로 묶으면 서로 다른 이익 기준을 곱하는 정의 불일치가 생긴다 -- 아래 non_gaap_matched_trailing_per에서 실제로 확보 가능한 같은 기준(비GAAP)의 트레일링 배수를 별도로 계산해, 출구 PER 선택에 그 기준-일치 배수를 우선 사용한다."
          },
          "non_gaap_matched_trailing_per": {
            "kind": "관측값 + 계산(price_cache.json 실제 종가 ÷ 회사 공식 non-GAAP 조정 EPS, 2026-09-22 계산)",
            "note_limitation": "회사가 공식적으로 GAAP/비GAAP을 함께 공개한 연도는 FY2024·FY2025 2개년뿐이다(더 이전 연도의 조정 EPS는 이 프로젝트가 수집하지 않음) -- 표본이 매우 작아(n=2) 8년 GAAP 시리즈와 같은 수준의 '정상화된 사이클 평균' 주장은 할 수 없다. 그럼에도 이 2개 값은 base_eps와 같은(비GAAP) 기준으로 확인된 유일한 실측 배수이므로, 정의가 맞지 않는 8년 GAAP 평균 대신 이를 출구 PER의 1차 근거로 쓴다.",
            "fy2025": {
              "price_used_avg": 230.04,
              "adjusted_eps": 9.42,
              "implied_pe": 24.42
            },
            "fy2024": {
              "price_used_avg": 185.93,
              "adjusted_eps": 8.65,
              "implied_pe": 21.49
            },
            "avg_2pt": 22.96,
            "source_adjusted_eps": "https://investors.appliedmaterials.com/static-files/4d09885a-c580-4dc7-b04e-c9513ab03206",
            "additional_disclosed_adjusted_eps_no_matching_price": {
              "fy2022_adjusted_eps": 7.7,
              "fy2023_adjusted_eps": 8.05,
              "note": "회사 공식 FY2023 실적발표(FY2023 대비 FY2022 비교 수치 포함)에 명시된 조정 (non-GAAP) EPS다. 같은 가격 관측 규칙(회계연도 마감일 -2~+1일 평균 종가)으로 PER을 계산하려면 2022-10-30·2023-10-29 전후의 실제 종가가 필요한데, 이 프로젝트의 prices_cache.json은 2024-09-18 이후만 보관해 자체 파이프라인으로는 재계산할 수 없다 -- 외부 소스에서 별도로 가져온 가격을 섞으면 종가 산정 규칙(배당·분할 조정 여부 등)이 달라질 수 있어 '같은 가격 관측 규칙'이 깨지므로, 이번 회차에는 신뢰할 수 없는 값을 만들어 쓰지 않는다. 표본을 4개년으로 넓히는 것은 가격 캐시 보관기간 확장이 선행돼야 하는 후속 과제로 남긴다(한계로 명시, 회피가 아님).",
              "source": "https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-fourth-quarter-and-fiscal-year-2023"
            }
          },
          "exit_per_selection_decomposition": {
            "step0_gaap_8yr_avg": 17.65,
            "step1_sample_period_narrowed_to_2yr_same_definition_gaap": 24.079083883877438,
            "sample_period_effect_pct": 0.36425404441231946,
            "step2_definition_changed_to_adjusted_same_2yr_sample": 22.957589926733185,
            "definition_effect_pct": -0.04657544126482194,
            "step3_analyst_policy_choice": 22.0,
            "policy_choice_effect_pct": -0.041711256703740984,
            "combined_pct_vs_gaap_8yr_baseline": 0.2464589235127479,
            "note": "순서대로 곱하면 원래 값이 복원된다(8yr_avg*(1+sample)*(1+definition)*(1+policy)=chosen_per). definition_effect_pct(같은 표본·같은 가격에서 이익 기준만 GAAP->조정으로 바꾼 효과)는 음수다(배수가 내려간다) -- 18->22 상승 전부를 'EPS 기준 정렬 효과'라고 부르면 부정확하다. 실제 상승分의 대부분은 8년 표본을 최근 2년으로 좁힌 sample_period_effect_pct(양수, +36%p 수준)에서 온다."
          },
          "finnhub_forward_pe_raw": 32.06094,
          "finnhub_forward_pe_definition_status": "정의 미확인 -- Finnhub 'forwardPE' 필드를 그대로 받은 값. 분모 EPS의 회계기간(달력연도/회계연도)·GAAP 또는 조정 여부가 공급자 쪽에 문서화돼 있지 않아 NTM이라고 단정하지 않는다.",
          "forward_pe_implied_eps_check": {
            "note": "forwardPE(32.06094)가 관측된 2026-09-17 종가($417.3999938964844)를 그대로 나눈 역산 EPS는 약 $13.02다. 같은 시점 estimates_cache.json의 FY2026(0y, 회계연도 마감 2026-10-31) 컨센서스 EPS $12.79441과 근접하다(공급자·관측일이 달라 완전히 같지는 않음) -- forwardPE는 향후 365일을 일수가중한 롤링 NTM이 아니라, 마감이 임박한 '다음 회계연도(FY2026) 단일 컨센서스'에 가까운 값일 가능성이 있다는 뜻이다. AMAT은 FY2026(+35.8%)에서 FY2027(+44.2%)로 이익이 크게 뛰는 구간이라, 이 두 정의의 차이가 특히 크게 벌어진다.",
            "as_of": "2026-09-17",
            "price_used": 417.3999938964844,
            "implied_eps": 13.02,
            "fy2026_consensus_eps_same_period": 12.79441
          },
          "own_ntm_forward_per": 24.91,
          "own_ntm_forward_per_definition": "이 대시보드의 상대가치(관련값) 카드가 이미 쓰는 것과 동일한 정의: amat_calc_engine.blend_ntm_eps_from_annual_estimates로 FY2026(0y)·FY2027(+1y) 컨센서스 EPS를 관측일 기준 향후 365일 창에 일수가중 평균한 값. 2026-09-22 상대가치 스냅샷 기준 NTM EPS $17.84998227 ÷ 비교가격 $444.5700073 = 약 24.91배(사용자 검토에서 독립 재계산한 값과 일치, 이 프로젝트 자체 재계산으로도 ~24.99배로 거의 동일).",
          "current_ntm_forward_per": 24.91,
          "trailing_3y_avg_per": 21.2,
          "current_ttm_trailing_per": 36.26,
          "trailing_annual_pe_series": {
            "kind": "관측값(Finnhub metric=all 응답의 series.annual.pe, 2026-09-22 직접 조회 -- 최신순 정렬 확인됨)",
            "series": [
              {
                "fiscal_year_end": "2025-10-26",
                "pe": 26.3343
              },
              {
                "fiscal_year_end": "2024-10-27",
                "pe": 21.2895
              },
              {
                "fiscal_year_end": "2023-10-29",
                "pe": 15.9876
              },
              {
                "fiscal_year_end": "2022-10-30",
                "pe": 11.6409
              },
              {
                "fiscal_year_end": "2021-10-31",
                "pe": 21.394
              },
              {
                "fiscal_year_end": "2020-10-25",
                "pe": 15.0178
              },
              {
                "fiscal_year_end": "2019-10-27",
                "pe": 19.4412
              },
              {
                "fiscal_year_end": "2018-10-28",
                "pe": 10.0694
              }
            ],
            "avg_recent_3y_fy2023_2025": 21.2038,
            "avg_full_8y_fy2018_2025": 17.65,
            "note": "이 8개 값은 모두 GAAP EPS 기준으로 확인됐다(base_eps_basis_check.trailing_per_basis_check 참고). base_eps(FY2027 컨센서스)가 비GAAP/조정 기준일 가능성이 높다고 확인된 이상, 이 GAAP 기준 시리즈를 그 EPS에 직접 곱하는 것은 정의 불일치다 -- 2026-09-22 4차 개정 이후 이 시리즈는 '과거 GAAP 기준 배수의 참고 이력'으로만 남기고, 출구 PER 선택은 아래 non_gaap_matched_trailing_per(같은 비GAAP 기준으로 확인된 실측값)를 우선 근거로 쓴다. 최근 3개년(15.99→21.29→26.33)이 단조 상승 중이라는 관찰 자체는 유지되며, 8년 전체 평균(17.65)도 참고 수치로 남긴다."
          },
          "note": "정의를 맞춰 비교하면: Finnhub forwardPE(32.06, 정의 미확인) > 이 프로젝트 자체 계산 NTM PER(약 24.91, 상대가치 카드와 동일 방법론, 컨센서스 기준이라 base_eps와 같은 비GAAP 계열일 가능성) > 비GAAP 기준 실측 트레일링 평균(22.96, n=2) > GAAP 기준 트레일링 3년 평균(21.20, 단조 상승 중) > GAAP 기준 트레일링 8년 평균(17.65). 이전 버전의 'NTM이 트레일링 3년 평균보다 +51% 높다'는 서로 다른 정의를 비교한 것이라 고평가 근거로 쓰지 않는다. 출구 PER 추천의 1차 근거는 base_eps와 기준이 맞는 non_gaap_matched_trailing_per(비GAAP 실측 2개년 평균 22.96)로 삼는다 -- GAAP 기준 8년 평균(17.65)은 표본이 크지만 기준이 맞지 않아 직접 채택하지 않는다."
        },
        "current_cycle_guidance": {
          "kind": "관측값(회사 공식 Q3 FY2026 실적콜 원문, 2026-09-22 확인 -- 이전 버전의 2차 기사 요약을 공식 원문으로 교체)",
          "observed_at": "2026-09-22 조사",
          "items": [
            "패키징(advanced packaging) 매출은 '2026 달력연도(calendar 2026)'에 70%를 초과해 성장할 것으로 전망한다고 경영진이 직접 밝혔다 -- 회계연도(FY) 전체가 아니라 달력연도 기준이며, 이전 버전은 낡은 2차 기사 요약을 썼는데 이 원문 수치로 교체한다(교체 이력은 assumption_review.definition_correction_note 참고).",
            "Applied Global Services(서비스)는 2026 달력연도에 20% 넘게 성장할 것으로 보되, 회사는 이와 별도로 '지속가능한 장기 연간 성장률은 중간 10%대(mid-teens)'라고 명시적으로 밝혔다 -- 이 부분은 근일 사이클 수치가 아니라 회사가 스스로 제시한 장기 지속가능 성장률이라는 점에서 성장 경로 추천에 직접 참고할 수 있는 자료다.",
            "생산능력: 2028년까지 분기 장비 출하량(quarterly system output)을 현재 대비 2배로 늘리는 것이 목표이며, 2030년 수요 증가에 대비한 추가 증설도 계획 중이라고 밝혔다 -- 수요를 보증하는 것이 아니라 공급능력 계획이므로, 실제 매출로 이어지려면 가동률·수요가 함께 확인돼야 한다.",
            "이런 회사 전망은 확정된 미래 실적이 아니며, 특히 패키징 +70%는 단일 세부영역의 달력연도 성장률이라 전사 EPS 성장률로 직접 치환하지 않는다. 다만 AGS의 '지속가능한 장기 중간 10%대' 발언은 전사 성장 경로를 정할 때 과거 평균으로만 회귀한다는 판단에서 빠뜨리면 안 되는 근거다."
          ],
          "sources": [
            "https://ir.appliedmaterials.com/static-files/e9985149-77c2-4cf3-aaad-a579178cbfe4"
          ]
        },
        "buyback_and_margin": {
          "kind": "관측값(financials_cache.json에 이미 저장된 발행주식수·영업이익률 이력 재사용, 2026-09-22 재확인 -- 새로 수집하지 않음)",
          "observed_at": "2026-09-22",
          "operating_margin_fy2018_2025_range_pct": [
            22.9,
            30.2
          ],
          "operating_margin_note": "8년간 영업이익률은 22.9%~30.2% 범위에서 등락했고 최근 4개년(FY2022~2025)은 28.9~30.2%로 비교적 안정적이다 -- 장기 마진이 추세적으로 계속 확장된다고 가정하지 않고, 최근 수준에서 대체로 유지된다고 본다.",
          "shares_outstanding_recent_yoy_change_pct": -2.55,
          "buyback_cash_check_fy2025": {
            "kind": "관측값(회사 FY2025 공식 현금흐름표 실측치, 2026-09-22 5차 개정 확인 -- 4차 개정의 추정치를 대체)",
            "fcf_musd": 5698,
            "actual_buyback_musd": 4895,
            "actual_dividends_paid_musd": 1384,
            "actual_stock_issuance_proceeds_musd": 261,
            "actual_buyback_plus_dividend_pct_of_fcf": 110.2,
            "actual_net_buyback_plus_dividend_pct_of_fcf": 105.62,
            "capex_musd": {
              "fy2024": 1190,
              "fy2025": 2260
            },
            "deprecated_estimate_musd": {
              "note": "4차 개정이 '실제 현금검산'으로 잘못 제시했던 추정치 -- 공식 실측값이 있으므로 더 이상 쓰지 않는다. 오류 이력 추적용으로만 남긴다.",
              "estimated_net_buyback_spend_musd": 3419,
              "estimated_dividend_paid_musd": 1702,
              "estimated_pct_of_fcf": 89.9
            },
            "note": "FY2025 공식 현금흐름표 기준 자사주 매입+배당은 FCF의 약 110.2%(발행대금을 차감한 단순 순현금 기준으로도 약 105.6%)로, FCF만으로는 이미 부족했다는 뜻이다 -- 현금잔고 축소나 그 외 재무활동으로 메운 것으로 보이나, 이 프로젝트는 재무활동 전체를 재구성한 완전한 자본배분표를 만들지 않으며 주식보상 원천징수 등 세부 항목까지는 배분하지 않는다(한계로 명시). 4차 개정의 '89.9%, 여유가 크지 않은 정도'라는 표현은 추정치에 근거해 실제보다 낙관적이었으므로 철회한다. FCF는 이미 capex 차감 후 값이므로 아래 future_share_count_policy_check에서 capex를 다시 빼지 않는다.",
            "source": "AMAT FY2025 공식 실적발표 현금흐름표, https://investors.appliedmaterials.com/static-files/4d09885a-c580-4dc7-b04e-c9513ab03206"
          },
          "future_share_count_policy_check": {
            "kind": "분석자 정책 가정(위 buyback_cash_check_fy2025 실측과 분리 -- 2026-09-22 5차 개정 신규)",
            "note": "buyback_cash_check_fy2025는 FY2025 '한 해'의 실측(과거 사실)이다. 향후(FY2028~FY2031) 자사주 순감소율 가정은 이 실측과 별도이며, '실측이 이미 FCF의 110%를 넘는 수준이라 그대로 이어가기 어렵다'는 방향성만 근거로 쓰고 구체적인 미래 달러 예산을 정교하게 역산하지는 않는다 -- 회사의 향후 부채 여력·현금잔고 정책·주식보상 발행 규모를 공시만 으로 재구성할 수 없기 때문이다(한계로 명시, 완전한 자본배분표가 아님). 관측된 최근 순감소 속도(-2.55%/yr)는 이미 자사주 매입에서 주식보상 등 신규 발행분을 차감한 순(net) 수치이므로, 아래 가정도 같은 net 개념으로 읽는다(총매입에서 희석을 이중 차감하지 않는다). capex는 FCF 계산에 이미 반영돼 있으므로 이 정책 가정에서 별도로 다시 빼지 않는다.",
            "assumption_pct": -1.0,
            "assumption_basis": "실측(FY2025 buyback+dividend가 FCF의 110.2%, 발행대금 차감 기준 105.6%)이 이미 FCF 한도를 넘어섰고, capex가 FY2024 대비 거의 두 배로 늘어난 상태에서 2028년 생산능력 추가 확대까지 계획돼 있어 향후 FCF 중 자사주 매입에 쓸 수 있는 몫이 더 좁아질 가능성이 있다 -- 이 방향성 하나만 근거로, 관측된 순감소 속도(-2.55%/yr)의 약 40% 수준인 -1.0%/yr로 독립적으로 보수화한다. 이 비율 자체를 현금흐름표에서 역산한 것이 아니라는 점을 명시한다(그런 역산은 신뢰할 만한 미래 부채·현금정책 가정 없이는 불가능하다)."
          }
        },
        "revenue_to_eps_bridge": {
          "kind": "분석자 계산(위 관측값들을 조합한 단순화된 연결식 -- 완전한 부문별 손익계산서 재구성이 아니다. 회사가 부문별 법인세·순이자를 매출만큼 세부적으로 공시하지 않아 한계가 있음을 명시한다)",
          "growth_rate_derivation": {
            "note": "아래 세 입력(매출·마진, 주식수)은 전부 EPS 성장률과 무관하게 독립적으로 먼저 정하고, 그 결과로 EPS 성장률을 계산한다 -- 목표 EPS 성장률을 미리 넣지 않는다. 이 블록의 숫자는 전부 _eps_growth_from_bridge()의 실제 계산 결과이며(하드코딩된 별도 숫자가 아님), PRIMARY_GROWTH_RATE도 같은 함수의 같은 결과를 그대로 쓴다.",
            "step1_segment_weighted_revenue_growth": {
              "inputs": [
                {
                  "segment": "Semiconductor Systems",
                  "revenue_share_fy2025": 0.733,
                  "assumed_annual_growth": 0.06,
                  "basis": "실제 3년 실현 매출 CAGR(segment_revenue_history.derived_3y_cagr_fy2022_2025, 약 3.4%)을 기준선으로 삼되, 첨단 패키징(CY2026 +70% 초과 공식 가이던스)이 이 부문 내 신성장 하위영역이라는 점을 반영해 소폭 상향(분석자 판단, 회사가 부문 전체 성장률을 직접 제시하지는 않으며 패키징의 정확한 매출 비중도 공개되지 않아 가중치를 계량화하지는 못함 -- 한계로 명시)"
                },
                {
                  "segment": "Applied Global Services",
                  "revenue_share_fy2025": 0.225,
                  "assumed_annual_growth": 0.14,
                  "basis": "실제 3년 실현 매출 CAGR은 약 4.8%(segment_revenue_history)로 이보다 낮다. 그럼에도 14%를 쓰는 것은 회사가 실적콜에서 직접 밝힌 '지속가능한 장기 중간 10%대(mid-teens)' 가이던스를 과거 실현 평균보다 우선했기 때문이다 -- 이는 전망을 실현치로 착각한 것이 아니라, 회사가 스스로 제시한 전방 지향적 목표를 신뢰하기로 한 분석자 판단이며, 실현 평균과의 괴리(4.8% vs 14%)를 감추지 않고 그대로 밝힌다."
                },
                {
                  "segment": "Display",
                  "revenue_share_fy2025": 0.037,
                  "assumed_annual_growth": 0.05,
                  "basis": "실제 3년 CAGR은 -7.4%(FY2022→FY2023 급락 이후 미회복)로 매우 변동성이 크고 추세를 신뢰하기 어렵다. 매출 비중이 작아(3.7%) 전사 영향이 제한적이라는 점을 근거로, 최근 1년 반등(FY24→25 +19.8%)과 3년 CAGR 사이의 중간값보다 낮은 보수적 수치를 씀 -- 확신도가 가장 낮은 가정임을 명시한다."
                }
              ],
              "formula": "sum(revenue_share_fy2025 * assumed_annual_growth) -- FY2025 매출 비중을 FY2028~FY2031에도 그대로 유지한다고 가정한 단순화(부문별 비중 변화 자체는 반영하지 않음, 한계로 명시)",
              "result": 0.07733000000000001
            },
            "step2_operating_income_and_below": {
              "assumption": "영업이익률은 최근 4개년 안정 구간(28.9~30.2%, buyback_and_margin.operating_margin_note)에서 유지된다고 가정 -- 즉 영업이익도 매출과 같은 성장률로 성장한다고 본다(마진 추세적 확장은 가정하지 않음). 법인세율·순이자·본사 미배분 비용은 부문별 공시가 없어 개별 재구성이 불가능하므로, 영업이익 대비 비율이 일정하게 유지된다고 가정한다(즉 순이익도 영업이익과 같은 비율로 성장 -- 세율 변동이나 순이자 변화는 이 시나리오에 반영하지 않은 단순화이며, 한계로 명시한다).",
              "implied_net_income_growth": 0.07733000000000001
            },
            "step3_independent_share_count_assumption": {
              "assumption_pct": -1.0,
              "basis": "관측된 최근 1년 속도(-2.55%/yr)를 그대로 쓰지 않고 독립적으로 더 보수적인 -1.0%/yr를 가정한다 -- 근거는 buyback_and_margin.future_share_count_policy_check다: FY2025 공식 현금흐름표 실측상 자사주 매입+배당이 이미 FCF의 약 110%(발행대금 차감 기준 약 106%)를 차지했고, capex가 FY2024 대비 거의 두 배(2028년 생산능력 추가 확대 계획과 맞물림)로 늘어 향후 FCF 여유가 더 좁아질 수 있다는 방향성을 반영했다. 이 값은 목표 EPS 성장률을 만들기 위해 역산한 것이 아니라, 자금 여력 판단만으로 먼저 정한 정책 가정이다(구체적 미래 달러 예산까지 정교하게 역산한 것은 아님, 한계로 명시)."
            },
            "step4_resulting_eps_growth": {
              "formula": "eps_growth = (1+net_income_growth)/(1+share_count_assumption_pct/100) - 1 -- share_count_assumption_pct는 buyback_and_margin의 관측치와 같은 부호 관례(음수=감소)를 쓴다. _eps_growth_from_bridge()의 실제 계산 결과이며, PRIMARY_GROWTH_RATE도 이 함수의 같은 결과를 그대로 쓴다(딕셔너리 따로·상수 따로가 아님).",
              "result": 0.08821212121212119
            }
          },
          "achievement_condition_diagnostic": {
            "kind": "별도 진단(성장률 선택의 근거가 아님 -- 산술 항등식, _achievement_condition_diagnostic()로 계산, growth_rate_derivation과 별개 함수라 PRIMARY_GROWTH_RATE에 영향을 주지 않는다)",
            "note": "이 역산(목표 EPS 성장률을 먼저 넣고 필요 주식수 감소율을 구한 뒤 다시 대입)을 '검증'이라고 부르지 않는다 -- growth_rate_derivation과 독립적인 검증이 아니라 같은 식을 반대 방향으로 푼 것뿐이다. 참고용으로만 남긴다: 만약 목표 EPS 성장률을 9%로 고정한다면, 순이익 성장(약 7.73%) 가정하에서 필요한 주식수 감소율은 약 -1.16%다(2026-09-22 5차 개정 -- 4차 개정의 오기 -0.996%를 정정, 정확한 값은 약 -1.16%다). 이는 위 growth_rate_derivation에서 독립적으로 고른 -1.0%/yr와 비슷한 수준(약 0.16%p 차이)이지만, 두 계산이 서로 다른 방향에서 비슷한 결론에 도달했다는 뜻이지 순환 검증이 아니다.",
            "computed": {
              "hypothetical_target_eps_growth": 0.09,
              "net_income_growth_used": 0.07733000000000001,
              "required_share_count_assumption_pct": -1.1623853211009338
            }
          },
          "overall_note": "매출 7.73%(부문 가중, 실제 3년 실현 CAGR을 기준선으로 삼고 회사 가이던스로 조정) -> 영업이익·순이익도 같은 비율로 성장(마진·세율·순이자 고정 가정, 한계로 명시) -> 독립적으로 정한 주식수 감소 -1.0%/yr(FY2025 공식 현금흐름표 실측 근거) -> 결과 EPS 성장률(약 8.82%, _eps_growth_from_bridge()의 실제 계산값). 이 값은 9%를 먼저 정하고 역산한 결과가 아니라, 매출·이익·주식수 가정을 각각 선정한 뒤 EPS 성장률이 산출값으로 나온 것이며, 설명 딕셔너리와 PRIMARY_GROWTH_RATE가 같은 함수·같은 결과를 공유한다(2026-09-22 5차 개정 신규 연결)."
        },
        "cycle_characterization": {
          "kind": "분석자 판단(위 관측값들을 조합해 내린 해석 -- 그 자체가 사실은 아님)",
          "text": "반도체장비 업종은 설비투자 사이클에 강하게 연동돼, 실적과 배수가 함께 오르내리는 경향이 이 종목 자신의 8년 EPS 이력(역성장~63% 성장)과 8년 트레일링 PER 이력(10.1배~26.3배)에서도 확인된다. 지금은 AI 데이터센터발 설비투자 확대로 사이클의 상승 구간(FY2026~FY2027 급성장, 패키징 CY2026 +70%대) 한가운데에 있다. 다만 회사 매출의 73.3%를 차지하는 반도체장비 (Semiconductor Systems) 부문은 이 사이클성이 가장 강하고, 22.5%를 차지하는 서비스(AGS) 부문은 회사가 스스로 '지속가능한 장기 중간 10%대 성장'이라고 밝힌 만큼 상대적으로 안정적인 성장 기반이다 -- 다만 AGS의 실제 3년 실현 매출 CAGR(약 4.8%, segment_revenue_history)은 이 가이던스보다 낮아, 가이던스를 우선한 이상 그 괴리를 인식한 채로 쓴다는 것을 의미한다. 이 둘을 매출 비중으로 가중해 전사 장기 성장 경로를 추정하는 것이, FY2028 이후에도 현재 급성장률(연 35~44%)이 그대로 이어진다고 가정하는 것이나, 반대로 부문별 실제 3년 실현 CAGR(반도체장비 3.4%·서비스 4.8%)로만 되돌아간다고 가정하는 것보다 사업 구성과 회사 가이던스를 함께 반영한 접근이라고 본다."
        }
      },
      "as_of_execution": "2026-09-26",
      "growth_rate_assumption": 0.08821212121212119,
      "exit_per_assumption": 22.0,
      "is_primary_recommended_assumption": true,
      "primary_growth_rate": 0.08821212121212119,
      "primary_exit_per": 22.0,
      "primary_review_by": "2026-12-31",
      "codex_initial_growth_rate": 0.1,
      "codex_initial_exit_per": 24.0,
      "growth_years": 4,
      "base_fiscal_year": 2027,
      "target_fiscal_year": 2031,
      "estimates_fetched_at": "2026-09-26",
      "estimates_age_days": 0,
      "base_eps_fact": 18.45479,
      "base_eps_end_date": "2027-10-31",
      "base_eps_analysts": 34,
      "target_date": "2031-10-31",
      "eps_path_fy2028_to_fy2031": [
        20.08272617242424,
        21.854266047815965,
        23.78207721342785,
        25.879944691254774
      ],
      "target_eps_fy2031": 25.879944691254774,
      "target_price": 569.358783207605,
      "comparison_price": 485.0,
      "comparison_price_as_of": "2026-09-25",
      "base_scenario": {
        "blocked": false,
        "holding_period_actual_days": 1862,
        "holding_period_actual_years": 5.101369863013699,
        "cashflows_by_year": {
          "1": 2.12,
          "2": 2.12,
          "3": 2.12,
          "4": 2.12,
          "5": 2.12,
          "5.101369863013699": 569.5736873171941
        },
        "cashflow_note": {
          "approximation_note": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 5.1014년), 매도 시점의 부분연도에는 연배당의 10.1%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다."
        },
        "ceilings_by_required_return": {
          "0.08": {
            "blocked": false,
            "required_return": 0.08,
            "max_purchase_price": 393.0943894654281,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          },
          "0.1": {
            "blocked": false,
            "required_return": 0.1,
            "max_purchase_price": 358.2964501842266,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          },
          "0.12": {
            "blocked": false,
            "required_return": 0.12,
            "max_purchase_price": 327.14191798716513,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          }
        },
        "conditional_annualized_return_at_comparison_price": {
          "status": "SUCCESS",
          "rate": 0.03603910102456208,
          "residual": 2.943920662801247e-10,
          "note": "solve_implied_rate와는 별개의 신규 수치해 함수 -- P05/P10 근거로 대체하지 않음"
        }
      },
      "codex_initial_scenario": {
        "label": "2026-09-19 Codex 최초 제안(성장 연 10% · 출구PER 24배) -- 대표 가정이 아닌 비교용으로 계속 함께 계산한다. 대표 가정과의 차이는 위 evidence_base/assumption_review에서 설명.",
        "growth_rate": 0.1,
        "exit_per": 24.0,
        "eps_path_fy2028_to_fy2031": [
          20.300269,
          22.330295900000003,
          24.563325490000004,
          27.019658039000007
        ],
        "target_eps_fy2031": 27.019658039000007,
        "target_price": 648.4717929360002,
        "scenario": {
          "blocked": false,
          "holding_period_actual_days": 1862,
          "holding_period_actual_years": 5.101369863013699,
          "cashflows_by_year": {
            "1": 2.12,
            "2": 2.12,
            "3": 2.12,
            "4": 2.12,
            "5": 2.12,
            "5.101369863013699": 648.6866970455892
          },
          "cashflow_note": {
            "approximation_note": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 5.1014년), 매도 시점의 부분연도에는 연배당의 10.1%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다."
          },
          "ceilings_by_required_return": {
            "0.08": {
              "blocked": false,
              "required_return": 0.08,
              "max_purchase_price": 446.5189511728183,
              "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
            },
            "0.1": {
              "blocked": false,
              "required_return": 0.1,
              "max_purchase_price": 406.9470848587206,
              "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
            },
            "0.12": {
              "blocked": false,
              "required_return": 0.12,
              "max_purchase_price": 371.52000417727834,
              "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
            }
          },
          "conditional_annualized_return_at_comparison_price": {
            "status": "SUCCESS",
            "rate": 0.06249791699792692,
            "residual": -3.5339553505764343e-10,
            "note": "solve_implied_rate와는 별개의 신규 수치해 함수 -- P05/P10 근거로 대체하지 않음"
          }
        }
      },
      "required_return_ceilings": {
        "8%": 393.0943894654281,
        "10%": 358.2964501842266,
        "12%": 327.14191798716513
      },
      "conditional_annualized_return_at_comparison_price": 0.03603910102456208,
      "conditional_annualized_return_status": "SUCCESS",
      "default_required_return": 0.1,
      "default_ceiling_price": 358.2964501842266,
      "like_for_like_comparison_note": "target_price($569.36, FY2031 시점의 할인 전 미래 목표주가)와 default_ceiling_price($358.30, 오늘 현재가치로 할인한 연 10% 요구수익률 매입가 상한)는 서로 다른 의미의 가격이다. 기존 잠정 대표가격(약 $407~410, 요구수익률 기준 매입가 상한 개념)과 같은 뜻으로 비교할 값은 target_price가 아니라 default_ceiling_price다.",
      "return_condition_met_at_default_required_return": false,
      "state_label": "수익조건 미충족",
      "blocked": false,
      "long_term_thesis_confirmation_note": "화면의 '사업 전제' 표시는 최신 분기 매출·영업이익이 동시에 둔화하지 않았는지만 확인한다 -- 이는 '최근 실적 방향'이며, 향후 4년(FY2028~FY2031) EPS 성장 경로(대표 가정 연 8.82%, 2026-12-31 재검토 예정)가 실제로 달성 가능한지를 확인한 것이 아니다. 장기 사업 전제(웨이퍼설비투자 사이클, 첨단 패키징·공정 복잡도, 제품 믹스, 마진, 재투자 부담, 경쟁·규제 영향)는 evidence_base의 current_cycle_guidance/cycle_characterization에 근거를 남기되, 정기적으로(예: 분기 실적 발표마다) 재확인이 필요한 상태로 표시하며 '확인 완료'로 표시하지 않는다.",
      "long_term_thesis_confirmed": false,
      "price_return_table": [
        {
          "purchase_price": 298.3,
          "status": "SUCCESS",
          "annualized_return": 0.14067631285990953
        },
        {
          "purchase_price": 328.3,
          "status": "SUCCESS",
          "annualized_return": 0.1192160979785285
        },
        {
          "purchase_price": 358.3,
          "status": "SUCCESS",
          "annualized_return": 0.0999978419381477
        },
        {
          "purchase_price": 393.3,
          "status": "SUCCESS",
          "annualized_return": 0.07988823593452704
        },
        {
          "purchase_price": 448.3,
          "status": "SUCCESS",
          "annualized_return": 0.05228387424886019
        },
        {
          "purchase_price": 485.0,
          "status": "SUCCESS",
          "annualized_return": 0.03603910102456208
        }
      ],
      "range_growth_fixed_exit_per_sensitivity": {
        "note": "성장률을 대표 가정(8.82%)으로 고정하고 출구PER만 20~25배(base_eps와 같은 비GAAP 기준으로 실측된 트레일링 배수 2개년 범위를 근거로 재설정, 기준이 다른 GAAP 이력이 아님)로 바꾼 민감도 범위다 -- 모든 위험을 포함한 신뢰구간이나 바닥가격이 아니다. 확률을 검증하지 않았으므로 임의의 성공확률을 붙이지 않는다.",
        "scenarios": {
          "low": {
            "exit_per": 20.0,
            "growth_rate": 0.08821212121212119,
            "target_price": 517.5988938250955,
            "ceiling_at_default_required_return": 326.46664775620866
          },
          "high": {
            "exit_per": 25.0,
            "growth_rate": 0.08821212121212119,
            "target_price": 646.9986172813693,
            "ceiling_at_default_required_return": 406.0411538262538
          }
        }
      },
      "stress_scenarios": {
        "note": "확률을 검증하지 않았으므로 임의의 성공확률을 붙이지 않는다. 단기 신호의 높은 승률을 이 장기 기준가격의 검증 근거로 대신 사용하지 않는다. decomposition_vs_primary는 대표 가정(성장 8.82%·PER 22배) 대비 성장률만/출구PER만/둘 다 바꿨을 때의 효과를 분리해서 보여준다 -- 결합효과를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다.",
        "scenarios": {
          "stress_low": {
            "label": "성장 연 3.3%(부문별 실제 3년 실현 매출 CAGR 가중, 회사 가이던스 미반영) · 종료 PER 18배(비GAAP 실측 범위 하단 이하 약세 가정)",
            "growth_rate": 0.033,
            "exit_per": 18.0,
            "target_eps": 21.014080602935923,
            "target_price": 378.25345085284664,
            "ceiling_at_default_required_return": 240.7760102381519,
            "decomposition_vs_primary": {
              "base_price": 569.358783207605,
              "growth_only_price": 462.3097732645903,
              "growth_only_pct": -0.1880167885352204,
              "per_only_price": 465.8390044425859,
              "per_only_pct": -0.18181818181818188,
              "combined_price": 378.25345085284664,
              "combined_pct": -0.33565009971063486,
              "note": "성장률만 바꾼 효과와 출구PER만 바꾼 효과를 각각 보여준다 -- 결합효과(둘 다 바꿨을 때)를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다."
            }
          },
          "stress_high": {
            "label": "성장 연 14%(AGS 장기 가이던스 수준 전사 확대) · 종료 PER 27배(AI 사이클 프리미엄 유지·확대 가정)",
            "growth_rate": 0.14,
            "exit_per": 27.0,
            "target_eps": 31.16940507116641,
            "target_price": 841.573936921493,
            "ceiling_at_default_required_return": 525.6954663721071,
            "decomposition_vs_primary": {
              "base_price": 569.358783207605,
              "growth_only_price": 685.726911565661,
              "growth_only_pct": 0.20438453184558103,
              "per_only_price": 698.758506663879,
              "per_only_pct": 0.2272727272727273,
              "combined_price": 841.573936921493,
              "combined_pct": 0.4781082890832129,
              "note": "성장률만 바꾼 효과와 출구PER만 바꾼 효과를 각각 보여준다 -- 결합효과(둘 다 바꿨을 때)를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다."
            }
          },
          "stress_zero_growth": {
            "label": "FY2027 이후 성장 0% · 종료 PER 15배(비GAAP 기준 장기 이력이 없어 GAAP 8년 저점권 10~15배대를 참고한 예시적 하방)",
            "growth_rate": 0.0,
            "exit_per": 15.0,
            "target_eps": 18.45479,
            "target_price": 276.82185,
            "ceiling_at_default_required_return": 178.40053274737753,
            "decomposition_vs_primary": {
              "base_price": 569.358783207605,
              "growth_only_price": 406.00538,
              "growth_only_pct": -0.28690767232450254,
              "per_only_price": 388.1991703688216,
              "per_only_pct": -0.3181818181818181,
              "combined_price": 276.82185,
              "combined_pct": -0.5138006856757973,
              "note": "성장률만 바꾼 효과와 출구PER만 바꾼 효과를 각각 보여준다 -- 결합효과(둘 다 바꿨을 때)를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다."
            }
          }
        }
      }
    },
    "valuation": {
      "kind": "independent_value_dcf_scenario_engine",
      "asOf": "2026-09-26",
      "valuationAnchorDate": "2026-07-26",
      "runId": "AMAT_REAL_20260926T000108150390",
      "scenarioFamilyId": "AMAT_SCEN_FAMILY_20260926T000108127860",
      "engineVersion": "amat_calc_engine v4 (2026-09-18, 모델 채택 검토) -- D&A/CapEx 비율 곡선을 FY2025 실측 대조로 조정(min(0.60,0.20+0.10*(i+1)) -> min(0.45,0.19+0.065*i)), 계산 결과가 달라짐(v3 대비). 과거 실행은 각자 저장된 code_snapshots로 그 시점 값 그대로 재현 가능.",
      "isReplayFixture": false,
      "px": 191.136121572667,
      "priceState": "PRICE_STRETCHED",
      "scenarios": {
        "conservative": {
          "px": 178.59090335279433,
          "growthY1": 0.3134993682913383,
          "roic": 0.18,
          "ntmValue": 40504380020.0,
          "runId": "AMAT_REAL_20260926T000108134952"
        },
        "base": {
          "px": 191.136121572667,
          "growthY1": 0.38220422220060324,
          "roic": 0.22,
          "ntmValue": 42623031600.0,
          "runId": "AMAT_REAL_20260926T000108150390"
        },
        "optimistic": {
          "px": 202.85558524435112,
          "growthY1": 0.45090907610986797,
          "roic": 0.26,
          "ntmValue": 44741683180.0,
          "runId": "AMAT_REAL_20260926T000108176402"
        }
      },
      "priorDeliveredPx": 129.13,
      "changeReasons": [
        "TTM 시작일 버그 수정: 첫 분기 종료일이 아니라 실제 시작일을 씀(표시기간만 바뀌고 TTM 금액 자체는 동일 -- 이 항목 자체는 px에 영향 없음).",
        "1년차 성장률 재정의(산출 근거 개선): 과거 TTM 대 FY2025 실적 비율(~8.7%, 서로 다른 과거 기간 비교)을 더 이상 쓰지 않고, 실제 가이던스+컨센서스로 구성한 NTM 대 TTM 비율을 씀.",
        "동시에 모델에 들어간 미래 성장 경로 자체도 높아짐: 새 방식의 기준 시나리오 1년차 성장률(~43%)은 옛 방식의 참고 비율(~8.7%)보다 훨씬 높다 -- 이는 산출 근거가 더 정확해졌다는 것과는 별개로, 모델이 가정하는 미래 수요 자체가 더 낙관적으로 바뀌었다는 뜻이다. px 상승은 이 두 효과(근거 개선 + 더 높은 성장 가정)가 합쳐진 결과이며, 근거 개선만으로 설명되지 않는다.",
        "net_debt 기준일 갱신: FY2026 Q2(2026-04-26, 순부채 +$0.096B) 대신 Q3(2026-07-26, 매출 TTM과 동일 기준일, 순현금 -$0.493B) 재무상태표로 교체 -- 순부채(+)에서 순현금(-)으로 부호가 바뀜.",
        "위 변경들이 합쳐져 이전 전달값과 달라짐 -- 기준 시나리오가 유일한 정답이 아니라 세 시나리오 중 가운데 값이라는 점도 함께 표시. 세 값 모두 현재 성장 전망에 조건부인 평가 범위이며, 손실 하한이나 통계적 신뢰구간이 아니다(아래 시나리오 유의사항 참고)."
      ],
      "ttm": {
        "components": {
          "FY2025Q4": 6800000000,
          "FY2026Q1": 7012000000,
          "FY2026Q2": 7910000000,
          "FY2026Q3": 9115000000
        },
        "periods": {
          "FY2025Q4": {
            "start": "2025-07-28",
            "end": "2025-10-26"
          },
          "FY2026Q1": {
            "start": "2025-10-27",
            "end": "2026-01-25"
          },
          "FY2026Q2": {
            "start": "2026-01-26",
            "end": "2026-04-26"
          },
          "FY2026Q3": {
            "start": "2026-04-27",
            "end": "2026-07-26"
          }
        },
        "start": "TTM(2025-07-28~2026-07-26)"
      },
      "ntm": {
        "ok": true,
        "scenario": "base",
        "ntm_value": 42623031600.0,
        "period_start": "2026-07-27",
        "period_end": "2027-07-25",
        "components": {
          "FY2026Q4": 10250000000.0,
          "FY2027Q1": 9443761600.0,
          "FY2027Q2": 10653188000.0,
          "FY2027Q3": 12276082000.0
        },
        "component_kinds": {
          "FY2026Q4": "company_guidance_midpoint",
          "FY2027Q1": "derived_yoy_actual_x_annual_consensus_growth",
          "FY2027Q2": "derived_yoy_actual_x_annual_consensus_growth",
          "FY2027Q3": "derived_yoy_actual_x_annual_consensus_growth"
        },
        "component_sources": {
          "FY2026Q4": "SEC 8-K Item 2.02 (accession 0001628280-26-056699, filed 2026-08-13)",
          "FY2027Q1": "FY2026Q1 실적($7.012B) x (1 + FY2027 컨센서스 성장률 34.68%) -- estimates_cache.json",
          "FY2027Q2": "FY2026Q2 실적($7.910B) x (1 + FY2027 컨센서스 성장률 34.68%) -- estimates_cache.json",
          "FY2027Q3": "FY2026Q3 실적($9.115B) x (1 + FY2027 컨센서스 성장률 34.68%) -- estimates_cache.json"
        },
        "as_of": "2026-08-13",
        "note": "FY 라벨 기준 1년차 4개 분기를 매 실행마다 다시 계산한다. 1개 분기(FY2026Q4)는 회사 자신의 최근 8-K 가이던스를 씀. 나머지 분기는 '연간 컨센서스 기반 분기 추정'이다(작년 동기 실적 x 그 회계연도 Yahoo 컨센서스 성장률 -- 실제 분기별 컨센서스를 수집한 값이 아니고, 회사가 확정한 값도 아님). FY2027Q1: 연간 컨센서스 기반 분기 추정(가이던스 없음) / FY2027Q2: 연간 컨센서스 기반 분기 추정(가이던스 없음) / FY2027Q3: 연간 컨센서스 기반 분기 추정(가이던스 없음)"
      },
      "historicalReference": {
        "label": "TTM vs 직전 완결회계연도 (참고용 -- 성장률 아님, 기준일이 다름)",
        "ttm_value": 30837000000,
        "prior_fy_value": 28368000000,
        "prior_fy_label": "FY2025",
        "diff_pct": 0.08703468697123529
      },
      "netDebtSource": {
        "as_of": "2026-07-26",
        "as_of_filing": "FY2026 Q3 10-Q 실적발표 조건부 대차대조표(2026-08-13 발표)",
        "long_term_debt_noncurrent": 5245000000.0,
        "long_term_debt_current": 1299000000.0,
        "cash_and_equivalents": 7037000000.0,
        "source_urls": [
          "https://www.globenewswire.com/news-release/2026/08/13/3344890/0/en/applied-materials-announces-third-quarter-2026-results.html",
          "https://data.sec.gov/api/xbrl/companyconcept/CIK0000006951/us-gaap/LongTermDebtNoncurrent.json"
        ],
        "auto_updates": false,
        "auto_updatable_status": "candidate_not_connected",
        "auto_update_status_note": "자동 갱신되지 않음 -- 분기마다 사람이 실적발표 보도자료의 조건부 대차대조표를 직접 재확인해 이 값을 갱신해야 함.",
        "update_condition": "LongTermDebtNoncurrent/LongTermDebtCurrent/CashAndCashEquivalentsAtCarryingValue는 이미 쓰고 있는 매출·발행주식수와 같은 SEC XBRL companyconcept API로 동일하게 자동 수집 가능한 표준 태그다 -- 다음 단계 자동화 후보. 그 전까지는 분기 실적 발표마다 사람이 이 값을 직접 갱신",
        "basis_label": "현재 확인 가능한 동일 기준일 자료",
        "commercial_paper": {
          "value": 0.0,
          "status": "unconfirmed_likely_embedded_not_absent",
          "as_of": "2026-07-26",
          "basis": "[2026-09-19 정정 -- 이전 'not_separately_reported_confirmed(=0)' 판단을 철회] 이전 판단은 (1) us-gaap:CommercialPaper 개념의 404, (2) 보도자료 조건부 대차대조표에 'Short-term debt' 단일 라인만 있다는 점만으로 0을 '확정'했으나, 이는 근거 부족이었다. 이번에 SEC 10-Q 본문 자체(accession 0001628280-26-058235, 2026-08-20 제출, 기준일 2026-07-26, amat-20260726.htm)의 부채 각주(R50 'Borrowing Facilities and Debt - Narrative (Details)', R51 'Borrowing Facilities and Debt - Debt Outstanding (Details)')를 직접 대조한 결과: (a) R51은 'Total current portion of long-term debt'(선순위채권 중 1년 이내 만기분) = $1,199M(2026-07-26 기준)이라고 명시하는데, 대차대조표의 'Short-term debt' 총액은 $1,299M -- 두 수치의 차이가 정확히 $100M이다. (b) R50 각주 본문에 'Commercial paper' 항목이 실제로 존재하며 $4,000,000,000 규모가 함께 표기되어 있고, 'Short-term debt' 관련 행에 $100,000,000 수치가 나타난다. (a)+(b)를 종합하면 $4,000,000,000은 기업어음 프로그램의 '한도(authorized capacity)'이고 $100,000,000이 2026-07-26 기준 '실제 발행잔액(outstanding)'이며, 이 $100M이 대차대조표 Short-term debt $1,299M 안에 '선순위채권 유동분 $1,199M + 기업어음 $100M'으로 이미 포함되어 있을 가능성이 높다는 것이 현재까지 가장 정합적인 해석이다. 다만 R50/R51은 다차원(multi-axis) XBRL 렌더링 표라 텍스트 추출 도구(WebFetch)로 완전히 명확한 원문 대조를 끝내지 못했다 -- 열(날짜) 라벨이 두 차례 다르게 읽히는 등 도구 자체의 한계가 있었다. 따라서 '기업어음이 없다'는 이전 결론은 근거가 부족했던 것으로 철회하되, '$100M이 확정 수치'라고도 단정하지 않는다.",
          "source_urls": [
            "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/amat-20260726.htm",
            "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/R50.htm",
            "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/R51.htm",
            "https://data.sec.gov/api/xbrl/companyconcept/CIK0000006951/us-gaap/CommercialPaper.json",
            "https://data.sec.gov/api/xbrl/companyconcept/CIK0000006951/us-gaap/LongTermDebtCurrent.json"
          ],
          "confirmed_at": null,
          "unconfirmed_since": "2026-09-19",
          "double_count_note": "총부채(net_debt)에 미치는 영향은 지금 당장은 없다 -- 어느 해석이든(선순위채권 유동분만 $1,199M+기업어음 $100M, 또는 단일 항목 $1,299M) net_debt 계산은 이미 대차대조표의 'Short-term debt' 총액 $1,299M(=long_term_debt_current)을 그대로 쓰고 있으므로, 이 필드(commercial_paper.value)를 net_debt 계산에서 별도로 더하지 않는다(이중계상 방지 가드는 유지). 다만 '왜 더하지 않는가'의 근거를 '없어서'에서 '이미 포함되어 있어서(추정)'로 바꾼다.",
          "unresolved_items": [
            "R50/R51의 다차원 표를 SEC 10-Q 원문 HTML을 직접(사람 눈으로, 또는 이 세션 밖의 정상 네트워크 환경에서) 열어 '$100,000,000'과 '$4,000,000,000'이 정확히 어느 열(날짜)·어느 항목(한도 vs 잔액)에 대응하는지 최종 확인 필요.",
            "'Total current portion of long-term debt' $1,199M이 2026-07-26 기준이 맞는지(이 세션이 조회한 us-gaap:LongTermDebtCurrent companyconcept API는 도구 제약으로 2026-04-26 값까지만 확인됐고 2026-07-26 값을 직접 재현하지 못함) 재확인 필요."
          ],
          "reassess_when": "위 unresolved_items가 해소되거나, 다음 분기 10-Q에서 같은 각주 구조가 반복돼 패턴이 재확인되면 이 판단을 갱신한다. 이번 분기의 '추정' 판단을 다음 분기에 그대로 자동 적용(캐리오버)하지 말고 매 분기 원문을 다시 대조한다."
        },
        "short_term_investments": {
          "included_in_net_debt": true,
          "value": 2196000000.0,
          "as_of": "2026-07-26",
          "as_of_filing": "FY2026 Q3 10-Q (accession 0001628280-26-058235, filed 2026-08-20, document amat-20260726.htm)",
          "basis_date_status": "[2026-09-18 정정] 이전엔 SEC XBRL companyconcept API에서 이 태그의 최신값이 2026-04-26(FY2026 Q2, $1,940M)까지만 조회돼 그 값을 다른 순부채 구성요소(2026-07-26 기준)와 기준일이 다른 채로 썼다. API 한 경로에서 값이 안 잡힌 것을 '공시에 없다'로 잘못 결론 냈던 것 -- 이번에 Q3 10-Q 본문(amat-20260726.htm)과 그 안의 Note 3(Cash, Cash Equivalents and Investments)를 직접 읽어 2026-07-26 기준 실제 수치 $2,196M(만기 1년 이내 세부 합계 $2,178M)을 확인했다. 이제 순부채의 네 구성요소(장기부채 비유동/유동, 현금, 단기투자자산) 전부 동일 기준일(2026-07-26)이다 -- 기준일 불일치는 해소됨.",
          "source_note": "1차 출처는 SEC 10-Q 본문(Note 3) 직접 확인 -- 아직 SEC XBRL companyconcept API의 표준 us-gaap:ShortTermInvestments 태그에는 이 분기 값이 조회되지 않아(기계 판독 자동수집 미연결) 본문 대조로 확보한 값이다. 다음 자동화 시 확장 태그 여부까지 확인 필요.",
          "source_urls": [
            "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/amat-20260726.htm",
            "https://www.sec.gov/Archives/edgar/data/6951/000162828026058235/0001628280-26-058235-index.htm"
          ],
          "accounting_determination": "SEC 10-Q Note 3(Cash, Cash Equivalents and Investments) 확인 결과, 단기투자자산은 미국 국채·지방채·회사채·ABS/MBS 등으로 구성된 분산 시장성 유가증권이며 대부분 1년 이내 만기 도래, 이연보상 관련 약 7천만 달러를 제외하면 담보·보험준비금 등 제한이 없는 일반 기업유동성 목적 자산이다. cash_and_equivalents와는 별개의 GAAP 항목(같은 날짜 기준, 중복 아님을 Note 3 원문으로 확인). 비제한·고유동성·비영업 재무자산이라는 성격에 근거해 순부채 계산에 포함(차감)하기로 판단 -- 표준 기업재무 실무(현금성 시장성 유가증권을 순부채 계산 시 현금과 동일 취급)와 일치. 4월 보유분이 7월 현금으로 전환돼 cash_and_equivalents와 경제적으로 중복될 위험은, 이번에 두 항목을 모두 같은 2026-07-26 시점의 공시 수치로 교체했으므로 더 이상 해당하지 않는다(서로 다른 시점 스냅샷을 합치지 않음).",
          "isolated_effect": {
            "px_before": 188.572503626036,
            "px_after": 191.33964072281017,
            "delta_usd": 2.767137096774178,
            "delta_pct": 1.4674128218935767,
            "note": "이 항목 하나만(동일 기준일 $2,196M로) 바꾸고 다른 가정은 전부 고정한 채 재계산한 결과 -- 다른 변경과 섞이지 않은 순수 효과. 반올림 전 원값. 이 값은 현재가치(DCF) 기준 효과이며, 목표시점(1년/3년) 롤포워드에 대한 효과는 아래 target_year_rollforward_isolated_effect 참고."
          },
          "target_year_rollforward_isolated_effect": {
            "verified_by": "Codex(3차 검토, 2026-09-19) -- 단기투자자산을 cash0에 합산하는 수정(2026-09-19) 전후 기록을 독립적으로 재계산해 검산",
            "reference_run_id": "AMAT_REAL_20260919T125327703427",
            "target_years_1": {
              "delta_usd_per_share": 2.886794639,
              "note": "수정으로 인해 2027-07-26 목표시점 주당가치가 증가한 순수 효과(다른 가정 불변). 모델의 세후 현금이자수익 가정(cash_interest_rate_assumption)과 정합적임이 확인됨."
            },
            "target_years_3": {
              "delta_usd_per_share": 3.141836049,
              "note": "수정으로 인해 2029-07-26 목표시점 주당가치가 증가한 순수 효과(다른 가정 불변). 3년치가 1년치보다 큰 것은 단기투자자산이 더 오래 세후 이자수익을 내며 재투자되기 때문 -- 방향과 크기 모두 모델 가정과 일치.",
              "consistency_check": "현재가치(DCF) net_debt는 이미 이 자산을 포함한 상태였으므로(수정 전에도 -2,789M) 현재가치 자체는 이번 수정으로 변하지 않았음을 별도 확인함 -- 이번 수정은 오직 미래 롤포워드 출발점(gross_debt_year0/cash_year0)에만 영향."
            },
            "guardrail": "이 자산을 향후에도 다른 곳에 추가로 더하지 않는다(가정 문서: '단기투자자산은 향후에도 현금과 동일하게 유동자산으로 계속 보유된다'는 것은 확정된 사실이 아니라 모델링 가정이며, 사업에 투입되거나 매각되는 대안 시나리오는 검증 범위 밖으로 남는다)."
          },
          "auto_updatable": false,
          "auto_updatable_status": "not_connected_manual_filing_read",
          "update_condition": "다음 분기부터는 SEC XBRL companyconcept API에 이 분기 태그가 인덱싱됐는지 먼저 확인하고, 안 되면 이번처럼 10-Q 본문 Note 3를 직접 대조해 동일 기준일 값을 확보한 뒤에만 반영 -- 기준일이 다른 값을 절대 그대로 합치지 않는다."
        }
      },
      "netDebtUsed": {
        "value": -2789000000.0,
        "gross_debt": 6444000000.0,
        "cash": 7037000000,
        "as_of": "2026-07-26",
        "kind": "sec_xbrl_auto",
        "selection_basis": "SEC XBRL 자동 수집 성공(기업어음: 이번 분기 SEC XBRL 조회 결과 CommercialPaper 개념 태그 자체가 없음(404, 태그 미보고 사실은 확인됨) -- 이것이 실제 잔액 0을 뜻하는지 다른 부채 항목에 이미 포함돼 있는지는 미확인. 계산에는 0으로 처리(검증 안 된 금액을 임의로 더하지 않음), 포함관계 확정 전까지는 이 net_debt를 확정값이 아닌 '기업어음 포함관계 미확인' 상태로 취급해야 함.) -- 채택 접수번호(accession): cash_and_equivalents=0001628280-26-058235, commercial_paper=None, long_term_debt_current=0001628280-26-058235, long_term_debt_noncurrent=0001628280-26-058235 + 단기투자자산 $2,196M 반영(2026-07-26 기준, 10-Q 본문 직접대조, 나머지 3개 구성요소와 동일 기준일 여부는 net_debt_source.short_term_investments.basis_date_status 참고)",
        "age_days": 62,
        "stale": false,
        "collection_failure_reason": null,
        "short_term_investments_included": true,
        "short_term_investments_value": 2196000000.0,
        "short_term_investments_as_of": "2026-07-26",
        "commercial_paper_included": true,
        "commercial_paper_value": 0.0,
        "commercial_paper_status": "unconfirmed_zero_used_pending_manual_review",
        "accns": {
          "long_term_debt_noncurrent": "0001628280-26-058235",
          "long_term_debt_current": "0001628280-26-058235",
          "cash_and_equivalents": "0001628280-26-058235",
          "commercial_paper": null
        }
      },
      "changeReasonVsPrevious": "직전 실행과 입력값 동일(변경 없음)",
      "summaryCard": {
        "fairValueRangeLow": 178.59090335279433,
        "fairValueRangeHigh": 202.85558524435112,
        "fairValueBase": 191.136121572667,
        "currentPrice": 474.25,
        "currentPriceAsOf": "2026-09-24",
        "currentPriceNote": "이 실행이 계산 당시 비교한 가격(위 asOf 시점) -- 화면을 여는 시점의 실시간 가격과 다를 수 있음",
        "diffVsCurrentPricePct": 148.12159841785711,
        "diffVsCurrentPriceLabel": "높음",
        "inputChangeSummary": "직전 실행과 입력값 동일(변경 없음)",
        "dataStatusLevel": "최신_반영_완료",
        "dataStatusLabel": "최신 자료 반영 완료",
        "dataStatusDetail": "순부채: SEC 자동수집 성공(기준일 2026-07-26)",
        "asOf": "2026-09-26",
        "estimateStatusLabel": "조건부 DCF 추정값 (conditional DCF estimate) -- 검증된 대표 적정가로 확정된 것이 아님",
        "estimateStatusNote": "이 값은 현재 이 파일에 기록된 성장·마진·자본비용 가정 아래에서 계산된 결과다. 입력별 신뢰 등급(직접관측/외부컨센서스/파생추정/순수판단)이 서로 다르며, 등급이 낮은 입력(4~5년차 성장률, D&A 곡선, 영구성장률)이 결과에 가장 크게 기여한다. '장기 내재가치 점검'에는 참고할 수 있으나, 매수/매도 타이밍 판단 근거로 단독 사용하지 않는다 -- AMAT_모델_채택_최종검토_2026-09-18.md, AMAT_모델채택_구현완료보고_2026-09-18.md 참고.",
        "computedJudgmentAtRunTime": "현재가가 조건부 DCF 추정범위를 상회(+148.1%)",
        "judgmentReasonSummary": "장기 내재가치 점검용 참고값(입력별 신뢰등급이 다르며, 등급이 낮은 입력이 결과를 가장 크게 좌우함). 매수·매도 타이밍 신호가 아님 -- 과거 시점 검증 기록이 아직 충분히 쌓이지 않았음.",
        "conditionsForChange": [
          "2~5년차 실제 실적이 재평가 성장경로(18/10/6/4%)를 상회/하회하는지",
          "베타(현재 1.6)가 실측 재계산 시 유의미하게 변하는지",
          "영구성장률(현재 2.5%, 명목기준 유지)을 상향 정정할 근거가 확보되는지",
          "FY2026Q3 이후 단기투자자산 값이 SEC XBRL API 표준 태그로 자동 인덱싱돼, 매 분기 10-Q 본문을 수동 대조하지 않아도 되는지"
        ]
      },
      "growthY1Basis": "NTM(2026-07-27~2027-07-25, $42.623B, 시나리오=base) 대비 TTM(2025-07-28~2026-07-26, $30.837B) = 38.22%. 구성: {'FY2026Q4': 10250000000.0, 'FY2027Q1': 9443761600.0, 'FY2027Q2': 10653188000.0, 'FY2027Q3': 12276082000.0}. 참고(성장률 아님): FY2025 실적 대비 TTM 비율은 과거 서로 다른 기간의 차이일 뿐이라 미래 성장률로 쓰지 않음.",
      "assumptionNotes": {
        "growth_y1": {
          "observed": "TTM($30.837B, 2025-07-28~2026-07-26)과 직전 완결회계연도 FY2025($28.368B)의 차이는 실측값이지만, 두 구간의 기준일이 다르므로 이 비율 자체를 미래 성장률로 쓰지 않는다(과거 참고용 지표로만 별도 표시, 아래 historical_reference 참고. 8.70% -- 이전 회차 보고서의 8.66% 표기는 원문 재확인 결과 단순 필사 오차였고, 실행 기록(growth_y1_basis)에는 당시에도 8.70%로 정확히 저장돼 있었다).",
          "forward_assumption": "[2026-09-18 갱신] NTM 매출을 매 실행마다 build_dynamic_ntm_guidance_and_consensus()로 다시 계산해 TTM과 비교한 값을 1년차 성장률로 쓴다. 가능하면 회사의 최근 8-K 확정 가이던스(guidance_history_cache.json, 대상기간이 다음 분기와 겹치고 단위가 명확한 경우만)를 1개 분기에 쓰고, 나머지(또는 가이던스를 못 쓰는 경우 전부)는 '작년 동기 실적 x 그 회계연도 Yahoo 컨센서스 성장률(estimates_cache.json)'로 만든 파생값을 쓴다 -- 이전 회차의 marketscreener.com 수동 필사값(자동 갱신기 없음)은 더 이상 쓰지 않는다. 필요한 자료가 없거나 형태가 예상과 다르면 값을 지어내지 않고 계산 자체를 차단한다(NTM_DATA_CONNECTION 단계에서 blocked).",
          "basis": "build_dynamic_ntm_guidance_and_consensus"
        },
        "growth_y2_5": {
          "observed": null,
          "forward_assumption": "2~5년차(10%/6%/4%/3%, GROWTH_PATH_TABLE 참고)는 실측·가이던스·컨센서스 어디에서도 유도되지 않은 반도체 장비업 설비투자 사이클 둔화 가정이다. 1년차와 2년차 사이 큰 폭의 불연속(1년차 AI 수요발 급성장 -> 2~5년차 통상적 둔화)을 그대로 드러낸다. 이 경로를 흔들었을 때 가격이 얼마나 움직이는지는 growth_path_sensitivity로 같은 엔진에서 재계산해 노출한다.",
          "basis": "GROWTH_PATH_TABLE + growth_path_sensitivity"
        },
        "da_fraction": {
          "observed": "AMAT의 실제 D&A/Capex 비율 실적과 아직 원문 대조하지 않음(과거 관측 자체가 없음).",
          "forward_assumption": "Capex 대비 비율로 유도 -- 연차별 30/40/50/60/60%(1년차부터 min(0.60, 0.20+0.10x연차)로 계산, 4년차부터 상한 60%에서 고정) -- 모델가정. [이번 회차 수정] 이전 노트 문구가 '20/30/40/50/60%'로 실제 코드(amat_calc_engine.compute_forward의 da_frac 계산식)와 다르게 적혀 있던 걸 바로잡음 -- 계산 자체는 처음부터 30/40/50/60/60%였고 px에는 영향 없음, 설명 문구만 실제 코드와 어긋나 있었음.",
          "basis": null
        },
        "nwc_ratio": {
          "observed": "실측 재무제표의 운전자본 변동과 직접 대조하지 않음(과거 관측 자체가 없음).",
          "forward_assumption": "매출 증분 대비 순운전자본 비율 16.7785% — 이전 회차 채택값을 그대로 유지한 모델가정.",
          "basis": null
        },
        "tax_path": {
          "observed": "AMAT 실효세율 실적 추이와 비교 검증 안 됨.",
          "forward_assumption": "세율 13%를 5개년 전체 동일 적용 — 모델가정.",
          "basis": null
        },
        "roic": {
          "observed": "장기 ROIC는 미래값이라 관측 자체가 불가능하다 — '미검증'이 아니라 원천적으로 관측 대상이 아니라는 점을 구분해 표시한다.",
          "forward_assumption": "터미널 재투자율(term_g/ROIC) 계산에 쓰는 22%는 채택 근거(반도체 장비업 장기 ROIC가 대체로 15~30% 범위에서 형성된다는 업종 일반론)와 함께 민감도를 18%/22%/26% 3개 지점에서 같은 엔진으로 재계산해 화면에 노출한다(아래 roic_sensitivity 참고) — 가정이라는 표시만 하고 끝내지 않는다.",
          "basis": "roic_sensitivity"
        }
      },
      "roicSensitivity": {
        "18%": 187.44268040944604,
        "22%": 191.136121572667,
        "26%": 193.69311930105084
      },
      "growthPathTable": [
        {
          "year": 1,
          "rate": null,
          "source": "build_dynamic_ntm_guidance_and_consensus",
          "note": "[2026-09-18 갱신] 이전엔 이 값이 'NTM_GUIDANCE_AND_CONSENSUS'라는 이름의 실제로는 2026-09-15에 수동으로 고정한 dict였고(그중 3개 분기는 marketscreener.com 수동 필사, 자동 갱신기 없음), 'connected'라는 표시가 사실과 달랐다. 지금은 매 실행마다 guidance_history_cache.json(회사 8-K 가이던스, 조건에 맞는 경우만 1개 분기)과 estimates_cache.json(Yahoo 회계연도 컨센서스 성장률, 나머지 분기에 작년동기x성장률로 적용)을 실제로 다시 읽어 계산한다. 시나리오별로 다름(보수/기준/낙관은 가이던스 분기의 공시 범위 저/중/고 + 나머지 분기 ±5% 흔들기) -- 아래 2~5년차는 시나리오와 무관하게 고정.",
          "auto_updatable": true,
          "auto_updatable_status": "connected",
          "update_condition": "매 실행 시 guidance_history_cache.json + estimates_cache.json을 다시 읽어 자동 재계산됨 -- 이 파일을 수정할 필요 없음. 두 파일 중 하나라도 없거나 AMAT 항목이 없거나 형태가 예상과 다르면 계산 자체가 차단됨(값을 지어내지 않음)."
        },
        {
          "year": 2,
          "rate": 0.18,
          "source": "business_review_2026-09-18",
          "note": "[2026-09-18 사업전망 재평가로 갱신, 이전 10%] 모델의 2년차 창(TTM+12~24개월, 대략 FY2027Q4+FY2028Q1~Q3)은 FY2027보다 FY2028 비중이 3/4로 더 크다. FY2028 애널리스트 컨센서스 매출 성장률(YoY +20.19%, MarketScreener 2025-11-13 시점, FY2027 $46.132B -> FY2028 $55.445B)을 1차 근거로 삼고, 더 최신(2026-09-17) 자료의 '연간매출성장률 약 20%' 방향과도 일치함을 확인해 18%로 다소 보수적으로 잡았다(컨센서스 자체가 10개월가량 지난 자료라 그대로 쓰지 않음). 분류: 파생추정(C등급) -- 특정 컨센서스 한 줄이 아니라 여러 자료를 조합해 재구성한 값.",
          "auto_updatable": false,
          "auto_updatable_status": "not_connected",
          "update_condition": "FY2028 컨센서스가 더 최신 자료로 갱신되거나, 분기별 실측 가중치를 반영할 수 있게 되면 사람이 재검토"
        },
        {
          "year": 3,
          "rate": 0.1,
          "source": "business_review_2026-09-18",
          "note": "[2026-09-18 사업전망 재평가로 갱신, 이전 6%] 이 구간(대략 FY2029 중심)은 직접적인 애널리스트 컨센서스가 없다(확보 자료는 FY2028까지). SEMI 업계 전망의 WFE 성장률 둔화 추세(2026 +23.1%->2027 +21.8%->2028 +14.1%)를 연장하되, 메모리 슈퍼사이클 지속 전망과 2028년 공급과잉 경고가 공존한다는 점을 반영. 분류: 파생추정(C등급, 직접 컨센서스 없이 업계 추세 연장).",
          "auto_updatable": false,
          "auto_updatable_status": "not_connected",
          "update_condition": "FY2029 애널리스트 컨센서스가 확보되거나 반도체 장비 사이클 관련 신규 업계 리포트가 나오면 사람이 재검토"
        },
        {
          "year": 4,
          "rate": 0.06,
          "source": "business_review_2026-09-18",
          "note": "[2026-09-18 사업전망 재평가로 갱신, 이전 4%] 직접 근거 없음 -- 3년차(10%)에서 영구성장률(2.5%)로 수렴해가는 경로의 중간점으로 배치. 분류: 순수판단(D등급, 형태만 유지).",
          "auto_updatable": false,
          "auto_updatable_status": "not_connected",
          "update_condition": "2~5년차 경로 전체를 재설계할 때만 함께 재검토(단독으로 이 값만 바꾸는 것은 권장하지 않음)"
        },
        {
          "year": 5,
          "rate": 0.04,
          "source": "business_review_2026-09-18",
          "note": "[2026-09-18 사업전망 재평가로 갱신, 이전 3%] 직접 근거 없음 -- 안정기 성장률(2.5%) 바로 앞 지점. 5년 만에 고성장에서 영구성장률까지 수렴한다는 가정 자체가 강한 모델가정. 분류: 순수판단(D등급).",
          "auto_updatable": false,
          "auto_updatable_status": "not_connected",
          "update_condition": "2~5년차 경로 전체를 재설계할 때만 함께 재검토(단독으로 이 값만 바꾸는 것은 권장하지 않음)"
        }
      ],
      "growthPathSensitivity": {
        "y2=7%": 175.15207802607523,
        "y2=10%(기준)": 179.51136262969115,
        "y2=13%": 183.8706472333071
      },
      "valuationTiming": {
        "valuation_anchor_date": "2026-07-26",
        "price_comparison_date": "2026-09-24",
        "gap_days": 60,
        "approx_roll_forward_multiplier": 1.0180255179214805,
        "approx_effect_pct": 1.802551792148055,
        "applied_to_px": false,
        "note": "현재 FCFF 계산은 TTM 마지막 분기 종료일(2026-07-26)을 '지금'으로 두고 1년차부터 할인한다. 화면에서 비교하는 현재가 조회 시점(2026-09-24)은 그보다 60일 뒤라서, 같은 시점 기준으로 정확히 맞추려면 적정가를 약 1.80% 만큼 앞으로 굴려야 한다는 근사치다(연 단위 복리 근사, 실제 분기별 현금흐름 발생 시점은 고려하지 않음). 이 회차에는 px에 적용하지 않고 진단값으로만 남긴다 -- 크기가 시나리오 간 가격 차이보다 작고, 정확히 보정하려면 반기/분기 단위 부분기간 할인으로 엔진을 바꿔야 해서 이번 범위(기존 화면·엔진 구조 유지) 밖이다."
      },
      "dataFreshness": {
        "checked_as_of_execution": "2026-09-26",
        "price_as_of": "2026-09-24",
        "price_gap_days": 2,
        "price_stale": false,
        "price_stale_threshold_days": 7,
        "next_expected_earnings_date": "2026-11-19",
        "next_expected_earnings_date_is_estimate": true,
        "net_debt_source_as_of": "2026-07-26",
        "net_debt_last_manual_check": "2026-07-26",
        "guidance_consensus_as_of": "2026-08-13",
        "guidance_consensus_last_manual_check": "2026-08-13",
        "unreflected_disclosures": [],
        "stale": false,
        "status": "확인된_최신_실적_기준_내",
        "note": "다음 실적 발표 예상일 이전이고 확인된 미반영 공시도 없어, 현재 net_debt·가이던스·컨센서스 기준을 유효한 값으로 쓴다. 예정일 자체가 추정치이므로 실제 발표일이 다르면 이 판정도 같이 갱신해야 한다.",
        "net_debt_source_kind_used": "sec_xbrl_auto",
        "net_debt_selection_basis": "SEC XBRL 자동 수집 성공(기업어음: 이번 분기 SEC XBRL 조회 결과 CommercialPaper 개념 태그 자체가 없음(404, 태그 미보고 사실은 확인됨) -- 이것이 실제 잔액 0을 뜻하는지 다른 부채 항목에 이미 포함돼 있는지는 미확인. 계산에는 0으로 처리(검증 안 된 금액을 임의로 더하지 않음), 포함관계 확정 전까지는 이 net_debt를 확정값이 아닌 '기업어음 포함관계 미확인' 상태로 취급해야 함.) -- 채택 접수번호(accession): cash_and_equivalents=0001628280-26-058235, commercial_paper=None, long_term_debt_current=0001628280-26-058235, long_term_debt_noncurrent=0001628280-26-058235 + 단기투자자산 $2,196M 반영(2026-07-26 기준, 10-Q 본문 직접대조, 나머지 3개 구성요소와 동일 기준일 여부는 net_debt_source.short_term_investments.basis_date_status 참고)",
        "net_debt_age_days": 62,
        "net_debt_max_age_days": 200,
        "net_debt_stale": false,
        "net_debt_collection_failure_reason": null,
        "ntm_guidance_used": true,
        "ntm_sources_checked": {
          "guidance_history_path": "guidance_history_cache.json",
          "estimates_cache_path": "estimates_cache.json"
        }
      },
      "scenarioDisclaimer": "보수/기준/낙관 세 값은 '가이던스 범위 내에서 낮게/중간/높게 본 조건부 평가'이지, 수요 위축까지 포함한 손실 하한이나 통계적 신뢰구간이 아니다. 보수 시나리오도 1년차 매출 성장률이 36.0%로 여전히 고성장 전제다. 제3자 컨센서스 3개 분기에 적용한 ±5%는 분석자(이 모델 작성자)가 임의로 정한 흔들기 폭이며, 애널리스트들의 실제 최저·최고 전망치가 아니다. 이 세 시나리오는 수요 둔화와 마진 압박이 함께 오는 스트레스 상황을 포함하지 않는다 -- 그런 상황은 현재 모델 범위 밖이며, 포함하지 않았다는 사실 자체를 여기 명시한다(임의의 하락 수치를 검증된 사실처럼 제시하지 않기 위해 스트레스 시나리오를 새로 만들어 넣기보다 이 한계를 그대로 드러내는 쪽을 택함).",
      "returnConditionYear3": {
        "periodLabel": "3년",
        "periodKey": "return_condition_year3",
        "scope": "단일 3년 보유기간 -- AMAT의 '최적' 보유기간이라는 주장 아님. 메인 매수배지 활성화·타 종목 확장은 이번 범위 밖(별도 회차에서 진행).",
        "basis": "세전(pre-tax), 미국달러(USD) 기준 -- 환율·개인세금·거래비용 미반영.",
        "scenarios": {
          "conservative": {
            "blocked": false,
            "p3PerShare": 237.26173827407214,
            "purchasePriceUsed": 474.25,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.2108671933147207,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "1": 2.12,
              "2": 2.12,
              "2.8383561643835615": 239.0390533425653
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 195.91280184325362,
              "0.10": 186.0612142311429,
              "0.12": 176.87174322426756
            },
            "illustrativeExamplesNote": "시스템 기본값이 아니라 참고용 예시일 뿐이다 -- 실제 판정은 사용자가 직접 입력한 요구수익률 기준으로만 내려간다.",
            "judgment": {
              "judgment": "REQUIRED_RETURN_NOT_SET",
              "label": "요구수익률 선택 필요",
              "safe_to_buy_claim": false
            },
            "currentJudgmentAllowed": true,
            "stalenessBlockReason": null,
            "p3ValuationDate": "2029-07-26",
            "valuationAnchorDate": "2026-07-26",
            "priceComparisonDate": "2026-09-24",
            "holdingPeriodActualDays": 1036,
            "holdingPeriodActualYears": 2.8383561643835615,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -31628393335.900764
          },
          "base": {
            "blocked": false,
            "p3PerShare": 254.563595775408,
            "purchasePriceUsed": 474.25,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.19133566379864536,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "1": 2.12,
              "2": 2.12,
              "2.8383561643835615": 256.34091084390116
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 209.81950576271538,
              "0.10": 199.26217522336322,
              "0.12": 189.41454193800422
            },
            "illustrativeExamplesNote": "시스템 기본값이 아니라 참고용 예시일 뿐이다 -- 실제 판정은 사용자가 직접 입력한 요구수익률 기준으로만 내려간다.",
            "judgment": {
              "judgment": "REQUIRED_RETURN_NOT_SET",
              "label": "요구수익률 선택 필요",
              "safe_to_buy_claim": false
            },
            "currentJudgmentAllowed": true,
            "stalenessBlockReason": null,
            "p3ValuationDate": "2029-07-26",
            "valuationAnchorDate": "2026-07-26",
            "priceComparisonDate": "2026-09-24",
            "holdingPeriodActualDays": 1036,
            "holdingPeriodActualYears": 2.8383561643835615,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -33103686423.388443
          },
          "optimistic": {
            "blocked": false,
            "p3PerShare": 270.72139908644266,
            "purchasePriceUsed": 474.25,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.17385056849911967,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "1": 2.12,
              "2": 2.12,
              "2.8383561643835615": 272.4987141549358
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 222.80665391245068,
              "0.10": 211.5902464268434,
              "0.12": 201.12797065921566
            },
            "illustrativeExamplesNote": "시스템 기본값이 아니라 참고용 예시일 뿐이다 -- 실제 판정은 사용자가 직접 입력한 요구수익률 기준으로만 내려간다.",
            "judgment": {
              "judgment": "REQUIRED_RETURN_NOT_SET",
              "label": "요구수익률 선택 필요",
              "safe_to_buy_claim": false
            },
            "currentJudgmentAllowed": true,
            "stalenessBlockReason": null,
            "p3ValuationDate": "2029-07-26",
            "valuationAnchorDate": "2026-07-26",
            "priceComparisonDate": "2026-09-24",
            "holdingPeriodActualDays": 1036,
            "holdingPeriodActualYears": 2.8383561643835615,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -34578979510.87612
          }
        },
        "cashflowApproximationNote": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 2.8384년), 매도 시점의 부분연도에는 연배당의 83.8%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다.",
        "dividendSource": {
          "confirmed_as_of": "2026-09-16",
          "quarterly_dividend_per_share": 0.53,
          "annualized_dividend_per_share": 2.12,
          "last_paid": {
            "declared_date": "2026-06-09",
            "ex_date": "2026-08-20",
            "payable_date": "2026-09-10",
            "amount_per_share": 0.53,
            "note": "이미 지급 완료 -- 매입 시점(대략 가격 관측일) 이후 투자자 현금흐름에 포함하지 않는다."
          },
          "next_confirmed_payment": {
            "declared_date": "2026-09-10",
            "ex_date": "2026-11-19",
            "payable_date": "2026-12-10",
            "amount_per_share": 0.53,
            "note": "회사가 실제로 확정한 다음 지급 -- 이 금액·날짜는 model_assumption이 아니라 확정 사실이다."
          },
          "prior_quarterly_dividend_per_share": 0.46,
          "increase_pct_vs_prior": 0.15,
          "consecutive_increase_years": 9,
          "source_urls": [
            "https://investor.appliedmaterials.com/stock-information/dividend-history",
            "https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-cash-dividend-68"
          ],
          "auto_updates": false,
          "auto_updatable_status": "candidate_not_connected",
          "update_condition": "회사의 배당 발표(보도자료/8-K)가 나올 때마다 사람이 다음 확정 지급 정보를 갱신 -- SEC 배당 관련 XBRL 태그로 일부 자동화 가능하나 아직 연결되지 않음",
          "forward_assumption": "이번 3년 보유수익 계산은 다음 확정 지급(2026-12-10, $0.53) 이후의 향후 분기배당을 같은 금액($0.53, 연 $2.12/주)으로 3년간 유지한다고 가정한다(model_assumption, 확정 아님). 연차1,2,3 배당은 이 가정을 연 단위로 합산한 근사치이며, 실제 분기 지급일 4회를 정확히 반영하지 않는다. 이미 지급된 2026-09-10 배당은 이 근사에도 포함하지 않는다 -- 연차1의 근사 합계는 '매입 이후 12개월 동안 확정+가정된 분기배당의 합'으로 읽어야 하며, 이미 지난 지급을 재사용한 것이 아니다."
        },
        "buybackAssumption": {
          "modeled": false,
          "auto_updatable": false,
          "auto_updatable_status": "not_connected",
          "update_condition": "회사가 향후 자사주매입 규모·시기에 대한 공식 가이던스를 발표하면 사람이 재검토해 모델링 여부를 다시 결정",
          "note": "향후 자사주매입 규모·시기에 대한 회사 공식 가이던스를 확보하지 못해 0으로 둔다(산출 보류가 아니라 '모델링하지 않음'을 명시적으로 선택 -- 매입액을 임의로 지어내지 않는다). 이 선택이 결과를 항상 보수적으로 만든다고 단정하지 않는다 -- 자사주매입이 주당가치에 미치는 방향은 매입가격과 내재가치의 관계에 따라 달라지며, 이번 범위에서는 그 방향을 예측하지 않는다."
        },
        "dataFreshnessAsOfThisCard": {
          "checked_as_of_execution": "2026-09-26",
          "price_as_of": "2026-09-24",
          "price_gap_days": 2,
          "price_stale": false,
          "price_stale_threshold_days": 7,
          "next_expected_earnings_date": "2026-11-19",
          "next_expected_earnings_date_is_estimate": true,
          "net_debt_source_as_of": "2026-07-26",
          "net_debt_last_manual_check": "2026-07-26",
          "guidance_consensus_as_of": "2026-08-13",
          "guidance_consensus_last_manual_check": "2026-08-13",
          "unreflected_disclosures": [],
          "stale": false,
          "status": "확인된_최신_실적_기준_내",
          "note": "다음 실적 발표 예상일 이전이고 확인된 미반영 공시도 없어, 현재 net_debt·가이던스·컨센서스 기준을 유효한 값으로 쓴다. 예정일 자체가 추정치이므로 실제 발표일이 다르면 이 판정도 같이 갱신해야 한다.",
          "net_debt_source_kind_used": "sec_xbrl_auto",
          "net_debt_selection_basis": "SEC XBRL 자동 수집 성공(기업어음: 이번 분기 SEC XBRL 조회 결과 CommercialPaper 개념 태그 자체가 없음(404, 태그 미보고 사실은 확인됨) -- 이것이 실제 잔액 0을 뜻하는지 다른 부채 항목에 이미 포함돼 있는지는 미확인. 계산에는 0으로 처리(검증 안 된 금액을 임의로 더하지 않음), 포함관계 확정 전까지는 이 net_debt를 확정값이 아닌 '기업어음 포함관계 미확인' 상태로 취급해야 함.) -- 채택 접수번호(accession): cash_and_equivalents=0001628280-26-058235, commercial_paper=None, long_term_debt_current=0001628280-26-058235, long_term_debt_noncurrent=0001628280-26-058235 + 단기투자자산 $2,196M 반영(2026-07-26 기준, 10-Q 본문 직접대조, 나머지 3개 구성요소와 동일 기준일 여부는 net_debt_source.short_term_investments.basis_date_status 참고)",
          "net_debt_age_days": 62,
          "net_debt_max_age_days": 200,
          "net_debt_stale": false,
          "net_debt_collection_failure_reason": null,
          "ntm_guidance_used": true,
          "ntm_sources_checked": {
            "guidance_history_path": "guidance_history_cache.json",
            "estimates_cache_path": "estimates_cache.json"
          }
        },
        "anyScenarioBlocked": false,
        "principle": "기업 현금흐름 전체(FCFF)를 투자자 배당으로 계산하지 않는다 -- 현재가치 평가(DCF, 위 px)와 투자자 보유수익률(이 카드)을 분리. 실제 지급 배당만 투자자 현금흐름에 넣고, 배당으로 안 나간 유보현금은 미래 순부채 감소로만 반영한다(이중계산 방지)."
      },
      "returnCondition12M": {
        "periodLabel": "12개월",
        "periodKey": "return_condition_year1",
        "scope": "단일 12개월 보유기간 -- AMAT의 '최적' 보유기간이라는 주장 아님. 메인 매수배지 활성화·타 종목 확장은 이번 범위 밖(별도 회차에서 진행).",
        "basis": "세전(pre-tax), 미국달러(USD) 기준 -- 환율·개인세금·거래비용 미반영.",
        "scenarios": {
          "conservative": {
            "blocked": false,
            "p3PerShare": 196.67997075486448,
            "purchasePriceUsed": 474.25,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.6474531014563581,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "0.8356164383561644": 198.45147760417956
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 186.09079761827314,
              "0.10": 183.25926007135408,
              "0.12": 180.52067471064643
            },
            "illustrativeExamplesNote": "시스템 기본값이 아니라 참고용 예시일 뿐이다 -- 실제 판정은 사용자가 직접 입력한 요구수익률 기준으로만 내려간다.",
            "judgment": {
              "judgment": "REQUIRED_RETURN_NOT_SET",
              "label": "요구수익률 선택 필요",
              "safe_to_buy_claim": false
            },
            "currentJudgmentAllowed": true,
            "stalenessBlockReason": null,
            "p3ValuationDate": "2027-07-26",
            "valuationAnchorDate": "2026-07-26",
            "priceComparisonDate": "2026-09-24",
            "holdingPeriodActualDays": 305,
            "holdingPeriodActualYears": 0.8356164383561644,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -8937842304.149162
          },
          "base": {
            "blocked": false,
            "p3PerShare": 210.66543092348212,
            "purchasePriceUsed": 474.25,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.6175182095088757,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "0.8356164383561644": 212.4369377727972
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 199.20516425971272,
              "0.10": 196.17407992152528,
              "0.12": 193.24249838390364
            },
            "illustrativeExamplesNote": "시스템 기본값이 아니라 참고용 예시일 뿐이다 -- 실제 판정은 사용자가 직접 입력한 요구수익률 기준으로만 내려간다.",
            "judgment": {
              "judgment": "REQUIRED_RETURN_NOT_SET",
              "label": "요구수익률 선택 필요",
              "safe_to_buy_claim": false
            },
            "currentJudgmentAllowed": true,
            "stalenessBlockReason": null,
            "p3ValuationDate": "2027-07-26",
            "valuationAnchorDate": "2026-07-26",
            "priceComparisonDate": "2026-09-24",
            "holdingPeriodActualDays": 305,
            "holdingPeriodActualYears": 0.8356164383561644,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -9072287696.1128
          },
          "optimistic": {
            "blocked": false,
            "p3PerShare": 223.730336571617,
            "purchasePriceUsed": 474.25,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.5892005470033836,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "0.8356164383561644": 225.50184342093206
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 211.45631372063107,
              "0.10": 208.23881721088284,
              "0.12": 205.12694293984867
            },
            "illustrativeExamplesNote": "시스템 기본값이 아니라 참고용 예시일 뿐이다 -- 실제 판정은 사용자가 직접 입력한 요구수익률 기준으로만 내려간다.",
            "judgment": {
              "judgment": "REQUIRED_RETURN_NOT_SET",
              "label": "요구수익률 선택 필요",
              "safe_to_buy_claim": false
            },
            "currentJudgmentAllowed": true,
            "stalenessBlockReason": null,
            "p3ValuationDate": "2027-07-26",
            "valuationAnchorDate": "2026-07-26",
            "priceComparisonDate": "2026-09-24",
            "holdingPeriodActualDays": 305,
            "holdingPeriodActualYears": 0.8356164383561644,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -9206733088.07644
          }
        },
        "cashflowApproximationNote": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 0.8356년), 매도 시점의 부분연도에는 연배당의 83.6%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다.",
        "dividendSource": {
          "confirmed_as_of": "2026-09-16",
          "quarterly_dividend_per_share": 0.53,
          "annualized_dividend_per_share": 2.12,
          "last_paid": {
            "declared_date": "2026-06-09",
            "ex_date": "2026-08-20",
            "payable_date": "2026-09-10",
            "amount_per_share": 0.53,
            "note": "이미 지급 완료 -- 매입 시점(대략 가격 관측일) 이후 투자자 현금흐름에 포함하지 않는다."
          },
          "next_confirmed_payment": {
            "declared_date": "2026-09-10",
            "ex_date": "2026-11-19",
            "payable_date": "2026-12-10",
            "amount_per_share": 0.53,
            "note": "회사가 실제로 확정한 다음 지급 -- 이 금액·날짜는 model_assumption이 아니라 확정 사실이다."
          },
          "prior_quarterly_dividend_per_share": 0.46,
          "increase_pct_vs_prior": 0.15,
          "consecutive_increase_years": 9,
          "source_urls": [
            "https://investor.appliedmaterials.com/stock-information/dividend-history",
            "https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-cash-dividend-68"
          ],
          "auto_updates": false,
          "auto_updatable_status": "candidate_not_connected",
          "update_condition": "회사의 배당 발표(보도자료/8-K)가 나올 때마다 사람이 다음 확정 지급 정보를 갱신 -- SEC 배당 관련 XBRL 태그로 일부 자동화 가능하나 아직 연결되지 않음",
          "forward_assumption": "이번 3년 보유수익 계산은 다음 확정 지급(2026-12-10, $0.53) 이후의 향후 분기배당을 같은 금액($0.53, 연 $2.12/주)으로 3년간 유지한다고 가정한다(model_assumption, 확정 아님). 연차1,2,3 배당은 이 가정을 연 단위로 합산한 근사치이며, 실제 분기 지급일 4회를 정확히 반영하지 않는다. 이미 지급된 2026-09-10 배당은 이 근사에도 포함하지 않는다 -- 연차1의 근사 합계는 '매입 이후 12개월 동안 확정+가정된 분기배당의 합'으로 읽어야 하며, 이미 지난 지급을 재사용한 것이 아니다."
        },
        "buybackAssumption": {
          "modeled": false,
          "auto_updatable": false,
          "auto_updatable_status": "not_connected",
          "update_condition": "회사가 향후 자사주매입 규모·시기에 대한 공식 가이던스를 발표하면 사람이 재검토해 모델링 여부를 다시 결정",
          "note": "향후 자사주매입 규모·시기에 대한 회사 공식 가이던스를 확보하지 못해 0으로 둔다(산출 보류가 아니라 '모델링하지 않음'을 명시적으로 선택 -- 매입액을 임의로 지어내지 않는다). 이 선택이 결과를 항상 보수적으로 만든다고 단정하지 않는다 -- 자사주매입이 주당가치에 미치는 방향은 매입가격과 내재가치의 관계에 따라 달라지며, 이번 범위에서는 그 방향을 예측하지 않는다."
        },
        "dataFreshnessAsOfThisCard": {
          "checked_as_of_execution": "2026-09-26",
          "price_as_of": "2026-09-24",
          "price_gap_days": 2,
          "price_stale": false,
          "price_stale_threshold_days": 7,
          "next_expected_earnings_date": "2026-11-19",
          "next_expected_earnings_date_is_estimate": true,
          "net_debt_source_as_of": "2026-07-26",
          "net_debt_last_manual_check": "2026-07-26",
          "guidance_consensus_as_of": "2026-08-13",
          "guidance_consensus_last_manual_check": "2026-08-13",
          "unreflected_disclosures": [],
          "stale": false,
          "status": "확인된_최신_실적_기준_내",
          "note": "다음 실적 발표 예상일 이전이고 확인된 미반영 공시도 없어, 현재 net_debt·가이던스·컨센서스 기준을 유효한 값으로 쓴다. 예정일 자체가 추정치이므로 실제 발표일이 다르면 이 판정도 같이 갱신해야 한다.",
          "net_debt_source_kind_used": "sec_xbrl_auto",
          "net_debt_selection_basis": "SEC XBRL 자동 수집 성공(기업어음: 이번 분기 SEC XBRL 조회 결과 CommercialPaper 개념 태그 자체가 없음(404, 태그 미보고 사실은 확인됨) -- 이것이 실제 잔액 0을 뜻하는지 다른 부채 항목에 이미 포함돼 있는지는 미확인. 계산에는 0으로 처리(검증 안 된 금액을 임의로 더하지 않음), 포함관계 확정 전까지는 이 net_debt를 확정값이 아닌 '기업어음 포함관계 미확인' 상태로 취급해야 함.) -- 채택 접수번호(accession): cash_and_equivalents=0001628280-26-058235, commercial_paper=None, long_term_debt_current=0001628280-26-058235, long_term_debt_noncurrent=0001628280-26-058235 + 단기투자자산 $2,196M 반영(2026-07-26 기준, 10-Q 본문 직접대조, 나머지 3개 구성요소와 동일 기준일 여부는 net_debt_source.short_term_investments.basis_date_status 참고)",
          "net_debt_age_days": 62,
          "net_debt_max_age_days": 200,
          "net_debt_stale": false,
          "net_debt_collection_failure_reason": null,
          "ntm_guidance_used": true,
          "ntm_sources_checked": {
            "guidance_history_path": "guidance_history_cache.json",
            "estimates_cache_path": "estimates_cache.json"
          }
        },
        "anyScenarioBlocked": false,
        "principle": "기업 현금흐름 전체(FCFF)를 투자자 배당으로 계산하지 않는다 -- 현재가치 평가(DCF, 위 px)와 투자자 보유수익률(이 카드)을 분리. 실제 지급 배당만 투자자 현금흐름에 넣고, 배당으로 안 나간 유보현금은 미래 순부채 감소로만 반영한다(이중계산 방지)."
      },
      "updateStatus": {
        "attemptStatus": "SUCCESS",
        "failureType": null,
        "attemptedAt": "2026-09-26T00:01:08.158749",
        "dataAsOf": "2026-09-24",
        "holdPrice": false,
        "reason": ""
      },
      "validationStatus": "AMAT_review_final_check_v1_closed",
      "sources": [
        "https://data.sec.gov/api/xbrl/companyconcept/CIK0000006951/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
        "https://www.globenewswire.com/news-release/2026/08/13/3344890/0/en/applied-materials-announces-third-quarter-2026-results.html",
        "https://www.marketscreener.com/quote/stock/APPLIED-MATERIALS-INC-4850/finances/",
        "https://stockanalysis.com/stocks/amat/"
      ]
    }
  },
  "LRCX": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": true,
      "rangeLow": 271.9621504816761,
      "rangeHigh": 327.89878697105263,
      "rangeMid": 299.9304687263643,
      "bandStatus": "WITHIN_BAND",
      "bandDisclaimer": "이 범위는 검증된 매수가·바닥가격·성공확률이 아니다 -- 동종업계가 지금 받는 배수를 그대로 적용한 참고 범위일 뿐이며, 이 범위와 별도로 산출되는 장기 DCF 내재가치(조건부 참고값)와도 다른 개념이다.",
      "comparisonPrice": 315.2099914550781,
      "comparisonPriceAsOf": "2026-09-25",
      "comparisonPriceLabel": "최근 종가",
      "comparisonPriceNote": "실시간 시세가 아니라 prices_cache.json에 기록된 마지막 종가이며, 위 관측일 기준입니다.",
      "comparisonPriceType": "confirmed_close",
      "comparisonPriceIsIntradayFallbackSkipped": false,
      "comparisonPriceIntradayObservedDate": null,
      "comparisonPriceIntradayObservedValue": null,
      "comparisonPriceIntradayRetrievedAt": null,
      "comparisonPriceHasPossibleMissingSession": false,
      "comparisonPricePossibleMissingSessionDates": [],
      "comparisonPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "comparisonPricePossibleMissingSessionCalendarSource": null,
      "comparisonPriceIssue": null,
      "peersUsed": [
        "AMAT",
        "KLAC"
      ],
      "peersExcluded": [
        {
          "ticker": "LRCX",
          "reason": "대상 종목 자기 자신(LRCX) -- peer로 쓰지 않음"
        },
        {
          "ticker": "ASML",
          "reason": "통화 불일치: financial_currency='EUR', quote_currency='USD' (둘 다 'USD'이어야 함, 환전 미적용)"
        }
      ],
      "changeReasonVsPrevious": "입력값 완전 동일(변경 없음) -- 밴드(EPS·peer 배수) 근거 불변, 현재가만 바뀌었어도 밴드 자체는 재계산하지 않음",
      "generatedAt": "2026-09-26T13:21:28.517540+09:00",
      "asOfDate": "2026-09-26",
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckWasBenignSkip": false,
      "lastCheckBenignSkipNote": null,
      "priceAgeDaysAtBuild": 1,
      "snapshotAgeDaysAtBuild": 0,
      "priceDateClass": "ok",
      "snapshotDateClass": "ok",
      "priceStaleAfterDays": 7,
      "snapshotStaleAfterDays": 3,
      "builtAt": "2026-09-26",
      "isStaleReference": false,
      "staleReferenceNote": null,
      "conditionsForChange": [
        "동종기업(AMAT, KLAC)이 받는 주가수익배수가 재평가되면 참고범위 자체가 이동합니다.",
        "대상종목의 컨센서스 EPS 추정치가 바뀌면(실적 발표 등) 같은 배수라도 범위 값이 달라집니다.",
        "동종기업 포함/제외 구성이 바뀌면(신규 편입, 자료 결측으로 제외 등) 범위가 달라질 수 있습니다."
      ],
      "epsBasisNote": {
        "supplier": "Yahoo Finance quoteSummary API (earningsTrend 모듈)",
        "fieldPath": "earningsTrend.trend[].earningsEstimate.avg (buy_signal_telegram.py의 fetch_quote_summary()가 그대로 epsAvg로 저장, 가공 없음)",
        "underlyingProvider": "S&P Global Market Intelligence (Yahoo Finance 공식 고객센터 안내 기준: \"EPS and revenue estimates & actuals... provided by S&P Global Market Intelligence\", https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html)",
        "providerGeneralPolicy": "S&P Global의 공개 방법론 문서는 '일회성 항목을 조정·제외해 정규화된 이익 지표를 만든다'는 일반 관행을 설명하지만, 종목·기간별 필드 수준의 GAAP/조정 구분 스펙은 무료로 확인하지 못함.",
        "definitionConfirmationLevel": "source_traced_comparability_unconfirmed",
        "definitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
        "currency": "USD(quoteCurrency 필드 기준, 종목별 raw 데이터에서 확인됨)",
        "shareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
        "cautionNote": "아래 관찰된 GAAP·조정 EPS 격차는 해당 회사의 '이미 발표된 과거 분기 실적'을 실적발표 원문에서 직접 대조한 것이며, Yahoo/S&P 컨센서스가 실제로 어느 쪽을 썼는지 확정하지 않는다. 과거 격차를 미래 컨센서스에 보정계수로 적용하지 않았다.",
        "observations": [
          {
            "quarterLabel": "FY2026 Q(2026-03-29 마감)",
            "gaapEps": 1.45,
            "adjustedEps": 1.47,
            "diffPct": 1.4,
            "diffCalc": "(조정-GAAP)/GAAP",
            "sourceUrl": "https://newsroom.lamresearch.com/2026-04-22-Lam-Research-Corporation-Reports-Financial-Results-for-the-Quarter-Ended-March-29,-2026"
          },
          {
            "quarterLabel": "FY2026 Q(2026-06-28 마감)",
            "gaapEps": 1.81,
            "adjustedEps": 1.82,
            "diffPct": 0.6,
            "diffCalc": "(조정-GAAP)/GAAP",
            "sourceUrl": "https://newsroom.lamresearch.com/2026-07-29-Lam-Research-Corporation-Reports-Financial-Results-for-the-Quarter-Ended-June-28,-2026"
          }
        ],
        "observationSummary": "확인된 2개 분기 모두 격차가 2% 미만으로 작음 - 기준 모호성의 실질적 영향은 낮아 보임(확정 아님, 관찰일 뿐, 향후 분기엔 달라질 수 있음).",
        "splitNote": null,
        "lastReviewed": "2026-09-21"
      },
      "priceMultipleDiagnostic": {
        "ok": true,
        "current_price": 315.2099914550781,
        "current_price_as_of": "2026-09-25",
        "multiples": {
          "fy_current": {
            "eps": 9.50548,
            "period_end": "2027-06-30",
            "period_label": "FY0(당해 회계연도)",
            "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
            "per": 33.16087051417478,
            "per_price_basis_note": "현재가 $315.2100(2026-09-25) / 해당 기간 EPS"
          },
          "fy_next": {
            "eps": 11.73954,
            "period_end": "2028-06-30",
            "period_label": "FY1(익년 회계연도)",
            "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
            "per": 26.85028471772132,
            "per_price_basis_note": "현재가 $315.2100(2026-09-25) / 해당 기간 EPS"
          },
          "ntm": {
            "eps": 10.044102684931508,
            "period_end": null,
            "period_label": "NTM(향후 365일 일수보간)",
            "window_start": "2026-09-26",
            "window_end": "2027-09-26",
            "eps_basis_note": "0y 2027-06-30(가중76%) / +1y 2028-06-30(가중24%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
            "per": 31.38259348223973,
            "per_price_basis_note": "현재가 $315.2100(2026-09-25) / 해당 기간 EPS"
          }
        },
        "folded_required_eps_if_multiple_held": {
          "status": "folded_reference_only_not_core_diagnosis",
          "note": "[접힌 참고용, 핵심 진단(A-1) 아님] '지금 배수(FY0/FY1/NTM PER)가 미래에도 그대로 유지된다면' 필요한 EPS를 역산한 값이다. 배당을 제외하면 필요EPS = 현재EPS x (1+요구수익률)이 되는 항등식이므로(현재가/현재EPS로 만든 배수를 다시 곱해 현재가로 되돌리는 구조), 특히 NTM 행의 갭은 항상 요구수익률(현재 10%)과 같게 나온다 -- 종목별 미래 실적 부담의 차이를 보여주는 값이 아니다. 배당 포함 식은 필요EPS=(현재가x(1+요구수익률)-연배당)/현재배수이며, 미래 배수·배당이 지금과 동일하게 유지된다는 가정에서만 성립하는 조건부 산술이다. 매수가·매도가·확률·성공확률이 아니며 운영 매수 배지·사다리에 연결하지 않는다.",
          "required_return_assumption": 0.1,
          "annual_dividend_per_share": 0.0,
          "dividend_source_status": "unknown_assumed_zero_flagged",
          "dividend_provenance": null,
          "dividend_example_label": "배당 제외 예시(미확인, 확정 무배당 아님)",
          "by_multiple": {
            "fy_current": {
              "required_eps_if_multiple_unchanged": 10.456028000000002,
              "vs_same_period_eps_pct": 10.000000000000009
            },
            "fy_next": {
              "required_eps_if_multiple_unchanged": 12.913494000000002,
              "vs_same_period_eps_pct": 10.000000000000009
            },
            "ntm": {
              "required_eps_if_multiple_unchanged": 11.04851295342466,
              "vs_same_period_eps_pct": 10.000000000000032
            }
          }
        }
      }
    },
    "longTermScenario": {
      "kind": "lrcx_long_term_eps_growth_exit_multiple_scenario",
      "not_the_dcf": "이 종목은 아직 별도의 독립 DCF가 없다 -- 상대가치(동종기업 배수) 참고범위와도 완전히 별개다. 세 값을 섞지 않는다.",
      "assumption_disclaimer": "요약: FY2028 EPS는 '지금 관측된 컨센서스'이고, 이후 성장률·출구PER·요구수익률은 전부 분석자가 근거(8개년 실제 매출·이익 이력, GAAP $5.76 vs 비GAAP $5.82 EPS 정의 확인[2026-09-22 정정 -- 이전에 '동일'로 잘못 적었음], 10년 밸류에이션 관측값, FY2026 공식 현금흐름표)를 조사해 선택한 가정이다. 회사가 확정한 전망이나 통계적으로 검증된 값이 아니다.",
      "assumption_review": {
        "eps_base": "FY2028 EPS $11.65184는 회사가 확정한 실적이 아니라, 지금(2026-09-22 기준) 관측된 컨센서스 전망치(estimates_cache.json, 26명 애널리스트)다 -- '그 시점에 관측된 전망'이라는 성격이지 '그 시점의 실제 달성'이라는 뜻이 아니다. 이 전망 자체가 이미 AI 반도체 설비투자 슈퍼사이클을 상당 부분 반영한 값(FY2026 실제 GAAP EPS $5.76 대비 2개년 합산 약 +102%)이라는 점을 그대로 밝힌다 -- 이후 FY2029~FY2032 성장 경로는 이 전망을 그대로 연장하지 않고, 아래처럼 8개년 실제 이력에 근거한 정상화된 성장률을 쓴다. 다만 8개년 CAGR (13.37%) 자체는 과거의 관측값(재현 가능한 사실)이고, 이를 이미 고점 근처인 FY2028 컨센서스 이후 다시 4년간 적용하는 것은 분석자의 미래 정책 가정이다 -- 이 둘을 구분해서 표시한다(아래 compounding_assumptions_note 참고: 이 가정은 단독이 아니라 마진 고정·자사주 감소율 가정과 함께 겹쳐 적용된다).",
        "growth_sustainability": "LRCX의 실제 매출은 최근 8개년(FY2019~FY2026) 동안 -14.5%(FY2024)부터 +45.6%(FY2021)까지 크게 출렁였다 -- 웨이퍼설비투자(WFE) 지출은 반도체 업황에 따라 순환한다는 점이 실적으로 그대로 드러난다. 이 모듈은 근래 2개년 컨센서스(FY2027 +50.3%·FY2028 +17.3%, AI 슈퍼사이클 반영)를 그대로 4년 연장하지 않는다 -- 대신 호황(FY2021)과 불황(FY2024)을 모두 포함한 8개년 실제 매출 CAGR(약 13.37%, 이미 한 사이클 전체를 통과한 값)을 정상화된 성장률로 쓴다 -- '컨센서스가 없어서'가 아니라 '있는 컨센서스가 사이클 고점 근처라서' 쓰지 않는다는 뜻이다. 영업이익률·법인세율·순이자는 일정하게 유지된다는 단순화(부문별 손익 공시가 없어 AMAT식 부문별 재구성이 불가능하다는 한계를 명시 -- LRCX는 단일 보고 부문)를 적용하면 순이익도 같은 비율로 성장한다(실제로는 FY2019 영업이익률 25.5%에서 FY2026 35.3%로 이미 크게 개선됐으나, 이 개선이 앞으로도 같은 속도로 이어진다고 가정하지 않는다 -- 마진 고정이 보수적 방향의 단순화). 주식수는 관측된 최근 실현 속도(-1.13%/yr, 2025-08→2026-08)를 그대로 쓰지 않고, FY2026 공식 현금흐름표 실측(자사주 매입 $3,850M + 배당 $1,270M = $5,120M, FCF $4,891M의 약 104.7% -- 이미 FCF를 초과)에 근거해 이보다 보수적인 -1.0%/yr를 가정한다. 이 세 입력의 결과로 EPS 성장률은 약 14.51%가 된다 -- growth_rate_derivation 딕셔너리의 하드코딩이 아니라 _eps_growth_from_bridge()의 실제 계산 결과이며, PRIMARY_GROWTH_RATE도 같은 함수의 같은 결과를 그대로 쓴다(AMAT과 같은 구조적 연결, 회귀시험 LT-L1로 확인).",
        "compounding_assumptions_note": "[2026-09-22 신규 -- item4 보완] FY2029~FY2032 EPS 성장 경로는 서로 다른 세 가정이 동시에 겹쳐 적용된 결과다 -- 각각을 '보수적'이라고 개별적으로 설명하는 것만으로는 부족해서, 세 가정의 결합 효과를 한곳에 모아 밝힌다. (1) 출발점: FY2028 컨센서스 EPS $11.65184 자체가 이미 근래 2개년 AI 슈퍼사이클 반영 컨센서스(FY2027 +50.3%·FY2028 +17.3%)의 결과이므로, 이미 고점 근처에서 성장을 다시 시작한다. (2) 마진: 8년간 9.8%p 개선된 영업이익률(25.5%→35.3%)이 향후 4년간 추가 개선 없이 그대로 유지된다고 가정한다(순이익률=매출성장률과 같은 비율로 성장). (3) 주식수: 이미 FCF의 약 104.7%를 쓰고 있는 자사주매입 속도가 실현 속도(-1.13%/yr)보다도 낮은 -1.0%/yr로 4년간 유지된다고 가정한다. 세 가정 모두 개별적으로는 보수적 방향(추가 재평가·추가 마진개선·추가 가속을 가정하지 않음)이지만, '이미 높은 출발점 위에 8개년 정상화 성장률을 다시 얹는다'는 선택 자체는 여전히 분석자의 정책 판단이며, 세 가정을 함께 봐야 전체 그림(EPS 성장률 약 14.51%가 어떻게 만들어지는지)을 알 수 있다 -- 어느 하나만 따로 떼어 '이 가정은 보수적이다'라고 결론짓지 않는다.",
        "exit_per_validity": "[2026-09-22 정정] LRCX의 FY2026 GAAP 희석EPS($5.76)와 비GAAP(조정) 희석EPS($5.82)는 완전히 같지 않다(약 1.04%p 차이, 공식 슬라이드 PDF 20쪽 확인 -- 분기 기준으로도 GAAP $1.81 vs 비GAAP $1.82 등 몇 센트 차이는 있음). AMAT처럼 '어느 기준의 배수를 쓰는가'가 크게 갈리는 문제는 아니지만 구조적으로 없다고 단정하지도 않는다 -- 이 모듈이 고른 것은 우선 표본기간이다: 최근 3년 평균 PER(32.1배)은 AI 슈퍼사이클 재평가가 상당히 진행된 시점의 관측치이고, 10년 평균(21.0배)은 2018년 저점(6.99배)부터 이번 고점(65.47배 부근)까지 여러 번의 완전한 사이클을 통과한 값이다. 이 모듈은 10년 평균을 그대로(21.0배로 반올림) 쓴다 -- '지금 수준의 AI 프리미엄이 FY2032까지 그대로 유지된다'고 가정하지 않기 위함이다. 다만 10년 평균이 '정상 수준'이라고 확정하는 것도 아니다 -- 아래 범위·스트레스 시나리오에서 5년 평균(25.63배)·3년 평균(32.11배)을 썼을 때의 영향도 함께 보여준다. 출처는 이 프로젝트의 공식 가격 소스(prices_cache.json)가 아니라 제3자 참고자료(fullratio.com, 2026-09-22 조회)이며, 실제 TTM EPS($5.79)가 GAAP·비GAAP 어느 쪽과도 정확히 일치하지 않고 기본/희석 구분도 확인되지 않는다 -- 이 정의-불확실성을 exit_per_selection_decomposition.eps_definition_check에 별도로 남긴다(영향의 크기가 표본기간 선택 효과보다 훨씬 작다는 것을 확인했고, 그래서 21배를 유지한다). 연말/조회시점 종가 기준이라 이 프로젝트의 회계연도(6월 마감) 기준과 완전히 정렬되지는 않는다는 한계도 명시한다.",
        "no_reverse_engineering": "이 가정들은 '현재 주가와 비슷한 결과가 나오도록' 거꾸로 고른 것이 아니다 -- 추천 기준안(성장 14.51%·출구PER 21배)의 목표주가·매입가 상한은 현재 비교가격과 독립적으로 계산되며, 그 결과가 현재가보다 높을 수도 낮을 수도 있다는 것을 그대로 보여준다. AMAT의 8.82% 성장률·22배 출구PER·1% 주식수 감소를 LRCX에 그대로 복제하지 않았다 -- 성장률은 LRCX 자신의 8개년 매출 CAGR에서, 출구PER은 LRCX 자신의 10년 PER 이력에서, 주식수 감소율은 LRCX 자신의 FY2026 현금흐름표 실측에서 각각 독립적으로 도출했다(우연히 주식수 감소율 -1.0%/yr는 AMAT과 같은 수치가 됐지만, 이는 두 회사 모두 '이미 FCF를 초과하는 자사주매입 속도가 그대로 유지된다고 가정하지 않는다'는 같은 보수적 원칙을 각자의 실측값에 적용한 결과이지, 값을 복사한 것이 아니다).",
        "assumption_vs_fact_note": "요약: FY2028 EPS는 '지금 관측된 컨센서스'이고, 이후 성장률·출구PER·요구수익률은 전부 분석자가 근거(8개년 실제 매출·이익 이력, GAAP $5.76 vs 비GAAP $5.82 EPS 정의 확인[2026-09-22 정정 -- 이전에 '동일'로 잘못 적었음], 10년 밸류에이션 관측값, FY2026 공식 현금흐름표)를 조사해 선택한 가정이다. 회사가 확정한 전망이나 통계적으로 검증된 값이 아니다."
      },
      "evidence_base": {
        "eps_basis_note": {
          "kind": "관측값(회사 공식 발표, 2026-09-22 원문 재확인 -- [정정] 이전 버전이 '$5.76로 동일'이라고 적었던 것은 오류였음)",
          "fact": "FY2026(2026-06-28 마감) GAAP 희석EPS $5.76, 비GAAP(조정) 희석EPS $5.82 (서로 다름, 약 1.04%p 차이 -- 공식 슬라이드 PDF 20쪽, https://investor.lamresearch.com/image/Q4_2026_slides_full_final.pdf, 2026-07-29 발표 'Twelve Months Ended June 28, 2026' 섹션).",
          "quarterly_detail": "2026년 6월 분기 GAAP $1.81 vs 비GAAP $1.82, 2026년 3월 분기 GAAP $1.45 vs 비GAAP $1.47 -- 분기 단위로는 차이가 센트 단위로 작지만, 연간 누적으로는 $5.76 vs $5.82로 무시할 수 없는 차이다.",
          "implication": "AMAT만큼 GAAP/조정 EPS 정의가 크게 갈리지는 않지만(연간 약 1.04%p), 완전히 같지도 않다 -- 출구PER 선택에 exit_per_selection_decomposition.eps_definition_check로 정의 확인 수준과 그 영향의 크기(표본기간 선택 효과보다 훨씬 작음)를 남긴다.",
          "currency_and_share_unit": "USD, 보통주 1주 기준(주당). 2024년 10월 10:1 액면분할(주식 병합 아닌 분할)이 이미 있었으나, 이 프로젝트가 쓰는 financials_cache.json·prices_cache.json 모두 분할 조정 후 수치로 일관되게 소급 적용돼 있음을 확인함(주식수 시계열이 2020-10 시점부터 이미 10억 주 이상으로 연속적임)."
        },
        "revenue_history": {
          "kind": "관측값(SEC 소스 financials_cache.json)",
          "annual_revenue_musd_by_fy": {
            "2019": 9653.559,
            "2020": 10044.736,
            "2021": 14626.15,
            "2022": 17227.039,
            "2023": 17428.516,
            "2024": 14905.386,
            "2025": 18435.591,
            "2026": 23232.69
          },
          "derived_cagr_8y_fy2019_2026": 0.13367203725807486,
          "note": "FY2024 매출이 전년대비 -14.5%로 역성장했다는 점(WFE 사이클 조정)과 FY2021 +45.6% 급증(팬데믹 이후 설비투자 붐)을 모두 포함한 8개년 CAGR -- 특정 방향으로 치우친 구간만 골라 쓰지 않았다."
        },
        "buyback_and_margin": {
          "buyback_cash_check_fy2026": {
            "kind": "실측값(공식 현금흐름표·보도자료, 2026-09-22 조사)",
            "actual_buyback_musd": 3850.0,
            "actual_dividends_paid_musd": 1270.0,
            "actual_total_musd": 5120.0,
            "fcf_musd": 4891.252,
            "actual_total_pct_of_fcf": 104.67667582860174,
            "source": "Lam Research FY2026 실적 발표 보도자료(2026-07-29) 및 관련 보도(총 $5.12B 주주환원, 자사주 $3.85B·배당 $1.27B).",
            "implication": "이미 FCF의 약 104.7%를 주주환원에 쓰고 있다 -- 이 속도가 그대로 유지·가속된다고 가정하지 않고, 실현 속도(-1.13%/yr)보다도 보수적인 -1.0%/yr 순주식수 감소를 쓴다."
          },
          "operating_margin_trend": {
            "kind": "관측값(SEC 소스)",
            "fy2019_pct": 25.5,
            "fy2026_pct": 35.3,
            "note": "8년간 영업이익률이 9.8%p 개선됐다 -- 이미 상당 부분 실현된 구조적 개선이며, 이 모듈은 향후 4년간 추가 개선을 가정하지 않는다(마진 고정 단순화, 보수적 방향)."
          },
          "shares_outstanding_recent_yoy_change_pct": {
            "kind": "관측값(SEC 소스, 반기 보고 시점 기준)",
            "aug_2025": 1265621000.0,
            "aug_2026": 1251321000.0,
            "yoy_change_pct": -1.129880114189008
          }
        },
        "valuation_multiples": {
          "trailing_gaap_per_history": {
            "kind": "제3자 참고자료(fullratio.com, 2026-09-22 조회 -- 이 프로젝트의 공식 가격 소스 아님)",
            "avg_10y": 21.01,
            "avg_5y": 25.63,
            "avg_3y": 32.11,
            "range_low": 6.99,
            "range_high": 65.47,
            "note": "연말/조회시점 종가 기준(이 프로젝트의 회계연도 6월 마감과 완전히 정렬되지 않음) -- 정확한 소수점보다 '표본기간에 따라 10.1~32배 수준의 큰 차이가 난다'는 방향성 근거로 쓴다."
          },
          "exit_per_selection_decomposition": {
            "step0_trailing_10y_avg_gaap_per": 21.01,
            "step1_trailing_3y_avg_gaap_per_if_used_instead": 32.11,
            "recency_rerating_effect_pct_not_applied": 0.5283198476915754,
            "step2_chosen_per": 21.0,
            "policy_choice_effect_pct_vs_10y_avg": -0.0004759638267491928,
            "eps_definition_check": {
              "gaap_diluted_eps_fy2026": 5.76,
              "nongaap_diluted_eps_fy2026": 5.82,
              "gaap_vs_nongaap_gap_pct": 0.01041666666666674,
              "third_party_source_ttm_eps": 5.79,
              "third_party_gap_vs_gaap_pct": 0.005208333333333481,
              "third_party_gap_vs_nongaap_pct": -0.005154639175257825,
              "third_party_basic_or_diluted_confirmed": false,
              "confidence": {
                "gaap_vs_nongaap_fy2026": "확인됨(공식 슬라이드 PDF 20쪽, 2026-07-29 발표, 2026-09-22 재확인)",
                "trailing_10y_3y_per_series_eps_basis": "미확인(fullratio.com이 방법론을 공개하지 않고, 기본/희석 구분도 사이트에 없음 -- 2026-09-22 재조회로 확인)",
                "fy2028_consensus_eps_basis": "미확인(estimates_cache.json 컨센서스 제공자가 GAAP/비GAAP 구분을 표시하지 않음)"
              },
              "per_if_10y_series_were_nongaap_basis": 20.78125,
              "per_if_10y_series_matched_third_party_ttm": 20.890624999999996,
              "residual_uncertainty_note": "확인된 정의 격차(GAAP $5.76 vs 비GAAP $5.82)는 약 1.04%p다 -- 만약 10년 PER 이력이 비GAAP 기준이었다면 지금 고른 21.0배는 GAAP 기준으로 환산하면 약 20.78배에 해당한다. 제3자 소스(fullratio.com)의 실제 TTM EPS($5.79)는 GAAP·비GAAP 둘 중 어느 쪽과도 정확히 일치하지 않고, 기본/희석 구분도 사이트에 없으며, 회계연도(6월 마감) 기준이 아니라 조회시점 TTM 기준이라 시차도 섞여 있을 수 있다 -- 이 격차가 정의 차이 때문인지 시차 때문인지 분리하지 않았다. 다만 이 정의-불확실성의 크기(약 1~2%p, 배수로 환산하면 약 0.2~0.4배)는 recency_rerating_effect_pct_not_applied(약 +52.9%p, 최근 3년 평균을 썼다면 배수가 그만큼 더 높았을 것)에 비해 한 자릿수 이상 작다 -- 그래서 21배(10년 평균 반올림)를 폐기하지 않고 유지하되, 이 잔여 불확실성을 감춘 것이 아니라 그대로 남긴다."
            },
            "note": "recency_rerating_effect_pct_not_applied(+52.9%p 수준)는 최근 3년 평균을 썼다면 배수가 그만큼 더 높았을 것이라는 뜻이며, 이 모듈은 그 재평가를 그대로 연장하지 않기로 한 정책 선택을 policy_choice_effect_pct_vs_10y_avg(0에 가까움, 10년 평균을 거의 그대로 씀)로 남긴다. eps_definition_check는 별도 축으로, GAAP=비GAAP라는 이전 가정이 틀렸음을 인정하고(2026-09-22 정정) 정의 확인 수준과 그 영향의 크기를 함께 남긴다 -- 영향이 표본기간 선택 효과보다 훨씬 작다는 것을 근거로 21배를 유지한다."
          }
        },
        "consensus_snapshot": {
          "kind": "관측값(estimates_cache.json, 2026-09-20 수집)",
          "fy2027_0y": {
            "eps_avg": 9.50808,
            "eps_growth_pct": 63.37,
            "revenue_avg_musd": 34928.098,
            "revenue_growth_pct": 50.34,
            "analysts": 29
          },
          "fy2028_plus1y": {
            "eps_avg": 11.65184,
            "eps_growth_pct": 22.55,
            "revenue_avg_musd": 40956.155,
            "revenue_growth_pct": 17.26,
            "analysts": 26
          },
          "note": "base_eps로 쓰는 FY2028 컨센서스는 그 자체로 이미 AI 슈퍼사이클 지속을 상당 부분 반영한 값이다 -- 이 사실을 감추지 않고, 그 이후(FY2029~FY2032) 성장은 이 컨센서스를 연장하지 않는다."
        }
      },
      "as_of_execution": "2026-09-26",
      "growth_rate_assumption": 0.14512326995765146,
      "exit_per_assumption": 21.0,
      "is_primary_recommended_assumption": true,
      "primary_growth_rate": 0.14512326995765146,
      "primary_exit_per": 21.0,
      "primary_review_by": "2026-12-31",
      "growth_years": 4,
      "base_fiscal_year": 2028,
      "target_fiscal_year": 2032,
      "annualized_dividend_per_share": 1.32,
      "dividend_source_note": "연배당 $1.32/주(분기 $0.33 x4, 2026-09-22 확인) -- model_assumption(확정 아님, 다음 확정 지급 이후 동일 금액 유지 가정).",
      "estimates_fetched_at": "2026-09-26",
      "estimates_age_days": 0,
      "base_eps_fact": 11.73954,
      "base_eps_end_date": "2028-06-30",
      "base_eps_analysts": 26,
      "target_date": "2032-06-30",
      "eps_path": [
        13.443220432598647,
        15.394144540538877,
        17.628193134462606,
        20.18645416558084
      ],
      "target_eps": 20.18645416558084,
      "target_price": 423.91553747719763,
      "comparison_price": 315.2099914550781,
      "comparison_price_as_of": "2026-09-25",
      "comparison_price_invalid_reason": null,
      "base_scenario": {
        "blocked": false,
        "holding_period_actual_days": 2105,
        "holding_period_actual_years": 5.767123287671233,
        "cashflows_by_year": {
          "1": 1.32,
          "2": 1.32,
          "3": 1.32,
          "4": 1.32,
          "5": 1.32,
          "5.767123287671233": 424.9281402169237
        },
        "cashflow_note": {
          "approximation_note": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 5.7671년), 매도 시점의 부분연도에는 연배당의 76.7%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다."
        },
        "ceilings_by_required_return": {
          "0.08": {
            "blocked": false,
            "required_return": 0.08,
            "max_purchase_price": 277.8896619123542,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          },
          "0.1": {
            "blocked": false,
            "required_return": 0.1,
            "max_purchase_price": 250.24805483353674,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          },
          "0.12": {
            "blocked": false,
            "required_return": 0.12,
            "max_purchase_price": 225.79739655124575,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          }
        },
        "conditional_annualized_return_at_comparison_price": {
          "status": "SUCCESS",
          "rate": 0.05644203731692412,
          "residual": 9.423501978744753e-10,
          "note": "solve_implied_rate와는 별개의 신규 수치해 함수 -- P05/P10 근거로 대체하지 않음"
        }
      },
      "required_return_ceilings": {
        "8%": 277.8896619123542,
        "10%": 250.24805483353674,
        "12%": 225.79739655124575
      },
      "conditional_annualized_return_at_comparison_price": 0.05644203731692412,
      "conditional_annualized_return_status": "SUCCESS",
      "default_required_return": 0.1,
      "default_ceiling_price": 250.24805483353674,
      "like_for_like_comparison_note": "target_price($423.92, FY2032 시점의 할인 전 미래 목표주가)와 default_ceiling_price($250.25, 오늘 현재가치로 할인한 연 10% 요구수익률 매입가 상한)는 서로 다른 의미의 가격이다.",
      "return_condition_met_at_default_required_return": false,
      "state_label": "수익조건 미충족",
      "blocked": false,
      "long_term_thesis_confirmation_note": "화면의 '사업 전제' 표시는 최신 분기 매출·영업이익이 동시에 둔화하지 않았는지만 확인한다 -- 이는 '최근 실적 방향'이며, 향후 4년(FY2029~FY2032) EPS 성장 경로(대표 가정 연 14.51%, 2026-12-31 재검토 예정)가 실제로 달성 가능한지를 확인한 것이 아니다. 웨이퍼설비투자(WFE) 사이클, AI 반도체향 첨단패키징 수요, 메모리/파운드리 자본지출 방향, 마진, 자사주매입 지속가능성은 정기적으로(예: 분기 실적 발표마다) 재확인이 필요한 상태로 표시하며 '확인 완료'로 표시하지 않는다.",
      "long_term_thesis_confirmed": false,
      "price_return_table": [
        {
          "purchase_price": 170.25,
          "status": "SUCCESS",
          "annualized_return": 0.17690020117702254
        },
        {
          "purchase_price": 210.25,
          "status": "SUCCESS",
          "annualized_return": 0.13409940839846962
        },
        {
          "purchase_price": 250.25,
          "status": "SUCCESS",
          "annualized_return": 0.09999850206443167
        },
        {
          "purchase_price": 310.25,
          "status": "SUCCESS",
          "annualized_return": 0.05937769042529905
        },
        {
          "purchase_price": 315.21,
          "status": "SUCCESS",
          "annualized_return": 0.05644203230707487
        },
        {
          "purchase_price": 380.25,
          "status": "SUCCESS",
          "annualized_return": 0.022350005449561613
        }
      ],
      "range_growth_fixed_exit_per_sensitivity": {
        "note": "성장률을 대표 가정(14.51%)으로 고정하고 출구PER만 18~26배(10년 평균 부근 저점~5년 평균 부근)로 바꾼 민감도다 -- 신뢰구간이 아니며 확률을 붙이지 않는다.",
        "scenarios": {
          "low": {
            "exit_per": 18.0,
            "growth_rate": 0.14512326995765146,
            "target_price": 363.35617498045514,
            "ceiling_at_default_required_return": 215.2966548452156
          },
          "high": {
            "exit_per": 26.0,
            "growth_rate": 0.14512326995765146,
            "target_price": 524.8478083051018,
            "ceiling_at_default_required_return": 308.5003881474054
          }
        }
      },
      "stress_scenarios": {
        "note": "확률을 검증하지 않았으므로 임의의 성공확률을 붙이지 않는다. decomposition_vs_primary는 대표 가정(성장 14.51%·PER 21배) 대비 성장률만/출구PER만/둘 다 바꿨을 때의 효과를 분리해서 보여준다.",
        "scenarios": {
          "stress_low": {
            "label": "성장 연 5%(WFE 사이클 조정 국면, FY2024 실제 매출 역성장 -14.5% 재현 가정) · 종료 PER 7배(10년 GAAP 저점)",
            "growth_rate": 0.05,
            "exit_per": 6.99,
            "target_eps": 14.269484242125003,
            "target_price": 99.74369485245377,
            "ceiling_at_default_required_return": 63.15461016363988,
            "decomposition_vs_primary": {
              "base_price": 423.91553747719763,
              "growth_only_price": 299.6591690846251,
              "growth_only_pct": -0.29311586249479304,
              "per_only_price": 141.1033146174101,
              "per_only_pct": -0.667142857142857,
              "combined_price": 99.74369485245377,
              "combined_pct": -0.7647085656589812,
              "note": "성장률만 바꾼 효과와 출구PER만 바꾼 효과를 각각 보여준다 -- 결합효과를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다."
            }
          },
          "stress_high": {
            "label": "성장 연 25%(근래 컨센서스 수준 AI 슈퍼사이클 지속) · 종료 PER 25.6배(5년 평균)",
            "growth_rate": 0.25,
            "exit_per": 25.63,
            "target_eps": 28.660986328125,
            "target_price": 734.5810795898437,
            "ceiling_at_default_required_return": 429.5464354192272,
            "decomposition_vs_primary": {
              "base_price": 423.91553747719763,
              "growth_only_price": 601.880712890625,
              "growth_only_pct": 0.41981281571449847,
              "per_only_price": 517.3788202638369,
              "per_only_pct": 0.2204761904761905,
              "combined_price": 734.5810795898437,
              "combined_pct": 0.7328477365125046,
              "note": "성장률만 바꾼 효과와 출구PER만 바꾼 효과를 각각 보여준다 -- 결합효과를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다."
            }
          },
          "stress_consensus_extrapolated": {
            "label": "성장 연 30%(FY2027·FY2028 컨센서스 성장률을 단순 4년 연장, 이 모듈이 채택하지 않는 예시적 상방) · 종료 PER 32.1배(3년 평균, AI 재평가 유지 가정)",
            "growth_rate": 0.3,
            "exit_per": 32.11,
            "target_eps": 33.529300194,
            "target_price": 1076.62582922934,
            "ceiling_at_default_required_return": 626.9550996732187,
            "decomposition_vs_primary": {
              "base_price": 423.91553747719763,
              "growth_only_price": 704.115304074,
              "growth_only_pct": 0.6609801760613088,
              "per_only_price": 648.1870432568007,
              "per_only_pct": 0.529047619047619,
              "combined_price": 1076.62582922934,
              "combined_pct": 1.5397177834918394,
              "note": "성장률만 바꾼 효과와 출구PER만 바꾼 효과를 각각 보여준다 -- 결합효과를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다."
            }
          }
        }
      }
    }
  },
  "KLAC": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": true,
      "rangeLow": 155.86250651500828,
      "rangeHigh": 180.64800289212667,
      "rangeMid": 168.25525470356746,
      "bandStatus": "ABOVE_BAND",
      "bandDisclaimer": "이 범위는 검증된 매수가·바닥가격·성공확률이 아니다 -- 동종업계가 지금 받는 배수를 그대로 적용한 참고 범위일 뿐이며, 이 범위와 별도로 산출되는 장기 DCF 내재가치(조건부 참고값)와도 다른 개념이다.",
      "comparisonPrice": 187.9199981689453,
      "comparisonPriceAsOf": "2026-09-25",
      "comparisonPriceLabel": "최근 종가",
      "comparisonPriceNote": "실시간 시세가 아니라 prices_cache.json에 기록된 마지막 종가이며, 위 관측일 기준입니다.",
      "comparisonPriceType": "confirmed_close",
      "comparisonPriceIsIntradayFallbackSkipped": false,
      "comparisonPriceIntradayObservedDate": null,
      "comparisonPriceIntradayObservedValue": null,
      "comparisonPriceIntradayRetrievedAt": null,
      "comparisonPriceHasPossibleMissingSession": false,
      "comparisonPricePossibleMissingSessionDates": [],
      "comparisonPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "comparisonPricePossibleMissingSessionCalendarSource": null,
      "comparisonPriceIssue": null,
      "peersUsed": [
        "AMAT",
        "LRCX"
      ],
      "peersExcluded": [
        {
          "ticker": "KLAC",
          "reason": "대상 종목 자기 자신(KLAC) -- peer로 쓰지 않음"
        },
        {
          "ticker": "ASML",
          "reason": "통화 불일치: financial_currency='EUR', quote_currency='USD' (둘 다 'USD'이어야 함, 환전 미적용)"
        }
      ],
      "changeReasonVsPrevious": "입력값 완전 동일(변경 없음) -- 밴드(EPS·peer 배수) 근거 불변, 현재가만 바뀌었어도 밴드 자체는 재계산하지 않음",
      "generatedAt": "2026-09-26T13:21:28.747922+09:00",
      "asOfDate": "2026-09-26",
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckWasBenignSkip": false,
      "lastCheckBenignSkipNote": null,
      "priceAgeDaysAtBuild": 1,
      "snapshotAgeDaysAtBuild": 0,
      "priceDateClass": "ok",
      "snapshotDateClass": "ok",
      "priceStaleAfterDays": 7,
      "snapshotStaleAfterDays": 3,
      "builtAt": "2026-09-26",
      "isStaleReference": false,
      "staleReferenceNote": null,
      "conditionsForChange": [
        "동종기업(AMAT, LRCX)이 받는 주가수익배수가 재평가되면 참고범위 자체가 이동합니다.",
        "대상종목의 컨센서스 EPS 추정치가 바뀌면(실적 발표 등) 같은 배수라도 범위 값이 달라집니다.",
        "동종기업 포함/제외 구성이 바뀌면(신규 편입, 자료 결측으로 제외 등) 범위가 달라질 수 있습니다."
      ],
      "epsBasisNote": {
        "supplier": "Yahoo Finance quoteSummary API (earningsTrend 모듈)",
        "fieldPath": "earningsTrend.trend[].earningsEstimate.avg (buy_signal_telegram.py의 fetch_quote_summary()가 그대로 epsAvg로 저장, 가공 없음)",
        "underlyingProvider": "S&P Global Market Intelligence (Yahoo Finance 공식 고객센터 안내 기준: \"EPS and revenue estimates & actuals... provided by S&P Global Market Intelligence\", https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html)",
        "providerGeneralPolicy": "S&P Global의 공개 방법론 문서는 '일회성 항목을 조정·제외해 정규화된 이익 지표를 만든다'는 일반 관행을 설명하지만, 종목·기간별 필드 수준의 GAAP/조정 구분 스펙은 무료로 확인하지 못함.",
        "definitionConfirmationLevel": "source_traced_comparability_unconfirmed",
        "definitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
        "currency": "USD(quoteCurrency 필드 기준, 종목별 raw 데이터에서 확인됨)",
        "shareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
        "cautionNote": "아래 관찰된 GAAP·조정 EPS 격차는 해당 회사의 '이미 발표된 과거 분기 실적'을 실적발표 원문에서 직접 대조한 것이며, Yahoo/S&P 컨센서스가 실제로 어느 쪽을 썼는지 확정하지 않는다. 과거 격차를 미래 컨센서스에 보정계수로 적용하지 않았다.",
        "observations": [
          {
            "quarterLabel": "FY2026 Q3(2026-03-31 마감, 분할 전)",
            "gaapEps": 9.12,
            "adjustedEps": 9.4,
            "diffPct": 3.1,
            "diffCalc": "(조정-GAAP)/GAAP",
            "sourceUrl": "https://ir.kla.com/news-events/press-releases/detail/514/kla-corporation-reports-fiscal-2026-third-quarter-results",
            "note": "2026-06-11 시행된 10:1 액면분할 이전 수치 - 아래 분기와 주식 단위가 다름"
          },
          {
            "quarterLabel": "FY2026 Q4(2026-06 마감, 분할 후)",
            "gaapEps": 1.04,
            "adjustedEps": 1.05,
            "diffPct": 1.0,
            "diffCalc": "(조정-GAAP)/GAAP",
            "sourceUrl": "https://ir.kla.com/news-events/press-releases/detail/518/kla-corporation-reports-fiscal-2026-fourth-quarter-and-full",
            "note": "2026-06-11 시행된 10:1 액면분할 이후 수치"
          }
        ],
        "observationSummary": "분할 전·후 두 분기 모두 격차가 약 1~3% 수준으로 작음(분할 전 3.1%, 분할 후 1.0%) - 기준 모호성의 실질적 영향은 낮아 보임(확정 아님, 관찰일 뿐).",
        "splitNote": "KLA는 10대1 액면분할을 발표(2026-05)했고 실제 시행일은 2026-06-11임(https://ir.kla.com/news-events/press-releases/detail/515/kla-corporation-announces-ten-to-one-stock-split-and). 분할 전후 EPS를 절대값으로 직접 비교하지 말 것 - 위 두 관찰은 각각 분할 전/후로 표기했고 격차 비율(%)만 비교 가능.",
        "lastReviewed": "2026-09-21"
      },
      "priceMultipleDiagnostic": {
        "ok": true,
        "current_price": 187.9199981689453,
        "current_price_as_of": "2026-09-25",
        "multiples": {
          "fy_current": {
            "eps": 5.4548,
            "period_end": "2027-06-30",
            "period_label": "FY0(당해 회계연도)",
            "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
            "per": 34.45039197934761,
            "per_price_basis_note": "현재가 $187.9200(2026-09-25) / 해당 기간 EPS"
          },
          "fy_next": {
            "eps": 6.70539,
            "period_end": "2028-06-30",
            "period_label": "FY1(익년 회계연도)",
            "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
            "per": 28.025215262489624,
            "per_price_basis_note": "현재가 $187.9200(2026-09-25) / 해당 기간 EPS"
          },
          "ntm": {
            "eps": 5.756312109589041,
            "period_end": null,
            "period_label": "NTM(향후 365일 일수보간)",
            "window_start": "2026-09-26",
            "window_end": "2027-09-26",
            "eps_basis_note": "0y 2027-06-30(가중76%) / +1y 2028-06-30(가중24%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
            "per": 32.645901506261694,
            "per_price_basis_note": "현재가 $187.9200(2026-09-25) / 해당 기간 EPS"
          }
        },
        "folded_required_eps_if_multiple_held": {
          "status": "folded_reference_only_not_core_diagnosis",
          "note": "[접힌 참고용, 핵심 진단(A-1) 아님] '지금 배수(FY0/FY1/NTM PER)가 미래에도 그대로 유지된다면' 필요한 EPS를 역산한 값이다. 배당을 제외하면 필요EPS = 현재EPS x (1+요구수익률)이 되는 항등식이므로(현재가/현재EPS로 만든 배수를 다시 곱해 현재가로 되돌리는 구조), 특히 NTM 행의 갭은 항상 요구수익률(현재 10%)과 같게 나온다 -- 종목별 미래 실적 부담의 차이를 보여주는 값이 아니다. 배당 포함 식은 필요EPS=(현재가x(1+요구수익률)-연배당)/현재배수이며, 미래 배수·배당이 지금과 동일하게 유지된다는 가정에서만 성립하는 조건부 산술이다. 매수가·매도가·확률·성공확률이 아니며 운영 매수 배지·사다리에 연결하지 않는다.",
          "required_return_assumption": 0.1,
          "annual_dividend_per_share": 0.0,
          "dividend_source_status": "unknown_assumed_zero_flagged",
          "dividend_provenance": null,
          "dividend_example_label": "배당 제외 예시(미확인, 확정 무배당 아님)",
          "by_multiple": {
            "fy_current": {
              "required_eps_if_multiple_unchanged": 6.00028,
              "vs_same_period_eps_pct": 10.000000000000009
            },
            "fy_next": {
              "required_eps_if_multiple_unchanged": 7.375929000000001,
              "vs_same_period_eps_pct": 10.000000000000009
            },
            "ntm": {
              "required_eps_if_multiple_unchanged": 6.331943320547946,
              "vs_same_period_eps_pct": 10.000000000000009
            }
          }
        }
      }
    },
    "longTermScenario": {
      "kind": "klac_long_term_eps_growth_exit_multiple_scenario",
      "not_the_dcf": "이 종목은 아직 별도의 독립 DCF가 없다 -- 상대가치(동종기업 배수) 참고범위와도 완전히 별개다. 세 값을 섞지 않는다.",
      "assumption_disclaimer": "요약: FY2026 실제 EPS($3.76)와 회사의 calendar 2030 목표모델(비GAAP $8.40±$0.80)은 회사 공식 발표로 확인된 사실이다. 목표일이 calendar 2030년말(2030-12-31)이라는 점은 주주서한 원문으로 확정됐다(위 target_date_basis). 출구PER·요구수익률·목표 이후 연장은 분석자가 선택한 가정이다.",
      "assumption_review": {
        "eps_base_and_target": "[2026-09-22 정정, 재정정] 기준 경로는 FY2026 실제 비GAAP EPS($3.76, 2026-06-30 마감, 회사 공식 발표로 확인된 사실)에서 회사의 calendar 2030 목표모델 비GAAP EPS($8.40, 2030-12-31, 역시 회사 공식 발표)까지 정확히 4.5068년(일수 기반 소수년)만 본다 -- 최초 버전처럼 이 성장률을 다른 기준일(FY2028 컨센서스)에 다시 적용해 회사가 목표로 제시하지 않은 기간까지 연장하지 않는다. target_eps는 이 growth_rate로 재구성한 값이 아니라 회사 발표값 그 자체를 직접 쓴다 -- 따라서 '목표연도에 목표 EPS가 재현되는가'라는 질문은 이 경로에서 설계상 항상 참이다(회귀시험 K1으로 고정, 소수년 지수 복리로 재확인).",
        "target_date_basis": "[2026-09-22 확정, 이전 '불확실성' 판단 정정] 회사 슬라이드 12쪽의 열 제목 자체는 'CY'/'FY' 접두어 없이 '2026 Target Model'/'2030 Target Model'로만 표기돼 있으나, KLA Q3 FY2026 주주서한이 같은 목표모델을 'Calendar 2030 Long-Term Financial Targets' 섹션 제목과 'calendar 2030 financial model', 'calendar 2025 to calendar 2030' 문구로 명시적으로 달력연도(CY) 2030년으로 못박고 있다(원문: KLA Investor Relations, Q3 FY26 Shareholder Letter, https://d1io3yog0oux5.cloudfront.net/_a357bfc9113388e37f3bfcb2ea2f0b64/klatencor/db/1117/10655/letter_to_shareholders/KLA+Shareholder+Letter+-+Q3+FY26.pdf, 2026-09-22 직접 확인). 이전 버전은 '2026 Target Model' 열이 이미 완결된 FY2026(2026-06-30 마감) 실적과 숫자상 가깝다는 간접 정황만으로 회계연도(FY)라고 추정했는데, 이는 원문 명시 표현보다 약한 근거였고 실제로 틀렸다. 목표일은 2030-12-31(calendar 2030년말)로 확정하고, 기준일(2026-06-30)과의 정확한 기간(약 4.5068년, 일수 기반)으로 재계산한다. 재검토 조건: 회사가 이 목표모델의 연도 정의를 다시 바꿔 발표하면 갱신.",
        "extension_scenario_separation": "[2026-09-22 신규, 재정정] 이 모듈은 회사가 목표로 제시한 calendar 2030년말까지의 구간과, 그 이후(calendar 2032년말까지 2년 추가) 분석자가 임의로 연장한 구간을 완전히 분리한다. 연장 구간은 `target_extension_scenario` 블록에만 담기며, state_label·required_return_ceilings·default_ceiling_price 등 이 모듈의 대표 결과 어디에도 영향을 주지 않는다. 연장 구간의 성장률은 회사 목표 성장률(19.52%)을 재사용하지 않고, 8개년 실측 매출CAGR(약 16.84%, 회사 목표와 독립적으로 조달한 값)을 쓴다.",
        "exit_per_validity": "출구PER은 제3자 참고자료(macrotrends.net, 2026-09-22 조회)의 10개년(2016~2025) TTM PER 평균(약 23.18배, 반올림해 23배로 씀)을 그대로 쓴다 -- 최근 3년 평균(약 30.41배)이나 현재 TTM 수준(약 45~50배)은 AI 반도체 슈퍼사이클 재평가를 상당히 반영한 값이라 '지금 수준이 목표일까지 그대로 유지된다'고 가정하지 않기 위함이다. [2026-09-22 정정] 가장 최근 관측치(2026-06-05, 표시PER 49.01배) 제외 근거를 다시 계산했다 -- 최초 버전은 자체 검증 계산에서 관측일보다 나중에 끝나는 분기(Q2'26)를 실수로 포함했다(미래참조 오류). 관측일 기준 이미 완결된 마지막 4개 분기로 다시 계산해도 재구성 TTM EPS(약 $35.33, x10 환산)가 표시값($54.64)과 약 1.55배 차이가 나 여전히 맞지 않는다 -- 결론(평균에서 제외)은 유지하되, 정확한 원인은 확정하지 못했다는 점을 그대로 밝힌다. 2025-12-31 관측치는 기간종료일 기준 재구성(period-end TTM)과는 거의 정확히 일치하지만(34.35 vs 34.37), 이는 그 날짜에 시장이 실시간으로 알 수 있었던 값(발표시차 반영 시 약 $31.85 추정)과는 다른 관점이라는 한계를 TRAILING_PE_2025_CROSS_CHECK에 명시한다 -- 이 표를 연말 기준 소급 TTM 평균으로 해석해 장기 정상화 배수를 고르는 근거로만 쓰고, 실시간 밸류에이션 심리를 재현한다고 주장하지 않는다.",
        "share_count_disclosure": "[2026-09-22 정정] 주식수 감소율(-0.99%/yr 실현 속도)은 참고용 관측값일 뿐 실제 EPS/가격 계산에 반영되지 않는다 -- target_eps를 회사 발표 목표값 그대로 쓰므로, 회사의 자사주매입 계획은 이미 그 목표 안에 내재돼 있다고 본다. 최초 버전은 이 변수를 선언만 하고 계산에 연결하지 않아 사실상 미사용 상태였는데, 이를 화면·문서에 명시적으로 드러내지 않았던 것이 문제였다 -- SHARE_COUNT_NOTE.used_in_calculation=False로 이제 명시한다.",
        "dividend_and_split_metadata": "[2026-09-22 정정] 배당: 2026-09-01 지급분($0.23/주)은 이 모듈 작성 시점에 이미 완료된 과거 지급이며, 다음 분기 지급은 아직 발표되지 않았다 -- '미래 확정 지급'으로 잘못 표시했던 최초 버전 오류를 고쳤다. 액면분할: KLA는 2026-06-11 장 마감 후 10-for-1 분할을 시행했고 2026-06-12부터 분할 조정 가격으로 거래됐다(KLA 공식 Split FAQ) -- 최초 버전이 다른 종목(LRCX, 2024-10 분할)의 설명을 그대로 남겨뒀던 오류를 고쳤다.",
        "no_reverse_engineering": "이 가정들은 '현재 주가와 비슷한 결과가 나오도록' 거꾸로 고른 것이 아니다 -- 이번 정정으로 state_label·매입가 상한이 크게 달라질 수 있으며, 그 결과가 이전보다 낮아지거나 '수익조건 미충족'으로 바뀌더라도 그대로 보고한다. 기준 경로는 회사 발표(기준일·목표일·목표EPS)만으로 결정되고 현재 비교가격과 독립적으로 계산된다.",
        "assumption_vs_fact_note": "요약: FY2026 실제 EPS($3.76)와 회사의 calendar 2030 목표모델(비GAAP $8.40±$0.80)은 회사 공식 발표로 확인된 사실이다. 목표일이 calendar 2030년말(2030-12-31)이라는 점은 주주서한 원문으로 확정됐다(위 target_date_basis). 출구PER·요구수익률·목표 이후 연장은 분석자가 선택한 가정이다."
      },
      "evidence_base": {
        "eps_basis_note": {
          "kind": "관측값(회사 공식 발표, 2026-09-22 원문 재확인)",
          "fact": "FY2026(2026-06-30 마감) GAAP 희석EPS $3.66, 비GAAP(조정) 희석EPS $3.76 (PR Newswire 공식 보도자료 'KLA CORPORATION REPORTS FISCAL 2026 FOURTH QUARTER AND FULL YEAR RESULTS', 2026-07-28 발표). GAAP 값은 financials_cache.json 실측치와 일치 확인.",
          "implication": "목표모델 EPS 정의(비GAAP)와 맞춰 성장률 계산의 base로 비GAAP을 쓴다.",
          "currency_and_share_unit": "USD, 보통주 1주 기준(주당). KLA는 2026-06-11 장 마감 후 10-for-1 액면분할을 시행했고 2026-06-12부터 분할 조정 가격으로 거래됐다(원문: https://d1io3yog0oux5.cloudfront.net/_0ebdd7ea4324b85d41343cefc23f5eca/klatencor/db/1126/10661/description/05.07.26-KLAC-Stock-Split-FAQs.pdf). 이 프로젝트가 쓰는 financials_cache.json·prices_cache.json 모두 분할 조정 후 수치로 일관되게 소급 적용돼 있음을 확인함."
        },
        "target_model_2030": {
          "kind": "회사 공식 목표(target, 확정 실적 아님) -- 2026-09-22 원문 재확인, 공식 실적 슬라이드 PDF 12쪽('KLA 2030 Target Model Financial Framework - Split Adjusted', 2026-07-28 발표)",
          "revenue_usd_b": {
            "mid": 26.0,
            "range": 2.5
          },
          "revenue_cagr_pct": {
            "low": 13.0,
            "high": 17.0
          },
          "operating_margin_pct": {
            "low": 45.0,
            "high": 47.0
          },
          "nongaap_diluted_eps": {
            "mid": 8.4,
            "range": 0.8
          },
          "base_date": "2026-06-30",
          "target_date": "2030-12-31",
          "target_date_basis_uncertainty": "[2026-09-22 확정, 이전 '불확실성' 판단 정정] 회사 슬라이드 12쪽의 열 제목 자체는 'CY'/'FY' 접두어 없이 '2026 Target Model'/'2030 Target Model'로만 표기돼 있으나, KLA Q3 FY2026 주주서한이 같은 목표모델을 'Calendar 2030 Long-Term Financial Targets' 섹션 제목과 'calendar 2030 financial model', 'calendar 2025 to calendar 2030' 문구로 명시적으로 달력연도(CY) 2030년으로 못박고 있다(원문: KLA Investor Relations, Q3 FY26 Shareholder Letter, https://d1io3yog0oux5.cloudfront.net/_a357bfc9113388e37f3bfcb2ea2f0b64/klatencor/db/1117/10655/letter_to_shareholders/KLA+Shareholder+Letter+-+Q3+FY26.pdf, 2026-09-22 직접 확인). 이전 버전은 '2026 Target Model' 열이 이미 완결된 FY2026(2026-06-30 마감) 실적과 숫자상 가깝다는 간접 정황만으로 회계연도(FY)라고 추정했는데, 이는 원문 명시 표현보다 약한 근거였고 실제로 틀렸다. 목표일은 2030-12-31(calendar 2030년말)로 확정하고, 기준일(2026-06-30)과의 정확한 기간(약 4.5068년, 일수 기반)으로 재계산한다. 재검토 조건: 회사가 이 목표모델의 연도 정의를 다시 바꿔 발표하면 갱신.",
          "implied_eps_cagr_from_fy2026_actual": {
            "mid": 0.19524787250137576,
            "low": 0.16899758959845457,
            "high": 0.2196193671729305,
            "note": "표시·민감도 계산용 -- target_eps 자체는 이 값으로 재구성하지 않고 회사 발표값을 직접 쓴다(2026-09-22 정정)."
          }
        },
        "target_extension_beyond_2030": {
          "kind": "분석자 가정(회사 발표 아님, 2030 이후 구간에 대한 회사 공개 목표 없음)",
          "extension_years": 2,
          "extension_target_date": "2032-12-31",
          "extension_growth_rate": 0.16837315102924522,
          "note": "8개년(FY2019~FY2026) 실측 매출CAGR을 씀 -- 회사의 2026-2030 목표 성장률과 독립적으로 조달한 값이며, 이를 재사용해 2030 이후를 연장하지 않는다(최초 버전의 핵심 오류를 재발하지 않기 위한 설계)."
        },
        "bottom_up_cross_check": {
          "kind": "비교용(대표 가정 아님) -- 관측값(SEC 소스 financials_cache.json, 2026-09-22 조사)",
          "annual_revenue_musd_by_fy": {
            "2019": 4568.904,
            "2020": 5806.424,
            "2021": 6918.734,
            "2022": 9211.883,
            "2023": 10496.056,
            "2024": 9812.247,
            "2025": 12156.162,
            "2026": 13579.476
          },
          "derived_cagr_8y_fy2019_2026": 0.16837315102924522,
          "note": "FY2024 매출이 전년대비 약 -6.5%로 역성장했다는 점과 AI 반도체 장비 수요 확대를 모두 포함한 8개년 CAGR -- 회사의 2030 목표 매출CAGR(13~17%)보다 낮다."
        },
        "share_count": {
          "kind": "관측값(SEC 소스, 반기 보고 시점 기준) -- 계산 미반영, 참고용",
          "date_2025": "2025-07-21",
          "shares_2025": 1319613700.0,
          "date_2026": "2026-08-03",
          "shares_2026": 1306546783.0,
          "yoy_change_pct": -0.9902077403409759,
          "used_in_calculation": false,
          "note": "target_eps는 회사가 발표한 2030 목표값을 그대로 쓴다 -- 그 목표 안에 회사 자신의 자사주매입 계획이 이미 내재돼 있다고 보고, 이 모듈이 추가로 주식수 감소를 적용하면 이중 반영이 된다. 이 관측값은 '회사의 실현 속도가 합리적 범위인지' 참고용으로만 남긴다(계산에 연결되지 않음)."
        },
        "operating_margin_ttm": {
          "kind": "관측값(fundamentals_cache.json, 2026-09-22 조사)",
          "value_pct": 41.77,
          "note": "회사의 2030 목표 영업이익률(45~47%)보다 낮음 -- 아직 목표에 도달하지 못한 상태."
        },
        "valuation_multiples": {
          "trailing_gaap_per_history": {
            "kind": "제3자 참고자료(macrotrends.net, 2026-09-22 조회 -- 이 프로젝트의 공식 가격 소스 아님)",
            "observations_by_year": {
              "2016": 14.09,
              "2017": 25.0,
              "2018": 9.69,
              "2019": 24.94,
              "2020": 29.36,
              "2021": 22.06,
              "2022": 15.44,
              "2023": 29.37,
              "2024": 26.49,
              "2025": 35.36
            },
            "excluded_observation": {
              "as_of": "2026-06-05",
              "displayed_per": 49.01,
              "displayed_ttm_eps": 54.64,
              "recomputed_ttm_eps_using_last_4_completed_quarters": 35.33,
              "recomputed_quarters_used": [
                "Q2'25(2025-06-30)",
                "Q3'25(2025-09-30)",
                "Q4'25(2025-12-31)",
                "Q1'26(2026-03-31)"
              ],
              "recomputed_note": "[2026-09-22 정정] Q2'26(2026-06-30 마감)은 관측일(2026-06-05)보다 나중에 끝나는 분기라 애초에 포함하면 안 됐다(최초 버전의 미래참조 오류) -- 관측일 기준 이미 끝난 마지막 4개 분기로 다시 계산했다.",
              "reason": "재계산한 TTM EPS($35.33)도 표시값($54.64)과 약 1.55배 차이가 나 맞지 않는다 -- 정확한 원인(제공자 방법론 차이·전망치 혼입·다른 EPS 정의 등)은 확정하지 못했으나, 이 모듈이 재구성할 수 있는 어떤 합리적 방식으로도 재현되지 않아 평균에서 제외한다."
            },
            "avg_10y": 23.18,
            "avg_5y": 25.744,
            "avg_3y": 30.406666666666666,
            "range_low": 9.69,
            "range_high": 35.36,
            "cross_check_2025": {
              "kind": "이 모듈이 자체 재계산(financials_cache.json 분기 GAAP EPS 합계 x10 분할조정 배율 적용, 관측일=기간종료일인 period-end TTM 방식)",
              "macrotrends_ttm_eps_2025_12_31": 34.35,
              "recomputed_ttm_eps_from_quarterly_gaap": 34.37,
              "match": "거의 정확히 일치(34.35 vs 34.37) -- 이 표가 각 기간 말 기준 GAAP TTM EPS를 소급 반영한 값(period-end 관점)이라는 근거로 삼음. 다만 이는 '그 날짜에 실제로 시장이 알 수 있었던 값'(발표시차 반영)과는 다른 관점이라는 한계가 있다 -- 분기 발표가 보통 마감 후 3~4주 뒤에 나오므로, 2025-12-31 시점에 시장이 실제로 알 수 있었던 TTM은 Q4'24~Q3'25(발표시차 반영, 약 $31.85 x10 환산)였을 것으로 추정된다. 이 표를 '연말 기준 소급 TTM 평균'으로 해석해 장기 정상화 배수를 고르는 데 쓰되, '그날의 실시간 밸류에이션 심리'를 정확히 재현한다고는 주장하지 않는다."
            },
            "note": "연말/조회시점 종가 기준(이 프로젝트의 회계연도 6월 마감과 완전히 정렬되지 않음) -- 정확한 소수점보다 '표본기간에 따라 9.7~35.4배 수준의 큰 차이가 난다'는 방향성 근거로 쓴다."
          }
        },
        "consensus_cross_check_only": {
          "kind": "관측값(estimates_cache.json, 참고용 -- 기준 경로 계산에는 쓰이지 않음)",
          "note": "FY2028 컨센서스 등 애널리스트 전망은 기준 경로(회사 발표 기준일·목표일)에는 더 이상 쓰이지 않는다(2026-09-22 정정 -- 최초 버전의 핵심 오류가 이 컨센서스를 잘못된 방식으로 재사용한 것이었기 때문). 참고용으로만 아래 compute 함수 결과의 consensus_cross_check 필드에 남긴다(있으면)."
        },
        "dividend_check": {
          "kind": "관측값(회사 공식 발표, 2026-09-22 원문 재확인)",
          "fact": "분기배당 $0.23/주, 기준일 2026-08-17, 지급일 2026-09-01(이미 지급 완료) -- PR Newswire 'KLA Declares Regular Cash Dividend', 2026-08-06 발표.",
          "dividend_growth_5y_pct": 17.29,
          "note": "fundamentals_cache.json의 dividendPerShareTTM(0.8055)은 분할 전후 지급액이 섞인 TTM 합계로 보여 쓰지 않는다 -- 확정 발표(위 fact)를 그대로 쓴다."
        },
        "stock_split": {
          "kind": "관측값(회사 공식 발표, 2026-09-22 원문 재확인)",
          "effective_after_close": "2026-06-11",
          "first_adjusted_trading_date": "2026-06-12",
          "ratio": "10-for-1",
          "source_url": "https://d1io3yog0oux5.cloudfront.net/_0ebdd7ea4324b85d41343cefc23f5eca/klatencor/db/1126/10661/description/05.07.26-KLAC-Stock-Split-FAQs.pdf"
        }
      },
      "share_count_note": {
        "observed_realized_pct_per_year": -0.9902077403409759,
        "used_in_calculation": false,
        "reason": "target_eps는 회사가 발표한 2030 목표값을 그대로 쓴다 -- 그 목표 안에 회사 자신의 자사주매입 계획이 이미 내재돼 있다고 보고, 이 모듈이 추가로 주식수 감소를 적용하면 이중 반영이 된다. 이 관측값은 '회사의 실현 속도가 합리적 범위인지' 참고용으로만 남긴다(계산에 연결되지 않음)."
      },
      "as_of_execution": "2026-09-26",
      "growth_rate_assumption": 0.19524787250137576,
      "exit_per_assumption": 23.0,
      "is_primary_recommended_assumption": true,
      "primary_growth_rate": 0.19524787250137576,
      "primary_exit_per": 23.0,
      "primary_review_by": "2026-12-31",
      "growth_years": 4.506849315068493,
      "base_date": "2026-06-30",
      "target_date_basis_uncertainty": "[2026-09-22 확정, 이전 '불확실성' 판단 정정] 회사 슬라이드 12쪽의 열 제목 자체는 'CY'/'FY' 접두어 없이 '2026 Target Model'/'2030 Target Model'로만 표기돼 있으나, KLA Q3 FY2026 주주서한이 같은 목표모델을 'Calendar 2030 Long-Term Financial Targets' 섹션 제목과 'calendar 2030 financial model', 'calendar 2025 to calendar 2030' 문구로 명시적으로 달력연도(CY) 2030년으로 못박고 있다(원문: KLA Investor Relations, Q3 FY26 Shareholder Letter, https://d1io3yog0oux5.cloudfront.net/_a357bfc9113388e37f3bfcb2ea2f0b64/klatencor/db/1117/10655/letter_to_shareholders/KLA+Shareholder+Letter+-+Q3+FY26.pdf, 2026-09-22 직접 확인). 이전 버전은 '2026 Target Model' 열이 이미 완결된 FY2026(2026-06-30 마감) 실적과 숫자상 가깝다는 간접 정황만으로 회계연도(FY)라고 추정했는데, 이는 원문 명시 표현보다 약한 근거였고 실제로 틀렸다. 목표일은 2030-12-31(calendar 2030년말)로 확정하고, 기준일(2026-06-30)과의 정확한 기간(약 4.5068년, 일수 기반)으로 재계산한다. 재검토 조건: 회사가 이 목표모델의 연도 정의를 다시 바꿔 발표하면 갱신.",
      "annualized_dividend_per_share": 0.92,
      "dividend_source_note": "연배당 $0.92/주(분기 $0.23 x4, 2026-09-22 확인, 2026-09-01 지급 완료분 -- model_assumption(확정 아님, 다음 확정 지급 이후 동일 금액 유지 가정).",
      "target_date": "2030-12-31",
      "base_eps_fact": 3.76,
      "base_eps_end_date": "2026-06-30",
      "eps_path": [
        4.494132000605172,
        5.371601712463684,
        6.420395518746965,
        7.673964084399676,
        8.4
      ],
      "target_eps": 8.4,
      "target_eps_reproduces_company_target": true,
      "target_price": 193.20000000000002,
      "consensus_cross_check": {
        "estimates_fetched_at": "2026-09-26",
        "note": "참고용 -- 기준 경로 계산에는 쓰이지 않음(2026-09-22 정정)."
      },
      "comparison_price": 187.9199981689453,
      "comparison_price_as_of": "2026-09-25",
      "comparison_price_invalid_reason": null,
      "base_scenario": {
        "blocked": false,
        "holding_period_actual_days": 1558,
        "holding_period_actual_years": 4.2684931506849315,
        "cashflows_by_year": {
          "1": 0.92,
          "2": 0.92,
          "3": 0.92,
          "4": 0.92,
          "4.2684931506849315": 193.44701369863014
        },
        "cashflow_note": {
          "approximation_note": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 4.2685년), 매도 시점의 부분연도에는 연배당의 26.8%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다."
        },
        "ceilings_by_required_return": {
          "0.08": {
            "blocked": false,
            "required_return": 0.08,
            "max_purchase_price": 142.3285037510795,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          },
          "0.1": {
            "blocked": false,
            "required_return": 0.1,
            "max_purchase_price": 131.70493981095402,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          },
          "0.12": {
            "blocked": false,
            "required_return": 0.12,
            "max_purchase_price": 122.04898805223308,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          }
        },
        "conditional_annualized_return_at_comparison_price": {
          "status": "SUCCESS",
          "rate": 0.011358407253919688,
          "residual": 1.0891199053730816e-10,
          "note": "solve_implied_rate와는 별개의 신규 수치해 함수 -- P05/P10 근거로 대체하지 않음"
        }
      },
      "required_return_ceilings": {
        "8%": 142.3285037510795,
        "10%": 131.70493981095402,
        "12%": 122.04898805223308
      },
      "conditional_annualized_return_at_comparison_price": 0.011358407253919688,
      "conditional_annualized_return_status": "SUCCESS",
      "default_required_return": 0.1,
      "default_ceiling_price": 131.70493981095402,
      "like_for_like_comparison_note": "target_price($193.20, 2030-12-31 시점의 할인 전 미래 목표주가 -- 회사 목표모델 EPS를 직접 쓴 값)와 default_ceiling_price($131.70, 오늘 현재가치로 할인한 연 10% 요구수익률 매입가 상한)는 서로 다른 의미의 가격이다.",
      "return_condition_met_at_default_required_return": false,
      "state_label": "수익조건 미충족",
      "blocked": false,
      "long_term_thesis_confirmation_note": "화면의 '사업 전제' 표시는 최신 분기 매출·영업이익이 동시에 둔화하지 않았는지만 확인한다 -- 이는 '최근 실적 방향'이며, 회사의 2030 목표모델(매출·마진·EPS) 달성 가능성을 확인한 것이 아니다. AI 반도체 검사·계측 수요, 시장점유율, 마진 개선 속도는 정기적으로(예: 분기 실적 발표마다) 재확인이 필요한 상태로 표시하며 '확인 완료'로 표시하지 않는다.",
      "long_term_thesis_confirmed": false,
      "price_return_table": [
        {
          "purchase_price": 51.7,
          "status": "SUCCESS",
          "annualized_return": 0.37341919028567644
        },
        {
          "purchase_price": 91.7,
          "status": "SUCCESS",
          "annualized_return": 0.1984925681249478
        },
        {
          "purchase_price": 131.7,
          "status": "SUCCESS",
          "annualized_return": 0.1000097613360594
        },
        {
          "purchase_price": 187.92,
          "status": "SUCCESS",
          "annualized_return": 0.011358404927750563
        },
        {
          "purchase_price": 191.7,
          "status": "SUCCESS",
          "annualized_return": 0.00661332291779214
        },
        {
          "purchase_price": 261.7,
          "status": "SUCCESS",
          "annualized_return": -0.0646731212870009
        }
      ],
      "range_growth_fixed_exit_per_sensitivity": {
        "note": "target_eps(회사 목표모델 값)를 고정하고 출구PER만 15~26배(10년 평균 부근 저점~5년 평균 부근)로 바꾼 민감도다 -- 신뢰구간이 아니며 확률을 붙이지 않는다.",
        "scenarios": {
          "low": {
            "exit_per": 15.0,
            "target_eps": 8.4,
            "target_price": 126.0,
            "ceiling_at_default_required_return": 86.96608327102338
          },
          "high": {
            "exit_per": 26.0,
            "target_eps": 8.4,
            "target_price": 218.4,
            "ceiling_at_default_required_return": 148.482011013428
          }
        }
      },
      "stress_scenarios": {
        "note": "회사가 실제로 공개한 목표 범위(저/중/고 EPS)와 참고 PER만 조합한다 -- 임의의 성장률을 추가로 만들지 않는다. 확률을 검증하지 않았으므로 임의의 성공확률을 붙이지 않는다.",
        "scenarios": {
          "company_target_low_range_pe_low": {
            "label": "회사 목표모델 하단 EPS $7.60 · 종료 PER 9.69배(10개년 GAAP 저점, 2018년)",
            "target_eps": 7.6000000000000005,
            "exit_per": 9.69,
            "target_price": 73.644,
            "ceiling_at_default_required_return": 52.10972057750242
          },
          "company_target_high_range_pe_5y": {
            "label": "회사 목표모델 상단 EPS $9.20 · 종료 PER 25.74배(5년 평균)",
            "target_eps": 9.200000000000001,
            "exit_per": 25.744,
            "target_price": 236.84480000000002,
            "ceiling_at_default_required_return": 160.76176192276898
          },
          "company_target_mid_pe_3y": {
            "label": "회사 목표모델 중간 EPS $8.40 · 종료 PER 30.41배(3년 평균, AI 재평가 유지 가정, 이 모듈이 채택하지 않는 예시적 상방)",
            "target_eps": 8.4,
            "exit_per": 30.406666666666666,
            "target_price": 255.416,
            "ceiling_at_default_required_return": 173.1256644908398
          }
        }
      },
      "target_extension_scenario": {
        "note": "회사가 공개하지 않은 2030 이후 구간에 대한 분석자 가정(참고용) -- state_label·required_return_ceilings·default_ceiling_price 등 이 모듈의 대표 결과에 영향을 주지 않는다. 성장률은 회사 목표 성장률을 재사용하지 않고 8개년 실측 매출CAGR을 쓴다.",
        "extension_years_beyond_target": 2,
        "extension_target_date": "2032-12-31",
        "extension_growth_rate": 0.16837315102924522,
        "extension_target_eps": 11.466804888386463,
        "extension_target_price": 263.7365124328886,
        "extension_ceiling_at_default_required_return": 149.21726743614423
      }
    }
  },
  "ASML": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "대상종목 비교가격 자료상태 문제: 통화 불일치: financial_currency='EUR', quote_currency='USD' (둘 다 'USD'이어야 함, 환전 미적용)",
      "withheldCheckedAt": "2026-09-26T13:21:28.986678+09:00",
      "neverSucceeded": true
    },
    "longTermScenario": {
      "kind": "asml_long_term_revenue_margin_bridge_exit_multiple_scenario",
      "not_the_dcf": "이 종목은 아직 별도의 독립 DCF가 없다 -- 상대가치(동종기업 배수) 참고범위와도 완전히 별개다(그 밴드는 통화 불일치로 JUDGMENT_WITHHELD 상태). 세 값을 섞지 않는다.",
      "assumption_disclaimer": "요약: FY2025 실제 기본 EPS(€24.73)와 회사의 2030 목표 매출(€44~60십억)·매출총이익률(56~60%) 범위는 회사 공식 발표로 확인된 사실이다. 그 사이를 잇는 영업비용비율·세율·주식수 감소율·환율은 전부 분석자가 선택한 가정이며, 그 중 환율이 가장 큰 불확실성 원천이다.",
      "assumption_review": {
        "eps_base_and_target": "[2026-09-22 신규] 기준 경로는 FY2025 실제 기본 EPS(€24.73, 2025-12-31 마감, 회사 공식 발표 SEC 6-K로 확인된 사실)에서 출발해 정확히 5.0027년(2030-12-31까지, 둘 다 달력연도 12월 마감이라 소수점 없이 정확히 5.0년) 뒤의 목표EPS까지를 본다. KLAC과 달리 target_eps 자체를 회사 발표값으로 직접 쓸 수 없다 -- 회사는 2030 목표로 매출·매출총이익률 '범위'만 제시했고 EPS·순이익·영업이익률·세율은 공개하지 않았다(KLAC의 비GAAP EPS $8.40 직접 제시와 결정적으로 다름) -- 그래서 이 모듈은 target_eps를 회사 발표값 그대로 쓰지 못하고, 아래 상향식(bottom-up) 다리로 분석자가 직접 역산한다(그 역산 가정은 전부 assumption이며 회사 발표가 아니다). 회사가 실제로 제시한 매출 범위(€44~60십억)와 매출총이익률 범위(56~60%)만 대표 경로의 사실(fact) 입력이고, 그 아래(영업비용비율·세율·주식수 감소율)는 전부 이 모듈이 선택한 가정(assumption)이다 -- 이 구분을 target_eps 자체에 강제로 섞지 않는다.",
        "target_date_basis": "ASML은 회계연도가 달력연도와 같아(12월 마감) KLAC처럼 'FY vs calendar' 표기 혼동이 구조적으로 발생하지 않는다 -- 기준일(2025-12-31)과 목표일(2030-12-31) 모두 회사가 실제로 쓰는 회계연도 마감일이며, 둘의 차이는 정확히 5.0년(소수년 보정 불필요)이다.",
        "currency_and_fx_methodology": "[신규, ASML 고유] 재무 통화(EUR)와 시세 통화(USD)가 다른 이 프로젝트 최초의 종목이다. 이 모듈은 '기준EPS부터 목표주가까지 전부 EUR로 계산한 뒤, 최종 target_price와 연배당 두 값만 환율(1 EUR = 1.149 USD, Frankfurter.app(유럽중앙은행 참조환율 집계, https://api.frankfurter.app/latest?from=EUR&to=USD), 2026-09-22 조회, 관측일 2026-09-21)로 환전해 USD 시세(comparison_price)와 비교 가능하게 만드는' 단일 환전 지점 설계를 쓴다 -- 중간 단계(매출·이익률·EPS 성장률 계산)에서는 EUR/USD를 섞지 않는다. 환율은 목표일까지 오늘 수준(2026-09-21 관측치)에서 변하지 않는다고 가정한다(model_assumption, 확정 아님 -- 이 프로젝트의 어떤 모듈도 환율을 예측하지 않으므로 새 예측모델을 만들지 않고 가장 단순·투명한 가정을 쓴다). 5년 뒤 실제 환율이 오늘과 다르면 target_price(USD)·매입가 상한은 그 방향과 크기만큼 그대로 움직인다 -- 이 모듈에서 가장 큰 단일 불확실성 원천이다. 통화 구조 자체(이중상장, 1:1, ADR 아님)는 회사 공식 자료로 확인했고, 같은 날 두 거래소 종가 비율이 독립 환율 소스와 거의 일치한다는 교차확인(FX_CROSS_CHECK)도 남긴다.",
        "bottom_up_bridge_limitation": "이 다리는 두 가지를 고정 단순화한다: (1) 영업비용비율(매출총이익률-영업이익률, FY2025 실측 약 18.20%)이 2030년까지 그대로 유지된다 -- 실제로는 매출 규모가 커지면서(약 5.9~8.4십억유로 -> 5.2십억유로 중앙값 기준 약 +59% 매출 성장) 고정비 성격의 연구개발비·판관비 비율이 낮아지는 영업레버리지가 있을 수 있으나, 회사가 이를 구체적으로 제시하지 않아 '추가 레버리지 없음'이라는 보수적 가정을 쓴다(과장 방지). (2) 유효세율(FY2025 실측 약 17.65%)과 세전이익=영업이익 근사(FY2025 실측 격차 약 +0.93%, 순금융손익 효과 작음)가 그대로 유지된다. 이 두 가정이 회사가 실제로 공개한 것이 아니라는 점이 KLAC(회사가 EPS 자체를 제시)과 가장 크게 다른 지점이다.",
        "target_model_reaffirmation": "회사의 2030 목표(매출 €44~60십억, 매출총이익률 56~60%)는 2024-11-14 Investor Day에서 최초 발표됐고, 2025-10-16 실적발표 콜에서 '목표 불변'으로 명시적으로 재확인됐다(가장 최근의 명시적 수치 재확인 -- 2026-09-22 조사 시점 기준). 이후 분기 콜(2026-04-15 Q1 2026)에서는 목표의 존재를 언급했으나 수치를 다시 제시하지는 않았다 -- 목표가 철회됐다는 신호는 없으나, 매 분기 재확인되는 것은 아니라는 점을 그대로 밝힌다. 재검토 조건: 회사가 이 목표를 공식적으로 바꾸면(예: 차기 Investor Day) 갱신.",
        "extension_scenario_separation": "[신규] 이 모듈은 회사가 목표로 제시한 2030년말까지의 구간과, 그 이후(2032년말까지 2년 추가) 분석자가 임의로 연장한 구간을 완전히 분리한다. 연장 구간은 `target_extension_scenario` 블록에만 담기며, state_label·required_return_ceilings·default_ceiling_price 등 이 모듈의 대표 결과 어디에도 영향을 주지 않는다. 연장 구간의 성장률은 회사 목표(매출·마진)를 재사용하지 않고, 7개년 실측 매출CAGR(약 16.91%, 회사 목표와 독립적으로 조달한 값)을 쓴다.",
        "share_count_disclosure": "[신규] 주식수 감소율 가정(-1.00%/yr)은 KLAC(계산에 아예 미반영)과 달리 이 모듈의 실제 EPS 역산 계산에 직접 쓰인다 -- 회사가 EPS를 직접 제시하지 않아 순이익에서 EPS로 넘어가는 다리 자체에 주식수 가정이 필요하기 때문이다(KLAC은 target_eps를 회사값 그대로 썼으므로 이 다리가 아예 필요 없었음). 근거는 위 SHARE_COUNT_OBSERVATIONS(제3자 소스 2개 + 신규 자사주매입 프로그램 규모)이며, 목표EPS를 부풀리지 않는 방향(더 보수적인 값)을 채택했다.",
        "no_reverse_engineering": "이 가정들은 '현재 주가와 비슷한 결과가 나오도록' 거꾸로 고른 것이 아니다 -- 기준 경로는 회사 발표(기준일·목표일·목표 매출/마진 범위)와 FY2025 실측 비율(영업비용비율·세율)만으로 결정되고 현재 비교가격과 독립적으로 계산된다. 그 결과가 매수 매력적이지 않게 나오더라도 그대로 보고한다.",
        "assumption_vs_fact_note": "요약: FY2025 실제 기본 EPS(€24.73)와 회사의 2030 목표 매출(€44~60십억)·매출총이익률(56~60%) 범위는 회사 공식 발표로 확인된 사실이다. 그 사이를 잇는 영업비용비율·세율·주식수 감소율·환율은 전부 분석자가 선택한 가정이며, 그 중 환율이 가장 큰 불확실성 원천이다."
      },
      "evidence_base": {
        "eps_basis_note": {
          "kind": "관측값(회사 공식 발표 SEC 6-K, 2026-09-22 원문 재확인)",
          "fact": "FY2025(2025-12-31 마감) 기본(basic) EPS €24.73 (ASML 'Q4 and full-year 2025 financial results' 공식 보도자료, 2026-01-28 발표, US GAAP 기준 -- 회사는 분기·연간 실적발표를 US GAAP으로, IFRS는 별도 연차보고서(2026-02-25)로만 공개한다고 원문에 명시). 희석 EPS는 이 보도자료에 별도 공개되지 않았다.",
          "definition_cross_check": {
            "kind": "관측(정의 확인 수준 명시, KLAC의 GAAP/비GAAP 격차 노출과 같은 원칙)",
            "official_basic_eps": 24.73,
            "financials_cache_computed_eps": 24.71,
            "diff_pct": -0.08087343307723316,
            "note": "두 값의 격차(약 -0.08%)는 매우 작다 -- financials_cache 값이 희석EPS이거나 소수점 반올림 차이로 추정되나 정확한 원인은 확정하지 않았다. 이 모듈은 회사가 원문에서 '기본(basic) EPS'로 명시한 값을 대표 기준값으로 쓴다(공식 발표 원문 표기를 그대로 신뢰)."
          },
          "currency_and_share_unit": {
            "kind": "관측값(회사 공식 투자자 페이지, 2026-09-22 확인)",
            "fact": "ASML 보통주는 Euronext Amsterdam(EUR, ISIN NL0010273215)과 Nasdaq(USD, CUSIP USN070592100)에 동시에 직접 등록·상장돼 있다 -- 예탁증서(ADR/ADS) 구조가 아니라 같은 보통주 1주가 두 시장에서 각자의 통화로 거래되는 이중상장(dual listing)이다.",
            "source_url": "https://www.asml.com/en/investors/shares",
            "implication": "환전 비율(ADR 비율 등)을 별도로 조사할 필요가 없다 -- 1주=1주이므로 주식수·EPS는 EUR 그대로 쓰고, 가격만 시장별 통화로 환전하면 된다."
          }
        },
        "target_model_2030": {
          "kind": "회사 공식 목표(target, 확정 실적 아님) -- 2026-09-22 원문 재확인",
          "announcement_date": "2024-11-14",
          "source_url": "https://www.asml.com/en/news/press-releases/2024/asml-investor-day-2024",
          "reaffirmed_as_of": "2025-10-16",
          "revenue_eur_b": {
            "low": 44.0,
            "mid": 52.0,
            "high": 60.0
          },
          "gross_margin_pct": {
            "low": 56.0,
            "mid": 58.0,
            "high": 60.0
          },
          "no_eps_target_disclosed": true,
          "no_eps_target_note": "회사는 2030 목표로 매출·매출총이익률 '범위'만 제시했고 EPS·순이익·영업이익률·세율은 공개하지 않았다(KLAC의 비GAAP EPS $8.40 직접 제시와 결정적으로 다름) -- 그래서 이 모듈은 target_eps를 회사 발표값 그대로 쓰지 못하고, 아래 상향식(bottom-up) 다리로 분석자가 직접 역산한다(그 역산 가정은 전부 assumption이며 회사 발표가 아니다)."
        },
        "target_extension_beyond_2030": {
          "kind": "분석자 가정(회사 발표 아님, 2030 이후 구간에 대한 회사 공개 목표 없음)",
          "extension_years": 2,
          "extension_target_date": "2032-12-31",
          "extension_growth_rate": 0.1690905908663627,
          "note": "7개년(FY2018~FY2025) 실측 매출CAGR을 씀(2021년 데이터가 financials_cache.json에 없어 확인 가능한 가장 이른 해인 2018년부터) -- 회사의 2030 목표(매출·마진)와 독립적으로 조달한 값이며, 이를 재사용해 2030 이후를 연장하지 않는다."
        },
        "fy2025_actuals": {
          "kind": "관측값(회사 공식 발표 SEC 6-K, 2026-09-22 원문 재확인)",
          "revenue_eur_m": 32667.3,
          "gross_margin_pct": 52.8,
          "op_income_eur_m": 11301.4,
          "net_income_eur_m": 9609.4,
          "pretax_income_eur_m": 11406.1,
          "tax_provision_eur_m": 2013.4,
          "derived_opex_ratio_pct": 18.204548279166012,
          "derived_effective_tax_rate_pct": 17.651958162737483,
          "derived_pretax_vs_opincome_gap_pct": 0.9264338931459948
        },
        "revenue_history_for_extension": {
          "kind": "관측값(2018년: 회사 공식 보도자료 2019-01-23, 2025년: financials_cache.json == 회사 공식 발표와 일치 확인, 2026-09-22 조사)",
          "revenue_eur_m_by_year": {
            "2018": 10944.0,
            "2025": 32667.3
          },
          "derived_cagr_7y": 0.1690905908663627
        },
        "share_count": {
          "kind": "관측값(제3자 소스 2개, 2026-09-22 조회 -- 이 프로젝트의 공식 시세 소스 아님)",
          "stockanalysis_com_1y_change_pct": -1.44,
          "companiesmarketcap_com_1y_change_pct": -0.52,
          "buyback_program_2026_2028": {
            "size_eur_b": 12.0,
            "years": 3,
            "note": "2022-2025 프로그램(최대 €12십억 중 €7.6십억 집행 후 2025-12 종료)을 이어 2026-2028년 집행 예정인 신규 프로그램 -- SEC 6-K 공식 실적발표 원문."
          },
          "shares_2025_implied": null,
          "chosen_assumption_pct_per_year": -1.0,
          "note": "KLAC과 달리 이 모듈의 실제 EPS 역산에 직접 쓰인다(위 share_count_disclosure 참조).",
          "used_in_calculation": true
        },
        "valuation_multiples": {
          "trailing_pe_history": {
            "kind": "제3자 참고자료(fullratio.com, 2026-09-22 조회 -- macrotrends.net 직접 접속이 차단(HTTP 403)돼 같은 성격의 대체 소스를 씀 -- 이 프로젝트의 공식 가격 소스 아님)",
            "observations_by_year": {
              "2016": 29.12,
              "2017": 30.1,
              "2018": 22.19,
              "2019": 42.76,
              "2020": 47.11,
              "2021": 48.79,
              "2022": 36.32,
              "2023": 34.22,
              "2024": 34.56,
              "2025": 36.77
            },
            "excluded_current_observation": {
              "as_of": "2026-09",
              "displayed_per": 54.62,
              "reason": "조회 시점(2026-09) 현재 PER(54.62배)은 10개년 이력 중 최고치(2021년 48.79배)보다도 높다 -- AI 반도체 슈퍼사이클 재평가를 상당히 반영한 값으로 판단해 평균에서 제외한다(KLAC이 조회시점 관측치를 제외한 것과 같은 원칙)."
            },
            "avg_10y": 36.194,
            "avg_5y": 38.132,
            "avg_3y": 35.18333333333334,
            "range_low": 22.19,
            "range_high": 48.79,
            "note": "PER은 무차원 배수이므로 이 모듈은 EUR EPS에 그대로 곱해 EUR 목표주가를 만든다 -- 제3자 소스가 USD(Nasdaq) 가격을 쓰면서 분모 EPS를 어떤 방식으로 환산했는지는 투명하게 공개되지 않아, 그 환산 방식에 대한 잔여 불확실성이 배수 자체에 약간 섞여 있을 수 있음을 한계로 명시한다."
          }
        },
        "dividend_check": {
          "kind": "관측값(회사 공식 발표, 2026-09-22 원문 재확인)",
          "fact": "2026년 중간배당 2회 모두 주당 €1.88(2026-02-18, 2026-08-05 지급 완료) -- FY2025 총배당 €7.50/주.",
          "currency": "EUR",
          "source_urls": [
            "https://www.asml.com/en/investors/why-invest-in-asml/capital-return-and-financing",
            "https://www.gurufocus.com/news/8962369/asml-announces-188-interim-dividend-for-2026"
          ]
        },
        "fx_rate": {
          "kind": "관측값(제3자 환율 집계, 2026-09-22 조회) + 교차확인(이중상장 실제 종가 비율)",
          "rate": 1.149,
          "as_of": "2026-09-21",
          "source": "Frankfurter.app(유럽중앙은행 참조환율 집계, https://api.frankfurter.app/latest?from=EUR&to=USD), 2026-09-22 조회",
          "cross_check": {
            "kind": "검증(다른 독립 소스 두 개로 같은 결론 확인) -- 2026-09-22 조사",
            "asml_us_close_2026_09_15": 1591.48,
            "asml_eu_close_2026_09_15": 1388.8,
            "implied_fx_from_dual_listing": 1.145938940092166,
            "note": "같은 날 두 거래소의 실제 종가 비율(약 1.1459)이 독립적으로 조회한 환율(1.149, 2026-09-21)과 거의 일치한다 -- ASML의 Nasdaq·Euronext 상장이 같은 보통주를 1:1로 공유한다는 사실(아래 dual_listing_structure)과도 정합적이다. 이 교차확인이 통화 구조 이해가 맞다는 근거이지, 환율 예측의 정확성을 보증하지는 않는다."
          }
        },
        "relative_value_band_status_note": {
          "kind": "참고(이 모듈과 별개 시스템 -- 고치려 시도하지 않음, 사용자 지시)",
          "status": "JUDGMENT_WITHHELD",
          "reason": "asml_relative_value_last_check_status.json: 대상종목(ASML) 자신의 financial_currency(EUR)와 quote_currency(USD)가 달라 amat_calc_engine.validate_target_price()가 자동으로 DATA_ERROR로 판정 -- 환전 로직이 그 모듈에 아직 없기 때문.",
          "relationship_to_this_module": "이 장기투자 시나리오 모듈은 그 검사 함수를 호출하지 않고 (상대가치 밴드와 완전히 별개 계산 경로), 독자적인 환전 설계(currency_and_fx_methodology)로 이 문제를 우회한다 -- 상대가치 모듈 자체는 이 작업으로 고쳐지지 않으며 여전히 JUDGMENT_WITHHELD 상태로 남는다."
        }
      },
      "as_of_execution": "2026-09-26",
      "currency_note": "재무 기준통화 EUR, 시세·매입가상한·목표가 표시통화 USD(환율은 currency_and_fx_methodology 참조) -- LRCX/KLAC/AMAT(모두 USD 단일통화)과 달리 이 필드가 반드시 필요한 첫 종목이다.",
      "gross_margin_assumption_pct": 58.0,
      "revenue_assumption_eur_m": 52000.0,
      "exit_per_assumption": 36.0,
      "fx_rate_assumption": 1.149,
      "is_primary_recommended_assumption": true,
      "primary_gross_margin_pct": 58.0,
      "primary_revenue_eur_m": 52000.0,
      "primary_exit_per": 36.0,
      "primary_fx_rate": 1.149,
      "primary_review_by": "2026-12-31",
      "growth_years": 5.002739726027397,
      "base_date": "2025-12-31",
      "base_eps_fact_eur": 24.73,
      "target_date": "2030-12-31",
      "shares_2025_implied_m": 388.5725839061868,
      "shares_2030_assumed_m": 369.51848606551283,
      "share_count_assumption_pct_per_year": -1.0,
      "target_eps_eur": 46.116239818721226,
      "growth_rate_implied": 0.13265152148400028,
      "opex_ratio_assumption_pct": 18.204548279166012,
      "effective_tax_rate_assumption_pct": 17.651958162737483,
      "target_price_eur": 1660.1846334739641,
      "target_price": 1907.552143861585,
      "annualized_dividend_per_share_eur": 7.52,
      "annualized_dividend_per_share": 8.64048,
      "dividend_source_note": "연배당 €7.52/주(분기상당 €1.88 x4, 2026-09-22 확인)를 환율 1.149로 환전한 $8.64/주로 현금흐름에 반영 -- model_assumption(확정 아님, 다음 확정 지급 이후 동일 금액 유지 및 환율 고정 가정).",
      "consensus_cross_check": {
        "estimates_fetched_at": "2026-09-26",
        "estimates_financial_currency": "EUR",
        "estimates_quote_currency": "USD",
        "note": "참고용 -- 기준 경로 계산(상향식 EUR 역산)에는 쓰이지 않음. 컨센서스 EPS도 EUR 기준(financialCurrency=EUR)이라 이 모듈의 target_eps_eur와 같은 통화다."
      },
      "comparison_price": 1743.93994140625,
      "comparison_price_as_of": "2026-09-25",
      "comparison_price_currency_note": "comparison_price는 prices_cache.json의 실시간 USD(Nasdaq) 시세를 그대로 쓴다 -- target_price(EUR에서 환전한 USD)와 통화가 이미 일치하므로 추가 환전이 필요 없다.",
      "comparison_price_invalid_reason": null,
      "base_scenario": {
        "blocked": false,
        "holding_period_actual_days": 1558,
        "holding_period_actual_years": 4.2684931506849315,
        "cashflows_by_year": {
          "1": 8.64048,
          "2": 8.64048,
          "3": 8.64048,
          "4": 8.64048,
          "4.2684931506849315": 1909.8720535602151
        },
        "cashflow_note": {
          "approximation_note": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 4.2685년), 매도 시점의 부분연도에는 연배당의 26.8%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다."
        },
        "ceilings_by_required_return": {
          "0.08": {
            "blocked": false,
            "required_return": 0.08,
            "max_purchase_price": 1403.721280169466,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          },
          "0.1": {
            "blocked": false,
            "required_return": 0.1,
            "max_purchase_price": 1298.899453840878,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          },
          "0.12": {
            "blocked": false,
            "required_return": 0.12,
            "max_purchase_price": 1203.6263983149363,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          }
        },
        "conditional_annualized_return_at_comparison_price": {
          "status": "SUCCESS",
          "rate": 0.02602281964637991,
          "residual": -4.581579560181126e-10,
          "note": "solve_implied_rate와는 별개의 신규 수치해 함수 -- P05/P10 근거로 대체하지 않음"
        }
      },
      "required_return_ceilings": {
        "8%": 1403.721280169466,
        "10%": 1298.899453840878,
        "12%": 1203.6263983149363
      },
      "conditional_annualized_return_at_comparison_price": 0.02602281964637991,
      "conditional_annualized_return_status": "SUCCESS",
      "default_required_return": 0.1,
      "default_ceiling_price": 1298.899453840878,
      "like_for_like_comparison_note": "target_price($1907.55, 2030-12-31 시점의 할인 전 미래 목표주가(USD 환전값) -- 회사 목표 매출·마진에서 역산한 EUR EPS x 출구PER x 환율)와 default_ceiling_price($1298.90, 오늘 현재가치로 할인한 연 10% 요구수익률 매입가 상한)는 서로 다른 의미의 가격이다.",
      "return_condition_met_at_default_required_return": false,
      "state_label": "수익조건 미충족",
      "blocked": false,
      "long_term_thesis_confirmation_note": "화면의 '사업 전제' 표시는 최신 분기 매출총이익률이 회사의 2030 목표 범위(56~60%)를 향해 실제로 개선 중인지만 확인한다(2026-09-22 조사 시점: Q4'25 52.2% -> Q1'26 53.0% -> Q2'26 54.0%, 목표 하단에 점차 근접) -- 이는 '최근 실적 방향'이며, 2030 매출·마진 목표 자체의 달성 가능성이나 이 모듈의 영업비용비율·세율 고정 가정의 타당성을 확인한 것이 아니다. AI 반도체 EUV·High-NA 수요, 중국向 규제 영향은 정기적으로(예: 분기 실적 발표마다) 재확인이 필요한 상태로 표시하며 '확인 완료'로 표시하지 않는다.",
      "long_term_thesis_confirmed": false,
      "price_return_table": [
        {
          "purchase_price": 1218.9,
          "status": "SUCCESS",
          "annualized_return": 0.11666384863030996
        },
        {
          "purchase_price": 1258.9,
          "status": "SUCCESS",
          "annualized_return": 0.10816741522132242
        },
        {
          "purchase_price": 1298.9,
          "status": "SUCCESS",
          "annualized_return": 0.09999989062205822
        },
        {
          "purchase_price": 1358.9,
          "status": "SUCCESS",
          "annualized_return": 0.08831705580032001
        },
        {
          "purchase_price": 1428.9,
          "status": "SUCCESS",
          "annualized_return": 0.07547114793675855
        },
        {
          "purchase_price": 1743.94,
          "status": "SUCCESS",
          "annualized_return": 0.026022811506464856
        }
      ],
      "range_growth_fixed_exit_per_sensitivity": {
        "note": "target_eps(상향식 역산 EUR 값)를 고정하고 출구PER만 22.19~48.79배(10년 이력 저점~고점)로 바꾼 민감도다 -- 신뢰구간이 아니며 확률을 붙이지 않는다.",
        "scenarios": {
          "low": {
            "exit_per": 22.19,
            "target_eps_eur": 46.116239818721226,
            "target_price": 1175.7939464524602,
            "ceiling_at_default_required_return": 811.7264625342549
          },
          "high": {
            "exit_per": 48.79,
            "target_eps_eur": 46.116239818721226,
            "target_price": 2585.2630305279645,
            "ceiling_at_default_required_return": 1750.090080836657
          }
        }
      },
      "stress_scenarios": {
        "note": "회사가 실제로 공개한 매출·매출총이익률 목표 범위(저/중/고)에서 역산한 EPS와 참고 PER만 조합한다 -- 임의의 성장률을 추가로 만들지 않는다. 확률을 검증하지 않았으므로 임의의 성공확률을 붙이지 않는다.",
        "scenarios": {
          "company_target_low_range_pe_low": {
            "label": "회사 목표 하단(매출 €44십억·매출총이익률 56%) · 종료 PER 22.19배(10개년 저점, 2018년)",
            "target_eps_eur": 37.06033351646757,
            "exit_per": 22.19,
            "target_price": 944.9017520392474,
            "ceiling_at_default_required_return": 658.0084154800509
          },
          "company_target_high_range_pe_5y": {
            "label": "회사 목표 상단(매출 €60십억·매출총이익률 60%) · 종료 PER 38.13배(5년 평균)",
            "target_eps_eur": 55.88527345781,
            "exit_per": 38.132,
            "target_price": 2448.5388173696997,
            "ceiling_at_default_required_return": 1659.0650070565603
          },
          "company_target_mid_pe_3y": {
            "label": "회사 목표 중간(매출 €52십억·매출총이익률 58%) · 종료 PER 35.18배(3년 평균)",
            "target_eps_eur": 46.116239818721226,
            "exit_per": 35.18333333333334,
            "target_price": 1864.278970227688,
            "ceiling_at_default_required_return": 1270.0900445070324
          }
        }
      },
      "target_extension_scenario": {
        "note": "회사가 공개하지 않은 2030 이후 구간에 대한 분석자 가정(참고용) -- state_label·required_return_ceilings·default_ceiling_price 등 이 모듈의 대표 결과에 영향을 주지 않는다. 성장률은 회사 목표(매출·마진)를 재사용하지 않고 7개년 실측 매출CAGR을 쓴다.",
        "extension_years_beyond_target": 2,
        "extension_target_date": "2032-12-31",
        "extension_growth_rate": 0.1690905908663627,
        "extension_target_eps_eur": 63.03042266763109,
        "extension_target_price": 2607.1904032238926,
        "extension_ceiling_at_default_required_return": 1473.054174634301
      }
    },
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK_WITHHELD",
      "lastCheckNote": "가격 자료상태 문제: 통화 불일치: financial_currency='EUR', quote_currency='USD' (둘 다 'USD'이어야 함, 환전 미적용)",
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": false,
      "reason": "가격 자료상태 문제: 통화 불일치: financial_currency='EUR', quote_currency='USD' (둘 다 'USD'이어야 함, 환전 미적용)",
      "diagnosticKind": null,
      "ticker": "ASML",
      "price": null,
      "priceAsOf": null,
      "priceType": null,
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": null,
      "financialCurrency": null,
      "quoteCurrency": null,
      "estimatesFetchedAt": null,
      "multiples": null,
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "missing",
      "isStaleReference": true,
      "staleReasons": [
        "대상종목 가격 관측일(알수없음)이 확인되지 않습니다(누락 또는 형식 오류)"
      ],
      "disclaimer": null,
      "epsDefinitionConfirmationLevel": null,
      "epsDefinitionConfirmationLabel": null,
      "epsCurrencyBasisNote": null,
      "epsShareBasisAssumed": null,
      "epsSplitConfirmationNote": null
    }
  },
  "STX": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "band_high(807.9012792565729)<=band_low(807.9012792565729) -- 밴드 폭이 0 이하",
      "withheldCheckedAt": "2026-09-26T13:21:29.151713+09:00",
      "neverSucceeded": false,
      "priorLocalSnapshotFound": true,
      "priorLocalSnapshotNote": "로컬에 이전 산출물(스냅샷)이 있었고, peer 적합성/입력 정의 재검토 결과 무효화되어 지금은 보류 상태임. 이 필드는 로컬 산출 이력만 나타내며, 그 값이 실제로 공개 URL에 노출된 적이 있었는지는 이 함수가 확인할 수 없다 -- 공개 이력은 별도로 확보한 증거(공개 URL 캡처 등)로만 판단해야 한다. 아래 prior* 필드는 로컬 역사적 기록일 뿐 현재 유효한 참고범위가 아니다.",
      "priorGeneratedAt": "2026-09-21T03:35:39.618747",
      "priorPeersUsed": [
        "WDC",
        "SNDK"
      ],
      "priorRangeLow": 319.55698111677054,
      "priorRangeHigh": 780.8500341880879,
      "priorRangeMid": 550.2035076524292,
      "priorBandStatus": "ABOVE_BAND"
    },
    "singleComparisonReference": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:32.618557+09:00",
      "ok": true,
      "reason": null,
      "referenceKind": "single_comparison",
      "peerCount": 1,
      "targetTicker": "STX",
      "peerTicker": "WDC",
      "targetEps1": 40.504096630136985,
      "targetEps1Basis": "NTM 컨센서스 EPS(blend_ntm_eps_from_annual_estimates, peer와 동일 함수로 산출)",
      "peerForwardPe": 19.946162153273548,
      "peerPrice": 456.80999755859375,
      "peerPriceAsOf": "2026-09-25",
      "appliedPrice": 807.9012792565729,
      "targetCurrentPrice": 916.8300170898438,
      "targetCurrentPriceAsOf": "2026-09-25",
      "targetCurrentPriceType": "confirmed_close",
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:32.618557+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 비교기업이 정확히 1개일 때 그 기업의 forward P/E를 대상종목 자신의 NTM EPS에 그대로 곱한 '단일 비교기업 참고가격'일 뿐이다 -- 검증된 매수가·매도가·성공확률·신뢰구간이 아니며, low/high 범위 개념 자체가 없다(peer 1개라 범위를 구성하지 않음, 산술 실패 아님). 여러 peer로 만드는 상대가치 밴드(relativeValueBand)와는 다른 개념이며 서로 바꿔 쓰면 안 된다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이므로(eps_definition_confirmation_level 참고) 이 적용가격도 잠정으로 취급해야 한다.",
      "priceAsOfDatesMatch": true,
      "priceAsOfDatesNote": null,
      "targetEpsPeriodDetail": {
        "0y_end": "2027-06-30",
        "0y_eps": 35.78091,
        "1y_end": "2028-06-30",
        "1y_eps": 55.3714
      },
      "targetEpsNtmWeight": {
        "weight_0y": 0.7589041095890411,
        "weight_1y": 0.2410958904109589,
        "days_in_0y": 277,
        "days_in_1y": 88
      },
      "peerEpsPeriodDetail": {
        "0y_end": "2027-06-30",
        "0y_eps": 20.09143,
        "1y_end": "2028-06-30",
        "1y_eps": 31.74953
      },
      "peerEpsNtmWeight": {
        "weight_0y": 0.7589041095890411,
        "weight_1y": 0.2410958904109589,
        "days_in_0y": 277,
        "days_in_1y": 88
      },
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: target='USD', peer='USD'. 재무제표통화(financialCurrency): target='USD', peer='USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)",
      "targetPricePossibleMissingSessionDates": [],
      "targetPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "targetPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetEstimatesFetchedAt": "2026-09-26",
      "peerCurrentPriceType": "confirmed_close",
      "peerPricePossibleMissingSessionDates": [],
      "peerPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "peerPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetFinancialCurrency": "USD",
      "targetQuoteCurrency": "USD",
      "peerFinancialCurrency": "USD",
      "peerQuoteCurrency": "USD",
      "priceDateAlignmentApplied": true,
      "priceDateAlignmentCommonDate": "2026-09-25",
      "priceDateAlignmentIsPastReference": false,
      "priceDateAlignmentNote": "target·peer 공통 확정 거래일(2026-09-25)이 각자의 최신 확정 종가일과 일치합니다.",
      "peerPriceUsedInCalculation": 456.80999755859375,
      "peerPriceUsedInCalculationAsOf": "2026-09-25",
      "peerLastCollectionStatus": null,
      "peerLastCollectionNote": null,
      "targetHasMissingSessionsAsOfNow": false,
      "targetMissingSessionsAsOfNow": [],
      "targetCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary",
      "peerHasMissingSessionsAsOfNow": false,
      "peerMissingSessionsAsOfNow": [],
      "peerCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary"
    }
  },
  "WDC": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "band_high(518.4013549945738)<=band_low(518.4013549945738) -- 밴드 폭이 0 이하",
      "withheldCheckedAt": "2026-09-26T13:21:29.236286+09:00",
      "neverSucceeded": false,
      "priorLocalSnapshotFound": true,
      "priorLocalSnapshotNote": "로컬에 이전 산출물(스냅샷)이 있었고, peer 적합성/입력 정의 재검토 결과 무효화되어 지금은 보류 상태임. 이 필드는 로컬 산출 이력만 나타내며, 그 값이 실제로 공개 URL에 노출된 적이 있었는지는 이 함수가 확인할 수 없다 -- 공개 이력은 별도로 확보한 증거(공개 URL 캡처 등)로만 판단해야 한다. 아래 prior* 필드는 로컬 역사적 기록일 뿐 현재 유효한 참고범위가 아니다.",
      "priorGeneratedAt": "2026-09-21T03:35:39.747606",
      "priorPeersUsed": [
        "STX",
        "SNDK"
      ],
      "priorRangeLow": 180.6232417615728,
      "priorRangeHigh": 485.41399183817754,
      "priorRangeMid": 333.0186167998752,
      "priorBandStatus": "WITHIN_BAND"
    },
    "singleComparisonReference": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:32.618557+09:00",
      "ok": true,
      "reason": null,
      "referenceKind": "single_comparison",
      "peerCount": 1,
      "targetTicker": "WDC",
      "peerTicker": "STX",
      "targetEps1": 22.90215,
      "targetEps1Basis": "NTM 컨센서스 EPS(blend_ntm_eps_from_annual_estimates, peer와 동일 함수로 산출)",
      "peerForwardPe": 22.635488589262312,
      "peerPrice": 916.8300170898438,
      "peerPriceAsOf": "2026-09-25",
      "appliedPrice": 518.4013549945738,
      "targetCurrentPrice": 456.80999755859375,
      "targetCurrentPriceAsOf": "2026-09-25",
      "targetCurrentPriceType": "confirmed_close",
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:32.618557+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 비교기업이 정확히 1개일 때 그 기업의 forward P/E를 대상종목 자신의 NTM EPS에 그대로 곱한 '단일 비교기업 참고가격'일 뿐이다 -- 검증된 매수가·매도가·성공확률·신뢰구간이 아니며, low/high 범위 개념 자체가 없다(peer 1개라 범위를 구성하지 않음, 산술 실패 아님). 여러 peer로 만드는 상대가치 밴드(relativeValueBand)와는 다른 개념이며 서로 바꿔 쓰면 안 된다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이므로(eps_definition_confirmation_level 참고) 이 적용가격도 잠정으로 취급해야 한다.",
      "priceAsOfDatesMatch": true,
      "priceAsOfDatesNote": null,
      "targetEpsPeriodDetail": {
        "0y_end": "2027-06-30",
        "0y_eps": 20.09143,
        "1y_end": "2028-06-30",
        "1y_eps": 31.74953
      },
      "targetEpsNtmWeight": {
        "weight_0y": 0.7589041095890411,
        "weight_1y": 0.2410958904109589,
        "days_in_0y": 277,
        "days_in_1y": 88
      },
      "peerEpsPeriodDetail": {
        "0y_end": "2027-06-30",
        "0y_eps": 35.78091,
        "1y_end": "2028-06-30",
        "1y_eps": 55.3714
      },
      "peerEpsNtmWeight": {
        "weight_0y": 0.7589041095890411,
        "weight_1y": 0.2410958904109589,
        "days_in_0y": 277,
        "days_in_1y": 88
      },
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: target='USD', peer='USD'. 재무제표통화(financialCurrency): target='USD', peer='USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)",
      "targetPricePossibleMissingSessionDates": [],
      "targetPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "targetPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetEstimatesFetchedAt": "2026-09-26",
      "peerCurrentPriceType": "confirmed_close",
      "peerPricePossibleMissingSessionDates": [],
      "peerPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "peerPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetFinancialCurrency": "USD",
      "targetQuoteCurrency": "USD",
      "peerFinancialCurrency": "USD",
      "peerQuoteCurrency": "USD",
      "priceDateAlignmentApplied": true,
      "priceDateAlignmentCommonDate": "2026-09-25",
      "priceDateAlignmentIsPastReference": false,
      "priceDateAlignmentNote": "target·peer 공통 확정 거래일(2026-09-25)이 각자의 최신 확정 종가일과 일치합니다.",
      "peerPriceUsedInCalculation": 916.8300170898438,
      "peerPriceUsedInCalculationAsOf": "2026-09-25",
      "peerLastCollectionStatus": null,
      "peerLastCollectionNote": null,
      "targetHasMissingSessionsAsOfNow": false,
      "targetMissingSessionsAsOfNow": [],
      "targetCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary",
      "peerHasMissingSessionsAsOfNow": false,
      "peerMissingSessionsAsOfNow": [],
      "peerCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary"
    }
  },
  "SNDK": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "선정 기준을 통과한 동종업계 배수가 하나도 없음 -- 밴드 산출 보류(0으로 채우지 않음)",
      "withheldCheckedAt": "2026-09-26T13:21:29.319675+09:00",
      "neverSucceeded": false,
      "priorLocalSnapshotFound": true,
      "priorLocalSnapshotNote": "로컬에 이전 산출물(스냅샷)이 있었고, peer 적합성/입력 정의 재검토 결과 무효화되어 지금은 보류 상태임. 이 필드는 로컬 산출 이력만 나타내며, 그 값이 실제로 공개 URL에 노출된 적이 있었는지는 이 함수가 확인할 수 없다 -- 공개 이력은 별도로 확보한 증거(공개 URL 캡처 등)로만 판단해야 한다. 아래 prior* 필드는 로컬 역사적 기록일 뿐 현재 유효한 참고범위가 아니다.",
      "priorGeneratedAt": "2026-09-21T03:35:39.873599",
      "priorPeersUsed": [
        "STX",
        "WDC"
      ],
      "priorRangeLow": 4378.382413768786,
      "priorRangeHigh": 4815.407277052234,
      "priorRangeMid": 4596.89484541051,
      "priorBandStatus": "BELOW_BAND"
    },
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "SNDK",
      "price": 1777.800048828125,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 213.90302,
          "period_end": "2027-06-30",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 8.311243332740814,
          "per_price_basis_note": "현재가 $1777.8000(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 263.48553,
          "period_end": "2028-06-30",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 6.747239777562453,
          "per_price_basis_note": "현재가 $1777.8000(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 225.85715939726026,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2027-06-30(가중76%) / +1y 2028-06-30(가중24%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 7.871346888327555,
          "per_price_basis_note": "현재가 $1777.8000(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "PWR": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "선정 기준을 통과한 동종업계 배수가 하나도 없음 -- 밴드 산출 보류(0으로 채우지 않음)",
      "withheldCheckedAt": "2026-09-26T13:21:29.364381+09:00",
      "neverSucceeded": false,
      "priorLocalSnapshotFound": true,
      "priorLocalSnapshotNote": "로컬에 이전 산출물(스냅샷)이 있었고, peer 적합성/입력 정의 재검토 결과 무효화되어 지금은 보류 상태임. 이 필드는 로컬 산출 이력만 나타내며, 그 값이 실제로 공개 URL에 노출된 적이 있었는지는 이 함수가 확인할 수 없다 -- 공개 이력은 별도로 확보한 증거(공개 URL 캡처 등)로만 판단해야 한다. 아래 prior* 필드는 로컬 역사적 기록일 뿐 현재 유효한 참고범위가 아니다.",
      "priorGeneratedAt": "2026-09-21T07:38:50.559867",
      "priorPeersUsed": [
        "EME",
        "FIX"
      ],
      "priorRangeLow": 397.2272592601271,
      "priorRangeHigh": 546.4337972092212,
      "priorRangeMid": 471.83052823467415,
      "priorBandStatus": "ABOVE_BAND"
    },
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "PWR",
      "price": 649.1300048828125,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 16.72563,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 38.810496518386,
          "per_price_basis_note": "현재가 $649.1300(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 19.77394,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 32.827550042268385,
          "per_price_basis_note": "현재가 $649.1300(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 18.972192712328766,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 34.21481189472559,
          "per_price_basis_note": "현재가 $649.1300(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    },
    "singleComparisonReference": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:32.618557+09:00",
      "ok": true,
      "reason": null,
      "referenceKind": "single_comparison",
      "peerCount": 1,
      "targetTicker": "PWR",
      "peerTicker": "MTZ",
      "targetEps1": 18.972192712328766,
      "targetEps1Basis": "NTM 컨센서스 EPS(blend_ntm_eps_from_annual_estimates, peer와 동일 함수로 산출)",
      "peerForwardPe": 18.115466691796485,
      "peerPrice": 211.9499969482422,
      "peerPriceAsOf": "2026-09-24",
      "appliedPrice": 343.6901251505358,
      "targetCurrentPrice": 643.5,
      "targetCurrentPriceAsOf": "2026-09-24",
      "targetCurrentPriceType": "confirmed_close",
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:32.618557+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": true,
      "staleReasons": [
        "대상(2026-09-25)과 비교기업(2026-09-24)이 각자 개별적으로 확보 가능했던 최신 확정 종가의 관측일은 서로 다름(둘 다 개별적으로 노후 기준은 통과) -- 계산에 실제로 적용된 날짜는 아래 공통일자 정렬 결과를 참고",
        "target(PWR)·peer(MTZ) 공통 확정 거래일(2026-09-24)로 가격을 맞췄습니다 -- target 자체 최신 확정 종가(2026-09-25)나 peer 자체 최신 확정 종가(2026-09-24)보다 과거일 수 있습니다(그중 더 오래된 쪽에 맞춰짐). EPS는 그대로 현재(2026-09-26) 기준입니다 -- 가격만 과거 공통일자를 씁니다.",
        "비교기업(MTZ) 가격이 실제 실행시각 기준으로 2026-09-25에 아직 반영되지 않았을 수 있음(평일 기준 후보 -- 휴장일 여부는 거래소 일정으로 확인되지 않음)"
      ],
      "disclaimer": "이 값은 비교기업이 정확히 1개일 때 그 기업의 forward P/E를 대상종목 자신의 NTM EPS에 그대로 곱한 '단일 비교기업 참고가격'일 뿐이다 -- 검증된 매수가·매도가·성공확률·신뢰구간이 아니며, low/high 범위 개념 자체가 없다(peer 1개라 범위를 구성하지 않음, 산술 실패 아님). 여러 peer로 만드는 상대가치 밴드(relativeValueBand)와는 다른 개념이며 서로 바꿔 쓰면 안 된다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이므로(eps_definition_confirmation_level 참고) 이 적용가격도 잠정으로 취급해야 한다.",
      "priceAsOfDatesMatch": false,
      "priceAsOfDatesNote": "대상(2026-09-25)과 비교기업(2026-09-24)이 각자 개별적으로 확보 가능했던 최신 확정 종가의 관측일은 서로 다름(둘 다 개별적으로 노후 기준은 통과) -- 계산에 실제로 적용된 날짜는 아래 공통일자 정렬 결과를 참고",
      "targetEpsPeriodDetail": {
        "0y_end": "2026-12-31",
        "0y_eps": 16.72563,
        "1y_end": "2027-12-31",
        "1y_eps": 19.77394
      },
      "targetEpsNtmWeight": {
        "weight_0y": 0.26301369863013696,
        "weight_1y": 0.736986301369863,
        "days_in_0y": 96,
        "days_in_1y": 269
      },
      "peerEpsPeriodDetail": {
        "0y_end": "2026-12-31",
        "0y_eps": 9.31133,
        "1y_end": "2027-12-31",
        "1y_eps": 12.55239
      },
      "peerEpsNtmWeight": {
        "weight_0y": 0.26301369863013696,
        "weight_1y": 0.736986301369863,
        "days_in_0y": 96,
        "days_in_1y": 269
      },
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: target='USD', peer='USD'. 재무제표통화(financialCurrency): target='USD', peer='USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)",
      "targetPricePossibleMissingSessionDates": [],
      "targetPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "targetPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetEstimatesFetchedAt": "2026-09-26",
      "peerCurrentPriceType": "confirmed_close",
      "peerPricePossibleMissingSessionDates": [],
      "peerPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "peerPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetFinancialCurrency": "USD",
      "targetQuoteCurrency": "USD",
      "peerFinancialCurrency": "USD",
      "peerQuoteCurrency": "USD",
      "priceDateAlignmentApplied": true,
      "priceDateAlignmentCommonDate": "2026-09-24",
      "priceDateAlignmentIsPastReference": true,
      "priceDateAlignmentNote": "target(PWR)·peer(MTZ) 공통 확정 거래일(2026-09-24)로 가격을 맞췄습니다 -- target 자체 최신 확정 종가(2026-09-25)나 peer 자체 최신 확정 종가(2026-09-24)보다 과거일 수 있습니다(그중 더 오래된 쪽에 맞춰짐). EPS는 그대로 현재(2026-09-26) 기준입니다 -- 가격만 과거 공통일자를 씁니다.",
      "peerPriceUsedInCalculation": 211.9499969482422,
      "peerPriceUsedInCalculationAsOf": "2026-09-24",
      "peerLastCollectionStatus": {
        "checkedAt": "2026-09-26T13:21:29.783543+09:00",
        "pricesLastAttempt": {
          "outcome": "cache_fresh",
          "errorDetail": null,
          "lastPriceSessionDate": "2026-09-24",
          "hasMissingSessionsAsOfNow": true,
          "latestExpectedCompletedSessionAsOfNow": null,
          "calendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary",
          "recencyCheckNote": null
        },
        "estimatesLastAttempt": {
          "outcome": "cache_fresh",
          "errorDetail": null
        }
      },
      "peerLastCollectionNote": null,
      "targetHasMissingSessionsAsOfNow": false,
      "targetMissingSessionsAsOfNow": [],
      "targetCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary",
      "peerHasMissingSessionsAsOfNow": true,
      "peerMissingSessionsAsOfNow": [
        "2026-09-25"
      ],
      "peerCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary"
    }
  },
  "EME": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "band_high(1035.3266494988625)<=band_low(1035.3266494988625) -- 밴드 폭이 0 이하",
      "withheldCheckedAt": "2026-09-26T13:21:29.408930+09:00",
      "neverSucceeded": false,
      "priorLocalSnapshotFound": true,
      "priorLocalSnapshotNote": "로컬에 이전 산출물(스냅샷)이 있었고, peer 적합성/입력 정의 재검토 결과 무효화되어 지금은 보류 상태임. 이 필드는 로컬 산출 이력만 나타내며, 그 값이 실제로 공개 URL에 노출된 적이 있었는지는 이 함수가 확인할 수 없다 -- 공개 이력은 별도로 확보한 증거(공개 URL 캡처 등)로만 판단해야 한다. 아래 prior* 필드는 로컬 역사적 기록일 뿐 현재 유효한 참고범위가 아니다.",
      "priorGeneratedAt": "2026-09-21T07:38:50.686371",
      "priorPeersUsed": [
        "PWR",
        "FIX"
      ],
      "priorRangeLow": 1031.8389085049957,
      "priorRangeHigh": 1202.308820321575,
      "priorRangeMid": 1117.0738644132853,
      "priorBandStatus": "BELOW_BAND"
    },
    "singleComparisonReference": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:32.618557+09:00",
      "ok": true,
      "reason": null,
      "referenceKind": "single_comparison",
      "peerCount": 1,
      "targetTicker": "EME",
      "peerTicker": "FIX",
      "targetEps1": 35.72366528767123,
      "targetEps1Basis": "NTM 컨센서스 EPS(blend_ntm_eps_from_annual_estimates, peer와 동일 함수로 산출)",
      "peerForwardPe": 28.981534821852925,
      "peerPrice": 1658.9100341796875,
      "peerPriceAsOf": "2026-09-25",
      "appliedPrice": 1035.3266494988625,
      "targetCurrentPrice": 762.2100219726562,
      "targetCurrentPriceAsOf": "2026-09-25",
      "targetCurrentPriceType": "confirmed_close",
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:32.618557+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 비교기업이 정확히 1개일 때 그 기업의 forward P/E를 대상종목 자신의 NTM EPS에 그대로 곱한 '단일 비교기업 참고가격'일 뿐이다 -- 검증된 매수가·매도가·성공확률·신뢰구간이 아니며, low/high 범위 개념 자체가 없다(peer 1개라 범위를 구성하지 않음, 산술 실패 아님). 여러 peer로 만드는 상대가치 밴드(relativeValueBand)와는 다른 개념이며 서로 바꿔 쓰면 안 된다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이므로(eps_definition_confirmation_level 참고) 이 적용가격도 잠정으로 취급해야 한다.",
      "priceAsOfDatesMatch": true,
      "priceAsOfDatesNote": null,
      "targetEpsPeriodDetail": {
        "0y_end": "2026-12-31",
        "0y_eps": 32.85062,
        "1y_end": "2027-12-31",
        "1y_eps": 36.74899
      },
      "targetEpsNtmWeight": {
        "weight_0y": 0.26301369863013696,
        "weight_1y": 0.736986301369863,
        "days_in_0y": 96,
        "days_in_1y": 269
      },
      "peerEpsPeriodDetail": {
        "0y_end": "2026-12-31",
        "0y_eps": 49.00705,
        "1y_end": "2027-12-31",
        "1y_eps": 60.17848
      },
      "peerEpsNtmWeight": {
        "weight_0y": 0.26301369863013696,
        "weight_1y": 0.736986301369863,
        "days_in_0y": 96,
        "days_in_1y": 269
      },
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: target='USD', peer='USD'. 재무제표통화(financialCurrency): target='USD', peer='USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)",
      "targetPricePossibleMissingSessionDates": [],
      "targetPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "targetPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetEstimatesFetchedAt": "2026-09-26",
      "peerCurrentPriceType": "confirmed_close",
      "peerPricePossibleMissingSessionDates": [],
      "peerPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "peerPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetFinancialCurrency": "USD",
      "targetQuoteCurrency": "USD",
      "peerFinancialCurrency": "USD",
      "peerQuoteCurrency": "USD",
      "priceDateAlignmentApplied": true,
      "priceDateAlignmentCommonDate": "2026-09-25",
      "priceDateAlignmentIsPastReference": false,
      "priceDateAlignmentNote": "target·peer 공통 확정 거래일(2026-09-25)이 각자의 최신 확정 종가일과 일치합니다.",
      "peerPriceUsedInCalculation": 1658.9100341796875,
      "peerPriceUsedInCalculationAsOf": "2026-09-25",
      "peerLastCollectionStatus": null,
      "peerLastCollectionNote": null,
      "targetHasMissingSessionsAsOfNow": false,
      "targetMissingSessionsAsOfNow": [],
      "targetCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary",
      "peerHasMissingSessionsAsOfNow": false,
      "peerMissingSessionsAsOfNow": [],
      "peerCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary"
    }
  },
  "FIX": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "band_high(1221.2936412047306)<=band_low(1221.2936412047306) -- 밴드 폭이 0 이하",
      "withheldCheckedAt": "2026-09-26T13:21:29.494637+09:00",
      "neverSucceeded": false,
      "priorLocalSnapshotFound": true,
      "priorLocalSnapshotNote": "로컬에 이전 산출물(스냅샷)이 있었고, peer 적합성/입력 정의 재검토 결과 무효화되어 지금은 보류 상태임. 이 필드는 로컬 산출 이력만 나타내며, 그 값이 실제로 공개 URL에 노출된 적이 있었는지는 이 함수가 확인할 수 없다 -- 공개 이력은 별도로 확보한 증거(공개 URL 캡처 등)로만 판단해야 한다. 아래 prior* 필드는 로컬 역사적 기록일 뿐 현재 유효한 참고범위가 아니다.",
      "priorGeneratedAt": "2026-09-21T07:38:50.814582",
      "priorPeersUsed": [
        "PWR",
        "EME"
      ],
      "priorRangeLow": 1200.4549874751785,
      "priorRangeHigh": 1924.1925211179203,
      "priorRangeMid": 1562.3237542965494,
      "priorBandStatus": "WITHIN_BAND"
    },
    "singleComparisonReference": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:32.618557+09:00",
      "ok": true,
      "reason": null,
      "referenceKind": "single_comparison",
      "peerCount": 1,
      "targetTicker": "FIX",
      "peerTicker": "EME",
      "targetEps1": 57.24024087671233,
      "targetEps1Basis": "NTM 컨센서스 EPS(blend_ntm_eps_from_annual_estimates, peer와 동일 함수로 산출)",
      "peerForwardPe": 21.336277110280346,
      "peerPrice": 762.2100219726562,
      "peerPriceAsOf": "2026-09-25",
      "appliedPrice": 1221.2936412047306,
      "targetCurrentPrice": 1658.9100341796875,
      "targetCurrentPriceAsOf": "2026-09-25",
      "targetCurrentPriceType": "confirmed_close",
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:32.618557+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 비교기업이 정확히 1개일 때 그 기업의 forward P/E를 대상종목 자신의 NTM EPS에 그대로 곱한 '단일 비교기업 참고가격'일 뿐이다 -- 검증된 매수가·매도가·성공확률·신뢰구간이 아니며, low/high 범위 개념 자체가 없다(peer 1개라 범위를 구성하지 않음, 산술 실패 아님). 여러 peer로 만드는 상대가치 밴드(relativeValueBand)와는 다른 개념이며 서로 바꿔 쓰면 안 된다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이므로(eps_definition_confirmation_level 참고) 이 적용가격도 잠정으로 취급해야 한다.",
      "priceAsOfDatesMatch": true,
      "priceAsOfDatesNote": null,
      "targetEpsPeriodDetail": {
        "0y_end": "2026-12-31",
        "0y_eps": 49.00705,
        "1y_end": "2027-12-31",
        "1y_eps": 60.17848
      },
      "targetEpsNtmWeight": {
        "weight_0y": 0.26301369863013696,
        "weight_1y": 0.736986301369863,
        "days_in_0y": 96,
        "days_in_1y": 269
      },
      "peerEpsPeriodDetail": {
        "0y_end": "2026-12-31",
        "0y_eps": 32.85062,
        "1y_end": "2027-12-31",
        "1y_eps": 36.74899
      },
      "peerEpsNtmWeight": {
        "weight_0y": 0.26301369863013696,
        "weight_1y": 0.736986301369863,
        "days_in_0y": 96,
        "days_in_1y": 269
      },
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: target='USD', peer='USD'. 재무제표통화(financialCurrency): target='USD', peer='USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)",
      "targetPricePossibleMissingSessionDates": [],
      "targetPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "targetPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetEstimatesFetchedAt": "2026-09-26",
      "peerCurrentPriceType": "confirmed_close",
      "peerPricePossibleMissingSessionDates": [],
      "peerPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "peerPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetFinancialCurrency": "USD",
      "targetQuoteCurrency": "USD",
      "peerFinancialCurrency": "USD",
      "peerQuoteCurrency": "USD",
      "priceDateAlignmentApplied": true,
      "priceDateAlignmentCommonDate": "2026-09-25",
      "priceDateAlignmentIsPastReference": false,
      "priceDateAlignmentNote": "target·peer 공통 확정 거래일(2026-09-25)이 각자의 최신 확정 종가일과 일치합니다.",
      "peerPriceUsedInCalculation": 762.2100219726562,
      "peerPriceUsedInCalculationAsOf": "2026-09-25",
      "peerLastCollectionStatus": null,
      "peerLastCollectionNote": null,
      "targetHasMissingSessionsAsOfNow": false,
      "targetMissingSessionsAsOfNow": [],
      "targetCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary",
      "peerHasMissingSessionsAsOfNow": false,
      "peerMissingSessionsAsOfNow": [],
      "peerCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary"
    }
  },
  "COHR": {
    "singleComparisonReference": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:32.618557+09:00",
      "ok": true,
      "reason": null,
      "referenceKind": "single_comparison",
      "peerCount": 1,
      "targetTicker": "COHR",
      "peerTicker": "LITE",
      "targetEps1": 10.51066701369863,
      "targetEps1Basis": "NTM 컨센서스 EPS(blend_ntm_eps_from_annual_estimates, peer와 동일 함수로 산출)",
      "peerForwardPe": 38.01788851142553,
      "peerPrice": 941.6500244140625,
      "peerPriceAsOf": "2026-09-25",
      "appliedPrice": 399.5933667075124,
      "targetCurrentPrice": 295.8299865722656,
      "targetCurrentPriceAsOf": "2026-09-25",
      "targetCurrentPriceType": "confirmed_close",
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:32.618557+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 비교기업이 정확히 1개일 때 그 기업의 forward P/E를 대상종목 자신의 NTM EPS에 그대로 곱한 '단일 비교기업 참고가격'일 뿐이다 -- 검증된 매수가·매도가·성공확률·신뢰구간이 아니며, low/high 범위 개념 자체가 없다(peer 1개라 범위를 구성하지 않음, 산술 실패 아님). 여러 peer로 만드는 상대가치 밴드(relativeValueBand)와는 다른 개념이며 서로 바꿔 쓰면 안 된다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이므로(eps_definition_confirmation_level 참고) 이 적용가격도 잠정으로 취급해야 한다.",
      "priceAsOfDatesMatch": true,
      "priceAsOfDatesNote": null,
      "targetEpsPeriodDetail": {
        "0y_end": "2027-06-30",
        "0y_eps": 9.41634,
        "1y_end": "2028-06-30",
        "1y_eps": 13.95531
      },
      "targetEpsNtmWeight": {
        "weight_0y": 0.7589041095890411,
        "weight_1y": 0.2410958904109589,
        "days_in_0y": 277,
        "days_in_1y": 88
      },
      "peerEpsPeriodDetail": {
        "0y_end": "2027-06-30",
        "0y_eps": 21.67057,
        "1y_end": "2028-06-30",
        "1y_eps": 34.52037
      },
      "peerEpsNtmWeight": {
        "weight_0y": 0.7589041095890411,
        "weight_1y": 0.2410958904109589,
        "days_in_0y": 277,
        "days_in_1y": 88
      },
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: target='USD', peer='USD'. 재무제표통화(financialCurrency): target='USD', peer='USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)",
      "targetPricePossibleMissingSessionDates": [],
      "targetPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "targetPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetEstimatesFetchedAt": "2026-09-26",
      "peerCurrentPriceType": "confirmed_close",
      "peerPricePossibleMissingSessionDates": [],
      "peerPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "peerPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetFinancialCurrency": "USD",
      "targetQuoteCurrency": "USD",
      "peerFinancialCurrency": "USD",
      "peerQuoteCurrency": "USD",
      "priceDateAlignmentApplied": true,
      "priceDateAlignmentCommonDate": "2026-09-25",
      "priceDateAlignmentIsPastReference": false,
      "priceDateAlignmentNote": "target·peer 공통 확정 거래일(2026-09-25)이 각자의 최신 확정 종가일과 일치합니다.",
      "peerPriceUsedInCalculation": 941.6500244140625,
      "peerPriceUsedInCalculationAsOf": "2026-09-25",
      "peerLastCollectionStatus": null,
      "peerLastCollectionNote": null,
      "targetHasMissingSessionsAsOfNow": false,
      "targetMissingSessionsAsOfNow": [],
      "targetCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary",
      "peerHasMissingSessionsAsOfNow": false,
      "peerMissingSessionsAsOfNow": [],
      "peerCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary"
    }
  },
  "LITE": {
    "singleComparisonReference": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:32.618557+09:00",
      "ok": true,
      "reason": null,
      "referenceKind": "single_comparison",
      "peerCount": 1,
      "targetTicker": "LITE",
      "peerTicker": "COHR",
      "targetEps1": 24.76860397260274,
      "targetEps1Basis": "NTM 컨센서스 EPS(blend_ntm_eps_from_annual_estimates, peer와 동일 함수로 산출)",
      "peerForwardPe": 28.145691057162047,
      "peerPrice": 295.8299865722656,
      "peerPriceAsOf": "2026-09-25",
      "appliedPrice": 697.1294753300733,
      "targetCurrentPrice": 941.6500244140625,
      "targetCurrentPriceAsOf": "2026-09-25",
      "targetCurrentPriceType": "confirmed_close",
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:32.618557+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 비교기업이 정확히 1개일 때 그 기업의 forward P/E를 대상종목 자신의 NTM EPS에 그대로 곱한 '단일 비교기업 참고가격'일 뿐이다 -- 검증된 매수가·매도가·성공확률·신뢰구간이 아니며, low/high 범위 개념 자체가 없다(peer 1개라 범위를 구성하지 않음, 산술 실패 아님). 여러 peer로 만드는 상대가치 밴드(relativeValueBand)와는 다른 개념이며 서로 바꿔 쓰면 안 된다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이므로(eps_definition_confirmation_level 참고) 이 적용가격도 잠정으로 취급해야 한다.",
      "priceAsOfDatesMatch": true,
      "priceAsOfDatesNote": null,
      "targetEpsPeriodDetail": {
        "0y_end": "2027-06-30",
        "0y_eps": 21.67057,
        "1y_end": "2028-06-30",
        "1y_eps": 34.52037
      },
      "targetEpsNtmWeight": {
        "weight_0y": 0.7589041095890411,
        "weight_1y": 0.2410958904109589,
        "days_in_0y": 277,
        "days_in_1y": 88
      },
      "peerEpsPeriodDetail": {
        "0y_end": "2027-06-30",
        "0y_eps": 9.41634,
        "1y_end": "2028-06-30",
        "1y_eps": 13.95531
      },
      "peerEpsNtmWeight": {
        "weight_0y": 0.7589041095890411,
        "weight_1y": 0.2410958904109589,
        "days_in_0y": 277,
        "days_in_1y": 88
      },
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: target='USD', peer='USD'. 재무제표통화(financialCurrency): target='USD', peer='USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)",
      "targetPricePossibleMissingSessionDates": [],
      "targetPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "targetPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetEstimatesFetchedAt": "2026-09-26",
      "peerCurrentPriceType": "confirmed_close",
      "peerPricePossibleMissingSessionDates": [],
      "peerPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "peerPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetFinancialCurrency": "USD",
      "targetQuoteCurrency": "USD",
      "peerFinancialCurrency": "USD",
      "peerQuoteCurrency": "USD",
      "priceDateAlignmentApplied": true,
      "priceDateAlignmentCommonDate": "2026-09-25",
      "priceDateAlignmentIsPastReference": false,
      "priceDateAlignmentNote": "target·peer 공통 확정 거래일(2026-09-25)이 각자의 최신 확정 종가일과 일치합니다.",
      "peerPriceUsedInCalculation": 295.8299865722656,
      "peerPriceUsedInCalculationAsOf": "2026-09-25",
      "peerLastCollectionStatus": null,
      "peerLastCollectionNote": null,
      "targetHasMissingSessionsAsOfNow": false,
      "targetMissingSessionsAsOfNow": [],
      "targetCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary",
      "peerHasMissingSessionsAsOfNow": false,
      "peerMissingSessionsAsOfNow": [],
      "peerCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary"
    }
  },
  "AAPL": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "AAPL",
      "price": 341.07000732421875,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 8.81945,
          "period_end": "2026-09-30",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 38.67248040685289,
          "per_price_basis_note": "현재가 $341.0700(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 9.57829,
          "period_end": "2027-09-30",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 35.6086532485672,
          "per_price_basis_note": "현재가 $341.0700(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 9.569973945205481,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-09-30(가중1%) / +1y 2027-09-30(가중99%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 35.63959622848226,
          "per_price_basis_note": "현재가 $341.0700(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "AMD": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "AMD",
      "price": 630.6300048828125,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 7.57578,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 83.24291424550509,
          "per_price_basis_note": "현재가 $630.6300(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 15.57829,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 40.481336840103275,
          "per_price_basis_note": "현재가 $630.6300(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 13.473520246575342,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 46.805140255985,
          "per_price_basis_note": "현재가 $630.6300(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "AMZN": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "AMZN",
      "price": 249.6699981689453,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 12.87793,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 19.387432465384215,
          "per_price_basis_note": "현재가 $249.6700(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 10.49185,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 23.79656573139583,
          "per_price_basis_note": "현재가 $249.6700(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 11.119421726027396,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 22.453505615722715,
          "per_price_basis_note": "현재가 $249.6700(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "ANET": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "ANET",
      "price": 206.5500030517578,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 4.11217,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 50.22895528437731,
          "per_price_basis_note": "현재가 $206.5500(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 5.18742,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 39.81748211090635,
          "per_price_basis_note": "현재가 $206.5500(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 4.904614520547945,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 42.11340201893828,
          "per_price_basis_note": "현재가 $206.5500(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "ARM": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "ARM",
      "price": 310.32000732421875,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 2.22817,
          "period_end": "2027-03-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 139.27124381183606,
          "per_price_basis_note": "현재가 $310.3200(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 3.06276,
          "period_end": "2028-03-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 101.32038008992502,
          "per_price_basis_note": "현재가 $310.3200(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 2.6374620821917807,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2027-03-31(가중51%) / +1y 2028-03-31(가중49%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 117.65856632385668,
          "per_price_basis_note": "현재가 $310.3200(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "AVGO": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "AVGO",
      "price": 352.80999755859375,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 11.65832,
          "period_end": "2026-10-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 30.262507596171126,
          "per_price_basis_note": "현재가 $352.8100(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 19.38135,
          "period_end": "2027-10-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 18.20358218383104,
          "per_price_basis_note": "현재가 $352.8100(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 18.640785479452052,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-10-31(가중10%) / +1y 2027-10-31(가중90%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 18.92677741222333,
          "per_price_basis_note": "현재가 $352.8100(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "BE": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "BE",
      "price": 288.70001220703125,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 2.70582,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 106.6959414177703,
          "per_price_basis_note": "현재가 $288.7000(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 4.92871,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 58.57516717498722,
          "per_price_basis_note": "현재가 $288.7000(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 4.344059479452055,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 66.4585771839954,
          "per_price_basis_note": "현재가 $288.7000(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "CEG": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "CEG",
      "price": 263.2699890136719,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 12.144,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 21.679017540651504,
          "per_price_basis_note": "현재가 $263.2700(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 13.32016,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 19.764776775479564,
          "per_price_basis_note": "현재가 $263.2700(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 13.010813808219176,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 20.23470575279152,
          "per_price_basis_note": "현재가 $263.2700(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    },
    "singleComparisonReference": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:32.618557+09:00",
      "ok": true,
      "reason": null,
      "referenceKind": "single_comparison",
      "peerCount": 1,
      "targetTicker": "CEG",
      "peerTicker": "VST",
      "targetEps1": 13.010813808219176,
      "targetEps1Basis": "NTM 컨센서스 EPS(blend_ntm_eps_from_annual_estimates, peer와 동일 함수로 산출)",
      "peerForwardPe": 13.651786172258927,
      "peerPrice": 138.4600067138672,
      "peerPriceAsOf": "2026-09-25",
      "appliedPrice": 177.62084803688205,
      "targetCurrentPrice": 263.2699890136719,
      "targetCurrentPriceAsOf": "2026-09-25",
      "targetCurrentPriceType": "confirmed_close",
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:32.618557+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 비교기업이 정확히 1개일 때 그 기업의 forward P/E를 대상종목 자신의 NTM EPS에 그대로 곱한 '단일 비교기업 참고가격'일 뿐이다 -- 검증된 매수가·매도가·성공확률·신뢰구간이 아니며, low/high 범위 개념 자체가 없다(peer 1개라 범위를 구성하지 않음, 산술 실패 아님). 여러 peer로 만드는 상대가치 밴드(relativeValueBand)와는 다른 개념이며 서로 바꿔 쓰면 안 된다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이므로(eps_definition_confirmation_level 참고) 이 적용가격도 잠정으로 취급해야 한다.",
      "priceAsOfDatesMatch": true,
      "priceAsOfDatesNote": null,
      "targetEpsPeriodDetail": {
        "0y_end": "2026-12-31",
        "0y_eps": 12.144,
        "1y_end": "2027-12-31",
        "1y_eps": 13.32016
      },
      "targetEpsNtmWeight": {
        "weight_0y": 0.26301369863013696,
        "weight_1y": 0.736986301369863,
        "days_in_0y": 96,
        "days_in_1y": 269
      },
      "peerEpsPeriodDetail": {
        "0y_end": "2026-12-31",
        "0y_eps": 9.47291,
        "1y_end": "2027-12-31",
        "1y_eps": 10.38114
      },
      "peerEpsNtmWeight": {
        "weight_0y": 0.26301369863013696,
        "weight_1y": 0.736986301369863,
        "days_in_0y": 96,
        "days_in_1y": 269
      },
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: target='USD', peer='USD'. 재무제표통화(financialCurrency): target='USD', peer='USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)",
      "targetPricePossibleMissingSessionDates": [],
      "targetPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "targetPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetEstimatesFetchedAt": "2026-09-26",
      "peerCurrentPriceType": "confirmed_close",
      "peerPricePossibleMissingSessionDates": [],
      "peerPricePossibleMissingSessionDatesCalendarConfirmed": [],
      "peerPricePossibleMissingSessionCalendarSource": "no_candidates",
      "targetFinancialCurrency": "USD",
      "targetQuoteCurrency": "USD",
      "peerFinancialCurrency": "USD",
      "peerQuoteCurrency": "USD",
      "priceDateAlignmentApplied": true,
      "priceDateAlignmentCommonDate": "2026-09-25",
      "priceDateAlignmentIsPastReference": false,
      "priceDateAlignmentNote": "target·peer 공통 확정 거래일(2026-09-25)이 각자의 최신 확정 종가일과 일치합니다.",
      "peerPriceUsedInCalculation": 138.4600067138672,
      "peerPriceUsedInCalculationAsOf": "2026-09-25",
      "peerLastCollectionStatus": null,
      "peerLastCollectionNote": null,
      "targetHasMissingSessionsAsOfNow": false,
      "targetMissingSessionsAsOfNow": [],
      "targetCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary",
      "peerHasMissingSessionsAsOfNow": false,
      "peerMissingSessionsAsOfNow": [],
      "peerCalendarSourceAsOfNow": "weekday_approximation_no_holiday_calendar_et_boundary"
    }
  },
  "CRM": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "CRM",
      "price": 234.02000427246094,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 16.75532,
          "period_end": "2027-01-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 13.966907482069034,
          "per_price_basis_note": "현재가 $234.0200(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 16.00674,
          "period_end": "2028-01-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 14.620091553461911,
          "per_price_basis_note": "현재가 $234.0200(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 16.267204821917808,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2027-01-31(가중35%) / +1y 2028-01-31(가중65%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 14.385999735931975,
          "per_price_basis_note": "현재가 $234.0200(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "ETN": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "ETN",
      "price": 439.9800109863281,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 13.56339,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 32.43879376662679,
          "per_price_basis_note": "현재가 $439.9800(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 16.11763,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 27.29805877081979,
          "per_price_basis_note": "현재가 $439.9800(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 15.445829890410955,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 28.485359097439982,
          "per_price_basis_note": "현재가 $439.9800(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "GEV": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "GEV",
      "price": 957.6300048828125,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 30.78103,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 31.111044850767257,
          "per_price_basis_note": "현재가 $957.6300(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 24.85029,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 38.53596899202434,
          "per_price_basis_note": "현재가 $957.6300(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 26.4101558630137,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 36.25991493007175,
          "per_price_basis_note": "현재가 $957.6300(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "GOOGL": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "GOOGL",
      "price": 343.9200134277344,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 20.62484,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 16.675039099829835,
          "per_price_basis_note": "현재가 $343.9200(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 14.9221,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 23.04769525922855,
          "per_price_basis_note": "현재가 $343.9200(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 16.421998739726025,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 20.942640349604126,
          "per_price_basis_note": "현재가 $343.9200(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "HUBB": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "HUBB",
      "price": 466.6199951171875,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 20.46293,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 22.8031858153836,
          "per_price_basis_note": "현재가 $466.6200(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 22.91317,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 20.364707070963444,
          "per_price_basis_note": "현재가 $466.6200(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 22.268723315068492,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 20.954052395156463,
          "per_price_basis_note": "현재가 $466.6200(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "INTC": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "INTC",
      "price": 123.0,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 1.52026,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 80.90721323984056,
          "per_price_basis_note": "현재가 $123.0000(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 2.06208,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 59.64851024208566,
          "per_price_basis_note": "현재가 $123.0000(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 1.919573917808219,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 64.07671976520818,
          "per_price_basis_note": "현재가 $123.0000(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "META": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "META",
      "price": 751.6599731445312,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 31.21292,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 24.08169351488202,
          "per_price_basis_note": "현재가 $751.6600(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 34.03168,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 22.087066320103247,
          "per_price_basis_note": "현재가 $751.6600(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 33.29030750684932,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 22.578943525525588,
          "per_price_basis_note": "현재가 $751.6600(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "MOD": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "MOD",
      "price": 198.07000732421875,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 7.62314,
          "period_end": "2027-03-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 25.982732486117104,
          "per_price_basis_note": "현재가 $198.0700(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 11.00765,
          "period_end": "2028-03-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 17.993850397152777,
          "per_price_basis_note": "현재가 $198.0700(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 9.282940794520549,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2027-03-31(가중51%) / +1y 2028-03-31(가중49%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 21.336989183549864,
          "per_price_basis_note": "현재가 $198.0700(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "MRVL": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "MRVL",
      "price": 261.93499755859375,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 4.2113,
          "period_end": "2027-01-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 62.19813301322484,
          "per_price_basis_note": "현재가 $261.9350(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 6.75725,
          "period_end": "2028-01-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 38.76354989952921,
          "per_price_basis_note": "현재가 $261.9350(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 5.871398904109588,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2027-01-31(가중35%) / +1y 2028-01-31(가중65%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 44.6120254877005,
          "per_price_basis_note": "현재가 $261.9350(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "MSFT": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "MSFT",
      "price": 516.1699829101562,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 19.75972,
          "period_end": "2027-06-30",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 26.122332852396504,
          "per_price_basis_note": "현재가 $516.1700(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 23.67588,
          "period_end": "2028-06-30",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 21.801512041375283,
          "per_price_basis_note": "현재가 $516.1700(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 20.703890082191784,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2027-06-30(가중76%) / +1y 2028-06-30(가중24%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 24.93106275492324,
          "per_price_basis_note": "현재가 $516.1700(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "MU": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "MU",
      "price": 1082.280029296875,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 73.60099,
          "period_end": "2026-08-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 14.704693908286764,
          "per_price_basis_note": "현재가 $1082.2800(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 159.49178,
          "period_end": "2027-08-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 6.7858044426921245,
          "per_price_basis_note": "현재가 $1082.2800(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "ok": false,
          "error_message": "창 끝(2027-09-26)이 +1y 마감일(2027-08-31)을 넘어감 -- 그 이후 구간은 이 두 추정치로 답할 수 없어 억지로 채우지 않고 산출 보류 (재현: as_of가 늦어질수록 이 조건에 걸리게 됨)"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "NVDA": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "NVDA",
      "price": 225.07000732421875,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 9.30713,
          "period_end": "2027-01-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 24.18253611201506,
          "per_price_basis_note": "현재가 $225.0700(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 15.68263,
          "period_end": "2028-01-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 14.35154736955592,
          "per_price_basis_note": "현재가 $225.0700(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 13.464305342465753,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2027-01-31(가중35%) / +1y 2028-01-31(가중65%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 16.71605044594162,
          "per_price_basis_note": "현재가 $225.0700(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "ORCL": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "ORCL",
      "price": 137.10000610351562,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 8.1414,
          "period_end": "2027-05-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 16.83985630278768,
          "per_price_basis_note": "현재가 $137.1000(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 10.99719,
          "period_end": "2028-05-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 12.466821624752836,
          "per_price_basis_note": "현재가 $137.1000(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 9.064641698630137,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2027-05-31(가중68%) / +1y 2028-05-31(가중32%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 15.124702184779615,
          "per_price_basis_note": "현재가 $137.1000(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "PLTR": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "PLTR",
      "price": 189.6699981689453,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 1.61155,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 117.69414425177332,
          "per_price_basis_note": "현재가 $189.6700(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 2.32666,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 81.52029010209714,
          "per_price_basis_note": "현재가 $189.6700(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 2.1385762739726024,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 88.6898449577465,
          "per_price_basis_note": "현재가 $189.6700(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "QCOM": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "QCOM",
      "price": 201.97000122070312,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 10.48336,
          "period_end": "2026-09-30",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 19.26576986965087,
          "per_price_basis_note": "현재가 $201.9700(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 10.17716,
          "period_end": "2027-09-30",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 19.845418684652998,
          "per_price_basis_note": "현재가 $201.9700(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 10.180515616438358,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-09-30(가중1%) / +1y 2027-09-30(가중99%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 19.8388774036734,
          "per_price_basis_note": "현재가 $201.9700(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "TSLA": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "TSLA",
      "price": 372.1099853515625,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 1.76501,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 210.8259926864791,
          "per_price_basis_note": "현재가 $372.1100(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 2.17289,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 171.25118406894157,
          "per_price_basis_note": "현재가 $372.1100(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 2.0656119726027398,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 180.14515324613052,
          "per_price_basis_note": "현재가 $372.1100(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  },
  "TSM": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK_WITHHELD",
      "lastCheckNote": "가격 자료상태 문제: 통화 불일치: financial_currency='TWD', quote_currency='USD' (둘 다 'USD'이어야 함, 환전 미적용)",
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": false,
      "reason": "가격 자료상태 문제: 통화 불일치: financial_currency='TWD', quote_currency='USD' (둘 다 'USD'이어야 함, 환전 미적용)",
      "diagnosticKind": null,
      "ticker": "TSM",
      "price": null,
      "priceAsOf": null,
      "priceType": null,
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": null,
      "financialCurrency": null,
      "quoteCurrency": null,
      "estimatesFetchedAt": null,
      "multiples": null,
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "missing",
      "isStaleReference": true,
      "staleReasons": [
        "대상종목 가격 관측일(알수없음)이 확인되지 않습니다(누락 또는 형식 오류)"
      ],
      "disclaimer": null,
      "epsDefinitionConfirmationLevel": null,
      "epsDefinitionConfirmationLabel": null,
      "epsCurrencyBasisNote": null,
      "epsShareBasisAssumed": null,
      "epsSplitConfirmationNote": null
    }
  },
  "VRT": {
    "priceMultipleDiagnosticOnly": {
      "lastCheckStatus": "OK",
      "lastCheckNote": null,
      "lastCheckCheckedAt": "2026-09-26T13:21:34.239813+09:00",
      "ok": true,
      "reason": null,
      "diagnosticKind": "price_multiple_only_no_peer",
      "ticker": "VRT",
      "price": 253.27999877929688,
      "priceAsOf": "2026-09-25",
      "priceType": "confirmed_close",
      "pricePossibleMissingSessionDates": [],
      "pricePossibleMissingSessionDatesCalendarConfirmed": [],
      "pricePossibleMissingSessionCalendarSource": "no_candidates",
      "financialCurrency": "USD",
      "quoteCurrency": "USD",
      "estimatesFetchedAt": "2026-09-26",
      "multiples": {
        "fy_current": {
          "eps": 6.73489,
          "period_end": "2026-12-31",
          "period_label": "FY0(당해 회계연도)",
          "eps_basis_note": "회계연도 0y 컨센서스 평균 EPS(그대로, 계절성 조정 없음)",
          "per": 37.607147077279194,
          "per_price_basis_note": "현재가 $253.2800(2026-09-25) / 해당 기간 EPS"
        },
        "fy_next": {
          "eps": 9.12236,
          "period_end": "2027-12-31",
          "period_label": "FY1(익년 회계연도)",
          "eps_basis_note": "회계연도 +1y 컨센서스 평균 EPS",
          "per": 27.76474495407952,
          "per_price_basis_note": "현재가 $253.2800(2026-09-25) / 해당 기간 EPS"
        },
        "ntm": {
          "eps": 8.494422684931507,
          "period_end": null,
          "period_label": "NTM(향후 365일 일수보간)",
          "window_start": "2026-09-26",
          "window_end": "2027-09-26",
          "eps_basis_note": "0y 2026-12-31(가중26%) / +1y 2027-12-31(가중74%) 일수 가중 선형보간(ntm_method=annual_day_weighted_approximation, 계절성 미반영 근사, blend_ntm_eps_from_annual_estimates와 완전히 동일한 계산).",
          "per": 29.81721161917187,
          "per_price_basis_note": "현재가 $253.2800(2026-09-25) / 해당 기간 EPS"
        }
      },
      "asOfDate": "2026-09-26",
      "generatedAt": "2026-09-26T13:21:34.239813+09:00",
      "generatedAtClass": "ok",
      "generatedAtAgeDays": 0,
      "priceDateClass": "ok",
      "isStaleReference": false,
      "staleReasons": [],
      "disclaimer": "이 값은 대상종목 자신의 FY0/FY1/NTM 컨센서스 EPS 대비 현재가의 배수(PER) 진단일 뿐이다 -- 동종업계 비교나 매수가·매도가·적정가가 아니며, 배지·판정에 연결하지 않는다. EPS 정의(GAAP/조정 등)의 기업 간 비교가능성은 미확인이다.",
      "epsDefinitionConfirmationLevel": "source_traced_comparability_unconfirmed",
      "epsDefinitionConfirmationLabel": "출처는 추적됨(Yahoo→S&P Global Market Intelligence) · 기업 간 이익기준 비교가능성은 미확인",
      "epsCurrencyBasisNote": "주가 통화(quoteCurrency)는 raw 데이터에서 확인됨: 'USD'. 재무제표통화(financialCurrency): 'USD'. EPS 컨센서스 필드(earningsTrend) 응답 자체에는 통화가 별도로 명시되지 않으므로, 위 두 통화가 서로 일치한다는 사실로 USD 표시를 근사 추정할 뿐 EPS 필드 자체의 통화가 개별 확인된 것은 아니다.",
      "epsShareBasisAssumed": "희석(diluted) 기준으로 추정 - 컨센서스 EPS 업계 관행상 일반적이나 이 필드 자체에서 개별 확인되지는 않음",
      "epsSplitConfirmationNote": "분할(액면분할 등) 조정 여부는 개별 확인되지 않음(자료 없음, 지어내지 않음)"
    }
  }
};
