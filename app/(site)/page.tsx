import { HeroSection } from "@/components/sections/hero/HeroSection";
import { ExperienceSection } from "@/components/sections/home/ExperienceSection";
import { CuisineSection } from "@/components/sections/home/CuisineSection";
import { HookahSection } from "@/components/sections/home/HookahSection";
import { FeaturedMenuSection } from "@/components/sections/home/FeaturedMenuSection";
import { EventsPreviewSection } from "@/components/sections/home/EventsPreviewSection";
import { CateringPreviewSection } from "@/components/sections/home/CateringPreviewSection";
import { FranchisePreviewSection } from "@/components/sections/home/FranchisePreviewSection";
import { ReviewsSection } from "@/components/sections/home/ReviewsSection";
import { FinalCTASection } from "@/components/sections/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <CuisineSection />
      <HookahSection />
      <FeaturedMenuSection />
      <EventsPreviewSection />
      <CateringPreviewSection />
      <FranchisePreviewSection />
      <ReviewsSection />
      <FinalCTASection />
    </>
  );
}
