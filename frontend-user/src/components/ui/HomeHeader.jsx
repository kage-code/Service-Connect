import React, { useState } from "react";
import { Menu, Bell } from "lucide-react";
import SidebarMenu from "./sideMenu"; // ✅ import your sidebar
import { useNavigate } from "react-router-dom";

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-[#1c1e26] text-white shadow-md relative z-30">
        {/* Left side: Menu + Title */}
        <div className="flex items-center gap-3">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold tracking-wide">SERVICE CONNECT</h1>
        </div>

        {/* Right side: Notification + Profile */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/notification")}
            className="relative focus:outline-none"
          >
            <Bell className="w-6 h-6" />
            {/* Notification dot */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* ✅ Profile Icon Clickable */}
          <button
            onClick={() => navigate("/profile")}
            className="focus:outline-none"
          >
            <img
              src="/profile.png"
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Sidebar controlled by HomeHeader */}
      {menuOpen && <SidebarMenu onClose={closeMenu} />}
    </>
  );
}
