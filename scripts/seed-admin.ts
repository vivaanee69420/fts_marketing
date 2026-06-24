import { createUser, getUserByEmail } from "@/lib/blog/users";
import { getClient } from "@/lib/mongo";

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;
  if (!email || !password) throw new Error("SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD are required");
  if (await getUserByEmail(email)) {
    console.log(`Admin ${email} already exists — skipping.`);
  } else {
    await createUser({ email, name: "Admin", password, role: "admin" });
    console.log(`Created admin ${email}.`);
  }
  await (await getClient()).close();
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
