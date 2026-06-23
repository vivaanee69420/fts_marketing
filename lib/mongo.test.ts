import { afterAll, beforeAll, expect, it } from "vitest";
import { MongoMemoryServer } from "mongodb-memory-server";

let mem: MongoMemoryServer;

beforeAll(async () => {
  mem = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mem.getUri();
  process.env.MONGODB_DB = "fts_test";
});

afterAll(async () => {
  const { getClient } = await import("./mongo");
  await (await getClient()).close();
  await mem.stop();
});

it("returns a usable Db and reuses one client", async () => {
  const { getClient, getDb } = await import("./mongo");
  const db = await getDb();
  const ping = await db.command({ ping: 1 });
  expect(ping.ok).toBe(1);
  expect(await getClient()).toBe(await getClient()); // same instance
});
