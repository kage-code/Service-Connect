import React, { useState } from "react";
import { MapPin, Calendar, Clock, ChevronDown, SquarePen } from "lucide-react";

export default function BannerAdComp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toDate, setToDate] = useState("");
  const [toTime, setToTime] = useState("");
  const [targetArea, setTargetArea] = useState("upto 5 km radius");
  const [statusOpen, setStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [image, setImage] = useState("/ads.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Saved: ${title}, ${description}, ${selectedStatus}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 w-full">

      <form onSubmit={handleSave} className="flex flex-col h-full w-full">

        <h2 className="text-2xl font-bold text-[#303972] mb-6">Banner Ad</h2>

        {/* IMAGE */}
        <div className="relative mb-6 w-full max-w-xs sm:max-w-sm">
          <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-gray-200">
            <img
              src={image}
              alt="Ad Preview"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <label
            htmlFor="imageUpload"
            className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-md cursor-pointer hover:scale-105 transition-transform"
          >
            <SquarePen size={16} className="text-gray-700" />
          </label>

          <input id="imageUpload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        </div>

        {/* TITLE */}
        <div className="w-full mb-3">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full lg:max-w-2xl border rounded-md px-3 py-2 text-sm max-w-sm"
          />
        </div>

        <p className="text-sm font-semibold text-[#303972] mb-2">Schedule</p>

        {/* FROM */}
        <div className="mb-3 w-full">
          <p className="text-xs text-gray-600 mb-1">From</p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center border rounded-md px-2 py-1 flex-1 min-w-[130px] max-w-sm">
              <Calendar size={14} className="mr-2 text-gray-500" />
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="text-xs w-full outline-none"
              />
            </div>

            <div className="flex items-center border rounded-md px-2 py-1 flex-1 min-w-[110px] max-w-sm">
              <Clock size={14} className="mr-2 text-gray-500" />
              <input
                type="time"
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
                className="text-xs w-full outline-none"
              />
            </div>
          </div>
        </div>

        {/* TO */}
        <div className="mb-4 w-full">
          <p className="text-xs text-gray-600 mb-1">To</p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center border rounded-md px-2 py-1 flex-1 min-w-[130px] max-w-sm">
              <Calendar size={14} className="mr-2 text-gray-500" />
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="text-xs w-full outline-none"
              />
            </div>

            <div className="flex items-center border rounded-md px-2 py-1 flex-1 min-w-[110px] max-w-sm">
              <Clock size={14} className="mr-2 text-gray-500" />
              <input
                type="time"
                value={toTime}
                onChange={(e) => setToTime(e.target.value)}
                className="text-xs w-full outline-none"
              />
            </div>
          </div>
        </div>

        {/* RATE */}
        <div className="w-full mb-3">
          <p className="text-sm font-semibold text-[#303972]">Rate</p>
          <input
            type="text"
            placeholder="Rate 0000/per day"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full lg:max-w-2xl border rounded-md px-3 py-2 text-sm max-w-sm"
          />
        </div>

        {/* TARGET AREA */}
        <p className="text-sm font-semibold text-[#303972] mb-2">Target Area</p>

        <select
          value={targetArea}
          onChange={(e) => setTargetArea(e.target.value)}
          className="w-full lg:max-w-2xl border rounded-md px-3 py-2 text-sm mb-4 max-w-sm"
        >
          <option>upto 5 km radius</option>
          <option>upto 10 km radius</option>
          <option>upto 20 km radius</option>
        </select>

        {/* SUMMARY */}
        <div className="text-sm text-gray-700 mb-6">
          <p>Total number of Days : 30</p>
          <p>Estimated Price : ₹350/-</p>
        </div>

        {/* ⭐ UPDATED RESPONSIVE BUTTONS ⭐ */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-end gap-3 mt-auto w-full">

          {/* STATUS DROPDOWN */}
          <div className="relative w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setStatusOpen(!statusOpen)}
              className="flex justify-center items-center border border-[#4E3BB0] text-[#4E3BB0]
              rounded-full px-5 py-2 text-sm font-medium w-full sm:w-auto"
            >
              {selectedStatus}
              <ChevronDown size={14} className="ml-1" />
            </button>

            {statusOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-md text-sm z-10">
                {["Active", "Inactive", "Pending"].map((s) => (
                  <div
                    key={s}
                    onClick={() => {
                      setSelectedStatus(s);
                      setStatusOpen(false);
                    }}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DELETE */}
          <button
            type="button"
            className="bg-red-500 text-white rounded-full px-6 py-2 text-sm font-semibold w-full sm:w-auto"
            onClick={() => {
              setTitle("");
              setDescription("");
              setImage("/blackimg.png");
            }}
          >
            Delete
          </button>

          {/* SAVE */}
          <button
            type="submit"
            className="bg-[#4E3BB0] text-white rounded-full px-6 py-2 text-sm font-semibold w-full sm:w-auto"
          >
            Save
          </button>
        </div>

      </form>
    </div>
  );
}
