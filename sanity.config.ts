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
})
