import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { FiPhone, FiSearch, FiMic, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FiPaperclip } from "react-icons/fi";

export default function MessagePage() {
  const navigate = useNavigate();

  // --- search state ---
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // --- dummy messages ---
  const messages = [
    { id: 1, text: "Hi, Nicholas Good Evening 😄", sender: "other", time: "10:45" },
    { id: 2, text: "How was your UI/UX Design Course Like.? 😁", sender: "other", time: "12:45" },
    { id: 3, text: "Hi, Morning too Ronald", sender: "me", time: "15:29" },
    // the message that includes two image thumbnails:
    {
      id: 4,
      text: null, // no text for this message — it's two images
      sender: "me",
      time: "15:52",
      images: ["/blackimg.png", "/blackimg.png"],
    },
    { id: 5, text: "Hello, i also just finished the Sketch Basic ⭐️⭐️⭐️⭐️", sender: "me", time: "15:29" },
    { id: 6, text: "OMG, This is Amazing..", sender: "other", time: "13:59" },
  ];

  // --- filter messages ---
  const filteredMessages = messages.filter((msg) =>
    // if searching, match against text (skip image-only messages unless they contain text)
    !searchQuery ? true : (msg.text || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7FB]">
      {/* HEADER */}
      <header className="bg-white text-[#1D1F2A] px-4 py-3 shadow-md">
        <div className="flex justify-between items-center">
          {/* Back and name */}
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate(-1)} className="p-1">
              <IoIosArrowDropleft size={26} />
            </button>
            <h2 className="font-semibold text-sm sm:text-base">Virginia M. Patterson</h2>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <button className="p-1">
              <FiPhone size={18} />
            </button>
            <button
              onClick={() => setIsSearching((prev) => !prev)}
              className="p-1"
            >
              {isSearching ? <FiX size={18} /> : <FiSearch size={18} />}
            </button>
          </div>
        </div>

        {/* Searchbar toggle */}
        {isSearching && (
          <div className="mt-3">
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#2A2E3F] text-white text-sm px-3 py-2 rounded-md outline-none placeholder-gray-300"
              autoFocus
            />
          </div>
        )}
      </header>

      {/* MESSAGES */}
      <div className="flex-1 px-4 py-3 space-y-4 overflow-y-auto mx-15">
        {/* Date chip */}
        <div className="flex justify-center">
          <div className="bg-white rounded-full shadow px-4 py-1 text-xs font-medium text-gray-600">
            Today
          </div>
        </div>

        {/* Chat bubbles */}
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              {/* standard text bubble */}
              {msg.text && (
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-sm ${
                    msg.sender === "me"
                      ? "bg-[#E8F0FF] text-[#1D1F2A] rounded-br-none"
                      : "bg-[#3C3636] text-white rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-snug">{msg.text}</p>
                  <p
                    className={`text-[10px] mt-1 text-right ${
                      msg.sender === "me" ? "text-gray-500" : "text-gray-300"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              )}

              {/* image group (for messages that contain images array) */}
              {msg.images && (
                <div className="flex flex-col items-end">
                  <div className="flex gap-2">
                    {msg.images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`img-${i}`}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                    ))}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">{msg.time}</div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-sm mt-6">No messages found.</p>
        )}
      </div>

      {/* INPUT BAR */}
     {/* INPUT BAR */}
<div className="flex justify-center w-full mb-3 mt-1">
  <div className="flex items-center bg-white p-2 rounded-full shadow max-w-7xl w-[90%]">
    <input
      type="text"
      placeholder="Message"
      className="flex-1 px-3 text-sm outline-none text-gray-700 placeholder-gray-400"
    />

    {/* Attachment button */}
    <button
      type="button"
      onClick={() => {
        /* open file picker or handle attachment - implement as needed */
        // e.g. fileInputRef.current?.click()
      }}
      className="p-2 rounded-full hover:bg-gray-100 transition mr-2"
      aria-label="Add attachment"
    >
      <FiPaperclip size={18} className="text-gray-600" />
    </button>

    {/* Mic / record button */}
    <button
      type="button"
      className="bg-[#1D1F2A] p-2 rounded-full text-white"
      aria-label="Record audio"
    >
      <FiMic size={18} />
    </button>
  </div>
</div>

    </div>
  );
}
