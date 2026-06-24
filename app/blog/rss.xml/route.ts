import { listPublished } from "@/lib/blog/posts";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const revalidate = 3600;

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const { items } = await listPublished({ perPage: 50 });
  const entries = items.map((p) => `
    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}/</link>
      <guid>${SITE_URL}/blog/${p.slug}/</guid>
      <pubDate>${new Date(p.publishedAt ?? p.createdAt).toUTCString()}</pubDate>
      <description>${esc(p.excerpt)}</description>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>${esc(SITE_NAME)} — Blog</title>
  <link>${SITE_URL}/blog/</link>
  <description>Full arch dental implant insights.</description>
  ${entries}
</channel></rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
