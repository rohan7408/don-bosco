import type { Metadata } from "next";
import { AboutBanner } from "@/components/about/about-banner";
import { MissionVision } from "@/components/about/mission-vision";
import { OurStory } from "@/components/about/our-story";
import { PrincipalMessage } from "@/components/about/principal-message";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import { Achievements } from "@/components/about/achievements";
import { Facilities } from "@/components/about/facilities";
import { MeetTheTeam } from "@/components/about/meet-the-team";
import { CampusTour } from "@/components/about/campus-tour";

export const metadata: Metadata = {
  title: "About - Don Bosco School",
  description:
    "Learn about Don Bosco School's mission, vision, values, outstanding faculty, world-class facilities, and our commitment to holistic education and academic excellence.",
};

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <MissionVision />
      <OurStory />
      <PrincipalMessage />
      <WhyChooseUs />
      <Achievements />
      <Facilities />
      <MeetTheTeam />
      <CampusTour />
    </>
  );
}
