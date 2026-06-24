// Module resolution hook: maps the project's "@/..." path alias (tsconfig
// paths "@/*" -> "./*") to real files so the seed/index scripts can run under
// plain `node --experimental-strip-types`, which does NOT read tsconfig paths.
// Used only by the CLI scripts (db:indexes, seed:admin) — the app/bundler
// resolve "@/" on their own.
import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve as resolvePath } from "node:path";

// scripts/ -> project root (fts/)
const ROOT = resolvePath(dirname(fileURLToPath(import.meta.url)), "..");

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("@/")) {
    const base = resolvePath(ROOT, specifier.slice(2));
    const candidates = [base, base + ".ts", base + ".tsx", base + ".js", resolvePath(base, "index.ts")];
    for (const cand of candidates) {
      if (existsSync(cand)) return nextResolve(pathToFileURL(cand).href, context);
    }
  }
  return nextResolve(specifier, context);
}
