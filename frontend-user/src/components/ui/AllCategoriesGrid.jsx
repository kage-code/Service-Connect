import React from "react";
import { useNavigate } from "react-router-dom";

export default function AllCategoriesGrid() {
  const navigate = useNavigate();

  const categories = [
    { name: "ALL", icon: "/allcata.png" },
    { name: "DELIVERY SERVICES", icon: "/deliv.png", route: "/allcategory/deliveryservice" },
    { name: "HOME APPLIANCE REPAIR", icon: "/homeapp.png" },
    { name: "LAUNDRY SERVICE", icon: "/laundry.png" },
    { name: "BUSINESS SERVICES", icon: "/business.png" },
    { name: "EVENTS AND PARTYS", icon: "/party.png" },
    { name: "CLEANING SERVICE", icon: "/cleanser.png" },
    { name: "ELECTRONICS REPAIR", icon: "/engineer.png" },
    { name: "TECHNOLOGY SERVICES", icon: "/tech.png" },
    { name: "HEALTH AND FITNESS", icon: "/health.png" },
    { name: "BEAUTY SERVICES", icon: "/beautyser.png" },
  ];

  const handleClick = (route) => {
    if (route) navigate(route);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {categories.map((cat, index) => (
        <div
          key={index}
          onClick={() => handleClick(cat.route)} // ✅ add onClick here
          className={`bg-white shadow-md rounded-2xl flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all cursor-pointer ${
            cat.route ? "active:scale-95" : ""
          }`}
        >
          <img src={cat.icon} alt={cat.name} className="w-12 h-12 mb-2" />
          <p className="text-xs font-semibold text-gray-700 text-center">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
 