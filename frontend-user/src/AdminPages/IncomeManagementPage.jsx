import React, { useState } from "react";
import AdminSideMenu from "./componentsAdmin/AdminSideMenu";
import AdminHeader from "./componentsAdmin/AdminHeader";
import IncomeTable from "./componentsAdmin/IncomeTable";

export default function IncomeManagement() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex bg-[#F7F6FE] min-h-screen relative overflow-x-hidden">

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
          title="Income Management"
          onMenuClick={() => setMenuOpen(true)}
          
        />

        {/* PAGE CONTENT */}
        <main className="p-4 sm:p-6 md:p-8 w-full max-w-full overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4 w-full">
            {/* TABLE SECTION */}
            <div className="lg:col-span-12 w-full">
              <IncomeTable />
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
