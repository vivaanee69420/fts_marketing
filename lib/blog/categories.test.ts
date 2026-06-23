import { afterAll, beforeAll, beforeEach, expect, it } from "vitest";
import { MongoMemoryServer } from "mongodb-memory-server";

let mem: MongoMemoryServer;
beforeAll(async () => {
  mem = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mem.getUri();
  process.env.MONGODB_DB = "fts_test";
});
afterAll(async () => {
  const { getClient } = await import("@/lib/mongo");
  await (await getClient()).close();
  await mem.stop();
});
beforeEach(async () => {
  const { getDb, COLLECTIONS } = await import("@/lib/mongo");
  await (await getDb()).collection(COLLECTIONS.categories).deleteMany({});
});

it("creates a category and derives a slug", async () => {
  const { createCategory, getCategoryBySlug } = await import("./categories");
  const c = await createCategory({ name: "All on 4" });
  expect(c.slug).toBe("all-on-4");
  expect(await getCategoryBySlug("all-on-4")).not.toBeNull();
});
