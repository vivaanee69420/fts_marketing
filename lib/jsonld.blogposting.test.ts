import { expect, it } from "vitest";
import { blogPosting } from "./jsonld";

it("builds a BlogPosting object", () => {
  const obj = blogPosting({
    title: "All-on-4 Guide",
    description: "A guide.",
    url: "https://x.com/blog/all-on-4/",
    datePublished: "2026-06-23T00:00:00.000Z",
    dateModified: "2026-06-23T00:00:00.000Z",
    authorName: "Gaurav Mehta",
  }) as Record<string, unknown>;
  expect(obj["@type"]).toBe("BlogPosting");
  expect(obj.headline).toBe("All-on-4 Guide");
  expect((obj.author as Record<string, unknown>).name).toBe("Gaurav Mehta");
});
