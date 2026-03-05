import React from "react";
import { FaStar, FaRegCommentDots, FaVideo, FaClock } from "react-icons/fa";

export default function ProfileCard({
  distance = "3 km away",
  name = "William S. Cunningham",
  serviceType = "Plumber",
  rating = 4.2,
  totalReviews = 32,
  mediaCount = 21,
  serviceCount = 2,
}) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md p-4 mx-4 mt-48 z-10">
      {/* Top Row */}
      <div className="flex justify-between text-sm font-medium mb-1">
        <span className="text-[#FF6A00]">{distance}</span>
        <div className="flex items-center space-x-1 text-gray-700">
          <FaStar className="text-yellow-400" />
          <span>{rating}</span>
          <span className="text-gray-500">| {totalReviews} Reviews</span>
        </div>
      </div>

      {/* Name & Service Type */}
      <div className="mb-3">
        <h2 className="text-base font-semibold text-[#1D1F2A]">
          {name}
        </h2>
        <p className="text-sm text-gray-500">{serviceType}</p>
      </div>

      {/* Media & Services Row */}
      <div className="flex items-center text-gray-600 text-sm space-x-3">
        <div className="flex items-center space-x-1">
          <FaVideo className="text-gray-500" />
          <span>{mediaCount} videos & images</span>
        </div>
        <span className="text-gray-300">|</span>
        <div className="flex items-center space-x-1">
          <FaClock className="text-gray-500" />
          <span>{serviceCount} Services listed</span>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="absolute -top-6 right-4 bg-[#1D1F2A] text-white rounded-full p-3 shadow-lg">
        <FaRegCommentDots className="w-5 h-5" />
      </button>
    </div>
  );
}
