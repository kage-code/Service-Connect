import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { DollarSign, CreditCard, TrendingUp } from "lucide-react";

export default function QuickStatus() {
  // Small line chart data for Earnings
  const chartData = [
    { value: 60 },
    { value: 80 },
    { value: 65 },
    { value: 95 },
    { value: 75 },
    { value: 100 },
    { value: 90 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      {/* ===== Revenue Card ===== */}
      <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center space-x-4">
        <div className="bg-[#9B9BFF] p-3 rounded-full">
          <TrendingUp size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-sm text-gray-500 font-medium">Revenue</h3>
          <h2 className="text-2xl font-bold text-[#1E1E2F]">932</h2>
          <p className="text-sm text-green-500 font-medium">
            +10% <span className="text-gray-400 font-normal">than last month</span>
          </p>
        </div>
      </div>

      {/* ===== Expense Card ===== */}
      <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center space-x-4">
        <div className="bg-[#FF9B9B] p-3 rounded-full">
          <CreditCard size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-sm text-gray-500 font-medium">Expense</h3>
          <h2 className="text-2xl font-bold text-[#1E1E2F]">754</h2>
          <p className="text-sm text-red-500 font-medium">
            -0.5% <span className="text-gray-400 font-normal">than last month</span>
          </p>
        </div>
      </div>

      {/* ===== Earnings Card (with mini chart) ===== */}
      <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-[#FFD66B] p-3 rounded-full">
            <DollarSign size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 font-medium">Earnings</h3>
            <h2 className="text-2xl font-bold text-[#1E1E2F]">$123,456</h2>
            <p className="text-sm text-green-500 font-medium">
              +23% <span className="text-gray-400 font-normal">than last month</span>
            </p>
          </div>
        </div>

        {/* Mini Graph */}
        <div className="w-[120px] h-[60px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#27C498" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#27C498" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#27C498"
                strokeWidth={3}
                dot={false}
                fillOpacity={1}
                fill="url(#colorGradient)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
