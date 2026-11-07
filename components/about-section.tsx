import { CopyTextButton } from "@/components/copy-text-button";
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
                  {"links" in step && step.links ? (
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      {step.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          {...(link.href.startsWith("http")
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                          className="font-semibold text-accent underline-offset-4 hover:underline"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          <CopyTextButton
            text={site.stravaTemplate}
            label="Copy Strava description"
            className="mt-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Strava description template
              </p>
              <pre className="mt-3 whitespace-pre-wrap font-body text-sm leading-relaxed text-foreground">
                {site.stravaTemplate}
              </pre>
            </div>
          </CopyTextButton>
        </div>
      </div>
    </section>
  );
}
