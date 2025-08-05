import { useEffect, useState } from "react";

export const useStickyHeader = (offset = 300) => {
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // 👈 nuevo

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY === 0) {
        setIsSticky(false);
        setHasScrolledPast(false);
        setHasScrolled(false); // 👈 volvemos a estado inicial
      } else {
        setHasScrolled(true); // 👈 ya hizo scroll

        if (currentY > offset && !hasScrolledPast) {
          setIsSticky(true);
          setHasScrolledPast(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset, hasScrolledPast]);

  return { isSticky, hasScrolled };
};
