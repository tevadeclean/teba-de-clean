import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "../../drizzle/schema";
import { ENV } from "../_core/env";

const poolConnection = mysql.createPool({
  connectionString: ENV.databaseUrl,
});

export const db = drizzle(poolConnection, { mode: "default", schema });

export * from "./users";
export * from "./posts";
export * from "./testimonials";
