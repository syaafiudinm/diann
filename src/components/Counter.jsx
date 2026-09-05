import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";

/** Angka yang menghitung naik saat kartu statistik terlihat. */
export default function Counter({ value, decimals = 0, suffix = "", duration = 1400 }) {
  const [ref, shown] = useReveal({ threshold: 0.4 });
  const [reduced] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
  );
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!shown || reduced) return;

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shown, reduced, value, duration]);

  return (
    <span ref={ref}>
      {(reduced && shown ? value : display).toFixed(decimals)}
      {suffix}
    </span>
  );
}
