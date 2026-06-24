import { MongoClient, type Db } from "mongodb";

export const COLLECTIONS = {
  users: "users",
  posts: "posts",
  categories: "categories",
} as const;

// Cache across hot-reloads in dev and across requests on the long-lived server.
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

export function getClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const dbName = process.env.MONGODB_DB;
  if (!dbName) throw new Error("MONGODB_DB is not set");
  return (await getClient()).db(dbName);
}
