import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'leadership',
  title: 'Leadership & Governance',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'committee',
      title: 'Committee',
      type: 'string',
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Period (e.g. 2021-2023)',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'organization',
    },
  },
})
