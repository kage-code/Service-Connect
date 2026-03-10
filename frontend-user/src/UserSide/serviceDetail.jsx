import React from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/ui/request_service/TextInput";
import MediaUpload from "../components/ui/request_service/MediaUpload";
import DateTimePicker from "../components/ui/request_service/DateTimePicker";
import SubmitButton from "../components/ui/SubmitButton";
import PageHeader from "../components/ui/PageHeader";
import AppointmentCard from "../components/ui/request_service/AppointmentCard";
import CommonHeader from "../components/ui/CommonHeader";

export default function ServiceDetails() {
  const navigate = useNavigate();

  const mockAppointment = {
    date: "Jun 10, 2024",
    time: "9:41 AM",
    items: [
      { description: "Bulb Change", qty: 1, price: 300, total: 300 },
    ],
    total: 300,
    validity: "Valid up to 1 month",
    additionalReq: "Provide ladder. Bulb should be provided.",
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      <CommonHeader
        title="BOOKINGS DETAILS"
        onBack={() => navigate(-1)}
        
      />

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto pb-40">
        <div className="max-w-3xl mx-auto px-4 mt-6 space-y-5">
          {/* User info */}
          <div className="bg-D9D9DB rounded-2xl p-4 flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/40.jpg"
              alt="Nazrul Islam"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Nazrul Islam</h3>
              <p className="text-xs text-gray-500">Electrification ⚡</p>
            </div>
          </div>

          {/* Booking Details */}
          <div className="bg-[#D9D9DB] rounded-2xl p-4 space-y-4">
            <p className="text-[#797C7B]">booking id: 12aa21w</p>

            <TextInput
              label="Title"
              value="Change Bulb"
              placeholder="Change bulb"
              readOnly
            />

            <TextInput
              label="Description"
              value="Filled dffdfd sdfsdffsdfdsf"
              multiline
              placeholder="Filled dffdfd sdfsdfsddfsd"
              readOnly
            />

            <TextInput
              label=""
              value="12a21w"
              placeholder="Images and Videos"
              readOnly
            />

            <MediaUpload />

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Availability
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DateTimePicker
                  label="From"
                  valueDate="12/12/2020"
                  valueTime="12:00 PM"
                  readOnly
                />
                <DateTimePicker
                  label="To"
                  valueDate="12/12/2020"
                  valueTime="12:00 PM"
                  readOnly
                />
              </div>
            </div>

            {/* Completed Button */}
            <div className="flex justify-center mt-2">
              <button className="bg-[#1D1F2A] text-white max-w-150 min-w-full py-3 rounded-full font-medium text-base shadow-md hover:bg-gray-800 transition flex items-center justify-center">
                Completed
              </button>
            </div>
          </div>

          {/* Appointment Section with Separate Date & Time Boxes */}
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <div className="flex justify-center mb-3 space-x-4">
              <div className="bg-[#E9E9EA] px-6 py-2 rounded-lg text-center shadow-sm border border-gray-300 min-w-[120px]">
                <p className="text-xs text-gray-500 font-medium">Date</p>
                <p className="text-sm font-semibold text-gray-800">
                  {mockAppointment.date}
                </p>
              </div>
              <div className="bg-[#E9E9EA] px-6 py-2 rounded-lg text-center shadow-sm border border-gray-300 min-w-[120px]">
                <p className="text-xs text-gray-500 font-medium">Time</p>
                <p className="text-sm font-semibold text-gray-800">
                  {mockAppointment.time}
                </p>
              </div>
            </div>

            {/* AppointmentCard */}
            <AppointmentCard {...mockAppointment} />
          </div>
        </div>
      </div>

      {/* Fixed bottom buttons */}
      <div className="fixed bottom-4 inset-x-0 flex justify-center px-5">
        <div className="w-full max-w-3xl space-y-2">
          <SubmitButton rightIcon>Accept & Pay Full</SubmitButton>
          <SubmitButton rightIcon className="bg-[#670200]">
            Raise a Complaint
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
