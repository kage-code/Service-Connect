// TopProviders.jsx
import React from "react";

export default function TopProviders({ providers }) {
  return (
    <div className="mx-4 mt-5 mb-20">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-base">Top Service Providers</h3>
        <p className="text-sm text-gray-500">SEE ALL</p>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {providers.map((name, i) => (
          <div key={i} className="flex flex-col items-center flex-shrink-0">
            <div className="w-30 h-30 rounded-3xl overflow-hidden bg-gray-300">
              {/* Replace with actual image if available */}
              <img
                // src={`/providers/${name.toLowerCase()}.png`}
                src="/blackimg.png"
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs mt-1">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
