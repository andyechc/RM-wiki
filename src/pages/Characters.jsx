import React, { Suspense, useRef, useState } from "react";
import { Link } from "react-router-dom";

import ScrollTopOnRoute from "../components/ScrollTopOnRoute";
import { CharacterPlaceholder } from "../components/CharacterListItem";

import { useGetData } from "../hooks/useGetData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const SectionTitle = React.lazy(() => import("../components/SectionTitle"));
const ErrorMessage = React.lazy(() => import("../components/ErrorMessage"));
const CharacterListItem = React.lazy(() =>
  import("../components/CharacterListItem")
);

export function Characters() {
  const visorRef = useRef();
  const [visorIsIntersecting] = useIntersectionObserver(visorRef, false);
  const [characters, isLoading, err] = useGetData(visorIsIntersecting, "character");

  return (
    <section className="w-full h-full min-h-screen flex flex-col gap-14 px-10 py-20 dark:bg-gray-900 bg-white transition-colors">
      <ScrollTopOnRoute />
      <Suspense>
        <SectionTitle
          title="Characters"
          subTitle="Chose a character to see more details."
        />
      </Suspense>

      {characters && (
        <p className="text-md font-medium text-gray-700 dark:text-gray-100 animate-show">
          Total: {characters.info.count}
        </p>
      )}

      <ul className="h-full w-full min-h-screen flex justify-center flex-wrap  gap-10">
        {characters &&
          characters.results.map((character) => (
            <Suspense fallback={<CharacterPlaceholder />}>
              <Link to={`/character/${character.id}`}>
                <CharacterListItem character={character} />
              </Link>
            </Suspense>
          ))}
        {isLoading && <CharacterPlaceholder />}
      </ul>

      {err && <ErrorMessage err={err} />}

      <div ref={visorRef}></div>
    </section>
  );
}
