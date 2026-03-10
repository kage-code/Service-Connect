import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";

export default function ProfileHeader({ title = "PROFILE", onBack }) {
  return (
    <div className="flex justify-between items-center px-4 py-4 bg-[#1D1F2A] text-white">
      <div className="flex items-center space-x-3">
        <button onClick={onBack} className="text-white">
          <IoIosArrowDropleft className="h-7 w-7"/>
        </button>
        <h1 className="text-sm font-semibold tracking-wide">{title}</h1>
      </div>
      {/* <button className="p-1 rounded-full hover:bg-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button> */}
    </div>
  );
}
