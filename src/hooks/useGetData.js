import React, { useState, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";
import { ENDPOINT } from "../services/ENDPOINT";

export function useGetData(visorIsIntersecting, item) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  const [page, setPage] = useState(1);

  const handleNextPage = useCallback(
    debounce(() => {
      if (data) {
        const limitPage = data.info.page;
        if (page === limitPage) setPage(null);
        setPage(page + 1);
      }
    }, 200)
  );

  useEffect(() => {
    async function getData(ENDPOINT, item, page) {
      if (page === null) return;

      try {
        setIsLoading(true);
        const res = await fetch(ENDPOINT + item + "?page=" + page);
        if (res.ok) {
          const json = await res.json();
          if (page === 1) {
            setData(json);
          } else {
            const newResults = structuredClone(json.results);
            setData((prevData) => ({
              ...prevData,
              results: [...prevData.results, ...newResults],
            }));
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
    getData(ENDPOINT, item, page);
  }, [page]);

  useEffect(() => {
    if (visorIsIntersecting) {
      handleNextPage();
    }
  }, [visorIsIntersecting]);

  return [data, isLoading, err];
}
