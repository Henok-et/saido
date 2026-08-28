import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Publication Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type (e.g. White Paper, Policy Brief, Research Paper)',
      type: 'string',
    }),
    defineField({
      name: 'journal',
      title: 'Journal / Publisher',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date (e.g. October 2023)',
      type: 'string',
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract / Summary',
      type: 'text',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File Upload',
      type: 'file',
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link / Citation',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      description: 'Controls which publications appear in the homepage "Selected Publications" preview (up to 6). All others still appear on the full /publications archive.',
      type: 'boolean',
      initialValue: false,
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
      subtitle: 'journal',
    }
  }
});
