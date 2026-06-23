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
  await (await getDb()).collection(COLLECTIONS.users).deleteMany({});
});

it("creates a user and verifies credentials", async () => {
  const { createUser, verifyCredentials } = await import("./users");
  await createUser({ email: "Admin@Example.com", name: "Admin", password: "secret123" });
  expect(await verifyCredentials("admin@example.com", "secret123")).toMatchObject({ name: "Admin" });
  expect(await verifyCredentials("admin@example.com", "wrong")).toBeNull();
});
