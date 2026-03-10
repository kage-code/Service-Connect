import React from "react";
import { ImSpinner3 } from "react-icons/im";
import SubmitButton from "../components/ui/SubmitButton";
import { FaCircleArrowRight } from 'react-icons/fa6';
export default function ServiceComplete() {
  return (
    <div className="min-h-screen bg-[#1C1C2E] flex items-center justify-center p-4">
      {/* Card */}
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-lg py-30 flex flex-col items-center text-center relative">
        {/* Avatar */}
        
          {/* Placeholder for image */}
          <img
            src="/servicecomplete.png"
            alt="Avatar"
            className="w-50 h-full object-cover my-6"
          />
        

       
        

        {/* Heading */}
        <h2 className="text-lg font-semibold text-[#1C1C2E] mb-2">Congratulations</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6">
        Complete your Course. Please Write a Review <br />
        </p>
        <p className="mb-4 -mt-3" >⭐⭐⭐⭐⭐</p>

        {/* Loading Spinner */}
        <div >
            <button className="relative bg-[#1D1F2A] text-white w-[200px] py-3 rounded-full font-medium text-base shadow-md hover:bg-gray-800 transition flex items-center justify-center">
                <span className="mx-auto">Write a Review</span>
                <FaCircleArrowRight className="absolute right-2 h-8 w-8 text-white" />
            </button>
        </div>
      </div>
    </div>
  );
}
