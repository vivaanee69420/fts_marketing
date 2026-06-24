import { z } from "zod";
import type { ObjectId } from "mongodb";

export type PostStatus = "draft" | "published";

export const postInputSchema = z.object({
  title: z.string().trim().min(1).max(160),
  slug: z.string().trim().min(1).max(180).optional(), // derived from title if absent
  excerpt: z.string().trim().min(10).max(320),
  contentHtml: z.string().min(1),
  coverImageId: z.string().optional(),
  authorSlug: z.string().optional(),
  authorName: z.string().optional(),
  categorySlug: z.string().min(1),
  tags: z.array(z.string().trim().min(1)).max(20).default([]),
  status: z.enum(["draft", "published"]),
  featured: z.boolean().default(false),
  seo: z.object({
    metaTitle: z.string().trim().max(70).optional(),
    metaDescription: z.string().trim().max(180).optional(),
  }).default({}),
});
export type PostInput = z.infer<typeof postInputSchema>;

export const categoryInputSchema = z.object({
  name: z.string().trim().min(1).max(80),
  slug: z.string().trim().min(1).max(100).optional(),
  description: z.string().trim().max(300).optional(),
});
export type CategoryInput = z.infer<typeof categoryInputSchema>;

export type Category = {
  _id: ObjectId;
  name: string;
  slug: string;
  description?: string;
};

export type Post = {
  _id: ObjectId;
  title: string;
  slug: string;
  excerpt: string;
  contentHtml: string;
  coverImageId?: ObjectId;
  authorSlug?: string;
  authorName?: string;
  categorySlug: string;
  tags: string[];
  status: PostStatus;
  featured: boolean;
  seo: { metaTitle?: string; metaDescription?: string };
  readingMinutes: number;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};
