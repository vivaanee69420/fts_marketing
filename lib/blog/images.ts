import { GridFSBucket, ObjectId } from "mongodb";
import { Readable } from "node:stream";
import { getDb, IMAGES_BUCKET } from "@/lib/mongo";

async function bucket() {
  return new GridFSBucket(await getDb(), { bucketName: IMAGES_BUCKET });
}

export async function uploadImage(buffer: Buffer, filename: string, contentType: string): Promise<string> {
  const b = await bucket();
  return await new Promise<string>((resolve, reject) => {
    const upload = b.openUploadStream(filename, { metadata: { contentType } });
    Readable.from(buffer).pipe(upload)
      .on("error", reject)
      .on("finish", () => resolve(upload.id.toString()));
  });
}

export async function openImageDownload(id: string) {
  if (!ObjectId.isValid(id)) return null;
  const _id = new ObjectId(id);
  const db = await getDb();
  const file = await db.collection(`${IMAGES_BUCKET}.files`).findOne({ _id });
  if (!file) return null;
  const b = new GridFSBucket(db, { bucketName: IMAGES_BUCKET });
  // contentType may be stored at top-level (older drivers) or in metadata (newer drivers)
  const contentType =
    (file.contentType as string | undefined) ??
    (file.metadata?.contentType as string | undefined) ??
    "application/octet-stream";
  return {
    stream: b.openDownloadStream(_id),
    contentType,
    length: file.length as number,
  };
}
