import React, { useState } from "react";
import { SquarePen , ChevronDown, ChevronUp } from "lucide-react";

export default function AddCategoryForm() {
  const [image, setImage] = useState("/ads.png");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Status");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission (dummy for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Saved: ${title}, ${description}, ${status}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-sm max-w-300 mx- mt-8 relative"
    >
      {/* Header */}
      <h2 className="text-xl font-bold text-[#303972] mb-6 ml-10">
        Add Category Details
      </h2>

      {/* Image Upload */}
    
<div className="relative inline-block mb-6 ml-10 overflow-visible">
  {/* Image box */}
  <div className="w-80 h-52 rounded-2xl overflow-hidden">
    <img
      src={image}
      alt="Category"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Edit icon — cleanly outside the photo */}
  <label
    htmlFor="imageUpload"
    className="absolute -top-5 -right-5 bg-white  rounded-full p-1.5 shadow-md cursor-pointer z-20"
  >
    <SquarePen  size={14} className="text-gray-700" />
  </label>

  <input
    id="imageUpload"
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="hidden"
  />
</div>

      {/* Inputs */}
      <div className="space-y-2 mb-8 max-w-sm ml-10">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none text-sm"
          />
        </div>

        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows={3}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none text-sm resize-none"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-end gap-3 mt-60">
        {/* Status Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex w-30 items-center justify-between gap-1 border rounded-full px-7 py-1.5 text-sm text-[#4D44B5] hover:bg-gray-50"
          >
            {status}
            {dropdownOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-30 bg-white border rounded-lg shadow-md text-sm overflow-hidden z-10">
              {["Active", "Inactive"].map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setStatus(option);
                    setDropdownOpen(false);
                  }}
                  className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                    status === option ? "bg-gray-50 font-medium" : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 ">
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setDescription("");
              setImage("/blackimg.png");
            }}
            className="w-30 px-5 py-2 rounded-full bg-[#FF5E5E] text-white text-sm font-medium hover:bg-red-500"
          >
            Delete
          </button>
          <button
            type="submit"
            className="px-5 w-30 py-2 rounded-full bg-[#4D44B5] text-white text-sm font-medium hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
