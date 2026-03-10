  import React, { useState } from "react";
  import { SquarePen } from "lucide-react";

  export default function IncomeTable() {
    const [incomeData, setIncomeData] = useState([
      {
        id: 1,
        type: "Franchisee Registration",
        splitType: "Percentage",
        company: "100%",
        franchisee: "0%",
        dealer: "0%",
        provider: "0%",
      },
      {
        id: 2,
        type: "Service Registration",
        splitType: "Percentage",
        company: "100%",
        franchisee: "0%",
        dealer: "0%",
        provider: "0%",
      },
      {
        id: 3,
        type: "Banner Ads",
        splitType: "Percentage",
        company: "100%",
        franchisee: "0%",
        dealer: "0%",
        provider: "0%",
      },
      {
        id: 4,
        type: "Card Ads",
        splitType: "Percentage",
        company: "100%",
        franchisee: "0%",
        dealer: "0%",
        provider: "0%",
      },
      {
        id: 5,
        type: "Popup Ads",
        splitType: "Percentage",
        company: "100%",
        franchisee: "0%",
        dealer: "0%",
        provider: "0%",
      },
      {
        id: 6,
        type: "Boost Profile",
        splitType: "Percentage",
        company: "100%",
        franchisee: "0%",
        dealer: "0%",
        provider: "0%",
      },
      {
        id: 7,
        type: "Service Commission",
        splitType: "Percentage",
        company: "4%",
        franchisee: "4%",
        dealer: "2%",
        provider: "90%",
      },
      {
        id: 8,
        type: "Lead Commission",
        splitType: "Percentage",
        company: "100%",
        franchisee: "0%",
        dealer: "0%",
        provider: "0%",
      },
    ]);

    const incomeTypes = [
      "Franchisee Registration",
      "Service Registration",
      "Banner Ads",
      "Card Ads",
      "Popup Ads",
      "Boost Profile",
      "Service Commission",
      "Lead Commission",
    ];

    const splitTypes = ["Percentage", "Fixed"];

    const handleDropdownChange = (id, field, value) => {
      setIncomeData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        )
      );
    };

    return (
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mt-6">
        {/* Scrollable wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm text-[#2B3674]">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4">SL.No</th>
                <th className="py-3 px-4">Income Type</th>
                <th className="py-3 px-4">Split Type</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Franchisee</th>
                <th className="py-3 px-4">Dealer</th>
                <th className="py-3 px-4">Service Provider</th>
                <th className="py-3 px-4 text-center"></th>
              </tr>
            </thead>

            <tbody>
              {incomeData.map((item, index) => (
                <tr key={item.id} className="hover:bg-[#F9FAFF] transition">
                  <td className="py-3 px-4">{index + 1}</td>

                  {/* Income Type Dropdown */}
                  <td className="py-3 px-4">
                    <select
                      value={item.type}
                      onChange={(e) =>
                        handleDropdownChange(item.id, "type", e.target.value)
                      }
                      className="px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    >
                      {incomeTypes.map((type, i) => (
                        <option key={i} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* Split Type Dropdown */}
                  <td className="py-3 px-4">
                    <select
                      value={item.splitType}
                      onChange={(e) =>
                        handleDropdownChange(item.id, "splitType", e.target.value)
                      }
                      className="px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    >
                      {splitTypes.map((type, i) => (
                        <option key={i} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td className="py-3 px-4">{item.company}</td>
                  <td className="py-3 px-4">{item.franchisee}</td>
                  <td className="py-3 px-4">{item.dealer}</td>
                  <td className="py-3 px-4">{item.provider}</td>

                  <td className="py-3 px-4 text-center">
                    <button className="text-black hover:text-indigo-700 transition font-bold">
                      <SquarePen size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
