import { expect, it } from "vitest";
import { readingMinutes } from "./reading-time";

it("estimates minutes at ~200 wpm, min 1", () => {
  expect(readingMinutes("<p>hello world</p>")).toBe(1);
  const longText = "<p>" + Array.from({ length: 600 }, () => "word").join(" ") + "</p>";
  expect(readingMinutes(longText)).toBe(3);
});
