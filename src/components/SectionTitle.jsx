import React, { useRef, Suspense } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function SectionTitle({ title, subTitle }) {
  const titleRef = useRef(null);

  const [isIntersectingTitle] = useIntersectionObserver(titleRef);

  return (
    <div ref={titleRef} className="w-full h-full ">
      {isIntersectingTitle && (
        <Suspense>
          <h2 className="md:text-5xl text-4xl font-extrabold text-cyan-500 animate-show">
            {title}
          </h2>
          <p className="md:text-xl text-md font-light text-gray-600 dark:text-gray-100 animate-show">
            {subTitle}
          </p>
        </Suspense>
      )}
    </div>
  );
}
