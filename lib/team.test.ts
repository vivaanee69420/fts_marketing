import { expect, it } from "vitest";
import { TEAM, getTeamMember } from "./team";

it("exposes team members with unique slugs", () => {
  expect(TEAM.length).toBeGreaterThanOrEqual(6);
  const slugs = TEAM.map((m) => m.slug);
  expect(new Set(slugs).size).toBe(slugs.length);
  expect(getTeamMember("gaurav-mehta")?.name).toBe("Gaurav Mehta");
});
