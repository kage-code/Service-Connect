import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, X } from "lucide-react";
import api from "../../api/axiosInstance";

export default function SidebarMenu({ onClose }) {
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
    { label: "Services", path: "/servicespage" },
    { label: "Complaints", path: "/complaintpage" },
    { label: "Message", path: "/message" },
    { label: "Settings", path: "/settings" },
    { label: "Transaction", path: "/transactionpage" },
    { label: "Help Center", path: "/help" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "About Us", path: "/about" },
    { label: "Invite a Friend", path: "/invite" },
  ];

  const handleClick = (item) => {
    setActiveItem(item.label);
    navigate(item.path);
    onClose?.();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    onClose?.();
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
                src={
                  profile?.profile_image
                    ? `http://127.0.0.1:8000${profile.profile_image}`
                    : "/profile.png"
                }
                alt="profile"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border border-white" />
            </div>
            <div>
              <p className="font-semibold text-white">{profile?.full_name || "User"}</p>
              <p className="text-yellow-400 text-sm">{profile?.email || ""}</p>
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
        <div className="flex flex-col gap-1 mt-2 max-h-[70vh] overflow-y-auto pr-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`text-left px-4 py-2 rounded-md transition-all ${activeItem === item.label
                ? "bg-white text-gray-900 font-semibold"
                : "hover:bg-white/20"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 mt-6 text-white/80 hover:text-white px-4"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
}