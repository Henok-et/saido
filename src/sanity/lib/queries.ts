import { groq } from 'next-sanity'

export const homepageQuery = groq`*[_type == "homepage"][0] {
  hero {
    title,
    subtitle,
    description,
    "imageUrl": image.asset->url,
    "biographyUrl": biographyLink.asset->url
  },
  metrics
}`

export const awardsQuery = groq`*[_type == "award"] | order(year desc) {
  _id,
  title,
  organization,
  year,
  description
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] {
  _id,
  author,
  title,
  organization,
  quote,
  "imageUrl": image.asset->url
}`

export const leadershipQuery = groq`*[_type == "leadership"] | order(period desc) {
  _id,
  role,
  committee,
  organization,
  period
}`

export const experienceQuery = groq`*[_type == "experience"] | order(startDate desc) {
  _id,
  title,
  organization,
  startDate,
  endDate,
  current,
  description
}`

export const publicationsQuery = groq`*[_type == "publication"] | order(date desc) {
  _id,
  title,
  authors,
  journal,
  date,
  link
}`

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "imageUrl": mainImage.asset->url
}`

export const profileQuery = groq`*[_type == "profile"][0] {
  _id,
  name,
  title,
  tagline,
  summary,
  bio,
  "headshotUrl": headshot.asset->url,
  "cvUrl": cvFile.asset->url,
  socialLinks,
  expertise
}`
