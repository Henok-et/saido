import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'cvUrl',
      title: 'CV URL / Biography Link',
      type: 'url',
    })
  ],
});
