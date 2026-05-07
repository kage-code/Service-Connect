import React, { useState, useEffect } from "react";
import PageHeader from "../components/ui/PageHeader";
import BookingCard from "../components/ui/BookingCard";
import BottomNav from "../components/ui/BottomNav";
import api from "../api/axiosInstance";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/bookings/")
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  const getButtonProps = (status) => {
    switch (status) {
      case "waiting":
        return { buttonText: "Waiting for Response", buttonColor: "bg-[#111827]" };
      case "scheduled":
        return { buttonText: "Accept and Pay Advance", buttonColor: "bg-green-600" };
      case "completed":
        return { buttonText: "Completed", buttonColor: "bg-blue-600" };
      case "cancelled":
        return { buttonText: "Cancelled", buttonColor: "bg-red-500" };
      default:
        return { buttonText: status, buttonColor: "bg-[#111827]" };
    }
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <PageHeader title="BOOKINGS" showFilter showSearch />

      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-3xl mx-auto w-full">
        {loading ? (
          <div className="flex justify-center items-center p-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No bookings yet.</p>
        ) : (
          bookings.map((b) => (
            <BookingCard
              key={b.id}
              id={b.id}
              title={b.title}
              customer={b.provider_name}
              status={b.status}
              date={formatDate(b.from_date)}
              time={formatTime(b.from_date)}
              amount={b.amount}
              note={b.note}
              {...getButtonProps(b.status)}
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