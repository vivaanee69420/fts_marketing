import type { Metadata } from "next";

/** Per-page metadata with a self-referencing canonical (resolved against metadataBase). */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** absolute path with trailing slash, e.g. "/pricing/" */
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website" },
  };
}
