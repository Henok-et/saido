import { client } from "@/sanity/lib/client";
import {
  homepageQuery,
  awardsQuery,
  testimonialsQuery,
  leadershipQuery,
  profileQuery,
} from "@/sanity/lib/queries";

import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ExecutiveProfile } from "@/components/sections/ExecutiveProfile";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { LeadershipGovernanceSection } from "@/components/sections/LeadershipGovernanceSection";
import { ResearchImpactSection } from "@/components/sections/ResearchImpactSection";
import { InitiativesSection } from "@/components/sections/InitiativesSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { SpeakingSection } from "@/components/sections/SpeakingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";


export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const [homepage, awards, testimonials, leadershipRoles, profile] = await Promise.all([
    client.fetch(homepageQuery),
    client.fetch(awardsQuery),
    client.fetch(testimonialsQuery),
    client.fetch(leadershipQuery),
    client.fetch(profileQuery),
  ]);
  const hero = homepage?.hero ?? {
    title: 'Saido',
    subtitle: 'Welcome to Saido',
    description: 'Empowering research and collaboration.',
    imageUrl: undefined,
    biographyUrl: undefined,
  };
  console.log('Hero data:', hero);

  return (
    <main className="w-full">
      <HeroSection data={hero} />
      <MetricsSection data={homepage?.metrics} />
      <ExecutiveProfile data={profile} />
      <ExperienceTimeline />
      <LeadershipGovernanceSection data={leadershipRoles} />
      <ResearchImpactSection />
      <InitiativesSection />
      <AwardsSection data={awards} />
      <PublicationsSection />
      <SpeakingSection />
      <TestimonialsSection data={testimonials} />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
