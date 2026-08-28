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

export const profileQuery = groq`*[_type == "profile" && _id == "profile"][0] {
  name,
  "title": currentTitle,
  "bio": biography,
  "headshotUrl": profileImage.asset->url,
  "cvUrl": cvFile.asset->url,
  expertise,
  education,
  certifications
}`

export const researchQuery = groq`*[_type == "research"][0] {
  sectionTitle,
  sectionDescription,
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
  category,
  location,
  startDate,
  endDate,
  current,
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

export const initiativeBySlugQuery = groq`*[_type == "initiative" && slug.current == $slug][0] {
  _id,
  title,
  category,
  summary,
  "imageUrl": image.asset->url,
  "slug": slug.current,
  content
}`

export const recognitionQuery = groq`*[_type == "recognition"] | order(year desc) {
  _id,
  title,
  type,
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
  externalLink,
  featured
}`

export const featuredPublicationsQuery = groq`*[_type == "publication" && featured == true] | order(_createdAt desc) [0...6] {
  _id,
  title,
  type,
  journal,
  date,
  abstract,
  "pdfUrl": pdfFile.asset->url,
  externalLink,
  featured
}`

export const engagementQuery = groq`*[_type == "engagement"] | order(date desc) {
  _id,
  title,
  type,
  event,
  date,
  location,
  description,
  link,
  "imageUrl": image.asset->url,
  imageCaption
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

export const latestBlogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) [0...3] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  author,
  excerpt,
  "imageUrl": image.asset->url
}`

export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  author,
  excerpt,
  "imageUrl": image.asset->url,
  content
}`
