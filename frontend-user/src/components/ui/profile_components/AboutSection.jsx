import React from "react";

export default function AboutSection({ about }) {
  return (
    <div className="bg-white mx-4 rounded-2xl p-4 shadow">
      <h3 className="text-sm font-semibold mb-1">About</h3>
      <p className="text-xs text-gray-600 leading-relaxed">{about}</p>
    </div>
  );
}
