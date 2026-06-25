import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'speaking',
  title: 'Speaking Engagement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event / Topic Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'event',
      title: 'Event Name',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Event Link',
      type: 'url',
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
      subtitle: 'event',
    }
  }
});
