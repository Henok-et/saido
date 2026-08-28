import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Disable CDN so edits & deletions reflect immediately.
  // Re-enable with webhook revalidation when deploying to production.
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
  perspective: 'published',
})

