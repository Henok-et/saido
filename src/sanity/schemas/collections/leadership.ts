import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'leadership',
  title: 'Leadership & Governance',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      validation: Rule => Rule.required(),
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
      title: 'role',
      subtitle: 'organization',
    }
  }
});
