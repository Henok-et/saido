import { client } from "@/sanity/lib/client";
import {
  heroQuery,
  metricsQuery,
  profileQuery,
  researchQuery,
  contactQuery,
  experienceQuery,
  initiativesQuery,
  recognitionQuery,
  publicationsQuery,
  featuredPublicationsQuery,
  engagementQuery,
  testimonialsQuery,
  latestBlogPostsQuery,
} from "@/sanity/lib/queries";

import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ExecutiveProfile } from "@/components/sections/ExecutiveProfile";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ResearchImpactSection } from "@/components/sections/ResearchImpactSection";
import { InitiativesSection } from "@/components/sections/InitiativesSection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { EngagementsSection } from "@/components/sections/EngagementsSection";
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
    initiatives,
    recognitions,
    publications,
    featuredPublications,
    engagements,
    testimonials,
    latestBlogPosts,
  ] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(metricsQuery),
    client.fetch(profileQuery),
    client.fetch(researchQuery),
    client.fetch(contactQuery),
    client.fetch(experienceQuery),
    client.fetch(initiativesQuery),
    client.fetch(recognitionQuery),
    client.fetch(publicationsQuery),
    client.fetch(featuredPublicationsQuery),
    client.fetch(engagementQuery),
    client.fetch(testimonialsQuery),
    client.fetch(latestBlogPostsQuery),
  ]);

  const defaultHero = hero ?? {
    title: 'Prof. Saidou Madougou',
    subtitle: 'Strategic Leadership in Education, Science, Technology & Innovation',
    description: "Advancing Africa's knowledge systems through continental leadership, scientific excellence, and two decades of transformative academic governance.",
    imageUrl: undefined,
    cvUrl: profile?.cvUrl || undefined,
  };

  const displayedPublications =
    featuredPublications && featuredPublications.length > 0
      ? featuredPublications
      : publications?.slice(0, 4);

  return (
    <main className="w-full">
      <HeroSection data={defaultHero} />
      <MetricsSection data={metrics?.items} />
      <ExecutiveProfile data={profile} />
      <ExperienceTimeline data={experience} />
      <ResearchImpactSection data={research} />
      <InitiativesSection data={initiatives} testimonials={testimonials} />
      <RecognitionSection data={recognitions} />
      <PublicationsSection data={displayedPublications} />
      <EngagementsSection data={engagements} />
      <BlogSection data={latestBlogPosts} />
      <ContactSection data={contact} />
    </main>
  );
}
