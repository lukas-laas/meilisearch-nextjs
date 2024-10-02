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
    <main className="mx-auto my-8 flex gap-8 flex-col w-fit prose dark:prose-invert">
      <h1>Meilisearch test</h1>
      <div>
        <h2>Add developer</h2>
        <form
          action={(formdata) => addDeveoper(formdata.get("name") as string)}
        >
          <input type="text" name="name" />
          <button type="submit">submit</button>
        </form>
      </div>
      <div className="flex flex-col gap-4">
        <h2>Search control panel</h2>
        <button onClick={() => clearSearchDbAction()}>clear search db</button>
        <button onClick={() => rebuildSearchDbAction()}>
          rebuild search db
        </button>
      </div>
      <div>
        <h2>Search</h2>
        <input
          type="text"
          className="text-black"
          onChange={(event) => {
            searchAction(event.target.value).then((res) => setResults(res));
          }}
        />
        <h2>Results</h2>
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
