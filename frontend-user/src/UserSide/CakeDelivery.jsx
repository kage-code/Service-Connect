import React, { useState, useEffect } from "react";
import VendorList from "../components/ui/VendorList";
import BottomNav from "../components/ui/BottomNav";
import PageHeader from "../components/ui/PageHeader";
import DesktopToggle from "../components/ui/DesktopToggle";
import axios from "axios";

export default function CakeDelivery() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/services/?category=35")
      .then((res) => {
        const formatted = res.data.map((s) => ({
          id: s.id,
          providerId: s.provider,  // 👈 add this
          name: s.provider_business || s.provider_name,
          distance: s.provider_location || "N/A",
          price: s.is_free ? "Free" : `₹${s.min_price} - ₹${s.max_price}`,
          rating: s.rating,
          reviews: "0 reviews",
          bookmarked: false,
          image: s.provider_image
            ? `http://127.0.0.1:8000${s.provider_image}`
            : "/blackimg.png",
        }));
        setVendors(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cake delivery services:", err);
        setLoading(false);
      });
  }, []);

  const handleBookmarkToggle = (id) => {
    setVendors((prev) =>
      prev.map((v) => v.id === id ? { ...v, bookmarked: !v.bookmarked } : v)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans relative pb-28">
      <PageHeader title="CAKE DELIVERY" showFilter showSearch />

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

      <div className="mt-4">
        <DesktopToggle />
      </div>

      {loading ? (
        <div className="flex justify-center items-center p-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : vendors.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No cake delivery services available.</p>
      ) : (
        <VendorList vendors={vendors} onBookmarkToggle={handleBookmarkToggle} />
      )}

      <BottomNav />
    </div>
  );
}