import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role / Job Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' },
    }),
    defineField({
      name: 'endDate',
      title: 'End Date (Leave blank if current)',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' },
    }),
    defineField({
      name: 'current',
      title: 'Currently working here?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true,
    })
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'organization',
    }
  }
});
