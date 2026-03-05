import React from "react";

export default function TransactionCard({ title, subtitle, status }) {
  return (
    <div className="flex items-center bg-white rounded-xl shadow-md p-3">
      {/* Thumbnail */}
      <div className="w-14 h-14 bg-black rounded-xl flex-shrink-0" />

      {/* Content */}
      <div className="flex flex-col ml-3">
        <h3 className="text-[15px] font-semibold text-[#1F2B6C]">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <span className="bg-[#0E9577] text-white text-xs font-medium px-3 py-1 rounded-md w-fit mt-1">
          {status}
        </span>
      </div>
    </div>
  );
}
