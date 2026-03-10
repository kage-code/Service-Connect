import React from "react";
import { SquarePen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdCategory() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      {/* Header */}
      <div className="flex items-center mb-4 gap-3">
        <h3 className="text-lg font-bold text-[#303972]">Ad Category</h3>
        <SquarePen
          size={18}
          className="text-[#303972] cursor-pointer hover:text-[#4E3BB0] transition"
        />
      </div>

      {/* Category list */}
      <div className="flex flex-col gap-3">
        <div
          onClick={() => navigate("/admin/bannerads")}
          className="bg-[#F1F0FF] hover:bg-[#E6E4FF] px-4 py-3 rounded-3xl
                     cursor-pointer text-center text-sm font-medium transition"
        >
          Banner Ad
        </div>

        <div
          onClick={() => navigate("/admin/ads/card")}
          className="bg-[#F1F0FF] hover:bg-[#E6E4FF] px-4 py-3 rounded-3xl
                     cursor-pointer text-center text-sm font-medium transition"
        >
          Card Ad
        </div>

        <div
          onClick={() => navigate("/admin/ads/popup")}
          className="bg-[#F1F0FF] hover:bg-[#E6E4FF] px-4 py-3 rounded-3xl
                     cursor-pointer text-center text-sm font-medium transition"
        >
          Popup Ad
        </div>

        <div
          onClick={() => navigate("/admin/ads/boost")}
          className="bg-[#F1F0FF] hover:bg-[#E6E4FF] px-4 py-3 rounded-3xl
                     cursor-pointer text-center text-sm font-medium transition"
        >
          Boost Profile
        </div>
      </div>
    </div>
  );
}
