import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarMenu() {
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
    "Transaction History",
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
    else if (item === "Transaction History") navigate("/transactionpage");
    else if (item === "Message") navigate("/chatcall");
    else if (item === "Invite a Friend") navigate("/invite");
    else navigate(`/${item.toLowerCase().replace(/ /g, "")}`);
  };

  return (
    <aside className="hidden lg:flex flex-col justify-between bg-[#2E3243] text-gray-200 w-64 h-[calc(100vh-72px)] p-6 sticky top-[72px] ">
      {/* Logo section removed, handled by header */}
      <div className="mt-30">
        {/* Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`flex items-center w-full px-4 py-2 rounded-md text-left text-sm font-medium transition-all duration-200
                ${
                  activeItem === item
                    ? "bg-[#CFD1D4] text-[#1D1F2A]"
                    : "hover:bg-[#3C4050] hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
