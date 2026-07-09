import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'profile',
  title: 'Executive Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'currentTitle',
      title: 'Current Title / Position',
      type: 'string',
    }),
    defineField({
      name: 'biography',
      title: 'Biography (Portable Text)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'cvFile',
      title: 'Curriculum Vitae (PDF)',
      type: 'file',
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      description: 'List of expertise tags shown below the biography.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'degree', title: 'Degree / Qualification', type: 'string' }),
            defineField({ name: 'school', title: 'Institution', type: 'string' }),
          ],
          preview: {
            select: { title: 'degree', subtitle: 'school' },
          },
        },
      ],
    }),
    defineField({
      name: 'certifications',
      title: 'Professional Certifications',
      description: 'List of professional certifications.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ]
});

