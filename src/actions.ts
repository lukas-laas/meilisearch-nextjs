"use server";

import { clearSearchDb, rebuildSearchDb } from "./meilisearch";
import { addDeveloperMutation } from "./queries";

export async function addDeveoper(name: string) {
  await addDeveloperMutation(name, "developer", "available");
}

export async function clearSearchDbAction() {
  await clearSearchDb();
}

export async function rebuildSearchDbAction() {
  await rebuildSearchDb();
}
