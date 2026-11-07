import { site } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            About us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Let&apos;s do good together
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            How to join
          </p>
          <ol className="mt-5 space-y-5">
            {site.howToJoin.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-fg">
                  {index + 1}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted md:text-base">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border border-border bg-elevated/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Strava description template
            </p>
            <pre className="mt-3 whitespace-pre-wrap font-body text-sm leading-relaxed text-foreground">
              {site.stravaTemplate}
            </pre>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {site.strava.map((person) => (
                <a
                  key={person.href}
                  href={person.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Tag {person.shortName}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
