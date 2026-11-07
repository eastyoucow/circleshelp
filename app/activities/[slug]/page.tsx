import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaGallery } from "@/components/media-gallery";
import {
  activities,
  formatAmd,
  getActivity,
} from "@/content/activities";
import { site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) return {};

  const cover = activity.media.find((item) => item.type === "image");

  return {
    title: activity.title,
    description:
      activity.summary ??
      `${activity.title} — Circles Help raised ${formatAmd(activity.amountAmd)}.`,
    openGraph: {
      title: `${activity.title} · ${site.name}`,
      description: activity.summary,
      images: cover ? [{ url: cover.src }] : undefined,
    },
  };
}

export default async function ActivityPage({ params }: PageProps) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) notFound();

  const cover = activity.media.find((item) => item.type === "image");

  return (
    <article className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#activities"
          className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          ← All activities
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {activity.monthLabel}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
          {activity.emoji ? `${activity.emoji} ` : ""}
          {activity.title}
        </h1>
        <p className="mt-4 text-lg font-semibold text-accent md:text-xl">
          Raised {formatAmd(activity.amountAmd)}
        </p>

        {cover ? (
          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[2rem] bg-black/5">
            <Image
              src={cover.src}
              alt={cover.alt ?? activity.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        ) : null}

        <div className="mt-10 space-y-4 text-base leading-relaxed text-muted md:text-lg">
          {activity.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {activity.links && activity.links.length > 0 ? (
          <ul className="mt-8 flex flex-wrap gap-3">
            {activity.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-border bg-elevated px-4 py-2 text-sm font-semibold text-accent transition hover:border-accent/40"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        {activity.media.length > 1 ||
        (activity.media.length === 1 && !cover) ? (
          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Photos
            </h2>
            <MediaGallery
              className="mt-5"
              media={
                cover
                  ? activity.media.filter((item) => item.src !== cover.src)
                  : activity.media
              }
            />
          </div>
        ) : null}

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/#month"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition hover:brightness-110"
          >
            See this month&apos;s campaign
          </Link>
          <Link
            href="/#activities"
            className="rounded-full border border-border bg-elevated px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/35"
          >
            Back to activities
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted">
          This activity is finished. Donations now support the current monthly
          campaign.
        </p>
      </div>
    </article>
  );
}
