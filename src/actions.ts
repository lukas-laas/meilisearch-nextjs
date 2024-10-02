"use server";

import {
  clearSearchDb,
  rebuildSearchDb,
  searchDevelopers,
} from "./meilisearch";
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

export async function searchAction(query: string) {
  const result = await searchDevelopers(query);
  return result;
}
