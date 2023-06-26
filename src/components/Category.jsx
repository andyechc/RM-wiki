import React, { useRef, Suspense } from "react";
import { Link } from "react-router-dom";

const SectionTitle = React.lazy(() => import("./SectionTitle"));
const CategoryListItem = React.lazy(() => import("./CategoryListItem"));

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function Category() {
  const itemRef = useRef(null);
  const [isIntersectingItems] = useIntersectionObserver(itemRef);

  return (
    <section className="w-full min-h-full h-full flex flex-col gap-20 px-10 py-20 dark:bg-gray-800 bg-gray-100 transition-colors">
      <Suspense>
        <SectionTitle
          title="Categories"
          subTitle="Chose a Category to see all details"
        />
      </Suspense>

      <ul
        ref={itemRef}
        className="w-full h-fit flex flex-wrap md:flex-nowrap gap-10 justify-center items-center"
      >
        {isIntersectingItems && (
          <Suspense>
            <Link to="/characters">
              <CategoryListItem
                icon="https://wallpaperaccess.com/full/4127807.jpg"
                title="Characters"
              />
            </Link>

            <Link to="/locations">
              <CategoryListItem
                icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeNZ-c2Ub2HtUn2lqY7p1tPXj1-KUYPJjIg&usqp=CAU"
                title="Locations"
              />
            </Link>
          </Suspense>
        )}
      </ul>
    </section>
  );
}
