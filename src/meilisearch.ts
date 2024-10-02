import "server-only";

import { MeiliSearch } from "meilisearch";
import { getDevelopersQuery } from "./queries";
const client = new MeiliSearch({
  host: "http://localhost:7700",
});

export async function clearSearchDb() {
  client.deleteIndexIfExists("developers");
}

async function buildSearchDb() {
  const developers = await getDevelopersQuery();
  console.log(developers);

  client
    .index("developers")
    .addDocuments(developers)
    .then((res) => console.log(res));
}

export async function rebuildSearchDb() {
  await clearSearchDb();
  await buildSearchDb();
  return console.log("rebuilt search database");
}
