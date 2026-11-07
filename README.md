# Circles Help

Static Next.js landing site for the Circles Help charity running community in Armenia.

Content is a one-time snapshot from the [Notion page](https://circles-help.notion.site/Run-for-good-with-Circles-Help-3b1cdc81751280cea301ea133522ca37) (text in `content/`, photos in `public/`).

## Stack

- Next.js 15 (App Router, SSG)
- React 19
- TypeScript
- Tailwind CSS 3

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Updating content

1. Edit copy in [`content/site.ts`](content/site.ts) and [`content/activities.ts`](content/activities.ts).
2. Add photos/videos under `public/activities/<slug>/`.
3. For media, use `{ type: "image" | "video", src, alt? }` on each activity — videos are supported by the gallery even if none are shipped yet.
4. Commit and push; Vercel rebuilds automatically.

## Deploy on Vercel

1. Push this repo to GitHub (`eastyoucow/circleshelp`).
2. In [Vercel](https://vercel.com): **Add New Project** → import the `circleshelp` repository.
3. Framework Preset: **Next.js**
   - Root Directory: `.`
   - Build Command: `npm run build`
   - Output: leave default (no static-export `out/` folder)
4. Assign the domain `circleshelp.vercel.app` (or connect the existing Vercel project that already owns that hostname).
5. Deploy. Every push to `main` triggers a new production build.

No environment variables are required for v1.
