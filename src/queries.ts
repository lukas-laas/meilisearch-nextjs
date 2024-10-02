import "server-only";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const client = postgres(process.env.POSTGRES_URL as string);

const db = drizzle(client, { schema });

export async function addDeveloperMutation(
  name: string,
  role: string,
  status: string
) {
  console.log(name);
  await db.insert(schema.developers).values({
    name,
    role,
    status,
  });
}

export async function getDevelopersQuery() {
  const developers = await db.select().from(schema.developers);
  return developers;
}
