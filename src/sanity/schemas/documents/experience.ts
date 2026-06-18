import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience & Leadership',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position / Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Organization Logo',
      type: 'image',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' },
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' },
    }),
    defineField({
      name: 'isCurrent',
      title: 'Current Role',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Key Responsibilities',
      type: 'text',
    }),
    defineField({
      name: 'achievements',
      title: 'Strategic Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'position',
      subtitle: 'organization',
      media: 'logo',
    },
  },
})
