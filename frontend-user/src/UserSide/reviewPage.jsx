import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CommonHeader from "../components/ui/CommonHeader";

const ReviewsPage = () => {
  const { providerId } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!providerId) return;
    axios.get(`http://127.0.0.1:8000/api/reviews/provider/${providerId}/`)
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setLoading(false);
      });
  }, [providerId]);

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + parseFloat(r.rating), 0) / reviews.length).toFixed(1)
    : "0.0";

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    const diff = Math.floor((Date.now() - date) / (1000 * 60 * 60 * 24 * 7));
    return diff <= 1 ? "1 Week Ago" : `${diff} Weeks Ago`;
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <CommonHeader title="REVIEWS" />

      <div className="flex-1 overflow-y-auto px-8 md:px-20 pb-32">
        {/* Rating Summary */}
        <section className="text-center mt-6">
          <h2 className="text-4xl font-bold text-[#1D1F2A]">{avgRating}</h2>
          <div className="flex justify-center my-2">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-yellow-400 text-xl">{star}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">Based on {reviews.length} Reviews</p>
        </section>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {["Excellent", "Good", "Average", "Below Average"].map((cat, i) => (
            <button
              key={i}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${i === 0
                  ? "bg-[#1D1F2A] text-white"
                  : "bg-white text-[#1D1F2A] border border-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews List */}
        <div className="space-y-4 mt-6">
          {loading ? (
            <div className="flex justify-center items-center p-10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">No reviews yet.</p>
          ) : (
            reviews.map((rev, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-4 flex space-x-3 items-start shadow-sm"
              >
                <img
                  src={rev.client_image || "/blackimg.png"}
                  alt={rev.client_name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-[#1D1F2A]">
                      {rev.client_name}
                    </span>
                    <span className="text-xs text-yellow-500 font-medium">
                      ⭐ {rev.rating}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{rev.comment}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <FaHeart className="text-red-500" />
                      <span>0</span>
                    </div>
                    <p className="text-[10px] text-gray-400">{formatTime(rev.created_at)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Write a Review Button */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center">
        <button
          onClick={() => navigate("/reviewupload", {
            state: { providerId: providerId }
          })}
          className="bg-[#1D1F2A] text-white w-[90%] md:w-[400px] py-3 rounded-full font-medium text-base shadow-md hover:bg-gray-800 transition"
        >
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default ReviewsPage;