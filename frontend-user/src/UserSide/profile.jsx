import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, CreditCard, Bell, Shield, Globe,
  Moon, FileText, HelpCircle, Users, LogOut, Image,
} from "lucide-react";
import CommonHeader from "../components/ui/CommonHeader";
import BottomNav from "../components/ui/BottomNav";
import api from "../api/axiosInstance";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/user/profile/");
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const menuItems = [
    { icon: <User className="w-5 h-5" />, label: "Edit Profile", onClick: () => navigate("/editprofile") },
    { icon: <CreditCard className="w-5 h-5" />, label: "Payment Option", onClick: () => navigate("/paymentmethod") },
    { icon: <Bell className="w-5 h-5" />, label: "Notifications", onClick: () => navigate("/notification") },
    { icon: <Shield className="w-5 h-5" />, label: "Security", onClick: () => navigate("/security") },
    { icon: <Globe className="w-5 h-5" />, label: "Language", value: "English (US)" },
    { icon: <Moon className="w-5 h-5" />, label: "Dark Mode" },
    { icon: <FileText className="w-5 h-5" />, label: "Terms & Conditions", onClick: () => navigate("/terms") },
    { icon: <HelpCircle className="w-5 h-5" />, label: "Help Center", onClick: () => navigate("/help") },
    { icon: <Users className="w-5 h-5" />, label: "Invite Friends", onClick: () => navigate("/invite") },
    { icon: <LogOut className="w-5 h-5" />, label: "Logout", onClick: handleLogout },
  ];

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <CommonHeader title="PROFILE" onBack={() => navigate(-1)} />

      <div className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-2xl mx-auto px-6 mt-6">
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center relative w-full">

            {/* Profile Image */}
            <div className="relative">
              <img
                src={
                  profile?.profile_image
                    ? `http://127.0.0.1:8000${profile.profile_image}`
                    : "/profile.png"
                }
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-[#D9D9DB] object-cover"
              />
              <button
                className="absolute bottom-1 right-1 bg-white rounded-full p-1.5 shadow-md"
                onClick={() => navigate("/fillprofile")}
              >
                <Image className="w-5 h-5 text-[#1D1F2A]" />
              </button>
            </div>

            {/* Name & Email */}
            {loading ? (
              <p className="mt-5 text-gray-400 text-sm">Loading...</p>
            ) : (
              <>
                <h2 className="mt-5 text-lg font-bold text-gray-900">
                  {profile?.full_name || "No Name"}
                </h2>
                <p className="text-sm text-gray-500">
                  {profile?.email || "No Email"}
                </p>
              </>
            )}

            {/* Menu List */}
            <div className="mt-8 w-full space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl py-4 px-5 hover:bg-gray-100 transition"
                >
                  <div className="flex items-center space-x-3 text-gray-800">
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    {item.value && (
                      <span className="text-sm text-gray-600">{item.value}</span>
                    )}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="h-16">
        <BottomNav />
      </div>
    </div>
  );
}