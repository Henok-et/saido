import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'initiative',
  title: 'Strategic Initiatives',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Initiative Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Policy', 'Development', 'Digital Transformation', 'Governance', 'Youth Development'
        ],
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'summary',
      title: 'Brief Summary',
      type: 'text',
    }),
    defineField({
      name: 'context',
      title: 'Context & Background',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'outcomes',
      title: 'Key Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
