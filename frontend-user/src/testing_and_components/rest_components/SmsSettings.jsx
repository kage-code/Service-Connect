import React, { useState } from "react";
import { Check } from "lucide-react";
export default function SmsSettingsForm() {
  const [smsDriver, setSmsDriver] = useState("Twilio");
  const [twilioSid, setTwilioSid] = useState("");
  const [twilioAuthToken, setTwilioAuthToken] = useState("");
  const [twilioSender, setTwilioSender] = useState("");
  const [nexmoKey, setNexmoKey] = useState("");
  const [nexmoSecret, setNexmoSecret] = useState("");
  const [nexmoSender, setNexmoSender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("SMS Settings updated successfully!");
  };

  return (
    <div className="max-w-5xl  bg-white shadow-lg  border border-gray-200 rounded-lg p-6 shadow-left">
      <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
        Update SMS Setting
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* SMS Driver */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            SMS Driver
          </label>
          <select
            value={smsDriver}
            onChange={(e) => setSmsDriver(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
          >
            <option>Twilio</option>
            <option>Nexmo</option>
            <option>Other</option>
          </select>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* Twilio SID */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Twilio SID
            </label>
            <input
              type="text"
              value={twilioSid}
              onChange={(e) => setTwilioSid(e.target.value)}
              placeholder="AC8f4bfd6..."
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Nexmo Key */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Nexmo Key</label>
            <input
              type="text"
              value={nexmoKey}
              onChange={(e) => setNexmoKey(e.target.value)}
              placeholder="7e29c3ce"
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Twilio Auth Token */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Twilio Auth Token
            </label>
            <input
              type="password"
              value={twilioAuthToken}
              onChange={(e) => setTwilioAuthToken(e.target.value)}
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Nexmo Secret */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Nexmo Secret
            </label>
            <input
              type="password"
              value={nexmoSecret}
              onChange={(e) => setNexmoSecret(e.target.value)}
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Twilio Sender Number */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Twilio Sender Number
            </label>
            <input
              type="text"
              value={twilioSender}
              onChange={(e) => setTwilioSender(e.target.value)}
              placeholder="+14154461617"
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Nexmo Sender Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Nexmo Sender Name
            </label>
            <input
              type="text"
              value={nexmoSender}
              onChange={(e) => setNexmoSender(e.target.value)}
              placeholder="ABC"
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="pt-4 w-30">
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-md text-sm transition flex items-center gap-2 justify-center"
          >
            <Check /> Update
          </button>
        </div>
      </form>
    </div>
  );
}
