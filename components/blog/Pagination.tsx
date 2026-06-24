import Link from "next/link";

export function Pagination({ basePath, page, total, perPage }: {
  basePath: string; page: number; total: number; perPage: number;
}) {
  const pages = Math.ceil(total / perPage);
  if (pages <= 1) return null;
  return (
    <nav className="mt-10 flex justify-center gap-2">
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <Link key={n} href={n === 1 ? basePath : `${basePath}?page=${n}`}
          className={`rounded-[8px] border px-3 py-1 text-sm ${n === page ? "border-teal bg-teal text-white" : "border-line"}`}>
          {n}
        </Link>
      ))}
    </nav>
  );
}
