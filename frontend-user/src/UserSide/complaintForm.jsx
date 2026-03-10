import React from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../components/ui/CommonHeader";
import TextInput from "../components/ui/request_service/TextInput";
import SubmitButton from "../components/ui/SubmitButton";
import { BadgeAlert, ImagePlus } from "lucide-react";

export default function ComplaintForm() {
  const navigate = useNavigate();

  const mockAppointment = {
    date: "Jun 10, 2024",
    time: "9:41 AM",
    items: [{ description: "Bulb Change", qty: 1, price: 300, total: 300 }],
    total: 300,
    validity: "Valid up to 1 month",
    additionalReq: "Provide ladder. Bulb should be provided.",
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      <CommonHeader title="COMPLAINT FORM" onBack={() => navigate(-1)} />

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="max-w-2xl mx-auto px-6 mt-4 space-y-5">
          {/* User Info */}
          <div className="bg-[#E8E8E8] rounded-2xl p-4 flex items-center space-x-3 shadow">
            <img
              src="https://randomuser.me/api/portraits/men/40.jpg"
              alt="Nazrul Islam"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Nazrul Islam
              </h3>
              <p className="text-xs text-gray-500">Electrification ⚡</p>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-white rounded-2xl border border-blue-400 p-4 shadow space-y-3">
            <p className="text-xs text-[#707070]">Booking Id : 12aa21w</p>

            <div>
              <p className="text-xs font-semibold text-gray-800">Title</p>
              <p className="text-sm text-gray-700">Bulb Change</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-800">Description</p>
              <p className="text-sm text-gray-700">
                askdjhh jkhldkhsamjhh jhhkh
              </p>
            </div>

            {/* Appointment Section */}
            <div>
              <p className="text-xs font-semibold text-gray-800 mb-1">
                Appointment
              </p>
              <div className="flex justify-center gap-3">
                <div className="bg-[#F5F5F5] border border-gray-300 px-4 py-2 rounded-xl text-center min-w-[110px]">
                  <p className="text-sm font-medium text-gray-800">
                    {mockAppointment.date}
                  </p>
                </div>
                <div className="bg-[#F5F5F5] border border-gray-300 px-4 py-2 rounded-xl text-center min-w-[80px]">
                  <p className="text-sm font-medium text-gray-800">
                    {mockAppointment.time}
                  </p>
                </div>
              </div>
            </div>

            {/* Items Table */}
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-xs text-gray-700">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-1">Sl.no</th>
                    <th className="text-left py-1">Description</th>
                    <th className="text-center py-1">Qty</th>
                    <th className="text-center py-1">Price</th>
                    <th className="text-center py-1">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {mockAppointment.items.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-200">
                      <td className="py-1">{idx + 1}</td>
                      <td className="py-1">{item.description}</td>
                      <td className="text-center py-1">{item.qty}</td>
                      <td className="text-center py-1">{item.price}</td>
                      <td className="text-center py-1">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <p className="text-xs text-gray-600 mt-2">Terms and conditions</p>
              <p className="text-xs text-red-600 font-medium">
                {mockAppointment.validity}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#670200] font-semibold flex items-center gap-1">
                <BadgeAlert size={14} /> Additional Requirements
              </p>
              <div className="bg-white px-3 py-1 inline-block text-xs text-blue font-medium mt-1">
                Provide Ladder
              </div>
              <p className="text-xs text-blue-900 mt-1">
                Bulb should be provided
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <SubmitButton showIcon={false}>Service Status</SubmitButton>
          <SubmitButton showIcon={false}>Payment Status</SubmitButton>

          {/* Complaint Inputs — with placeholders inside */}
          <TextInput placeholder="Title" />
          <TextInput placeholder="Description" multiline />

          {/* Images & Videos with right icon */}
          <div className="relative">
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-500 shadow-sm focus:border-blue-400 outline-none pr-10"
              placeholder="Images & Videos"
            />
            <ImagePlus
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>

          {/* Confirm Button */}
          <SubmitButton className="bg-[#670200] text-white" showIcon={false}>
            Confirm Complaint
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
