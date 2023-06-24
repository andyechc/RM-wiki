import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

import { useGetDetails } from "../hooks/useGetDetails";

import ScrollTopOnRoute from "../components/ScrollTopOnRoute";
import ErrorMessage from "../components/ErrorMessage";
import { CharacterDescriptionPlaceholder } from "../components/CharacterDescription";

const CharacterDescription = React.lazy(() =>
  import("../components/CharacterDescription")
);

export function CharacterDetails() {
  const { id } = useParams();
  const [character, isLoading, err] = useGetDetails( "character/", id );

  return (
    <section className="bg-white min-h-max dark:bg-gray-900 h-full flex justify-center items-center transition-colors py-20 px-10">
      <ScrollTopOnRoute />

      {err && (
        <div className="h-96">
          <ErrorMessage err={err} />
        </div>
      )}

      {isLoading && <CharacterDescriptionPlaceholder />}

      {character && (
        <Suspense fallback={<CharacterDescriptionPlaceholder />}>
          <CharacterDescription character={character} />
        </Suspense>
      )}
    </section>
  );
}
