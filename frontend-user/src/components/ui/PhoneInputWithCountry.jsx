import { useState } from "react";

const countries = [
  { code: "(+91)", flagClass: "fi fi-in" },
  { code: "(+1)", flagClass: "fi fi-us" },
  { code: "(+44)", flagClass: "fi fi-gb" },
  { code: "(+1)", flagClass: "fi fi-ca" },
  { code: "(+61)", flagClass: "fi fi-au" },
];

export default function PhoneInputWithCountry({
  value = "",
  onChange,
  variant = "dark", // 👈 NEW PROP (dark by default)
  className = "",
}) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const isLight = variant === "light";

  const handleCountryChange = (e) => {
    const selected = countries.find((c) => c.code === e.target.value);
    setSelectedCountry(selected);
    onChange({
      target: { value: selected.code + " " + value.replace(/^\+\d+\s*/, "") },
    });
  };

  const handlePhoneChange = (e) => {
    const number = e.target.value.replace(/[^\d\s+]/g, "");
    onChange({
      target: {
        value: selectedCountry.code + " " + number.replace(/^\+\d+\s*/, ""),
      },
    });
  };

  return (
    <div
      className={`flex items-center px-3 py-3 rounded-md w-full max-w-lg mx-auto shadow-sm border transition 
      ${isLight ? "bg-white border-gray-300" : "bg-[#736A68] border-transparent"} ${className}`}
    >
      {/* Country selector with flag */}
      <div className="flex items-center gap-2">
        <span className={`${selectedCountry.flagClass} text-lg`} />
        <select
          value={selectedCountry.code}
          onChange={handleCountryChange}
          className={`text-sm px-1 py-1 rounded-md outline-none cursor-pointer focus:ring-1 
          ${isLight ? "bg-white text-black focus:ring-black" : "bg-[#736A68] text-white focus:ring-white"}`}
        >
          {countries.map((c) => (
            <option
              key={c.code}
              value={c.code}
              className={`${isLight ? "bg-white text-black" : "bg-[#5f5654] text-white"}`}
            >
              {c.code}
            </option>
          ))}
        </select>
      </div>

      {/* Phone input */}
      <input
        type="tel"
        placeholder="Enter phone number"
        value={value}
        onChange={handlePhoneChange}
        className={`flex-1 text-sm px-3 outline-none bg-transparent 
        ${isLight ? "text-black placeholder-gray-500" : "text-white placeholder-gray-300"}`}
      />
    </div>
  );
}
