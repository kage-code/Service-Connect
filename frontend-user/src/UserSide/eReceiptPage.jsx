import React, { useState } from "react";
import CommonHeader from "../components/ui/CommonHeader";
import { FaShareAlt, FaDownload, FaPrint } from "react-icons/fa";

export default function EReceiptPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      {/* Header */}
      <CommonHeader
        title="E-RECEIPT"
        showMenu={true}
        onMenuClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Menu Dropdown */}
      {menuOpen && (
        <div className="absolute right-4 top-16 w-40 bg-white rounded-xl shadow-lg text-gray-700 text-sm py-2 z-50">
          <button className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left">
            <FaShareAlt className="mr-2" /> Share
          </button>
          <button className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left">
            <FaDownload className="mr-2" /> Download
          </button>
          <button className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left">
            <FaPrint className="mr-2" /> Print
          </button>
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col items-center px-6 py-6 space-y-6">
        {/* Barcode / Image Section */}
        <div className="flex flex-col items-center space-y-3">
          <img
            src="./bill.png"
            alt="QR or barcode"
            className="w-56 h-38 object-contain"
          />
           <img
            src="./barcode.png"
            alt="QR or barcode"
            className="w-86 h-44 object-contain"
          />
        
        </div>

        {/* Receipt Details */}
        <div className="w-full max-w-md bg-white rounded-2xl  p-5 space-y-3">
          <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700">
            <p className="font-semibold">Name</p>
            <p>Scott R. Shoemake</p>

            <p className="font-semibold">Email ID</p>
            <p>shoemake.redial@gmail.com</p>

            <p className="font-semibold">Course</p>
            <p>3D Character Illustration Cre..</p>

            <p className="font-semibold">Category</p>
            <p>Web Development</p>

            <p className="font-semibold">Transaction ID</p>
            <p>SK345680976</p>

            <p className="font-semibold">Price</p>
            <p>$55.00</p>

            <p className="font-semibold">Date</p>
            <p>Nov 20, 202X / 15:45</p>

            <p className="font-semibold">Status</p>
            <span className="text-white bg-green-600 px-2 py-1 rounded-md text-xs font-medium w-fit">
              Paid
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
