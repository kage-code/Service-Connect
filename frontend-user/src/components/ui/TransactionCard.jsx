import React from "react";

export default function TransactionCard({ title, subtitle, status, amount, date }) {
  const statusColors = {
    completed: "bg-[#0E9577]",
    waiting: "bg-yellow-500",
    scheduled: "bg-blue-500",
    cancelled: "bg-red-500",
  };

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";

  return (
    <div className="flex items-center bg-white rounded-xl shadow-md p-3">
      {/* Thumbnail */}
      <div className="w-14 h-14 bg-black rounded-xl flex-shrink-0" />

      {/* Content */}
      <div className="flex flex-col ml-3 flex-1">
        <h3 className="text-[15px] font-semibold text-[#1F2B6C]">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <div className="flex items-center justify-between mt-1">
          <span className={`${statusColors[status] || "bg-gray-400"} text-white text-xs font-medium px-3 py-1 rounded-md w-fit`}>
            {status}
          </span>
          <div className="text-right">
            {amount && <p className="text-sm font-semibold text-gray-800">₹{amount}</p>}
            <p className="text-xs text-gray-400">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}