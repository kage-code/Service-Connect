// HeroSlide.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Today's Special",
    subtitle: "Get a Discount for Every Course Order only Valid for Today!",
    offer: "25% OFF",
  },
  {
    title: "Festival Offer",
    subtitle: "Enjoy special discounts on beauty and cleaning services!",
    offer: "30% OFF",
  },
  {
    title: "New User Bonus",
    subtitle: "Sign up today and get ₹100 off your first booking!",
    offer: "₹100 OFF",
  },
];

export default function HeroSlide() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Outer wrapper for responsive horizontal padding
    <div className="px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="relative w-full max-w-5xl mx-auto mt-4 rounded-2xl overflow-hidden bg-gradient-to-r from-[#303039] to-[#1D1F2A] text-white shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="p-5 h-[180px] sm:h-[200px] md:h-[220px] flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">{slides[current].title}</h2>
              <p className="text-sm sm:text-base mt-1">{slides[current].subtitle}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-3xl sm:text-4xl font-bold">{slides[current].offer}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-yellow-600 scale-110" : "bg-white/70"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
