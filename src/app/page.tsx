"use client";
import { MeiliSearch } from "meilisearch";
import movies from "./movies.json";

export default function Home() {
  const client = new MeiliSearch({
    host: "http://localhost:7700",
  });
  // client
  //   .index("movies")
  //   .addDocuments(movies as any)
  //   .then((res) => console.log(res));

  // console.log(client.getTask(0));

  client
    .index("movies")
    .search("botman")
    .then((res) => console.log(res));

  return <div></div>;
}
