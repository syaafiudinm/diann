import { useState } from "react";
import { skillGroups } from "../data";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const filters = [{ id: "semua", label: "Semua" }, ...skillGroups.map((g) => ({ id: g.id, label: g.label }))];

export default function Skills() {
  const [filter, setFilter] = useState("semua");
  const groups = filter === "semua" ? skillGroups : skillGroups.filter((g) => g.id === filter);

  return (
    <section id="keahlian" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-blush-50 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Keahlian"
          title="Perangkat yang saya gunakan untuk membaca data kesehatan."
          description="Kombinasi kemampuan teknis analisis data dan keterampilan non-teknis di lingkungan kerja lapangan."
        />

        <Reveal delay={100} className="mt-10 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
              className={`rounded-full border px-5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                filter === item.id
                  ? "border-blush-500 bg-blush-500 text-white shadow-md shadow-blush-200"
                  : "border-blush-100 bg-white text-ink-500 hover:border-blush-300 hover:text-blush-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {groups.map((group, gi) => (
            <div
              key={group.id}
              className="animate-[fadeUp_0.45s_ease-out_both] rounded-3xl border border-blush-100 bg-blush-50/40 p-7"
              style={{ animationDelay: `${gi * 80}ms` }}
            >
              <div className="flex items-center gap-2.5">
                <Icon name="spark" className="size-4 text-blush-400" strokeWidth={2} />
                <h3 className="text-[15px] font-semibold text-ink-900">{group.label}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((skill, si) => (
                  <span
                    key={skill}
                    className="animate-[fadeUp_0.4s_ease-out_both] cursor-default rounded-2xl border border-blush-100 bg-white px-4 py-2.5 text-[13px] font-medium text-ink-700 transition-all duration-300 hover:-translate-y-1 hover:border-blush-300 hover:text-blush-600 hover:shadow-lg hover:shadow-blush-100"
                    style={{ animationDelay: `${gi * 80 + si * 45}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
