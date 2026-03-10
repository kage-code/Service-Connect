import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import TextInput from "../components/ui/request_service/TextInput"; // adjust path as needed

const ReviewUploadPage = () => {
  const [review, setReview] = useState("");

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-[#1D1F2A] text-white flex items-center px-4 py-3 space-x-2">
        <IoArrowBackCircleOutline className="text-3xl cursor-pointer" />
        <h1 className="text-lg font-semibold tracking-wide">REVIEW</h1>
      </div>

      {/* Page Body */}
      <div className="flex-1 overflow-y-auto px-6 md:px-20 py-6 space-y-8">
        {/* Product Card */}
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
          <div className="bg-black h-16 w-16 rounded-md"></div>
          <div>
            <p className="text-sm text-orange-500 font-medium">Graphic Design</p>
            <p className="font-semibold text-[#1D1F2A]">
              Setup your Graphic Design..
            </p>
          </div>
        </div>

        {/* Upload Section */}
        <div>
          <h2 className="text-[#1D1F2A] font-semibold mb-4">
            Add Photo (or) Video
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer h-48">
            <FaCloudUploadAlt className="text-5xl text-[#1D1F2A] mb-2" />
            <p className="text-gray-600">Click here to Upload</p>
            <input type="file" className="hidden" />
          </div>
        </div>

        {/* Review Input */}
        <div>
          <h2 className="text-[#1D1F2A] font-semibold mb-2">Write your Review</h2>
          <TextInput
            placeholder="Would you like to write anything about this Product?"
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

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#1D1F2A] text-white w-[90%] md:w-[450px] py-3 rounded-full font-medium text-base shadow-md hover:bg-gray-800 transition flex items-center justify-center">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewUploadPage;
