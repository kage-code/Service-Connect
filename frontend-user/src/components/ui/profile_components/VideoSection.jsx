import React from "react";

export default function VideosSection({ title = "Videos", count = 8 }) {
  return (
    <div className="bg-white mx-4 mt-4 rounded-2xl p-4 shadow">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <div className="grid grid-cols-4 gap-2">
        {Array(count).fill(null).map((_, i) => (
          <div key={i} className="w-full aspect-square bg-gray-300 rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-4.586-2.663A1 1 0 009 9.305v5.39a1 1 0 001.166.9l4.586-2.663a1 1 0 000-1.732z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
