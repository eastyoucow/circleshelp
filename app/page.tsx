import { AboutSection } from "@/components/about-section";
import { ActivitiesSection } from "@/components/activities-section";
import { DonateSection } from "@/components/donate-section";
import { Hero } from "@/components/hero";
import { MonthSection } from "@/components/month-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MonthSection />
      <ActivitiesSection />
      <DonateSection />
    </>
  );
}
