import React, { useState } from "react";
import { ChevronDown, SquarePen, CheckCircle } from "lucide-react";

export default function AdCard() {
  const [sortOpen, setSortOpen] = useState(false);

  // Dummy data for ads
  const adCards = [
    { type: "Card Ad", title: "Title", adId: "Ad ID", views: 420, hits: 50 },
    { type: "Banner Ad", title: "Title", adId: "Ad ID", views: 420, hits: 50 },
    { type: "Banner Ad", title: "frih", adId: "eAd ID", views: 420, hits: 50 },
    { type: "Card Ad", title: "Title", adId: "Ad ID", views: 420, hits: 50 },
    { type: "Banner Ad", title: "Title", adId: "Ad ID", views: 420, hits: 50 },
    { type: "Card Ad", title: "frih", adId: "eAd ID", views: 420, hits: 50 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Top Controls */}
      <div className="flex items-center justify-end mb-6 gap-3 relative">
        {/* Sort Button */}
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center border border-[#4E3BB0] text-[#4E3BB0] rounded-full px-4 py-2 text-sm font-medium hover:bg-[#F3F0FF] transition"
          >
            Sort
            <ChevronDown size={14} className="ml-1" />
          </button>

          {sortOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-md text-sm z-10">
              {["A-Z", "Z-A", "Newest", "Oldest"].map((option) => (
                <div
                  key={option}
                  onClick={() => setSortOpen(false)}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add New Button */}
        <button className="flex items-center bg-[#4E3BB0] text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-indigo-700 transition">
          Add New
          <ChevronDown size={14} className="ml-1" />
        </button>
      </div>

      {/* Ad Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-30">
        {adCards.map((ad, i) => (
          <div
            key={i}
            className="flex items-center bg-[#F7F6FE] rounded-2xl shadow-sm relative hover:shadow-md transition"
          >
            {/* Image Section */}
            <div className="w-28 h-28 rounded-l-2xl overflow-hidden bg-black flex-shrink-0">
              <img
                src={ad.image || "/blackimg.png"}
                alt={ad.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="ml-4 flex-1">
              {/* Type + Edit icon same line */}
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-[#FF5E5E] flex items-center gap-1">
                  {ad.type}
                  <SquarePen
                    size={14}
                    className="text-gray-600 cursor-pointer hover:text-[#4E3BB0] transition"
                  />
                </p>
              </div>

              {/* Title */}
              <h4 className="text-sm font-semibold text-[#303972]">
                {ad.title}
              </h4>

              {/* Ad ID */}
              <p className="text-xs text-gray-500 mb-1">{ad.adId}</p>

              {/* Stats */}
              <div className="flex text-xs text-black gap-2 justify-center font-bold">
                <span>{ad.views} Views</span>
                <span>|</span>
                <span>{ad.hits} Hits</span>
              </div>
            </div>

            {/* Status Icon */}
            <CheckCircle
              size={18}
              className="text-green-500 absolute top-3 right-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
