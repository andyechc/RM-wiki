import React, { useState, useEffect } from "react";

export function useGetData(itemToSearch) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://rickandmortyapi.com/api/${itemToSearch}`
        );
        if (res.status === 200) {
          const data = await res.json();
          setData(data);
        } else {
          setErr("Internet Error");
        }
      } catch (e) {
        setErr(e);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return [data, isLoading, err];
}
