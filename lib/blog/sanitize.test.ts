import { expect, it } from "vitest";
import { sanitizeHtml } from "./sanitize";

it("keeps safe content, strips dangerous content", () => {
  expect(sanitizeHtml("<p>Hello <strong>world</strong></p>")).toContain("<strong>world</strong>");
  expect(sanitizeHtml('<a href="https://x.com">x</a>')).toContain('href="https://x.com"');
  expect(sanitizeHtml("<script>alert(1)</script><p>ok</p>")).toBe("<p>ok</p>");
  expect(sanitizeHtml('<img src="x" onerror="alert(1)">')).not.toContain("onerror");
  expect(sanitizeHtml('<a href="javascript:alert(1)">x</a>')).not.toContain("javascript:");
});
