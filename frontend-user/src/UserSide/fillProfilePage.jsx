import { useState, useRef } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdEmail, MdDateRange, MdLocationOn } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import PhoneInputWithCountry from "../components/ui/PhoneInputWithCountry";
import CommonHeader from "../components/ui/CommonHeader";

export default function FillProfile() {
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    dob: "",
    email: "",
    phone: "",
    gender: "",
    houseName: "",
    landmark: "",
    pincode: "",
    district: "",
    state: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleImageClick = () => fileInputRef.current.click();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
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

          {/* Small edit icon */}
          <div
            onClick={handleImageClick}
            className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow cursor-pointer"
          >
            <FaUserEdit className="text-gray-700 text-sm" />
          </div>

          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center mt-6 px-4 grow overflow-y-auto"
      >
        <div className="w-full max-w-lg flex flex-col gap-3 pb-6">
          <Input placeholder="Full Name" value={form.fullName} onChange={handleChange("fullName")} />
          <Input
            placeholder="Address"
            value={form.address}
            onChange={handleChange("address")}
            icon={MdLocationOn}
          />
          <Input
            type="date"
            placeholder="Date of Birth"
            value={form.dob}
            onChange={handleChange("dob")}
            icon={MdDateRange}
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange("email")}
            icon={MdEmail}
          />
          <PhoneInputWithCountry
            value={form.phone}
            onChange={handleChange("phone")}
          />

          <select
            value={form.gender}
            onChange={handleChange("gender")}
            className="bg-[#736A68] text-white px-3 py-4 rounded-md focus:outline-none text-sm w-full max-w-lg mx-auto"
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <Input
            placeholder="House Name"
            value={form.houseName}
            onChange={handleChange("houseName")}
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

          {/* Continue Button */}
          <div className="mt-6 flex justify-center">
            <SubmitButton className="w-full max-w-lg mx-auto">
              Continue
            </SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
}
