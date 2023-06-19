import React, { useRef, Suspense } from "react";
import { Link } from "react-router-dom";

const SectionTitle = React.lazy(() => import("./SectionTitle"));
const CategoryListItem = React.lazy(() => import("./CategoryListItem"));

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function Category() {
  const titleRef = useRef(null);
  const itemRef = useRef(null);
  const [isIntersectingTitle] = useIntersectionObserver(titleRef);
  const [isIntersectingItems] = useIntersectionObserver(itemRef);

  return (
    <section className="w-full h-screen md:h-full flex flex-col gap-15 p-10 dark:bg-gray-800 bg-gray-200 transition-colors">
      <div ref={titleRef} className="w-full h-40 ">
        {isIntersectingTitle && (
          <Suspense>
            <SectionTitle title="Categories" subTitle="Select a categorie to view more details"/>
          </Suspense>
        )}
      </div>

      <ul
        ref={itemRef}
        className="w-full h-fit flex flex-wrap md:flex-nowrap gap-10 justify-center items-center"
      >
        {isIntersectingItems && (
          <Suspense>
            <Link to="/character">
              <CategoryListItem
                icon="https://wallpaperaccess.com/full/4127807.jpg"
                title="Characters"
              />
            </Link>
            <CategoryListItem
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeNZ-c2Ub2HtUn2lqY7p1tPXj1-KUYPJjIg&usqp=CAU"
              title="Locations"
            />
            <CategoryListItem
              icon="https://i.pinimg.com/736x/07/3e/42/073e42625795a2bdafd4031a5479395b.jpg"
              title="Films"
            />
          </Suspense>
        )}
      </ul>
    </section>
  );
}
