#!/usr/bin/env node
/**
 * Reads .env.local and sets RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL
 * on Vercel (Production). Requires: linked project (`vercel link`), login.
 * Usage: npm run vercel:sync-env
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const envPath = path.join(root, ".env.local");

function parseEnvFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  /** @type {Record<string, string>} */
  const vars = {};
  for (const line of raw.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const key = t.slice(0, eq).trim();
    let val = t.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    vars[key] = val;
  }
  return vars;
}

const keys = ["RESEND_API_KEY", "CONTACT_FROM_EMAIL", "CONTACT_TO_EMAIL"];
/** Preview often needs branch scope in the dashboard or `vercel env add NAME preview <branch>`. */
const targets = ["production"];

if (!fs.existsSync(envPath)) {
  console.error("Missing .env.local");
  process.exit(1);
}

const vars = parseEnvFile(envPath);
for (const k of keys) {
  if (!vars[k]) {
    console.error(`Missing ${k} in .env.local`);
    process.exit(1);
  }
}

for (const target of targets) {
  console.error(`\n→ ${target}`);
  for (const k of keys) {
    const vercelBin = path.join(root, "node_modules", ".bin", "vercel");
    execFileSync(
      vercelBin,
      [
        "env",
        "add",
        k,
        target,
        "--value",
        vars[k],
        "--yes",
        "--sensitive",
        "--force",
      ],
      {
        cwd: root,
        stdio: ["ignore", "inherit", "inherit"],
        env: process.env,
      }
    );
  }
}

console.error("\nDone. Trigger a production deploy (e.g. redeploy latest in Vercel).");
