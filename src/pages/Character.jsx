import React, { Suspense, useState, useEffect } from "react";
const SectionTitle = React.lazy(() => import("../components/SectionTitle"));

export function Character() {
  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCharacters() {
      setIsLoading(true);
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data);
      setIsLoading(false);
    }

    getCharacters();
  }, []);

  return (
    <section className="w-full h-full min-h-screen flex flex-col gap-14 p-10 dark:bg-gray-900 bg-white transition-colors">
      <Suspense>
        <SectionTitle
          title="Characters"
          subTitle="Chose a character to see more details."
        />
      </Suspense>

      {isLoading && <h2>Loading...</h2>}

      {characters && (
        <p className="text-md font-medium text-gray-700 dark:text-gray-100 animate-show">
          Total: {characters.info.count}
        </p>
      )}

      <ul className="h-full w-full min-h-full flex md:flex flex-wrap gap-10">
        {characters &&
          characters.results.map((character) => (
            <li
              key={character.id}
              className="bg-white dark:bg-gray-800 h-32 w-full xl:w-full md:max-w-xs flex rounded shadow-md overflow-hidden hover:shadow-[7px_7px_25px_rgba(0,250,200,0.25)] cursor-pointer hover:translate-y-1 animate-show transition-all"
            >
              <div
                className={`bg-[url(${character.image})] bg-center bg-cover w-32 text-md font-light text-cyan-800 text-center`}
              ></div>

              <div className="p-4 flex-grow">
                <h4 className="text-2xl dark:text-gray-100 text-gray-900 font-extrabold">
                  {character.name}
                </h4>
                <p className="text-md text-gray-700 dark:text-gray-300 font-normal">
                  {character.species}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
