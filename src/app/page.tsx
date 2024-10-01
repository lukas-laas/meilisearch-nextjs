"use client";
import { MeiliSearch } from "meilisearch";
import movies from "./movies.json";
import { useState } from "react";

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
    <div>
      <input
        type="text"
        className="text-black"
        onChange={(q) =>
          client
            .index("movies")
            .search(q.target.value)
            .then((res) => setResults(res))
        }
      />
      <ul>
        {results &&
          results.hits.map((result) => {
            return <li key={result.id}>{result.title}</li>;
          })}
      </ul>
    </div>
  );
}
