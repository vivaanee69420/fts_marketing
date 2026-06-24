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

it("uploads and reads back an image", async () => {
  const { uploadImage, openImageDownload } = await import("./images");
  const id = await uploadImage(Buffer.from("PNGDATA"), "x.png", "image/png");
  const dl = await openImageDownload(id);
  expect(dl?.contentType).toBe("image/png");
  const chunks: Buffer[] = [];
  for await (const c of dl!.stream) chunks.push(c as Buffer);
  expect(Buffer.concat(chunks).toString()).toBe("PNGDATA");
});
