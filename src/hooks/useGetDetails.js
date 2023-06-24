import { useState, useEffect } from "react";
import { ENDPOINT } from "../services/ENDPOINT";

export function useGetDetails({item, id}) {
  const [element, setElement] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    async function getDetails({ ENDPOINT, item, id }) {
      try {
        setIsLoading(true);
        const res = await fetch(ENDPOINT + item + id);
        if (res.ok) {
          const data = await res.json();
          setElement(data);
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
    getDetails({ ENDPOINT, item, id });
  }, []);

  return [element, isLoading, err];
}
