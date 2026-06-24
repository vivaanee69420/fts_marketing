import { expect, it } from "vitest";
import { slugify } from "./slug";

it("slugifies titles", () => {
  expect(slugify("All-on-4 Dental Implants in London!")).toBe("all-on-4-dental-implants-in-london");
  expect(slugify("  Multiple   spaces  ")).toBe("multiple-spaces");
  expect(slugify("Café & Crème")).toBe("cafe-creme");
  expect(slugify("---weird---")).toBe("weird");
});
