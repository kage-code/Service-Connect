import React from "react";
import { ImSpinner3 } from "react-icons/im";
export default function CongratulationsMan() {
  return (
    <div className="min-h-screen bg-[#1C1C2E] flex items-center justify-center p-4">
      {/* Card */}
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-lg py-30 flex flex-col items-center text-center relative">
        {/* Avatar */}
        
          {/* Placeholder for image */}
          <img
            src="/congratsman.png"
            alt="Avatar"
            className="w-50 h-full object-cover my-6"
          />
        

       
        

        {/* Heading */}
        <h2 className="text-lg font-semibold text-[#1C1C2E] mb-2">Congratulations</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6">
          Your Account is Ready to Use. You will be redirected to the Home Page in a Few Seconds.
        </p>

        {/* Loading Spinner */}
        <div >
            <ImSpinner3 className="animate-spin h-7 w-7"/>
        </div>
      </div>
    </div>
  );
}
