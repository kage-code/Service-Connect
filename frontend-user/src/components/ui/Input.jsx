import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function Input({
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  bgColor = "bg-[#736A68]",
  textColor = "text-white",
  placeholderColor = "placeholder-white",
  className = "",
  variant, // ✅ new prop ("light" or "dark")
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  // ✅ Apply light mode styling if variant="light"
  const isLight = variant === "light";
  const appliedBg = isLight ? "bg-white" : bgColor;
  const appliedText = isLight ? "text-black" : textColor;
  const appliedPlaceholder = isLight
    ? "placeholder-gray-500"
    : placeholderColor;

  return (
    <div
      className={`flex items-center ${appliedBg} px-3 py-3 rounded-md w-full max-w-lg ${className}`}
    >
      {Icon && <Icon className={`mr-2 ${appliedText}`} />}

      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`flex-1 bg-transparent focus:outline-none ${appliedPlaceholder} ${appliedText} text-sm h-8`}
      />

      {type === "password" && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="flex-shrink-0 cursor-pointer text-gray-400"
        >
          {showPassword ? (
            <FaRegEye className="w-5 h-5" />
          ) : (
            <FaRegEyeSlash className="w-5 h-5" />
          )}
        </span>
      )}
    </div>
  );
}
