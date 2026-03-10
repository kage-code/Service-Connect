import React, { useState } from "react";
import { Check } from "lucide-react";
export default function EmailSettingsForm() {
  const [smsDriver, setSmsDriver] = useState("SMTP");
  const [twilioSid, setTwilioSid] = useState("");
  const [twilioAuthToken, setTwilioAuthToken] = useState("");
  const [twilioSender, setTwilioSender] = useState("");
  const [nexmoKey, setNexmoKey] = useState("");
  const [mailpassword, setMailPassword] = useState("");
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

        {/* 2-column layout */}
        <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            SMS Driver
          </label>
          <select
            value={smsDriver}
            onChange={(e) => setSmsDriver(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
          >
            <option>SMTP</option>
            <option>Nexmo</option>
            <option>Other</option>
          </select>
        </div>
          {/* Twilio SID */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Mail Host
            </label>
            <input
              type="text"
              value={twilioSid}
              onChange={(e) => setTwilioSid(e.target.value)}
              placeholder="smtp.mailtrap.io"
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Nexmo Key */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Mail port</label>
            <input
              type="text"
              value={nexmoKey}
              onChange={(e) => setNexmoKey(e.target.value)}
              placeholder="2525"
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Twilio Auth Token */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Mail Username
            </label>
            <input
              type="text"
              placeholder="5b1c119ce5a400"
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Nexmo Secret */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Mail Password
            </label>
            <input
              type="password"
              value={mailpassword}
              onChange={(e) => setMailPassword(e.target.value)}
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Twilio Sender Number */}
           <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mail Encryption 
          </label>
          <select
            value={smsDriver}
            onChange={(e) => setSmsDriver(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
          >
            <option>TLS</option>
            <option>Nexmo</option>
            <option>Other</option>
          </select>
        </div>

        <div>
            <label className="block text-sm text-gray-600 mb-1">
              Sender Email
            </label>
            <input
              type="email"
              value={nexmoSender}
              onChange={(e) => setNexmoSender(e.target.value)}
              placeholder="info@mail.com"
              className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Nexmo Sender Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Sender Name
            </label>
            <input
              type="text"
              value={nexmoSender}
              onChange={(e) => setNexmoSender(e.target.value)}
              placeholder="info company"
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
