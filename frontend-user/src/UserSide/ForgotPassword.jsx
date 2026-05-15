import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import CommonHeader from "../components/ui/CommonHeader";
import api from "../api/axiosInstance";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!email) return setError("Please enter your email.");
    setError("");
    setLoading(true);
    try {
      await api.post("/auth/forgot-password/", { email });
      localStorage.setItem("reset_email", email);
      navigate("/verifyotpreset");
    } catch (err) {
      setError(err.response?.data?.error || "Email not found.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <CommonHeader title="FORGOT PASSWORD" />

      <div className="text-center mt-60 px-6">
        <p className="text-[#545454] text-sm leading-relaxed mt-12">
          Enter your registered email to receive an OTP to reset your password
        </p>
      </div>

      {error && (
        <div className="mx-auto mt-4 w-full max-w-sm px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="flex justify-center mt-8 px-4">
        <div className="w-full max-w-sm flex flex-col gap-4">
          <Input
            placeholder="Email"
            icon={MdEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            onClick={handleContinue}
            disabled={loading}
            className="w-full bg-[#1D1F2A] text-white py-4 rounded-full font-semibold"
          >
            {loading ? "Sending OTP..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}