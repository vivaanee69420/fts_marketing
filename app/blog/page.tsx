import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { listPublished, listFeatured } from "@/lib/blog/posts";
import { listCategories } from "@/lib/blog/categories";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PostCard } from "@/components/blog/PostCard";
import { CategoryNav } from "@/components/blog/CategoryNav";
import { Pagination } from "@/components/blog/Pagination";

export const revalidate = 3600;

export const metadata: Metadata = pageMeta({
  title: "Blog — Fixed Teeth Solutions",
  description: "Guides and insights on full arch dental implants, All-on-4, aftercare, costs and more.",
  path: "/blog/",
});

const PER_PAGE = 9;

export default async function BlogIndex({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);
  const [{ items, total }, featured, categories] = await Promise.all([
    listPublished({ page, perPage: PER_PAGE }),
    page === 1 ? listFeatured(1) : Promise.resolve([]),
    listCategories(),
  ]);
  const hero = featured[0];
  return (
    <Section>
      <Container>
        <Kicker>Blog</Kicker>
        <h1>Insights on full arch implants</h1>
        <div className="mt-8"><CategoryNav categories={categories} /></div>
        {hero && (
          <div className="mb-10"><PostCard post={hero} /></div>
        )}
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {items.filter((p) => p._id.toString() !== hero?._id.toString()).map((p) => (
            <PostCard key={p._id.toString()} post={p} />
          ))}
        </div>
        {items.length === 0 && <p className="text-muted">No posts yet.</p>}
        <Pagination basePath="/blog/" page={page} total={total} perPage={PER_PAGE} />
      </Container>
    </Section>
  );
}
