import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Caption',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Media Type',
      type: 'string',
      options: {
        list: ['Photo', 'Video', 'Interview'],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({ document }) => document?.type === 'Video',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (YouTube/Vimeo)',
      type: 'url',
      hidden: ({ document }) => document?.type !== 'Video',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
  ],
})
