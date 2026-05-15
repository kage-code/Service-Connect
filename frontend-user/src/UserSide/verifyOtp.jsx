import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../components/ui/SubmitButton";
import { BsBackspace } from "react-icons/bs";
import CommonHeader from "../components/ui/CommonHeader";
import api from "../api/axiosInstance";

export default function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const email = localStorage.getItem("pending_email");

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleInputChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeypadPress = (num) => {
    const index = otp.findIndex((d) => d === "");
    if (index !== -1) handleInputChange(index, String(num));
  };

  const handleBackspace = () => {
    const lastIndex = otp.slice().reverse().findIndex((d) => d !== "");
    if (lastIndex !== -1) handleInputChange(3 - lastIndex, "");
  };

  const handleVerify = async () => {
    console.log("handleVerify called, otp:", otp);
    const otpCode = otp.join("");
    if (otpCode.length < 4) return setError("Please enter the full 4-digit code.");
    setError("");
    setLoading(true);
    try {
      await api.post("/auth/verify-otp/", { email, otp: otpCode });
      localStorage.removeItem("pending_email");
      navigate("/fillprofile");
    } catch (err) {
      setError(err.response?.data?.error || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <CommonHeader title="OTP VERIFICATION" />

      <div className="flex flex-col items-center justify-center flex-1 px-4 mt-10">
        <p className="text-sm text-gray-600 mb-2 text-center">
          Enter the 4-digit code sent to your email.
        </p>
        <p className="text-sm font-semibold text-gray-800 mb-8">{email}</p>

        {error && (
          <div className="mb-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

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
              className="w-12 h-12 text-center bg-[#736A68] border-gray-400 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-[#1e1e2e]"
            />
          ))}
        </div>

        <div className="text-center text-sm text-gray-600 mb-8">
          {timer > 0 ? (
            <>Resend Code in <span className="font-semibold text-gray-900">{timer}s</span></>
          ) : (
            <span
              className="font-semibold text-[#1D1F2A] underline cursor-pointer"
              onClick={() => setTimer(59)}
            >
              Resend Code
            </span>
          )}
        </div>

        <div className="w-full flex justify-center mb-6">
          <div className="w-full sm:w-auto min-w-[300px] max-w-xs">
            <button
              type="button"
              onClick={handleVerify}
              className="w-full bg-[#1D1F2A] text-white py-4 rounded-full font-semibold"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full max-w-xs lg:hidden">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "←"].map((key, i) => (
            <button
              key={i}
              onClick={() =>
                key === "←" ? handleBackspace() : key !== "" ? handleKeypadPress(key) : null
              }
              className={`h-14 rounded-full flex items-center justify-center text-lg font-semibold transition
                ${key === "←" ? "text-[#505050] active:bg-red-300"
                  : key === "" ? "bg-transparent"
                    : "bg-[#D9D9DB] text-[#505050] active:bg-[#2d2d3d]"}`}
            >
              {key === "←" ? <BsBackspace className="text-xl" /> : key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}