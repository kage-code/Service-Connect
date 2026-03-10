import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

export default function BalanceCard({ showCheckButtonOutside = false }) {
  const [balance, setBalance] = useState(121000);

  const refreshBalance = () => {
    const random = Math.floor(Math.random() * 200000 + 50000);
    setBalance(random);
  };

  return (
    <div className="flex flex-col items-start">
      {/* ✅ Check Balance Button outside (above the card) */}
      {showCheckButtonOutside && (
        <button
          onClick={refreshBalance}
          className="mb-3 flex items-center gap-1 text-sm bg-[#5E60CE] px-3 py-1.5 rounded-2xl text-white hover:bg-[#4A4CCC] transition"
        >
          <FiRefreshCcw size={14} />
          Check Balance
        </button>
      )}

      <div className="relative bg-gradient-to-br from-[#3A3B3C] to-[#5A5B5D] rounded-2xl text-white p-8 shadow-2xl w-[380px]">
        {/* Hide inside button if moved outside */}
        {!showCheckButtonOutside && (
          <button
            onClick={refreshBalance}
            className="absolute top-3 right-3 flex items-center gap-1 text-sm bg-[#5E60CE] px-3 py-1.5 rounded-full hover:bg-[#4A4CCC] transition"
          >
            <FiRefreshCcw size={14} />
            Check Balance
          </button>
        )}
        <p className="text-base mt-10">Lasso Keyne</p>
        <p className="text-base tracking-widest mt-2">4551 5667 8686 7775</p>
        <p className="text-xl font-semibold mt-5">
          Account Balance:{" "}
          <span className="text-[#FFD700]">${balance.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
}
