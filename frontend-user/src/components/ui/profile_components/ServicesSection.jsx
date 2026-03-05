import React from "react";
import {
  FaWrench,
  FaPlug,
  FaLightbulb,
  FaFireAlt,
  FaTools,
  FaMobileAlt,
} from "react-icons/fa";
import { GiEvilBook } from "react-icons/gi";
import { PiChartBarFill } from "react-icons/pi";
import { SlSocialSoundcloud } from "react-icons/sl";
import { PiWheelchairMotionLight } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";

export default function ServicesSection({ services = [] }) {
  // Define icons for specific services
  const serviceIcons = {
    Plumbing: <GiEvilBook className="text-[#1D1D1B]" />,
    "Access Mobile, Desktop & TV Repair": (
      <FaMobileAlt className="text-[#1D1D1B]" />
    ),
    "Water tank fitt": <PiChartBarFill className="text-[#1D1D1B]" />,
    "Audio install": <SlSocialSoundcloud className="text-[#1D1D1B]" />,
    "Lockset changing": <PiWheelchairMotionLight className="text-[#1D1D1B]" />,
    "Plumbing cleaning": <TfiWrite className="text-[#1D1D1B]" />,
    Wiring:<GiEvilBook className="text-[#1D1D1B]"/>
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 mx-4 mt-4">
      <h2 className="text-sm font-semibold mb-2 text-gray-800">Services</h2>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 text-sm text-gray-700"
          >
            {serviceIcons[service] || <FaWrench className="text-gray-500" />}
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
