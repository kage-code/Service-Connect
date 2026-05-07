import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axiosInstance";
import TextInput from "../components/ui/request_service/TextInput";
import MediaUpload from "../components/ui/request_service/MediaUpload";
import DateTimePicker from "../components/ui/request_service/DateTimePicker";
import SubmitButton from "../components/ui/SubmitButton";
import AppointmentCard from "../components/ui/request_service/AppointmentCard";
import CommonHeader from "../components/ui/CommonHeader";

export default function ServiceDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/bookings/${id}/`)
      .then((res) => {
        setBooking(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching booking:", err);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  const handleComplete = async () => {
    try {
      await api.patch(`/bookings/${id}/`, { status: "completed" });
      navigate("/job");
    } catch (err) {
      console.error("Error completing booking:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!booking) {
    return <div className="flex justify-center items-center min-h-screen">Booking not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <CommonHeader title="SERVICE DETAILS" onBack={() => navigate(-1)} />

      <div className="flex-1 overflow-y-auto pb-40">
        <div className="max-w-3xl mx-auto px-4 mt-6 space-y-5">
          <div className="bg-[#D9D9DB] rounded-2xl p-4 flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/40.jpg"
              alt={booking.client_name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">{booking.client_name}</h3>
              <p className="text-xs text-gray-500">{booking.service_name}</p>
            </div>
          </div>

          <div className="bg-[#D9D9DB] rounded-2xl p-4 space-y-4">
            <p className="text-[#797C7B]">booking id: {booking.id}</p>
            <TextInput label="Title" value={booking.title} readOnly />
            <TextInput label="Description" value={booking.description} multiline readOnly />
            <MediaUpload />

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Availability
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DateTimePicker label="From" valueDate={formatDate(booking.from_date)} valueTime={formatTime(booking.from_date)} readOnly />
                <DateTimePicker label="To" valueDate={formatDate(booking.to_date)} valueTime={formatTime(booking.to_date)} readOnly />
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <button
                onClick={handleComplete}
                className="bg-[#1D1F2A] text-white min-w-full py-3 rounded-full font-medium text-base shadow-md hover:bg-gray-800 transition"
              >
                Mark as Completed
              </button>
            </div>
          </div>

          {booking.amount && (
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <div className="flex justify-center mb-3 space-x-4">
                <div className="bg-[#E9E9EA] px-6 py-2 rounded-lg text-center shadow-sm border border-gray-300 min-w-[120px]">
                  <p className="text-xs text-gray-500 font-medium">Date</p>
                  <p className="text-sm font-semibold text-gray-800">{formatDate(booking.from_date)}</p>
                </div>
                <div className="bg-[#E9E9EA] px-6 py-2 rounded-lg text-center shadow-sm border border-gray-300 min-w-[120px]">
                  <p className="text-xs text-gray-500 font-medium">Time</p>
                  <p className="text-sm font-semibold text-gray-800">{formatTime(booking.from_date)}</p>
                </div>
              </div>
              <AppointmentCard
                date={formatDate(booking.from_date)}
                time={formatTime(booking.from_date)}
                items={[{ description: booking.title, qty: 1, price: booking.amount, total: booking.amount }]}
                total={booking.amount}
                additionalReq={booking.note}
              />
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-4 inset-x-0 flex justify-center px-5">
        <div className="w-full max-w-3xl space-y-2">
          <SubmitButton rightIcon>Accept & Pay Full</SubmitButton>
          <SubmitButton rightIcon className="bg-[#670200]" onClick={() => {
            console.log("Navigating with state:", {
              bookingId: booking.id,
              title: booking.title,
            });
            navigate("/complaintform", {
              state: {
                bookingId: booking.id,
                title: booking.title,
                description: booking.description,
                amount: booking.amount,
                note: booking.note,
                clientName: booking.client_name,
                serviceName: booking.service_name,
                fromDate: booking.from_date,
              }
            });
          }}>
            Raise a Complaint
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}