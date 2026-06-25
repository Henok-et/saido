import { client } from "@/sanity/lib/client";
import {
  heroQuery,
  metricsQuery,
  profileQuery,
  researchQuery,
  contactQuery,
  experienceQuery,
  leadershipQuery,
  initiativesQuery,
  awardsQuery,
  publicationsQuery,
  speakingQuery,
  testimonialsQuery,
  blogPostsQuery,
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
  const [
    hero,
    metrics,
    profile,
    research,
    contact,
    experience,
    leadershipRoles,
    initiatives,
    awards,
    publications,
    speaking,
    testimonials,
    blogPosts
  ] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(metricsQuery),
    client.fetch(profileQuery),
    client.fetch(researchQuery),
    client.fetch(contactQuery),
    client.fetch(experienceQuery),
    client.fetch(leadershipQuery),
    client.fetch(initiativesQuery),
    client.fetch(awardsQuery),
    client.fetch(publicationsQuery),
    client.fetch(speakingQuery),
    client.fetch(testimonialsQuery),
    client.fetch(blogPostsQuery),
  ]);

  const defaultHero = hero ?? {
    title: 'Saido',
    subtitle: 'Welcome to Saido',
    description: 'Empowering research and collaboration.',
    imageUrl: undefined,
    cvUrl: undefined,
  };

  return (
    <main className="w-full">
      <HeroSection data={defaultHero} />
      <MetricsSection data={metrics?.items} />
      <ExecutiveProfile data={profile} />
      <ExperienceTimeline data={experience} />
      <LeadershipGovernanceSection data={leadershipRoles} />
      <ResearchImpactSection data={research} />
      <InitiativesSection data={initiatives} />
      <AwardsSection data={awards} />
      <PublicationsSection data={publications} />
      <SpeakingSection data={speaking} />
      <TestimonialsSection data={testimonials} />
      <BlogSection data={blogPosts} />
      <ContactSection data={contact} />
    </main>
  );
}
