import React from "react";
import { CheckCircle, Star } from "lucide-react";

export default function ServiceCard({ category, title, rating }) {
  return (
    <div className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden h-30">
      {/* Left Thumbnail */}
      <div className="w-20 h-30 bg-black flex-shrink-0" />

      {/* Content */}
      <div className="flex-1 p-3 relative">
        {/* Check icon (top-right) */}
        <CheckCircle className="absolute top-2 right-2 text-green-500 w-5 h-5" />

        {/* Category */}
        <p className="text-xs font-semibold text-orange-500">{category}</p>

        {/* Title */}
        <p className="text-sm font-semibold text-gray-800 truncate">
          {title}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-1 text-yellow-500 text-xs font-medium">
          <Star className="w-4 h-4 mr-1 fill-yellow-500 text-yellow-500" />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}
