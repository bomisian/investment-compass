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
        "fcf": 3143000000
      },
      {
        "period": "2020",
        "revenue": 10918000000.0,
        "netIncome": 2796000000.0,
        "opIncome": 2846000000.0,
        "eps": 4.52,
        "ocf": 4761000000,
        "capex": -489000000,
        "fcf": 4272000000
      },
      {
        "period": "2021",
        "revenue": 16675000000.0,
        "netIncome": 4332000000.0,
        "opIncome": 4532000000.0,
        "eps": 6.9,
        "ocf": 5822000000.0,
        "capex": null,
        "fcf": null
      },
      {
        "period": "2022",
        "revenue": 26914000000.0,
        "netIncome": 9752000000.0,
        "opIncome": 10041000000.0,
        "eps": 3.85,
        "ocf": 9108000000.0,
        "capex": null,
        "fcf": null
      },
      {
        "period": "2023",
        "revenue": 26974000000.0,
        "netIncome": 4368000000.0,
        "opIncome": 4224000000.0,
        "eps": 1.74,
        "ocf": 5641000000,
        "capex": null,
        "fcf": null
      },
      {
        "period": "2024",
        "revenue": 60922000000.0,
        "netIncome": 29760000000.0,
        "opIncome": 32972000000.0,
        "eps": 11.93,
        "ocf": 28090000000,
        "capex": null,
        "fcf": null
      },
      {
        "period": "2025",
        "revenue": 130497000000.0,
        "netIncome": 72880000000.0,
        "opIncome": 81453000000.0,
        "eps": 2.94,
        "ocf": 64089000000,
        "capex": null,
        "fcf": null
      },
      {
        "period": "2026",
        "revenue": 215938000000.0,
        "netIncome": 120067000000.0,
        "opIncome": 130387000000,
        "eps": 4.9,
        "ocf": 102718000000,
        "capex": null,
        "fcf": null
      }
    ],
    "quarterly": [
      {
        "period": "Q1'23",
        "revenue": 6051000000.0,
        "netIncome": 1414000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 18120000000.0,
        "netIncome": 9243000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 22103000000.0,
        "netIncome": 12285000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 26044000000.0,
        "netIncome": 14881000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 30040000000.0,
        "netIncome": 16599000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 35082000000.0,
        "netIncome": 19309000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 39331000000.0,
        "netIncome": 22091000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 44062000000.0,
        "netIncome": 18775000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 46743000000.0,
        "netIncome": 26422000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 57006000000.0,
        "netIncome": 31910000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 68127000000.0,
        "netIncome": 42960000000.0
      },
      {
        "period": "Q2'26",
        "revenue": 81615000000.0,
        "netIncome": 58321000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
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
        "fcf": 64121000000
      },
      {
        "period": "2019",
        "revenue": 260174000000.0,
        "netIncome": 55256000000.0,
        "opIncome": 63930000000.0,
        "eps": 11.89,
        "ocf": 69391000000,
        "capex": -10495000000,
        "fcf": 58896000000
      },
      {
        "period": "2020",
        "revenue": 274515000000.0,
        "netIncome": 57411000000.0,
        "opIncome": 66288000000.0,
        "eps": 3.28,
        "ocf": 80674000000,
        "capex": -7309000000,
        "fcf": 73365000000
      },
      {
        "period": "2021",
        "revenue": 365817000000.0,
        "netIncome": 94680000000.0,
        "opIncome": 108949000000.0,
        "eps": 5.61,
        "ocf": 104038000000,
        "capex": -11085000000,
        "fcf": 92953000000
      },
      {
        "period": "2022",
        "revenue": 394328000000.0,
        "netIncome": 99803000000.0,
        "opIncome": 119437000000.0,
        "eps": 6.11,
        "ocf": 122151000000,
        "capex": -10708000000,
        "fcf": 111443000000
      },
      {
        "period": "2023",
        "revenue": 383285000000.0,
        "netIncome": 96995000000.0,
        "opIncome": 114301000000.0,
        "eps": 6.13,
        "ocf": 110543000000,
        "capex": -10959000000,
        "fcf": 99584000000
      },
      {
        "period": "2024",
        "revenue": 391035000000.0,
        "netIncome": 93736000000.0,
        "opIncome": 123216000000.0,
        "eps": 6.08,
        "ocf": 118254000000,
        "capex": -9447000000,
        "fcf": 108807000000
      },
      {
        "period": "2025",
        "revenue": 416161000000.0,
        "netIncome": 112010000000.0,
        "opIncome": 133050000000.0,
        "eps": 7.46,
        "ocf": 111482000000,
        "capex": -12715000000,
        "fcf": 98767000000
      }
    ],
    "quarterly": [
      {
        "period": "Q2'23",
        "revenue": 94836000000.0,
        "netIncome": 24160000000.0
      },
      {
        "period": "Q3'23",
        "revenue": 89498000000.0,
        "netIncome": 22956000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 119575000000.0,
        "netIncome": 33916000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 90753000000.0,
        "netIncome": 23636000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 85777000000.0,
        "netIncome": 21448000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 94930000000.0,
        "netIncome": 14736000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 124300000000.0,
        "netIncome": 36330000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 95359000000.0,
        "netIncome": 24780000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 94036000000.0,
        "netIncome": 23434000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 102466000000.0,
        "netIncome": 27466000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 143756000000.0,
        "netIncome": 42097000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 111184000000.0,
        "netIncome": 29578000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
  },
  "GOOGL": {
    "annual": [
      {
        "period": "2018",
        "revenue": 136819000000,
        "netIncome": 30736000000,
        "opIncome": 26321000000,
        "eps": 43,
        "ocf": 47971000000,
        "capex": -25139000000,
        "fcf": 22832000000
      },
      {
        "period": "2019",
        "revenue": 161857000000.0,
        "netIncome": 34343000000.0,
        "opIncome": 34231000000.0,
        "eps": 49,
        "ocf": 54520000000,
        "capex": -23548000000.0,
        "fcf": 30972000000.0
      },
      {
        "period": "2020",
        "revenue": 182527000000.0,
        "netIncome": 40269000000.0,
        "opIncome": 41224000000.0,
        "eps": 58,
        "ocf": 65124000000,
        "capex": -22281000000,
        "fcf": 42843000000
      },
      {
        "period": "2021",
        "revenue": 257637000000.0,
        "netIncome": 76033000000.0,
        "opIncome": 78714000000.0,
        "eps": 112,
        "ocf": 91652000000,
        "capex": -24640000000,
        "fcf": 67012000000
      },
      {
        "period": "2022",
        "revenue": 282836000000.0,
        "netIncome": 59972000000.0,
        "opIncome": 74842000000.0,
        "eps": 4,
        "ocf": 91495000000,
        "capex": -31485000000,
        "fcf": 60010000000
      },
      {
        "period": "2023",
        "revenue": 307394000000.0,
        "netIncome": 73795000000.0,
        "opIncome": 84293000000.0,
        "eps": 5,
        "ocf": 101746000000,
        "capex": -32251000000,
        "fcf": 69495000000
      },
      {
        "period": "2024",
        "revenue": 350018000000.0,
        "netIncome": 100118000000.0,
        "opIncome": 112390000000.0,
        "eps": 8.04,
        "ocf": 125299000000,
        "capex": -52535000000,
        "fcf": 72764000000
      },
      {
        "period": "2025",
        "revenue": 402836000000.0,
        "netIncome": 132170000000.0,
        "opIncome": 129039000000.0,
        "eps": 10.81,
        "ocf": 164713000000,
        "capex": -91447000000,
        "fcf": 73266000000
      }
    ],
    "quarterly": [
      {
        "period": "Q2'23",
        "revenue": 74604000000.0,
        "netIncome": 18368000000.0
      },
      {
        "period": "Q3'23",
        "revenue": 76693000000.0,
        "netIncome": 19689000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 86310000000.0,
        "netIncome": 20687000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 80539000000.0,
        "netIncome": 23662000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 84742000000.0,
        "netIncome": 23619000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 88268000000.0,
        "netIncome": 26301000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 96469000000.0,
        "netIncome": 26536000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 90234000000.0,
        "netIncome": 34540000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 96428000000.0,
        "netIncome": 28196000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 102345000000.0,
        "netIncome": 34979000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 113829000000.0,
        "netIncome": 34455000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 109896000000.0,
        "netIncome": 62578000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
  },
  "MSFT": {
    "annual": [
      {
        "period": "2018",
        "revenue": 110360000000.0,
        "netIncome": 16571000000,
        "opIncome": 35058000000,
        "eps": 2,
        "ocf": 43884000000,
        "capex": -11632000000,
        "fcf": 32252000000
      },
      {
        "period": "2019",
        "revenue": 125843000000.0,
        "netIncome": 39240000000,
        "opIncome": 42959000000,
        "eps": 5,
        "ocf": 52185000000,
        "capex": -13925000000,
        "fcf": 38260000000
      },
      {
        "period": "2020",
        "revenue": 143015000000.0,
        "netIncome": 44281000000.0,
        "opIncome": 52959000000.0,
        "eps": 5.76,
        "ocf": 60675000000,
        "capex": -15441000000,
        "fcf": 45234000000
      },
      {
        "period": "2021",
        "revenue": 168088000000.0,
        "netIncome": 61271000000.0,
        "opIncome": 69916000000.0,
        "eps": 8.05,
        "ocf": 76740000000,
        "capex": -20622000000,
        "fcf": 56118000000
      },
      {
        "period": "2022",
        "revenue": 198270000000.0,
        "netIncome": 72738000000.0,
        "opIncome": 83383000000.0,
        "eps": 9.65,
        "ocf": 89035000000,
        "capex": -23886000000,
        "fcf": 65149000000
      },
      {
        "period": "2023",
        "revenue": 211915000000.0,
        "netIncome": 72361000000.0,
        "opIncome": 88523000000.0,
        "eps": 9.68,
        "ocf": 87582000000,
        "capex": -28107000000,
        "fcf": 59475000000
      },
      {
        "period": "2024",
        "revenue": 245122000000.0,
        "netIncome": 88136000000.0,
        "opIncome": 109433000000.0,
        "eps": 11.8,
        "ocf": 118548000000,
        "capex": -44477000000,
        "fcf": 74071000000
      },
      {
        "period": "2025",
        "revenue": 281724000000.0,
        "netIncome": 101832000000.0,
        "opIncome": 128528000000.0,
        "eps": 13.64,
        "ocf": 136162000000,
        "capex": -64551000000,
        "fcf": 71611000000
      }
    ],
    "quarterly": [
      {
        "period": "Q3'22",
        "revenue": 50122000000.0,
        "netIncome": 17556000000.0
      },
      {
        "period": "Q4'22",
        "revenue": 52747000000.0,
        "netIncome": 16425000000.0
      },
      {
        "period": "Q1'23",
        "revenue": 52857000000.0,
        "netIncome": 18299000000.0
      },
      {
        "period": "Q2'23",
        "revenue": 56189000000.0,
        "netIncome": 20081000000.0
      },
      {
        "period": "Q3'23",
        "revenue": 56517000000.0,
        "netIncome": 22291000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 65585000000.0,
        "netIncome": 24667000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 69632000000.0,
        "netIncome": 24108000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 70066000000.0,
        "netIncome": 25824000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 76441000000.0,
        "netIncome": 27233000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 77673000000.0,
        "netIncome": 27747000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 81273000000.0,
        "netIncome": 38458000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 82886000000.0,
        "netIncome": 31778000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
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
        "fcf": 17296000000
      },
      {
        "period": "2019",
        "revenue": 280522000000.0,
        "netIncome": 11588000000.0,
        "opIncome": 14541000000.0,
        "eps": 23,
        "ocf": 38514000000,
        "capex": -16861000000,
        "fcf": 21653000000
      },
      {
        "period": "2020",
        "revenue": 386064000000.0,
        "netIncome": 21331000000.0,
        "opIncome": 22899000000.0,
        "eps": 41.83,
        "ocf": 66064000000.0,
        "capex": -40140000000.0,
        "fcf": 25924000000.0
      },
      {
        "period": "2021",
        "revenue": 469822000000.0,
        "netIncome": 33364000000.0,
        "opIncome": 24879000000.0,
        "eps": 64.81,
        "ocf": 46327000000.0,
        "capex": -61053000000.0,
        "fcf": -14726000000.0
      },
      {
        "period": "2022",
        "revenue": 513983000000.0,
        "netIncome": -2722000000.0,
        "opIncome": 12248000000.0,
        "eps": 0,
        "ocf": 46752000000,
        "capex": -63645000000,
        "fcf": -16893000000
      },
      {
        "period": "2023",
        "revenue": 574785000000.0,
        "netIncome": 30425000000.0,
        "opIncome": 36852000000.0,
        "eps": 2,
        "ocf": 84946000000,
        "capex": -52729000000,
        "fcf": 32217000000
      },
      {
        "period": "2024",
        "revenue": 637959000000.0,
        "netIncome": 59248000000.0,
        "opIncome": 68593000000.0,
        "eps": 5,
        "ocf": 115877000000,
        "capex": -82999000000,
        "fcf": 32878000000
      },
      {
        "period": "2025",
        "revenue": 716924000000.0,
        "netIncome": 77670000000.0,
        "opIncome": 79975000000.0,
        "eps": 7,
        "ocf": 139514000000,
        "capex": -131819000000,
        "fcf": 7695000000
      }
    ],
    "quarterly": [
      {
        "period": "Q4'22",
        "revenue": 149204000000.0,
        "netIncome": 278000000.0
      },
      {
        "period": "Q1'23",
        "revenue": 127358000000.0,
        "netIncome": 3172000000.0
      },
      {
        "period": "Q2'23",
        "revenue": 134383000000.0,
        "netIncome": 6750000000.0
      },
      {
        "period": "Q3'23",
        "revenue": 143083000000.0,
        "netIncome": 9879000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 169961000000.0,
        "netIncome": 10624000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 143313000000.0,
        "netIncome": 10431000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 147977000000.0,
        "netIncome": 13485000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 155667000000.0,
        "netIncome": 17127000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 167702000000.0,
        "netIncome": 18164000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 180169000000.0,
        "netIncome": 21187000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 213386000000.0,
        "netIncome": 21192000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 181519000000.0,
        "netIncome": 30255000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
  },
  "TSM": {
    "annual": [],
    "quarterly": [],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
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
        "fcf": 8245000000
      },
      {
        "period": "2019",
        "revenue": 22597000000.0,
        "netIncome": 2724000000.0,
        "opIncome": 3444000000.0,
        "eps": 6.43,
        "ocf": 9697000000.0,
        "capex": -432000000.0,
        "fcf": 9265000000.0
      },
      {
        "period": "2020",
        "revenue": 23888000000.0,
        "netIncome": 2960000000.0,
        "opIncome": 4014000000.0,
        "eps": 6.33,
        "ocf": 12061000000,
        "capex": -463000000,
        "fcf": 11598000000
      },
      {
        "period": "2021",
        "revenue": 27450000000.0,
        "netIncome": 6736000000.0,
        "opIncome": 8519000000.0,
        "eps": 15.0,
        "ocf": 13764000000.0,
        "capex": -443000000.0,
        "fcf": 13321000000.0
      },
      {
        "period": "2022",
        "revenue": 33203000000.0,
        "netIncome": 11495000000.0,
        "opIncome": 14225000000.0,
        "eps": 26.53,
        "ocf": 16736000000,
        "capex": -424000000,
        "fcf": 16312000000
      },
      {
        "period": "2023",
        "revenue": 35819000000.0,
        "netIncome": 14082000000.0,
        "opIncome": 16207000000.0,
        "eps": 32.98,
        "ocf": 18085000000,
        "capex": -452000000,
        "fcf": 17633000000
      },
      {
        "period": "2024",
        "revenue": 51574000000.0,
        "netIncome": 5895000000.0,
        "opIncome": 13463000000.0,
        "eps": 1.23,
        "ocf": 19962000000,
        "capex": -548000000,
        "fcf": 19414000000
      },
      {
        "period": "2025",
        "revenue": 63887000000.0,
        "netIncome": 23126000000.0,
        "opIncome": 25484000000.0,
        "eps": 4.77,
        "ocf": 27537000000,
        "capex": -623000000,
        "fcf": 26914000000
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 8876000000.0,
        "netIncome": 3303000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 9295000000.0,
        "netIncome": 3524000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 11961000000.0,
        "netIncome": 1325000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 12487000000.0,
        "netIncome": 2121000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 13072000000.0,
        "netIncome": -1875000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 14054000000.0,
        "netIncome": 4324000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 14916000000.0,
        "netIncome": 5503000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 15004000000.0,
        "netIncome": 4965000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 15952000000.0,
        "netIncome": 4140000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 18015000000.0,
        "netIncome": 8518000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 19311000000.0,
        "netIncome": 7349000000.0
      },
      {
        "period": "Q2'26",
        "revenue": 22187000000.0,
        "netIncome": 9310000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
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
        "fcf": 15359000000
      },
      {
        "period": "2019",
        "revenue": 70697000000.0,
        "netIncome": 18485000000.0,
        "opIncome": 23986000000,
        "eps": 6,
        "ocf": 36314000000,
        "capex": -15102000000,
        "fcf": 21212000000
      },
      {
        "period": "2020",
        "revenue": 85965000000.0,
        "netIncome": 29146000000.0,
        "opIncome": 32671000000,
        "eps": 10,
        "ocf": 38747000000,
        "capex": -15115000000,
        "fcf": 23632000000
      },
      {
        "period": "2021",
        "revenue": 117929000000.0,
        "netIncome": 39370000000.0,
        "opIncome": 46753000000.0,
        "eps": 13,
        "ocf": 57683000000,
        "capex": -18567000000,
        "fcf": 39116000000
      },
      {
        "period": "2022",
        "revenue": 116609000000.0,
        "netIncome": 23200000000.0,
        "opIncome": 28944000000.0,
        "eps": 8,
        "ocf": 50475000000,
        "capex": -31431000000,
        "fcf": 19044000000
      },
      {
        "period": "2023",
        "revenue": 134902000000.0,
        "netIncome": 39098000000.0,
        "opIncome": 46751000000.0,
        "eps": 14,
        "ocf": 71113000000,
        "capex": -27266000000,
        "fcf": 43847000000
      },
      {
        "period": "2024",
        "revenue": 164501000000.0,
        "netIncome": 62360000000.0,
        "opIncome": 69380000000.0,
        "eps": 23.86,
        "ocf": 91328000000,
        "capex": -37256000000,
        "fcf": 54072000000
      },
      {
        "period": "2025",
        "revenue": 200966000000.0,
        "netIncome": 60458000000.0,
        "opIncome": 83276000000.0,
        "eps": 23.49,
        "ocf": 115800000000,
        "capex": -69691000000,
        "fcf": 46109000000
      }
    ],
    "quarterly": [
      {
        "period": "Q2'23",
        "revenue": 32000000000.0,
        "netIncome": 7789000000.0
      },
      {
        "period": "Q3'23",
        "revenue": 34146000000.0,
        "netIncome": 11583000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 40111000000.0,
        "netIncome": 14017000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 36455000000.0,
        "netIncome": 12369000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 39072000000.0,
        "netIncome": 13465000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 40589000000.0,
        "netIncome": 15688000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 48385000000.0,
        "netIncome": 20838000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 42314000000.0,
        "netIncome": 16644000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 47516000000.0,
        "netIncome": 18337000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 51243000000.0,
        "netIncome": 2709000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 59893000000.0,
        "netIncome": 22768000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 56311000000.0,
        "netIncome": 26773000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
  },
  "TSLA": {
    "annual": [
      {
        "period": "2018",
        "revenue": 21461268000.0,
        "netIncome": -976091000,
        "opIncome": -388073000,
        "eps": -5,
        "ocf": 2097802000,
        "capex": -2100724000,
        "fcf": -2922000
      },
      {
        "period": "2019",
        "revenue": 21483000000.0,
        "netIncome": -862000000,
        "opIncome": -69000000,
        "eps": -4,
        "ocf": 2405000000,
        "capex": -1327000000,
        "fcf": 1078000000
      },
      {
        "period": "2020",
        "revenue": 28178000000.0,
        "netIncome": 721000000,
        "opIncome": 1994000000,
        "eps": 0,
        "ocf": 5943000000,
        "capex": -3157000000,
        "fcf": 2786000000
      },
      {
        "period": "2021",
        "revenue": 101050000000.0,
        "netIncome": 5519000000.0,
        "opIncome": 6523000000,
        "eps": 4,
        "ocf": 11497000000,
        "capex": -6482000000,
        "fcf": 5015000000
      },
      {
        "period": "2022",
        "revenue": 10000000000.0,
        "netIncome": 12556000000.0,
        "opIncome": 13656000000,
        "eps": 3,
        "ocf": 14724000000,
        "capex": -7158000000,
        "fcf": 7566000000
      },
      {
        "period": "2023",
        "revenue": 96773000000.0,
        "netIncome": 14997000000.0,
        "opIncome": 8891000000,
        "eps": 4,
        "ocf": 13256000000,
        "capex": -8898000000,
        "fcf": 4358000000
      },
      {
        "period": "2024",
        "revenue": 97690000000.0,
        "netIncome": 7091000000.0,
        "opIncome": 7076000000,
        "eps": 2,
        "ocf": 14923000000,
        "capex": -11339000000,
        "fcf": 3584000000
      },
      {
        "period": "2025",
        "revenue": 94827000000.0,
        "netIncome": 3794000000.0,
        "opIncome": 4355000000,
        "eps": 1,
        "ocf": 14747000000,
        "capex": -8527000000,
        "fcf": 6220000000
      }
    ],
    "quarterly": [
      {
        "period": "Q1'23",
        "revenue": 3366000000.0,
        "netIncome": 2513000000.0
      },
      {
        "period": "Q2'23",
        "revenue": 3659000000.0,
        "netIncome": 2703000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 25167000000.0,
        "netIncome": 7928000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 21301000000.0,
        "netIncome": 1129000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 25500000000.0,
        "netIncome": 1478000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 25182000000.0,
        "netIncome": 2167000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 25707000000.0,
        "netIncome": 2317000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 19335000000.0,
        "netIncome": 409000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 22496000000.0,
        "netIncome": 1172000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 28095000000.0,
        "netIncome": 1373000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 24901000000.0,
        "netIncome": 840000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 22387000000.0,
        "netIncome": 477000000
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
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
        "fcf": 8521000000
      },
      {
        "period": "2019",
        "revenue": 23406000000,
        "netIncome": 6313000000,
        "opIncome": 7376000000,
        "eps": 5,
        "ocf": 13189000000,
        "capex": -9780000000,
        "fcf": 3409000000
      },
      {
        "period": "2020",
        "revenue": 21435000000.0,
        "netIncome": 2687000000.0,
        "opIncome": 3003000000.0,
        "eps": 2.37,
        "ocf": 8306000000,
        "capex": -8223000000,
        "fcf": 83000000
      },
      {
        "period": "2021",
        "revenue": 27705000000.0,
        "netIncome": 5861000000.0,
        "opIncome": 6283000000.0,
        "eps": 5.14,
        "ocf": 12468000000,
        "capex": -10030000000,
        "fcf": 2438000000
      },
      {
        "period": "2022",
        "revenue": 30758000000.0,
        "netIncome": 8687000000.0,
        "opIncome": 9702000000.0,
        "eps": 7.75,
        "ocf": 15181000000,
        "capex": -12067000000,
        "fcf": 3114000000
      },
      {
        "period": "2023",
        "revenue": 15540000000.0,
        "netIncome": -5833000000.0,
        "opIncome": -5745000000.0,
        "eps": -5.34,
        "ocf": 1559000000,
        "capex": -7676000000,
        "fcf": -6117000000
      },
      {
        "period": "2024",
        "revenue": 25111000000.0,
        "netIncome": 778000000.0,
        "opIncome": 1304000000.0,
        "eps": 0.7,
        "ocf": 8507000000,
        "capex": -8386000000,
        "fcf": 121000000
      },
      {
        "period": "2025",
        "revenue": 37378000000.0,
        "netIncome": 8539000000.0,
        "opIncome": 9770000000.0,
        "eps": 7.59,
        "ocf": 17525000000,
        "capex": -15857000000,
        "fcf": 1668000000
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 4010000000.0,
        "netIncome": -1430000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 4726000000.0,
        "netIncome": -1234000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 5824000000.0,
        "netIncome": 793000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 6811000000.0,
        "netIncome": 332000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 7750000000.0,
        "netIncome": 887000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 8709000000.0,
        "netIncome": 1870000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 8053000000.0,
        "netIncome": 1583000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 9301000000.0,
        "netIncome": 1885000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 11315000000.0,
        "netIncome": 3201000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 13643000000.0,
        "netIncome": 5240000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 23860000000.0,
        "netIncome": 13785000000.0
      },
      {
        "period": "Q2'26",
        "revenue": 41456000000.0,
        "netIncome": 28243000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
  },
  "AMD": {
    "annual": [
      {
        "period": "2017",
        "revenue": 5329000000,
        "netIncome": 43000000,
        "opIncome": 204000000,
        "eps": 0,
        "ocf": 68000000,
        "capex": -113000000,
        "fcf": -45000000
      },
      {
        "period": "2018",
        "revenue": 6475000000,
        "netIncome": 337000000,
        "opIncome": 451000000,
        "eps": 0,
        "ocf": 34000000,
        "capex": -163000000,
        "fcf": -129000000
      },
      {
        "period": "2019",
        "revenue": 6731000000.0,
        "netIncome": 341000000.0,
        "opIncome": 631000000.0,
        "eps": 0.3,
        "ocf": 493000000,
        "capex": -217000000,
        "fcf": 276000000
      },
      {
        "period": "2020",
        "revenue": 9763000000.0,
        "netIncome": 2490000000.0,
        "opIncome": 1369000000.0,
        "eps": 2.06,
        "ocf": 1071000000,
        "capex": -294000000,
        "fcf": 777000000
      },
      {
        "period": "2021",
        "revenue": 16434000000.0,
        "netIncome": 3162000000.0,
        "opIncome": 3648000000.0,
        "eps": 2.57,
        "ocf": 3521000000,
        "capex": -301000000,
        "fcf": 3220000000
      },
      {
        "period": "2023",
        "revenue": 22680000000.0,
        "netIncome": 854000000.0,
        "opIncome": 401000000.0,
        "eps": 0.53,
        "ocf": 1667000000,
        "capex": -546000000,
        "fcf": 1121000000
      },
      {
        "period": "2024",
        "revenue": 25785000000.0,
        "netIncome": 1641000000.0,
        "opIncome": 1900000000.0,
        "eps": 1.0,
        "ocf": 3041000000,
        "capex": -636000000,
        "fcf": 2405000000
      },
      {
        "period": "2025",
        "revenue": 34639000000.0,
        "netIncome": 4335000000.0,
        "opIncome": 3694000000.0,
        "eps": 2.65,
        "ocf": 7709000000,
        "capex": -974000000,
        "fcf": 6735000000
      }
    ],
    "quarterly": [
      {
        "period": "Q3'22",
        "revenue": 5565000000.0,
        "netIncome": 66000000.0
      },
      {
        "period": "Q3'23",
        "revenue": 5800000000.0,
        "netIncome": 299000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 6168000000.0,
        "netIncome": 667000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 5473000000.0,
        "netIncome": 123000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 5835000000.0,
        "netIncome": 265000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 6819000000.0,
        "netIncome": 771000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 7658000000.0,
        "netIncome": 482000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 7438000000.0,
        "netIncome": 709000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 7685000000.0,
        "netIncome": 872000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 9246000000.0,
        "netIncome": 1243000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 10270000000.0,
        "netIncome": 1511000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 10253000000.0,
        "netIncome": 1383000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
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
        "fcf": 14251000000
      },
      {
        "period": "2019",
        "revenue": 71965000000.0,
        "netIncome": 21048000000.0,
        "opIncome": 22035000000.0,
        "eps": 4.71,
        "ocf": 33145000000,
        "capex": -16213000000,
        "fcf": 16932000000
      },
      {
        "period": "2020",
        "revenue": 77867000000.0,
        "netIncome": 20899000000.0,
        "opIncome": 23678000000.0,
        "eps": 4.94,
        "ocf": 35384000000,
        "capex": -14259000000,
        "fcf": 21125000000
      },
      {
        "period": "2021",
        "revenue": 79024000000.0,
        "netIncome": 19868000000.0,
        "opIncome": 19456000000.0,
        "eps": 4.86,
        "ocf": 29991000000,
        "capex": -18733000000,
        "fcf": 11258000000
      },
      {
        "period": "2022",
        "revenue": 63054000000.0,
        "netIncome": 8014000000.0,
        "opIncome": 2334000000.0,
        "eps": 1.94,
        "ocf": 15433000000,
        "capex": -24844000000,
        "fcf": -9411000000
      },
      {
        "period": "2023",
        "revenue": 54228000000.0,
        "netIncome": 1689000000.0,
        "opIncome": 93000000.0,
        "eps": 0.4,
        "ocf": 11471000000,
        "capex": -25750000000,
        "fcf": -14279000000
      },
      {
        "period": "2024",
        "revenue": 53101000000.0,
        "netIncome": -18756000000.0,
        "opIncome": -11678000000.0,
        "eps": -4.38,
        "ocf": 8288000000,
        "capex": -23944000000,
        "fcf": -15656000000
      },
      {
        "period": "2025",
        "revenue": 52853000000.0,
        "netIncome": -267000000.0,
        "opIncome": -2214000000.0,
        "eps": -0.06,
        "ocf": 9697000000,
        "capex": -14646000000,
        "fcf": -4949000000
      }
    ],
    "quarterly": [
      {
        "period": "Q2'23",
        "revenue": 11715000000,
        "netIncome": -2758000000.0
      },
      {
        "period": "Q3'23",
        "revenue": 14158000000,
        "netIncome": 297000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 15406000000.0,
        "netIncome": 2669000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 12724000000.0,
        "netIncome": -381000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 12833000000.0,
        "netIncome": -1610000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 13284000000.0,
        "netIncome": -16639000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 14260000000.0,
        "netIncome": -126000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 12667000000.0,
        "netIncome": -821000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 12859000000.0,
        "netIncome": -2918000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 13653000000.0,
        "netIncome": 4063000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 13674000000.0,
        "netIncome": -591000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 13577000000.0,
        "netIncome": -3728000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
  },
  "WMT": {
    "annual": [
      {
        "period": "2018",
        "revenue": 500343000000,
        "netIncome": 9862000000,
        "opIncome": 20437000000,
        "eps": 3,
        "ocf": 28337000000,
        "capex": -10051000000,
        "fcf": 18286000000
      },
      {
        "period": "2019",
        "revenue": 510329000000,
        "netIncome": 6670000000,
        "opIncome": 21957000000,
        "eps": 2,
        "ocf": 27753000000,
        "capex": -10344000000,
        "fcf": 17409000000
      },
      {
        "period": "2020",
        "revenue": 519926000000.0,
        "netIncome": 14881000000.0,
        "opIncome": 20568000000.0,
        "eps": 5.19,
        "ocf": 25255000000,
        "capex": -10705000000.0,
        "fcf": 14550000000.0
      },
      {
        "period": "2021",
        "revenue": 555233000000.0,
        "netIncome": 13510000000.0,
        "opIncome": 22548000000.0,
        "eps": 4.75,
        "ocf": 36074000000.0,
        "capex": -10264000000.0,
        "fcf": 25810000000.0
      },
      {
        "period": "2022",
        "revenue": 567762000000.0,
        "netIncome": 13673000000.0,
        "opIncome": 25942000000.0,
        "eps": 4.87,
        "ocf": 24181000000.0,
        "capex": -13106000000.0,
        "fcf": 11075000000.0
      },
      {
        "period": "2024",
        "revenue": 642637000000.0,
        "netIncome": 15511000000.0,
        "opIncome": 27012000000.0,
        "eps": 1.91,
        "ocf": 35726000000,
        "capex": -20606000000,
        "fcf": 15120000000
      },
      {
        "period": "2025",
        "revenue": 674538000000.0,
        "netIncome": 19436000000.0,
        "opIncome": 29348000000.0,
        "eps": 2.41,
        "ocf": 36443000000,
        "capex": -23783000000,
        "fcf": 12660000000
      },
      {
        "period": "2026",
        "revenue": 706413000000.0,
        "netIncome": 21893000000.0,
        "opIncome": 29825000000.0,
        "eps": 2.73,
        "ocf": 41565000000,
        "capex": -26642000000,
        "fcf": 14923000000
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 160280000000.0,
        "netIncome": 7891000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 159439000000.0,
        "netIncome": 453000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 171914000000.0,
        "netIncome": 5494000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 159938000000.0,
        "netIncome": 5104000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 167767000000.0,
        "netIncome": 4501000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 168003000000.0,
        "netIncome": 4577000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 178830000000.0,
        "netIncome": 5254000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 163981000000.0,
        "netIncome": 4487000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 175750000000.0,
        "netIncome": 7026000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 177769000000.0,
        "netIncome": 6143000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 188913000000.0,
        "netIncome": 4237000000.0
      },
      {
        "period": "Q2'26",
        "revenue": 175684000000.0,
        "netIncome": 5330000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
  },
  "AMAT": {
    "annual": [
      {
        "period": "2018",
        "revenue": 17253000000,
        "netIncome": 3313000000,
        "opIncome": 4796000000,
        "eps": 3,
        "ocf": 3787000000,
        "capex": -622000000,
        "fcf": 3165000000
      },
      {
        "period": "2019",
        "revenue": 14608000000.0,
        "netIncome": 2706000000.0,
        "opIncome": 3350000000.0,
        "eps": 2.86,
        "ocf": 3247000000,
        "capex": -441000000.0,
        "fcf": 2806000000.0
      },
      {
        "period": "2020",
        "revenue": 17202000000.0,
        "netIncome": 3619000000.0,
        "opIncome": 4365000000.0,
        "eps": 3.92,
        "ocf": 3804000000,
        "capex": -422000000.0,
        "fcf": 3382000000.0
      },
      {
        "period": "2021",
        "revenue": 23063000000.0,
        "netIncome": 5888000000.0,
        "opIncome": 6889000000.0,
        "eps": 6.4,
        "ocf": 5442000000.0,
        "capex": -668000000.0,
        "fcf": 4774000000.0
      },
      {
        "period": "2022",
        "revenue": 25785000000.0,
        "netIncome": 6525000000.0,
        "opIncome": 7788000000.0,
        "eps": 7.44,
        "ocf": 5399000000,
        "capex": -787000000.0,
        "fcf": 4612000000.0
      },
      {
        "period": "2023",
        "revenue": 26517000000.0,
        "netIncome": 6856000000.0,
        "opIncome": 7654000000.0,
        "eps": 8.11,
        "ocf": 8700000000,
        "capex": -1106000000,
        "fcf": 7594000000
      },
      {
        "period": "2024",
        "revenue": 27176000000.0,
        "netIncome": 7177000000.0,
        "opIncome": 7867000000.0,
        "eps": 8.61,
        "ocf": 8677000000,
        "capex": -1190000000,
        "fcf": 7487000000
      },
      {
        "period": "2025",
        "revenue": 28368000000.0,
        "netIncome": 6998000000.0,
        "opIncome": 8289000000.0,
        "eps": 8.66,
        "ocf": 7958000000,
        "capex": -2260000000,
        "fcf": 5698000000
      }
    ],
    "quarterly": [
      {
        "period": "Q3'23",
        "revenue": 6425000000.0,
        "netIncome": 1560000000.0
      },
      {
        "period": "Q4'23",
        "revenue": 6723000000.0,
        "netIncome": 2004000000.0
      },
      {
        "period": "Q1'24",
        "revenue": 6707000000.0,
        "netIncome": 2019000000.0
      },
      {
        "period": "Q2'24",
        "revenue": 6646000000.0,
        "netIncome": 1722000000.0
      },
      {
        "period": "Q3'24",
        "revenue": 6778000000.0,
        "netIncome": 1705000000.0
      },
      {
        "period": "Q4'24",
        "revenue": 7045000000.0,
        "netIncome": 1731000000.0
      },
      {
        "period": "Q1'25",
        "revenue": 7166000000.0,
        "netIncome": 1185000000.0
      },
      {
        "period": "Q2'25",
        "revenue": 7100000000.0,
        "netIncome": 2137000000.0
      },
      {
        "period": "Q3'25",
        "revenue": 7302000000.0,
        "netIncome": 1779000000.0
      },
      {
        "period": "Q4'25",
        "revenue": 6800000000.0,
        "netIncome": 1897000000.0
      },
      {
        "period": "Q1'26",
        "revenue": 7012000000.0,
        "netIncome": 2026000000.0
      },
      {
        "period": "Q2'26",
        "revenue": 7910000000.0,
        "netIncome": 2806000000.0
      }
    ],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:34"
  },
  "QQQ": {
    "annual": [],
    "quarterly": [],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:35"
  },
  "SPY": {
    "annual": [],
    "quarterly": [],
    "_fetched_at": 1784784845.5567763,
    "_updated_label": "2026-07-23 14:35"
  }
};
