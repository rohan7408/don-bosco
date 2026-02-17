import { HeroSection } from "@/components/home/hero-section";
import { MessageFromFather } from "@/components/home/message-from-father";
import { AboutSection } from "@/components/home/about-section";
import { QuickLinks } from "@/components/home/quick-links";
import { Testimonials } from "@/components/home/testimonials";
import { LatestNews } from "@/components/home/latest-news";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MessageFromFather />
      <AboutSection />
      <QuickLinks />
      <Testimonials />
      <LatestNews />
    </>
  );
}
