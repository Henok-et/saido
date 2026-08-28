import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'
import { myStructure } from './src/sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Saido Executive',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',

  plugins: [
    deskTool({
      structure: myStructure
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      // Reorder so Delete is prominent — right after Publish & Unpublish
      const publish = prev.find(a => a.action === 'publish')
      const unpublish = prev.find(a => a.action === 'unpublish')
      const del = prev.find(a => a.action === 'delete')
      const duplicate = prev.find(a => a.action === 'duplicate')
      const rest = prev.filter(
        a => a.action !== 'publish' && a.action !== 'unpublish' && a.action !== 'delete' && a.action !== 'duplicate'
      )

      return [
        ...(publish ? [publish] : []),
        ...(unpublish ? [unpublish] : []),
        ...(del ? [del] : []),
        ...(duplicate ? [duplicate] : []),
        ...rest,
      ]
    },
  },
})
