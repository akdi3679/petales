import { Hero } from "@/components/sections/hero";
import { Orientation } from "@/components/sections/orientation";
import { ArtisanPromise } from "@/components/sections/artisan-promise";
import { BestSellers } from "@/components/sections/best-sellers";
import { QuickCardBuilder } from "@/components/sections/quick-card-builder";
import { GiftCardCarousel } from "@/components/sections/gift-card-carousel";
import { PageGuides } from "@/components/sections/page-guides";
import { FAQ } from "@/components/sections/faq";
import { ReassuranceBar } from "@/components/sections/reassurance-bar";
import { ContactPreview } from "@/components/sections/contact-preview";
import { FinalCTA } from "@/components/sections/final-cta";
import { AboutSection } from "@/components/sections/AboutSection";

export default function HomePage() {
  return (
    <>
      <Hero />
            <AboutSection />

      <Orientation />
      <BestSellers />
            <ArtisanPromise />

      <QuickCardBuilder />
      <GiftCardCarousel />
      <PageGuides />
      <FAQ />
      <ContactPreview />
            <ReassuranceBar />

      <FinalCTA />
    </>
  );
}