import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import TextInput from "../components/ui/request_service/TextInput";
import MediaUpload from "../components/ui/request_service/MediaUpload";
import DateTimePicker from "../components/ui/request_service/DateTimePicker";
import SubmitButton from "../components/ui/SubmitButton";

export default function RequestServicePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { providerName, serviceType } = location.state || {};

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      <header className="bg-[#111827] text-white py-4 px-5 flex items-center shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="mr-3 p-1 hover:bg-[#1f2937] rounded-full transition"
        >
          <IoIosArrowDropleft size={30} />
        </button>
        <h1 className="text-base font-semibold tracking-wide">
          REQUEST SERVICE
        </h1>
      </header>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="max-w-3xl mx-auto px-4 mt-6 space-y-5">
          {/* Provider Info Card */}
          <div className="bg-[#D9D9DB] rounded-2xl p-4 flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/40.jpg"
              alt={providerName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {providerName || "Provider"}
              </h3>
              <p className="text-xs text-gray-600">{serviceType || "Service"}</p>
            </div>
          </div>

          {/* Request Form */}
          <div className="bg-[#D9D9DB] rounded-2xl shadow-sm p-4 space-y-4">
            <TextInput
              label="Title"
              placeholder="Change Bulb"
              className="bg-white"
            />
            <TextInput
              label="Description"
              placeholder="Describe your request..."
              multiline
            />
            <MediaUpload />

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Availability
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DateTimePicker label="From" />
                <DateTimePicker label="To" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-4 inset-x-0 flex justify-center px-5">
        <div className="w-full max-w-3xl">
          <SubmitButton>Confirm</SubmitButton>
        </div>
      </div>
    </div>
  );
}