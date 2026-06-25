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

      // 2. Metrics Section
      S.listItem()
        .title('Metrics Section')
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

      // 4. Experience
      S.listItem()
        .title('Experience')
        .child(
          S.documentTypeList('experience')
            .title('Experience Items')
        ),

      // 5. Leadership & Governance
      S.listItem()
        .title('Leadership & Governance')
        .child(
          S.documentTypeList('leadership')
            .title('Leadership Roles')
        ),

      S.divider(),

      // 6. Research & Impact
      S.listItem()
        .title('Research & Academic Impact')
        .id('researchImpact')
        .child(
          S.document()
            .schemaType('research')
            .documentId('research')
        ),

      // 7. Initiatives
      S.listItem()
        .title('Strategic Initiatives')
        .child(
          S.documentTypeList('initiative')
            .title('Initiatives')
        ),

      // 8. Awards
      S.listItem()
        .title('Awards & Honors')
        .child(
          S.documentTypeList('award')
            .title('Awards')
        ),

      // 9. Publications
      S.listItem()
        .title('Publications')
        .child(
          S.documentTypeList('publication')
            .title('Publications')
        ),

      // 10. Speaking
      S.listItem()
        .title('Speaking Engagements')
        .child(
          S.documentTypeList('speaking')
            .title('Speaking Engagements')
        ),

      // 11. Testimonials
      S.listItem()
        .title('Testimonials')
        .child(
          S.documentTypeList('testimonial')
            .title('Testimonials')
        ),

      // 12. Blog
      S.listItem()
        .title('Blog')
        .child(
          S.documentTypeList('blogPost')
            .title('Blog Posts')
        ),

      S.divider(),

      // 13. Contact
      S.listItem()
        .title('Contact Information')
        .id('contactSection')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact')
        ),
    ])
