import React, { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import BookingCard from "../components/ui/BookingCard";
import StatusToggle from "../components/ui/StatusToggle"; // <-- import the toggle
import BottomNav from "../components/ui/BottomNav";
import { Underline } from "lucide-react";

export default function ComplaintPage() {
  const [activeTab, setActiveTab] = useState("Ongoing");

  const bookings = [
    {
      title: "Tap Repair",
      customer: "Keshavan",
      status: "active",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      amount: 300,
      note: "Additional Requirements",
      buttonText: "Chat / Call",
      buttonColor: "bg-green-600",
    },
    {
      title: "Tap Repair",
      customer: "Keshavan",
      status: "active",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      amount: 300,
      note: "Additional Requirements",
      buttonText: "Chat / Call",
      buttonColor: "bg-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      <PageHeader title="COMPLAINT" showFilter showSearch />

      {/* Toggle Section */}
      {/* <div className="flex justify-center mt-4">
        <StatusToggle active={activeTab} setActive={setActiveTab} />
      </div> */}

      {/* Booking List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-3xl mx-auto w-full">
        {bookings.map((b, i) => (
          <BookingCard key={i} {...b} highlighted/>
        ))}
      </div>

      {/* Bottom Nav Placeholder */}
      <div className="h-16">
        <BottomNav/>
      </div>
    </div>
  );
}
