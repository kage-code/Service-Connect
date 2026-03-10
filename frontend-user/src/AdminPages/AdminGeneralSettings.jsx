import React, { useState } from "react";
import SmsSettingsForm from "../testing_and_components/rest_components/SmsSettings";
import AdminSideMenu from "./componentsAdmin/AdminSideMenu";
import EmailSettingsForm from "../AdminPages/componentsAdmin/EmailSettings";
import AdminHeader from "./componentsAdmin/AdminHeader";

export default function AdminGeneralSettings() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex bg-[#F3F4FF] min-h-screen relative overflow-x-hidden">

      {/* SIDEBAR */}
      <AdminSideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* MAIN CONTENT */}
      <div
        className={`flex-1 transition-all duration-300 
          w-full ml-0 lg:ml-64 overflow-x-hidden
        `}
      >
        {/* HEADER */}
        <AdminHeader
          title="General Settings"
          onMenuClick={() => setMenuOpen(true)}
        />

        {/* PAGE CONTENT */}
        <main className="p-4 sm:p-6 md:p-8 w-full max-w-full overflow-x-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4 w-full">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-9 space-y-6 w-full">
              <SmsSettingsForm />
              <EmailSettingsForm />
            </div>

          </div>

        </main>
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
