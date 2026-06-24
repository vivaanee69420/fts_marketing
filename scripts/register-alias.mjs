// Registers the "@/" alias resolution hook for CLI scripts run under plain
// Node. Loaded via `node --import ./scripts/register-alias.mjs`.
import { register } from "node:module";

register("./alias-hooks.mjs", import.meta.url);
