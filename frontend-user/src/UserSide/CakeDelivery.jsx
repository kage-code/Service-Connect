import React, { useState } from "react";
import VendorList from "../components/ui/VendorList";
import BottomNav from "../components/ui/BottomNav";
import { IoFilter } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import PageHeader from "../components/ui/PageHeader";
import DesktopToggle from "../components/ui/DesktopToggle";

export default function CakeDelivery() {
  const [vendors, setVendors] = useState([
    { id: 1, name: "Thomas", distance: "3 km away", price: "₹280 - 300", rating: "4.2", reviews: "78 reviews", bookmarked: true,
        image:"/blackimg.png"
     },
    { id: 2, name: "Jacop", distance: "4 km away", price: "₹280 - 300", rating: "4.1", reviews: "12 reviews", bookmarked: false ,
        image:"/blackimg.png"},
    { id: 3, name: "Thomas", distance: "3 km away", price: "₹280 - 300", rating: "4.2", reviews: "78 reviews", bookmarked: false,
        image:"/blackimg.png" },
    { id: 4, name: "Thomas", distance: "3 km away", price: "₹280 - 300", rating: "4.2", reviews: "78 reviews", bookmarked: true,
        image:"/blackimg.png" },
  ]);

  const handleBookmarkToggle = (id) => {
    setVendors((prev) =>
      prev.map((v) =>
        v.id === id ? { ...v, bookmarked: !v.bookmarked } : v
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans relative pb-28">
      {/* Header */}
      <PageHeader title="CAKE DELIVERY" showFilter showSearch/>

      {/* Location & Button */}
      <div className="px-4 mt-4">
        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25c.966 0 1.75-.784 1.75-1.75S12.966 7.75 12 7.75 10.25 8.534 10.25 9.5s.784 1.75 1.75 1.75z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c3.728 0 6.75 3.022 6.75 6.75 0 4.125-6.75 12.75-6.75 12.75S5.25 13.125 5.25 9c0-3.728 3.022-6.75 6.75-6.75z" />
          </svg>
          <p className="text-sm">[Location name]</p>
        </div>

      <div className="w-full flex justify-center mt-3">
  <button className="w-full max-w-7xl bg-gray-800 text-white text-xs font-semibold rounded-full py-2 shadow-md hover:opacity-90 transition-all">
    Open Request (Request to Random Accounts)
  </button>
</div>

      </div>

      {/* Tabs */}
      {/* <div className="flex justify-between items-center mt-5 space-x-3 px-4 border-4 rounded-3xl max-w-5xl mx-auto">
  {["Near By", "10 KM", "All"].map((tab, index) => (
    <button
      key={index}
      className={`px-5 py-1.5 text-xs font-semibold rounded-full border ${
        index === 1
          ? "bg-gray-800 text-white border-gray-800"
          : "bg-white text-gray-700 border-gray-200"
      }`}
    >
      {tab}
    </button>
  ))}
</div> */}
<div className="mt-4 ">    
    <DesktopToggle />
</div>

      {/* Reusable Vendor List */}
      <VendorList vendors={vendors} onBookmarkToggle={handleBookmarkToggle} />

      {/* Bottom Navigation */}
     <BottomNav/>
    </div>
  );
}
