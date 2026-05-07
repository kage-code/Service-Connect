import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

export default function FilterComponent() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    subCategories: Array(6).fill(false),
    xxxxx: Array(4).fill(false),
    price: Array(2).fill(false),
    xxxxxx: Array(4).fill(false),
    rating: Array(4).fill(false),
    duration: Array(4).fill(false),
  });

  const toggleFilter = (section, index) => {
    setFilters((prev) => {
      const updated = [...prev[section]];
      updated[index] = !updated[index];
      return { ...prev, [section]: updated };
    });
  };

  const handleClear = () => {
    setFilters({
      subCategories: Array(6).fill(false),
      xxxxx: Array(4).fill(false),
      price: Array(2).fill(false),
      xxxxxx: Array(4).fill(false),
      rating: Array(4).fill(false),
      duration: Array(4).fill(false),
    });
  };

  const handleApply = () => {
    const params = new URLSearchParams();

    if (filters.price[0]) params.append("price", "paid");
    if (filters.price[1]) params.append("price", "free");

    const ratingValues = ["1", "2", "3", "4"];
    filters.rating.forEach((checked, i) => {
      if (checked) params.append("rating", ratingValues[i]);
    });

    const durationValues = ["0-1", "1-3", "3-5", "full"];
    filters.duration.forEach((checked, i) => {
      if (checked) params.append("duration", durationValues[i]);
    });

    navigate(`/servicepage?${params.toString()}`);
  };

  const renderSection = (title, key, options) => (
    <div>
      <h2 className="text-sm font-semibold mb-2">{title}</h2>
      <div className="space-y-2">
        {options.map((item, i) => (
          <label key={i} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters[key][i]}
              onChange={() => toggleFilter(key, i)}
              className="h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-0"
            />
            <span className="text-sm">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <button className="text-gray-700" onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-sm font-semibold tracking-wide">FILTER</h1>
        </div>
        <button
          onClick={handleClear}
          className="text-sm text-gray-500 font-medium hover:text-gray-700"
        >
          Clear
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-5 py-3 space-y-6 pb-32">
        {renderSection("SubCategories", "subCategories", [
          "Option A", "Option B", "Option C", "Option D", "Option E", "Option F",
        ])}

        {renderSection("xxxxx", "xxxxx", [
          "Choice 1", "Choice 2", "Choice 3", "Choice 4",
        ])}

        {renderSection("Price", "price", ["Paid", "Free"])}

        {renderSection("xxxxxx", "xxxxxx", [
          "Category 1", "Category 2", "Category 3", "Category 4",
        ])}

        {renderSection("Rating", "rating", [
          "⭐ 1 Star", "⭐⭐ 2 Stars", "⭐⭐⭐ 3 Stars", "⭐⭐⭐⭐ 4+ Stars",
        ])}

        {renderSection("Duration", "duration", [
          "0–1 Hour", "1–3 Hours", "3–5 Hours", "Full Day",
        ])}
      </div>

      {/* Fixed SubmitButton at bottom */}
      <div className="fixed bottom-4 inset-x-0 flex justify-center px-5">
        <div className="w-full max-w-5xl">
          <SubmitButton onClick={handleApply}>
            Apply
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}