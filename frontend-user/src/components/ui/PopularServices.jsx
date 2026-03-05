import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { BiSolidBookmarkMinus, BiBookmarkMinus } from "react-icons/bi";

export default function PopularServicesSlider({ services = [] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  // ✅ Default popular services (includes 2 new ones)
  const defaultServices = [
    {
      title: "Complete Residential Plumbing",
      price: "₹100-200",
      rating: 4.2,
      reviews: "7830",
      image: "/blackimg.png",
    },
    {
      title: "Advertisement Plumbing",
      price: "₹100-200",
      rating: 4.2,
      reviews: "7812",
      image: "/blackimg.png",
    },
    {
      title: "Electrical Wiring & Repair",
      price: "₹150-250",
      rating: 4.5,
      reviews: "5120",
      image: "/blackimg.png",
    },
    {
      title: "Home Cleaning Service",
      price: "₹200-300",
      rating: 4.8,
      reviews: "9100",
      image: "/blackimg.png",
    },
  ];

  const displayedServices = services.length ? services : defaultServices;
  const filters = ["All", "Plumbing", "Electrical", "Health"];

  return (
    <div className="mx-4 mt-5">
      {/* 🔹 Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-base">Popular Services</h3>
        <p className="text-sm text-gray-500 cursor-pointer hover:text-gray-700 transition">
          SEE ALL
        </p>
      </div>

      {/* 🔹 Filter Badges */}
      <div className="flex gap-3 mb-3 overflow-x-auto pb-1 scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
              ${
                activeFilter === filter
                  ? "bg-[#1D1F2A] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 🔹 Horizontal Slider */}
      <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
        {displayedServices.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-3 flex-shrink-0 
                       w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] 
                       flex flex-col hover:shadow-lg transition-all"
          >
            <div className="bg-gray-200 h-40 rounded-lg mb-2 overflow-hidden">
              <img
                src={service.image || "/blackimg.png"}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-gray-500">Plumbing</p>
            <h4 className="font-semibold text-sm leading-tight">
              {service.title}
              <div><bisolidbookmark/>n  </div>
            </h4>

            <div className="flex justify-between items-center mt-1 text-xs">
              <span className="text-gray-700">{service.price}</span>
              <span className="flex items-center gap-1 text-gray-700">
                <FaStar className="text-yellow-400" />
                {service.rating} | {service.reviews} Reviews
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
