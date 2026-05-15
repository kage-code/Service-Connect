import { useState, useRef } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdEmail, MdDateRange, MdLocationOn } from "react-icons/md";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import PhoneInputWithCountry from "../components/ui/PhoneInputWithCountry";
import CommonHeader from "../components/ui/CommonHeader";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function FillProfile() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    phone: "",
    dob: "",
    gender: "",
    house_name: "",
    landmark: "",
    pincode: "",
    district: "",
    state: "",
    bio: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setProfileImageFile(file);
    }
  };

  const handleImageClick = () => fileInputRef.current.click();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      if (profileImageFile) {
        formData.append("profile_image", profileImageFile);
      }

      await api.patch("/user/profile/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/congrats");
    } catch (err) {
      setError("Failed to save profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <CommonHeader title="FILL YOUR PROFILE" />

      {/* Profile Avatar */}
      <div className="flex flex-col items-center mt-6">
        <div className="relative">
          <div
            onClick={handleImageClick}
            className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden cursor-pointer border-2 border-gray-400 hover:opacity-90 transition"
          >
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <FaUserEdit className="text-3xl text-white opacity-70" />
            )}
          </div>
          <div
            onClick={handleImageClick}
            className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow cursor-pointer"
          >
            <FaUserEdit className="text-gray-700 text-sm" />
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
      </div>

      {error && (
        <p className="text-center text-red-500 text-sm mt-4">{error}</p>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center mt-6 px-4 grow overflow-y-auto"
      >
        <div className="w-full max-w-lg flex flex-col gap-3 pb-6">
          <PhoneInputWithCountry
            value={form.phone}
            onChange={handleChange("phone")}
          />
          <Input
            type="date"
            placeholder="Date of Birth"
            value={form.dob}
            onChange={handleChange("dob")}
            icon={MdDateRange}
          />
          <select
            value={form.gender}
            onChange={handleChange("gender")}
            className="bg-[#736A68] text-white px-3 py-4 rounded-md focus:outline-none text-sm w-full"
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <Input
            placeholder="House Name"
            value={form.house_name}
            onChange={handleChange("house_name")}
          />
          <Input
            placeholder="Landmark"
            value={form.landmark}
            onChange={handleChange("landmark")}
          />
          <Input
            placeholder="Pin code"
            value={form.pincode}
            onChange={handleChange("pincode")}
          />
          <Input
            placeholder="District"
            value={form.district}
            onChange={handleChange("district")}
          />
          <Input
            placeholder="State"
            value={form.state}
            onChange={handleChange("state")}
          />

          <div className="mt-6 flex justify-center">
            <SubmitButton className="w-full max-w-lg mx-auto">
              {loading ? "Saving..." : "Continue"}
            </SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
}