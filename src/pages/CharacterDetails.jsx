import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScrollTopOnRoute from "../components/ScrollTopOnRoute";
import { ENDPOINT } from "../services/ENDPOINT";

export function CharacterDetails() {
  const { id } = useParams();
  const [element, setElement] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    async function getDetails(ENDPOINT, item, id) {
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
    getDetails(ENDPOINT, "character/", id);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 h-full transition-colors py-20 px-10">
      <ScrollTopOnRoute />
      <div className="w-full h-full flex flex-col justify-center items-center gap-3">
        <h2 className="text-4xl font-extrabold dark:text-white">
          Character name: {JSON.stringify(element)}
        </h2>
        <p className="text-xl font-light dark:text-gray-200">
          This pages does'nt exist. Check in other Time, I working on this
          moment.
        </p>
      </div>
    </section>
  );
}
