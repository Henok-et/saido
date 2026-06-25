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
  ]
});
