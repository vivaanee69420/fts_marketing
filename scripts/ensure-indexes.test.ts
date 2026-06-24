import { afterAll, beforeAll, expect, it } from "vitest";
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

it("creates a unique slug index on posts", async () => {
  const { ensureIndexes } = await import("./ensure-indexes");
  const { getDb, COLLECTIONS } = await import("@/lib/mongo");
  await ensureIndexes();
  const idx = await (await getDb()).collection(COLLECTIONS.posts).indexes();
  const slug = idx.find((i) => i.key.slug === 1);
  expect(slug?.unique).toBe(true);
});
