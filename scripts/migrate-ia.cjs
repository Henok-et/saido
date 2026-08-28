// One-off IA refactor migration. Run with:
//   npx sanity exec scripts/migrate-ia.cjs --with-user-token
// Uses the already-authenticated Sanity CLI session (no token needed in .env).
// CommonJS: the ESM build of sanity/cli doesn't export getCliClient in this
// package version, but the CJS build does.
const { getCliClient } = require('sanity/cli')

const client = getCliClient({ apiVersion: '2024-01-01' })

function randomKey() {
  return Math.random().toString(36).slice(2, 10)
}

function toPortableText(plainText) {
  if (!plainText) return []
  return [
    {
      _type: 'block',
      _key: randomKey(),
      style: 'normal',
      markDefs: [],
      children: [{ _type: 'span', _key: randomKey(), text: plainText, marks: [] }],
    },
  ]
}

const summary = {
  leadershipMigrated: 0,
  leadershipErrors: [],
  experienceCategoryBackfilled: 0,
  awardsMigrated: 0,
  awardErrors: [],
  speakingMigrated: 0,
  speakingErrors: [],
  publicationsFeatured: 0,
  publicationsUnfeatured: 0,
  researchTitlePatched: false,
  contactTitlePatched: false,
}

async function migrateLeadership() {
  const docs = await client.fetch(`*[_type == "leadership"]`)
  for (const doc of docs) {
    try {
      const newDoc = {
        _type: 'experience',
        role: doc.role,
        organization: doc.organization,
        category: 'Leadership',
        description: toPortableText(doc.description),
        current: false,
      }
      await client.transaction().create(newDoc).delete(doc._id).commit()
      summary.leadershipMigrated++
    } catch (err) {
      summary.leadershipErrors.push({ id: doc._id, error: String(err) })
    }
  }
}

async function backfillExperienceCategory() {
  const docs = await client.fetch(`*[_type == "experience" && !defined(category)]`)
  for (const doc of docs) {
    try {
      await client.patch(doc._id).set({ category: 'Professional' }).commit()
      summary.experienceCategoryBackfilled++
    } catch (err) {
      summary.leadershipErrors.push({ id: doc._id, error: String(err) })
    }
  }
}

async function migrateAwards() {
  const docs = await client.fetch(`*[_type == "award"]`)
  for (const doc of docs) {
    try {
      const newDoc = {
        _type: 'recognition',
        title: doc.title,
        type: 'Award',
        organization: doc.organization,
        year: doc.year,
        description: doc.description,
      }
      await client.transaction().create(newDoc).delete(doc._id).commit()
      summary.awardsMigrated++
    } catch (err) {
      summary.awardErrors.push({ id: doc._id, error: String(err) })
    }
  }
}

async function migrateSpeaking() {
  const docs = await client.fetch(`*[_type == "speaking"]`)
  for (const doc of docs) {
    try {
      const newDoc = {
        _type: 'engagement',
        title: doc.title,
        type: 'Keynote',
        event: doc.event,
        date: doc.date,
        location: doc.location,
        description: doc.description,
        link: doc.link,
      }
      await client.transaction().create(newDoc).delete(doc._id).commit()
      summary.speakingMigrated++
    } catch (err) {
      summary.speakingErrors.push({ id: doc._id, error: String(err) })
    }
  }
}

async function seedFeaturedPublications() {
  const docs = await client.fetch(`*[_type == "publication"] | order(_createdAt desc)`)
  const featuredIds = new Set(docs.slice(0, 4).map((d) => d._id))
  const tx = client.transaction()
  for (const doc of docs) {
    const featured = featuredIds.has(doc._id)
    tx.patch(doc._id, { set: { featured } })
    if (featured) summary.publicationsFeatured++
    else summary.publicationsUnfeatured++
  }
  if (docs.length > 0) await tx.commit()
}

async function patchResearchTitle() {
  const doc = await client.fetch(`*[_type == "research" && _id == "research"][0]{sectionTitle}`)
  if (doc && doc.sectionTitle !== 'Research & Impact') {
    await client.patch('research').set({ sectionTitle: 'Research & Impact' }).commit()
    summary.researchTitlePatched = true
  }
}

async function patchContactTitle() {
  const doc = await client.fetch(`*[_type == "contact" && _id == "contact"][0]{title}`)
  if (doc && (doc.title === 'Get in Touch' || !doc.title)) {
    await client.patch('contact').set({ title: "Let's Connect" }).commit()
    summary.contactTitlePatched = true
  }
}

async function main() {
  await migrateLeadership()
  await backfillExperienceCategory()
  await migrateAwards()
  await migrateSpeaking()
  await seedFeaturedPublications()
  await patchResearchTitle()
  await patchContactTitle()

  console.log('\n=== IA Migration Summary ===')
  console.log(JSON.stringify(summary, null, 2))

  const remaining = await client.fetch(`*[_type in ["leadership", "award", "speaking"]]{_id, _type}`)
  if (remaining.length > 0) {
    console.warn('\nWARNING: documents of old types still remain:', remaining)
    process.exitCode = 1
  } else {
    console.log('\nVerified: no remaining leadership/award/speaking documents.')
  }
}

main().catch((err) => {
  console.error('Migration failed:', err)
  process.exitCode = 1
})
