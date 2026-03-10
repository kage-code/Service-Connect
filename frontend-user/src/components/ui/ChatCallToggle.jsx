export default function ChatCallToggle({ active, onChange }) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[70%] flex bg-gray-200 rounded-full p-0.5">
        <button
          className={`flex-1 py-1.5 rounded-full font-medium text-xs transition ${
            active === "chat"
              ? "bg-[#1D1F2A] text-white shadow"
              : "text-gray-600"
          }`}
          onClick={() => onChange("chat")}
        >
          Chat
        </button>
        <button
          className={`flex-1 py-1.5 rounded-full font-medium text-xs transition ${
            active === "call"
              ? "bg-[#1D1F2A] text-white shadow"
              : "text-gray-600"
          }`}
          onClick={() => onChange("call")}
        >
          Call
        </button>
      </div>
    </div>
  );
}
