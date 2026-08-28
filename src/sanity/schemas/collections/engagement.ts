import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'engagement',
  title: 'Speaking & Engagement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event / Topic Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Keynote', 'Conference', 'Panel', 'Lecture', 'Workshop', 'Interview', 'Public Talk'],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
      initialValue: 'Keynote',
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
      name: 'image',
      title: 'Event Photo / Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageCaption',
      title: 'Photo Caption',
      type: 'string',
      description: 'Caption or credit for the event photo',
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
