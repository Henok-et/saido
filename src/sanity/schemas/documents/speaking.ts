import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'speaking',
  title: 'Speaking Engagements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Topic',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'event',
      title: 'Event / Conference Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: ['Keynote Speaker', 'Panelist', 'Moderator', 'Chair'],
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'location',
      title: 'Location (City, Country)',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Event Photo',
      type: 'image',
    }),
  ],
})
