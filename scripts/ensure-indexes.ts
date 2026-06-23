import { getDb, COLLECTIONS } from "@/lib/mongo";

export async function ensureIndexes(): Promise<void> {
  const db = await getDb();
  await db.collection(COLLECTIONS.posts).createIndexes([
    { key: { slug: 1 }, unique: true, name: "slug_unique" },
    { key: { status: 1, publishedAt: -1 }, name: "status_publishedAt" },
    { key: { categorySlug: 1, publishedAt: -1 }, name: "category_publishedAt" },
    { key: { tags: 1 }, name: "tags" },
    { key: { featured: 1 }, name: "featured" },
    { key: { title: "text", excerpt: "text", tags: "text" }, name: "post_text" },
  ]);
  await db.collection(COLLECTIONS.categories).createIndex({ slug: 1 }, { unique: true, name: "slug_unique" });
  await db.collection(COLLECTIONS.users).createIndex({ email: 1 }, { unique: true, name: "email_unique" });
}

// CLI entry
if (process.argv[1] && process.argv[1].endsWith("ensure-indexes.ts")) {
  ensureIndexes()
    .then(() => { console.log("Indexes ensured."); return getDb(); })
    .then((db) => db.command({ ping: 1 }))
    .then(() => process.exit(0))
    .catch((e) => { console.error(e); process.exit(1); });
}
