import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

export default function PaymentSchedules() {
  const schedules = [
    { name: "All Dealers", frequency: "Monthly", image: "/blackimg.png", unread: true },
    { name: "All Franchisee", frequency: "Monthly", image: "/blackimg.png", unread: false },
    { name: "All Service Providers", frequency: "Weekly", image: "/blackimg.png", unread: true },
    { name: "Thomas", frequency: "Feb 3", image: "/blackimg.png", unread: false },
    { name: "Banu - Service Provider", frequency: "Feb 15", image: "/blackimg.png", unread: true },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h3 className="text-[#F05454] font-semibold mb-4">Payment Schedules</h3>

      <ul className="space-y-3">
        {schedules.map((s, i) => (
          <li
            key={i}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-[#F7F6FE] transition cursor-pointer"
          >
            {/* LEFT: Image + Title */}
            <div className="flex items-center gap-3">
              <img
                src={s.image}
                alt="icon"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-[#303972]">{s.name}</p>
                <p className="text-sm text-gray-500">{s.frequency}</p>
              </div>
            </div>

            {/* RIGHT: Actions with red dot */}
            <div className="flex items-center gap-3 text-[#F05454]">
              {/* Edit icon with red dot */}
              <div className="flex items-center relative">
                {s.unread && (
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-3 inline-block" />
                )}
                <FaRegEdit className= "text-black cursor-pointer hover:text-[#D93C3C] transition" />
              </div>
              <FaTrashAlt className="text-black cursor-pointer hover:text-[#D93C3C] transition" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
