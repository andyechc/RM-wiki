import page404Png from "../assets/404.png";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollTopOnRoute from "../components/ScrollTopOnRoute";
import { ENDPOINT } from "../services/ENDPOINT";

export function CharacterDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    async function getDetails(ENDPOINT, item, id) {
      try {
        setIsLoading(true);
        const res = await fetch(ENDPOINT + item + id);
        if (res.ok) {
          const json = await res.json();
          setData(json);
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
          Character name: {data.results.name}
        </h2>
        <p className="text-xl font-light dark:text-gray-200">
          This pages does'nt exist. Check in other Time, I working on this
          moment.
        </p>
        <img
          className="w-full max-w-md drop-shadow-[0_0_20px_rgb(0,250,200,.25)]"
          src={page404Png}
        />
        <Link to="/character">
          <button className="w-44 cursor-pointer bg-blue-400 font-bold text-md rounded px-10 active:bg-blue-300 transition-colors">
            return
          </button>
        </Link>
      </div>
    </section>
  );
}
