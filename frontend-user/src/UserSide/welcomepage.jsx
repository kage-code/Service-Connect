import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import SubmitButton from "../components/ui/SubmitButton";
import { BiSolidPhoneCall } from "react-icons/bi";


export default function WelcomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignClick =() =>{
    navigate("/signin");
  }

  return (
    <div className="min-h-screen bg-[#1D1F2A] flex flex-col items-center justify-center text-center px-6 ">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-10">
        <img
          src="/mainlogo.png"
          alt="Service Connect Logo"
          className="w-100 h-100 mb-5"
        />
        {/* <h1 className="text-white text-lg font-semibold tracking-wide font-jost">
          Service Connect
        </h1>
        <p className="text-gray-400 text-xs mt-1 tracking-wider font-medium">
          LET'S GROW WITH OUR COMMUNITY
        </p> */}
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col items-center gap-5 w-full max-w-xs abs">
        {/* Login with Email/Phone */}
        <SubmitButton
          onClick={handleLoginClick}
          isSecondary={true}
          showIcon={false}
          className="w-full bg-[#F5F9FF] text-[#1D1F2A] font-semibold py-3 rounded-full shadow-md hover:scale-[1.02] transition-transform "
        ><BiSolidPhoneCall className="text-3xl absolute left-2"/>
          Login with Email/Phone
        </SubmitButton>

        {/* Login with Google */}
        <button className="w-full bg-[#36393F] text-white font-semibold py-3 rounded-full shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform relative ">
          <FcGoogle className="text-4xl absolute left-2 p-1 border rounded-full  bg-white" />
          Login with Google
        </button>
      </div>

      {/* Bottom Text */}
      <p className="text-gray-400 text-sm mt-8">
        Don’t have an account?{" "}
        <span className="text-white font-semibold underline cursor-pointer hover:text-gray-300
        " onClick={handleSignClick}>
          Sign Up
        </span>
      </p>
    </div>
  );
}
