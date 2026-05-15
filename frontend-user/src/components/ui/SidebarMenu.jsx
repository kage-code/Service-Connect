import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import api from "../../api/axiosInstance";

export default function SidebarMenu() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Home");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get("/user/profile/").then((res) => setProfile(res.data)).catch(() => { });
  }, []);

  const menuItems = [
    { label: "My Profile", path: "/profile" },
    { label: "Home", path: "/home" },
    { label: "Bookings", path: "/bookingpage" },
    { label: "Active Services", path: "/servicestatus" },
    { label: "Services", path: "/servicepage" },
    { label: "Complaints", path: "/complaintpage" },
    { label: "Message", path: "/message" },
    { label: "Settings", path: "/settings" },
    { label: "Transaction", path: "/transactionpage" },
    { label: "Help Center", path: "/help" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "About Us", path: "/about" },
    { label: "Invite a Friend", path: "/invite" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className="hidden lg:flex flex-col justify-between bg-[#2E3243] text-gray-200 w-64 h-[calc(100vh-72px)] p-6 sticky top-[72px]">
      {/* Profile */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <img
            src={
              profile?.profile_image
                ? `http://127.0.0.1:8000${profile.profile_image}`
                : "/profile.png"
            }
            alt="profile"
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          <div>
            <p className="font-semibold text-white text-sm">{profile?.full_name || "User"}</p>
            <p className="text-green-400 text-xs">Online</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setActiveItem(item.label);
                navigate(item.path);
              }}
              className={`flex items-center w-full px-4 py-2 rounded-md text-left text-sm font-medium transition-all duration-200 ${activeItem === item.label
                  ? "bg-[#CFD1D4] text-[#1D1F2A]"
                  : "hover:bg-[#3C4050] hover:text-white"
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-white/80 hover:text-white px-4 py-2"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </aside>
  );
}