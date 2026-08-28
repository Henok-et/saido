import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'recognition',
  title: 'Recognition',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Award', 'Honor', 'Fellowship', 'Distinction', 'Recognition'],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
      initialValue: 'Award',
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
