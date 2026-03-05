import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Wallet,
  CreditCard,
  Tickets,
  Grid2x2,
  UserRound,
} from "lucide-react";
import CommonHeader from "./CommonHeader";

export default function NotificationsPage() {
  const navigate = useNavigate();

  const notifications = [
    {
      date: "Today",
      items: [
        {
          icon: "Grid2x2",
          title: "New Category Course.!",
          description: "New the 3D Design Course is Available.",
        },
        {
          icon: "Wallet",
          title: "New Category Course.!",
          description: "New the 3D Design Course is Available.",
        },
        {
          icon: "Gift",
          title: "Today’s Special Offers",
          description: "You have made a Course Payment.",
        },
      ],
    },
    {
      date: "Yesterday",
      items: [
        {
          icon: "CreditCard",
          title: "Credit Card Connected.!",
          description: "Credit Card has been Linked.!",
        },
      ],
    },
    {
      date: "Nov 20, 2022",
      items: [
        {
          icon: "CheckCircle",
          title: "Account Setup Successful.!",
          description: "Your Account has been Created.",
        },
      ],
    },
  ];

  const renderIcon = (iconName) => {
    const iconProps = { className: "w-5 h-5" };
    switch (iconName) {
      case "Grid2x2":
        return <Grid2x2 {...iconProps} className="w-5 h-5 text-[#1D1F2A]" />;
      case "Wallet":
        return <Wallet {...iconProps} className="w-5 h-5 text-white" />;
      case "Gift":
        return <Tickets {...iconProps} className="w-5 h-5 text-[#1D1F2A]" />;
      case "CreditCard":
        return <Wallet {...iconProps} className="w-5 h-5 text-[#1D1F2A]" />;
      case "CheckCircle":
        return <UserRound {...iconProps} className="w-5 h-5 text-[#1D1F2A]" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#E8EBF3] flex flex-col">
      {/* Header */}
      <CommonHeader title="NOTIFICATIONS" onBack={() => navigate(-1)} />

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
        {notifications.map((section, index) => (
          <div key={index}>
            <h2 className="text-sm font-semibold text-gray-700 mb-3">
              {section.date}
            </h2>
            <div className="space-y-3">
              {section.items.map((item, i) => {
                const isWallet = item.icon === "Wallet";
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl flex items-start gap-3 p-4 shadow-sm border border-gray-200"
                  >
                    {/* Icon Container */}
                    <div
                      className={`p-3 rounded-full flex items-center justify-center ${
                        isWallet ? "bg-[#1D1F2A]" : "bg-[#EEF0F3]"
                      }`}
                    >
                      {renderIcon(item.icon)}
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
