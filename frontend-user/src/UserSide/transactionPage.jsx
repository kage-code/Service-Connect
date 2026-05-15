import React, { useEffect, useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import TransactionCard from "../components/ui/TransactionCard";
import BottomNav from "../components/ui/BottomNav";
import api from "../api/axiosInstance";

export default function TransactionPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await api.get("/bookings/");
        setTransactions(res.data);
      } catch (err) {
        setError("Failed to load transactions.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      <PageHeader title="TRANSACTIONS" showFilter showSearch />

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-w-3xl mx-auto w-full">
        {loading && (
          <p className="text-center text-gray-500 mt-10">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-500 mt-10">{error}</p>
        )}

        {!loading && !error && transactions.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No transactions yet.</p>
        )}

        {transactions.map((tx) => (
          <TransactionCard
            key={tx.id}
            title={tx.title}
            subtitle={tx.service_name || "Service"}
            status={tx.status}
            amount={tx.amount}
            date={tx.created_at}
          />
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="h-16">
        <BottomNav />
      </div>
    </div>
  );
}