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
