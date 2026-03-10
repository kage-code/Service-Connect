import React from "react";
import { useNavigate } from "react-router-dom";

export default function AllCategoriesGrid() {
  const navigate = useNavigate();

  const categories = [
    { name: "BOUQUET DELIVERY", icon: "/bouquet.png" },
    { name: "CAKE DELIVERY", icon: "/cake.png" },
    { name: "DRIVER", icon: "/bouquet.png" },
    { name: "PACKERS AND MOVERS", icon: "/truck.png" },
    { name: "PICKUP AND DELIVERY", icon: "/deliv2.png" },
  ];

  const handleClick = (name) => {
    const formattedName = name.toLowerCase().replace(/ /g, ""); // e.g. "cake delivery" → "cakedelivery"
    navigate(`/allcategory/${formattedName}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => handleClick(cat.name)}
          className="bg-white shadow-md rounded-2xl flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all focus:outline-none"
        >
          <img src={cat.icon} alt={cat.name} className="w-12 h-12 mb-2" />
          <p className="text-xs font-semibold text-gray-700 text-center">
            {cat.name}
          </p>
        </button>
      ))}
    </div>
  );
}
