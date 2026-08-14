// 자동 생성 파일 - buy_signal_telegram.py 실행 시마다 갱신됨. 직접 수정하지 마세요.
// Finnhub SEC 공시(financials-reported) 기반 최선 추정치 - 일부 종목/분기는 조회/계산이 안 될 수 있음.
const FINANCIALS_DATA = {
  "NVDA": {
    "annual": [
      {
        "period": "2019",
        "revenue": 11716000000,
        "netIncome": 4141000000,
        "opIncome": 3804000000,
        "eps": 6,
        "ocf": 3743000000,
        "capex": -600000000,
        "fcf": 3143000000,
        "endDate": "2019-01-27"
      },
      {
        "period": "2020",
        "revenue": 10918000000.0,
        "netIncome": 2796000000.0,
        "opIncome": 2846000000.0,
        "eps": 4.52,
        "ocf": 4761000000,
        "capex": -489000000,
        "fcf": 4272000000,
        "endDate": "2020-01-26"
      },
      {
        "period": "2021",
        "revenue": 16675000000.0,
        "netIncome": 4332000000.0,
        "opIncome": 4532000000.0,
        "eps": 6.9,
        "ocf": 5822000000.0,
        "capex": null,
        "fcf": null,
        "endDate": "2021-01-31"
      },
      {
        "period": "2022",
        "revenue": 26914000000.0,
        "netIncome": 9752000000.0,
        "opIncome": 10041000000.0,
        "eps": 3.85,
        "ocf": 9108000000.0,
        "capex": null,
        "fcf": null,
        "endDate": "2022-01-30"
      },
      {
        "period": "2023",
        "revenue": 26974000000.0,
        "netIncome": 4368000000.0,
        "opIncome": 4224000000.0,
        "eps": 1.74,
        "ocf": 5641000000,
        "capex": null,
        "fcf": null,
        "endDate": "2023-01-29"
      },
      {
        "period": "2024",
        "revenue": 60922000000.0,
        "netIncome": 29760000000.0,
        "opIncome": 32972000000.0,
        "eps": 11.93,
        "ocf": 28090000000,
        "capex": null,
        "fcf": null,
        "endDate": "2024-01-28"
      },
      {
        "period": "2025",
        "revenue": 130497000000.0,
        "netIncome": 72880000000.0,
        "opIncome": 81453000000.0,
        "eps": 2.94,
        "ocf": 64089000000,
        "capex": null,
        "fcf": null,
        "endDate": "2025-01-26"
      },
      {
        "period": "2026",
        "revenue": 215938000000.0,
        "netIncome": 120067000000.0,
        "opIncome": 130387000000,
        "eps": 4.9,
        "ocf": 102718000000,
        "capex": null,
        "fcf": null,
        "endDate": "2026-01-25"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 13507000000,
        "netIncome": 6188000000,
        "opIncome": 6800000000,
        "endDate": "2023-07-30"
      },
      {
        "period": "Q4'23",
        "revenue": 18120000000.0,
        "netIncome": 9243000000.0,
        "endDate": "2023-10-29",
        "opIncome": 10417000000
      },
      {
        "period": "Q1'24",
        "revenue": 22103000000.0,
        "netIncome": 12285000000.0,
        "endDate": "2024-01-28"
      },
      {
        "period": "Q2'24",
        "revenue": 26044000000.0,
        "netIncome": 14881000000.0,
        "endDate": "2024-04-28",
        "opIncome": 16909000000
      },
      {
        "period": "Q3'24",
        "revenue": 30040000000.0,
        "netIncome": 16599000000.0,
        "endDate": "2024-07-28",
        "opIncome": 18642000000
      },
      {
        "period": "Q4'24",
        "revenue": 35082000000.0,
        "netIncome": 19309000000.0,
        "endDate": "2024-10-27",
        "opIncome": 21869000000
      },
      {
        "period": "Q1'25",
        "revenue": 39331000000.0,
        "netIncome": 22091000000.0,
        "endDate": "2025-01-26"
      },
      {
        "period": "Q2'25",
        "revenue": 44062000000.0,
        "netIncome": 18775000000.0,
        "endDate": "2025-04-27",
        "opIncome": 21638000000
      },
      {
        "period": "Q3'25",
        "revenue": 46743000000.0,
        "netIncome": 26422000000.0,
        "endDate": "2025-07-27",
        "opIncome": 28440000000
      },
      {
        "period": "Q4'25",
        "revenue": 57006000000.0,
        "netIncome": 31910000000.0,
        "endDate": "2025-10-26",
        "opIncome": 36010000000
      },
      {
        "period": "Q1'26",
        "revenue": 68127000000.0,
        "netIncome": 42960000000.0,
        "endDate": "2026-01-25"
      },
      {
        "period": "Q2'26",
        "revenue": 81615000000.0,
        "netIncome": 58321000000.0,
        "endDate": "2026-04-26",
        "opIncome": 53536000000
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "AAPL": {
    "annual": [
      {
        "period": "2018",
        "revenue": 265595000000,
        "netIncome": 59531000000,
        "opIncome": 70898000000,
        "eps": 11,
        "ocf": 77434000000,
        "capex": -13313000000,
        "fcf": 64121000000,
        "endDate": "2018-09-29"
      },
      {
        "period": "2019",
        "revenue": 260174000000.0,
        "netIncome": 55256000000.0,
        "opIncome": 63930000000.0,
        "eps": 11.89,
        "ocf": 69391000000,
        "capex": -10495000000,
        "fcf": 58896000000,
        "endDate": "2019-09-28"
      },
      {
        "period": "2020",
        "revenue": 274515000000.0,
        "netIncome": 57411000000.0,
        "opIncome": 66288000000.0,
        "eps": 3.28,
        "ocf": 80674000000,
        "capex": -7309000000,
        "fcf": 73365000000,
        "endDate": "2020-09-26"
      },
      {
        "period": "2021",
        "revenue": 365817000000.0,
        "netIncome": 94680000000.0,
        "opIncome": 108949000000.0,
        "eps": 5.61,
        "ocf": 104038000000,
        "capex": -11085000000,
        "fcf": 92953000000,
        "endDate": "2021-09-25"
      },
      {
        "period": "2022",
        "revenue": 394328000000.0,
        "netIncome": 99803000000.0,
        "opIncome": 119437000000.0,
        "eps": 6.11,
        "ocf": 122151000000,
        "capex": -10708000000,
        "fcf": 111443000000,
        "endDate": "2022-09-24"
      },
      {
        "period": "2023",
        "revenue": 383285000000.0,
        "netIncome": 96995000000.0,
        "opIncome": 114301000000.0,
        "eps": 6.13,
        "ocf": 110543000000,
        "capex": -10959000000,
        "fcf": 99584000000,
        "endDate": "2023-09-30"
      },
      {
        "period": "2024",
        "revenue": 391035000000.0,
        "netIncome": 93736000000.0,
        "opIncome": 123216000000.0,
        "eps": 6.08,
        "ocf": 118254000000,
        "capex": -9447000000,
        "fcf": 108807000000,
        "endDate": "2024-09-28"
      },
      {
        "period": "2025",
        "revenue": 416161000000.0,
        "netIncome": 112010000000.0,
        "opIncome": 133050000000.0,
        "eps": 7.46,
        "ocf": 111482000000,
        "capex": -12715000000,
        "fcf": 98767000000,
        "endDate": "2025-09-27"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 81797000000,
        "netIncome": 19881000000,
        "endDate": "2023-07-01",
        "opIncome": 22998000000
      },
      {
        "period": "Q4'23",
        "revenue": 119575000000.0,
        "netIncome": 33916000000.0,
        "endDate": "2023-12-30",
        "opIncome": 40373000000
      },
      {
        "period": "Q1'24",
        "revenue": 90753000000.0,
        "netIncome": 23636000000.0,
        "endDate": "2024-03-30",
        "opIncome": 27900000000
      },
      {
        "period": "Q2'24",
        "revenue": 85777000000.0,
        "netIncome": 21448000000.0,
        "endDate": "2024-06-29",
        "opIncome": 25352000000
      },
      {
        "period": "Q3'24",
        "revenue": 94930000000.0,
        "netIncome": 14736000000.0,
        "endDate": "2024-09-28"
      },
      {
        "period": "Q4'24",
        "revenue": 124300000000.0,
        "netIncome": 36330000000.0,
        "endDate": "2024-12-28",
        "opIncome": 42832000000
      },
      {
        "period": "Q1'25",
        "revenue": 95359000000.0,
        "netIncome": 24780000000.0,
        "endDate": "2025-03-29",
        "opIncome": 29589000000
      },
      {
        "period": "Q2'25",
        "revenue": 94036000000.0,
        "netIncome": 23434000000.0,
        "endDate": "2025-06-28",
        "opIncome": 28202000000
      },
      {
        "period": "Q3'25",
        "revenue": 102466000000.0,
        "netIncome": 27466000000.0,
        "endDate": "2025-09-27"
      },
      {
        "period": "Q4'25",
        "revenue": 143756000000.0,
        "netIncome": 42097000000.0,
        "endDate": "2025-12-27",
        "opIncome": 50852000000
      },
      {
        "period": "Q1'26",
        "revenue": 111184000000.0,
        "netIncome": 29578000000.0,
        "endDate": "2026-03-28",
        "opIncome": 35885000000
      },
      {
        "period": "Q2'26",
        "revenue": 109417000000,
        "netIncome": 29789000000,
        "opIncome": 35695000000,
        "endDate": "2026-06-27"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "GOOGL": {
    "annual": [
      {
        "period": "2018",
        "revenue": 136819000000,
        "netIncome": 30736000000,
        "opIncome": 27524000000,
        "eps": 43,
        "ocf": 47971000000,
        "capex": -25139000000,
        "fcf": 22832000000,
        "endDate": "2018-12-31"
      },
      {
        "period": "2019",
        "revenue": 161857000000.0,
        "netIncome": 34343000000.0,
        "opIncome": 34231000000.0,
        "eps": 49,
        "ocf": 54520000000,
        "capex": -23548000000.0,
        "fcf": 30972000000.0,
        "endDate": "2019-12-31"
      },
      {
        "period": "2020",
        "revenue": 182527000000.0,
        "netIncome": 40269000000.0,
        "opIncome": 41224000000.0,
        "eps": 58,
        "ocf": 65124000000,
        "capex": -22281000000,
        "fcf": 42843000000,
        "endDate": "2020-12-31"
      },
      {
        "period": "2021",
        "revenue": 257637000000.0,
        "netIncome": 76033000000.0,
        "opIncome": 78714000000.0,
        "eps": 112,
        "ocf": 91652000000,
        "capex": -24640000000,
        "fcf": 67012000000,
        "endDate": "2021-12-31"
      },
      {
        "period": "2022",
        "revenue": 282836000000.0,
        "netIncome": 59972000000.0,
        "opIncome": 74842000000.0,
        "eps": 4,
        "ocf": 91495000000,
        "capex": -31485000000,
        "fcf": 60010000000,
        "endDate": "2022-12-31"
      },
      {
        "period": "2023",
        "revenue": 307394000000.0,
        "netIncome": 73795000000.0,
        "opIncome": 84293000000.0,
        "eps": 5,
        "ocf": 101746000000,
        "capex": -32251000000,
        "fcf": 69495000000,
        "endDate": "2023-12-31"
      },
      {
        "period": "2024",
        "revenue": 350018000000.0,
        "netIncome": 100118000000.0,
        "opIncome": 112390000000.0,
        "eps": 8.04,
        "ocf": 125299000000,
        "capex": -52535000000,
        "fcf": 72764000000,
        "endDate": "2024-12-31"
      },
      {
        "period": "2025",
        "revenue": 402836000000.0,
        "netIncome": 132170000000.0,
        "opIncome": 129039000000.0,
        "eps": 10.81,
        "ocf": 164713000000,
        "capex": -91447000000,
        "fcf": 73266000000,
        "endDate": "2025-12-31"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 76693000000.0,
        "netIncome": 19689000000.0,
        "endDate": "2023-09-30",
        "opIncome": 21343000000
      },
      {
        "period": "Q4'23",
        "revenue": 86310000000.0,
        "netIncome": 20687000000.0,
        "endDate": "2023-12-31"
      },
      {
        "period": "Q1'24",
        "revenue": 80539000000.0,
        "netIncome": 23662000000.0,
        "endDate": "2024-03-31",
        "opIncome": 25472000000
      },
      {
        "period": "Q2'24",
        "revenue": 84742000000.0,
        "netIncome": 23619000000.0,
        "endDate": "2024-06-30",
        "opIncome": 27425000000
      },
      {
        "period": "Q3'24",
        "revenue": 88268000000.0,
        "netIncome": 26301000000.0,
        "endDate": "2024-09-30",
        "opIncome": 28521000000
      },
      {
        "period": "Q4'24",
        "revenue": 96469000000.0,
        "netIncome": 26536000000.0,
        "endDate": "2024-12-31"
      },
      {
        "period": "Q1'25",
        "revenue": 90234000000.0,
        "netIncome": 34540000000.0,
        "endDate": "2025-03-31",
        "opIncome": 30606000000
      },
      {
        "period": "Q2'25",
        "revenue": 96428000000.0,
        "netIncome": 28196000000.0,
        "endDate": "2025-06-30",
        "opIncome": 31271000000
      },
      {
        "period": "Q3'25",
        "revenue": 102346000000,
        "netIncome": 34979000000.0,
        "endDate": "2025-09-30",
        "opIncome": 31228000000
      },
      {
        "period": "Q4'25",
        "revenue": 113829000000.0,
        "netIncome": 34455000000.0,
        "endDate": "2025-12-31"
      },
      {
        "period": "Q1'26",
        "revenue": 109896000000.0,
        "netIncome": 62578000000.0,
        "endDate": "2026-03-31",
        "opIncome": 39696000000
      },
      {
        "period": "Q2'26",
        "revenue": 119796000000,
        "netIncome": 112193000000,
        "opIncome": 40770000000,
        "endDate": "2026-06-30"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:07",
    "_data_quality_version": 3
  },
  "MSFT": {
    "annual": [
      {
        "period": "2019",
        "revenue": 125843000000.0,
        "netIncome": 39240000000,
        "opIncome": 42959000000,
        "eps": 5,
        "ocf": 52185000000,
        "capex": -13925000000,
        "fcf": 38260000000,
        "endDate": "2019-06-30"
      },
      {
        "period": "2020",
        "revenue": 143015000000.0,
        "netIncome": 44281000000.0,
        "opIncome": 52959000000.0,
        "eps": 5.76,
        "ocf": 60675000000,
        "capex": -15441000000,
        "fcf": 45234000000,
        "endDate": "2020-06-30"
      },
      {
        "period": "2021",
        "revenue": 168088000000.0,
        "netIncome": 61271000000.0,
        "opIncome": 69916000000.0,
        "eps": 8.05,
        "ocf": 76740000000,
        "capex": -20622000000,
        "fcf": 56118000000,
        "endDate": "2021-06-30"
      },
      {
        "period": "2022",
        "revenue": 198270000000.0,
        "netIncome": 72738000000.0,
        "opIncome": 83383000000.0,
        "eps": 9.65,
        "ocf": 89035000000,
        "capex": -23886000000,
        "fcf": 65149000000,
        "endDate": "2022-06-30"
      },
      {
        "period": "2023",
        "revenue": 211915000000.0,
        "netIncome": 72361000000.0,
        "opIncome": 88523000000.0,
        "eps": 9.68,
        "ocf": 87582000000,
        "capex": -28107000000,
        "fcf": 59475000000,
        "endDate": "2023-06-30"
      },
      {
        "period": "2024",
        "revenue": 245122000000.0,
        "netIncome": 88136000000.0,
        "opIncome": 109433000000.0,
        "eps": 11.8,
        "ocf": 118548000000,
        "capex": -44477000000,
        "fcf": 74071000000,
        "endDate": "2024-06-30"
      },
      {
        "period": "2025",
        "revenue": 281724000000.0,
        "netIncome": 101832000000.0,
        "opIncome": 128528000000.0,
        "eps": 13.64,
        "ocf": 136162000000,
        "capex": -64551000000,
        "fcf": 71611000000,
        "endDate": "2025-06-30"
      },
      {
        "period": "2026",
        "revenue": 331839000000,
        "netIncome": 133749000000,
        "opIncome": 155237000000,
        "ocf": 182935000000,
        "capex": -115948000000,
        "fcf": 66987000000,
        "endDate": "2026-06-30"
      }
    ],
    "quarterly": [
      {
        "period": "Q1'23",
        "revenue": 52857000000.0,
        "netIncome": 18299000000.0,
        "endDate": "2023-03-31",
        "opIncome": 22352000000
      },
      {
        "period": "Q2'23",
        "revenue": 56189000000.0,
        "netIncome": 20081000000.0,
        "endDate": "2023-06-30"
      },
      {
        "period": "Q3'23",
        "revenue": 56517000000.0,
        "netIncome": 22291000000.0,
        "endDate": "2023-09-30",
        "opIncome": 26895000000
      },
      {
        "period": "Q4'23",
        "revenue": 62020000000,
        "netIncome": 21870000000,
        "opIncome": 27032000000,
        "endDate": "2023-12-31"
      },
      {
        "period": "Q1'24",
        "revenue": 61858000000,
        "netIncome": 21939000000,
        "opIncome": 27581000000,
        "endDate": "2024-03-31"
      },
      {
        "period": "Q3'24",
        "revenue": 65585000000.0,
        "netIncome": 24667000000.0,
        "endDate": "2024-09-30",
        "opIncome": 30552000000
      },
      {
        "period": "Q4'24",
        "revenue": 69632000000.0,
        "netIncome": 24108000000.0,
        "endDate": "2024-12-31",
        "opIncome": 31653000000
      },
      {
        "period": "Q1'25",
        "revenue": 70066000000.0,
        "netIncome": 25824000000.0,
        "endDate": "2025-03-31",
        "opIncome": 32000000000
      },
      {
        "period": "Q2'25",
        "revenue": 76441000000.0,
        "netIncome": 27233000000.0,
        "endDate": "2025-06-30"
      },
      {
        "period": "Q3'25",
        "revenue": 77673000000.0,
        "netIncome": 27747000000.0,
        "endDate": "2025-09-30",
        "opIncome": 37961000000
      },
      {
        "period": "Q4'25",
        "revenue": 81273000000.0,
        "netIncome": 38458000000.0,
        "endDate": "2025-12-31",
        "opIncome": 38275000000
      },
      {
        "period": "Q1'26",
        "revenue": 82886000000.0,
        "netIncome": 31778000000.0,
        "endDate": "2026-03-31",
        "opIncome": 38398000000
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:07",
    "_data_quality_version": 3
  },
  "AMZN": {
    "annual": [
      {
        "period": "2018",
        "revenue": 232887000000,
        "netIncome": 10073000000,
        "opIncome": 12421000000,
        "eps": 20,
        "ocf": 30723000000,
        "capex": -13427000000,
        "fcf": 17296000000,
        "endDate": "2018-12-31"
      },
      {
        "period": "2019",
        "revenue": 280522000000.0,
        "netIncome": 11588000000.0,
        "opIncome": 14541000000.0,
        "eps": 23,
        "ocf": 38514000000,
        "capex": -16861000000,
        "fcf": 21653000000,
        "endDate": "2019-12-31"
      },
      {
        "period": "2020",
        "revenue": 386064000000.0,
        "netIncome": 21331000000.0,
        "opIncome": 22899000000.0,
        "eps": 41.83,
        "ocf": 66064000000.0,
        "capex": -40140000000.0,
        "fcf": 25924000000.0,
        "endDate": "2020-12-31"
      },
      {
        "period": "2021",
        "revenue": 469822000000.0,
        "netIncome": 33364000000.0,
        "opIncome": 24879000000.0,
        "eps": 64.81,
        "ocf": 46327000000.0,
        "capex": -61053000000.0,
        "fcf": -14726000000.0,
        "endDate": "2021-12-31"
      },
      {
        "period": "2022",
        "revenue": 513983000000.0,
        "netIncome": -2722000000.0,
        "opIncome": 12248000000.0,
        "eps": 0,
        "ocf": 46752000000,
        "capex": -63645000000,
        "fcf": -16893000000,
        "endDate": "2022-12-31"
      },
      {
        "period": "2023",
        "revenue": 574785000000.0,
        "netIncome": 30425000000.0,
        "opIncome": 36852000000.0,
        "eps": 2,
        "ocf": 84946000000,
        "capex": -52729000000,
        "fcf": 32217000000,
        "endDate": "2023-12-31"
      },
      {
        "period": "2024",
        "revenue": 637959000000.0,
        "netIncome": 59248000000.0,
        "opIncome": 68593000000.0,
        "eps": 5,
        "ocf": 115877000000,
        "capex": -82999000000,
        "fcf": 32878000000,
        "endDate": "2024-12-31"
      },
      {
        "period": "2025",
        "revenue": 716924000000.0,
        "netIncome": 77670000000.0,
        "opIncome": 79975000000.0,
        "eps": 7,
        "ocf": 139514000000,
        "capex": -131819000000,
        "fcf": 7695000000,
        "endDate": "2025-12-31"
      }
    ],
    "quarterly": [
      {
        "period": "Q2'23",
        "revenue": 134383000000.0,
        "netIncome": 6750000000.0,
        "endDate": "2023-06-30",
        "opIncome": 7681000000
      },
      {
        "period": "Q3'23",
        "revenue": 143083000000.0,
        "netIncome": 9879000000.0,
        "endDate": "2023-09-30",
        "opIncome": 11188000000
      },
      {
        "period": "Q4'23",
        "revenue": 169961000000.0,
        "netIncome": 10624000000.0,
        "endDate": "2023-12-31"
      },
      {
        "period": "Q1'24",
        "revenue": 143313000000.0,
        "netIncome": 10431000000.0,
        "endDate": "2024-03-31",
        "opIncome": 15307000000
      },
      {
        "period": "Q2'24",
        "revenue": 147977000000.0,
        "netIncome": 13485000000.0,
        "endDate": "2024-06-30",
        "opIncome": 14672000000
      },
      {
        "period": "Q3'24",
        "revenue": 158877000000,
        "netIncome": 15328000000,
        "opIncome": 17411000000,
        "endDate": "2024-09-30"
      },
      {
        "period": "Q1'25",
        "revenue": 155667000000.0,
        "netIncome": 17127000000.0,
        "endDate": "2025-03-31",
        "opIncome": 18405000000
      },
      {
        "period": "Q2'25",
        "revenue": 167702000000.0,
        "netIncome": 18164000000.0,
        "endDate": "2025-06-30",
        "opIncome": 19171000000
      },
      {
        "period": "Q3'25",
        "revenue": 180169000000.0,
        "netIncome": 21187000000.0,
        "endDate": "2025-09-30",
        "opIncome": 17422000000
      },
      {
        "period": "Q4'25",
        "revenue": 213386000000.0,
        "netIncome": 21192000000.0,
        "endDate": "2025-12-31"
      },
      {
        "period": "Q1'26",
        "revenue": 181519000000.0,
        "netIncome": 30255000000.0,
        "endDate": "2026-03-31",
        "opIncome": 23852000000
      },
      {
        "period": "Q2'26",
        "revenue": 200606000000,
        "netIncome": 62647000000,
        "opIncome": 27461000000,
        "endDate": "2026-06-30"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "TSM": {
    "annual": [
      {
        "period": "2022",
        "endDate": "2022-12-31",
        "revenue": 2263891300000.0,
        "netIncome": 992923400000.0,
        "opIncome": 1121226500000.0,
        "eps": 196.0,
        "ocf": 1610599200000.0,
        "capex": -1089626400000.0,
        "fcf": 520972800000.0,
        "pretaxIncome": 1144072200000.0,
        "taxProvision": 150777500000.0,
        "normalizedIncome": 989907933710.3375,
        "unusualItems": 3473200000.0,
        "unusualItemsExGoodwill": 3473200000.0,
        "unusualTaxEffect": 457733710.337512,
        "specialIncomeCharges": 0.0,
        "otherNonOperating": 1020500000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 302400000.0
      },
      {
        "period": "2023",
        "endDate": "2023-12-31",
        "revenue": 2161735800000.0,
        "netIncome": 851740000000.0,
        "opIncome": 921429900000.0,
        "eps": 161.7,
        "ocf": 1241967300000.0,
        "capex": -955398400000.0,
        "fcf": 286568900000.0,
        "pretaxIncome": 979316500000.0,
        "taxProvision": 128288800000.0,
        "normalizedIncome": 848803208766.3691,
        "unusualItems": 3379500000.0,
        "unusualItemsExGoodwill": 3379500000.0,
        "unusualTaxEffect": 442708766.369197,
        "specialIncomeCharges": 15700000.0,
        "otherNonOperating": 1412400000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 483000000.0
      },
      {
        "period": "2024",
        "endDate": "2024-12-31",
        "revenue": 2894307700000.0,
        "netIncome": 1158380200000.0,
        "opIncome": 1322003100000.0,
        "eps": 226.25,
        "ocf": 1826177100000.0,
        "capex": -964981600000.0,
        "fcf": 861195500000.0,
        "pretaxIncome": 1405840000000.0,
        "taxProvision": 248316100000.0,
        "normalizedIncome": 1157457945319.2468,
        "unusualItems": 1120100000.0,
        "unusualItemsExGoodwill": 1120100000.0,
        "unusualTaxEffect": 197845319.246856,
        "specialIncomeCharges": 7100000.0,
        "otherNonOperating": 1118100000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 1242700000.0
      },
      {
        "period": "2025",
        "endDate": "2025-12-31",
        "revenue": 3809054300000.0,
        "netIncome": 1697604000000.0,
        "opIncome": 1936095600000.0,
        "eps": 331.25,
        "ocf": 2274975600000.0,
        "capex": -1282597200000.0,
        "fcf": 992378400000.0,
        "pretaxIncome": 2041654700000.0,
        "taxProvision": 346529800000.0,
        "normalizedIncome": 1693137146735.3418,
        "unusualItems": 5380000000.0,
        "unusualItemsExGoodwill": 5380000000.0,
        "unusualTaxEffect": 913146735.341681,
        "specialIncomeCharges": -168000000.0,
        "otherNonOperating": 1321900000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 1246100000.0
      }
    ],
    "quarterly": [
      {
        "period": "Q1'25",
        "endDate": "2025-03-31",
        "revenue": null,
        "netIncome": null,
        "opIncome": null,
        "eps": null,
        "ocf": null,
        "capex": null,
        "fcf": null,
        "pretaxIncome": null,
        "taxProvision": null,
        "normalizedIncome": null,
        "unusualItems": 229035000.0,
        "unusualItemsExGoodwill": 229035000.0,
        "unusualTaxEffect": null,
        "specialIncomeCharges": -167986000.0,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": 455241000.0
      },
      {
        "period": "Q2'25",
        "endDate": "2025-06-30",
        "revenue": 933792000000.0,
        "netIncome": 398273000000.0,
        "opIncome": 463423000000.0,
        "eps": 76.8,
        "ocf": 497064085000.0,
        "capex": -299562606000.0,
        "fcf": 197501479000.0,
        "pretaxIncome": 493036000000.0,
        "taxProvision": 95543000000.0,
        "normalizedIncome": 398273000000.0,
        "unusualItems": 6328647000.0,
        "unusualItemsExGoodwill": 6328647000.0,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": 6890000000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 344406000.0
      },
      {
        "period": "Q3'25",
        "endDate": "2025-09-30",
        "revenue": 989918318000.0,
        "netIncome": 452301407000.0,
        "opIncome": 500685080000.0,
        "eps": 87.2,
        "ocf": 426829081000.0,
        "capex": -288443339000.0,
        "fcf": 138385742000.0,
        "pretaxIncome": 525369023000.0,
        "taxProvision": 73613661000.0,
        "normalizedIncome": 452572205336.3112,
        "unusualItems": -314925000.0,
        "unusualItemsExGoodwill": -314925000.0,
        "unusualTaxEffect": -44126663.688782,
        "specialIncomeCharges": 0.0,
        "otherNonOperating": 352353000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 273416000.0
      },
      {
        "period": "Q4'25",
        "endDate": "2025-12-31",
        "revenue": 1046090449000.0,
        "netIncome": 485465363000.0,
        "opIncome": 564880854000.0,
        "eps": 97.5,
        "ocf": 725508762000.0,
        "capex": -361467698000.0,
        "fcf": 364041064000.0,
        "pretaxIncome": 592355061000.0,
        "taxProvision": 107211608000.0,
        "normalizedIncome": 486171967767.3727,
        "unusualItems": -862757000.0,
        "unusualItemsExGoodwill": -862757000.0,
        "unusualTaxEffect": -156152232.627343,
        "specialIncomeCharges": -14000.0,
        "otherNonOperating": 398475000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 173037000.0
      },
      {
        "period": "Q1'26",
        "endDate": "2026-03-31",
        "revenue": 1134103440000.0,
        "netIncome": 572479752000.0,
        "opIncome": 658948859000.0,
        "eps": 110.4,
        "ocf": 698976265000.0,
        "capex": -351706028000.0,
        "fcf": 347270237000.0,
        "pretaxIncome": 687799687000.0,
        "taxProvision": 114998383000.0,
        "normalizedIncome": 571614658408.061,
        "unusualItems": 1038774000.0,
        "unusualItemsExGoodwill": 1038774000.0,
        "unusualTaxEffect": 173680408.061078,
        "specialIncomeCharges": 0.0,
        "otherNonOperating": -18251000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 113979000.0
      },
      {
        "period": "Q2'26",
        "endDate": "2026-06-30",
        "revenue": 1270381000000.0,
        "netIncome": 706562000000.0,
        "opIncome": 766603000000.0,
        "eps": 136.233611,
        "ocf": 783365000000.0,
        "capex": -496002000000.0,
        "fcf": 287363000000.0,
        "pretaxIncome": 862430000000.0,
        "taxProvision": 155649000000.0,
        "normalizedIncome": 706562000000.0,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": 67430000000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": null
      }
    ],
    "_currency": "TWD",
    "_source": "Yahoo Finance fundamentals-timeseries",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  },
  "AVGO": {
    "annual": [
      {
        "period": "2018",
        "revenue": 20848000000,
        "netIncome": 12259000000,
        "opIncome": 5135000000,
        "eps": 28,
        "ocf": 8880000000,
        "capex": -635000000,
        "fcf": 8245000000,
        "endDate": "2018-11-04"
      },
      {
        "period": "2019",
        "revenue": 22597000000.0,
        "netIncome": 2695000000,
        "opIncome": 3444000000.0,
        "eps": 6.43,
        "ocf": 9697000000.0,
        "capex": -432000000.0,
        "fcf": 9265000000.0,
        "endDate": "2019-11-03"
      },
      {
        "period": "2020",
        "revenue": 23888000000.0,
        "netIncome": 2663000000,
        "opIncome": 4014000000.0,
        "eps": 6.33,
        "ocf": 12061000000,
        "capex": -463000000,
        "fcf": 11598000000,
        "endDate": "2020-11-01"
      },
      {
        "period": "2021",
        "revenue": 27450000000.0,
        "netIncome": 6437000000,
        "opIncome": 8519000000.0,
        "eps": 15.0,
        "ocf": 13764000000.0,
        "capex": -443000000.0,
        "fcf": 13321000000.0,
        "endDate": "2021-10-31"
      },
      {
        "period": "2022",
        "revenue": 33203000000.0,
        "netIncome": 11495000000.0,
        "opIncome": 14225000000.0,
        "eps": 26.53,
        "ocf": 16736000000,
        "capex": -424000000,
        "fcf": 16312000000,
        "endDate": "2022-10-30"
      },
      {
        "period": "2023",
        "revenue": 35819000000.0,
        "netIncome": 14082000000.0,
        "opIncome": 16207000000.0,
        "eps": 32.98,
        "ocf": 18085000000,
        "capex": -452000000,
        "fcf": 17633000000,
        "endDate": "2023-10-29"
      },
      {
        "period": "2024",
        "revenue": 51574000000.0,
        "netIncome": 5895000000.0,
        "opIncome": 13463000000.0,
        "eps": 1.23,
        "ocf": 19962000000,
        "capex": -548000000,
        "fcf": 19414000000,
        "endDate": "2024-11-03"
      },
      {
        "period": "2025",
        "revenue": 63887000000.0,
        "netIncome": 23126000000.0,
        "opIncome": 25484000000.0,
        "eps": 4.77,
        "ocf": 27537000000,
        "capex": -623000000,
        "fcf": 26914000000,
        "endDate": "2025-11-02"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 8876000000.0,
        "netIncome": 3303000000.0,
        "endDate": "2023-07-30",
        "opIncome": 3856000000
      },
      {
        "period": "Q4'23",
        "revenue": 9295000000.0,
        "netIncome": 3524000000.0,
        "endDate": "2023-10-29"
      },
      {
        "period": "Q1'24",
        "revenue": 11961000000.0,
        "netIncome": 1325000000.0,
        "endDate": "2024-02-04",
        "opIncome": 2083000000
      },
      {
        "period": "Q2'24",
        "revenue": 12487000000.0,
        "netIncome": 2121000000.0,
        "endDate": "2024-05-05",
        "opIncome": 2965000000
      },
      {
        "period": "Q3'24",
        "revenue": 13072000000.0,
        "netIncome": -1875000000.0,
        "endDate": "2024-08-04",
        "opIncome": 3788000000
      },
      {
        "period": "Q4'24",
        "revenue": 14054000000.0,
        "netIncome": 4324000000.0,
        "endDate": "2024-11-03"
      },
      {
        "period": "Q1'25",
        "revenue": 14916000000.0,
        "netIncome": 5503000000.0,
        "endDate": "2025-02-02",
        "opIncome": 6260000000
      },
      {
        "period": "Q2'25",
        "revenue": 15004000000.0,
        "netIncome": 4965000000.0,
        "endDate": "2025-05-04",
        "opIncome": 5829000000
      },
      {
        "period": "Q3'25",
        "revenue": 15952000000.0,
        "netIncome": 4140000000.0,
        "endDate": "2025-08-03",
        "opIncome": 5887000000
      },
      {
        "period": "Q4'25",
        "revenue": 18015000000.0,
        "netIncome": 8518000000.0,
        "endDate": "2025-11-02"
      },
      {
        "period": "Q1'26",
        "revenue": 19311000000.0,
        "netIncome": 7349000000.0,
        "endDate": "2026-02-01",
        "opIncome": 8563000000
      },
      {
        "period": "Q2'26",
        "revenue": 22187000000.0,
        "netIncome": 9310000000.0,
        "endDate": "2026-05-03",
        "opIncome": 10788000000
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "META": {
    "annual": [
      {
        "period": "2018",
        "revenue": 55838000000,
        "netIncome": 22112000000,
        "opIncome": 24913000000,
        "eps": 7,
        "ocf": 29274000000,
        "capex": -13915000000,
        "fcf": 15359000000,
        "endDate": "2018-12-31"
      },
      {
        "period": "2019",
        "revenue": 70697000000.0,
        "netIncome": 18485000000.0,
        "opIncome": 23986000000,
        "eps": 6,
        "ocf": 36314000000,
        "capex": -15102000000,
        "fcf": 21212000000,
        "endDate": "2019-12-31"
      },
      {
        "period": "2020",
        "revenue": 85965000000.0,
        "netIncome": 29146000000.0,
        "opIncome": 32671000000,
        "eps": 10,
        "ocf": 38747000000,
        "capex": -15163000000,
        "fcf": 23584000000,
        "endDate": "2020-12-31"
      },
      {
        "period": "2021",
        "revenue": 117929000000.0,
        "netIncome": 39370000000.0,
        "opIncome": 46753000000.0,
        "eps": 13,
        "ocf": 57683000000,
        "capex": -18690000000,
        "fcf": 38993000000,
        "endDate": "2021-12-31"
      },
      {
        "period": "2022",
        "revenue": 116609000000.0,
        "netIncome": 23200000000.0,
        "opIncome": 28944000000.0,
        "eps": 8,
        "ocf": 50475000000,
        "capex": -31186000000,
        "fcf": 19289000000,
        "endDate": "2022-12-31"
      },
      {
        "period": "2023",
        "revenue": 134902000000.0,
        "netIncome": 39098000000.0,
        "opIncome": 46751000000.0,
        "eps": 14,
        "ocf": 71113000000,
        "capex": -27045000000,
        "fcf": 44068000000,
        "endDate": "2023-12-31"
      },
      {
        "period": "2024",
        "revenue": 164501000000.0,
        "netIncome": 62360000000.0,
        "opIncome": 69380000000.0,
        "eps": 23.86,
        "ocf": 91328000000,
        "capex": -37256000000,
        "fcf": 54072000000,
        "endDate": "2024-12-31"
      },
      {
        "period": "2025",
        "revenue": 200966000000.0,
        "netIncome": 60458000000.0,
        "opIncome": 83276000000.0,
        "eps": 23.49,
        "ocf": 115800000000,
        "capex": -69691000000,
        "fcf": 46109000000,
        "endDate": "2025-12-31"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 34146000000.0,
        "netIncome": 11583000000.0,
        "endDate": "2023-09-30",
        "opIncome": 13748000000
      },
      {
        "period": "Q4'23",
        "revenue": 40111000000.0,
        "netIncome": 14017000000.0,
        "endDate": "2023-12-31"
      },
      {
        "period": "Q1'24",
        "revenue": 36455000000.0,
        "netIncome": 12369000000.0,
        "endDate": "2024-03-31",
        "opIncome": 13818000000
      },
      {
        "period": "Q2'24",
        "revenue": 39071000000,
        "netIncome": 13465000000.0,
        "endDate": "2024-06-30",
        "opIncome": 14847000000
      },
      {
        "period": "Q3'24",
        "revenue": 40589000000.0,
        "netIncome": 15688000000.0,
        "endDate": "2024-09-30",
        "opIncome": 17350000000
      },
      {
        "period": "Q4'24",
        "revenue": 48385000000.0,
        "netIncome": 20838000000.0,
        "endDate": "2024-12-31"
      },
      {
        "period": "Q1'25",
        "revenue": 42314000000.0,
        "netIncome": 16644000000.0,
        "endDate": "2025-03-31",
        "opIncome": 17555000000
      },
      {
        "period": "Q2'25",
        "revenue": 47516000000.0,
        "netIncome": 18337000000.0,
        "endDate": "2025-06-30",
        "opIncome": 20441000000
      },
      {
        "period": "Q3'25",
        "revenue": 51242000000,
        "netIncome": 2709000000.0,
        "endDate": "2025-09-30",
        "opIncome": 20535000000
      },
      {
        "period": "Q4'25",
        "revenue": 59893000000.0,
        "netIncome": 22768000000.0,
        "endDate": "2025-12-31"
      },
      {
        "period": "Q1'26",
        "revenue": 56311000000.0,
        "netIncome": 26773000000.0,
        "endDate": "2026-03-31",
        "opIncome": 22872000000
      },
      {
        "period": "Q2'26",
        "revenue": 60801000000,
        "netIncome": 15848000000,
        "opIncome": 18775000000,
        "endDate": "2026-06-30"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "TSLA": {
    "annual": [
      {
        "period": "2018",
        "revenue": 21461268000.0,
        "netIncome": -976000000,
        "opIncome": -388000000,
        "eps": -5,
        "ocf": 2098000000,
        "capex": -2101000000,
        "fcf": -3000000,
        "endDate": "2018-12-31"
      },
      {
        "period": "2019",
        "revenue": 24578000000.0,
        "netIncome": -862000000,
        "opIncome": -69000000,
        "eps": -4,
        "ocf": 2405000000,
        "capex": -1327000000,
        "fcf": 1078000000,
        "endDate": "2019-12-31"
      },
      {
        "period": "2020",
        "revenue": 31536000000.0,
        "netIncome": 721000000,
        "opIncome": 1994000000,
        "eps": 0,
        "ocf": 5943000000,
        "capex": -3157000000,
        "fcf": 2786000000,
        "endDate": "2020-12-31"
      },
      {
        "period": "2021",
        "revenue": 53823000000,
        "netIncome": 5519000000.0,
        "opIncome": 6523000000,
        "eps": 4,
        "ocf": 11497000000,
        "capex": -6482000000,
        "fcf": 5015000000,
        "endDate": "2021-12-31"
      },
      {
        "period": "2022",
        "revenue": 81462000000.0,
        "netIncome": 12556000000.0,
        "opIncome": 13656000000,
        "eps": 3,
        "ocf": 14724000000,
        "capex": -7158000000,
        "fcf": 7566000000,
        "endDate": "2022-12-31"
      },
      {
        "period": "2023",
        "revenue": 96773000000.0,
        "netIncome": 14997000000.0,
        "opIncome": 8891000000,
        "eps": 4,
        "ocf": 13256000000,
        "capex": -8899000000,
        "fcf": 4357000000,
        "endDate": "2023-12-31"
      },
      {
        "period": "2024",
        "revenue": 97690000000.0,
        "netIncome": 7091000000.0,
        "opIncome": 7076000000,
        "eps": 2,
        "ocf": 14923000000,
        "capex": -11342000000,
        "fcf": 3581000000,
        "endDate": "2024-12-31"
      },
      {
        "period": "2025",
        "revenue": 94827000000.0,
        "netIncome": 3794000000.0,
        "opIncome": 4355000000,
        "eps": 1,
        "ocf": 14747000000,
        "capex": -8527000000,
        "fcf": 6220000000,
        "endDate": "2025-12-31"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 23350000000.0,
        "netIncome": 1853000000.0,
        "endDate": "2023-09-30",
        "opIncome": 1764000000
      },
      {
        "period": "Q4'23",
        "revenue": 25167000000.0,
        "netIncome": 7928000000.0,
        "endDate": "2023-12-31"
      },
      {
        "period": "Q1'24",
        "revenue": 21301000000.0,
        "netIncome": 1390000000,
        "endDate": "2024-03-31",
        "opIncome": 1171000000
      },
      {
        "period": "Q2'24",
        "revenue": 25500000000.0,
        "netIncome": 1400000000,
        "endDate": "2024-06-30",
        "opIncome": 1605000000
      },
      {
        "period": "Q3'24",
        "revenue": 25182000000.0,
        "netIncome": 2173000000,
        "endDate": "2024-09-30",
        "opIncome": 2717000000
      },
      {
        "period": "Q4'24",
        "revenue": 25707000000.0,
        "netIncome": 2317000000.0,
        "endDate": "2024-12-31"
      },
      {
        "period": "Q1'25",
        "revenue": 19335000000.0,
        "netIncome": 409000000.0,
        "endDate": "2025-03-31",
        "opIncome": 399000000
      },
      {
        "period": "Q2'25",
        "revenue": 22496000000.0,
        "netIncome": 1172000000.0,
        "endDate": "2025-06-30",
        "opIncome": 923000000
      },
      {
        "period": "Q3'25",
        "revenue": 28095000000.0,
        "netIncome": 1373000000.0,
        "endDate": "2025-09-30",
        "opIncome": 1624000000
      },
      {
        "period": "Q4'25",
        "revenue": 24901000000.0,
        "netIncome": 840000000.0,
        "endDate": "2025-12-31"
      },
      {
        "period": "Q1'26",
        "revenue": 22387000000.0,
        "netIncome": 477000000,
        "endDate": "2026-03-31",
        "opIncome": 941000000
      },
      {
        "period": "Q2'26",
        "revenue": 28236000000,
        "netIncome": 1114000000,
        "opIncome": 398000000,
        "endDate": "2026-06-30"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "MU": {
    "annual": [
      {
        "period": "2018",
        "revenue": 30391000000,
        "netIncome": 14135000000,
        "opIncome": 14994000000,
        "eps": 11,
        "ocf": 17400000000,
        "capex": -8879000000,
        "fcf": 8521000000,
        "endDate": "2018-08-30"
      },
      {
        "period": "2019",
        "revenue": 23406000000,
        "netIncome": 6313000000,
        "opIncome": 7376000000,
        "eps": 5,
        "ocf": 13189000000,
        "capex": -9780000000,
        "fcf": 3409000000,
        "endDate": "2019-08-29"
      },
      {
        "period": "2020",
        "revenue": 21435000000.0,
        "netIncome": 2687000000.0,
        "opIncome": 3003000000.0,
        "eps": 2.37,
        "ocf": 8306000000,
        "capex": -8223000000,
        "fcf": 83000000,
        "endDate": "2020-09-03"
      },
      {
        "period": "2021",
        "revenue": 27705000000.0,
        "netIncome": 5861000000.0,
        "opIncome": 6283000000.0,
        "eps": 5.14,
        "ocf": 12468000000,
        "capex": -10030000000,
        "fcf": 2438000000,
        "endDate": "2021-09-02"
      },
      {
        "period": "2022",
        "revenue": 30758000000.0,
        "netIncome": 8687000000.0,
        "opIncome": 9702000000.0,
        "eps": 7.75,
        "ocf": 15181000000,
        "capex": -12067000000,
        "fcf": 3114000000,
        "endDate": "2022-09-01"
      },
      {
        "period": "2023",
        "revenue": 15540000000.0,
        "netIncome": -5833000000.0,
        "opIncome": -5745000000.0,
        "eps": -5.34,
        "ocf": 1559000000,
        "capex": -7676000000,
        "fcf": -6117000000,
        "endDate": "2023-08-31"
      },
      {
        "period": "2024",
        "revenue": 25111000000.0,
        "netIncome": 778000000.0,
        "opIncome": 1304000000.0,
        "eps": 0.7,
        "ocf": 8507000000,
        "capex": -8386000000,
        "fcf": 121000000,
        "endDate": "2024-08-29"
      },
      {
        "period": "2025",
        "revenue": 37378000000.0,
        "netIncome": 8539000000.0,
        "opIncome": 9770000000.0,
        "eps": 7.59,
        "ocf": 17525000000,
        "capex": -15857000000,
        "fcf": 1668000000,
        "endDate": "2025-08-28"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 4010000000.0,
        "netIncome": -1430000000.0,
        "endDate": "2023-08-31"
      },
      {
        "period": "Q4'23",
        "revenue": 4726000000.0,
        "netIncome": -1234000000.0,
        "endDate": "2023-11-30",
        "opIncome": -1128000000
      },
      {
        "period": "Q1'24",
        "revenue": 5824000000.0,
        "netIncome": 793000000.0,
        "endDate": "2024-02-29",
        "opIncome": 191000000
      },
      {
        "period": "Q2'24",
        "revenue": 6811000000.0,
        "netIncome": 332000000.0,
        "endDate": "2024-05-30",
        "opIncome": 719000000
      },
      {
        "period": "Q3'24",
        "revenue": 7750000000.0,
        "netIncome": 887000000.0,
        "endDate": "2024-08-29"
      },
      {
        "period": "Q4'24",
        "revenue": 8709000000.0,
        "netIncome": 1870000000.0,
        "endDate": "2024-11-28",
        "opIncome": 2174000000
      },
      {
        "period": "Q1'25",
        "revenue": 8053000000.0,
        "netIncome": 1583000000.0,
        "endDate": "2025-02-27",
        "opIncome": 1773000000
      },
      {
        "period": "Q2'25",
        "revenue": 9301000000.0,
        "netIncome": 1885000000.0,
        "endDate": "2025-05-29",
        "opIncome": 2169000000
      },
      {
        "period": "Q3'25",
        "revenue": 11315000000.0,
        "netIncome": 3201000000.0,
        "endDate": "2025-08-28"
      },
      {
        "period": "Q4'25",
        "revenue": 13643000000.0,
        "netIncome": 5240000000.0,
        "endDate": "2025-11-27",
        "opIncome": 6136000000
      },
      {
        "period": "Q1'26",
        "revenue": 23860000000.0,
        "netIncome": 13785000000.0,
        "endDate": "2026-02-26",
        "opIncome": 16135000000
      },
      {
        "period": "Q2'26",
        "revenue": 41456000000.0,
        "netIncome": 28243000000.0,
        "endDate": "2026-05-28",
        "opIncome": 33318000000
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  },
  "AMD": {
    "annual": [
      {
        "period": "2018",
        "revenue": 6475000000,
        "netIncome": 337000000,
        "opIncome": 451000000,
        "eps": 0,
        "ocf": 34000000,
        "capex": -163000000,
        "fcf": -129000000,
        "endDate": "2018-12-29"
      },
      {
        "period": "2019",
        "revenue": 6731000000.0,
        "netIncome": 341000000.0,
        "opIncome": 631000000.0,
        "eps": 0.3,
        "ocf": 493000000,
        "capex": -217000000,
        "fcf": 276000000,
        "endDate": "2019-12-28"
      },
      {
        "period": "2020",
        "revenue": 9763000000.0,
        "netIncome": 2490000000.0,
        "opIncome": 1369000000.0,
        "eps": 2.06,
        "ocf": 1071000000,
        "capex": -294000000,
        "fcf": 777000000,
        "endDate": "2020-12-26"
      },
      {
        "period": "2021",
        "revenue": 16434000000.0,
        "netIncome": 3162000000.0,
        "opIncome": 3648000000.0,
        "eps": 2.57,
        "ocf": 3521000000,
        "capex": -301000000,
        "fcf": 3220000000,
        "endDate": "2021-12-25"
      },
      {
        "period": "2022",
        "revenue": 23601000000,
        "netIncome": 1320000000,
        "opIncome": 1264000000,
        "ocf": 3565000000,
        "capex": -450000000,
        "fcf": 3115000000,
        "endDate": "2022-12-31"
      },
      {
        "period": "2023",
        "revenue": 22680000000.0,
        "netIncome": 854000000.0,
        "opIncome": 401000000.0,
        "eps": 0.53,
        "ocf": 1667000000,
        "capex": -546000000,
        "fcf": 1121000000,
        "endDate": "2023-12-30"
      },
      {
        "period": "2024",
        "revenue": 25785000000.0,
        "netIncome": 1641000000.0,
        "opIncome": 1900000000.0,
        "eps": 1.0,
        "ocf": 3041000000,
        "capex": -636000000,
        "fcf": 2405000000,
        "endDate": "2024-12-28"
      },
      {
        "period": "2025",
        "revenue": 34639000000.0,
        "netIncome": 4335000000.0,
        "opIncome": 3694000000.0,
        "eps": 2.65,
        "ocf": 7709000000,
        "capex": -974000000,
        "fcf": 6735000000,
        "endDate": "2025-12-27"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 5800000000,
        "netIncome": 299000000,
        "endDate": "2023-09-30",
        "opIncome": 224000000
      },
      {
        "period": "Q4'23",
        "revenue": 6168000000.0,
        "netIncome": 667000000.0,
        "endDate": "2023-12-30"
      },
      {
        "period": "Q1'24",
        "revenue": 5473000000.0,
        "netIncome": 123000000.0,
        "endDate": "2024-03-30",
        "opIncome": 36000000
      },
      {
        "period": "Q2'24",
        "revenue": 5835000000.0,
        "netIncome": 265000000.0,
        "endDate": "2024-06-29",
        "opIncome": 269000000
      },
      {
        "period": "Q3'24",
        "revenue": 6819000000.0,
        "netIncome": 771000000.0,
        "endDate": "2024-09-28",
        "opIncome": 724000000
      },
      {
        "period": "Q4'24",
        "revenue": 7658000000.0,
        "netIncome": 482000000.0,
        "endDate": "2024-12-28"
      },
      {
        "period": "Q1'25",
        "revenue": 7438000000.0,
        "netIncome": 709000000.0,
        "endDate": "2025-03-29",
        "opIncome": 806000000
      },
      {
        "period": "Q2'25",
        "revenue": 7685000000.0,
        "netIncome": 872000000.0,
        "endDate": "2025-06-28",
        "opIncome": -134000000
      },
      {
        "period": "Q3'25",
        "revenue": 9246000000.0,
        "netIncome": 1243000000.0,
        "endDate": "2025-09-27",
        "opIncome": 1270000000
      },
      {
        "period": "Q4'25",
        "revenue": 10270000000.0,
        "netIncome": 1511000000.0,
        "endDate": "2025-12-27"
      },
      {
        "period": "Q1'26",
        "revenue": 10253000000.0,
        "netIncome": 1383000000.0,
        "endDate": "2026-03-28",
        "opIncome": 1476000000
      },
      {
        "period": "Q2'26",
        "revenue": 11536000000,
        "netIncome": 2297000000,
        "opIncome": 1990000000,
        "endDate": "2026-06-27"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "INTC": {
    "annual": [
      {
        "period": "2018",
        "revenue": 70848000000,
        "netIncome": 21053000000,
        "opIncome": 23316000000,
        "eps": 4,
        "ocf": 29432000000,
        "capex": -15181000000,
        "fcf": 14251000000,
        "endDate": "2018-12-29"
      },
      {
        "period": "2019",
        "revenue": 71965000000.0,
        "netIncome": 21048000000.0,
        "opIncome": 22035000000.0,
        "eps": 4.71,
        "ocf": 33145000000,
        "capex": -16213000000,
        "fcf": 16932000000,
        "endDate": "2019-12-28"
      },
      {
        "period": "2020",
        "revenue": 77867000000.0,
        "netIncome": 20899000000.0,
        "opIncome": 23678000000.0,
        "eps": 4.94,
        "ocf": 35864000000,
        "capex": -14259000000,
        "fcf": 21605000000,
        "endDate": "2020-12-26"
      },
      {
        "period": "2021",
        "revenue": 79024000000.0,
        "netIncome": 19868000000.0,
        "opIncome": 19456000000.0,
        "eps": 4.86,
        "ocf": 29456000000,
        "capex": -18733000000,
        "fcf": 10723000000,
        "endDate": "2021-12-25"
      },
      {
        "period": "2022",
        "revenue": 63054000000.0,
        "netIncome": 8014000000.0,
        "opIncome": 2334000000.0,
        "eps": 1.94,
        "ocf": 15433000000,
        "capex": -24844000000,
        "fcf": -9411000000,
        "endDate": "2022-12-31"
      },
      {
        "period": "2023",
        "revenue": 54228000000.0,
        "netIncome": 1689000000.0,
        "opIncome": 93000000.0,
        "eps": 0.4,
        "ocf": 11471000000,
        "capex": -25750000000,
        "fcf": -14279000000,
        "endDate": "2023-12-30"
      },
      {
        "period": "2024",
        "revenue": 53101000000.0,
        "netIncome": -18756000000.0,
        "opIncome": -11678000000.0,
        "eps": -4.38,
        "ocf": 8288000000,
        "capex": -23944000000,
        "fcf": -15656000000,
        "endDate": "2024-12-28"
      },
      {
        "period": "2025",
        "revenue": 52853000000.0,
        "netIncome": -267000000.0,
        "opIncome": -2214000000.0,
        "eps": -0.06,
        "ocf": 9697000000,
        "capex": -14646000000,
        "fcf": -4949000000,
        "endDate": "2025-12-27"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 14158000000,
        "netIncome": 297000000,
        "endDate": "2023-09-30",
        "opIncome": -8000000
      },
      {
        "period": "Q4'23",
        "revenue": 15406000000.0,
        "netIncome": 2669000000.0,
        "endDate": "2023-12-30"
      },
      {
        "period": "Q1'24",
        "revenue": 12724000000.0,
        "netIncome": -381000000.0,
        "endDate": "2024-03-30",
        "opIncome": -1069000000
      },
      {
        "period": "Q2'24",
        "revenue": 12833000000.0,
        "netIncome": -1610000000.0,
        "endDate": "2024-06-29",
        "opIncome": -1964000000
      },
      {
        "period": "Q3'24",
        "revenue": 13284000000.0,
        "netIncome": -16639000000.0,
        "endDate": "2024-09-28",
        "opIncome": -9057000000
      },
      {
        "period": "Q4'24",
        "revenue": 14260000000.0,
        "netIncome": -126000000.0,
        "endDate": "2024-12-28"
      },
      {
        "period": "Q1'25",
        "revenue": 12667000000.0,
        "netIncome": -821000000.0,
        "endDate": "2025-03-29",
        "opIncome": -301000000
      },
      {
        "period": "Q2'25",
        "revenue": 12859000000.0,
        "netIncome": -2918000000.0,
        "endDate": "2025-06-28",
        "opIncome": -3176000000
      },
      {
        "period": "Q3'25",
        "revenue": 13653000000.0,
        "netIncome": 4063000000.0,
        "endDate": "2025-09-27",
        "opIncome": 683000000
      },
      {
        "period": "Q4'25",
        "revenue": 13674000000.0,
        "netIncome": -591000000.0,
        "endDate": "2025-12-27"
      },
      {
        "period": "Q1'26",
        "revenue": 13577000000.0,
        "netIncome": -3728000000.0,
        "endDate": "2026-03-28",
        "opIncome": -3136000000
      },
      {
        "period": "Q2'26",
        "revenue": 16128000000,
        "netIncome": -11033000000,
        "opIncome": 1796000000,
        "endDate": "2026-06-27"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  },
  "AMAT": {
    "annual": [
      {
        "period": "2018",
        "revenue": 17253000000,
        "netIncome": 3038000000,
        "opIncome": 4491000000,
        "eps": 3,
        "ocf": 3787000000,
        "capex": -622000000,
        "fcf": 3165000000,
        "endDate": "2018-10-28"
      },
      {
        "period": "2019",
        "revenue": 14608000000.0,
        "netIncome": 2706000000.0,
        "opIncome": 3350000000.0,
        "eps": 2.86,
        "ocf": 3247000000,
        "capex": -441000000.0,
        "fcf": 2806000000.0,
        "endDate": "2019-10-27"
      },
      {
        "period": "2020",
        "revenue": 17202000000.0,
        "netIncome": 3619000000.0,
        "opIncome": 4365000000.0,
        "eps": 3.92,
        "ocf": 3804000000,
        "capex": -422000000.0,
        "fcf": 3382000000.0,
        "endDate": "2020-10-25"
      },
      {
        "period": "2021",
        "revenue": 23063000000.0,
        "netIncome": 5888000000.0,
        "opIncome": 6889000000.0,
        "eps": 6.4,
        "ocf": 5442000000.0,
        "capex": -668000000.0,
        "fcf": 4774000000.0,
        "endDate": "2021-10-31"
      },
      {
        "period": "2022",
        "revenue": 25785000000.0,
        "netIncome": 6525000000.0,
        "opIncome": 7788000000.0,
        "eps": 7.44,
        "ocf": 5399000000,
        "capex": -787000000.0,
        "fcf": 4612000000.0,
        "endDate": "2022-10-30"
      },
      {
        "period": "2023",
        "revenue": 26517000000.0,
        "netIncome": 6856000000.0,
        "opIncome": 7654000000.0,
        "eps": 8.11,
        "ocf": 8700000000,
        "capex": -1106000000,
        "fcf": 7594000000,
        "endDate": "2023-10-29"
      },
      {
        "period": "2024",
        "revenue": 27176000000.0,
        "netIncome": 7177000000.0,
        "opIncome": 7867000000.0,
        "eps": 8.61,
        "ocf": 8677000000,
        "capex": -1190000000,
        "fcf": 7487000000,
        "endDate": "2024-10-27"
      },
      {
        "period": "2025",
        "revenue": 28368000000.0,
        "netIncome": 6998000000.0,
        "opIncome": 8289000000.0,
        "eps": 8.66,
        "ocf": 7958000000,
        "capex": -2260000000,
        "fcf": 5698000000,
        "endDate": "2025-10-26"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 6425000000.0,
        "netIncome": 1560000000.0,
        "endDate": "2023-07-30",
        "opIncome": 1802000000
      },
      {
        "period": "Q4'23",
        "revenue": 6723000000.0,
        "netIncome": 2004000000.0,
        "endDate": "2023-10-29"
      },
      {
        "period": "Q1'24",
        "revenue": 6707000000.0,
        "netIncome": 2019000000.0,
        "endDate": "2024-01-28",
        "opIncome": 1967000000
      },
      {
        "period": "Q2'24",
        "revenue": 6646000000.0,
        "netIncome": 1722000000.0,
        "endDate": "2024-04-28",
        "opIncome": 1912000000
      },
      {
        "period": "Q3'24",
        "revenue": 6778000000.0,
        "netIncome": 1705000000.0,
        "endDate": "2024-07-28",
        "opIncome": 1942000000
      },
      {
        "period": "Q4'24",
        "revenue": 7045000000.0,
        "netIncome": 1731000000.0,
        "endDate": "2024-10-27"
      },
      {
        "period": "Q1'25",
        "revenue": 7166000000.0,
        "netIncome": 1185000000.0,
        "endDate": "2025-01-26",
        "opIncome": 2175000000
      },
      {
        "period": "Q2'25",
        "revenue": 7100000000.0,
        "netIncome": 2137000000.0,
        "endDate": "2025-04-27",
        "opIncome": 2169000000
      },
      {
        "period": "Q3'25",
        "revenue": 7302000000.0,
        "netIncome": 1779000000.0,
        "endDate": "2025-07-27",
        "opIncome": 2233000000
      },
      {
        "period": "Q4'25",
        "revenue": 6800000000.0,
        "netIncome": 1897000000.0,
        "endDate": "2025-10-26"
      },
      {
        "period": "Q1'26",
        "revenue": 7012000000.0,
        "netIncome": 2026000000.0,
        "endDate": "2026-01-25",
        "opIncome": 1831000000
      },
      {
        "period": "Q2'26",
        "revenue": 7910000000.0,
        "netIncome": 2806000000.0,
        "endDate": "2026-04-26",
        "opIncome": 2523000000
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  },
  "QQQ": {
    "annual": [],
    "quarterly": [],
    "_not_applicable": true,
    "_source": "ETF - 기업 재무제표 대상 아님",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:07"
  },
  "SPY": {
    "annual": [],
    "quarterly": [],
    "_not_applicable": true,
    "_source": "ETF - 기업 재무제표 대상 아님",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:07"
  },
  "ORCL": {
    "annual": [
      {
        "period": "2019",
        "revenue": 39506000000,
        "netIncome": 11083000000,
        "opIncome": 13535000000,
        "eps": null,
        "ocf": 14551000000,
        "capex": -1660000000,
        "fcf": 12891000000,
        "endDate": "2019-05-31"
      },
      {
        "period": "2020",
        "revenue": 39068000000.0,
        "netIncome": 10135000000.0,
        "opIncome": 13896000000,
        "eps": 3.08,
        "ocf": 13139000000,
        "capex": -1564000000,
        "fcf": 11575000000,
        "endDate": "2020-05-31"
      },
      {
        "period": "2021",
        "revenue": 40479000000.0,
        "netIncome": 13746000000.0,
        "opIncome": 15213000000.0,
        "eps": 4.55,
        "ocf": 15887000000.0,
        "capex": -2135000000.0,
        "fcf": 13752000000.0,
        "endDate": "2021-05-31"
      },
      {
        "period": "2022",
        "revenue": 42440000000.0,
        "netIncome": 6717000000.0,
        "opIncome": 10926000000.0,
        "eps": 2.41,
        "ocf": 9539000000.0,
        "capex": -4511000000.0,
        "fcf": 5028000000.0,
        "endDate": "2022-05-31"
      },
      {
        "period": "2023",
        "revenue": 49954000000,
        "netIncome": 8503000000,
        "opIncome": 13093000000,
        "ocf": 17165000000,
        "capex": -8695000000,
        "fcf": 8470000000,
        "endDate": "2023-05-31"
      },
      {
        "period": "2024",
        "revenue": 52961000000,
        "netIncome": 10467000000,
        "opIncome": 15353000000,
        "ocf": 18673000000,
        "capex": -6866000000,
        "fcf": 11807000000,
        "endDate": "2024-05-31"
      },
      {
        "period": "2025",
        "revenue": 57399000000.0,
        "netIncome": 12443000000.0,
        "opIncome": 17678000000,
        "eps": 4.34,
        "ocf": 20821000000,
        "capex": -21215000000,
        "fcf": -394000000,
        "endDate": "2025-05-31"
      },
      {
        "period": "2026",
        "revenue": 67357000000.0,
        "netIncome": 17087000000.0,
        "opIncome": 20606000000,
        "eps": 5.83,
        "ocf": 31977000000,
        "capex": -55663000000,
        "fcf": -23686000000,
        "endDate": "2026-05-31"
      }
    ],
    "quarterly": [
      {
        "period": "Q1'23",
        "revenue": 12398000000.0,
        "netIncome": 1896000000,
        "endDate": "2023-02-28",
        "opIncome": 3260000000
      },
      {
        "period": "Q3'23",
        "revenue": 12453000000.0,
        "netIncome": 2420000000.0,
        "endDate": "2023-08-31",
        "opIncome": 3296000000
      },
      {
        "period": "Q4'23",
        "revenue": 12941000000.0,
        "netIncome": 2503000000.0,
        "endDate": "2023-11-30",
        "opIncome": 3622000000
      },
      {
        "period": "Q1'24",
        "revenue": 13280000000,
        "netIncome": 2401000000,
        "opIncome": 3750000000,
        "endDate": "2024-02-29"
      },
      {
        "period": "Q3'24",
        "revenue": 13307000000.0,
        "netIncome": 2929000000.0,
        "endDate": "2024-08-31",
        "opIncome": 3991000000
      },
      {
        "period": "Q4'24",
        "revenue": 14059000000.0,
        "netIncome": 3151000000.0,
        "endDate": "2024-11-30",
        "opIncome": 4220000000
      },
      {
        "period": "Q1'25",
        "revenue": 14130000000.0,
        "netIncome": 2936000000.0,
        "endDate": "2025-02-28",
        "opIncome": 4358000000
      },
      {
        "period": "Q2'25",
        "revenue": 15903000000.0,
        "netIncome": 3427000000.0,
        "endDate": "2025-05-31"
      },
      {
        "period": "Q3'25",
        "revenue": 14926000000.0,
        "netIncome": 2927000000.0,
        "endDate": "2025-08-31",
        "opIncome": 4277000000
      },
      {
        "period": "Q4'25",
        "revenue": 16058000000,
        "netIncome": 6135000000.0,
        "endDate": "2025-11-30",
        "opIncome": 4731000000
      },
      {
        "period": "Q1'26",
        "revenue": 17190000000.0,
        "netIncome": 3721000000.0,
        "endDate": "2026-02-28",
        "opIncome": 5464000000
      },
      {
        "period": "Q2'26",
        "revenue": 19184000000.0,
        "netIncome": 4304000000.0,
        "endDate": "2026-05-31"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "CRM": {
    "annual": [
      {
        "period": "2019",
        "revenue": 13282000000,
        "netIncome": 1110000000,
        "opIncome": 535000000,
        "eps": 1,
        "ocf": 3398000000,
        "capex": -595000000,
        "fcf": 2803000000,
        "endDate": "2019-01-31"
      },
      {
        "period": "2020",
        "revenue": 17098000000.0,
        "netIncome": 126000000.0,
        "opIncome": 297000000.0,
        "eps": 0.15,
        "ocf": 4331000000,
        "capex": -643000000,
        "fcf": 3688000000,
        "endDate": "2020-01-31"
      },
      {
        "period": "2021",
        "revenue": 21252000000.0,
        "netIncome": 4072000000.0,
        "opIncome": 455000000.0,
        "eps": 4.38,
        "ocf": 4801000000.0,
        "capex": -710000000.0,
        "fcf": 4091000000.0,
        "endDate": "2021-01-31"
      },
      {
        "period": "2022",
        "revenue": 26492000000.0,
        "netIncome": 1444000000.0,
        "opIncome": 548000000.0,
        "eps": 1.48,
        "ocf": 6000000000.0,
        "capex": -717000000.0,
        "fcf": 5283000000.0,
        "endDate": "2022-01-31"
      },
      {
        "period": "2023",
        "revenue": 31352000000.0,
        "netIncome": 208000000.0,
        "opIncome": 1030000000,
        "eps": 0,
        "ocf": 7111000000,
        "capex": -798000000,
        "fcf": 6313000000,
        "endDate": "2023-01-31"
      },
      {
        "period": "2024",
        "revenue": 34857000000.0,
        "netIncome": 4136000000.0,
        "opIncome": 5011000000,
        "eps": 4,
        "ocf": 10234000000,
        "capex": -736000000,
        "fcf": 9498000000,
        "endDate": "2024-01-31"
      },
      {
        "period": "2025",
        "revenue": 37895000000.0,
        "netIncome": 6197000000.0,
        "opIncome": 7205000000,
        "eps": 6,
        "ocf": 13092000000,
        "capex": -658000000,
        "fcf": 12434000000,
        "endDate": "2025-01-31"
      },
      {
        "period": "2026",
        "revenue": 41525000000.0,
        "netIncome": 7457000000.0,
        "opIncome": 8331000000,
        "eps": 7,
        "ocf": 14996000000,
        "capex": -594000000,
        "fcf": 14402000000,
        "endDate": "2026-01-31"
      }
    ],
    "quarterly": [
      {
        "period": "Q2'23",
        "revenue": 8247000000.0,
        "netIncome": 199000000.0,
        "endDate": "2023-04-30",
        "opIncome": 412000000
      },
      {
        "period": "Q3'23",
        "revenue": 8603000000.0,
        "netIncome": 1267000000.0,
        "endDate": "2023-07-31",
        "opIncome": 1476000000
      },
      {
        "period": "Q4'23",
        "revenue": 8720000000.0,
        "netIncome": 1224000000.0,
        "endDate": "2023-10-31",
        "opIncome": 1501000000
      },
      {
        "period": "Q1'24",
        "revenue": 9287000000.0,
        "netIncome": 1446000000.0,
        "endDate": "2024-01-31"
      },
      {
        "period": "Q2'24",
        "revenue": 9133000000.0,
        "netIncome": 1533000000.0,
        "endDate": "2024-04-30",
        "opIncome": 1709000000
      },
      {
        "period": "Q3'24",
        "revenue": 9325000000.0,
        "netIncome": 1429000000.0,
        "endDate": "2024-07-31",
        "opIncome": 1783000000
      },
      {
        "period": "Q4'24",
        "revenue": 9444000000.0,
        "netIncome": 1527000000.0,
        "endDate": "2024-10-31",
        "opIncome": 1893000000
      },
      {
        "period": "Q2'25",
        "revenue": 9829000000.0,
        "netIncome": 1541000000.0,
        "endDate": "2025-04-30",
        "opIncome": 1942000000
      },
      {
        "period": "Q3'25",
        "revenue": 10236000000.0,
        "netIncome": 1887000000.0,
        "endDate": "2025-07-31",
        "opIncome": 2332000000
      },
      {
        "period": "Q4'25",
        "revenue": 10259000000.0,
        "netIncome": 2086000000.0,
        "endDate": "2025-10-31",
        "opIncome": 2188000000
      },
      {
        "period": "Q1'26",
        "revenue": 13623000000.0,
        "netIncome": 2968000000.0,
        "endDate": "2026-01-31"
      },
      {
        "period": "Q2'26",
        "revenue": 11133000000.0,
        "netIncome": 2107000000.0,
        "endDate": "2026-04-30",
        "opIncome": 2347000000
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "PLTR": {
    "annual": [
      {
        "period": "2018",
        "revenue": 595409000,
        "netIncome": -580027000,
        "opIncome": -623440000,
        "ocf": -39012000,
        "capex": -13004000,
        "fcf": -52016000,
        "endDate": "2018-12-31"
      },
      {
        "period": "2019",
        "revenue": 742555000,
        "netIncome": -579646000,
        "opIncome": -576444000,
        "ocf": -165215000,
        "capex": -13096000,
        "fcf": -178311000,
        "endDate": "2019-12-31"
      },
      {
        "period": "2020",
        "revenue": 1092673000.0,
        "netIncome": -1166391000.0,
        "opIncome": -1173679000.0,
        "eps": -1.2,
        "ocf": -296608000.0,
        "capex": -12236000.0,
        "fcf": -308844000.0,
        "endDate": "2020-12-31"
      },
      {
        "period": "2021",
        "revenue": 1541889000.0,
        "netIncome": -520379000.0,
        "opIncome": -411046000.0,
        "eps": -0.27,
        "ocf": 333851000.0,
        "capex": -12627000.0,
        "fcf": 321224000.0,
        "endDate": "2021-12-31"
      },
      {
        "period": "2022",
        "revenue": 1905871000,
        "netIncome": -373705000,
        "opIncome": -161201000,
        "eps": -0.18,
        "ocf": 223737000,
        "capex": -40027000,
        "fcf": 183710000,
        "endDate": "2022-12-31"
      },
      {
        "period": "2023",
        "revenue": 2225012000,
        "netIncome": 209825000,
        "opIncome": 119966000,
        "eps": 0.09,
        "ocf": 712183000,
        "capex": -15114000,
        "fcf": 697069000,
        "endDate": "2023-12-31"
      },
      {
        "period": "2024",
        "revenue": 2865507000,
        "netIncome": 462190000,
        "opIncome": 310403000,
        "eps": 0.19,
        "ocf": 1153865000,
        "capex": -12634000,
        "fcf": 1141231000,
        "endDate": "2024-12-31"
      },
      {
        "period": "2025",
        "revenue": 4475446000,
        "netIncome": 1625033000,
        "opIncome": 1414015000,
        "eps": 0.63,
        "ocf": 2134473000,
        "capex": -33882000,
        "fcf": 2100591000,
        "endDate": "2025-12-31"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 558159000,
        "netIncome": 71505000,
        "endDate": "2023-09-30",
        "opIncome": 39983000
      },
      {
        "period": "Q4'23",
        "revenue": 608350000,
        "netIncome": 93391000,
        "endDate": "2023-12-31"
      },
      {
        "period": "Q1'24",
        "revenue": 634338000,
        "netIncome": 105530000,
        "endDate": "2024-03-31",
        "opIncome": 80881000
      },
      {
        "period": "Q2'24",
        "revenue": 678134000,
        "netIncome": 134126000,
        "endDate": "2024-06-30",
        "opIncome": 105339000
      },
      {
        "period": "Q3'24",
        "revenue": 725516000,
        "netIncome": 143525000,
        "endDate": "2024-09-30",
        "opIncome": 113140000
      },
      {
        "period": "Q4'24",
        "revenue": 827519000,
        "netIncome": 79009000,
        "endDate": "2024-12-31"
      },
      {
        "period": "Q1'25",
        "revenue": 883855000,
        "netIncome": 214031000,
        "endDate": "2025-03-31",
        "opIncome": 176048000
      },
      {
        "period": "Q2'25",
        "revenue": 1003697000,
        "netIncome": 326727000,
        "endDate": "2025-06-30",
        "opIncome": 269317000
      },
      {
        "period": "Q3'25",
        "revenue": 1181092000,
        "netIncome": 475599000,
        "endDate": "2025-09-30",
        "opIncome": 393256000
      },
      {
        "period": "Q4'25",
        "revenue": 1406802000,
        "netIncome": 608676000,
        "endDate": "2025-12-31"
      },
      {
        "period": "Q1'26",
        "revenue": 1632583000,
        "netIncome": 870527000,
        "endDate": "2026-03-31",
        "opIncome": 753998000
      },
      {
        "period": "Q2'26",
        "revenue": 1935464000,
        "netIncome": 1061890000,
        "opIncome": 912004000,
        "endDate": "2026-06-30"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "QCOM": {
    "annual": [
      {
        "period": "2018",
        "revenue": 22732000000,
        "netIncome": -4964000000,
        "opIncome": 621000000,
        "eps": -3,
        "ocf": 3908000000,
        "capex": null,
        "fcf": null,
        "endDate": "2018-09-30"
      },
      {
        "period": "2019",
        "revenue": 24273000000.0,
        "netIncome": 4386000000.0,
        "opIncome": 7667000000,
        "eps": 3,
        "ocf": 7286000000,
        "capex": null,
        "fcf": null,
        "endDate": "2019-09-29"
      },
      {
        "period": "2020",
        "revenue": 23531000000.0,
        "netIncome": 5198000000,
        "opIncome": 6255000000,
        "eps": 4,
        "ocf": 5814000000,
        "capex": null,
        "fcf": null,
        "endDate": "2020-09-27"
      },
      {
        "period": "2021",
        "revenue": 33566000000.0,
        "netIncome": 9043000000.0,
        "opIncome": 9789000000.0,
        "eps": 7.87,
        "ocf": 10536000000.0,
        "capex": null,
        "fcf": null,
        "endDate": "2021-09-26"
      },
      {
        "period": "2022",
        "revenue": 44200000000.0,
        "netIncome": 12936000000.0,
        "opIncome": 15860000000,
        "eps": 11,
        "ocf": 9096000000,
        "capex": null,
        "fcf": null,
        "endDate": "2022-09-25"
      },
      {
        "period": "2023",
        "revenue": 35820000000.0,
        "netIncome": 7232000000.0,
        "opIncome": 7788000000,
        "eps": 6,
        "ocf": 11299000000,
        "capex": null,
        "fcf": null,
        "endDate": "2023-09-24"
      },
      {
        "period": "2024",
        "revenue": 38962000000.0,
        "netIncome": 10142000000.0,
        "opIncome": 10071000000,
        "eps": 8,
        "ocf": 12202000000,
        "capex": null,
        "fcf": null,
        "endDate": "2024-09-29"
      },
      {
        "period": "2025",
        "revenue": 44284000000.0,
        "netIncome": 5541000000.0,
        "opIncome": 12355000000,
        "eps": 5,
        "ocf": 14012000000,
        "capex": null,
        "fcf": null,
        "endDate": "2025-09-28"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 8631000000.0,
        "netIncome": 1490000000.0,
        "endDate": "2023-09-24"
      },
      {
        "period": "Q4'23",
        "revenue": 9935000000.0,
        "netIncome": 2767000000.0,
        "endDate": "2023-12-24",
        "opIncome": 2928000000
      },
      {
        "period": "Q1'24",
        "revenue": 9389000000,
        "netIncome": 2326000000.0,
        "endDate": "2024-03-24",
        "opIncome": 2340000000
      },
      {
        "period": "Q2'24",
        "revenue": 9393000000.0,
        "netIncome": 2129000000.0,
        "endDate": "2024-06-23",
        "opIncome": 2221000000
      },
      {
        "period": "Q3'24",
        "revenue": 10244000000.0,
        "netIncome": 2920000000.0,
        "endDate": "2024-09-29"
      },
      {
        "period": "Q4'24",
        "revenue": 11669000000.0,
        "netIncome": 3180000000.0,
        "endDate": "2024-12-29",
        "opIncome": 3555000000
      },
      {
        "period": "Q1'25",
        "revenue": 10979000000,
        "netIncome": 2812000000.0,
        "endDate": "2025-03-30",
        "opIncome": 3120000000
      },
      {
        "period": "Q2'25",
        "revenue": 10365000000,
        "netIncome": 2666000000.0,
        "endDate": "2025-06-29",
        "opIncome": 2762000000
      },
      {
        "period": "Q3'25",
        "revenue": 11271000000.0,
        "netIncome": -3117000000.0,
        "endDate": "2025-09-28"
      },
      {
        "period": "Q4'25",
        "revenue": 12252000000.0,
        "netIncome": 3004000000.0,
        "endDate": "2025-12-28",
        "opIncome": 3366000000
      },
      {
        "period": "Q1'26",
        "revenue": 10599000000.0,
        "netIncome": 7370000000,
        "endDate": "2026-03-29",
        "opIncome": 2309000000
      },
      {
        "period": "Q2'26",
        "revenue": 9947000000,
        "netIncome": 2002000000,
        "opIncome": 1626000000,
        "endDate": "2026-06-28"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:08",
    "_data_quality_version": 3
  },
  "ARM": {
    "annual": [
      {
        "period": "2022",
        "endDate": "2022-03-31",
        "revenue": null,
        "netIncome": null,
        "opIncome": null,
        "eps": null,
        "ocf": null,
        "capex": null,
        "fcf": null,
        "pretaxIncome": null,
        "taxProvision": null,
        "normalizedIncome": null,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": null,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": 21000000.0,
        "restructuring": 26000000.0,
        "stockComp": null
      },
      {
        "period": "2023",
        "endDate": "2023-03-31",
        "revenue": 2679000000.0,
        "netIncome": 524000000.0,
        "opIncome": 678000000.0,
        "eps": 0.510694,
        "ocf": 739000000.0,
        "capex": -93000000.0,
        "fcf": 646000000.0,
        "pretaxIncome": 671000000.0,
        "taxProvision": 147000000.0,
        "normalizedIncome": 564560000.0,
        "unusualItems": -52000000.0,
        "unusualItemsExGoodwill": -52000000.0,
        "unusualTaxEffect": -11440000.0,
        "specialIncomeCharges": -7000000.0,
        "otherNonOperating": 3000000.0,
        "impairment": 0.0,
        "restructuring": 7000000.0,
        "stockComp": 79000000.0
      },
      {
        "period": "2024",
        "endDate": "2024-03-31",
        "revenue": 3233000000.0,
        "netIncome": 306000000.0,
        "opIncome": 117000000.0,
        "eps": 0.29,
        "ocf": 1090000000.0,
        "capex": -143000000.0,
        "fcf": 947000000.0,
        "pretaxIncome": 212000000.0,
        "taxProvision": -94000000.0,
        "normalizedIncome": 326540000.0,
        "unusualItems": -26000000.0,
        "unusualItemsExGoodwill": -26000000.0,
        "unusualTaxEffect": -5460000.0,
        "specialIncomeCharges": -6000000.0,
        "otherNonOperating": 11000000.0,
        "impairment": 0.0,
        "restructuring": 6000000.0,
        "stockComp": 1037000000.0
      },
      {
        "period": "2025",
        "endDate": "2025-03-31",
        "revenue": 4007000000.0,
        "netIncome": 792000000.0,
        "opIncome": 831000000.0,
        "eps": 0.61,
        "ocf": 397000000.0,
        "capex": -239000000.0,
        "fcf": 158000000.0,
        "pretaxIncome": 720000000.0,
        "taxProvision": -72000000.0,
        "normalizedIncome": 979230000.0,
        "unusualItems": -237000000.0,
        "unusualItemsExGoodwill": -237000000.0,
        "unusualTaxEffect": -49770000.0,
        "specialIncomeCharges": 0.0,
        "otherNonOperating": 10000000.0,
        "impairment": null,
        "restructuring": 0.0,
        "stockComp": 820000000.0
      },
      {
        "period": "2026",
        "endDate": "2026-03-31",
        "revenue": 4920000000.0,
        "netIncome": 904000000.0,
        "opIncome": 908000000.0,
        "eps": 0.85,
        "ocf": 1524000000.0,
        "capex": -575000000.0,
        "fcf": 949000000.0,
        "pretaxIncome": 1157000000.0,
        "taxProvision": 253000000.0,
        "normalizedIncome": 899314000.0,
        "unusualItems": 6000000.0,
        "unusualItemsExGoodwill": 6000000.0,
        "unusualTaxEffect": 1314000.0,
        "specialIncomeCharges": -8000000.0,
        "otherNonOperating": 132000000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 1052000000.0
      }
    ],
    "quarterly": [
      {
        "period": "Q1'25",
        "endDate": "2025-03-31",
        "revenue": null,
        "netIncome": null,
        "opIncome": null,
        "eps": null,
        "ocf": null,
        "capex": null,
        "fcf": null,
        "pretaxIncome": null,
        "taxProvision": null,
        "normalizedIncome": null,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": null,
        "specialIncomeCharges": 0.0,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": null
      },
      {
        "period": "Q2'25",
        "endDate": "2025-06-30",
        "revenue": 1053000000.0,
        "netIncome": 130000000.0,
        "opIncome": 114000000.0,
        "eps": 0.12,
        "ocf": 332000000.0,
        "capex": -161000000.0,
        "fcf": 171000000.0,
        "pretaxIncome": 146000000.0,
        "taxProvision": 16000000.0,
        "normalizedIncome": 126438356.164384,
        "unusualItems": 4000000.0,
        "unusualItemsExGoodwill": 4000000.0,
        "unusualTaxEffect": 438356.164384,
        "specialIncomeCharges": 0.0,
        "otherNonOperating": 1000000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 241000000.0
      },
      {
        "period": "Q3'25",
        "endDate": "2025-09-30",
        "revenue": 1135000000.0,
        "netIncome": 238000000.0,
        "opIncome": 163000000.0,
        "eps": 0.22,
        "ocf": 567000000.0,
        "capex": -140000000.0,
        "fcf": 427000000.0,
        "pretaxIncome": 302000000.0,
        "taxProvision": 64000000.0,
        "normalizedIncome": 250608000.0,
        "unusualItems": -16000000.0,
        "unusualItemsExGoodwill": -16000000.0,
        "unusualTaxEffect": -3392000.0,
        "specialIncomeCharges": null,
        "otherNonOperating": 128000000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 265000000.0
      },
      {
        "period": "Q4'25",
        "endDate": "2025-12-31",
        "revenue": 1242000000.0,
        "netIncome": 223000000.0,
        "opIncome": 191000000.0,
        "eps": 0.21,
        "ocf": 365000000.0,
        "capex": -184000000.0,
        "fcf": 181000000.0,
        "pretaxIncome": 228000000.0,
        "taxProvision": 5000000.0,
        "normalizedIncome": 223000000.0,
        "unusualItems": 0.0,
        "unusualItemsExGoodwill": 0.0,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": -6000000.0,
        "otherNonOperating": 8000000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 285000000.0
      },
      {
        "period": "Q1'26",
        "endDate": "2026-03-31",
        "revenue": 1490000000.0,
        "netIncome": 313000000.0,
        "opIncome": 440000000.0,
        "eps": 0.29,
        "ocf": 260000000.0,
        "capex": -90000000.0,
        "fcf": 170000000.0,
        "pretaxIncome": 481000000.0,
        "taxProvision": 168000000.0,
        "normalizedIncome": 301286902.286902,
        "unusualItems": 18000000.0,
        "unusualItemsExGoodwill": 18000000.0,
        "unusualTaxEffect": 6286902.286902,
        "specialIncomeCharges": -2000000.0,
        "otherNonOperating": -5000000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 261000000.0
      },
      {
        "period": "Q2'26",
        "endDate": "2026-06-30",
        "revenue": 1289000000.0,
        "netIncome": 270000000.0,
        "opIncome": 98000000.0,
        "eps": 0.25,
        "ocf": 902000000.0,
        "capex": -208000000.0,
        "fcf": 694000000.0,
        "pretaxIncome": 253000000.0,
        "taxProvision": -17000000.0,
        "normalizedIncome": 197400000.0,
        "unusualItems": 121000000.0,
        "unusualItemsExGoodwill": 121000000.0,
        "unusualTaxEffect": 48400000.0,
        "specialIncomeCharges": -7000000.0,
        "otherNonOperating": 3000000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": 343000000.0
      }
    ],
    "_currency": "USD",
    "_source": "Yahoo Finance fundamentals-timeseries",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  },
  "MRVL": {
    "annual": [
      {
        "period": "2013",
        "revenue": 3168630000,
        "netIncome": 306585000,
        "opIncome": 294657000,
        "eps": null,
        "ocf": null,
        "capex": null,
        "fcf": null,
        "endDate": "2013-02-02"
      },
      {
        "period": "2020",
        "revenue": 2699161000,
        "netIncome": 1584391000,
        "opIncome": -243358000,
        "ocf": 360297000,
        "capex": -81921000,
        "fcf": 278376000,
        "endDate": "2020-02-01"
      },
      {
        "period": "2021",
        "revenue": 2968900000,
        "netIncome": -277300000,
        "opIncome": -258400000,
        "ocf": 817300000,
        "capex": -106800000,
        "fcf": 710500000,
        "endDate": "2021-01-30"
      },
      {
        "period": "2022",
        "revenue": 4462400000,
        "netIncome": -421000000,
        "opIncome": -347700000,
        "eps": -0.53,
        "ocf": 819300000,
        "capex": -169200000,
        "fcf": 650100000,
        "endDate": "2022-01-29"
      },
      {
        "period": "2023",
        "revenue": 5919600000.0,
        "netIncome": -163500000.0,
        "opIncome": 238000000,
        "eps": -0.19,
        "ocf": 1288800000,
        "capex": -206200000,
        "fcf": 1082600000,
        "endDate": "2023-01-28"
      },
      {
        "period": "2024",
        "revenue": 5507700000.0,
        "netIncome": -933400000.0,
        "opIncome": -567700000,
        "eps": -1.08,
        "ocf": 1370500000,
        "capex": -336300000,
        "fcf": 1034200000,
        "endDate": "2024-02-03"
      },
      {
        "period": "2025",
        "revenue": 5767300000.0,
        "netIncome": -885000000.0,
        "opIncome": -720300000,
        "eps": -1.02,
        "ocf": 1681200000,
        "capex": -284600000,
        "fcf": 1396600000,
        "endDate": "2025-02-01"
      },
      {
        "period": "2026",
        "revenue": 8194600000.0,
        "netIncome": 2670100000.0,
        "opIncome": 1322900000,
        "eps": 3.07,
        "ocf": 1750500000,
        "capex": -354100000,
        "fcf": 1396400000,
        "endDate": "2026-01-31"
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 1340900000.0,
        "netIncome": -207500000.0,
        "endDate": "2023-07-29",
        "opIncome": -205700000
      },
      {
        "period": "Q4'23",
        "revenue": 1418600000.0,
        "netIncome": -164300000.0,
        "endDate": "2023-10-28",
        "opIncome": -146300000
      },
      {
        "period": "Q1'24",
        "revenue": 1426500000.0,
        "netIncome": -392700000.0,
        "endDate": "2024-02-03"
      },
      {
        "period": "Q2'24",
        "revenue": 1160900000.0,
        "netIncome": -215600000.0,
        "endDate": "2024-05-04",
        "opIncome": -152300000
      },
      {
        "period": "Q3'24",
        "revenue": 1272900000.0,
        "netIncome": -193300000.0,
        "endDate": "2024-08-03",
        "opIncome": -100400000
      },
      {
        "period": "Q4'24",
        "revenue": 1516100000.0,
        "netIncome": -676300000.0,
        "endDate": "2024-11-02",
        "opIncome": -702800000
      },
      {
        "period": "Q1'25",
        "revenue": 1817400000.0,
        "netIncome": 200200000.0,
        "endDate": "2025-02-01"
      },
      {
        "period": "Q2'25",
        "revenue": 1895300000.0,
        "netIncome": 177900000.0,
        "endDate": "2025-05-03",
        "opIncome": 270600000
      },
      {
        "period": "Q3'25",
        "revenue": 2006100000.0,
        "netIncome": 194800000.0,
        "endDate": "2025-08-02",
        "opIncome": 290100000
      },
      {
        "period": "Q4'25",
        "revenue": 2074500000.0,
        "netIncome": 1901300000.0,
        "endDate": "2025-11-01",
        "opIncome": 357800000
      },
      {
        "period": "Q1'26",
        "revenue": 2218700000.0,
        "netIncome": 396100000.0,
        "endDate": "2026-01-31"
      },
      {
        "period": "Q2'26",
        "revenue": 2417800000.0,
        "netIncome": 34500000.0,
        "endDate": "2026-05-02",
        "opIncome": 339400000
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  },
  "ASML": {
    "annual": [
      {
        "period": "2021",
        "endDate": "2021-12-31",
        "revenue": null,
        "netIncome": null,
        "opIncome": null,
        "eps": null,
        "ocf": null,
        "capex": null,
        "fcf": null,
        "pretaxIncome": null,
        "taxProvision": null,
        "normalizedIncome": null,
        "unusualItems": 213700000.0,
        "unusualItemsExGoodwill": 213700000.0,
        "unusualTaxEffect": null,
        "specialIncomeCharges": 213700000.0,
        "otherNonOperating": 213700000.0,
        "impairment": null,
        "restructuring": null,
        "stockComp": null
      },
      {
        "period": "2022",
        "endDate": "2022-12-31",
        "revenue": 21173400000.0,
        "netIncome": 5624200000.0,
        "opIncome": 6500700000.0,
        "eps": 16.07,
        "ocf": null,
        "capex": -1319300000.0,
        "fcf": 7167500000.0,
        "pretaxIncome": 6456100000.0,
        "taxProvision": 969900000.0,
        "normalizedIncome": 5624200000.0,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": 68900000.0
      },
      {
        "period": "2023",
        "endDate": "2023-12-31",
        "revenue": 27558500000.0,
        "netIncome": 7839000000.0,
        "opIncome": 9042300000.0,
        "eps": 20.59,
        "ocf": null,
        "capex": -2196200000.0,
        "fcf": 3247200000.0,
        "pretaxIncome": 9083500000.0,
        "taxProvision": 1435800000.0,
        "normalizedIncome": 7839000000.0,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": 134800000.0
      },
      {
        "period": "2024",
        "endDate": "2024-12-31",
        "revenue": 28262900000.0,
        "netIncome": 7571600000.0,
        "opIncome": 9022600000.0,
        "eps": 19.24,
        "ocf": null,
        "capex": -2083100000.0,
        "fcf": 9083100000.0,
        "pretaxIncome": 9042400000.0,
        "taxProvision": 1680600000.0,
        "normalizedIncome": 7571600000.0,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": 172600000.0
      },
      {
        "period": "2025",
        "endDate": "2025-12-31",
        "revenue": 32667300000.0,
        "netIncome": 9609400000.0,
        "opIncome": 11301400000.0,
        "eps": 24.71,
        "ocf": null,
        "capex": -1631200000.0,
        "fcf": 11027300000.0,
        "pretaxIncome": 11406100000.0,
        "taxProvision": 2013400000.0,
        "normalizedIncome": 9609400000.0,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": 202300000.0
      }
    ],
    "quarterly": [
      {
        "period": "Q1'25",
        "endDate": "2025-03-31",
        "revenue": null,
        "netIncome": null,
        "opIncome": null,
        "eps": null,
        "ocf": -58600000.0,
        "capex": -416500000.0,
        "fcf": -475100000.0,
        "pretaxIncome": null,
        "taxProvision": null,
        "normalizedIncome": null,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": null,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": 40000000.0
      },
      {
        "period": "Q2'25",
        "endDate": "2025-06-30",
        "revenue": 7691700000.0,
        "netIncome": 2290300000.0,
        "opIncome": 2664100000.0,
        "eps": 5.9,
        "ocf": 747700000.0,
        "capex": -428900000.0,
        "fcf": 318800000.0,
        "pretaxIncome": 2688900000.0,
        "taxProvision": 487400000.0,
        "normalizedIncome": 2290300000.0,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": 49000000.0
      },
      {
        "period": "Q3'25",
        "endDate": "2025-09-30",
        "revenue": 7516000000.0,
        "netIncome": 2124500000.0,
        "opIncome": 2468400000.0,
        "eps": 5.48,
        "ocf": 559100000.0,
        "capex": -315400000.0,
        "fcf": 243700000.0,
        "pretaxIncome": 2487800000.0,
        "taxProvision": 442200000.0,
        "normalizedIncome": 2124500000.0,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": 57700000.0
      },
      {
        "period": "Q4'25",
        "endDate": "2025-12-31",
        "revenue": 9718100000.0,
        "netIncome": 2839600000.0,
        "opIncome": 3431100000.0,
        "eps": 7.34,
        "ocf": 11410300000.0,
        "capex": -470400000.0,
        "fcf": 10939900000.0,
        "pretaxIncome": 3442300000.0,
        "taxProvision": 618700000.0,
        "normalizedIncome": 2839600000.0,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": 55600000.0
      },
      {
        "period": "Q1'26",
        "endDate": "2026-03-31",
        "revenue": 8766900000.0,
        "netIncome": 2756700000.0,
        "opIncome": 3157800000.0,
        "eps": 7.15,
        "ocf": -2185600000.0,
        "capex": -422300000.0,
        "fcf": -2607900000.0,
        "pretaxIncome": 3198700000.0,
        "taxProvision": 546600000.0,
        "normalizedIncome": 2756700000.0,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": 31100000.0
      },
      {
        "period": "Q2'26",
        "endDate": "2026-06-30",
        "revenue": 9326500000.0,
        "netIncome": 2917600000.0,
        "opIncome": 3456100000.0,
        "eps": 7.58,
        "ocf": null,
        "capex": null,
        "fcf": null,
        "pretaxIncome": 3486100000.0,
        "taxProvision": 609600000.0,
        "normalizedIncome": 2917600000.0,
        "unusualItems": null,
        "unusualItemsExGoodwill": null,
        "unusualTaxEffect": 0.0,
        "specialIncomeCharges": null,
        "otherNonOperating": null,
        "impairment": null,
        "restructuring": null,
        "stockComp": null
      }
    ],
    "_currency": "EUR",
    "_source": "Yahoo Finance fundamentals-timeseries",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  },
  "LRCX": {
    "annual": [
      {
        "period": "2019",
        "revenue": 9653559000.0,
        "netIncome": 2191430000.0,
        "opIncome": 2464732000,
        "eps": 13.7,
        "ocf": 3176013000,
        "capex": null,
        "fcf": null,
        "endDate": "2019-06-30"
      },
      {
        "period": "2020",
        "revenue": 10044736000.0,
        "netIncome": 2251753000.0,
        "opIncome": 2673802000,
        "eps": 15.1,
        "ocf": 2126451000,
        "capex": null,
        "fcf": null,
        "endDate": "2020-06-28"
      },
      {
        "period": "2021",
        "revenue": 14626150000.0,
        "netIncome": 3908458000.0,
        "opIncome": 4482023000.0,
        "eps": 26.9,
        "ocf": 3588163000.0,
        "capex": null,
        "fcf": null,
        "endDate": "2021-06-27"
      },
      {
        "period": "2022",
        "revenue": 17227039000.0,
        "netIncome": 4605286000.0,
        "opIncome": 5381822000.0,
        "eps": 32.75,
        "ocf": 3099674000.0,
        "capex": null,
        "fcf": null,
        "endDate": "2022-06-26"
      },
      {
        "period": "2023",
        "revenue": 17428516000.0,
        "netIncome": 4510931000.0,
        "opIncome": 5174860000,
        "eps": 33.21,
        "ocf": 5178938000,
        "capex": null,
        "fcf": null,
        "endDate": "2023-06-25"
      },
      {
        "period": "2024",
        "revenue": 14905386000.0,
        "netIncome": 3827772000.0,
        "opIncome": 4263913000,
        "eps": 29.0,
        "ocf": 4652269000,
        "capex": null,
        "fcf": null,
        "endDate": "2024-06-30"
      },
      {
        "period": "2025",
        "revenue": 18435591000.0,
        "netIncome": 5358217000.0,
        "opIncome": 5900968000,
        "eps": 4.15,
        "ocf": 6173264000,
        "capex": null,
        "fcf": null,
        "endDate": "2025-06-29"
      },
      {
        "period": "2026",
        "revenue": 23232690000,
        "netIncome": 7265396000,
        "opIncome": 8199795000,
        "ocf": 5857657000,
        "endDate": "2026-06-28"
      }
    ],
    "quarterly": [
      {
        "period": "Q2'23",
        "revenue": 3207257000.0,
        "netIncome": 802537000.0,
        "endDate": "2023-06-25"
      },
      {
        "period": "Q3'23",
        "revenue": 3482062000.0,
        "netIncome": 887398000.0,
        "endDate": "2023-09-24",
        "opIncome": 1023029000
      },
      {
        "period": "Q4'23",
        "revenue": 3758259000.0,
        "netIncome": 954266000.0,
        "endDate": "2023-12-24",
        "opIncome": 1057212000
      },
      {
        "period": "Q1'24",
        "revenue": 3793558000.0,
        "netIncome": 965826000.0,
        "endDate": "2024-03-31",
        "opIncome": 1057112000
      },
      {
        "period": "Q2'24",
        "revenue": 3871507000.0,
        "netIncome": 1020282000.0,
        "endDate": "2024-06-30"
      },
      {
        "period": "Q3'24",
        "revenue": 4167976000.0,
        "netIncome": 1116444000.0,
        "endDate": "2024-09-29",
        "opIncome": 1264197000
      },
      {
        "period": "Q4'24",
        "revenue": 4376047000.0,
        "netIncome": 1191018000.0,
        "endDate": "2024-12-29",
        "opIncome": 1333884000
      },
      {
        "period": "Q1'25",
        "revenue": 4720175000.0,
        "netIncome": 1330667000.0,
        "endDate": "2025-03-30",
        "opIncome": 1561759000
      },
      {
        "period": "Q2'25",
        "revenue": 5171393000.0,
        "netIncome": 1720088000.0,
        "endDate": "2025-06-29"
      },
      {
        "period": "Q3'25",
        "revenue": 5324173000.0,
        "netIncome": 1568660000.0,
        "endDate": "2025-09-28",
        "opIncome": 1829088000
      },
      {
        "period": "Q4'25",
        "revenue": 5344791000.0,
        "netIncome": 1593994000.0,
        "endDate": "2025-12-28",
        "opIncome": 1810203000
      },
      {
        "period": "Q1'26",
        "revenue": 5841488000.0,
        "netIncome": 1825460000.0,
        "endDate": "2026-03-29",
        "opIncome": 2047016000
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  },
  "KLAC": {
    "annual": [
      {
        "period": "2019",
        "revenue": 4568904000,
        "netIncome": 1175617000,
        "opIncome": null,
        "eps": 7,
        "ocf": 1152632000,
        "capex": -130498000,
        "fcf": 1022134000,
        "endDate": "2019-06-30"
      },
      {
        "period": "2020",
        "revenue": 5806424000.0,
        "netIncome": 1216785000.0,
        "opIncome": null,
        "eps": 7.7,
        "ocf": 1778850000,
        "capex": -152675000,
        "fcf": 1626175000,
        "endDate": "2020-06-30"
      },
      {
        "period": "2021",
        "revenue": 6918734000.0,
        "netIncome": 2078292000.0,
        "opIncome": null,
        "eps": 13.37,
        "ocf": 2185026000.0,
        "capex": -231628000.0,
        "fcf": 1953398000.0,
        "endDate": "2021-06-30"
      },
      {
        "period": "2022",
        "revenue": 9211883000.0,
        "netIncome": 3321807000.0,
        "opIncome": null,
        "eps": 21.92,
        "ocf": 3312702000.0,
        "capex": -307320000.0,
        "fcf": 3005382000.0,
        "endDate": "2022-06-30"
      },
      {
        "period": "2023",
        "revenue": 10496056000.0,
        "netIncome": 3387277000.0,
        "opIncome": null,
        "eps": 24.15,
        "ocf": 3669805000,
        "capex": -341591000,
        "fcf": 3328214000,
        "endDate": "2023-06-30"
      },
      {
        "period": "2024",
        "revenue": 9812247000.0,
        "netIncome": 2761896000.0,
        "opIncome": null,
        "eps": 20.28,
        "ocf": 3308575000,
        "capex": -277384000,
        "fcf": 3031191000,
        "endDate": "2024-06-30"
      },
      {
        "period": "2025",
        "revenue": 12156162000.0,
        "netIncome": 4061643000.0,
        "opIncome": null,
        "eps": 30.37,
        "ocf": 4081903000,
        "capex": -335259000,
        "fcf": 3746644000,
        "endDate": "2025-06-30"
      },
      {
        "period": "2026",
        "revenue": 13579476000,
        "netIncome": 4830771000,
        "ocf": 4143079000,
        "capex": -375945000,
        "fcf": 3767134000,
        "endDate": "2026-06-30"
      }
    ],
    "quarterly": [
      {
        "period": "Q2'23",
        "revenue": 2355137000.0,
        "netIncome": 684654000.0,
        "endDate": "2023-06-30"
      },
      {
        "period": "Q3'23",
        "revenue": 2396956000.0,
        "netIncome": 741375000.0,
        "endDate": "2023-09-30"
      },
      {
        "period": "Q4'23",
        "revenue": 2486726000.0,
        "netIncome": 582534000.0,
        "endDate": "2023-12-31"
      },
      {
        "period": "Q1'24",
        "revenue": 2359830000.0,
        "netIncome": 601541000.0,
        "endDate": "2024-03-31"
      },
      {
        "period": "Q2'24",
        "revenue": 2568735000.0,
        "netIncome": 836446000.0,
        "endDate": "2024-06-30"
      },
      {
        "period": "Q3'24",
        "revenue": 2841541000.0,
        "netIncome": 945851000.0,
        "endDate": "2024-09-30"
      },
      {
        "period": "Q4'24",
        "revenue": 3076851000.0,
        "netIncome": 824527000.0,
        "endDate": "2024-12-31"
      },
      {
        "period": "Q1'25",
        "revenue": 3063029000.0,
        "netIncome": 1088416000.0,
        "endDate": "2025-03-31"
      },
      {
        "period": "Q2'25",
        "revenue": 3174741000.0,
        "netIncome": 1202849000.0,
        "endDate": "2025-06-30"
      },
      {
        "period": "Q3'25",
        "revenue": 3209696000.0,
        "netIncome": 1121040000.0,
        "endDate": "2025-09-30"
      },
      {
        "period": "Q4'25",
        "revenue": 3297146000.0,
        "netIncome": 1145682000.0,
        "endDate": "2025-12-31"
      },
      {
        "period": "Q1'26",
        "revenue": 3415078000.0,
        "netIncome": 1200990000.0,
        "endDate": "2026-03-31"
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  },
  "SNDK": {
    "annual": [
      {
        "period": "2012",
        "revenue": 5052509000,
        "netIncome": 417404000,
        "opIncome": 696095000,
        "eps": null,
        "ocf": 112450000,
        "capex": null,
        "fcf": null,
        "endDate": "2012-12-30"
      },
      {
        "period": "2023",
        "revenue": 6086000000,
        "netIncome": -2143000000,
        "opIncome": -2035000000,
        "ocf": -713000000,
        "capex": -219000000,
        "fcf": -932000000,
        "endDate": "2023-06-30"
      },
      {
        "period": "2024",
        "revenue": 6663000000,
        "netIncome": -672000000,
        "opIncome": -468000000,
        "ocf": -309000000,
        "capex": -166000000,
        "fcf": -475000000,
        "endDate": "2024-06-28"
      },
      {
        "period": "2025",
        "revenue": 7355000000.0,
        "netIncome": -1641000000.0,
        "opIncome": -1377000000,
        "eps": -11.32,
        "ocf": 84000000,
        "capex": -204000000,
        "fcf": -120000000,
        "endDate": "2025-06-27"
      }
    ],
    "quarterly": [
      {
        "period": "Q2'12",
        "revenue": 1205561000,
        "netIncome": 114385000,
        "endDate": "2012-04-01"
      },
      {
        "period": "Q3'12",
        "revenue": 1273190000,
        "netIncome": 76507000,
        "endDate": "2012-09-30"
      },
      {
        "period": "Q4'12",
        "revenue": 1541503000,
        "netIncome": 213543000,
        "endDate": "2012-12-30"
      },
      {
        "period": "Q4'23",
        "revenue": 1665000000,
        "netIncome": -301000000,
        "opIncome": -245000000,
        "endDate": "2023-12-29"
      },
      {
        "period": "Q1'24",
        "revenue": 1705000000,
        "netIncome": 27000000,
        "opIncome": 65000000,
        "endDate": "2024-03-29"
      },
      {
        "period": "Q3'24",
        "revenue": 1883000000,
        "netIncome": 211000000,
        "opIncome": 291000000,
        "endDate": "2024-09-27"
      },
      {
        "period": "Q4'24",
        "revenue": 1876000000,
        "netIncome": 104000000,
        "opIncome": 195000000,
        "endDate": "2024-12-27"
      },
      {
        "period": "Q1'25",
        "revenue": 1695000000.0,
        "netIncome": -1933000000.0,
        "endDate": "2025-03-28",
        "opIncome": -1881000000
      },
      {
        "period": "Q2'25",
        "revenue": 1901000000.0,
        "netIncome": -23000000.0,
        "endDate": "2025-06-27"
      },
      {
        "period": "Q4'25",
        "revenue": 2308000000.0,
        "netIncome": 112000000.0,
        "endDate": "2025-10-03",
        "opIncome": 176000000
      },
      {
        "period": "Q1'26",
        "revenue": 3025000000.0,
        "netIncome": 803000000.0,
        "endDate": "2026-01-02",
        "opIncome": 1065000000
      },
      {
        "period": "Q2'26",
        "revenue": 5950000000.0,
        "netIncome": 3615000000.0,
        "endDate": "2026-04-03",
        "opIncome": 4111000000
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  },
  "WDC": {
    "annual": [
      {
        "period": "2018",
        "revenue": 20647000000,
        "netIncome": 675000000,
        "opIncome": 3617000000,
        "eps": 2,
        "ocf": 4205000000,
        "capex": -835000000,
        "fcf": 3370000000,
        "endDate": "2018-06-29"
      },
      {
        "period": "2019",
        "revenue": 16569000000.0,
        "netIncome": -754000000.0,
        "opIncome": 87000000.0,
        "eps": -2.58,
        "ocf": 1547000000.0,
        "capex": -876000000.0,
        "fcf": 671000000.0,
        "endDate": "2019-06-28"
      },
      {
        "period": "2020",
        "revenue": 16736000000.0,
        "netIncome": -250000000.0,
        "opIncome": 335000000,
        "eps": -0.84,
        "ocf": 824000000,
        "capex": -647000000,
        "fcf": 177000000,
        "endDate": "2020-07-03"
      },
      {
        "period": "2021",
        "revenue": 16922000000.0,
        "netIncome": 821000000.0,
        "opIncome": 1220000000.0,
        "eps": 2.66,
        "ocf": 1898000000.0,
        "capex": -1146000000.0,
        "fcf": 752000000.0,
        "endDate": "2021-07-02"
      },
      {
        "period": "2022",
        "revenue": 18793000000.0,
        "netIncome": 1546000000,
        "opIncome": 2391000000.0,
        "eps": 4.75,
        "ocf": 1880000000.0,
        "capex": -1122000000.0,
        "fcf": 758000000.0,
        "endDate": "2022-07-01"
      },
      {
        "period": "2023",
        "revenue": 12318000000.0,
        "netIncome": -1684000000,
        "opIncome": -548000000,
        "eps": -5.44,
        "ocf": -408000000,
        "capex": -821000000,
        "fcf": -1229000000,
        "endDate": "2023-06-30"
      },
      {
        "period": "2024",
        "revenue": 13003000000.0,
        "netIncome": -798000000.0,
        "opIncome": -403000000,
        "eps": -2.61,
        "ocf": -294000000,
        "capex": -487000000,
        "fcf": -781000000,
        "endDate": "2024-06-28"
      },
      {
        "period": "2025",
        "revenue": 9520000000.0,
        "netIncome": 1889000000.0,
        "opIncome": 2334000000,
        "eps": 5.12,
        "ocf": 1691000000,
        "capex": -412000000,
        "fcf": 1279000000,
        "endDate": "2025-06-27"
      }
    ],
    "quarterly": [
      {
        "period": "Q2'23",
        "revenue": 2672000000.0,
        "netIncome": -715000000.0,
        "endDate": "2023-06-30"
      },
      {
        "period": "Q3'23",
        "revenue": 2750000000.0,
        "netIncome": -685000000.0,
        "endDate": "2023-09-29",
        "opIncome": -596000000
      },
      {
        "period": "Q4'23",
        "revenue": 3032000000.0,
        "netIncome": -287000000.0,
        "endDate": "2023-12-29",
        "opIncome": -210000000
      },
      {
        "period": "Q1'24",
        "revenue": 3457000000.0,
        "netIncome": 135000000.0,
        "endDate": "2024-03-29",
        "opIncome": 94000000
      },
      {
        "period": "Q2'24",
        "revenue": 3764000000.0,
        "netIncome": 39000000.0,
        "endDate": "2024-06-28"
      },
      {
        "period": "Q3'24",
        "revenue": 4095000000.0,
        "netIncome": 493000000.0,
        "endDate": "2024-09-27",
        "opIncome": 334000000
      },
      {
        "period": "Q4'24",
        "revenue": 4285000000,
        "netIncome": 594000000,
        "opIncome": 560000000,
        "endDate": "2024-12-27"
      },
      {
        "period": "Q1'25",
        "revenue": 2294000000,
        "netIncome": 520000000,
        "opIncome": 760000000,
        "endDate": "2025-03-28"
      },
      {
        "period": "Q2'25",
        "revenue": 2605000000.0,
        "netIncome": 282000000.0,
        "endDate": "2025-06-27"
      },
      {
        "period": "Q4'25",
        "revenue": 2818000000.0,
        "netIncome": 1182000000.0,
        "endDate": "2025-10-03",
        "opIncome": 792000000
      },
      {
        "period": "Q1'26",
        "revenue": 3017000000.0,
        "netIncome": 1842000000.0,
        "endDate": "2026-01-02",
        "opIncome": 908000000
      },
      {
        "period": "Q2'26",
        "revenue": 3337000000.0,
        "netIncome": 3205000000.0,
        "endDate": "2026-04-03",
        "opIncome": 1190000000
      }
    ],
    "_currency": "USD",
    "_source": "Finnhub SEC financials-reported",
    "_annual_verified_source": "SEC Company Facts",
    "_quarterly_verified_source": "SEC Company Facts",
    "_fetched_at": 1786676870.4737787,
    "_updated_label": "2026-08-14 12:09",
    "_data_quality_version": 3
  }
};
