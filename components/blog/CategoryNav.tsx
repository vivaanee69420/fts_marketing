import Link from "next/link";
import type { Category } from "@/lib/blog/schemas";

export function CategoryNav({ categories, activeSlug }: { categories: Category[]; activeSlug?: string }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      <Link href="/blog/" className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${!activeSlug ? "border-teal bg-teal text-white" : "border-line"}`}>All</Link>
      {categories.map((c) => (
        <Link key={c.slug} href={`/blog/category/${c.slug}/`}
          className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${activeSlug === c.slug ? "border-teal bg-teal text-white" : "border-line"}`}>
          {c.name}
        </Link>
      ))}
    </div>
  );
}
