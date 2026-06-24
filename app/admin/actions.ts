"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/admin-guard";
import { createPost, updatePost, deletePost, getPostById } from "@/lib/blog/posts";
import { createCategory, updateCategory, deleteCategory } from "@/lib/blog/categories";
import { formToPostInput } from "./form";

function revalidatePost(slug: string, categorySlug: string) {
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath(`/blog/category/${categorySlug}`);
}

export async function savePost(fd: FormData): Promise<void> {
  await requireSession();
  const id = (fd.get("id") as string) || "";
  const input = formToPostInput(fd);
  let slug: string;
  if (id) {
    const prev = await getPostById(id);
    const post = await updatePost(id, input);
    slug = post.slug;
    if (prev && prev.categorySlug !== post.categorySlug) {
      revalidatePath(`/blog/category/${prev.categorySlug}`);
    }
  } else {
    const post = await createPost(input);
    slug = post.slug;
  }
  revalidatePost(slug, input.categorySlug);
  redirect("/admin");
}

export async function removePost(id: string): Promise<void> {
  await requireSession();
  await deletePost(id);
  revalidatePath("/blog");
  redirect("/admin");
}

export async function saveCategory(fd: FormData): Promise<void> {
  await requireSession();
  const id = (fd.get("id") as string) || "";
  const input = {
    name: (fd.get("name") as string) ?? "",
    slug: ((fd.get("slug") as string) || "").trim() || undefined,
    description: ((fd.get("description") as string) || "").trim() || undefined,
  };
  if (id) await updateCategory(id, input);
  else await createCategory(input);
  revalidatePath("/blog");
  redirect("/admin/categories");
}

export async function removeCategory(id: string): Promise<void> {
  await requireSession();
  await deleteCategory(id);
  redirect("/admin/categories");
}
