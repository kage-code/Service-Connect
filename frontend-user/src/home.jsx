import React, { useState, useEffect } from "react";
import DesktopHome from "./UserSide/desktopHome";
import BottomNav from "./components/ui/BottomNav";
import SearchBar from "./components/ui/SearchBar";
import HeroSlider from "./components/ui/HeroSlider";
import ServiceCategory from "./components/ui/ServiceCategory";
import PopularServices from "./components/ui/PopularServices";
import TopProviders from "./components/ui/TopSerivceProviders";
import HomeHeader from "./components/ui/HomeHeader";
import { MdLocationOn } from "react-icons/md";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Near By");

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Desktop View
  if (isDesktop) {
    return <DesktopHome />;
  }

  // 🔹 Mobile / Tablet View
  const categories = [
    { name: "Cleaning", icon: "/cleaning.png" },
    { name: "Electrical", icon: "/electrical.png" },
    { name: "Delivery", icon: "/delivery.png" },
    { name: "Beauty", icon: "/beauty.png" },
  ];

  const services = [
    {
      title: "Complete Residential Plumbing",
      price: "₹100-200",
      rating: 4.2,
      reviews: "7830",
    },
    {
      title: "Advertisement Plumbing",
      price: "₹100-200",
      rating: 4.2,
      reviews: "7812",
    },
  ];

  const providers = ["Sonja", "Jensen", "Victoria", "Castaldo"];
  const toggleButtons = ["Near By", "10 KM", "All"];

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <HomeHeader />
      <SearchBar />

      {/* 🔹 Toggle Filter Row */}
      <div className="flex justify-center mt-4">
        <div className="flex justify-between items-center rounded-3xl border-4 border-[#1D1F2A] bg-white shadow-sm max-w-7xl w-full mx-4">
          {toggleButtons.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200
              ${
                selectedOption === option
                  ? "bg-[#1D1F2A] text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option === "Near By" && <MdLocationOn />}
              {option}
            </button>
          ))}
        </div>
      </div>

      <HeroSlider />
      <ServiceCategory categories={categories} />
      <PopularServices services={services} />
      <TopProviders providers={providers} />
      <BottomNav />
    </div>
  );
}
