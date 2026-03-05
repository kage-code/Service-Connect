import React, { useState, useEffect } from "react";
import SubmitButton from "../components/ui/SubmitButton";
import { BsBackspace } from "react-icons/bs";
import CommonHeader from "../components/ui/CommonHeader";

export default function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);

  // Countdown logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleInputChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeypadPress = (num) => {
    const index = otp.findIndex((d) => d === "");
    if (index !== -1) {
      handleInputChange(index, num);
    }
  };

  const handleBackspace = () => {
    const lastIndex = otp.slice().reverse().findIndex((d) => d !== "");
    if (lastIndex !== -1) {
      const actualIndex = 3 - lastIndex;
      handleInputChange(actualIndex, "");
    }
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      <CommonHeader title="OTP VERIFICATION"/>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 mt-10">
        {/* Heading */}
        {/* <h2 className="text-lg font-semibold text-gray-900 mb-2">Verify Your OTP</h2> */}

        {/* Paragraph */}
        <p className="text-sm text-gray-600 mb-8 text-center">
          Enter the 4-digit code sent to your registered mobile number.
        </p>

        {/* OTP Boxes */}
        <div className="flex gap-4 justify-center mb-4">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="1"
              value={digit}
              placeholder="*"
              onChange={(e) => handleInputChange(i, e.target.value)}
              className="w-12 h-12 text-center borde bg-[#736A68] border-gray-400 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-[#1e1e2e]"
            />
          ))}
        </div>

        {/* Resend Timer */}
        <div className="text-center text-sm text-gray-600 mb-8">
          Resend Code in <span className="font-semibold text-gray-900">{timer}s</span>
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center mb-6">
          <div className="w-full sm:w-auto min-w-[300px] max-w-xs">
            <SubmitButton>Verify</SubmitButton>
          </div>
        </div>

        {/* Mobile & Tablet Keypad */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-xs lg:hidden">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "←"].map((key, i) => (
            <button
              key={i}
              onClick={() =>
                key === "←"
                  ? handleBackspace()
                  : key !== ""
                  ? handleKeypadPress(key)
                  : null
              }
              className={`h-14 rounded-full flex items-center justify-center text-lg font-semibold transition 
                ${
                  key === "←"
                    ? " text-[#505050] active:bg-red-300"
                    : key === ""
                    ? "bg-transparent"
                    : "bg-[#D9D9DB] text-[#505050] active:bg-[#2d2d3d]"
                }`}
            >
              {key === "←" ? <BsBackspace className="text-xl" /> : key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
