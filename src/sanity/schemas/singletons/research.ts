import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'research',
  title: 'Research Impact',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Research & Impact'
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      description: 'Short intro line shown under the section heading, framing the real research domains and impact below.',
      type: 'text',
    }),
    defineField({
      name: 'impacts',
      title: 'Research & Impact Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'category',
              title: 'Category',
              description: 'Groups this item on the homepage. Leave unset to show all items in one combined grid.',
              type: 'string',
              options: {
                list: ['Research Area', 'Impact Area'],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'e.g. FileText, BookOpen, Globe, Users, Award, FlaskConical'
            }),
            defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' }
          }
        })
      ]
    })
  ]
});
