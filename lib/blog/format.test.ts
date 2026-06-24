import { expect, it } from "vitest";
import { formatDate } from "./format";

it("formats a date as D Month YYYY", () => {
  expect(formatDate("2026-06-23T00:00:00.000Z")).toBe("23 June 2026");
});
