import React from "react";
import PageHeader from "../components/ui/PageHeader";
import TransactionCard from "../components/ui/TransactionCard";
import BottomNav from "../components/ui/BottomNav";

export default function TransactionPage() {
  const transactions = [
    {
      title: "Build Personal Branding",
      subtitle: "Web Designer",
      status: "Paid",
    },
    {
      title: "Build Personal Branding",
      subtitle: "Web Designer",
      status: "Paid",
    },
    {
      title: "Build Personal Branding",
      subtitle: "Web Designer",
      status: "Paid",
    },
    {
      title: "Build Personal Branding",
      subtitle: "Web Designer",
      status: "Paid",
    },
    {
      title: "Build Personal Branding",
      subtitle: "Web Designer",
      status: "Paid",
    },
    {
      title: "Build Personal Branding",
      subtitle: "Web Designer",
      status: "Paid",
    },
    {
      title: "Build Personal Branding",
      subtitle: "Web Designer",
      status: "Paid",
    },
    {
      title: "Build Personal Branding",
      subtitle: "Web Designer",
      status: "Paid",
    },
    {
      title: "Build Personal Branding",
      subtitle: "Web Designer",
      status: "Paid",
    },
    {
      title: "Build Personal Branding",
      subtitle: "Web Designer",
      status: "Paid",
    },
  ];

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      <PageHeader title="TRANSACTIONS" showFilter showSearch />

      {/* Transaction list */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-w-3xl mx-auto w-full">
        {transactions.map((tx, index) => (
          <TransactionCard key={index} {...tx} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="h-16">
        <BottomNav />
      </div>
    </div>
  );
}
