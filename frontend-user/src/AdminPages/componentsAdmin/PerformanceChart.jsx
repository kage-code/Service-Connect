import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 25, expense: 15 },
  { name: "Feb", income: 50, expense: 40 },
  { name: "Mar", income: 40, expense: 50 },
  { name: "Apr", income: 15, expense: 20 },
  { name: "May", income: 55, expense: 45 },
  { name: "Jun", income: 45, expense: 35 },
  { name: "Jul", income: 80, expense: 60 },
  { name: "Aug", income: 50, expense: 40 },
  { name: "Sep", income: 30, expense: 25 },
  { name: "Oct", income: 90, expense: 70 },
  { name: "Nov", income: 85, expense: 65 },
  { name: "Dec", income: 60, expense: 45 },
];

export default function PerformanceChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#303972] font-bold text-lg">Balance Analytics</h2>

        {/* Legend + Filter */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#F7C74F] rounded-full"></span>
            <span className="text-gray-500 text-sm">Expense</span>
            <span className="text-[#303972] font-semibold text-sm">1.245</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#F47C67] rounded-full"></span>
            <span className="text-gray-500 text-sm">Income</span>
            <span className="text-[#303972] font-semibold text-sm">1.356</span>
          </div>

          {/* Dropdown */}
          <button className="border border-[#DADAF7] rounded-full px-4 py-1 text-[#303972] font-medium text-sm flex items-center gap-1 hover:bg-[#F9F9FF] transition">
            Month
            <span className="text-[#6C63FF]">▼</span>
          </button>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F7C74F" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#F7C74F" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F47C67" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#F47C67" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* ✅ Only vertical lines */}
          <CartesianGrid vertical={true} horizontal={false} strokeDasharray="3 3" stroke="#E0E0E0" />

          <XAxis dataKey="name" tick={{ fill: "#A0A0B4", fontSize: 12 }} />
          <YAxis tick={{ fill: "#A0A0B4", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#5A50E8",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
            }}
            labelStyle={{ color: "#fff" }}
            formatter={(value) => [`$${value}`, "Amount"]}
          />

          {/* Gradient Areas */}
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#F7C74F"
            strokeWidth={3}
            fill="url(#colorExpense)"
            dot={{ r: 4, fill: "#F7C74F", strokeWidth: 0 }}
            activeDot={{ r: 6, stroke: "#fff", strokeWidth: 2 }}
          />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#F47C67"
            strokeWidth={3}
            fill="url(#colorIncome)"
            dot={{ r: 4, fill: "#F47C67", strokeWidth: 0 }}
            activeDot={{ r: 6, stroke: "#fff", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
