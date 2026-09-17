// 자동 생성 아님 부분 있음(VST, 2026-09-15 수동 작성 v1 스냅샷 - 원본과 바이트 단위 동일, 2026-09-17 웹 이식 시 diff로 재확인).
// AMAT 항목은 amat_collector_adapter.run_real_collection()의 last_successful_run을 그대로 반영하며,
// 독립 화면(amat_review_stage3_main.html 계열)과 항상 같은 실행 ID를 가리킨다(단일 진실 공급원).
// 2026-09-17 웹 이식(로컬 검수 통과 후) - 로컬에서는 independent_valuation_data_amat.js라는 별도
// 파일로 시험했으나, 실제 배포본에서는 파일을 늘리지 않고 원래 파일(independent_valuation_data.js)
// 안에 VST 옆에 AMAT을 형제 키로 추가했다. VST 블록은 위 원본과 diff로 바이트 단위 동일함을 확인했다.
const INDEPENDENT_VALUATION_DATA = {
  "VST": {
    "valuation": {
      "kind": "independent_value",
      "asOf": "2026-09-15",
      "horizon": "12-24 months (normalized forward earnings power)",
      "accountingBasis": "Ongoing Operations Adjusted EBITDA / Adjusted FCF before Growth (company-defined non-GAAP, excludes one-time items)",
      "valueLow": 122.63,
      "valueBase": 159.67,
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
          "yearOneFCF_B": 4.032,
          "yearOneFCF_weighting": "60% x FY2026 guidance midpoint Adjusted FCF before Growth ($4.325B) + 40% x FY2025 actual ($3.592B)",
          "growthPath": "10% -> 8% -> 6% -> 4% -> 2.5% (fading from current AI-demand-driven growth to terminal growth over 5 years)",
          "yearly": [
            {
              "year": 1,
              "fcf": 4.032,
              "growth": 0.1,
              "pv": 3.716
            },
            {
              "year": 2,
              "fcf": 4.355,
              "growth": 0.08,
              "pv": 3.699
            },
            {
              "year": 3,
              "fcf": 4.616,
              "growth": 0.06,
              "pv": 3.614
            },
            {
              "year": 4,
              "fcf": 4.8,
              "growth": 0.04,
              "pv": 3.464
            },
            {
              "year": 5,
              "fcf": 4.92,
              "growth": 0.025,
              "pv": 3.272
            }
          ],
          "terminalValue_B": 84.06,
          "pvTerminal_B": 55.9,
          "enterpriseValue_B": 73.67,
          "equityValue_B": 53.59,
          "perShare": 159.67,
          "waccSensitivity": {
            "7.5%": 203.91,
            "8.5%": 159.66,
            "9.5%": 128.07,
            "10.5%": 104.38
          }
        }
      },
      "validationStatus": "draft_v1_snapshot",
      "unavailableReasons": null,
      "sources": [
        "https://www.prnewswire.com/news-releases/vistra-reports-second-quarter-2026-results-302845874.html",
        "https://www.prnewswire.com/news-releases/vistra-reports-fourth-quarter-and-full-year-2025-results-302697962.html",
        "https://stockanalysis.com/stocks/vst/statistics/",
        "https://stockanalysis.com/stocks/ceg/statistics/",
        "https://stockanalysis.com/stocks/nrg/statistics/",
        "https://stockanalysis.com/stocks/gev/statistics/",
        "https://stockanalysis.com/stocks/tln/statistics/"
      ],
      "version": 1
    }
  },
  "AMAT": {
    "valuation": {
      "kind": "independent_value_dcf_scenario_engine",
      "asOf": "2026-09-16",
      "valuationAnchorDate": "2026-07-26",
      "runId": "AMAT_REAL_20260916T011437292822",
      "scenarioFamilyId": "AMAT_SCEN_FAMILY_20260916T011437061523",
      "engineVersion": "amat_calc_engine v3 (Stage 3, 2026-09-15) -- adds optional periods[].value_kind (actual/estimate/consensus/model_assumption)",
      "isReplayFixture": false,
      "px": 168.97469928554213,
      "priceState": "PRICE_STRETCHED",
      "scenarios": {
        "conservative": {
          "px": 157.81219751013185,
          "growthY1": 0.3600171871453124,
          "roic": 0.18,
          "ntmValue": 41938850000.0,
          "runId": "AMAT_REAL_20260916T011437062032"
        },
        "base": {
          "px": 168.97469928554213,
          "growthY1": 0.43117034731004966,
          "roic": 0.22,
          "ntmValue": 44133000000.0,
          "runId": "AMAT_REAL_20260916T011437292822"
        },
        "optimistic": {
          "px": 179.41184643001688,
          "growthY1": 0.5023235074747867,
          "roic": 0.26,
          "ntmValue": 46327150000.0,
          "runId": "AMAT_REAL_20260916T011437301614"
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
        "ntm_value": 44133000000.0,
        "period_start": "2026-07-27",
        "period_end": "2027-07-25",
        "components": {
          "FY2026Q4": 10250000000.0,
          "FY2027Q1": 10718000000.0,
          "FY2027Q2": 11239000000.0,
          "FY2027Q3": 11926000000.0
        },
        "component_kinds": {
          "FY2026Q4": "company_guidance_midpoint",
          "FY2027Q1": "third_party_consensus_marketscreener",
          "FY2027Q2": "third_party_consensus_marketscreener",
          "FY2027Q3": "third_party_consensus_marketscreener"
        },
        "component_sources": {
          "FY2026Q4": "https://www.globenewswire.com/news-release/2026/08/13/3344890/0/en/applied-materials-announces-third-quarter-2026-results.html",
          "FY2027Q1": "https://www.marketscreener.com/quote/stock/APPLIED-MATERIALS-INC-4850/finances/",
          "FY2027Q2": "https://www.marketscreener.com/quote/stock/APPLIED-MATERIALS-INC-4850/finances/",
          "FY2027Q3": "https://www.marketscreener.com/quote/stock/APPLIED-MATERIALS-INC-4850/finances/"
        },
        "as_of": "2026-09-15",
        "note": "FY2026Q4는 회사 자신의 확정 가이던스(중앙값 ± 범위). FY2027 Q1~Q3는 회사 가이던스가 아니라 제3자 컨센서스 추정치다(회사가 보통 1개 분기 앞만 가이던스를 준다). 이 3개 분기는 신뢰도가 가이던스보다 낮고, 컨센서스 표본 수·산출방식이 공개되지 않았다는 한계를 그대로 남긴다. FY2027Q1~Q3의 기간(period_start/end)은 AMAT의 통상적인 약 13주 분기 캘린더를 근사한 값이며 공식 회계기간이 확정되기 전의 추정 경계다 -- 실제 공시 시 재확인 필요."
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
        "auto_update_status_note": "자동 갱신되지 않음 -- 분기마다 사람이 실적발표 보도자료의 조건부 대차대조표를 직접 재확인해 이 상수를 갱신해야 함.",
        "basis_label": "현재 확인 가능한 동일 기준일 자료"
      },
      "growthY1Basis": "NTM(2026-07-27~2027-07-25, $44.133B, 시나리오=base) 대비 TTM(2025-07-28~2026-07-26, $30.837B) = 43.12%. 구성: {'FY2026Q4': 10250000000.0, 'FY2027Q1': 10718000000.0, 'FY2027Q2': 11239000000.0, 'FY2027Q3': 11926000000.0}. 참고(성장률 아님): FY2025 실적 대비 TTM 비율은 과거 서로 다른 기간의 차이일 뿐이라 미래 성장률로 쓰지 않음.",
      "assumptionNotes": {
        "growth_y1": {
          "observed": "TTM($30.837B, 2025-07-28~2026-07-26)과 직전 완결회계연도 FY2025($28.368B)의 차이는 실측값이지만, 두 구간의 기준일이 다르므로 이 비율 자체를 미래 성장률로 쓰지 않는다(과거 참고용 지표로만 별도 표시, 아래 historical_reference 참고. 8.70% -- 이전 회차 보고서의 8.66% 표기는 원문 재확인 결과 단순 필사 오차였고, 실행 기록(growth_y1_basis)에는 당시에도 8.70%로 정확히 저장돼 있었다).",
          "forward_assumption": "NTM(2026-07-27~2027-07-25) 매출을 회사 가이던스 1개 분기 + 컨센서스 3개 분기로 직접 구성해 TTM과 비교한 값을 1년차 성장률로 쓴다. 구성 분기 중 3개가 제3자 컨센서스라는 한계를 그대로 노출한다.",
          "basis": "NTM_GUIDANCE_AND_CONSENSUS"
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
        "18%": 165.73008119869223,
        "22%": 168.97469928554213,
        "26%": 171.220973345669
      },
      "growthPathTable": [
        {
          "year": 1,
          "rate": null,
          "source": "NTM_GUIDANCE_AND_CONSENSUS",
          "note": "회사 가이던스 1개 분기 + 컨센서스 3개 분기로 구성한 NTM 대 TTM 비율. 시나리오별로 다름(보수 36.0%/기준 43.1%/낙관 50.2%) -- 아래 2~5년차는 시나리오와 무관하게 고정."
        },
        {
          "year": 2,
          "rate": 0.1,
          "source": "model_assumption",
          "note": "AI 반도체 장비 수요발 1년차 급성장이 정상화되기 시작하는 구간이라는 가정. 외부 애널리스트의 FY2028 연간 컨센서스와 직접 대조하지 않았다(기간 정합 비교 미실행)."
        },
        {
          "year": 3,
          "rate": 0.06,
          "source": "model_assumption",
          "note": "반도체 장비업 평균 설비투자 사이클 둔화 가정 하나를 적용한 것으로, 실제 하강 사이클 진입 시점·강도를 예측한 것은 아니다."
        },
        {
          "year": 4,
          "rate": 0.04,
          "source": "model_assumption",
          "note": "term_g(2.5%)로 수렴해가는 중간 지점으로 모델 작성자가 임의로 선형에 가깝게 배치한 값."
        },
        {
          "year": 5,
          "rate": 0.03,
          "source": "model_assumption",
          "note": "안정기 성장률(term_g=2.5%) 바로 앞 지점 -- 5년 만에 43%대 성장에서 2.5%까지 수렴한다는 가정 자체가 강한 모델가정이며, 실제 반도체 장비 사이클은 이보다 변동성이 크고 불규칙할 수 있다."
        }
      ],
      "growthPathSensitivity": {
        "y2=7%": 164.85032619926722,
        "y2=10%(기준)": 168.97469928554213,
        "y2=13%": 173.09907237181704
      },
      "valuationTiming": {
        "valuation_anchor_date": "2026-07-26",
        "price_comparison_date": "2026-09-14",
        "gap_days": 50,
        "approx_roll_forward_multiplier": 1.0149800524098473,
        "approx_effect_pct": 1.4980052409847344,
        "applied_to_px": false,
        "note": "현재 FCFF 계산은 TTM 마지막 분기 종료일(2026-07-26)을 '지금'으로 두고 1년차부터 할인한다. 화면에서 비교하는 현재가 조회 시점(2026-09-14)은 그보다 50일 뒤라서, 같은 시점 기준으로 정확히 맞추려면 적정가를 약 1.50% 만큼 앞으로 굴려야 한다는 근사치다(연 단위 복리 근사, 실제 분기별 현금흐름 발생 시점은 고려하지 않음). 이 회차에는 px에 적용하지 않고 진단값으로만 남긴다 -- 크기가 시나리오 간 가격 차이보다 작고, 정확히 보정하려면 반기/분기 단위 부분기간 할인으로 엔진을 바꿔야 해서 이번 범위(기존 화면·엔진 구조 유지) 밖이다."
      },
      "dataFreshness": {
        "checked_as_of_execution": "2026-09-16",
        "price_as_of": "2026-09-14",
        "price_gap_days": 2,
        "price_stale": false,
        "price_stale_threshold_days": 7,
        "next_expected_earnings_date": "2026-11-19",
        "next_expected_earnings_date_is_estimate": true,
        "net_debt_source_as_of": "2026-07-26",
        "net_debt_last_manual_check": "2026-07-26",
        "guidance_consensus_as_of": "2026-09-15",
        "guidance_consensus_last_manual_check": "2026-09-15",
        "unreflected_disclosures": [],
        "stale": false,
        "status": "확인된_최신_실적_기준_내",
        "note": "다음 실적 발표 예상일 이전이고 확인된 미반영 공시도 없어, 현재 net_debt·가이던스·컨센서스 기준을 유효한 값으로 쓴다. 예정일 자체가 추정치이므로 실제 발표일이 다르면 이 판정도 같이 갱신해야 한다."
      },
      "scenarioDisclaimer": "보수/기준/낙관 세 값은 '가이던스 범위 내에서 낮게/중간/높게 본 조건부 평가'이지, 수요 위축까지 포함한 손실 하한이나 통계적 신뢰구간이 아니다. 보수 시나리오도 1년차 매출 성장률이 36.0%로 여전히 고성장 전제다. 제3자 컨센서스 3개 분기에 적용한 ±5%는 분석자(이 모델 작성자)가 임의로 정한 흔들기 폭이며, 애널리스트들의 실제 최저·최고 전망치가 아니다. 이 세 시나리오는 수요 둔화와 마진 압박이 함께 오는 스트레스 상황을 포함하지 않는다 -- 그런 상황은 현재 모델 범위 밖이며, 포함하지 않았다는 사실 자체를 여기 명시한다(임의의 하락 수치를 검증된 사실처럼 제시하지 않기 위해 스트레스 시나리오를 새로 만들어 넣기보다 이 한계를 그대로 드러내는 쪽을 택함).",
      "returnConditionYear3": {
        "scope": "단일 3년 보유기간(첫 버전) -- AMAT의 '최적' 보유기간이라는 주장 아님. 메인 매수배지 활성화·타 종목 확장은 이번 범위 밖(별도 회차에서 진행).",
        "basis": "세전(pre-tax), 미국달러(USD) 기준 -- 환율·개인세금·거래비용 미반영.",
        "scenarios": {
          "conservative": {
            "blocked": false,
            "p3PerShare": 209.02147655215813,
            "purchasePriceUsed": 424.21,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.21248212139603317,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "1": 2.12,
              "2": 2.12,
              "2.8657534246575342": 210.8568738124321
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 172.90385140694303,
              "0.10": 164.13924507699986,
              "0.12": 155.9674965574431
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
            "priceComparisonDate": "2026-09-14",
            "holdingPeriodActualDays": 1046,
            "holdingPeriodActualYears": 2.8657534246575342,
            "netDebtYear0": -493000000.0,
            "netDebtYear3": -27907886529.884422
          },
          "base": {
            "blocked": false,
            "p3PerShare": 224.39676882107378,
            "purchasePriceUsed": 424.21,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.19305455809060285,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "1": 2.12,
              "2": 2.12,
              "2.8657534246575342": 226.23216608134774
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 185.2360110536989,
              "0.10": 175.83968391583778,
              "0.12": 167.07909819260286
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
            "priceComparisonDate": "2026-09-14",
            "holdingPeriodActualDays": 1046,
            "holdingPeriodActualYears": 2.8657534246575342,
            "netDebtYear0": -493000000.0,
            "netDebtYear3": -29325317585.28237
          },
          "optimistic": {
            "blocked": false,
            "p3PerShare": 238.7675151730155,
            "purchasePriceUsed": 424.21,
            "scenarioAnnualizedReturn": {
              "status": "SUCCESS",
              "rate": -0.17565691265092487,
              "label": "시나리오 연환산 수익률 (보장 수익률 아님, 이 시나리오의 가정이 그대로 실현된다는 조건부 수치)"
            },
            "cashflowsByYear": {
              "1": 2.12,
              "2": 2.12,
              "2.8657534246575342": 240.60291243328948
            },
            "illustrativeRequiredReturnExamples": {
              "0.08": 196.7624480901819,
              "0.10": 186.7756736725519,
              "0.12": 177.46472247016746
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
            "priceComparisonDate": "2026-09-14",
            "holdingPeriodActualDays": 1046,
            "holdingPeriodActualYears": 2.8657534246575342,
            "netDebtYear0": -493000000.0,
            "netDebtYear3": -30742748640.680313
          }
        },
        "cashflowApproximationNote": "실제 AMAT 분기배당(연 4회 지급)을 이 계산에서는 매입일 이후부터 맞이하는 각 정수 연차에 연 1회 합산 지급으로 근사한다 -- 정확한 분기별 지급일을 쓰려면 엔진을 부분기간 할인 구조로 바꿔야 하며 이번 범위 밖이다. 보유기간이 정수가 아니므로(약 2.8658년), 매도 시점의 부분연도에는 연배당의 86.6%만 비례 배분했다(그 이후 -- 매도 이후 -- 배당은 포함하지 않음). 매도 이후 시점의 배당은 어떤 경우에도 포함하지 않는다.",
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
          "forward_assumption": "이번 3년 보유수익 계산은 다음 확정 지급(2026-12-10, $0.53) 이후의 향후 분기배당을 같은 금액($0.53, 연 $2.12/주)으로 3년간 유지한다고 가정한다(model_assumption, 확정 아님). 연차1,2,3 배당은 이 가정을 연 단위로 합산한 근사치이며, 실제 분기 지급일 4회를 정확히 반영하지 않는다(아래 approximation_note 참고). 이미 지급된 2026-09-10 배당은 이 근사에도 포함하지 않는다 -- 연차1의 근사 합계는 '매입 이후 12개월 동안 확정+가정된 분기배당의 합'으로 읽어야 하며, 이미 지난 지급을 재사용한 것이 아니다."
        },
        "buybackAssumption": {
          "modeled": false,
          "note": "향후 자사주매입 규모·시기에 대한 회사 공식 가이던스를 확보하지 못해 0으로 둔다 (산출 보류가 아니라 '모델링하지 않음'을 명시적으로 선택 -- 매입액을 임의로 지어내지 않는다). 이 선택이 결과를 항상 보수적으로 만든다고 단정하지 않는다 -- 자사주매입이 주당가치에 미치는 방향은 매입가격과 내재가치의 관계에 따라 달라지며, 이번 범위에서는 그 방향을 예측하지 않는다."
        },
        "dataFreshnessAsOfThisCard": {
          "checked_as_of_execution": "2026-09-16",
          "price_as_of": "2026-09-14",
          "price_gap_days": 2,
          "price_stale": false,
          "price_stale_threshold_days": 7,
          "next_expected_earnings_date": "2026-11-19",
          "next_expected_earnings_date_is_estimate": true,
          "net_debt_source_as_of": "2026-07-26",
          "net_debt_last_manual_check": "2026-07-26",
          "guidance_consensus_as_of": "2026-09-15",
          "guidance_consensus_last_manual_check": "2026-09-15",
          "unreflected_disclosures": [],
          "stale": false,
          "status": "확인된_최신_실적_기준_내",
          "note": "다음 실적 발표 예상일 이전이고 확인된 미반영 공시도 없어, 현재 net_debt·가이던스·컨센서스 기준을 유효한 값으로 쓴다. 예정일 자체가 추정치이므로 실제 발표일이 다르면 이 판정도 같이 갱신해야 한다."
        },
        "anyScenarioBlocked": false,
        "principle": "기업 현금흐름 전체(FCFF)를 투자자 배당으로 계산하지 않는다 -- 현재가치 평가(DCF, 위 px)와 투자자 보유수익률(이 카드)을 분리. 실제 지급 배당만 투자자 현금흐름에 넣고, 배당으로 안 나간 유보현금은 미래 순부채 감소로만 반영한다(이중계산 방지)."
      },
      "updateStatus": {
        "attemptStatus": "SUCCESS",
        "failureType": null,
        "attemptedAt": "2026-09-16T01:14:37.299057",
        "dataAsOf": "2026-09-14T16:00:00-04:00",
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
  }
};
