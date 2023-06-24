import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ScrollTopOnRoute from "../components/ScrollTopOnRoute";
import ErrorMessage from "../components/ErrorMessage";

import { ENDPOINT } from "../services/ENDPOINT";

import DeathIcon from "../icons/DeathIcon";
import AliveIcon from "../icons/AliveIcon";
import MaleIcon from "../icons/MaleIcon";
import FemaleIcon from "../icons/FemaleIcon";

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
    <section className="bg-white min-h-max dark:bg-gray-900 h-full flex justify-center items-center transition-colors py-20 px-10">
      <ScrollTopOnRoute />

      {err && (
        <div className="h-96">
          <ErrorMessage err={err} />
        </div>
      )}

      {isLoading && <CharacterDetailsPlaceholder />}

      {element && (
        <article className=" w-full flex flex-col gap-20">
          <div className="w-full h-40 md:h-44 xl:h-52 flex justify-center items-center animate-show">
            <img
              className="h-full rounded-full aspect-square shadow-xl hover:scale-105 transition-all"
              src={element.image}
            />
          </div>

          <div className="w-full flex-grow sm:flex sm:flex-col sm:item-center animate-show">
            <h2 className="text-3xl md:text-5xl text-gray-800 dark:text-gray-200 font-extrabold">
              {element.name}
            </h2>
            <span className="flex gap-1 items-center text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-bold">
              Status: {element.status}
              {element.status === "Alive" && <AliveIcon />}
              {element.status === "Dead" && <DeathIconIcon />}
              {element.status === "unknown" && (
                <p className="text-2xl font-extrabold text-green-500">?</p>
              )}
            </span>
          </div>

          <div className="w-full sm:flex sm:item-center flex-grow animate-show">
            <h4 className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-bold">
              Specie: {element.species}
            </h4>

            <h4 className="flex gap-1 items-center text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-bold">
              Gender: {element.gender}
              {element.gender === "Male" && <MaleIcon />}
              {element.gender === "Female" && <FemaleIcon />}
              {element.gender === "unknown" && (
                <p className="text-2xl font-extrabold text-green-500">?</p>
              )}
            </h4>

            <h4 className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-bold">
              Origin: {element.origin.name}
            </h4>

            <h4 className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-bold">
              Location: {element.location.name}
            </h4>
          </div>
        </article>
      )}
    </section>
  );
}

function CharacterDetailsPlaceholder() {
  return (
    <div className="w-full flex flex-col items-center gap-20 cursor-wait">
      <div className="w-40 md:w-44 xl:w-52 h-40 md:h-44 xl:h-52 m-auto rounded-full bg-gray-300 animate-pulse"></div>

      <div className="w-full flex-grow flex flex-col gap-6">
        <div className="w-4/5 h-8 md:h-10 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-1/3 h-5 md:h-7 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      <div className="w-full flex-grow flex flex-col gap-6">
        <div className="w-1/2 h-5 md:h-6 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-1/2 h-5 md:h-6 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-1/2 h-5 md:h-6 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="w-1/2 h-5 md:h-6 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}
