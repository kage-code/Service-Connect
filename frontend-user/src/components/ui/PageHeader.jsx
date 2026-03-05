import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { IoIosArrowDropleft } from "react-icons/io";
export default function PageHeader({ 
  title = "Page Title", 
  showSearch = false, 
  showFilter = false 
}) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-[#111827] text-white px-4 py-3 shadow-sm">
      {/* Left: Back Arrow + Title */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => navigate(-1)}
          className="p-1 rounded-full hover:bg-gray-700 transition"
        >
          <IoIosArrowDropleft size={30} />
        </button>
        <h1 className="text-sm md:text-base font-semibold">{title}</h1>
      </div>

      {/* Right: Search + Filter */}
      <div className="flex items-center space-x-3">
        {showFilter && (
          <button
            onClick={() => navigate("/filterpage")}
            className="p-1 rounded-full hover:bg-gray-700 transition"
          >
            <SlidersHorizontal size={18} />
          </button>
        )}
        {showSearch && (
          <button
            onClick={() => navigate("/search")}
            className="p-1 rounded-full hover:bg-gray-700 transition"
          >
            <Search size={18} />
          </button>
        )}
      </div>
    </header>
  );
}
