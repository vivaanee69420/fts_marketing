import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/blog/schemas";

export function PostCard({ post }: { post: Post }) {
  const href = `/blog/${post.slug}/`;
  return (
    <article className="overflow-hidden rounded-card border border-line bg-white shadow-sm">
      <Link href={href} className="block">
        <div className="relative aspect-[16/9] bg-gradient-to-br from-teal to-teal-l">
          {post.coverImageId && (
            <Image src={`/api/images/${post.coverImageId.toString()}`} alt={post.title}
              fill sizes="(max-width:940px) 100vw, 33vw" className="object-cover" />
          )}
        </div>
      </Link>
      <div className="p-5">
        <div className="mb-2 text-[0.74rem] font-bold uppercase tracking-[0.1em] text-teal">
          {post.categorySlug} · {post.readingMinutes} min read
        </div>
        <h3 className="mb-2 text-[1.2rem]"><Link href={href}>{post.title}</Link></h3>
        <p className="mb-0 text-sm text-muted">{post.excerpt}</p>
      </div>
    </article>
  );
}
