import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Get in Touch'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
    }),
    defineField({
      name: 'inquiryTypes',
      title: 'Inquiry Types (Form Dropdown)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' }
          ]
        }
      ],
      description: 'The options available in the contact form dropdown.'
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform (e.g. LinkedIn, Twitter)', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ]
        }
      ]
    })
  ]
});
