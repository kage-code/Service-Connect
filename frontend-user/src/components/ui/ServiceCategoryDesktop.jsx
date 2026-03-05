import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCategoryDesktop({ categories = [] }) {
    const navigate = useNavigate();
  return (
    
    <div className="mt-10">
        
      {/* 🔹 Header */}
      <div className="flex justify-between items-center mb-4 mx-20">
        <h2 className="text-xl font-bold text-[#1D1F2A]">
          Services Category
        </h2>
        <button onClick={() => navigate("/allcategory")} className="text-sm text-[#1D1F2A] font-medium hover:underline" >
            
          SEE ALL →
        </button>
      </div>

      {/* 🔹 Categories Row */}
      <div className="flex items-center gap-8 justify-center flex-wrap">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer group"
          >
            {/* Icon Circle */}
            <div className="w-30 h-30 rounded-3xl overflow-hidden bg-white shadow-md border-3 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-26 h-26 object-cover"
              />
            </div>

            {/* Label */}
            <p className="mt-2 text-sm font-medium text-[#1D1F2A]">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
