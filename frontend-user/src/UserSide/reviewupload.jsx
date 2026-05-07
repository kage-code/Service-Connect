import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import TextInput from "../components/ui/request_service/TextInput";
import api from "../api/axiosInstance";

const ReviewUploadPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingId, providerId, providerName, serviceName } = location.state || {};

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("booking", bookingId);
    formData.append("provider", providerId);
    formData.append("rating", rating);
    formData.append("comment", review);
    if (image) formData.append("image", image);

    setLoading(true);
    try {
      await api.post("/reviews/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/congratsstar");
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <div className="bg-[#1D1F2A] text-white flex items-center px-4 py-3 space-x-2">
        <IoArrowBackCircleOutline
          className="text-3xl cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-semibold tracking-wide">REVIEW</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 md:px-20 py-6 space-y-8">
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
          <div className="bg-black h-16 w-16 rounded-md"></div>
          <div>
            <p className="text-sm text-orange-500 font-medium">{serviceName || "Service"}</p>
            <p className="font-semibold text-[#1D1F2A]">{providerName || "Provider"}</p>
          </div>
        </div>

        <div>
          <h2 className="text-[#1D1F2A] font-semibold mb-2">Rating</h2>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-3xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[#1D1F2A] font-semibold mb-4">Add Photo (or) Video</h2>
          <label className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer h-48">
            <FaCloudUploadAlt className="text-5xl text-[#1D1F2A] mb-2" />
            <p className="text-gray-600">{image ? image.name : "Click here to Upload"}</p>
            <input type="file" className="hidden" onChange={handleImageChange} accept="image/*,video/*" />
          </label>
        </div>

        <div>
          <h2 className="text-[#1D1F2A] font-semibold mb-2">Write your Review</h2>
          <TextInput
            placeholder="Would you like to write anything about this service?"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            maxLength={250}
            multiline
            rows={5}
            className="shadow-md"
          />
          <p className="text-sm text-gray-500 mt-1 text-right">
            *{250 - review.length} Characters Remaining
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#1D1F2A] text-white w-[90%] md:w-[450px] py-3 rounded-full font-medium text-base shadow-md hover:bg-gray-800 transition"
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewUploadPage;