import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-accent">
          <a href={site.telegramUrl} target="_blank" rel="noreferrer">
            Telegram
          </a>
          {site.strava.map((person) => (
            <a
              key={person.href}
              href={person.href}
              target="_blank"
              rel="noreferrer"
            >
              Strava · {person.shortName}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
