// src/pages/AllCategory.jsx
import React from "react";
import { FaArrowLeft, FaSlidersH } from "react-icons/fa";
import BottomNav from "../components/ui/BottomNav"; // adjust path if needed
import AllCategoriesGrid from "../components/ui/AllCategoriesGrid";
import PageHeader from "../components/ui/PageHeader";

export default function AllCategory() {
  return (
    <div className="min-h-screen bg-[#D9D9DB] pb-24">
      {/* 🔹 Top Bar */}
 
      <PageHeader showFilter showSearch title="ALL CATEGORY"/>

      {/* 🔹 Categories Grid Component */}
      <AllCategoriesGrid />

      {/* 🔹 Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
