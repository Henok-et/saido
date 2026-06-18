import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Executive Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Current Position/Title',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Leadership Statement / Tagline',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Brief Executive Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bio',
      title: 'Full Biography',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'headshot',
      title: 'Professional Headshot',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'cvFile',
      title: 'Biography / CV File (PDF)',
      type: 'file',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' }
          ]
        }
      ]
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
