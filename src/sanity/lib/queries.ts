import { groq } from 'next-sanity'

// Singletons
export const heroQuery = groq`*[_type == "hero"][0] {
  title,
  subtitle,
  description,
  "imageUrl": backgroundImage.asset->url,
  cvUrl
}`

export const metricsQuery = groq`*[_type == "metrics"][0] {
  items
}`

export const profileQuery = groq`*[_type == "profile"][0] {
  name,
  "title": currentTitle,
  "bio": biography,
  "headshotUrl": profileImage.asset->url,
  "cvUrl": cvFile.asset->url
}`

export const researchQuery = groq`*[_type == "research"][0] {
  sectionTitle,
  impacts
}`

export const contactQuery = groq`*[_type == "contact"][0] {
  title,
  description,
  email,
  phone,
  address,
  "inquiryTypes": inquiryTypes[].label,
  socialLinks
}`

// Collections
export const experienceQuery = groq`*[_type == "experience"] | order(startDate desc) {
  _id,
  role,
  organization,
  location,
  startDate,
  endDate,
  current,
  description
}`

export const leadershipQuery = groq`*[_type == "leadership"] | order(_createdAt asc) {
  _id,
  role,
  organization,
  description
}`

export const initiativesQuery = groq`*[_type == "initiative"] | order(_createdAt asc) {
  _id,
  title,
  category,
  summary,
  "imageUrl": image.asset->url,
  "slug": slug.current,
  content
}`

export const awardsQuery = groq`*[_type == "award"] | order(year desc) {
  _id,
  title,
  organization,
  year,
  description
}`

export const publicationsQuery = groq`*[_type == "publication"] | order(_createdAt desc) {
  _id,
  title,
  type,
  journal,
  date,
  abstract,
  "pdfUrl": pdfFile.asset->url,
  externalLink
}`

export const speakingQuery = groq`*[_type == "speaking"] | order(date desc) {
  _id,
  title,
  event,
  date,
  location,
  description,
  link
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt asc) {
  _id,
  quote,
  author,
  role,
  organization,
  "imageUrl": image.asset->url
}`

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  author,
  excerpt,
  "imageUrl": image.asset->url
}`
