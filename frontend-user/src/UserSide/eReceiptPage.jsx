import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axiosInstance";
import CommonHeader from "../components/ui/CommonHeader";
import { FaShareAlt, FaDownload, FaPrint } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import Barcode from "react-barcode";

export default function EReceiptPage() {
  const { bookingId } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/receipt/${bookingId}/`)
      .then((res) => {
        setReceipt(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching receipt:", err);
        setLoading(false);
      });
  }, [bookingId]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) +
      " / " + date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!receipt) {
    return <div className="flex justify-center items-center min-h-screen">Receipt not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <CommonHeader
        title="E-RECEIPT"
        showMenu={true}
        onMenuClick={() => setMenuOpen(!menuOpen)}
      />

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

      <div className="flex flex-col items-center px-6 py-6 space-y-6">
        <div className="flex flex-col items-center space-y-3">
          <img src="/bill.png" alt="bill" className="w-56 object-contain" />
          <div className="flex space-x-4">
            <Barcode
              value={`${receipt.booking_id}2523456`}
              format="CODE128"
              width={1.2}
              height={50}
              displayValue={true}
              background="#ffffff"
              lineColor="#000000"
              fontSize={9}
              margin={5}
            />
            <Barcode
              value={`${receipt.amount}2864634`}
              format="CODE128"
              width={1.2}
              height={50}
              displayValue={true}
              background="#ffffff"
              lineColor="#000000"
              fontSize={9}
              margin={5}
            />
          </div>
        </div>

        <div className="w-full max-w-md bg-white rounded-2xl p-5 space-y-3">
          <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700">
            <p className="font-semibold">Name</p>
            <p>{receipt.client_name}</p>

            <p className="font-semibold">Email ID</p>
            <p>{receipt.client_email}</p>

            <p className="font-semibold">Service</p>
            <p>{receipt.service_name}</p>

            <p className="font-semibold">Category</p>
            <p>{receipt.category_name}</p>

            <p className="font-semibold">Provider</p>
            <p>{receipt.provider_name}</p>

            <p className="font-semibold">Transaction ID</p>
            <p>BK{receipt.booking_id}</p>

            <p className="font-semibold">Amount</p>
            <p>₹{receipt.amount}</p>

            <p className="font-semibold">Date</p>
            <p>{formatDate(receipt.date)}</p>

            <p className="font-semibold">Status</p>
            <span className={`text-white px-2 py-1 rounded-md text-xs font-medium w-fit ${receipt.status === "completed" ? "bg-green-600" : "bg-yellow-500"
              }`}>
              {receipt.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}