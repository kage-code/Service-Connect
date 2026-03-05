import React, { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import StatusToggle from "../components/ui/StatusToggle";
import BottomNav from "../components/ui/BottomNav";
import ServiceCard from "../components/ui/ServiceCard";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("Ongoing");

  const services = [
    { category: "Graphic Design", title: "Graphic Design Advanced", rating: 4.2 },
    { category: "Graphic Design", title: "Advance Diploma in Graphic Design", rating: 4.7 },
    { category: "Digital Marketing", title: "Setup your Graphic Design Ads", rating: 4.2 },
    { category: "Web Development", title: "Web Developer Concepts", rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      <PageHeader title="SERVICES" showFilter showSearch />

      {/* Toggle */}
      <div className="flex justify-center mt-4">
        <StatusToggle active={activeTab} setActive={setActiveTab} />
      </div>

      {/* Services List */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 max-w-2xl mx-auto w-full">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="h-16">
        <BottomNav />
      </div>
    </div>
  );
}
