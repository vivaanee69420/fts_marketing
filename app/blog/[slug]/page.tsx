import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumb, blogPosting } from "@/lib/jsonld";
import { draftMode } from "next/headers";
import { getPublishedBySlug, getBySlugAnyStatus, listRelated } from "@/lib/blog/posts";
import { AuthorByline } from "@/components/blog/AuthorByline";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { PostCard } from "@/components/blog/PostCard";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/blog/format";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBySlug(slug);
  if (!post) return {};
  return pageMeta({
    title: post.seo.metaTitle || post.title,
    description: post.seo.metaDescription || post.excerpt,
    path: `/blog/${post.slug}/`,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const post = isEnabled ? await getBySlugAnyStatus(slug) : await getPublishedBySlug(slug);
  if (!post) notFound();
  const related = await listRelated(post);
  const path = `/blog/${post.slug}/`;
  return (
    <Section>
      <Container>
        <JsonLd data={[
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: post.title, path },
          ]),
          blogPosting({
            title: post.title,
            description: post.excerpt,
            url: `${SITE_URL}${path}`,
            image: post.coverImageId ? `${SITE_URL}/api/images/${post.coverImageId.toString()}` : undefined,
            datePublished: (post.publishedAt ?? post.createdAt).toISOString(),
            dateModified: post.updatedAt.toISOString(),
            authorName: post.authorName,
          }),
        ]} />

        <article className="mx-auto max-w-[760px]">
          <Kicker>{post.categorySlug}</Kicker>
          <h1>{post.title}</h1>
          <div className="my-4">
            <AuthorByline authorSlug={post.authorSlug} authorName={post.authorName} date={post.publishedAt ?? post.createdAt} />
          </div>
          <p className="text-sm text-muted">Last updated {formatDate(post.updatedAt)}</p>
          <div className="prose mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          <ShareButtons path={path} title={post.title} />
        </article>

        {related.length > 0 && (
          <div className="mx-auto mt-16 max-w-[1000px]">
            <h2 className="mb-6">Related articles</h2>
            <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
              {related.map((p) => <PostCard key={p._id.toString()} post={p} />)}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
