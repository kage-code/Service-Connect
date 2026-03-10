import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";;
import { FaEllipsisV } from "react-icons/fa";

export default function CommonHeader({ title, showMenu = false, onMenuClick }) {
  const navigate = useNavigate();

  return (
    <header className="bg-[#1D1F2A] text-white flex items-center justify-between px-4 py-4 shadow-md sticky top-0 z-50">
      {/* Back Icon */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center text-white"
      >
        <IoIosArrowDropleft className="text-3xl" />
      </button>

      {/* Title aligned to left */}
      <h1 className="text-lg font-semibold ml-2 flex-1 text-left">
        {title}
      </h1>

      {/* Optional Menu Icon */}
      {showMenu && (
        <button onClick={onMenuClick}>
          <FaEllipsisV className="text-white h-5 w-5" />
        </button>
      )}
    </header>
  );
}
