import { useState } from "react";

export default function DesktopToggle() {
  const [active, setActive] = useState("Near By");
  const options = ["Near By", "10km", "All"];

  return (
    <div className="flex justify-center w-full ">
      <div className="w-[70%] flex bg-gray-200 rounded-full  border-4 ">
        {options.map((label) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex-1 py-1.5 rounded-full font-medium text-xs transition ${
              active === label
                ? "bg-[#1D1F2A] text-white shadow"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
