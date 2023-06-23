import React, { Suspense, useRef, useEffect } from "react";
import { useGetData } from "../hooks/useGetData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { CharacterPlaceholder } from "../components/CharacterListItem";
import { Loading } from "../components/Loading";

const SectionTitle = React.lazy(() => import("../components/SectionTitle"));
const CharacterListItem = React.lazy(() =>
  import("../components/CharacterListItem")
);

export function Characters() {
  const visorRef = useRef();
  const [characters, isLoading, err] = useGetData("character");
  // const nextPageCharacter =  characters ? characters.info.nextPage : null;

  // const handleNextPage = () => return;
  const [visorIsIntersecting] = useIntersectionObserver(visorRef);

  // useEffect(() => {
  //   handleNextPage();
  // });

  return (
    <section className="w-full h-full min-h-screen flex flex-col gap-14 px-10 py-20 dark:bg-gray-900 bg-white transition-colors">
      <Suspense>
        <SectionTitle
          title="Characters"
          subTitle="Chose a character to see more details."
        />
      </Suspense>

      {err && (
        <p className="text-md font-bold text-red-600 dark:text-red-300">
          {err}
        </p>
      )}

      {characters && (
        <p className="text-md font-medium text-gray-700 dark:text-gray-100 animate-show">
          Total: {characters.info.count}
          {JSON.stringify(characters)}
        </p>
      )}

      <ul className="h-full w-full min-h-full flex justify-center items-center flex-wrap gap-10">
        {characters &&
          characters.results.map((character) => (
            <Suspense fallback={<CharacterPlaceholder />}>
              <CharacterListItem character={character} />
            </Suspense>
          ))}
        <div ref={visorRef}></div>
      </ul>

      {isLoading && <Loading />}
    </section>
  );
}
