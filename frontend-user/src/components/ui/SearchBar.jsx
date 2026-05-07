import React from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/**
 * Reusable Search Bar Component
 * Props:
 * - placeholder: text inside the input
 * - onChange: callback when user types
 */
export default function SearchBar({ placeholder = "Search for..", onChange, onKeyDown, value }) {
  return (
    <div className="flex justify-center mt-3">
      <div className="flex items-center gap-2 bg-[#736A68] rounded-xl shadow-sm p-2 justify-center max-w-8xl w-full mx-4">
        <FaSearch className="text-white" />
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          className="w-full outline-none text-sm placeholder-white text-white bg-transparent"
        />
        <FaSlidersH
          className="text-gray-700 border border-white h-8 w-8 p-1 bg-white rounded-[10px] cursor-pointer hover:scale-105 transition"
          onClick={() => navigate("/filterpage")}
        />
      </div>
    </div>
  );
}