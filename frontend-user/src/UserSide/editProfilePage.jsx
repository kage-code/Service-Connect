import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Mail, User, Image } from "lucide-react";
import CommonHeader from "../components/ui/CommonHeader";
import BottomNav from "../components/ui/BottomNav";
import Input from "../components/ui/Input";
import SubmitButton from "../components/ui/SubmitButton";
import PhoneInputWithCountry from "../components/ui/PhoneInputWithCountry";
import api from "../api/axiosInstance";

export default function EditProfilePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    dob: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/user/profile/");
        const d = res.data;
        console.log("profile data:", d); // ← here
        setFormData({
          full_name: d.full_name || "",
          dob: d.dob || "",
          email: d.email || "",
          phone: d.phone || "",
          gender: d.gender || "",
        });
      } catch (err) {
        setError("Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      await api.patch("/user/profile/", formData);
      setSuccess("Profile updated successfully.");
    } catch (err) {
      setError("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E8EBF3] flex flex-col">
      <CommonHeader title="EDIT PROFILE" onBack={() => navigate(-1)} />

      <div className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-lg mx-auto px-6 mt-6 space-y-6">

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

          {error && <div className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}
          {success && <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm">{success}</div>}

          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : (
            <div className="space-y-4">
              <Input
                placeholder="Full Name"
                value={formData.full_name}
                onChange={(e) => handleChange("full_name", e.target.value)}
                icon={User}
                variant="light"
              />
              <Input
                placeholder="Date of Birth"
                type="date"
                value={formData.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
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

              <div className="bg-white px-3 py-2 border border-gray-200 shadow-sm">
                <PhoneInputWithCountry
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  variant="light"
                />
              </div>

              <select
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-full bg-white rounded-md px-4 py-3 border border-gray-200 text-gray-900 shadow-sm focus:ring-2 focus:ring-black"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          <div className="pt-6">
            <SubmitButton onClick={handleSubmit} disabled={saving}>
              {saving ? "Saving..." : "Update"}
            </SubmitButton>
          </div>
        </div>
      </div>

      <div className="h-16">
        <BottomNav />
      </div>
    </div>
  );
}