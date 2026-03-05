import React, { useState } from "react";

export default function AllowLocationPopup() {
  const [manualLocation, setManualLocation] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-3xl shadow-lg p-6 w-80 text-center  ">
        {/* Title */}
        <h2 className="text-black font-semibold text-xl mb-5">Allow Location</h2>

        {/* Allow Button */}
        <button className="bg-[#1D1F2A] text-white min-w-45 py-3 rounded-full font-medium text-base shadow-md hover:bg-gray-800 transition">
          Allow
        </button>

        {/* Manual Entry Section */}
        <div className="mt-5 text-left">
          <label className="block text-[#1D1F2A] text-sm mb-2">
            Manually Enter Location
          </label>
          <input
            type="text"
            placeholder="Value"
            value={manualLocation}
            onChange={(e) => setManualLocation(e.target.value)}
            className="w-full bg-[#736A68] text-white placeholder-white px-4 py-2 rounded-md focus:outline-none text-sm"
          />
        </div>
      </div>
    </div>
  );
}
