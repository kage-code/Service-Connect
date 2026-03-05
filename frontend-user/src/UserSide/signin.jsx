import React from "react";
import { useNavigate } from "react-router-dom";
import { SlEnvolope, SlLock } from "react-icons/sl";
import Input from "../components/ui/Input";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import SubmitButton from "../components/ui/SubmitButton";

export default function SignIn() {
  const navigate = useNavigate();

  const handleGoToLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col items-center justify-center px-6">
      {/* Logo + Title */}
      <div className="flex items-center gap-3 mb-6">
        <img src="/smalllogo.png" alt="Logo" className="w-30 h-30 object-contain" />
        <span className="text-3xl font-bold text-[#1D1F2A] mb-8">Service Connect</span>
      </div>

      {/* Heading */}
      <div className="w-full max-w-lg text-left mb-6">
        <h2 className="text-lg font-semibold text-[#202244] mb-1">Getting Started.!</h2>
      </div>

      {/* Form */}
      <form className="w-full max-w-lg space-y-4">
        <Input type="email" placeholder="Email" icon={SlEnvolope} />
        <Input type="password" placeholder="Password" icon={SlLock} />
        <Input type="password" placeholder="Confirm Password" icon={SlLock} />

        {/* Terms Checkbox */}
        <div className="flex items-center justify-between text-xs text-[#545454] mb-10">
          <label className="flex items-center cursor-pointer p-3 bg-[#D9D9DB] rounded-lg">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#36393F] mr-3">
              <div className="absolute flex items-center justify-center w-5 h-5 rounded-full bg-white shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.7)]">
                <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                <svg
                  className="h-3 w-3 text-[#36393F] opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className="text-gray-800 text-base font-medium">Agree to Terms & Conditions</span>
          </label>
        </div>

        {/* Sign In Button */}
        <div className="flex justify-center">
          <SubmitButton type="submit" className="w-full max-w-lg">
            Sign In
          </SubmitButton>
        </div>
      </form>

      {/* Social Login Section */}
      <div className="flex flex-col items-center my-8">
        <p className="text-[#545454] text-sm mb-6 text-center font-extrabold">Or Continue With</p>

        <div className="flex items-center justify-center gap-9 mb-7">
          <button className="w-15 h-15 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform">
            <FcGoogle className="w-7 h-7" />
          </button>
          <button className="w-15 h-15 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform">
            <FaApple className="w-7 h-7" />
          </button>
        </div>

        <p className="text-sm text-[#545454] font-bold mt-5">
          Don’t have an Account?{" "}
          <span
            className="font-extrabold underline text-[#1D1F2A] cursor-pointer hover:text-gray-700"
            onClick={handleGoToLogIn}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
