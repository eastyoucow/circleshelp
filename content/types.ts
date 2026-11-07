export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export type ActivityLink = {
  label: string;
  href: string;
};

export type Activity = {
  slug: string;
  title: string;
  amountAmd: number;
  emoji?: string;
  summary?: string;
  body: string[];
  links?: ActivityLink[];
  media: MediaItem[];
  monthLabel?: string;
};

export type MonthActivity = {
  title: string;
  monthLabel: string;
  image: string;
  body: string[];
};
