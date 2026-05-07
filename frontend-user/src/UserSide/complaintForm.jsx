import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CommonHeader from "../components/ui/CommonHeader";
import TextInput from "../components/ui/request_service/TextInput";
import SubmitButton from "../components/ui/SubmitButton";
import { BadgeAlert, ImagePlus } from "lucide-react";
import api from "../api/axiosInstance";

export default function ComplaintForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingId, title, description, amount, note, clientName, serviceName, fromDate } = location.state || {};
  console.log("Complaint state:", location.state);

  const [complaintTitle, setComplaintTitle] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("booking", bookingId);
    formData.append("title", complaintTitle);
    formData.append("description", complaintDescription);
    if (image) formData.append("image", image);

    setLoading(true);
    try {
      await api.post("/complaints/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Complaint submitted successfully!");
      navigate("/job");
    } catch (err) {
      console.error("Error submitting complaint:", err.response?.data);
      alert("Failed to submit complaint.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <CommonHeader title="COMPLAINT FORM" onBack={() => navigate(-1)} />

      <div className="flex-1 overflow-y-auto pb-32">
        <div className="max-w-2xl mx-auto px-6 mt-4 space-y-5">
          {/* User Info */}
          <div className="bg-[#E8E8E8] rounded-2xl p-4 flex items-center space-x-3 shadow">
            <img
              src="https://randomuser.me/api/portraits/men/40.jpg"
              alt={clientName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">{clientName || "Client"}</h3>
              <p className="text-xs text-gray-500">{serviceName || "Service"}</p>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-white rounded-2xl border border-blue-400 p-4 shadow space-y-3">
            <p className="text-xs text-[#707070]">Booking Id: {bookingId}</p>

            <div>
              <p className="text-xs font-semibold text-gray-800">Title</p>
              <p className="text-sm text-gray-700">{title}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-800">Description</p>
              <p className="text-sm text-gray-700">{description}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-800 mb-1">Appointment</p>
              <div className="flex justify-center gap-3">
                <div className="bg-[#F5F5F5] border border-gray-300 px-4 py-2 rounded-xl text-center min-w-[110px]">
                  <p className="text-sm font-medium text-gray-800">{formatDate(fromDate)}</p>
                </div>
                <div className="bg-[#F5F5F5] border border-gray-300 px-4 py-2 rounded-xl text-center min-w-[80px]">
                  <p className="text-sm font-medium text-gray-800">{formatTime(fromDate)}</p>
                </div>
              </div>
            </div>

            {amount && (
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs text-gray-700">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-1">Sl.no</th>
                      <th className="text-left py-1">Description</th>
                      <th className="text-center py-1">Price</th>
                      <th className="text-center py-1">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1">1</td>
                      <td className="py-1">{title}</td>
                      <td className="text-center py-1">₹{amount}</td>
                      <td className="text-center py-1">₹{amount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {note && (
              <div>
                <p className="text-xs text-[#670200] font-semibold flex items-center gap-1">
                  <BadgeAlert size={14} /> Additional Requirements
                </p>
                <p className="text-xs text-blue-900 mt-1">{note}</p>
              </div>
            )}
          </div>

          {/* Complaint Inputs */}
          <TextInput
            placeholder="Complaint Title"
            value={complaintTitle}
            onChange={(e) => setComplaintTitle(e.target.value)}
          />
          <TextInput
            placeholder="Complaint Description"
            multiline
            value={complaintDescription}
            onChange={(e) => setComplaintDescription(e.target.value)}
          />

          {/* Images & Videos */}
          <div className="relative">
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 shadow-sm focus:border-blue-400 outline-none pr-10"
            />
            <ImagePlus className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

          {/* Confirm Button */}
          <SubmitButton
            className="bg-[#670200] text-white"
            showIcon={false}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Confirm Complaint"}
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}