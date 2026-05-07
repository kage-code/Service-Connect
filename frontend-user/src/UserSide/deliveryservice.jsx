import React from "react";
import { useParams } from "react-router-dom";
import BottomNav from "../components/ui/BottomNav";
import DeliveryServiceGrid from "../components/ui/DeliveryServiceGrid";
import PageHeader from "../components/ui/PageHeader";

export default function DeliveryService() {
  const { categoryId } = useParams();

  return (
    <div className="min-h-screen bg-[#D9D9DB] pb-24">
      <PageHeader title="DELIVERY SERVICE" showFilter showSearch />
      <DeliveryServiceGrid categoryId={Number(categoryId)} />
      <BottomNav />
    </div>
  );
}