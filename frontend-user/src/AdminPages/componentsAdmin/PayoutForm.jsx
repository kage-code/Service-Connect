import React, { useState } from "react";
import BalanceCard from "./BalanceCard";

export default function PayoutForm() {
  const [autoPayout, setAutoPayout] = useState(true);
  const [manualPayout, setManualPayout] = useState(true);
  const [autoPayment, setAutoPayment] = useState(true);
  const [manualPayment, setManualPayment] = useState(true);

  return (
    <div className="bg-white shadow rounded-2xl p-8">
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
        {/* Left Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
          {/* User Type */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              User Type
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2.5">
              <option>User Name/ID/Group/Location</option>
            </select>
          </div>

          {/* User Name / ID */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              User Name / ID
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2.5">
              <option>User Name/ID/Group/Location</option>
            </select>
          </div>

          {/* Auto Payout */}
          <div className="col-span-2">
            <label className="flex items-center gap-3 font-medium text-[#1A1A1A] mb-2">
              <input
                type="checkbox"
                checked={autoPayout}
                onChange={() => setAutoPayout(!autoPayout)}
                className="accent-[#6C63FF]"
              />
              Auto Payout Schedule
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2.5">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>

          {/* Manual Payout */}
          <div className="col-span-2">
            <label className="flex items-center gap-3 font-medium text-[#1A1A1A] mb-2">
              <input
                type="checkbox"
                checked={manualPayout}
                onChange={() => setManualPayout(!manualPayout)}
                className="accent-[#6C63FF]"
              />
              Manual Payout Schedule
            </label>
            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded-lg p-2.5"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Payment Method
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2.5">
              <option>Value</option>
            </select>
          </div>

          {/* Account Holder Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Account Holder Name
            </label>
            <input
              type="text"
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg p-2.5"
            />
          </div>

          {/* Bank Branch */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Bank Branch
            </label>
            <input
              type="text"
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg p-2.5"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-5 items-start">
          {/* ✅ Check Balance Button above the Card */}
          <BalanceCard showCheckButtonOutside />

          {/* Auto Payment */}
          <div>
            <label className="flex items-center gap-3 font-medium text-[#1A1A1A] mb-2">
              <input
                type="checkbox"
                checked={autoPayment}
                onChange={() => setAutoPayment(!autoPayment)}
                className="accent-[#6C63FF]"
              />
              Auto Payment
            </label>
            <select className="w-64 border border-gray-300 rounded-lg p-2.5">
              <option>Percentage</option>
              <option>Fixed</option>
            </select>
          </div>

          {/* Manual Payment */}
          <div>
            <label className="flex items-center gap-3 font-medium text-[#1A1A1A] mb-2">
              <input
                type="checkbox"
                checked={manualPayment}
                onChange={() => setManualPayment(!manualPayment)}
                className="accent-[#6C63FF]"
              />
              Manual Payment
            </label>
            <input
              type="text"
              placeholder="Amount"
              className="w-64 border border-gray-300 rounded-lg p-2.5"
            />
          </div>

          {/* Bank Info */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Bank Name
            </label>
            <input
              type="text"
              placeholder="Value"
              className="w-64 border border-gray-300 rounded-lg p-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Account Number
            </label>
            <input
              type="text"
              placeholder="Value"
              className="w-64 border border-gray-300 rounded-lg p-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              IFSC Code
            </label>
            <input
              type="text"
              placeholder="Value"
              className="w-64 border border-gray-300 rounded-lg p-2.5"
            />
          </div>
        </div>
      </div>

      {/* ✅ Buttons Row — Status moved beside Delete */}
      <div className="flex justify-end items-center mt-8 gap-3">
        <select className="border border-gray-300 rounded-full px-6 py-2 text-gray-600 font-medium">
          <option>Status</option>
        </select>
        <button className="bg-[#F05454] text-white px-8 py-2.5 rounded-full hover:bg-[#D93C3C] transition">
          Delete
        </button>
        <button className="bg-[#5E60CE] text-white px-8 py-2.5 rounded-full hover:bg-[#4A4CCC] transition">
          Save
        </button>
      </div>
    </div>
  );
}
