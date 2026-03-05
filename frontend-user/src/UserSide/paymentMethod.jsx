import React, { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import SubmitButton from "../components/ui/SubmitButton";
import { Plus } from "lucide-react";

export default function PaymentMethodsPage() {
  const [selectedMethod, setSelectedMethod] = useState("Paypal");

  const paymentMethods = [
    { id: "Paypal", label: "Paypal" },
    { id: "GooglePay", label: "Google Pay" },
  ];

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col relative">
      {/* Header */}
      <PageHeader title="Payment Methods" />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="max-w-3xl mx-auto px-4 mt-6 space-y-5">

          {/* Course card */}
          <div className="bg-white rounded-2xl shadow p-4 flex items-center space-x-4">
            <div className="w-16 h-16 bg-black rounded-lg"></div>
            <div>
              <p className="text-xs text-orange-500 font-medium">
                Graphic Design
              </p>
              <h3 className="text-sm font-semibold text-gray-800">
                Setup your Graphic Design..
              </h3>
            </div>
          </div>

          {/* Payment methods */}
          <p className="text-sm font-medium text-gray-600">
            Select the Payment Method you want to use
          </p>

          <div className="space-y-5">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`flex h-20 justify-between items-center bg-white rounded-xl shadow-sm px-4 py-3 cursor-pointer transition 
                  ${selectedMethod === method.id ? "ring-2 ring-gray-800" : ""}
                `}
              >
                <span className="text-sm font-semibold text-gray-800">
                  {method.label}
                </span>
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === method.id
                      ? "border-gray-800"
                      : "border-gray-400"
                  }`}
                >
                  {selectedMethod === method.id && (
                    <span className="w-2.5 h-2.5 bg-gray-800 rounded-full"></span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Add Button */}
      <button className="absolute bottom-28 right-6 bg-[#1D1F2A] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-800 transition">
        <Plus size={20} />
      </button>

      {/* Bottom Confirm Button */}
      <div className="fixed bottom-4 inset-x-0 flex justify-center px-5">
        <div className="w-full max-w-3xl">
          <SubmitButton>
            Enroll Course - $55
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
