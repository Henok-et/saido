import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'metrics',
  title: 'Metrics Section',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Metric Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value (e.g., 20+)', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' }
          }
        })
      ]
    })
  ]
});
