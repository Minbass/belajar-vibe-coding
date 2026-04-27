import { Elysia } from "elysia";
import { sql } from "drizzle-orm";

import { env } from "./config/env";
import { db } from "./db/client";

const app = new Elysia()
  .get("/", () => ({
    message: "Hello from Bun + ElysiaJS + Drizzle + MySQL"
  }))
  .get("/health", () => ({
    status: "ok",
    service: "belajar-vibe-coding",
    database: "configured"
  }))
  .get("/db/ping", async () => {
    const [result] = await db.execute(sql`select 1 as ok`);

    return {
      status: "ok",
      result
    };
  })
  .listen(env.app.port);

console.log(
  `Server running at http://${env.app.host}:${app.server?.port ?? env.app.port}`
);
