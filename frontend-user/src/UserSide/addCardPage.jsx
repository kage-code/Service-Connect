import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import TextInput from "../components/ui/request_service/TextInput"; // adjust path
import SubmitButton from "../components/ui/SubmitButton"; // adjust path
import CommonHeader from "../components/ui/CommonHeader";

const AddCardPage = () => {
  const [cardName, setCardName] = useState("Belinda C. Cullen");
  const [cardNumber, setCardNumber] = useState("1234 5678 8765 0876");
  const [expiryDate, setExpiryDate] = useState("12/28");
  const [cvv, setCvv] = useState("***");

  const handleAddCard = () => {
    console.log("Card Added:", { cardName, cardNumber, expiryDate, cvv });
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      {/* <header className="bg-[#1D1F2A] text-white flex items-center px-4 py-3 space-x-2">
        <IoArrowBackCircleOutline className="text-3xl cursor-pointer" />
        <h1 className="text-lg font-semibold tracking-wide">ADD CARD</h1>
      </header> */}
      <CommonHeader title="ADD CARD"/>

      {/* Content */}
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-28 py-6 space-y-6">
        {/* Card Preview */}
        <div className="bg-[#1D1F2A] text-white rounded-2xl p-5 w-full max-w-md md:max-w-lg lg:max-w-2xl h-[190px] shadow-md flex flex-col justify-between">
          <FaCreditCard className="text-2xl" />
          <div>
            <p className="tracking-widest text-lg font-medium mt-6">
              {cardNumber}
            </p>
            <div className="flex justify-between items-start mt-3 text-xs">
              <div className="flex flex-col">
                <p className="text-gray-400 text-[10px]">VALID THRU</p>
                <p className="font-medium">{expiryDate}</p>
                <p className="mt-2 font-semibold text-sm">{cardName}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl space-y-4">
          <div>
            <label className="text-sm font-medium text-[#1D1F2A] mb-1 block">
              Card Name*
            </label>
            <TextInput
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Enter card name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#1D1F2A] mb-1 block">
              Card Number*
            </label>
            <TextInput
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter card number"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-3 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="text-sm font-medium text-[#1D1F2A] mb-1 block">
                Expiry Date*
              </label>
              <TextInput
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-[#1D1F2A] mb-1 block">
                CVV*
              </label>
              <TextInput
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="***"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center">
  <div className="w-[90%] max-w-[500px] font-semibold">
    <SubmitButton onClick={handleAddCard} className="h-15 text-white ">
      Add New Card
    </SubmitButton>
  </div>
</div>

    </div>
  );
};

export default AddCardPage;
