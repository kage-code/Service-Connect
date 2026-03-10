import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCategory({ categories }) {
  const navigate = useNavigate(); // ✅ enables navigation

  return (
    <div className="mx-4 mt-5">
      {/* Header row */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-base">Services Category</h3>
        <button
          onClick={() => navigate("/allcategory")} // ✅ navigate to AllCategory
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
        >
          SEE ALL
        </button>
      </div>

      {/* Scrollable categories */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[70px] space-y-1"
          >
            <div className="w-14 h-14 bg-white shadow-md rounded-full flex items-center justify-center border-4">
              <button>
                <img
                src={cat.icon}
                alt={cat.name}
                className="w-10 h-10 object-contain"
              />
            </button>
              
            </div>
            <p className="text-xs">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
   

  );
}
