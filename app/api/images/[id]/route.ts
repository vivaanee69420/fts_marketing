import { openImageDownload } from "@/lib/blog/images";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dl = await openImageDownload(id);
  if (!dl) return new Response("Not found", { status: 404 });
  const stream = dl.stream as unknown as ReadableStream;
  return new Response(stream, {
    headers: {
      "Content-Type": dl.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
