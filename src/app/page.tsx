"use client";
import { MeiliSearch } from "meilisearch";
import Image from "next/image";
import movies from "./movies.json";
import { useState } from "react";
import {
  addDeveoper,
  clearSearchDbAction,
  rebuildSearchDbAction,
} from "@/actions";

export default function Home() {
  const [results, setResults] = useState<any>(null);

  const client = new MeiliSearch({
    host: "http://localhost:7700",
  });
  // client
  //   .index("movies")
  //   .addDocuments(movies as any)
  //   .then((res) => console.log(res));

  // console.log(client.getTask(0));

  // client
  //   .index("movies")
  //   .search("botman")
  //   .then((res) => console.log(res));

  // console.log("results:", results.hits[0].title);

  return (
    <main>
      <h1>Meilisearch test</h1>
      <h2>add developer</h2>
      <form action={(formdata) => addDeveoper(formdata.get("name") as string)}>
        <input type="text" name="name" />
        <button type="submit">submit</button>
      </form>
      <form action={clearSearchDbAction}>
        <button type="submit">clear search db</button>
      </form>
      <form action={rebuildSearchDbAction}>
        <button type="submit">rebuild search db</button>
      </form>
      <div>
        <h2>search</h2>
        <input
          type="text"
          className="text-black"
          onChange={(q) =>
            client
              .index("developers")
              .search(q.target.value)
              .then((res) => setResults(res))
          }
        />
        <ul className="flex flex-col p-4 gap-4">
          {results &&
            results.hits.map((result) => {
              return (
                <div>
                  <li key={result.id}>{result.name}</li>
                </div>
              );
            })}
        </ul>
      </div>
    </main>
  );
}
