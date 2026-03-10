import React from "react";
import { CalendarDays, Clock, BadgeAlert } from "lucide-react";

export default function AppointmentCard({
  date = "Jun 10, 2024",
  time = "9:41 AM",
  items = [],
  total = 0,
  validity = "Valid up to 1 month",
  additionalReq = "Provide ladder. Bulb should be provided.",
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Appointment</h3>

      {/* Appointment Info */}
      <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
        <span>
          <CalendarDays size={14} className="inline-block mr-1 text-gray-500" />
          {date}
        </span>
        <span>
          <Clock size={14} className="inline-block mr-1 text-yellow-500" />
          {time}
        </span>
      </div>

      {/* Table */}
      <table className="w-full text-xs text-gray-700 border-t border-b border-gray-200">
        <thead>
          <tr className="text-gray-500">
            <th className="py-2 text-left">Sl.no</th>
            <th className="py-2 text-left">Description</th>
            <th className="py-2 text-left">Qty</th>
            <th className="py-2 text-left">Price</th>
            <th className="py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.description}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-2 text-sm font-semibold text-gray-800">
        <span>Grand Total: {total}</span>
      </div>

      {/* Terms & Additional Requirements */}
      <div className="mt-3">
        <p className="text-xs text-gray-500">
          Terms and conditions<br />
          <span className="font-semibold text-gray-700">{validity}</span>
        </p>
        <p className="text-xs text-red-500 mt-2 flex items-center">
          <BadgeAlert  size={12} className="mr-1" /> Additional Requirements:{" "}
          <span className="ml-1 font-medium text-gray-700">
          {additionalReq}</span>
        </p>
      </div>
    </div>
  );
}
