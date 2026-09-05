import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-blush-500 uppercase">
          <span className="h-px w-8 bg-blush-300" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-ink-900 sm:text-4xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
