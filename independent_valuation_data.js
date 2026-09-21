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
    }
  },
  "AMAT": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": true,
      "rangeLow": 539.491657971266,
      "rangeHigh": 571.8415439013716,
      "rangeMid": 555.6666009363188,
      "bandStatus": "BELOW_BAND",
      "bandDisclaimer": "이 범위는 검증된 매수가·바닥가격·성공확률이 아니다 -- 동종업계가 지금 받는 배수를 그대로 적용한 참고 범위일 뿐이며, 이 범위와 별도로 산출되는 장기 DCF 내재가치(조건부 참고값)와도 다른 개념이다.",
      "comparisonPrice": 464.239990234375,
      "comparisonPriceAsOf": "2026-09-21",
      "comparisonPriceLabel": "최근 종가",
      "comparisonPriceNote": "실시간 시세가 아니라 prices_cache.json에 기록된 마지막 종가이며, 위 관측일 기준입니다.",
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
      "generatedAt": "2026-09-22T07:41:04.867433",
      "asOfDate": "2026-09-22",
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
      "builtAt": "2026-09-22",
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
      }
    },
    "longTermScenario": {
      "kind": "amat_long_term_eps_growth_exit_multiple_scenario",
      "not_the_dcf": "기존 독립 DCF(compute_forward, 약 $191.30)와 완전히 별개의 시나리오 -- 바닥가격/최악 시나리오가 아니며, 두 값을 평균내지 않는다.",
      "assumption_disclaimer": "요약: FY2027 EPS는 '지금 관측된 컨센서스'이고, 이후 성장률·출구PER·요구수익률은 전부 분석자가 근거(과거 실적 이력·GAAP/조정 EPS 구분·사업부문별 매출 비중과 가이던스·정의를 맞춘 밸류에이션 관측값)를 조사해 선택한 가정이다. 회사가 확정한 전망이나 통계적으로 검증된 값이 아니다.",
      "assumption_review": {
        "eps_base": "FY2027 EPS $18.45479는 회사가 확정한 실적이 아니라, 지금(2026-09-21 기준) 관측된 컨센서스 전망치(estimates_cache.json, 34명 애널리스트)다 -- '그 시점에 관측된 전망'이라는 성격이지 '그 시점의 실제 달성'이라는 뜻이 아니다. 이후 FY2028~FY2031 성장 경로는 컨센서스 자체가 없어 EVIDENCE_BASE의 실제 과거 EPS 이력·현재 사이클 가이던스·밸류에이션 관측값을 근거로 분석자가 선택한 가정을 적용한다.",
        "growth_sustainability": "이 종목의 실제 GAAP EPS는 최근 8년간 -3.4%(FY2019 역성장)부터 +63.3%(FY2021)까지 크게 출렁였고, 지금의 AI 수퍼사이클 직전 3년(FY2023~FY2025)은 GAAP 기준 +9.0%→+6.2%→+0.6%로 뚜렷하게 둔화했다. 다만 FY2025 GAAP +0.6%는 사업 둔화만을 뜻하지 않는다 -- 같은 해 조정 (non-GAAP) EPS는 +9% 증가했다(EVIDENCE_BASE.eps_history.gaap_vs_adjusted_fy2025, 회사 공식 발표). '연 10%가 4년 이어진다'를 검증된 값처럼 쓰지 않는다는 원칙은 유지하되, 성장률을 '두 역사적 수치 사이의 중간값'으로 고르지 않고 매출 비중별로 다시 구성했다: 매출 73.3%를 차지하는 반도체장비(사이클성 강함)는 수퍼사이클 이전 3년 CAGR(연 5.2%)에 가까운 연 7%로, 매출 22.5%를 차지하는 서비스(AGS)는 회사가 공식 실적콜에서 밝힌 '지속가능한 장기 중간 10%대 성장'을 반영해 연 14%로 가정하고 매출 비중으로 가중하면 전사 매출 성장률은 약 8.4%가 된다(EVIDENCE_BASE.revenue_to_eps_bridge.step1). 영업이익률·법인세율·순이자가 일정하게 유지된다는 단순화(같은 bridge.step2, 부문별 손익 공시가 없어 개별 재구성 불가라는 한계를 명시)를 적용하면 순이익도 연 8.4%로 성장하고, 여기서 EPS 성장률 9%까지 필요한 주식수 감소는 정확히 연 약 0.52%다(같은 bridge.step3, (1.0843/1.09)-1=-0.00524) -- 이는 최근 실제 자사주 매입 속도(-2.55%/yr)의 '절반'이 아니라 약 1/5에 불과하며, 이 재현 가능한 계산이 9%라는 숫자를 검산한다(이전 버전이 '절반 정도 반영'이라고 부정확하게 표현했던 부분, 2026-09-22 정정). 마진은 최근 4개년 안정적(28.9~30.2%)이라 추세적 확장은 가정하지 않는다. 참고로 7년 CAGR은 16.6%(8년 전체 '평균'이 아니라 연복리성장률)이며, 같은 7개 구간의 산술평균은 약 18.4%로 CAGR과는 다르다(복리효과) -- 두 표현을 혼용하지 않는다.",
        "exit_per_validity": "이전 버전은 fundamentals_cache.json의 forwardPE(32.06)를 검증 없이 'NTM PER'이라고 부르고, 이를 트레일링 3년 평균(21.20)과 비교해 '+51% 고평가'라고 설명했다 -- 두 수치의 EPS 기간 정의가 다르다는 것을 이번에 확인했다(EVIDENCE_BASE.valuation_multiples 참고: forwardPE는 정의 미확인, 역산해보면 향후 365일 롤링 NTM이 아니라 마감 임박한 FY2026 단일 컨센서스에 더 가까워 보인다). 같은 정의(이 프로젝트의 상대가치 카드가 쓰는 방법론)로 다시 계산한 자체 NTM PER은 약 24.91배다. 출구 PER의 1차 근거는 NTM 배수가 아니라 트레일링 연간 PER의 8년 전체 이력 평균(17.65배 → 18배로 반올림)으로 삼는다.\n'평균이 무효/유효'가 아니라 '어느 구간이 미래를 더 잘 대표하는가'의 문제로 본다: 최근 3개년(15.99→21.29→26.33)이 단조 상승 중이라는 사실만으로 그 평균(21.20)이 자동으로 근거 없는 값이 되지는 않는다 -- 다만 상승 추세의 '중간'을 잘라낸 값이라 향후에도 상승이 이어질지, 여기서 꺾일지에 대해 그 자체로는 답하지 않는다는 한계가 있다. 반대로 8년 전체 평균(17.65)도 '8개 표본이라 정상 배수로 자동 확정'되는 것은 아니다 -- 2018~2022년(영업이익률 22.9~26%대, AGS 비중이 지금보다 낮음)과 2023~2025년(영업이익률 28.9~30.2%, AGS 비중 확대·첨단 패키징 신사업 성장)은 서로 다른 사업 구성·수익성 국면이며, 단순 평균은 이 구조 변화를 반영하지 못한다. 그럼에도 18배를 추천하는 이유는 세 가지다: (1) 회사의 수익성 구조가 8년 전보다 구조적으로 개선됐다는 점(buyback_and_margin.operating_margin_note)에서 8년 평균의 저점 구간(10~15배대, 2018·2020·2022년)을 그대로 반복한다고 보기는 어렵다 -- 이 점이 17.65를 18로 반올림(하향이 아니라)한 근거다. (2) 그렇다고 최근 3년 평균(21.20)이나 현재 시장이 매기는 배수 수준을 5년 뒤(FY2031)까지 그대로 유지된다고 가정하지는 않는다 -- 반도체장비 업종은 설비투자 사이클상 평균 4~6년 주기로 확장·수축을 반복해 왔고(8년 PER 이력의 10.1배~26.3배 진폭 자체가 이를 보여준다), FY2031까지 4년이면 최소 한 번의 하락 국면을 지날 가능성을 배제하기 어렵다. (3) 2018~2021년의 저금리 국면과 달리 지금은 요구수익률(할인율) 자체가 구조적으로 높아진 환경이라 (이 시나리오도 10%를 기본 요구수익률로 쓴다), 주식시장 전반의 배수가 그 시기보다 낮게 형성되는 경향과도 맞물린다. 세 요인이 서로 다른 방향(수익성 개선은 상향, 사이클·금리는 하향)으로 작용하는 가운데, 8년 평균 근방에서 소폭 위(18배)로 잡는 것이 두 극단(3년 평균 21.20배를 그대로 유지 / 8년 최저점 10배대로 회귀)보다 근거가 더 균형 잡혀 있다고 판단한다. 이 선택 자체는 분석자의 판단이라는 한계가 그대로 남으며, 배수가 더 낮게(사이클 저점권) 혹은 더 높게(AI 프리미엄 유지) 갈 경우의 영향은 아래 범위·스트레스 시나리오에서 함께 보여준다.",
        "no_reverse_engineering": "이 가정들은 '현재 주가와 비슷한 결과가 나오도록' 거꾸로 고른 것이 아니다 -- 추천 기준안(성장 9%·출구PER 18배)의 목표주가·매입가 상한은 현재 비교가격과 독립적으로 계산되며, 그 결과가 현재가보다 높을 수도 낮을 수도 있다는 것을 그대로 보여준다. 현재가에 맞추기 위해 이 숫자들을 사후에 조정하지 않았다. 참고로 낮아진 숫자(이전 8%·21배보다도 목표주가가 낮음)라는 사실 자체가 '더 보수적이라 더 맞다'는 뜻도 아니다 -- 근거를 재구성한 결과일 뿐이다.",
        "assumption_vs_fact_note": "요약: FY2027 EPS는 '지금 관측된 컨센서스'이고, 이후 성장률·출구PER·요구수익률은 전부 분석자가 근거(과거 실적 이력·GAAP/조정 EPS 구분·사업부문별 매출 비중과 가이던스·정의를 맞춘 밸류에이션 관측값)를 조사해 선택한 가정이다. 회사가 확정한 전망이나 통계적으로 검증된 값이 아니다.",
        "primary_vs_codex_initial": "이 모듈의 기본 가정은 성장 연 9%·출구PER 18배(추천 기준안, 2026-09-22 정의 정정 후 재산출)다. 2026-09-19 최초 제안이었던 성장 10%·출구PER 24배(Codex 초안)는 삭제하지 않고 비교 시나리오로 계속 함께 계산한다 -- 이쪽은 '지금의 정의 미확인 forwardPE 수준 배수가 상당 부분 유지된다'는, 추천 기준안보다 낙관적인 가정 조합에 해당한다. 어느 쪽이 맞다고 확정하지 않으며, 두 값을 평균내지도 않는다.",
        "definition_correction_note": "2026-09-22 정정: (1) fundamentals_cache.json의 forwardPE(32.06)를 근거 확인 없이 'NTM PER'로 단정했던 것을 '정의 미확인 값'으로 재분류하고, 같은 방법론(0y/+1y 일수가중)으로 다시 계산한 자체 NTM PER(약 24.91배)을 병기했다. (2) avgPe3Y(21.20)를 '정상화된 3년 배수'라고 부르던 것을 정정 -- 원시 3개 관측치가 단조 상승 중이라 8년 전체 평균(17.65배)을 1차 근거로 바꿨다. (3) GAAP EPS 성장 둔화(FY2025 +0.6%)와 조정 EPS 성장(+9%)을 구분해 '사업 정체'로 오독하지 않도록 했다. (4) 16.6%를 '8년 전체 평균'이라 부르던 것을 '7년 CAGR'로 정정했다(산술평균 약 18.4%와는 다른 값). (5) 패키징 가이던스를 낡은 2차 기사(+50~60%)에서 회사 공식 Q3 FY2026 실적콜 원문(CY2026 +70% 초과, 서비스 장기 중간10%대, 2028년 생산능력 2배 확대 계획)으로 교체했다. 이 정정의 결과로 추천 기준안이 성장 8%·출구PER 21배에서 성장 9%·출구PER 18배로 바뀌었다 -- 목표주가는 약 $527에서 약 $469로, 연 10% 요구수익률 매입가 상한은 아래 실제 산출값을 참고할 것."
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
        "valuation_multiples": {
          "kind": "관측값 + 검산(fundamentals_cache.json의 원시값은 관측값, own_ntm_forward_per는 이 프로젝트가 이미 쓰는 함수로 재계산한 검산값)",
          "observed_at": "2026-09-22",
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
            "note": "최근 3개년(FY2023~2025)은 15.99→21.29→26.33으로 단조 상승 중이라, 이 3점 평균(21.20배)을 '평균 회귀 기준점'으로 쓰기엔 근거가 약하다 -- 오르는 추세의 중간을 잘라낸 값일 뿐 안정된 평균이 아니다. 8년 전체 평균(17.65배, 2018년 저점 10.07배~2025년 26.33배 포함)이 장기 사이클을 더 넓게 반영한다고 보고, 이를 출구 PER의 1차 참고값으로 쓴다. 다만 표본이 8개뿐이고 회사 자체의 경쟁력·마진 구조도 이 기간 동안 바뀌었다는 한계는 그대로 남는다."
          },
          "note": "정의를 맞춰 비교하면: Finnhub forwardPE(32.06, 정의 미확인) > 이 프로젝트 자체 계산 NTM PER(약 24.91, 상대가치 카드와 동일 방법론) > 최근 3년 트레일링 평균(21.20, 단조 상승 중이라 안정된 평균 아님) > 8년 전체 트레일링 평균(17.65, 저점~고점을 모두 포함). 이전 버전의 'NTM이 트레일링 3년 평균보다 +51% 높다'는 서로 다른 정의(정의 미확인 forwardPE vs 트레일링 3년)를 직접 비교한 것이라 고평가 근거로 쓰지 않는다. 출구 PER 추천의 1차 근거는 8년 전체 트레일링 평균(17.65배 → 18배로 반올림)으로 삼는다."
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
          "buyback_note": "최근 1년(2024-12→2025-12) 발행주식수가 약 -2.55%(자사주 매입) 감소했다. 아래 revenue_to_eps_bridge에서 실제로 적용한 값은 이 속도의 '절반'이 아니라 약 0.52%p/yr(관측 속도의 약 1/5)다 -- 매출 비중 가중 성장률(8.4%)에서 EPS 성장률 9%까지 필요한 만큼만 역산해 적용했고, 관측된 매입 속도를 그대로(혹은 절반) 투영하지 않았다(이전 버전 표현이 부정확했던 부분, 2026-09-22 정정)."
        },
        "revenue_to_eps_bridge": {
          "kind": "분석자 계산(위 관측값들을 조합한 단순화된 연결식 -- 완전한 부문별 손익계산서 재구성이 아니다. 회사가 부문별 영업이익·법인세·순이자를 매출만큼 세부적으로 공시하지 않아 한계가 있음을 명시한다)",
          "step1_segment_weighted_revenue_growth": {
            "inputs": [
              {
                "segment": "Semiconductor Systems",
                "revenue_share_fy2025": 0.733,
                "assumed_annual_growth": 0.07,
                "basis": "수퍼사이클 이전 3년 CAGR(연 5.2%, derived_cagr_recent_precycle_3y_fy2022_2025)보다 다소 높게 잡음 -- 첨단 패키징(CY2026 +70% 초과 가이던스)이 이 부문 내 신성장 하위영역이라는 점을 반영한 판단(분석자 가정, 회사가 부문 전체 성장률을 별도로 제시하지는 않음)"
              },
              {
                "segment": "Applied Global Services",
                "revenue_share_fy2025": 0.225,
                "assumed_annual_growth": 0.14,
                "basis": "회사가 실적콜에서 직접 밝힌 '지속가능한 장기 중간 10%대 성장' 구간의 상단 근방(관측값에 근거한 판단, 회사가 특정 소수점 숫자를 제시하지는 않음)"
              },
              {
                "segment": "Display",
                "revenue_share_fy2025": 0.037,
                "assumed_annual_growth": 0.04,
                "basis": "비중이 작아 전사 성장률에 미치는 영향이 제한적 -- 특별한 가이던스 없어 보수적으로 낮은 성장만 가정"
              }
            ],
            "formula": "sum(revenue_share_fy2025 * assumed_annual_growth) -- FY2025 매출 비중을 FY2028~FY2031에도 그대로 유지한다고 가정한 단순화(부문별 비중 변화 자체는 반영하지 않음, 한계로 명시)",
            "result": 0.0843
          },
          "step2_operating_income_and_below": {
            "assumption": "영업이익률은 최근 4개년 안정 구간(28.9~30.2%, buyback_and_margin.operating_margin_note)에서 유지된다고 가정 -- 즉 영업이익도 매출과 같은 연 8.4%로 성장한다고 본다(마진 추세적 확장은 가정하지 않음). 법인세율·순이자·본사 미배분 비용은 부문별 공시가 없어 개별 재구성이 불가능하므로, 영업이익 대비 비율이 일정하게 유지된다고 가정한다 (즉 순이익도 영업이익과 같은 연 8.4%로 성장 -- 세율 변동이나 순이자 변화는 이 시나리오에 반영하지 않은 단순화이며, 한계로 명시한다).",
            "implied_net_income_growth": 0.0843
          },
          "step3_share_count_and_eps": {
            "target_eps_growth": 0.09,
            "formula": "required_share_count_decline = 1 - (1+net_income_growth)/(1+target_eps_growth)",
            "computed_required_annual_share_count_decline_pct": 0.52,
            "check": "(1.0843/1.09) - 1 = -0.00524 -> 필요 주식수 감소는 연 약 0.52%. 이는 최근 관측된 자사주 매입 속도(-2.55%/yr)의 약 1/5에 불과하다 -- '절반 반영'이 아니라 관측 속도보다 훨씬 보수적인 속도만 있으면 9% EPS 성장 가정이 검산된다는 뜻이다."
          },
          "step4_cash_compatibility": {
            "note": "필요 매입 속도(연 0.52%)가 최근 실제 매입 속도(연 2.55%)의 1/5 수준에 불과하므로, 이 가정이 성립하려면 최근 실제 자사주 매입 현금 지출의 극히 일부만 유지되면 된다 -- 즉 재투자(설비투자)·배당과의 자금 양립 가능성이 이 시나리오의 제약 요인이 될 가능성은 낮다고 판단한다. 다만 이 판단은 실제 잉여현금흐름·설비투자 계획의 세부 재구성 없이 '최근 매입 속도 대비 필요 속도가 훨씬 낮다'는 상대적 비교에 근거한 것이며, 향후 대규모 인수합병이나 설비투자 급증처럼 자금 배분이 크게 바뀌는 사건은 반영하지 않았다."
          },
          "overall_note": "매출 8.4%(부문 가중) -> 영업이익·순이익도 8.4%(마진·세율·순이자 고정 가정, 한계로 명시) -> EPS 9%(부문 가중 성장에 필요 주식수 감소 0.52%/yr를 더함, 관측된 매입 속도의 1/5). 9%는 '5.2%와 16.6% 사이'라는 범위 설명이 아니라 이 연결식으로 재현되는 값이다."
        },
        "cycle_characterization": {
          "kind": "분석자 판단(위 관측값들을 조합해 내린 해석 -- 그 자체가 사실은 아님)",
          "text": "반도체장비 업종은 설비투자 사이클에 강하게 연동돼, 실적과 배수가 함께 오르내리는 경향이 이 종목 자신의 8년 EPS 이력(역성장~63% 성장)과 8년 트레일링 PER 이력(10.1배~26.3배)에서도 확인된다. 지금은 AI 데이터센터발 설비투자 확대로 사이클의 상승 구간(FY2026~FY2027 급성장, 패키징 CY2026 +70%대) 한가운데에 있다. 다만 회사 매출의 73.3%를 차지하는 반도체장비 (Semiconductor Systems) 부문은 이 사이클성이 가장 강하고, 22.5%를 차지하는 서비스(AGS) 부문은 회사가 스스로 '지속가능한 장기 중간 10%대 성장'이라고 밝힌 만큼 상대적으로 안정적인 성장 기반이다. 이 둘을 매출 비중으로 가중해 전사 장기 성장 경로를 추정하는 것이, FY2028 이후에도 현재 급성장률(연 35~44%)이 그대로 이어진다고 가정하는 것이나, 반대로 사이클 이전 3년 추세 (연 5.2%)로만 되돌아간다고 가정하는 것보다 사업 구성을 더 반영한 접근이라고 본다."
        }
      },
      "as_of_execution": "2026-09-22",
      "growth_rate_assumption": 0.09,
      "exit_per_assumption": 18.0,
      "is_primary_recommended_assumption": true,
      "primary_growth_rate": 0.09,
      "primary_exit_per": 18.0,
      "primary_review_by": "2026-12-31",
      "codex_initial_growth_rate": 0.1,
      "codex_initial_exit_per": 24.0,
      "growth_years": 4,
      "base_fiscal_year": 2027,
      "target_fiscal_year": 2031,
      "estimates_fetched_at": "2026-09-21",
      "estimates_age_days": 1,
      "base_eps_fact": 18.45479,
      "base_eps_end_date": "2027-10-31",
      "base_eps_analysts": 34,
      "target_date": "2031-10-31",
      "eps_path_fy2028_to_fy2031": [
        20.115721100000002,
        21.926135999000003,
        23.899488238910006,
        26.05044218041191
      ],
      "target_eps_fy2031": 26.05044218041191,
      "target_price": 468.9079592474144,
      "comparison_price": 464.239990234375,
      "comparison_price_as_of": "2026-09-21",
      "base_scenario": {
        "blocked": false,
        "holding_period_actual_days": 1866,
        "holding_period_actual_years": 5.112328767123287,
        "cashflows_by_year": {
          "1": 2.12,
          "2": 2.12,
          "3": 2.12,
          "4": 2.12,
          "5": 2.12,
          "5.112328767123287": 469.14609623371575
        },
        "cashflow_note": {
          "approximation_note": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 5.1123년), 매도 시점의 부분연도에는 연배당의 11.2%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다."
        },
        "ceilings_by_required_return": {
          "0.08": {
            "blocked": false,
            "required_return": 0.08,
            "max_purchase_price": 325.0091241622499,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          },
          "0.1": {
            "blocked": false,
            "required_return": 0.1,
            "max_purchase_price": 296.237208104012,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          },
          "0.12": {
            "blocked": false,
            "required_return": 0.12,
            "max_purchase_price": 270.48087593233663,
            "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
          }
        },
        "conditional_annualized_return_at_comparison_price": {
          "status": "SUCCESS",
          "rate": 0.006507574000352144,
          "residual": 2.099795892718248e-10,
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
          "holding_period_actual_days": 1866,
          "holding_period_actual_years": 5.112328767123287,
          "cashflows_by_year": {
            "1": 2.12,
            "2": 2.12,
            "3": 2.12,
            "4": 2.12,
            "5": 2.12,
            "5.112328767123287": 648.7099299223015
          },
          "cashflow_note": {
            "approximation_note": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 5.1123년), 매도 시점의 부분연도에는 연배당의 11.2%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다."
          },
          "ceilings_by_required_return": {
            "0.08": {
              "blocked": false,
              "required_return": 0.08,
              "max_purchase_price": 446.1653238492873,
              "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
            },
            "0.1": {
              "blocked": false,
              "required_return": 0.1,
              "max_purchase_price": 406.5449143583894,
              "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
            },
            "0.12": {
              "blocked": false,
              "required_return": 0.12,
              "max_purchase_price": 371.0813797831507,
              "formula": "요구수익률 충족 매입가격 = sum(D_i / (1+r)^t_i) + P_target / (1+r)^(실제 보유기간)"
            }
          },
          "conditional_annualized_return_at_comparison_price": {
            "status": "SUCCESS",
            "rate": 0.07157343288110948,
            "residual": -9.387122190673836e-10,
            "note": "solve_implied_rate와는 별개의 신규 수치해 함수 -- P05/P10 근거로 대체하지 않음"
          }
        }
      },
      "required_return_ceilings": {
        "8%": 325.0091241622499,
        "10%": 296.237208104012,
        "12%": 270.48087593233663
      },
      "conditional_annualized_return_at_comparison_price": 0.006507574000352144,
      "conditional_annualized_return_status": "SUCCESS",
      "default_required_return": 0.1,
      "default_ceiling_price": 296.237208104012,
      "like_for_like_comparison_note": "target_price($468.91, FY2031 시점의 할인 전 미래 목표주가)와 default_ceiling_price($296.24, 오늘 현재가치로 할인한 연 10% 요구수익률 매입가 상한)는 서로 다른 의미의 가격이다. 기존 잠정 대표가격(약 $407~410, 요구수익률 기준 매입가 상한 개념)과 같은 뜻으로 비교할 값은 target_price가 아니라 default_ceiling_price다.",
      "return_condition_met_at_default_required_return": false,
      "state_label": "수익조건 미충족",
      "blocked": false,
      "long_term_thesis_confirmation_note": "화면의 '사업 전제' 표시는 최신 분기 매출·영업이익이 동시에 둔화하지 않았는지만 확인한다 -- 이는 '최근 실적 방향'이며, 향후 4년(FY2028~FY2031) EPS 성장 경로(대표 가정 연 9%, 2026-12-31 재검토 예정)가 실제로 달성 가능한지를 확인한 것이 아니다. 장기 사업 전제(웨이퍼설비투자 사이클, 첨단 패키징·공정 복잡도, 제품 믹스, 마진, 재투자 부담, 경쟁·규제 영향)는 evidence_base의 current_cycle_guidance/cycle_characterization에 근거를 남기되, 정기적으로(예: 분기 실적 발표마다) 재확인이 필요한 상태로 표시하며 '확인 완료'로 표시하지 않는다.",
      "long_term_thesis_confirmed": false,
      "price_return_table": [
        {
          "purchase_price": 236.24,
          "status": "SUCCESS",
          "annualized_return": 0.15046497077437376
        },
        {
          "purchase_price": 266.24,
          "status": "SUCCESS",
          "annualized_return": 0.12351318451364929
        },
        {
          "purchase_price": 296.24,
          "status": "SUCCESS",
          "annualized_return": 0.09999794709333397
        },
        {
          "purchase_price": 331.24,
          "status": "SUCCESS",
          "annualized_return": 0.07594934101978193
        },
        {
          "purchase_price": 386.24,
          "status": "SUCCESS",
          "annualized_return": 0.04375452045676406
        },
        {
          "purchase_price": 464.24,
          "status": "SUCCESS",
          "annualized_return": 0.006507569820223545
        }
      ],
      "range_growth_fixed_exit_per_sensitivity": {
        "note": "성장률을 대표 가정(9%)으로 고정하고 출구PER만 15~21배(자기 과거 트레일링 PER 8년 전체 이력을 근거로 재설정, 최근 3년 평균이 아님)로 바꾼 민감도 범위다 -- 모든 위험을 포함한 신뢰구간이나 바닥가격이 아니다. 확률을 검증하지 않았으므로 임의의 성공확률을 붙이지 않는다.",
        "scenarios": {
          "low": {
            "exit_per": 15.0,
            "growth_rate": 0.09,
            "target_price": 390.75663270617866,
            "ceiling_at_default_required_return": 248.22813303352055
          },
          "high": {
            "exit_per": 21.0,
            "growth_rate": 0.09,
            "target_price": 547.0592857886501,
            "ceiling_at_default_required_return": 344.24628317450345
          }
        }
      },
      "stress_scenarios": {
        "note": "확률을 검증하지 않았으므로 임의의 성공확률을 붙이지 않는다. 단기 신호의 높은 승률을 이 장기 기준가격의 검증 근거로 대신 사용하지 않는다. decomposition_vs_primary는 대표 가정(성장 9%·PER 18배) 대비 성장률만/출구PER만/둘 다 바꿨을 때의 효과를 분리해서 보여준다 -- 결합효과를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다.",
        "scenarios": {
          "stress_low": {
            "label": "성장 연 5.2%(수퍼사이클 이전 3년 실제 추세) · 종료 PER 12배(8년 저점권 이하 약세 가정)",
            "growth_rate": 0.052,
            "exit_per": 12.0,
            "target_eps": 22.60331133174713,
            "target_price": 271.2397359809655,
            "ceiling_at_default_required_return": 174.8078096555752,
            "decomposition_vs_primary": {
              "base_price": 468.9079592474144,
              "growth_only_price": 406.85960397144834,
              "growth_only_pct": -0.13232523366750293,
              "per_only_price": 312.60530616494293,
              "per_only_pct": -0.33333333333333337,
              "combined_price": 271.2397359809655,
              "combined_pct": -0.42155015577833543,
              "note": "성장률만 바꾼 효과와 출구PER만 바꾼 효과를 각각 보여준다 -- 결합효과(둘 다 바꿨을 때)를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다."
            }
          },
          "stress_high": {
            "label": "성장 연 14%(AGS 장기 가이던스 수준 전사 확대) · 종료 PER 25배(AI 사이클 프리미엄 유지 가정)",
            "growth_rate": 0.14,
            "exit_per": 25.0,
            "target_eps": 31.16940507116641,
            "target_price": 779.2351267791603,
            "ceiling_at_default_required_return": 486.874026975967,
            "decomposition_vs_primary": {
              "base_price": 468.9079592474144,
              "growth_only_price": 561.0492912809954,
              "growth_only_pct": 0.19650195782870794,
              "per_only_price": 651.2610545102978,
              "per_only_pct": 0.38888888888888884,
              "combined_price": 779.2351267791603,
              "combined_pct": 0.6618082747620946,
              "note": "성장률만 바꾼 효과와 출구PER만 바꾼 효과를 각각 보여준다 -- 결합효과(둘 다 바꿨을 때)를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다."
            }
          },
          "stress_zero_growth": {
            "label": "FY2027 이후 성장 0% · 종료 PER 10배(2018년 사이클 저점 재현 가정)",
            "growth_rate": 0.0,
            "exit_per": 10.0,
            "target_eps": 18.45479,
            "target_price": 184.5479,
            "ceiling_at_default_required_return": 121.55222148058915,
            "decomposition_vs_primary": {
              "base_price": 468.9079592474144,
              "growth_only_price": 332.18622,
              "growth_only_pct": -0.2915747889348037,
              "per_only_price": 260.5044218041191,
              "per_only_pct": -0.44444444444444453,
              "combined_price": 184.5479,
              "combined_pct": -0.6064304382971132,
              "note": "성장률만 바꾼 효과와 출구PER만 바꾼 효과를 각각 보여준다 -- 결합효과(둘 다 바꿨을 때)를 어느 한쪽 변수 하나의 효과인 것처럼 설명하지 않는다."
            }
          }
        }
      }
    },
    "valuation": {
      "kind": "independent_value_dcf_scenario_engine",
      "asOf": "2026-09-21",
      "valuationAnchorDate": "2026-07-26",
      "runId": "AMAT_REAL_20260921T232433311753",
      "scenarioFamilyId": "AMAT_SCEN_FAMILY_20260921T232433290927",
      "engineVersion": "amat_calc_engine v4 (2026-09-18, 모델 채택 검토) -- D&A/CapEx 비율 곡선을 FY2025 실측 대조로 조정(min(0.60,0.20+0.10*(i+1)) -> min(0.45,0.19+0.065*i)), 계산 결과가 달라짐(v3 대비). 과거 실행은 각자 저장된 code_snapshots로 그 시점 값 그대로 재현 가능.",
      "isReplayFixture": false,
      "px": 191.2990663575951,
      "priceState": "PRICE_STRETCHED",
      "scenarios": {
        "conservative": {
          "px": 178.7416812727243,
          "growthY1": 0.3134993682913383,
          "roic": 0.18,
          "ntmValue": 40504380020.0,
          "runId": "AMAT_REAL_20260921T232433297607"
        },
        "base": {
          "px": 191.2990663575951,
          "growthY1": 0.38220422220060324,
          "roic": 0.22,
          "ntmValue": 42623031600.0,
          "runId": "AMAT_REAL_20260921T232433311753"
        },
        "optimistic": {
          "px": 203.02973539456156,
          "growthY1": 0.45090907610986797,
          "roic": 0.26,
          "ntmValue": 44741683180.0,
          "runId": "AMAT_REAL_20260921T232433336460"
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
        "age_days": 57,
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
        "fairValueRangeLow": 178.7416812727243,
        "fairValueRangeHigh": 203.02973539456156,
        "fairValueBase": 191.2990663575951,
        "currentPrice": 444.57000732421875,
        "currentPriceAsOf": "2026-09-18",
        "currentPriceNote": "이 실행이 계산 당시 비교한 가격(위 asOf 시점) -- 화면을 여는 시점의 실시간 가격과 다를 수 있음",
        "diffVsCurrentPricePct": 132.39528335866763,
        "diffVsCurrentPriceLabel": "높음",
        "inputChangeSummary": "직전 실행과 입력값 동일(변경 없음)",
        "dataStatusLevel": "최신_반영_완료",
        "dataStatusLabel": "최신 자료 반영 완료",
        "dataStatusDetail": "순부채: SEC 자동수집 성공(기준일 2026-07-26)",
        "asOf": "2026-09-21",
        "estimateStatusLabel": "조건부 DCF 추정값 (conditional DCF estimate) -- 검증된 대표 적정가로 확정된 것이 아님",
        "estimateStatusNote": "이 값은 현재 이 파일에 기록된 성장·마진·자본비용 가정 아래에서 계산된 결과다. 입력별 신뢰 등급(직접관측/외부컨센서스/파생추정/순수판단)이 서로 다르며, 등급이 낮은 입력(4~5년차 성장률, D&A 곡선, 영구성장률)이 결과에 가장 크게 기여한다. '장기 내재가치 점검'에는 참고할 수 있으나, 매수/매도 타이밍 판단 근거로 단독 사용하지 않는다 -- AMAT_모델_채택_최종검토_2026-09-18.md, AMAT_모델채택_구현완료보고_2026-09-18.md 참고.",
        "computedJudgmentAtRunTime": "현재가가 조건부 DCF 추정범위를 상회(+132.4%)",
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
        "18%": 187.60132459120302,
        "22%": 191.2990663575951,
        "26%": 193.85904142663586
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
        "y2=7%": 175.2999788324029,
        "y2=10%(기준)": 179.6633663392735,
        "y2=13%": 184.02675384614406
      },
      "valuationTiming": {
        "valuation_anchor_date": "2026-07-26",
        "price_comparison_date": "2026-09-18",
        "gap_days": 54,
        "approx_roll_forward_multiplier": 1.016198396258298,
        "approx_effect_pct": 1.619839625829811,
        "applied_to_px": false,
        "note": "현재 FCFF 계산은 TTM 마지막 분기 종료일(2026-07-26)을 '지금'으로 두고 1년차부터 할인한다. 화면에서 비교하는 현재가 조회 시점(2026-09-18)은 그보다 54일 뒤라서, 같은 시점 기준으로 정확히 맞추려면 적정가를 약 1.62% 만큼 앞으로 굴려야 한다는 근사치다(연 단위 복리 근사, 실제 분기별 현금흐름 발생 시점은 고려하지 않음). 이 회차에는 px에 적용하지 않고 진단값으로만 남긴다 -- 크기가 시나리오 간 가격 차이보다 작고, 정확히 보정하려면 반기/분기 단위 부분기간 할인으로 엔진을 바꿔야 해서 이번 범위(기존 화면·엔진 구조 유지) 밖이다."
      },
      "dataFreshness": {
        "checked_as_of_execution": "2026-09-21",
        "price_as_of": "2026-09-18",
        "price_gap_days": 3,
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
        "net_debt_age_days": 57,
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
            "p3PerShare": 237.42465642792922,
            "purchasePriceUsed": 444.57000732421875,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.19136381152227389,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "1": 2.12,
              "2": 2.12,
              "2.8547945205479452": 239.23682081149087
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 195.82864495522702,
              "0.10": 185.92634877227107,
              "0.12": 176.69232010343435
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
            "priceComparisonDate": "2026-09-18",
            "holdingPeriodActualDays": 1042,
            "holdingPeriodActualYears": 2.8547945205479452,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -31628393335.900764
          },
          "base": {
            "blocked": false,
            "p3PerShare": 254.7399672767151,
            "purchasePriceUsed": 444.57000732421875,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.17146965323834143,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "1": 2.12,
              "2": 2.12,
              "2.8547945205479452": 256.55213166027676
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 209.72856616465708,
              "0.10": 199.11689200672603,
              "0.12": 189.22150883126994
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
            "priceComparisonDate": "2026-09-18",
            "holdingPeriodActualDays": 1042,
            "holdingPeriodActualYears": 2.8547945205479452,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -33103686423.388443
          },
          "optimistic": {
            "blocked": false,
            "p3PerShare": 270.91012135435136,
            "purchasePriceUsed": 444.57000732421875,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.1536624735381565,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "1": 2.12,
              "2": 2.12,
              "2.8547945205479452": 272.722285737913
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 222.70920911044908,
              "0.10": 211.43507204585683,
              "0.12": 200.92207337591918
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
            "priceComparisonDate": "2026-09-18",
            "holdingPeriodActualDays": 1042,
            "holdingPeriodActualYears": 2.8547945205479452,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -34578979510.87612
          }
        },
        "cashflowApproximationNote": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 2.8548년), 매도 시점의 부분연도에는 연배당의 85.5%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다.",
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
          "checked_as_of_execution": "2026-09-21",
          "price_as_of": "2026-09-18",
          "price_gap_days": 3,
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
          "net_debt_age_days": 57,
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
            "p3PerShare": 196.835008271114,
            "purchasePriceUsed": 444.57000732421875,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.6115095777623991,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "0.852054794520548": 198.64136443549756
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 186.03335507032932,
              "0.10": 183.14744052749833,
              "0.12": 180.35709746044202
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
            "priceComparisonDate": "2026-09-18",
            "holdingPeriodActualDays": 311,
            "holdingPeriodActualYears": 0.852054794520548,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -8937842304.149162
          },
          "base": {
            "blocked": false,
            "p3PerShare": 210.83309687980048,
            "purchasePriceUsed": 444.57000732421875,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.5791866241628212,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "0.852054794520548": 212.63945304418405
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 199.14296794399291,
              "0.10": 196.0536854490617,
              "0.12": 193.06670927080881
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
            "priceComparisonDate": "2026-09-18",
            "holdingPeriodActualDays": 311,
            "holdingPeriodActualYears": 0.852054794520548,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -9072287696.1128
          },
          "optimistic": {
            "blocked": false,
            "p3PerShare": 223.9096206551579,
            "purchasePriceUsed": 444.57000732421875,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.5486553485098287,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "0.852054794520548": 225.71597681954148
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 211.38950882685424,
              "0.10": 208.11024711867995,
              "0.12": 204.93958317951456
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
            "priceComparisonDate": "2026-09-18",
            "holdingPeriodActualDays": 311,
            "holdingPeriodActualYears": 0.852054794520548,
            "netDebtYear0": -2789000000.0,
            "netDebtYear3": -9206733088.07644
          }
        },
        "cashflowApproximationNote": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 0.8521년), 매도 시점의 부분연도에는 연배당의 85.2%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다.",
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
          "checked_as_of_execution": "2026-09-21",
          "price_as_of": "2026-09-18",
          "price_gap_days": 3,
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
          "net_debt_age_days": 57,
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
        "attemptedAt": "2026-09-21T23:24:33.319237",
        "dataAsOf": "2026-09-18",
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
      "rangeLow": 260.1160956020229,
      "rangeHigh": 320.40580913238955,
      "rangeMid": 290.2609523672062,
      "bandStatus": "WITHIN_BAND",
      "bandDisclaimer": "이 범위는 검증된 매수가·바닥가격·성공확률이 아니다 -- 동종업계가 지금 받는 배수를 그대로 적용한 참고 범위일 뿐이며, 이 범위와 별도로 산출되는 장기 DCF 내재가치(조건부 참고값)와도 다른 개념이다.",
      "comparisonPrice": 302.2799987792969,
      "comparisonPriceAsOf": "2026-09-21",
      "comparisonPriceLabel": "최근 종가",
      "comparisonPriceNote": "실시간 시세가 아니라 prices_cache.json에 기록된 마지막 종가이며, 위 관측일 기준입니다.",
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
      "generatedAt": "2026-09-22T07:41:05.065845",
      "asOfDate": "2026-09-22",
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
      "builtAt": "2026-09-22",
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
      }
    }
  },
  "KLAC": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": true,
      "rangeLow": 149.35296758510364,
      "rangeHigh": 173.56255772954327,
      "rangeMid": 161.45776265732346,
      "bandStatus": "ABOVE_BAND",
      "bandDisclaimer": "이 범위는 검증된 매수가·바닥가격·성공확률이 아니다 -- 동종업계가 지금 받는 배수를 그대로 적용한 참고 범위일 뿐이며, 이 범위와 별도로 산출되는 장기 DCF 내재가치(조건부 참고값)와도 다른 개념이다.",
      "comparisonPrice": 183.97000122070312,
      "comparisonPriceAsOf": "2026-09-21",
      "comparisonPriceLabel": "최근 종가",
      "comparisonPriceNote": "실시간 시세가 아니라 prices_cache.json에 기록된 마지막 종가이며, 위 관측일 기준입니다.",
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
      "generatedAt": "2026-09-22T07:41:05.253305",
      "asOfDate": "2026-09-22",
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
      "builtAt": "2026-09-22",
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
      "withheldCheckedAt": "2026-09-22T07:41:05.439974",
      "neverSucceeded": true
    }
  },
  "STX": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "band_high(792.8424768065801)<=band_low(792.8424768065801) -- 밴드 폭이 0 이하",
      "withheldCheckedAt": "2026-09-22T07:41:05.600026",
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
    }
  },
  "WDC": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "band_high(495.92545051951635)<=band_low(495.92545051951635) -- 밴드 폭이 0 이하",
      "withheldCheckedAt": "2026-09-22T07:41:05.680166",
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
    }
  },
  "SNDK": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "선정 기준을 통과한 동종업계 배수가 하나도 없음 -- 밴드 산출 보류(0으로 채우지 않음)",
      "withheldCheckedAt": "2026-09-22T07:41:05.759922",
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
    }
  },
  "PWR": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "선정 기준을 통과한 동종업계 배수가 하나도 없음 -- 밴드 산출 보류(0으로 채우지 않음)",
      "withheldCheckedAt": "2026-09-22T07:41:05.800951",
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
    }
  },
  "EME": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "band_high(1019.8630843019492)<=band_low(1019.8630843019492) -- 밴드 폭이 0 이하",
      "withheldCheckedAt": "2026-09-22T07:41:05.869789",
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
    }
  },
  "FIX": {
    "relativeValueBand": {
      "rangeLabel": "동종기업 배수 적용 참고범위",
      "rangeKind": "peer_multiple_reference_range_not_a_buy_zone",
      "available": false,
      "withheldStatus": "JUDGMENT_WITHHELD",
      "withheldReason": "band_high(1212.937106867378)<=band_low(1212.937106867378) -- 밴드 폭이 0 이하",
      "withheldCheckedAt": "2026-09-22T07:41:06.015534",
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
    }
  }
};
