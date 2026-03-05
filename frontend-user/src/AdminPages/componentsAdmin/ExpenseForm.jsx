import React from "react";
import { Plus } from "lucide-react"; // ✅ Import plus icon

export default function ExpenseForm({ formData, onChange, onAdd }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-[#303972] mb-4">
        Add Expense
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Invoice No */}
        <div className="flex flex-col">
          <label className="text-sm text-[#2B3674] mb-1 font-semibold">Invoice No</label>
          <input
            name="invoiceNo"
            type="text"
            placeholder="Enter invoice no."
            value={formData.invoiceNo}
            onChange={onChange}
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm text-[#2B3674] mb-1 font-semibold">Date</label>
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={onChange}
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col col-span-1 font-semibold">
          <label className="text-sm text-[#2B3674] mb-1 md:text-[12px] md:font-semibold ">
            Description / Remarks
          </label>
          <input
            name="description"
            type="text"
            placeholder="Enter description"
            value={formData.description}
            onChange={onChange}
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* DR */}
        <div className="flex flex-col">
          <label className="text-sm text-[#2B3674] mb-1 font-semibold">DR</label>
          <input
            name="dr"
            type="number"
            placeholder="0"
            value={formData.dr}
            onChange={onChange}
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* CR */}
        <div className="flex flex-col">
          <label className="text-sm text-[#2B3674] mb-1 font-semibold">CR</label>
          <input
            name="cr"
            type="number"
            placeholder="0"
            value={formData.cr}
            onChange={onChange}
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {/* Buttons */}
  <div className="flex justify-end gap-3 mt-6">
  {/* Add Invoice (outlined + icon) */}
  <button
    className="flex items-center gap-2 border-dotted border-2 text-gray-600 px-6 py-2 rounded-xl text-sm font-medium hover:bg-indigo-50 transition w-50"
  >
    <Plus size={16} className="text-gray-600" /> {/* ✅ Added icon */}
    Add Invoice
  </button>

  {/* Add (filled) */}
  <button
    onClick={onAdd}
    className="bg-[#4F46E5] text-white px-6 py-2 w-50 rounded-3xl text-sm font-medium hover:bg-indigo-600 transition"
  >
    Add
  </button>
</div>

    </div>
  );
}
