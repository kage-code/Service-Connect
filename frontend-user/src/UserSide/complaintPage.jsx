import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import BottomNav from "../components/ui/BottomNav";
import { BadgeAlert } from "lucide-react";
import api from "../api/axiosInstance";

export default function ComplaintPage() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/complaints/")
      .then((res) => {
        setComplaints(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching complaints:", err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "bg-yellow-500";
      case "reviewing": return "bg-blue-500";
      case "resolved": return "bg-green-600";
      default: return "bg-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <PageHeader title="COMPLAINT" showFilter showSearch />

      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-3xl mx-auto w-full">
        {loading ? (
          <div className="flex justify-center items-center p-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : complaints.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No complaints filed.</p>
        ) : (
          complaints.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl shadow-md p-4 border-l-4 border-l-red-500"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{c.title}</h3>
                  <p className="text-xs text-gray-500">{c.client_name}</p>
                </div>
                <span className={`text-white text-xs px-2 py-1 rounded-md ${getStatusColor(c.status)}`}>
                  {c.status}
                </span>
              </div>

              <p className="text-xs text-gray-600 mt-2">{c.description}</p>

              {c.note && (
                <div className="flex items-center text-xs text-red-500 mt-2 space-x-1">
                  <BadgeAlert size={14} />
                  <span>{c.note}</span>
                </div>
              )}

              <p className="text-xs text-gray-400 mt-2">{formatDate(c.created_at)}</p>

              <button className="w-full mt-3 bg-green-600 text-white text-xs font-semibold py-2 rounded-full hover:opacity-90 transition">
                Chat / Call
              </button>
            </div>
          ))
        )}
      </div>

      <div className="h-16">
        <BottomNav />
      </div>
    </div>
  );
}