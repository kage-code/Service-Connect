import React, { useState } from "react";
import AdCategory from "../testing_and_components/rest_components/AdCategory";
import FranServDrop from "../testing_and_components/rest_components/FranServDrop";
import AdminSideMenu from "./componentsAdmin/AdminSideMenu";
import BannerAdComp from "../AdminPages/componentsAdmin/BannerAdComp";
import AdminHeader from "./componentsAdmin/AdminHeader";

export default function BannerAds() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex bg-[#F7F6FE] min-h-screen relative overflow-x-hidden">

      {/* SIDEBAR */}
      <AdminSideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* MAIN CONTENT */}
      <div
        className={`flex-1 transition-all duration-300 
          w-full ml-0 lg:ml-64 overflow-x-hidden
        `}
      >
        <AdminHeader
          title="Ads Management"
          onMenuClick={() => setMenuOpen(true)}
        />

        {/* PAGE CONTENT WRAPPER */}
        <div className="px-3 sm:px-4 md:px-6 py-4 w-full max-w-full overflow-x-hidden">

          {/* DROPDOWN */}
          <div className="w-full max-w-full overflow-x-hidden">
            <FranServDrop />
          </div>

          {/* RESPONSIVE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 
                          gap-4 sm:gap-5 lg:gap-6 mt-4 w-full">

            {/* LEFT CATEGORY PANEL */}
            <div className="sm:col-span-2 lg:col-span-3 
                            w-full max-w-full overflow-x-hidden">
              <AdCategory />
            </div>

            {/* RIGHT BANNER PANEL */}
            <div className="sm:col-span-4 lg:col-span-9 
                            w-full max-w-full overflow-x-hidden">
              <BannerAdComp />
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
  