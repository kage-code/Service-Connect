import React, { useState } from "react";
import AdminSideMenu from "./componentsAdmin/AdminSideMenu";
import AdminHeader from "./componentsAdmin/AdminHeader";
import QuickStatus from "./componentsAdmin/QuickStatus";
import PerformanceChart from "./componentsAdmin/PerformanceChart";
import SubscriptionList from "./componentsAdmin/SubscriptionList";
import ExpenseList from "./componentsAdmin/ExpenseList";

export default function FinancePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[#F7F6FE] min-h-screen">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:block w-[240px] fixed left-0 top-0 h-full">
        <AdminSideMenu isOpen={true} onClose={() => {}} />
      </div>

      {/* MOBILE SIDEBAR */}
      <AdminSideMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 lg:ml-[240px] flex flex-col lg:px-6">
        
        {/* Header wrapped with spacing fix */}
        <div className="mr-3">
          <AdminHeader
            title="Financial Management"
            onMenuClick={() => setSidebarOpen(true)}
          />
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6 sm:p-8 lg:space-y-8">
          
          {/* Top Stats Section */}
          <QuickStatus />

          {/* Chart Section */}
          <div className="mt-8">
            <PerformanceChart />
          </div>

          {/* Subscription + Expense Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <SubscriptionList />
            <ExpenseList />
          </div>

        </div>
      </div>
    </div>
  );
}
