import "dotenv/config";

function readEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function toNumber(value: string, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export const env = {
  app: {
    host: process.env.APP_HOST ?? "localhost",
    port: toNumber(process.env.APP_PORT ?? "3000", 3000)
  },
  database: {
    host: readEnv("DB_HOST", "localhost"),
    port: toNumber(process.env.DB_PORT ?? "3306", 3306),
    user: readEnv("DB_USER", "root"),
    password: readEnv("DB_PASSWORD", "password"),
    name: readEnv("DB_NAME", "app_db"),
    url:
      process.env.DATABASE_URL ??
      `mysql://${encodeURIComponent(readEnv("DB_USER", "root"))}:${encodeURIComponent(
        readEnv("DB_PASSWORD", "password")
      )}@${readEnv("DB_HOST", "localhost")}:${toNumber(
        process.env.DB_PORT ?? "3306",
        3306
      )}/${readEnv("DB_NAME", "app_db")}`
  }
};
