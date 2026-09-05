import { useEffect, useRef, useState } from "react";
import { marqueeWords, profile, stats } from "../data";
import Counter from "./Counter";
import Icon from "./Icon";
import Photo from "./Photo";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const glowRef = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onMove = (event) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.setProperty("--x", `${event.clientX}px`);
      el.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const step = `transition-all duration-700 ease-out ${
    mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`;

  return (
    <section id="beranda" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 hidden opacity-70 lg:block"
        style={{
          background:
            "radial-gradient(320px circle at var(--x, 50%) var(--y, 30%), rgba(255,174,203,0.28), transparent 65%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -top-24 -left-24 size-[26rem] rounded-full bg-blush-200/50 blur-3xl animate-float" />
        <div
          className="absolute -right-32 top-16 size-[30rem] rounded-full bg-blush-100 blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-blush-50" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span
            className={`inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white/80 px-4 py-1.5 text-[12px] font-medium text-blush-600 backdrop-blur ${step}`}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-blush-400 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-blush-500" />
            </span>
            Terbuka untuk peluang di bidang kesehatan masyarakat
          </span>

          <h1
            className={`mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-ink-900 sm:text-6xl ${step}`}
            style={{ transitionDelay: "80ms" }}
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="bg-gradient-to-r from-blush-500 via-blush-400 to-blush-600 bg-clip-text text-transparent">
              {profile.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <p
            className={`mt-5 max-w-xl text-[15px] leading-relaxed text-ink-500 sm:text-base ${step}`}
            style={{ transitionDelay: "160ms" }}
          >
            {profile.tagline} Fokus pada surveilans, analisis data epidemiologi, dan penguatan sistem informasi
            kesehatan.
          </p>

          <div
            className={`mt-8 flex flex-wrap items-center gap-3 ${step}`}
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="#kontak"
              className="group inline-flex items-center gap-2 rounded-full bg-blush-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blush-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blush-600 hover:shadow-xl hover:shadow-blush-200"
            >
              Mari Berkolaborasi
              <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#pengalaman"
              className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white/80 px-6 py-3 text-sm font-semibold text-ink-700 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blush-300 hover:text-blush-600"
            >
              Lihat Pengalaman
            </a>
          </div>

          <dl
            className={`mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 ${step}`}
            style={{ transitionDelay: "320ms" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-blush-100 bg-white/70 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blush-200 hover:shadow-lg hover:shadow-blush-100"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold whitespace-nowrap text-blush-600">
                  <Counter value={stat.value} decimals={stat.decimals} />
                  <span className="text-[13px] font-medium text-blush-400">{stat.suffix}</span>
                </dd>
                <p className="mt-1 text-[11px] leading-snug text-ink-500">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div
          className={`relative mx-auto w-full max-w-sm transition-all duration-1000 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div aria-hidden className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-blush-200 via-blush-100 to-transparent blur-2xl" />
          <div className="group relative overflow-hidden rounded-[2.25rem] border border-white bg-white p-2 shadow-2xl shadow-blush-200/60">
            <Photo className="h-[26rem] w-full rounded-[1.85rem] transition-transform duration-700 group-hover:scale-[1.04] sm:h-[30rem]" />
            <div className="pointer-events-none absolute inset-2 rounded-[1.85rem] bg-gradient-to-t from-blush-900/45 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-5 bottom-5 rounded-2xl bg-white/85 px-4 py-3 backdrop-blur-md">
              <p className="text-[13px] font-semibold text-ink-900">{profile.role}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-blush-600">
                <Icon name="pin" className="size-3.5" />
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-blush-100 bg-white/60 py-4 backdrop-blur">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex items-center gap-10 text-[13px] font-medium tracking-wide text-blush-500/80 uppercase"
            >
              {word}
              <Icon name="spark" className="size-3.5 text-blush-300" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
