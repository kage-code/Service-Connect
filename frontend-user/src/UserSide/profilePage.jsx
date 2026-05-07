import React, { useState, useEffect } from "react";

import axios from "axios";
import ProfileHeader from "../components/ui/profile_components/ProfileHeader";
import AboutSection from "../components/ui/profile_components/AboutSection";
import ServicesSection from "../components/ui/profile_components/ServicesSection";
import ReviewsSection from "../components/ui/profile_components/ReviewsSection";
import GallerySection from "../components/ui/profile_components/GallerySection";
import VideosSection from "../components/ui/profile_components/VideoSection";
import ProfileCard from "../components/ui/profile_components/ProfileCard";
import SubmitButton from "../components/ui/SubmitButton";
import { useParams, useNavigate } from "react-router-dom";


export default function ProfilePage() {
  const { providerId } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/provider/${providerId}/`)
      .then((res) => {
        setProfile(res.data.profile);
        setServices(res.data.services);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching provider profile:", err);
        setLoading(false);
      });
  }, [providerId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!profile) {
    return <div className="flex justify-center items-center min-h-screen">Provider not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col relative">
      <ProfileHeader />
      <div className="flex-1 overflow-y-auto pb-40">
        <ProfileCard
          name={profile.business_name || profile.full_name}
          serviceType={services[0]?.category_name || "Service Provider"}
          rating={services[0]?.rating || 0}
          totalReviews={0}
          distance={profile.location || "N/A"}
          serviceCount={services.length}
        />
        <AboutSection about={profile.bio || "No bio available."} />
        <ServicesSection services={services.map(s => s.name)} />
        <ReviewsSection reviews={[]} />
        <GallerySection />
        <VideosSection />
      </div>
      <div className="fixed bottom-4 inset-x-0 flex justify-center px-5">
        <div className="w-full max-w-5xl">
          <SubmitButton onClick={() => navigate(`/requestservice`, {
            state: {
              providerId: profile.id,
              providerName: profile.business_name || profile.full_name,
              serviceType: services[0]?.category_name || "Service"
            }
          })}>
            Book service
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}