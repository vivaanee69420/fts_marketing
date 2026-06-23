import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";
import { getDb, COLLECTIONS } from "@/lib/mongo";

export type User = {
  _id: ObjectId;
  email: string;
  name: string;
  passwordHash: string;
  role: "admin" | "editor";
  createdAt: Date;
  updatedAt: Date;
};

async function col() {
  return (await getDb()).collection<User>(COLLECTIONS.users);
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return (await col()).findOne({ email: email.toLowerCase() });
}

export async function createUser(input: {
  email: string; name: string; password: string; role?: "admin" | "editor";
}): Promise<User> {
  const now = new Date();
  const doc: User = {
    _id: new ObjectId(),
    email: input.email.toLowerCase(),
    name: input.name,
    passwordHash: await bcrypt.hash(input.password, 12),
    role: input.role ?? "editor",
    createdAt: now,
    updatedAt: now,
  };
  await (await col()).insertOne(doc);
  return doc;
}

export async function verifyCredentials(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return null;
  return { id: user._id.toString(), email: user.email, name: user.name, role: user.role };
}
