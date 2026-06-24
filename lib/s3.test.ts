import { afterEach, beforeEach, expect, it, vi } from "vitest";

const sendMock = vi.fn();
vi.mock("@aws-sdk/client-s3", () => ({
  S3Client: vi.fn(function () {
    return { send: sendMock };
  }),
  PutObjectCommand: vi.fn(function (input: unknown) {
    return { input };
  }),
}));

beforeEach(() => {
  sendMock.mockReset().mockResolvedValue({});
  process.env.AWS_REGION = "eu-west-2";
  process.env.S3_BUCKET = "fts-images";
  delete process.env.S3_PUBLIC_BASE_URL;
});
afterEach(() => vi.resetModules());

it("uploads under blog/<uuid>.<ext> and returns the public URL", async () => {
  const { uploadImage } = await import("./s3");
  const url = await uploadImage(Buffer.from("x"), "image/png", "png");
  expect(sendMock).toHaveBeenCalledOnce();
  const { PutObjectCommand } = await import("@aws-sdk/client-s3");
  const cmdInput = (PutObjectCommand as unknown as { mock: { calls: Record<string, unknown>[][] } }).mock.calls.at(-1)![0] as Record<string, unknown>;
  expect(cmdInput.Bucket).toBe("fts-images");
  expect(cmdInput.ContentType).toBe("image/png");
  expect(String(cmdInput.Key)).toMatch(/^blog\/[0-9a-f-]{36}\.png$/);
  expect(url).toBe(`https://fts-images.s3.eu-west-2.amazonaws.com/${cmdInput.Key}`);
});

it("uses S3_PUBLIC_BASE_URL when set", async () => {
  process.env.S3_PUBLIC_BASE_URL = "https://cdn.fts.com";
  const { uploadImage } = await import("./s3");
  const url = await uploadImage(Buffer.from("x"), "image/webp", "webp");
  expect(url).toMatch(/^https:\/\/cdn\.fts\.com\/blog\/[0-9a-f-]{36}\.webp$/);
});
