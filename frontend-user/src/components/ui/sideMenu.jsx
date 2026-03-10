import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, X } from "lucide-react";

export default function SidebarMenu({ onClose }) {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("My Profile");

  const menuItems = [
    "My Profile",
    "Home",
    "Bookings",
    "Active Services",
    "Services",
    "Complaints",
    "Message",
    "Settings",
    "Transaction",
    "History",
    "Help Center",
    "Terms & Conditions",
    "About Us",
    "Invite a Friend",
  ];

  const handleClick = (item) => {
    setActiveItem(item);
    if (item === "My Profile") navigate("/profile");
    else if (item === "Settings") navigate("/settings");
    else if (item === "Bookings") navigate("/bookingpage");
    else if (item === "Services") navigate("/servicepage");
    else if (item === "Complaints") navigate("/complaintpage");
    else if (item === "Terms & Conditions") navigate("/terms");
    else if (item === "About Us") navigate("/about");
    else if (item === "Help Center") navigate("/help");
    else if (item === "Transaction") navigate("/transactionpage");
    else if (item === "Message") navigate("/chatcall");
    else if (item === "Invite a Friend") navigate("/invite");
    else navigate(`/${item.toLowerCase().replace(/ /g, "")}`);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-start bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mt-6 mb-6 ml-4 w-[85%] sm:w-[320px] rounded-2xl bg-gray-800/50 backdrop-blur-lg text-white p-5 shadow-2xl animate-slideIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/profile.png"
                alt="profile"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border border-white" />
            </div>
            <div>
              <p className="font-semibold text-red-400">Stone Stellar</p>
              <p className="text-yellow-400 text-sm">UID: CU102</p>
              <p className="text-green-400 text-sm">Online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-2 mt-2 max-h-[70vh] overflow-y-auto pr-1">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`text-left px-4 py-2 rounded-md transition-all ${
                activeItem === item
                  ? "bg-white text-gray-900 font-semibold"
                  : "hover:bg-white/20"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Logout */}
        <button
          onClick={() => console.log("Logout")}
          className="flex items-center gap-2 mt-6 text-white/80 hover:text-white px-4"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
