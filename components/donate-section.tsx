import { site } from "@/content/site";
import { CopyCardButton } from "@/components/copy-card-button";

export function DonateSection() {
  return (
    <section id="donate" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          How to support
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Donate to the current campaign
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          All funds received go to the announced monthly initiative. Use the
          bank form or transfer directly to our card.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-4">
          <a
            href={site.donateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-4 text-base font-semibold text-accent-fg transition hover:brightness-110"
          >
            Open bank donation form
          </a>
          <CopyCardButton cardNumber={site.cardNumber} />
        </div>

        <p className="mt-6 text-sm text-muted">
          Prefer to join first?{" "}
          <a
            href={site.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            Enter the Telegram group
          </a>
        </p>
      </div>
    </section>
  );
}
