import React from "react";
import { FaImage } from "react-icons/fa";

export default function MediaUpload() {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-2 block">
        Images & Videos
      </label>
      <div className="flex items-center gap-3 flex-wrap">
        <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center">
          <FaImage className="text-gray-500 text-lg" />
        </div>
        <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center">
          <FaImage className="text-gray-500 text-lg" />
        </div>
        <button className="w-14 h-14 rounded-xl border-2 border-dashed border-gray-300 text-gray-500 text-2xl font-bold flex items-center justify-center hover:border-gray-500 transition">
          +
        </button>
      </div>
    </div>
  );
}
