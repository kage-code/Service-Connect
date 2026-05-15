import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlLock } from "react-icons/sl";
import Input from "../components/ui/Input";
import CommonHeader from "../components/ui/CommonHeader";
import api from "../api/axiosInstance";

export default function ConformPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!password || !confirmPassword) return setError("Please fill in both fields.");
    if (password !== confirmPassword) return setError("Passwords do not match.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");

    const email = localStorage.getItem("reset_email");
    const otp = localStorage.getItem("reset_otp");

    setError("");
    setLoading(true);
    try {
      await api.post("/auth/reset-password/", { email, otp, new_password: password });
      localStorage.removeItem("reset_email");
      localStorage.removeItem("reset_otp");
      navigate("/forgetpassword/conformpassword/congratspass");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <CommonHeader title="CONFIRM PASSWORD" />

      <div className="mt-16 px-4 flex justify-center">
        <div className="w-full max-w-sm">
          <p className="text-[#202244] text-[19px] leading-relaxed mt-12 font-bold">
            Create Your New Password
          </p>
        </div>
      </div>

      {error && (
        <div className="mx-auto mt-4 w-full max-w-sm px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="flex justify-center mt-8 px-4 mb-3">
        <div className="w-full max-w-sm flex flex-col gap-4">
          <Input
            placeholder="New Password"
            type="password"
            icon={SlLock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            icon={SlLock}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={handleContinue}
            disabled={loading}
            className="w-full bg-[#1D1F2A] text-white py-4 rounded-full font-semibold"
          >
            {loading ? "Resetting..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}