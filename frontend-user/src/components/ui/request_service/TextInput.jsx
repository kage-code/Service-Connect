import React from "react";

export default function TextInput({ label, placeholder, multiline }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      {multiline ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          className="w-full text-sm p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#111827] focus:outline-none bg-white"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-white text-sm p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#111827] focus:outline-none"
        />
      )}
    </div>
  );
}
