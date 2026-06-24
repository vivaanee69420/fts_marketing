import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "node:crypto";

let _client: S3Client | null = null;
function client(): S3Client {
  if (!_client) _client = new S3Client({ region: process.env.AWS_REGION });
  return _client;
}

function publicBase(): string {
  return (
    process.env.S3_PUBLIC_BASE_URL ??
    `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`
  );
}

/** Upload bytes to S3 under blog/<uuid>.<ext> (public-read via bucket policy). */
export async function uploadImage(
  bytes: Buffer,
  contentType: string,
  ext: string,
): Promise<string> {
  const bucket = process.env.S3_BUCKET;
  if (!bucket) throw new Error("S3_BUCKET is not set");
  const key = `blog/${randomUUID()}.${ext}`;
  await client().send(
    new PutObjectCommand({ Bucket: bucket, Key: key, Body: bytes, ContentType: contentType }),
  );
  return `${publicBase()}/${key}`;
}
