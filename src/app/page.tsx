"use client";
import { MeiliSearch } from "meilisearch";
import { useState } from "react";
import {
  addDeveoper,
  clearSearchDbAction,
  rebuildSearchDbAction,
  searchAction,
} from "@/actions";

export default function Home() {
  const [results, setResults] = useState<any>(null);

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
          onChange={(event) => {
            searchAction(event.target.value).then((res) => setResults(res));
          }}
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
