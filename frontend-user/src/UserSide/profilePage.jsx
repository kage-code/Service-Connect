import React from "react";
import ProfileHeader from "../components/ui/profile_components/ProfileHeader";
import AboutSection from "../components/ui/profile_components/AboutSection";
import ServicesSection from "../components/ui/profile_components/ServicesSection";
import ReviewsSection from "../components/ui/profile_components/ReviewsSection";
import GallerySection from "../components/ui/profile_components/GallerySection";
import VideosSection from "../components/ui/profile_components/VideoSection";
import ProfileCard from "../components/ui/profile_components/ProfileCard";
import SubmitButton from "../components/ui/SubmitButton";
import { image } from "framer-motion/client";

export default function ProfilePage() {
  const mockProfile = {
    name: "William S. Cunningham",
    rating: 4.2,
    totalReviews: 128,
    serviceType: "Plumber",
    about:
      <p>Graphic Design now a popular profession graphic design by off your carrer about tantas regiones barbarorum pedibus obiit. Graphic Design n a popular profession l Cur tantas regiones barbarorum pedibus obiit,<br/> maria transmi Et ne nimium beatus est; Addidisti ad extremum etiam <span className="underline font-bold">Read More</span></p>,
    services: [
      "Plumbing",
      "Access Mobile, Desktop & TV Repair",
      "Water tank fitt",
      "Audio install",
      "Lockset changing",
      "Plumbing cleaning",
      "Wiring"
    ],
    reviews: [
      {
        name: "William S. Cunningham",
        rating: 4.5,
        comment: "Good service and polite behavior.",
        time: "1 week ago",
        image: "/william.png",
      },
      {
        name: "Martha E. Thompson",
        rating: 4.3,
        comment: "Very punctual and clean job!",
        time: "2 weeks ago",
        image:"/martha.png"
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col relative">
      <ProfileHeader />
      <div className="flex-1 overflow-y-auto pb-40">
        <ProfileCard {...mockProfile} />
        <AboutSection about={mockProfile.about} />
        <ServicesSection services={mockProfile.services} />
        <ReviewsSection reviews={mockProfile.reviews} />
        <GallerySection />
        <VideosSection />
      </div>
      <div className="fixed bottom-4 inset-x-0 flex justify-center px-5">
        <div className="w-full max-w-5xl">
          <SubmitButton>Book service</SubmitButton>
        </div>
      </div>
    </div>
  );
}
