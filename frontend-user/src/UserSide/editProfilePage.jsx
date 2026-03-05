import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Mail, User, Image } from "lucide-react";
import CommonHeader from "../components/ui/CommonHeader";
import BottomNav from "../components/ui/BottomNav";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import PhoneInputWithCountry from "../components/ui/PhoneInputWithCountry";

export default function EditProfilePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    nickName: "",
    dob: "",
    email: "",
    phone: "",
    gender: "",
    occupation: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Updated profile:", formData);
  };

  return (
    <div className="min-h-screen bg-[#E8EBF3] flex flex-col">
      {/* Header */}
      <CommonHeader title="EDIT PROFILE" onBack={() => navigate(-1)} />

      {/* Body */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-lg mx-auto px-6 mt-6 space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center mb-6 relative">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-md"
              />
              <button className="absolute bottom-1 right-1 bg-white rounded-full p-1.5 shadow-md">
                <Image className="w-5 h-5 text-[#1D1F2A]" />
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <Input
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              icon={User}
              variant="light"
            />
            <Input
              placeholder="Nick Name"
              value={formData.nickName}
              onChange={(e) => handleChange("nickName", e.target.value)}
              variant="light"
            />
            <Input
              placeholder="Date of Birth"
              type="date"
              value={formData.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              icon={Calendar}
              variant="light"
            />
            <Input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              icon={Mail}
              variant="light"
            />

            {/* ✅ Phone Input with white background */}
            <div className="bg-white  px-3 py-2 border border-gray-200 shadow-sm">
              <PhoneInputWithCountry
                value={formData.phone}
                onChange={(value) => handleChange("phone", value)}
                variant="light"
              />
            </div>

            {/* Gender Dropdown */}
            <select
              value={formData.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              className="w-full bg-white rounded-md px-4 py-3 border border-gray-200 text-gray-900 shadow-sm focus:ring-2 focus:ring-black"
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <Input
              placeholder="Occupation"
              value={formData.occupation}
              onChange={(e) => handleChange("occupation", e.target.value)}
              variant="light"
            />
          </div>

          {/* Update Button */}
          <div className="pt-6">
            <SubmitButton onClick={handleSubmit} className="bg-[#1D1F2A] text-white">
              Update
            </SubmitButton>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="h-16">
        <BottomNav />
      </div>
    </div>
  );
}
