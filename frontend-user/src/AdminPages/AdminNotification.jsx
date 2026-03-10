import React, { useState } from "react";
import AdminHeader from "../AdminPages/componentsAdmin/AdminHeader";
import AdminSideMenu from "./componentsAdmin/AdminSideMenu";
import NotificationList from "../AdminPages/componentsAdmin/NotificationList";
import NotificationForm from "../AdminPages/componentsAdmin/NotificationForm";

export default function NotificationManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const notifications = [
    { type:"info",title: "Distribution", description: "Service Request - DropGroup - Mar 4" },
    { type:"notification", title: "Assignments overdue", description: "5 items overdue" },
    { type:"notification", title: "Schedule meeting", description: "Create schedule for meetings and deadlines" },
    { type:"notification", title: "New UI Components", description: "Create list of UI components" },
    { type:"notification", title: "Distribution", description: "Service Request - DropGroup - Mar 4" },
    { type:"announcement", title: "New in BaseCapmp:Steps", description: "announcement from basecamp . feb 15" },
    { type:"notification", title: "Schedule meeting", description: "Create schedule for meetings and deadlines" },
    { type:"notification", title: "New UI Components", description: "Create list of UI components" },
  ];

  return (
    <div className="flex bg-[#F7F6FE] min-h-screen">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:block w-[240px] fixed left-0 top-0 h-full overflow-y-auto">
        <AdminSideMenu isOpen={true} onClose={() => {}} />
      </div>

      {/* MOBILE SIDEBAR */}
      <AdminSideMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 lg:ml-[240px] flex flex-col lg:px-6">
        <div className="mr-3">
          {/* HEADER */}
        <AdminHeader
          title="Notification Management"
          onMenuClick={() => setSidebarOpen(true)}
        
        />
        </div>
        

        {/* CONTENT */}
        <main className="p-6 sm:p-8 lg:space-y-8">
          <NotificationList notifications={notifications} />
          <NotificationForm />
        </main>
      </div>
    </div>
  );
}
