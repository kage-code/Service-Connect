import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import CommonHeader from "../components/ui/CommonHeader";
import PageHeader from "../components/ui/PageHeader"

const ReviewsPage = () => {
  const reviews = [
    {
      name: "Heather S. McMullen",
      rating: 4.2,
      comment:
        "The Course is Very Good dolor sit amet, con sect tur adipiscing elit. Naturales divitias dixit parob les esse.",
      time: "2 Weeks Ago",
      likes: 760,
      image: "/blackimg.png",
    },
    {
      name: "Natasha B. Lambert",
      rating: 4.8,
      comment:
        "The Course is Very Good dolor veterm, quo etiam utuntur hi populi.",
      time: "2 Weeks Ago",
      likes: 532,
      image: "/blackimg.png",
    },
    {
      name: "Marshall A. Lester",
      rating: 4.6,
      comment:
        "The Course is Very Good dolor sit amet, con sect tur adipiscing elit. Naturales divitias dixit parob les esse.",
      time: "2 Weeks Ago",
      likes: 422,
      image: "/blackimg.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      {/* <header className="bg-[#1D1F2A] text-white flex items-center px-4 py-3 space-x-2">
        <IoArrowBackCircleOutline className="text-3xl cursor-pointer" />
        <h1 className="text-lg font-semibold tracking-wide">REVIEWS</h1>
      </header> */}
      <CommonHeader title="REVIEWS"/>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-8 md:px-20 pb-32">
        {/* Rating Summary */}
        <section className="text-center mt-6">
          <h2 className="text-4xl font-bold text-[#1D1F2A]">4.8</h2>
          <div className="flex justify-center my-2">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                {star}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">Based on 448 Reviews</p>
        </section>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {["Excellent", "Good", "Average", "Below Average"].map((cat, i) => (
            <button
              key={i}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                i === 0
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
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-xl p-4 flex space-x-3 items-start shadow-sm"
            >
              {/* User Image */}
              <img
                src={rev.image}
                alt={rev.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-[#1D1F2A]">
                    {rev.name}
                  </span>
                  <span className="text-xs text-yellow-500 font-medium">
                    ⭐ {rev.rating}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{rev.comment}</p>

                {/* Time + Likes */}
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <FaHeart className="text-red-500" />
                    <span>{rev.likes}</span>
                  </div>
                  <p className="text-[10px] text-gray-400">{rev.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Button */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center">
        <button className="bg-[#1D1F2A] text-white w-[90%] md:w-[400px] py-3 rounded-full font-medium text-base shadow-md hover:bg-gray-800 transition">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default ReviewsPage;
    