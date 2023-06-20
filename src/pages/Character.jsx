import React, { Suspense, useState, useEffect } from "react";
const SectionTitle = React.lazy(() => import("../components/SectionTitle"));

export function Character() {
  const [characters, setCharacters] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        console.log(data) 
        setCharacters(data);
      })
      .catch((error) => {
        console.log(error)
        setErr(error);
      });
  }, []);

  return (
    <section className="w-full h-full flex flex-col gap-15 p-10 dark:bg-gray-900 bg-white transition-colors">
      <Suspense fallback={<h3 className="text-4xl text-gray-700">cargando</h3>}>
        <SectionTitle
          title="Characters"
          subTitle="Chose a character to see more details."
        />
      </Suspense>
      {err && <h1>{JSON.stringify(err)}</h1>}
      <ul>{characters && <li>{JSON.stringify(character)}</li>}</ul>
    </section>
  );
}
