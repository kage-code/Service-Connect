import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

export default function PaymentScheduleList() {
  const schedules = [
    { name: "All Dealers", frequency: "Monthly" },
    { name: "All Franchisee", frequency: "Monthly" },
    { name: "All Service Providers", frequency: "Weekly" },
    { name: "Thomas", frequency: "Feb 3" },
    { name: "Banu - Service Provider", frequency: "Feb 15" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <h3 className="text-[#F05454] font-semibold mb-4">Payment Schedules</h3>

      <ul className="space-y-4">
        {schedules.map((s, i) => (
          <li
            key={i}
            className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-none"
          >
            <div>
              <p className="font-medium text-[#303972]">{s.name}</p>
              <p className="text-sm text-gray-500">{s.frequency}</p>
            </div>
            <div className="flex items-center gap-3 text-[#F05454]">
              <FaRegEdit className="cursor-pointer hover:text-[#D93C3C]" />
              <FaTrashAlt className="cursor-pointer hover:text-[#D93C3C]" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
