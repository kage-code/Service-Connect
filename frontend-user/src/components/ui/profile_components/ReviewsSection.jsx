import React from "react";

export default function ReviewsSection({ reviews, className = "" }) {
  const fallbackImage = "https://via.placeholder.com/40x40?text=👤";

  return (
    <div className={`rounded-2xl p-4 shadow ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold">Reviews</h3>
        <button className="text-xs text-gray-500 font-medium">SEE ALL</button>
      </div>

      <div className="space-y-3">
        {reviews.map((rev, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-xl p-3 flex space-x-3 items-start bg-white"
          >
            <img
              src={rev.image || fallbackImage}
              alt={rev.name}
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold">{rev.name}</span>
                <span className="text-xs text-yellow-500 font-medium">
                  ⭐ {rev.rating}
                </span>
              </div>
              <p className="text-xs text-gray-600">{rev.comment}</p>
              <p className="text-[10px] text-gray-400 mt-1">{rev.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
