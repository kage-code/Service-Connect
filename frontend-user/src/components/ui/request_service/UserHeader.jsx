import React from "react";

export default function UserHeader({ name, role, image }) {
  return (
    <div className="flex items-center space-x-3">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover  "
      />
      <div>
        <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
}
