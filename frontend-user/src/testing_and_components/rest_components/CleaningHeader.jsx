import React, { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AdminCategoryGrid from "./AdminCategoryGrid";

export default function CleaningHeader() {
  const [sortOpen, setSortOpen] = useState(false);
  const [mainOpen, setMainOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Sort");
  const [mainOption, setMainOption] = useState("Cleaning");

  const [categories, setCategories] = useState([
    { title: "Home Services", image: "/blackimg.png", type: "Main" },
    { title: "House Keeping", image: "/blackimg.png", type: "Main" },
    { title: "Accounting", image: "/blackimg.png", type: "Main" },
    { title: "Doctor", image: "/blackimg.png", type: "Sub" },
    { title: "Cleaning", image: "/blackimg.png", type: "Sub" },
  ]);

  // ✅ Reactively sort + filter categories
  const filteredCategories = useMemo(() => {
    let result = [...categories];

    if (mainOption !== "Main") {
      result = result.filter((c) => c.type === mainOption);
    }

    if (sortOption === "A-Z") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "Z-A") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [categories, sortOption, mainOption]);

  return (
    <div className="bg-[#f4f5ff] p-6 rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#303972]">Cleaning</h2>

        {/* Controls */}
        <div className="flex gap-3 relative">
          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setSortOpen((prev) => !prev);
                setMainOpen(false);
              }}
              className="border rounded-full px-4 py-2 text-sm flex items-center gap-1 bg-white hover:bg-gray-50 min-w-[100px] justify-between"
            >
              {sortOption}
              {sortOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {sortOpen && (
              <div className="absolute right-0 mt-1 w-[120px] bg-white border rounded-lg shadow-lg text-sm z-20">
                {["Sort", "A-Z", "Z-A"].map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setSortOption(opt);
                      setSortOpen(false);
                    }}
                    className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                      sortOption === opt ? "bg-gray-50 font-medium" : ""
                    }`}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Main Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setMainOpen((prev) => !prev);
                setSortOpen(false);
              }}
              className="border rounded-full px-4 py-2 text-sm flex items-center gap-1 bg-[#4E3BB0] text-white hover:bg-[#43319b] min-w-[100px] justify-between"
            >
              {mainOption}
              {mainOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {mainOpen && (
              <div className="absolute right-0 mt-1 w-[120px] bg-white border rounded-lg shadow-lg text-sm z-20">
                {["Main", "Main", "Sub"].map((opt, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setMainOption(opt);
                      setMainOpen(false);
                    }}
                    className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                      mainOption === opt ? "bg-gray-50 font-medium" : ""
                    }`}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <AdminCategoryGrid
        categories={filteredCategories}
        setCategories={setCategories}
      />
    </div>
  );
}
