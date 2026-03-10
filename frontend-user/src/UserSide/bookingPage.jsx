import React from "react";
import PageHeader from "../components/ui/PageHeader"
import BookingCard from "../components/ui/BookingCard";
import BottomNav from "../components/ui/BottomNav";

export default function BookingsPage() {
  const bookings = [
    {
      title: "Tap Repair",
      customer: "Keshavan",
      status: "waiting",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      buttonText: "Waiting for Response",
      buttonColor: "bg-[#111827]",
    },
    {
      title: "Tap Repair",
      customer: "Keshavan",
      status: "scheduled",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      amount: 300,
      note: "Additional Requirements",
      buttonText: "Accept and Pay Advance",
      buttonColor: "bg-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <PageHeader title="BOOKINGS" showFilter showSearch />

      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-3xl mx-auto w-full">
        {bookings.map((b, i) => (
          <BookingCard key={i} {...b} />
        ))}
      </div>

      {/* Bottom nav placeholder (if needed) */}
      <div className="h-16">
        <BottomNav/>
      </div>
    </div>
  );
}
