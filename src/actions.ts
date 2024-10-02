"use server";

import { addDeveloperMutation } from "./queries";

export async function addDeveoper(name: string) {
  await addDeveloperMutation(name, "developer", "available");
}
