import type { StructureBuilder } from 'sanity/desk'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Website Content (Top to Bottom)')
    .items([
      // 1. Hero Section
      S.listItem()
        .title('Hero Section')
        .id('heroSection')
        .child(
          S.document()
            .schemaType('hero')
            .documentId('hero')
        ),

      // 2. Impact at a Glance
      S.listItem()
        .title('Impact at a Glance')
        .id('metricsSection')
        .child(
          S.document()
            .schemaType('metrics')
            .documentId('metrics')
        ),

      S.divider(),

      // 3. Executive Profile
      S.listItem()
        .title('Executive Profile')
        .id('executiveProfile')
        .child(
          S.document()
            .schemaType('profile')
            .documentId('profile')
        ),

      // 4. Career & Leadership
      S.listItem()
        .title('Career & Leadership')
        .child(
          S.documentTypeList('experience')
            .title('Career & Leadership')
        ),

      S.divider(),

      // 5. Research & Impact
      S.listItem()
        .title('Research & Impact')
        .id('researchImpact')
        .child(
          S.document()
            .schemaType('research')
            .documentId('research')
        ),

      // 6. Strategic Initiatives
      S.listItem()
        .title('Strategic Initiatives')
        .child(
          S.documentTypeList('initiative')
            .title('Initiatives')
        ),

      // 7. Testimonials (embedded within Strategic Initiatives on the site)
      S.listItem()
        .title('Testimonials')
        .child(
          S.documentTypeList('testimonial')
            .title('Testimonials')
        ),

      S.divider(),

      // 8. Recognition
      S.listItem()
        .title('Recognition')
        .child(
          S.documentTypeList('recognition')
            .title('Recognition')
        ),

      // 9. Selected Publications
      S.listItem()
        .title('Selected Publications')
        .child(
          S.documentTypeList('publication')
            .title('Publications')
        ),

      // 10. Speaking & Engagements
      S.listItem()
        .title('Speaking & Engagements')
        .child(
          S.documentTypeList('engagement')
            .title('Speaking & Engagements')
        ),

      // 11. Insights
      S.listItem()
        .title('Insights')
        .child(
          S.documentTypeList('blogPost')
            .title('Blog Posts')
        ),

      S.divider(),

      // 12. Let's Connect
      S.listItem()
        .title("Let's Connect")
        .id('contactSection')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact')
        ),
    ])
