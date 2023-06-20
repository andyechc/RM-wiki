import React, { Suspense } from "react";
import { useGetData } from "../hooks/useGetData";
import { CharacterPlaceholder } from "../components/Character";
import { Loading } from "../components/Loading";

const SectionTitle = React.lazy(() => import("../components/SectionTitle"));
const Character = React.lazy(() => import("../components/Character"));

export function Characters() {
  const [characters, isLoading, err] = useGetData("character");

  return (
    <section className="w-full h-full min-h-screen flex flex-col gap-14 px-10 py-20 dark:bg-gray-900 bg-white transition-colors">
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

      <ul className="h-full w-full min-h-full flex justify-center items-center flex-wrap gap-10">
        {characters &&
          characters.results.map((character) => (
            <Suspense fallback={<CharacterPlaceholder />}>
              <Character character={character} />
            </Suspense>
          ))}
      </ul>

      {isLoading && <Loading />}
    </section>
  );
}
