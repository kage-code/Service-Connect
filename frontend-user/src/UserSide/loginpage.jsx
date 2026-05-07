import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlEnvolope, SlLock } from "react-icons/sl";
import Input from "../components/ui/Input";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import SubmitButton from "../components/ui/SubmitButton";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/auth/login/", {
        email,
        password,
      });
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          Let's Sign In.!
        </h2>
        <p className="text-gray-500 text-sm font-bold">
          Login to Your Account to Continue your Courses
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="w-full max-w-lg mb-4 bg-red-100 text-red-600 text-sm px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      {/* Form */}
      <form className="w-full max-w-lg flex flex-col space-y-4" onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          icon={SlEnvolope}
          className="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          icon={SlLock}
          textColor="text-white"
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between w-full text-xs text-[#545454] mb-10">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 border-gray-400" />
            <span className="text-[#545454] text-sm font-extrabold">Remember Me</span>
          </label>
          <a href="/forgetpassword" className="text-[#545454] font-extrabold text-sm">
            Forgot Password?
          </a>
        </div>

        {/* Sign In Button */}
        <SubmitButton className="w-full flex justify-between items-center px-4">
          {loading ? "Signing In..." : "Sign In"}
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
            onClick={() => navigate("/")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}