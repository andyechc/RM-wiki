import { useState, useEffect } from "react";
import "intersection-observer";

export function useIntersectionObserver(ref, one=true) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((elements) => {
      elements.forEach((el) => {
        if (el.isIntersecting) {
          setIsIntersecting(true);
          one && observer.unobserve(ref.current);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current && one) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [isIntersecting];
}
