import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Author Role / Title',
      type: 'string',
    }),
    defineField({
      name: 'organization',
      title: 'Author Organization',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Author Image',
      type: 'image',
      options: { hotspot: true },
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
      title: 'author',
      subtitle: 'role',
      media: 'image',
    }
  }
});
