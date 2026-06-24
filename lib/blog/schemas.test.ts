import { expect, it } from "vitest";
import { postInputSchema } from "./schemas";

const valid = {
  title: "All-on-4 in London",
  excerpt: "A short summary of the article that is long enough.",
  contentHtml: "<p>Body</p>",
  categorySlug: "all-on-4",
  tags: ["implants", "london"],
  status: "draft" as const,
  featured: false,
  seo: { metaTitle: "All-on-4", metaDescription: "Meta description here." },
};

it("accepts valid input", () => {
  expect(postInputSchema.parse(valid).title).toBe("All-on-4 in London");
});

it("rejects empty title", () => {
  expect(() => postInputSchema.parse({ ...valid, title: "" })).toThrow();
});

it("rejects bad status", () => {
  expect(() => postInputSchema.parse({ ...valid, status: "live" })).toThrow();
});

const base = {
  title: "All-on-4 Guide",
  excerpt: "A sufficiently long excerpt for validation.",
  contentHtml: "<p>Body</p>",
  categorySlug: "all-on-4",
  status: "published" as const,
};

it("accepts a valid coverImageUrl and the new optional fields", () => {
  const r = postInputSchema.parse({
    ...base,
    coverImageUrl: "https://cdn.example.com/blog/x.png",
    coverImageAlt: "An implant diagram",
    cssClass: "long-form",
    schemaJsonLd: '{"@context":"https://schema.org","@type":"FAQPage"}',
  });
  expect(r.coverImageUrl).toBe("https://cdn.example.com/blog/x.png");
  expect(r.cssClass).toBe("long-form");
});

it("rejects a non-URL coverImageUrl", () => {
  expect(() => postInputSchema.parse({ ...base, coverImageUrl: "not-a-url" })).toThrow();
});

it("rejects invalid JSON in schemaJsonLd but allows empty", () => {
  expect(() => postInputSchema.parse({ ...base, schemaJsonLd: "{not json" })).toThrow();
  expect(postInputSchema.parse({ ...base, schemaJsonLd: "" }).schemaJsonLd).toBe("");
});
