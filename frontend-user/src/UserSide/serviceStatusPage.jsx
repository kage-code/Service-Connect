import React, { useState, useEffect } from "react";
import PageHeader from "../components/ui/PageHeader";
import BottomNav from "../components/ui/BottomNav";
import StatusToggle from "../components/ui/StatusToggle";
import VendorList from "../components/ui/VendorList";
import api from "../api/axiosInstance";

export default function ServiceStatusPage() {
    const [active, setActive] = useState("Ongoing");
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBookings = async () => {
            setLoading(true);
            setError("");
            try {
                const res = await api.get("/bookings/");
                setBookings(res.data);
            } catch (err) {
                setError("Failed to load bookings.");
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const ongoingStatuses = ["waiting", "scheduled"];
    const completedStatuses = ["completed", "cancelled"];

    const filtered = bookings
        .filter((b) =>
            active === "Ongoing"
                ? ongoingStatuses.includes(b.status)
                : completedStatuses.includes(b.status)
        )
        .map((b) => ({
            id: b.id,
            providerId: b.provider,
            name: b.title,
            distance: b.service_name || "Service",
            price: b.amount ? `₹${b.amount}` : "N/A",
            rating: "—",
            reviews: b.status,
            bookmarked: false,
            image: null,
        }));

    return (
        <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
            <PageHeader title="SERVICES" showFilter showSearch />

            {/* Status Toggle */}
            <div className="flex justify-center mt-4 px-4">
                <StatusToggle active={active} setActive={setActive} />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto pb-20">
                {loading && (
                    <div className="flex justify-center items-center p-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
                    </div>
                )}

                {error && (
                    <p className="text-center text-red-500 mt-10">{error}</p>
                )}

                {!loading && !error && filtered.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">
                        No {active.toLowerCase()} services found.
                    </p>
                )}

                {!loading && !error && filtered.length > 0 && (
                    <VendorList vendors={filtered} />
                )}
            </div>

            <BottomNav />
        </div>
    );
}