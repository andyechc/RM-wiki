import { useState, useEffect } from "react";
import "intersection-observer";

export function useIntersectionObserver(ref, once = true) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((elements) => {
      elements.forEach((el) => {
        if (el.isIntersecting) {
          setIsIntersecting(true);
          once && observer.unobserve(ref.current);
        } else {
          !once && setIsIntersecting(false);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [isIntersecting];
}
