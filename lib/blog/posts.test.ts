import { afterAll, beforeAll, beforeEach, expect, it } from "vitest";
import { MongoMemoryServer } from "mongodb-memory-server";

let mem: MongoMemoryServer;
beforeAll(async () => {
  mem = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mem.getUri();
  process.env.MONGODB_DB = "fts_test";
  const { ensureIndexes } = await import("@/scripts/ensure-indexes");
  await ensureIndexes();
});
afterAll(async () => {
  const { getClient } = await import("@/lib/mongo");
  await (await getClient()).close();
  await mem.stop();
});
beforeEach(async () => {
  const { getDb, COLLECTIONS } = await import("@/lib/mongo");
  await (await getDb()).collection(COLLECTIONS.posts).deleteMany({});
});

const base = {
  title: "All-on-4 Guide",
  excerpt: "A sufficiently long excerpt for validation.",
  contentHtml: "<p>Body <script>alert(1)</script></p>",
  categorySlug: "all-on-4",
  tags: ["implants"],
  status: "published" as const,
  featured: false,
  seo: {},
};

it("creates a published post: sanitizes, slugs, sets publishedAt, reading time", async () => {
  const { createPost } = await import("./posts");
  const p = await createPost(base);
  expect(p.slug).toBe("all-on-4-guide");
  expect(p.contentHtml).not.toContain("<script>");
  expect(p.publishedAt).toBeInstanceOf(Date);
  expect(p.readingMinutes).toBeGreaterThanOrEqual(1);
});

it("dedupes slugs", async () => {
  const { createPost } = await import("./posts");
  await createPost(base);
  const p2 = await createPost(base);
  expect(p2.slug).toBe("all-on-4-guide-2");
});

it("listPublished hides drafts", async () => {
  const { createPost, listPublished } = await import("./posts");
  await createPost(base);
  await createPost({ ...base, title: "Draft One", status: "draft" });
  const { items, total } = await listPublished();
  expect(total).toBe(1);
  expect(items[0].title).toBe("All-on-4 Guide");
});

it("getPublishedBySlug returns null for drafts", async () => {
  const { createPost, getPublishedBySlug } = await import("./posts");
  const d = await createPost({ ...base, title: "Hidden", status: "draft" });
  expect(await getPublishedBySlug(d.slug)).toBeNull();
});

it("persists the new editor fields", async () => {
  const { createPost } = await import("@/lib/blog/posts");
  const post = await createPost({
    ...base,
    coverImageUrl: "https://cdn.example.com/blog/x.png",
    coverImageAlt: "diagram",
    cssClass: "long-form",
    schemaJsonLd: '{"@type":"FAQPage"}',
  });
  expect(post.coverImageUrl).toBe("https://cdn.example.com/blog/x.png");
  expect(post.coverImageAlt).toBe("diagram");
  expect(post.cssClass).toBe("long-form");
  expect(post.schemaJsonLd).toBe('{"@type":"FAQPage"}');
});
