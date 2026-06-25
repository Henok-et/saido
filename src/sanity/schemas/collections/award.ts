import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'award',
  title: 'Award & Honor',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Award Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Issuing Organization',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
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
      title: 'title',
      subtitle: 'organization',
    }
  }
});
