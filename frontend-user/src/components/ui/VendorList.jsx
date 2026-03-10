import React from "react";
import { BiSolidBookmarkMinus, BiBookmarkMinus } from "react-icons/bi";
export default function VendorList({ vendors, onBookmarkToggle }) {
  return (
    <div className="px-4 mt-5 space-y-4">
      {vendors.map((v) => (
        <div
          key={v.id}
          className="relative bg-white rounded-2xl shadow-md flex p-3 items-center space-x-3 hover:shadow-lg transition-all"
        >
          {/* Bookmark button (top-right) */}
          <button
            aria-label={v.bookmarked ? "Remove bookmark" : "Add bookmark"}
            className="absolute right-3 top-3 p-1 rounded-full hover:bg-gray-100"
            onClick={() => onBookmarkToggle?.(v.id)}
          >
            {v.bookmarked ? (
              <BiSolidBookmarkMinus />
            ) : (
              <BiBookmarkMinus/>
            )}
          </button>

          {/* Placeholder image */}
          {v.image ? (
  <img
    src={v.image}
    alt={v.name}
    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
  />
    ) : (
  <div className="w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0" />
        )}


          {/* Vendor Info */}
          <div className="flex-1">
            <p className="text-xs text-red-500 font-semibold">{v.distance}</p>
            <p className="font-semibold text-sm">{v.name}</p>
            <p className="text-sm font-semibold text-gray-800">{v.price}</p>
            <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
              <span>⭐ {v.rating}</span>
              <span className="text-gray-300">|</span>
              <span>{v.reviews}</span>
            </div>
          </div>

          {/* Badge */}
          <div className="flex items-start">
            <div className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-md">
              Booked Once
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
