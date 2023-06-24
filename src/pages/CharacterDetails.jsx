import page404Png from "../assets/404.png";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
    <section className="bg-white dark:bg-gray-900 h-full transition-colors">
      <ScrollTopOnRoute />
      <div>
        <img src={element.image} />
      </div>
    </section>
  );
}
