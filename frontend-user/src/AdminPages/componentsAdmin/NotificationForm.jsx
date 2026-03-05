import React, { useState } from "react";
import { Calendar, SquarePen } from "lucide-react";

export default function NotificationForm() {
  const [image, setImage] = useState("/ads.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="bg-white rounded-[20px] shadow-md p-8 max-w-6xl md:ml-10 mt-6 border border-gray-100">
      {/* ====== Top Section ====== */}
      <div className="relative mb-8 w-fit">
        <div className="w-80 h-52 rounded-2xl overflow-hidden border border-gray-200">
          <img
            src={image}
            alt="Ad Preview"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <label
          htmlFor="imageUpload"
          className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-md cursor-pointer hover:scale-105 transition-transform z-20"
        >
          <SquarePen size={18} className="text-gray-700" />
        </label>

        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* ====== Form Section ====== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ===== Left Column ===== */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            placeholder="Description"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* Schedule */}
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-700 mb-2">Schedule</p>

            {/* From */}
            <div className="mb-3 ">
              <label className="text-xs text-gray-500">From</label>
              <div className="flex gap-3 mt-1 flex-col sm:flex-row  max-w-sm ">
                <div className="flex items-center gap-2 bg-gray-200 rounded-lg px-3 py-2 text-sm w-full">
                  {/* <Calendar size={16} className="text-gray-500" /> */}
                  <input
                    type="date"
                    defaultValue="2024-06-10"
                    className="outline-none text-blue-700 "
                  />
                </div>
                <input
                  type="time"
                  defaultValue="09:41"
                  className="bg-gray-200 rounded-lg px-3 py-2 text-sm text-blue-700 outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto  "
                />
              </div>
            </div>

            {/* To */}
            <div>
              <label className="text-xs text-gray-500">To</label>
              <div className="flex gap-3 mt-1 flex-col sm:flex-row    max-w-sm ">
                <div className="flex items-center gap-2 bg-gray-200 rounded-lg px-3 py-2 text-sm w-full ">
                  {/* <Calendar size={16} className="text-gray-500" /> */}
                  <input
                    type="date"
                    defaultValue="2024-07-10"
                    className="outline-none text-blue-700    "
                  />
                </div>
                <input
                  type="time"
                  defaultValue="09:41"
                  className="bg-gray-200 rounded-lg px-3 py-2 text-sm text-blue-700 outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto "
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Right Column ===== */}
        <div className="flex flex-col gap-4 justify-start">
          <div>
            <label className="text-sm text-gray-700 font-medium mb-1 block">
              Target Audience
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
              <option>User Name/ID/Group/Location</option>
            </select>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">
              Target Specific
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <label>
                <input type="checkbox" className="mr-2" defaultChecked /> User
              </label>
              <label>
                <input type="checkbox" className="mr-2" defaultChecked /> Service
                Provider
              </label>
              <label>
                <input type="checkbox" className="mr-2" defaultChecked /> Franchisee
              </label>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Send via</p>
            <div className="flex flex-col gap-2 text-sm">
              <label>
                <input type="checkbox" className="mr-2" defaultChecked /> In App
              </label>
              <label>
                <input type="checkbox" className="mr-2" defaultChecked /> SMS
              </label>
              <label>
                <input type="checkbox" className="mr-2" defaultChecked /> Email
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Buttons Row (Updated Responsive) ===== */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-end items-stretch sm:items-center mt-10 gap-4">

        <select className="border border-indigo-300 text-indigo-600 font-medium px-6 py-2 rounded-full text-sm 
                           bg-white hover:bg-indigo-50 transition-all shadow-sm w-full sm:w-auto text-center">
          <option>Status</option>
          <option>Active</option>
          <option>Draft</option>
        </select>

        <button className="bg-[#FF4C24] text-white font-medium px-8 py-2 rounded-full text-sm 
                           hover:bg-[#e33d17] transition-colors w-full sm:w-auto text-center">
          Delete
        </button>

        <button className="bg-[#4B3CFD] text-white font-medium px-8 py-2 rounded-full text-sm 
                           hover:bg-[#372af3] transition-colors w-full sm:w-auto text-center">
          Save
        </button>

      </div>
    </div>
  );
}
