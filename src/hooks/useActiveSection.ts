import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!sectionIds.length) return;

    const handleScroll = () => {
      const sectionDistances = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, distance: Infinity };

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight * 0.05); // 20% desde arriba

        return { id, distance };
      });

      const closest = sectionDistances.reduce((prev, curr) =>
        curr.distance < prev.distance ? curr : prev
      );

      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
};
