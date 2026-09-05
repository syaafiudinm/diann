import { education } from "../data";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="pendidikan" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 size-96 rounded-full bg-blush-50 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pendidikan"
          title="Landasan akademik di kesehatan masyarakat."
          description="Ditempuh di Fakultas Kesehatan Masyarakat Universitas Hasanuddin dengan peminatan Epidemiologi."
        />

        <div className="mt-12 space-y-6">
          {education.map((item) => (
            <Reveal
              key={item.school}
              className="group relative overflow-hidden rounded-3xl border border-blush-100 bg-blush-50/50 p-8 transition-all duration-500 hover:border-blush-200 hover:bg-white hover:shadow-2xl hover:shadow-blush-100"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-blush-500 shadow-sm shadow-blush-100">
                    <Icon name="cap" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink-900">{item.school}</h3>
                    <p className="mt-1 text-sm text-ink-500">{item.degree}</p>
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-blush-500 px-3.5 py-1.5 text-[12px] font-semibold text-white">
                      {item.gpa}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-blush-200 bg-white px-4 py-2 text-[12px] font-medium text-blush-600">
                  {item.period}
                </span>
              </div>

              <div className="mt-8 border-t border-blush-100 pt-6">
                <p className="text-[12px] font-semibold tracking-[0.15em] text-ink-500 uppercase">Mata Kuliah Relevan</p>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {item.courses.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-[13.5px] text-ink-700 shadow-sm shadow-blush-100/60"
                    >
                      <Icon name="check" className="size-4 shrink-0 text-blush-400" strokeWidth={2.2} />
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
