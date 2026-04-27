import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import { env } from "../config/env";
import * as schema from "./schema";

const pool = mysql.createPool({
  uri: env.database.url,
  connectionLimit: 10
});

export const db = drizzle({ client: pool, schema, mode: "default" });
export { pool };
