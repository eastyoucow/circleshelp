import Image from "next/image";
import { monthActivity } from "@/content/site";

export function MonthSection() {
  return (
    <section id="month" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-black/5 md:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={monthActivity.image}
            alt={monthActivity.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Activity of the month
          </p>
          <p className="mt-3 text-sm font-medium text-muted">
            {monthActivity.monthLabel}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            {monthActivity.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            {monthActivity.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a
            href="#donate"
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition hover:brightness-110"
          >
            Support this month
          </a>
        </div>
      </div>
    </section>
  );
}
