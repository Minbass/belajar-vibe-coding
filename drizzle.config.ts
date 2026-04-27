import "dotenv/config";
import { defineConfig } from "drizzle-kit";

function envValue(name: string, fallback: string): string {
  return process.env[name] ?? fallback;
}

const connectionString =
  process.env.DATABASE_URL ??
  `mysql://${encodeURIComponent(envValue("DB_USER", "root"))}:${encodeURIComponent(
    envValue("DB_PASSWORD", "password")
  )}@${envValue("DB_HOST", "localhost")}:${envValue("DB_PORT", "3306")}/${envValue(
    "DB_NAME",
    "app_db"
  )}`;

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: connectionString
  }
});
