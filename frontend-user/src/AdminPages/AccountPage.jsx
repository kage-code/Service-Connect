import React, { useState } from "react";
import AdminHeader from "./componentsAdmin/AdminHeader";
import ExpenseForm from "./componentsAdmin/ExpenseForm";
import ExpenseTable from "./componentsAdmin/ExpenseTable";
import AdminSideMenu from "./componentsAdmin/AdminSideMenu";

export default function AccountsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Sample data
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      invoiceNo: "INV-1001",
      date: "2025-11-01",
      description: "Office Rent - November",
      dr: "25000",
      cr: "0",
    },
    {
      id: 2,
      invoiceNo: "INV-1002",
      date: "2025-11-03",
      description: "Printer Ink Purchase",
      dr: "1200",
      cr: "0",
    },
    {
      id: 3,
      invoiceNo: "INV-1003",
      date: "2025-11-06",
      description: "Client Payment - Project X",
      dr: "0",
      cr: "48000",
    },
  ]);

  const [formData, setFormData] = useState({
    invoiceNo: "",
    date: "",
    description: "",
    dr: "",
    cr: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    if (!formData.invoiceNo || !formData.date) return;

    const newExpense = {
      id: expenses.length + 1,
      ...formData,
    };

    setExpenses([...expenses, newExpense]);

    setFormData({
      invoiceNo: "",
      date: "",
      description: "",
      dr: "",
      cr: "",
    });
  };

  return (
    <div className="flex bg-[#F3F4FF] min-h-screen relative overflow-x-hidden">

      {/* SIDEBAR */}
      <AdminSideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* MAIN CONTENT */}
      <div
        className={`flex-1 transition-all duration-300 
          w-full ml-0 lg:ml-64 overflow-x-hidden
        `}
      >
        <AdminHeader
          title="Accounts"
          onMenuClick={() => setMenuOpen(true)}
        />

        {/* PAGE CONTENT */}
        <div className="px-3 sm:px-4 md:px-6 py-4 w-full max-w-full overflow-x-hidden">

          {/* Expense Form */}
          <div className="w-full max-w-full overflow-x-hidden">
            <ExpenseForm
              formData={formData}
              onChange={handleChange}
              onAdd={handleAdd}
            />
          </div>

          {/* Expense Table */}
          <div className="w-full max-w-full mt-4 overflow-x-auto">
            <ExpenseTable data={expenses} />
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
