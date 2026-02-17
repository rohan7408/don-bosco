import type { Metadata } from "next";
import { AboutBanner } from "@/components/about/about-banner";
<<<<<<< HEAD
import { MissionVision } from "@/components/about/mission-vision";
import { OurStory } from "@/components/about/our-story";
import { PrincipalMessage } from "@/components/about/principal-message";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import { Achievements } from "@/components/about/achievements";
import { Facilities } from "@/components/about/facilities";
=======
import { OurStory } from "@/components/about/our-story";
import { WhyChooseUs } from "@/components/about/why-choose-us";
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
import { MeetTheTeam } from "@/components/about/meet-the-team";
import { CampusTour } from "@/components/about/campus-tour";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "About - Don Bosco School",
  description:
    "Learn about Don Bosco School's mission, vision, values, outstanding faculty, world-class facilities, and our commitment to holistic education and academic excellence.",
=======
  title: "About - Don Bosco school",
  description:
    "Learn about Don Bosco school's mission, team, and world-class design facilities.",
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
};

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
<<<<<<< HEAD
      <MissionVision />
      <OurStory />
      <PrincipalMessage />
      <WhyChooseUs />
      <Achievements />
      <Facilities />
=======
      <OurStory />
      <WhyChooseUs />
>>>>>>> 58d541f95962b39a8299eef669185ff5361ef304
      <MeetTheTeam />
      <CampusTour />
    </>
  );
}
