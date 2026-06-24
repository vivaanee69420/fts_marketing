import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { listPublished } from "@/lib/blog/posts";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PostCard } from "@/components/blog/PostCard";
import { Pagination } from "@/components/blog/Pagination";

export const revalidate = 3600;
const PER_PAGE = 9;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMeta({
    title: `#${slug} — Blog | Fixed Teeth Solutions`,
    description: `Articles tagged ${slug}.`,
    path: `/blog/tag/${slug}/`,
  });
}

export default async function TagArchive({
  params, searchParams,
}: { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> }) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);
  const { items, total } = await listPublished({ page, perPage: PER_PAGE, tag: slug });
  return (
    <Section>
      <Container>
        <Kicker>Blog</Kicker>
        <h1>Tagged: {slug}</h1>
        <div className="mt-8 grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <PostCard key={p._id.toString()} post={p} />)}
        </div>
        {items.length === 0 && <p className="text-muted">No posts with this tag yet.</p>}
        <Pagination basePath={`/blog/tag/${slug}/`} page={page} total={total} perPage={PER_PAGE} />
      </Container>
    </Section>
  );
}
