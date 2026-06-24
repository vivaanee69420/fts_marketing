import { expect, it, vi } from "vitest";

// Mock heavy server-side modules that can't resolve in vitest/jsdom
vi.mock("@/lib/admin-guard", () => ({ requireSession: vi.fn() }));
vi.mock("@/lib/blog/posts", () => ({
  createPost: vi.fn(),
  updatePost: vi.fn(),
  deletePost: vi.fn(),
  getPostById: vi.fn(),
}));
vi.mock("@/lib/blog/categories", () => ({
  createCategory: vi.fn(),
  updateCategory: vi.fn(),
  deleteCategory: vi.fn(),
}));
vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));
vi.mock("next/navigation", () => ({ redirect: vi.fn() }));
vi.mock("@/lib/team", () => ({ getTeamMember: vi.fn(() => ({ name: "Gaurav Mehta" })) }));

import { formToPostInput } from "./form";

it("parses form data into PostInput", () => {
  const fd = new FormData();
  fd.set("title", "Hello");
  fd.set("excerpt", "A long enough excerpt for the schema.");
  fd.set("contentHtml", "<p>Body</p>");
  fd.set("categorySlug", "all-on-4");
  fd.set("tags", "implants, london");
  fd.set("status", "published");
  fd.set("featured", "on");
  fd.set("authorSlug", "gaurav-mehta");
  const input = formToPostInput(fd);
  expect(input.tags).toEqual(["implants", "london"]);
  expect(input.featured).toBe(true);
  expect(input.status).toBe("published");
});

it("maps the new editor fields from FormData", () => {
  const fd = new FormData();
  fd.set("title", "T");
  fd.set("excerpt", "A long enough excerpt here.");
  fd.set("contentHtml", "<p>x</p>");
  fd.set("categorySlug", "all-on-4");
  fd.set("status", "published");
  fd.set("coverImageUrl", "https://cdn.example.com/blog/x.png");
  fd.set("coverImageAlt", "alt text");
  fd.set("cssClass", "long-form");
  fd.set("schemaJsonLd", '{"@type":"FAQPage"}');
  const input = formToPostInput(fd);
  expect(input.coverImageUrl).toBe("https://cdn.example.com/blog/x.png");
  expect(input.coverImageAlt).toBe("alt text");
  expect(input.cssClass).toBe("long-form");
  expect(input.schemaJsonLd).toBe('{"@type":"FAQPage"}');
});
