import { Bell, Settings, Search } from "lucide-react";
import { IoMenu } from "react-icons/io5";

export default function AdminHeader({ title = "Dashboard", onMenuClick }) {
  return (
    <header
      className="sticky top-0 z-30 bg-[#F3F4FF] flex items-center justify-between  py-4"
      style={{ marginLeft: "16px" }}
    >
      {/* Left: Mobile Menu Button + Title */}
      <div className="flex items-center gap-2">
        {/* Mobile Toggle Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-[#362ca1] p-1"
        >
          <IoMenu size={28} />
        </button>

        <h2 className="text-2xl font-bold text-[#303972]">{title}</h2>
      </div>

      {/* Right side options */}
      <div className="flex items-center gap-4">

        {/* 🔵 MOBILE SEARCH ICON */}
        <button className="p-2 rounded-full bg-white hover:bg-gray-200 transition sm:hidden">
          <Search className="w-5 h-5 text-gray-600" />
        </button>

        {/* 🔵 DESKTOP SEARCH BAR */}
        <div className="relative hidden sm:block">
          <span className="absolute left-3 top-1.5 text-blue-900">
            <Search />
          </span>
          <input
            type="text"
            placeholder="Search here..."
            className="bg-white rounded-full pl-10 pr-8 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
          {/* Notification */}
        <button className="p-2 rounded-full bg-white hover:bg-gray-200 transition">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        {/* Settings */}
        <button className="p-2 rounded-full bg-white hover:bg-gray-200 transition mr-2">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>

        {/* Profile */}
        <button className="hidden sm:flex items-center gap-2 mr-3">
          <div className="text-left">
            <p className="text-sm font-medium text-[#303972]">Nabila A.</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <img
            src="/profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>
        
        
      </div>
    </header>
  );
}
