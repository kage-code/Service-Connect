import React from "react";
import { SquarePen } from "lucide-react";

export default function ExpenseTable({ data = [] }) {
  return (
    <div className="bg-white rounded-xl shadow-md mt-6 overflow-hidden">

      {/* ✅ SCROLL WRAPPER */}
      <div className="overflow-x-auto overflow-y-auto max-h-[60vh]">
        <table className="w-full text-left text-sm text-gray-700 min-w-[800px]">
          <thead className="bg-[#F3F4FF] text-[#303972] font-semibold sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 w-12 text-center">#</th>
              <th className="px-4 py-3">Sl. No</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Invoice No</th>
              <th className="px-4 py-3">Description / Remarks</th>
              <th className="px-4 py-3 text-right">DR</th>
              <th className="px-4 py-3 text-right">CR</th>
              <th className="px-4 py-3 text-center">Invoice</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`border-t hover:bg-gray-50 transition ${
                  index % 2 === 0 ? "bg-white" : "bg-[#FAFAFF]"
                }`}
              >
                <td className="px-4 py-3 text-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-purple-600 cursor-pointer"
                  />
                </td>

                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">{item.invoiceNo}</td>
                <td className="px-4 py-3">{item.description}</td>
                <td className="px-4 py-3 text-right">{item.dr}</td>
                <td className="px-4 py-3 text-right">{item.cr}</td>
                <td className="px-4 py-3 text-center">
                  <button className="p-1.5 rounded-md hover:bg-gray-100 transition">
                    <SquarePen size={16} className="text-gray-600" />
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
