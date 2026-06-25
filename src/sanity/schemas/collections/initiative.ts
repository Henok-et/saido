import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'initiative',
  title: 'Strategic Initiative',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Initiative Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category (e.g. Education Policy, STEM Education)',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL path)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Full Case Study Content',
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
      title: 'title',
      subtitle: 'category',
      media: 'image',
    }
  }
});
