import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { searchPublished } from "@/lib/blog/posts";
import { Section, Kicker } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PostCard } from "@/components/blog/PostCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta({
  title: "Search the blog — Fixed Teeth Solutions",
  description: "Search articles about full arch dental implants.",
  path: "/blog/search/",
});

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const results = q ? await searchPublished(q) : [];
  return (
    <Section>
      <Container>
        <Kicker>Blog</Kicker>
        <h1>Search</h1>
        <form action="/blog/search/" method="get" className="mt-6 mb-10 flex gap-3">
          <input name="q" defaultValue={q} placeholder="Search articles…"
            className="w-full max-w-[480px] rounded-[10px] border border-line px-3 py-2" />
          <button className="rounded-[10px] bg-teal px-4 py-2 font-semibold text-white" type="submit">Search</button>
        </form>
        {q && <p className="mb-6 text-muted">{results.length} result(s) for "{q}".</p>}
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => <PostCard key={p._id.toString()} post={p} />)}
        </div>
      </Container>
    </Section>
  );
}
