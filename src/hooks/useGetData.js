import React, { useState, useEffect } from "react";

export function useGetData(section) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await fetch(`https://rickandmortyapi.com/api/${section}`);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }
    getData();
  }, []);

  return [data, isLoading, err];
}
