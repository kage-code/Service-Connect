import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../PageHeader";
import StatusToggle from "../StatusToggle";
import { FiPhone } from "react-icons/fi";
import blackImg from "/blackimg.png";
import ChatCallToggle from "../ChatCallToggle";
import BottomNav from "../BottomNav";

// ✅ Wrapper that fakes Chat/Call labels without touching StatusToggle
<ChatCallToggle/>

export default function ChatPage() {
  const [activeTab, setActiveTab] = useState("chat");
  const navigate = useNavigate();

  const chatData = [
    { name: "Virginia M. Patterson", message: "Hi, Good Evening Bro.!", count: 3, time: "14:59" },
    { name: "Dominick S. Jenkins", message: "I Just Finished It.!", count: 2, time: "06:35" },
    { name: "Duncan E. Hoffman", message: "How are you?", time: "08:10" },
    { name: "Roy R. McCraney", message: "OMG, This is Amazing..", count: 5, time: "21:07" },
    { name: "Janice R. Norris", message: "Wow, This is Really Epic", time: "09:15" },
    { name: "Marilyn C. Amerson", message: "Hi, Good Evening Bro.!", count: 3, time: "14:59" },
  ];

  const callData = [
    { name: "Patricia D. Regalado", type: "Incoming", date: "Nov 03, 202X" },
    { name: "Jonathon K. Nix", type: "Incoming", date: "Nov 05, 202X" },
    { name: "Ellen N. Cranford", type: "Outgoing", date: "Nov 06, 202X" },
    { name: "William W. Spicer", type: "Missed", date: "Nov 15, 202X" },
    { name: "Scott D. Chambers", type: "Outgoing", date: "Nov 17, 202X" },
    { name: "Hilda M. Hernandez", type: "Missed", date: "Nov 18, 202X" },
  ];

  const getStatusColor = (type) => {
    switch (type) {
      case "Incoming":
        return "text-blue-500 border-blue-500";
      case "Outgoing":
        return "text-green-500 border-green-500";
      case "Missed":
        return "text-red-500 border-red-500";
      default:
        return "text-gray-500 border-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <PageHeader title="CHAT" showFilter={true} showSearch/>

      {/* ✅ Custom Chat/Call Toggle */}
      <div className="mt-3 mb-2">
        <ChatCallToggle active={activeTab} onChange={setActiveTab} />
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "chat" ? (
          <div className="space-y-3">
            {chatData.map((chat, index) => (
              <div
                key={index}
                onClick={() => navigate("/message")}
                className="flex items-center bg-white rounded-2xl px-4 py-3 shadow-sm hover:bg-gray-50 cursor-pointer"
              >
                <img
                  src={blackImg}
                  alt="User"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{chat.name}</h3>
                  <p className="text-xs text-gray-500 truncate">{chat.message}</p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  {chat.count && (
                    <span className="bg-[#1D1F2A] text-white text-xs font-bold rounded-full px-2 py-1">
                      {String(chat.count).padStart(2, "0")}
                    </span>
                  )}
                  <span className="text-[10px] text-gray-500">{chat.time}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {callData.map((call, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-2xl px-4 py-3 shadow-sm"
              >
                <img
                  src={blackImg}
                  alt="User"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{call.name}</h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className={`border px-1 rounded ${getStatusColor(call.type)} mr-2`}>
                      {call.type}
                    </span>
                    <span>| {call.date}</span>
                  </div>
                </div>
                <FiPhone className="text-gray-600" size={18} />
              </div>
            ))}
          </div>
        )}
      </div>
      <BottomNav/>
    </div>
  );
}
