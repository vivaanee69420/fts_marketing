import { ObjectId } from "mongodb";
import { getDb, COLLECTIONS } from "@/lib/mongo";
import { slugify } from "./slug";
import { categoryInputSchema, type Category, type CategoryInput } from "./schemas";

async function col() {
  return (await getDb()).collection<Category>(COLLECTIONS.categories);
}

export async function createCategory(input: CategoryInput): Promise<Category> {
  const data = categoryInputSchema.parse(input);
  const doc = {
    _id: new ObjectId(),
    name: data.name,
    slug: data.slug ? slugify(data.slug) : slugify(data.name),
    description: data.description,
  };
  await (await col()).insertOne(doc);
  return doc;
}

export async function listCategories(): Promise<Category[]> {
  return (await col()).find().sort({ name: 1 }).toArray();
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return (await col()).findOne({ slug });
}

export async function updateCategory(id: string, input: CategoryInput): Promise<void> {
  const data = categoryInputSchema.parse(input);
  await (await col()).updateOne(
    { _id: new ObjectId(id) },
    { $set: { name: data.name, slug: data.slug ? slugify(data.slug) : slugify(data.name), description: data.description } },
  );
}

export async function deleteCategory(id: string): Promise<void> {
  await (await col()).deleteOne({ _id: new ObjectId(id) });
}
