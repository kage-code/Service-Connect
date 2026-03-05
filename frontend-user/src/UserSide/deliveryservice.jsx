// src/pages/AllCategory.jsx
import React from "react";
import { FaArrowLeft, FaSlidersH } from "react-icons/fa";
import BottomNav from "../components/ui/BottomNav"; // adjust path if needed
import DeliveryServiceGrid from "../components/ui/DeliveryServiceGrid";
import PageHeader from "../components/ui/PageHeader";

export default function DeliveryService() {
  return (
    <div className="min-h-screen bg-[#D9D9DB] pb-24">
      {/* 🔹 Top Bar */}
    <PageHeader title="DELIVERY SERVICE" showFilter showSearch/>

      {/* 🔹 Categories Grid Component */}
      <DeliveryServiceGrid />

      {/* 🔹 Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
