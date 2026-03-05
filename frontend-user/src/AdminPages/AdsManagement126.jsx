import React, { useState } from "react";
import SmsSettingsForm from "../testing_and_components/rest_components/SmsSettings";
import AdminSideMenu from "./componentsAdmin/AdminSideMenu";
import EmailSettingsForm from "./componentsAdmin/EmailSettings";
import AdminHeader from "./componentsAdmin/AdminHeader";

export default function AdsManagements126() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-[#F7F6FE] min-h-screen">

      {/* SIDEBAR */}
      <AdminSideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* MAIN CONTENT (shift right on large screens only) */}
      <div className="flex-1 flex flex-col lg:ml-64">

        {/* HEADER */}
        <AdminHeader 
          title="Ads Management"
          onMenuClick={() => setIsOpen(true)}
        />

        {/* MAIN BODY */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 lg:col-span-9 space-y-5">
              <SmsSettingsForm />
              <EmailSettingsForm />
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
