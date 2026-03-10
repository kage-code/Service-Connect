import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  ChevronDown,
  SquarePen,
} from "lucide-react";

import FranServDrop from "../testing_and_components/rest_components/FranServDrop";
import AdCategory from "../testing_and_components/rest_components/AdCategory";
import AdminSideMenu from "./componentsAdmin/AdminSideMenu";
import AdminHeader from "../AdminPages/componentsAdmin/AdminHeader";

export default function AdTypeForm() {
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

  const [menuOpen, setMenuOpen] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex bg-[#F7F6FE] min-h-screen relative overflow-x-hidden">

      {/* SIDEBAR */}
      <AdminSideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* MAIN CONTENT */}
      <div
        className="flex-1 transition-all duration-300 
                    w-full ml-0 lg:ml-64 overflow-x-hidden"
      >
        <AdminHeader
          onMenuClick={() => setMenuOpen(true)}
          title="Ads Management"
        />

        {/* PAGE CONTENT WRAPPER — SAME AS BannerAds */}
        <div className="px-3 sm:px-4 md:px-6 py-4 
                          w-full max-w-full overflow-x-hidden">

          {/* DROPDOWN */}
          <div className="w-full max-w-full overflow-x-hidden">
            <FranServDrop />
          </div>

          {/* RESPONSIVE GRID — SAME AS BannerAds */}
          <div
            className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12
                        gap-4 sm:gap-5 lg:gap-6 mt-4 w-full"
          >

            {/* LEFT CATEGORY PANEL */}
            <div
              className="sm:col-span-2 lg:col-span-3
                          w-full max-w-full overflow-x-hidden"
            >
              <AdCategory />
            </div>

            {/* RIGHT FORM PANEL */}
            <div
              className="sm:col-span-4 lg:col-span-9
                          w-full max-w-full overflow-x-hidden"
            >
              <div className="bg-white rounded-2xl shadow-sm 
                                p-4 sm:p-6 w-full max-w-full">

                <form onSubmit={(e) => e.preventDefault()}>

                  <h3 className="text-lg sm:text-xl font-bold text-[#303972] mb-6">
                    Ads - Type
                  </h3>

                  {/* USER INFO */}
                  <div className="flex gap-3 mb-6">
                    <img
                      src="/profile.png"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#303972] text-sm sm:text-base">
                        Karan Hope
                      </p>
                      <p className="text-xs text-gray-600">Service Provider</p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <MapPin size={12} className="mr-1" /> North Paravoor, Eravam
                      </p>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="relative w-full max-w-[20rem] mb-6">
                    <img
                      src={image}
                      className="w-full h-40 sm:h-52 rounded-2xl object-cover"
                    />
                    <label
                      htmlFor="uploadImage"
                      className="absolute top-2 right-2 bg-white p-2 shadow rounded-full cursor-pointer"
                    >
                      <SquarePen size={16} />
                    </label>
                    <input
                      id="uploadImage"
                      type="file"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>

                  {/* TITLE */}
                  <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full lg:max-w-2xl
                                border px-3 py-2 rounded-md
                                text-sm mb-4"
                  />

                  {/* DESCRIPTION */}
                  <input
                    type="text"
                    value={description}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full lg:max-w-2xl
                                border px-3 py-2 rounded-md
                                text-sm mb-6"
                  />

                  {/* SCHEDULE */}
                  <p className="font-semibold text-[#303972] mb-3">Schedule</p>

                  {/* FROM */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-1">From</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex items-center border px-3 py-2 rounded-md flex-1">
                        <Calendar size={14} className="mr-2" />
                        <input
                          type="date"
                          value={fromDate}
                          onChange={(e) => setFromDate(e.target.value)}
                          className="text-xs w-full outline-none"
                        />
                      </div>

                      <div className="flex items-center border px-3 py-2 rounded-md flex-1">
                        <Clock size={14} className="mr-2" />
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
                  <div className="mb-6">
                    <p className="text-xs text-gray-600 mb-1">To</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex items-center border px-3 py-2 rounded-md flex-1">
                        <Calendar size={14} className="mr-2" />
                        <input
                          type="date"
                          value={toDate}
                          onChange={(e) => setToDate(e.target.value)}
                          className="text-xs w-full outline-none"
                        />
                      </div>

                      <div className="flex items-center border px-3 py-2 rounded-md flex-1">
                        <Clock size={14} className="mr-2" />
                        <input
                          type="time"
                          value={toTime}
                          onChange={(e) => setToTime(e.target.value)}
                          className="text-xs w-full outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* TARGET AREA */}
                  <p className="font-semibold text-[#303972] mb-2">Target Area</p>
                  <select
                    value={targetArea}
                    onChange={(e) => setTargetArea(e.target.value)}
                    className="border w-full px-3 py-2 rounded-md text-sm mb-6"
                  >
                    <option>upto 5 km radius</option>
                    <option>upto 10 km radius</option>
                    <option>upto 20 km radius</option>
                  </select>

                  {/* SUMMARY */}
                  <div className="text-sm text-gray-700 mb-6">
                    <p>Total Days: 30</p>
                    <p>Estimated Price: ₹350/-</p>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap justify-end gap-3 mt-4">

                    <div className="relative w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => setStatusOpen(!statusOpen)}
                        className="border text-[#4E3BB0] border-[#4E3BB0]
                                    px-5 py-2 rounded-full text-sm
                                    w-full sm:w-auto flex justify-center items-center"
                      >
                        <span className="flex-1 text-center">{selectedStatus}</span>
                        <ChevronDown className="ml-1" size={14} />
                      </button>
                    </div>

                    <button className="bg-red-500 text-white px-6 py-2 rounded-full text-sm w-full sm:w-auto">
                      Delete
                    </button>

                    <button className="bg-[#4E3BB0] text-white px-6 py-2 rounded-full text-sm w-full sm:w-auto">
                      Save
                    </button>

                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
