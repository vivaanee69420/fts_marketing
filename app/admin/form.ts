import { getTeamMember } from "@/lib/team";
import type { PostInput } from "@/lib/blog/schemas";

export function formToPostInput(fd: FormData): PostInput {
  const authorSlug = (fd.get("authorSlug") as string) || undefined;
  return {
    title: (fd.get("title") as string) ?? "",
    slug: ((fd.get("slug") as string) || "").trim() || undefined,
    excerpt: (fd.get("excerpt") as string) ?? "",
    contentHtml: (fd.get("contentHtml") as string) ?? "",
    coverImageId: ((fd.get("coverImageId") as string) || "").trim() || undefined,
    authorSlug,
    authorName: authorSlug ? getTeamMember(authorSlug)?.name : undefined,
    categorySlug: (fd.get("categorySlug") as string) ?? "",
    tags: ((fd.get("tags") as string) || "")
      .split(",").map((t) => t.trim()).filter(Boolean),
    status: (fd.get("status") as "draft" | "published") ?? "draft",
    featured: fd.get("featured") === "on" || fd.get("featured") === "true",
    seo: {
      metaTitle: ((fd.get("metaTitle") as string) || "").trim() || undefined,
      metaDescription: ((fd.get("metaDescription") as string) || "").trim() || undefined,
    },
  } as PostInput;
}
