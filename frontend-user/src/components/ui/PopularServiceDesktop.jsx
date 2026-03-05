import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function PopularServiceDesktop({ services = [] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Default Services (if none passed)
  const defaultServices = [
    {
      title: "Complete Residential Plumbing",
      price: "₹100–200",
      rating: 4.2,
      reviews: "7830",
      image: "/blackimg.png",
    },
    {
      title: "Advertisement Plumbing",
      price: "₹120–220",
      rating: 4.3,
      reviews: "5100",
      image: "/blackimg.png",
    },
    {
      title: "Electrical Wiring & Repair",
      price: "₹150–250",
      rating: 4.5,
      reviews: "5120",
      image: "/blackimg.png",
    },
    {
      title: "Home Cleaning Service",
      price: "₹200–300",
      rating: 4.8,
      reviews: "9100",
      image: "/blackimg.png",
    },
      {
      title: "Home Cleaning Service",
      price: "₹200–300",
      rating: 4.8,
      reviews: "9100",
      image: "/blackimg.png",
    },
  ];

  const displayedServices = services.length ? services : defaultServices;
  const filters = ["All", "Plumbing", "Electrical", "Cleaning", "Health"];

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 mx-20">
        <h3 className="font-semibold text-xl text-[#1D1F2A]">Popular Services</h3>
        <p className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
          SEE ALL
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-8 mx-20 overflow-x-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                activeFilter === filter
                  ? "bg-[#1D1F2A] text-white shadow-md"
                  : "bg-[#736A68] text-white hover:bg-gray-500"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-6 mx-20">
        {displayedServices.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-1 flex flex-col"
          >
            <div className="bg-gray-200 h-44 rounded-lg mb-3 overflow-hidden">
              <img
                src={service.image || "/blackimg.png"}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs text-gray-500 mb-1">Plumbing</p>
            <h4 className="font-semibold text-sm text-[#1D1F2A]">
              {service.title}
            </h4>

            <div className="flex justify-between items-center mt-2 text-xs text-gray-700">
              <span>{service.price}</span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                {service.rating} | {service.reviews}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
