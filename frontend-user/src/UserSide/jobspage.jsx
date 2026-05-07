import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import BookingCard from "../components/ui/BookingCard";
import StatusToggle from "../components/ui/StatusToggle";
import BottomNav from "../components/ui/BottomNav";
import api from "../api/axiosInstance";

export default function JobPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const statusMap = {
      "Ongoing": "ongoing",
      "Completed": "completed",
      "Cancelled": "cancelled",
    };

    api.get(`/jobs/?status=${statusMap[activeTab]}`)
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, [activeTab]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <PageHeader title="JOBS" showFilter showSearch />

      <div className="flex justify-center mt-4">
        <StatusToggle active={activeTab} setActive={setActiveTab} />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-3xl mx-auto w-full">
        {loading ? (
          <div className="flex justify-center items-center p-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : jobs.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No {activeTab.toLowerCase()} jobs.</p>
        ) : (
          jobs.map((b) => (
            <BookingCard
              key={b.id}
              id={b.id}
              onCardClick={() => navigate(`/servicedetail/${b.id}`)}
              title={b.title}
              customer={b.client_name}
              status={b.status}
              date={formatDate(b.from_date)}
              time={formatTime(b.from_date)}
              amount={b.amount}
              note={b.note}
              buttonText={activeTab === "Ongoing" ? "Complete Payment" : b.status}
              buttonColor={activeTab === "Ongoing" ? "bg-green-600" : "bg-gray-400"}
              highlighted
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