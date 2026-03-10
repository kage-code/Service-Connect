import React from "react";

export default function StatusToggle({ active, setActive }) {
  const tabs = ["Ongoing", "Completed"];

  return (
    <div className="bg-white rounded-full shadow-md p-1 w-[90%] md:w-[500px] lg:w-[600px] flex justify-between">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
            active === tab
              ? "bg-[#1D1F2A] text-white shadow-md"
              : "text-[#1D1F2A]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
