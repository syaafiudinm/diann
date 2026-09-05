import { useEffect, useState } from "react";

/** Mengembalikan id section yang sedang berada di area baca layar. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.32;
      let current = sections[0].id;
      for (const section of sections) {
        if (section.offsetTop <= line) current = section.id;
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 8) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}
