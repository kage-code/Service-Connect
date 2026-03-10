import React from "react";
import { useNavigate } from "react-router-dom"; 
import { SlEnvolope, SlLock } from "react-icons/sl";
import Input from "../components/ui/Input";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import SubmitButton from "../components/ui/SubmitButton";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleGoToSignIn = () => {
    navigate('/'); 
  };
  ``
  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col items-center justify-center px-6">
      
      {/* Logo + Title */}
      <div className="flex items-center gap-3 mb-6">
        <img src="/smalllogo.png" alt="Logo" className="w-30 h-30 object-contain" />
        <span className="text-3xl font-bold text-[#1D1F2A] mb-8">
          Service Connect
        </span>
      </div>

      {/* Heading */}
      <div className="w-full max-w-lg text-left mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1 font-jost">
          Let’s Sign In.!
        </h2>
        <p className="text-gray-500 text-sm font-bold">
          Login to Your Account to Continue your Courses
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-lg flex flex-col space-y-4">
        <Input
          type="email"
          placeholder="Email"
          icon={SlEnvolope}
          className="w-full"
        />
        <Input
          type="password"
          placeholder="Password"
          icon={SlLock}
          textColor="text-white"
          className="w-full"
        />

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between w-full text-xs text-[#545454] mb-10">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 border-gray-400" />
            <span className="text-[#545454] text-sm font-extrabold">Remember Me</span>
          </label>
          <a href="#" className="text-[#545454] font-extrabold text-sm">
            Forgot Password?
          </a>
        </div>

        {/* Sign In Button */}
        <SubmitButton className="w-full flex justify-between items-center px-4">
          Sign In
        </SubmitButton>
      </form>

      {/* Social Login */}
      <div className="flex flex-col items-center my-8">
        <p className="text-[#545454] text-sm mb-6 text-center font-extrabold">
          Or Continue With
        </p>

        <div className="flex items-center justify-center gap-9 mb-7">
          <button className="w-15 h-15 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform">
            <FcGoogle className="w-7 h-7" />
          </button>

          <button className="w-15 h-15 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform">
            <FaApple className="w-7 h-7" />
          </button>
        </div>

        <p className="text-sm text-[#545454] font-bold mt-5">
          Don't have an Account?{" "}
          <span 
            className="font-extrabold underline text-[#1D1F2A] cursor-pointer hover:text-gray-700"
            onClick={handleGoToSignIn}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
