import type { MonthActivity } from "./types";

export const site = {
  name: "Circles Help",
  tagline: "Run for good",
  description:
    "A running community that raises funds every month for charities across Armenia. Join a Thursday run, donate, and do good together.",
  url: "https://circleshelp.vercel.app",
  telegramUrl: "https://t.me/+j2yWQ6wA2vc3OGIy",
  donateUrl:
    "https://payments.evoca.am/en/redirect/06B9FD02-032D-4956-A0A3-A2ED9352C409?v3=1660078599694900&a=0",
  cardNumber: "4150960012529306",
  heroImage: "/hero/cover.png",
  strava: [
    {
      name: "Evgeny Istyukov",
      shortName: "Zhenya",
      href: "https://strava.app.link/AL1w2vdVk4b",
    },
    {
      name: "Serge Alhlebinin",
      shortName: "Serzh",
      href: "https://strava.app.link/3DSZO5swl4b",
    },
  ],
  stravaTemplate: `My run just raised 1,000 AMD for a good cause 🏃 ❤️

Your next run can do the same
More info: https://lc.cx/circles-help

Run with Circles Help 🙆 ❤️ 🙆 ❤️ 🙆`,
  about: [
    "Circles Help is a community of runners who turn weekly training into monthly support for people, animals, and local projects across Armenia.",
    "Each month we pick one initiative. You can join by running on Thursday, mentioning the campaign and tagging Zhenya and/or Serzh on Strava — or by sending a short support video to our Telegram group.",
    "You can also support financially. We have a dedicated bank card for donations; every dram goes to the announced campaign. When an initiative ends, we publish results and a report in the group.",
  ],
  howToJoin: [
    {
      title: "Run on Thursday",
      detail: "Anywhere, with anyone — solo or with friends.",
    },
    {
      title: "Tag Zhenya and/or Serzh on Strava",
      detail:
        "Mention Circles Help in your activity and use our description template.",
      links: [
        {
          label: "Zhenya on Strava",
          href: "https://strava.app.link/AL1w2vdVk4b",
        },
        {
          label: "Serzh on Strava",
          href: "https://strava.app.link/3DSZO5swl4b",
        },
      ],
    },
    {
      title: "Share a support video",
      detail:
        "Send a short video about the initiative to the Circles Help Telegram group.",
      links: [
        {
          label: "Join Telegram group",
          href: "https://t.me/+j2yWQ6wA2vc3OGIy",
        },
      ],
    },
    {
      title: "Donate if you can",
      detail:
        "Use the Evoca form or transfer to our card. All funds support the current campaign.",
      links: [{ label: "Go to donate", href: "/#donate" }],
    },
  ],
} as const;

export const monthActivity: MonthActivity = {
  title: "New Year gifts for children in border villages",
  monthLabel: "November & December 2026",
  image: "/activities/month/new-year.jpg",
  body: [
    "This November and December, Circles Help is raising funds to bring New Year gifts and holiday cheer to children in Armenia’s border villages.",
    "Together with Yerevan Run, we’re also planning a charity swap to support the initiative.",
    "Join us by running, donating, volunteering, or sharing your ideas and contacts. Every contribution helps make someone’s New Year a little brighter.",
  ],
};
