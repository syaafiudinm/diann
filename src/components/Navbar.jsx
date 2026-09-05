import { useEffect, useState } from "react";
import { navItems, profile } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import Icon from "./Icon";

const ids = navItems.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-blush-100/80 bg-white/80 shadow-[0_10px_40px_-30px_rgba(192,42,102,0.6)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#beranda" className="group flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-blush-400 to-blush-600 text-sm font-bold text-white shadow-lg shadow-blush-200 transition-transform duration-300 group-hover:-rotate-6">
              {profile.initials}
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold text-ink-900">{profile.shortName}</span>
              <span className="block text-[11px] tracking-wide text-blush-600">Public Health · Epidemiologi</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 rounded-full border border-blush-100 bg-white/70 p-1.5 backdrop-blur md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative block rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    active === item.id
                      ? "bg-blush-500 text-white shadow-md shadow-blush-200"
                      : "text-ink-500 hover:text-blush-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${profile.email}`}
            className="hidden items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blush-600 md:inline-flex"
          >
            Hubungi Saya
            <Icon name="arrowRight" className="size-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-xl border border-blush-100 bg-white/80 text-ink-700 transition-colors hover:text-blush-600 md:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </nav>

        <div className="h-0.5 w-full bg-blush-100/60">
          <div
            className="h-full rounded-r-full bg-gradient-to-r from-blush-300 to-blush-600 transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-blush-100 bg-white/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === item.id ? "bg-blush-100 text-blush-700" : "text-ink-500 hover:bg-blush-50"
                }`}
              >
                {item.label}
                <Icon name="arrowRight" className="size-4 opacity-50" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
