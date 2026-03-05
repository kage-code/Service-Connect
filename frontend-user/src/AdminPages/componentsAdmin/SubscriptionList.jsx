import React from "react";
import { MoreHorizontal } from "lucide-react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const subscriptions = [
  { name: "Samantha W.", id: "123456789", role: "Franchisee" },
  { name: "Tony Soap", id: "123456789", role: "Service Provider" },
  { name: "Jordan Nico", id: "123456789", role: "Service Provider" },
  { name: "Karen Hope", id: "123456789", role: "Franchisee" },
  { name: "Nadila Adja", id: "123456789", role: "Franchisee" },
];

export default function SubscriptionList() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      {/* Header */}
      <h2 className="text-[#303972] font-bold text-lg ">
        Subscription Laps Service/Franchisee
      </h2>

      {/* Table Header */}
      <div className="grid grid-cols-[1.5fr_1fr_1fr_auto] items-center text-[#A0A0B4] text-sm font-medium pb-2  border-gray-200">
       
      </div>

      {/* List */}
      <div className="mt-4">
        {subscriptions.map((sub, index) => (
          <div
            key={index}
            className="grid grid-cols-[1.5fr_1fr_1fr_auto] items-center py-4"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#DADAF7]" />
              <h3 className="text-[#303972] font-semibold text-lg">
                {sub.name}
              </h3>
            </div>

            {/* ID */}
            <p className="text-[#6C63FF] text-md font-medium text-center">
              ID {sub.id}
            </p>

            {/* Role */}
            <p className="text-[#303972] font-semibold text-sm text-center">
              {sub.role}
            </p>

            {/* Menu */}
            <div className="flex justify-end">
              <MoreHorizontal className="text-[#A0A0B4]" size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-25 text-sm text-[#A0A0B4]">
        <p>
          Showing <span className="font-medium text-[#303972]">1–5</span> from{" "}
          <span className="font-medium text-[#303972]">100</span> data
        </p>

        <div className="flex items-center gap-2 ">
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#A0A0B4] hover:bg-gray-100">
            <BiSolidLeftArrow />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6C63FF] text-white font-semibold shadow">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#DADAF7] text-[#303972] hover:bg-[#F9F9FF]">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#DADAF7] text-[#303972] hover:bg-[#F9F9FF]">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#A0A0B4] hover:bg-gray-100">
            <BiSolidRightArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
