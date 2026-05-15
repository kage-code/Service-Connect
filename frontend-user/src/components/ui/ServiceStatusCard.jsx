import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceStatusCard({ id, title, serviceName, providerName, status, amount, date }) {
    const navigate = useNavigate();

    const statusColors = {
        waiting: "bg-yellow-100 text-yellow-700",
        scheduled: "bg-blue-100 text-blue-700",
        completed: "bg-green-100 text-green-700",
        cancelled: "bg-red-100 text-red-700",
    };

    return (
        <div
            onClick={() => navigate(`/bookingdetails/${id}`)}
            className="relative bg-white rounded-2xl shadow-md flex items-stretch hover:shadow-lg transition-all cursor-pointer overflow-hidden"
        >
            {/* Left color bar based on status */}
            <div className={`w-2 flex-shrink-0 ${status === "completed" ? "bg-green-500" :
                    status === "scheduled" ? "bg-blue-500" :
                        status === "cancelled" ? "bg-red-500" :
                            "bg-yellow-400"
                }`} />

            {/* Content */}
            <div className="flex-1 p-3">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="font-semibold text-sm text-gray-900">{title}</p>
                        <p className="text-xs text-gray-500">{providerName}</p>
                        <p className="text-xs text-red-500 font-medium">{serviceName}</p>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-md ${statusColors[status]}`}>
                        {status}
                    </span>
                </div>

                <div className="flex items-center justify-between mt-2">
                    {amount && (
                        <p className="text-sm font-semibold text-gray-800">₹{amount}</p>
                    )}
                    {date && (
                        <p className="text-xs text-gray-400">{date}</p>
                    )}
                </div>
            </div>
        </div>
    );
}