import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
      <Image
        src={site.heroImage}
        alt="Circles Help runners supporting charity initiatives in Armenia"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-scrim)" }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <div className="max-w-3xl rounded-[1.75rem] bg-black/20 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-[1px] md:p-8">
          <p className="hero-text-shadow animate-soft-rise font-display text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {site.name}
          </p>
          <h1 className="hero-text-shadow animate-fade-up delay-1 mt-4 max-w-2xl font-display text-2xl font-semibold leading-snug text-white md:text-4xl">
            Turn your Thursday run into help for Armenia
          </h1>
          <p className="hero-text-shadow-soft animate-fade-up delay-2 mt-4 max-w-xl text-base font-medium leading-relaxed text-white md:text-lg">
            {site.description}
          </p>
          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#donate"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg shadow-lg shadow-black/45 transition hover:brightness-110"
            >
              Donate now
            </a>
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/60 bg-black/55 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/35 backdrop-blur-sm transition hover:bg-black/70"
            >
              Join Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
