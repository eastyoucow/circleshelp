import Link from "next/link";
import Image from "next/image";
import { activities, formatAmd } from "@/content/activities";

export function ActivitiesSection() {
  return (
    <section id="activities" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Completed activities
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Where the funds went
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Each finished initiative has a short story and photos from the work we
          supported.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => {
            const cover = activity.media.find((item) => item.type === "image");
            return (
              <li key={activity.slug}>
                <Link
                  href={`/activities/${activity.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-elevated/80 transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-black/5">
                    {cover ? (
                      <Image
                        src={cover.src}
                        alt={cover.alt ?? activity.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {activity.monthLabel}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                      {activity.emoji ? `${activity.emoji} ` : ""}
                      {activity.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {activity.summary}
                    </p>
                    <p className="mt-auto pt-4 text-sm font-semibold text-accent">
                      Raised {formatAmd(activity.amountAmd)}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
