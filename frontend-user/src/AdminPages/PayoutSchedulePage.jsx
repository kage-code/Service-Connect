import React, { useState } from "react";
import AdminSideMenu from "./componentsAdmin/AdminSideMenu";
import AdminHeader from "./componentsAdmin/AdminHeader";
import PayoutForm from "./componentsAdmin/PayoutForm";
import PaymentSchedules from "./componentsAdmin/PaymentScheules";

export default function PayoutSchedulePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F7F7FB]">

      {/* Sidebar */}
      <AdminSideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Header */}
        <AdminHeader 
          onMenuClick={() => setIsOpen(true)} 
          title="Payout Schedule" 
        />

        <div className="p-6 space-y-6">
          <div className="max-w-6xl space-y-15 lg:ml-10">
            <PaymentSchedules />
            <PayoutForm />
          </div>
        </div> 
      </div>
    </div>
  );
}
