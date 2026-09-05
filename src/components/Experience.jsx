import { useState } from "react";
import { experiences } from "../data";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tabs = [
  { id: "profesional", label: "Profesional" },
  { id: "organisasi", label: "Organisasi" },
];

export default function Experience() {
  const [tab, setTab] = useState("profesional");
  const items = experiences[tab];

  return (
    <section id="pengalaman" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Pengalaman"
        title="Dari lapangan kekarantinaan sampai pembinaan kader."
        description="Pilih kategori untuk melihat detail peran dan kontribusi."
      />

      <Reveal delay={120} className="mt-10">
        <div
          role="tablist"
          aria-label="Kategori pengalaman"
          className="inline-flex rounded-full border border-blush-100 bg-white p-1.5 shadow-sm shadow-blush-100"
        >
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id)}
              className={`rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                tab === item.id
                  ? "bg-blush-500 text-white shadow-md shadow-blush-200"
                  : "text-ink-500 hover:text-blush-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10">
        <ol className="relative space-y-6 border-l border-dashed border-blush-200 pl-6 sm:pl-10">
          {items.map((item, i) => (
            <li key={`${tab}-${item.org}`} className="relative">
              <span className="absolute -left-[1.9rem] top-8 grid size-4 place-items-center rounded-full border-2 border-blush-300 bg-white sm:-left-[3.15rem]">
                <span className="size-1.5 rounded-full bg-blush-500" />
              </span>

              <article
                key={`${tab}-${i}`}
                className="animate-[fadeUp_0.5s_ease-out_both] rounded-3xl border border-blush-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blush-200 hover:shadow-2xl hover:shadow-blush-100 sm:p-8"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-900 sm:text-xl">{item.org}</h3>
                    <p className="mt-1 text-sm font-medium text-blush-600">{item.role}</p>
                  </div>
                  <span className="shrink-0 self-start rounded-full bg-blush-50 px-4 py-2 text-[12px] font-medium text-blush-600">
                    {item.period}
                  </span>
                </div>

                {item.note && (
                  <p className="mt-4 rounded-2xl bg-blush-50/70 px-4 py-3 text-[12.5px] leading-relaxed text-ink-500">
                    {item.note}
                  </p>
                )}

                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[14px] leading-relaxed text-ink-500">
                      <Icon name="check" className="mt-1 size-4 shrink-0 text-blush-400" strokeWidth={2.2} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
