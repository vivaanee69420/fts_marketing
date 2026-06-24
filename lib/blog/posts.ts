import { ObjectId } from "mongodb";
import { getDb, COLLECTIONS } from "@/lib/mongo";
import { slugify } from "./slug";
import { sanitizeHtml } from "./sanitize";
import { readingMinutes } from "./reading-time";
import { postInputSchema, type Post, type PostInput } from "./schemas";

async function col() {
  return (await getDb()).collection<Post>(COLLECTIONS.posts);
}

async function uniqueSlug(base: string, excludeId?: ObjectId): Promise<string> {
  const c = await col();
  let candidate = base || "post";
  let n = 1;
  while (true) {
    const clash = await c.findOne({ slug: candidate, ...(excludeId ? { _id: { $ne: excludeId } } : {}) });
    if (!clash) return candidate;
    n += 1;
    candidate = `${base}-${n}`;
  }
}

function processInput(data: PostInput) {
  const contentHtml = sanitizeHtml(data.contentHtml);
  return {
    title: data.title,
    excerpt: data.excerpt,
    contentHtml,
    coverImageId: data.coverImageId ? new ObjectId(data.coverImageId) : undefined,
    authorSlug: data.authorSlug,
    authorName: data.authorName,
    categorySlug: data.categorySlug,
    tags: data.tags,
    status: data.status,
    featured: data.featured,
    seo: data.seo,
    readingMinutes: readingMinutes(contentHtml),
  };
}

export async function createPost(input: PostInput): Promise<Post> {
  const data = postInputSchema.parse(input);
  const now = new Date();
  const processed = processInput(data);
  const slug = await uniqueSlug(slugify(data.slug ?? data.title));
  const doc: Post = {
    _id: new ObjectId(),
    ...processed,
    slug,
    publishedAt: data.status === "published" ? now : null,
    createdAt: now,
    updatedAt: now,
  };
  await (await col()).insertOne(doc);
  return doc;
}

export async function updatePost(id: string, input: PostInput): Promise<Post> {
  const data = postInputSchema.parse(input);
  const _id = new ObjectId(id);
  const existing = await (await col()).findOne({ _id });
  if (!existing) throw new Error("Post not found");
  const processed = processInput(data);
  const slug = await uniqueSlug(slugify(data.slug ?? data.title), _id);
  const publishedAt =
    data.status === "published" ? existing.publishedAt ?? new Date() : null;
  const update = { ...processed, slug, publishedAt, updatedAt: new Date() };
  await (await col()).updateOne({ _id }, { $set: update });
  return { ...existing, ...update };
}

export async function deletePost(id: string): Promise<void> {
  await (await col()).deleteOne({ _id: new ObjectId(id) });
}

export async function getPostById(id: string): Promise<Post | null> {
  if (!ObjectId.isValid(id)) return null;
  return (await col()).findOne({ _id: new ObjectId(id) });
}

export async function getPublishedBySlug(slug: string): Promise<Post | null> {
  return (await col()).findOne({ slug, status: "published" });
}

export async function getBySlugAnyStatus(slug: string): Promise<Post | null> {
  return (await col()).findOne({ slug });
}

export async function listPublished(opts: {
  page?: number; perPage?: number; categorySlug?: string; tag?: string;
} = {}): Promise<{ items: Post[]; total: number }> {
  const page = Math.max(1, opts.page ?? 1);
  const perPage = opts.perPage ?? 9;
  const filter: Record<string, unknown> = { status: "published" };
  if (opts.categorySlug) filter.categorySlug = opts.categorySlug;
  if (opts.tag) filter.tags = opts.tag;
  const c = await col();
  const [items, total] = await Promise.all([
    c.find(filter).sort({ publishedAt: -1 }).skip((page - 1) * perPage).limit(perPage).toArray(),
    c.countDocuments(filter),
  ]);
  return { items, total };
}

export async function listFeatured(limit = 1): Promise<Post[]> {
  return (await col())
    .find({ status: "published", featured: true })
    .sort({ publishedAt: -1 }).limit(limit).toArray();
}

export async function listRelated(post: Post, limit = 3): Promise<Post[]> {
  return (await col())
    .find({
      status: "published",
      _id: { $ne: post._id },
      $or: [{ categorySlug: post.categorySlug }, { tags: { $in: post.tags } }],
    })
    .sort({ publishedAt: -1 }).limit(limit).toArray();
}

export async function searchPublished(query: string, limit = 20): Promise<Post[]> {
  if (!query.trim()) return [];
  return (await col())
    .find({ status: "published", $text: { $search: query } })
    .sort({ publishedAt: -1 }).limit(limit).toArray();
}

export async function listAllForAdmin(opts: { status?: "draft" | "published" } = {}): Promise<Post[]> {
  const filter = opts.status ? { status: opts.status } : {};
  return (await col()).find(filter).sort({ updatedAt: -1 }).toArray();
}
