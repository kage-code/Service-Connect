import React from "react";
import SidebarMenu from "../components/ui/SidebarMenu";
import SearchBar from "../components/ui/SearchBar";
import HeroSlider from "../components/ui/HeroSlider";
import ServiceCategoryDesktop from "../components/ui/ServiceCategoryDesktop";
import PopularServiceDesktop from "../components/ui/PopularServiceDesktop";
import AdsPanel from "../components/ui/AdsPanels";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DesktopToggle from "../components/ui/DesktopToggle";

export default function DesktopHome() {
  const navigate = useNavigate();

  const services = [
    { title: "Complete Residential Plumbing", price: "₹280 - 500", rating: 4.2, reviews: "7820" },
    { title: "Advertisement Plumbing", price: "₹120 - 200", rating: 4.3, reviews: "5100" },
    { title: "Electrical Wiring & Repair", price: "₹150 - 250", rating: 4.5, reviews: "5120" },
    { title: "Home Cleaning Service", price: "₹200 - 300", rating: 4.8, reviews: "9100" },
  ];

  const categories = [
    { name: "Plumbing", icon: "/plumb.png" },
    { name: "Electrical", icon: "/electri.png" },
    { name: "Driver", icon: "/driver.png" },
    { name: "Doctor", icon: "/doc.png" },
    { name: "Beauty", icon: "/plumb.png" },
    { name: "Cleaning", icon: "/electri.png" },
    { name: "Driver", icon: "/driver.png" },
  ];

  return (
    <div className="min-h-screen bg-[#E6E6E6] flex flex-col">
      {/* 🔹 Header */}
      <header className="w-full bg-[#1D1F2A] shadow-sm px-8 py-4 flex justify-between items-center fixed top-0 left-0 z-50">
        {/* Left side (logo + heading) */}
        <div className="flex items-center gap-3">
          <img src="/desklogo.png" alt="logo" className="h-9 w-9" />
          <h1 className="text-2xl font-semibold text-white tracking-wide">
            SERVICE CONNECT
          </h1>
        </div>

        {/* Right side (profile + logout) */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-right">
            <p className="text-lg font-medium text-[#FA5075]">Stone Stellar</p>
            <p className="text-xs text-yellow-500">Premium Member</p>
          </div>

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

          <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-all duration-200">
            <LogOut size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </header>

      {/* 🔹 Layout body */}
      <div className="flex flex-1 pt-[72px]">
        {/* Sidebar (fixed under header) */}
        <div className="fixed left-0 top-[72px] h-[calc(100vh-72px)]">
          <SidebarMenu />
        </div>

        {/* Main Content — add left & right margins */}
        <main className="flex-1 overflow-y-auto px-6 pb-6 ml-64 mr-72">
          <div className="w-full max-w-[1300px] mx-auto">
            {/* ✅ Smaller centered SearchBar */}
            <div className="max-w-[600px] mx-auto my-10">
              <SearchBar />
            </div>
            <div className="mb-8 ">
                <DesktopToggle/>
            </div>

            {/* Hero Slider */}
            <div className="mt-6">
              <HeroSlider />
            </div>

            {/* Categories */}
            <div className="mt-10">
              <ServiceCategoryDesktop categories={categories} />
            </div>

            {/* Popular Services */}
            <div className="mt-10 overflow-visible">
              <PopularServiceDesktop services={services} />
            </div>
          </div>
        </main>

        {/* Right Ads Panel (fixed under header) */}
        <div className="fixed right-0 top-[72px] h-[calc(100vh-72px)]">
          <AdsPanel />
        </div>
      </div>
    </div>
  );
}
