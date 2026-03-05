import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import CommonHeader from "../components/ui/CommonHeader";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    specialOffers: true,
    sound: true,
    vibrate: false,
    general: true,
    promo: false,
    payment: true,
    update: true,
    service: false,
    tips: false,
  });

  const toggleSetting = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <CommonHeader title="NOTIFICATION SETTINGS"/>

      {/* Settings list */}
      <div className="flex-1 px-6 py-6 space-y-6">
        {[
          { key: "specialOffers", label: "Special Offers" },
          { key: "sound", label: "Sound" },
          { key: "vibrate", label: "Vibrate" },
          { key: "general", label: "General Notification" },
          { key: "promo", label: "Promo & Discount" },
          { key: "payment", label: "Payment Options" },
          { key: "update", label: "App Update" },
          { key: "service", label: "New Service Available" },
          { key: "tips", label: "New Tips Available" },
        ].map(({ key, label }) => (
          <div
            key={key}
            className="flex items-center justify-between border-b border-gray-100 pb-2"
          >
            <span className="text-[15px] font-medium">{label}</span>
            <button
              onClick={() => toggleSetting(key)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings[key] ? "bg-[#141622]" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings[key] ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
