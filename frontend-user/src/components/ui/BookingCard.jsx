import React from "react";
import { CalendarDays, Clock, XCircle, BadgeAlert } from "lucide-react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function BookingCard({ id, title, customer, status, date, time, amount, note, buttonText, buttonColor = "bg-[#111827]", highlighted = false, onCardClick }) {
  const navigate = useNavigate();
  const isAcceptButton =
    buttonText?.toLowerCase().includes("accept") ||
    buttonText?.toLowerCase().includes("pay");

  return (
    <div
      onClick={() => onCardClick ? onCardClick() : navigate(`/bookingdetails/${id}`)}
      className={`relative bg-white rounded-2xl shadow-md p-4 border-l-4 cursor-pointer ${highlighted
        ? "border-l-green-600"
        : status === "scheduled"
          ? "border-l-green-600"
          : "border-l-gray-400"
        }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500">{customer}</p>
          <p className="text-xs text-gray-500">{status}</p>
        </div>
        <button onClick={(e) => e.stopPropagation()}>
          <XCircle size={18} className="text-gray-400" />
        </button>
      </div>

      {/* Date & Time */}
      <div className="flex items-center mt-3 space-x-3 text-xs text-gray-700">
        <div className="flex items-center space-x-1">
          <CalendarDays size={14} className="text-red-500" />
          <span>{date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock size={14} className="text-yellow-500" />
          <span>{time}</span>
        </div>
      </div>

      {/* Amount & Note */}
      {amount && (
        <div className="text-xs text-gray-800 mt-2">
          Amount: <span className="font-semibold">₹ {amount}</span>
        </div>
      )}

      {/* Trouble icon next to note */}
      {note && (
        <div className="flex items-center text-xs text-red-500 mt-1 font-medium space-x-1">
          <BadgeAlert size={14} className="text-red-500" />
          <span>{note}</span>
        </div>
      )}

      {/* Action Button */}
      <div className="mt-4 relative">
        <button
          onClick={(e) => e.stopPropagation()}
          className={`w-full relative flex items-center justify-center text-white text-xs font-semibold py-3 rounded-full ${buttonColor} hover:opacity-90 transition`}
        >
          <span>{buttonText}</span>
          {isAcceptButton && (
            <FaCircleArrowRight className="absolute right-2 text-white text-lg h-7 w-7" />
          )}
        </button>
      </div>
    </div>
  );
}