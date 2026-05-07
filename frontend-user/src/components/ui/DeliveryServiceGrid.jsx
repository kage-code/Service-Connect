import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DeliveryServiceGrid() {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories/")
      .then((res) => {
        // Find Delivery Services and get its subcategories
        const delivery = res.data.find(cat => cat.name === "Delivery Services");
        if (delivery) {
          setSubcategories(delivery.subcategories);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching subcategories:", err);
        setLoading(false);
      });
  }, []);

  const handleClick = (route) => {
    if (route) navigate(route);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {subcategories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => handleClick(cat.route)}
          className="bg-white shadow-md rounded-2xl flex flex-col items-center justify-center p-4 aspect-square hover:shadow-lg transition-all cursor-pointer"
        >
          <img
            src={cat.icon}
            alt={cat.name}
            className="w-12 h-12 mb-2 object-contain"
            onError={(e) => { e.target.src = "/deliv.png"; }}
          />
          <p className="text-[10px] font-bold text-gray-700 text-center leading-tight uppercase">
            {cat.name}
          </p>
        </div>
      ))}
    </div>
  );
}