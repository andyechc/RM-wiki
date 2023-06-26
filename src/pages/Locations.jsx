import React, { Suspense, useRef, useState } from "react";
import { Link } from "react-router-dom";

import ScrollTopOnRoute from "../components/ScrollTopOnRoute";
import ErrorMessage from "../components/ErrorMessage";
import { LocationPlaceholder } from "../components/LocationListItem";

import { useGetData } from "../hooks/useGetData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const SectionTitle = React.lazy(() => import("../components/SectionTitle"));
const LocationListItem = React.lazy(() =>
  import("../components/LocationListItem")
);

export function Locations() {
  const visorRef = useRef();
  const [visorIsIntersecting] = useIntersectionObserver(visorRef, false);
  const [locations, isLoading, err] = useGetData(
    visorIsIntersecting,
    "location"
  );

  return (
    <section className="w-full h-full min-h-screen flex flex-col gap-14 px-10 py-20 dark:bg-gray-900 bg-white transition-colors">
      <ScrollTopOnRoute />
      <Suspense>
        <SectionTitle
          title="Locations"
          subTitle="All Locations of the animated serie"
        />
      </Suspense>

      {locations && (
        <p className="text-md font-medium text-gray-700 dark:text-gray-100 animate-show">
          Total: {locations.info.count}
        </p>
      )}

      <ul className="h-full py-10 w-full flex md:justify-center md:flex-wrap overflow-x-scroll overflow-y-hidden snap-x scroll-smooth gap-10">
        {locations &&
          locations.results.map((location) => (
            <Suspense fallback={LocationPlaceholder}>
              <LocationListItem location={location} />
            </Suspense>
          ))}
        {isLoading && <LocationPlaceholder />}
        <div ref={visorRef}>.</div>
      </ul>

      {err && <ErrorMessage err={err} />}
    </section>
  );
}
