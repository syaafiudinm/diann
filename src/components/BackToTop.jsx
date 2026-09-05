import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full bg-blush-500 text-white shadow-xl shadow-blush-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blush-600 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="arrowUp" className="size-5" strokeWidth={2} />
    </button>
  );
}
