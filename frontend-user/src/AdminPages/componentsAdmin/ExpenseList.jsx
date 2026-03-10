import { FaArrowTrendUp } from "react-icons/fa6";

export default function ExpenseList() {
  const expenses = [
    { id: "#123456789", date: "2 March 2021, 13:45 PM", type: "SMS charges", amount: "$ 50,036" },
    { id: "#987654321", date: "3 March 2021, 10:15 AM", type: "Salary", amount: "$ 80,500" },
    { id: "#654321987", date: "5 March 2021, 09:30 AM", type: "Rent", amount: "$ 15,000" },
    { id: "#112233445", date: "6 March 2021, 18:25 PM", type: "Maintenance", amount: "$ 2,500" },
    { id: "#998877665", date: "8 March 2021, 11:00 AM", type: "Electricity Bill", amount: "$ 1,200" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      {/* Header */}
      <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Expense</h3>

      {/* Expense List */}
      <ul className="mt-4 mb-25">
        {expenses.map((exp, i) => (
          <li
            key={i}
            className="grid grid-cols-[1.8fr_1.2fr_1fr] items-center py-4 border-b border-gray-100 last:border-none"
          >
            {/* Icon + ID + Date */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F05454] flex items-center justify-center text-white">
                <FaArrowTrendUp size={18} />
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A]">{exp.id}</p>
                <p className="text-xs text-gray-400">{exp.date}</p>
              </div>
            </div>

            {/* Type */}
            <p className="font-medium text-[#1A1A1A] text-center">{exp.type}</p>

            {/* Amount */}
            <p className="font-bold text-[#1A1A1A] text-right">{exp.amount}</p>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <p>
          Showing <span className="font-semibold text-[#1A1A1A]">1–5</span> from{" "}
          <span className="font-semibold text-[#303972]">100</span> data
        </p>

        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            ‹
          </button>
          <button className="w-8 h-8 rounded-full bg-[#5E60CE] text-white font-semibold">
            1
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
            2
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
            3
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
