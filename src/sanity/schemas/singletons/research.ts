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
      initialValue: 'Research & Academic Impact'
    }),
    defineField({
      name: 'impacts',
      title: 'Impact Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
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
