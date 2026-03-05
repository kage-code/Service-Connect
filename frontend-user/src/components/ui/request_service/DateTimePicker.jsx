import React from "react";

export default function DateTimePicker({ label }) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="date"
          className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#111827] focus:outline-none bg-white"
        />
        <input
          type="time"
          className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#111827] focus:outline-none bg-white"
        />
      </div>
    </div>
  );
}
