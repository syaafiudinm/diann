import { useEffect, useState } from "react";
import { profile } from "../data";
import Icon from "./Icon";
import Reveal from "./Reveal";

const channels = [
  {
    icon: "mail",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    copy: profile.email,
  },
  {
    icon: "phone",
    label: "Telepon",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    copy: profile.phone,
  },
  {
    icon: "pin",
    label: "Domisili",
    value: profile.location,
    href: null,
    copy: profile.location,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(null), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section id="kontak" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-blush-100 bg-gradient-to-br from-blush-100 via-blush-50 to-white p-8 sm:p-14">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-white/70 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-10 size-72 rounded-full bg-blush-200/50 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-blush-600 uppercase">
              <span className="h-px w-8 bg-blush-400" />
              Kontak
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-ink-900 sm:text-4xl">
              Mari bekerja sama membangun data kesehatan yang lebih baik.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-500">
              Terbuka untuk peluang di bidang surveilans, analisis data epidemiologi, maupun pengelolaan sistem
              informasi kesehatan.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blush-600"
              >
                <Icon name="mail" className="size-4" />
                Kirim Email
              </a>
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blush-300 bg-white px-6 py-3 text-sm font-semibold text-blush-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blush-500 hover:text-white"
              >
                <Icon name="whatsapp" className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            {channels.map((channel, i) => (
              <div
                key={channel.label}
                className="animate-[fadeUp_0.5s_ease-out_both] flex items-center gap-4 rounded-2xl border border-white bg-white/80 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blush-100"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blush-50 text-blush-500">
                  <Icon name={channel.icon} className="size-[18px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold tracking-[0.15em] text-ink-500 uppercase">{channel.label}</p>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="block truncate text-[14px] font-medium text-ink-900 transition-colors hover:text-blush-600"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="truncate text-[14px] font-medium text-ink-900">{channel.value}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => copy(channel.copy, channel.label)}
                  aria-label={`Salin ${channel.label}`}
                  className="grid size-9 shrink-0 place-items-center rounded-xl border border-blush-100 text-ink-500 transition-colors hover:border-blush-300 hover:text-blush-600"
                >
                  <Icon name={copied === channel.label ? "check" : "copy"} className="size-4" />
                </button>
              </div>
            ))}
            <p
              aria-live="polite"
              className={`text-center text-[12px] font-medium text-blush-600 transition-opacity duration-300 ${
                copied ? "opacity-100" : "opacity-0"
              }`}
            >
              {copied} berhasil disalin
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
