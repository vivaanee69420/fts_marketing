import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { listPublished } from "@/lib/blog/posts";
import { getCategoryBySlug, listCategories } from "@/lib/blog/categories";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PostCard } from "@/components/blog/PostCard";
import { CategoryNav } from "@/components/blog/CategoryNav";
import { Pagination } from "@/components/blog/Pagination";

export const revalidate = 3600;
const PER_PAGE = 9;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = await getCategoryBySlug(slug);
  if (!cat) return {};
  return pageMeta({
    title: `${cat.name} — Blog | Fixed Teeth Solutions`,
    description: cat.description || `Articles about ${cat.name}.`,
    path: `/blog/category/${cat.slug}/`,
  });
}

export default async function CategoryArchive({
  params, searchParams,
}: { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> }) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const cat = await getCategoryBySlug(slug);
  if (!cat) notFound();
  const page = Math.max(1, Number(pageParam) || 1);
  const [{ items, total }, categories] = await Promise.all([
    listPublished({ page, perPage: PER_PAGE, categorySlug: slug }),
    listCategories(),
  ]);
  return (
    <Section>
      <Container>
        <Kicker>Blog</Kicker>
        <h1>{cat.name}</h1>
        <div className="mt-8"><CategoryNav categories={categories} activeSlug={slug} /></div>
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <PostCard key={p._id.toString()} post={p} />)}
        </div>
        {items.length === 0 && <p className="text-muted">No posts in this category yet.</p>}
        <Pagination basePath={`/blog/category/${slug}/`} page={page} total={total} perPage={PER_PAGE} />
      </Container>
    </Section>
  );
}
