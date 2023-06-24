import React, { useState, useEffect } from "react";
import { ENDPOINT } from "../services/ENDPOINT";

export function useCharacters(page) {
  const [characters, setCharacters] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    async function getData(ENDPOINT, page) {
      if (page === null) return;
      // const url = page ? page : `${ENDPOINT}character`;

      try {
        setIsLoading(true);
        const res = await fetch(ENDPOINT + "character?page=" + page);
        if (res.ok) {
          const data = await res.json();
          if (page === 1) {
            setCharacters(data);
          } else {
            const newResults = structuredClone(data.results)
            setCharacters(prevCharacters => ({...prevCharacters, results: [...prevCharacters.results, ...newResults]}));
          }
        } else {
          throw new Error("Fetch Error: " + res.status);
        }
      } catch (e) {
        setErr(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    setErr(false);
    getData(ENDPOINT, page);
  }, [page]);

  return { characters, isLoading, err };
}
