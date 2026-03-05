import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "./CommonHeader";
import SubmitButton from "./SubmitButton";

export default function Security() {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    remember: true,
    biometric: true,
    faceId: false,
  });

  const toggleSetting = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <CommonHeader title="SECURITY" onBack={() => navigate(-1)} />

      {/* Settings list */}
      <div className="flex-1 px-6 py-6 space-y-6 mx-10">
        {[
          { key: "remember", label: "Remember Me" },
          { key: "biometric", label: "Biometric ID" },
          { key: "faceId", label: "Face ID" },
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

        {/* Google Authenticator row */}
        <div className="flex items-center justify-between py-3">
          <span className="text-[15px] font-medium">Google Authenticator</span>
          <span className="text-gray-500 text-xl">{">"}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 pb-8 space-y-4 flex flex-col items-center">
        <SubmitButton
          isSecondary
          showIcon={false}
          className="max-w-2xl w-full"
          onClick={() => console.log("Change PIN")}
        >
          Change PIN
        </SubmitButton>

        <SubmitButton
          showIcon={false}
          className="max-w-2xl w-full"
          onClick={() => console.log("Change Password")}
        >
          Change Password
        </SubmitButton>
      </div>
    </div>
  );
}
