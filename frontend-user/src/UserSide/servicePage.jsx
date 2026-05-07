import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PageHeader from "../components/ui/PageHeader";
import BottomNav from "../components/ui/BottomNav";
import ServiceCard from "../components/ui/ServiceCard";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const params = location.search;
    axios.get(`http://127.0.0.1:8000/api/services/${params}`)
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
  }, [location.search]);

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <PageHeader title="SERVICES" showFilter showSearch />

      <div className="flex-1 overflow-y-auto p-5 space-y-5 max-w-2xl mx-auto w-full">
        {loading ? (
          <div className="flex justify-center items-center p-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : services.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No services found.</p>
        ) : (
          services.map((s) => (
            <ServiceCard
              key={s.id}
              category={s.category_name}
              title={s.name}
              rating={s.rating}
              image={s.image}
            />
          ))
        )}
      </div>

      <div className="h-16">
        <BottomNav />
      </div>
    </div>
  );
}