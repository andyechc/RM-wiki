import { useState, useEffect } from "react";
import "intersection-observer";

export function useIntersectionObserver(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && 
          setIsIntersecting(true)
          observer.unobserver(entry.target);
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserver(ref.current);
    };
  }, []);

  return [isIntersecting];
}
