import React from 'react';
import { FaCircleArrowRight } from 'react-icons/fa6';

export default function SubmitButton({
  children,
  onClick,
  type = "submit",
  isSecondary = false,
  className = "", 
  showIcon = true
}) {
  // Base classes
  const baseClasses = "w-full rounded-full relative flex items-center justify-center px-4 transition font-semibold";

  // Conditional color/size
  const colorAndSizeClasses = isSecondary
    ? "bg-[#F5F9FF] text-[#1D1F2A] py-3 hover:bg-gray-200" 
    : "bg-[#1D1F2A] text-white py-4 hover:bg-gray-800"; 

  const finalClasses = `${baseClasses} ${colorAndSizeClasses} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={finalClasses}
    >
      {/* Centered text */}
      <span className="mx-auto">{children}</span>

      {/* Right-aligned arrow icon */}
      {showIcon && (
        <FaCircleArrowRight className="absolute right-1 h-12 w-12" />
      )}
    </button>
  );
}
