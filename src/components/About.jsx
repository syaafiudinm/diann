import { focusAreas, profile } from "../data";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Tentang Saya"
        title="Teliti pada data, peduli pada dampaknya bagi masyarakat."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="rounded-3xl border border-blush-100 bg-white p-8 shadow-sm shadow-blush-100/60">
          <p className="text-[15px] leading-[1.85] text-ink-500">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Epidemiologi", "Surveilans", "Analisis Data", "Sistem Informasi Kesehatan"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blush-50 px-3.5 py-1.5 text-[12px] font-medium text-blush-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4">
          {focusAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 110}
              className="group flex gap-4 rounded-3xl border border-blush-100 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blush-200 hover:bg-white hover:shadow-xl hover:shadow-blush-100"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blush-50 text-blush-500 transition-colors duration-300 group-hover:bg-blush-500 group-hover:text-white">
                <Icon name={area.icon} />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-ink-900">{area.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500">{area.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
