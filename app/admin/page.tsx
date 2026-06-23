import Link from "next/link";
import { requireSession } from "@/lib/admin-guard";
import { listAllForAdmin } from "@/lib/blog/posts";
import { removePost } from "./actions";
import { Button, ButtonLink } from "@/components/ui/Button";
import { SignOutButton } from "@/components/admin/SignOutButton";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  await requireSession();
  const posts = await listAllForAdmin();
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[1.5rem]">Posts</h1>
        <div className="flex items-center gap-3">
          <ButtonLink href="/admin/categories" variant="ghost">Categories</ButtonLink>
          <ButtonLink href="/admin/posts/new" variant="teal">New post</ButtonLink>
          <SignOutButton />
        </div>
      </div>
      <div className="overflow-hidden rounded-card border border-line bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-soft2 text-muted">
            <tr><th className="p-3">Title</th><th className="p-3">Status</th><th className="p-3">Category</th><th className="p-3">Updated</th><th className="p-3"></th></tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p._id.toString()} className="border-t border-line">
                <td className="p-3 font-semibold">{p.title}</td>
                <td className="p-3">{p.status}</td>
                <td className="p-3">{p.categorySlug}</td>
                <td className="p-3">{new Date(p.updatedAt).toLocaleDateString()}</td>
                <td className="p-3 text-right">
                  <Link href={`/admin/posts/${p._id.toString()}/edit`} className="mr-4 font-semibold text-teal">Edit</Link>
                  <form action={removePost.bind(null, p._id.toString())} className="inline">
                    <Button variant="ghost" type="submit" className="text-[#b4452f]">Delete</Button>
                  </form>
                </td>
              </tr>
            ))}
            {posts.length === 0 && <tr><td className="p-6 text-muted" colSpan={5}>No posts yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
