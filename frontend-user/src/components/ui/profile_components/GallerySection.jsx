import React from "react";

export default function GallerySection({ title = "Images", count = 8 }) {
  return (
    <div className="bg-white mx-4 mt-4 rounded-2xl p-4 shadow">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <div className="grid grid-cols-4 gap-2">
        {Array(count).fill(null).map((_, i) => (
          <div key={i} className="w-full aspect-square bg-gray-200 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
