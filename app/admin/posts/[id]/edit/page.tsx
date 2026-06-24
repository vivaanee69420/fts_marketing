import { notFound } from "next/navigation";
import { requireSession } from "@/lib/admin-guard";
import { getPostById } from "@/lib/blog/posts";
import { listCategories } from "@/lib/blog/categories";
import { TEAM } from "@/lib/team";
import { PostForm } from "@/components/admin/PostForm";

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  await requireSession();
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) notFound();
  const categories = await listCategories();
  return (
    <div>
      <h1 className="mb-6 text-[1.5rem]">Edit post</h1>
      <PostForm
        categories={categories}
        team={TEAM}
        values={{
          id: post._id.toString(),
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          contentHtml: post.contentHtml,
          coverImageUrl: post.coverImageUrl,
          coverImageAlt: post.coverImageAlt,
          cssClass: post.cssClass,
          schemaJsonLd: post.schemaJsonLd,
          authorSlug: post.authorSlug,
          categorySlug: post.categorySlug,
          tags: post.tags,
          status: post.status,
          featured: post.featured,
          metaTitle: post.seo.metaTitle,
          metaDescription: post.seo.metaDescription,
        }}
      />
    </div>
  );
}
