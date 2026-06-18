import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Publications & Papers',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'type',
      title: 'Publication Type',
      type: 'string',
      options: {
        list: ['Research Paper', 'Policy Brief', 'Article', 'Report', 'Opinion Piece', 'White Paper'],
      },
    }),
    defineField({
      name: 'publishDate',
      title: 'Date Published',
      type: 'date',
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract / Summary',
      type: 'text',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF Download',
      type: 'file',
      options: { accept: 'application/pdf' },
    }),
    defineField({
      name: 'externalUrl',
      title: 'External Link',
      type: 'url',
    }),
  ],
})
